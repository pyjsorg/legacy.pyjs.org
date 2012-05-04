/* start module: MathModuleTest */
$pyjs.loaded_modules['MathModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MathModuleTest'].__was_initialized__) return $pyjs.loaded_modules['MathModuleTest'];
	var $m = $pyjs.loaded_modules["MathModuleTest"];
	$m.__repr__ = function() { return "<module: MathModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MathModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'MathModuleTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[2] = 'MathModuleTest.py, line 2:\n    import math';
		$m.__track_lines__[4] = 'MathModuleTest.py, line 4:\n    class MathModuleTest(UnitTest):';
		$m.__track_lines__[6] = 'MathModuleTest.py, line 6:\n    def testCeil(self):';
		$m.__track_lines__[7] = 'MathModuleTest.py, line 7:\n    self.assertEqual(math.ceil(1.1), 2.0)';
		$m.__track_lines__[8] = 'MathModuleTest.py, line 8:\n    self.assertEqual(math.ceil(-1.1), -1.0)';
		$m.__track_lines__[10] = 'MathModuleTest.py, line 10:\n    def testFloor(self):';
		$m.__track_lines__[11] = 'MathModuleTest.py, line 11:\n    self.assertEqual(math.floor(1.1), 1.0)';
		$m.__track_lines__[12] = 'MathModuleTest.py, line 12:\n    self.assertEqual(math.floor(-1.1), -2.0)';
		$m.__track_lines__[14] = 'MathModuleTest.py, line 14:\n    def testFabs(self):';
		$m.__track_lines__[15] = 'MathModuleTest.py, line 15:\n    self.assertEqual(math.fabs(1.1), 1.1)';
		$m.__track_lines__[16] = 'MathModuleTest.py, line 16:\n    self.assertEqual(math.fabs(-1.1), 1.1)';
		$m.__track_lines__[18] = 'MathModuleTest.py, line 18:\n    def testExp(self):';
		$m.__track_lines__[19] = 'MathModuleTest.py, line 19:\n    self.assertEqual(math.exp(1), math.e)';
		$m.__track_lines__[21] = 'MathModuleTest.py, line 21:\n    def testLog(self):';
		$m.__track_lines__[22] = 'MathModuleTest.py, line 22:\n    self.assertEqual(math.log(math.e), 1)';
		$m.__track_lines__[24] = 'MathModuleTest.py, line 23:\n    self.assertTrue( ... math.log(100, 10) - 2 < 1e-12,';
		$m.__track_lines__[28] = 'MathModuleTest.py, line 27:\n    self.assertTrue( ... math.log10(1000) - 3 < 1e-12,';
		$m.__track_lines__[32] = 'MathModuleTest.py, line 32:\n    def testPow(self):';
		$m.__track_lines__[33] = 'MathModuleTest.py, line 33:\n    self.assertEqual(math.pow(2, 3), 8.0)';
		$m.__track_lines__[34] = 'MathModuleTest.py, line 34:\n    self.assertEqual(math.pow(4, .5), 2.0)';
		$m.__track_lines__[36] = 'MathModuleTest.py, line 36:\n    def testSqrt(self):';
		$m.__track_lines__[37] = 'MathModuleTest.py, line 37:\n    self.assertEqual(math.sqrt(4), 2.0)';
		$m.__track_lines__[39] = 'MathModuleTest.py, line 39:\n    def testCos(self):';
		$m.__track_lines__[40] = 'MathModuleTest.py, line 40:\n    self.assertEqual(math.cos(math.pi), -1.0)';
		$m.__track_lines__[42] = 'MathModuleTest.py, line 42:\n    def testSin(self):';
		$m.__track_lines__[43] = 'MathModuleTest.py, line 43:\n    self.assertEqual(math.sin(0.5 * math.pi), 1.0)';
		$m.__track_lines__[45] = 'MathModuleTest.py, line 45:\n    def testTan(self):';
		$m.__track_lines__[46] = 'MathModuleTest.py, line 46:\n    self.assertTrue(math.fabs(math.tan(1.0) - math.sin(1.0)/math.cos(1.0)) < 1e-12)';
		$m.__track_lines__[48] = 'MathModuleTest.py, line 48:\n    def testAcos(self):';
		$m.__track_lines__[49] = 'MathModuleTest.py, line 49:\n    self.assertTrue(math.acos(math.cos(1)) - 1 < 1e-12)';
		$m.__track_lines__[51] = 'MathModuleTest.py, line 51:\n    def testAsin(self):';
		$m.__track_lines__[52] = 'MathModuleTest.py, line 52:\n    self.assertTrue(math.asin(math.sin(1)) - 1 < 1e-12)';
		$m.__track_lines__[54] = 'MathModuleTest.py, line 54:\n    def testAtan(self):';
		$m.__track_lines__[55] = 'MathModuleTest.py, line 55:\n    self.assertTrue(math.atan(math.tan(1)) - 1 < 1e-12)';
		$m.__track_lines__[57] = 'MathModuleTest.py, line 57:\n    def testAtan2(self):';
		$m.__track_lines__[58] = 'MathModuleTest.py, line 58:\n    self.assertTrue(math.atan2(1, 1) - math.atan(1) < 1e-12)';
		$m.__track_lines__[60] = 'MathModuleTest.py, line 60:\n    def testFsum(self):';
		$m.__track_lines__[61] = "MathModuleTest.py, line 61:\n    if hasattr(math, 'fsum'):";
		$m.__track_lines__[63] = 'MathModuleTest.py, line 63:\n    numbers = 20 * [1e-8] + [0.001, 1e9]';
		$m.__track_lines__[64] = 'MathModuleTest.py, line 64:\n    s = 0';
		$m.__track_lines__[65] = 'MathModuleTest.py, line 65:\n    for number in numbers:';
		$m.__track_lines__[66] = 'MathModuleTest.py, line 66:\n    s += number';
		$m.__track_lines__[67] = 'MathModuleTest.py, line 67:\n    numbers.reverse()';
		$m.__track_lines__[68] = 'MathModuleTest.py, line 68:\n    self.assertEqual(math.fsum(numbers), s)';
		$m.__track_lines__[70] = 'MathModuleTest.py, line 70:\n    def testFrexp(self):';
		$m.__track_lines__[71] = 'MathModuleTest.py, line 71:\n    m, e = math.frexp(1)';
		$m.__track_lines__[72] = 'MathModuleTest.py, line 72:\n    self.assertEqual(m * 2. ** e, 1)';
		$m.__track_lines__[74] = 'MathModuleTest.py, line 74:\n    def testLdexp(self):';
		$m.__track_lines__[75] = 'MathModuleTest.py, line 75:\n    self.assertEqual(math.ldexp(.5, 3), 4)';
		$m.__track_lines__[77] = 'MathModuleTest.py, line 77:\n    def testDegrees(self):';
		$m.__track_lines__[78] = 'MathModuleTest.py, line 78:\n    self.assertTrue(math.degrees(math.pi/2) - 90 < 1e-12)';
		$m.__track_lines__[80] = 'MathModuleTest.py, line 80:\n    def testRadians(self):';
		$m.__track_lines__[81] = 'MathModuleTest.py, line 81:\n    self.assertTrue(math.radians(90) - math.pi/2 < 1e-12)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_90 = new $p['int'](90);
		$pyjs.track.module='MathModuleTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['math'] = $p['___import___']('math', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['MathModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'MathModuleTest';
			$cls_definition.__md5__ = 'f488dd75aff820a637507a655cd75ead';
			$pyjs.track.lineno=6;
			$method = $pyjs__bind_method2('testCeil', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MathModuleTest', lineno:6};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=6;
				$pyjs.track.lineno=7;
				self['assertEqual']($m['math']['ceil'](1.1), 2.0);
				$pyjs.track.lineno=8;
				self['assertEqual']($m['math']['ceil']((typeof ($usub1=1.1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))), (typeof ($usub2=1.0)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCeil'] = $method;
			$pyjs.track.lineno=10;
			$method = $pyjs__bind_method2('testFloor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MathModuleTest', lineno:10};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=10;
				$pyjs.track.lineno=11;
				self['assertEqual']($m['math']['floor'](1.1), 1.0);
				$pyjs.track.lineno=12;
				self['assertEqual']($m['math']['floor']((typeof ($usub3=1.1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))), (typeof ($usub4=2.0)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFloor'] = $method;
			$pyjs.track.lineno=14;
			$method = $pyjs__bind_method2('testFabs', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MathModuleTest', lineno:14};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=14;
				$pyjs.track.lineno=15;
				self['assertEqual']($m['math']['fabs'](1.1), 1.1);
				$pyjs.track.lineno=16;
				self['assertEqual']($m['math']['fabs']((typeof ($usub5=1.1)=='number'?
					-$usub5:
					$p['op_usub']($usub5))), 1.1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFabs'] = $method;
			$pyjs.track.lineno=18;
			$method = $pyjs__bind_method2('testExp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MathModuleTest', lineno:18};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=18;
				$pyjs.track.lineno=19;
				self['assertEqual']($m['math']['exp']($constant_int_1), $p['getattr']($m['math'], 'e'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExp'] = $method;
			$pyjs.track.lineno=21;
			$method = $pyjs__bind_method2('testLog', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,$cmp3,$cmp2,$sub3,$sub2,$sub1,$sub4;
				$pyjs.track={module:'MathModuleTest', lineno:21};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=21;
				$pyjs.track.lineno=22;
				self['assertEqual']($m['math']['log']($p['getattr']($m['math'], 'e')), $constant_int_1);
				$pyjs.track.lineno=24;
				self['assertTrue'](((($cmp1=(typeof ($sub1=$m['math']['log']($constant_int_100, $constant_int_10))==typeof ($sub2=$constant_int_2) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))===($cmp2=1e-12)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1), $p['sprintf']('math.log(100, 10): %s', $m['math']['log']($constant_int_100, $constant_int_10)));
				$pyjs.track.lineno=28;
				self['assertTrue'](((($cmp3=(typeof ($sub3=$m['math']['log10']($constant_int_1000))==typeof ($sub4=$constant_int_3) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))===($cmp4=1e-12)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1), $p['sprintf']('math.log10(1000): %s', $m['math']['log10']($constant_int_1000)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLog'] = $method;
			$pyjs.track.lineno=32;
			$method = $pyjs__bind_method2('testPow', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MathModuleTest', lineno:32};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=32;
				$pyjs.track.lineno=33;
				self['assertEqual']($m['math']['pow']($constant_int_2, $constant_int_3), 8.0);
				$pyjs.track.lineno=34;
				self['assertEqual']($m['math']['pow']($constant_int_4, 0.5), 2.0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPow'] = $method;
			$pyjs.track.lineno=36;
			$method = $pyjs__bind_method2('testSqrt', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MathModuleTest', lineno:36};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=36;
				$pyjs.track.lineno=37;
				self['assertEqual']($m['math']['sqrt']($constant_int_4), 2.0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSqrt'] = $method;
			$pyjs.track.lineno=39;
			$method = $pyjs__bind_method2('testCos', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MathModuleTest', lineno:39};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=39;
				$pyjs.track.lineno=40;
				self['assertEqual']($m['math']['cos']($p['getattr']($m['math'], 'pi')), (typeof ($usub6=1.0)=='number'?
					-$usub6:
					$p['op_usub']($usub6)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCos'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('testSin', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul2,$mul1;
				$pyjs.track={module:'MathModuleTest', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				self['assertEqual']($m['math']['sin']((typeof ($mul1=0.5)==typeof ($mul2=$p['getattr']($m['math'], 'pi')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))), 1.0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSin'] = $method;
			$pyjs.track.lineno=45;
			$method = $pyjs__bind_method2('testTan', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$cmp6,$div2,$div1,$sub6,$sub5;
				$pyjs.track={module:'MathModuleTest', lineno:45};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=46;
				self['assertTrue'](((($cmp5=$m['math']['fabs']((typeof ($sub5=$m['math']['tan'](1.0))==typeof ($sub6=(typeof ($div1=$m['math']['sin'](1.0))==typeof ($div2=$m['math']['cos'](1.0)) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6))))===($cmp6=1e-12)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTan'] = $method;
			$pyjs.track.lineno=48;
			$method = $pyjs__bind_method2('testAcos', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub8,$sub7,$cmp7,$cmp8;
				$pyjs.track={module:'MathModuleTest', lineno:48};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=48;
				$pyjs.track.lineno=49;
				self['assertTrue'](((($cmp7=(typeof ($sub7=$m['math']['acos']($m['math']['cos']($constant_int_1)))==typeof ($sub8=$constant_int_1) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)))===($cmp8=1e-12)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAcos'] = $method;
			$pyjs.track.lineno=51;
			$method = $pyjs__bind_method2('testAsin', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub10,$cmp9,$sub9,$cmp10;
				$pyjs.track={module:'MathModuleTest', lineno:51};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=52;
				self['assertTrue'](((($cmp9=(typeof ($sub9=$m['math']['asin']($m['math']['sin']($constant_int_1)))==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)))===($cmp10=1e-12)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == -1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAsin'] = $method;
			$pyjs.track.lineno=54;
			$method = $pyjs__bind_method2('testAtan', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub12,$cmp11,$sub11,$cmp12;
				$pyjs.track={module:'MathModuleTest', lineno:54};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=55;
				self['assertTrue'](((($cmp11=(typeof ($sub11=$m['math']['atan']($m['math']['tan']($constant_int_1)))==typeof ($sub12=$constant_int_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12)))===($cmp12=1e-12)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAtan'] = $method;
			$pyjs.track.lineno=57;
			$method = $pyjs__bind_method2('testAtan2', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$cmp14,$cmp13,$sub14;
				$pyjs.track={module:'MathModuleTest', lineno:57};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=57;
				$pyjs.track.lineno=58;
				self['assertTrue'](((($cmp13=(typeof ($sub13=$m['math']['atan2']($constant_int_1, $constant_int_1))==typeof ($sub14=$m['math']['atan']($constant_int_1)) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14)))===($cmp14=1e-12)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAtan2'] = $method;
			$pyjs.track.lineno=60;
			$method = $pyjs__bind_method2('testFsum', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul4,$iter1_nextval,$iter1_type,$iter1_idx,number,$iter1_iter,$add2,$add3,s,$bool1,numbers,$add4,$pyjs__trackstack_size_1,$add1,$mul3,$iter1_array;
				$pyjs.track={module:'MathModuleTest', lineno:60};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=61;
				if ((($bool1=$p['hasattr']($m['math'], 'fsum')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=63;
					numbers = (typeof ($add1=(typeof ($mul3=$constant_int_20)==typeof ($mul4=$p['list']([1e-08])) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)))==typeof ($add2=$p['list']([0.001, 1000000000.0])) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
					$pyjs.track.lineno=64;
					s = $constant_int_0;
					$pyjs.track.lineno=65;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter1_iter = numbers;
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						number = $iter1_nextval;
						$pyjs.track.lineno=66;
						s = (typeof ($add3=s)==typeof ($add4=number) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='MathModuleTest';
					$pyjs.track.lineno=67;
					numbers['reverse']();
					$pyjs.track.lineno=68;
					self['assertEqual']($m['math']['fsum'](numbers), s);
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFsum'] = $method;
			$pyjs.track.lineno=70;
			$method = $pyjs__bind_method2('testFrexp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$pow2,$pow1,m,$mul6,$mul5;
				$pyjs.track={module:'MathModuleTest', lineno:70};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=70;
				$pyjs.track.lineno=71;
				var $tupleassign1 = $p['__ass_unpack']($m['math']['frexp']($constant_int_1), 2, null);
				m = $tupleassign1[0];
				e = $tupleassign1[1];
				$pyjs.track.lineno=72;
				self['assertEqual']((typeof ($mul5=m)==typeof ($mul6=(typeof ($pow1=2.0)==typeof ($pow2=e) && typeof $pow1=='number'?
					Math.pow($pow1,$pow2):
					$p['op_pow']($pow1,$pow2))) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFrexp'] = $method;
			$pyjs.track.lineno=74;
			$method = $pyjs__bind_method2('testLdexp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MathModuleTest', lineno:74};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=74;
				$pyjs.track.lineno=75;
				self['assertEqual']($m['math']['ldexp'](0.5, $constant_int_3), $constant_int_4);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLdexp'] = $method;
			$pyjs.track.lineno=77;
			$method = $pyjs__bind_method2('testDegrees', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub16,$sub15,$cmp15,$cmp16,$div3,$div4;
				$pyjs.track={module:'MathModuleTest', lineno:77};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=77;
				$pyjs.track.lineno=78;
				self['assertTrue'](((($cmp15=(typeof ($sub15=$m['math']['degrees']((typeof ($div3=$p['getattr']($m['math'], 'pi'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))))==typeof ($sub16=$constant_int_90) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16)))===($cmp16=1e-12)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == -1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDegrees'] = $method;
			$pyjs.track.lineno=80;
			$method = $pyjs__bind_method2('testRadians', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f488dd75aff820a637507a655cd75ead') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub18,$sub17,$cmp17,$div6,$cmp18,$div5;
				$pyjs.track={module:'MathModuleTest', lineno:80};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MathModuleTest';
				$pyjs.track.lineno=80;
				$pyjs.track.lineno=81;
				self['assertTrue'](((($cmp17=(typeof ($sub17=$m['math']['radians']($constant_int_90))==typeof ($sub18=(typeof ($div5=$p['getattr']($m['math'], 'pi'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18)))===($cmp18=1e-12)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRadians'] = $method;
			$pyjs.track.lineno=4;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MathModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end MathModuleTest */


/* end module: MathModuleTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'math']
*/
