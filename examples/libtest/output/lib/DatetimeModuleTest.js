/* start module: DatetimeModuleTest */
$pyjs.loaded_modules['DatetimeModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DatetimeModuleTest'].__was_initialized__) return $pyjs.loaded_modules['DatetimeModuleTest'];
	var $m = $pyjs.loaded_modules["DatetimeModuleTest"];
	$m.__repr__ = function() { return "<module: DatetimeModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DatetimeModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'DatetimeModuleTest.py, line 1:\n    # Testing datetime module';
		$m.__track_lines__[3] = 'DatetimeModuleTest.py, line 3:\n    import sys';
		$m.__track_lines__[4] = 'DatetimeModuleTest.py, line 4:\n    import UnitTest';
		$m.__track_lines__[5] = 'DatetimeModuleTest.py, line 5:\n    import datetime';
		$m.__track_lines__[8] = 'DatetimeModuleTest.py, line 8:\n    class DatetimeModuleTest(UnitTest.UnitTest):';
		$m.__track_lines__[10] = 'DatetimeModuleTest.py, line 10:\n    def testDate(self):';
		$m.__track_lines__[11] = 'DatetimeModuleTest.py, line 11:\n    d = datetime.date(2010, 4, 9)';
		$m.__track_lines__[12] = 'DatetimeModuleTest.py, line 12:\n    self.assertEqual(d.year, 2010)';
		$m.__track_lines__[13] = 'DatetimeModuleTest.py, line 13:\n    self.assertEqual(d.month, 4)';
		$m.__track_lines__[14] = 'DatetimeModuleTest.py, line 14:\n    self.assertEqual(d.day, 9)';
		$m.__track_lines__[15] = 'DatetimeModuleTest.py, line 15:\n    self.assertEqual(d.weekday(), 4)';
		$m.__track_lines__[17] = 'DatetimeModuleTest.py, line 17:\n    def testTime(self):';
		$m.__track_lines__[18] = 'DatetimeModuleTest.py, line 18:\n    t = datetime.time(9, 45, 11, 95000)';
		$m.__track_lines__[19] = 'DatetimeModuleTest.py, line 19:\n    self.assertEqual(t.hour, 9)';
		$m.__track_lines__[20] = 'DatetimeModuleTest.py, line 20:\n    self.assertEqual(t.minute, 45)';
		$m.__track_lines__[21] = 'DatetimeModuleTest.py, line 21:\n    self.assertEqual(t.second, 11)';
		$m.__track_lines__[22] = 'DatetimeModuleTest.py, line 22:\n    self.assertEqual(t.microsecond, 95000)';
		$m.__track_lines__[24] = 'DatetimeModuleTest.py, line 24:\n    def testTimestamp(self):';
		$m.__track_lines__[25] = 'DatetimeModuleTest.py, line 25:\n    d = datetime.date.fromtimestamp(1270804609)';
		$m.__track_lines__[26] = "DatetimeModuleTest.py, line 26:\n    self.assertEqual(str(d), '2010-04-09')";
		$m.__track_lines__[27] = 'DatetimeModuleTest.py, line 27:\n    dt = str(datetime.datetime.fromtimestamp(1270804609.95))';
		$m.__track_lines__[30] = 'DatetimeModuleTest.py, line 29:\n    self.assertEqual( ... (dt[:11], dt[16:]),';
		$m.__track_lines__[34] = 'DatetimeModuleTest.py, line 34:\n    def testCtime(self):';
		$m.__track_lines__[35] = 'DatetimeModuleTest.py, line 35:\n    d = datetime.date(2010, 4, 9)';
		$m.__track_lines__[36] = 'DatetimeModuleTest.py, line 36:\n    self.assertEqual(d.ctime(), "Fri Apr  9 00:00:00 2010")';
		$m.__track_lines__[37] = 'DatetimeModuleTest.py, line 37:\n    dt = datetime.datetime(2010, 4, 9, 10, 57, 32)';
		$m.__track_lines__[38] = 'DatetimeModuleTest.py, line 38:\n    self.assertEqual(dt.ctime(), "Fri Apr  9 10:57:32 2010")';
		$m.__track_lines__[40] = 'DatetimeModuleTest.py, line 40:\n    def testIsoCalendar(self):';
		$m.__track_lines__[41] = 'DatetimeModuleTest.py, line 41:\n    d = datetime.date(2010, 4, 9)';
		$m.__track_lines__[42] = 'DatetimeModuleTest.py, line 42:\n    self.assertEqual(d.isocalendar(), (2010, 14, 5))';
		$m.__track_lines__[43] = 'DatetimeModuleTest.py, line 43:\n    d1 = datetime.date(2007, 12, 31)';
		$m.__track_lines__[44] = 'DatetimeModuleTest.py, line 44:\n    self.assertEqual(d1.isocalendar(), (2008, 1, 1))';
		$m.__track_lines__[46] = 'DatetimeModuleTest.py, line 46:\n    def testIsoFormat(self):';
		$m.__track_lines__[47] = 'DatetimeModuleTest.py, line 47:\n    d = datetime.date(2010, 4, 9)';
		$m.__track_lines__[48] = "DatetimeModuleTest.py, line 48:\n    self.assertEqual(d.isoformat(), '2010-04-09')";
		$m.__track_lines__[49] = 'DatetimeModuleTest.py, line 49:\n    dt = datetime.datetime(2010, 4, 9, 10, 57, 32)';
		$m.__track_lines__[50] = "DatetimeModuleTest.py, line 50:\n    self.assertEqual(dt.isoformat(), '2010-04-09T10:57:32')";
		$m.__track_lines__[51] = 'DatetimeModuleTest.py, line 51:\n    dt2 = datetime.datetime(2010, 4, 9, 10, 57, 32, 95000)';
		$m.__track_lines__[52] = "DatetimeModuleTest.py, line 52:\n    self.assertEqual(dt2.isoformat(), '2010-04-09T10:57:32.095000')";
		$m.__track_lines__[54] = 'DatetimeModuleTest.py, line 54:\n    def testOrdinal(self):';
		$m.__track_lines__[55] = 'DatetimeModuleTest.py, line 55:\n    d = datetime.date.fromordinal(1)';
		$m.__track_lines__[56] = "DatetimeModuleTest.py, line 56:\n    self.assertEqual(str(d), '0001-01-01')";
		$m.__track_lines__[57] = 'DatetimeModuleTest.py, line 57:\n    d1 = datetime.date.fromordinal(733871)';
		$m.__track_lines__[58] = "DatetimeModuleTest.py, line 58:\n    self.assertEqual(str(d1), '2010-04-09')";
		$m.__track_lines__[59] = 'DatetimeModuleTest.py, line 59:\n    self.assertEqual(d1.toordinal(), 733871)';
		$m.__track_lines__[61] = 'DatetimeModuleTest.py, line 61:\n    def testReplace(self):';
		$m.__track_lines__[62] = 'DatetimeModuleTest.py, line 62:\n    d = datetime.date(2010, 4, 9).replace(month=6, day=13)';
		$m.__track_lines__[63] = "DatetimeModuleTest.py, line 63:\n    self.assertEqual(str(d), '2010-06-13')";
		$m.__track_lines__[64] = 'DatetimeModuleTest.py, line 64:\n    t = datetime.time(23, 59, 59).replace(minute=45, microsecond=95000)';
		$m.__track_lines__[65] = "DatetimeModuleTest.py, line 65:\n    self.assertEqual(str(t), '23:45:59.095000')";
		$m.__track_lines__[66] = 'DatetimeModuleTest.py, line 66:\n    dt = datetime.datetime(2010, 4, 9, 10, 57, 32).replace(month=6, day=13, hour=12, minute=0, second=0)';
		$m.__track_lines__[67] = "DatetimeModuleTest.py, line 67:\n    self.assertEqual(str(dt), '2010-06-13 12:00:00')";
		$m.__track_lines__[69] = 'DatetimeModuleTest.py, line 69:\n    def testTimetuple(self):';
		$m.__track_lines__[70] = 'DatetimeModuleTest.py, line 70:\n    tm = datetime.date(2010, 4, 9).timetuple()';
		$m.__track_lines__[71] = 'DatetimeModuleTest.py, line 71:\n    self.assertEqual(tm.tm_year, 2010)';
		$m.__track_lines__[72] = 'DatetimeModuleTest.py, line 72:\n    self.assertEqual(tm.tm_mon, 4)';
		$m.__track_lines__[73] = 'DatetimeModuleTest.py, line 73:\n    self.assertEqual(tm.tm_mday, 9)';
		$m.__track_lines__[74] = 'DatetimeModuleTest.py, line 74:\n    self.assertEqual(tm.tm_hour, 0)';
		$m.__track_lines__[75] = 'DatetimeModuleTest.py, line 75:\n    self.assertEqual(tm.tm_min, 0)';
		$m.__track_lines__[76] = 'DatetimeModuleTest.py, line 76:\n    self.assertEqual(tm.tm_sec, 0)';
		$m.__track_lines__[77] = 'DatetimeModuleTest.py, line 77:\n    self.assertEqual(tm.tm_wday, 4)';
		$m.__track_lines__[78] = 'DatetimeModuleTest.py, line 78:\n    self.assertEqual(tm.tm_yday, 99)';
		$m.__track_lines__[80] = 'DatetimeModuleTest.py, line 80:\n    def testStrftime(self):';
		$m.__track_lines__[81] = 'DatetimeModuleTest.py, line 81:\n    d = datetime.date(2010, 4, 9)';
		$m.__track_lines__[82] = 'DatetimeModuleTest.py, line 82:\n    self.assertEqual(d.strftime("%d/%m/%y"), "09/04/10")';
		$m.__track_lines__[84] = 'DatetimeModuleTest.py, line 84:\n    def testStrptime(self):';
		$m.__track_lines__[85] = 'DatetimeModuleTest.py, line 85:\n    d = datetime.datetime.strptime("010100 1234", "%d%m%y %H%M")';
		$m.__track_lines__[86] = "DatetimeModuleTest.py, line 86:\n    self.assertEqual(str(d), '2000-01-01 12:34:00')";
		$m.__track_lines__[88] = 'DatetimeModuleTest.py, line 88:\n    def testComparision(self):';
		$m.__track_lines__[89] = 'DatetimeModuleTest.py, line 89:\n    d1 = datetime.date(2010, 6, 8)';
		$m.__track_lines__[90] = 'DatetimeModuleTest.py, line 90:\n    d2 = datetime.date(2010, 6, 8)';
		$m.__track_lines__[91] = 'DatetimeModuleTest.py, line 91:\n    d3 = datetime.date(2010, 4, 9)';
		$m.__track_lines__[92] = 'DatetimeModuleTest.py, line 92:\n    self.assertTrue(d1 == d2, "d1 and d2 differ")';
		$m.__track_lines__[93] = 'DatetimeModuleTest.py, line 93:\n    self.assertTrue(d1 > d3, "d1 is not later than d3")';
		$m.__track_lines__[94] = 'DatetimeModuleTest.py, line 94:\n    self.assertTrue(d3 < d1, "d3 is not earlier than d1")';
		$m.__track_lines__[96] = 'DatetimeModuleTest.py, line 96:\n    def testOperations(self):';
		$m.__track_lines__[97] = 'DatetimeModuleTest.py, line 97:\n    d1 = datetime.date(2010, 4, 9)';
		$m.__track_lines__[98] = 'DatetimeModuleTest.py, line 98:\n    d2 = datetime.date(2010, 6, 13)';
		$m.__track_lines__[99] = 'DatetimeModuleTest.py, line 99:\n    diff = d2 - d1';
		$m.__track_lines__[100] = 'DatetimeModuleTest.py, line 100:\n    self.assertEqual(diff.days, 65)';
		$m.__track_lines__[101] = 'DatetimeModuleTest.py, line 101:\n    self.assertEqual(str(d1 + diff), "2010-06-13")';
		$m.__track_lines__[102] = 'DatetimeModuleTest.py, line 102:\n    self.assertEqual(str(d1 - diff), "2010-02-03")';
		$m.__track_lines__[105] = "DatetimeModuleTest.py, line 105:\n    if __name__ == '__main__':";
		$m.__track_lines__[106] = 'DatetimeModuleTest.py, line 106:\n    from RunTests import RunTests';
		$m.__track_lines__[108] = 'DatetimeModuleTest.py, line 108:\n    t = RunTests()';
		$m.__track_lines__[109] = 'DatetimeModuleTest.py, line 109:\n    t.add(DatetimeModuleTest)';
		$m.__track_lines__[110] = 'DatetimeModuleTest.py, line 110:\n    t.start_test()';
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1270804609 = new $p['int'](1270804609);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_95000 = new $p['int'](95000);
		var $constant_int_31 = new $p['int'](31);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_733871 = new $p['int'](733871);
		var $constant_int_57 = new $p['int'](57);
		var $constant_int_59 = new $p['int'](59);
		var $constant_int_65 = new $p['int'](65);
		var $constant_int_2007 = new $p['int'](2007);
		var $constant_int_2008 = new $p['int'](2008);
		var $constant_int_2010 = new $p['int'](2010);
		var $constant_int_99 = new $p['int'](99);
		$pyjs.track.module='DatetimeModuleTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['datetime'] = $p['___import___']('datetime', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$m['DatetimeModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DatetimeModuleTest';
			$cls_definition.__md5__ = 'b673d6f4e7e9f2c0076dc261b429fff8';
			$pyjs.track.lineno=10;
			$method = $pyjs__bind_method2('testDate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d;
				$pyjs.track={module:'DatetimeModuleTest', lineno:10};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=10;
				$pyjs.track.lineno=11;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				$pyjs.track.lineno=12;
				self['assertEqual']($p['getattr'](d, 'year'), $constant_int_2010);
				$pyjs.track.lineno=13;
				self['assertEqual']($p['getattr'](d, 'month'), $constant_int_4);
				$pyjs.track.lineno=14;
				self['assertEqual']($p['getattr'](d, 'day'), $constant_int_9);
				$pyjs.track.lineno=15;
				self['assertEqual'](d['weekday'](), $constant_int_4);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDate'] = $method;
			$pyjs.track.lineno=17;
			$method = $pyjs__bind_method2('testTime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var t;
				$pyjs.track={module:'DatetimeModuleTest', lineno:17};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=17;
				$pyjs.track.lineno=18;
				t = $m['datetime']['time']($constant_int_9, $constant_int_45, $constant_int_11, $constant_int_95000);
				$pyjs.track.lineno=19;
				self['assertEqual']($p['getattr'](t, 'hour'), $constant_int_9);
				$pyjs.track.lineno=20;
				self['assertEqual']($p['getattr'](t, 'minute'), $constant_int_45);
				$pyjs.track.lineno=21;
				self['assertEqual']($p['getattr'](t, 'second'), $constant_int_11);
				$pyjs.track.lineno=22;
				self['assertEqual']($p['getattr'](t, 'microsecond'), $constant_int_95000);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTime'] = $method;
			$pyjs.track.lineno=24;
			$method = $pyjs__bind_method2('testTimestamp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt,d;
				$pyjs.track={module:'DatetimeModuleTest', lineno:24};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=24;
				$pyjs.track.lineno=25;
				d = $m['datetime']['date']['fromtimestamp']($constant_int_1270804609);
				$pyjs.track.lineno=26;
				self['assertEqual']($p['str'](d), '2010-04-09');
				$pyjs.track.lineno=27;
				dt = $p['str']($m['datetime']['datetime']['fromtimestamp'](1270804609.95));
				$pyjs.track.lineno=30;
				self['assertEqual']($p['tuple']([$p['__getslice'](dt, 0, $constant_int_11), $p['__getslice'](dt, $constant_int_16, null)]), $p['tuple'](['2010-04-09 ', ':49.950000']));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTimestamp'] = $method;
			$pyjs.track.lineno=34;
			$method = $pyjs__bind_method2('testCtime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt,d;
				$pyjs.track={module:'DatetimeModuleTest', lineno:34};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=34;
				$pyjs.track.lineno=35;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				$pyjs.track.lineno=36;
				self['assertEqual'](d['ctime'](), 'Fri Apr  9 00:00:00 2010');
				$pyjs.track.lineno=37;
				dt = $m['datetime']['datetime']($constant_int_2010, $constant_int_4, $constant_int_9, $constant_int_10, $constant_int_57, $constant_int_32);
				$pyjs.track.lineno=38;
				self['assertEqual'](dt['ctime'](), 'Fri Apr  9 10:57:32 2010');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCtime'] = $method;
			$pyjs.track.lineno=40;
			$method = $pyjs__bind_method2('testIsoCalendar', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,d1;
				$pyjs.track={module:'DatetimeModuleTest', lineno:40};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=40;
				$pyjs.track.lineno=41;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				$pyjs.track.lineno=42;
				self['assertEqual'](d['isocalendar'](), $p['tuple']([$constant_int_2010, $constant_int_14, $constant_int_5]));
				$pyjs.track.lineno=43;
				d1 = $m['datetime']['date']($constant_int_2007, $constant_int_12, $constant_int_31);
				$pyjs.track.lineno=44;
				self['assertEqual'](d1['isocalendar'](), $p['tuple']([$constant_int_2008, $constant_int_1, $constant_int_1]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsoCalendar'] = $method;
			$pyjs.track.lineno=46;
			$method = $pyjs__bind_method2('testIsoFormat', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt2,dt,d;
				$pyjs.track={module:'DatetimeModuleTest', lineno:46};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=46;
				$pyjs.track.lineno=47;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				$pyjs.track.lineno=48;
				self['assertEqual'](d['isoformat'](), '2010-04-09');
				$pyjs.track.lineno=49;
				dt = $m['datetime']['datetime']($constant_int_2010, $constant_int_4, $constant_int_9, $constant_int_10, $constant_int_57, $constant_int_32);
				$pyjs.track.lineno=50;
				self['assertEqual'](dt['isoformat'](), '2010-04-09T10:57:32');
				$pyjs.track.lineno=51;
				dt2 = $m['datetime']['datetime']($constant_int_2010, $constant_int_4, $constant_int_9, $constant_int_10, $constant_int_57, $constant_int_32, $constant_int_95000);
				$pyjs.track.lineno=52;
				self['assertEqual'](dt2['isoformat'](), '2010-04-09T10:57:32.095000');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsoFormat'] = $method;
			$pyjs.track.lineno=54;
			$method = $pyjs__bind_method2('testOrdinal', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,d1;
				$pyjs.track={module:'DatetimeModuleTest', lineno:54};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=55;
				d = $m['datetime']['date']['fromordinal']($constant_int_1);
				$pyjs.track.lineno=56;
				self['assertEqual']($p['str'](d), '0001-01-01');
				$pyjs.track.lineno=57;
				d1 = $m['datetime']['date']['fromordinal']($constant_int_733871);
				$pyjs.track.lineno=58;
				self['assertEqual']($p['str'](d1), '2010-04-09');
				$pyjs.track.lineno=59;
				self['assertEqual'](d1['toordinal'](), $constant_int_733871);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOrdinal'] = $method;
			$pyjs.track.lineno=61;
			$method = $pyjs__bind_method2('testReplace', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dt,d,t;
				$pyjs.track={module:'DatetimeModuleTest', lineno:61};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=62;
				d = $pyjs_kwargs_call($m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9), '$$replace', null, null, [{month:$constant_int_6, day:$constant_int_13}]);
				$pyjs.track.lineno=63;
				self['assertEqual']($p['str'](d), '2010-06-13');
				$pyjs.track.lineno=64;
				t = $pyjs_kwargs_call($m['datetime']['time']($constant_int_23, $constant_int_59, $constant_int_59), '$$replace', null, null, [{minute:$constant_int_45, microsecond:$constant_int_95000}]);
				$pyjs.track.lineno=65;
				self['assertEqual']($p['str'](t), '23:45:59.095000');
				$pyjs.track.lineno=66;
				dt = $pyjs_kwargs_call($m['datetime']['datetime']($constant_int_2010, $constant_int_4, $constant_int_9, $constant_int_10, $constant_int_57, $constant_int_32), '$$replace', null, null, [{month:$constant_int_6, day:$constant_int_13, hour:$constant_int_12, minute:$constant_int_0, second:$constant_int_0}]);
				$pyjs.track.lineno=67;
				self['assertEqual']($p['str'](dt), '2010-06-13 12:00:00');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReplace'] = $method;
			$pyjs.track.lineno=69;
			$method = $pyjs__bind_method2('testTimetuple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tm;
				$pyjs.track={module:'DatetimeModuleTest', lineno:69};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=69;
				$pyjs.track.lineno=70;
				tm = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9)['timetuple']();
				$pyjs.track.lineno=71;
				self['assertEqual']($p['getattr'](tm, 'tm_year'), $constant_int_2010);
				$pyjs.track.lineno=72;
				self['assertEqual']($p['getattr'](tm, 'tm_mon'), $constant_int_4);
				$pyjs.track.lineno=73;
				self['assertEqual']($p['getattr'](tm, 'tm_mday'), $constant_int_9);
				$pyjs.track.lineno=74;
				self['assertEqual']($p['getattr'](tm, 'tm_hour'), $constant_int_0);
				$pyjs.track.lineno=75;
				self['assertEqual']($p['getattr'](tm, 'tm_min'), $constant_int_0);
				$pyjs.track.lineno=76;
				self['assertEqual']($p['getattr'](tm, 'tm_sec'), $constant_int_0);
				$pyjs.track.lineno=77;
				self['assertEqual']($p['getattr'](tm, 'tm_wday'), $constant_int_4);
				$pyjs.track.lineno=78;
				self['assertEqual']($p['getattr'](tm, 'tm_yday'), $constant_int_99);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTimetuple'] = $method;
			$pyjs.track.lineno=80;
			$method = $pyjs__bind_method2('testStrftime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d;
				$pyjs.track={module:'DatetimeModuleTest', lineno:80};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=80;
				$pyjs.track.lineno=81;
				d = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				$pyjs.track.lineno=82;
				self['assertEqual'](d['strftime']('%d/%m/%y'), '09/04/10');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrftime'] = $method;
			$pyjs.track.lineno=84;
			$method = $pyjs__bind_method2('testStrptime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d;
				$pyjs.track={module:'DatetimeModuleTest', lineno:84};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=84;
				$pyjs.track.lineno=85;
				d = $m['datetime']['datetime']['strptime']('010100 1234', '%d%m%y %H%M');
				$pyjs.track.lineno=86;
				self['assertEqual']($p['str'](d), '2000-01-01 12:34:00');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrptime'] = $method;
			$pyjs.track.lineno=88;
			$method = $pyjs__bind_method2('testComparision', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,$cmp3,$cmp2,d2,d3,d1;
				$pyjs.track={module:'DatetimeModuleTest', lineno:88};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=88;
				$pyjs.track.lineno=89;
				d1 = $m['datetime']['date']($constant_int_2010, $constant_int_6, $constant_int_8);
				$pyjs.track.lineno=90;
				d2 = $m['datetime']['date']($constant_int_2010, $constant_int_6, $constant_int_8);
				$pyjs.track.lineno=91;
				d3 = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				$pyjs.track.lineno=92;
				self['assertTrue']($p['op_eq'](d1, d2), 'd1 and d2 differ');
				$pyjs.track.lineno=93;
				self['assertTrue'](((($cmp1=d1)===($cmp2=d3)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1), 'd1 is not later than d3');
				$pyjs.track.lineno=94;
				self['assertTrue'](((($cmp3=d3)===($cmp4=d1)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1), 'd3 is not earlier than d1');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComparision'] = $method;
			$pyjs.track.lineno=96;
			$method = $pyjs__bind_method2('testOperations', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b673d6f4e7e9f2c0076dc261b429fff8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1,diff,$sub3,$sub2,$sub1,$sub4,d2,d1;
				$pyjs.track={module:'DatetimeModuleTest', lineno:96};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DatetimeModuleTest';
				$pyjs.track.lineno=96;
				$pyjs.track.lineno=97;
				d1 = $m['datetime']['date']($constant_int_2010, $constant_int_4, $constant_int_9);
				$pyjs.track.lineno=98;
				d2 = $m['datetime']['date']($constant_int_2010, $constant_int_6, $constant_int_13);
				$pyjs.track.lineno=99;
				diff = (typeof ($sub1=d2)==typeof ($sub2=d1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				$pyjs.track.lineno=100;
				self['assertEqual']($p['getattr'](diff, 'days'), $constant_int_65);
				$pyjs.track.lineno=101;
				self['assertEqual']($p['str']((typeof ($add1=d1)==typeof ($add2=diff) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))), '2010-06-13');
				$pyjs.track.lineno=102;
				self['assertEqual']($p['str']((typeof ($sub3=d1)==typeof ($sub4=diff) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))), '2010-02-03');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOperations'] = $method;
			$pyjs.track.lineno=8;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DatetimeModuleTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=105;
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$pyjs.track.lineno=106;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['RunTests'] = $p['___import___']('RunTests.RunTests', null, null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=108;
			$m['t'] = $m['RunTests']();
			$pyjs.track.lineno=109;
			$m['t']['add']($m['DatetimeModuleTest']);
			$pyjs.track.lineno=110;
			$m['t']['start_test']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end DatetimeModuleTest */


/* end module: DatetimeModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'datetime', 'RunTests.RunTests', 'RunTests']
*/
