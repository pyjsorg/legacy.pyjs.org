/* start module: svgWindow */
$pyjs.loaded_modules['svgWindow'] = function (__mod_name__) {
	if($pyjs.loaded_modules['svgWindow'].__was_initialized__) return $pyjs.loaded_modules['svgWindow'];
	var $m = $pyjs.loaded_modules["svgWindow"];
	$m.__repr__ = function() { return "<module: svgWindow>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'svgWindow';
	$m.__name__ = __mod_name__;


	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', null, null, false);
	$m['svgWindow'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'svgWindow';
		$method = $pyjs__bind_method2('__init__', function(className) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				className = arguments[1];
			}
			if (typeof className == 'undefined') className=arguments.callee.__args__[3][1];
			var element;
			element = $m['DOM']['createIFrame']();
			$m['FocusWidget']['__init__'](self, element);
			self.floorplan_file = 'floorplan.svg';
			self.svg_area = element;
			self.rot_deg = 0.0;
			self.scale = 1.0;
			self.x_translate = 0.0;
			self.y_translate = 0.0;
			self['draw_elements']();
			self['svg_area']['setAttribute']('class', className);
			return null;
		}
	, 1, [null,null,['self'],['className', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('apply_transform', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var svg_g,$add5,transform_string,$add8,transform,$add2,$add3,$add1,$add6,$add7,$add4,rot_string,$add10,translate_string,$add9,scale_string;
			rot_string = $p['sprintf']('rotate(%f)', $p['getattr'](self, 'rot_deg'));
			scale_string = $p['sprintf']('scale(%f)', $p['getattr'](self, 'scale'));
			translate_string = $p['sprintf']('translate(%f,', $p['getattr'](self, 'x_translate'));
			translate_string = (typeof ($add1=translate_string)==typeof ($add2=$p['sprintf']('%f)', $p['getattr'](self, 'y_translate'))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			transform_string = rot_string;
			transform_string = (typeof ($add5=(typeof ($add3=transform_string)==typeof ($add4=' ') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($add6=scale_string) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			transform_string = (typeof ($add9=(typeof ($add7=transform_string)==typeof ($add8=' ') && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))==typeof ($add10=translate_string) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10));
			svg_g = self['svg_area']['contentDocument']['getElementById']('svg_transform_element');
			$m['RootPanel']()['add']($m['HTML']($p['sprintf']('transform_string = %s', transform_string)));
			transform = svg_g['getAttribute']('transform');
			svg_g['setAttribute']('transform', transform_string);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['apply_transform'] = $method;
		$method = $pyjs__bind_method2('scale', function(scale) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				scale = arguments[1];
			}

			self.scale = scale;
			self['apply_transform']();
			return null;
		}
	, 1, [null,null,['self'],['scale']]);
		$cls_definition['scale'] = $method;
		$method = $pyjs__bind_method2('rotate', function(degrees) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				degrees = arguments[1];
			}

			self.rot_deg = degrees;
			self['apply_transform']();
			return null;
		}
	, 1, [null,null,['self'],['degrees']]);
		$cls_definition['rotate'] = $method;
		$method = $pyjs__bind_method2('translate', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self.x_translate = x;
			self.y_translate = y;
			self['apply_transform']();
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['translate'] = $method;
		$method = $pyjs__bind_method2('reset_transforms', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.rot_deg = 0.0;
			self.scale = 1.0;
			self.x_translate = 0.0;
			self.y_translate = 0.0;
			self['apply_transform']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset_transforms'] = $method;
		$method = $pyjs__bind_method2('zoom_in', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add11,$add12;
			self.scale = (typeof ($add11=$p['getattr'](self, 'scale'))==typeof ($add12=0.5) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			self['apply_transform']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['zoom_in'] = $method;
		$method = $pyjs__bind_method2('zoom_out', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub2,$sub1;
			self.scale = (typeof ($sub1=$p['getattr'](self, 'scale'))==typeof ($sub2=0.5) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			self['apply_transform']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['zoom_out'] = $method;
		$method = $pyjs__bind_method2('rot_CW', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add14,$add13;
			self.rot_deg = (typeof ($add13=$p['getattr'](self, 'rot_deg'))==typeof ($add14=30) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
			self['apply_transform']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rot_CW'] = $method;
		$method = $pyjs__bind_method2('rot_CCW', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub3,$sub4;
			self.rot_deg = (typeof ($sub3=$p['getattr'](self, 'rot_deg'))==typeof ($sub4=30) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			self['apply_transform']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rot_CCW'] = $method;
		$method = $pyjs__bind_method2('change_floorplan', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$eq1,$bool1;
			if ((($bool1=(($eq1=$p['getattr'](self, 'floorplan_file'))===($eq2='floorplan.svg')&&$eq1===null?true:
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
				self.floorplan_file = 'floorplan2.svg';
			}
			else {
				self.floorplan_file = 'floorplan.svg';
			}
			self['svg_area']['setAttribute']('src', $p['getattr'](self, 'floorplan_file'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['change_floorplan'] = $method;
		$method = $pyjs__bind_method2('draw_elements', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq8,$eq3,$eq6,$eq7,$eq4,$eq5,$bool2,$bool3,$bool4,svg_method;
			svg_method = 2;
			if ((($bool2=(($eq3=svg_method)===($eq4=0)&&$eq3===null?true:
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
				$m['DOM']['setInnerHTML']($p['getattr'](self, 'svg_area'), '\n    <object data="floorplan.svg" type="image/svg+xml width="100%" height="100%" />\n      ');
			}
			else if ((($bool3=(($eq5=svg_method)===($eq6=1)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$m['DOM']['setInnerHTML']($p['getattr'](self, 'svg_area'), '\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" id="the_svg" >\n  <g id="svg_transform_element" transform="">\n    <circle  id="thedot" cx="50" cy="50" r="10" fill="red" />\n    <polygon id="triangle" points="2,20 22,20 12,40" fill="black" stroke="blue" stroke-width="1" />\n  </g>\n</svg>\n      ');
			}
			else if ((($bool4=(($eq7=svg_method)===($eq8=2)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['svg_area']['setAttribute']('src', $p['getattr'](self, 'floorplan_file'));
			}
			$m['DOM']['setAttribute']($p['getattr'](self, 'svg_area'), 'id', 'my_div_svg_area');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw_elements'] = $method;
		var $bases = new Array($m['FocusWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('svgWindow', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end svgWindow */


/* end module: svgWindow */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame']
*/
