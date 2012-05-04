/* start module: view.DialogMediator */
$pyjs.loaded_modules['view.DialogMediator'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.DialogMediator'].__was_initialized__) return $pyjs.loaded_modules['view.DialogMediator'];
	if(typeof $pyjs.loaded_modules['view'] == 'undefined' || !$pyjs.loaded_modules['view'].__was_initialized__) $p['___import___']('view', null);
	var $m = $pyjs.loaded_modules["view.DialogMediator"];
	$m.__repr__ = function() { return "<module: view.DialogMediator>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.DialogMediator';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view']['DialogMediator'] = $pyjs.loaded_modules['view.DialogMediator'];


	$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', 'view', null, false);
	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view', null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view', null, false);
	$m['DialogMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.DialogMediator';
		$cls_definition['NAME'] = 'DialogMediator';
		$method = $pyjs__bind_method2('__init__', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}

			$p['$$super']($m['DialogMediator'], self)['__init__']($p['getattr']($m['DialogMediator'], 'NAME'), viewComponent);
			$p['getattr'](self, 'viewComponent').mediator = self;
			return null;
		}
	, 1, [null,null,['self'],['viewComponent']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('listNotificationInterests', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['list']([$p['getattr']($m['Notification'], 'SHOW_DIALOG'), $p['getattr']($m['Notification'], 'HELLO')]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['listNotificationInterests'] = $method;
		$method = $pyjs__bind_method2('handleNotification', function(note) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				note = arguments[1];
			}
			var $bool2,$eq2,$eq3,$eq1,$pyjs_try_err,$eq4,$bool1,noteName;
			try {
				noteName = note['getName']();
				if ((($bool1=(($eq1=noteName)===($eq2=$p['getattr']($m['Notification'], 'SHOW_DIALOG'))&&$eq1===null?true:
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
					$m['alert'](note['getBody']());
				}
				else if ((($bool2=(($eq3=noteName)===($eq4=$p['getattr']($m['Notification'], 'HELLO'))&&$eq3===null?true:
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
					$m['alert']('Hello there');
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['note']]);
		$cls_definition['handleNotification'] = $method;
		var $bases = new Array($m['Mediator']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DialogMediator', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.DialogMediator */


/* end module: view.DialogMediator */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window']
*/
