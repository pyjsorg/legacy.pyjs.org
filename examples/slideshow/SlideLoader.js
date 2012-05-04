/* start module: SlideLoader */
$pyjs.loaded_modules['SlideLoader'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SlideLoader'].__was_initialized__) return $pyjs.loaded_modules['SlideLoader'];
	var $m = $pyjs.loaded_modules["SlideLoader"];
	$m.__repr__ = function() { return "<module: SlideLoader>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SlideLoader';
	$m.__name__ = __mod_name__;


	$m['SlideListLoader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SlideLoader';
		$method = $pyjs__bind_method2('__init__', function(panel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			self.panel = panel;
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $eq1,$iter1_nextval,$iter1_type,$eq2,$len1,l,$iter1_iter,$bool2,$bool3,$bool1,$iter1_array,res,$4,$1,$2,$3,$iter1_idx;
			res = $p['list']([]);
			$iter1_iter = text['$$split']('\n');
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				l = $iter1_nextval;
				if ((($bool2=!(($bool1=l) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					continue;
				}
				l = l['$$split'](':');
				if ((($bool3=!(($eq1=(($len1=l) === null?0:
					(typeof $len1.__array != 'undefined' ? $len1.__array.length:
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'?$len1.length:
								$p['len']($len1))))))===($eq2=2)&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					continue;
				}
				res['append']($p['list']([(typeof ($1=l).__array != 'undefined'?
					((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(0))['strip'](), (typeof ($3=l).__array != 'undefined'?
					((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(1))['strip']()]));
			}
			self['panel']['setSlides'](res);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			self['panel']['onError'](text, code);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['onTimeout'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SlideListLoader', $p['tuple']($bases), $data);
	})();
	$m['SlideLoader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SlideLoader';
		$method = $pyjs__bind_method2('__init__', function(panel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			self.panel = panel;
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['setSlide'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			self['panel']['onError'](text, code);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['onTimeout'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		$method = $pyjs__bind_method2('onProgress', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['panel']['onProgress'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onProgress'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SlideLoader', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end SlideLoader */


/* end module: SlideLoader */


