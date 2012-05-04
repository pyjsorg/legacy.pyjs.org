/* start module: view.MenuMediator */
$pyjs.loaded_modules['view.MenuMediator'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.MenuMediator'].__was_initialized__) return $pyjs.loaded_modules['view.MenuMediator'];
	if(typeof $pyjs.loaded_modules['view'] == 'undefined' || !$pyjs.loaded_modules['view'].__was_initialized__) $p['___import___']('view', null);
	var $m = $pyjs.loaded_modules["view.MenuMediator"];
	$m.__repr__ = function() { return "<module: view.MenuMediator>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.MenuMediator';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view']['MenuMediator'] = $pyjs.loaded_modules['view.MenuMediator'];


	$m['Mediator'] = $p['___import___']('puremvc.patterns.mediator.Mediator', 'view', null, false);
	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view', null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view', null, false);
	$m['TimeProxy'] = $p['___import___']('model.TimeProxy.TimeProxy', 'view', null, false);
	$m['FileOpenDlg'] = $p['___import___']('view.components.FileOpenDlg.FileOpenDlg', 'view', null, false);
	$m['PreferencesDlg'] = $p['___import___']('view.components.PreferencesDlg.PreferencesDlg', 'view', null, false);
	$m['HelpContentsDlg'] = $p['___import___']('view.components.HelpContentsDlg.HelpContentsDlg', 'view', null, false);
	$m['HelpAboutDlg'] = $p['___import___']('view.components.HelpAboutDlg.HelpAboutDlg', 'view', null, false);
	$m['getCookie'] = $p['___import___']('pyjamas.Cookies.getCookie', 'view', null, false);
	$m['sys'] = $p['___import___']('sys', 'view');
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view', null, false);
	$m['base64'] = $p['___import___']('base64', 'view');
	$m['MenuMediator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.MenuMediator';
		$cls_definition['NAME'] = 'MenuMediator';
		$cls_definition['fileLocation'] = null;
		$method = $pyjs__bind_method2('__init__', function(viewComponent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				viewComponent = arguments[1];
			}
			var fileLocation,$pyjs_try_err;
			$m['Mediator']['__init__'](self, $p['getattr']($m['MenuMediator'], 'NAME'), viewComponent);
			viewComponent['mFileOpen']['setHandler']($p['getattr'](self, 'onFileOpen'));
			viewComponent['mFileSaveAs']['setHandler']($p['getattr'](self, 'onFileSaveAs'));
			viewComponent['mFilePreferences']['setHandler']($p['getattr'](self, 'onFilePreferences'));
			viewComponent['mViewEdit']['setHandler']($p['getattr'](self, 'onViewEdit'));
			viewComponent['mViewSummary']['setHandler']($p['getattr'](self, 'onViewSummary'));
			viewComponent['mHelpContents']['setHandler']($p['getattr'](self, 'onHelpContents'));
			viewComponent['mHelpAbout']['setHandler']($p['getattr'](self, 'onHelpAbout'));
			self.timeProxy = self['facade']['retrieveProxy']($p['getattr']($m['TimeProxy'], 'NAME'));
			try {
				fileLocation = $m['getCookie']('fileLocation');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					fileLocation = null;
				}
			}
			self.fileLocation = self['checkFileLocation'](fileLocation);
			self['onFileOpen']($p['getattr'](self, 'fileLocation'));
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
		$method = $pyjs__bind_method2('checkFileLocation', function(fileLocation) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fileLocation = arguments[1];
			}
			var $or1,$or2,$bool2,$bool1;
			if ((($bool2=((($bool1=$or1=(fileLocation === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:(fileLocation === 'null'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				fileLocation = 'timesheet.txt';
			}
			return fileLocation;
		}
	, 1, [null,null,['self'],['fileLocation']]);
		$cls_definition['checkFileLocation'] = $method;
		$method = $pyjs__bind_method2('onFileOpen', function(fileLocation) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fileLocation = arguments[1];
			}
			if (typeof fileLocation == 'undefined') fileLocation=arguments.callee.__args__[3][1];
			var onOpen,dlg,$pyjs_try_err;
			try {
				dlg = null;
				onOpen = function(sender) {

					self['sendNotification']($p['getattr']($m['Notification'], 'FILE_LOADED'), $p['tuple']([$p['getattr'](dlg, 'filename'), $p['getattr'](dlg, 'data')]));
					return null;
				};
				onOpen.__name__ = 'onOpen';

				onOpen.__bind_type__ = 0;
				onOpen.__args__ = [null,null,['sender']];
				fileLocation = self['checkFileLocation'](fileLocation);
				dlg = $pyjs_kwargs_call(null, $m['FileOpenDlg'], null, null, [{fileLocation:fileLocation}]);
				dlg['openBtn']['addClickListener'](onOpen);
				dlg['show']();
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
	, 1, [null,null,['self'],['fileLocation', null]]);
		$cls_definition['onFileOpen'] = $method;
		$method = $pyjs__bind_method2('onFileSaveAs', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var data,w,data_uri;
			data = self['timeProxy']['exportData']();
			data_uri = $p['sprintf']('data:text/plain;base64,%s', $m['base64']['encodestring'](data));
			w = $wnd['open']('', '_blank', 'scrollbars=yes,width=300,height=300');
			w['document']['open']('text/html');
			w['document']['write']($p['sprintf']('<a href="%s">Right click here</a> if your browser supports data uri<br />Otherwise, you\'ll have to copy and paste this output to a text file<br />\n', data_uri));
			w['document']['write']('<pre>');
			w['document']['write'](data);
			w['document']['write']('</pre>');
			w['document']['close']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onFileSaveAs'] = $method;
		$method = $pyjs__bind_method2('onFilePreferences', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dlg;
			dlg = $m['PreferencesDlg']();
			dlg.mediator = self;
			dlg['show']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onFilePreferences'] = $method;
		$method = $pyjs__bind_method2('onViewEdit', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['sendNotification']($p['getattr']($m['Notification'], 'EDIT_SELECTED'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onViewEdit'] = $method;
		$method = $pyjs__bind_method2('onViewSummary', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['sendNotification']($p['getattr']($m['Notification'], 'SUM_SELECTED'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onViewSummary'] = $method;
		$method = $pyjs__bind_method2('onHelpContents', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dlg;
			dlg = $m['HelpContentsDlg']();
			dlg.mediator = self;
			dlg['show']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onHelpContents'] = $method;
		$method = $pyjs__bind_method2('onHelpAbout', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dlg;
			dlg = $m['HelpAboutDlg']();
			dlg.mediator = self;
			dlg['show']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onHelpAbout'] = $method;
		var $bases = new Array($m['Mediator']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuMediator', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.MenuMediator */


/* end module: view.MenuMediator */


/*
PYJS_DEPS: ['puremvc.patterns.mediator.Mediator', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.mediator', 'ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window', 'model.TimeProxy.TimeProxy', 'model', 'model.TimeProxy', 'view.components.FileOpenDlg.FileOpenDlg', 'view', 'view.components', 'view.components.FileOpenDlg', 'view.components.PreferencesDlg.PreferencesDlg', 'view.components.PreferencesDlg', 'view.components.HelpContentsDlg.HelpContentsDlg', 'view.components.HelpContentsDlg', 'view.components.HelpAboutDlg.HelpAboutDlg', 'view.components.HelpAboutDlg', 'pyjamas.Cookies.getCookie', 'pyjamas.Cookies', 'sys', 'base64']
*/
