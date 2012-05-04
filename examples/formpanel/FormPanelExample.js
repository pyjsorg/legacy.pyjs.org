/* start module: FormPanelExample */
$pyjs.loaded_modules['FormPanelExample'] = function (__mod_name__) {
	if($pyjs.loaded_modules['FormPanelExample'].__was_initialized__) return $pyjs.loaded_modules['FormPanelExample'];
	var $m = $pyjs.loaded_modules["FormPanelExample"];
	$m.__repr__ = function() { return "<module: FormPanelExample>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'FormPanelExample';
	$m.__name__ = __mod_name__;
	var $eq3,$eq4,$bool2;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', null, null, false);
	$m['FileUpload'] = $p['___import___']('pyjamas.ui.FileUpload.FileUpload', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['FormPanelExample'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'FormPanelExample';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var lb,upload,panel;
			self.form = $m['FormPanel']();
			self['form']['setAction']('/chat-service/test/');
			self['form']['setEncoding']($p['getattr']($m['FormPanel'], 'ENCODING_MULTIPART'));
			self['form']['setMethod']($p['getattr']($m['FormPanel'], 'METHOD_POST'));
			panel = $m['VerticalPanel']();
			self['form']['setWidget'](panel);
			self.tb = $m['TextBox']();
			self['tb']['setName']('textBoxFormElement');
			panel['add']($p['getattr'](self, 'tb'));
			lb = $m['ListBox']();
			lb['setName']('listBoxFormElement');
			lb['addItem']('foo', 'fooValue');
			lb['addItem']('bar', 'barValue');
			lb['addItem']('baz', 'bazValue');
			panel['add'](lb);
			upload = $m['FileUpload']();
			upload['setName']('uploadFormElement');
			panel['add'](upload);
			panel['add']($m['Button']('Submit', self));
			self['form']['addFormHandler'](self);
			$m['RootPanel']()['add']($p['getattr'](self, 'form'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['form']['submit']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onSubmitComplete', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['Window']['alert'](event['getResults']());
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onSubmitComplete'] = $method;
		$method = $pyjs__bind_method2('onSubmit', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $eq2,$eq1,$bool1,$len1;
			if ((($bool1=(($eq1=(($len1=self['tb']['getText']()) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($eq2=0)&&$eq1===null?true:
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
				$m['Window']['alert']('The text box must not be empty');
				event['setCancelled'](true);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onSubmit'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FormPanelExample', $p['tuple']($bases), $data);
	})();
	if ((($bool2=(($eq3=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq4='__main__')&&$eq3===null?true:
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
		$m['pyjd']['setup']('FormPanelExample.html');
		$m['app'] = $m['FormPanelExample']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end FormPanelExample */


/* end module: FormPanelExample */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.FileUpload.FileUpload', 'pyjamas.ui.FileUpload', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.Window']
*/
