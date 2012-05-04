/* start module: Mail */
$pyjs.loaded_modules['Mail'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Mail'].__was_initialized__) return $pyjs.loaded_modules['Mail'];
	var $m = $pyjs.loaded_modules["Mail"];
	$m.__repr__ = function() { return "<module: Mail>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Mail';
	$m.__name__ = __mod_name__;
	var $eq2,$eq1,$bool2;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['MailDetail'] = $p['___import___']('MailDetail.MailDetail', null, null, false);
	$m['Shortcuts'] = $p['___import___']('Shortcuts.Shortcuts', null, null, false);
	$m['MailList'] = $p['___import___']('MailList.MailList', null, null, false);
	$m['TopPanel'] = $p['___import___']('TopPanel.TopPanel', null, null, false);
	$m['Logger'] = $p['___import___']('Logger.Logger', null, null, false);
	$m['Mail'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Mail';
		$method = $pyjs__bind_method2('get', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'singleton');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var topPanel,outer,rightPanel,mailList;
			self.singleton = self;
			topPanel = $m['TopPanel']();
			rightPanel = $m['VerticalPanel']();
			self.mailDetail = $m['MailDetail']();
			self.shortcuts = $m['Shortcuts']();
			topPanel['setWidth']('100%');
			mailList = $m['MailList']($p['getattr'](self, 'singleton'));
			mailList['setWidth']('100%');
			rightPanel['add'](mailList);
			rightPanel['add']($p['getattr'](self, 'mailDetail'));
			mailList['setWidth']('100%');
			self['mailDetail']['setWidth']('100%');
			outer = $m['DockPanel']();
			outer['add'](topPanel, $p['getattr']($m['DockPanel'], 'NORTH'));
			outer['add']($p['getattr'](self, 'shortcuts'), $p['getattr']($m['DockPanel'], 'WEST'));
			outer['add'](rightPanel, $p['getattr']($m['DockPanel'], 'CENTER'));
			outer['setWidth']('100%');
			outer['setSpacing'](4);
			outer['setCellWidth'](rightPanel, '100%');
			$m['Window']['addWindowResizeListener'](self);
			$m['Window']['enableScrolling'](false);
			$m['Window']['setMargin']('0px');
			$m['RootPanel']()['add'](outer);
			$m['RootPanel']()['add']($m['Logger']());
			$m['DeferredCommand']['add'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['onWindowResized']($m['Window']['getClientWidth'](), $m['Window']['getClientHeight']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $cmp1,shortcutHeight,$cmp2,$bool1,$sub3,$sub2,$sub1,$sub4;
			shortcutHeight = (typeof ($sub3=(typeof ($sub1=height)==typeof ($sub2=self['shortcuts']['getAbsoluteTop']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)))==typeof ($sub4=8) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			if ((($bool1=((($cmp1=shortcutHeight)===($cmp2=1)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				shortcutHeight = 1;
			}
			self['shortcuts']['setHeight']($p['sprintf']('%dpx', shortcutHeight));
			self['mailDetail']['adjustSize'](width, height);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('displayItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			self['mailDetail']['setItem'](item);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['displayItem'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Mail', $p['tuple']($bases), $data);
	})();
	if ((($bool2=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
		$m['pyjd']['setup']('./public/Mail.html');
		$m['m'] = $m['Mail']();
		$m['m']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end Mail */


/* end module: Mail */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window', 'pyjamas', 'pyjamas.DeferredCommand', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui', 'pyjamas.ui.DockPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'MailDetail.MailDetail', 'MailDetail', 'Shortcuts.Shortcuts', 'Shortcuts', 'MailList.MailList', 'MailList', 'TopPanel.TopPanel', 'TopPanel', 'Logger.Logger', 'Logger']
*/
