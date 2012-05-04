/* start module: pygwt */
$pyjs.loaded_modules['pygwt'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pygwt'].__was_initialized__) return $pyjs.loaded_modules['pygwt'];
	var $m = $pyjs.loaded_modules["pygwt"];
	$m.__repr__ = function() { return "<module: pygwt>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pygwt';
	$m.__name__ = __mod_name__;


	$m['sNextHashId'] = 0;
	$m['getNextHashId'] = function() {
		var $add2,$add1;
		$m['sNextHashId'] = (typeof ($add1=$m['sNextHashId'])==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		return $m['sNextHashId'];
	};
	$m['getNextHashId'].__name__ = 'getNextHashId';

	$m['getNextHashId'].__bind_type__ = 0;
	$m['getNextHashId'].__args__ = [null,null];
	$m['getHashCode'] = function(o) {


    return (o == null) ? 0 :
        (o.$H ? o.$H : (o.$H = pygwt_getNextHashId()))
    
	};
	$m['getHashCode'].__name__ = 'getHashCode';

	$m['getHashCode'].__bind_type__ = 0;
	$m['getHashCode'].__args__ = [null,null,['o']];
	$m['getModuleName'] = function() {
		var os,sys,mod_name,$6,$4,$5,$2,$3,$1;
		os = $p['___import___']('os', null);
		sys = $p['___import___']('sys', null);
		mod_name = (typeof ($1=$p['getattr'](sys, 'argv')).__array != 'undefined'?
			((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
				$1.__getitem__($2)):
				$1.__getitem__(0));
		mod_name = (typeof ($3=os['path']['$$split'](mod_name)).__array != 'undefined'?
			((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
				$3.__getitem__($4)):
				$3.__getitem__(1));
		mod_name = (typeof ($5=os['path']['spliext'](mod_name)).__array != 'undefined'?
			((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
				$5.__getitem__($6)):
				$5.__getitem__(0));
		return mod_name;
	};
	$m['getModuleName'].__name__ = 'getModuleName';

	$m['getModuleName'].__bind_type__ = 0;
	$m['getModuleName'].__args__ = [null,null];
	$m['getModuleBaseURL'] = function() {
		var $cmp1,$cmp2,$add3,s,$bool1,$add4,$len1,os;
		os = $p['___import___']('os.path', null);
		s = $m.get_main_frame()['getUri']();
		s = os['path']['dirname'](s);
		if ((($bool1=((($cmp1=(($len1=s) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1))))))===($cmp2=0)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return (typeof ($add3=s)==typeof ($add4='/') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
		}
		return '';
	};
	$m['getModuleBaseURL'].__name__ = 'getModuleBaseURL';

	$m['getModuleBaseURL'].__bind_type__ = 0;
	$m['getModuleBaseURL'].__args__ = [null,null];
	$m['getImageBaseURL'] = function(images) {
		if (typeof images == 'undefined') images=arguments.callee.__args__[2][1];
		var $bool2,$bool3,pyjd,$add6,$add7,$add5,$add10,$add8,$add9;
		pyjd = $p['___import___']('pyjd', null);
		if ((($bool2=images) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			if ((($bool3=$p['isinstance'](images, $p['str'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return (typeof ($add7=(typeof ($add5=$m['getModuleBaseURL']())==typeof ($add6=images) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($add8='/') && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
			}
			else {
				return (typeof ($add9=$m['getModuleBaseURL']())==typeof ($add10='images/') && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
		}
		else {
			return $m['getModuleBaseURL']();
		}
		return null;
	};
	$m['getImageBaseURL'].__name__ = 'getImageBaseURL';

	$m['getImageBaseURL'].__bind_type__ = 0;
	$m['getImageBaseURL'].__args__ = [null,null,['images', false]];
	return this;
}; /* end pygwt */


/* end module: pygwt */


/*
PYJS_DEPS: ['os', 'sys', 'os.path', 'pyjd']
*/
