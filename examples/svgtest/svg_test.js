/* start module: svg_test */
$pyjs.loaded_modules['svg_test'] = function (__mod_name__) {
	if($pyjs.loaded_modules['svg_test'].__was_initialized__) return $pyjs.loaded_modules['svg_test'];
	var $m = $pyjs.loaded_modules["svg_test"];
	$m.__repr__ = function() { return "<module: svg_test>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'svg_test';
	$m.__name__ = __mod_name__;
	var $eq13,$eq14,$bool7;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['svgWindow'] = $p['___import___']('svgWindow.svgWindow', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['mainUI'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'svg_test';
		$cls_definition['svg'] = null;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newButton,$iter1_nextval,$iter1_type,$iter1_idx,svg,$iter1_iter,buttons,$iter1_array,buttonName,panel;
			svg = $pyjs_kwargs_call(null, $m['svgWindow'], null, null, [{className:'svg'}]);
			$m['mainUI'].svg = svg;
			$m['RootPanel']()['add'](svg);
			panel = $m['HorizontalPanel']();
			$m['RootPanel']()['add'](panel);
			buttons = $p['list'](['zoom in', 'zoom out', 'rotate CW', 'rotate CCW', 'reload', 'reset']);
			$iter1_iter = buttons;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				buttonName = $iter1_nextval;
				newButton = $pyjs_kwargs_call(null, $m['Button'], null, null, [{listener:$p['getattr'](self, 'clickListener')}, buttonName]);
				panel['add'](newButton);
			}
			$m['RootPanel']()['add']($m['HTML']('Hello <b>World</b>'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clickListener', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var $eq8,$eq9,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$bool2,$bool3,$bool1,$bool6,$bool4,$bool5,$eq10,$eq11,$eq12,button;
			button = e['getText']();
			if ((($bool1=(($eq1=button)===($eq2='zoom in')&&$eq1===null?true:
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
				$m['mainUI']['svg']['zoom_in']();
			}
			else if ((($bool2=(($eq3=button)===($eq4='zoom out')&&$eq3===null?true:
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
				$m['mainUI']['svg']['zoom_out']();
			}
			else if ((($bool3=(($eq5=button)===($eq6='rotate CW')&&$eq5===null?true:
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
				$m['mainUI']['svg']['rot_CW']();
			}
			else if ((($bool4=(($eq7=button)===($eq8='rotate CCW')&&$eq7===null?true:
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
				$m['mainUI']['svg']['rot_CCW']();
			}
			else if ((($bool5=(($eq9=button)===($eq10='reset')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$m['mainUI']['svg']['reset_transforms']();
			}
			else if ((($bool6=(($eq11=button)===($eq12='reload')&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$m['mainUI']['svg']['change_floorplan']();
			}
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['clickListener'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('mainUI', $p['tuple']($bases), $data);
	})();
	if ((($bool7=(($eq13=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq14='__main__')&&$eq13===null?true:
		($eq13===null?false:($eq14===null?false:
			((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
				((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
					$eq13==$eq14)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
		$m['pyjd']['setup']('./public/svg_test.html');
		$m['ui'] = $m['mainUI']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end svg_test */


/* end module: svg_test */


/*
PYJS_DEPS: ['pyjd', 'svgWindow.svgWindow', 'svgWindow', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.Window']
*/
