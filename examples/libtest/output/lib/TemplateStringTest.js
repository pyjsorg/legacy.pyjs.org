/* start module: TemplateStringTest */
$pyjs.loaded_modules['TemplateStringTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TemplateStringTest'].__was_initialized__) return $pyjs.loaded_modules['TemplateStringTest'];
	var $m = $pyjs.loaded_modules["TemplateStringTest"];
	$m.__repr__ = function() { return "<module: TemplateStringTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TemplateStringTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'TemplateStringTest.py, line 1:\n    import UnitTest';
		$m.__track_lines__[2] = 'TemplateStringTest.py, line 2:\n    from string import Template';
		$m.__track_lines__[3] = 'TemplateStringTest.py, line 3:\n    import sys';
		$m.__track_lines__[5] = 'TemplateStringTest.py, line 5:\n    class TemplateStringTest(UnitTest.UnitTest):';
		$m.__track_lines__[6] = 'TemplateStringTest.py, line 6:\n    def test_substitute(self):';
		$m.__track_lines__[7] = 'TemplateStringTest.py, line 7:\n    try:';
		$m.__track_lines__[8] = "TemplateStringTest.py, line 8:\n    self.assertEqual(Template('This is a test of the $first method of the $second class'";
		$m.__track_lines__[11] = "TemplateStringTest.py, line 11:\n    self.assertEqual(Template('This is a test of the ${first} method of the ${second} class'";
		$m.__track_lines__[34] = "TemplateStringTest.py, line 34:\n    kwargs = {'first':'substitute','second':'Template'}";
		$m.__track_lines__[15] = "TemplateStringTest.py, line 15:\n    self.fail('__metaclass__ problem, issue #658')";
		$m.__track_lines__[18] = 'TemplateStringTest.py, line 18:\n    def test_safe_substitute(self):';
		$m.__track_lines__[19] = 'TemplateStringTest.py, line 19:\n    try:';
		$m.__track_lines__[20] = "TemplateStringTest.py, line 20:\n    self.assertEqual(Template('This is a test of the $first method of the $second class'";
		$m.__track_lines__[23] = "TemplateStringTest.py, line 23:\n    self.assertEqual(Template('This is a test of the ${first} method of the ${second} class'";
		$m.__track_lines__[33] = 'TemplateStringTest.py, line 33:\n    def test__invalid2(self):';
		$m.__track_lines__[27] = "TemplateStringTest.py, line 27:\n    self.fail('__metaclass__ problem, issue #658')";
		$m.__track_lines__[35] = "TemplateStringTest.py, line 35:\n    self.assertRaises(KeyError, Template('This is a test of the $first method of the $se~cond class').substitute,**kwargs)";
		$m.__track_lines__[29] = 'TemplateStringTest.py, line 29:\n    def test__invalid1(self):';
		$m.__track_lines__[30] = "TemplateStringTest.py, line 30:\n    kwargs = {'first':'substitute','second':'Template'}";
		$m.__track_lines__[31] = "TemplateStringTest.py, line 31:\n    self.assertRaises(ValueError, Template('This is a test of the $0irst method of the $second class').substitute,**kwargs)";


		$pyjs.track.module='TemplateStringTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Template'] = $p['___import___']('string.Template', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$m['TemplateStringTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'TemplateStringTest';
			$cls_definition.__md5__ = '558b325ce70ee64bf8969f2baa74b95b';
			$pyjs.track.lineno=6;
			$method = $pyjs__bind_method2('test_substitute', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '558b325ce70ee64bf8969f2baa74b95b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'TemplateStringTest', lineno:6};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TemplateStringTest';
				$pyjs.track.lineno=6;
				$pyjs.track.lineno=7;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=8;
					self['assertEqual']($pyjs_kwargs_call($m['Template']('This is a test of the $first method of the $second class'), 'substitute', null, null, [{first:'substitute', second:'Template'}]), 'This is a test of the substitute method of the Template class');
					$pyjs.track.lineno=11;
					self['assertEqual']($pyjs_kwargs_call($m['Template']('This is a test of the ${first} method of the ${second} class'), 'substitute', null, null, [{first:'substitute', second:'Template'}]), 'This is a test of the substitute method of the Template class');
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
					$pyjs.track.module='TemplateStringTest';
					if (true) {
						$pyjs.track.lineno=15;
						self['fail']('__metaclass__ problem, issue #658');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_substitute'] = $method;
			$pyjs.track.lineno=18;
			$method = $pyjs__bind_method2('test_safe_substitute', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '558b325ce70ee64bf8969f2baa74b95b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'TemplateStringTest', lineno:18};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TemplateStringTest';
				$pyjs.track.lineno=18;
				$pyjs.track.lineno=19;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=20;
					self['assertEqual']($pyjs_kwargs_call($m['Template']('This is a test of the $first method of the $second class'), 'safe_substitute', null, null, [{first:'safe_substitute'}]), 'This is a test of the safe_substitute method of the $second class');
					$pyjs.track.lineno=23;
					self['assertEqual']($pyjs_kwargs_call($m['Template']('This is a test of the ${first} method of the ${second} class'), 'safe_substitute', null, null, [{first:'safe_substitute'}]), 'This is a test of the safe_substitute method of the ${second} class');
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
					$pyjs.track.module='TemplateStringTest';
					if (true) {
						$pyjs.track.lineno=27;
						self['fail']('__metaclass__ problem, issue #658');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_safe_substitute'] = $method;
			$pyjs.track.lineno=29;
			$method = $pyjs__bind_method2('test__invalid1', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '558b325ce70ee64bf8969f2baa74b95b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var kwargs;
				$pyjs.track={module:'TemplateStringTest', lineno:29};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TemplateStringTest';
				$pyjs.track.lineno=29;
				$pyjs.track.lineno=30;
				kwargs = $p['dict']([['first', 'substitute'], ['second', 'Template']]);
				$pyjs.track.lineno=31;
				$pyjs_kwargs_call(self, 'assertRaises', null, kwargs, [{}, $p['ValueError'], $p['getattr']($m['Template']('This is a test of the $0irst method of the $second class'), 'substitute')]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test__invalid1'] = $method;
			$pyjs.track.lineno=33;
			$method = $pyjs__bind_method2('test__invalid2', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '558b325ce70ee64bf8969f2baa74b95b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var kwargs;
				$pyjs.track={module:'TemplateStringTest', lineno:33};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TemplateStringTest';
				$pyjs.track.lineno=33;
				$pyjs.track.lineno=34;
				kwargs = $p['dict']([['first', 'substitute'], ['second', 'Template']]);
				$pyjs.track.lineno=35;
				$pyjs_kwargs_call(self, 'assertRaises', null, kwargs, [{}, $p['KeyError'], $p['getattr']($m['Template']('This is a test of the $first method of the $se~cond class'), 'substitute')]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test__invalid2'] = $method;
			$pyjs.track.lineno=5;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TemplateStringTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TemplateStringTest */


/* end module: TemplateStringTest */


/*
PYJS_DEPS: ['UnitTest', 'string.Template', 'string', 'sys']
*/
