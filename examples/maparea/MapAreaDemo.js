/* start module: MapAreaDemo */
$pyjs.loaded_modules['MapAreaDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MapAreaDemo'].__was_initialized__) return $pyjs.loaded_modules['MapAreaDemo'];
	var $m = $pyjs.loaded_modules["MapAreaDemo"];
	$m.__repr__ = function() { return "<module: MapAreaDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MapAreaDemo';
	$m.__name__ = __mod_name__;
	var $bool1,$eq2,$eq1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['ImageMap'] = $p['___import___']('pyjamas.ui.Map.ImageMap', null, null, false);
	$m['MapArea'] = $p['___import___']('pyjamas.ui.Map.MapArea', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['ContextMenuPopupPanel'] = $p['___import___']('pyjamas.ui.ContextMenuPopupPanel.ContextMenuPopupPanel', null, null, false);
	$m['log'] = $m['logging']['getAppendLogger']((typeof __name__ == "undefined"?$m.__name__:__name__), $p['getattr']($m['logging'], 'DEBUG'), $p['getattr']($m['logging'], 'PLAIN_FORMAT'));
	$m['MapAreaDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'MapAreaDemo';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter5_array,nma,height,$iter5_iter,hpanel,$iter5_type,scale,img,width,$iter5_idx,imageClickHandler,map,msgpanel,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,areas,msgarea1,msgarea2,imagepanel;
			width = 200;
			height = 215;
			scale = 1.5;
			img = $pyjs_kwargs_call(null, $m['Image'], null, null, [{Width:$p['sprintf']('%dpx', $p['float_int']((typeof ($mul1=scale)==typeof ($mul2=width) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))), Height:$p['sprintf']('%dpx', $p['float_int']((typeof ($mul3=scale)==typeof ($mul4=height) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))))}, 'babykatie_small.jpg']);
			img['element']['setAttribute']('usemap', '#themap');
			img['element']['setAttribute']('ismap', '1');
			imagepanel = $m['ScrollPanel']();
			imagepanel['add'](img);
			msgpanel = $m['VerticalPanel']();
			msgpanel['add']($m['Label']("move mouse over baby katie's eyes, nose and mouth."));
			msgarea1 = $m['Label']('movement messages');
			msgpanel['add'](msgarea1);
			msgarea2 = $m['Label']('click messages');
			msgpanel['add'](msgarea2);
			imageClickHandler = (typeof MapClickHandler == "undefined"?$m.MapClickHandler:MapClickHandler)(msgarea1, msgarea2);
			map = $pyjs_kwargs_call(null, $m['ImageMap'], null, null, [{Width:$p['sprintf']('%dpx', $p['float_int']((typeof ($mul5=scale)==typeof ($mul6=width) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))), Height:$p['sprintf']('%dpx', $p['float_int']((typeof ($mul7=scale)==typeof ($mul8=height) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))))}, 'themap']);
			areas = $p['list']([(typeof NamedMapArea == "undefined"?$m.NamedMapArea:NamedMapArea)('right eye', 'circle', function(){
				var $iter1_nextval,$iter1_type,$mul10,i,$collcomp1,$iter1_iter,$iter1_idx,$mul9,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['list']([73, 97, 7]);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				$collcomp1['append']((typeof ($mul9=scale)==typeof ($mul10=i) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
			}

	return $collcomp1;}()), (typeof NamedMapArea == "undefined"?$m.NamedMapArea:NamedMapArea)('left eye', 'circle', function(){
				var $iter2_nextval,$iter2_type,$mul11,$iter2_iter,i,$collcomp2,$iter2_idx,$iter2_array,$mul12;
	$collcomp2 = $p['list']();
			$iter2_iter = $p['list']([116, 88, 5]);
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				$collcomp2['append']((typeof ($mul11=scale)==typeof ($mul12=i) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)));
			}

	return $collcomp2;}()), $pyjs_kwargs_call(null, (typeof NamedMapArea == "undefined"?$m.NamedMapArea:NamedMapArea), null, null, [{Href:'http://lkcl.net'}, 'nose', 'rect', function(){
				var $iter3_idx,$mul13,i,$iter3_nextval,$iter3_type,$collcomp3,$mul14,$iter3_iter,$iter3_array;
	$collcomp3 = $p['list']();
			$iter3_iter = $p['list']([88, 97, 115, 115]);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				$collcomp3['append']((typeof ($mul13=scale)==typeof ($mul14=i) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)));
			}

	return $collcomp3;}()]), (typeof NamedMapArea == "undefined"?$m.NamedMapArea:NamedMapArea)('mouth', 'polygon', function(){
				var $mul16,$mul15,i,$iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp4 = $p['list']();
			$iter4_iter = $p['list']([82, 129, 102, 124, 119, 119, 121, 125, 103, 132, 79, 133]);
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				$collcomp4['append']((typeof ($mul15=scale)==typeof ($mul16=i) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)));
			}

	return $collcomp4;}())]);
			$iter5_iter = areas;
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				nma = $iter5_nextval;
				nma['addMouseListener'](imageClickHandler);
				nma['addClickListener'](imageClickHandler);
				map['add'](nma);
			}
			hpanel = $m['HorizontalPanel']();
			hpanel['add'](map);
			hpanel['add'](imagepanel);
			hpanel['add'](msgpanel);
			$m['RootPanel']()['add'](hpanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MapAreaDemo', $p['tuple']($bases), $data);
	})();
	$m['NamedMapArea'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'MapAreaDemo';
		$method = $pyjs__bind_method2('__init__', function(areaname, shape, coords, Href) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				areaname = arguments[1];
				shape = arguments[2];
				coords = arguments[3];
				Href = arguments[4];
				var kwargs = arguments.length >= 6 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Href != 'undefined') {
					if (Href !== null && typeof Href['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Href;
						Href = arguments[5];
					}
				} else 				if (typeof coords != 'undefined') {
					if (coords !== null && typeof coords['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = coords;
						coords = arguments[5];
					}
				} else 				if (typeof shape != 'undefined') {
					if (shape !== null && typeof shape['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = shape;
						shape = arguments[5];
					}
				} else 				if (typeof areaname != 'undefined') {
					if (areaname !== null && typeof areaname['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = areaname;
						areaname = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof Href == 'undefined') Href=arguments.callee.__args__[6][1];

			self.areaname = areaname;
			coords = ', '['join'](function(){
				var $iter6_idx,$iter6_type,$collcomp5,i,$iter6_array,$iter6_iter,$iter6_nextval;
	$collcomp5 = $p['list']();
			$iter6_iter = coords;
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				$collcomp5['append']($p['sprintf']('%d', $p['float_int'](i)));
			}

	return $collcomp5;}());
			$pyjs_kwargs_call($m['MapArea'], '__init__', null, kwargs, [{Href:Href}, self, shape, coords]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['areaname'],['shape'],['coords'],['Href', '']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MapArea']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('NamedMapArea', $p['tuple']($bases), $data);
	})();
	$m['MapClickHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'MapAreaDemo';
		$method = $pyjs__bind_method2('__init__', function(msgarea1, msgarea2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msgarea1 = arguments[1];
				msgarea2 = arguments[2];
			}

			self.msgarea1 = msgarea1;
			self.msgarea2 = msgarea2;
			return null;
		}
	, 1, [null,null,['self'],['msgarea1'],['msgarea2']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_mouseActionMessage', function(name, action, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				action = arguments[2];
				x = arguments[3];
				y = arguments[4];
			}
			if (typeof x == 'undefined') x=arguments.callee.__args__[5][1];
			if (typeof y == 'undefined') y=arguments.callee.__args__[6][1];
			var $add14,$add12,$add3,$add13,msg,$add2,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$add10,$add11;
			msg = (typeof ($add13=(typeof ($add11=(typeof ($add9=(typeof ($add7=(typeof ($add5=(typeof ($add3=(typeof ($add1=name)==typeof ($add2=' ') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4=action) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($add6=' (') && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)))==typeof ($add8=$p['str'](x)) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))==typeof ($add10=', ') && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))==typeof ($add12=$p['str'](y)) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)))==typeof ($add14=')') && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
			self['msgarea1']['setText'](msg);
			$m['log']['debug'](msg);
			return null;
		}
	, 1, [null,null,['self'],['name'],['action'],['x', null],['y', null]]);
		$cls_definition['_mouseActionMessage'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['_mouseActionMessage']($p['getattr'](sender, 'areaname'), 'move', x, y);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['_mouseActionMessage']($p['getattr'](sender, 'areaname'), 'down', x, y);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['_mouseActionMessage']($p['getattr'](sender, 'areaname'), 'up', x, y);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['_mouseActionMessage']($p['getattr'](sender, 'areaname'), 'enter');
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['_mouseActionMessage']($p['getattr'](sender, 'areaname'), 'leave');
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add16,$add15,msg;
			msg = (typeof ($add15="you clicked on baby katie's ")==typeof ($add16=$p['getattr'](sender, 'areaname')) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16));
			self['msgarea2']['setText'](msg);
			$m['log']['debug'](msg);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MapClickHandler', $p['tuple']($bases), $data);
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
		$m['pyjd']['setup']('http://127.0.0.1/examples/maparea/public/MapAreaDemo.html');
		$m['app'] = $m['MapAreaDemo']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end MapAreaDemo */


/* end module: MapAreaDemo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas', 'pyjamas.logging', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Map.ImageMap', 'pyjamas.ui.Map', 'pyjamas.ui.Map.MapArea', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas.ui.MenuBar', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.ContextMenuPopupPanel.ContextMenuPopupPanel', 'pyjamas.ui.ContextMenuPopupPanel']
*/
