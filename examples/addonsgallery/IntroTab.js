/* start module: IntroTab */
$pyjs.loaded_modules['IntroTab'] = function (__mod_name__) {
	if($pyjs.loaded_modules['IntroTab'].__was_initialized__) return $pyjs.loaded_modules['IntroTab'];
	var $m = $pyjs.loaded_modules["IntroTab"];
	$m.__repr__ = function() { return "<module: IntroTab>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'IntroTab';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['IntroTab'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'IntroTab';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,text,$add1;
			text = "<div class='infoProse'>Welcome to the Addons Gallery.  ";
			text = (typeof ($add1=text)==typeof ($add2='This app shows off the addon components for Pyjamas.</div>') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			$m['Sink']['__init__'](self);
			self['setWidget']($m['HTML'](text, true));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onShow', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onShow'] = $method;
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IntroTab', $p['tuple']($bases), $data);
	})();
	$m['init'] = function() {

		return $m['SinkInfo']('Intro', '<b>Introduction to the Addons Gallery</b>', $m['IntroTab']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end IntroTab */


/* end module: IntroTab */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML']
*/
