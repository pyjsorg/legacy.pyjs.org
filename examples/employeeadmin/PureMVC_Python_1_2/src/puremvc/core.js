/* start module: puremvc.core */
$pyjs.loaded_modules['puremvc.core'] = function (__mod_name__) {
	if($pyjs.loaded_modules['puremvc.core'].__was_initialized__) return $pyjs.loaded_modules['puremvc.core'];
	if(typeof $pyjs.loaded_modules['puremvc'] == 'undefined' || !$pyjs.loaded_modules['puremvc'].__was_initialized__) $p['___import___']('puremvc', null);
	var $m = $pyjs.loaded_modules["puremvc.core"];
	$m.__repr__ = function() { return "<module: puremvc.core>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'puremvc.core';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['puremvc']['core'] = $pyjs.loaded_modules['puremvc.core'];


	$m['puremvc'] = $p['___import___']('puremvc.interfaces', 'puremvc');
	$m['puremvc'] = $p['___import___']('puremvc.patterns.observer', 'puremvc');
	$m['Controller'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.core';
		$cls_definition['instance'] = null;
		$cls_definition['view'] = null;
		$cls_definition['commandMap'] = null;
		$method = $pyjs__bind_method2('__new__', function(cls) {
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof cls != 'undefined') {
					if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = cls;
						cls = arguments[1];
					}
				} else {
				}
			}
			var $or1,$or2,$bool2,$bool3,$bool1,$bool4;
			if ((($bool4=((($bool2=$or1=!(($bool1=$p['getattr'](cls, 'instance')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					 true ) )?$or1:!(($bool3=$p['isinstance']($p['getattr'](cls, 'instance'), cls)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				cls.instance = $pyjs_kwargs_call($p['$$super']($m['Controller'], cls), '__new__', args, kwargs, [{}, cls]);
				cls['instance']['initializeController']();
			}
			return $p['getattr'](cls, 'instance');
		}
	, 3, ['args',['kwargs'],['cls']]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('getInstance', function() {

			return $m['Controller']();
		}
	, 3, [null,null]);
		$cls_definition['getInstance'] = $method;
		$method = $pyjs__bind_method2('initializeController', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.view = $m.View['getInstance']();
			self.commandMap = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initializeController'] = $method;
		$method = $pyjs__bind_method2('executeCommand', function(note) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				note = arguments[1];
			}
			var $eq1,$eq2,commandClassRef,$bool5,commandInstance;
			commandClassRef = self['commandMap']['get'](note['getName'](), null);
			if ((($bool5=(($eq1=commandClassRef)===($eq2=null)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			commandInstance = commandClassRef();
			commandInstance['execute'](note);
			return null;
		}
	, 1, [null,null,['self'],['note']]);
		$cls_definition['executeCommand'] = $method;
		$method = $pyjs__bind_method2('registerCommand', function(notificationName, commandClassRef) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
				commandClassRef = arguments[2];
			}
			var $eq3,$eq4,$bool6;
			if ((($bool6=(($eq3=self['commandMap']['get'](notificationName, null))===($eq4=null)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['view']['registerObserver'](notificationName, $m['puremvc']['patterns']['observer']['Observer']($p['getattr'](self, 'executeCommand'), self));
			}
			$p['getattr'](self, 'commandMap').__setitem__(notificationName, commandClassRef);
			return null;
		}
	, 1, [null,null,['self'],['notificationName'],['commandClassRef']]);
		$cls_definition['registerCommand'] = $method;
		$method = $pyjs__bind_method2('hasCommand', function(notificationName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
			}

			return (self['commandMap']['get'](notificationName, null) !== null);
		}
	, 1, [null,null,['self'],['notificationName']]);
		$cls_definition['hasCommand'] = $method;
		$method = $pyjs__bind_method2('removeCommand', function(notificationName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
			}
			var $bool7;
			if ((($bool7=self['hasCommand'](notificationName)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['view']['removeObserver'](notificationName, self);
				$p['getattr'](self, 'commandMap').__delitem__(notificationName);
			}
			return null;
		}
	, 1, [null,null,['self'],['notificationName']]);
		$cls_definition['removeCommand'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'IController'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Controller', $p['tuple']($bases), $data);
	})();
	$m['Model'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.core';
		$cls_definition['instance'] = null;
		$cls_definition['proxyMap'] = null;
		$method = $pyjs__bind_method2('__new__', function(cls) {
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof cls != 'undefined') {
					if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = cls;
						cls = arguments[1];
					}
				} else {
				}
			}
			var $or4,$or3,$bool10,$bool11,$bool8,$bool9;
			if ((($bool11=((($bool9=$or3=!(($bool8=$p['getattr'](cls, 'instance')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:!(($bool10=$p['isinstance']($p['getattr'](cls, 'instance'), cls)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11.__nonzero__=='function'?
							$bool11.__nonzero__() :
							(typeof $bool11.__len__=='function'?
								($bool11.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				cls.instance = $pyjs_kwargs_call($p['$$super']($m['Model'], cls), '__new__', args, kwargs, [{}, cls]);
				cls['instance']['initializeModel']();
			}
			return $p['getattr'](cls, 'instance');
		}
	, 3, ['args',['kwargs'],['cls']]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('getInstance', function() {

			return $m['Model']();
		}
	, 3, [null,null]);
		$cls_definition['getInstance'] = $method;
		$method = $pyjs__bind_method2('initializeModel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.proxyMap = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initializeModel'] = $method;
		$method = $pyjs__bind_method2('registerProxy', function(proxy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxy = arguments[1];
			}

			$p['getattr'](self, 'proxyMap').__setitem__(proxy['getProxyName'](), proxy);
			proxy['onRegister']();
			return null;
		}
	, 1, [null,null,['self'],['proxy']]);
		$cls_definition['registerProxy'] = $method;
		$method = $pyjs__bind_method2('retrieveProxy', function(proxyName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxyName = arguments[1];
			}

			return self['proxyMap']['get'](proxyName, null);
		}
	, 1, [null,null,['self'],['proxyName']]);
		$cls_definition['retrieveProxy'] = $method;
		$method = $pyjs__bind_method2('hasProxy', function(proxyName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxyName = arguments[1];
			}

			return (self['proxyMap']['get'](proxyName, null) !== null);
		}
	, 1, [null,null,['self'],['proxyName']]);
		$cls_definition['hasProxy'] = $method;
		$method = $pyjs__bind_method2('removeProxy', function(proxyName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proxyName = arguments[1];
			}
			var $bool12,proxy;
			proxy = self['proxyMap']['get'](proxyName, null);
			if ((($bool12=proxy) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$p['getattr'](self, 'proxyMap').__delitem__(proxyName);
				proxy['onRemove']();
			}
			return proxy;
		}
	, 1, [null,null,['self'],['proxyName']]);
		$cls_definition['removeProxy'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'IModel'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Model', $p['tuple']($bases), $data);
	})();
	$m['View'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'puremvc.core';
		$cls_definition['instance'] = null;
		$cls_definition['observerMap'] = null;
		$cls_definition['mediatorMap'] = null;
		$method = $pyjs__bind_method2('__new__', function(cls) {
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof cls != 'undefined') {
					if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = cls;
						cls = arguments[1];
					}
				} else {
				}
			}
			var $or5,$bool13,$bool14,$bool15,$bool16,$or6;
			if ((($bool16=((($bool14=$or5=!(($bool13=$p['getattr'](cls, 'instance')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:!(($bool15=$p['isinstance']($p['getattr'](cls, 'instance'), cls)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				cls.instance = $pyjs_kwargs_call($p['$$super']($m['View'], cls), '__new__', args, kwargs, [{}, cls]);
				cls['instance']['initializeView']();
			}
			return $p['getattr'](cls, 'instance');
		}
	, 3, ['args',['kwargs'],['cls']]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('getInstance', function() {

			return $m['View']();
		}
	, 3, [null,null]);
		$cls_definition['getInstance'] = $method;
		$method = $pyjs__bind_method2('initializeView', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.observerMap = $p['dict']([]);
			self.mediatorMap = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initializeView'] = $method;
		$method = $pyjs__bind_method2('registerObserver', function(notificationName, observer) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
				observer = arguments[2];
			}
			var $bool18,$bool17,$2,$1;
			if ((($bool18=!(($bool17=$p['getattr'](self, 'observerMap').__contains__(notificationName)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17.__nonzero__=='function'?
						$bool17.__nonzero__() :
						(typeof $bool17.__len__=='function'?
							($bool17.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18.__nonzero__=='function'?
							$bool18.__nonzero__() :
							(typeof $bool18.__len__=='function'?
								($bool18.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$p['getattr'](self, 'observerMap').__setitem__(notificationName, $p['list']([]));
			}
			(typeof ($1=$p['getattr'](self, 'observerMap')).__array != 'undefined'?
				((typeof $1.__array[$2=notificationName]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(notificationName))['append'](observer);
			return null;
		}
	, 1, [null,null,['self'],['notificationName'],['observer']]);
		$cls_definition['registerObserver'] = $method;
		$method = $pyjs__bind_method2('notifyObservers', function(notification) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notification = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,observers,obsvr,$iter1_array,$iter1_idx;
			observers = $p['__getslice'](self['observerMap']['get'](notification['getName'](), $p['list']([])), 0, null);
			$iter1_iter = observers;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				obsvr = $iter1_nextval;
				obsvr['notifyObserver'](notification);
			}
			return null;
		}
	, 1, [null,null,['self'],['notification']]);
		$cls_definition['notifyObservers'] = $method;
		$method = $pyjs__bind_method2('removeObserver', function(notificationName, notifyContext) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				notificationName = arguments[1];
				notifyContext = arguments[2];
			}
			var $bool19,$iter2_iter,$bool20,$len2,$sub1,$iter2_type,$eq6,$eq5,observers,$iter2_idx,$sub2,$6,$4,$5,$3,$iter2_nextval,i,$len1,$iter2_array;
			observers = (typeof ($3=$p['getattr'](self, 'observerMap')).__array != 'undefined'?
				((typeof $3.__array[$4=notificationName]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(notificationName));
			$iter2_iter = $p['range']((typeof ($sub1=(($len1=observers) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)), (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				if ((($bool19=(typeof ($5=observers).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i))['compareNotifyContext'](notifyContext)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					observers['pop'](i);
					break;
				}
			}
			if ((($bool20=(($eq5=(($len2=observers) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))===($eq6=0)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20.__nonzero__=='function'?
							$bool20.__nonzero__() :
							(typeof $bool20.__len__=='function'?
								($bool20.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$p['getattr'](self, 'observerMap').__delitem__(notificationName);
			}
			return null;
		}
	, 1, [null,null,['self'],['notificationName'],['notifyContext']]);
		$cls_definition['removeObserver'] = $method;
		$method = $pyjs__bind_method2('registerMediator', function(mediator) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediator = arguments[1];
			}
			var interests,$iter3_idx,$cmp1,$iter3_type,i,$cmp2,$len4,obsvr,$bool21,$len3,$8,$bool22,$7,$iter3_nextval,$iter3_array,$iter3_iter;
			if ((($bool21=$p['getattr'](self, 'mediatorMap').__contains__(mediator['getMediatorName']())) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			$p['getattr'](self, 'mediatorMap').__setitem__(mediator['getMediatorName'](), mediator);
			interests = mediator['listNotificationInterests']();
			if ((($bool22=((($cmp1=(($len3=interests) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				obsvr = $m['puremvc']['patterns']['observer']['Observer']($p['getattr'](mediator, 'handleNotification'), mediator);
				$iter3_iter = $p['range'](0, (($len4=interests) === null?0:
					(typeof $len4.__array != 'undefined' ? $len4.__array.length:
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'?$len4.length:
								$p['len']($len4))))));
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					self['registerObserver']((typeof ($7=interests).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i)), obsvr);
				}
			}
			mediator['onRegister']();
			return null;
		}
	, 1, [null,null,['self'],['mediator']]);
		$cls_definition['registerMediator'] = $method;
		$method = $pyjs__bind_method2('retrieveMediator', function(mediatorName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediatorName = arguments[1];
			}

			return self['mediatorMap']['get'](mediatorName, null);
		}
	, 1, [null,null,['self'],['mediatorName']]);
		$cls_definition['retrieveMediator'] = $method;
		$method = $pyjs__bind_method2('removeMediator', function(mediatorName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediatorName = arguments[1];
			}
			var $iter5_nextval,mediator,$iter5_idx,$iter5_iter,$iter4_type,$eq10,$iter5_type,$iter4_iter,$len6,$bool25,$bool24,$iter5_array,$sub3,$sub4,$eq8,$eq9,$bool23,$eq7,observers,$9,$10,$11,$12,i,$iter4_nextval,$iter4_idx,$len5,notificationName,$iter4_array;
			$iter4_iter = self['observerMap']['keys']();
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				notificationName = $iter4_nextval;
				observers = (typeof ($9=$p['getattr'](self, 'observerMap')).__array != 'undefined'?
					((typeof $9.__array[$10=notificationName]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(notificationName));
				$iter5_iter = $p['range']((typeof ($sub3=(($len5=observers) === null?0:
					(typeof $len5.__array != 'undefined' ? $len5.__array.length:
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'?$len5.length:
								$p['len']($len5))))))==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)), (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)), (typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					if ((($bool23=(($eq7=(typeof ($11=observers).__array != 'undefined'?
						((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(i))['compareNotifyContext'](self['retrieveMediator'](mediatorName)))===($eq8=true)&&$eq7===null?true:
						($eq7===null?false:($eq8===null?false:
							((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
								((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
									$eq7==$eq8)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
							false :
							(typeof $bool23=='object'?
								(typeof $bool23.__nonzero__=='function'?
									$bool23.__nonzero__() :
									(typeof $bool23.__len__=='function'?
										($bool23.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						observers['pop'](i);
					}
				}
				if ((($bool24=(($eq9=(($len6=observers) === null?0:
					(typeof $len6.__array != 'undefined' ? $len6.__array.length:
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'?$len6.length:
								$p['len']($len6))))))===($eq10=0)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'observerMap').__delitem__(notificationName);
				}
			}
			mediator = self['mediatorMap']['get'](mediatorName, null);
			if ((($bool25=(mediator !== null)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$p['getattr'](self, 'mediatorMap').__delitem__(mediatorName);
				mediator['onRemove']();
			}
			return mediator;
		}
	, 1, [null,null,['self'],['mediatorName']]);
		$cls_definition['removeMediator'] = $method;
		$method = $pyjs__bind_method2('hasMediator', function(mediatorName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mediatorName = arguments[1];
			}

			return (self['mediatorMap']['get'](mediatorName, null) !== null);
		}
	, 1, [null,null,['self'],['mediatorName']]);
		$cls_definition['hasMediator'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'IView'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('View', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end puremvc.core */


/* end module: puremvc.core */


/*
PYJS_DEPS: ['puremvc.interfaces', 'puremvc', 'puremvc.patterns.observer', 'puremvc.patterns']
*/
