/* start module: puremvc.patterns.mediator */
$pyjs.loaded_modules['puremvc.patterns.mediator'] = function (__mod_name__) {
	if($pyjs.loaded_modules['puremvc.patterns.mediator'].__was_initialized__) return $pyjs.loaded_modules['puremvc.patterns.mediator'];
	if(typeof $pyjs.loaded_modules['puremvc.patterns'] == 'undefined' || !$pyjs.loaded_modules['puremvc.patterns'].__was_initialized__) $p['___import___']('puremvc.patterns', null);
	var $m = $pyjs.loaded_modules["puremvc.patterns.mediator"];
	$m.__repr__ = function() { return "<module: puremvc.patterns.mediator>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'puremvc.patterns.mediator';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['puremvc.patterns']['mediator'] = $pyjs.loaded_modules['puremvc.patterns.mediator'];


	$m['puremvc'] = $p['___import___']('puremvc.interfaces', 'puremvc.patterns');
	$m['puremvc'] = $p['___import___']('puremvc.patterns.observer', 'puremvc.patterns');
	$m['puremvc'] = $p['___import___']('puremvc.patterns.facade', 'puremvc.patterns');
	$m['Mediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.patterns.mediator';
		$cls_definition['NAME'] = 'Mediator';
		$cls_definition['facade'] = null;
		$cls_definition['viewComponent'] = null;
		$cls_definition['mediatorName'] = null;
		$method = $pyjs__bind_method2('__init__', function(mediatorName, viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediatorName = arguments[1];
				viewComponent = arguments[2];
			}
			if (typeof mediatorName == 'undefined') mediatorName=arguments.callee.__args__[3][1];
			if (typeof viewComponent == 'undefined') viewComponent=arguments.callee.__args__[4][1];
			var $or1,$or2,$bool2,$bool1;
			self.facade = $m['puremvc']['patterns']['facade']['Facade']['getInstance']();
			mediatorName = ((($bool1=$or1=mediatorName) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$p['getattr'](self, 'NAME'));
			if ((($bool2=(mediatorName === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				throw ($p['ValueError']('Madiator name cannot be None'));
			}
			self.mediatorName = mediatorName;
			self.viewComponent = viewComponent;
			return null;
		}
	, 1, [null,null,['self'],['mediatorName', null],['viewComponent', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getMediatorName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'mediatorName');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMediatorName'] = $method;
		$method = $pyjs__bind_method2('setViewComponent', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}

			self.viewComponent = viewComponent;
			return null;
		}
	, 1, [null,null,['self'],['viewComponent']]);
		$cls_definition['setViewComponent'] = $method;
		$method = $pyjs__bind_method2('getViewComponent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'viewComponent');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getViewComponent'] = $method;
		$method = $pyjs__bind_method2('listNotificationInterests', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['list']([]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['listNotificationInterests'] = $method;
		$method = $pyjs__bind_method2('handleNotification', function(notification) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notification = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['notification']]);
		$cls_definition['handleNotification'] = $method;
		$method = $pyjs__bind_method2('onRegister', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onRegister'] = $method;
		$method = $pyjs__bind_method2('onRemove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onRemove'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($p['getattr']($m['puremvc'], 'patterns'), 'observer'), 'Notifier'),$p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'IMediator'),$p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'INotifier'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Mediator', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end puremvc.patterns.mediator */


/* end module: puremvc.patterns.mediator */


/*
PYJS_DEPS: ['puremvc.interfaces', 'puremvc', 'puremvc.patterns.observer', 'puremvc.patterns', 'puremvc.patterns.facade']
*/
