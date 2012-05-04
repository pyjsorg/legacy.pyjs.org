/* start module: I18N.domain.en_US */
$pyjs.loaded_modules['I18N.domain.en_US'] = function (__mod_name__) {
	if($pyjs.loaded_modules['I18N.domain.en_US'].__was_initialized__) return $pyjs.loaded_modules['I18N.domain.en_US'];
	if(typeof $pyjs.loaded_modules['I18N.domain'] == 'undefined' || !$pyjs.loaded_modules['I18N.domain'].__was_initialized__) $p['___import___']('I18N.domain', null);
	var $m = $pyjs.loaded_modules["I18N.domain.en_US"];
	$m.__repr__ = function() { return "<module: I18N.domain.en_US>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'I18N.domain.en_US';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['I18N.domain']['en_US'] = $pyjs.loaded_modules['I18N.domain.en_US'];
	try {
		$m.__track_lines__[1] = 'I18N.domain.en_US.py, line 1:\n    ';
		$m.__track_lines__[3] = 'I18N.domain.en_US.py, line 3:\n    class I18N(object):';
		$m.__track_lines__[4] = 'I18N.domain.en_US.py, line 4:\n    def example(self):';
		$m.__track_lines__[5] = 'I18N.domain.en_US.py, line 5:\n    return "This is a domain en_US example"';
		$m.__track_lines__[7] = 'I18N.domain.en_US.py, line 7:\n    import I18N.en_US as parent';
		$m.__track_lines__[8] = 'I18N.domain.en_US.py, line 8:\n    import I18N.domain as dom';
		$m.__track_lines__[9] = "I18N.domain.en_US.py, line 9:\n    dom.i18n = type('I18N', (I18N, dom.I18N, parent.I18N), {})()";


		$pyjs.track.module='I18N.domain.en_US';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$m['I18N'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'I18N.domain.en_US';
			$cls_definition.__md5__ = '6eeeac9dbfe1c0a4e4c9279bc7d8174a';
			$pyjs.track.lineno=4;
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
					if (self.prototype.__md5__ !== '6eeeac9dbfe1c0a4e4c9279bc7d8174a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'I18N.domain.en_US', lineno:4};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='I18N.domain.en_US';
				$pyjs.track.lineno=4;
				$pyjs.track.lineno=5;
				$pyjs.track.lineno=5;
				var $pyjs__ret = 'This is a domain en_US example';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['example'] = $method;
			$pyjs.track.lineno=3;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('I18N', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=7;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['parent'] = $p['___import___']('I18N.en_US', 'I18N.domain', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['dom'] = $p['___import___']('I18N.domain', 'I18N.domain', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$m['dom'].__is_instance__ && typeof $m['dom'].__setattr__ == 'function' ? $m['dom'].__setattr__('i18n', $p['type']('I18N', $p['tuple']([$m['I18N'], $p['getattr']($m['dom'], 'I18N'), $p['getattr']($m['parent'], 'I18N')]), $p['dict']([]))()) : $p['setattr']($m['dom'], 'i18n', $p['type']('I18N', $p['tuple']([$m['I18N'], $p['getattr']($m['dom'], 'I18N'), $p['getattr']($m['parent'], 'I18N')]), $p['dict']([]))()); 
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end I18N.domain.en_US */


/* end module: I18N.domain.en_US */


/*
PYJS_DEPS: ['I18N.en_US', 'I18N', 'I18N.domain']
*/
