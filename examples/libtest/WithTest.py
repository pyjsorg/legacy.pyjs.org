import UnitTest

class WithTest(UnitTest.UnitTest):
    class Dummy(object):
        def __init__(self, value=None, gobble=False):
            if value is None:
                value = self
            self.value = value
            self.gobble = gobble
            self.enter_called = False
            self.exit_called = False

        def __enter__(self):
            self.enter_called = True
            return self.value

        def __exit__(self, *exc_info):
            self.exit_called = True
            self.exc_info = exc_info
            if self.gobble:
                return True
    
    def testSimple(self):
        with self.Dummy():
            pass
        
        with self.Dummy() as v:
            pass
            
        d = self.Dummy()
        with d:
            pass
        self.assertTrue(d.enter_called)
        self.assertTrue(d.exit_called)
        
        z = None
        with self.Dummy(10) as v:
            z = v
        self.assertEqual(z, 10)
        
        self.fail("Bug #XXX - With statement fails for unknown reason")
        return

        d = self.Dummy(gobble=True) # Fails for unknown reason
        with d:
            raise Exception()
        self.assertEqual(type(d.exc_info[1]), Exception)
        
    def testNested(self):
        l = None
        with self.Dummy(1) as v1, self.Dummy(2) as v2, self.Dummy(3) as v3:
            l = [v1, v2, v3]
        self.assertEqual(l, [1,2,3])
        
        l = None
        with self.Dummy(1) as v1:
            l = []
            l.append(v1)
            with self.Dummy(2) as v2:
                 l.append(v2)
                 with self.Dummy(3) as v3:
                     l.append(v3)
        self.assertEqual(l, [1,2,3])
        
    def testComplexAssign(self):
        d = {1: [0, 1, 2]}
        with self.Dummy('z') as d[1]:
            self.assertEqual(d, {1:'z'})
            
        d = {1: [0, 1, 2]}
        with self.Dummy('z') as d[1][0]:
            self.assertEqual(d[1][0], 'z')
            self.assertEqual(d, {1: ['z', 1, 2]})
        
        d = {1: [0, 1, 2]}
        with self.Dummy('z') as d.values()[0][1]:
            self.assertEqual(d, {1: [0, 'z', 2]})
        
        d = {1: [0, 1, 2]}
        with self.Dummy(['a', 'b', 'c']) as (d[1][0], d[1][1], d[1][2]):
            self.assertEqual(d, {1: ['a', 'b', 'c']})
        
        d = {1: [0, 1, 2]}
        with self.Dummy(['a', 'b', 'c']) as (d[1], d[2], d[3]):
            self.assertEqual(d, {1:'a', 2:'b', 3:'c'})
        
        
    def testFlowControl(self):
        # Hard to make work correctly!
        # Should walk ast and track them
        """
        def return_stmt():
            for i in range(10):
                with self.Dummy():
                    if i == 2:
                        return i
        
        self.assertEqual(return_stmt(), 2)
        
        def break_stmt():
            x = 0
            for i in range(10):
                with self.Dummy():
                    x = i
                    if i == 2:
                        break
            return x
        
        self.assertEqual(break_stmt(), 2)

        def continue_stmt():
            x = 0
            for i in range(10):
                x += 1
                with self.Dummy():
                    continue
                x += 100
            return x
        
        self.assertEqual(continue_stmt(), 10)
        """
        