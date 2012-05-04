/* start module: GradientDemo */
$pyjs.loaded_modules['GradientDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GradientDemo'].__was_initialized__) return $pyjs.loaded_modules['GradientDemo'];
	var $m = $pyjs.loaded_modules["GradientDemo"];
	$m.__repr__ = function() { return "<module: GradientDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GradientDemo';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', null, null, false);
	$m['SimpleCanvasDemo'] = $p['___import___']('SimpleCanvasDemo.SimpleCanvasDemo', null, null, false);
	$m['GradientDemoControls'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GradientDemo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var layout;
			layout = $m['VerticalPanel']();
			layout['add']($m['HTML']('<b style="color:#f00;">Stroke Gradients currently not working correctly in IE. RadialGradients are not supported in VML. Contributor assistance welcome :).</b>'));
			$m['Composite']['__init__'](self, layout);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GradientDemoControls', $p['tuple']($bases), $data);
	})();
	$m['GradientDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GradientDemo';
		$method = $pyjs__bind_method2('__init__', function(theCanvas) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				theCanvas = arguments[1];
			}

			$m['SimpleCanvasDemo']['__init__'](self, theCanvas);
			self.width = 400;
			self.height = 400;
			self.demoName = 'Gradients';
			return null;
		}
	, 1, [null,null,['self'],['theCanvas']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createControls', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.controls = $m['GradientDemoControls']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createControls'] = $method;
		$method = $pyjs__bind_method2('drawDemo', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var radgrad4,radgrad3,radgrad2,lingrad2,radgrad,lingrad;
			self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['canvas']['saveContext']();
			lingrad = self['canvas']['createLinearGradient'](0, 0, 0, 150);
			lingrad['addColorStop'](0.0, $m['Color']('#00ABEB'));
			lingrad['addColorStop'](0.5, $m['Color']('#fff'));
			lingrad['addColorStop'](0.5, $m['Color']('#26C000'));
			lingrad['addColorStop'](1, $m['Color']('#fff'));
			lingrad2 = self['canvas']['createLinearGradient'](0, 50, 0, 95);
			lingrad2['addColorStop'](0.5, $m['Color']('#000'));
			lingrad2['addColorStop'](1, $m['Color']('rgba(0,0,0,0)'));
			self['canvas']['setFillStyle'](lingrad);
			self['canvas']['setStrokeStyle'](lingrad2);
			self['canvas']['fillRect'](10, 10, 130, 130);
			self['canvas']['strokeRect'](50, 50, 50, 50);
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['translate'](150, 150);
			radgrad = self['canvas']['createRadialGradient'](45, 45, 10, 52, 50, 30);
			radgrad['addColorStop'](0, $m['Color']('#A7D30C'));
			radgrad['addColorStop'](0.9, $m['Color']('#019F62'));
			radgrad['addColorStop'](1, $m['Color']('rgba(1,159,98,0)'));
			radgrad2 = self['canvas']['createRadialGradient'](105, 105, 20, 112, 120, 50);
			radgrad2['addColorStop'](0, $m['Color']('#FF5F98'));
			radgrad2['addColorStop'](0.75, $m['Color']('#FF0188'));
			radgrad2['addColorStop'](1, $m['Color']('rgba(255,1,136,0)'));
			radgrad3 = self['canvas']['createRadialGradient'](95, 15, 15, 102, 20, 40);
			radgrad3['addColorStop'](0, $m['Color']('#00C9FF'));
			radgrad3['addColorStop'](0.8, $m['Color']('#00B5E2'));
			radgrad3['addColorStop'](1, $m['Color']('rgba(0,201,255,0)'));
			radgrad4 = self['canvas']['createRadialGradient'](0, 150, 50, 0, 140, 90);
			radgrad4['addColorStop'](0, $m['Color']('#F4F201'));
			radgrad4['addColorStop'](0.8, $m['Color']('#E4C700'));
			radgrad4['addColorStop'](1, $m['Color']('rgba(228,199,0,0)'));
			self['canvas']['setFillStyle'](radgrad4);
			self['canvas']['fillRect'](0, 0, 150, 150);
			self['canvas']['setFillStyle'](radgrad3);
			self['canvas']['fillRect'](0, 0, 150, 150);
			self['canvas']['setFillStyle'](radgrad2);
			self['canvas']['fillRect'](0, 0, 150, 150);
			self['canvas']['setFillStyle'](radgrad);
			self['canvas']['fillRect'](0, 0, 150, 150);
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawDemo'] = $method;
		$method = $pyjs__bind_method2('stopDemo', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stopDemo'] = $method;
		var $bases = new Array($m['SimpleCanvasDemo']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GradientDemo', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GradientDemo */


/* end module: GradientDemo */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'SimpleCanvasDemo.SimpleCanvasDemo', 'SimpleCanvasDemo']
*/
