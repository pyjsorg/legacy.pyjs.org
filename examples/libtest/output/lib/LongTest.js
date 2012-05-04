/* start module: LongTest */
$pyjs.loaded_modules['LongTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LongTest'].__was_initialized__) return $pyjs.loaded_modules['LongTest'];
	var $m = $pyjs.loaded_modules["LongTest"];
	$m.__repr__ = function() { return "<module: LongTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LongTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'LongTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'LongTest.py, line 3:\n    class LongTest(UnitTest):';
		$m.__track_lines__[5] = 'LongTest.py, line 5:\n    def testAdd(self):';
		$m.__track_lines__[6] = 'LongTest.py, line 6:\n    x = 0L';
		$m.__track_lines__[7] = 'LongTest.py, line 7:\n    y = 1L';
		$m.__track_lines__[8] = 'LongTest.py, line 8:\n    x += y';
		$m.__track_lines__[9] = 'LongTest.py, line 9:\n    self.assertTrue(x == 1L)';
		$m.__track_lines__[11] = 'LongTest.py, line 11:\n    def testType(self):';
		$m.__track_lines__[14] = 'LongTest.py, line 14:\n    x = 1<<64';
		$m.__track_lines__[15] = 'LongTest.py, line 15:\n    self.assertTrue(x == 18446744073709551616L, "#302 - %s != 18446744073709551616L" % repr(x))';
		$m.__track_lines__[16] = 'LongTest.py, line 16:\n    self.assertTrue(isinstance(x, long))';
		$m.__track_lines__[19] = 'LongTest.py, line 19:\n    x = 1L<<64';
		$m.__track_lines__[20] = 'LongTest.py, line 20:\n    self.assertTrue(x == 18446744073709551616L, "%s != 18446744073709551616L" % repr(x))';
		$m.__track_lines__[21] = 'LongTest.py, line 21:\n    self.assertTrue(isinstance(x, long))';
		$m.__track_lines__[23] = 'LongTest.py, line 23:\n    x = 1<<20';
		$m.__track_lines__[24] = 'LongTest.py, line 24:\n    self.assertTrue(x == 1048576, "%s != 1048576" % repr(x))';
		$m.__track_lines__[25] = 'LongTest.py, line 25:\n    self.assertTrue(isinstance(x, int))';
		$m.__track_lines__[27] = 'LongTest.py, line 27:\n    x = 1L<<20';
		$m.__track_lines__[28] = 'LongTest.py, line 28:\n    self.assertTrue(x == 1048576L, "%s != 1048576L" % repr(x))';
		$m.__track_lines__[29] = 'LongTest.py, line 29:\n    self.assertTrue(isinstance(x, long))';
		$m.__track_lines__[31] = 'LongTest.py, line 31:\n    self.assertTrue(int(18446744073709551616) is 18446744073709551616L, "No automatic int to long conversion")';
		$m.__track_lines__[33] = 'LongTest.py, line 33:\n    if int(18446744073709551616) == 18446744073709551616L:';
		$m.__track_lines__[36] = 'LongTest.py, line 36:\n    x = 1<<64';
		$m.__track_lines__[37] = 'LongTest.py, line 37:\n    self.assertEqual(x, 18446744073709551616L)';
		$m.__track_lines__[39] = 'LongTest.py, line 39:\n    x = 0x7fffffff + 1';
		$m.__track_lines__[40] = 'LongTest.py, line 40:\n    self.assertEqual(x, 2147483648L)';
		$m.__track_lines__[42] = 'LongTest.py, line 42:\n    x = 0x7fffffff + 0x7fffffff';
		$m.__track_lines__[43] = 'LongTest.py, line 43:\n    self.assertEqual(x, 4294967294L)';
		$m.__track_lines__[45] = 'LongTest.py, line 45:\n    x = -0x7fffffff - 2';
		$m.__track_lines__[46] = 'LongTest.py, line 46:\n    self.assertEqual(x, -2147483649L)';
		$m.__track_lines__[48] = 'LongTest.py, line 48:\n    x = -0x7fffffff - 0x7fffffff';
		$m.__track_lines__[49] = 'LongTest.py, line 49:\n    self.assertEqual(x, -4294967294)';
		$m.__track_lines__[51] = 'LongTest.py, line 51:\n    x = 0x7fffffff * 2';
		$m.__track_lines__[52] = 'LongTest.py, line 52:\n    self.assertEqual(x, 4294967294)';
		$m.__track_lines__[54] = 'LongTest.py, line 54:\n    x = 0x7fffffff * -2';
		$m.__track_lines__[55] = 'LongTest.py, line 55:\n    self.assertEqual(x, -4294967294)';
		$m.__track_lines__[57] = 'LongTest.py, line 57:\n    x = 0x7ffff ** 2';
		$m.__track_lines__[58] = 'LongTest.py, line 58:\n    self.assertEqual(x, 274876858369)';
		$m.__track_lines__[60] = 'LongTest.py, line 60:\n    self.assertEqual(1 << 2L, 4L)';
		$m.__track_lines__[61] = 'LongTest.py, line 61:\n    self.assertEqual(6 >> 2L, 1L)';
		$m.__track_lines__[63] = 'LongTest.py, line 63:\n    x = 1';
		$m.__track_lines__[64] = 'LongTest.py, line 64:\n    x <<= 3L';
		$m.__track_lines__[65] = 'LongTest.py, line 65:\n    self.assertEqual(x, 8L)';
		$m.__track_lines__[66] = 'LongTest.py, line 66:\n    x = 8';
		$m.__track_lines__[67] = 'LongTest.py, line 67:\n    x >>= 1L';
		$m.__track_lines__[68] = 'LongTest.py, line 68:\n    self.assertEqual(x, 4L)';

		var $constant_int_64 = new $p['int'](64);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_1048576 = new $p['int'](1048576);
		var $constant_int_274876858369 = new $p['int'](274876858369);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_524287 = new $p['int'](524287);
		var $constant_int_4294967294 = new $p['int'](4294967294);
		var $constant_int_2147483647 = new $p['int'](2147483647);
		var $constant_long_0 = new $p['long'](0);
		var $constant_long_1 = new $p['long'](1);
		var $constant_long_2 = new $p['long'](2);
		var $constant_long_3 = new $p['long'](3);
		var $constant_long_2147483649 = new $p['long'](2147483649);
		var $constant_long_2147483648 = new $p['long'](2147483648);
		var $constant_long_18446744073709551616 = new $p['long'](18446744073709551616);
		var $constant_long_8 = new $p['long'](8);
		var $constant_long_4 = new $p['long'](4);
		var $constant_long_4294967294 = new $p['long'](4294967294);
		var $constant_long_1048576 = new $p['long'](1048576);
		$pyjs.track.module='LongTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['LongTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'LongTest';
			$cls_definition.__md5__ = '27f704eb321b491a910bd40e1c633e10';
			$pyjs.track.lineno=5;
			$method = $pyjs__bind_method2('testAdd', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '27f704eb321b491a910bd40e1c633e10') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var y,x,$add1,$add2;
				$pyjs.track={module:'LongTest', lineno:5};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTest';
				$pyjs.track.lineno=5;
				$pyjs.track.lineno=6;
				x = $constant_long_0;
				$pyjs.track.lineno=7;
				y = $constant_long_1;
				$pyjs.track.lineno=8;
				x = (typeof ($add1=x)==typeof ($add2=y) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				$pyjs.track.lineno=9;
				self['assertTrue']($p['op_eq'](x, $constant_long_1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAdd'] = $method;
			$pyjs.track.lineno=11;
			$method = $pyjs__bind_method2('testType', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '27f704eb321b491a910bd40e1c633e10') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pow2,$pow1,$sub2,$add3,$bool1,$add6,$add4,$add5,$sub3,x,$sub1,$mul4,$mul3,$mul2,$mul1,$sub4;
				$pyjs.track={module:'LongTest', lineno:11};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTest';
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=14;
				x = $p['op_bitshiftleft']($constant_int_1,$constant_int_64);
				$pyjs.track.lineno=15;
				self['assertTrue']($p['op_eq'](x, $constant_long_18446744073709551616), $p['sprintf']('#302 - %s != 18446744073709551616L', $p['repr'](x)));
				$pyjs.track.lineno=16;
				self['assertTrue']($p['isinstance'](x, $p['long']));
				$pyjs.track.lineno=19;
				x = $p['op_bitshiftleft']($constant_long_1,$constant_int_64);
				$pyjs.track.lineno=20;
				self['assertTrue']($p['op_eq'](x, $constant_long_18446744073709551616), $p['sprintf']('%s != 18446744073709551616L', $p['repr'](x)));
				$pyjs.track.lineno=21;
				self['assertTrue']($p['isinstance'](x, $p['long']));
				$pyjs.track.lineno=23;
				x = $p['op_bitshiftleft']($constant_int_1,$constant_int_20);
				$pyjs.track.lineno=24;
				self['assertTrue']($p['op_eq'](x, $constant_int_1048576), $p['sprintf']('%s != 1048576', $p['repr'](x)));
				$pyjs.track.lineno=25;
				self['assertTrue']($p['isinstance'](x, $p['int']));
				$pyjs.track.lineno=27;
				x = $p['op_bitshiftleft']($constant_long_1,$constant_int_20);
				$pyjs.track.lineno=28;
				self['assertTrue']($p['op_eq'](x, $constant_long_1048576), $p['sprintf']('%s != 1048576L', $p['repr'](x)));
				$pyjs.track.lineno=29;
				self['assertTrue']($p['isinstance'](x, $p['long']));
				$pyjs.track.lineno=31;
				self['assertTrue']($p['op_is']($p['int']($constant_long_18446744073709551616), $constant_long_18446744073709551616), 'No automatic int to long conversion');
				$pyjs.track.lineno=33;
				if ((($bool1=$p['op_eq']($p['int']($constant_long_18446744073709551616), $constant_long_18446744073709551616)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=36;
					x = $p['op_bitshiftleft']($constant_int_1,$constant_int_64);
					$pyjs.track.lineno=37;
					self['assertEqual'](x, $constant_long_18446744073709551616);
					$pyjs.track.lineno=39;
					x = (typeof ($add3=$constant_int_2147483647)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					$pyjs.track.lineno=40;
					self['assertEqual'](x, $constant_long_2147483648);
					$pyjs.track.lineno=42;
					x = (typeof ($add5=$constant_int_2147483647)==typeof ($add6=$constant_int_2147483647) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
					$pyjs.track.lineno=43;
					self['assertEqual'](x, $constant_long_4294967294);
					$pyjs.track.lineno=45;
					x = (typeof ($sub1=(typeof ($usub1=$constant_int_2147483647)=='number'?
						-$usub1:
						$p['op_usub']($usub1)))==typeof ($sub2=$constant_int_2) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
					$pyjs.track.lineno=46;
					self['assertEqual'](x, (typeof ($usub2=$constant_long_2147483649)=='number'?
						-$usub2:
						$p['op_usub']($usub2)));
					$pyjs.track.lineno=48;
					x = (typeof ($sub3=(typeof ($usub3=$constant_int_2147483647)=='number'?
						-$usub3:
						$p['op_usub']($usub3)))==typeof ($sub4=$constant_int_2147483647) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
					$pyjs.track.lineno=49;
					self['assertEqual'](x, (typeof ($usub4=$constant_int_4294967294)=='number'?
						-$usub4:
						$p['op_usub']($usub4)));
					$pyjs.track.lineno=51;
					x = (typeof ($mul1=$constant_int_2147483647)==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
					$pyjs.track.lineno=52;
					self['assertEqual'](x, $constant_int_4294967294);
					$pyjs.track.lineno=54;
					x = (typeof ($mul3=$constant_int_2147483647)==typeof ($mul4=(typeof ($usub5=$constant_int_2)=='number'?
						-$usub5:
						$p['op_usub']($usub5))) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4));
					$pyjs.track.lineno=55;
					self['assertEqual'](x, (typeof ($usub6=$constant_int_4294967294)=='number'?
						-$usub6:
						$p['op_usub']($usub6)));
					$pyjs.track.lineno=57;
					x = (typeof ($pow1=$constant_int_524287)==typeof ($pow2=$constant_int_2) && typeof $pow1=='number'?
						Math.pow($pow1,$pow2):
						$p['op_pow']($pow1,$pow2));
					$pyjs.track.lineno=58;
					self['assertEqual'](x, $constant_int_274876858369);
					$pyjs.track.lineno=60;
					self['assertEqual']($p['op_bitshiftleft']($constant_int_1,$constant_long_2), $constant_long_4);
					$pyjs.track.lineno=61;
					self['assertEqual']($p['op_bitshiftright']($constant_int_6,$constant_long_2), $constant_long_1);
					$pyjs.track.lineno=63;
					x = $constant_int_1;
					$pyjs.track.lineno=64;
					x = $p['op_bitshiftleft'](x,$constant_long_3);
					$pyjs.track.lineno=65;
					self['assertEqual'](x, $constant_long_8);
					$pyjs.track.lineno=66;
					x = $constant_int_8;
					$pyjs.track.lineno=67;
					x = $p['op_bitshiftright'](x,$constant_long_1);
					$pyjs.track.lineno=68;
					self['assertEqual'](x, $constant_long_4);
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testType'] = $method;
			$pyjs.track.lineno=3;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LongTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end LongTest */


/* end module: LongTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/
