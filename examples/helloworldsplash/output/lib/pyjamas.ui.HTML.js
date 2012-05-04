/* start module: pyjamas.ui.HTML */
$pyjs.loaded_modules['pyjamas.ui.HTML'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HTML'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HTML'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.HTML"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.HTML>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTML';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['HTML'] = $pyjs.loaded_modules['pyjamas.ui.HTML'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['HTML'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.HTML';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['wordwrap', 'Word Wrap', 'WordWrap', null]), $p['tuple'](['horzAlign', 'Horizontal Alignment', 'HorizontalAlignment', null])]);
		$method = $pyjs__bind_method2('__init__', function(html, wordWrap) {
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
			if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];
			var $bool1;
			kwargs.__setitem__('StyleName', kwargs['get']('StyleName', 'gwt-HTML'));
			if ((($bool1=html) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				kwargs.__setitem__('HTML', html);
			}
			$pyjs_kwargs_call($m['Label'], '__init__', null, kwargs, [{wordWrap:wordWrap}, self]);
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'MOUSEEVENTS')));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['html', null],['wordWrap', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1;
			return (typeof ($add1=$m['Widget']['_getProps']())==typeof ($add2=$p['getattr'](self, '_props')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('_setWeirdProps', function(props, builderstate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				props = arguments[1];
				builderstate = arguments[2];
			}
			var $bool5,$bool2,$bool3,$bool4,$4,txt,$2,$3,$1;
			if ((($bool2=props['has_key']('label')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				props.__setitem__('text', (typeof ($1=props).__array != 'undefined'?
					((typeof $1.__array[$2='label']) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__('label')));
				props.__delitem__('label');
			}
			if ((($bool4=!(($bool3=props['has_key']('text')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				return null;
			}
			txt = (typeof ($3=props).__array != 'undefined'?
				((typeof $3.__array[$4='text']) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__('text'));
			if ((($bool5=props['get']('html', false)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['setHTML'](txt);
			}
			else {
				self['setText'](txt);
			}
			return null;
		}
	, 1, [null,null,['self'],['props'],['builderstate']]);
		$cls_definition['_setWeirdProps'] = $method;
		var $bases = new Array($m['Label'],$m['InnerHTML']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HTML', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HTML', 'HTML', $m['HTML']);
	return this;
}; /* end pyjamas.ui.HTML */


/* end module: pyjamas.ui.HTML */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Label.Label', 'pyjamas.ui', 'pyjamas.ui.Label', 'pyjamas.ui.Event', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
