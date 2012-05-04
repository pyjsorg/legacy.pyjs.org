/* start module: Tabs */
$pyjs.loaded_modules['Tabs'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Tabs'].__was_initialized__) return $pyjs.loaded_modules['Tabs'];
	var $m = $pyjs.loaded_modules["Tabs"];
	$m.__repr__ = function() { return "<module: Tabs>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Tabs';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Tabs'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Tabs';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add3,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9;
			$m['Sink']['__init__'](self);
			self.fTabs = $m['TabPanel']();
			self['fTabs']['addTabListener'](self);
			self['fTabs']['add'](self['createImage']((typeof ($add1=self['baseURL']())==typeof ($add2='rembrandt/JohannesElison.jpg') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))), '1634');
			self['fTabs']['add'](self['createImage']((typeof ($add3=self['baseURL']())==typeof ($add4='rembrandt/SelfPortrait1640.jpg') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4))), '1640');
			self['fTabs']['add'](self['createImage']((typeof ($add5=self['baseURL']())==typeof ($add6='rembrandt/LaMarcheNocturne.jpg') && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))), '1642');
			self['fTabs']['add'](self['createImage']((typeof ($add7=self['baseURL']())==typeof ($add8='rembrandt/TheReturnOfTheProdigalSon.jpg') && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8))), '1662');
			self['fTabs']['add'](self['createImage']((typeof ($add9=self['baseURL']())==typeof ($add10='rembrandt/TheReturnOfTheProdigalSon.jpg') && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10))), '1662 (disabled)');
			self['fTabs']['selectTab'](0);
			self['fTabs']['setWidth']('100%');
			self['fTabs']['setHeight']('100%');
			self['initWidget']($p['getattr'](self, 'fTabs'));
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
		$method = $pyjs__bind_method2('onBeforeTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $eq2,$eq1,$bool1;
			if ((($bool1=(($eq1=tabIndex)===($eq2=4)&&$eq1===null?true:
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
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onBeforeTabSelected'] = $method;
		$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var bar,$eq3,$eq4,$bool2;
			bar = self['fTabs']['getTabBar']();
			if ((($bool2=(($eq3=tabIndex)===($eq4=0)&&$eq3===null?true:
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
				bar['getTabWidget'](0)['setText']('1634 (selected)');
			}
			else {
				bar['getTabWidget'](0)['setText']('1634 (not selected)');
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onTabSelected'] = $method;
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Tabs', $p['tuple']($bases), $data);
	})();
	$m['init'] = function() {
		var $add14,text,$add11,$add12,$add13;
		text = "This page demonstrates GWT's support for images.  Notice in particular how it uses the image's onLoad event to display a 'wait spinner' between the back and forward buttons.";
		text = "GWT's built-in <code>TabPanel</code> class makes it easy to build tabbed dialogs ";
		text = (typeof ($add11=text)==typeof ($add12='and the like.  Notice that no page load occurs when you select the ') && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			$p['op_add']($add11,$add12));
		text = (typeof ($add13=text)==typeof ($add14="different tabs in this page.  That's the magic of dynamic HTML.") && (typeof $add13=='number'||typeof $add13=='string')?
			$add13+$add14:
			$p['op_add']($add13,$add14));
		return $m['SinkInfo']('Tabs', text, $m['Tabs']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end Tabs */


/* end module: Tabs */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel']
*/
