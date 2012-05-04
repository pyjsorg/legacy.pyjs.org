/* start module: pyjamas.ui.Focus */
$pyjs.loaded_modules['pyjamas.ui.Focus'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Focus'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Focus'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Focus"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Focus>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Focus';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Focus'] = $pyjs.loaded_modules['pyjamas.ui.Focus'];
	var $bool1,$bool2;

	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	if ((($bool2=!(($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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

    var focusHandler = null;
    
	}
	$m['ensureFocusHandler'] = function() {


    return (focusHandler !== null) ? focusHandler : (focusHandler =
            $m.createFocusHandler());
    
	};
	$m['ensureFocusHandler'].__name__ = 'ensureFocusHandler';

	$m['ensureFocusHandler'].__bind_type__ = 0;
	$m['ensureFocusHandler'].__args__ = [null,null];
	$m['createFocusHandler'] = function() {


    return function(evt) {
      // This function is called directly as an event handler, so 'this' is
      // set up by the browser to be the input on which the event is fired. We
      // call focus() in a timeout or the element may be blurred when this event
      // ends.
      var div = this.parentNode;
      if (div.onfocus) {
        $wnd.setTimeout(function() {
          div.focus();
        }, 0);
      } 
    };
    
	};
	$m['createFocusHandler'].__name__ = 'createFocusHandler';

	$m['createFocusHandler'].__bind_type__ = 0;
	$m['createFocusHandler'].__args__ = [null,null];
	$m['createFocusable0'] = function(focusHandler) {


    var div = $doc.createElement('div');
    div.tabIndex = 0;

    var input = $doc.createElement('input');
    input.type = 'text';
    input.style.opacity = 0;
    input.tabIndex = -1;
    input.style.zIndex = -1;
    input.style.width = '1px';
    input.style.height = '1px';
    input.style.overflow = 'hidden';
    input.style.position = 'absolute';

    input.addEventListener( 'focus', focusHandler, false);

    div.appendChild(input);
    return div;
    
	};
	$m['createFocusable0'].__name__ = 'createFocusable0';

	$m['createFocusable0'].__bind_type__ = 0;
	$m['createFocusable0'].__args__ = [null,null,['focusHandler']];
	$m['blur'] = function(elem) {

		elem['blur']();
		return null;
	};
	$m['blur'].__name__ = 'blur';

	$m['blur'].__bind_type__ = 0;
	$m['blur'].__args__ = [null,null,['elem']];
	$m['createFocusable'] = function() {

		return $m['createFocusable0']($m['ensureFocusHandler']());
	};
	$m['createFocusable'].__name__ = 'createFocusable';

	$m['createFocusable'].__bind_type__ = 0;
	$m['createFocusable'].__args__ = [null,null];
	$m['focus'] = function(elem) {

		elem['focus']();
		return null;
	};
	$m['focus'].__name__ = 'focus';

	$m['focus'].__bind_type__ = 0;
	$m['focus'].__args__ = [null,null,['elem']];
	$m['getTabIndex'] = function(elem) {

		return $p['getattr'](elem, 'tabIndex');
	};
	$m['getTabIndex'].__name__ = 'getTabIndex';

	$m['getTabIndex'].__bind_type__ = 0;
	$m['getTabIndex'].__args__ = [null,null,['elem']];
	$m['setAccessKey'] = function(elem, key) {

		elem.accessKey = key;
		return null;
	};
	$m['setAccessKey'].__name__ = 'setAccessKey';

	$m['setAccessKey'].__bind_type__ = 0;
	$m['setAccessKey'].__args__ = [null,null,['elem'],['key']];
	$m['setTabIndex'] = function(elem, index) {

		elem.tabIndex = index;
		return null;
	};
	$m['setTabIndex'].__name__ = 'setTabIndex';

	$m['setTabIndex'].__bind_type__ = 0;
	$m['setTabIndex'].__args__ = [null,null,['elem'],['index']];
	$m['FocusMixin'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Focus';
		$method = $pyjs__bind_method2('getTabIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['getTabIndex'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabIndex'] = $method;
		$method = $pyjs__bind_method2('setAccessKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			$m['setAccessKey'](self['getElement'](), key);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setAccessKey'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}
			var $bool3;
			if ((($bool3=focused) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$m['focus'](self['getElement']());
			}
			else {
				$m['blur'](self['getElement']());
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('setTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$m['setTabIndex'](self['getElement'](), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setTabIndex'] = $method;
		$method = $pyjs__bind_method2('isEnabled', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,$bool4;
			try {
				return !(($bool4=$m['DOM']['getBooleanAttribute'](self['getElement'](), 'disabled')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) );
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					return true;
				} else if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					return true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEnabled'] = $method;
		$method = $pyjs__bind_method2('setEnabled', function(enabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}
			var $bool5;
			$m['DOM']['setBooleanAttribute'](self['getElement'](), 'disabled', !(($bool5=enabled) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5.__nonzero__=='function'?
						$bool5.__nonzero__() :
						(typeof $bool5.__len__=='function'?
							($bool5.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ));
			return null;
		}
	, 1, [null,null,['self'],['enabled']]);
		$cls_definition['setEnabled'] = $method;
		$method = $pyjs__bind_method2('isReadonly', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,$bool6;
			try {
				return !(($bool6=$m['DOM']['getBooleanAttribute'](self['getElement'](), 'readOnly')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) );
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					return true;
				} else if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					return true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isReadonly'] = $method;
		$method = $pyjs__bind_method2('setReadonly', function(readonly) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				readonly = arguments[1];
			}

			$m['DOM']['setBooleanAttribute'](self['getElement'](), 'readOnly', readonly);
			return null;
		}
	, 1, [null,null,['self'],['readonly']]);
		$cls_definition['setReadonly'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FocusMixin', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.Focus */


/* end module: pyjamas.ui.Focus */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas']
*/
