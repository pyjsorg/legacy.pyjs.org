/* start module: I18N.domain */
$pyjs.loaded_modules['I18N.domain'] = function (__mod_name__) {
	if($pyjs.loaded_modules['I18N.domain'].__was_initialized__) return $pyjs.loaded_modules['I18N.domain'];
	if(typeof $pyjs.loaded_modules['I18N'] == 'undefined' || !$pyjs.loaded_modules['I18N'].__was_initialized__) $p['___import___']('I18N', null);
	var $m = $pyjs.loaded_modules["I18N.domain"];
	$m.__repr__ = function() { return "<module: I18N.domain>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'I18N.domain';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['I18N']['domain'] = $pyjs.loaded_modules['I18N.domain'];
	try {
		$m.__track_lines__[1] = 'I18N.domain.py, line 1:\n    ';
		$m.__track_lines__[2] = 'I18N.domain.py, line 2:\n    class I18N(object):';
		$m.__track_lines__[3] = 'I18N.domain.py, line 3:\n    def example(self):';
		$m.__track_lines__[4] = 'I18N.domain.py, line 4:\n    return "This is a domain example"';
		$m.__track_lines__[6] = 'I18N.domain.py, line 6:\n    import I18N as parent';
		$m.__track_lines__[7] = "I18N.domain.py, line 7:\n    i18n = type('I18N', (I18N, parent.I18N), {})()";


		$pyjs.track.module='I18N.domain';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$m['I18N'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'I18N.domain';
			$cls_definition.__md5__ = 'b3f7e3dc91745312844de773969c017b';
			$pyjs.track.lineno=3;
			$method = $pyjs__bind_method2('example', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3f7e3dc91745312844de773969c017b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'I18N.domain', lineno:3};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='I18N.domain';
				$pyjs.track.lineno=3;
				$pyjs.track.lineno=4;
				$pyjs.track.lineno=4;
				var $pyjs__ret = 'This is a domain example';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['example'] = $method;
			$pyjs.track.lineno=2;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('I18N', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['parent'] = $p['___import___']('I18N', 'I18N.domain', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$m['i18n'] = $p['type']('I18N', $p['tuple']([$m['I18N'], $p['getattr']($m['parent'], 'I18N')]), $p['dict']([]))();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end I18N.domain */


/* end module: I18N.domain */


/*
PYJS_DEPS: ['I18N']
*/
