/* start module: TestRect */
$pyjs.loaded_modules['TestRect'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TestRect'].__was_initialized__) return $pyjs.loaded_modules['TestRect'];
	var $m = $pyjs.loaded_modules["TestRect"];
	$m.__repr__ = function() { return "<module: TestRect>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TestRect';
	$m.__name__ = __mod_name__;
	var $bool1,$eq1,$eq2;

	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['Rect'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TestRect';
		$method = $pyjs__bind_method2('__init__', function(x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

self.rect = new rectobj();
			self['rect']['init'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(r) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				r = arguments[1];
			}

			self['rect']['add']($p['getattr'](r, 'rect'));
			return null;
		}
	, 1, [null,null,['self'],['r']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('area', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['rect']['area']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['area'] = $method;
		$method = $pyjs__bind_method2('get_x', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'rect'), 'x');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_x'] = $method;
		$method = $pyjs__bind_method2('get_y', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'rect'), 'y');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_y'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Rect', $p['tuple']($bases), $data);
	})();
	$m['TestRect'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TestRect';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.r = $m['Rect'](0.0, 0.0);
			self.xbox = $m['TextBox']();
			self.ybox = $m['TextBox']();
			self.addbutton = $m['Button']('Click to add x and y to Rectangle');
			self['addbutton']['addClickListener'](self);
			self['xbox']['setText']('2');
			self['ybox']['setText']('5');
			$m['RootPanel']()['add']($m['HTML']('X Value:'));
			$m['RootPanel']()['add']($p['getattr'](self, 'xbox'));
			$m['RootPanel']()['add']($m['HTML']('Y Value:'));
			$m['RootPanel']()['add']($p['getattr'](self, 'ybox'));
			$m['RootPanel']()['add']($p['getattr'](self, 'addbutton'));
			$m['RootPanel']()['add']($m['HTML']($p['sprintf']('Current value: %d %d', $p['tuple']([self['r']['get_x'](), self['r']['get_y']()]))));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var y,x,r;
			x = $p['float_int'](self['xbox']['getText']());
			y = $p['float_int'](self['ybox']['getText']());
			r = $m['Rect'](x, y);
			self['r']['add'](r);
			$m['RootPanel']()['add']($m['HTML']($p['sprintf']('New value: %d', self['r']['get_x']())));
			$m['RootPanel']()['add']($m['HTML']($p['sprintf']('New value: %d', self['r']['get_y']())));
			$m['RootPanel']()['add']($m['HTML']($p['sprintf']('New value: %d %d', $p['tuple']([self['r']['get_x'](), self['r']['get_y']()]))));
			$m['RootPanel']()['add']($m['HTML']($p['sprintf']('New Area: %d', self['r']['area']())));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TestRect', $p['tuple']($bases), $data);
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
		$m['app'] = $m['TestRect']();
		$m['app']['onModuleLoad']();
	}
	return this;
}; /* end TestRect */


/* end module: TestRect */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button']
*/
