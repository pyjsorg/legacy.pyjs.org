/* start module: TestDict */
$pyjs.loaded_modules['TestDict'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TestDict'].__was_initialized__) return $pyjs.loaded_modules['TestDict'];
	var $m = $pyjs.loaded_modules["TestDict"];
	$m.__repr__ = function() { return "<module: TestDict>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TestDict';
	$m.__name__ = __mod_name__;
	var $eq1,$bool1,$eq2;

	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['WrapperDict'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TestDict';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var d;
			d = $p['dict']([['hello', 'world'], ['goodbye', 2]]);

           self.dict = new dictobj();
           
			self['dict']['init'](d);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('python_get_value', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $2,$1;
			return (typeof ($1=$p['getattr']($p['getattr'](self, 'dict'), 'd')).__array != 'undefined'?
				((typeof $1.__array[$2=key]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(key));
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['python_get_value'] = $method;
		$method = $pyjs__bind_method2('python_dict_length', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len1;
			return (($len1=$p['getattr'](self, 'dict')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['python_dict_length'] = $method;
		$method = $pyjs__bind_method2('javascript_get_value', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			return self['dict']['get_value'](key);
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['javascript_get_value'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('WrapperDict', $p['tuple']($bases), $data);
	})();
	$m['TestDict'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TestDict';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.r = $m['WrapperDict']();
			self.kbox = $m['TextBox']();
			self.addbutton = $m['Button']('Click to look up key value (hello or goodbye)');
			self['addbutton']['addClickListener'](self);
			self['kbox']['setText']('hello');
			$m['RootPanel']()['add']($m['HTML']('Key:'));
			$m['RootPanel']()['add']($p['getattr'](self, 'kbox'));
			$m['RootPanel']()['add']($p['getattr'](self, 'addbutton'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('display_value', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var key;
			key = self['kbox']['getText']();
			$m['RootPanel']()['add']($m['HTML']('Value using python:'));
			$m['RootPanel']()['add']($m['HTML'](self['r']['python_get_value'](key)));
			$m['RootPanel']()['add']($m['HTML']('Value using javascript:'));
			$m['RootPanel']()['add']($m['HTML'](self['r']['javascript_get_value'](key)));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['display_value'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['display_value']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TestDict', $p['tuple']($bases), $data);
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
		$m['app'] = $m['TestDict']();
		$m['app']['onModuleLoad']();
	}
	return this;
}; /* end TestDict */


/* end module: TestDict */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'jsdicttest.js']
*/
