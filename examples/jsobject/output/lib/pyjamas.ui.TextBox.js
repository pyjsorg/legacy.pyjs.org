/* start module: pyjamas.ui.TextBox */
$pyjs.loaded_modules['pyjamas.ui.TextBox'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TextBox'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TextBox'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.TextBox"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.TextBox>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextBox';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['TextBox'] = $pyjs.loaded_modules['pyjamas.ui.TextBox'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['TextBoxBase'] = $p['___import___']('pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui', null, false);
	$m['TextBox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.TextBox';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['kind', 'Kind', 'Kind', null]), $p['tuple'](['maxLength', 'Max Length', 'MaxLength', null]), $p['tuple'](['min', 'Min', 'Min', null]), $p['tuple'](['max', 'Max', 'Max', null]), $p['tuple'](['placeholder', 'Place Holder', 'PlaceHolder', null]), $p['tuple'](['step', 'Step', 'Step', null]), $p['tuple'](['visibleLength', 'Visible Length', 'VisibleLength', null])]);
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
			ka.__setitem__('StyleName', ka['get']('StyleName', 'gwt-TextBox'));
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
					 true ) )?$or1:$m['DOM']['createInputText']());
			$pyjs_kwargs_call($m['TextBoxBase'], '__init__', null, ka, [{}, self, element]);
			return null;
		}
	, 1, [null,['ka'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1;
			return (typeof ($add1=$m['TextBoxBase']['_getProps']())==typeof ($add2=$p['getattr'](self, '_props')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('getMaxLength', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'maxLength');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMaxLength'] = $method;
		$method = $pyjs__bind_method2('getKind', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'type');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getKind'] = $method;
		$method = $pyjs__bind_method2('getMin', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'min');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMin'] = $method;
		$method = $pyjs__bind_method2('getMax', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'max');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMax'] = $method;
		$method = $pyjs__bind_method2('getPlaceholder', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'placeholder');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPlaceholder'] = $method;
		$method = $pyjs__bind_method2('getStep', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'step');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStep'] = $method;
		$method = $pyjs__bind_method2('getVisibleLength', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'size');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVisibleLength'] = $method;
		$method = $pyjs__bind_method2('setMaxLength', function(length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				length = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'maxLength', length);
			return null;
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['setMaxLength'] = $method;
		$method = $pyjs__bind_method2('setKind', function(kind) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				kind = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'type', kind);
			return null;
		}
	, 1, [null,null,['self'],['kind']]);
		$cls_definition['setKind'] = $method;
		$method = $pyjs__bind_method2('setMin', function(min) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				min = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'min', min);
			return null;
		}
	, 1, [null,null,['self'],['min']]);
		$cls_definition['setMin'] = $method;
		$method = $pyjs__bind_method2('setMax', function(max) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				max = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'max', max);
			return null;
		}
	, 1, [null,null,['self'],['max']]);
		$cls_definition['setMax'] = $method;
		$method = $pyjs__bind_method2('setPlaceholder', function(placeholder) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				placeholder = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'placeholder', placeholder);
			return null;
		}
	, 1, [null,null,['self'],['placeholder']]);
		$cls_definition['setPlaceholder'] = $method;
		$method = $pyjs__bind_method2('setStep', function(step) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				step = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'step', step);
			return null;
		}
	, 1, [null,null,['self'],['step']]);
		$cls_definition['setStep'] = $method;
		$method = $pyjs__bind_method2('setVisibleLength', function(length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				length = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'size', length);
			return null;
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['setVisibleLength'] = $method;
		var $bases = new Array($m['TextBoxBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TextBox', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.TextBox', 'TextBox', $m['TextBox']);
	return this;
}; /* end pyjamas.ui.TextBox */


/* end module: pyjamas.ui.TextBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui', 'pyjamas.ui.TextBoxBase']
*/
