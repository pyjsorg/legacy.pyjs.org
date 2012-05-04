/* start module: EventProperties */
$pyjs.loaded_modules['EventProperties'] = function (__mod_name__) {
	if($pyjs.loaded_modules['EventProperties'].__was_initialized__) return $pyjs.loaded_modules['EventProperties'];
	var $m = $pyjs.loaded_modules["EventProperties"];
	$m.__repr__ = function() { return "<module: EventProperties>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'EventProperties';
	$m.__name__ = __mod_name__;
	var $eq3,$bool2,$eq4;

	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
	$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
	$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
	$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
	$m['LatLngBounds'] = $p['___import___']('pyjamas.gmaps.Base.LatLngBounds', null, null, false);
	$m['InfoWindow'] = $p['___import___']('pyjamas.gmaps.InfoWindow.InfoWindow', null, null, false);
	$m['InfoWindowOptions'] = $p['___import___']('pyjamas.gmaps.InfoWindow.InfoWindowOptions', null, null, false);
	$m['EventProperties'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'EventProperties';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var options;
			$m['SimplePanel']['__init__'](self);
			self['setSize']('100%', '100%');
			self.myLatLng = $m['LatLng']((typeof ($usub1=25.363882)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), 131.044922);
			options = $m['MapOptions']();
			options.zoom = 4;
			options.center = $p['getattr'](self, 'myLatLng');
			options.mapTypeId = $p['getattr']($m['MapTypeId'], 'ROADMAP');
			self.map = $m['Map'](self['getElement'](), options);
			self['map']['addListener']('zoom_changed', $p['getattr'](self, 'zoomChanged'));
			options = $m['InfoWindowOptions']();
			options.content = 'Zoom Level Test';
			options.position = $p['getattr'](self, 'myLatLng');
			self.infoWindow = $m['InfoWindow'](options);
			self['infoWindow']['open']($p['getattr'](self, 'map'));
			self['map']['addListener']('zoom_changed', $p['getattr'](self, 'zoomChanged'));
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
			var $add2,$bool1,$eq2,$eq1,zoomLevel,$add1;
			zoomLevel = self['map']['getZoom']();
			self['map']['setCenter']($p['getattr'](self, 'myLatLng'));
			self['infoWindow']['setContent']((typeof ($add1='Zoom: ')==typeof ($add2=$p['str'](zoomLevel)) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			if ((($bool1=(($eq1=zoomLevel)===($eq2=0)&&$eq1===null?true:
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
				self['map']['setZoom'](10);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['zoomChanged'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EventProperties', $p['tuple']($bases), $data);
	})();
	if ((($bool2=(($eq3=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq4='__main__')&&$eq3===null?true:
		($eq3===null?false:($eq4===null?false:
			((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
				((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
					$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2.__nonzero__=='function'?
					$bool2.__nonzero__() :
					(typeof $bool2.__len__=='function'?
						($bool2.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['root'] = $m['RootPanel']();
		$m['root']['add']($m['EventProperties']());
	}
	return this;
}; /* end EventProperties */


/* end module: EventProperties */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base', 'pyjamas.gmaps.Base.LatLngBounds', 'pyjamas.gmaps.InfoWindow.InfoWindow', 'pyjamas.gmaps.InfoWindow', 'pyjamas.gmaps.InfoWindow.InfoWindowOptions']
*/
