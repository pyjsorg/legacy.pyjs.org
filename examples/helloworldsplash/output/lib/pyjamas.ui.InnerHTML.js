/* start module: pyjamas.ui.InnerHTML */
$pyjs.loaded_modules['pyjamas.ui.InnerHTML'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.InnerHTML'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.InnerHTML'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.InnerHTML"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.InnerHTML>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.InnerHTML';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['InnerHTML'] = $pyjs.loaded_modules['pyjamas.ui.InnerHTML'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['InnerHTML'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.InnerHTML';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['text', 'HTML text', 'HTML', null])]);
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerHTML'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			$m['DOM']['setInnerHTML'](self['getElement'](), html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;

			return $p['getattr'](self, '_props');
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InnerHTML', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.InnerHTML */


/* end module: pyjamas.ui.InnerHTML */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
