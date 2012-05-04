/* start module: view.components.HelpAboutDlg */
$pyjs.loaded_modules['view.components.HelpAboutDlg'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.HelpAboutDlg'].__was_initialized__) return $pyjs.loaded_modules['view.components.HelpAboutDlg'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.HelpAboutDlg"];
	$m.__repr__ = function() { return "<module: view.components.HelpAboutDlg>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.HelpAboutDlg';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['HelpAboutDlg'] = $pyjs.loaded_modules['view.components.HelpAboutDlg'];


	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'view.components', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'view.components', null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'view.components', null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', 'view.components', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'view.components', null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'view.components', null, false);
	$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', 'view.components', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'view.components', null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view.components', null, false);
	$m['HelpAboutDlg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.components.HelpAboutDlg';
		$method = $pyjs__bind_method2('__init__', function(left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}
			if (typeof left == 'undefined') left=arguments.callee.__args__[3][1];
			if (typeof top == 'undefined') top=arguments.callee.__args__[4][1];
			var msg,$pyjs_try_err;
			try {
				$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{modal:false}, self]);
				self['setPopupPosition'](left, top);
				self.dockPanel = $m['DockPanel']();
				self['dockPanel']['setSpacing'](4);
				self['setText']('About');
				msg = $m['HTML']('This is an example application, which uses PureMVC<br/>\n<br/>\n', true);
				self['dockPanel']['add'](msg, $p['getattr']($m['DockPanel'], 'CENTER'));
				self.closeBtn = $m['Button']('Close', self);
				self['dockPanel']['add']($p['getattr'](self, 'closeBtn'), $p['getattr']($m['DockPanel'], 'SOUTH'));
				self['setWidget']($p['getattr'](self, 'dockPanel'));
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
	, 1, [null,null,['self'],['left', 50],['top', 50]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['hide']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['DialogBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HelpAboutDlg', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.components.HelpAboutDlg */


/* end module: view.components.HelpAboutDlg */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame', 'pyjamas.DOM', 'pyjamas.Window.alert', 'pyjamas.Window']
*/
