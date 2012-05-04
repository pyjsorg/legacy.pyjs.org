/* start module: imports.child */
$pyjs.loaded_modules['imports.child'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.child'].__was_initialized__) return $pyjs.loaded_modules['imports.child'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.child"];
	$m.__repr__ = function() { return "<module: imports.child>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.child';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['child'] = $pyjs.loaded_modules['imports.child'];
	try {
		$m.__track_lines__[1] = 'imports.child.py, line 1:\n    ';
		$m.__track_lines__[2] = 'imports.child.py, line 2:\n    import imports.parent';
		$m.__track_lines__[4] = 'imports.child.py, line 4:\n    class Child(imports.parent.Parent):';
		$m.__track_lines__[5] = 'imports.child.py, line 5:\n    pass';


		$pyjs.track.module='imports.child';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['imports'] = $p['___import___']('imports.parent', 'imports');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['Child'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'imports.child';
			$cls_definition.__md5__ = '716a36436ca3b297e59289ca2ca30c59';
			$pyjs.track.lineno=5;
			$pyjs.track.lineno=4;
			var $bases = new Array($p['getattr']($p['getattr']($m['imports'], 'parent'), 'Parent'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Child', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.child */


/* end module: imports.child */


/*
PYJS_DEPS: ['imports.parent', 'imports']
*/
