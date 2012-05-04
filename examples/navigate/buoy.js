/* start module: buoy */
$pyjs.loaded_modules['buoy'] = function (__mod_name__) {
	if($pyjs.loaded_modules['buoy'].__was_initialized__) return $pyjs.loaded_modules['buoy'];
	var $m = $pyjs.loaded_modules["buoy"];
	$m.__repr__ = function() { return "<module: buoy>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'buoy';
	$m.__name__ = __mod_name__;


	$m['History'] = $p['___import___']('pyjamas.History', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Flare'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'buoy';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.params = $p['dict']([]);
			self.flare = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_parameters', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'params');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_parameters'] = $method;
		$method = $pyjs__bind_method2('set_parameters', function(params) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				params = arguments[1];
			}

			self.params = params;
			return null;
		}
	, 1, [null,null,['self'],['params']]);
		$cls_definition['set_parameters'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Flare', $p['tuple']($bases), $data);
	})();
	$m['Buoy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'buoy';
		$method = $pyjs__bind_method2('__init__', function(parent, title) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				parent = arguments[1];
				title = arguments[2];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof title != 'undefined') {
					if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = title;
						title = arguments[3];
					}
				} else 				if (typeof parent != 'undefined') {
					if (parent !== null && typeof parent['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = parent;
						parent = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			var $iter1_nextval,$iter1_type,$2,$iter1_iter,$bool2,$bool1,$iter1_array,crumb,$1,arg,$iter1_idx;
			self.parent = parent;
			self.flare = null;
			self.params = $p['dict']([]);
			$iter1_iter = args;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				arg = $iter1_nextval;
				self['add_parameters'](arg);
			}
			crumb = ((($bool1=kwargs.__contains__('crumb')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? ((typeof ($1=kwargs).__array != 'undefined'?
				((typeof $1.__array[$2='crumb']) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__('crumb'))) : (null));
			self.title = title;
			self.crumb = ((($bool2=crumb) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (crumb) : (title));
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['parent'],['title']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('$$new', function(title) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				title = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof title != 'undefined') {
					if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = title;
						title = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			return $pyjs_kwargs_call(null, $m['Buoy'], args, kwargs, [{}, self, title]);
		}
	, 1, ['args',['kwargs'],['self'],['title']]);
		$cls_definition['$$new'] = $method;
		$method = $pyjs__bind_method2('checkpoint', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool3,params,$bool4;
			params = self['navigate']();
			if ((($bool4=!(($bool3=params) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['drop_buoy']();
			}
			return params;
		}
	, 1, [null,null,['self']]);
		$cls_definition['checkpoint'] = $method;
		$method = $pyjs__bind_method2('navigate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and1,$bool6,$bool7,$bool5,$bool8,$and2;
			if ((($bool7=((($bool6=$and1=!(($bool5=self['parent']['_is_service']()) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5.__nonzero__=='function'?
						$bool5.__nonzero__() :
						(typeof $bool5.__len__=='function'?
							($bool5.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6.__nonzero__=='function'?
						$bool6.__nonzero__() :
						(typeof $bool6.__len__=='function'?
							($bool6.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['getattr']($p['getattr'](self, 'parent'), 'flare'):$and1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				self.flare = $p['getattr']($p['getattr']($p['getattr'](self, 'parent'), 'flare'), 'flare');
			}
			else {
				self.flare = $p['getattr']($p['getattr'](self, 'parent'), 'flare');
			}
			$p['getattr'](self, 'parent').flare = null;
			return ((($bool8=$p['getattr'](self, 'flare')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['flare']['get_parameters']()) : ($p['dict']([])));
		}
	, 1, [null,null,['self']]);
		$cls_definition['navigate'] = $method;
		$method = $pyjs__bind_method2('end', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool9,params;
			params = self['navigate']();
			if ((($bool9=params) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['update_buoy']();
			}
			else {
				self['drop_buoy']();
			}
			return params;
		}
	, 1, [null,null,['self']]);
		$cls_definition['end'] = $method;
		$method = $pyjs__bind_method2('plan', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool13,$bool10,$bool11,$and3,$and4,flare,$bool12;
			if ((($bool12=((($bool11=$and3=!(($bool10=self['_is_service']()) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['getattr'](self, 'flare'):$and3)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				flare = $p['getattr']($p['getattr'](self, 'flare'), 'flare');
			}
			else {
				flare = $p['getattr'](self, 'flare');
			}
			return ((($bool13=flare) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (flare['get_parameters']()) : ($p['dict']([])));
		}
	, 1, [null,null,['self']]);
		$cls_definition['plan'] = $method;
		$method = $pyjs__bind_method2('drop_buoy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_get_service']()['new_item'](self['construct_token']());
			self['notify']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drop_buoy'] = $method;
		$method = $pyjs__bind_method2('update_buoy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['notify']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update_buoy'] = $method;
		$method = $pyjs__bind_method2('notify', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var titles,crumbs,service;
			titles = self['_get_titles']();
			service = self['_get_service']();
			service['onTitlesChanged'](titles);
			crumbs = self['_get_breadcrumbs']();
			service['onBreadcrumbsChanged'](crumbs);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['notify'] = $method;
		$method = $pyjs__bind_method2('set_parameters', function(params) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				params = arguments[1];
			}

			self.params = params;
			return null;
		}
	, 1, [null,null,['self'],['params']]);
		$cls_definition['set_parameters'] = $method;
		$method = $pyjs__bind_method2('add_parameters', function(params) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				params = arguments[1];
			}

			self['params']['update'](params);
			return null;
		}
	, 1, [null,null,['self'],['params']]);
		$cls_definition['add_parameters'] = $method;
		$method = $pyjs__bind_method2('_get_titles', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool14,titles,obj;
			titles = $p['list']([]);
			obj = self;
			while ((($bool14=obj) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14.__nonzero__=='function'?
							$bool14.__nonzero__() :
							(typeof $bool14.__len__=='function'?
								($bool14.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				titles['insert'](0, $p['getattr'](obj, 'title'));
				obj = $p['getattr'](obj, 'parent');
			}
			return titles;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_titles'] = $method;
		$method = $pyjs__bind_method2('_get_breadcrumbs', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var obj,breadcrumbs,$bool15,$bool16,$and5,$and6,$len1,$bool17;
			breadcrumbs = $p['list']([]);
			obj = self;
			while ((($bool15=obj) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool17=((($bool16=$and5=$p['getattr'](obj, 'crumb')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($len1=$p['getattr'](obj, 'crumb')) === null?0:
					(typeof $len1.__array != 'undefined' ? $len1.__array.length:
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'?$len1.length:
								$p['len']($len1))))):$and5)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					breadcrumbs['insert'](0, $p['dict']([['label', $p['getattr'](obj, 'crumb')], ['token', obj['construct_token']()]]));
				}
				obj = $p['getattr'](obj, 'parent');
			}
			return breadcrumbs;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_breadcrumbs'] = $method;
		$method = $pyjs__bind_method2('construct_event', function(params) {
			var $bool18,$bool19,event,$iter2_iter,param,$iter2_type,$eq2,$eq1,$iter2_idx,$8,$6,$7,$4,$5,$3,$iter2_nextval,$add2,$add3,$add1,$add4,$iter2_array;
			event = '';
			$iter2_iter = params;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				param = $iter2_nextval;
				if ((($bool18=(typeof ($3=params).__array != 'undefined'?
					((typeof $3.__array[$4=param]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(param))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					event = (typeof ($add1=event)==typeof ($add2=$p['sprintf']('%s=%s&', $p['tuple']([param, (typeof ($5=params).__array != 'undefined'?
						((typeof $5.__array[$6=param]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(param))]))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
				else {
					event = (typeof ($add3=event)==typeof ($add4=$p['sprintf']('%s&', param)) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
				}
			}
			if ((($bool19=(($eq1=(typeof ($7=event).__array != 'undefined'?
				((typeof $7.__array[$8=(typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))))===($eq2='&')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				event = $p['__getslice'](event, 0, (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
			}
			return event;
		}
	, 3, [null,null,['params']]);
		$cls_definition['construct_event'] = $method;
		$method = $pyjs__bind_method2('construct_token', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool24,$bool21,$bool20,$bool23,$bool22,$len2,$and8,$eq3,$eq4,$and7,$add10,$9,$10,obj,p,token,$add6,$add7,$add5,$add8,$add9;
			token = '';
			obj = self;
			while ((($bool21=!(($bool20=obj['_is_service']()) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
				false :
				(typeof $bool20=='object'?
					(typeof $bool20.__nonzero__=='function'?
						$bool20.__nonzero__() :
						(typeof $bool20.__len__=='function'?
							($bool20.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				p = '';
				if ((($bool22=(($len2=$p['getattr'](obj, 'params')) === null?0:
					(typeof $len2.__array != 'undefined' ? $len2.__array.length:
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'?$len2.length:
								$p['len']($len2)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					p = (typeof ($add7=p)==typeof ($add8=(typeof ($add5='/')==typeof ($add6=$m['Buoy']['construct_event']($p['getattr'](obj, 'params'))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				token = (typeof ($add9=p)==typeof ($add10=token) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				obj = $p['getattr'](obj, 'parent');
			}
			if ((($bool24=((($bool23=$and7=token) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
				false :
				(typeof $bool23=='object'?
					(typeof $bool23.__nonzero__=='function'?
						$bool23.__nonzero__() :
						(typeof $bool23.__len__=='function'?
							($bool23.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq3=(typeof ($9=token).__array != 'undefined'?
				((typeof $9.__array[$10=0]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(0)))===($eq4='/')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))):$and7)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				token = $p['__getslice'](token, 1, null);
			}
			return token;
		}
	, 1, [null,null,['self']]);
		$cls_definition['construct_token'] = $method;
		$method = $pyjs__bind_method2('deconstruct_command', function(command) {
			var $14,$15,$16,$11,$12,$13,$eq6,$eq5,$bool25,$len3,attributes;
			attributes = command['$$split']('=');
			if ((($bool25=(($eq5=(($len3=attributes) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))===($eq6=1)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				return $p['dict']([[(typeof ($11=attributes).__array != 'undefined'?
					((typeof $11.__array[$12=0]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(0)), null]]);
			}
			else {
				return $p['dict']([[(typeof ($13=attributes).__array != 'undefined'?
					((typeof $13.__array[$14=0]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(0)), (typeof ($15=attributes).__array != 'undefined'?
					((typeof $15.__array[$16=1]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(1))]]);
			}
			return null;
		}
	, 3, [null,null,['command']]);
		$cls_definition['deconstruct_command'] = $method;
		$method = $pyjs__bind_method2('deconstruct_token', function(token) {
			var parsed_command,$iter3_idx,$iter4_nextval,$iter3_nextval,$iter3_type,event,$iter4_idx,command,$iter3_iter,$iter4_type,$iter3_array,$iter4_array,$iter4_iter,events;
			events = $p['list']([]);
			$iter3_iter = token['$$split']('/');
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				event = $iter3_nextval;
				parsed_command = $p['dict']([]);
				$iter4_iter = event['$$split']('&');
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					command = $iter4_nextval;
					parsed_command['update']($m['Buoy']['deconstruct_command'](command));
				}
				events['append'](parsed_command);
			}
			return events;
		}
	, 3, [null,null,['token']]);
		$cls_definition['deconstruct_token'] = $method;
		$method = $pyjs__bind_method2('_is_service', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['hasattr'](self, 'cast_off');
		}
	, 1, [null,null,['self']]);
		$cls_definition['_is_service'] = $method;
		$method = $pyjs__bind_method2('_get_service', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool26,obj,$bool27;
			obj = self;
			while ((($bool27=!(($bool26=obj['_is_service']()) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26.__nonzero__=='function'?
						$bool26.__nonzero__() :
						(typeof $bool26.__len__=='function'?
							($bool26.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				obj = $p['getattr'](obj, 'parent');
			}
			return obj;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_service'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Buoy', $p['tuple']($bases), $data);
	})();
	$m['BuoyService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'buoy';
		$method = $pyjs__bind_method2('__init__', function(title, crumb) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
				crumb = arguments[2];
			}
			if (typeof crumb == 'undefined') crumb=arguments.callee.__args__[4][1];

			$pyjs_kwargs_call($m['Buoy'], '__init__', null, null, [{crumb:crumb}, self, null, title]);
			self.timer_count = (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3));
			self.listeners = $p['list']([]);
			self.title_listener = null;
			self.breadcrumbs_listener = null;
			return null;
		}
	, 1, [null,null,['self'],['title'],['crumb', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add_flare_listener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['add_flare_listener'] = $method;
		$method = $pyjs__bind_method2('remove_flare_listener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['remove_flare_listener'] = $method;
		$method = $pyjs__bind_method2('set_titles_listener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self.title_listener = listener;
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['set_titles_listener'] = $method;
		$method = $pyjs__bind_method2('unset_titles_listener', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.title_listener = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unset_titles_listener'] = $method;
		$method = $pyjs__bind_method2('set_breadcrumbs_listener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self.breadcrumbs_listener = listener;
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['set_breadcrumbs_listener'] = $method;
		$method = $pyjs__bind_method2('unset_breadcrumb_listener', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.breadcrumbs_listener = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unset_breadcrumb_listener'] = $method;
		$method = $pyjs__bind_method2('cast_off', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len4,token,$bool28;
			self.timer_count = 0;
			$pyjs_kwargs_call(self, '_set_history_listener', null, null, [{on_period:1}, true]);
			token = $m['History']['getToken']();
			if ((($bool28=(($len4=token) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['onHistoryChanged'](token);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cast_off'] = $method;
		$method = $pyjs__bind_method2('onTitlesChanged', function(titles) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				titles = arguments[1];
			}
			var $bool29;
			if ((($bool29=$p['getattr'](self, 'title_listener')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['title_listener']['onTitlesChanged'](titles);
			}
			return null;
		}
	, 1, [null,null,['self'],['titles']]);
		$cls_definition['onTitlesChanged'] = $method;
		$method = $pyjs__bind_method2('onBreadcrumbsChanged', function(crumbs) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				crumbs = arguments[1];
			}
			var $bool30;
			if ((($bool30=$p['getattr'](self, 'breadcrumbs_listener')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['breadcrumbs_listener']['onBreadcrumbsChanged'](crumbs);
			}
			return null;
		}
	, 1, [null,null,['self'],['crumbs']]);
		$cls_definition['onBreadcrumbsChanged'] = $method;
		$method = $pyjs__bind_method2('onHistoryChanged', function(token) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				token = arguments[1];
			}
			var $iter5_nextval,listener,$eq8,$17,$iter5_array,$18,$eq7,first_event_keys,$bool32,flares,$bool31,$iter5_idx,$iter5_type,$len5,$iter5_iter,events;
			var $tupleassign1 = $p['__ass_unpack'](self['_build_flares'](self, token), 2, null);
			flares = $tupleassign1[0];
			events = $tupleassign1[1];
			if ((($bool31=(($len5=events) === null?0:
				(typeof $len5.__array != 'undefined' ? $len5.__array.length:
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'?$len5.length:
							$p['len']($len5)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				first_event_keys = ((($bool32=(($eq7=token)===($eq8='#')&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32.__nonzero__=='function'?
							$bool32.__nonzero__() :
							(typeof $bool32.__len__=='function'?
								($bool32.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['list']([])) : ((typeof ($17=events).__array != 'undefined'?
					((typeof $17.__array[$18=0]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__(0))['keys']()));
				$iter5_iter = $p['getattr'](self, 'listeners');
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					listener = $iter5_nextval;
					listener['onFlare'](flares, first_event_keys);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['token']]);
		$cls_definition['onHistoryChanged'] = $method;
		$method = $pyjs__bind_method2('new_item', function(token) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				token = arguments[1];
			}

			self['_set_history_listener'](false);
			$m['History']['newItem'](token);
			self['_set_history_listener'](true);
			return null;
		}
	, 1, [null,null,['self'],['token']]);
		$cls_definition['new_item'] = $method;
		$method = $pyjs__bind_method2('_build_flares', function(service, token) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				service = arguments[1];
				token = arguments[2];
			}
			var obj,$iter6_idx,$iter6_type,$iter6_array,event,$iter6_iter,events,$iter6_nextval;
			obj = service;
			events = $m['Buoy']['deconstruct_token'](token);
			$iter6_iter = events;
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				event = $iter6_nextval;
				obj.flare = $m['Flare']();
				obj['flare']['set_parameters'](event);
				obj = $p['getattr'](obj, 'flare');
			}
			return $p['tuple']([service, events]);
		}
	, 1, [null,null,['self'],['service'],['token']]);
		$cls_definition['_build_flares'] = $method;
		$method = $pyjs__bind_method2('_set_history_listener', function(on, on_period) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				on = arguments[1];
				on_period = arguments[2];
			}
			if (typeof on_period == 'undefined') on_period=arguments.callee.__args__[4][1];
			var $eq9,$bool33,$bool34,$eq10,$sub2,$sub1;
			if ((($bool33=on) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33.__nonzero__=='function'?
							$bool33.__nonzero__() :
							(typeof $bool33.__len__=='function'?
								($bool33.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.timer = $m['Timer'](on_period, self);
			}
			else {
				if ((($bool34=(($eq9=$p['getattr'](self, 'timer_count'))===($eq10=1)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34.__nonzero__=='function'?
								$bool34.__nonzero__() :
								(typeof $bool34.__len__=='function'?
									($bool34.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['History']['removeHistoryListener'](self);
				}
				self.timer_count = (typeof ($sub1=$p['getattr'](self, 'timer_count'))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
			}
			return null;
		}
	, 1, [null,null,['self'],['on'],['on_period', 251]]);
		$cls_definition['_set_history_listener'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}
			var $add11,$add12,$bool35,$eq11,$eq12;
			self.timer_count = (typeof ($add11=$p['getattr'](self, 'timer_count'))==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			if ((($bool35=(($eq11=$p['getattr'](self, 'timer_count'))===($eq12=1)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35.__nonzero__=='function'?
							$bool35.__nonzero__() :
							(typeof $bool35.__len__=='function'?
								($bool35.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['History']['addHistoryListener'](self);
			}
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['onTimer'] = $method;
		var $bases = new Array($m['Buoy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('BuoyService', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end buoy */


/* end module: buoy */


/*
PYJS_DEPS: ['pyjamas.History', 'pyjamas', 'pyjamas.Timer.Timer', 'pyjamas.Timer']
*/
