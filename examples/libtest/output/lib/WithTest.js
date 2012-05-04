/* start module: WithTest */
$pyjs.loaded_modules['WithTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['WithTest'].__was_initialized__) return $pyjs.loaded_modules['WithTest'];
	var $m = $pyjs.loaded_modules["WithTest"];
	$m.__repr__ = function() { return "<module: WithTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'WithTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'WithTest.py, line 1:\n    import UnitTest';
		$m.__track_lines__[3] = 'WithTest.py, line 3:\n    class WithTest(UnitTest.UnitTest):';
		$m.__track_lines__[4] = 'WithTest.py, line 4:\n    class Dummy(object):';
		$m.__track_lines__[5] = 'WithTest.py, line 5:\n    def __init__(self, value=None, gobble=False):';
		$m.__track_lines__[6] = 'WithTest.py, line 6:\n    if value is None:';
		$m.__track_lines__[7] = 'WithTest.py, line 7:\n    value = self';
		$m.__track_lines__[8] = 'WithTest.py, line 8:\n    self.value = value';
		$m.__track_lines__[9] = 'WithTest.py, line 9:\n    self.gobble = gobble';
		$m.__track_lines__[10] = 'WithTest.py, line 10:\n    self.enter_called = False';
		$m.__track_lines__[11] = 'WithTest.py, line 11:\n    self.exit_called = False';
		$m.__track_lines__[13] = 'WithTest.py, line 13:\n    def __enter__(self):';
		$m.__track_lines__[14] = 'WithTest.py, line 14:\n    self.enter_called = True';
		$m.__track_lines__[15] = 'WithTest.py, line 15:\n    return self.value';
		$m.__track_lines__[17] = 'WithTest.py, line 17:\n    def __exit__(self, *exc_info):';
		$m.__track_lines__[18] = 'WithTest.py, line 18:\n    self.exit_called = True';
		$m.__track_lines__[19] = 'WithTest.py, line 19:\n    self.exc_info = exc_info';
		$m.__track_lines__[20] = 'WithTest.py, line 20:\n    if self.gobble:';
		$m.__track_lines__[21] = 'WithTest.py, line 21:\n    return True';
		$m.__track_lines__[23] = 'WithTest.py, line 23:\n    def testSimple(self):';
		$m.__track_lines__[24] = 'WithTest.py, line 24:\n    with self.Dummy():';
		$m.__track_lines__[25] = 'WithTest.py, line 25:\n    pass';
		$m.__track_lines__[27] = 'WithTest.py, line 27:\n    with self.Dummy() as v:';
		$m.__track_lines__[28] = 'WithTest.py, line 28:\n    pass';
		$m.__track_lines__[30] = 'WithTest.py, line 30:\n    d = self.Dummy()';
		$m.__track_lines__[31] = 'WithTest.py, line 31:\n    with d:';
		$m.__track_lines__[32] = 'WithTest.py, line 32:\n    pass';
		$m.__track_lines__[33] = 'WithTest.py, line 33:\n    self.assertTrue(d.enter_called)';
		$m.__track_lines__[34] = 'WithTest.py, line 34:\n    self.assertTrue(d.exit_called)';
		$m.__track_lines__[36] = 'WithTest.py, line 36:\n    z = None';
		$m.__track_lines__[37] = 'WithTest.py, line 37:\n    with self.Dummy(10) as v:';
		$m.__track_lines__[38] = 'WithTest.py, line 38:\n    z = v';
		$m.__track_lines__[39] = 'WithTest.py, line 39:\n    self.assertEqual(z, 10)';
		$m.__track_lines__[41] = 'WithTest.py, line 41:\n    self.fail("Bug #XXX - With statement fails for unknown reason")';
		$m.__track_lines__[42] = 'WithTest.py, line 42:\n    return';
		$m.__track_lines__[44] = 'WithTest.py, line 44:\n    d = self.Dummy(gobble=True) # Fails for unknown reason';
		$m.__track_lines__[45] = 'WithTest.py, line 45:\n    with d:';
		$m.__track_lines__[46] = 'WithTest.py, line 46:\n    raise Exception()';
		$m.__track_lines__[47] = 'WithTest.py, line 47:\n    self.assertEqual(type(d.exc_info[1]), Exception)';
		$m.__track_lines__[49] = 'WithTest.py, line 49:\n    def testNested(self):';
		$m.__track_lines__[50] = 'WithTest.py, line 50:\n    l = None';
		$m.__track_lines__[51] = 'WithTest.py, line 51:\n    with self.Dummy(1) as v1, self.Dummy(2) as v2, self.Dummy(3) as v3:';
		$m.__track_lines__[52] = 'WithTest.py, line 52:\n    l = [v1, v2, v3]';
		$m.__track_lines__[53] = 'WithTest.py, line 53:\n    self.assertEqual(l, [1,2,3])';
		$m.__track_lines__[55] = 'WithTest.py, line 55:\n    l = None';
		$m.__track_lines__[56] = 'WithTest.py, line 56:\n    with self.Dummy(1) as v1:';
		$m.__track_lines__[57] = 'WithTest.py, line 57:\n    l = []';
		$m.__track_lines__[58] = 'WithTest.py, line 58:\n    l.append(v1)';
		$m.__track_lines__[59] = 'WithTest.py, line 59:\n    with self.Dummy(2) as v2:';
		$m.__track_lines__[60] = 'WithTest.py, line 60:\n    l.append(v2)';
		$m.__track_lines__[61] = 'WithTest.py, line 61:\n    with self.Dummy(3) as v3:';
		$m.__track_lines__[62] = 'WithTest.py, line 62:\n    l.append(v3)';
		$m.__track_lines__[63] = 'WithTest.py, line 63:\n    self.assertEqual(l, [1,2,3])';
		$m.__track_lines__[65] = 'WithTest.py, line 65:\n    def testComplexAssign(self):';
		$m.__track_lines__[66] = 'WithTest.py, line 66:\n    d = {1: [0, 1, 2]}';
		$m.__track_lines__[67] = "WithTest.py, line 67:\n    with self.Dummy('z') as d[1]:";
		$m.__track_lines__[68] = "WithTest.py, line 68:\n    self.assertEqual(d, {1:'z'})";
		$m.__track_lines__[70] = 'WithTest.py, line 70:\n    d = {1: [0, 1, 2]}';
		$m.__track_lines__[71] = "WithTest.py, line 71:\n    with self.Dummy('z') as d[1][0]:";
		$m.__track_lines__[72] = "WithTest.py, line 72:\n    self.assertEqual(d[1][0], 'z')";
		$m.__track_lines__[73] = "WithTest.py, line 73:\n    self.assertEqual(d, {1: ['z', 1, 2]})";
		$m.__track_lines__[75] = 'WithTest.py, line 75:\n    d = {1: [0, 1, 2]}';
		$m.__track_lines__[76] = "WithTest.py, line 76:\n    with self.Dummy('z') as d.values()[0][1]:";
		$m.__track_lines__[77] = "WithTest.py, line 77:\n    self.assertEqual(d, {1: [0, 'z', 2]})";
		$m.__track_lines__[79] = 'WithTest.py, line 79:\n    d = {1: [0, 1, 2]}';
		$m.__track_lines__[80] = "WithTest.py, line 80:\n    with self.Dummy(['a', 'b', 'c']) as (d[1][0], d[1][1], d[1][2]):";
		$m.__track_lines__[81] = "WithTest.py, line 81:\n    self.assertEqual(d, {1: ['a', 'b', 'c']})";
		$m.__track_lines__[83] = 'WithTest.py, line 83:\n    d = {1: [0, 1, 2]}';
		$m.__track_lines__[84] = "WithTest.py, line 84:\n    with self.Dummy(['a', 'b', 'c']) as (d[1], d[2], d[3]):";
		$m.__track_lines__[85] = "WithTest.py, line 85:\n    self.assertEqual(d, {1:'a', 2:'b', 3:'c'})";
		$m.__track_lines__[88] = 'WithTest.py, line 88:\n    def testFlowControl(self):';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_2 = new $p['int'](2);
		$pyjs.track.module='WithTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['WithTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'WithTest';
			$cls_definition.__md5__ = '1859c5fa04fff7659d57a785dbe31603';
			$pyjs.track.lineno=4;
			$cls_definition['Dummy'] = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'WithTest';
				$cls_definition.__md5__ = 'cb0e8d9d86b7eb9299ce2a150fd82ff3';
				$pyjs.track.lineno=5;
				$method = $pyjs__bind_method2('__init__', function(value, gobble) {
					if (this.__is_instance__ === true) {
						var self = this;
						if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
					} else {
						var self = arguments[0];
						value = arguments[1];
						gobble = arguments[2];
						if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
						if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
					}
					if ($pyjs.options.arg_instance_type) {
						if (self.prototype.__md5__ !== 'cb0e8d9d86b7eb9299ce2a150fd82ff3') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}
					if (typeof value == 'undefined') value=arguments.callee.__args__[3][1];
					if (typeof gobble == 'undefined') gobble=arguments.callee.__args__[4][1];
					var $bool1;
					$pyjs.track={module:'WithTest', lineno:5};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='WithTest';
					$pyjs.track.lineno=5;
					$pyjs.track.lineno=6;
					if ((($bool1=$p['op_is'](value, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						$pyjs.track.lineno=7;
						value = self;
					}
					$pyjs.track.lineno=8;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('value', value) : $p['setattr'](self, 'value', value); 
					$pyjs.track.lineno=9;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gobble', gobble) : $p['setattr'](self, 'gobble', gobble); 
					$pyjs.track.lineno=10;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('enter_called', false) : $p['setattr'](self, 'enter_called', false); 
					$pyjs.track.lineno=11;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('exit_called', false) : $p['setattr'](self, 'exit_called', false); 
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				}
	, 1, [null,null,['self'],['value', null],['gobble', false]]);
				$cls_definition['__init__'] = $method;
				$pyjs.track.lineno=13;
				$method = $pyjs__bind_method2('__enter__', function() {
					if (this.__is_instance__ === true) {
						var self = this;
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
					} else {
						var self = arguments[0];
						if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
						if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					}
					if ($pyjs.options.arg_instance_type) {
						if (self.prototype.__md5__ !== 'cb0e8d9d86b7eb9299ce2a150fd82ff3') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}

					$pyjs.track={module:'WithTest', lineno:13};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='WithTest';
					$pyjs.track.lineno=13;
					$pyjs.track.lineno=14;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('enter_called', true) : $p['setattr'](self, 'enter_called', true); 
					$pyjs.track.lineno=15;
					$pyjs.track.lineno=15;
					var $pyjs__ret = $p['getattr'](self, 'value');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
	, 1, [null,null,['self']]);
				$cls_definition['__enter__'] = $method;
				$pyjs.track.lineno=17;
				$method = $pyjs__bind_method2('__exit__', function() {
					if (this.__is_instance__ === true) {
						var self = this;
						var exc_info = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

						if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
					} else {
						var self = arguments[0];
						var exc_info = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

						if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
						if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
					}
					if ($pyjs.options.arg_instance_type) {
						if (self.prototype.__md5__ !== 'cb0e8d9d86b7eb9299ce2a150fd82ff3') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}
					var $bool2;
					$pyjs.track={module:'WithTest', lineno:17};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='WithTest';
					$pyjs.track.lineno=17;
					$pyjs.track.lineno=18;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('exit_called', true) : $p['setattr'](self, 'exit_called', true); 
					$pyjs.track.lineno=19;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('exc_info', exc_info) : $p['setattr'](self, 'exc_info', exc_info); 
					$pyjs.track.lineno=20;
					if ((($bool2=$p['getattr'](self, 'gobble')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						$pyjs.track.lineno=21;
						$pyjs.track.lineno=21;
						var $pyjs__ret = true;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				}
	, 1, ['exc_info',null,['self']]);
				$cls_definition['__exit__'] = $method;
				$pyjs.track.lineno=4;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('Dummy', $p['tuple']($bases), $data);
			})();
			$pyjs.track.lineno=23;
			$method = $pyjs__bind_method2('testSimple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1859c5fa04fff7659d57a785dbe31603') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,v,z,$2,$1;
				$pyjs.track={module:'WithTest', lineno:23};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WithTest';
				$pyjs.track.lineno=23;
				$pyjs.track.lineno=24;
				$p['__with'](self['Dummy'](), function($withval1){
					$pyjs.track.lineno=25;
				});
				$pyjs.track.lineno=27;
				$p['__with'](self['Dummy'](), function($withval2){
					v = (typeof $withval2 == "undefined"?$m.$withval2:$withval2);
					$pyjs.track.lineno=28;
				});
				$pyjs.track.lineno=30;
				d = self['Dummy']();
				$pyjs.track.lineno=31;
				$p['__with'](d, function($withval3){
					$pyjs.track.lineno=32;
				});
				$pyjs.track.lineno=33;
				self['assertTrue']($p['getattr'](d, 'enter_called'));
				$pyjs.track.lineno=34;
				self['assertTrue']($p['getattr'](d, 'exit_called'));
				$pyjs.track.lineno=36;
				z = null;
				$pyjs.track.lineno=37;
				$p['__with'](self['Dummy']($constant_int_10), function($withval4){
					v = (typeof $withval4 == "undefined"?$m.$withval4:$withval4);
					$pyjs.track.lineno=38;
					z = v;
				});
				$pyjs.track.lineno=39;
				self['assertEqual'](z, $constant_int_10);
				$pyjs.track.lineno=41;
				self['fail']('Bug #XXX - With statement fails for unknown reason');
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=42;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
				$pyjs.track.lineno=44;
				d = $pyjs_kwargs_call(self, 'Dummy', null, null, [{gobble:true}]);
				$pyjs.track.lineno=45;
				$p['__with'](d, function($withval5){
					$pyjs.track.lineno=46;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['Exception']());
				});
				$pyjs.track.lineno=47;
				self['assertEqual']($p['type']((typeof ($1=$p['getattr'](d, 'exc_info')).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_1]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_1))), $p['Exception']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimple'] = $method;
			$pyjs.track.lineno=49;
			$method = $pyjs__bind_method2('testNested', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1859c5fa04fff7659d57a785dbe31603') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var v2,v1,v3,l;
				$pyjs.track={module:'WithTest', lineno:49};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WithTest';
				$pyjs.track.lineno=49;
				$pyjs.track.lineno=50;
				l = null;
				$pyjs.track.lineno=51;
				$p['__with'](self['Dummy']($constant_int_1), function($withval6){
					v1 = (typeof $withval6 == "undefined"?$m.$withval6:$withval6);
					$pyjs.track.lineno=51;
					$p['__with'](self['Dummy']($constant_int_2), function($withval7){
						v2 = (typeof $withval7 == "undefined"?$m.$withval7:$withval7);
						$pyjs.track.lineno=51;
						$p['__with'](self['Dummy']($constant_int_3), function($withval8){
							v3 = (typeof $withval8 == "undefined"?$m.$withval8:$withval8);
							$pyjs.track.lineno=52;
							l = $p['list']([v1, v2, v3]);
						});
					});
				});
				$pyjs.track.lineno=53;
				self['assertEqual'](l, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=55;
				l = null;
				$pyjs.track.lineno=56;
				$p['__with'](self['Dummy']($constant_int_1), function($withval9){
					v1 = (typeof $withval9 == "undefined"?$m.$withval9:$withval9);
					$pyjs.track.lineno=57;
					l = $p['list']([]);
					$pyjs.track.lineno=58;
					l['append'](v1);
					$pyjs.track.lineno=59;
					$p['__with'](self['Dummy']($constant_int_2), function($withval10){
						v2 = (typeof $withval10 == "undefined"?$m.$withval10:$withval10);
						$pyjs.track.lineno=60;
						l['append'](v2);
						$pyjs.track.lineno=61;
						$p['__with'](self['Dummy']($constant_int_3), function($withval11){
							v3 = (typeof $withval11 == "undefined"?$m.$withval11:$withval11);
							$pyjs.track.lineno=62;
							l['append'](v3);
						});
					});
				});
				$pyjs.track.lineno=63;
				self['assertEqual'](l, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNested'] = $method;
			$pyjs.track.lineno=65;
			$method = $pyjs__bind_method2('testComplexAssign', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1859c5fa04fff7659d57a785dbe31603') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,$10,d,$12,$13,$8,$9,$6,$7,$4,$5,$3,$11;
				$pyjs.track={module:'WithTest', lineno:65};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WithTest';
				$pyjs.track.lineno=65;
				$pyjs.track.lineno=66;
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$pyjs.track.lineno=67;
				$p['__with'](self['Dummy']('z'), function($withval12){
					d.__setitem__($constant_int_1, (typeof $withval12 == "undefined"?$m.$withval12:$withval12));
					$pyjs.track.lineno=68;
					self['assertEqual'](d, $p['dict']([[$constant_int_1, 'z']]));
				});
				$pyjs.track.lineno=70;
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$pyjs.track.lineno=71;
				$p['__with'](self['Dummy']('z'), function($withval13){
					(typeof ($3=d).__array != 'undefined'?
						((typeof $3.__array[$4=$constant_int_1]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__($constant_int_1)).__setitem__($constant_int_0, (typeof $withval13 == "undefined"?$m.$withval13:$withval13));
					$pyjs.track.lineno=72;
					self['assertEqual']((typeof ($7=(typeof ($5=d).__array != 'undefined'?
						((typeof $5.__array[$6=$constant_int_1]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($constant_int_1))).__array != 'undefined'?
						((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__($constant_int_0)), 'z');
					$pyjs.track.lineno=73;
					self['assertEqual'](d, $p['dict']([[$constant_int_1, $p['list'](['z', $constant_int_1, $constant_int_2])]]));
				});
				$pyjs.track.lineno=75;
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$pyjs.track.lineno=76;
				$p['__with'](self['Dummy']('z'), function($withval14){
					(typeof ($9=d['values']()).__array != 'undefined'?
						((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__($constant_int_0)).__setitem__($constant_int_1, (typeof $withval14 == "undefined"?$m.$withval14:$withval14));
					$pyjs.track.lineno=77;
					self['assertEqual'](d, $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, 'z', $constant_int_2])]]));
				});
				$pyjs.track.lineno=79;
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$pyjs.track.lineno=80;
				$p['__with'](self['Dummy']($p['list'](['a', 'b', 'c'])), function($withval15){
					var $tupleassign1 = $p['__ass_unpack']((typeof $withval15 == "undefined"?$m.$withval15:$withval15), 3, null);
					(typeof ($11=d).__array != 'undefined'?
						((typeof $11.__array[$12=$constant_int_1]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__($constant_int_1)).__setitem__($constant_int_0, $tupleassign1[0]);
					(typeof ($13=d).__array != 'undefined'?
						((typeof $13.__array[$14=$constant_int_1]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__($constant_int_1)).__setitem__($constant_int_1, $tupleassign1[1]);
					(typeof ($15=d).__array != 'undefined'?
						((typeof $15.__array[$16=$constant_int_1]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__($constant_int_1)).__setitem__($constant_int_2, $tupleassign1[2]);
					$pyjs.track.lineno=81;
					self['assertEqual'](d, $p['dict']([[$constant_int_1, $p['list'](['a', 'b', 'c'])]]));
				});
				$pyjs.track.lineno=83;
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$pyjs.track.lineno=84;
				$p['__with'](self['Dummy']($p['list'](['a', 'b', 'c'])), function($withval16){
					var $tupleassign2 = $p['__ass_unpack']((typeof $withval16 == "undefined"?$m.$withval16:$withval16), 3, null);
					d.__setitem__($constant_int_1, $tupleassign2[0]);
					d.__setitem__($constant_int_2, $tupleassign2[1]);
					d.__setitem__($constant_int_3, $tupleassign2[2]);
					$pyjs.track.lineno=85;
					self['assertEqual'](d, $p['dict']([[$constant_int_1, 'a'], [$constant_int_2, 'b'], [$constant_int_3, 'c']]));
				});
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComplexAssign'] = $method;
			$pyjs.track.lineno=88;
			$method = $pyjs__bind_method2('testFlowControl', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1859c5fa04fff7659d57a785dbe31603') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'WithTest', lineno:88};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WithTest';
				$pyjs.track.lineno=88;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFlowControl'] = $method;
			$pyjs.track.lineno=3;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('WithTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end WithTest */


/* end module: WithTest */


/*
PYJS_DEPS: ['UnitTest']
*/
