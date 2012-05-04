/* start module: view.components.PreferencesDlg */
$pyjs.loaded_modules['view.components.PreferencesDlg'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.PreferencesDlg'].__was_initialized__) return $pyjs.loaded_modules['view.components.PreferencesDlg'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.PreferencesDlg"];
	$m.__repr__ = function() { return "<module: view.components.PreferencesDlg>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.PreferencesDlg';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['PreferencesDlg'] = $pyjs.loaded_modules['view.components.PreferencesDlg'];


	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'view.components', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'view.components', null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'view.components', null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', 'view.components', null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', 'view.components', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'view.components', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'view.components', null, false);
	$m['setCookie'] = $p['___import___']('pyjamas.Cookies.setCookie', 'view.components', null, false);
	$m['getCookie'] = $p['___import___']('pyjamas.Cookies.getCookie', 'view.components', null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view.components', null, false);
	$m['PreferencesDlg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.components.PreferencesDlg';
		$cls_definition['fileLocation'] = null;
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
			var $add2,$add3,$pyjs_try_err,ftable,$add4,hpanel,$add1,ftableFormatter,row;
			$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{modal:false}, self]);
			self['setPopupPosition'](left, top);
			self['setText']('Preferences');
			ftable = $m['FlexTable']();
			ftableFormatter = ftable['getFlexCellFormatter']();
			row = 0;
			try {
				self.fileLocation = $m['getCookie']('fileLocation');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					self.fileLocation = null;
				}
			}
			row = (typeof ($add1=row)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			ftable['setWidget'](row, 0, $pyjs_kwargs_call(null, $m['Label'], null, null, [{wordWrap:false}, 'Sheet loaded on startup']));
			self.fileLocationInput = $m['TextBox']();
			self['fileLocationInput']['addChangeListener']($p['getattr'](self, 'checkValid'));
			self['fileLocationInput']['addKeyboardListener'](self);
			self['fileLocationInput']['setVisibleLength'](30);
			self['fileLocationInput']['setText']($p['getattr'](self, 'fileLocation'));
			ftable['setWidget'](row, 1, $p['getattr'](self, 'fileLocationInput'));
			row = (typeof ($add3=row)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			hpanel = $m['HorizontalPanel']();
			self.saveBtn = $m['Button']('Save', $p['getattr'](self, 'onSave'));
			self['saveBtn']['setEnabled'](false);
			hpanel['add']($p['getattr'](self, 'saveBtn'));
			self.cancelBtn = $m['Button']('Cancel', $p['getattr'](self, 'onCancel'));
			hpanel['add']($p['getattr'](self, 'cancelBtn'));
			ftable['setWidget'](row, 0, hpanel);
			ftableFormatter['setColSpan'](row, 0, 2);
			self['setWidget'](ftable);
			return null;
		}
	, 1, [null,null,['self'],['left', 50],['top', 50]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCancel', function(sender) {
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
		$cls_definition['onCancel'] = $method;
		$method = $pyjs__bind_method2('onSave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $pyjs_try_err;
			try {
				$m['setCookie']('fileLocation', self['fileLocationInput']['getText'](), 1000000000);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			self['hide']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onSave'] = $method;
		$method = $pyjs__bind_method2('checkValid', function(evt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evt = arguments[1];
			}
			if (typeof evt == 'undefined') evt=arguments.callee.__args__[3][1];
			var $eq2,$eq1,$bool1;
			if ((($bool1=!(($eq1=$p['getattr'](self, 'fileLocation'))===($eq2=self['fileLocationInput']['getText']())&&$eq1===null?true:
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
				self['saveBtn']['setEnabled'](true);
			}
			else {
				self['saveBtn']['setEnabled'](false);
			}
			return null;
		}
	, 1, [null,null,['self'],['evt', null]]);
		$cls_definition['checkValid'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}

			self['checkValid']();
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		var $bases = new Array($m['DialogBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PreferencesDlg', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.components.PreferencesDlg */


/* end module: view.components.PreferencesDlg */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Cookies.setCookie', 'pyjamas.Cookies', 'pyjamas.Cookies.getCookie', 'pyjamas.Window.alert', 'pyjamas.Window']
*/
