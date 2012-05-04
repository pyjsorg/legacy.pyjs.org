/* start module: pyjamas.ui.InnerText */
$pyjs.loaded_modules['pyjamas.ui.InnerText'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.InnerText'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.InnerText'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.InnerText"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.InnerText>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.InnerText';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['InnerText'] = $pyjs.loaded_modules['pyjamas.ui.InnerText'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['InnerText'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.InnerText';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['label', 'Text', 'Text', null])]);
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;

			return $p['getattr'](self, '_props');
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setInnerText'](self['getElement'](), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerText'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InnerText', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.InnerText */


/* end module: pyjamas.ui.InnerText */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
