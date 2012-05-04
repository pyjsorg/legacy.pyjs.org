/* start module: DirectionsSimple */
$pyjs.loaded_modules['DirectionsSimple'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DirectionsSimple'].__was_initialized__) return $pyjs.loaded_modules['DirectionsSimple'];
	var $m = $pyjs.loaded_modules["DirectionsSimple"];
	$m.__repr__ = function() { return "<module: DirectionsSimple>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DirectionsSimple';
	$m.__name__ = __mod_name__;
	var $eq3,$bool2,$eq4;

	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
	$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
	$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
	$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
	$m['DirectionsService'] = $p['___import___']('pyjamas.gmaps.DirectionsService.DirectionsService', null, null, false);
	$m['DirectionsRequest'] = $p['___import___']('pyjamas.gmaps.DirectionsService.DirectionsRequest', null, null, false);
	$m['DirectionsTravelMode'] = $p['___import___']('pyjamas.gmaps.DirectionsService.DirectionsTravelMode', null, null, false);
	$m['DirectionsStatus'] = $p['___import___']('pyjamas.gmaps.DirectionsService.DirectionsStatus', null, null, false);
	$m['DirectionsRenderer'] = $p['___import___']('pyjamas.gmaps.DirectionsRenderer.DirectionsRenderer', null, null, false);
	$m['DirectionsSimple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DirectionsSimple';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,places,chigado,topPanel,value,$iter1_iter,options,mapPanel,$iter1_array,$4,$1,$2,$3,$iter1_idx;
			$m['DockPanel']['__init__'](self);
			self['setSize']('100%', '100%');
			topPanel = $m['HorizontalPanel']();
			self['add'](topPanel, $p['getattr']($m['DockPanel'], 'NORTH'));
			places = $p['dict']([['chicago, il', 'Chicago'], ['st louis, mo', 'St Louis'], ['joplin, mo', 'Joplin, MO'], ['oklahoma city, ok', 'Oklahoma City'], ['amarillo, tx', 'Amarillo'], ['gallup, nm', 'Gallup, NM'], ['flagstaff, az', 'Flagstaff, AZ'], ['winona, az', 'Winona'], ['kingman, az', 'Kingman'], ['barstow, ca', 'Barstow'], ['san bernardino, ca', 'San Bernardino'], ['los angeles, ca', 'Los Angeles']]);
			self.start = $m['ListBox']();
			self.end = $m['ListBox']();
			$iter1_iter = places;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				value = $iter1_nextval;
				self['start']['addItem']((typeof ($1=places).__array != 'undefined'?
					((typeof $1.__array[$2=value]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(value)), value);
				self['end']['addItem']((typeof ($3=places).__array != 'undefined'?
					((typeof $3.__array[$4=value]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(value)), value);
			}
			self['start']['addChangeListener']($p['getattr'](self, 'calcRoute'));
			self['end']['addChangeListener']($p['getattr'](self, 'calcRoute'));
			topPanel['add']($p['getattr'](self, 'start'));
			topPanel['add']($p['getattr'](self, 'end'));
			mapPanel = $m['SimplePanel']();
			mapPanel['setSize']('800', '500');
			self['add'](mapPanel, $p['getattr']($m['DockPanel'], 'CENTER'));
			chigado = $m['LatLng'](41.850033, (typeof ($usub1=87.6500523)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			options = $pyjs_kwargs_call(null, $m['MapOptions'], null, null, [{zoom:7, center:chigado, mapTypeId:$p['getattr']($m['MapTypeId'], 'ROADMAP')}]);
			self.map = $m['Map'](mapPanel['getElement'](), options);
			self.directionsDisplay = $m['DirectionsRenderer']();
			self['directionsDisplay']['setMap']($p['getattr'](self, 'map'));
			self.directionsService = $m['DirectionsService']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('calcRoute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var start,end,request;
			start = self['start']['getValue'](self['start']['getSelectedIndex']());
			end = self['end']['getValue'](self['end']['getSelectedIndex']());
			request = $pyjs_kwargs_call(null, $m['DirectionsRequest'], null, null, [{origin:start, destination:end, travelMode:$p['getattr']($m['DirectionsTravelMode'], 'DRIVING')}]);
			self['directionsService']['route'](request, $p['getattr'](self, 'directionsResult'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['calcRoute'] = $method;
		$method = $pyjs__bind_method2('directionsResult', function(response, status) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				status = arguments[2];
			}
			var $iter2_nextval,$iter2_type,attr,$iter2_iter,$iter3_array,$eq2,route,$eq1,$iter3_idx,$iter2_idx,$bool1,attrs,$iter3_type,$iter3_nextval,Hf,$iter2_array,$iter3_iter;
			if ((($bool1=(($eq1=status)===($eq2=$p['getattr']($m['DirectionsStatus'], 'OK'))&&$eq1===null?true:
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
				Hf = $p['getattr'](response, 'Hf');
				$iter2_iter = $p['getattr'](response, 'routes');
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					route = $iter2_nextval;
					attrs = $p['dir'](route);
					attrs['sort']();
					$iter3_iter = attrs;
					if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter.__iter__();
						$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						attr = $iter3_nextval;
					}
				}
				self['directionsDisplay']['setDirections'](response);
			}
			return null;
		}
	, 1, [null,null,['self'],['response'],['status']]);
		$cls_definition['directionsResult'] = $method;
		var $bases = new Array($m['DockPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DirectionsSimple', $p['tuple']($bases), $data);
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
		$m['root']['add']($m['DirectionsSimple']());
	}
	return this;
}; /* end DirectionsSimple */


/* end module: DirectionsSimple */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.Window', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base', 'pyjamas.gmaps.DirectionsService.DirectionsService', 'pyjamas.gmaps.DirectionsService', 'pyjamas.gmaps.DirectionsService.DirectionsRequest', 'pyjamas.gmaps.DirectionsService.DirectionsTravelMode', 'pyjamas.gmaps.DirectionsService.DirectionsStatus', 'pyjamas.gmaps.DirectionsRenderer.DirectionsRenderer', 'pyjamas.gmaps.DirectionsRenderer']
*/
