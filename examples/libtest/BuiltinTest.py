from UnitTest import UnitTest, PY27_BEHAVIOUR

try:
    builtin_value = builtin.value
except:
    builtin_value = None
if False:
    import builtin
import builtin

from imports.cls import CLS
from imports.cls1 import CLS as CLS1


def other(**kwargs):
    return kwargs

def foo(_some, _long, _list, _of, _arguments):
     _additional = 5
     return other(**locals())

class ColourThing(object):
     def rgb():
         def fset(self, rgb):
             self.r, self.g, self.b = rgb
         def fget(self):
             return (self.r, self.g, self.b)
         return property(**locals())

class C(object):
    @property
    def x(self):
        return [1,2,3]

class Foo:
    pass

class LocalsTest:
    def __init__(self):
        pass

    def testargs(self, test1, test2):
        return locals()

    def testkwargs(self, test1=None, test2=None):
        return locals()

class BuiltinTest(UnitTest):

    def testMinMax(self):
        self.assertEqual(max(1,2,3,4), 4)
        self.assertEqual(min(1,2,3,4), 1)
        self.assertEqual(max([1,2,3,4]), 4)
        self.assertEqual(min([1,2,3,4]), 1)
        self.assertTrue(max([5,3,4],[6,1,2]) == [6,1,2] , "max([5,3,4],[6,1,2])")
        self.assertTrue(min([5,3,4],[6,1,2]) == [5,3,4] , "min([5,3,4],[6,1,2])")

    def testIterProperty(self):
        o = C()
        tst = []
        for y in iter(o.x):
            tst.append(y)
        self.assertTrue(tst, [1,2,3])
        tst = []
        try:
            for y in o.x:
                tst.append(y)
            self.assertTrue(tst, [1,2,3])
        except:
            self.fail("#490 - no function iter.__iter__ not a function")


    def testInt(self):
        self.assertEqual(int("5"), 5)
        self.assertEqual(int("09"), 9)
        self.assertEqual(6, 6)
        self.assertEqual(int("0"), 0)
        self.assertEqual(int(0), 0)
        self.assertEqual(int("-1"), -1)
        self.assertEqual(int("- 2"), -2)
        self.assertEqual(int(" - 3"), -3)

        try:
            int('')
            self.fail("No int() argument error raised: int('')")
        except ValueError, e:
            self.assertEqual(e[0], "invalid literal for int() with base 10: ''")

        try:
            int(' ')
            self.fail("No int() argument error raised: int(' ')")
        except ValueError, e:
            self.assertEqual(e[0], "invalid literal for int() with base 10: ''")

        try:
            int('not int')
            self.fail("No int() argument error raised: int('not-int')")
        except ValueError, e:
            self.assertEqual(e[0], "invalid literal for int() with base 10: 'not int'")

        try:
            int(1, 10)
            self.fail("No int() argument error raised: int(1, 10)")
        except TypeError, e:
            self.assertEqual(e[0], "int() can't convert non-string with explicit base")

        try:
            int('10px')
            self.fail("No int() argument error raised: int('10px')")
        except ValueError, e:
            self.assertEqual(e[0], "invalid literal for int() with base 10: '10px'")

    def testFloat(self):
        self.assertEqual(float("5.1"), 5.1)
        self.assertEqual(float("09"), 9)
        self.assertEqual(6.1, 6.1)
        self.assertEqual(float("0"), 0)
        self.assertEqual(float(0), 0)

        try:
            float('not float')
            self.fail("No float('not float') argument error raised")
        except ValueError, e:
            self.assertIn(e[0], [
                "invalid literal for float(): not float", # <= 2.6
                "could not convert string to float: not float", # 2.7
            ])

        try:
            float('')
            self.fail("No float('') argument error raised")
        except ValueError, e:
            self.assertIn(e[0], [
                "empty string for float()", # <= 2.6
                "could not convert string to float: ", # 2.7
            ])

        try:
            float(' ')
            self.fail("No float(' ') argument error raised")
        except ValueError, e:
            self.assertIn(e[0], [
                "empty string for float()", # <= 2.6
                "could not convert string to float: ", # 2.7
            ])

        self.assertTrue(isinstance(1.0, float), "1.0 should be instance of float")

    def testOrdChr(self):
        for i in range(256):
            self.assertEqual(ord(chr(i)), i)

    def testMod(self):
        self.assertEqual(12 % 5, 2)
        self.assertEqual(-0.4 % 1, 0.6, "Modulo error 1 for negative base, bug #473")
        self.assertEqual(-0.3 % 1.0, 0.7)
        self.assertEqual(-1 % 2, 1)
        self.assertEqual(-1 % -2, -1)
        self.assertEqual(-1 % 3L, 2L)
        self.assertEqual(-2 % -3L, -2L)
        self.assertEqual(-1L % 4, 3L)
        self.assertEqual(-3L % -4, -3L)
        self.assertEqual(-1L % 5L, 4L)
        self.assertEqual(-4L % -5L, -4L)
        self.assertEqual(-1.0 % 6, 5.0)
        self.assertEqual(-5.0 % -6, -5.0)

    def testPower(self):
        self.assertEqual(3 ** 4, 81)

    def testPowerfunc(self):
        self.assertEqual(pow(10, 3), 1000)
        self.assertEqual(pow(10, 3, 7), 6)

    def testHex(self):
        self.assertEqual(hex(23), '0x17')
        try:
            h = hex(23.2)
            self.fail("No hex() argument error raised")
        except TypeError, why:
            self.assertEqual(why.args[0], "hex() argument can't be converted to hex")

    def testOct(self):
        self.assertEqual(oct(23), '027')
        try:
            o = oct(23.2)
            self.fail("No oct() argument error raised")
        except TypeError, why:
            self.assertEqual(str(why), "oct() argument can't be converted to oct")

    def testRound(self):
        self.assertEqual(round(13.12345), 13.0)
        self.assertEqual(round(13.12345, 3), 13.123)
        self.assertEqual(round(-13.12345), -13.0)
        self.assertEqual(round(-13.12345, 3), -13.123)
        self.assertEqual(round(13.62345), 14.0)
        self.assertEqual(round(13.62345, 3), 13.623)
        self.assertEqual(round(-13.62345), -14.0)
        self.assertEqual(round(-13.62345, 3), -13.623)

    def testDivmod(self):
        test_set = [(14, 3, 4, 2),
                    (14.1, 3, 4.0, 2.1),
                    (14.1, 3.1, 4.0, 1.7),
                   ]
        for x, y, p, q in test_set:
            d = divmod(x,y)
            self.assertEqual(d[0], p)
            self.assertEqual(abs(d[1] - q) < 0.00001, True)

    def testFloorDiv(self):
        self.assertEqual(1, 4//3)
        self.assertEqual(1, 5//3)
        self.assertEqual(2, 6//3)

    def testAll(self):
        self.assertEqual(all([True, 1, 'a']), True)
        self.assertEqual(all([True, 1, None, 'a']), False)
        self.assertEqual(all([True, 1, '', 'a']), False)
        self.assertEqual(all([True, 1, False, 'a']), False)

    def testAny(self):
        self.assertEqual(any([True, 1, 'a']), True)
        self.assertEqual(any([True, 1, None, 'a']), True)
        self.assertEqual(any([True, 1, '', 'a']), True)
        self.assertEqual(any([True, 1, False, 'a']), True)
        self.assertEqual(any([False, '', None]), False)

    def testRepr(self):
        l1 = [1,2,3]
        l2 = ["a", "b", "c"]
        t1 = (4,5,6,7)
        t2 = ("aa", "bb")
        d1 = {'a': 1, "b": "B"}
        d2 = {1: l1, 2: l2, 3: t1, 4: t2, 5:d1}
        i1 = 10000
        f1 = 1.5
        self.assertEqual(repr(l1), '[1, 2, 3]')
        self.assertEqual(l1.__repr__(), '[1, 2, 3]')
        self.assertEqual(repr(l2), "['a', 'b', 'c']")
        self.assertEqual(repr(t1), '(4, 5, 6, 7)')
        self.assertEqual(repr(t2), "('aa', 'bb')")
        self.assertEqual(repr(d1), "{'a': 1, 'b': 'B'}")
        self.assertEqual(repr(d2), "{1: [1, 2, 3], 2: ['a', 'b', 'c'], 3: (4, 5, 6, 7), 4: ('aa', 'bb'), 5: {'a': 1, 'b': 'B'}}")
        self.assertEqual(d2.__repr__(), "{1: [1, 2, 3], 2: ['a', 'b', 'c'], 3: (4, 5, 6, 7), 4: ('aa', 'bb'), 5: {'a': 1, 'b': 'B'}}")
        self.assertEqual(repr(i1), '10000')
        self.assertEqual(i1.__repr__(), '10000')
        self.assertEqual(repr(f1), '1.5')
        self.assertEqual(f1.__repr__(), '1.5', 'float.__repr__() returns type instead of value, bug #487')
        self.assertEqual(`l1`, '[1, 2, 3]')

    def testIsInstance(self):

        s = 'hello'
        self.assertTrue(isinstance(s, str), "s is a string")
        self.assertFalse(isinstance(s, int), "s is a string not an integer")

        s = 1
        self.assertFalse(isinstance(s, str), "s is an integer not a string")
        self.assertTrue(isinstance(s, int), "s is an integer")

        self.assertFalse(isinstance('', list), "'' is not instance of list")
        self.assertTrue(isinstance([], list), "[] is an instance of list")

        class Cls(object):
            pass
        self.assertTrue(isinstance(Cls, type), "Bug #578 classes are instances of type")

    def testImport(self):
        self.assertEqual(builtin_value, None, "The builtin is loaded before import!")
        try:
            self.assertEqual(builtin.value, builtin.get_value())
        except:
            self.fail("Import failed for builtin")

        from imports import overrideme
        cls1 = CLS1()
        self.assertTrue(CLS is CLS1, "CLS is CLS1")
        self.assertTrue(isinstance(cls1, CLS), "isinstance(cls1, CLS)")
        self.assertEqual(overrideme, "not overridden")
        import imports.override
        self.assertEqual(overrideme, "not overridden")
        from imports import overrideme
        try:
            self.assertTrue(overrideme.overridden is True, "overrideme.overridden is True")
        except:
            self.fail("Exception on 'overrideme.overridden is True'")

        import imports
        self.assertTrue(CLS is imports.loccls.CLS, "CLS is imports.loccls.CLS")
        self.assertTrue(CLS is imports.upcls.CLS, "CLS is imports.upcls.CLS")

    def testImport(self): 

        self.fail("Bug #XXX - from X import .. not completely implemented, only considering modules")
        return
        
        from imports import __doc__ as imports_doc
        self.assertEqual(imports.__doc__, imports_doc, "Module object must have __doc__ attribute")
        from imports import __name__ as imports_name
        self.assertEqual(imports.__name__, imports_name)

        # from ... import * tests, issue #615
        self.assertEqual(imports.all_masked, False, "from ... import * should respect __all__, #615")
        self.assertEqual(imports.all_override, True, "Should override globals, #615")
        self.assertEqual(imports.all_import1, 1)
        self.assertEqual(imports.all_import2, 3)
        self.assertEqual(imports.all_import3, 3)
        
        
        # import builtins module
        import __builtin__
        self.assertEqual(__builtin__.dict, dict, "__builtin__.dict != dict")
        
        from __builtin__ import dict as dict_bltin
        self.assertEqual(dict_bltin, dict, "__builtin__.dict != dict")


    def testBitOperations(self):
        self.assertEqual(1 << 2 - 1, 2, "shift error 1")
        self.assertEqual((1 << 2) - 1, 3, "shift error 2")
        self.assertEqual(1 & 3 + 1, 0, "and error 1")
        self.assertEqual((1 & 3) + 1, 2, "and error 2")
        self.assertEqual(4 >> 2, 1, "right shift error 1")
        self.assertEqual(-4 >> 2, -1, "right shift error 2 - bug #341")

    def testLocals(self):
        v1 = 1
        v2 = 2

        local_vars = locals()
        self.assertEqual(len(local_vars), 3)
        self.assertEqual(local_vars['v1'], 1)

        def fn1():
            a = 1
            def fn2():
                b = 1
                c = locals()
                return c
            return fn2()

        local_vars = fn1()
        self.assertEqual(local_vars, {'b': 1})

        def fn2():
            lx = 3
            def g():
                li = lx
                return locals()
            return g()
        self.assertEqual(fn2(), {'li':3, 'lx':3}, "locals() bugs: #589")

        def fn3():
            lx = 3
            def g():
                def lh():
                    li = lx
                    return locals()
                return locals(), lh()
            return g()
        outer_locals, inner_locals = fn3()
        self.assertEqual(inner_locals, {'li':3, 'lx':3}, "locals() bugs: #589")
        keys = outer_locals.keys()
        keys.sort()
        self.assertEqual(keys, ['lh', 'lx'], "locals() bugs: #589")

        def fn4(x):
            class X:
                x = 12
                def fn4(self):
                    return x
                locals()
            return X
        self.assertEqual(fn4(1).x, 12)

        args = {'test1': 5, 'test2': 'hello'}
        la = LocalsTest()
        argsreturn = la.testkwargs(**args)
        args['self'] = la
        self.assertEqual(args, argsreturn)

        del args['self']
        argsreturn = la.testargs(**args)
        args['self'] = la
        self.assertEqual(args, argsreturn)

        t = ColourThing()
        t.rgb = 1
        self.assertEqual(t.rgb, 1)

        args = foo(0, 1, 2, 3, 4)
        self.assertEqual(args, {'_some': 0, '_additional': 5,
                                '_of': 3, '_list': 2,
                                '_long': 1, '_arguments': 4})

    def testIfExp(self):
        var = 1 if True else 0
        self.assertEqual(var, 1)
        var = 1 if False else 0
        self.assertEqual(var, 0)
        var = 1 if [] else 0
        self.assertEqual(var, 0)
        var = 1 if not [] else 0
        self.assertEqual(var, 1)

    def testRange(self):
        r = range(3)
        self.assertEqual(r, [0, 1, 2])
        r = range(2, 5)
        self.assertEqual(r, [2, 3, 4])
        r = range(2, 15, 3)
        self.assertEqual(r, [2, 5, 8, 11, 14])
        r = range(15, 2, -3)
        self.assertEqual(r, [15, 12, 9, 6, 3])
        r = range(15, 2, 3)
        self.assertEqual(r, [])
        r = range(-6, -2, -1)
        self.assertEqual(r, [])
        r = range(2, 1, 2)
        self.assertEqual(r, [])
        r = range(0, 2, 2)
        self.assertEqual(r, [0])

    def testXRange(self):
        r = [i for i in xrange(3)]
        self.assertEqual(r, [0, 1, 2])
        r = [i for i in xrange(2, 5)]
        self.assertEqual(r, [2, 3, 4])
        r = [i for i in xrange(2, 15, 3)]
        self.assertEqual(r, [2, 5, 8, 11, 14])
        r = [i for i in xrange(15, 2, -3)]
        self.assertEqual(r, [15, 12, 9, 6, 3])
        r = [i for i in xrange(15, 2, 3)]
        self.assertEqual(r, [])
        r = [i for i in xrange(-6, -2, -1)]
        self.assertEqual(r, [])
        self.assertEqual(str(xrange(3)), "xrange(3)")
        self.assertEqual(str(xrange(3,4)), "xrange(3, 4)")
        self.assertEqual(str(xrange(3,4,5)), "xrange(3, 8, 5)")
        self.assertEqual(str(xrange(14,3,-5)), "xrange(14, -1, -5)")

    def testForLoop(self):
        n1 = 0
        n2 = 0
        for i in range(10):
            n1 += i
            for i in xrange(4):
                n2 += i
        self.assertEqual(n1, 45)
        self.assertEqual(n2, 60)
        self.assertEqual(i, 3)

        try:
            for i in xrange(4):
                raise StopIteration
            self.fail("Failed to raise StopIteration")
        except StopIteration:
            self.assertTrue(True)
        self.assertEqual(i, 0)

        e = 0
        i = -1
        for i in range(1):
            pass
        else:
            e = 1
        self.assertEqual(i, 0)
        self.assertEqual(e, 1)

        e = 0
        i = -1
        for i in range(0):
            pass
        else:
            e = 1
        self.assertEqual(i, -1)
        self.assertEqual(e, 1, "bug #316 for X in Y:... else ...")

        e = 0
        i = -1
        for i in range(1):
            e = 1
            break
        else:
            e = 2
        self.assertEqual(i, 0)
        self.assertEqual(e, 1)
        
        class X(object):
            pass
        x = X()
        x.a = 1
        for x.a in [3,4,5]:
            pass
        self.assertEqual(x.a, 5)
                
        d = {}
        for d['zz'] in [1,2,3]:
            pass
        self.assertEqual(d, {'zz': 3})
        
        l = [1]
        for l[0] in [1,2,3]:
            pass
        self.assertEqual(l, [3])
        
        l = [1,3,4]
        for l[1:2] in [[5,6,7]]:
            pass
        self.assertEqual(l, [1, 5, 6, 7, 4])
        
        x = ((1, 2), 3, (4, 5))
        for (a, b), c, (d, e) in [x]*5:
            pass
        self.assertEqual([a, b, c, d, e], [1,2,3,4,5])
        
        for [[a, b], c, [d, e]] in [x]*5:
            pass
        self.assertEqual([a, b, c, d, e], [1,2,3,4,5])

    def testIter(self):

        class i:
            def __init__(self):
                self.idx = 0

            def __iter__(self):
                return self

            def next(self):
                self.idx += 1
                if self.idx == 5:
                    raise StopIteration
                return self.idx


        res = []
        try:
            for j in i():
                res.append(j)
                if len(res) > 5:
                    self.fail("too many items in user-defined iterator")
                    break
        except:
            self.fail("error in user-defined iterator (caught here so tests can proceed)")

        self.assertEqual(res, range(1,5))

    def testSorted(self):
        lst1 = range(10)
        lst2 = range(10)
        lst2.reverse()
        self.assertTrue(lst1 == sorted(lst2), "lst1 == sorted(lst2)")

        self.assertTrue(lst1 == sorted(xrange(10)), "lst1 == sorted(xrange(1))")
        self.assertTrue(lst2 == sorted(xrange(10), reverse=True), "lst2 == sorted(xrange(10), reverse=True)")

    def testReversed(self):
        lst1 = range(10)
        lst2 = range(10)
        lst2.reverse()
        tpl1 = tuple(lst1)
        self.assertTrue(lst1 == list(reversed(lst2)), "lst1 == reversed(lst2)")
        self.assertTrue(lst2 == list(reversed(xrange(10))), "lst2 == reversed(xrange(10), reverse=True)")
        self.assertTrue(lst2 == list(reversed(tpl1)), "lst1 == reversed(tpl1)")
        dict1 = {'a': 'A', 'b': 'B'}
        self.assertRaises(TypeError, reversed, dict1)

    def testType(self):
        try:
            self.assertTrue(type(object) is type)
        except NotImplementedError, why:
            self.fail("Bug #229" + str(why))
        self.assertTrue(type([]) is type([]))
        self.assertTrue(type([]) is list)
        try:
            self.assertTrue(type([]) == list)
        except:
            self.fail("Bug #515")
        self.assertTrue(type("") is str, "str")
        self.assertTrue(type(True) is bool, "bool")
        self.assertTrue(type(1) is int, "int")
        self.assertTrue(type(1L) is long, "long")
        self.assertTrue(type(1.1) is float, "float 1.1")
        self.assertTrue(type(1.0) is float, "float 1.0 issue #524")

    def testIter(self):
        class G(object):
            def __getitem__(self, i):
                if 0 <= i <= 4:
                    return i
                raise IndexError("index out of range")
        def fn():
            for i in [0,1,2,3,4]:
                yield i

        lst = [0,1,2,3,4]
        self.assertEqual(lst, list(iter(lst)), "iter(lst)")
        g = G()
        self.assertEqual(lst, list(iter(g)), "iter(g)")
        self.assertEqual(lst, list(iter(fn().next, 5)), "iter(fn().next, 5)")
        self.assertEqual([0,1], list(iter(fn().next, 2)), "iter(fn().next, 2)")

    def testReduce(self):
        v = reduce(lambda x, y: x+y, [1, 2, 3, 4, 5])
        self.assertEqual(v, 15)

    def testZip(self):
        lst1 = [0,1,2,3]
        lst2 = [10,11,12]
        dict1 = {'a': 'A', 'b': 'B'}
        v = zip(lst1)
        self.assertEqual(v, [(0,), (1,), (2,), (3,)])
        v = zip(lst1, lst2)
        self.assertEqual(v, [(0, 10), (1, 11), (2, 12)])
        v = zip(dict1)
        self.assertEqual(v, [('a',), ('b',)])
        v = zip(lst1, dict1, lst2)
        self.assertEqual(v, [(0, 'a', 10), (1, 'b', 11)])

    def testSum(self):
        self.assertEqual(6, sum([0,1,2,3]))
        self.assertEqual(5, sum([0,1,2,3], -1))
        self.assertRaises(TypeError, sum, [0,1,2,3], "a")

    def testSlice(self):
        # repr()
        self.assertEqual(repr(slice(1, 2, 3)), "slice(1, 2, 3)", "slice() is mis-used, issue #582")
        # cmp, partial
        s1 = slice(1, 2, 3)
        s2 = slice(1, 2, 3)
        s3 = slice(1, 2, 4)
        self.assertEqual(s1, s2)
        self.assertNotEqual(s1, s3, "slice() is mis-used, issue #582")
        # members
        s = slice(1)
        self.assertEqual(s.start, None)
        self.assertEqual(s.stop, 1)
        self.assertEqual(s.step, None)

        s = slice(1, 2)
        self.assertEqual(s.start, 1)
        self.assertEqual(s.stop, 2)
        self.assertEqual(s.step, None)

        s = slice(1, 2, 3)
        self.assertEqual(s.start, 1)
        self.assertEqual(s.stop, 2)
        self.assertEqual(s.step, 3)

        class AnyClass:
            pass

        obj = AnyClass()
        s = slice(obj)
        self.assertTrue(s.stop is obj)
        # indices
        self.assertEqual(slice(None           ).indices(10), (0, 10,  1))
        self.assertEqual(slice(None,  None,  2).indices(10), (0, 10,  2))
        self.assertEqual(slice(1,     None,  2).indices(10), (1, 10,  2))
        self.assertEqual(slice(None,  None, -1).indices(10), (9, -1, -1))
        self.assertEqual(slice(None,  None, -2).indices(10), (9, -1, -2))
        self.assertEqual(slice(3,     None, -2).indices(10), (3, -1, -2))
        self.assertEqual(slice(None, -9).indices(10), (0, 1, 1))
        self.assertEqual(slice(None, -10).indices(10), (0, 0, 1))
        self.assertEqual(slice(None, -11).indices(10), (0, 0, 1))
        self.assertEqual(slice(None, -10, -1).indices(10), (9, 0, -1))
        self.assertEqual(slice(None, -11, -1).indices(10), (9, -1, -1))
        self.assertEqual(slice(None, -12, -1).indices(10), (9, -1, -1))
        self.assertEqual(slice(None, 9).indices(10), (0, 9, 1))
        self.assertEqual(slice(None, 10).indices(10), (0, 10, 1))
        self.assertEqual(slice(None, 11).indices(10), (0, 10, 1))
        self.assertEqual(slice(None, 8, -1).indices(10), (9, 8, -1))
        self.assertEqual(slice(None, 9, -1).indices(10), (9, 9, -1))
        self.assertEqual(slice(None, 10, -1).indices(10), (9, 9, -1))

        self.assertEqual(
            slice(-100,  100     ).indices(10),
            slice(None).indices(10)
        )
        self.assertEqual(
            slice(100,  -100,  -1).indices(10),
            slice(None, None, -1).indices(10)
        )
        self.assertEqual(slice(-100L, 100L, 2L).indices(10), (0, 10,  2))

    ### begin from CPython 2.7 Lib/test/test_str.py

    def test_format(self):
        self.assertEqual(''.format(), '')
        self.assertEqual('a'.format(), 'a')
        self.assertEqual('ab'.format(), 'ab')
        self.assertEqual('a{{'.format(), 'a{')
        self.assertEqual('a}}'.format(), 'a}')
        self.assertEqual('{{b'.format(), '{b')
        self.assertEqual('}}b'.format(), '}b')
        self.assertEqual('a{{b'.format(), 'a{b')
        # examples from the PEP:
        import datetime
        self.assertEqual("My name is {0}".format('Fred'), "My name is Fred")
        self.assertEqual("My name is {0[name]}".format(dict(name='Fred')),
                         "My name is Fred")
        self.assertEqual("My name is {0} :-{{}}".format('Fred'),
                         "My name is Fred :-{}")

        d = datetime.date(2007, 8, 18)
        self.assertEqual("The year is {0.year}".format(d),
                         "The year is 2007")

        # classes we'll use for testing
        class C:
            def __init__(self, x=100):
                self._x = x
            def __format__(self, spec):
                return spec

        class D:
            def __init__(self, x):
                self.x = x
            def __format__(self, spec):
                return str(self.x)

        # class with __str__, but no __format__
        class E:
            def __init__(self, x):
                self.x = x
            def __str__(self):
                return 'E(' + self.x + ')'

        # class with __repr__, but no __format__ or __str__
        class F:
            def __init__(self, x):
                self.x = x
            def __repr__(self):
                return 'F(' + self.x + ')'

        # class with __format__ that forwards to string, for some format_spec's
        class G:
            def __init__(self, x):
                self.x = x
            def __str__(self):
                return "string is " + self.x
            def __format__(self, format_spec):
                if format_spec == 'd':
                    return 'G(' + self.x + ')'
                return object.__format__(self, format_spec)
                    
        class Galt:
            def __init__(self, x):
                self.x = x
            def __str__(self):
                return "string is " + self.x
            def __format__(self, format_spec):
                if format_spec == 'd':
                    return 'G(' + self.x + ')'
                return format(str(self), format_spec)

        # class that returns a bad type from __format__
        class H:
            def __format__(self, format_spec):
                return 1.0

        class I(datetime.date):
            def __format__(self, format_spec):
                return self.strftime(format_spec)

        class J(int):
            def __format__(self, format_spec):
                return int.__format__(self * 2, format_spec)


        self.assertEqual(''.format(), '')
        self.assertEqual('abc'.format(), 'abc')
        self.assertEqual('{0}'.format('abc'), 'abc')
        self.assertEqual('{0:}'.format('abc'), 'abc')
        self.assertEqual('X{0}'.format('abc'), 'Xabc')
        self.assertEqual('{0}X'.format('abc'), 'abcX')
        self.assertEqual('X{0}Y'.format('abc'), 'XabcY')
        self.assertEqual('{1}'.format(1, 'abc'), 'abc')
        self.assertEqual('X{1}'.format(1, 'abc'), 'Xabc')
        self.assertEqual('{1}X'.format(1, 'abc'), 'abcX')
        self.assertEqual('X{1}Y'.format(1, 'abc'), 'XabcY')
        self.assertEqual('{0}'.format(-15), '-15')
        self.assertEqual('{0}{1}'.format(-15, 'abc'), '-15abc')
        self.assertEqual('{0}X{1}'.format(-15, 'abc'), '-15Xabc')
        self.assertEqual('{{'.format(), '{')
        self.assertEqual('}}'.format(), '}')
        self.assertEqual('{{}}'.format(), '{}')
        self.assertEqual('{{x}}'.format(), '{x}')
        self.assertEqual('{{{0}}}'.format(123), '{123}')
        self.assertEqual('{{{{0}}}}'.format(), '{{0}}')
        self.assertEqual('}}{{'.format(), '}{')
        self.assertEqual('}}x{{'.format(), '}x{')

        # weird field names
        self.assertEqual("{0[foo-bar]}".format({'foo-bar':'baz'}), 'baz')
        self.assertEqual("{0[foo bar]}".format({'foo bar':'baz'}), 'baz')
        self.assertEqual("{0[ ]}".format({' ':3}), '3')

        self.assertEqual('{foo._x}'.format(foo=C(20)), '20')
        self.assertEqual('{1}{0}'.format(D(10), D(20)), '2010')
        self.assertEqual('{0._x.x}'.format(C(D('abc'))), 'abc')
        self.assertEqual('{0[0]}'.format(['abc', 'def']), 'abc')
        self.assertEqual('{0[1]}'.format(['abc', 'def']), 'def')
        self.assertEqual('{0[1][0]}'.format(['abc', ['def']]), 'def')
        self.assertEqual('{0[1][0].x}'.format(['abc', [D('def')]]), 'def')

        # strings
        self.assertEqual('{0:.3s}'.format('abc'), 'abc')
        self.assertEqual('{0:.3s}'.format('ab'), 'ab')
        self.assertEqual('{0:.3s}'.format('abcdef'), 'abc')
        self.assertEqual('{0:.0s}'.format('abcdef'), '')
        self.assertEqual('{0:3.3s}'.format('abc'), 'abc')
        self.assertEqual('{0:2.3s}'.format('abc'), 'abc')
        self.assertEqual('{0:2.2s}'.format('abc'), 'ab')
        self.assertEqual('{0:3.2s}'.format('abc'), 'ab ')
        self.assertEqual('{0:x<0s}'.format('result'), 'result')
        self.assertEqual('{0:x<5s}'.format('result'), 'result')
        self.assertEqual('{0:x<6s}'.format('result'), 'result')
        self.assertEqual('{0:x<7s}'.format('result'), 'resultx')
        self.assertEqual('{0:x<8s}'.format('result'), 'resultxx')
        self.assertEqual('{0: <7s}'.format('result'), 'result ')
        self.assertEqual('{0:<7s}'.format('result'), 'result ')
        self.assertEqual('{0:>7s}'.format('result'), ' result')
        self.assertEqual('{0:>8s}'.format('result'), '  result')
        self.assertEqual('{0:^8s}'.format('result'), ' result ')
        self.assertEqual('{0:^9s}'.format('result'), ' result  ')
        self.assertEqual('{0:^10s}'.format('result'), '  result  ')
        self.assertEqual('{0:10000}'.format('a'), 'a' + ' ' * 9999)
        self.assertEqual('{0:10000}'.format(''), ' ' * 10000)
        self.assertEqual('{0:10000000}'.format(''), ' ' * 10000000)

        # format specifiers for user defined type
        self.assertEqual('{0:abc}'.format(C()), 'abc')

        # !r and !s coercions
        self.assertEqual('{0!s}'.format('Hello'), 'Hello')
        self.assertEqual('{0!s:}'.format('Hello'), 'Hello')
        self.assertEqual('{0!s:15}'.format('Hello'), 'Hello          ')
        self.assertEqual('{0!s:15s}'.format('Hello'), 'Hello          ')
        self.assertEqual('{0!r}'.format('Hello'), "'Hello'")
        self.assertEqual('{0!r:}'.format('Hello'), "'Hello'")
        self.assertEqual('{0!r}'.format(F('Hello')), 'F(Hello)')

        # test fallback to object.__format__
        self.assertEqual('{0}'.format({}), '{}')
        self.assertEqual('{0}'.format([]), '[]')
        self.assertEqual('{0}'.format([1]), '[1]')
        self.assertEqual('{0}'.format(E('data')), 'E(data)')
        self.assertEqual('{0:d}'.format(G('data')), 'G(data)')
        self.assertEqual('{0!s}'.format(G('dat1')), 'string is dat1')

        self.assertEqual('{0:^10}'.format(E('dat2')), ' E(dat2)  ')
        self.assertEqual('{0:^10s}'.format(E('dat3')), ' E(dat3)  ')
        self.assertEqual('{0:>15s}'.format(Galt('dat4')), ' string is dat4')
        # if Issue #674 is fixed the following should no longer throw an
        # exception (classified as known issue), then Galt can be changed to G and Galt removed
        try:
            self.assertEqual('{0:>15s}'.format(G('dat5')), ' string is dat5')
        except:
            self.fail("object.__format__ missing#674")


        self.assertEqual("{0:date: %Y-%m-%d}".format(
                                   I(year=2007, month=8, day=27)),
                         "date: 2007-08-27",
                         "Issue #673. datetime.date should have __format___")

        # test deriving from a builtin type and overriding __format__
        self.assertEqual("{0}".format(J(10)), "20",
                'Issue #670 derived from int/float/str not instance of object')


        # string format specifiers
        self.assertEqual('{0:}'.format('a'), 'a')

        # computed format specifiers
        self.assertEqual("{0:.{1}}".format('hello world', 5), 'hello')
        self.assertEqual("{0:.{1}s}".format('hello world', 5), 'hello')
        self.assertEqual("{0:.{precision}s}".format('hello world', precision=5), 'hello')
        self.assertEqual("{0:{width}.{precision}s}".format('hello world', width=10, precision=5), 'hello     ')
        self.assertEqual("{0:{width}.{precision}s}".format('hello world', width='10', precision='5'), 'hello     ')

        # test various errors
        self.format_raises(ValueError, '{')
        self.format_raises(ValueError, '}')
        self.format_raises(ValueError, 'a{')
        self.format_raises(ValueError, 'a}')
        self.format_raises(ValueError, '{a')
        self.format_raises(ValueError, '}a')
        self.format_raises(IndexError, '{0}')
        self.format_raises(IndexError, '{1}', 'abc')
        self.format_raises(KeyError,   '{x}')
        self.format_raises(ValueError, "}{")
        self.format_raises(ValueError, "{")
        self.format_raises(ValueError, "}")
        self.format_raises(ValueError, "abc{0:{}")
        self.format_raises(ValueError, "{0")
        self.format_raises(IndexError, "{0.}")
        self.format_raises(ValueError, "{0.}", 0)
        self.format_raises(IndexError, "{0[}")
        self.format_raises(ValueError, "{0[}", [])
        self.format_raises(KeyError,   "{0]}")
        self.format_raises(ValueError, "{0.[]}", 0)
        self.format_raises(ValueError, "{0..foo}", 0)
        self.format_raises(ValueError, "{0[0}", 0)
        self.format_raises(ValueError, "{0[0:foo}", 0)
        self.format_raises(KeyError,   "{c]}")
        self.format_raises(ValueError, "{{ {{{0}}", 0)
        self.format_raises(ValueError, "{0}}", 0)
        self.format_raises(KeyError,   "{foo}", bar=3)
        self.format_raises(ValueError, "{0!x}", 3)
        self.format_raises(ValueError, "{0!}", 0)
        self.format_raises(ValueError, "{0!rs}", 0)
        self.format_raises(ValueError, "{!}")
        self.format_raises(IndexError, "{:}")
        self.format_raises(IndexError, "{:s}")
        self.format_raises(IndexError, "{}")

        # issue 6089
        self.format_raises(ValueError, "{0[0]x}", [None])
        self.format_raises(ValueError, "{0[0](10)}", [None])

        # can't have a replacement on the field name portion
        # this is Issue 671: string & list indices must be integers, not str
        self.format_raises(TypeError, '{0[{1}]}', 'abcdefg', 4)

        # exceed maximum recursion depth
        self.format_raises(ValueError, "{0:{1:{2}}}", 'abc', 's', '')
        self.format_raises(ValueError, "{0:{1:{2:{3:{4:{5:{6}}}}}}}",
                          0, 1, 2, 3, 4, 5, 6, 7)

        # string format spec errors
        self.format_raises(ValueError, "{0:-s}", '')
        self.assertRaises(ValueError, format, "", "-")
        self.format_raises(ValueError, "{0:=s}", '')

    def test_format_auto_numbering(self):
        class C:
            def __init__(self, x=100):
                self._x = x
            def __format__(self, spec):
                return spec

        self.assertEqual('{}'.format(10), '10')
        self.assertEqual('{:5}'.format('s'), 's    ')
        self.assertEqual('{!r}'.format('s'), "'s'")
        self.assertEqual('{._x}'.format(C(10)), '10')
        self.assertEqual('{[1]}'.format([1, 2]), '2')
        self.assertEqual('{[a]}'.format({'a':4, 'b':2}), '4')
        self.assertEqual('a{}b{}c'.format(0, 1), 'a0b1c')

        self.assertEqual('a{:{}}b'.format('x', '^10'), 'a    x     b')
        self.assertEqual('a{:{}x}b'.format(20, '#'), 'a0x14b')

        # can't mix and match numbering and auto-numbering
        self.format_raises(ValueError, '{}{1}', 1, 2)
        self.format_raises(ValueError, '{1}{}', 1, 2)
        self.format_raises(ValueError, '{:{1}}', 1, 2)
        self.format_raises(ValueError, '{0:{}}', 1, 2)

        # can mix and match auto-numbering and named
        self.assertEqual('{f}{}'.format(4, f='test'), 'test4')
        self.assertEqual('{}{f}'.format(4, f='test'), '4test')
        self.assertEqual('{:{f}}{g}{}'.format(1, 3, g='g', f=2), ' 1g3')
        self.assertEqual('{f:{}}{}{g}'.format(2, 4, f=1, g='g'), ' 14g')

    # this function is needed as the following raises a TypeError
    # self.assertRaises(ValueError, '{'.format)
    def format_raises(self, e, *args, **kw):
        self.startTest()
        try:
            args[0].format(*args[1:], **kw)
        except e:
            return True
        else:
            if hasattr(e, '__name__'):
                excName = e.__name__
            else:
                excName = str(e)
            self.fail("%s not raised" % excName)
        return False

    ### end from CPython 2.7 Lib/test/test_str.py

    ### from Lib/Test/test_float.py
    def test_format_float(self):
        # these should be rewritten to use both format(x, spec) and
        # x.__format__(spec)

        self.assertEqual(format(0.0, 'f'), '0.000000')

        # the default is 'g', except for empty format spec
        #self.assertEqual(format(0.0, ''), '0.0')
        #self.assertEqual(format(0.01, ''), '0.01')
        #self.assertEqual(format(0.01, 'g'), '0.01')

        # empty presentation type should format in the same way as str
        # (issue 5920)
        x = 100/7.
        self.assertEqual(format(x, ''), str(x))
        #self.assertEqual(format(x, '-'), str(x))
        #self.assertEqual(format(x, '>'), str(x))
        #self.assertEqual(format(x, '2'), str(x))

        self.assertEqual(format(1.0, 'f'), '1.000000')

        self.assertEqual(format(-1.0, 'f'), '-1.000000')

        self.assertEqual(format( 1.0, ' f'), ' 1.000000')
        self.assertEqual(format(-1.0, ' f'), '-1.000000')
        self.assertEqual(format( 1.0, '+f'), '+1.000000')
        self.assertEqual(format(-1.0, '+f'), '-1.000000')

        # % formatting
        self.assertEqual(format(-1.0, '%'), '-100.000000%')

        # conversion to string should fail
        self.format_raises(ValueError, "{:s}", 3.0)

        # other format specifiers shouldn't work on floats,
        #  in particular int specifiers
        for format_spec in ([chr(x) for x in range(ord('a'), ord('z')+1)] +
                            [chr(x) for x in range(ord('A'), ord('Z')+1)]):
            if not format_spec in 'eEfFgGn%':
                # Issue #524, no destinction between float and integer
                issue524_solved = False
                try:
                    format(1.0, 'd')
                except ValueError:
                    issue524_solved = True
                if not issue524_solved and format_spec in 'bcdoxX':
                    continue
                self.assertRaises(ValueError, format, 0.0, format_spec)
                self.assertRaises(ValueError, format, 1.0, format_spec)
                self.assertRaises(ValueError, format, -1.0, format_spec)
                self.assertRaises(ValueError, format, 1e100, format_spec)
                self.assertRaises(ValueError, format, -1e100, format_spec)
                self.assertRaises(ValueError, format, 1e-100, format_spec)
                self.assertRaises(ValueError, format, -1e-100, format_spec)

        # CPython issue 3382: 'f' and 'F' with inf's and nan's
        # Issue #675 NAN and INF should be implemented
        try:
            INF = float('inf')
            NAN = float('nan')
        except ValueError:
            pass
        else:
            self.assertEqual('{0:f}'.format(INF), 'inf')
            self.assertEqual('{0:F}'.format(INF), 'INF')
            self.assertEqual('{0:f}'.format(-INF), '-inf')
            self.assertEqual('{0:F}'.format(-INF), '-INF')
            self.assertEqual('{0:f}'.format(NAN), 'nan')
            self.assertEqual('{0:F}'.format(NAN), 'NAN')

    def test_issue5864(self):
        self.assertEqual(format(123.456, '.4'), '123.5')
        self.assertEqual(format(1234.56, '.4'), '1.235e+03')
        self.assertEqual(format(12345.6, '.4'), '1.235e+04')

    ### end from Lib/Test/test_float.py

    ### from pypy test_newformat.py

    def test_sign(self):
        self.assertEquals(format(-6), "-6")
        self.assertEquals(format(-6, "-"), "-6")
        self.assertEquals(format(-6, "+"), "-6")
        self.assertEquals(format(-6, " "), "-6")
        self.assertEquals(format(6, " "), " 6")
        self.assertEquals(format(6, "-"), "6")
        self.assertEquals(format(6, "+"), "+6")

    def test_thousands_separator(self):
        self.assertEquals(format(123, ","), "123")
        self.assertEquals(format(12345, ","), "12,345")
        self.assertEquals(format(123456789, ","), "123,456,789")
        self.assertEquals(format(12345, "7,"), " 12,345")
        self.assertEquals(format(12345, "<7,"), "12,345 ")
        self.assertEquals(format(1234, "0=10,"), "00,001,234")
        self.assertEquals(format(1234, "010,"), "00,001,234")

    ### end from pypy test_newformat.py
