/* start module: ControlOptions */
$pyjs.loaded_modules['ControlOptions'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ControlOptions'].__was_initialized__) return $pyjs.loaded_modules['ControlOptions'];
	var $m = $pyjs.loaded_modules["ControlOptions"];
	$m.__repr__ = function() { return "<module: ControlOptions>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ControlOptions';
	$m.__name__ = __mod_name__;
	var $eq2,$eq1,$bool1;

	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
	$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
	$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
	$m['MapTypeControlOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeControlOptions', null, null, false);
	$m['NavigationControlOptions'] = $p['___import___']('pyjamas.gmaps.Map.NavigationControlOptions', null, null, false);
	$m['MapTypeControlStyle'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeControlStyle', null, null, false);
	$m['NavigationControlStyle'] = $p['___import___']('pyjamas.gmaps.Map.NavigationControlStyle', null, null, false);
	$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
	$m['ControlOptions'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ControlOptions';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var options;
			$m['SimplePanel']['__init__'](self);
			self['setSize']('100%', '100%');
			options = $pyjs_kwargs_call(null, $m['MapOptions'], null, null, [{zoom:4, center:$m['LatLng']((typeof ($usub1=25.363882)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), 131.044922), mapTypeId:$p['getattr']($m['MapTypeId'], 'ROADMAP'), mapTypeControl:true, mapTypeControlOptions:$pyjs_kwargs_call(null, $m['MapTypeControlOptions'], null, null, [{style:$p['getattr']($m['MapTypeControlStyle'], 'DROPDOWN_MENU')}]), navigationControl:true, navigationControlOptions:$pyjs_kwargs_call(null, $m['NavigationControlOptions'], null, null, [{style:$p['getattr']($m['NavigationControlStyle'], 'SMALL')}])}]);
			self.map = $m['Map'](self['getElement'](), options);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ControlOptions', $p['tuple']($bases), $data);
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
		$m['root'] = $m['RootPanel']();
		$m['root']['add']($m['ControlOptions']());
	}
	return this;
}; /* end ControlOptions */


/* end module: ControlOptions */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Map.MapTypeControlOptions', 'pyjamas.gmaps.Map.NavigationControlOptions', 'pyjamas.gmaps.Map.MapTypeControlStyle', 'pyjamas.gmaps.Map.NavigationControlStyle', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base']
*/
