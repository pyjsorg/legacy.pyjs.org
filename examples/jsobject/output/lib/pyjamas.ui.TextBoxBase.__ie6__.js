/* start module: pyjamas.ui.TextBoxBase */
$pyjs.loaded_modules['pyjamas.ui.TextBoxBase'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TextBoxBase'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TextBoxBase'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.TextBoxBase"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.TextBoxBase>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextBoxBase';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['TextBoxBase'] = $pyjs.loaded_modules['pyjamas.ui.TextBoxBase'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	$m['ChangeHandler'] = $p['___import___']('pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui', null, false);
	$m['InputHandler'] = $p['___import___']('pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['TextBoxBase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.TextBoxBase';
		$cls_definition['ALIGN_CENTER'] = 'center';
		$cls_definition['ALIGN_JUSTIFY'] = 'justify';
		$cls_definition['ALIGN_LEFT'] = 'left';
		$cls_definition['ALIGN_RIGHT'] = 'right';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['name', 'Name', 'Name', null]), $p['tuple'](['align', 'Text Alignment', 'TextAlign', null])]);
		$method = $pyjs__bind_method2('__init__', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				element = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self.currentEvent = null;
			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			$m['ChangeHandler']['__init__'](self);
			$m['InputHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1;
			return (typeof ($add1=$m['FocusWidget']['_getProps']())==typeof ($add2=$p['getattr'](self, '_props')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('cancelKey', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool1;
			if ((($bool1=($p['getattr'](self, 'currentEvent') !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$m['DOM']['eventPreventDefault']($p['getattr'](self, 'currentEvent'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cancelKey'] = $method;
		$method = $pyjs__bind_method2('getCursorPos', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        try {
            var elem = this.getElement();
            var tr = elem.document.selection.createRange();
            if (tr.parentElement().uniqueID != elem.uniqueID)
                return -1;
            return -tr.move("character", -65535);
        }
        catch (e) {
            return 0;
        }
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCursorPos'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'name');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('getSelectedText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add3,text,start,length,$add4;
			start = self['getCursorPos']();
			length = self['getSelectionLength']();
			text = self['getText']();
			return $p['__getslice'](text, start, (typeof ($add3=start)==typeof ($add4=length) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedText'] = $method;
		$method = $pyjs__bind_method2('getSelectionLength', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        try {
            var elem = this.getElement();
            var tr = elem.document.selection.createRange();
            if (tr.parentElement().uniqueID != elem.uniqueID)
                return 0;
            return tr.text.length;
        }
        catch (e) {
            return 0;
        }
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectionLength'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}
			var $bool2;
			if ((($bool2=focused) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['getElement']()['focus']();
			}
			else {
				self['getElement']()['blur']();
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'value');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('selectAll', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp1,$cmp2,$bool3,length,$len1;
			length = (($len1=self['getText']()) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1)))));
			if ((($bool3=((($cmp1=length)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['setSelectionRange'](0, length);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['selectAll'] = $method;
		$method = $pyjs__bind_method2('setCursorPos', function(pos) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}

			self['setSelectionRange'](pos, 0);
			return null;
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['setCursorPos'] = $method;
		$method = $pyjs__bind_method2('setKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $bool4;
			if ((($bool4=($p['getattr'](self, 'currentEvent') !== null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$m['DOM']['eventSetKeyCode']($p['getattr'](self, 'currentEvent'), key);
			}
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setKey'] = $method;
		$method = $pyjs__bind_method2('setName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'name', name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method2('setSelectionRange', function(pos, length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				length = arguments[2];
			}


        try {
            var elem = this.getElement();
            var tr = elem.createTextRange();
            tr.collapse(true);
            tr.moveStart('character', pos);
            tr.moveEnd('character', length);
            tr.select();
        }
        catch (e) {
        }
        
		}
	, 1, [null,null,['self'],['pos'],['length']]);
		$cls_definition['setSelectionRange'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'value', $p['str'](text));
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('setTextAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			$m['DOM']['setStyleAttribute'](self['getElement'](), 'textAlign', align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setTextAlignment'] = $method;
		$method = $pyjs__bind_method2('getTextAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			return $m['DOM']['getStyleAttribute'](self['getElement'](), 'textAlign');
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['getTextAlignment'] = $method;
		var $bases = new Array($m['FocusWidget'],$m['ChangeHandler'],$m['InputHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TextBoxBase', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.TextBoxBase */


/* end module: pyjamas.ui.TextBoxBase */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui.ChangeListener', 'pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui.InputListener', 'pyjamas.ui.Event']
*/
