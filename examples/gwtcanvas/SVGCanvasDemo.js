/* start module: SVGCanvasDemo */
$pyjs.loaded_modules['SVGCanvasDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SVGCanvasDemo'].__was_initialized__) return $pyjs.loaded_modules['SVGCanvasDemo'];
	var $m = $pyjs.loaded_modules["SVGCanvasDemo"];
	$m.__repr__ = function() { return "<module: SVGCanvasDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SVGCanvasDemo';
	$m.__name__ = __mod_name__;
	var $eq2,$eq1,$bool1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['SVGCanvas'] = $p['___import___']('pyjamas.Canvas.SVGCanvas.SVGCanvas', null, null, false);
	$m['GWTCanvasDemo'] = $p['___import___']('GWTCanvasDemo.GWTCanvasDemo', null, null, false);
	$m['SVGCanvasDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SVGCanvasDemo';
		$method = $pyjs__bind_method2('_get_canvas', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['SVGCanvas'](400, 400);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_canvas'] = $method;
		var $bases = new Array($m['GWTCanvasDemo']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SVGCanvasDemo', $p['tuple']($bases), $data);
	})();
	if ((($bool1=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		$m['pyjd']['setup']('./public/SVGCanvasDemo.html');
		$m['app'] = $m['SVGCanvasDemo']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end SVGCanvasDemo */


/* end module: SVGCanvasDemo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Canvas.SVGCanvas.SVGCanvas', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.SVGCanvas', 'GWTCanvasDemo.GWTCanvasDemo', 'GWTCanvasDemo']
*/
