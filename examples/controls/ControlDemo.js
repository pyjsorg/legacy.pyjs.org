/* start module: ControlDemo */
$pyjs.loaded_modules['ControlDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ControlDemo'].__was_initialized__) return $pyjs.loaded_modules['ControlDemo'];
	var $m = $pyjs.loaded_modules["ControlDemo"];
	$m.__repr__ = function() { return "<module: ControlDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ControlDemo';
	$m.__name__ = __mod_name__;
	var $eq15,$eq16,$bool11;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['CaptionPanel'] = $p['___import___']('pyjamas.ui.CaptionPanel.CaptionPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['VerticalDemoSlider'] = $p['___import___']('pyjamas.ui.Controls.VerticalDemoSlider', null, null, false);
	$m['VerticalDemoSlider2'] = $p['___import___']('pyjamas.ui.Controls.VerticalDemoSlider2', null, null, false);
	$m['HorizontalDemoSlider'] = $p['___import___']('pyjamas.ui.Controls.HorizontalDemoSlider', null, null, false);
	$m['HorizontalDemoSlider2'] = $p['___import___']('pyjamas.ui.Controls.HorizontalDemoSlider2', null, null, false);
	$m['AreaDemoSlider'] = $p['___import___']('pyjamas.ui.Controls.AreaDemoSlider', null, null, false);
	$m['AreaDemoSlider2'] = $p['___import___']('pyjamas.ui.Controls.AreaDemoSlider2', null, null, false);
	$m['InputControl'] = $p['___import___']('pyjamas.ui.Controls.InputControl', null, null, false);
	$m['MouseInputControl'] = $p['___import___']('pyjamas.ui.MouseInputControl.MouseInputControl', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['SliderClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ControlDemo';
		$method = $pyjs__bind_method2('__init__', function(p2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p2 = arguments[1];
			}
			var $bool1;
			$m['VerticalPanel']['__init__'](self);
			self['setSpacing'](10);
			if ((($bool1=p2) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self.b = $m['VerticalDemoSlider2'](0, 100);
			}
			else {
				self.b = $m['VerticalDemoSlider'](0, 100);
			}
			self['add']($p['getattr'](self, 'b'));
			self['b']['setWidth']('20px');
			self['b']['setHeight']('100px');
			self['b']['addControlValueListener'](self);
			self.$$label = $m['InputControl'](0, 100);
			self['add']($p['getattr'](self, '$$label'));
			self['$$label']['addControlValueListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['p2']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onControlValueChanged', function(sender, old_value, new_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				old_value = arguments[2];
				new_value = arguments[3];
			}
			var $eq2,$eq3,$eq1,$eq4,$bool2,$bool3;
			if ((($bool2=(($eq1=sender)===($eq2=$p['getattr'](self, '$$label'))&&$eq1===null?true:
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
				self['b']['setControlPos'](new_value);
				self['b']['setValue'](new_value, 0);
			}
			if ((($bool3=(($eq3=sender)===($eq4=$p['getattr'](self, 'b'))&&$eq3===null?true:
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
				self['$$label']['setControlPos'](new_value);
				self['$$label']['setValue'](new_value, 0);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['old_value'],['new_value']]);
		$cls_definition['onControlValueChanged'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SliderClass', $p['tuple']($bases), $data);
	})();
	$m['HSliderClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ControlDemo';
		$method = $pyjs__bind_method2('__init__', function(p2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p2 = arguments[1];
			}
			var $bool4;
			$m['VerticalPanel']['__init__'](self);
			self['setSpacing'](10);
			if ((($bool4=p2) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.b = $m['HorizontalDemoSlider2'](0, 100);
			}
			else {
				self.b = $m['HorizontalDemoSlider'](0, 100);
			}
			self['add']($p['getattr'](self, 'b'));
			self['b']['setHeight']('20px');
			self['b']['setWidth']('100px');
			self['b']['addControlValueListener'](self);
			self.$$label = $m['InputControl'](0, 100);
			self['add']($p['getattr'](self, '$$label'));
			self['$$label']['addControlValueListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['p2']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onControlValueChanged', function(sender, old_value, new_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				old_value = arguments[2];
				new_value = arguments[3];
			}
			var $eq8,$eq6,$eq7,$eq5,$bool6,$bool5;
			if ((($bool5=(($eq5=sender)===($eq6=$p['getattr'](self, '$$label'))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['b']['setControlPos'](new_value);
				self['b']['setValue'](new_value, 0);
			}
			if ((($bool6=(($eq7=sender)===($eq8=$p['getattr'](self, 'b'))&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['$$label']['setControlPos'](new_value);
				self['$$label']['setValue'](new_value, 0);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['old_value'],['new_value']]);
		$cls_definition['onControlValueChanged'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HSliderClass', $p['tuple']($bases), $data);
	})();
	$m['ASliderClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ControlDemo';
		$method = $pyjs__bind_method2('__init__', function(p2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p2 = arguments[1];
			}
			var $bool7;
			$m['VerticalPanel']['__init__'](self);
			self['setSpacing'](10);
			if ((($bool7=p2) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.b = $m['AreaDemoSlider2']($p['list']([0, 0]), $p['list']([100, 100]), $p['list']([0.2, 0.2]));
			}
			else {
				self.b = $m['AreaDemoSlider']($p['list']([0, 0]), $p['list']([100, 100]), $p['list']([0.2, 0.2]));
			}
			self['add']($p['getattr'](self, 'b'));
			self['b']['setHeight']('100px');
			self['b']['setWidth']('100px');
			self['b']['addControlValueListener'](self);
			self.label_x = $m['MouseInputControl'](0, 100, 0.2);
			self['add']($p['getattr'](self, 'label_x'));
			self['label_x']['addControlValueListener'](self);
			self.label_y = $m['MouseInputControl'](0, 100, 0.2);
			self['add']($p['getattr'](self, 'label_y'));
			self['label_y']['addControlValueListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['p2']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onControlValueChanged', function(sender, old_value_xy, new_value_xy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				old_value_xy = arguments[2];
				new_value_xy = arguments[3];
			}
			var $eq9,$eq13,$bool10,$eq12,$eq10,$eq11,$bool8,$bool9,$eq14,new_value_x,new_value_y;
			if ((($bool8=(($eq9=sender)===($eq10=$p['getattr'](self, 'label_x'))&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['b']['setControlPos']($p['list']([new_value_xy, $p['getattr']($p['getattr'](self, 'b'), 'value_y')]));
				self['b']['setValue']($p['list']([new_value_xy, $p['getattr']($p['getattr'](self, 'b'), 'value_y')]), 0);
			}
			else if ((($bool9=(($eq11=sender)===($eq12=$p['getattr'](self, 'label_y'))&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['b']['setControlPos']($p['list']([$p['getattr']($p['getattr'](self, 'b'), 'value_x'), new_value_xy]));
				self['b']['setValue']($p['list']([$p['getattr']($p['getattr'](self, 'b'), 'value_x'), new_value_xy]), 0);
			}
			else if ((($bool10=(($eq13=sender)===($eq14=$p['getattr'](self, 'b'))&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign1 = $p['__ass_unpack'](new_value_xy, 2, null);
				new_value_x = $tupleassign1[0];
				new_value_y = $tupleassign1[1];
				self['label_x']['setControlPos'](new_value_x);
				self['label_x']['setValue'](new_value_x, 0);
				self['label_y']['setControlPos'](new_value_y);
				self['label_y']['setValue'](new_value_y, 0);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['old_value_xy'],['new_value_xy']]);
		$cls_definition['onControlValueChanged'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ASliderClass', $p['tuple']($bases), $data);
	})();
	$m['ControlDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ControlDemo';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sc,p,v;
			v = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{Spacing:10}]);
			p = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{Spacing:10, VerticalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM')}]);
			sc = $m['SliderClass'](false);
			p['add']($m['CaptionPanel']('clickable only', sc));
			sc = $m['SliderClass'](true);
			p['add']($m['CaptionPanel']('draggable', sc));
			sc = $m['SliderClass'](true);
			p['add']($m['CaptionPanel']('draggable', sc));
			v['add']($m['CaptionPanel']('Vertical Sliders with inputboxes', p));
			p = $m['HorizontalPanel']();
			p['setSpacing'](10);
			p['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
			sc = $m['HSliderClass'](false);
			p['add']($m['CaptionPanel']('clickable only', sc));
			sc = $m['HSliderClass'](true);
			p['add']($m['CaptionPanel']('draggable', sc));
			v['add']($m['CaptionPanel']('Horizontal Sliders with inputboxes', p));
			p = $m['HorizontalPanel']();
			p['setSpacing'](10);
			p['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
			sc = $m['ASliderClass'](false);
			p['add']($m['CaptionPanel']('clickable only', sc));
			sc = $m['ASliderClass'](true);
			p['add']($m['CaptionPanel']('draggable', sc));
			v['add']($m['CaptionPanel']('2D Controls: Inputboxes are draggable as well', p));
			$m['RootPanel']()['add'](v);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ControlDemo', $p['tuple']($bases), $data);
	})();
	if ((($bool11=(($eq15=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq16='__main__')&&$eq15===null?true:
		($eq15===null?false:($eq16===null?false:
			((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
				((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
					$eq15==$eq16)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
			false :
			(typeof $bool11=='object'?
				(typeof $bool11.__nonzero__=='function'?
					$bool11.__nonzero__() :
					(typeof $bool11.__len__=='function'?
						($bool11.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['pyjd']['setup']('./public/ControlDemo.html');
		$m['app'] = $m['ControlDemo']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end ControlDemo */


/* end module: ControlDemo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.CaptionPanel.CaptionPanel', 'pyjamas.ui.CaptionPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Controls.VerticalDemoSlider', 'pyjamas.ui.Controls', 'pyjamas.ui.Controls.VerticalDemoSlider2', 'pyjamas.ui.Controls.HorizontalDemoSlider', 'pyjamas.ui.Controls.HorizontalDemoSlider2', 'pyjamas.ui.Controls.AreaDemoSlider', 'pyjamas.ui.Controls.AreaDemoSlider2', 'pyjamas.ui.Controls.InputControl', 'pyjamas.ui.MouseInputControl.MouseInputControl', 'pyjamas.ui.MouseInputControl', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HasAlignment']
*/
