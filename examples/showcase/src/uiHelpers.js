/* start module: uiHelpers */
$pyjs.loaded_modules['uiHelpers'] = function (__mod_name__) {
	if($pyjs.loaded_modules['uiHelpers'].__was_initialized__) return $pyjs.loaded_modules['uiHelpers'];
	var $m = $pyjs.loaded_modules["uiHelpers"];
	$m.__repr__ = function() { return "<module: uiHelpers>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'uiHelpers';
	$m.__name__ = __mod_name__;


	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['indent'] = function(contents, all, left, right, top, bottom, hIndent, vIndent) {
		if (typeof all == 'undefined') all=arguments.callee.__args__[3][1];
		if (typeof left == 'undefined') left=arguments.callee.__args__[4][1];
		if (typeof right == 'undefined') right=arguments.callee.__args__[5][1];
		if (typeof top == 'undefined') top=arguments.callee.__args__[6][1];
		if (typeof bottom == 'undefined') bottom=arguments.callee.__args__[7][1];
		if (typeof hIndent == 'undefined') hIndent=arguments.callee.__args__[8][1];
		if (typeof vIndent == 'undefined') vIndent=arguments.callee.__args__[9][1];
		var wrapper,padding;
		if ($p['bool']((all !== null))) {
			left = all;
			right = all;
			top = all;
			bottom = all;
		}
		if ($p['bool']((hIndent !== null))) {
			left = hIndent;
			right = hIndent;
		}
		if ($p['bool']((vIndent !== null))) {
			top = vIndent;
			bottom = vIndent;
		}
		wrapper = $m['DockPanel']();
		wrapper['setSpacing'](0);
		wrapper['add'](contents, $p['getattr']($m['DockPanel'], 'CENTER'));
		if ($p['bool'](($p['cmp'](left, 0) == 1))) {
			padding = $pyjs_kwargs_call(null, (typeof Whitespace == "undefined"?$m.Whitespace:Whitespace), null, null, [{width:left}]);
			wrapper['add'](padding, $p['getattr']($m['DockPanel'], 'WEST'));
		}
		if ($p['bool'](($p['cmp'](top, 0) == 1))) {
			padding = $pyjs_kwargs_call(null, (typeof Whitespace == "undefined"?$m.Whitespace:Whitespace), null, null, [{height:top}]);
			wrapper['add'](padding, $p['getattr']($m['DockPanel'], 'NORTH'));
		}
		if ($p['bool'](($p['cmp'](right, 0) == 1))) {
			padding = $pyjs_kwargs_call(null, (typeof Whitespace == "undefined"?$m.Whitespace:Whitespace), null, null, [{width:right}]);
			wrapper['add'](padding, $p['getattr']($m['DockPanel'], 'EAST'));
		}
		if ($p['bool'](($p['cmp'](bottom, 0) == 1))) {
			padding = $pyjs_kwargs_call(null, (typeof Whitespace == "undefined"?$m.Whitespace:Whitespace), null, null, [{height:bottom}]);
			wrapper['add'](padding, $p['getattr']($m['DockPanel'], 'SOUTH'));
		}
		return wrapper;
	};
	$m['indent'].__name__ = 'indent';

	$m['indent'].__bind_type__ = 0;
	$m['indent'].__args__ = [null,null,['contents'],['all', null],['left', null],['right', null],['top', null],['bottom', null],['hIndent', null],['vIndent', null]];
	$m['border'] = function(contents) {
		var wrapper;
		wrapper = $m['VerticalPanel']();
		wrapper['add'](contents);
		wrapper['setBorderWidth'](1);
		return wrapper;
	};
	$m['border'].__name__ = 'border';

	$m['border'].__bind_type__ = 0;
	$m['border'].__args__ = [null,null,['contents']];
	$m['colour'] = function(contents, colour) {
		var wrapper;
		wrapper = $m['VerticalPanel']();
		wrapper['add'](contents);
		$m['DOM']['setStyleAttribute'](wrapper['getElement'](), 'background-color', colour);
		return wrapper;
	};
	$m['colour'].__name__ = 'colour';

	$m['colour'].__bind_type__ = 0;
	$m['colour'].__args__ = [null,null,['contents'],['colour']];
	$m['prompt'] = function(msg, defaultReply) {
		if (typeof defaultReply == 'undefined') defaultReply=arguments.callee.__args__[3][1];

		return $wnd['prompt'](msg, defaultReply);
		return null;
	};
	$m['prompt'].__name__ = 'prompt';

	$m['prompt'].__bind_type__ = 0;
	$m['prompt'].__args__ = [null,null,['msg'],['defaultReply', '']];
	$m['Whitespace'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'uiHelpers';
		$method = $pyjs__bind_method2('__init__', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments.callee.__args__[3][1];
			if (typeof height == 'undefined') height=arguments.callee.__args__[4][1];

			$m['Widget']['__init__'](self);
			self['setElement']($m['DOM']['createElement']('div'));
			self['setPixelSize'](width, height);
			return null;
		}
	, 1, [null,null,['self'],['width', 0],['height', 0]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Whitespace', $p['tuple']($bases), $data);
	})();
	$m['PanelWithLabel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'uiHelpers';
		$method = $pyjs__bind_method2('__init__', function($$label, contents) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$label = arguments[1];
				contents = arguments[2];
			}
			var vPanel,$$label,$add2,$add3,$add1,$add4;
			$m['SimplePanel']['__init__'](self);
			$$label = $m['HTML']($p['__op_add']($add3=$p['__op_add']($add1='<b>',$add2=$$label),$add4='</b>'));
			vPanel = $m['VerticalPanel']();
			vPanel['add']($pyjs_kwargs_call(null, $m['indent'], null, null, [{left:5}, $$label]));
			vPanel['add']($m['border']($m['indent'](contents, 10)));
			self['add'](vPanel);
			return null;
		}
	, 1, [null,null,['self'],['$$label'],['contents']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PanelWithLabel', $p['tuple']($bases), $data);
	})();
	$m['PanelApp'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'uiHelpers';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self._curPanelID = null;
			self._root = $m['RootPanel']();
			self._panels = self['createPanels']();
			self['showPanel'](self['getDefaultPanel']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('showPanel', function(panelID) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panelID = arguments[1];
			}

			if ($p['bool']($p['op_eq'](panelID, $p['getattr'](self, '_curPanelID')))) {
				return null;
			}
			if ($p['bool'](($p['getattr'](self, '_curPanelID') !== null))) {
				self['_root']['remove']($p['getattr'](self, '_panels').__getitem__($p['getattr'](self, '_curPanelID')));
			}
			self['_root']['add']($p['getattr'](self, '_panels').__getitem__(panelID));
			self._curPanelID = panelID;
			return null;
		}
	, 1, [null,null,['self'],['panelID']]);
		$cls_definition['showPanel'] = $method;
		$method = $pyjs__bind_method2('createPanels', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']('Must be overridden.');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createPanels'] = $method;
		$method = $pyjs__bind_method2('getDefaultPanel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']('Must be overridden.');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDefaultPanel'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PanelApp', $p['tuple']($bases), $data);
	})();
	$m['CommandWrapper'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'uiHelpers';
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
		return $p['_create_class']('CommandWrapper', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end uiHelpers */


/* end module: uiHelpers */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'pyjamas.Window']
*/
