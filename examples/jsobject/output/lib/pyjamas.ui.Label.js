/* start module: pyjamas.ui.Label */
$pyjs.loaded_modules['pyjamas.ui.Label'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Label'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Label'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Label"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Label>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Label';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Label'] = $pyjs.loaded_modules['pyjamas.ui.Label'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['InnerText'] = $p['___import___']('pyjamas.ui.InnerText.InnerText', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	$m['Label'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Label';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['label', 'Label', 'Text', null]), $p['tuple'](['wordwrap', 'Word Wrap', 'WordWrap', null]), $p['tuple'](['horzAlign', 'Horizontal Alignment', 'HorizontalAlignment', null])]);
		$method = $pyjs__bind_method2('__init__', function(text, wordWrap) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				text = arguments[1];
				wordWrap = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof wordWrap != 'undefined') {
					if (wordWrap !== null && typeof wordWrap['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = wordWrap;
						wordWrap = arguments[3];
					}
				} else 				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = text;
						text = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];
			if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];
			var $or1,$or2,$bool2,$bool1;
			kwargs.__setitem__('StyleName', kwargs['get']('StyleName', 'gwt-Label'));
			kwargs.__setitem__('WordWrap', kwargs['get']('WordWrap', wordWrap));
			kwargs.__setitem__('HorizontalAlignment', kwargs['get']('HorizontalAlignment', ''));
			if ((($bool1=text) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				kwargs.__setitem__('Text', text);
			}
			self['setElement'](((($bool2=$or1=kwargs['pop']('Element', null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$m['DOM']['createDiv']()));
			self.horzAlign = '';
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			$m['MouseHandler']['__init__'](self);
			$m['ClickHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['text', null],['wordWrap', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add3,$add1,$add4;
			return (typeof ($add3=(typeof ($add1=$m['Widget']['_getProps']())==typeof ($add2=$m['InnerText']['_getProps']()) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4=$p['getattr'](self, '_props')) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('getHorizontalAlignment', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'horzAlign');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('getWordWrap', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq2,$eq1,ws;
			ws = $m['DOM']['getStyleAttribute'](self['getElement'](), 'whiteSpace');
			return !(($eq1=ws)===($eq2='nowrap')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWordWrap'] = $method;
		$method = $pyjs__bind_method2('setHorizontalAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			self.horzAlign = align;
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'textAlign', align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('setWordWrap', function(wrap) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wrap = arguments[1];
			}
			var $or4,style,$or3,$and1,$bool3,$bool4,$and2;
			style = ((($bool4=$or3=((($bool3=$and1=wrap) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?'normal':$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:'nowrap');
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'whiteSpace', style);
			return null;
		}
	, 1, [null,null,['self'],['wrap']]);
		$cls_definition['setWordWrap'] = $method;
		var $bases = new Array($m['Widget'],$m['MouseHandler'],$m['ClickHandler'],$m['InnerText']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Label', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Label', 'Label', $m['Label']);
	return this;
}; /* end pyjamas.ui.Label */


/* end module: pyjamas.ui.Label */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.InnerText.InnerText', 'pyjamas.ui', 'pyjamas.ui.InnerText', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
