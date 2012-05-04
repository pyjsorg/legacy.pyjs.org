/* start module: Builder */
$pyjs.loaded_modules['Builder'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Builder'].__was_initialized__) return $pyjs.loaded_modules['Builder'];
	var $m = $pyjs.loaded_modules["Builder"];
	$m.__repr__ = function() { return "<module: Builder>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Builder';
	$m.__name__ = __mod_name__;
	var $bool1,$eq2,$eq1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Builder'] = $p['___import___']('pyjamas.builder.Builder.Builder', null, null, false);
	$m['HTTPUILoader'] = $p['___import___']('pyjamas.builder.Builder.HTTPUILoader', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['BuilderPanel'] = $p['___import___']('pyjamas.ui.BuilderPanel.BuilderPanel', null, null, false);
	$m['Caption1Events'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Builder';
		$method = $pyjs__bind_method2('__init__', function(app) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				app = arguments[1];
			}
			if (typeof app == 'undefined') app=arguments.callee.__args__[3][1];

			self.app = app;
			return null;
		}
	, 1, [null,null,['self'],['app', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onHTMLMouseMoved', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onHTMLMouseMoved'] = $method;
		$method = $pyjs__bind_method2('onInputBoxFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onInputBoxFocus'] = $method;
		$method = $pyjs__bind_method2('onHTMLClicked', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,v;
			self['app']['login']['setWidth']('600px');
			self['app']['login']['setHeight']('400px');
			self['app']['login']['setPopupPosition'](10, 10);
			self['app']['login']['show']();
			$iter1_iter = $p['dir']($p['getattr']($p['getattr'](self, 'app'), 'login'));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				v = $iter1_nextval;
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onHTMLClicked'] = $method;
		$method = $pyjs__bind_method2('onMenuItem2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onMenuItem2'] = $method;
		$method = $pyjs__bind_method2('onMenuItem3', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onMenuItem3'] = $method;
		$method = $pyjs__bind_method2('onMenuItem5', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onMenuItem5'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Caption1Events', $p['tuple']($bases), $data);
	})();
	$m['BuilderEvents'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Builder';
		$method = $pyjs__bind_method2('__init__', function(app) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				app = arguments[1];
			}
			if (typeof app == 'undefined') app=arguments.callee.__args__[3][1];

			self.app = app;
			return null;
		}
	, 1, [null,null,['self'],['app', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onAddClicked', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add2,$add1,grid,row;
			grid = self['app']['bp']['getPanel']();
			row = (typeof ($add1=grid['getRowCount']())==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			grid['resize'](row, 1);
			self['app']['bp']['add']('builderrow', row, 0);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onAddClicked'] = $method;
		$method = $pyjs__bind_method2('onRemoveClicked', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var widget,grid,col,row;
			widget = sender['getParent']();
			grid = self['app']['bp']['getPanel']();
			var $tupleassign1 = $p['__ass_unpack'](grid['getIndex'](widget), 2, null);
			row = $tupleassign1[0];
			col = $tupleassign1[1];
			grid['removeRow'](row);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onRemoveClicked'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('BuilderEvents', $p['tuple']($bases), $data);
	})();
	$m['EventTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Builder';
		$method = $pyjs__bind_method2('onHTMLMouseMoved', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onHTMLMouseMoved'] = $method;
		$method = $pyjs__bind_method2('onUILoaded', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var builderevents,caption1events;
			self.b = $m['Builder'](text);
			caption1events = $m['Caption1Events'](self);
			builderevents = $m['BuilderEvents'](self);
			self.caption1 = self['b']['createInstance']('CaptionPanel1', caption1events);
			self.caption2 = self['b']['createInstance']('CaptionPanel2', self);
			self.login = self['b']['createInstance']('AppLogin', self);
			self.bp = $pyjs_kwargs_call(null, $m['BuilderPanel'], null, null, [{PanelInstanceName:'Grid1', InstanceName:'builderpanel', Builder:$p['getattr'](self, 'b'), EventReceiver:builderevents}]);
			$m['RootPanel']()['add']($p['getattr'](self, 'caption1'));
			$m['RootPanel']()['add']($p['getattr'](self, 'caption2'));
			$m['RootPanel']()['add']($p['getattr'](self, 'bp'));
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onUILoaded'] = $method;
		$method = $pyjs__bind_method2('onUILoadingTimeout', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onUILoadingTimeout'] = $method;
		$method = $pyjs__bind_method2('onUILoadError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onUILoadError'] = $method;
		var $bases = new Array($m['Caption1Events']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EventTest', $p['tuple']($bases), $data);
	})();
	if ((($bool1=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
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
		$m['pyjd']['setup']('http://127.0.0.1/examples/builder/public/Builder.html?fred=foo#me');
		$m['et'] = $m['EventTest']();
		$m['HTTPUILoader']($m['et'])['load']('builder.xml');
		$m['pyjd']['run']();
	}
	return this;
}; /* end Builder */


/* end module: Builder */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.builder.Builder.Builder', 'pyjamas', 'pyjamas.builder', 'pyjamas.builder.Builder', 'pyjamas.builder.Builder.HTTPUILoader', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.BuilderPanel.BuilderPanel', 'pyjamas.ui.BuilderPanel']
*/
