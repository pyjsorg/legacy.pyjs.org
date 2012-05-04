/* start module: GeocodingSimple */
$pyjs.loaded_modules['GeocodingSimple'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GeocodingSimple'].__was_initialized__) return $pyjs.loaded_modules['GeocodingSimple'];
	var $m = $pyjs.loaded_modules["GeocodingSimple"];
	$m.__repr__ = function() { return "<module: GeocodingSimple>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GeocodingSimple';
	$m.__name__ = __mod_name__;
	var $eq3,$eq4,$bool3;

	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
	$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
	$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
	$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
	$m['Geocoder'] = $p['___import___']('pyjamas.gmaps.Geocoder.Geocoder', null, null, false);
	$m['GeocoderRequest'] = $p['___import___']('pyjamas.gmaps.Geocoder.GeocoderRequest', null, null, false);
	$m['GeocoderStatus'] = $p['___import___']('pyjamas.gmaps.Geocoder.GeocoderStatus', null, null, false);
	$m['Marker'] = $p['___import___']('pyjamas.gmaps.Marker.Marker', null, null, false);
	$m['MarkerOptions'] = $p['___import___']('pyjamas.gmaps.Marker.MarkerOptions', null, null, false);
	$m['GeocodingSimple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GeocodingSimple';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var topPanel,mapPanel,button,options;
			$m['DockPanel']['__init__'](self);
			self['setSize']('100%', '100%');
			self.geocoder = $m['Geocoder']();
			topPanel = $m['HorizontalPanel']();
			self['add'](topPanel, $p['getattr']($m['DockPanel'], 'NORTH'));
			self.address = $m['TextBox']();
			self['address']['setText']('Sydney, NSW');
			self['address']['addChangeListener']($p['getattr'](self, 'codeAddress'));
			topPanel['add']($p['getattr'](self, 'address'));
			button = $m['Button']('Geocode');
			button['addClickListener']($p['getattr'](self, 'codeAddress'));
			topPanel['add'](button);
			mapPanel = $m['SimplePanel']();
			mapPanel['setSize']('600', '400');
			self['add'](mapPanel, $p['getattr']($m['DockPanel'], 'CENTER'));
			options = $pyjs_kwargs_call(null, $m['MapOptions'], null, null, [{zoom:8, center:$m['LatLng']((typeof ($usub1=34.397)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), 150.644), mapTypeId:$p['getattr']($m['MapTypeId'], 'ROADMAP')}]);
			self.map = $m['Map'](mapPanel['getElement'](), options);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('codeAddress', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool1,request,address;
			address = self['address']['getText']();
			if ((($bool1=$p['getattr'](self, 'geocoder')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				request = $pyjs_kwargs_call(null, $m['GeocoderRequest'], null, null, [{address:address}]);
				self['geocoder']['geocode'](request, $p['getattr'](self, 'geocodeResult'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['codeAddress'] = $method;
		$method = $pyjs__bind_method2('geocodeResult', function(results, status) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				results = arguments[1];
				status = arguments[2];
			}
			var $iter1_iter,marker,$iter2_type,$iter2_iter,res,$iter1_array,$iter1_nextval,$eq2,$eq1,compo,$bool2,$iter2_idx,$4,$2,$3,$1,$iter2_nextval,$iter1_type,$add2,$add1,$iter1_idx,$iter2_array;
			if ((($bool2=(($eq1=status)===($eq2=$p['getattr']($m['GeocoderStatus'], 'OK'))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$iter1_iter = results;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					res = $iter1_nextval;
					$iter2_iter = $p['getattr'](res, 'address_components');
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						compo = $iter2_nextval;
					}
				}
				self['map']['setCenter']($p['getattr']($p['getattr']((typeof ($1=results).__array != 'undefined'?
					((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(0)), 'geometry'), 'location'));
				marker = $m['Marker']($pyjs_kwargs_call(null, $m['MarkerOptions'], null, null, [{map:$p['getattr'](self, 'map'), position:$p['getattr']($p['getattr']((typeof ($3=results).__array != 'undefined'?
					((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(0)), 'geometry'), 'location')}]));
			}
			else {
				$m['Window']['alert']((typeof ($add1='Geocode was not successful for the following reason: ')==typeof ($add2=status) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
			}
			return null;
		}
	, 1, [null,null,['self'],['results'],['status']]);
		$cls_definition['geocodeResult'] = $method;
		var $bases = new Array($m['DockPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GeocodingSimple', $p['tuple']($bases), $data);
	})();
	if ((($bool3=(($eq3=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq4='__main__')&&$eq3===null?true:
		($eq3===null?false:($eq4===null?false:
			((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
				((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
					$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
			false :
			(typeof $bool3=='object'?
				(typeof $bool3.__nonzero__=='function'?
					$bool3.__nonzero__() :
					(typeof $bool3.__len__=='function'?
						($bool3.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['root'] = $m['RootPanel']();
		$m['root']['add']($m['GeocodingSimple']());
	}
	return this;
}; /* end GeocodingSimple */


/* end module: GeocodingSimple */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Window', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base', 'pyjamas.gmaps.Geocoder.Geocoder', 'pyjamas.gmaps.Geocoder', 'pyjamas.gmaps.Geocoder.GeocoderRequest', 'pyjamas.gmaps.Geocoder.GeocoderStatus', 'pyjamas.gmaps.Marker.Marker', 'pyjamas.gmaps.Marker', 'pyjamas.gmaps.Marker.MarkerOptions']
*/
