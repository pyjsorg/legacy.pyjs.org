/* start module: view.components.Menu */
$pyjs.loaded_modules['view.components.Menu'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.Menu'].__was_initialized__) return $pyjs.loaded_modules['view.components.Menu'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.Menu"];
	$m.__repr__ = function() { return "<module: view.components.Menu>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.Menu';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['Menu'] = $pyjs.loaded_modules['view.components.Menu'];


	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
	$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', 'view.components', null, false);
	$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', 'view.components', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
	$m['Menu'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.components.Menu';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var menuFile,menuHelp,$pyjs_try_err,menuView;
			try {
				$pyjs_kwargs_call($m['MenuBar'], '__init__', null, null, [{vertical:false}, self]);
				self.mFileOpen = (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)();
				self.mFileSaveAs = (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)();
				self.mFilePreferences = (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)();
				self.mViewEdit = (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)();
				self.mViewSummary = (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)();
				self.mHelpContents = (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)();
				self.mHelpAbout = (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)();
				menuFile = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{vertical:true}]);
				menuFile['addItem']('Open ...', $p['getattr'](self, 'mFileOpen'));
				menuFile['addItem']('Save as ...', $p['getattr'](self, 'mFileSaveAs'));
				menuFile['addItem']('Preferences', $p['getattr'](self, 'mFilePreferences'));
				self['addItem']($m['MenuItem']('File', menuFile));
				menuView = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{vertical:true}]);
				menuView['addItem']('Edit', $p['getattr'](self, 'mViewEdit'));
				menuView['addItem']('Summary', $p['getattr'](self, 'mViewSummary'));
				self['addItem']($m['MenuItem']('View', menuView));
				menuHelp = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{vertical:true}]);
				menuHelp['addItem']('Contents', $p['getattr'](self, 'mHelpContents'));
				menuHelp['addItem']('About', $p['getattr'](self, 'mHelpAbout'));
				self['addItem']($m['MenuItem']('Help', menuHelp));
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
		var $bases = new Array($m['MenuBar']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Menu', $p['tuple']($bases), $data);
	})();
	$m['MenuCmd'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.components.Menu';
		$method = $pyjs__bind_method2('setHandler', function(handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			self.handler = handler;
			return null;
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['setHandler'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['handler']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuCmd', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.components.Menu */


/* end module: view.components.Menu */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.MenuBar', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel']
*/
