/* start module: pyjamas.ui */
$pyjs.loaded_modules['pyjamas.ui'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui"];
	$m.__repr__ = function() { return "<module: pyjamas.ui>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['ui'] = $pyjs.loaded_modules['pyjamas.ui'];


	$m['HasHorizontalAlignment'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui';
		$cls_definition['ALIGN_LEFT'] = 'left';
		$cls_definition['ALIGN_CENTER'] = 'center';
		$cls_definition['ALIGN_RIGHT'] = 'right';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HasHorizontalAlignment', $p['tuple']($bases), $data);
	})();
	$m['HasVerticalAlignment'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui';
		$cls_definition['ALIGN_TOP'] = 'top';
		$cls_definition['ALIGN_MIDDLE'] = 'middle';
		$cls_definition['ALIGN_BOTTOM'] = 'bottom';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HasVerticalAlignment', $p['tuple']($bases), $data);
	})();
	$m['HasAlignment'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui';
		$cls_definition['ALIGN_BOTTOM'] = 'bottom';
		$cls_definition['ALIGN_MIDDLE'] = 'middle';
		$cls_definition['ALIGN_TOP'] = 'top';
		$cls_definition['ALIGN_CENTER'] = 'center';
		$cls_definition['ALIGN_LEFT'] = 'left';
		$cls_definition['ALIGN_RIGHT'] = 'right';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HasAlignment', $p['tuple']($bases), $data);
	})();
	$m['PROP_NAME'] = 0;
	$m['PROP_DESC'] = 1;
	$m['PROP_FNAM'] = 2;
	$m['PROP_TYPE'] = 3;
	$m['ELPROP_NAME'] = 0;
	$m['ELPROP_DESC'] = 1;
	$m['ELPROP_FNAM'] = 2;
	$m['ELPROP_TYPE'] = 3;
	$m['ELPROP_DFLT'] = 4;
	$m['get_list_columns'] = function(props, cols) {
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,res,idx,$iter1_iter,p,$iter2_idx,r,$iter1_array,$iter2_type,$1,$2,$iter2_array,$iter1_idx;
		res = $p['list']([]);
		$iter1_iter = props;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			p = $iter1_nextval;
			r = $p['tuple']([]);
			$iter2_iter = cols;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				idx = $iter2_nextval;
				r['append']((typeof ($1=p).__array != 'undefined'?
					((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(idx)));
			}
			res['append'](r);
		}
		return res;
	};
	$m['get_list_columns'].__name__ = 'get_list_columns';

	$m['get_list_columns'].__bind_type__ = 0;
	$m['get_list_columns'].__args__ = [null,null,['props'],['cols']];
	$m['get_prop_widget_function_names'] = function(props) {

		return $m['get_list_columns'](props, $p['tuple']([$m['PROP_FNAM']]));
	};
	$m['get_prop_widget_function_names'].__name__ = 'get_prop_widget_function_names';

	$m['get_prop_widget_function_names'].__bind_type__ = 0;
	$m['get_prop_widget_function_names'].__args__ = [null,null,['props']];
	$m['Applier'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui';
		$cls_definition['_props'] = $p['list']([]);
		$cls_definition['_elem_props'] = $p['list']([]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call(self, 'applyValues', null, kwargs, [{}]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('applyValues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter3_idx,args,$iter3_type,prop,$bool2,$bool3,$bool1,$iter3_iter,$iter3_array,$4,$3,$iter3_nextval,fn;
			$iter3_iter = kwargs['items']();
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter3_nextval, 2, null);
				prop = $tupleassign1[0];
				args = $tupleassign1[1];
				fn = $p['getattr'](self, $p['sprintf']('set%s', prop), null);
				if ((($bool2=!(($bool1=fn) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					throw ($p['Exception']($p['sprintf']('setter function for %s does not exist', prop)));
				}
				args = (typeof ($3=kwargs).__array != 'undefined'?
					((typeof $3.__array[$4=prop]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(prop));
				if ((($bool3=$p['isinstance'](args, $p['tuple'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs_kwargs_call(null, fn, args, null, [{}]);
				}
				else {
					fn(args);
				}
			}
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['applyValues'] = $method;
		$method = $pyjs__bind_method2('retrieveValues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}
			var $bool4,res,prop,$iter4_idx,$iter4_type,$iter4_nextval,$iter4_array,$bool5,$iter4_iter,fn;
			res = $p['dict']([]);
			$iter4_iter = args;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				prop = $iter4_nextval;
				fn = $p['getattr'](self, $p['sprintf']('get%s', prop), null);
				if ((($bool5=!(($bool4=fn) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					throw ($p['Exception']($p['sprintf']('getter function for %s does not exist', prop)));
				}
				res.__setitem__(prop, fn());
			}
			return res;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['retrieveValues'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;

			return $p['getattr'](self, '_props');
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('_getElementProps', function() {
    var self = this.prototype;

			return $p['getattr'](self, '_elem_props');
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getElementProps'] = $method;
		$method = $pyjs__bind_method2('setDefaults', function(defaults) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				defaults = arguments[1];
			}
			var $iter5_nextval,$10,$8,$iter5_array,$9,$7,p,$iter5_iter,$iter5_idx,$6,$iter5_type,$5,divs;
			divs = self['retrieveValues']((typeof wnames == "undefined"?$m.wnames:wnames));
			$iter5_iter = $m['get_prop_widget_function_names'](self['_getProps']());
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				p = $iter5_nextval;
				defaults.__setitem__((typeof ($9=p).__array != 'undefined'?
					((typeof $9.__array[$10=$m['PROP_NAME']]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($m['PROP_NAME'])), (typeof ($7=divs).__array != 'undefined'?
					((typeof $7.__array[$8=(typeof ($5=p).__array != 'undefined'?
					((typeof $5.__array[$6=$m['PROP_FNAM']]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($m['PROP_FNAM']))]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__((typeof ($5=p).__array != 'undefined'?
					((typeof $5.__array[$6=$m['PROP_FNAM']]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($m['PROP_FNAM'])))));
			}
			return null;
		}
	, 1, [null,null,['self'],['defaults']]);
		$cls_definition['setDefaults'] = $method;
		$method = $pyjs__bind_method2('updateInstance', function(app_context) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				app_context = arguments[1];
			}
			var $14,$15,$16,$11,$iter6_idx,$13,$iter6_type,convert_to_type,args,p,$iter6_array,val,$bool6,$12,$iter6_iter,$bool7,$iter6_nextval;
			args = $p['dict']([]);
			$iter6_iter = self['_getProps']();
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				p = $iter6_nextval;
				val = app_context['getAppProperty']((typeof ($11=p).__array != 'undefined'?
					((typeof $11.__array[$12=0]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(0)));
				convert_to_type = (typeof ($13=p).__array != 'undefined'?
					((typeof $13.__array[$14=$m['PROP_TYPE']]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($m['PROP_TYPE']));
				if ((($bool6=convert_to_type) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					val = ((($bool7=val) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7.__nonzero__=='function'?
								$bool7.__nonzero__() :
								(typeof $bool7.__len__=='function'?
									($bool7.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? (convert_to_type(val)) : (null));
				}
				args.__setitem__((typeof ($15=p).__array != 'undefined'?
					((typeof $15.__array[$16=$m['PROP_FNAM']]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($m['PROP_FNAM'])), val);
			}
			$pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
			return null;
		}
	, 1, [null,null,['self'],['app_context']]);
		$cls_definition['updateInstance'] = $method;
		$method = $pyjs__bind_method2('setElementProperties', function(context, elemProps) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				context = arguments[1];
				elemProps = arguments[2];
			}
			var $bool10,convert_to_type,val,$21,$20,$22,$24,$bool11,$iter7_type,$iter7_iter,args,$iter7_idx,$bool8,$bool9,$17,$iter7_nextval,$iter7_array,$18,$19,p,$23;
			args = $p['dict']([]);
			$iter7_iter = self['_getElementProps']();
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				p = $iter7_nextval;
				if ((($bool8=elemProps['has_key'](p)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					val = (typeof ($17=elemProps).__array != 'undefined'?
						((typeof $17.__array[$18=p]) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__(p));
					convert_to_type = (typeof ($19=p).__array != 'undefined'?
						((typeof $19.__array[$20=$m['ELPROP_TYPE']]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__($m['ELPROP_TYPE']));
					if ((($bool9=convert_to_type) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						val = ((($bool10=val) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
							false :
							(typeof $bool10=='object'?
								(typeof $bool10.__nonzero__=='function'?
									$bool10.__nonzero__() :
									(typeof $bool10.__len__=='function'?
										($bool10.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? (convert_to_type(val)) : (null));
					}
				}
				else {
					val = (typeof ($21=p).__array != 'undefined'?
						((typeof $21.__array[$22=$m['ELPROP_DFLT']]) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__($m['ELPROP_DFLT']));
					if ((($bool11=(val === null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						continue;
					}
				}
				args.__setitem__((typeof ($23=p).__array != 'undefined'?
					((typeof $23.__array[$24=$m['ELPROP_FNAM']]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($m['ELPROP_FNAM'])), $p['tuple']([context, val]));
			}
			$pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
			return null;
		}
	, 1, [null,null,['self'],['context'],['elemProps']]);
		$cls_definition['setElementProperties'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Applier', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui */


/* end module: pyjamas.ui */


