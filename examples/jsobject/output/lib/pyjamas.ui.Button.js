/* start module: pyjamas.ui.Button */
$pyjs.loaded_modules['pyjamas.ui.Button'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Button'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Button'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Button"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Button>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Button';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Button'] = $pyjs.loaded_modules['pyjamas.ui.Button'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['ButtonBase'] = $p['___import___']('pyjamas.ui.ButtonBase.ButtonBase', 'pyjamas.ui', null, false);
	$m['Button'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Button';
		$method = $pyjs__bind_method2('__init__', function(html, listener) {
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
				html = arguments[1];
				listener = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof listener != 'undefined') {
					if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = listener;
						listener = arguments[3];
					}
				} else 				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = html;
						html = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
			if (typeof listener == 'undefined') listener=arguments.callee.__args__[4][1];
			var $bool2,$bool1,$bool5,element,$bool3,$bool4;
			if ((($bool2=!(($bool1=kwargs['has_key']('StyleName')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				kwargs.__setitem__('StyleName', 'gwt-Button');
			}
			if ((($bool3=html) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				kwargs.__setitem__('HTML', html);
			}
			if ((($bool4=kwargs['has_key']('Element')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				element = kwargs['pop']('Element');
			}
			else {
				element = $m['DOM']['createButton']();
			}
			$pyjs_kwargs_call($m['ButtonBase'], '__init__', null, kwargs, [{}, self, element]);
			self['adjustType'](self['getElement']());
			if ((($bool5=(listener !== null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['addClickListener'](listener);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['html', null],['listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('adjustType', function(button) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				button = arguments[1];
			}
			var $eq2,$eq1,$pyjs_try_err,$bool6;
			if ((($bool6=(($eq1=$p['getattr'](button, 'type'))===($eq2='submit')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				try {
					$m['DOM']['setAttribute'](button, 'type', 'button');
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['button']]);
		$cls_definition['adjustType'] = $method;
		$method = $pyjs__bind_method2('click', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['getElement']()['click']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['click'] = $method;
		var $bases = new Array($m['ButtonBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Button', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Button', 'Button', $m['Button']);
	return this;
}; /* end pyjamas.ui.Button */


/* end module: pyjamas.ui.Button */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ButtonBase.ButtonBase', 'pyjamas.ui', 'pyjamas.ui.ButtonBase']
*/
