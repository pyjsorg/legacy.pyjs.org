/* start module: view.TimeGridMediator */
$pyjs.loaded_modules['view.TimeGridMediator'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.TimeGridMediator'].__was_initialized__) return $pyjs.loaded_modules['view.TimeGridMediator'];
	if(typeof $pyjs.loaded_modules['view'] == 'undefined' || !$pyjs.loaded_modules['view'].__was_initialized__) $p['___import___']('view', null);
	var $m = $pyjs.loaded_modules["view.TimeGridMediator"];
	$m.__repr__ = function() { return "<module: view.TimeGridMediator>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.TimeGridMediator';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view']['TimeGridMediator'] = $pyjs.loaded_modules['view.TimeGridMediator'];


	$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', 'view', null, false);
	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view', null, false);
	$m['model'] = $p['___import___']('model', 'view');
	$m['TimeProxy'] = $p['___import___']('model.TimeProxy.TimeProxy', 'view', null, false);
	$m['TimeVO'] = $p['___import___']('model.vo.TimeVO.TimeVO', 'view', null, false);
	$m['setCookie'] = $p['___import___']('pyjamas.Cookies.setCookie', 'view', null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view', null, false);
	$m['TimeGridMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.TimeGridMediator';
		$cls_definition['NAME'] = 'TimeGridMediator';
		$method = $pyjs__bind_method2('__init__', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}

			$p['$$super']($m['TimeGridMediator'], self)['__init__']($p['getattr']($m['TimeGridMediator'], 'NAME'), viewComponent);
			$p['getattr'](self, 'viewComponent').mediator = self;
			self.timeProxy = self['facade']['retrieveProxy']($p['getattr']($m['TimeProxy'], 'NAME'));
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

			return $p['list']([$p['getattr']($m['Notification'], 'CELL_SELECTED'), $p['getattr']($m['Notification'], 'CELL_UPDATED'), $p['getattr']($m['Notification'], 'DATE_SELECTED'), $p['getattr']($m['Notification'], 'EDIT_SELECTED'), $p['getattr']($m['Notification'], 'SUM_SELECTED'), $p['getattr']($m['Notification'], 'FILE_LOADED')]);
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
			var $eq10,$eq11,$eq12,$pyjs_try_err,$eq8,$eq9,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$bool2,$bool3,$bool1,$bool6,noteName,$bool4,$bool5,nodeBody;
			try {
				noteName = note['getName']();
				nodeBody = note['getBody']();
				if ((($bool1=(($eq1=noteName)===($eq2=$p['getattr']($m['Notification'], 'CELL_SELECTED'))&&$eq1===null?true:
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
					$m['alert']('Select cell is not implemented yet');
				}
				else if ((($bool2=(($eq3=noteName)===($eq4=$p['getattr']($m['Notification'], 'CELL_UPDATED'))&&$eq3===null?true:
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
					$m['alert']('Cell changed is not implemented yet');
				}
				else if ((($bool3=(($eq5=noteName)===($eq6=$p['getattr']($m['Notification'], 'DATE_SELECTED'))&&$eq5===null?true:
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
					self['onDateSelected'](nodeBody);
				}
				else if ((($bool4=(($eq7=noteName)===($eq8=$p['getattr']($m['Notification'], 'EDIT_SELECTED'))&&$eq7===null?true:
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
					self['onEditSelected']();
				}
				else if ((($bool5=(($eq9=noteName)===($eq10=$p['getattr']($m['Notification'], 'SUM_SELECTED'))&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['onSumSelected']();
				}
				else if ((($bool6=(($eq11=noteName)===($eq12=$p['getattr']($m['Notification'], 'FILE_LOADED'))&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$pyjs_kwargs_call(self, 'onFileLoaded', nodeBody, null, [{}]);
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
		$method = $pyjs__bind_method2('onDateSelected', function(date) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				date = arguments[1];
			}
			var $and1,$bool7,$bool8,$bool9,$and2;
			if ((($bool9=((($bool8=$and1=!(($bool7=($p['getattr']($p['getattr'](self, 'viewComponent'), 'date') === null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['getattr']($p['getattr'](self, 'viewComponent'), 'dirty'):$and1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				self['timeProxy']['setDateEntries']($p['getattr']($p['getattr'](self, 'viewComponent'), 'date'), self['viewComponent']['getEntries']());
			}
			$p['getattr'](self, 'viewComponent').date = date;
			self['viewComponent']['setEntries'](self['timeProxy']['getDateEntries']($p['getattr']($p['getattr'](self, 'viewComponent'), 'date')));
			return null;
		}
	, 1, [null,null,['self'],['date']]);
		$cls_definition['onDateSelected'] = $method;
		$method = $pyjs__bind_method2('onEditSelected', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['viewComponent']['setVisible'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onEditSelected'] = $method;
		$method = $pyjs__bind_method2('onSumSelected', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['viewComponent']['setVisible'](false);
			self['onDateSelected']($p['getattr']($p['getattr'](self, 'viewComponent'), 'date'));
			self['sendNotification']($p['getattr']($m['Notification'], 'DATE_SELECTED'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'date'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onSumSelected'] = $method;
		$method = $pyjs__bind_method2('onFileLoaded', function(filename, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filename = arguments[1];
				data = arguments[2];
			}
			var $bool10,invalid,$pyjs_try_err,date;
			invalid = function(lineno, line) {

				$m['alert']($p['sprintf']('Invalid line at %s:\n%s', $p['tuple']([lineno, line])));
				return false;
			};
			invalid.__name__ = 'invalid';

			invalid.__bind_type__ = 0;
			invalid.__args__ = [null,null,['lineno'],['line']];
			date = self['timeProxy']['importData'](data, invalid);
			if ((($bool10=date) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				try {
					$m['setCookie']('fileLocation', filename, 1000000000);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
					}
				}
				self['sendNotification']($p['getattr']($m['Notification'], 'DATE_SELECTED'), date);
			}
			return null;
		}
	, 1, [null,null,['self'],['filename'],['data']]);
		$cls_definition['onFileLoaded'] = $method;
		var $bases = new Array($m['Mediator']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TimeGridMediator', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.TimeGridMediator */


/* end module: view.TimeGridMediator */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'ApplicationConstants.Notification', 'ApplicationConstants', 'model', 'model.TimeProxy.TimeProxy', 'model.TimeProxy', 'model.vo.TimeVO.TimeVO', 'model.vo', 'model.vo.TimeVO', 'pyjamas.Cookies.setCookie', 'pyjamas', 'pyjamas.Cookies', 'pyjamas.Window.alert', 'pyjamas.Window']
*/
