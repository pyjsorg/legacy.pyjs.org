/* start module: StringIOModuleTest */
$pyjs.loaded_modules['StringIOModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['StringIOModuleTest'].__was_initialized__) return $pyjs.loaded_modules['StringIOModuleTest'];
	var $m = $pyjs.loaded_modules["StringIOModuleTest"];
	$m.__repr__ = function() { return "<module: StringIOModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'StringIOModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'StringIOModuleTest.py, line 1:\n    import UnitTest';
		$m.__track_lines__[2] = 'StringIOModuleTest.py, line 2:\n    from StringIO import StringIO';
		$m.__track_lines__[3] = 'StringIOModuleTest.py, line 3:\n    import sys';
		$m.__track_lines__[5] = 'StringIOModuleTest.py, line 5:\n    class StringIOModuleTest(UnitTest.UnitTest):';
		$m.__track_lines__[6] = 'StringIOModuleTest.py, line 6:\n    def test_write(self):';
		$m.__track_lines__[7] = 'StringIOModuleTest.py, line 7:\n    data = StringIO()';
		$m.__track_lines__[8] = "StringIOModuleTest.py, line 8:\n    data.write('straight')";
		$m.__track_lines__[9] = "StringIOModuleTest.py, line 9:\n    self.assertEqual(data.getvalue(), 'straight')";
		$m.__track_lines__[11] = 'StringIOModuleTest.py, line 11:\n    def test_print(self):';
		$m.__track_lines__[12] = 'StringIOModuleTest.py, line 12:\n    orig_stdout = sys.stdout';
		$m.__track_lines__[13] = 'StringIOModuleTest.py, line 13:\n    try:';
		$m.__track_lines__[14] = 'StringIOModuleTest.py, line 14:\n    sys.stdout = StringIO()';
		$m.__track_lines__[15] = "StringIOModuleTest.py, line 15:\n    print 'stdout'";
		$m.__track_lines__[16] = "StringIOModuleTest.py, line 16:\n    self.assertEqual(sys.stdout.getvalue(), 'stdout\\n')";
		$m.__track_lines__[18] = 'StringIOModuleTest.py, line 18:\n    sys.stdout = orig_stdout';


		$pyjs.track.module='StringIOModuleTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['StringIO'] = $p['___import___']('StringIO.StringIO', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$m['StringIOModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'StringIOModuleTest';
			$cls_definition.__md5__ = '76729029be4a47b7384576df0ac4e5c1';
			$pyjs.track.lineno=6;
			$method = $pyjs__bind_method2('test_write', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '76729029be4a47b7384576df0ac4e5c1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				$pyjs.track={module:'StringIOModuleTest', lineno:6};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIOModuleTest';
				$pyjs.track.lineno=6;
				$pyjs.track.lineno=7;
				data = $m['StringIO']();
				$pyjs.track.lineno=8;
				data['write']('straight');
				$pyjs.track.lineno=9;
				self['assertEqual'](data['getvalue'](), 'straight');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_write'] = $method;
			$pyjs.track.lineno=11;
			$method = $pyjs__bind_method2('test_print', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '76729029be4a47b7384576df0ac4e5c1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,orig_stdout;
				$pyjs.track={module:'StringIOModuleTest', lineno:11};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIOModuleTest';
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=12;
				orig_stdout = $p['getattr']($m['sys'], 'stdout');
				$pyjs.track.lineno=13;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=14;
					$m['sys'].__is_instance__ && typeof $m['sys'].__setattr__ == 'function' ? $m['sys'].__setattr__('stdout', $m['StringIO']()) : $p['setattr']($m['sys'], 'stdout', $m['StringIO']()); 
					$pyjs.track.lineno=15;
					$pyjs.track.lineno=16;
					self['assertEqual']($m['sys']['stdout']['getvalue'](), 'stdout\n');
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='StringIOModuleTest';
				} finally {
					$pyjs.track.lineno=18;
					$m['sys'].__is_instance__ && typeof $m['sys'].__setattr__ == 'function' ? $m['sys'].__setattr__('stdout', orig_stdout) : $p['setattr']($m['sys'], 'stdout', orig_stdout); 
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_print'] = $method;
			$pyjs.track.lineno=5;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StringIOModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end StringIOModuleTest */


/* end module: StringIOModuleTest */


/*
PYJS_DEPS: ['UnitTest', 'StringIO.StringIO', 'StringIO', 'sys']
*/
