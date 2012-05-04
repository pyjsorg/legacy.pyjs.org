/* start module: Text */
$pyjs.loaded_modules['Text'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Text'].__was_initialized__) return $pyjs.loaded_modules['Text'];
	var $m = $pyjs.loaded_modules["Text"];
	$m.__repr__ = function() { return "<module: Text>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Text';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['PasswordTextBox'] = $p['___import___']('pyjamas.ui.PasswordTextBox.PasswordTextBox', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['TextBoxBase'] = $p['___import___']('pyjamas.ui.TextBoxBase.TextBoxBase', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
	$m['Text'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Text';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var vp,textArea,panel;
			$m['Sink']['__init__'](self);
			self.fPasswordText = $m['PasswordTextBox']();
			self.fTextArea = $m['TextArea']();
			self.fTextBox = $m['TextBox']();
			panel = $m['VerticalPanel']();
			panel['setSpacing'](8);
			panel['add']($m['HTML']('Normal text box:'));
			panel['add'](self['createTextThing']($p['getattr'](self, 'fTextBox')));
			panel['add']($m['HTML']('Password text box:'));
			panel['add'](self['createTextThing']($p['getattr'](self, 'fPasswordText')));
			panel['add']($m['HTML']('Text area:'));
			panel['add'](self['createTextThing']($p['getattr'](self, 'fTextArea')));
			panel['add']($m['HTML']("Textarea below demos oninput event. oninput allows\nto detect when the content of an element has changed. This is different\nfrom examples above, where changes are detected only if they are made with\nkeyboard. oninput occurs when the content is changed through any user\ninterface(keyboard, mouse, etc.). For example, at first type few chars, but\nthen paste some text to the text areas above and below by selecting 'Paste'\ncommand from context menu or by dragging&dropping and see the difference.\noninput is similar to onchange event, but onchange event fires only when a\ntext-entry widget loses focus."));
			vp = $m['VerticalPanel']();
			self.echo = $m['HTML']();
			textArea = $m['TextArea']();
			vp['add'](textArea);
			vp['add']($p['getattr'](self, 'echo'));
			textArea['addInputListener'](self);
			panel['add'](vp);
			self['initWidget'](panel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onShow', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onShow'] = $method;
		$method = $pyjs__bind_method2('onInput', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['echo']['setText'](sender['getText']());
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onInput'] = $method;
		$method = $pyjs__bind_method2('createTextThing', function(textBox) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				textBox = arguments[1];
			}
			var select_all,echo,listener,p;
			p = $m['HorizontalPanel']();
			p['setSpacing'](4);
			p['add'](textBox);
			echo = $m['HTML']();
			select_all = $m['Button']('select all');
			p['add'](select_all);
			p['add'](echo);
			listener = (typeof TextBoxListener == "undefined"?$m.TextBoxListener:TextBoxListener)(self, textBox, echo, select_all);
			select_all['addClickListener'](listener);
			textBox['addKeyboardListener'](listener);
			textBox['addClickListener'](listener);
			return p;
		}
	, 1, [null,null,['self'],['textBox']]);
		$cls_definition['createTextThing'] = $method;
		$method = $pyjs__bind_method2('updateText', function(text, echo) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				echo = arguments[2];
			}
			var $add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
			echo['setHTML']((typeof ($add7=(typeof ($add5=(typeof ($add3=(typeof ($add1='Text: ')==typeof ($add2=text['getText']()) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4='<br>') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($add6=$p['sprintf']('Selection: %d', text['getCursorPos']())) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)))==typeof ($add8=$p['sprintf'](', %d', text['getSelectionLength']())) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)));
			return null;
		}
	, 1, [null,null,['self'],['text'],['echo']]);
		$cls_definition['updateText'] = $method;
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Text', $p['tuple']($bases), $data);
	})();
	$m['TextBoxListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Text';
		$method = $pyjs__bind_method2('__init__', function(parent, textBox, echo, select_all) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
				textBox = arguments[2];
				echo = arguments[3];
				select_all = arguments[4];
			}

			self.textBox = textBox;
			self.echo = echo;
			self.parent = parent;
			self.select_all = select_all;
			return null;
		}
	, 1, [null,null,['self'],['parent'],['textBox'],['echo'],['select_all']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $eq2,$bool1,$eq1;
			if ((($bool1=(($eq1=sender)===($eq2=$p['getattr'](self, 'select_all'))&&$eq1===null?true:
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
				self['textBox']['selectAll']();
				self['textBox']['setFocus'](true);
			}
			self['parent']['updateText']($p['getattr'](self, 'textBox'), $p['getattr'](self, 'echo'));
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

			self['parent']['updateText']($p['getattr'](self, 'textBox'), $p['getattr'](self, 'echo'));
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
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TextBoxListener', $p['tuple']($bases), $data);
	})();
	$m['init'] = function() {
		var text,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add9,$add18;
		text = 'GWT includes the standard complement of text-entry widgets, each of which ';
		text = (typeof ($add9=text)==typeof ($add10='supports keyboard and selection events you can use to control text entry.  ') && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			$p['op_add']($add9,$add10));
		text = (typeof ($add11=text)==typeof ($add12='In particular, notice that the selection range for each widget is ') && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			$p['op_add']($add11,$add12));
		text = (typeof ($add13=text)==typeof ($add14='updated whenever you press a key.  ') && (typeof $add13=='number'||typeof $add13=='string')?
			$add13+$add14:
			$p['op_add']($add13,$add14));
		text = (typeof ($add15=text)==typeof ($add16='This can be a bit tricky on some browsers, but the GWT class library ') && (typeof $add15=='number'||typeof $add15=='string')?
			$add15+$add16:
			$p['op_add']($add15,$add16));
		text = (typeof ($add17=text)==typeof ($add18='takes care of the plumbing for you automatically.') && (typeof $add17=='number'||typeof $add17=='string')?
			$add17+$add18:
			$p['op_add']($add17,$add18));
		return $m['SinkInfo']('Text', text, $m['Text']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end Text */


/* end module: Text */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.PasswordTextBox.PasswordTextBox', 'pyjamas.ui.PasswordTextBox', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui.TextBoxBase', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
