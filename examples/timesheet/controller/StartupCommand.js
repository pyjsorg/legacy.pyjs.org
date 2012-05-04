/* start module: controller.StartupCommand */
$pyjs.loaded_modules['controller.StartupCommand'] = function (__mod_name__) {
	if($pyjs.loaded_modules['controller.StartupCommand'].__was_initialized__) return $pyjs.loaded_modules['controller.StartupCommand'];
	if(typeof $pyjs.loaded_modules['controller'] == 'undefined' || !$pyjs.loaded_modules['controller'].__was_initialized__) $p['___import___']('controller', null);
	var $m = $pyjs.loaded_modules["controller.StartupCommand"];
	$m.__repr__ = function() { return "<module: controller.StartupCommand>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'controller.StartupCommand';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['controller']['StartupCommand'] = $pyjs.loaded_modules['controller.StartupCommand'];


	$m['SimpleCommand'] = $p['___import___']('puremvc.patterns.command.SimpleCommand', 'controller', null, false);
	$m['TimeProxy'] = $p['___import___']('model.TimeProxy.TimeProxy', 'controller', null, false);
	$m['DialogMediator'] = $p['___import___']('view.DialogMediator.DialogMediator', 'controller', null, false);
	$m['MenuMediator'] = $p['___import___']('view.MenuMediator.MenuMediator', 'controller', null, false);
	$m['DatePickerMediator'] = $p['___import___']('view.DatePickerMediator.DatePickerMediator', 'controller', null, false);
	$m['TimeGridMediator'] = $p['___import___']('view.TimeGridMediator.TimeGridMediator', 'controller', null, false);
	$m['SummaryMediator'] = $p['___import___']('view.SummaryMediator.SummaryMediator', 'controller', null, false);
	$m['StartupCommand'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'controller.StartupCommand';
		$method = $pyjs__bind_method2('execute', function(note) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				note = arguments[1];
			}
			var mainPanel;
			self['facade']['registerProxy']($m['TimeProxy']());
			mainPanel = note['getBody']();
			self['facade']['registerMediator']($m['DialogMediator'](mainPanel));
			self['facade']['registerMediator']($m['MenuMediator']($p['getattr'](mainPanel, 'menuBar')));
			self['facade']['registerMediator']($m['TimeGridMediator']($p['getattr'](mainPanel, 'timeGrid')));
			self['facade']['registerMediator']($m['SummaryMediator']($p['getattr'](mainPanel, 'summary')));
			self['facade']['registerMediator']($m['DatePickerMediator']($p['getattr'](mainPanel, 'datePicker')));
			return null;
		}
	, 1, [null,null,['self'],['note']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array($m['SimpleCommand']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StartupCommand', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end controller.StartupCommand */


/* end module: controller.StartupCommand */


/*
PYJS_DEPS: ['puremvc.patterns.command.SimpleCommand', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.command', 'model.TimeProxy.TimeProxy', 'model', 'model.TimeProxy', 'view.DialogMediator.DialogMediator', 'view', 'view.DialogMediator', 'view.MenuMediator.MenuMediator', 'view.MenuMediator', 'view.DatePickerMediator.DatePickerMediator', 'view.DatePickerMediator', 'view.TimeGridMediator.TimeGridMediator', 'view.TimeGridMediator', 'view.SummaryMediator.SummaryMediator', 'view.SummaryMediator']
*/
