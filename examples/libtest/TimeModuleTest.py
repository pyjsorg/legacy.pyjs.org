# Testing time module

import sys
import UnitTest
import time


class TimeModuleTest(UnitTest.UnitTest):

    def time_tuple(self, tm):
        return (
            tm.tm_year,
            tm.tm_mon,
            tm.tm_mday,
            tm.tm_hour,
            tm.tm_min,
            tm.tm_sec,
            tm.tm_wday,
            tm.tm_yday,
            tm.tm_isdst,
        )

    def testBasics(self):
        t = time.time()
        self.assertTrue(t > 1246924800, "time.time() result invalid")
        ttuple1 = time.gmtime(t)
        t1 = time.mktime(ttuple1)
        ttuple2 = time.localtime(t + time.timezone)
        t2 = time.mktime(ttuple2)
        self.assertTrue(t1 == t2, "t1 and t2 differ")
        self.assertEqual(ttuple1[0], ttuple2[0])
        self.assertEqual(ttuple1[1], ttuple2[1])
        self.assertEqual(ttuple1[2], ttuple2[2])

        t = 1246446123
        ttuple = time.gmtime(t)
        self.assertEqual(ttuple[0], 2009, "Year mismatch")
        self.assertEqual(ttuple[1], 7,    "Month mismatch")
        self.assertEqual(ttuple[2], 1,    "Month day mismatch")
        self.assertEqual(ttuple[3], 11,   "Hour mismatch")
        self.assertEqual(ttuple[4], 2,    "Minute mismatch")
        self.assertEqual(ttuple[5], 3,    "Second mismatch")
        self.assertEqual(ttuple[6], 2,    "Week day mismatch")
        self.assertEqual(ttuple[7], 182,  "Year day mismatch")
        self.assertEqual(ttuple[8], 0,    "DST mismatch")

    def testStrftime(self):
        t = 1246446001
        ttuple = time.gmtime(t)
        s = time.strftime("-%%-%d-%H-%I-%j-%m-%M-%p-%S-%w-%W-%y-%Y-", ttuple)
        self.assertEqual(s, "-%-01-11-11-182-07-00-AM-01-3-26-09-2009-")

        def assertEqual(s, expected):
            self.assertEqual(
                s,
                expected,
                "bug #640 : %r != %r" % (s, expected)
            )
        assertEqual(time.strftime("%c", ttuple), 'Wed Jul  1 11:00:01 2009')
        assertEqual(time.strftime("%x", ttuple), '07/01/09')
        assertEqual(time.strftime("%X", ttuple), '11:00:01')

    def testStrptime(self):
        tm = time.strptime("01012000 1234", "%d%m%Y %H%M")
        self.assertEqual(tuple(tm[0:9]), (2000, 1, 1, 12, 34, 0, 5, 1, -1))
        tm = time.strptime("01072000 1234", "%d%m%Y %H%M")
        self.assertEqual(tuple(tm[0:9]), (2000, 7, 1, 12, 34, 0, 5, 183, -1))
        tm = time.strptime("010100 1234", "%d%m%y %H%M")
        self.assertEqual(tuple(tm[0:9]), (2000, 1, 1, 12, 34, 0, 5, 1, -1))

    def testAsctime(self):
        t = (2010, 5, 19, 9, 22, 44, 2, 139, 1)
        self.assertEqual(
            time.asctime(t),
            'Wed May 19 09:22:44 2010',
        )

    def testGmtime(self):
        day = 86400
        start2010utc = 1262304000
        Apr2010utc = start2010utc + 90 * day # Apr 1 2010 UTC
        Jul2010utc = start2010utc + 181 * day # Jul 1 2010 UTC
        Oct2010utc = start2010utc + 273 * day # Oct 1 2010 UTC
        for i in [0,1,2,3,29,30]:
            self.assertEqual(
                self.time_tuple(time.gmtime(start2010utc + i*day)),
                (2010, 1, i+1, 0, 0, 0, (4+i)%7, i+1, 0),
            )
        self.assertEqual(
            self.time_tuple(time.gmtime(Apr2010utc)),
            (2010, 4, 1, 0, 0, 0, 3, 91, 0),
        )
        self.assertEqual(
            self.time_tuple(time.gmtime(Jul2010utc)),
            (2010, 7, 1, 0, 0, 0, 3, 182, 0),
        )
        self.assertEqual(
            self.time_tuple(time.gmtime(Oct2010utc)),
            (2010, 10, 1, 0, 0, 0, 4, 274, 0),
        )

    def testLocaltime(self):
        def cmp_times(t):
            t1 = time.gmtime(t - time.timezone)
            t2 = time.localtime(t)
            if t2[-1] != 0:
                t1 = time.gmtime(t - time.altzone)
            self.assertEqual(self.time_tuple(t1)[:-1], self.time_tuple(t2)[:-1])

        day = 86400
        start2010utc = 1262304000
        Apr2010utc = start2010utc + 90 * day # Apr 1 2010 UTC
        Jul2010utc = start2010utc + 181 * day # Jul 1 2010 UTC
        Oct2010utc = start2010utc + 273 * day # Oct 1 2010 UTC
        cmp_times(start2010utc)
        cmp_times(Apr2010utc)
        cmp_times(Jul2010utc)
        cmp_times(Oct2010utc)
        return
        for i in [0,1,2,3,29,30]:
            self.assertEqual(
                self.time_tuple(time.gmtime(start2010utc + i*day)),
                (2010, 1, i+1, 0, 0, 0, (4+i)%7, i+1, 0),
            )

    def testMktime(self):
        def cmp_times(t):
            t1 = t
            t2 = time.mktime(time.localtime(t))
            self.assertEqual(t1, t2)

        day = 86400
        start2010utc = 1262304000
        Apr2010utc = start2010utc + 90 * day # Apr 1 2010 UTC
        Jul2010utc = start2010utc + 181 * day # Jul 1 2010 UTC
        Oct2010utc = start2010utc + 273 * day # Oct 1 2010 UTC
        cmp_times(start2010utc)
        cmp_times(Apr2010utc)
        cmp_times(Jul2010utc)
        cmp_times(Oct2010utc)


if __name__ == '__main__':
    from RunTests import RunTests

    print "time.tzname:", time.tzname
    print "time.timezone:", time.timezone
    print "time.altzone:", time.altzone

    t = RunTests()
    t.add(TimeModuleTest)
    t.start_test()
