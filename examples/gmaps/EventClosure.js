/* start module: EventClosure */
$pyjs.loaded_modules['EventClosure'] = function (__mod_name__) {
	if($pyjs.loaded_modules['EventClosure'].__was_initialized__) return $pyjs.loaded_modules['EventClosure'];
	var $m = $pyjs.loaded_modules["EventClosure"];
	$m.__repr__ = function() { return "<module: EventClosure>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'EventClosure';
	$m.__name__ = __mod_name__;
	var $eq2,$eq1,$bool1;

	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['random'] = $p['___import___']('random.random', null, null, false);
	$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
	$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
	$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
	$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
	$m['LatLngBounds'] = $p['___import___']('pyjamas.gmaps.Base.LatLngBounds', null, null, false);
	$m['Marker'] = $p['___import___']('pyjamas.gmaps.Marker.Marker', null, null, false);
	$m['MarkerOptions'] = $p['___import___']('pyjamas.gmaps.Marker.MarkerOptions', null, null, false);
	$m['InfoWindow'] = $p['___import___']('pyjamas.gmaps.InfoWindow.InfoWindow', null, null, false);
	$m['InfoWindowOptions'] = $p['___import___']('pyjamas.gmaps.InfoWindow.InfoWindowOptions', null, null, false);
	$m['EventClosure'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'EventClosure';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var northEast,$iter1_iter,marker,latSpan,lngSpan,$iter1_array,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,location,$mul4,$mul3,$mul2,$mul1,southWest,$iter1_type,i,bounds,element,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$add5,options;
			$m['SimplePanel']['__init__'](self);
			self['setSize']('100%', '100%');
			options = $m['MapOptions']();
			options.zoom = 4;
			options.center = $m['LatLng']((typeof ($usub1=25.363882)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), 131.044922);
			options.mapTypeId = $p['getattr']($m['MapTypeId'], 'ROADMAP');
			element = $wnd.document.getElementById("map_canvas");
			self.map = $m['Map'](element, options);
			southWest = $m['LatLng']((typeof ($usub2=31.203405)=='number'?
				-$usub2:
				$p['op_usub']($usub2)), 125.244141);
			northEast = $m['LatLng']((typeof ($usub3=25.363882)=='number'?
				-$usub3:
				$p['op_usub']($usub3)), 131.044922);
			bounds = $m['LatLngBounds'](southWest, northEast);
			self['map']['fitBounds'](bounds);
			lngSpan = (typeof ($sub1=northEast['lng']())==typeof ($sub2=southWest['lng']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			latSpan = (typeof ($sub3=northEast['lat']())==typeof ($sub4=southWest['lat']()) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			$iter1_iter = $p['range'](0, 5);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				location = $m['LatLng']((typeof ($add1=southWest['lat']())==typeof ($add2=(typeof ($mul1=latSpan)==typeof ($mul2=$m['random']()) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)), (typeof ($add3=southWest['lng']())==typeof ($add4=(typeof ($mul3=lngSpan)==typeof ($mul4=$m['random']()) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)));
				options = $m['MarkerOptions']();
				options.position = location;
				options.map = $p['getattr'](self, 'map');
				marker = $m['Marker'](options);
				marker['setTitle']($p['str']((typeof ($add5=i)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))));
				self['attachSecretMessage'](marker, i);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('attachSecretMessage', function(marker, number) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				marker = arguments[1];
				number = arguments[2];
			}
			var $lambda1,infoWindow,message,$2,options,$1;
			message = $p['list'](['This', 'is', 'the', 'secret', 'message']);
			options = $m['InfoWindowOptions']();
			options.content = (typeof ($1=message).__array != 'undefined'?
				((typeof $1.__array[$2=number]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(number));
			infoWindow = $m['InfoWindow'](options);
			var 			$lambda1 = function() {

				return infoWindow['open']($p['getattr'](self, 'map'), marker);
			};
			$lambda1.__name__ = '$lambda1';

			$lambda1.__bind_type__ = 0;
			$lambda1.__args__ = [null,null];
			marker['addListener']('click', $lambda1);
			return null;
		}
	, 1, [null,null,['self'],['marker'],['number']]);
		$cls_definition['attachSecretMessage'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EventClosure', $p['tuple']($bases), $data);
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
		$m['root']['add']($m['EventClosure']());
	}
	return this;
}; /* end EventClosure */


/* end module: EventClosure */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'random.random', 'random', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base', 'pyjamas.gmaps.Base.LatLngBounds', 'pyjamas.gmaps.Marker.Marker', 'pyjamas.gmaps.Marker', 'pyjamas.gmaps.Marker.MarkerOptions', 'pyjamas.gmaps.InfoWindow.InfoWindow', 'pyjamas.gmaps.InfoWindow', 'pyjamas.gmaps.InfoWindow.InfoWindowOptions']
*/
