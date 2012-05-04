/* start module: view.components.AppFrame */
$pyjs.loaded_modules['view.components.AppFrame'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.AppFrame'].__was_initialized__) return $pyjs.loaded_modules['view.components.AppFrame'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.AppFrame"];
	$m.__repr__ = function() { return "<module: view.components.AppFrame>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.AppFrame';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['AppFrame'] = $pyjs.loaded_modules['view.components.AppFrame'];


	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'view.components', null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', 'view.components', null, false);
	$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', 'view.components', null, false);
	$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', 'view.components', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'view.components', null, false);
	$m['Menu'] = $p['___import___']('Menu.Menu', 'view.components', null, false);
	$m['DatePicker'] = $p['___import___']('DatePicker.DatePicker', 'view.components', null, false);
	$m['TimeGrid'] = $p['___import___']('TimeGrid.TimeGrid', 'view.components', null, false);
	$m['Summary'] = $p['___import___']('Summary.Summary', 'view.components', null, false);
	$m['AppFrame'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.components.AppFrame';
		$cls_definition['menuBar'] = null;
		$cls_definition['datePicker'] = null;
		$cls_definition['timeGrid'] = null;
		$cls_definition['summary'] = null;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,vpanel;
			try {
				$m['RootPanelCls']['__init__'](self);
				vpanel = $m['VerticalPanel']();
				self.menuBar = $m['Menu']();
				vpanel['add']($p['getattr'](self, 'menuBar'));
				self.datePicker = $m['DatePicker']();
				vpanel['add']($p['getattr'](self, 'datePicker'));
				self.timeGrid = $m['TimeGrid']();
				vpanel['add']($p['getattr'](self, 'timeGrid'));
				self.summary = $m['Summary']();
				vpanel['add']($p['getattr'](self, 'summary'));
				self['add'](vpanel);
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
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['RootPanelCls']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AppFrame', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.components.AppFrame */


/* end module: view.components.AppFrame */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DockPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas.ui.MenuBar', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'Menu.Menu', 'Menu', 'DatePicker.DatePicker', 'DatePicker', 'TimeGrid.TimeGrid', 'TimeGrid', 'Summary.Summary', 'Summary']
*/
