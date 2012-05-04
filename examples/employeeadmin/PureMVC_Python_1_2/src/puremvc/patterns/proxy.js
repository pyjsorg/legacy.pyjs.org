/* start module: puremvc.patterns.proxy */
$pyjs.loaded_modules['puremvc.patterns.proxy'] = function (__mod_name__) {
	if($pyjs.loaded_modules['puremvc.patterns.proxy'].__was_initialized__) return $pyjs.loaded_modules['puremvc.patterns.proxy'];
	if(typeof $pyjs.loaded_modules['puremvc.patterns'] == 'undefined' || !$pyjs.loaded_modules['puremvc.patterns'].__was_initialized__) $p['___import___']('puremvc.patterns', null);
	var $m = $pyjs.loaded_modules["puremvc.patterns.proxy"];
	$m.__repr__ = function() { return "<module: puremvc.patterns.proxy>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'puremvc.patterns.proxy';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['puremvc.patterns']['proxy'] = $pyjs.loaded_modules['puremvc.patterns.proxy'];


	$m['puremvc'] = $p['___import___']('puremvc.interfaces', 'puremvc.patterns');
	$m['puremvc'] = $p['___import___']('puremvc.patterns.observer', 'puremvc.patterns');
	$m['puremvc'] = $p['___import___']('puremvc.patterns.facade', 'puremvc.patterns');
	$m['Proxy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.patterns.proxy';
		$cls_definition['NAME'] = 'Proxy';
		$cls_definition['facade'] = null;
		$cls_definition['proxyName'] = null;
		$cls_definition['data'] = null;
		$method = $pyjs__bind_method2('__init__', function(proxyName, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxyName = arguments[1];
				data = arguments[2];
			}
			if (typeof proxyName == 'undefined') proxyName=arguments.callee.__args__[3][1];
			if (typeof data == 'undefined') data=arguments.callee.__args__[4][1];
			var $or1,$or2,$bool2,$bool3,$bool1;
			self.facade = $m['puremvc']['patterns']['facade']['Facade']['getInstance']();
			proxyName = ((($bool1=$or1=proxyName) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$p['getattr'](self, 'NAME'));
			if ((($bool2=(proxyName === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				throw ($p['ValueError']('Proxy name cannot be None'));
			}
			self.proxyName = proxyName;
			if ((($bool3=data) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['setData'](data);
			}
			return null;
		}
	, 1, [null,null,['self'],['proxyName', null],['data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getProxyName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'proxyName');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getProxyName'] = $method;
		$method = $pyjs__bind_method2('setData', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			self.data = data;
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['setData'] = $method;
		$method = $pyjs__bind_method2('getData', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'data');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getData'] = $method;
		$method = $pyjs__bind_method2('onRegister', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onRegister'] = $method;
		$method = $pyjs__bind_method2('onRemove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onRemove'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($p['getattr']($m['puremvc'], 'patterns'), 'observer'), 'Notifier'),$p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'IProxy'),$p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'INotifier'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Proxy', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end puremvc.patterns.proxy */


/* end module: puremvc.patterns.proxy */


/*
PYJS_DEPS: ['puremvc.interfaces', 'puremvc', 'puremvc.patterns.observer', 'puremvc.patterns', 'puremvc.patterns.facade']
*/
