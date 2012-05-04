/* start module: pyjamas.Factory */
$pyjs.loaded_modules['pyjamas.Factory'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Factory'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Factory'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Factory"];
	$m.__repr__ = function() { return "<module: pyjamas.Factory>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Factory';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['Factory'] = $pyjs.loaded_modules['pyjamas.Factory'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas', null, false);
	$m['factory'] = $p['dict']([]);
	$m['registerClass'] = function(modname, klsname, kls) {
		var name,$bool1;
		if ((($bool1=(modname === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			modname = '.'['join']($p['list'](['pyjamas.ui', klsname]));
		}
		name = '.'['join']($p['list']([modname, klsname]));
		$m['factory'].__setitem__(name, kls);
		return null;
	};
	$m['registerClass'].__name__ = 'registerClass';

	$m['registerClass'].__bind_type__ = 0;
	$m['registerClass'].__args__ = [null,null,['modname'],['klsname'],['kls']];
	$m['lookupClass'] = function(name) {
		var $2,$1;
		return (typeof ($1=$m['factory']).__array != 'undefined'?
			((typeof $1.__array[$2=name]) != 'undefined'?$1.__array[$2]:
				$1.__getitem__($2)):
				$1.__getitem__(name));
	};
	$m['lookupClass'].__name__ = 'lookupClass';

	$m['lookupClass'].__bind_type__ = 0;
	$m['lookupClass'].__args__ = [null,null,['name']];
	$m['createWidgetOnElement'] = function(element) {
		var txtargs,lbr,$8,$9,$iter1_iter,$eq9,$and1,arg,$eq10,$or1,$iter1_array,kwargs,klsname,findeq,$eq8,$eq1,$iter1_nextval,$or2,$eq2,$eq3,$and2,args,$eq6,$eq7,$eq4,$eq5,$bool2,$bool3,$and3,fc,$bool6,$bool4,$bool5,$6,$7,$4,$5,$3,$10,$iter1_type,k,$and4,$add2,$add3,$add1,$iter1_idx,$add4,v;
		fc = $m['DOM']['getAttribute'](element, 'id');
		lbr = fc['find']('(');
		klsname = $p['__getslice'](fc, 0, lbr);
		txtargs = $p['__getslice'](fc, (typeof ($add1=lbr)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2)), (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)));
		args = $p['list']([]);
		kwargs = $p['dict']([]);
		$iter1_iter = txtargs['$$split'](',');
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			arg = $iter1_nextval;
			findeq = arg['find']('=');
			if ((($bool2=(($eq1=findeq)===($eq2=(typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)))&&$eq1===null?true:
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
						 true ) )) {
				args['append'](arg);
			}
			else {
				k = $p['__getslice'](arg, 0, findeq);
				v = $p['__getslice'](arg, (typeof ($add3=findeq)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)), null);
				if ((($bool6=((($bool4=$or1=((($bool3=$and1=(($eq3=(typeof ($3=v).__array != 'undefined'?
					((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(0)))===($eq4="'")&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq5=(typeof ($5=v).__array != 'undefined'?
					((typeof $5.__array[$6=(typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__((typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)))))===($eq6="'")&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6))))):$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($bool5=$and3=(($eq7=(typeof ($7=v).__array != 'undefined'?
					((typeof $7.__array[$8=0]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(0)))===($eq8='"')&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq9=(typeof ($9=v).__array != 'undefined'?
					((typeof $9.__array[$10=(typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__((typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)))))===($eq10='"')&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10))))):$and3))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					v = $p['__getslice'](v, 1, (typeof ($usub5=1)=='number'?
						-$usub5:
						$p['op_usub']($usub5)));
				}
				else {
					v = $p['float_int'](v);
				}
				kwargs.__setitem__(k, v);
			}
		}
		kwargs.__setitem__('Element', element);
		return $pyjs_kwargs_call(null, $m['lookupClass'](klsname), args, kwargs, [{}]);
	};
	$m['createWidgetOnElement'].__name__ = 'createWidgetOnElement';

	$m['createWidgetOnElement'].__bind_type__ = 0;
	$m['createWidgetOnElement'].__args__ = [null,null,['element']];
	$m['addPyjamasNameSpace'] = function() {

		$m.doc()['createElementNS']('urn:schemas-pyjs-org:pyjs');
		return null;
	};
	$m['addPyjamasNameSpace'].__name__ = 'addPyjamasNameSpace';

	$m['addPyjamasNameSpace'].__bind_type__ = 0;
	$m['addPyjamasNameSpace'].__args__ = [null,null];
	return this;
}; /* end pyjamas.Factory */


/* end module: pyjamas.Factory */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
