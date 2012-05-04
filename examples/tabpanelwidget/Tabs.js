/* start module: Tabs */
$pyjs.loaded_modules['Tabs'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Tabs'].__was_initialized__) return $pyjs.loaded_modules['Tabs'];
	var $m = $pyjs.loaded_modules["Tabs"];
	$m.__repr__ = function() { return "<module: Tabs>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Tabs';
	$m.__name__ = __mod_name__;
	var $eq6,$bool2,$eq5;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', null, null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', null, null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DecoratedTabPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratedTabPanel', null, null, false);
	$m['DecoratorPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratorPanel', null, null, false);
	$m['DecoratorTitledPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratorTitledPanel', null, null, false);
	$m['PrettyTab'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Tabs';
		$method = $pyjs__bind_method2('__init__', function(text, imageUrl) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				imageUrl = arguments[2];
			}
			var p;
			$m['DecoratorPanel']['__init__'](self, $p['getattr']($m['DecoratorPanel'], 'DECORATE_ALL'));
			p = $m['HorizontalPanel']();
			p['setSpacing'](3);
			self.img = $m['Image'](imageUrl);
			self.txt = $m['HTML'](text);
			p['add']($p['getattr'](self, 'img'));
			p['add']($p['getattr'](self, 'txt'));
			self['add'](p);
			return null;
		}
	, 1, [null,null,['self'],['text'],['imageUrl']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addClickListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['img']['addClickListener'](listener);
			self['txt']['addClickListener'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addClickListener'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PrettyTab', $p['tuple']($bases), $data);
	})();
	$m['Tabs'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Tabs';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var green,dp,red;
			red = '1638';
			green = '1640';
			self.fTabs = $pyjs_kwargs_call(null, $m['DecoratedTabPanel'], null, null, [{Size:$p['tuple'](['600px', '100%'])}]);
			$pyjs_kwargs_call(self['fTabs'], 'add', null, null, [{name:'johannes'}, self['createImage']('rembrandt/JohannesElison.jpg'), red, true]);
			$pyjs_kwargs_call(self['fTabs'], 'add', null, null, [{name:'self'}, self['createImage']('rembrandt/SelfPortrait1640.jpg'), green, true]);
			$pyjs_kwargs_call(self['fTabs'], 'add', null, null, [{name:'lamarche'}, self['createImage']('rembrandt/LaMarcheNocturne.jpg'), '1642']);
			self['fTabs']['add'](self['createImage']('rembrandt/TheReturnOfTheProdigalSon.jpg'), '1662', 'prodigal');
			self['fTabs']['add']($m['HTML']("shouldn't be here!"), null);
			self['fTabs']['add']($m['HTML']('This is a Test.<br />Tab should be on right'), 'Test', 'test');
			self['fTabs']['selectTab'](0);
			dp = $m['DecoratorTitledPanel']('Tabs', 'bluetitle', 'bluetitleicon', $p['list'](['bluetop', 'bluetop2', 'bluemiddle', 'bluebottom']));
			dp['add']($p['getattr'](self, 'fTabs'));
			$m['RootPanel']()['add'](dp);
			self['fTabs']['addTabListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('createImage', function(imageUrl) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imageUrl = arguments[1];
			}
			var p,image;
			image = $m['Image'](imageUrl);
			image['setStyleName']('ks-images-Image');
			p = $m['VerticalPanel']();
			p['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'));
			p['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'));
			p['add'](image);
			return p;
		}
	, 1, [null,null,['self'],['imageUrl']]);
		$cls_definition['createImage'] = $method;
		$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onTabSelected'] = $method;
		$method = $pyjs__bind_method2('onBeforeTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $eq2,$eq3,$eq1,$eq4,$bool1;
			if ((($bool1=(($eq1=self['fTabs']['getWidgetCount']())===($eq2=6)&&$eq1===null?true:
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
				$pyjs_kwargs_call(self['fTabs'], 'add', null, null, [{name:'test2'}, $m['HTML']('2nd Test.<br />Tab should be on right'), '2nd Test']);
				return true;
			}
			self['fTabs']['remove']('test2');
			return !(($eq3=tabIndex)===($eq4=6)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))));
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onBeforeTabSelected'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Tabs', $p['tuple']($bases), $data);
	})();
	if ((($bool2=(($eq5=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq6='__main__')&&$eq5===null?true:
		($eq5===null?false:($eq6===null?false:
			((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
				((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
					$eq5==$eq6)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
		$m['pyjd']['setup']('./public/Tabs.html');
		$m['app'] = $m['Tabs']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end Tabs */


/* end module: Tabs */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.TabBar.TabBar', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.TabBar', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.MouseListener', 'pyjamas.ui.Event', 'pyjamas.Window', 'pyjamas.ui.DecoratorPanel.DecoratedTabPanel', 'pyjamas.ui.DecoratorPanel', 'pyjamas.ui.DecoratorPanel.DecoratorPanel', 'pyjamas.ui.DecoratorPanel.DecoratorTitledPanel']
*/
