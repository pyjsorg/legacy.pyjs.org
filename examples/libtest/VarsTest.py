import UnitTest
import foo
import foo as myfoo
from foo import foo_value as myfoo_value, get_foo_value as myget_foo_value

module_global_x = 1

data = []
data.append(5)
data.append(6)

data_test = cmp(data, [1,2,3])

def changeme(lst):
    lst[0] = 5

def import_sys():
    global sys
    import sys

# setting the bases as a GetAttr expression here is by intent to test
# GetAttr nodes in Class bases
class VarsTest(UnitTest.UnitTest):

    def testGlobalListData(self):
        self.assertTrue(cmp(data, [1,2,3]), "global list should be [1,2,3]")
        self.assertTrue(data_test, "global test of list should be True")

    def testChangeUsingTopLevelFunction(self):
        l = [1,2,3]
        changeme(l)
        self.assertEqual(l[0], 5)

    def testChangeVarInInnerScope(self):
        x = 5
        if x == 1:
            x = 2
        elif x == 5:
            x = 3
        self.assertEqual(x, 3, "the value of x should be 3")

    def testGlobalVars(self):
        self.assertEqual(module_global_x, 1)

    def testImports(self):
        self.failUnless(UnitTest.UnitTest())

    def testLocalVar(self):
        VarsTest = 1
        self.assertEqual(VarsTest, 1)

    def testUnpack(self):
        l = [1, 2]
        x, y = l
        self.assertEqual(x, 1)
        self.assertEqual(y, 2)
        
        x = ((1, 2), 3, (4, 5))
        (a, b), c, (d, e) = x
        self.assertEqual(a, 1)
        self.assertEqual([a, b, c, d, e], [1,2,3,4,5])

        x = (1, (2, (3, (4, 5), 6), 7), 8, (9, 10))
        a1, (b1, (c1, (d1, d2), c2), b2), a2, a3 = x
        self.assertEqual(d1, 4)
        self.assertEqual([a1, b1, c1, d1, d2, c2, b2, a2, a3], [1, 2, 3, 4, 5, 6, 7, 8, (9, 10)])
        #a1, (b1, (c1, *c2), b2), a2, a3 = x # Py3 syntax
        
        class X(object):
            pass
        
        x = X()        
        x.a = 1
        d = {}
        l = [1,3,4]
        l[1:2], x.a, d['zz'] = ((10, 11), 20, 30)
        self.assertEqual(l, [1, 10, 11, 4])
        self.assertEqual(x.a, 20)
        self.assertEqual(d, {'zz': 30})
        
        [a,b,c] = [1,2,3]
        self.assertEqual([a,b,c], [1,2,3])
        [a,b,c] = 4,5,6
        self.assertEqual([a,b,c], [4,5,6])
        
        # XXX: Parser fails on this!
        """ 
        a,b,c = {1,2,3}
        """
        a,b,c = set([7,8,9])
        self.assertEqual(set([a,b,c]), set([7,8,9])) # NO ORDERING in sets

    def testUnpackInLoop(self):
        l = [[1, 2],[1, 2]]
        for xxx, yyy in l:
            self.assertEqual(xxx, 1)
            self.assertEqual(yyy, 2)

    def testImportedNamespace(self):
        b = foo.Bar()
        self.assertEqual(b.X, 1) # declared instance works
        self.assertEqual(foo.Bar.X, 1) # XXX due to __Bar, this fails.  hmmm...
        self.assertEqual(foo.bar.X, 1)

    def testImport(self):
        global sys
        a0 = foo.foo_value
        a1 = 2
        self.assertEqual(myfoo_value, a0)
        self.assertEqual(myget_foo_value(), a0)
        myfoo.foo_value = a1
        self.assertEqual(myfoo_value, a0)
        self.assertEqual(myget_foo_value(), a1)
        import_sys()
        try:
            self.assertEqual(sys.__name__, 'sys')
        except:
            self.fail("Global module sys not available (bug #216)")

    def testGlobalsBltin(self):
        globs = globals()
        globkeys = globs.keys()
        globkeys2 = filter(lambda x: not x.startswith('__'), globkeys)
        if 'sys' in globkeys2:
            globkeys2.remove('sys') # `global sys` in cpython does not make
                                    #   it appear in globals()
        self.assertEqual(set(globkeys2), 
                         set(['changeme', 'foo', 'myfoo_value', 'data',
                              'UnitTest', 'import_sys', 'VarsTest', 'data_test',
                              'module_global_x', 'myget_foo_value', 'myfoo',
                             ]))
                              
        self.assertEqual(globs['__name__'], __name__)
        
        try:
            globals()['new_global_via_dict'] = 1
            self.assertEqual(globals()['new_global_via_dict'], 1)
        except:
            self.fail("Assigning to globals() does not work, #590")

    def testDiscardNames(self):
        try:
            someundefinedvariable1234
        except NameError:
            pass
        else:
            self.fail("Discarded names should trigger NameError if undefined, bug #584")
        
        class X(object):
            pass
            
        x = X()
        try:
            x.a
        except AttributeError:
            pass
        else:
            self.fail("Discarded getattr should trigger AttributeError if undefined, bug #584")
   
    def testAugmentedAssignments(self):
        a = a0 = 100
        self.assertTrue(a is a0)
        a += 1
        self.assertFalse(a is a0)
        self.assertEqual(a, 101)
        
        a -= 1
        self.assertEqual(a, 100)
        
        a *= 2
        self.assertEqual(a, 200)
        
        a /= 3
        self.assertEqual(a, 66)
        
        a //= 60
        self.assertEqual(a, 1)
        
        a = 15
        a %= 10
        self.assertEqual(a, 5)
        
        a **= 2
        self.assertEqual(a, 25)
        
        a >>= 2
        self.assertEqual(a, 6)
        
        a <<= 2
        self.assertEqual(a, 24)
        
        a &= 16
        self.assertEqual(a, 16)
        
        a ^= 8
        self.assertEqual(a, 24)
        
        a |= 32
        self.assertEqual(a, 56)
        
        
