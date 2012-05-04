from UnitTest import UnitTest


class Foo(object):
    def __init__(self):
        pass
    def bar(self):
        pass


class HashableTest(UnitTest):
    def testMethods(self):
        foo = Foo()
        dMethodToInt = {}
        dMethodToInt[foo.bar] = 5
        dMethodToInt[foo.bar] = 6
        dMethodToInt[foo.bar] = 7
        self.assertEquals(1, len(dMethodToInt.keys()),
                          'Bug #656 Hashing class methods is not supported')
