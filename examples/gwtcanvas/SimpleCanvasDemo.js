/* start module: SimpleCanvasDemo */
$pyjs.loaded_modules['SimpleCanvasDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SimpleCanvasDemo'].__was_initialized__) return $pyjs.loaded_modules['SimpleCanvasDemo'];
	var $m = $pyjs.loaded_modules["SimpleCanvasDemo"];
	$m.__repr__ = function() { return "<module: SimpleCanvasDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SimpleCanvasDemo';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['SimpleCanvasDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SimpleCanvasDemo';
		$method = $pyjs__bind_method2('__init__', function(theCanvas) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				theCanvas = arguments[1];
			}

			self.height = 400;
			self.width = 400;
			self.canvas = theCanvas;
			self.controls = null;
			return null;
		}
	, 1, [null,null,['self'],['theCanvas']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getControls', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool1;
			if ((($bool1=($p['getattr'](self, 'controls') === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['createControls']();
			}
			return $p['getattr'](self, 'controls');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getControls'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'demoName');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SimpleCanvasDemo', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end SimpleCanvasDemo */


/* end module: SimpleCanvasDemo */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite']
*/
