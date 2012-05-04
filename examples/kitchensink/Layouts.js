/* start module: Layouts */
$pyjs.loaded_modules['Layouts'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Layouts'].__was_initialized__) return $pyjs.loaded_modules['Layouts'];
	var $m = $pyjs.loaded_modules["Layouts"];
	$m.__repr__ = function() { return "<module: Layouts>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Layouts';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
	$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', null, null, false);
	$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
	$m['Logger'] = $p['___import___']('Logger.Logger', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Layouts'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Layouts';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var scroller,text,$iter1_iter,horz,id,contents,menu,html,north1,north0,east,$iter1_array,disclose,$iter1_nextval,vert,dock,panel,$iter1_type,i,flow,menu0,menu1,$iter1_idx,west,south;
			$m['Sink']['__init__'](self);
			text = "This is a <code>ScrollPanel</code> contained at \n        the center of a <code>DockPanel</code>. \n        By putting some fairly large contents \n        in the middle and setting its size explicitly, it becomes a \n        scrollable area within the page, but without requiring the use of \n        an IFRAME.\n        Here's quite a bit more meaningless text that will serve primarily \n        to make this thing scroll off the bottom of its visible area.  \n        Otherwise, you might have to make it really, really small in order \n        to see the nifty scroll bars!";
			contents = $m['HTML'](text);
			scroller = $pyjs_kwargs_call(null, $m['ScrollPanel'], null, null, [{StyleName:'ks-layouts-Scroller'}, contents]);
			dock = $pyjs_kwargs_call(null, $m['DockPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'), Spacing:10}]);
			north0 = $m['HTML']('This is the <i>first</i> north component', true);
			east = $m['HTML']('<center>This<br>is<br>the<br>east<br>component</center>', true);
			south = $m['HTML']('This is the south component');
			west = $m['HTML']('<center>This<br>is<br>the<br>west<br>component</center>', true);
			north1 = $m['HTML']('This is the <b>second</b> north component', true);
			dock['add'](north0, $p['getattr']($m['DockPanel'], 'NORTH'));
			dock['add'](east, $p['getattr']($m['DockPanel'], 'EAST'));
			dock['add'](south, $p['getattr']($m['DockPanel'], 'SOUTH'));
			dock['add'](west, $p['getattr']($m['DockPanel'], 'WEST'));
			dock['add'](north1, $p['getattr']($m['DockPanel'], 'NORTH'));
			dock['add'](scroller, $p['getattr']($m['DockPanel'], 'CENTER'));
			flow = $m['FlowPanel']();
			$iter1_iter = $p['range'](8);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				flow['add']($m['CheckBox']($p['sprintf']('Flow %d', i)));
			}
			horz = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{VerticalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE')}]);
			horz['add']($m['Button']('Button'));
			horz['add']($m['HTML']('<center>This is a<br>very<br>tall thing</center>', true));
			horz['add']($m['Button']('Button'));
			vert = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER')}]);
			vert['add']($m['Button']('Small'));
			vert['add']($m['Button']('--- BigBigBigBig ---'));
			vert['add']($m['Button']('tiny'));
			menu = $m['MenuBar']();
			menu0 = $m['MenuBar'](true);
			menu1 = $m['MenuBar'](true);
			menu['addItem']('menu0', menu0);
			menu['addItem']('menu1', menu1);
			menu0['addItem']('child00');
			menu0['addItem']('child01');
			menu0['addItem']('child02');
			menu1['addItem']('child10');
			menu1['addItem']('child11');
			menu1['addItem']('child12');
			id = $m['HTMLPanel']['createUniqueId']();
			text = $p['sprintf']("This is an <code>HTMLPanel</code>.  It allows you to add \n            components inside existing HTML, like this: <span id='%s' />\n            Notice how the menu just fits snugly in there?  Cute.", id);
			html = $m['HTMLPanel'](text);
			$m['DOM']['setStyleAttribute'](menu['getElement'](), 'display', 'inline');
			html['add'](menu, id);
			disclose = $m['DisclosurePanel']('Click to disclose');
			disclose['add']($m['HTML']('<b>Ta-daaaaa!</b><br />Ok - it could have\n                             been<br />more of a surprise.'));
			panel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{Spacing:8, HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER')}]);
			panel['add'](self['makeLabel']('Dock Panel'));
			panel['add'](dock);
			panel['add'](self['makeLabel']('Flow Panel'));
			panel['add'](flow);
			panel['add'](self['makeLabel']('Horizontal Panel'));
			panel['add'](horz);
			panel['add'](self['makeLabel']('Vertical Panel'));
			panel['add'](vert);
			panel['add'](self['makeLabel']('HTML Panel'));
			panel['add'](html);
			panel['add'](self['makeLabel']('Disclosure Panel'));
			panel['add'](disclose);
			self['initWidget'](panel);
			self['setStyleName']('ks-layouts');
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
		$method = $pyjs__bind_method2('makeLabel', function(caption) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				caption = arguments[1];
			}
			var html;
			html = $m['HTML'](caption);
			html['setStyleName']('ks-layouts-Label');
			return html;
		}
	, 1, [null,null,['self'],['caption']]);
		$cls_definition['makeLabel'] = $method;
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Layouts', $p['tuple']($bases), $data);
	})();
	$m['init'] = function() {
		var text;
		text = "This page demonstrates some of the basic GWT panels, each of which\n        arranges its contained widgets differently.  \n        These panels are designed to take advantage of the browser's \n        built-in layout mechanics, which keeps the user interface snappy \n        and helps your AJAX code play nicely with existing HTML.  \n        On the other hand, if you need pixel-perfect control, \n        you can tweak things at a low level using the \n        <code>DOM</code> class.";
		return $m['SinkInfo']('Layouts', text, $m['Layouts']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end Layouts */


/* end module: Layouts */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas.ui.MenuBar', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel', 'Logger.Logger', 'Logger', 'pyjamas.DOM']
*/
