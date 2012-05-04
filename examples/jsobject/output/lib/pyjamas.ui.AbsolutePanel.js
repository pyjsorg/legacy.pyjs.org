/* start module: pyjamas.ui.AbsolutePanel */
$pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.AbsolutePanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.AbsolutePanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['AbsolutePanel'] = $pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
	$m['AbsolutePanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.AbsolutePanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var ka = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					var ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var ka = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $or1,$or2,element,$bool1;
			element = ((($bool1=$or1=ka['pop']('Element', null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$m['DOM']['createDiv']());
			self['setElement'](element);
			$m['DOM']['setStyleAttribute'](element, 'position', 'relative');
			$m['DOM']['setStyleAttribute'](element, 'overflow', 'hidden');
			$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, ka, [{}, self]);
			return null;
		}
	, 1, [null,['ka'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				left = arguments[2];
				top = arguments[3];
			}
			if (typeof left == 'undefined') left=arguments.callee.__args__[4][1];
			if (typeof top == 'undefined') top=arguments.callee.__args__[5][1];
			var $bool2;
			$m['ComplexPanel']['add'](self, widget, self['getElement']());
			if ((($bool2=(left !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['setWidgetPosition'](widget, left, top);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['left', null],['top', null]]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('setWidgetPosition', function(widget, left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				left = arguments[2];
				top = arguments[3];
			}
			var $eq3,$eq2,h,$eq1,$eq4,$bool3,$and2,$bool4,$and1;
			self['checkWidgetParent'](widget);
			h = widget['getElement']();
			if ((($bool4=((($bool3=$and1=(($eq1=left)===($eq2=(typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq3=top)===($eq4=(typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))):$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$m['DOM']['setStyleAttribute'](h, 'left', '');
				$m['DOM']['setStyleAttribute'](h, 'top', '');
				$m['DOM']['setStyleAttribute'](h, 'position', 'static');
			}
			else {
				$m['DOM']['setStyleAttribute'](h, 'position', 'absolute');
				$m['DOM']['setStyleAttribute'](h, 'left', $p['sprintf']('%dpx', left));
				$m['DOM']['setStyleAttribute'](h, 'top', $p['sprintf']('%dpx', top));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['left'],['top']]);
		$cls_definition['setWidgetPosition'] = $method;
		$method = $pyjs__bind_method2('getWidgetLeft', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['checkWidgetParent'](widget);
			return $m['DOM']['getIntAttribute'](widget['getElement'](), 'offsetLeft');
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetLeft'] = $method;
		$method = $pyjs__bind_method2('getWidgetTop', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['checkWidgetParent'](widget);
			return $m['DOM']['getIntAttribute'](widget['getElement'](), 'offsetTop');
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetTop'] = $method;
		$method = $pyjs__bind_method2('checkWidgetParent', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $bool5,$eq6,$eq5;
			if ((($bool5=!(($eq5=widget['getParent']())===($eq6=self)&&$eq5===null?true:
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
				throw ($p['Exception']('Widget must be a child of this panel.'));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['checkWidgetParent'] = $method;
		var $bases = new Array($m['ComplexPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AbsolutePanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.AbsolutePanel', 'AbsolutePanel', $m['AbsolutePanel']);
	return this;
}; /* end pyjamas.ui.AbsolutePanel */


/* end module: pyjamas.ui.AbsolutePanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel']
*/
