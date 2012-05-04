/* start module: imports.enum.Late */
$pyjs.loaded_modules['imports.enum.Late'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.enum.Late'].__was_initialized__) return $pyjs.loaded_modules['imports.enum.Late'];
	if(typeof $pyjs.loaded_modules['imports.enum'] == 'undefined' || !$pyjs.loaded_modules['imports.enum'].__was_initialized__) $p['___import___']('imports.enum', null);
	var $m = $pyjs.loaded_modules["imports.enum.Late"];
	$m.__repr__ = function() { return "<module: imports.enum.Late>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.enum.Late';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports.enum']['Late'] = $pyjs.loaded_modules['imports.enum.Late'];
	try {
		$m.__track_lines__[1] = 'imports.enum.Late.py, line 1:\n    ';
		$m.__track_lines__[2] = 'imports.enum.Late.py, line 2:\n    def getLate():';
		$m.__track_lines__[3] = 'imports.enum.Late.py, line 3:\n    v = Late(**{})';
		$m.__track_lines__[4] = 'imports.enum.Late.py, line 4:\n    return v';
		$m.__track_lines__[6] = 'imports.enum.Late.py, line 6:\n    class Late():';
		$m.__track_lines__[7] = "imports.enum.Late.py, line 7:\n    value = 'late'";


		$pyjs.track.module='imports.enum.Late';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$m['getLate'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var v;
			$pyjs.track={module:'imports.enum.Late',lineno:2};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='imports.enum.Late';
			$pyjs.track.lineno=2;
			$pyjs.track.lineno=3;
			v = $pyjs_kwargs_call(null, (typeof Late == "undefined"?$m.Late:Late), null, $p['dict']([]), [{}]);
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=4;
			var $pyjs__ret = v;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getLate'].__name__ = 'getLate';

		$m['getLate'].__bind_type__ = 0;
		$m['getLate'].__args__ = [null,null];
		$pyjs.track.lineno=6;
		$m['Late'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'imports.enum.Late';
			$cls_definition.__md5__ = 'a7a55094a4fc84b06ac731a80a7f75b9';
			$pyjs.track.lineno=7;
			$cls_definition['value'] = 'late';
			$pyjs.track.lineno=6;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Late', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.enum.Late */


/* end module: imports.enum.Late */


