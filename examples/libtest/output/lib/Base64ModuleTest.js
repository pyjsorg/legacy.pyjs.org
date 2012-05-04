/* start module: Base64ModuleTest */
$pyjs.loaded_modules['Base64ModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Base64ModuleTest'].__was_initialized__) return $pyjs.loaded_modules['Base64ModuleTest'];
	var $m = $pyjs.loaded_modules["Base64ModuleTest"];
	$m.__repr__ = function() { return "<module: Base64ModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Base64ModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'Base64ModuleTest.py, line 1:\n    # Testing time module';
		$m.__track_lines__[3] = 'Base64ModuleTest.py, line 3:\n    import sys';
		$m.__track_lines__[4] = 'Base64ModuleTest.py, line 4:\n    import UnitTest';
		$m.__track_lines__[5] = 'Base64ModuleTest.py, line 5:\n    import base64';
		$m.__track_lines__[8] = 'Base64ModuleTest.py, line 8:\n    class Base64ModuleTest(UnitTest.UnitTest):';
		$m.__track_lines__[10] = 'Base64ModuleTest.py, line 10:\n    def testBase64(self):';
		$m.__track_lines__[11] = 'Base64ModuleTest.py, line 11:\n    text = "Pyjamas is fun"';
		$m.__track_lines__[13] = 'Base64ModuleTest.py, line 13:\n    encodetext = base64.encodestring(text)';
		$m.__track_lines__[14] = "Base64ModuleTest.py, line 14:\n    self.assertEqual(encodetext, 'UHlqYW1hcyBpcyBmdW4=\\n')";
		$m.__track_lines__[15] = 'Base64ModuleTest.py, line 15:\n    decodetext = base64.decodestring(encodetext)';
		$m.__track_lines__[16] = 'Base64ModuleTest.py, line 16:\n    self.assertEqual(decodetext, text)';
		$m.__track_lines__[18] = 'Base64ModuleTest.py, line 18:\n    encodetext = base64.b64encode(text)';
		$m.__track_lines__[19] = "Base64ModuleTest.py, line 19:\n    self.assertEqual(encodetext, 'UHlqYW1hcyBpcyBmdW4=')";
		$m.__track_lines__[20] = 'Base64ModuleTest.py, line 20:\n    decodetext = base64.b64decode(encodetext)';
		$m.__track_lines__[21] = 'Base64ModuleTest.py, line 21:\n    self.assertEqual(decodetext, text)';
		$m.__track_lines__[23] = 'Base64ModuleTest.py, line 23:\n    encodetext = base64.standard_b64encode(text)';
		$m.__track_lines__[24] = "Base64ModuleTest.py, line 24:\n    self.assertEqual(encodetext, 'UHlqYW1hcyBpcyBmdW4=')";
		$m.__track_lines__[25] = 'Base64ModuleTest.py, line 25:\n    decodetext = base64.standard_b64decode(encodetext)';
		$m.__track_lines__[26] = 'Base64ModuleTest.py, line 26:\n    self.assertEqual(decodetext, text)';
		$m.__track_lines__[28] = 'Base64ModuleTest.py, line 28:\n    encodetext = base64.urlsafe_b64encode(text)';
		$m.__track_lines__[29] = "Base64ModuleTest.py, line 29:\n    self.assertEqual(encodetext, 'UHlqYW1hcyBpcyBmdW4=')";
		$m.__track_lines__[30] = 'Base64ModuleTest.py, line 30:\n    decodetext = base64.urlsafe_b64decode(encodetext)';
		$m.__track_lines__[31] = 'Base64ModuleTest.py, line 31:\n    self.assertEqual(decodetext, text)';
		$m.__track_lines__[33] = 'Base64ModuleTest.py, line 33:\n    def testBase32(self):';
		$m.__track_lines__[34] = 'Base64ModuleTest.py, line 34:\n    text = "Pyjamas is fun"';
		$m.__track_lines__[36] = 'Base64ModuleTest.py, line 36:\n    encodetext = base64.b32encode(text)';
		$m.__track_lines__[37] = "Base64ModuleTest.py, line 37:\n    self.assertEqual(encodetext, 'KB4WUYLNMFZSA2LTEBTHK3Q=')";
		$m.__track_lines__[38] = 'Base64ModuleTest.py, line 38:\n    decodetext = base64.b32decode(encodetext)';
		$m.__track_lines__[39] = 'Base64ModuleTest.py, line 39:\n    self.assertEqual(decodetext, text)';
		$m.__track_lines__[41] = 'Base64ModuleTest.py, line 41:\n    def testBase16(self):';
		$m.__track_lines__[42] = 'Base64ModuleTest.py, line 42:\n    text = "Pyjamas is fun"';
		$m.__track_lines__[44] = 'Base64ModuleTest.py, line 44:\n    encodetext = base64.b16encode(text)';
		$m.__track_lines__[45] = "Base64ModuleTest.py, line 45:\n    self.assertEqual(encodetext, '50796A616D61732069732066756E')";
		$m.__track_lines__[46] = 'Base64ModuleTest.py, line 46:\n    decodetext = base64.b16decode(encodetext)';
		$m.__track_lines__[47] = 'Base64ModuleTest.py, line 47:\n    self.assertEqual(decodetext, text)';


		$pyjs.track.module='Base64ModuleTest';
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
		$m['base64'] = $p['___import___']('base64', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$m['Base64ModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Base64ModuleTest';
			$cls_definition.__md5__ = '6136427ee30de15746a007b41607ee8f';
			$pyjs.track.lineno=10;
			$method = $pyjs__bind_method2('testBase64', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6136427ee30de15746a007b41607ee8f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,decodetext,encodetext;
				$pyjs.track={module:'Base64ModuleTest', lineno:10};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='Base64ModuleTest';
				$pyjs.track.lineno=10;
				$pyjs.track.lineno=11;
				text = 'Pyjamas is fun';
				$pyjs.track.lineno=13;
				encodetext = $m['base64']['encodestring'](text);
				$pyjs.track.lineno=14;
				self['assertEqual'](encodetext, 'UHlqYW1hcyBpcyBmdW4=\n');
				$pyjs.track.lineno=15;
				decodetext = $m['base64']['decodestring'](encodetext);
				$pyjs.track.lineno=16;
				self['assertEqual'](decodetext, text);
				$pyjs.track.lineno=18;
				encodetext = $m['base64']['b64encode'](text);
				$pyjs.track.lineno=19;
				self['assertEqual'](encodetext, 'UHlqYW1hcyBpcyBmdW4=');
				$pyjs.track.lineno=20;
				decodetext = $m['base64']['b64decode'](encodetext);
				$pyjs.track.lineno=21;
				self['assertEqual'](decodetext, text);
				$pyjs.track.lineno=23;
				encodetext = $m['base64']['standard_b64encode'](text);
				$pyjs.track.lineno=24;
				self['assertEqual'](encodetext, 'UHlqYW1hcyBpcyBmdW4=');
				$pyjs.track.lineno=25;
				decodetext = $m['base64']['standard_b64decode'](encodetext);
				$pyjs.track.lineno=26;
				self['assertEqual'](decodetext, text);
				$pyjs.track.lineno=28;
				encodetext = $m['base64']['urlsafe_b64encode'](text);
				$pyjs.track.lineno=29;
				self['assertEqual'](encodetext, 'UHlqYW1hcyBpcyBmdW4=');
				$pyjs.track.lineno=30;
				decodetext = $m['base64']['urlsafe_b64decode'](encodetext);
				$pyjs.track.lineno=31;
				self['assertEqual'](decodetext, text);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBase64'] = $method;
			$pyjs.track.lineno=33;
			$method = $pyjs__bind_method2('testBase32', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6136427ee30de15746a007b41607ee8f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,decodetext,encodetext;
				$pyjs.track={module:'Base64ModuleTest', lineno:33};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='Base64ModuleTest';
				$pyjs.track.lineno=33;
				$pyjs.track.lineno=34;
				text = 'Pyjamas is fun';
				$pyjs.track.lineno=36;
				encodetext = $m['base64']['b32encode'](text);
				$pyjs.track.lineno=37;
				self['assertEqual'](encodetext, 'KB4WUYLNMFZSA2LTEBTHK3Q=');
				$pyjs.track.lineno=38;
				decodetext = $m['base64']['b32decode'](encodetext);
				$pyjs.track.lineno=39;
				self['assertEqual'](decodetext, text);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBase32'] = $method;
			$pyjs.track.lineno=41;
			$method = $pyjs__bind_method2('testBase16', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6136427ee30de15746a007b41607ee8f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,decodetext,encodetext;
				$pyjs.track={module:'Base64ModuleTest', lineno:41};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='Base64ModuleTest';
				$pyjs.track.lineno=41;
				$pyjs.track.lineno=42;
				text = 'Pyjamas is fun';
				$pyjs.track.lineno=44;
				encodetext = $m['base64']['b16encode'](text);
				$pyjs.track.lineno=45;
				self['assertEqual'](encodetext, '50796A616D61732069732066756E');
				$pyjs.track.lineno=46;
				decodetext = $m['base64']['b16decode'](encodetext);
				$pyjs.track.lineno=47;
				self['assertEqual'](decodetext, text);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBase16'] = $method;
			$pyjs.track.lineno=8;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Base64ModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Base64ModuleTest */


/* end module: Base64ModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'base64']
*/
