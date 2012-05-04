/* start module: pyjspath */
$pyjs.loaded_modules['pyjspath'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjspath'].__was_initialized__) return $pyjs.loaded_modules['pyjspath'];
	var $m = $pyjs.loaded_modules["pyjspath"];
	$m.__repr__ = function() { return "<module: pyjspath>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjspath';
	$m.__name__ = __mod_name__;
	var $eq17,$eq18;

	$m['os'] = $p['___import___']('os', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['stat'] = $p['___import___']('stat', null);
	$m['genericpath'] = $p['___import___']('genericpath', null);
	$m['__all__'] = $p['list'](['normcase', 'isabs', 'join', 'splitdrive', 'split', 'splitext', 'basename', 'dirname', 'commonprefix', 'getsize', 'getmtime', 'getatime', 'getctime', 'islink', 'exists', 'lexists', 'isdir', 'isfile', 'ismount', 'walk', 'expanduser', 'expandvars', 'normpath', 'abspath', 'samefile', 'sameopenfile', 'samestat', 'curdir', 'pardir', 'sep', 'pathsep', 'defpath', 'altsep', 'extsep', 'devnull', 'realpath', 'supports_unicode_filenames', 'relpath']);
	$m['curdir'] = '.';
	$m['pardir'] = '..';
	$m['extsep'] = '.';
	$m['sep'] = '/';
	$m['pathsep'] = ':';
	$m['defpath'] = ':/bin:/usr/bin';
	$m['altsep'] = null;
	$m['devnull'] = '/dev/null';
	$m['normcase'] = function(s) {

		return s;
	};
	$m['normcase'].__name__ = 'normcase';

	$m['normcase'].__bind_type__ = 0;
	$m['normcase'].__args__ = [null,null,['s']];
	$m['isabs'] = function(s) {

		return s['startswith']('/');
	};
	$m['isabs'].__name__ = 'isabs';

	$m['isabs'].__bind_type__ = 0;
	$m['isabs'].__args__ = [null,null,['s']];
	$m['join'] = function(a) {
		var p = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

		var $iter1_iter,$or1,$add3,$iter1_array,$iter1_nextval,$or2,$eq2,$eq1,$bool2,$bool3,$bool1,path,b,$iter1_type,$add2,$add1,$add6,$iter1_idx,$add4,$add5;
		path = a;
		$iter1_iter = p;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			b = $iter1_nextval;
			if ((($bool1=b['startswith']('/')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				path = b;
			}
			else if ((($bool3=((($bool2=$or1=(($eq1=path)===($eq2='')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:path['endswith']('/'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				path = (typeof ($add1=path)==typeof ($add2=b) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			else {
				path = (typeof ($add5=path)==typeof ($add6=(typeof ($add3='/')==typeof ($add4=b) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
		}
		return path;
	};
	$m['join'].__name__ = 'join';

	$m['join'].__bind_type__ = 0;
	$m['join'].__args__ = ['p',null,['a']];
	$m['$$split'] = function(p) {
		var head,$eq3,i,$and1,$and2,$bool5,$eq4,tail,$add7,$bool4,$len1,$add8,$mul2,$mul1;
		i = (typeof ($add7=p['rfind']('/'))==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
			$add7+$add8:
			$p['op_add']($add7,$add8));
		var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['__getslice'](p, 0, i), $p['__getslice'](p, i, null)]), 2, null);
		head = $tupleassign1[0];
		tail = $tupleassign1[1];
		if ((($bool5=((($bool4=$and1=head) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4.__nonzero__=='function'?
					$bool4.__nonzero__() :
					(typeof $bool4.__len__=='function'?
						($bool4.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq3=head)===($eq4=(typeof ($mul1='/')==typeof ($mul2=(($len1=head) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1)))))) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)))&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
						$eq3==$eq4))))):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			head = head['rstrip']('/');
		}
		return $p['tuple']([head, tail]);
	};
	$m['$$split'].__name__ = 'split';

	$m['$$split'].__bind_type__ = 0;
	$m['$$split'].__args__ = [null,null,['p']];
	$m['splitext'] = function(p) {

		return $m['genericpath']['_splitext'](p, $m['sep'], $m['altsep'], $m['extsep']);
	};
	$m['splitext'].__name__ = 'splitext';

	$m['splitext'].__bind_type__ = 0;
	$m['splitext'].__args__ = [null,null,['p']];
	$m['splitdrive'] = function(p) {

		return $p['tuple'](['', p]);
	};
	$m['splitdrive'].__name__ = 'splitdrive';

	$m['splitdrive'].__bind_type__ = 0;
	$m['splitdrive'].__args__ = [null,null,['p']];
	$m['basename'] = function(p) {
		var i,$add9,$add10;
		i = (typeof ($add9=p['rfind']('/'))==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			$p['op_add']($add9,$add10));
		return $p['__getslice'](p, i, null);
	};
	$m['basename'].__name__ = 'basename';

	$m['basename'].__bind_type__ = 0;
	$m['basename'].__args__ = [null,null,['p']];
	$m['dirname'] = function(p) {
		var head,i,$eq6,$and3,$and4,$eq5,$bool6,$add11,$add12,$len2,$mul4,$mul3,$bool7;
		i = (typeof ($add11=p['rfind']('/'))==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			$p['op_add']($add11,$add12));
		head = $p['__getslice'](p, 0, i);
		if ((($bool7=((($bool6=$and3=head) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
			false :
			(typeof $bool6=='object'?
				(typeof $bool6.__nonzero__=='function'?
					$bool6.__nonzero__() :
					(typeof $bool6.__len__=='function'?
						($bool6.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq5=head)===($eq6=(typeof ($mul3='/')==typeof ($mul4=(($len2=head) === null?0:
			(typeof $len2.__array != 'undefined' ? $len2.__array.length:
				(typeof $len2.__len__ == 'function'?$len2.__len__():
					(typeof $len2.length != 'undefined'?$len2.length:
						$p['len']($len2)))))) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)))&&$eq5===null?true:
			($eq5===null?false:($eq6===null?false:
				((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
					((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
						$eq5==$eq6))))):$and3)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			head = head['rstrip']('/');
		}
		return head;
	};
	$m['dirname'].__name__ = 'dirname';

	$m['dirname'].__bind_type__ = 0;
	$m['dirname'].__args__ = [null,null,['p']];
	$m['samestat'] = function(s1, s2) {
		var $eq8,$eq9,$eq7,$and6,$and5,$eq10,$bool8;
		return ((($bool8=$and5=(($eq7=$p['getattr'](s1, 'st_ino'))===($eq8=$p['getattr'](s2, 'st_ino'))&&$eq7===null?true:
			($eq7===null?false:($eq8===null?false:
				((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
					((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
						$eq7==$eq8)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
			false :
			(typeof $bool8=='object'?
				(typeof $bool8.__nonzero__=='function'?
					$bool8.__nonzero__() :
					(typeof $bool8.__len__=='function'?
						($bool8.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(($eq9=$p['getattr'](s1, 'st_dev'))===($eq10=$p['getattr'](s2, 'st_dev'))&&$eq9===null?true:
			($eq9===null?false:($eq10===null?false:
				((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
					((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
						$eq9==$eq10))))):$and5);
	};
	$m['samestat'].__name__ = 'samestat';

	$m['samestat'].__bind_type__ = 0;
	$m['samestat'].__args__ = [null,null,['s1'],['s2']];
	$m['normpath'] = function(path) {
		var $bool18,$bool19,$or4,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,initial_slashes,$mul6,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,$or5,$iter2_iter,$bool24,$bool21,$bool20,slash,$bool22,new_comps,$and8,$and9,$or7,$or6,$iter2_type,$bool23,$or3,comp,$and7,$and12,comps,$iter2_idx,$and11,$add13,$mul5,$bool9,$2,$1,$add14,$iter2_nextval,$and13,$and10,dot,$iter2_array;
		var $tupleassign2 = $p['__ass_unpack']($p['tuple'](['/', '.']), 2, null);
		slash = $tupleassign2[0];
		dot = $tupleassign2[1];
		if ((($bool9=(($eq11=path)===($eq12='')&&$eq11===null?true:
			($eq11===null?false:($eq12===null?false:
				((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
					((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
						$eq11==$eq12)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
			return dot;
		}
		initial_slashes = path['startswith']('/');
		if ((($bool13=((($bool10=$and7=initial_slashes) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
			false :
			(typeof $bool10=='object'?
				(typeof $bool10.__nonzero__=='function'?
					$bool10.__nonzero__() :
					(typeof $bool10.__len__=='function'?
						($bool10.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($bool11=$and8=path['startswith']('//')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
			false :
			(typeof $bool11=='object'?
				(typeof $bool11.__nonzero__=='function'?
					$bool11.__nonzero__() :
					(typeof $bool11.__len__=='function'?
						($bool11.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($bool12=path['startswith']('///')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
			false :
			(typeof $bool12=='object'?
				(typeof $bool12.__nonzero__=='function'?
					$bool12.__nonzero__() :
					(typeof $bool12.__len__=='function'?
						($bool12.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) ):$and8):$and7)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			initial_slashes = 2;
		}
		comps = path['$$split']('/');
		new_comps = $p['list']([]);
		$iter2_iter = comps;
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			comp = $iter2_nextval;
			if ((($bool14=$p['tuple'](['', '.']).__contains__(comp)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				continue;
			}
			if ((($bool21=((($bool18=$or3=!(($eq13=comp)===($eq14='..')&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:((($bool19=$or4=((($bool16=$and10=!(($bool15=initial_slashes) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16.__nonzero__=='function'?
						$bool16.__nonzero__() :
						(typeof $bool16.__len__=='function'?
							($bool16.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool17=new_comps) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17.__nonzero__=='function'?
						$bool17.__nonzero__() :
						(typeof $bool17.__len__=='function'?
							($bool17.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and10)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19.__nonzero__=='function'?
						$bool19.__nonzero__() :
						(typeof $bool19.__len__=='function'?
							($bool19.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or4:((($bool20=$and12=new_comps) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
				false :
				(typeof $bool20=='object'?
					(typeof $bool20.__nonzero__=='function'?
						$bool20.__nonzero__() :
						(typeof $bool20.__len__=='function'?
							($bool20.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq15=(typeof ($1=new_comps).__array != 'undefined'?
				((typeof $1.__array[$2=(typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))))===($eq16='..')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16))))):$and12)))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				new_comps['append'](comp);
			}
			else if ((($bool22=new_comps) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				new_comps['pop']();
			}
		}
		comps = new_comps;
		path = slash['join'](comps);
		if ((($bool23=initial_slashes) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
			path = (typeof ($add13=(typeof ($mul5=slash)==typeof ($mul6=initial_slashes) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))==typeof ($add14=path) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
		}
		return ((($bool24=$or6=path) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
			false :
			(typeof $bool24=='object'?
				(typeof $bool24.__nonzero__=='function'?
					$bool24.__nonzero__() :
					(typeof $bool24.__len__=='function'?
						($bool24.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or6:dot);
	};
	$m['normpath'].__name__ = 'normpath';

	$m['normpath'].__bind_type__ = 0;
	$m['normpath'].__args__ = [null,null,['path']];
	$m['abspath'] = function(path) {

		return $m['normpath'](path);
	};
	$m['abspath'].__name__ = 'abspath';

	$m['abspath'].__bind_type__ = 0;
	$m['abspath'].__args__ = [null,null,['path']];
	$m['realpath'] = function(filename) {

		return $m['abspath'](filename);
	};
	$m['realpath'].__name__ = 'realpath';

	$m['realpath'].__bind_type__ = 0;
	$m['realpath'].__args__ = [null,null,['filename']];
	$m['islink'] = function(path) {

		throw ($p['NotImplemented']());
		return null;
	};
	$m['islink'].__name__ = 'islink';

	$m['islink'].__bind_type__ = 0;
	$m['islink'].__args__ = [null,null,['path']];
	$m['lexists'] = function(path) {

		throw ($p['NotImplemented']());
		return null;
	};
	$m['lexists'].__name__ = 'lexists';

	$m['lexists'].__bind_type__ = 0;
	$m['lexists'].__args__ = [null,null,['path']];
	$m['samefile'] = function(f1, f2) {

		throw ($p['NotImplemented']());
		return null;
	};
	$m['samefile'].__name__ = 'samefile';

	$m['samefile'].__bind_type__ = 0;
	$m['samefile'].__args__ = [null,null,['f1'],['f2']];
	$m['sameopenfile'] = function(fp1, fp2) {

		throw ($p['NotImplemented']());
		return null;
	};
	$m['sameopenfile'].__name__ = 'sameopenfile';

	$m['sameopenfile'].__bind_type__ = 0;
	$m['sameopenfile'].__args__ = [null,null,['fp1'],['fp2']];
	$m['ismount'] = function(path) {

		throw ($p['NotImplemented']());
		return null;
	};
	$m['ismount'].__name__ = 'ismount';

	$m['ismount'].__bind_type__ = 0;
	$m['ismount'].__args__ = [null,null,['path']];
	$m['walk'] = function(top, func, arg) {

		throw ($p['NotImplemented']());
		return null;
	};
	$m['walk'].__name__ = 'walk';

	$m['walk'].__bind_type__ = 0;
	$m['walk'].__args__ = [null,null,['top'],['func'],['arg']];
	$m['expanduser'] = function(path) {

		throw ($p['NotImplemented']());
		return null;
	};
	$m['expanduser'].__name__ = 'expanduser';

	$m['expanduser'].__bind_type__ = 0;
	$m['expanduser'].__args__ = [null,null,['path']];
	$m['expandvars'] = function(path) {

		throw ($p['NotImplemented']());
		return null;
	};
	$m['expandvars'].__name__ = 'expandvars';

	$m['expandvars'].__bind_type__ = 0;
	$m['expandvars'].__args__ = [null,null,['path']];
	$m['supports_unicode_filenames'] = (($eq17=$p['getattr']($m['sys'], 'platform'))===($eq18='darwin')&&$eq17===null?true:
		($eq17===null?false:($eq18===null?false:
			((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
				((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
					$eq17==$eq18)))));
	$m['relpath'] = function(path, start) {
		if (typeof start == 'undefined') start=arguments.callee.__args__[3][1];

		throw ($p['NotImplemented']());
		return null;
	};
	$m['relpath'].__name__ = 'relpath';

	$m['relpath'].__bind_type__ = 0;
	$m['relpath'].__args__ = [null,null,['path'],['start', $m['curdir']]];
	return this;
}; /* end pyjspath */


/* end module: pyjspath */


/*
PYJS_DEPS: ['os', 'sys', 'stat', 'genericpath']
*/
