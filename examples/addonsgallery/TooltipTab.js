/* start module: TooltipTab */
$pyjs.loaded_modules['TooltipTab'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TooltipTab'].__was_initialized__) return $pyjs.loaded_modules['TooltipTab'];
	var $m = $pyjs.loaded_modules["TooltipTab"];
	$m.__repr__ = function() { return "<module: TooltipTab>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TooltipTab';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['TooltipListener'] = $p['___import___']('pyjamas.ui.Tooltip.TooltipListener', null, null, false);
	$m['TooltipTab'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TooltipTab';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var img,html,$add2,$add3,$add1,$add4,img2,panel_h,panel;
			$m['Sink']['__init__'](self);
			img = $m['Image']('images/num1.png');
			img['addMouseListener']($m['TooltipListener']((typeof ($add1='An image: ')==typeof ($add2=img['getUrl']()) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))));
			img2 = $m['Image']('images/num2.png');
			img2['addMouseListener']($m['TooltipListener']((typeof ($add3='An image: ')==typeof ($add4=img2['getUrl']()) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4))));
			html = $m['HTML']('Some <i>HTML</i> text.');
			html['addMouseListener']($m['TooltipListener']('An HTML component.'));
			panel_h = $m['HorizontalPanel']();
			panel_h['add'](img);
			panel_h['add'](img2);
			panel_h['setSpacing'](8);
			panel = $m['VerticalPanel']();
			panel['add'](panel_h);
			panel['add'](html);
			panel['setSpacing'](8);
			self['setWidget'](panel);
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
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TooltipTab', $p['tuple']($bases), $data);
	})();
	$m['init'] = function() {
		var text,$add6,$add5;
		text = '<b>Tooltip popup component</b><p>Shows up after 1 second, hides after 5 seconds. Once activated, other tooltips show up immediately.';
		text = (typeof ($add5=text)==typeof ($add6='<br><br>Originally by Alexei Sokolov at <a href=\\"http://gwt.components.googlepages.com\\">gwt.components.googlepages.com</a>') && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6));
		return $m['SinkInfo']('Tooltip', text, $m['TooltipTab']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end TooltipTab */


/* end module: TooltipTab */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Tooltip.TooltipListener', 'pyjamas.ui.Tooltip']
*/
