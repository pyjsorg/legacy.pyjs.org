/* start module: Menus */
$pyjs.loaded_modules['Menus'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Menus'].__was_initialized__) return $pyjs.loaded_modules['Menus'];
	var $m = $pyjs.loaded_modules["Menus"];
	$m.__repr__ = function() { return "<module: Menus>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Menus';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', null, null, false);
	$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['ContextMenuPopupPanel'] = $p['___import___']('pyjamas.ui.ContextMenuPopupPanel.ContextMenuPopupPanel', null, null, false);
	$m['Menus'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Menus';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var subMenu,menu2,menu1,menu0;
			$m['Sink']['__init__'](self);
			self.menu = $m['MenuBar']();
			subMenu = $m['MenuBar'](true);
			subMenu['addItem']('<code>Code</code>', true, self);
			subMenu['addItem']('<strike>Strikethrough</strike>', true, self);
			subMenu['addItem']('<u>Underlined</u>', true, self);
			menu0 = $m['MenuBar'](true);
			menu0['addItem']('<b>Bold</b>', true, self);
			menu0['addItem']('<i>Italicized</i>', true, self);
			menu0['addItem']('More &#187;', true, subMenu);
			menu1 = $m['MenuBar'](true);
			menu1['addItem']("<font color='#FF0000'><b>Apple</b></font>", true, self);
			menu1['addItem']("<font color='#FFFF00'><b>Banana</b></font>", true, self);
			menu1['addItem']("<font color='#FFFFFF'><b>Coconut</b></font>", true, self);
			menu1['addItem']("<font color='#8B4513'><b>Donut</b></font>", true, self);
			menu2 = $m['MenuBar'](true);
			menu2['addItem']('Bling', self);
			menu2['addItem']('Ginormous', self);
			menu2['addItem']('<code>w00t!</code>', true, self);
			self['menu']['addItem']($m['MenuItem']('Style', menu0));
			self['menu']['addItem']($m['MenuItem']('Fruit', menu1));
			self['menu']['addItem']($m['MenuItem']('Term', menu2));
			self['menu']['setWidth']('100%');
			self.panel = $m['VerticalPanel']();
			self.context = $m['HTML']('Right-Click me<br/>to show a context menu.<br />\n                               Left-click me<br />to do absolutely nothing.');
			self['panel']['add']($p['getattr'](self, 'menu'));
			self['panel']['add']($p['getattr'](self, 'context'));
			self['initWidget']($p['getattr'](self, 'panel'));
			self['context']['setContextMenu'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onContextMenu', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var subMenu,popup,$add2,$add3,$add1,$add4,y,x,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			subMenu = $m['MenuBar'](true);
			subMenu['addItem']('<code>Code</code>', true, self);
			subMenu['addItem']('<strike>Strikethrough</strike>', true, self);
			subMenu['addItem']('<u>Underlined</u>', true, self);
			x = (typeof ($add1=$m['DOM']['eventGetClientX'](event))==typeof ($add2=2) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			y = (typeof ($add3=$m['DOM']['eventGetClientY'](event))==typeof ($add4=2) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			popup = $m['ContextMenuPopupPanel'](subMenu);
			popup['showAt'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onContextMenu'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['alert']('Thank you for selecting a menu item.');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
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
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Menus', $p['tuple']($bases), $data);
	})();
	$m['init'] = function() {

		return $m['SinkInfo']('Menus', 'The GWT <code>MenuBar</code> class makes it easy to build menus, including cascading sub-menus.', $m['Menus']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end Menus */


/* end module: Menus */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas.ui.MenuBar', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.Window', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.DOM', 'pyjamas.ui.ContextMenuPopupPanel.ContextMenuPopupPanel', 'pyjamas.ui.ContextMenuPopupPanel']
*/
