/* start module: puremvc.patterns.facade */
$pyjs.loaded_modules['puremvc.patterns.facade'] = function (__mod_name__) {
	if($pyjs.loaded_modules['puremvc.patterns.facade'].__was_initialized__) return $pyjs.loaded_modules['puremvc.patterns.facade'];
	if(typeof $pyjs.loaded_modules['puremvc.patterns'] == 'undefined' || !$pyjs.loaded_modules['puremvc.patterns'].__was_initialized__) $p['___import___']('puremvc.patterns', null);
	var $m = $pyjs.loaded_modules["puremvc.patterns.facade"];
	$m.__repr__ = function() { return "<module: puremvc.patterns.facade>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'puremvc.patterns.facade';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['puremvc.patterns']['facade'] = $pyjs.loaded_modules['puremvc.patterns.facade'];


	$m['puremvc'] = $p['___import___']('puremvc.core', 'puremvc.patterns');
	$m['puremvc'] = $p['___import___']('puremvc.interfaces', 'puremvc.patterns');
	$m['puremvc'] = $p['___import___']('puremvc.patterns.observer', 'puremvc.patterns');
	$m['Facade'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.patterns.facade';
		$cls_definition['instance'] = null;
		$cls_definition['controller'] = null;
		$cls_definition['model'] = null;
		$cls_definition['view'] = null;
		$method = $pyjs__bind_method2('__new__', function(cls) {
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof cls != 'undefined') {
					if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = cls;
						cls = arguments[1];
					}
				} else {
				}
			}
			var $or1,$or2,$bool2,$bool3,$bool1,$bool4;
			if ((($bool4=((($bool2=$or1=!(($bool1=$p['getattr'](cls, 'instance')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					 true ) )?$or1:!(($bool3=$p['isinstance']($p['getattr'](cls, 'instance'), cls)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				cls.instance = $pyjs_kwargs_call($p['$$super']($m['Facade'], cls), '__new__', args, kwargs, [{}, cls]);
				cls['instance']['initializeFacade']();
			}
			return $p['getattr'](cls, 'instance');
		}
	, 3, ['args',['kwargs'],['cls']]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('getInstance', function() {

			return $m['Facade']();
		}
	, 3, [null,null]);
		$cls_definition['getInstance'] = $method;
		$method = $pyjs__bind_method2('initializeFacade', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['initializeController']();
			self['initializeModel']();
			self['initializeView']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initializeFacade'] = $method;
		$method = $pyjs__bind_method2('initializeController', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool5;
			if ((($bool5=($p['getattr'](self, 'controller') !== null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				return null;
			}
			self.controller = $m['puremvc']['core']['Controller']['getInstance']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initializeController'] = $method;
		$method = $pyjs__bind_method2('initializeModel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool6;
			if ((($bool6=($p['getattr'](self, 'model') !== null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				return null;
			}
			self.model = $m['puremvc']['core']['Model']['getInstance']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initializeModel'] = $method;
		$method = $pyjs__bind_method2('initializeView', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool7;
			if ((($bool7=($p['getattr'](self, 'view') !== null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return null;
			}
			self.view = $m['puremvc']['core']['View']['getInstance']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initializeView'] = $method;
		$method = $pyjs__bind_method2('registerCommand', function(notificationName, commandClassRef) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
				commandClassRef = arguments[2];
			}

			self['controller']['registerCommand'](notificationName, commandClassRef);
			return null;
		}
	, 1, [null,null,['self'],['notificationName'],['commandClassRef']]);
		$cls_definition['registerCommand'] = $method;
		$method = $pyjs__bind_method2('removeCommand', function(notificationName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
			}

			self['controller']['removeCommand'](notificationName);
			return null;
		}
	, 1, [null,null,['self'],['notificationName']]);
		$cls_definition['removeCommand'] = $method;
		$method = $pyjs__bind_method2('hasCommand', function(notificationName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
			}

			return self['controller']['hasCommand'](notificationName);
		}
	, 1, [null,null,['self'],['notificationName']]);
		$cls_definition['hasCommand'] = $method;
		$method = $pyjs__bind_method2('registerProxy', function(proxy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxy = arguments[1];
			}

			self['model']['registerProxy'](proxy);
			return null;
		}
	, 1, [null,null,['self'],['proxy']]);
		$cls_definition['registerProxy'] = $method;
		$method = $pyjs__bind_method2('retrieveProxy', function(proxyName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxyName = arguments[1];
			}

			return self['model']['retrieveProxy'](proxyName);
		}
	, 1, [null,null,['self'],['proxyName']]);
		$cls_definition['retrieveProxy'] = $method;
		$method = $pyjs__bind_method2('removeProxy', function(proxyName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxyName = arguments[1];
			}
			var $bool8,proxy;
			proxy = null;
			if ((($bool8=($p['getattr'](self, 'model') !== null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				proxy = self['model']['removeProxy'](proxyName);
			}
			return proxy;
		}
	, 1, [null,null,['self'],['proxyName']]);
		$cls_definition['removeProxy'] = $method;
		$method = $pyjs__bind_method2('hasProxy', function(proxyName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxyName = arguments[1];
			}

			return self['model']['hasProxy'](proxyName);
		}
	, 1, [null,null,['self'],['proxyName']]);
		$cls_definition['hasProxy'] = $method;
		$method = $pyjs__bind_method2('registerMediator', function(mediator) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediator = arguments[1];
			}
			var $bool9;
			if ((($bool9=($p['getattr'](self, 'view') !== null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['view']['registerMediator'](mediator);
			}
			return null;
		}
	, 1, [null,null,['self'],['mediator']]);
		$cls_definition['registerMediator'] = $method;
		$method = $pyjs__bind_method2('retrieveMediator', function(mediatorName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediatorName = arguments[1];
			}

			return self['view']['retrieveMediator'](mediatorName);
		}
	, 1, [null,null,['self'],['mediatorName']]);
		$cls_definition['retrieveMediator'] = $method;
		$method = $pyjs__bind_method2('removeMediator', function(mediatorName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediatorName = arguments[1];
			}
			var $bool10,mediator;
			mediator = null;
			if ((($bool10=($p['getattr'](self, 'view') !== null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				mediator = self['view']['removeMediator'](mediatorName);
			}
			return mediator;
		}
	, 1, [null,null,['self'],['mediatorName']]);
		$cls_definition['removeMediator'] = $method;
		$method = $pyjs__bind_method2('hasMediator', function(mediatorName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediatorName = arguments[1];
			}

			return self['view']['hasMediator'](mediatorName);
		}
	, 1, [null,null,['self'],['mediatorName']]);
		$cls_definition['hasMediator'] = $method;
		$method = $pyjs__bind_method2('sendNotification', function(notificationName, body, type) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
				body = arguments[2];
				type = arguments[3];
			}
			if (typeof body == 'undefined') body=arguments.callee.__args__[4][1];
			if (typeof type == 'undefined') type=arguments.callee.__args__[5][1];

			self['notifyObservers']($m['puremvc']['patterns']['observer']['Notification'](notificationName, body, type));
			return null;
		}
	, 1, [null,null,['self'],['notificationName'],['body', null],['type', null]]);
		$cls_definition['sendNotification'] = $method;
		$method = $pyjs__bind_method2('notifyObservers', function(notification) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notification = arguments[1];
			}
			var $bool11;
			if ((($bool11=($p['getattr'](self, 'view') !== null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11.__nonzero__=='function'?
							$bool11.__nonzero__() :
							(typeof $bool11.__len__=='function'?
								($bool11.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['view']['notifyObservers'](notification);
			}
			return null;
		}
	, 1, [null,null,['self'],['notification']]);
		$cls_definition['notifyObservers'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'IFacade'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Facade', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end puremvc.patterns.facade */


/* end module: puremvc.patterns.facade */


/*
PYJS_DEPS: ['puremvc.core', 'puremvc', 'puremvc.interfaces', 'puremvc.patterns.observer', 'puremvc.patterns']
*/
