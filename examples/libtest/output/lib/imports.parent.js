/* start module: imports.parent */
$pyjs.loaded_modules['imports.parent'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.parent'].__was_initialized__) return $pyjs.loaded_modules['imports.parent'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.parent"];
	$m.__repr__ = function() { return "<module: imports.parent>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.parent';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['parent'] = $pyjs.loaded_modules['imports.parent'];
	try {
		$m.__track_lines__[1] = 'imports.parent.py, line 1:\n    ';
		$m.__track_lines__[3] = 'imports.parent.py, line 3:\n    class Parent:';
		$m.__track_lines__[4] = 'imports.parent.py, line 4:\n    def value(self, v):';
		$m.__track_lines__[5] = 'imports.parent.py, line 5:\n    return v';


		$pyjs.track.module='imports.parent';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$m['Parent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'imports.parent';
			$cls_definition.__md5__ = '987f73980bb140c5bdfeb3cc8fb55d95';
			$pyjs.track.lineno=4;
			$method = $pyjs__bind_method2('value', function(v) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					v = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '987f73980bb140c5bdfeb3cc8fb55d95') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'imports.parent', lineno:4};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='imports.parent';
				$pyjs.track.lineno=4;
				$pyjs.track.lineno=5;
				$pyjs.track.lineno=5;
				var $pyjs__ret = v;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['v']]);
			$cls_definition['value'] = $method;
			$pyjs.track.lineno=3;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Parent', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.parent */


/* end module: imports.parent */


