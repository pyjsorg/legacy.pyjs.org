/* start module: view.DatePickerMediator */
$pyjs.loaded_modules['view.DatePickerMediator'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.DatePickerMediator'].__was_initialized__) return $pyjs.loaded_modules['view.DatePickerMediator'];
	if(typeof $pyjs.loaded_modules['view'] == 'undefined' || !$pyjs.loaded_modules['view'].__was_initialized__) $p['___import___']('view', null);
	var $m = $pyjs.loaded_modules["view.DatePickerMediator"];
	$m.__repr__ = function() { return "<module: view.DatePickerMediator>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.DatePickerMediator';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view']['DatePickerMediator'] = $pyjs.loaded_modules['view.DatePickerMediator'];


	$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', 'view', null, false);
	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view', null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view', null, false);
	$m['DatePickerMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.DatePickerMediator';
		$cls_definition['NAME'] = 'DatePickerMediator';
		$method = $pyjs__bind_method2('__init__', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}

			$m['Mediator']['__init__'](self, $p['getattr']($m['DatePickerMediator'], 'NAME'), viewComponent);
			viewComponent['prevDayBtn']['addClickListener']($p['getattr'](self, 'displayDay'));
			viewComponent['nextDayBtn']['addClickListener']($p['getattr'](self, 'displayDay'));
			viewComponent['prevWeekBtn']['addClickListener']($p['getattr'](self, 'displayDay'));
			viewComponent['nextWeekBtn']['addClickListener']($p['getattr'](self, 'displayDay'));
			self['displayDay']();
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

			return $p['list']([]);
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

 			return null;
		}
	, 1, [null,null,['self'],['note']]);
		$cls_definition['handleNotification'] = $method;
		$method = $pyjs__bind_method2('displayDay', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

			self['viewComponent']['displayDay']();
			self['sendNotification']($p['getattr']($m['Notification'], 'DATE_SELECTED'), $p['getattr']($p['getattr'](self, 'viewComponent'), 'date'));
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['displayDay'] = $method;
		var $bases = new Array($m['Mediator']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DatePickerMediator', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.DatePickerMediator */


/* end module: view.DatePickerMediator */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window']
*/
