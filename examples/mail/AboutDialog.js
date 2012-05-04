/* start module: AboutDialog */
$pyjs.loaded_modules['AboutDialog'] = function (__mod_name__) {
	if($pyjs.loaded_modules['AboutDialog'].__was_initialized__) return $pyjs.loaded_modules['AboutDialog'];
	var $m = $pyjs.loaded_modules["AboutDialog"];
	$m.__repr__ = function() { return "<module: AboutDialog>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AboutDialog';
	$m.__name__ = __mod_name__;


	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['AboutDialog'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'AboutDialog';
		$cls_definition['LOGO_IMAGE'] = 'http://trac.pyworks.org/pyjamas/chrome/site/pyjamas-logo-small.png';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var outer,text,buttonPanel,$add2,$add3,textplain,$add1,$add4;
			$m['DialogBox']['__init__'](self);
			self['setText']('About the Mail Sample');
			outer = $m['DockPanel']();
			outer['setSpacing'](4);
			outer['add']($m['Image']($p['getattr']($m['AboutDialog'], 'LOGO_IMAGE')), $p['getattr']($m['DockPanel'], 'WEST'));
			buttonPanel = $m['HorizontalPanel']();
			buttonPanel['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
			buttonPanel['add']($m['Button']('Close', self));
			outer['add'](buttonPanel, $p['getattr']($m['DockPanel'], 'SOUTH'));
			textplain = 'This sample application demonstrates the construction ';
			textplain = (typeof ($add1=textplain)==typeof ($add2="of a complex user interface using pyjamas' built-in widgets.  Have a look ") && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			textplain = (typeof ($add3=textplain)==typeof ($add4='at the code to see how easy it is to build your own apps!') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			text = $m['HTML'](textplain);
			text['setStyleName']('mail-AboutText');
			outer['add'](text, $p['getattr']($m['DockPanel'], 'CENTER'));
			outer['setSpacing'](8);
			self['setWidget'](outer);
			return null;
		}
	, 1, [null,null,['self']]);
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
		$method = $pyjs__bind_method2('onKeyDownPreview', function(key, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				modifiers = arguments[2];
			}
			var $or1,$or2,$eq2,$eq3,$eq1,$eq4,$bool2,$bool1;
			if ((($bool2=((($bool1=$or1=(($eq1=key)===($eq2=$p['getattr']($m['KeyboardListener'], 'KEY_ESCAPE'))&&$eq1===null?true:
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
					 true ) )?$or1:(($eq3=key)===($eq4=$p['getattr']($m['KeyboardListener'], 'KEY_ENTER'))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['hide']();
			}
			return true;
		}
	, 1, [null,null,['self'],['key'],['modifiers']]);
		$cls_definition['onKeyDownPreview'] = $method;
		var $bases = new Array($m['DialogBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AboutDialog', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end AboutDialog */


/* end module: AboutDialog */


/*
PYJS_DEPS: ['pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.HasAlignment']
*/
