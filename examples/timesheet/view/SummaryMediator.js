/* start module: view.SummaryMediator */
$pyjs.loaded_modules['view.SummaryMediator'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.SummaryMediator'].__was_initialized__) return $pyjs.loaded_modules['view.SummaryMediator'];
	if(typeof $pyjs.loaded_modules['view'] == 'undefined' || !$pyjs.loaded_modules['view'].__was_initialized__) $p['___import___']('view', null);
	var $m = $pyjs.loaded_modules["view.SummaryMediator"];
	$m.__repr__ = function() { return "<module: view.SummaryMediator>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.SummaryMediator';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view']['SummaryMediator'] = $pyjs.loaded_modules['view.SummaryMediator'];


	$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', 'view', null, false);
	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view', null, false);
	$m['model'] = $p['___import___']('model', 'view');
	$m['TimeProxy'] = $p['___import___']('model.TimeProxy.TimeProxy', 'view', null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view', null, false);
	$m['SummaryMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.SummaryMediator';
		$cls_definition['NAME'] = 'SummaryMediator';
		$method = $pyjs__bind_method2('__init__', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}

			$p['$$super']($m['SummaryMediator'], self)['__init__']($p['getattr']($m['SummaryMediator'], 'NAME'), viewComponent);
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

			return $p['list']([$p['getattr']($m['Notification'], 'DATE_SELECTED'), $p['getattr']($m['Notification'], 'EDIT_SELECTED'), $p['getattr']($m['Notification'], 'SUM_SELECTED')]);
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
			var nodeBody,$eq2,$eq3,$eq1,$eq6,$pyjs_try_err,$eq4,$eq5,$bool3,$bool1,noteName,$bool2;
			try {
				noteName = note['getName']();
				nodeBody = note['getBody']();
				if ((($bool1=(($eq1=noteName)===($eq2=$p['getattr']($m['Notification'], 'DATE_SELECTED'))&&$eq1===null?true:
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
					self['onDateSelected'](nodeBody);
				}
				else if ((($bool2=(($eq3=noteName)===($eq4=$p['getattr']($m['Notification'], 'EDIT_SELECTED'))&&$eq3===null?true:
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
					self['onEditSelected']();
				}
				else if ((($bool3=(($eq5=noteName)===($eq6=$p['getattr']($m['Notification'], 'SUM_SELECTED'))&&$eq5===null?true:
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
					self['onSumSelected']();
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

			self['viewComponent']['setVisible'](false);
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

			self['viewComponent']['setVisible'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onSumSelected'] = $method;
		var $bases = new Array($m['Mediator']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SummaryMediator', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.SummaryMediator */


/* end module: view.SummaryMediator */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'ApplicationConstants.Notification', 'ApplicationConstants', 'model', 'model.TimeProxy.TimeProxy', 'model.TimeProxy', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window']
*/
