/* start module: imports.cls */
$pyjs.loaded_modules['imports.cls'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.cls'].__was_initialized__) return $pyjs.loaded_modules['imports.cls'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.cls"];
	$m.__repr__ = function() { return "<module: imports.cls>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.cls';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['cls'] = $pyjs.loaded_modules['imports.cls'];
	try {
		$m.__track_lines__[1] = 'imports.cls.py, line 1:\n    ';
		$m.__track_lines__[2] = 'imports.cls.py, line 2:\n    class CLS:';
		$m.__track_lines__[3] = 'imports.cls.py, line 3:\n    pass';


		$pyjs.track.module='imports.cls';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$m['CLS'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'imports.cls';
			$cls_definition.__md5__ = '95e34da70e8228af3eba3006c324f9ae';
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=2;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('CLS', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.cls */


/* end module: imports.cls */


