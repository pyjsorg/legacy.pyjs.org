/* start module: demoInfo */
$pyjs.loaded_modules['demoInfo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['demoInfo'].__was_initialized__) return $pyjs.loaded_modules['demoInfo'];
	var $m = $pyjs.loaded_modules["demoInfo"];
	$m.__repr__ = function() { return "<module: demoInfo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'demoInfo';
	$m.__name__ = __mod_name__;


	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
	$m['CaptionPanel'] = $p['___import___']('pyjamas.ui.CaptionPanel.CaptionPanel', null, null, false);
	$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', null, null, false);
	$m['TreeItem'] = $p['___import___']('pyjamas.ui.TreeItem.TreeItem', null, null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['math'] = $p['___import___']('math', null);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['NamedFrame'] = $p['___import___']('pyjamas.ui.NamedFrame.NamedFrame', null, null, false);
	$m['History'] = $p['___import___']('pyjamas.History', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', null, null, false);
	$m['PasswordTextBox'] = $p['___import___']('pyjamas.ui.PasswordTextBox.PasswordTextBox', null, null, false);
	$m['FileUpload'] = $p['___import___']('pyjamas.ui.FileUpload.FileUpload', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', null, null, false);
	$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['StackPanel'] = $p['___import___']('pyjamas.ui.StackPanel.StackPanel', null, null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['RadioButton'] = $p['___import___']('pyjamas.ui.RadioButton.RadioButton', null, null, false);
	$m['Hidden'] = $p['___import___']('pyjamas.ui.Hidden.Hidden', null, null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Tree'] = $p['___import___']('pyjamas.ui.Tree.Tree', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', null, null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', null, null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	$m['HorizontalPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var part1,part2,part3,part4,panel;
			$m['SimplePanel']['__init__'](self);
			panel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{BorderWidth:1, HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'), VerticalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'), Width:'100%', Height:'200px'}]);
			part1 = $m['Label']('Part 1');
			part2 = $m['Label']('Part 2');
			part3 = $m['Label']('Part 3');
			part4 = $m['Label']('Part 4');
			panel['add'](part1);
			panel['add'](part2);
			panel['add'](part3);
			panel['add'](part4);
			panel['setCellWidth'](part1, '10%');
			panel['setCellWidth'](part2, '70%');
			panel['setCellWidth'](part3, '10%');
			panel['setCellWidth'](part4, '10%');
			panel['setCellVerticalAlignment'](part3, $p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
			self['add'](panel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HorizontalPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['TextAreaDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var field;
			$m['VerticalPanel']['__init__'](self);
			self['setSpacing']('10px');
			field = $m['TextArea']();
			field['setCharacterWidth'](20);
			field['setVisibleLines'](4);
			self['add'](field);
			self['add']((typeof AutoTextArea == "undefined"?$m.AutoTextArea:AutoTextArea)(self));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('done', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']('Ctrl-enter!');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['done'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TextAreaDemo', $p['tuple']($bases), $data);
	})();
	$m['AutoTextArea'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function(doneHandler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				doneHandler = arguments[1];
			}

			$m['TextArea']['__init__'](self);
			self.doneHandler = doneHandler;
			return null;
		}
	, 1, [null,null,['self'],['doneHandler']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and2;
			if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'keydown'))) {
				if ($p['bool'](($p['bool']($and1=$p['op_eq']($p['getattr'](event, 'keyCode'), 13))?$p['getattr'](event, 'ctrlKey'):$and1))) {
					self['doneHandler']['done']();
				}
				else {
					self['autoHeight']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('autoHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_iter,$mul1,$mul6,$div1,fsize,$iter1_array,newHeight,$iter1_nextval,$div2,$div3,$mul5,$mul4,$mul3,$mul2,$div4,a,c,b,$iter1_type,i,lines,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$add5;
			lines = self['getText']()['$$split']('\n');
			c = 0;
			$iter1_iter = lines;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				i = $iter1_nextval.$nextval;
				fsize = 9;
				a = (typeof ($div3=$p['float']((typeof ($mul1=$p['len'](i))==typeof ($mul2=fsize) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))))==typeof ($div4=$p['float']((typeof ($mul3=(typeof ($div1=self['getOffsetWidth']())==typeof ($div2=fsize) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))==typeof ($mul4=fsize) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4));
				b = $p['float_int']($m['math']['ceil'](a));
				c = $p['__op_add']($add1=c,$add2=$p['max'](1, b));
			}
			newHeight = $p['__op_add']($add5=$p['str']((typeof ($mul5=16)==typeof ($mul6=$p['__op_add']($add3=2,$add4=c)) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))),$add6='px');
			self['setHeight'](newHeight);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['autoHeight'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['TextArea']['setText'](self, text);
			self['autoHeight']();
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		var $bases = new Array($m['TextArea']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AutoTextArea', $p['tuple']($bases), $data);
	})();
	$m['PopupPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var vPanel;
			$m['SimplePanel']['__init__'](self);
			vPanel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{Spacing:4}]);
			self._btn = $m['Button']('Click Me', $p['getattr'](self, 'showPopup'));
			vPanel['add']($m['HTML']('Click on the button below to display the popup.'));
			vPanel['add']($p['getattr'](self, '_btn'));
			self['add'](vPanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('showPopup', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var top,$add10,$add7,$add8,$add9,contents,left;
			contents = $m['HTML']('Hello, World!');
			contents['addClickListener']($p['getattr'](self, 'onClick'));
			self._popup = $pyjs_kwargs_call(null, $m['PopupPanel'], null, null, [{autoHide:true}]);
			self['_popup']['add'](contents);
			self['_popup']['setStyleName']('showcase-popup');
			left = $p['__op_add']($add7=self['_btn']['getAbsoluteLeft'](),$add8=10);
			top = $p['__op_add']($add9=self['_btn']['getAbsoluteTop'](),$add10=10);
			self['_popup']['setPopupPosition'](left, top);
			self['_popup']['show']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['showPopup'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

			self['_popup']['hide']();
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PopupPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['FrameDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var frame;
			$m['SimplePanel']['__init__'](self);
			frame = $pyjs_kwargs_call(null, $m['Frame'], null, null, [{Width:'100%', Height:'200px'}, 'http://google.com']);
			self['add'](frame);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FrameDemo', $p['tuple']($bases), $data);
	})();
	$m['AbsolutePanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var panel;
			$m['SimplePanel']['__init__'](self);
			panel = $pyjs_kwargs_call(null, $m['AbsolutePanel'], null, null, [{Width:'100%', Height:'100px'}]);
			panel['add'](self['makeBox']('Child 1'), 20, 10);
			panel['add'](self['makeBox']('Child 2'), 30, 30);
			self['add'](panel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('makeBox', function($$label) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$label = arguments[1];
			}
			var wrapper,$$label;
			wrapper = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{BorderWidth:1}]);
			wrapper['add']($m['HTML']($$label));
			$m['DOM']['setAttribute'](wrapper['getTable'](), 'cellPadding', '10');
			$m['DOM']['setAttribute'](wrapper['getTable'](), 'bgColor', '#C3D9FF');
			return wrapper;
		}
	, 1, [null,null,['self'],['$$label']]);
		$cls_definition['makeBox'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AbsolutePanelDemo', $p['tuple']($bases), $data);
	})();
	$m['MenubarDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var menu2,menu1,menubar;
			$m['SimplePanel']['__init__'](self);
			menu1 = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{vertical:true}]);
			menu1['addItem']('Item 1', (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)(self, 'onMenu1Item1'));
			menu1['addItem']('Item 2', (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)(self, 'onMenu1Item2'));
			menu2 = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{vertical:true}]);
			menu2['addItem']('Apples', (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)(self, 'onMenu2Apples'));
			menu2['addItem']('Oranges', (typeof MenuCmd == "undefined"?$m.MenuCmd:MenuCmd)(self, 'onMenu2Oranges'));
			menubar = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{vertical:false}]);
			menubar['addItem']($m['MenuItem']('Menu 1', menu1));
			menubar['addItem']($m['MenuItem']('<i>Menu 2</i>', true, menu2));
			self['add'](menubar);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onMenu1Item1', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']('Item 1 selected');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onMenu1Item1'] = $method;
		$method = $pyjs__bind_method2('onMenu1Item2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']('Item 2 selected');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onMenu1Item2'] = $method;
		$method = $pyjs__bind_method2('onMenu2Apples', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']('Apples selected');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onMenu2Apples'] = $method;
		$method = $pyjs__bind_method2('onMenu2Oranges', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']('Oranges selected');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onMenu2Oranges'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MenubarDemo', $p['tuple']($bases), $data);
	})();
	$m['MenuCmd'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function(object, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				object = arguments[1];
				handler = arguments[2];
			}

			self._object = object;
			self._handler = handler;
			return null;
		}
	, 1, [null,null,['self'],['object'],['handler']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var handler;
			handler = $p['getattr']($p['getattr'](self, '_object'), $p['getattr'](self, '_handler'));
			handler();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuCmd', $p['tuple']($bases), $data);
	})();
	$m['FileUploadDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var hPanel,results,vPanel;
			$m['SimplePanel']['__init__'](self);
			self.form = $m['FormPanel']();
			self['form']['setEncoding']($p['getattr']($m['FormPanel'], 'ENCODING_MULTIPART'));
			self['form']['setMethod']($p['getattr']($m['FormPanel'], 'METHOD_POST'));
			self['form']['setAction']('http://nonexistent.com');
			self['form']['setTarget']('results');
			vPanel = $m['VerticalPanel']();
			hPanel = $m['HorizontalPanel']();
			hPanel['setSpacing'](5);
			hPanel['add']($m['Label']('Upload file:'));
			self.field = $m['FileUpload']();
			self['field']['setName']('file');
			hPanel['add']($p['getattr'](self, 'field'));
			hPanel['add']($m['Button']('Submit', $p['getattr'](self, 'onBtnClick')));
			vPanel['add'](hPanel);
			results = $m['NamedFrame']('results');
			vPanel['add'](results);
			self['form']['add'](vPanel);
			self['add']($p['getattr'](self, 'form'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBtnClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['form']['submit']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBtnClick'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FileUploadDemo', $p['tuple']($bases), $data);
	})();
	$m['VerticalPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var part1,part2,part3,part4,panel;
			$m['SimplePanel']['__init__'](self);
			panel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{BorderWidth:1, HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'), VerticalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'), Width:'50%', Height:'300px'}]);
			part1 = $m['Label']('Part 1');
			part2 = $m['Label']('Part 2');
			part3 = $m['Label']('Part 3');
			part4 = $m['Label']('Part 4');
			panel['add'](part1);
			panel['add'](part2);
			panel['add'](part3);
			panel['add'](part4);
			panel['setCellHeight'](part1, '10%');
			panel['setCellHeight'](part2, '70%');
			panel['setCellHeight'](part3, '10%');
			panel['setCellHeight'](part4, '10%');
			panel['setCellHorizontalAlignment'](part3, $p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
			self['add'](panel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('VerticalPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['StackPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var stack;
			$m['SimplePanel']['__init__'](self);
			stack = $pyjs_kwargs_call(null, $m['StackPanel'], null, null, [{Width:'100%', Height:'300px'}]);
			stack['add']($m['HTML']('The quick<br>brown fox<br>jumps over the<br>lazy dog.'), 'Stack 1');
			stack['add']($m['HTML']('The<br>early<br>bird<br>catches<br>the<br>worm.'), 'Stack 2');
			stack['add']($m['HTML']('The smart money<br>is on the<br>black horse.'), 'Stack 3');
			self['add'](stack);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StackPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['CaptionPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var contents,panel;
			$m['SimplePanel']['__init__'](self);
			contents = $m['HTML']("<h3>The Zen of Python, by Tim Peters</h3>\n<p>Beautiful is better than ugly.<br />\nExplicit is better than implicit.<br />\nSimple is better than complex.<br />\nComplex is better than complicated.<br />\nFlat is better than nested.<br />\nSparse is better than dense.<br />\nReadability counts.<br />\nSpecial cases aren't special enough to break the rules.<br />\nAlthough practicality beats purity.<br />\nErrors should never pass silently.<br />\nUnless explicitly silenced.<br />\nIn the face of ambiguity, refuse the temptation to guess.<br />\nThere should be one-- and preferably only one --obvious way to do it.<br />\nAlthough that way may not be obvious at first unless you're Dutch.<br />\nNow is better than never.<br />\nAlthough never is often better than *right* now.<br />\nIf the implementation is hard to explain, it's a bad idea.<br />\nIf the implementation is easy to explain, it may be a good idea.<br />\nNamespaces are one honking great idea -- let's do more of those!</p>\n");
			panel = $pyjs_kwargs_call(null, $m['CaptionPanel'], null, null, [{Width:'300px'}, 'Caption-Panel', contents]);
			self['add'](panel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CaptionPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['LabelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $$label;
			$m['SimplePanel']['__init__'](self);
			$$label = $pyjs_kwargs_call(null, $m['Label'], null, null, [{wordWrap:false}, 'This is a label']);
			self['add']($$label);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LabelDemo', $p['tuple']($bases), $data);
	})();
	$m['ScrollPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul8,container,vert,$add21,$add20,$add22,$add14,$add15,$add16,$add17,$add11,$add12,$add13,$mul7,contents2,panel2,$add18,$add19,contents,panel;
			$m['SimplePanel']['__init__'](self);
			vert = $m['VerticalPanel']();
			vert['setSpacing']('10px');
			self['add'](vert);
			panel = $pyjs_kwargs_call(null, $m['ScrollPanel'], null, null, [{Size:$p['tuple'](['300px', '100px'])}]);
			contents = $m['HTML']($p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17=$p['__op_add']($add15=$p['__op_add']($add13=$p['__op_add']($add11='<b>Tao Te Ching, Chapter One</b><p>',$add12='The Way that can be told of is not an unvarying '),$add14='way;<p>The names that can be named are not '),$add16='unvarying names.<p>It was from the Nameless that '),$add18='Heaven and Earth sprang;<p>The named is but the '),$add20='mother that rears the ten thousand creatures, '),$add22='each after its kind.'));
			panel['add'](contents);
			vert['add'](panel);
			container = $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{Width:'400px', Height:'200px'}]);
			contents2 = $m['HTML']((typeof ($mul7=50)==typeof ($mul8='Dont forget to grab the css for SuperScrollPanel in Showcase.css! ') && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)));
			panel2 = (typeof SuperScrollPanel == "undefined"?$m.SuperScrollPanel:SuperScrollPanel)(contents2);
			container['add'](panel2);
			vert['add'](container);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ScrollPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['SuperScrollPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function(panel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			$m['ScrollPanel']['__init__'](self);
			self['setHeight']('100%');
			self['setStyleName']('SuperScrollPanelOuter');
			self.inner = $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{Height:'100%'}]);
			self['add']($p['getattr'](self, 'inner'));
			self['inner']['setStyleName']('SuperScrollPanelInner');
			self['inner']['add'](panel);
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['ScrollPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SuperScrollPanel', $p['tuple']($bases), $data);
	})();
	$m['RadioButtonDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var panel1,hPanel,panel2;
			$m['SimplePanel']['__init__'](self);
			panel1 = $m['VerticalPanel']();
			panel1['add']($m['RadioButton']('group1', 'Red'));
			panel1['add']($m['RadioButton']('group1', 'Green'));
			panel1['add']($m['RadioButton']('group1', 'Blue'));
			panel2 = $m['VerticalPanel']();
			panel2['add']($m['RadioButton']('group2', 'Solid'));
			panel2['add']($m['RadioButton']('group2', 'Liquid'));
			panel2['add']($m['RadioButton']('group2', 'Gas'));
			hPanel = $m['HorizontalPanel']();
			hPanel['add'](panel1);
			hPanel['add'](panel2);
			self['add'](hPanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RadioButtonDemo', $p['tuple']($bases), $data);
	})();
	$m['HtmlDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var html;
			$m['SimplePanel']['__init__'](self);
			html = $m['HTML']('Hello, <b><i>World!</i></b>');
			self['add'](html);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HtmlDemo', $p['tuple']($bases), $data);
	})();
	$m['TabPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var tabs;
			$m['SimplePanel']['__init__'](self);
			tabs = $pyjs_kwargs_call(null, $m['TabPanel'], null, null, [{Width:'100%', Height:'250px'}]);
			tabs['add']($m['HTML']('The quick brown fox jumps over the lazy dog.'), 'Tab 1');
			tabs['add']($m['HTML']('The early bird catches the worm.'), 'Tab 2');
			tabs['add']($m['HTML']('The smart money is on the black horse.'), 'Tab 3');
			tabs['selectTab'](0);
			self['add'](tabs);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TabPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['DialogBoxDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SimplePanel']['__init__'](self);
			self['add']($m['Button']('Show Dialog', $p['getattr'](self, 'showDialog')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('showDialog', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $sub4,top,$add25,$add23,$add24,$div8,$div7,$add26,$sub3,$sub2,$sub1,left,$div6,contents,$div5;
			contents = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{StyleName:'Contents', Spacing:4}]);
			contents['add']($m['HTML']('You can place any contents you like in a dialog box.'));
			contents['add']($m['Button']('Close', $p['getattr'](self, 'onClose')));
			self._dialog = $pyjs_kwargs_call(null, $m['DialogBox'], null, null, [{glass:true}]);
			self['_dialog']['setHTML']('<b>Welcome to the dialog box</b>');
			self['_dialog']['setWidget'](contents);
			left = $p['__op_add']($add23=(typeof ($div5=$p['__op_sub']($sub1=$m['Window']['getClientWidth'](),$sub2=200))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6)),$add24=$m['Window']['getScrollLeft']());
			top = $p['__op_add']($add25=(typeof ($div7=$p['__op_sub']($sub3=$m['Window']['getClientHeight'](),$sub4=100))==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8)),$add26=$m['Window']['getScrollTop']());
			self['_dialog']['setPopupPosition'](left, top);
			self['_dialog']['show']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['showDialog'] = $method;
		$method = $pyjs__bind_method2('onClose', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['_dialog']['hide']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClose'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DialogBoxDemo', $p['tuple']($bases), $data);
	})();
	$m['FlowPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var flow;
			$m['SimplePanel']['__init__'](self);
			flow = $pyjs_kwargs_call(null, $m['FlowPanel'], null, null, [{Width:'400px'}]);
			flow['add']($m['Button']('Item 1'));
			flow['add']($m['Button']('Item 2'));
			flow['add']($m['Button']('Item 3'));
			flow['add']($m['Button']('Item 4'));
			flow['add']($m['Button']('Item 5'));
			flow['add']($m['Button']('Item 6'));
			flow['add']($m['Button']('Item 7'));
			flow['add']($m['Button']('Item 8'));
			flow['add']($m['Button']('Item 9'));
			flow['add']($m['Button']('Item 10'));
			self['add'](flow);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FlowPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['ListBoxDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var hPanel;
			$m['SimplePanel']['__init__'](self);
			hPanel = $m['HorizontalPanel']();
			hPanel['setSpacing'](10);
			self.list1 = $m['ListBox']();
			self['list1']['setVisibleItemCount'](10);
			self['list1']['addItem']('Item 1');
			self['list1']['addItem']('Item 2');
			self['list1']['addItem']('Item 3');
			self['list1']['addChangeListener']($p['getattr'](self, 'onList1ItemSelected'));
			self.list2 = $m['ListBox']();
			self['list2']['setVisibleItemCount'](1);
			self['list2']['addItem']('Item A');
			self['list2']['addItem']('Item B');
			self['list2']['addItem']('Item C');
			self['list2']['addChangeListener']($p['getattr'](self, 'onList2ItemSelected'));
			hPanel['add']($p['getattr'](self, 'list1'));
			hPanel['add']($p['getattr'](self, 'list2'));
			self['add'](hPanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onList1ItemSelected', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add29,$add28,$add30,$add27,item;
			item = self['list1']['getItemText'](self['list1']['getSelectedIndex']());
			$m['Window']['alert']($p['__op_add']($add29=$p['__op_add']($add27='You selected ',$add28=item),$add30=' from list 1'));
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onList1ItemSelected'] = $method;
		$method = $pyjs__bind_method2('onList2ItemSelected', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add32,$add33,$add31,$add34,item;
			item = self['list2']['getItemText'](self['list2']['getSelectedIndex']());
			$m['Window']['alert']($p['__op_add']($add33=$p['__op_add']($add31='You selected ',$add32=item),$add34=' from list 2'));
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onList2ItemSelected'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ListBoxDemo', $p['tuple']($bases), $data);
	})();
	$m['ImageDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var img;
			$m['SimplePanel']['__init__'](self);
			img = $m['Image']('images/myImage.jpg');
			img['addClickListener']($p['getattr'](self, 'onImageClicked'));
			self['add'](img);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onImageClicked', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

			$m['Window']['alert']('Stop that!');
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onImageClicked'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageDemo', $p['tuple']($bases), $data);
	})();
	$m['TextBoxDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var field;
			$m['SimplePanel']['__init__'](self);
			field = $m['TextBox']();
			field['setVisibleLength'](20);
			field['setMaxLength'](10);
			self['add'](field);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TextBoxDemo', $p['tuple']($bases), $data);
	})();
	$m['FlexTableDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var cellFormatter,rowFormatter;
			$m['SimplePanel']['__init__'](self);
			self._table = $pyjs_kwargs_call(null, $m['FlexTable'], null, null, [{BorderWidth:1, Width:'100%'}]);
			cellFormatter = self['_table']['getFlexCellFormatter']();
			rowFormatter = self['_table']['getRowFormatter']();
			self['_table']['setHTML'](0, 0, '<b>Mammals</b>');
			self['_table']['setText'](1, 0, 'Cow');
			self['_table']['setText'](1, 1, 'Rat');
			self['_table']['setText'](1, 2, 'Dog');
			cellFormatter['setColSpan'](0, 0, 3);
			cellFormatter['setHorizontalAlignment'](0, 0, $p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'));
			self['_table']['setWidget'](2, 0, $m['Button']('Hide', $p['getattr'](self, 'hideRows')));
			self['_table']['setText'](2, 1, '1,1');
			self['_table']['setText'](2, 2, '2,1');
			self['_table']['setText'](3, 0, '1,2');
			self['_table']['setText'](3, 1, '2,2');
			cellFormatter['setRowSpan'](2, 0, 2);
			cellFormatter['setVerticalAlignment'](2, 0, $p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'));
			self['_table']['setWidget'](4, 0, $m['Button']('Show', $p['getattr'](self, 'showRows')));
			cellFormatter['setColSpan'](4, 0, 3);
			rowFormatter['setVisible'](4, false);
			self['add']($p['getattr'](self, '_table'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('hideRows', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var rowFormatter;
			rowFormatter = self['_table']['getRowFormatter']();
			rowFormatter['setVisible'](2, false);
			rowFormatter['setVisible'](3, false);
			rowFormatter['setVisible'](4, true);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['hideRows'] = $method;
		$method = $pyjs__bind_method2('showRows', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var rowFormatter;
			rowFormatter = self['_table']['getRowFormatter']();
			rowFormatter['setVisible'](2, true);
			rowFormatter['setVisible'](3, true);
			rowFormatter['setVisible'](4, false);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['showRows'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FlexTableDemo', $p['tuple']($bases), $data);
	})();
	$m['PasswordTextBoxDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var field;
			$m['SimplePanel']['__init__'](self);
			field = $m['PasswordTextBox']();
			field['setWidth']('100px');
			self['add'](field);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PasswordTextBoxDemo', $p['tuple']($bases), $data);
	})();
	$m['GridDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_type,row,$iter3_idx,$iter2_iter,$add42,$add41,$add40,$iter3_iter,$iter2_type,$iter2_idx,$add39,grid,$mul9,$iter3_array,$iter3_nextval,$add38,$iter2_nextval,$mul10,$add36,$add37,$add35,col,$iter2_array;
			$m['SimplePanel']['__init__'](self);
			grid = $pyjs_kwargs_call(null, $m['Grid'], null, null, [{BorderWidth:2, CellPadding:4, CellSpacing:1}, 5, 5]);
			grid['setHTML'](0, 0, '<b>Hello, World!</b>');
			$iter2_iter = $p['range'](1, 5);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				row = $iter2_nextval.$nextval;
				$iter3_iter = $p['range'](1, 5);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					col = $iter3_nextval.$nextval;
					grid['setText'](row, col, $p['__op_add']($add41=$p['__op_add']($add39=$p['__op_add']($add37=$p['__op_add']($add35=$p['str'](row),$add36='*'),$add38=$p['str'](col)),$add40=' = '),$add42=$p['str']((typeof ($mul9=row)==typeof ($mul10=col) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)))));
				}
			}
			self['add'](grid);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GridDemo', $p['tuple']($bases), $data);
	})();
	$m['HiddenDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var results,panel;
			$m['SimplePanel']['__init__'](self);
			self.form = $m['FormPanel']();
			self['form']['setAction']('http://google.com/search');
			self['form']['setTarget']('results');
			panel = $m['VerticalPanel']();
			panel['add']($m['Hidden']('q', 'python pyjamas'));
			panel['add']($m['Button']('Search', $p['getattr'](self, 'onBtnClick')));
			results = $m['NamedFrame']('results');
			panel['add'](results);
			self['form']['add'](panel);
			self['add']($p['getattr'](self, 'form'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBtnClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['form']['submit']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBtnClick'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HiddenDemo', $p['tuple']($bases), $data);
	})();
	$m['CheckBoxDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SimplePanel']['__init__'](self);
			self.box = $m['CheckBox']('Print Results?');
			self['box']['addClickListener']($p['getattr'](self, 'onClick'));
			self['add']($p['getattr'](self, 'box'));
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
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];
			var $add44,$add43;
			$m['Window']['alert']($p['__op_add']($add43='checkbox status: ',$add44=$p['str'](self['box']['isChecked']())));
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CheckBoxDemo', $p['tuple']($bases), $data);
	})();
	$m['HyperlinkDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var hPanel,vPanel;
			$m['SimplePanel']['__init__'](self);
			$m['History']['addHistoryListener'](self);
			vPanel = $m['VerticalPanel']();
			self.stateDisplay = $m['Label']();
			vPanel['add']($p['getattr'](self, 'stateDisplay'));
			hPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{Spacing:5}]);
			hPanel['add']($pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{TargetHistoryToken:'state number 1'}, 'State 1', false]));
			hPanel['add']($pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{TargetHistoryToken:'state number 2'}, 'State 2', false]));
			vPanel['add'](hPanel);
			self['add'](vPanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onHistoryChanged', function(state) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

			self['stateDisplay']['setText'](state);
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['onHistoryChanged'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HyperlinkDemo', $p['tuple']($bases), $data);
	})();
	$m['NamedFrameDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var frame,vPanel;
			$m['SimplePanel']['__init__'](self);
			vPanel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{Spacing:5}]);
			frame = $pyjs_kwargs_call(null, $m['NamedFrame'], null, null, [{Width:'100%', Height:'200px'}, 'myFrame']);
			vPanel['add'](frame);
			vPanel['add']($m['HTML']('<a href="http://google.com" target="myFrame">Google</a>'));
			vPanel['add']($m['HTML']('<a href="http://yahoo.com" target="myFrame">Yahoo</a>'));
			vPanel['add']($m['HTML']('<a href="http://pyjs.org" target="myFrame">Pyjamas</a>'));
			self['add'](vPanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('NamedFrameDemo', $p['tuple']($bases), $data);
	})();
	$m['ButtonDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var btn;
			$m['SimplePanel']['__init__'](self);
			btn = $m['Button']('Click Me', $p['getattr'](self, 'onButtonClick'));
			self['add'](btn);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onButtonClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['Window']['alert']('Ouch!');
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onButtonClick'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ButtonDemo', $p['tuple']($bases), $data);
	})();
	$m['TreeDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s2,tree,s1;
			$m['SimplePanel']['__init__'](self);
			tree = $m['Tree']();
			tree['addTreeListener'](self);
			s1 = self['createItem']('Section 1');
			s1['addItem']($pyjs_kwargs_call(self, 'createItem', null, null, [{value:11}, 'Item 1.1']));
			s1['addItem']($pyjs_kwargs_call(self, 'createItem', null, null, [{value:12}, 'Item 1.2']));
			s2 = self['createItem']('Section 2');
			s2['addItem']($pyjs_kwargs_call(self, 'createItem', null, null, [{value:21}, 'Item 2.1']));
			s2['addItem']($pyjs_kwargs_call(self, 'createItem', null, null, [{value:22}, 'Item 2.2']));
			$pyjs_kwargs_call(s1, 'setState', null, null, [{fireEvents:false}, true]);
			$pyjs_kwargs_call(s2, 'setState', null, null, [{fireEvents:false}, true]);
			tree['addItem'](s1);
			tree['addItem'](s2);
			self['add'](tree);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createItem', function($$label, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$label = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments.callee.__args__[4][1];
			var item,$$label;
			item = $m['TreeItem']($$label);
			$m['DOM']['setStyleAttribute'](item['getElement'](), 'cursor', 'pointer');
			if ($p['bool']((value !== null))) {
				item['setUserObject'](value);
			}
			return item;
		}
	, 1, [null,null,['self'],['$$label'],['value', null]]);
		$cls_definition['createItem'] = $method;
		$method = $pyjs__bind_method2('onTreeItemSelected', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $add45,value,$add46;
			value = item['getUserObject']();
			$m['Window']['alert']($p['__op_add']($add45='You clicked on ',$add46=$p['str'](value)));
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemSelected'] = $method;
		$method = $pyjs__bind_method2('onTreeItemStateChanged', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemStateChanged'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TreeDemo', $p['tuple']($bases), $data);
	})();
	$m['HtmlPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add50,$add51,$add52,$add53,$add54,$add55,$add49,$add48,$add47,$add59,$add57,id2,$add58,id1,$add56,panel,$add60;
			$m['SimplePanel']['__init__'](self);
			id1 = $m['HTMLPanel']['createUniqueId']();
			id2 = $m['HTMLPanel']['createUniqueId']();
			panel = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{Width:'150px'}, $p['__op_add']($add59=$p['__op_add']($add57=$p['__op_add']($add55=$p['__op_add']($add53=$p['__op_add']($add51=$p['__op_add']($add49=$p['__op_add']($add47='<b>This is some HTML</b><br>',$add48='First widget:<span id="'),$add50=id1),$add52='"></span><br>'),$add54='Second widget:<span id="'),$add56=id2),$add58='"></span><br>'),$add60='More <i>HTML</i>')]);
			panel['add']($m['Button']('Hi there'), id1);
			panel['add']($m['Label']('This label intentionally left blank'), id2);
			self['add'](panel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HtmlPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['DockPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var north,center,west,east,south,panel;
			$m['SimplePanel']['__init__'](self);
			panel = $pyjs_kwargs_call(null, $m['DockPanel'], null, null, [{BorderWidth:1, Padding:8, HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'), VerticalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE')}]);
			north = $m['Label']('North');
			west = $m['Label']('West');
			center = $m['Label']('Center');
			east = $m['Label']('East');
			south = $m['Label']('South');
			panel['add'](north, $p['getattr']($m['DockPanel'], 'NORTH'));
			panel['add'](west, $p['getattr']($m['DockPanel'], 'WEST'));
			panel['add'](center, $p['getattr']($m['DockPanel'], 'CENTER'));
			panel['add'](east, $p['getattr']($m['DockPanel'], 'EAST'));
			panel['add'](south, $p['getattr']($m['DockPanel'], 'SOUTH'));
			panel['setCellHeight'](center, '200px');
			panel['setCellWidth'](center, '400px');
			self['add'](panel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DockPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['DeepLinkDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var setDL,show;
			$m['HorizontalPanel']['__init__'](self);
			$m['History']['newItem']('test');
			show = $m['Button']('Show deep link', $p['getattr'](self, 'showDL'));
			setDL = $m['Button']("Set deep link to 'pyjamas'", $p['getattr'](self, 'setDL'));
			self['add'](setDL);
			self['add'](show);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('showDL', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']($m['History']['getToken']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showDL'] = $method;
		$method = $pyjs__bind_method2('setDL', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['History']['newItem']('pyjamas');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setDL'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DeepLinkDemo', $p['tuple']($bases), $data);
	})();
	$m['FormPanelDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'demoInfo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var hPanel,results,vPanel;
			$m['SimplePanel']['__init__'](self);
			self.form = $pyjs_kwargs_call(null, $m['FormPanel'], null, null, [{Action:'http://google.com/search', Target:'results'}]);
			vPanel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{Spacing:5}]);
			hPanel = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{Spacing:5}]);
			hPanel['add']($m['Label']('Search for:'));
			hPanel['add']($pyjs_kwargs_call(null, $m['TextBox'], null, null, [{Name:'q'}]));
			hPanel['add']($m['Button']('Submit', self));
			vPanel['add'](hPanel);
			results = $pyjs_kwargs_call(null, $m['NamedFrame'], null, null, [{Width:'100%', Height:'200px'}, 'results']);
			vPanel['add'](results);
			self['form']['add'](vPanel);
			self['add']($p['getattr'](self, 'form'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['form']['submit']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FormPanelDemo', $p['tuple']($bases), $data);
	})();
	$m['getDemos'] = function() {
		var demos;
		demos = $p['list']([]);
		demos['append']($p['dict']([['name', 'deepLink'], ['title', 'DeepLink'], ['section', 'other'], ['doc', 'This example shows you how to set and get deep links (also known as Tokens) '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>deepLink.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">History</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Window</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HorizontalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HorizontalPanel</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">DeepLinkDemo</font><font color="#303000"><b>(</b></font><font color="#000000">HorizontalPanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">HorizontalPanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">History</font><font color="#303000"><b>.</b></font><font color="#000000">newItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"test"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">show</font> <font color="#303000"><b>=</b></font> <font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Show deep link"</font><font color="#303000"><b>,</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">showDL</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">setDL</font> <font color="#303000"><b>=</b></font> <font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Set deep link to \'pyjamas\'"</font><font color="#303000"><b>,</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">setDL</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">setDL</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">show</font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">showDL</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#000000">History</font><font color="#303000"><b>.</b></font><font color="#000000">getToken</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">setDL</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">History</font><font color="#303000"><b>.</b></font><font color="#000000">newItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"pyjamas"</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['DeepLinkDemo']()]]));
		demos['append']($p['dict']([['name', 'absolutePanel'], ['title', 'ui.AbsolutePanel'], ['section', 'panels'], ['doc', "``ui.AbsolutePanel`` is a panel that positions its children using absolute pixel positions.  This allows the panel's children to overlap.\n\nNote that the AbsolutePanel does not automatically resize itself to fit its children.  There is no straightforward way of doing this unless all the children are explicitly sized; the easier workaround is just to call ``panel.setWidth(width)`` and ``panel.setHeight(height)`` explicitly after adding the children, choosing an appropriate width and height based on the children you have added. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>absolutePanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">AbsolutePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">AbsolutePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">DOM</font>\n\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">AbsolutePanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font> <font color="#303000"><b>=</b></font> <font color="#000000">AbsolutePanel</font><font color="#303000"><b>(</b></font><font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>,</b></font> <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">makeBox</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Child 1"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#FF2200">20</font><font color="#303000"><b>,</b></font> <font color="#FF2200">10</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">makeBox</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Child 2"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#FF2200">30</font><font color="#303000"><b>,</b></font> <font color="#FF2200">30</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">makeBox</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">label</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">wrapper</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">BorderWidth</font><font color="#303000"><b>=</b></font><font color="#FF2200">1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">wrapper</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#000000">label</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">DOM</font><font color="#303000"><b>.</b></font><font color="#000000">setAttribute</font><font color="#303000"><b>(</b></font><font color="#000000">wrapper</font><font color="#303000"><b>.</b></font><font color="#000000">getTable</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#A0008A">"cellPadding"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"10"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">DOM</font><font color="#303000"><b>.</b></font><font color="#000000">setAttribute</font><font color="#303000"><b>(</b></font><font color="#000000">wrapper</font><font color="#303000"><b>.</b></font><font color="#000000">getTable</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#A0008A">"bgColor"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"#C3D9FF"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#0000AF"><b>return</b></font> <font color="#000000">wrapper</font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['AbsolutePanelDemo']()]]));
		demos['append']($p['dict']([['name', 'captionPanel'], ['title', 'ui.CaptionPanel'], ['section', 'panels'], ['doc', 'The ``ui.CaptionPanel`` class implements a panel that displays a caption in the upper left corner of the border.\n\n'], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>captionPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">CaptionPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">CaptionPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">CaptionPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">contents</font> <font color="#303000"><b>=</b></font> <font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#2299BB">&quot;&quot;&quot;&lt;h3&gt;The Zen of Python, by Tim Peters&lt;/h3&gt;\n&lt;p&gt;Beautiful is better than ugly.&lt;br /&gt;\nExplicit is better than implicit.&lt;br /&gt;\nSimple is better than complex.&lt;br /&gt;\nComplex is better than complicated.&lt;br /&gt;\nFlat is better than nested.&lt;br /&gt;\nSparse is better than dense.&lt;br /&gt;\nReadability counts.&lt;br /&gt;\nSpecial cases aren\'t special enough to break the rules.&lt;br /&gt;\nAlthough practicality beats purity.&lt;br /&gt;\nErrors should never pass silently.&lt;br /&gt;\nUnless explicitly silenced.&lt;br /&gt;\nIn the face of ambiguity, refuse the temptation to guess.&lt;br /&gt;\nThere should be one-- and preferably only one --obvious way to do it.&lt;br /&gt;\nAlthough that way may not be obvious at first unless you\'re Dutch.&lt;br /&gt;\nNow is better than never.&lt;br /&gt;\nAlthough never is often better than *right* now.&lt;br /&gt;\nIf the implementation is hard to explain, it\'s a bad idea.&lt;br /&gt;\nIf the implementation is easy to explain, it may be a good idea.&lt;br /&gt;\nNamespaces are one honking great idea -- let\'s do more of those!&lt;/p&gt;\n&quot;&quot;&quot;</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font> <font color="#303000"><b>=</b></font> <font color="#000000">CaptionPanel</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Caption-Panel"</font><font color="#303000"><b>,</b></font> <font color="#000000">contents</font><font color="#303000"><b>,</b></font>\n                             <font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"300px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['CaptionPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'dialogBox'], ['title', 'ui.DialogBox'], ['section', 'panels'], ['doc', 'The ``ui.DialogBox`` class implements a panel that behaves like a dialog box.\n\nA dialog box has an optional caption, and a widget which is displayed as the main part of the dialog box.  The user can drag the dialog box around by clicking on the caption.\n\nThe DialogBox class makes use of stylesheet definitions; if these are not supplied, the dialog box will look very strange.  The following stylesheet definitions are used by the example shown below:\n\n<blockquote><pre>    .gwt-DialogBox {\n      border: 2px outset;\n      background-color: white;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-DialogBox .Caption {\n      background-color: #C3D9FF;\n      padding: 3px;\n      margin: 2px;\n      font-weight: bold;\n      cursor: default;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-DialogBox .Contents {\n        padding: 10px;\n    }</pre></blockquote>\n\nBecause the ``DialogBox`` class is derived from ``PopupPanel``, the user should be able to click outside the dialog box to close it.  However, because of a problem with Firefox 3, this does not work.  To get around this, the example shown below implements a "Close" button the user can click on.\n\nThis example shows usage of a PopupPanel\'s shadowed background &mdash; a glass. A glass also requires stylesheet definitions. By default, "gwt-PopupPanelGlass" class name is supposed to use, unless redefined. The following stylesheet definitions are used in the example below:\n\n<blockquote><pre>    .gwt-PopupPanelGlass {\n        background-color: #000;\n        opacity: 0.3;\n        filter: alpha(opacity=30);\n    }</pre></blockquote>\n\n '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>dialogBox.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">DialogBox</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">DialogBox</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Window</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">DialogBoxDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Show Dialog"</font><font color="#303000"><b>,</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"showDialog"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">showDialog</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">contents</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">StyleName</font><font color="#303000"><b>=</b></font><font color="#A0008A">"Contents"</font><font color="#303000"><b>,</b></font>\n                                 <font color="#000000">Spacing</font><font color="#303000"><b>=</b></font><font color="#FF2200">4</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">contents</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#600080">\'You can place any contents you like in a dialog box.\'</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">contents</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Close"</font><font color="#303000"><b>,</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onClose"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_dialog</font> <font color="#303000"><b>=</b></font> <font color="#000000">DialogBox</font><font color="#303000"><b>(</b></font><font color="#000000">glass</font><font color="#303000"><b>=</b></font><font color="#000000">True</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_dialog</font><font color="#303000"><b>.</b></font><font color="#000000">setHTML</font><font color="#303000"><b>(</b></font><font color="#600080">\'&lt;b&gt;Welcome to the dialog box&lt;/b&gt;\'</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_dialog</font><font color="#303000"><b>.</b></font><font color="#000000">setWidget</font><font color="#303000"><b>(</b></font><font color="#000000">contents</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">left</font> <font color="#303000"><b>=</b></font> <font color="#303000"><b>(</b></font><font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">getClientWidth</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font> <font color="#303000"><b>-</b></font> <font color="#FF2200">200</font><font color="#303000"><b>)</b></font> <font color="#303000"><b>/</b></font> <font color="#FF2200">2</font> <font color="#303000"><b>+</b></font> <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">getScrollLeft</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">top</font> <font color="#303000"><b>=</b></font> <font color="#303000"><b>(</b></font><font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">getClientHeight</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font> <font color="#303000"><b>-</b></font> <font color="#FF2200">100</font><font color="#303000"><b>)</b></font> <font color="#303000"><b>/</b></font> <font color="#FF2200">2</font> <font color="#303000"><b>+</b></font> <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">getScrollTop</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_dialog</font><font color="#303000"><b>.</b></font><font color="#000000">setPopupPosition</font><font color="#303000"><b>(</b></font><font color="#000000">left</font><font color="#303000"><b>,</b></font> <font color="#000000">top</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_dialog</font><font color="#303000"><b>.</b></font><font color="#000000">show</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onClose</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_dialog</font><font color="#303000"><b>.</b></font><font color="#000000">hide</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['DialogBoxDemo']()]]));
		demos['append']($p['dict']([['name', 'dockPanel'], ['title', 'ui.DockPanel'], ['section', 'panels'], ['doc', "The ``ui.DockPanel`` class divides the panel into five pieces, arranged into North, South, East, West and center pieces.  In general the outer pieces are smaller, with the centre holding the main part of the panel's contents, as shown below.\n\nYou can set the alignment and size for each widget within the DockPanel, by calling ``setCellHorizontalAlignment(widget, alignment)``, ``setCellVerticalAlignment(widget, alignment)``, ``setCellHeight(widget, height)`` and ``setCellWidth(widget, width)``.  You can also set the default horizontal and vertical alignment to use for new widgets by calling ``setHorizontalAlignment()`` and ``setVerticalAlignment()`` before the widget is added. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>dockPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">DockPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">DockPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Label</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Label</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HasAlignment</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">DockPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font> <font color="#303000"><b>=</b></font> <font color="#000000">DockPanel</font><font color="#303000"><b>(</b></font><font color="#000000">BorderWidth</font><font color="#303000"><b>=</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#000000">Padding</font><font color="#303000"><b>=</b></font><font color="#FF2200">8</font><font color="#303000"><b>,</b></font>\n                          <font color="#000000">HorizontalAlignment</font><font color="#303000"><b>=</b></font><font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_CENTER</font><font color="#303000"><b>,</b></font>\n                          <font color="#000000">VerticalAlignment</font><font color="#303000"><b>=</b></font><font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_MIDDLE</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">north</font>  <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"North"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">west</font>   <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"West"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">center</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Center"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">east</font>   <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"East"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">south</font>  <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"South"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">north</font><font color="#303000"><b>,</b></font>  <font color="#000000">DockPanel</font><font color="#303000"><b>.</b></font><font color="#000000">NORTH</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">west</font><font color="#303000"><b>,</b></font>   <font color="#000000">DockPanel</font><font color="#303000"><b>.</b></font><font color="#000000">WEST</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">center</font><font color="#303000"><b>,</b></font> <font color="#000000">DockPanel</font><font color="#303000"><b>.</b></font><font color="#000000">CENTER</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">east</font><font color="#303000"><b>,</b></font>   <font color="#000000">DockPanel</font><font color="#303000"><b>.</b></font><font color="#000000">EAST</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">south</font><font color="#303000"><b>,</b></font>  <font color="#000000">DockPanel</font><font color="#303000"><b>.</b></font><font color="#000000">SOUTH</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellHeight</font><font color="#303000"><b>(</b></font><font color="#000000">center</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"200px"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellWidth</font><font color="#303000"><b>(</b></font><font color="#000000">center</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"400px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['DockPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'flexTable'], ['title', 'ui.FlexTable'], ['section', 'panels'], ['doc', 'The ``ui.FlexTable`` class implements a table that can have different numbers of cells in each row, and single cells can span multiple rows and columns.\n\nEach FlexTable has a ``FlexCellFormatter`` which you can use to format the cells in the table.  The ``FlexCellFormatter`` has methods to set the row or column spans for a cell, as well as change the cell alignment, as shown below.\n\nNote that if you use row or column spanning, the cells on the rest of that row or column will be moved over.  This can cause some surprising results.  Imagine that you have a table like this:\n\n<blockquote><pre>    +---+---+---+\n    | A | B | C |\n    +---+---+---+\n    | D | E | F |\n    +---+---+---+</pre></blockquote>\n\nIf you set up Cell 0,0 to span two columns, like this:\n\n<blockquote><pre>    flexTable.getFlexCellFormatter().setColSpan(0, 0, 2)</pre></blockquote>\n\nThis will cause the table to end up looking like this:\n\n<blockquote><pre>    +-------+---+---+\n    |   A   | B | C |\n    +---+---+---+---+\n    | D | E | F |\n    +---+---+---+</pre></blockquote>\n\nyou might expect cell B to be above cell E, but to make this happen you need to place cell E at (1, 2) rather than (1, 1).\n\nEach FlexTable also has a ``RowFormatter`` which can be used to change style names, attributes, and the visibility of rows in the table. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>flexTable.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">FlexTable</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">FlexTable</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HasAlignment</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">FlexTableDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font> <font color="#303000"><b>=</b></font> <font color="#000000">FlexTable</font><font color="#303000"><b>(</b></font><font color="#000000">BorderWidth</font><font color="#303000"><b>=</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">cellFormatter</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">getFlexCellFormatter</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">rowFormatter</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">getRowFormatter</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setHTML</font><font color="#303000"><b>(</b></font><font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"&lt;b&gt;Mammals&lt;/b&gt;"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Cow"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Rat"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Dog"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">cellFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setColSpan</font><font color="#303000"><b>(</b></font><font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#FF2200">3</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">cellFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setHorizontalAlignment</font><font color="#303000"><b>(</b></font><font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_CENTER</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setWidget</font><font color="#303000"><b>(</b></font><font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Hide"</font><font color="#303000"><b>,</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"hideRows"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"1,1"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"2,1"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#FF2200">3</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"1,2"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#FF2200">3</font><font color="#303000"><b>,</b></font> <font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"2,2"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">cellFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setRowSpan</font><font color="#303000"><b>(</b></font><font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#FF2200">2</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">cellFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setVerticalAlignment</font><font color="#303000"><b>(</b></font><font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_MIDDLE</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">setWidget</font><font color="#303000"><b>(</b></font><font color="#FF2200">4</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Show"</font><font color="#303000"><b>,</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"showRows"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">cellFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setColSpan</font><font color="#303000"><b>(</b></font><font color="#FF2200">4</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#FF2200">3</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">rowFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setVisible</font><font color="#303000"><b>(</b></font><font color="#FF2200">4</font><font color="#303000"><b>,</b></font> <font color="#000000">False</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">hideRows</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">sender</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">rowFormatter</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">getRowFormatter</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">rowFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setVisible</font><font color="#303000"><b>(</b></font><font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#000000">False</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">rowFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setVisible</font><font color="#303000"><b>(</b></font><font color="#FF2200">3</font><font color="#303000"><b>,</b></font> <font color="#000000">False</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">rowFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setVisible</font><font color="#303000"><b>(</b></font><font color="#FF2200">4</font><font color="#303000"><b>,</b></font> <font color="#000000">True</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">showRows</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">sender</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">rowFormatter</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_table</font><font color="#303000"><b>.</b></font><font color="#000000">getRowFormatter</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">rowFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setVisible</font><font color="#303000"><b>(</b></font><font color="#FF2200">2</font><font color="#303000"><b>,</b></font> <font color="#000000">True</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">rowFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setVisible</font><font color="#303000"><b>(</b></font><font color="#FF2200">3</font><font color="#303000"><b>,</b></font> <font color="#000000">True</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">rowFormatter</font><font color="#303000"><b>.</b></font><font color="#000000">setVisible</font><font color="#303000"><b>(</b></font><font color="#FF2200">4</font><font color="#303000"><b>,</b></font> <font color="#000000">False</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['FlexTableDemo']()]]));
		demos['append']($p['dict']([['name', 'flowPanel'], ['title', 'ui.FlowPanel'], ['section', 'panels'], ['doc', 'The ``ui.FlowPanel`` is a panel that allows its contents to "flow" from left to right, and then from top to bottom, like words on a page.\n\nBecause of the way it works, only the width of a FlowPanel needs to be specified; it will automatically take up as much height as is needed to fit the panel\'s contents.\n\nUnfortunately, the implementation of the FlowPanel is actually quite limited, because of the way other widgets are typically implemented.  Many widgets are wrapped up in a ``<div>`` element, which is a block-level element that overrules the ``<span>`` element used by the FlowPanel, which is an inline element.  As a result, if you add a ``ui.Label`` to a FlowPanel, for example, it will still appear on a line by itself rather than flowing with the other elements.  Because of this, you may want to avoid using FlowPanel unless you are certain that the items you are adding will flow correctly. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>flowPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">FlowPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">FlowPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">FlowPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">flow</font> <font color="#303000"><b>=</b></font> <font color="#000000">FlowPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"400px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 1"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 2"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 3"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 4"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 5"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 6"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 7"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 8"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 9"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">flow</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 10"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">flow</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['FlowPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'formPanel'], ['title', 'ui.FormPanel'], ['section', 'panels'], ['doc', 'The ``ui.FormPanel`` class implements a traditional HTML form.\n\nAny ``TextBox``, ``PasswordTextBox``, ``TextArea``, ``RadioButton``, ``CheckBox``, ``ListBox``, ``FileUpload`` and ``Hidden`` fields contained within the form panel will be sent to the server when the form is submitted.\n\nThe example below calls Google to perform a search using the query entered by the user into the text field.  The results are shown in a separate Frame. Alternatively, you can call ``Form.addFormHandler(handler)`` to manually process the results of posting the form.  When this is done, ``handler.onSubmit(event)`` will be called when the user is about to submit the form; call ``event.setCancelled(True)`` to cancel the event within this method. Also, ``handler.onSubmitComplete(event)`` will be called when the results of submitting the form are returned back to the browser.  Call ``event.getResults()`` to retrieve the (plain-text) value returned by the server.\n\nNote that if you use a ``ui.FileUpload`` widget in your form, you must set the form encoding and method like this:\n\n<blockquote><pre>        self.form.setEncoding(FormPanel.ENCODING_MULTIPART)\n        self.form.setMethod(FormPanel.METHOD_POST)</pre></blockquote>\n\nThis will ensure that the form is submitted in a way that allows files to be uploaded.\n\nAlso, note that FormPanel is a subclass of SimplePanel.  This means that if you want a form with more than one widget, you will need to add a subclass of  ComplexPanel as the child widget of the FormPanel.  An instance of  VerticalPanel is used in this example. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>formPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">FormPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">FormPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HorizontalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HorizontalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">TextBox</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">TextBox</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Label</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Label</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">FormPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font> <font color="#303000"><b>=</b></font> <font color="#000000">FormPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Action</font><font color="#303000"><b>=</b></font><font color="#A0008A">"http://google.com/search"</font><font color="#303000"><b>,</b></font>\n                              <font color="#000000">Target</font><font color="#303000"><b>=</b></font><font color="#A0008A">"results"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Spacing</font><font color="#303000"><b>=</b></font><font color="#FF2200">5</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">HorizontalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Spacing</font><font color="#303000"><b>=</b></font><font color="#FF2200">5</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Search for:"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">TextBox</font><font color="#303000"><b>(</b></font><font color="#000000">Name</font><font color="#303000"><b>=</b></font><font color="#A0008A">"q"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Submit"</font><font color="#303000"><b>,</b></font> <font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">hPanel</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">results</font> <font color="#303000"><b>=</b></font> <font color="#000000">NamedFrame</font><font color="#303000"><b>(</b></font><font color="#A0008A">"results"</font><font color="#303000"><b>,</b></font>\n                             <font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>,</b></font>\n                             <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"200px"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">results</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">vPanel</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onClick</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">submit</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['FormPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'grid'], ['title', 'ui.Grid'], ['section', 'panels'], ['doc', 'The ``ui.Grid`` class implements a panel which lays its contents out in a grid-like fashion, very like an HTML table.\n\nYou can use the ``setHTML(row, col, html)`` method to set the HTML-formatted text to be displayed at the given row and column within the grid.  Similarly, you can call ``setText(row, col, text)`` to display plain (unformatted) text at the given row and column. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>grid.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Grid</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Grid</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">GridDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">grid</font> <font color="#303000"><b>=</b></font> <font color="#000000">Grid</font><font color="#303000"><b>(</b></font><font color="#FF2200">5</font><font color="#303000"><b>,</b></font> <font color="#FF2200">5</font><font color="#303000"><b>,</b></font>\n                    <font color="#000000">BorderWidth</font><font color="#303000"><b>=</b></font><font color="#FF2200">2</font><font color="#303000"><b>,</b></font>\n                    <font color="#000000">CellPadding</font><font color="#303000"><b>=</b></font><font color="#FF2200">4</font><font color="#303000"><b>,</b></font>\n                    <font color="#000000">CellSpacing</font><font color="#303000"><b>=</b></font><font color="#FF2200">1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">grid</font><font color="#303000"><b>.</b></font><font color="#000000">setHTML</font><font color="#303000"><b>(</b></font><font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#FF2200">0</font><font color="#303000"><b>,</b></font> <font color="#600080">\'&lt;b&gt;Hello, World!&lt;/b&gt;\'</font><font color="#303000"><b>)</b></font>\n\n        <font color="#0000AF"><b>for</b></font> <font color="#000000">row</font> <font color="#0000AF"><b>in</b></font> <font color="#000000">range</font><font color="#303000"><b>(</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#FF2200">5</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n            <font color="#0000AF"><b>for</b></font> <font color="#000000">col</font> <font color="#0000AF"><b>in</b></font> <font color="#000000">range</font><font color="#303000"><b>(</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font> <font color="#FF2200">5</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n                <font color="#000000">grid</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#000000">row</font><font color="#303000"><b>,</b></font> <font color="#000000">col</font><font color="#303000"><b>,</b></font> <font color="#000000">str</font><font color="#303000"><b>(</b></font><font color="#000000">row</font><font color="#303000"><b>)</b></font> <font color="#303000"><b>+</b></font> <font color="#A0008A">"*"</font> <font color="#303000"><b>+</b></font> <font color="#000000">str</font><font color="#303000"><b>(</b></font><font color="#000000">col</font><font color="#303000"><b>)</b></font> <font color="#303000"><b>+</b></font> <font color="#A0008A">" = "</font> <font color="#303000"><b>+</b></font> <font color="#000000">str</font><font color="#303000"><b>(</b></font><font color="#000000">row</font><font color="#303000"><b>*</b></font><font color="#000000">col</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">grid</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['GridDemo']()]]));
		demos['append']($p['dict']([['name', 'horizontalPanel'], ['title', 'ui.HorizontalPanel'], ['section', 'panels'], ['doc', "The ``ui.HorizontalPanel`` class is a panel that lays out its contents from left to right.\n\nIt is often useful to call ``setSpacing(spacing)`` to add space between each of the panel's widgets.  You can also call ``setHorizontalAlignment(alignment)`` and ``setVerticalAlignment(alignment)`` before adding widgets to control how those widgets are aligned within the available space.  Alternatively, you can call ``setCellHorizontalAlignment(widget, alignment)`` and ``setCellVerticalAlignment(widget, alignment)`` to change the alignment of a single widget after it has been added.\n\nNote that if you want to have different widgets within the panel take up different amounts of space, don't call ``widget.setWidth(width)`` or ``widget.setHeight(height)`` as these are ignored by the panel.  Instead, call ``panel.setCellWidth(widget, width)`` and ``panel.setCellHeight(widget, height)``. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>horizontalPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HorizontalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HorizontalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Label</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Label</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HasAlignment</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">HorizontalPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font> <font color="#303000"><b>=</b></font> <font color="#000000">HorizontalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">BorderWidth</font><font color="#303000"><b>=</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font>\n                                <font color="#000000">HorizontalAlignment</font><font color="#303000"><b>=</b></font><font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_CENTER</font><font color="#303000"><b>,</b></font>\n                                <font color="#000000">VerticalAlignment</font><font color="#303000"><b>=</b></font><font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_MIDDLE</font><font color="#303000"><b>,</b></font>\n                                <font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>,</b></font>\n                                <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"200px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">part1</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Part 1"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">part2</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Part 2"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">part3</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Part 3"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">part4</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Part 4"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">part1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">part2</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">part3</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">part4</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellWidth</font><font color="#303000"><b>(</b></font><font color="#000000">part1</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"10%"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellWidth</font><font color="#303000"><b>(</b></font><font color="#000000">part2</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"70%"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellWidth</font><font color="#303000"><b>(</b></font><font color="#000000">part3</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"10%"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellWidth</font><font color="#303000"><b>(</b></font><font color="#000000">part4</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"10%"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellVerticalAlignment</font><font color="#303000"><b>(</b></font><font color="#000000">part3</font><font color="#303000"><b>,</b></font> <font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_BOTTOM</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['HorizontalPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'htmlPanel'], ['title', 'ui.HtmlPanel'], ['section', 'panels'], ['doc', "The ``ui.HTMLPanel`` class allows you to include HTML within your application, and embed other widgets inside the panel's contents by wrapping them inside a ``&lt;span&gt;`` tag. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>htmlPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTMLPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTMLPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Label</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Label</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">HtmlPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">id1</font> <font color="#303000"><b>=</b></font> <font color="#000000">HTMLPanel</font><font color="#303000"><b>.</b></font><font color="#000000">createUniqueId</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">id2</font> <font color="#303000"><b>=</b></font> <font color="#000000">HTMLPanel</font><font color="#303000"><b>.</b></font><font color="#000000">createUniqueId</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font> <font color="#303000"><b>=</b></font> <font color="#000000">HTMLPanel</font><font color="#303000"><b>(</b></font><font color="#600080">\'&lt;b&gt;This is some HTML&lt;/b&gt;&lt;br&gt;\'</font> <font color="#303000"><b>+</b></font>\n                          <font color="#600080">\'First widget:&lt;span id="\'</font> <font color="#303000"><b>+</b></font> <font color="#000000">id1</font> <font color="#303000"><b>+</b></font> <font color="#600080">\'"&gt;&lt;/span&gt;&lt;br&gt;\'</font> <font color="#303000"><b>+</b></font>\n                          <font color="#600080">\'Second widget:&lt;span id="\'</font> <font color="#303000"><b>+</b></font> <font color="#000000">id2</font> <font color="#303000"><b>+</b></font> <font color="#600080">\'"&gt;&lt;/span&gt;&lt;br&gt;\'</font> <font color="#303000"><b>+</b></font>\n                          <font color="#600080">\'More &lt;i&gt;HTML&lt;/i&gt;\'</font><font color="#303000"><b>,</b></font>\n                          <font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"150px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Hi there"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#000000">id1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"This label intentionally left blank"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#000000">id2</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['HtmlPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'popupPanel'], ['title', 'ui.PopupPanel'], ['section', 'panels'], ['doc', "The ``ui.PopupPanel`` class implements a panel that pops up in the browser window to display some contents.  When the user clicks outside the popup, it disappears again.\n\nThe PopupPanel requires stylesheet definitions in order to work properly.  The following stylesheet definitions were used in the example below:\n\n<blockquote><pre>    .showcase-popup {\n        background-color: white;\n        border: 1px solid #87B3FF;\n        padding: 4px;\n    }</pre></blockquote>\n\nAlso, PopupPanel implements an optional &ldquo;glass&rdquo; &mdash; a shadowed background that overlays everything under popup. See DialogBox demo to look at the glass usage example.\n\nNote that the popup panel is supposed to close when the user clicks outside of it.  However, this doesn't work under Firefox 3, so the code below adds a click handler so the user can click on the popup itself to close it. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>popupPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">PopupPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">PopupPanel</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">PopupPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Spacing</font><font color="#303000"><b>=</b></font><font color="#FF2200">4</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_btn</font> <font color="#303000"><b>=</b></font> <font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Click Me"</font><font color="#303000"><b>,</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"showPopup"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Click on the button below to display the popup."</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_btn</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">vPanel</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">showPopup</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">contents</font> <font color="#303000"><b>=</b></font> <font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Hello, World!"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">contents</font><font color="#303000"><b>.</b></font><font color="#000000">addClickListener</font><font color="#303000"><b>(</b></font><font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onClick"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_popup</font> <font color="#303000"><b>=</b></font> <font color="#000000">PopupPanel</font><font color="#303000"><b>(</b></font><font color="#000000">autoHide</font><font color="#303000"><b>=</b></font><font color="#000000">True</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_popup</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">contents</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_popup</font><font color="#303000"><b>.</b></font><font color="#000000">setStyleName</font><font color="#303000"><b>(</b></font><font color="#A0008A">"showcase-popup"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">left</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_btn</font><font color="#303000"><b>.</b></font><font color="#000000">getAbsoluteLeft</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font> <font color="#303000"><b>+</b></font> <font color="#FF2200">10</font>\n        <font color="#000000">top</font>  <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_btn</font><font color="#303000"><b>.</b></font><font color="#000000">getAbsoluteTop</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font> <font color="#303000"><b>+</b></font> <font color="#FF2200">10</font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_popup</font><font color="#303000"><b>.</b></font><font color="#000000">setPopupPosition</font><font color="#303000"><b>(</b></font><font color="#000000">left</font><font color="#303000"><b>,</b></font> <font color="#000000">top</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_popup</font><font color="#303000"><b>.</b></font><font color="#000000">show</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onClick</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">sender</font><font color="#303000"><b>=</b></font><font color="#000000">None</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_popup</font><font color="#303000"><b>.</b></font><font color="#000000">hide</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['PopupPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'scrollPanel'], ['title', 'ui.ScrollPanel'], ['section', 'panels'], ['doc', 'The ``ui.ScrollPanel`` class implements a panel that scrolls its contents.\n\nIf you want the scroll bars to be always visible, call ``setAlwaysShowScrollBars(True)``.  You can also change the current scrolling position programmatically by calling ``setScrollPosition(vPos)`` and ``setScrollHorizontalPosition(hPos)`` to change the horizontal and vertical scrolling position, respectively.\n\nIt is in the nature of a scrollpanel that if you give it a relative size, it will not work. This makes it tricky to use it where you want it to fill out a parent widget of unknown size. To avoid this problem you will have to wrap its content in a SimplePanel and then use css/oveflow to control its behaviour as shown in the second example: "container" represents the parent widget that could be any absolute or relative size and the superscrollpanel will fill it out and apply vertical scrollbars if needed. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>scrollPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">ScrollPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">ScrollPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">ScrollPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vert</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vert</font><font color="#303000"><b>.</b></font><font color="#000000">setSpacing</font><font color="#303000"><b>(</b></font><font color="#A0008A">"10px"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">vert</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font> <font color="#303000"><b>=</b></font> <font color="#000000">ScrollPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Size</font><font color="#303000"><b>=</b></font><font color="#303000"><b>(</b></font><font color="#A0008A">"300px"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"100px"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">contents</font> <font color="#303000"><b>=</b></font> <font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#A0008A">"&lt;b&gt;Tao Te Ching, Chapter One&lt;/b&gt;&lt;p&gt;"</font> <font color="#303000"><b>+</b></font>\n                        <font color="#A0008A">"The Way that can be told of is not an unvarying "</font> <font color="#303000"><b>+</b></font>\n                        <font color="#A0008A">"way;&lt;p&gt;The names that can be named are not "</font> <font color="#303000"><b>+</b></font>\n                        <font color="#A0008A">"unvarying names.&lt;p&gt;It was from the Nameless that "</font> <font color="#303000"><b>+</b></font>\n                        <font color="#A0008A">"Heaven and Earth sprang;&lt;p&gt;The named is but the "</font> <font color="#303000"><b>+</b></font>\n                        <font color="#A0008A">"mother that rears the ten thousand creatures, "</font> <font color="#303000"><b>+</b></font>\n                        <font color="#A0008A">"each after its kind."</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">contents</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vert</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">container</font> <font color="#303000"><b>=</b></font> <font color="#000000">SimplePanel</font><font color="#303000"><b>(</b></font><font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"400px"</font><font color="#303000"><b>,</b></font> <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"200px"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">contents2</font> <font color="#303000"><b>=</b></font> <font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#FF2200">50</font><font color="#303000"><b>*</b></font><font color="#A0008A">"Dont forget to grab the css for SuperScrollPanel in Showcase.css! "</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel2</font> <font color="#303000"><b>=</b></font> <font color="#000000">SuperScrollPanel</font><font color="#303000"><b>(</b></font><font color="#000000">contents2</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">container</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel2</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vert</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">container</font><font color="#303000"><b>)</b></font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">SuperScrollPanel</font><font color="#303000"><b>(</b></font><font color="#000000">ScrollPanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">panel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">ScrollPanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">setHeight</font><font color="#303000"><b>(</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">setStyleName</font><font color="#303000"><b>(</b></font><font color="#A0008A">"SuperScrollPanelOuter"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">inner</font> <font color="#303000"><b>=</b></font> <font color="#000000">SimplePanel</font><font color="#303000"><b>(</b></font><font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">inner</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">inner</font><font color="#303000"><b>.</b></font><font color="#000000">setStyleName</font><font color="#303000"><b>(</b></font><font color="#A0008A">"SuperScrollPanelInner"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">inner</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['ScrollPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'stackPanel'], ['title', 'ui.StackPanel'], ['section', 'panels'], ['doc', 'The ``ui.StackPanel`` class displays a "stack" of sub-panels where only one sub-panel is open at a time.\n\nThe StackPanel relies heavily on stylesheet definitions to make it look good; the default look of a StackPanel without any styles defined is almost unusable. The following stylesheet definitions were used for the example given below:\n\n<blockquote><pre>    .gwt-StackPanel {\n        border: 5px solid #999999;\n        background-color: #CCCCCC;\n        border-collapse: collapse;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-StackPanel .gwt-StackPanelItem {\n        border: 2px solid #000099;\n        background-color: #FFFFCC;\n        cursor: pointer;\n        font-weight: normal;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-StackPanel .gwt-StackPanelItem-selected {\n        border: 3px solid #FF0000;\n        background-color: #FFFF66;\n        cursor: default;\n        font-weight: bold;\n    }</pre></blockquote>\n\nYou can programatically change the currently-open panel by calling the ``setStackVisible(index, visible)`` method.  To find out which panel is currently open, call ``getSelectedIndex()``.  To retrieve the widget at a given index, call ``getWidget(index)``.  Finally, you can change the label for a stack item by calling ``setStackText(index, text)``. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>stackPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">StackPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">StackPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">StackPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">stack</font> <font color="#303000"><b>=</b></font> <font color="#000000">StackPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>,</b></font> <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"300px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">stack</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#600080">\'The quick&lt;br&gt;brown fox&lt;br&gt;jumps over the&lt;br&gt;lazy dog.\'</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font>\n                  <font color="#A0008A">"Stack 1"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">stack</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#600080">\'The&lt;br&gt;early&lt;br&gt;bird&lt;br&gt;catches&lt;br&gt;the&lt;br&gt;worm.\'</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font>\n                  <font color="#A0008A">"Stack 2"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">stack</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#600080">\'The smart money&lt;br&gt;is on the&lt;br&gt;black horse.\'</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font>\n                  <font color="#A0008A">"Stack 3"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">stack</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['StackPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'tabPanel'], ['title', 'ui.TabPanel'], ['section', 'panels'], ['doc', 'The ``ui.TabPanel`` class implements a tabbed window, where clicking on a tab causes the associated contents to be displayed.\n\nThe TabPanel relies heavily on cascading stylesheet definitions to operate. The following stylesheet definitions are used by the example shown below:\n\n<blockquote><pre>    .gwt-TabPanel {\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-TabPanelBottom {\n      border: 1px solid #87B3FF;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-TabBar {\n      background-color: #C3D9FF;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-TabBar .gwt-TabBarFirst {\n      height: 100%;\n      padding-left: 3px;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-TabBar .gwt-TabBarRest {\n      padding-right: 3px;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-TabBar .gwt-TabBarItem {\n      border-top: 1px solid #C3D9FF;\n      border-bottom: 1px solid #C3D9FF;\n      padding: 2px;\n      cursor: pointer;\n    }</pre></blockquote>\n\n<blockquote><pre>    .gwt-TabBar .gwt-TabBarItem-selected {\n      font-weight: bold;\n      background-color: #E8EEF7;\n      border-top: 1px solid #87B3FF;\n      border-left: 1px solid #87B3FF;\n      border-right: 1px solid #87B3FF;\n      border-bottom: 1px solid #E8EEF7;\n      padding: 2px;\n      cursor: default;\n    }</pre></blockquote>\n\n'], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>tabPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">TabPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">TabPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">TabPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">tabs</font> <font color="#303000"><b>=</b></font> <font color="#000000">TabPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>,</b></font> <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"250px"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">tabs</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#A0008A">"The quick brown fox jumps over the lazy dog."</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Tab 1"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">tabs</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#A0008A">"The early bird catches the worm."</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Tab 2"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">tabs</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#A0008A">"The smart money is on the black horse."</font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Tab 3"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">tabs</font><font color="#303000"><b>.</b></font><font color="#000000">selectTab</font><font color="#303000"><b>(</b></font><font color="#FF2200">0</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">tabs</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['TabPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'verticalPanel'], ['title', 'ui.VerticalPanel'], ['section', 'panels'], ['doc', "The ``ui.VerticalPanel`` class is a panel that lays out its contents from top to bottom.\n\nIt is often useful to call ``setSpacing(spacing)`` to add space between each of the panel's widgets.  You can also call ``setHorizontalAlignment(alignment)`` and ``setVerticalAlignment(alignment)`` before adding widgets to control how those widgets are aligned within the available space.  Alternatively, you can call ``setCellHorizontalAlignment(widget, alignment)`` and ``setCellVerticalAlignment(widget, alignment)`` to change the alignment of a single widget after it has been added.\n\nNote that if you want to have different widgets within the panel take up different amounts of space, don't call ``widget.setWidth(width)`` or ``widget.setHeight(height)`` as these are ignored by the panel.  Instead, call ``panel.setCellWidth(widget, width)`` and ``panel.setCellHeight(widget, height)``. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>verticalPanel.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Label</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Label</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HasAlignment</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">VerticalPanelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">BorderWidth</font><font color="#303000"><b>=</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font>\n                              <font color="#000000">HorizontalAlignment</font><font color="#303000"><b>=</b></font><font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_CENTER</font><font color="#303000"><b>,</b></font>\n                              <font color="#000000">VerticalAlignment</font><font color="#303000"><b>=</b></font><font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_MIDDLE</font><font color="#303000"><b>,</b></font>\n                              <font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"50%"</font><font color="#303000"><b>,</b></font>\n                              <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"300px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">part1</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Part 1"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">part2</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Part 2"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">part3</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Part 3"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">part4</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Part 4"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">part1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">part2</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">part3</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">part4</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellHeight</font><font color="#303000"><b>(</b></font><font color="#000000">part1</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"10%"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellHeight</font><font color="#303000"><b>(</b></font><font color="#000000">part2</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"70%"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellHeight</font><font color="#303000"><b>(</b></font><font color="#000000">part3</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"10%"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellHeight</font><font color="#303000"><b>(</b></font><font color="#000000">part4</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"10%"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">setCellHorizontalAlignment</font><font color="#303000"><b>(</b></font><font color="#000000">part3</font><font color="#303000"><b>,</b></font> <font color="#000000">HasAlignment</font><font color="#303000"><b>.</b></font><font color="#000000">ALIGN_RIGHT</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['VerticalPanelDemo']()]]));
		demos['append']($p['dict']([['name', 'button'], ['title', 'ui.Button'], ['section', 'widgets'], ['doc', 'The ``ui.Button`` class is used to show a button.  When the user clicks on the button, the given listener function is called.\n\nNote that you can use the ``getattr()`` function to specify which method you want called when the button is clicked.  This is the best way to write button click handlers if you have more than one button on your panel.  If you have only one button, you can use ``btn = Button("...", self)`` instead, and define a method called ``onClick()`` to respond to the button click.\n\nAnother useful method is ``Button.setEnabled(enabled)``, which enables or disables the button depending on the value of its parameter. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>button.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Window</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">ButtonDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">btn</font> <font color="#303000"><b>=</b></font> <font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Click Me"</font><font color="#303000"><b>,</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onButtonClick"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">btn</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onButtonClick</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Ouch!"</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['ButtonDemo']()]]));
		demos['append']($p['dict']([['name', 'checkBox'], ['title', 'ui.CheckBox'], ['section', 'widgets'], ['doc', "The ``ui.CheckBox`` class is used to show a standard checkbox.  When the user clicks on the checkbox, the checkbox's state is toggled.\n\nThe ``setChecked(checked)`` method checks or unchecks the checkbox depending on the value of the parameter.  To get the current value of the checkbox, call ``isChecked()``.\n\nYou can enable or disable a checkbox using ``setEnabled(enabled)``.  You can also call ``addClickListener()`` to respond when the user clicks on the checkbox, as shown below.  This can be useful when building complicated input screens where checking a checkbox causes other input fields to be enabled. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>checkBox.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">CheckBox</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">CheckBox</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Window</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">CheckBoxDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">box</font> <font color="#303000"><b>=</b></font> <font color="#000000">CheckBox</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Print Results?"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">box</font><font color="#303000"><b>.</b></font><font color="#000000">addClickListener</font><font color="#303000"><b>(</b></font><font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onClick"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">box</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onClick</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">sender</font><font color="#303000"><b>=</b></font><font color="#000000">None</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"checkbox status: "</font> <font color="#303000"><b>+</b></font> <font color="#000000">str</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">box</font><font color="#303000"><b>.</b></font><font color="#000000">isChecked</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['CheckBoxDemo']()]]));
		demos['append']($p['dict']([['name', 'fileUpload'], ['title', 'ui.FileUpload'], ['section', 'widgets'], ['doc', "The ``ui.FileUpload`` class implements a file uploader widget.\n\nThe FileUpload widget must be inside a ``ui.FormPanel`` which is used to submit the HTML form to the server.  Note that you must set the form encoding and method like this:\n\n<blockquote><pre>        self.form.setEncoding(FormPanel.ENCODING_MULTIPART)\n        self.form.setMethod(FormPanel.METHOD_POST)</pre></blockquote>\n\nThis will ensure that the form is submitted in a way that allows files to be uploaded.\n\nThe example below doesn't really work, as there is no suitable server at ``nonexistent.com``.  However, it does show how a file upload widget could be used within a FormPanel. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>fileUpload.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">FormPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">FormPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HorizontalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HorizontalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">FileUpload</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">FileUpload</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Label</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Label</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">FileUploadDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font> <font color="#303000"><b>=</b></font> <font color="#000000">FormPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">setEncoding</font><font color="#303000"><b>(</b></font><font color="#000000">FormPanel</font><font color="#303000"><b>.</b></font><font color="#000000">ENCODING_MULTIPART</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">setMethod</font><font color="#303000"><b>(</b></font><font color="#000000">FormPanel</font><font color="#303000"><b>.</b></font><font color="#000000">METHOD_POST</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">setAction</font><font color="#303000"><b>(</b></font><font color="#A0008A">"http://nonexistent.com"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">setTarget</font><font color="#303000"><b>(</b></font><font color="#A0008A">"results"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">hPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">HorizontalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">setSpacing</font><font color="#303000"><b>(</b></font><font color="#FF2200">5</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Upload file:"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">field</font> <font color="#303000"><b>=</b></font> <font color="#000000">FileUpload</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">field</font><font color="#303000"><b>.</b></font><font color="#000000">setName</font><font color="#303000"><b>(</b></font><font color="#A0008A">"file"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">field</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Submit"</font><font color="#303000"><b>,</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onBtnClick"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">hPanel</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">results</font> <font color="#303000"><b>=</b></font> <font color="#000000">NamedFrame</font><font color="#303000"><b>(</b></font><font color="#A0008A">"results"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">results</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">vPanel</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onBtnClick</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">submit</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['FileUploadDemo']()]]));
		demos['append']($p['dict']([['name', 'frame'], ['title', 'ui.Frame'], ['section', 'widgets'], ['doc', 'The ``ui.Frame`` class is used to embed a separate HTML page within your application.\n\nIf you pass a URL when the Frame is created, that URL will be used immediately. Alternatively, you can call the ``Frame.setUrl()`` method to change the URL at any time.  You can also call ``Frame.getUrl()`` to retrieve the current URL for this frame. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>frame.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Frame</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Frame</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">FrameDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">frame</font> <font color="#303000"><b>=</b></font> <font color="#000000">Frame</font><font color="#303000"><b>(</b></font><font color="#A0008A">"http://google.com"</font><font color="#303000"><b>,</b></font>\n                      <font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>,</b></font>\n                      <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"200px"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">frame</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['FrameDemo']()]]));
		demos['append']($p['dict']([['name', 'hidden'], ['title', 'ui.Hidden'], ['section', 'widgets'], ['doc', 'The ``ui.Hidden`` class represents a hidden form field.\n\nThis is really only useful when the hidden field is part of a ``ui.FormPanel``. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>hidden.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">FormPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">FormPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Hidden</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Hidden</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Button</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Button</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">NamedFrame</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">NamedFrame</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">HiddenDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font> <font color="#303000"><b>=</b></font> <font color="#000000">FormPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">setAction</font><font color="#303000"><b>(</b></font><font color="#A0008A">"http://google.com/search"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">setTarget</font><font color="#303000"><b>(</b></font><font color="#A0008A">"results"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Hidden</font><font color="#303000"><b>(</b></font><font color="#A0008A">"q"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"python pyjamas"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Button</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Search"</font><font color="#303000"><b>,</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onBtnClick"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">results</font> <font color="#303000"><b>=</b></font> <font color="#000000">NamedFrame</font><font color="#303000"><b>(</b></font><font color="#A0008A">"results"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">results</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onBtnClick</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">form</font><font color="#303000"><b>.</b></font><font color="#000000">submit</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['HiddenDemo']()]]));
		demos['append']($p['dict']([['name', 'html'], ['title', 'ui.Html'], ['section', 'widgets'], ['doc', 'The ``ui.HTML`` class displays HTML-formatted text.  To display unformatted text, use ``ui.Label``. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>html.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">HtmlDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">html</font> <font color="#303000"><b>=</b></font> <font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Hello, &lt;b&gt;&lt;i&gt;World!&lt;/i&gt;&lt;/b&gt;"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">html</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['HtmlDemo']()]]));
		demos['append']($p['dict']([['name', 'hyperlink'], ['title', 'ui.Hyperlink'], ['section', 'widgets'], ['doc', 'The ``ui.Hyperlink`` class acts as an "internal" hyperlink to a particular state of the application.  These states are stored in the application\'s history, allowing for the use of the Back and Next buttons in the browser to move between application states.\n\nThe ``ui.Hyperlink`` class only makes sense in an application which keeps track of state using the ``History`` module.  When the user clicks on a hyperlink, the application changes state by calling ``History.newItem(newState)``.  The application then uses a history listener function to respond to the change in state in whatever way makes sense. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>hyperlink.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HorizontalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HorizontalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Hyperlink</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Hyperlink</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Label</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Label</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">History</font>\n\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">HyperlinkDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">History</font><font color="#303000"><b>.</b></font><font color="#000000">addHistoryListener</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">stateDisplay</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">stateDisplay</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">hPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">HorizontalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Spacing</font><font color="#303000"><b>=</b></font><font color="#FF2200">5</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Hyperlink</font><font color="#303000"><b>(</b></font><font color="#A0008A">"State 1"</font><font color="#303000"><b>,</b></font> <font color="#000000">False</font><font color="#303000"><b>,</b></font> <font color="#000000">TargetHistoryToken</font><font color="#303000"><b>=</b></font><font color="#A0008A">"state number 1"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">Hyperlink</font><font color="#303000"><b>(</b></font><font color="#A0008A">"State 2"</font><font color="#303000"><b>,</b></font> <font color="#000000">False</font><font color="#303000"><b>,</b></font> <font color="#000000">TargetHistoryToken</font><font color="#303000"><b>=</b></font><font color="#A0008A">"state number 2"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">hPanel</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">vPanel</font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onHistoryChanged</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">state</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">stateDisplay</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#000000">state</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['HyperlinkDemo']()]]));
		demos['append']($p['dict']([['name', 'image'], ['title', 'ui.Image'], ['section', 'widgets'], ['doc', 'The ``ui.Image`` class is used to display an image.\n\nThe ``Image`` class can display any image that is specified by a URL.  This can be an image stored somewhere on the internet, or alternatively you can store an image in the "public" directory within your application\'s source folder, and then access it using a relative URL, as shown below.\n\nIn this example, the image file named "myImage.jpg" is stored inside the "images" sub-directory, which is in the "public" directory within the application\'s main source directory.\n\nAs well as passing the image URL to the initialiser, you can call ``setURL()`` to change the image being displayed at any time.  You can also call ``addClickListener()`` to add a listener function to be called when the user clicks on the image. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>image.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Image</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Image</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Window</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">ImageDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#007F00"># We display the "myImage.jpg" file, stored in the "public/images"</font>\n        <font color="#007F00"># directory, where "public" is in the application\'s source directory.</font>\n\n        <font color="#000000">img</font> <font color="#303000"><b>=</b></font> <font color="#000000">Image</font><font color="#303000"><b>(</b></font><font color="#A0008A">"images/myImage.jpg"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">img</font><font color="#303000"><b>.</b></font><font color="#000000">addClickListener</font><font color="#303000"><b>(</b></font><font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onImageClicked"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">img</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onImageClicked</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">sender</font><font color="#303000"><b>=</b></font><font color="#000000">None</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Stop that!"</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['ImageDemo']()]]));
		demos['append']($p['dict']([['name', 'label'], ['title', 'ui.Label'], ['section', 'widgets'], ['doc', 'The ``ui.Label`` class is used to display unformatted text.  Unlike the ``ui.HTML`` class, it does not interpret HTML format codes.  If you pass False as the second parameter when creating your label, word wrapping will be disabled, forcing all the text to be on one line. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>label.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Label</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Label</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">LabelDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">label</font> <font color="#303000"><b>=</b></font> <font color="#000000">Label</font><font color="#303000"><b>(</b></font><font color="#A0008A">"This is a label"</font><font color="#303000"><b>,</b></font> <font color="#000000">wordWrap</font><font color="#303000"><b>=</b></font><font color="#000000">False</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">label</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['LabelDemo']()]]));
		demos['append']($p['dict']([['name', 'listBox'], ['title', 'ui.ListBox'], ['section', 'widgets'], ['doc', 'The ``ui.ListBox`` class allows the user to select one or more items from a list.  There are two variations of the ListBox: a normal list of items the user can click on, and a dropdown menu of items.  Both variations are shown in the example below.\n\nYou add items to a list by calling ``ListBox.addItem()``.  This can take the label to display, and also an optional value to associate with that item in the list.  ``ListBox.getSelectedIndex()`` returns the index of the currently selected item, or -1 if nothing is selected.  ``ListBox.getItemText(n)`` returns the text for the given item in the list, while ``ListBox.getValue(n)`` returns the value associated with the given list item.  To detect when the user selects something from a ListBox, call ``addChangeLister()``.  And finally, ``ListBox.clear()`` clears the current contents of the ListBox. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>listBox.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HorizontalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HorizontalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">ListBox</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">ListBox</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Window</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">ListBoxDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">hPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">HorizontalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">setSpacing</font><font color="#303000"><b>(</b></font><font color="#FF2200">10</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font> <font color="#303000"><b>=</b></font> <font color="#000000">ListBox</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font><font color="#303000"><b>.</b></font><font color="#000000">setVisibleItemCount</font><font color="#303000"><b>(</b></font><font color="#FF2200">10</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 1"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 2"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 3"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font><font color="#303000"><b>.</b></font><font color="#000000">addChangeListener</font><font color="#303000"><b>(</b></font><font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onList1ItemSelected"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font> <font color="#303000"><b>=</b></font> <font color="#000000">ListBox</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font><font color="#303000"><b>.</b></font><font color="#000000">setVisibleItemCount</font><font color="#303000"><b>(</b></font><font color="#FF2200">1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item A"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item B"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item C"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font><font color="#303000"><b>.</b></font><font color="#000000">addChangeListener</font><font color="#303000"><b>(</b></font><font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onList2ItemSelected"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">hPanel</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onList1ItemSelected</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">item</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font><font color="#303000"><b>.</b></font><font color="#000000">getItemText</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list1</font><font color="#303000"><b>.</b></font><font color="#000000">getSelectedIndex</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"You selected "</font> <font color="#303000"><b>+</b></font> <font color="#000000">item</font> <font color="#303000"><b>+</b></font> <font color="#A0008A">" from list 1"</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onList2ItemSelected</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">item</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font><font color="#303000"><b>.</b></font><font color="#000000">getItemText</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">list2</font><font color="#303000"><b>.</b></font><font color="#000000">getSelectedIndex</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"You selected "</font> <font color="#303000"><b>+</b></font> <font color="#000000">item</font> <font color="#303000"><b>+</b></font> <font color="#A0008A">" from list 2"</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['ListBoxDemo']()]]));
		demos['append']($p['dict']([['name', 'menubar'], ['title', 'ui.Menubar'], ['section', 'widgets'], ['doc', "The ``ui.MenuBar`` and ``ui.MenuItem`` classes allow you to define menu bars in your application.\n\nThere are several important things to be aware of when adding menus to your application:\n\n<ul><li>You have to use a stylesheet to define the look of your menu.  The default    style is terrible, as it makes the menu unusable.  The following stylesheet    entries were used for the example code below:</li></ul>\n\n<blockquote><pre>        .gwt-MenuBar {\n          background-color: #C3D9FF;\n          border: 1px solid #87B3FF;\n          cursor: default;\n        }</pre></blockquote>\n\n<blockquote><pre>        .gwt-MenuBar .gwt-MenuItem {\n          padding: 1px 4px 1px 4px;\n          font-size: smaller;\n          cursor: default;\n        }</pre></blockquote>\n\n<blockquote><pre>        .gwt-MenuBar .gwt-MenuItem-selected {\n          background-color: #E8EEF7;\n        }</pre></blockquote>\n\n<ul><li>By default, each menu item can be associated with a class, whose ``execute``    method will be called when that item is selected.  Note that a helper class,    ``MenuCmd``, is defined below to allow more than one menu item handler    method to be defined within a single class.</li></ul>\n\n<ul><li>You add menu items directly, passing the item label and the associated    command to ``MenuBar.addItem()``.  For adding sub-menus, you need to wrap    the sub-menu up in a ``MenuItem``, as shown below.</li></ul>\n\n<ul><li>You can use HTML codes in a menu item's label by calling    ``MenuBar.addItem(label, True, cmd)`` instead of ``MenuBar.addItem(label,    cmd)``.  Similarly, you can use HTML styling in a menu's title by calling    ``MenuItem(label, True, submenu)``, as in the second-to-last line of    ``MenubarDemo.__init__``, below. </li></ul>"], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>menubar.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">MenuBar</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">MenuBar</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">MenuItem</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">MenuItem</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Window</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">MenubarDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">menu1</font> <font color="#303000"><b>=</b></font> <font color="#000000">MenuBar</font><font color="#303000"><b>(</b></font><font color="#000000">vertical</font><font color="#303000"><b>=</b></font><font color="#000000">True</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">menu1</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 1"</font><font color="#303000"><b>,</b></font> <font color="#000000">MenuCmd</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onMenu1Item1"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">menu1</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 2"</font><font color="#303000"><b>,</b></font> <font color="#000000">MenuCmd</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onMenu1Item2"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">menu2</font> <font color="#303000"><b>=</b></font> <font color="#000000">MenuBar</font><font color="#303000"><b>(</b></font><font color="#000000">vertical</font><font color="#303000"><b>=</b></font><font color="#000000">True</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">menu2</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Apples"</font><font color="#303000"><b>,</b></font> <font color="#000000">MenuCmd</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onMenu2Apples"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">menu2</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Oranges"</font><font color="#303000"><b>,</b></font> <font color="#000000">MenuCmd</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"onMenu2Oranges"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">menubar</font> <font color="#303000"><b>=</b></font> <font color="#000000">MenuBar</font><font color="#303000"><b>(</b></font><font color="#000000">vertical</font><font color="#303000"><b>=</b></font><font color="#000000">False</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">menubar</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#000000">MenuItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Menu 1"</font><font color="#303000"><b>,</b></font> <font color="#000000">menu1</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">menubar</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#000000">MenuItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"&lt;i&gt;Menu 2&lt;/i&gt;"</font><font color="#303000"><b>,</b></font> <font color="#000000">True</font><font color="#303000"><b>,</b></font> <font color="#000000">menu2</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">menubar</font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onMenu1Item1</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 1 selected"</font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onMenu1Item2</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 2 selected"</font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onMenu2Apples</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Apples selected"</font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onMenu2Oranges</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Oranges selected"</font><font color="#303000"><b>)</b></font>\n\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">MenuCmd</font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">object</font><font color="#303000"><b>,</b></font> <font color="#000000">handler</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_object</font>  <font color="#303000"><b>=</b></font> <font color="#000000">object</font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_handler</font> <font color="#303000"><b>=</b></font> <font color="#000000">handler</font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">execute</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">handler</font> <font color="#303000"><b>=</b></font> <font color="#000000">getattr</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_object</font><font color="#303000"><b>,</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">_handler</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">handler</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['MenubarDemo']()]]));
		demos['append']($p['dict']([['name', 'namedFrame'], ['title', 'ui.NamedFrame'], ['section', 'widgets'], ['doc', 'The ``ui.NamedFrame`` class is a variation of the ``ui.Frame`` which lets you assign a name to the frame.  Naming a frame allows you to refer to that frame by name in Javascript code, and as the target for a hyperlink. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>namedFrame.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">NamedFrame</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">NamedFrame</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HTML</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HTML</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">NamedFrameDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#000000">Spacing</font><font color="#303000"><b>=</b></font><font color="#FF2200">5</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">frame</font> <font color="#303000"><b>=</b></font> <font color="#000000">NamedFrame</font><font color="#303000"><b>(</b></font><font color="#A0008A">"myFrame"</font><font color="#303000"><b>,</b></font>\n                            <font color="#000000">Width</font><font color="#303000"><b>=</b></font><font color="#A0008A">"100%"</font><font color="#303000"><b>,</b></font>\n                            <font color="#000000">Height</font><font color="#303000"><b>=</b></font><font color="#A0008A">"200px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">frame</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#600080">\'&lt;a href="http://google.com" target="myFrame"&gt;Google&lt;/a&gt;\'</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#600080">\'&lt;a href="http://yahoo.com" target="myFrame"&gt;Yahoo&lt;/a&gt;\'</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">vPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">HTML</font><font color="#303000"><b>(</b></font><font color="#600080">\'&lt;a href="http://pyjs.org" target="myFrame"&gt;Pyjamas&lt;/a&gt;\'</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">vPanel</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['NamedFrameDemo']()]]));
		demos['append']($p['dict']([['name', 'passwordTextBox'], ['title', 'ui.PasswordTextBox'], ['section', 'widgets'], ['doc', 'The ``ui.PasswordTextBox`` class implements a standard password input field.\n\nLike its cousins the ``ui.TextBox`` and ``ui.TextArea`` classes, ``ui.PasswordTextBox`` defines many useful methods which you may find useful.\n\nThe most important methods are probably ``setText()`` and ``getText()`` which set and retrieve the contents of the input field, and ``setMaxLength()`` to specify how many characters the user can type into the field.\n\nNote that for some reason, the ``setVisibleLength()`` method is not defined for a password field.  This means that you have to specify the width of the field in pixels, as is shown below. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>passwordTextBox.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">PasswordTextBox</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">PasswordTextBox</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">PasswordTextBoxDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">field</font> <font color="#303000"><b>=</b></font> <font color="#000000">PasswordTextBox</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">field</font><font color="#303000"><b>.</b></font><font color="#000000">setWidth</font><font color="#303000"><b>(</b></font><font color="#A0008A">"100px"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">field</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['PasswordTextBoxDemo']()]]));
		demos['append']($p['dict']([['name', 'radioButton'], ['title', 'ui.RadioButton'], ['section', 'widgets'], ['doc', 'The ``ui.RadioButton`` class is used to show a radio button.  Each radio button is given a "group" value; when the user clicks on a radio button, the other radio buttons in that group are deselected, and the clicked on radio button is selected.\n\nYou can use the ``setChecked(checked)`` where checked is ``True`` or ``False`` method to select or deselect a radio button, and you can call ``isChecked()`` to see if a radio button is currently selected.  You can also enable or disable a checkbox using ``setEnabled(enabled)``.  And finally, you can call ``addClickListener()`` to respond when the user clicks on the radio button. '], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>radioButton.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">HorizontalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">HorizontalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">RadioButton</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">RadioButton</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">RadioButtonDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel1</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel1</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">RadioButton</font><font color="#303000"><b>(</b></font><font color="#A0008A">"group1"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Red"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel1</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">RadioButton</font><font color="#303000"><b>(</b></font><font color="#A0008A">"group1"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Green"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel1</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">RadioButton</font><font color="#303000"><b>(</b></font><font color="#A0008A">"group1"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Blue"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">panel2</font> <font color="#303000"><b>=</b></font> <font color="#000000">VerticalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel2</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">RadioButton</font><font color="#303000"><b>(</b></font><font color="#A0008A">"group2"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Solid"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel2</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">RadioButton</font><font color="#303000"><b>(</b></font><font color="#A0008A">"group2"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Liquid"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">panel2</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">RadioButton</font><font color="#303000"><b>(</b></font><font color="#A0008A">"group2"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"Gas"</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">hPanel</font> <font color="#303000"><b>=</b></font> <font color="#000000">HorizontalPanel</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">hPanel</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">panel2</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">hPanel</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['RadioButtonDemo']()]]));
		demos['append']($p['dict']([['name', 'textArea'], ['title', 'ui.TextArea'], ['section', 'widgets'], ['doc', "The ``ui.TextArea`` class implements a standard multi-line input field.\n\nThe ``setCharacterWidth()`` method sets the width of the input field, in characters, while ``setVisibleLines()`` sets the height of the field, in lines.\n\nUse the ``getText()`` method to retrieve the field's current text, and ``setText()`` to set it.  There are many other useful methods defined by ``ui.TextArea`` and its parent classes; see the module documentation for more details.\n\nIf you want a TextArea that adjusts its size after its content, then have a look at the AutoTextArea below. It also shows you how to catch certain keystrokes such as ctrl-enter. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>textArea.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">VerticalPanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">VerticalPanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">TextArea</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">TextArea</font>\n<font color="#0000AF"><b>import</b></font> <font color="#000000">math</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">TextAreaDemo</font><font color="#303000"><b>(</b></font><font color="#000000">VerticalPanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">VerticalPanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">setSpacing</font><font color="#303000"><b>(</b></font><font color="#A0008A">"10px"</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">field</font> <font color="#303000"><b>=</b></font> <font color="#000000">TextArea</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">field</font><font color="#303000"><b>.</b></font><font color="#000000">setCharacterWidth</font><font color="#303000"><b>(</b></font><font color="#FF2200">20</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">field</font><font color="#303000"><b>.</b></font><font color="#000000">setVisibleLines</font><font color="#303000"><b>(</b></font><font color="#FF2200">4</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">field</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">AutoTextArea</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">done</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Ctrl-enter!"</font><font color="#303000"><b>)</b></font>\n\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">AutoTextArea</font><font color="#303000"><b>(</b></font><font color="#000000">TextArea</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">doneHandler</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">TextArea</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">doneHandler</font> <font color="#303000"><b>=</b></font> <font color="#000000">doneHandler</font> <font color="#007F00">#this handler will be called when user press ctrl-enter</font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onBrowserEvent</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">event</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#0000AF"><b>if</b></font> <font color="#000000">event</font><font color="#303000"><b>.</b></font><font color="#000000">type</font> <font color="#303000"><b>==</b></font> <font color="#A0008A">"keydown"</font><font color="#303000"><b>:</b></font>\n            <font color="#0000AF"><b>if</b></font> <font color="#000000">event</font><font color="#303000"><b>.</b></font><font color="#000000">keyCode</font> <font color="#303000"><b>==</b></font> <font color="#FF2200">13</font> <font color="#0000AF"><b>and</b></font> <font color="#000000">event</font><font color="#303000"><b>.</b></font><font color="#000000">ctrlKey</font><font color="#303000"><b>:</b></font> <font color="#007F00">#ctrl-enter</font>\n                <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">doneHandler</font><font color="#303000"><b>.</b></font><font color="#000000">done</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n            <font color="#0000AF"><b>else</b></font><font color="#303000"><b>:</b></font>\n                <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">autoHeight</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font> <font color="#007F00">#if not ctrl-enter, adjust height</font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">autoHeight</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#007F00">#here is some really weak code to calculate the height of the textarea.</font>\n        <font color="#007F00">#its not very accurate, im sure you can do better! remember to "import math"</font>\n        <font color="#000000">lines</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">getText</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>.</b></font><font color="#000000">split</font><font color="#303000"><b>(</b></font><font color="#A0008A">"\n"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">c</font> <font color="#303000"><b>=</b></font> <font color="#FF2200">0</font>\n        <font color="#0000AF"><b>for</b></font> <font color="#000000">i</font> <font color="#0000AF"><b>in</b></font> <font color="#000000">lines</font><font color="#303000"><b>:</b></font>\n            <font color="#000000">fsize</font> <font color="#303000"><b>=</b></font> <font color="#FF2200">9</font>\n            <font color="#000000">a</font> <font color="#303000"><b>=</b></font> <font color="#000000">float</font><font color="#303000"><b>(</b></font><font color="#000000">len</font><font color="#303000"><b>(</b></font><font color="#000000">i</font><font color="#303000"><b>)</b></font><font color="#303000"><b>*</b></font><font color="#000000">fsize</font><font color="#303000"><b>)</b></font> <font color="#303000"><b>/</b></font> <font color="#000000">float</font><font color="#303000"><b>(</b></font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">getOffsetWidth</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>/</b></font><font color="#000000">fsize</font><font color="#303000"><b>)</b></font><font color="#303000"><b>*</b></font><font color="#000000">fsize</font><font color="#303000"><b>)</b></font>\n            <font color="#000000">b</font> <font color="#303000"><b>=</b></font> <font color="#000000">int</font><font color="#303000"><b>(</b></font><font color="#000000">math</font><font color="#303000"><b>.</b></font><font color="#000000">ceil</font><font color="#303000"><b>(</b></font><font color="#000000">a</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n            <font color="#000000">c</font> <font color="#303000"><b>+=</b></font> <font color="#000000">max</font><font color="#303000"><b>(</b></font><font color="#FF2200">1</font><font color="#303000"><b>,</b></font><font color="#000000">b</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">newHeight</font> <font color="#303000"><b>=</b></font> <font color="#000000">str</font><font color="#303000"><b>(</b></font><font color="#FF2200">16</font><font color="#303000"><b>*</b></font><font color="#303000"><b>(</b></font><font color="#FF2200">2</font><font color="#303000"><b>+</b></font><font color="#000000">c</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font> <font color="#303000"><b>+</b></font> <font color="#A0008A">"px"</font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">setHeight</font><font color="#303000"><b>(</b></font><font color="#000000">newHeight</font><font color="#303000"><b>)</b></font>\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">setText</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">text</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">TextArea</font><font color="#303000"><b>.</b></font><font color="#000000">setText</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">text</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">autoHeight</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['TextAreaDemo']()]]));
		demos['append']($p['dict']([['name', 'textBox'], ['title', 'ui.TextBox'], ['section', 'widgets'], ['doc', "The ``ui.TextBox`` class implements a standard one-line input field.\n\nThere are many useful methods defined by ``ui.TextBox`` and its parent classes. For example, ``getText()`` returns the current contents of the input field, and ``setText()`` lets you set the field's contents to a given string.\n\n``setVisibleLength()`` lets you set the width of the field, in characters. Similarly, ``setMaxLength()`` lets you set the maximum number of characters the user can enter into the field.\n\n"], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>textBox.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">TextBox</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">TextBox</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">TextBoxDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">field</font> <font color="#303000"><b>=</b></font> <font color="#000000">TextBox</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">field</font><font color="#303000"><b>.</b></font><font color="#000000">setVisibleLength</font><font color="#303000"><b>(</b></font><font color="#FF2200">20</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">field</font><font color="#303000"><b>.</b></font><font color="#000000">setMaxLength</font><font color="#303000"><b>(</b></font><font color="#FF2200">10</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">field</font><font color="#303000"><b>)</b></font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['TextBoxDemo']()]]));
		demos['append']($p['dict']([['name', 'tree'], ['title', 'ui.Tree'], ['section', 'widgets'], ['doc', "The ``ui.Tree`` class lets you add a tree control to your application.\n\nCall ``Tree.addTreeListener()`` to add a tree listener object to a tree, that listener object's ``onTreeItemSelected()`` method will be called as the user clicks on that item in the tree control.  Similarly, the listener object's ``onTreeItemStateChanged()`` method will be called whenever the user opens or closes a branch of the tree.  Both of these methods have to be defined, even if you don't use them both.\n\nTo open a branch of the tree, call ``TreeItem.setState()`` method.  If the ``state`` parameter is True, the branch of the tree will be opened; if it is False, the branch of the tree will be closed. "], ['src', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD                           HTML 3.2 Final//EN"\n<html><head><title>tree.py</title>\n<!--This document created by PySourceColor ver.1 on: Sat May  5 00:26:16 2012-->\n<meta http-equiv="Content-Type"                          content="text/html;charset=iso-8859-1" />\n</head><body bgcolor="#FFFFFF">\n<pre><font face="Lucida Console, Courier New">\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">SimplePanel</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">SimplePanel</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">Tree</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Tree</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font><font color="#303000"><b>.</b></font><font color="#000000">ui</font><font color="#303000"><b>.</b></font><font color="#000000">TreeItem</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">TreeItem</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">DOM</font>\n<font color="#0000AF"><b>from</b></font> <font color="#000000">pyjamas</font> <font color="#0000AF"><b>import</b></font> <font color="#000000">Window</font>\n\n<font color="#0000AF"><b>class</b></font> <font color="#0000FF">TreeDemo</font><font color="#303000"><b>(</b></font><font color="#000000">SimplePanel</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">SimplePanel</font><font color="#303000"><b>.</b></font><font color="#000000">__init__</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">tree</font> <font color="#303000"><b>=</b></font> <font color="#000000">Tree</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">tree</font><font color="#303000"><b>.</b></font><font color="#000000">addTreeListener</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">s1</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">createItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Section 1"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">s1</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">createItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 1.1"</font><font color="#303000"><b>,</b></font> <font color="#000000">value</font><font color="#303000"><b>=</b></font><font color="#FF2200">11</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">s1</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">createItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 1.2"</font><font color="#303000"><b>,</b></font> <font color="#000000">value</font><font color="#303000"><b>=</b></font><font color="#FF2200">12</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">s2</font> <font color="#303000"><b>=</b></font> <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">createItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Section 2"</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">s2</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">createItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 2.1"</font><font color="#303000"><b>,</b></font> <font color="#000000">value</font><font color="#303000"><b>=</b></font><font color="#FF2200">21</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">s2</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">createItem</font><font color="#303000"><b>(</b></font><font color="#A0008A">"Item 2.2"</font><font color="#303000"><b>,</b></font> <font color="#000000">value</font><font color="#303000"><b>=</b></font><font color="#FF2200">22</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">s1</font><font color="#303000"><b>.</b></font><font color="#000000">setState</font><font color="#303000"><b>(</b></font><font color="#000000">True</font><font color="#303000"><b>,</b></font> <font color="#000000">fireEvents</font><font color="#303000"><b>=</b></font><font color="#000000">False</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">s2</font><font color="#303000"><b>.</b></font><font color="#000000">setState</font><font color="#303000"><b>(</b></font><font color="#000000">True</font><font color="#303000"><b>,</b></font> <font color="#000000">fireEvents</font><font color="#303000"><b>=</b></font><font color="#000000">False</font><font color="#303000"><b>)</b></font>\n\n        <font color="#000000">tree</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#000000">s1</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">tree</font><font color="#303000"><b>.</b></font><font color="#000000">addItem</font><font color="#303000"><b>(</b></font><font color="#000000">s2</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">self</font><font color="#303000"><b>.</b></font><font color="#000000">add</font><font color="#303000"><b>(</b></font><font color="#000000">tree</font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">createItem</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">label</font><font color="#303000"><b>,</b></font> <font color="#000000">value</font><font color="#303000"><b>=</b></font><font color="#000000">None</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">item</font> <font color="#303000"><b>=</b></font> <font color="#000000">TreeItem</font><font color="#303000"><b>(</b></font><font color="#000000">label</font><font color="#303000"><b>)</b></font>\n        <font color="#000000">DOM</font><font color="#303000"><b>.</b></font><font color="#000000">setStyleAttribute</font><font color="#303000"><b>(</b></font><font color="#000000">item</font><font color="#303000"><b>.</b></font><font color="#000000">getElement</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font><font color="#303000"><b>,</b></font> <font color="#A0008A">"cursor"</font><font color="#303000"><b>,</b></font> <font color="#A0008A">"pointer"</font><font color="#303000"><b>)</b></font>\n        <font color="#0000AF"><b>if</b></font> <font color="#000000">value</font> <font color="#0000AF"><b>is</b></font> <font color="#0000AF"><b>not</b></font> <font color="#000000">None</font><font color="#303000"><b>:</b></font>\n            <font color="#000000">item</font><font color="#303000"><b>.</b></font><font color="#000000">setUserObject</font><font color="#303000"><b>(</b></font><font color="#000000">value</font><font color="#303000"><b>)</b></font>\n        <font color="#0000AF"><b>return</b></font> <font color="#000000">item</font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onTreeItemSelected</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">item</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#000000">value</font> <font color="#303000"><b>=</b></font> <font color="#000000">item</font><font color="#303000"><b>.</b></font><font color="#000000">getUserObject</font><font color="#303000"><b>(</b></font><font color="#303000"><b>)</b></font>\n        <font color="#000000">Window</font><font color="#303000"><b>.</b></font><font color="#000000">alert</font><font color="#303000"><b>(</b></font><font color="#A0008A">"You clicked on "</font> <font color="#303000"><b>+</b></font> <font color="#000000">str</font><font color="#303000"><b>(</b></font><font color="#000000">value</font><font color="#303000"><b>)</b></font><font color="#303000"><b>)</b></font>\n\n\n    <font color="#0000AF"><b>def</b></font> <font color="#0000FF">onTreeItemStateChanged</font><font color="#303000"><b>(</b></font><font color="#000000">self</font><font color="#303000"><b>,</b></font> <font color="#000000">item</font><font color="#303000"><b>)</b></font><font color="#303000"><b>:</b></font>\n        <font color="#0000AF"><b>pass</b></font> <font color="#007F00"># We ignore this.</font><font color="#000000"></font></pre>\n<!--This document created by PySourceColor ver.ver.1 on: Sat May  5 00:26:16 2012-->\n</body></html>\n'], ['example', $m['TreeDemo']()]]));
		return demos;
	};
	$m['getDemos'].__name__ = 'getDemos';

	$m['getDemos'].__bind_type__ = 0;
	$m['getDemos'].__args__ = [null,null];
	return this;
}; /* end demoInfo */


/* end module: demoInfo */


/*
PYJS_DEPS: ['pyjamas.ui.DialogBox.DialogBox', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.DialogBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.CaptionPanel.CaptionPanel', 'pyjamas.ui.CaptionPanel', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame', 'pyjamas.ui.TreeItem.TreeItem', 'pyjamas.ui.TreeItem', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'math', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.NamedFrame.NamedFrame', 'pyjamas.ui.NamedFrame', 'pyjamas.History', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas.ui.MenuBar', 'pyjamas.ui.PasswordTextBox.PasswordTextBox', 'pyjamas.ui.PasswordTextBox', 'pyjamas.ui.FileUpload.FileUpload', 'pyjamas.ui.FileUpload', 'pyjamas.DOM', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.StackPanel.StackPanel', 'pyjamas.ui.StackPanel', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.RadioButton.RadioButton', 'pyjamas.ui.RadioButton', 'pyjamas.ui.Hidden.Hidden', 'pyjamas.ui.Hidden', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.Window', 'pyjamas.ui.Tree.Tree', 'pyjamas.ui.Tree', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable']
*/
