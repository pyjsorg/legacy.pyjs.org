/* start module: model.TimeProxy */
$pyjs.loaded_modules['model.TimeProxy'] = function (__mod_name__) {
	if($pyjs.loaded_modules['model.TimeProxy'].__was_initialized__) return $pyjs.loaded_modules['model.TimeProxy'];
	if(typeof $pyjs.loaded_modules['model'] == 'undefined' || !$pyjs.loaded_modules['model'].__was_initialized__) $p['___import___']('model', null);
	var $m = $pyjs.loaded_modules["model.TimeProxy"];
	$m.__repr__ = function() { return "<module: model.TimeProxy>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'model.TimeProxy';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['model']['TimeProxy'] = $pyjs.loaded_modules['model.TimeProxy'];


	$m['puremvc'] = $p['___import___']('puremvc.patterns.proxy', 'model');
	$m['TimeVO'] = $p['___import___']('vo.TimeVO.TimeVO', 'model', null, false);
	$m['time'] = $p['___import___']('time', 'model');
	$m['TimeProxy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'model.TimeProxy';
		$cls_definition['NAME'] = 'TimeProxy';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$p['$$super']($m['TimeProxy'], self)['__init__']($p['getattr']($m['TimeProxy'], 'NAME'), $p['list']([]));
			self['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.data = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('getDateEntries', function(date) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				date = arguments[1];
			}
			var $bool1,$2,$1;
			if ((($bool1=self['data']['has_key'](date)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				return (typeof ($1=$p['getattr'](self, 'data')).__array != 'undefined'?
					((typeof $1.__array[$2=date]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(date));
			}
			return $p['list']([]);
		}
	, 1, [null,null,['self'],['date']]);
		$cls_definition['getDateEntries'] = $method;
		$method = $pyjs__bind_method2('setDateEntries', function(date, entries) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				date = arguments[1];
				entries = arguments[2];
			}

			$p['getattr'](self, 'data').__setitem__(date, entries);
			return null;
		}
	, 1, [null,null,['self'],['date'],['entries']]);
		$cls_definition['setDateEntries'] = $method;
		$method = $pyjs__bind_method2('addItem', function(date, item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				date = arguments[1];
				item = arguments[2];
			}
			var $bool3,$bool2,$4,$3;
			if ((($bool3=!(($bool2=self['data']['has_key'](date)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$p['getattr'](self, 'data').__setitem__(date, $p['list']([]));
			}
			(typeof ($3=$p['getattr'](self, 'data')).__array != 'undefined'?
				((typeof $3.__array[$4=date]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(date))['append'](item);
			return null;
		}
	, 1, [null,null,['self'],['date'],['item']]);
		$cls_definition['addItem'] = $method;
		$method = $pyjs__bind_method2('removeDate', function(date) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				date = arguments[1];
			}
			var $bool4;
			if ((($bool4=self['data']['has_key'](date)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$p['getattr'](self, 'data').__setitem__(date, $p['list']([]));
			}
			return null;
		}
	, 1, [null,null,['self'],['date']]);
		$cls_definition['removeDate'] = $method;
		$method = $pyjs__bind_method2('exportData', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dates,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,lines,$iter1_iter,$6,timeVO,$iter2_idx,$iter1_array,date,$iter2_type,$5,$iter2_array,$iter1_idx;
			lines = $p['list']([]);
			dates = self['data']['keys']();
			dates['sort']();
			$iter1_iter = dates;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				date = $iter1_nextval;
				$iter2_iter = (typeof ($5=$p['getattr'](self, 'data')).__array != 'undefined'?
					((typeof $5.__array[$6=date]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(date));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					timeVO = $iter2_nextval;
					lines['append']($p['sprintf']('"%s","%s","%s","%s","%s"', $p['tuple']([date, $p['getattr'](timeVO, 'start'), $p['getattr'](timeVO, 'end'), $p['getattr'](timeVO, 'project'), $p['getattr'](timeVO, 'description')])));
				}
			}
			lines['sort']();
			return '\n'['join'](lines);
		}
	, 1, [null,null,['self']]);
		$cls_definition['exportData'] = $method;
		$method = $pyjs__bind_method2('importData', function(data, onError) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				onError = arguments[2];
			}
			var $iter5_nextval,$bool10,$bool11,$bool12,$iter3_array,$bool14,cols,$bool13,$iter5_iter,$iter4_type,$eq11,$eq10,$10,$eq12,$eq13,$eq14,$bool8,$iter4_idx,$iter5_idx,$iter3_idx,$iter4_iter,$iter3_iter,$iter4_nextval,$iter5_type,today,lineno,$or5,$or4,$eq8,$eq9,$or1,$or3,$or2,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,timeVO,$9,$bool6,$bool7,$8,$iter3_type,date,$7,line,$bool9,dateEntries,$14,$15,$16,$17,$cmp1,$11,$12,$cmp2,thisDate,dates,$18,$13,lines,$iter5_array,$add2,s,$add1,$len2,$len3,$len1,$iter4_array,$bool5,$iter3_nextval;
			today = $m['time']['strftime']('%Y%m%d', $m['time']['localtime']());
			dateEntries = $p['dict']([]);
			lines = data['$$split']('\n');
			if ((($bool5=(($eq1=(($len1=lines) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($eq2=1)&&$eq1===null?true:
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
				lines = data['$$split']('\r');
			}
			lineno = 0;
			$iter3_iter = lines;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				line = $iter3_nextval;
				lineno = (typeof ($add1=lineno)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				line = line['strip']();
				if ((($bool7=((($bool6=$or1=(($eq3=line)===($eq4='')&&$eq3===null?true:
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
						 true ) )?$or1:(($eq5=(typeof ($7=line).__array != 'undefined'?
					((typeof $7.__array[$8=0]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(0)))===($eq6='#')&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6))))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					continue;
				}
				if ((($bool10=((($bool8=$or3=((($cmp1=(($len2=line) === null?0:
					(typeof $len2.__array != 'undefined' ? $len2.__array.length:
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'?$len2.length:
								$p['len']($len2))))))===($cmp2=3)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:((($bool9=$or4=!(($eq7=(typeof ($9=line).__array != 'undefined'?
					((typeof $9.__array[$10=0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(0)))===($eq8='"')&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or4:!(($eq9=(typeof ($11=line).__array != 'undefined'?
					((typeof $11.__array[$12=(typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__((typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))))===($eq10='"')&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10.__nonzero__=='function'?
								$bool10.__nonzero__() :
								(typeof $bool10.__len__=='function'?
									($bool10.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return onError(lineno, line);
				}
				s = $p['__getslice'](line, 1, (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				cols = s['$$split']('","');
				if ((($bool11=!(($eq11=(($len3=cols) === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))))===($eq12=5)&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					return onError(lineno, line);
				}
				date = (typeof ($13=cols).__array != 'undefined'?
					((typeof $13.__array[$14=0]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(0));
				if ((($bool12=(($eq13=date)===($eq14='TODAY')&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					date = today;
				}
				if ((($bool14=!(($bool13=dateEntries['has_key'](date)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
							 true ) )) {
					dateEntries.__setitem__(date, $p['list']([]));
				}
				(typeof ($15=dateEntries).__array != 'undefined'?
					((typeof $15.__array[$16=date]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(date))['append']($p['__getslice'](cols, 1, null));
			}
			self['clear']();
			dates = dateEntries['keys']();
			dates['sort']();
			$iter4_iter = dates;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				date = $iter4_nextval;
				thisDate = $p['list']([]);
				$iter5_iter = (typeof ($17=dateEntries).__array != 'undefined'?
					((typeof $17.__array[$18=date]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__(date));
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					cols = $iter5_nextval;
					timeVO = $pyjs_kwargs_call(null, $m['TimeVO'], cols, null, [{}]);
					thisDate['append'](timeVO);
				}
				self['setDateEntries'](date, thisDate);
			}
			return date;
		}
	, 1, [null,null,['self'],['data'],['onError']]);
		$cls_definition['importData'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($p['getattr']($m['puremvc'], 'patterns'), 'proxy'), 'Proxy'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TimeProxy', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end model.TimeProxy */


/* end module: model.TimeProxy */


/*
PYJS_DEPS: ['puremvc.patterns.proxy', 'puremvc', 'puremvc.patterns', 'vo.TimeVO.TimeVO', 'vo', 'vo.TimeVO', 'time']
*/
