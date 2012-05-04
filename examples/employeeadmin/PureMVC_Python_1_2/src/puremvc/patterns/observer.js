/* start module: puremvc.patterns.observer */
$pyjs.loaded_modules['puremvc.patterns.observer'] = function (__mod_name__) {
	if($pyjs.loaded_modules['puremvc.patterns.observer'].__was_initialized__) return $pyjs.loaded_modules['puremvc.patterns.observer'];
	if(typeof $pyjs.loaded_modules['puremvc.patterns'] == 'undefined' || !$pyjs.loaded_modules['puremvc.patterns'].__was_initialized__) $p['___import___']('puremvc.patterns', null);
	var $m = $pyjs.loaded_modules["puremvc.patterns.observer"];
	$m.__repr__ = function() { return "<module: puremvc.patterns.observer>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'puremvc.patterns.observer';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['puremvc.patterns']['observer'] = $pyjs.loaded_modules['puremvc.patterns.observer'];


	$m['puremvc'] = $p['___import___']('puremvc.interfaces', 'puremvc.patterns');
	$m['puremvc'] = $p['___import___']('puremvc.patterns.facade', 'puremvc.patterns');
	$m['Observer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.patterns.observer';
		$cls_definition['notify'] = null;
		$cls_definition['context'] = null;
		$method = $pyjs__bind_method2('__init__', function(notifyMethod, notifyContext) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notifyMethod = arguments[1];
				notifyContext = arguments[2];
			}

			self['setNotifyMethod'](notifyMethod);
			self['setNotifyContext'](notifyContext);
			return null;
		}
	, 1, [null,null,['self'],['notifyMethod'],['notifyContext']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setNotifyMethod', function(notifyMethod) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notifyMethod = arguments[1];
			}

			self.notify = notifyMethod;
			return null;
		}
	, 1, [null,null,['self'],['notifyMethod']]);
		$cls_definition['setNotifyMethod'] = $method;
		$method = $pyjs__bind_method2('setNotifyContext', function(notifyContext) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notifyContext = arguments[1];
			}

			self.context = notifyContext;
			return null;
		}
	, 1, [null,null,['self'],['notifyContext']]);
		$cls_definition['setNotifyContext'] = $method;
		$method = $pyjs__bind_method2('getNotifyMethod', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'notify');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getNotifyMethod'] = $method;
		$method = $pyjs__bind_method2('getNotifyContext', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'context');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getNotifyContext'] = $method;
		$method = $pyjs__bind_method2('notifyObserver', function(notification) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notification = arguments[1];
			}

			self['getNotifyMethod']()(notification);
			return null;
		}
	, 1, [null,null,['self'],['notification']]);
		$cls_definition['notifyObserver'] = $method;
		$method = $pyjs__bind_method2('compareNotifyContext', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}

			return (obj === $p['getattr'](self, 'context'));
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['compareNotifyContext'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'IObserver'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Observer', $p['tuple']($bases), $data);
	})();
	$m['Notifier'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.patterns.observer';
		$cls_definition['facade'] = null;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.facade = $m['puremvc']['patterns']['facade']['Facade']['getInstance']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
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

			self['facade']['sendNotification'](notificationName, body, type);
			return null;
		}
	, 1, [null,null,['self'],['notificationName'],['body', null],['type', null]]);
		$cls_definition['sendNotification'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'INotifier'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Notifier', $p['tuple']($bases), $data);
	})();
	$m['Notification'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.patterns.observer';
		$cls_definition['$$name'] = null;
		$cls_definition['body'] = null;
		$cls_definition['type'] = null;
		$method = $pyjs__bind_method2('__init__', function(name, body, type) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				body = arguments[2];
				type = arguments[3];
			}
			if (typeof body == 'undefined') body=arguments.callee.__args__[4][1];
			if (typeof type == 'undefined') type=arguments.callee.__args__[5][1];

			self.$$name = name;
			self.body = body;
			self.type = type;
			return null;
		}
	, 1, [null,null,['self'],['name'],['body', null],['type', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '$$name');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('setBody', function(body) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				body = arguments[1];
			}

			self.body = body;
			return null;
		}
	, 1, [null,null,['self'],['body']]);
		$cls_definition['setBody'] = $method;
		$method = $pyjs__bind_method2('getBody', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'body');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBody'] = $method;
		$method = $pyjs__bind_method2('setType', function(type) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
			}

			self.type = type;
			return null;
		}
	, 1, [null,null,['self'],['type']]);
		$cls_definition['setType'] = $method;
		$method = $pyjs__bind_method2('getType', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'type');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getType'] = $method;
		$method = $pyjs__bind_method2('str', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var bd,$bool2,$bool1,ty,$add2,$add3,$add1,$add6,$add7,$add4,$add5,msg,$add10,$add8,$add9;
			msg = (typeof ($add1='Notification Name: ')==typeof ($add2=self['getName']()) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			bd = 'None';
			if ((($bool1=($p['getattr'](self, 'body') !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				bd = $p['str']($p['getattr'](self, 'body'));
			}
			ty = 'None';
			if ((($bool2=($p['getattr'](self, 'type') !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				ty = $p['getattr'](self, 'type');
			}
			msg = (typeof ($add5=msg)==typeof ($add6=(typeof ($add3='\nBody:')==typeof ($add4=bd) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			msg = (typeof ($add9=msg)==typeof ($add10=(typeof ($add7='\nType:')==typeof ($add8=ty) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8))) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10));
			return msg;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['str'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'INotification'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Notification', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end puremvc.patterns.observer */


/* end module: puremvc.patterns.observer */


/*
PYJS_DEPS: ['puremvc.interfaces', 'puremvc', 'puremvc.patterns.facade', 'puremvc.patterns']
*/
