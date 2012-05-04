/* start module: RunTests */
$pyjs.loaded_modules['RunTests'] = function (__mod_name__) {
	if($pyjs.loaded_modules['RunTests'].__was_initialized__) return $pyjs.loaded_modules['RunTests'];
	var $m = $pyjs.loaded_modules["RunTests"];
	$m.__repr__ = function() { return "<module: RunTests>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'RunTests';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'RunTests.py, line 1:\n    class RunTests:';
		$m.__track_lines__[2] = 'RunTests.py, line 2:\n    def __init__(self):';
		$m.__track_lines__[3] = 'RunTests.py, line 3:\n    self.testlist = {}';
		$m.__track_lines__[4] = 'RunTests.py, line 4:\n    self.test_idx = 0';
		$m.__track_lines__[6] = 'RunTests.py, line 6:\n    def add(self, test):';
		$m.__track_lines__[7] = 'RunTests.py, line 7:\n    self.testlist[len(self.testlist)] = test';
		$m.__track_lines__[9] = 'RunTests.py, line 9:\n    def start_test(self):';
		$m.__track_lines__[10] = 'RunTests.py, line 10:\n    if self.test_idx >= len(self.testlist):';
		$m.__track_lines__[11] = 'RunTests.py, line 11:\n    return';
		$m.__track_lines__[13] = 'RunTests.py, line 13:\n    idx = self.test_idx';
		$m.__track_lines__[14] = 'RunTests.py, line 14:\n    self.test_idx += 1';
		$m.__track_lines__[16] = 'RunTests.py, line 16:\n    test_kls = self.testlist[idx]';
		$m.__track_lines__[17] = 'RunTests.py, line 17:\n    t = test_kls()';
		$m.__track_lines__[18] = 'RunTests.py, line 18:\n    t.start_next_test = getattr(self, "start_test")';
		$m.__track_lines__[19] = 'RunTests.py, line 19:\n    t.run()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='RunTests';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$m['RunTests'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'RunTests';
			$cls_definition.__md5__ = '9f3fb7770581b71cf89b39611310652b';
			$pyjs.track.lineno=2;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9f3fb7770581b71cf89b39611310652b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'RunTests', lineno:2};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='RunTests';
				$pyjs.track.lineno=2;
				$pyjs.track.lineno=3;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('testlist', $p['dict']([])) : $p['setattr'](self, 'testlist', $p['dict']([])); 
				$pyjs.track.lineno=4;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test_idx', $constant_int_0) : $p['setattr'](self, 'test_idx', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=6;
			$method = $pyjs__bind_method2('add', function(test) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					test = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9f3fb7770581b71cf89b39611310652b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len1;
				$pyjs.track={module:'RunTests', lineno:6};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='RunTests';
				$pyjs.track.lineno=6;
				$pyjs.track.lineno=7;
				$p['getattr'](self, 'testlist').__setitem__((($len1=$p['getattr'](self, 'testlist')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), test);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['test']]);
			$cls_definition['add'] = $method;
			$pyjs.track.lineno=9;
			$method = $pyjs__bind_method2('start_test', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9f3fb7770581b71cf89b39611310652b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,idx,$cmp2,test_kls,$add2,$bool1,$len2,t,$add1,$2,$1;
				$pyjs.track={module:'RunTests', lineno:9};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='RunTests';
				$pyjs.track.lineno=9;
				$pyjs.track.lineno=10;
				if ((($bool1=((((($cmp1=$p['getattr'](self, 'test_idx'))===($cmp2=(($len2=$p['getattr'](self, 'testlist')) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=11;
					$pyjs.track.lineno=11;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=13;
				idx = $p['getattr'](self, 'test_idx');
				$pyjs.track.lineno=14;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test_idx', (typeof ($add1=$p['getattr'](self, 'test_idx'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) : $p['setattr'](self, 'test_idx', (typeof ($add1=$p['getattr'](self, 'test_idx'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))); 
				$pyjs.track.lineno=16;
				test_kls = (typeof ($1=$p['getattr'](self, 'testlist')).__array != 'undefined'?
					((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(idx));
				$pyjs.track.lineno=17;
				t = test_kls();
				$pyjs.track.lineno=18;
				t.__is_instance__ && typeof t.__setattr__ == 'function' ? t.__setattr__('start_next_test', $p['getattr'](self, 'start_test')) : $p['setattr'](t, 'start_next_test', $p['getattr'](self, 'start_test')); 
				$pyjs.track.lineno=19;
				t['run']();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['start_test'] = $method;
			$pyjs.track.lineno=1;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RunTests', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end RunTests */


/* end module: RunTests */


