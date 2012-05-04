/* start module: TimeModuleTest */
$pyjs.loaded_modules['TimeModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TimeModuleTest'].__was_initialized__) return $pyjs.loaded_modules['TimeModuleTest'];
	var $m = $pyjs.loaded_modules["TimeModuleTest"];
	$m.__repr__ = function() { return "<module: TimeModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TimeModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'TimeModuleTest.py, line 1:\n    # Testing time module';
		$m.__track_lines__[3] = 'TimeModuleTest.py, line 3:\n    import sys';
		$m.__track_lines__[4] = 'TimeModuleTest.py, line 4:\n    import UnitTest';
		$m.__track_lines__[5] = 'TimeModuleTest.py, line 5:\n    import time';
		$m.__track_lines__[8] = 'TimeModuleTest.py, line 8:\n    class TimeModuleTest(UnitTest.UnitTest):';
		$m.__track_lines__[10] = 'TimeModuleTest.py, line 10:\n    def time_tuple(self, tm):';
		$m.__track_lines__[11] = 'TimeModuleTest.py, line 11:\n    return (';
		$m.__track_lines__[23] = 'TimeModuleTest.py, line 23:\n    def testBasics(self):';
		$m.__track_lines__[24] = 'TimeModuleTest.py, line 24:\n    t = time.time()';
		$m.__track_lines__[25] = 'TimeModuleTest.py, line 25:\n    self.assertTrue(t > 1246924800, "time.time() result invalid")';
		$m.__track_lines__[26] = 'TimeModuleTest.py, line 26:\n    ttuple1 = time.gmtime(t)';
		$m.__track_lines__[27] = 'TimeModuleTest.py, line 27:\n    t1 = time.mktime(ttuple1)';
		$m.__track_lines__[28] = 'TimeModuleTest.py, line 28:\n    ttuple2 = time.localtime(t + time.timezone)';
		$m.__track_lines__[29] = 'TimeModuleTest.py, line 29:\n    t2 = time.mktime(ttuple2)';
		$m.__track_lines__[30] = 'TimeModuleTest.py, line 30:\n    self.assertTrue(t1 == t2, "t1 and t2 differ")';
		$m.__track_lines__[31] = 'TimeModuleTest.py, line 31:\n    self.assertEqual(ttuple1[0], ttuple2[0])';
		$m.__track_lines__[32] = 'TimeModuleTest.py, line 32:\n    self.assertEqual(ttuple1[1], ttuple2[1])';
		$m.__track_lines__[33] = 'TimeModuleTest.py, line 33:\n    self.assertEqual(ttuple1[2], ttuple2[2])';
		$m.__track_lines__[35] = 'TimeModuleTest.py, line 35:\n    t = 1246446123';
		$m.__track_lines__[36] = 'TimeModuleTest.py, line 36:\n    ttuple = time.gmtime(t)';
		$m.__track_lines__[37] = 'TimeModuleTest.py, line 37:\n    self.assertEqual(ttuple[0], 2009, "Year mismatch")';
		$m.__track_lines__[38] = 'TimeModuleTest.py, line 38:\n    self.assertEqual(ttuple[1], 7,    "Month mismatch")';
		$m.__track_lines__[39] = 'TimeModuleTest.py, line 39:\n    self.assertEqual(ttuple[2], 1,    "Month day mismatch")';
		$m.__track_lines__[40] = 'TimeModuleTest.py, line 40:\n    self.assertEqual(ttuple[3], 11,   "Hour mismatch")';
		$m.__track_lines__[41] = 'TimeModuleTest.py, line 41:\n    self.assertEqual(ttuple[4], 2,    "Minute mismatch")';
		$m.__track_lines__[42] = 'TimeModuleTest.py, line 42:\n    self.assertEqual(ttuple[5], 3,    "Second mismatch")';
		$m.__track_lines__[43] = 'TimeModuleTest.py, line 43:\n    self.assertEqual(ttuple[6], 2,    "Week day mismatch")';
		$m.__track_lines__[44] = 'TimeModuleTest.py, line 44:\n    self.assertEqual(ttuple[7], 182,  "Year day mismatch")';
		$m.__track_lines__[45] = 'TimeModuleTest.py, line 45:\n    self.assertEqual(ttuple[8], 0,    "DST mismatch")';
		$m.__track_lines__[47] = 'TimeModuleTest.py, line 47:\n    def testStrftime(self):';
		$m.__track_lines__[48] = 'TimeModuleTest.py, line 48:\n    t = 1246446001';
		$m.__track_lines__[49] = 'TimeModuleTest.py, line 49:\n    ttuple = time.gmtime(t)';
		$m.__track_lines__[50] = 'TimeModuleTest.py, line 50:\n    s = time.strftime("-%%-%d-%H-%I-%j-%m-%M-%p-%S-%w-%W-%y-%Y-", ttuple)';
		$m.__track_lines__[51] = 'TimeModuleTest.py, line 51:\n    self.assertEqual(s, "-%-01-11-11-182-07-00-AM-01-3-26-09-2009-")';
		$m.__track_lines__[53] = 'TimeModuleTest.py, line 53:\n    def assertEqual(s, expected):';
		$m.__track_lines__[55] = 'TimeModuleTest.py, line 54:\n    self.assertEqual( ... s,';
		$m.__track_lines__[59] = 'TimeModuleTest.py, line 59:\n    assertEqual(time.strftime("%c", ttuple), \'Wed Jul  1 11:00:01 2009\')';
		$m.__track_lines__[60] = 'TimeModuleTest.py, line 60:\n    assertEqual(time.strftime("%x", ttuple), \'07/01/09\')';
		$m.__track_lines__[61] = 'TimeModuleTest.py, line 61:\n    assertEqual(time.strftime("%X", ttuple), \'11:00:01\')';
		$m.__track_lines__[63] = 'TimeModuleTest.py, line 63:\n    def testStrptime(self):';
		$m.__track_lines__[64] = 'TimeModuleTest.py, line 64:\n    tm = time.strptime("01012000 1234", "%d%m%Y %H%M")';
		$m.__track_lines__[65] = 'TimeModuleTest.py, line 65:\n    self.assertEqual(tuple(tm[0:9]), (2000, 1, 1, 12, 34, 0, 5, 1, -1))';
		$m.__track_lines__[66] = 'TimeModuleTest.py, line 66:\n    tm = time.strptime("01072000 1234", "%d%m%Y %H%M")';
		$m.__track_lines__[67] = 'TimeModuleTest.py, line 67:\n    self.assertEqual(tuple(tm[0:9]), (2000, 7, 1, 12, 34, 0, 5, 183, -1))';
		$m.__track_lines__[68] = 'TimeModuleTest.py, line 68:\n    tm = time.strptime("010100 1234", "%d%m%y %H%M")';
		$m.__track_lines__[69] = 'TimeModuleTest.py, line 69:\n    self.assertEqual(tuple(tm[0:9]), (2000, 1, 1, 12, 34, 0, 5, 1, -1))';
		$m.__track_lines__[71] = 'TimeModuleTest.py, line 71:\n    def testAsctime(self):';
		$m.__track_lines__[72] = 'TimeModuleTest.py, line 72:\n    t = (2010, 5, 19, 9, 22, 44, 2, 139, 1)';
		$m.__track_lines__[74] = 'TimeModuleTest.py, line 73:\n    self.assertEqual( ... time.asctime(t),';
		$m.__track_lines__[78] = 'TimeModuleTest.py, line 78:\n    def testGmtime(self):';
		$m.__track_lines__[79] = 'TimeModuleTest.py, line 79:\n    day = 86400';
		$m.__track_lines__[80] = 'TimeModuleTest.py, line 80:\n    start2010utc = 1262304000';
		$m.__track_lines__[81] = 'TimeModuleTest.py, line 81:\n    Apr2010utc = start2010utc + 90 * day # Apr 1 2010 UTC';
		$m.__track_lines__[82] = 'TimeModuleTest.py, line 82:\n    Jul2010utc = start2010utc + 181 * day # Jul 1 2010 UTC';
		$m.__track_lines__[83] = 'TimeModuleTest.py, line 83:\n    Oct2010utc = start2010utc + 273 * day # Oct 1 2010 UTC';
		$m.__track_lines__[84] = 'TimeModuleTest.py, line 84:\n    for i in [0,1,2,3,29,30]:';
		$m.__track_lines__[86] = 'TimeModuleTest.py, line 85:\n    self.assertEqual( ... self.time_tuple(time.gmtime(start2010utc + i*day)),';
		$m.__track_lines__[90] = 'TimeModuleTest.py, line 89:\n    self.assertEqual( ... self.time_tuple(time.gmtime(Apr2010utc)),';
		$m.__track_lines__[94] = 'TimeModuleTest.py, line 93:\n    self.assertEqual( ... self.time_tuple(time.gmtime(Jul2010utc)),';
		$m.__track_lines__[98] = 'TimeModuleTest.py, line 97:\n    self.assertEqual( ... self.time_tuple(time.gmtime(Oct2010utc)),';
		$m.__track_lines__[102] = 'TimeModuleTest.py, line 102:\n    def testLocaltime(self):';
		$m.__track_lines__[103] = 'TimeModuleTest.py, line 103:\n    def cmp_times(t):';
		$m.__track_lines__[104] = 'TimeModuleTest.py, line 104:\n    t1 = time.gmtime(t - time.timezone)';
		$m.__track_lines__[105] = 'TimeModuleTest.py, line 105:\n    t2 = time.localtime(t)';
		$m.__track_lines__[106] = 'TimeModuleTest.py, line 106:\n    if t2[-1] != 0:';
		$m.__track_lines__[107] = 'TimeModuleTest.py, line 107:\n    t1 = time.gmtime(t - time.altzone)';
		$m.__track_lines__[108] = 'TimeModuleTest.py, line 108:\n    self.assertEqual(self.time_tuple(t1)[:-1], self.time_tuple(t2)[:-1])';
		$m.__track_lines__[110] = 'TimeModuleTest.py, line 110:\n    day = 86400';
		$m.__track_lines__[111] = 'TimeModuleTest.py, line 111:\n    start2010utc = 1262304000';
		$m.__track_lines__[112] = 'TimeModuleTest.py, line 112:\n    Apr2010utc = start2010utc + 90 * day # Apr 1 2010 UTC';
		$m.__track_lines__[113] = 'TimeModuleTest.py, line 113:\n    Jul2010utc = start2010utc + 181 * day # Jul 1 2010 UTC';
		$m.__track_lines__[114] = 'TimeModuleTest.py, line 114:\n    Oct2010utc = start2010utc + 273 * day # Oct 1 2010 UTC';
		$m.__track_lines__[115] = 'TimeModuleTest.py, line 115:\n    cmp_times(start2010utc)';
		$m.__track_lines__[116] = 'TimeModuleTest.py, line 116:\n    cmp_times(Apr2010utc)';
		$m.__track_lines__[117] = 'TimeModuleTest.py, line 117:\n    cmp_times(Jul2010utc)';
		$m.__track_lines__[118] = 'TimeModuleTest.py, line 118:\n    cmp_times(Oct2010utc)';
		$m.__track_lines__[119] = 'TimeModuleTest.py, line 119:\n    return';
		$m.__track_lines__[120] = 'TimeModuleTest.py, line 120:\n    for i in [0,1,2,3,29,30]:';
		$m.__track_lines__[122] = 'TimeModuleTest.py, line 121:\n    self.assertEqual( ... self.time_tuple(time.gmtime(start2010utc + i*day)),';
		$m.__track_lines__[126] = 'TimeModuleTest.py, line 126:\n    def testMktime(self):';
		$m.__track_lines__[127] = 'TimeModuleTest.py, line 127:\n    def cmp_times(t):';
		$m.__track_lines__[128] = 'TimeModuleTest.py, line 128:\n    t1 = t';
		$m.__track_lines__[129] = 'TimeModuleTest.py, line 129:\n    t2 = time.mktime(time.localtime(t))';
		$m.__track_lines__[130] = 'TimeModuleTest.py, line 130:\n    self.assertEqual(t1, t2)';
		$m.__track_lines__[132] = 'TimeModuleTest.py, line 132:\n    day = 86400';
		$m.__track_lines__[133] = 'TimeModuleTest.py, line 133:\n    start2010utc = 1262304000';
		$m.__track_lines__[134] = 'TimeModuleTest.py, line 134:\n    Apr2010utc = start2010utc + 90 * day # Apr 1 2010 UTC';
		$m.__track_lines__[135] = 'TimeModuleTest.py, line 135:\n    Jul2010utc = start2010utc + 181 * day # Jul 1 2010 UTC';
		$m.__track_lines__[136] = 'TimeModuleTest.py, line 136:\n    Oct2010utc = start2010utc + 273 * day # Oct 1 2010 UTC';
		$m.__track_lines__[137] = 'TimeModuleTest.py, line 137:\n    cmp_times(start2010utc)';
		$m.__track_lines__[138] = 'TimeModuleTest.py, line 138:\n    cmp_times(Apr2010utc)';
		$m.__track_lines__[139] = 'TimeModuleTest.py, line 139:\n    cmp_times(Jul2010utc)';
		$m.__track_lines__[140] = 'TimeModuleTest.py, line 140:\n    cmp_times(Oct2010utc)';
		$m.__track_lines__[143] = "TimeModuleTest.py, line 143:\n    if __name__ == '__main__':";
		$m.__track_lines__[144] = 'TimeModuleTest.py, line 144:\n    from RunTests import RunTests';
		$m.__track_lines__[146] = 'TimeModuleTest.py, line 146:\n    print "time.tzname:", time.tzname';
		$m.__track_lines__[147] = 'TimeModuleTest.py, line 147:\n    print "time.timezone:", time.timezone';
		$m.__track_lines__[148] = 'TimeModuleTest.py, line 148:\n    print "time.altzone:", time.altzone';
		$m.__track_lines__[150] = 'TimeModuleTest.py, line 150:\n    t = RunTests()';
		$m.__track_lines__[151] = 'TimeModuleTest.py, line 151:\n    t.add(TimeModuleTest)';
		$m.__track_lines__[152] = 'TimeModuleTest.py, line 152:\n    t.start_test()';
		var $bool2;
		var $constant_int_1246924800 = new $p['int'](1246924800);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_273 = new $p['int'](273);
		var $constant_int_86400 = new $p['int'](86400);
		var $constant_int_19 = new $p['int'](19);
		var $constant_int_22 = new $p['int'](22);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_1246446123 = new $p['int'](1246446123);
		var $constant_int_44 = new $p['int'](44);
		var $constant_int_29 = new $p['int'](29);
		var $constant_int_1246446001 = new $p['int'](1246446001);
		var $constant_int_181 = new $p['int'](181);
		var $constant_int_182 = new $p['int'](182);
		var $constant_int_183 = new $p['int'](183);
		var $constant_int_139 = new $p['int'](139);
		var $constant_int_2000 = new $p['int'](2000);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_2009 = new $p['int'](2009);
		var $constant_int_2010 = new $p['int'](2010);
		var $constant_int_91 = new $p['int'](91);
		var $constant_int_1262304000 = new $p['int'](1262304000);
		var $constant_int_274 = new $p['int'](274);
		$pyjs.track.module='TimeModuleTest';
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
		$m['time'] = $p['___import___']('time', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$m['TimeModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'TimeModuleTest';
			$cls_definition.__md5__ = '9200b8d5f93b3afa9b33f2f838f7527f';
			$pyjs.track.lineno=10;
			$method = $pyjs__bind_method2('time_tuple', function(tm) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tm = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9200b8d5f93b3afa9b33f2f838f7527f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'TimeModuleTest', lineno:10};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=10;
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=11;
				var $pyjs__ret = $p['tuple']([$p['getattr'](tm, 'tm_year'), $p['getattr'](tm, 'tm_mon'), $p['getattr'](tm, 'tm_mday'), $p['getattr'](tm, 'tm_hour'), $p['getattr'](tm, 'tm_min'), $p['getattr'](tm, 'tm_sec'), $p['getattr'](tm, 'tm_wday'), $p['getattr'](tm, 'tm_yday'), $p['getattr'](tm, 'tm_isdst')]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['tm']]);
			$cls_definition['time_tuple'] = $method;
			$pyjs.track.lineno=23;
			$method = $pyjs__bind_method2('testBasics', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9200b8d5f93b3afa9b33f2f838f7527f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ttuple1,$7,ttuple,ttuple2,$29,$28,$21,$20,$22,$25,$24,$27,$26,$8,$9,$6,$10,$4,$5,$2,$3,$1,$14,$15,$16,$17,$cmp1,$11,$12,$cmp2,$18,$13,t2,$19,$30,t1,$add2,$add1,t,$23;
				$pyjs.track={module:'TimeModuleTest', lineno:23};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=23;
				$pyjs.track.lineno=24;
				t = $m['time']['time']();
				$pyjs.track.lineno=25;
				self['assertTrue'](((($cmp1=t)===($cmp2=$constant_int_1246924800)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1), 'time.time() result invalid');
				$pyjs.track.lineno=26;
				ttuple1 = $m['time']['gmtime'](t);
				$pyjs.track.lineno=27;
				t1 = $m['time']['mktime'](ttuple1);
				$pyjs.track.lineno=28;
				ttuple2 = $m['time']['localtime']((typeof ($add1=t)==typeof ($add2=$p['getattr']($m['time'], 'timezone')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
				$pyjs.track.lineno=29;
				t2 = $m['time']['mktime'](ttuple2);
				$pyjs.track.lineno=30;
				self['assertTrue']($p['op_eq'](t1, t2), 't1 and t2 differ');
				$pyjs.track.lineno=31;
				self['assertEqual']((typeof ($1=ttuple1).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), (typeof ($3=ttuple2).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0)));
				$pyjs.track.lineno=32;
				self['assertEqual']((typeof ($5=ttuple1).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_1]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_1)), (typeof ($7=ttuple2).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_1]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_1)));
				$pyjs.track.lineno=33;
				self['assertEqual']((typeof ($9=ttuple1).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_2]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_2)), (typeof ($11=ttuple2).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_2]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_2)));
				$pyjs.track.lineno=35;
				t = $constant_int_1246446123;
				$pyjs.track.lineno=36;
				ttuple = $m['time']['gmtime'](t);
				$pyjs.track.lineno=37;
				self['assertEqual']((typeof ($13=ttuple).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_0]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_0)), $constant_int_2009, 'Year mismatch');
				$pyjs.track.lineno=38;
				self['assertEqual']((typeof ($15=ttuple).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_1]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_1)), $constant_int_7, 'Month mismatch');
				$pyjs.track.lineno=39;
				self['assertEqual']((typeof ($17=ttuple).__array != 'undefined'?
					((typeof $17.__array[$18=$constant_int_2]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($constant_int_2)), $constant_int_1, 'Month day mismatch');
				$pyjs.track.lineno=40;
				self['assertEqual']((typeof ($19=ttuple).__array != 'undefined'?
					((typeof $19.__array[$20=$constant_int_3]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__($constant_int_3)), $constant_int_11, 'Hour mismatch');
				$pyjs.track.lineno=41;
				self['assertEqual']((typeof ($21=ttuple).__array != 'undefined'?
					((typeof $21.__array[$22=$constant_int_4]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($constant_int_4)), $constant_int_2, 'Minute mismatch');
				$pyjs.track.lineno=42;
				self['assertEqual']((typeof ($23=ttuple).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_5]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_5)), $constant_int_3, 'Second mismatch');
				$pyjs.track.lineno=43;
				self['assertEqual']((typeof ($25=ttuple).__array != 'undefined'?
					((typeof $25.__array[$26=$constant_int_6]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($constant_int_6)), $constant_int_2, 'Week day mismatch');
				$pyjs.track.lineno=44;
				self['assertEqual']((typeof ($27=ttuple).__array != 'undefined'?
					((typeof $27.__array[$28=$constant_int_7]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__($constant_int_7)), $constant_int_182, 'Year day mismatch');
				$pyjs.track.lineno=45;
				self['assertEqual']((typeof ($29=ttuple).__array != 'undefined'?
					((typeof $29.__array[$30=$constant_int_8]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__($constant_int_8)), $constant_int_0, 'DST mismatch');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBasics'] = $method;
			$pyjs.track.lineno=47;
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
					if (self.prototype.__md5__ !== '9200b8d5f93b3afa9b33f2f838f7527f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ttuple,s,t,assertEqual;
				$pyjs.track={module:'TimeModuleTest', lineno:47};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=48;
				t = $constant_int_1246446001;
				$pyjs.track.lineno=49;
				ttuple = $m['time']['gmtime'](t);
				$pyjs.track.lineno=50;
				s = $m['time']['strftime']('-%%-%d-%H-%I-%j-%m-%M-%p-%S-%w-%W-%y-%Y-', ttuple);
				$pyjs.track.lineno=51;
				self['assertEqual'](s, '-%-01-11-11-182-07-00-AM-01-3-26-09-2009-');
				$pyjs.track.lineno=53;
				assertEqual = function(s, expected) {
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

					$pyjs.track={module:'TimeModuleTest',lineno:53};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='TimeModuleTest';
					$pyjs.track.lineno=53;
					$pyjs.track.lineno=55;
					self['assertEqual'](s, expected, $p['sprintf']('bug #640 : %r != %r', $p['tuple']([s, expected])));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				assertEqual.__name__ = 'assertEqual';

				assertEqual.__bind_type__ = 0;
				assertEqual.__args__ = [null,null,['s'],['expected']];
				$pyjs.track.lineno=59;
				assertEqual($m['time']['strftime']('%c', ttuple), 'Wed Jul  1 11:00:01 2009');
				$pyjs.track.lineno=60;
				assertEqual($m['time']['strftime']('%x', ttuple), '07/01/09');
				$pyjs.track.lineno=61;
				assertEqual($m['time']['strftime']('%X', ttuple), '11:00:01');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrftime'] = $method;
			$pyjs.track.lineno=63;
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
					if (self.prototype.__md5__ !== '9200b8d5f93b3afa9b33f2f838f7527f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tm;
				$pyjs.track={module:'TimeModuleTest', lineno:63};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=64;
				tm = $m['time']['strptime']('01012000 1234', '%d%m%Y %H%M');
				$pyjs.track.lineno=65;
				self['assertEqual']($p['tuple']($p['__getslice'](tm, $constant_int_0, $constant_int_9)), $p['tuple']([$constant_int_2000, $constant_int_1, $constant_int_1, $constant_int_12, $constant_int_34, $constant_int_0, $constant_int_5, $constant_int_1, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]));
				$pyjs.track.lineno=66;
				tm = $m['time']['strptime']('01072000 1234', '%d%m%Y %H%M');
				$pyjs.track.lineno=67;
				self['assertEqual']($p['tuple']($p['__getslice'](tm, $constant_int_0, $constant_int_9)), $p['tuple']([$constant_int_2000, $constant_int_7, $constant_int_1, $constant_int_12, $constant_int_34, $constant_int_0, $constant_int_5, $constant_int_183, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]));
				$pyjs.track.lineno=68;
				tm = $m['time']['strptime']('010100 1234', '%d%m%y %H%M');
				$pyjs.track.lineno=69;
				self['assertEqual']($p['tuple']($p['__getslice'](tm, $constant_int_0, $constant_int_9)), $p['tuple']([$constant_int_2000, $constant_int_1, $constant_int_1, $constant_int_12, $constant_int_34, $constant_int_0, $constant_int_5, $constant_int_1, (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrptime'] = $method;
			$pyjs.track.lineno=71;
			$method = $pyjs__bind_method2('testAsctime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9200b8d5f93b3afa9b33f2f838f7527f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var t;
				$pyjs.track={module:'TimeModuleTest', lineno:71};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=72;
				t = $p['tuple']([$constant_int_2010, $constant_int_5, $constant_int_19, $constant_int_9, $constant_int_22, $constant_int_44, $constant_int_2, $constant_int_139, $constant_int_1]);
				$pyjs.track.lineno=74;
				self['assertEqual']($m['time']['asctime'](t), 'Wed May 19 09:22:44 2010');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAsctime'] = $method;
			$pyjs.track.lineno=78;
			$method = $pyjs__bind_method2('testGmtime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9200b8d5f93b3afa9b33f2f838f7527f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add13,$iter1_iter,$mod1,$mod2,day,Oct2010utc,Apr2010utc,$iter1_array,Jul2010utc,$iter1_idx,$iter1_nextval,start2010utc,$pyjs__trackstack_size_1,$add14,$add15,$add16,$add10,$add11,$add12,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter1_type,i,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
				$pyjs.track={module:'TimeModuleTest', lineno:78};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=79;
				day = $constant_int_86400;
				$pyjs.track.lineno=80;
				start2010utc = $constant_int_1262304000;
				$pyjs.track.lineno=81;
				Apr2010utc = (typeof ($add3=start2010utc)==typeof ($add4=(typeof ($mul1=$constant_int_90)==typeof ($mul2=day) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$pyjs.track.lineno=82;
				Jul2010utc = (typeof ($add5=start2010utc)==typeof ($add6=(typeof ($mul3=$constant_int_181)==typeof ($mul4=day) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				$pyjs.track.lineno=83;
				Oct2010utc = (typeof ($add7=start2010utc)==typeof ($add8=(typeof ($mul5=$constant_int_273)==typeof ($mul6=day) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				$pyjs.track.lineno=84;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_29, $constant_int_30]);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					$pyjs.track.lineno=86;
					self['assertEqual'](self['time_tuple']($m['time']['gmtime']((typeof ($add9=start2010utc)==typeof ($add10=(typeof ($mul7=i)==typeof ($mul8=day) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)))), $p['tuple']([$constant_int_2010, $constant_int_1, (typeof ($add11=i)==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)), $constant_int_0, $constant_int_0, $constant_int_0, (typeof ($mod1=(typeof ($add13=$constant_int_4)==typeof ($add14=i) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)))==typeof ($mod2=$constant_int_7) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2)), (typeof ($add15=i)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)), $constant_int_0]));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=90;
				self['assertEqual'](self['time_tuple']($m['time']['gmtime'](Apr2010utc)), $p['tuple']([$constant_int_2010, $constant_int_4, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_3, $constant_int_91, $constant_int_0]));
				$pyjs.track.lineno=94;
				self['assertEqual'](self['time_tuple']($m['time']['gmtime'](Jul2010utc)), $p['tuple']([$constant_int_2010, $constant_int_7, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_3, $constant_int_182, $constant_int_0]));
				$pyjs.track.lineno=98;
				self['assertEqual'](self['time_tuple']($m['time']['gmtime'](Oct2010utc)), $p['tuple']([$constant_int_2010, $constant_int_10, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_4, $constant_int_274, $constant_int_0]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGmtime'] = $method;
			$pyjs.track.lineno=102;
			$method = $pyjs__bind_method2('testLocaltime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9200b8d5f93b3afa9b33f2f838f7527f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod4,$mod3,$add26,$add29,$add28,cmp_times,$iter2_iter,$add21,$add20,$add22,$add25,$add24,$add27,day,Oct2010utc,Apr2010utc,$iter2_type,start2010utc,$iter2_idx,$iter2_nextval,$mul9,$add18,$add19,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,i,$add30,$add17,Jul2010utc,$pyjs__trackstack_size_1,$add23,$iter2_array;
				$pyjs.track={module:'TimeModuleTest', lineno:102};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=102;
				$pyjs.track.lineno=103;
				cmp_times = function(t) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $32,t2,$31,$bool1,$sub3,$sub2,$sub1,t1,$sub4;
					$pyjs.track={module:'TimeModuleTest',lineno:103};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='TimeModuleTest';
					$pyjs.track.lineno=103;
					$pyjs.track.lineno=104;
					t1 = $m['time']['gmtime']((typeof ($sub1=t)==typeof ($sub2=$p['getattr']($m['time'], 'timezone')) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)));
					$pyjs.track.lineno=105;
					t2 = $m['time']['localtime'](t);
					$pyjs.track.lineno=106;
					if ((($bool1=!$p['op_eq']((typeof ($31=t2).__array != 'undefined'?
						((typeof $31.__array[$32=(typeof ($usub4=$constant_int_1)=='number'?
						-$usub4:
						$p['op_usub']($usub4))]) != 'undefined'?$31.__array[$32]:
							$31.__getitem__($32)):
							$31.__getitem__((typeof ($usub4=$constant_int_1)=='number'?
						-$usub4:
						$p['op_usub']($usub4)))), $constant_int_0)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						$pyjs.track.lineno=107;
						t1 = $m['time']['gmtime']((typeof ($sub3=t)==typeof ($sub4=$p['getattr']($m['time'], 'altzone')) && (typeof $sub3=='number'||typeof $sub3=='string')?
							$sub3-$sub4:
							$p['op_sub']($sub3,$sub4)));
					}
					$pyjs.track.lineno=108;
					self['assertEqual']($p['__getslice'](self['time_tuple'](t1), 0, (typeof ($usub5=$constant_int_1)=='number'?
						-$usub5:
						$p['op_usub']($usub5))), $p['__getslice'](self['time_tuple'](t2), 0, (typeof ($usub6=$constant_int_1)=='number'?
						-$usub6:
						$p['op_usub']($usub6))));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				cmp_times.__name__ = 'cmp_times';

				cmp_times.__bind_type__ = 0;
				cmp_times.__args__ = [null,null,['t']];
				$pyjs.track.lineno=110;
				day = $constant_int_86400;
				$pyjs.track.lineno=111;
				start2010utc = $constant_int_1262304000;
				$pyjs.track.lineno=112;
				Apr2010utc = (typeof ($add17=start2010utc)==typeof ($add18=(typeof ($mul9=$constant_int_90)==typeof ($mul10=day) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
				$pyjs.track.lineno=113;
				Jul2010utc = (typeof ($add19=start2010utc)==typeof ($add20=(typeof ($mul11=$constant_int_181)==typeof ($mul12=day) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12))) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20));
				$pyjs.track.lineno=114;
				Oct2010utc = (typeof ($add21=start2010utc)==typeof ($add22=(typeof ($mul13=$constant_int_273)==typeof ($mul14=day) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				$pyjs.track.lineno=115;
				cmp_times(start2010utc);
				$pyjs.track.lineno=116;
				cmp_times(Apr2010utc);
				$pyjs.track.lineno=117;
				cmp_times(Jul2010utc);
				$pyjs.track.lineno=118;
				cmp_times(Oct2010utc);
				$pyjs.track.lineno=119;
				$pyjs.track.lineno=119;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
				$pyjs.track.lineno=120;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_29, $constant_int_30]);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$pyjs.track.lineno=122;
					self['assertEqual'](self['time_tuple']($m['time']['gmtime']((typeof ($add23=start2010utc)==typeof ($add24=(typeof ($mul15=i)==typeof ($mul16=day) && typeof $mul15=='number'?
						$mul15*$mul16:
						$p['op_mul']($mul15,$mul16))) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24)))), $p['tuple']([$constant_int_2010, $constant_int_1, (typeof ($add25=i)==typeof ($add26=$constant_int_1) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26)), $constant_int_0, $constant_int_0, $constant_int_0, (typeof ($mod3=(typeof ($add27=$constant_int_4)==typeof ($add28=i) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))==typeof ($mod4=$constant_int_7) && typeof $mod3=='number'?
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
						$p['op_mod']($mod3,$mod4)), (typeof ($add29=i)==typeof ($add30=$constant_int_1) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30)), $constant_int_0]));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='TimeModuleTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLocaltime'] = $method;
			$pyjs.track.lineno=126;
			$method = $pyjs__bind_method2('testMktime', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9200b8d5f93b3afa9b33f2f838f7527f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul17,cmp_times,$add32,start2010utc,$add31,$add36,$mul19,$mul18,Oct2010utc,Apr2010utc,Jul2010utc,$add34,$add33,$add35,$mul22,day,$mul20,$mul21;
				$pyjs.track={module:'TimeModuleTest', lineno:126};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TimeModuleTest';
				$pyjs.track.lineno=126;
				$pyjs.track.lineno=127;
				cmp_times = function(t) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var t2,t1;
					$pyjs.track={module:'TimeModuleTest',lineno:127};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='TimeModuleTest';
					$pyjs.track.lineno=127;
					$pyjs.track.lineno=128;
					t1 = t;
					$pyjs.track.lineno=129;
					t2 = $m['time']['mktime']($m['time']['localtime'](t));
					$pyjs.track.lineno=130;
					self['assertEqual'](t1, t2);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				cmp_times.__name__ = 'cmp_times';

				cmp_times.__bind_type__ = 0;
				cmp_times.__args__ = [null,null,['t']];
				$pyjs.track.lineno=132;
				day = $constant_int_86400;
				$pyjs.track.lineno=133;
				start2010utc = $constant_int_1262304000;
				$pyjs.track.lineno=134;
				Apr2010utc = (typeof ($add31=start2010utc)==typeof ($add32=(typeof ($mul17=$constant_int_90)==typeof ($mul18=day) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
				$pyjs.track.lineno=135;
				Jul2010utc = (typeof ($add33=start2010utc)==typeof ($add34=(typeof ($mul19=$constant_int_181)==typeof ($mul20=day) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34));
				$pyjs.track.lineno=136;
				Oct2010utc = (typeof ($add35=start2010utc)==typeof ($add36=(typeof ($mul21=$constant_int_273)==typeof ($mul22=day) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36));
				$pyjs.track.lineno=137;
				cmp_times(start2010utc);
				$pyjs.track.lineno=138;
				cmp_times(Apr2010utc);
				$pyjs.track.lineno=139;
				cmp_times(Jul2010utc);
				$pyjs.track.lineno=140;
				cmp_times(Oct2010utc);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMktime'] = $method;
			$pyjs.track.lineno=8;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TimeModuleTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=143;
		if ((($bool2=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$pyjs.track.lineno=144;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['RunTests'] = $p['___import___']('RunTests.RunTests', null, null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=146;
			$pyjs.track.lineno=147;
			$pyjs.track.lineno=148;
			$pyjs.track.lineno=150;
			$m['t'] = $m['RunTests']();
			$pyjs.track.lineno=151;
			$m['t']['add']($m['TimeModuleTest']);
			$pyjs.track.lineno=152;
			$m['t']['start_test']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TimeModuleTest */


/* end module: TimeModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'time', 'RunTests.RunTests', 'RunTests']
*/
