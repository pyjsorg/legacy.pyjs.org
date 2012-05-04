from UnitTest import UnitTest
import math

class MathModuleTest(UnitTest):

    def testCeil(self):
        self.assertEqual(math.ceil(1.1), 2.0)
        self.assertEqual(math.ceil(-1.1), -1.0)

    def testFloor(self):
        self.assertEqual(math.floor(1.1), 1.0)
        self.assertEqual(math.floor(-1.1), -2.0)

    def testFabs(self):
        self.assertEqual(math.fabs(1.1), 1.1)
        self.assertEqual(math.fabs(-1.1), 1.1)

    def testExp(self):
        self.assertEqual(math.exp(1), math.e)

    def testLog(self):
        self.assertEqual(math.log(math.e), 1)
        self.assertTrue(
            math.log(100, 10) - 2 < 1e-12,
            "math.log(100, 10): %s" % math.log(100, 10),
        )
        self.assertTrue(
            math.log10(1000) - 3 < 1e-12,
            "math.log10(1000): %s" % math.log10(1000),
        )

    def testPow(self):
        self.assertEqual(math.pow(2, 3), 8.0)
        self.assertEqual(math.pow(4, .5), 2.0)

    def testSqrt(self):
        self.assertEqual(math.sqrt(4), 2.0)

    def testCos(self):
        self.assertEqual(math.cos(math.pi), -1.0)

    def testSin(self):
        self.assertEqual(math.sin(0.5 * math.pi), 1.0)

    def testTan(self):
        self.assertTrue(math.fabs(math.tan(1.0) - math.sin(1.0)/math.cos(1.0)) < 1e-12)

    def testAcos(self):
        self.assertTrue(math.acos(math.cos(1)) - 1 < 1e-12)

    def testAsin(self):
        self.assertTrue(math.asin(math.sin(1)) - 1 < 1e-12)

    def testAtan(self):
        self.assertTrue(math.atan(math.tan(1)) - 1 < 1e-12)

    def testAtan2(self):
        self.assertTrue(math.atan2(1, 1) - math.atan(1) < 1e-12)

    def testFsum(self):
        if hasattr(math, 'fsum'):
            # Not in python 2.5
            numbers = 20 * [1e-8] + [0.001, 1e9]
            s = 0
            for number in numbers:
                s += number
            numbers.reverse()
            self.assertEqual(math.fsum(numbers), s)

    def testFrexp(self):
        m, e = math.frexp(1)
        self.assertEqual(m * 2. ** e, 1)

    def testLdexp(self):
        self.assertEqual(math.ldexp(.5, 3), 4)

    def testDegrees(self):
        self.assertTrue(math.degrees(math.pi/2) - 90 < 1e-12)

    def testRadians(self):
        self.assertTrue(math.radians(90) - math.pi/2 < 1e-12)
