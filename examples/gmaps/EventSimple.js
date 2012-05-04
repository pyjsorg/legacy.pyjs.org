/* start module: EventSimple */
$pyjs.loaded_modules['EventSimple'] = function (__mod_name__) {
	if($pyjs.loaded_modules['EventSimple'].__was_initialized__) return $pyjs.loaded_modules['EventSimple'];
	var $m = $pyjs.loaded_modules["EventSimple"];
	$m.__repr__ = function() { return "<module: EventSimple>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'EventSimple';
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
	$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
	$m['EventSimple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'EventSimple';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var options;
			$m['SimplePanel']['__init__'](self);
			self['setSize']('100%', '100%');
			options = $m['MapOptions']();
			options.zoom = 4;
			options.center = $m['LatLng']((typeof ($usub1=25.363882)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), 131.044922);
			options.mapTypeId = $p['getattr']($m['MapTypeId'], 'ROADMAP');
			self.map = $m['Map'](self['getElement'](), options);
			self['map']['addListener']('zoom_changed', $p['getattr'](self, 'zoomChanged'));
			self['map']['addListener']('click', $p['getattr'](self, 'clicked'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('zoomChanged', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Timer'](1500, $p['getattr'](self, 'moveToDarwin'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['zoomChanged'] = $method;
		$method = $pyjs__bind_method2('moveToDarwin', function(timer) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
			}
			var darwin;
			darwin = $m['LatLng']((typeof ($usub2=12.461334)=='number'?
				-$usub2:
				$p['op_usub']($usub2)), 130.841904);
			self['map']['setCenter'](darwin);
			return null;
		}
	, 1, [null,null,['self'],['timer']]);
		$cls_definition['moveToDarwin'] = $method;
		$method = $pyjs__bind_method2('clicked', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['map']['setZoom'](8);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clicked'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EventSimple', $p['tuple']($bases), $data);
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
		$m['root']['add']($m['EventSimple']());
	}
	return this;
}; /* end EventSimple */


/* end module: EventSimple */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base']
*/
