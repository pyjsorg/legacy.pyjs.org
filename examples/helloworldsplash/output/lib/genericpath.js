/* start module: genericpath */
$pyjs.loaded_modules['genericpath'] = function (__mod_name__) {
	if($pyjs.loaded_modules['genericpath'].__was_initialized__) return $pyjs.loaded_modules['genericpath'];
	var $m = $pyjs.loaded_modules["genericpath"];
	$m.__repr__ = function() { return "<module: genericpath>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'genericpath';
	$m.__name__ = __mod_name__;


	$m['os'] = $p['___import___']('os', null);
	$m['stat'] = $p['___import___']('stat', null);
	$m['__all__'] = $p['list'](['commonprefix', 'exists', 'getatime', 'getctime', 'getmtime', 'getsize', 'isdir', 'isfile']);
	$m['exists'] = function(path) {
		var $pyjs_try_err;
		try {
			$m['os']['stat'](path);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error').__name__)||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
				return false;
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return true;
	};
	$m['exists'].__name__ = 'exists';

	$m['exists'].__bind_type__ = 0;
	$m['exists'].__args__ = [null,null,['path']];
	$m['isfile'] = function(path) {
		var $pyjs_try_err,st;
		try {
			st = $m['os']['stat'](path);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error').__name__)||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
				return false;
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return $m['stat']['S_ISREG']($p['getattr'](st, 'st_mode'));
	};
	$m['isfile'].__name__ = 'isfile';

	$m['isfile'].__bind_type__ = 0;
	$m['isfile'].__args__ = [null,null,['path']];
	$m['isdir'] = function(s) {
		var $pyjs_try_err,st;
		try {
			st = $m['os']['stat'](s);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error').__name__)||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
				return false;
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return $m['stat']['S_ISDIR']($p['getattr'](st, 'st_mode'));
	};
	$m['isdir'].__name__ = 'isdir';

	$m['isdir'].__bind_type__ = 0;
	$m['isdir'].__args__ = [null,null,['s']];
	$m['getsize'] = function(filename) {

		return $p['getattr']($m['os']['stat'](filename), 'st_size');
	};
	$m['getsize'].__name__ = 'getsize';

	$m['getsize'].__bind_type__ = 0;
	$m['getsize'].__args__ = [null,null,['filename']];
	$m['getmtime'] = function(filename) {

		return $p['getattr']($m['os']['stat'](filename), 'st_mtime');
	};
	$m['getmtime'].__name__ = 'getmtime';

	$m['getmtime'].__bind_type__ = 0;
	$m['getmtime'].__args__ = [null,null,['filename']];
	$m['getatime'] = function(filename) {

		return $p['getattr']($m['os']['stat'](filename), 'st_atime');
	};
	$m['getatime'].__name__ = 'getatime';

	$m['getatime'].__bind_type__ = 0;
	$m['getatime'].__args__ = [null,null,['filename']];
	$m['getctime'] = function(filename) {

		return $p['getattr']($m['os']['stat'](filename), 'st_ctime');
	};
	$m['getctime'].__name__ = 'getctime';

	$m['getctime'].__bind_type__ = 0;
	$m['getctime'].__args__ = [null,null,['filename']];
	$m['commonprefix'] = function(m) {
		var c,$iter1_nextval,$iter1_type,$bool3,i,s2,s1,$eq1,$iter1_iter,$bool2,$eq2,$bool1,$iter1_array,$1,$2,$iter1_idx;
		if ((($bool2=!(($bool1=m) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return '';
		}
		s1 = $p['min'](m);
		s2 = $p['max'](m);
		$iter1_iter = $p['enumerate'](s1);
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
			i = $tupleassign1[0];
			c = $tupleassign1[1];
			if ((($bool3=!(($eq1=c)===($eq2=(typeof ($1=s2).__array != 'undefined'?
				((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(i)))&&$eq1===null?true:
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
				return $p['__getslice'](s1, 0, i);
			}
		}
		return s1;
	};
	$m['commonprefix'].__name__ = 'commonprefix';

	$m['commonprefix'].__bind_type__ = 0;
	$m['commonprefix'].__args__ = [null,null,['m']];
	$m['_splitext'] = function(p, sep, altsep, extsep) {
		var altsepIndex,$add3,$eq3,$eq4,$bool6,$bool7,$bool4,$bool5,filenameIndex,$4,$3,sepIndex,$cmp4,$cmp1,$cmp3,$cmp2,$add2,$add1,$add4,dotIndex;
		sepIndex = p['rfind'](sep);
		if ((($bool4=altsep) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			altsepIndex = p['rfind'](altsep);
			sepIndex = $p['max'](sepIndex, altsepIndex);
		}
		dotIndex = p['rfind'](extsep);
		if ((($bool5=((($cmp1=dotIndex)===($cmp2=sepIndex)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			filenameIndex = (typeof ($add1=sepIndex)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			while ((($bool6=((($cmp3=filenameIndex)===($cmp4=dotIndex)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				if ((($bool7=!(($eq3=(typeof ($3=p).__array != 'undefined'?
					((typeof $3.__array[$4=filenameIndex]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(filenameIndex)))===($eq4=extsep)&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					return $p['tuple']([$p['__getslice'](p, 0, dotIndex), $p['__getslice'](p, dotIndex, null)]);
				}
				filenameIndex = (typeof ($add3=filenameIndex)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
			}
		}
		return $p['tuple']([p, '']);
	};
	$m['_splitext'].__name__ = '_splitext';

	$m['_splitext'].__bind_type__ = 0;
	$m['_splitext'].__args__ = [null,null,['p'],['sep'],['altsep'],['extsep']];
	return this;
}; /* end genericpath */


/* end module: genericpath */


/*
PYJS_DEPS: ['os', 'stat']
*/
