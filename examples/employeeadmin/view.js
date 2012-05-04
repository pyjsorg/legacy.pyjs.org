/* start module: view */
$pyjs.loaded_modules['view'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view'].__was_initialized__) return $pyjs.loaded_modules['view'];
	var $m = $pyjs.loaded_modules["view"];
	$m.__repr__ = function() { return "<module: view>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view';
	$m.__name__ = __mod_name__;


	$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', null, null, false);
	$m['model'] = $p['___import___']('model', null);
	$m['vo'] = $p['___import___']('vo', null);
	$m['ApplicationConstants'] = $p['___import___']('ApplicationConstants', null);
	$m['Command'] = $p['___import___']('ApplicationConstants.Command', null, null, false);
	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', null, null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', null, null, false);
	$m['DialogMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view';
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

			return $p['list']([$p['getattr']($m['Notification'], 'SHOW_DIALOG')]);
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
			var $eq2,$eq1,$pyjs_try_err,$bool1,noteName;
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
	$m['UserFormMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view';
		$cls_definition['NAME'] = 'UserFormMediator';
		$cls_definition['userProxy'] = null;
		$method = $pyjs__bind_method2('__init__', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}

			$p['$$super']($m['UserFormMediator'], self)['__init__']($p['getattr']($m['UserFormMediator'], 'NAME'), viewComponent);
			$p['getattr'](self, 'viewComponent').mediator = self;
			self['viewComponent']['addBtn']['addClickListener']($p['getattr'](self, 'onAdd'));
			self['viewComponent']['cancelBtn']['addClickListener']($p['getattr'](self, 'onCancel'));
			self.userProxy = self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'UserProxy'), 'NAME'));
			self['viewComponent']['updateDepartmentCombo']($p['getattr']($m['ApplicationConstants'], 'DeptList'), $p['getattr']($m['ApplicationConstants'], 'DEPT_NONE_SELECTED'));
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

			return $p['list']([$p['getattr']($m['Notification'], 'NEW_USER'), $p['getattr']($m['Notification'], 'USER_DELETED'), $p['getattr']($m['Notification'], 'USER_SELECTED')]);
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
			var $bool2,$eq8,$eq3,$eq6,$eq7,$eq4,$eq5,$bool3,$pyjs_try_err,$bool6,noteName,$bool4,$bool5,user;
			try {
				noteName = note['getName']();
				if ((($bool2=(($eq3=noteName)===($eq4=$p['getattr']($m['Notification'], 'NEW_USER'))&&$eq3===null?true:
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
					self['viewComponent']['clearForm']();
					self['viewComponent']['updateMode']($p['getattr']($p['getattr'](self, 'viewComponent'), 'MODE_ADD'));
					self['viewComponent']['firstInput']['setFocus'](true);
				}
				if ((($bool3=(($eq5=noteName)===($eq6=$p['getattr']($m['Notification'], 'USER_DELETED'))&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$p['getattr'](self, 'viewComponent').user = null;
					self['viewComponent']['clearForm']();
				}
				if ((($bool4=(($eq7=noteName)===($eq8=$p['getattr']($m['Notification'], 'USER_SELECTED'))&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					user = note['getBody']();
					if ((($bool6=!(($bool5=user) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						self['viewComponent']['clearForm']();
					}
					else {
						self['viewComponent']['updateUser'](note['getBody']());
						self['viewComponent']['updateMode']($p['getattr']($p['getattr'](self, 'viewComponent'), 'MODE_EDIT'));
					}
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
		$method = $pyjs__bind_method2('onAdd', function(evnt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evnt = arguments[1];
			}
			var $eq10,$eq9,$bool7;
			if ((($bool7=(($eq9=$p['getattr']($p['getattr'](self, 'viewComponent'), 'mode'))===($eq10=$p['getattr']($p['getattr'](self, 'viewComponent'), 'MODE_ADD'))&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				self['addUser']();
			}
			else {
				self['updateUser']();
			}
			return null;
		}
	, 1, [null,null,['self'],['evnt']]);
		$cls_definition['onAdd'] = $method;
		$method = $pyjs__bind_method2('addUser', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or1,$or2,$and1,l,user,$bool8,$bool9,$2,$and2,$1;
			l = self['viewComponent']['departmentCombo']['getSelectedItemText'](true);
			l = ((($bool9=$or1=((($bool8=$and1=l) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(typeof ($1=l).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)):$and1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:null);
			user = $m['vo']['UserVO'](self['viewComponent']['usernameInput']['getText'](), self['viewComponent']['firstInput']['getText'](), self['viewComponent']['lastInput']['getText'](), self['viewComponent']['emailInput']['getText'](), self['viewComponent']['passwordInput']['getText'](), l);
			$p['getattr'](self, 'viewComponent').user = user;
			self['userProxy']['addItem'](user);
			self['sendNotification']($p['getattr']($m['Notification'], 'USER_ADDED'), user);
			self['viewComponent']['clearForm']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['addUser'] = $method;
		$method = $pyjs__bind_method2('updateUser', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or4,$or3,$bool10,$bool11,$and3,$and4,l,user,$4,$3;
			l = self['viewComponent']['departmentCombo']['getSelectedItemText'](true);
			l = ((($bool11=$or3=((($bool10=$and3=l) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(typeof ($3=l).__array != 'undefined'?
				((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(0)):$and3)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:null);
			user = $m['vo']['UserVO'](self['viewComponent']['usernameInput']['getText'](), self['viewComponent']['firstInput']['getText'](), self['viewComponent']['lastInput']['getText'](), self['viewComponent']['emailInput']['getText'](), self['viewComponent']['passwordInput']['getText'](), l);
			$p['getattr'](self, 'viewComponent').user = user;
			self['userProxy']['updateItem'](user);
			self['sendNotification']($p['getattr']($m['Notification'], 'USER_UPDATED'), user);
			self['viewComponent']['clearForm']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateUser'] = $method;
		$method = $pyjs__bind_method2('onCancel', function(evnt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evnt = arguments[1];
			}

			self['sendNotification']($p['getattr']($m['Notification'], 'CANCEL_SELECTED'));
			self['viewComponent']['clearForm']();
			return null;
		}
	, 1, [null,null,['self'],['evnt']]);
		$cls_definition['onCancel'] = $method;
		var $bases = new Array($m['Mediator']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('UserFormMediator', $p['tuple']($bases), $data);
	})();
	$m['UserListMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view';
		$cls_definition['NAME'] = 'UserListMediator';
		$cls_definition['userProxy'] = null;
		$method = $pyjs__bind_method2('__init__', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}

			$p['$$super']($m['UserListMediator'], self)['__init__']($p['getattr']($m['UserListMediator'], 'NAME'), viewComponent);
			self['viewComponent']['newBtn']['addClickListener']($p['getattr'](self, 'onNewUser'));
			self['viewComponent']['deleteBtn']['addClickListener']($p['getattr'](self, 'onDeleteUser'));
			self['viewComponent']['userGrid']['addTableListener']($p['getattr'](self, 'onSelectUser'));
			self.userProxy = self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'UserProxy'), 'NAME'));
			self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
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

			return $p['list']([$p['getattr']($m['Notification'], 'CANCEL_SELECTED'), $p['getattr']($m['Notification'], 'USER_UPDATED'), $p['getattr']($m['Notification'], 'USER_ADDED'), $p['getattr']($m['Notification'], 'USER_DELETED')]);
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
			var $eq18,$bool13,$bool14,$bool15,$eq15,$pyjs_try_err,noteName,$eq11,$eq12,$eq13,$eq14,$bool12,$eq16,$eq17;
			try {
				noteName = note['getName']();
				self['viewComponent']['deSelect']();
				if ((($bool12=(($eq11=noteName)===($eq12=$p['getattr']($m['Notification'], 'CANCEL_SELECTED'))&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12.__nonzero__=='function'?
								$bool12.__nonzero__() :
								(typeof $bool12.__len__=='function'?
									($bool12.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['deSelect']();
					self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
				}
				else if ((($bool13=(($eq13=noteName)===($eq14=$p['getattr']($m['Notification'], 'USER_UPDATED'))&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['deSelect']();
					self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
				}
				else if ((($bool14=(($eq15=noteName)===($eq16=$p['getattr']($m['Notification'], 'USER_ADDED'))&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
								$eq15==$eq16)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14.__nonzero__=='function'?
								$bool14.__nonzero__() :
								(typeof $bool14.__len__=='function'?
									($bool14.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['deSelect']();
					self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
				}
				else if ((($bool15=(($eq17=noteName)===($eq18=$p['getattr']($m['Notification'], 'USER_DELETED'))&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['deSelect']();
					self['viewComponent']['updateUserGrid'](self['userProxy']['getUsers']());
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
		$method = $pyjs__bind_method2('onSelectUser', function(evt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evt = arguments[1];
			}

			self['sendNotification']($p['getattr']($m['Notification'], 'USER_SELECTED'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedUser'));
			return null;
		}
	, 1, [null,null,['self'],['evt']]);
		$cls_definition['onSelectUser'] = $method;
		$method = $pyjs__bind_method2('onNewUser', function(evnt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evnt = arguments[1];
			}

			self['viewComponent']['deSelect']();
			self['sendNotification']($p['getattr']($m['Notification'], 'NEW_USER'));
			return null;
		}
	, 1, [null,null,['self'],['evnt']]);
		$cls_definition['onNewUser'] = $method;
		$method = $pyjs__bind_method2('onDeleteUser', function(evnt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evnt = arguments[1];
			}
			var $bool16;
			if ((($bool16=$p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedUser')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['sendNotification']($p['getattr']($m['Command'], 'DELETE_USER'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedUser'));
				self['viewComponent']['deSelect']();
			}
			return null;
		}
	, 1, [null,null,['self'],['evnt']]);
		$cls_definition['onDeleteUser'] = $method;
		var $bases = new Array($m['Mediator']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('UserListMediator', $p['tuple']($bases), $data);
	})();
	$m['RolePanelMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view';
		$cls_definition['NAME'] = 'RolePanelMediator';
		$cls_definition['roleProxy'] = null;
		$method = $pyjs__bind_method2('__init__', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}

			$p['$$super']($m['RolePanelMediator'], self)['__init__']($p['getattr']($m['RolePanelMediator'], 'NAME'), viewComponent);
			self['viewComponent']['addBtn']['addClickListener']($p['getattr'](self, 'onAddRole'));
			self['viewComponent']['removeBtn']['addClickListener']($p['getattr'](self, 'onRemoveRole'));
			self.roleProxy = self['facade']['retrieveProxy']($p['getattr']($p['getattr']($m['model'], 'RoleProxy'), 'NAME'));
			self['viewComponent']['updateRoleCombo']($p['getattr']($m['ApplicationConstants'], 'RoleList'), $p['getattr']($m['ApplicationConstants'], 'ROLE_NONE_SELECTED'));
			return null;
		}
	, 1, [null,null,['self'],['viewComponent']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getRolePanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return (typeof viewComponent == "undefined"?$m.viewComponent:viewComponent);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRolePanel'] = $method;
		$method = $pyjs__bind_method2('onAddRole', function(evnt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evnt = arguments[1];
			}

			self['roleProxy']['addRoleToUser']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedRole'));
			return null;
		}
	, 1, [null,null,['self'],['evnt']]);
		$cls_definition['onAddRole'] = $method;
		$method = $pyjs__bind_method2('onRemoveRole', function(evnt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evnt = arguments[1];
			}

			self['roleProxy']['removeRoleFromUser']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'selectedRole'));
			self['viewComponent']['updateRoleList'](self['roleProxy']['getUserRoles']($p['getattr']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), 'username')));
			return null;
		}
	, 1, [null,null,['self'],['evnt']]);
		$cls_definition['onRemoveRole'] = $method;
		$method = $pyjs__bind_method2('listNotificationInterests', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['list']([$p['getattr']($m['Notification'], 'NEW_USER'), $p['getattr']($m['Notification'], 'USER_ADDED'), $p['getattr']($m['Notification'], 'USER_UPDATED'), $p['getattr']($m['Notification'], 'USER_DELETED'), $p['getattr']($m['Notification'], 'CANCEL_SELECTED'), $p['getattr']($m['Notification'], 'USER_SELECTED'), $p['getattr']($m['Command'], 'ADD_ROLE_RESULT')]);
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
			var $bool18,$bool19,$bool17,$eq32,$eq19,$eq30,$eq31,roleVO,$bool25,$bool24,$pyjs_try_err,$bool21,$bool20,$bool23,$bool22,$eq21,$eq20,$eq23,$eq22,$eq25,noteName,$eq27,$eq26,$eq29,$eq28,$eq24;
			try {
				noteName = note['getName']();
				if ((($bool17=(($eq19=noteName)===($eq20=$p['getattr']($m['Notification'], 'NEW_USER'))&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['clearForm']();
				}
				else if ((($bool18=(($eq21=noteName)===($eq22=$p['getattr']($m['Notification'], 'USER_ADDED'))&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
								$eq21==$eq22)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18.__nonzero__=='function'?
								$bool18.__nonzero__() :
								(typeof $bool18.__len__=='function'?
									($bool18.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'viewComponent').user = note['getBody']();
					roleVO = $m['vo']['RoleVO']($p['getattr']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), 'username'));
					self['roleProxy']['addItem'](roleVO);
					self['viewComponent']['clearForm']();
				}
				else if ((($bool19=(($eq23=noteName)===($eq24=$p['getattr']($m['Notification'], 'USER_UPDATED'))&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
								$eq23==$eq24)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['clearForm']();
				}
				else if ((($bool20=(($eq25=noteName)===($eq26=$p['getattr']($m['Notification'], 'USER_DELETED'))&&$eq25===null?true:
					($eq25===null?false:($eq26===null?false:
						((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
							((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
								$eq25==$eq26)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20.__nonzero__=='function'?
								$bool20.__nonzero__() :
								(typeof $bool20.__len__=='function'?
									($bool20.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['clearForm']();
				}
				else if ((($bool21=(($eq27=noteName)===($eq28=$p['getattr']($m['Notification'], 'CANCEL_SELECTED'))&&$eq27===null?true:
					($eq27===null?false:($eq28===null?false:
						((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
							((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
								$eq27==$eq28)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21.__nonzero__=='function'?
								$bool21.__nonzero__() :
								(typeof $bool21.__len__=='function'?
									($bool21.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['clearForm']();
				}
				else if ((($bool22=(($eq29=noteName)===($eq30=$p['getattr']($m['Notification'], 'USER_SELECTED'))&&$eq29===null?true:
					($eq29===null?false:($eq30===null?false:
						((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
							((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
								$eq29==$eq30)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'viewComponent').user = note['getBody']();
					if ((($bool24=!(($bool23=$p['getattr']($p['getattr'](self, 'viewComponent'), 'user')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23.__nonzero__=='function'?
								$bool23.__nonzero__() :
								(typeof $bool23.__len__=='function'?
									($bool23.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
							false :
							(typeof $bool24=='object'?
								(typeof $bool24.__nonzero__=='function'?
									$bool24.__nonzero__() :
									(typeof $bool24.__len__=='function'?
										($bool24.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['viewComponent']['updateRoleList'](self['roleProxy']['getUserRoles'](null));
					}
					else {
						self['viewComponent']['updateRoleList'](self['roleProxy']['getUserRoles']($p['getattr']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), 'username')));
					}
				}
				else if ((($bool25=(($eq31=noteName)===($eq32=$p['getattr']($m['Command'], 'ADD_ROLE_RESULT'))&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
								$eq31==$eq32)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25.__nonzero__=='function'?
								$bool25.__nonzero__() :
								(typeof $bool25.__len__=='function'?
									($bool25.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['viewComponent']['updateRoleList'](self['roleProxy']['getUserRoles']($p['getattr']($p['getattr']($p['getattr'](self, 'viewComponent'), 'user'), 'username')));
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
		return $p['_create_class']('RolePanelMediator', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view */


/* end module: view */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'model', 'vo', 'ApplicationConstants', 'ApplicationConstants.Command', 'ApplicationConstants.Notification', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window']
*/
