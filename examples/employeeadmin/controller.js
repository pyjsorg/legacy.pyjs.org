/* start module: controller */
$pyjs.loaded_modules['controller'] = function (__mod_name__) {
	if($pyjs.loaded_modules['controller'].__was_initialized__) return $pyjs.loaded_modules['controller'];
	var $m = $pyjs.loaded_modules["controller"];
	$m.__repr__ = function() { return "<module: controller>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'controller';
	$m.__name__ = __mod_name__;


	$m['SimpleCommand'] = $p['___import___']('puremvc.patterns.command.SimpleCommand', null, null, false);
	$m['model'] = $p['___import___']('model', null);
	$m['view'] = $p['___import___']('view', null);
	$m['Command'] = $p['___import___']('ApplicationConstants.Command', null, null, false);
	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', null, null, false);
	$m['StartupCommand'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'controller';
		$method = $pyjs__bind_method2('execute', function(note) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				note = arguments[1];
			}
			var facade,mainPanel;
			facade = $p['getattr'](self, 'facade');
			facade['registerProxy']($m['model']['UserProxy']());
			facade['registerProxy']($m['model']['RoleProxy']());
			mainPanel = note['getBody']();
			facade['registerMediator']($m['view']['DialogMediator'](mainPanel));
			facade['registerMediator']($m['view']['UserFormMediator']($p['getattr'](mainPanel, 'userForm')));
			facade['registerMediator']($m['view']['UserListMediator']($p['getattr'](mainPanel, 'userList')));
			facade['registerMediator']($m['view']['RolePanelMediator']($p['getattr'](mainPanel, 'rolePanel')));
			return null;
		}
	, 1, [null,null,['self'],['note']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array($m['SimpleCommand']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StartupCommand', $p['tuple']($bases), $data);
	})();
	$m['AddRoleResultCommand'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'controller';
		$method = $pyjs__bind_method2('execute', function(note) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				note = arguments[1];
			}
			var $bool2,$bool1,result;
			result = note['getBody']();
			if ((($bool2=!(($bool1=result) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['facade']['sendNotification']($p['getattr']($m['Notification'], 'SHOW_DIALOG'), 'Role already exists for this user.');
			}
			return null;
		}
	, 1, [null,null,['self'],['note']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array($m['SimpleCommand']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AddRoleResultCommand', $p['tuple']($bases), $data);
	})();
	$m['DeleteUserCommand'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'controller';
		$method = $pyjs__bind_method2('execute', function(note) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				note = arguments[1];
			}
			var roleProxy,user,userProxy,facade;
			user = note['getBody']();
			facade = $p['getattr'](self, 'facade');
			userProxy = facade['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'UserProxy'), 'NAME'));
			roleProxy = facade['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'RoleProxy'), 'NAME'));
			userProxy['deleteItem'](user);
			roleProxy['deleteItem'](user);
			facade['sendNotification']($p['getattr']($m['Notification'], 'USER_DELETED'));
			return null;
		}
	, 1, [null,null,['self'],['note']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array($m['SimpleCommand']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DeleteUserCommand', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end controller */


/* end module: controller */


/*
PYJS_DEPS: ['puremvc.patterns.command.SimpleCommand', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.command', 'model', 'view', 'ApplicationConstants.Command', 'ApplicationConstants', 'ApplicationConstants.Notification']
*/
