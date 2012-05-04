/* start module: TimeSlot */
$pyjs.loaded_modules['TimeSlot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TimeSlot'].__was_initialized__) return $pyjs.loaded_modules['TimeSlot'];
	var $m = $pyjs.loaded_modules["TimeSlot"];
	$m.__repr__ = function() { return "<module: TimeSlot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TimeSlot';
	$m.__name__ = __mod_name__;


	$m['math'] = $p['___import___']('math', null);
	$m['TimeSlot'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TimeSlot';
		$method = $pyjs__bind_method2('__init__', function(dayOfWeek, startMinutes, endMinutes) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dayOfWeek = arguments[1];
				startMinutes = arguments[2];
				endMinutes = arguments[3];
			}

			self.DAYS = $p['list'](['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
			self.dayOfWeek = dayOfWeek;
			self.startMinutes = startMinutes;
			self.endMinutes = endMinutes;
			return null;
		}
	, 1, [null,null,['self'],['dayOfWeek'],['startMinutes'],['endMinutes']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('compareTo', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $cmp5,$cmp4,$bool1,$cmp6,$cmp1,$cmp3,$cmp2,$cmp7,$cmp8,$bool2,$bool3,$bool4;
			if ((($bool1=((($cmp1=$p['getattr'](self, 'dayOfWeek'))===($cmp2=$p['getattr'](other, 'dayOfWeek'))?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				return (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
			}
			else if ((($bool2=((($cmp3=$p['getattr'](self, 'dayOfWeek'))===($cmp4=$p['getattr'](other, 'dayOfWeek'))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return 1;
			}
			else {
				if ((($bool3=((($cmp5=$p['getattr'](self, 'startMinutes'))===($cmp6=$p['getattr'](other, 'startMinutes'))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return (typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2));
				}
				else if ((($bool4=((($cmp7=$p['getattr'](self, 'startMinutes'))===($cmp8=$p['getattr'](other, 'startMinutes'))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					return 1;
				}
			}
			return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['compareTo'] = $method;
		$method = $pyjs__bind_method2('getDayOfWeek', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'dayOfWeek');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDayOfWeek'] = $method;
		$method = $pyjs__bind_method2('getDescription', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$2,$1;
			return (typeof ($add7=(typeof ($add5=(typeof ($add3=(typeof ($add1=(typeof ($1=$p['getattr'](self, 'DAYS')).__array != 'undefined'?
				((typeof $1.__array[$2=$p['getattr'](self, 'dayOfWeek')]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__($p['getattr'](self, 'dayOfWeek'))))==typeof ($add2=' ') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4=self['getHrsMins']($p['getattr'](self, 'startMinutes'))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($add6='-') && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)))==typeof ($add8=self['getHrsMins']($p['getattr'](self, 'endMinutes'))) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDescription'] = $method;
		$method = $pyjs__bind_method2('getHrsMins', function(mins) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mins = arguments[1];
			}
			var $add13,$mod1,$mod2,$add10,hrs,$sub2,$sub1,string_mins,$add14,$bool6,$add11,$add12,$cmp12,$div2,$div1,remainder,$cmp9,$cmp11,$bool5,$add9,$cmp10;
			hrs = $m['math']['floor']((typeof ($div1=mins)==typeof ($div2=60) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
			if ((($bool5=((($cmp9=hrs)===($cmp10=12)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				hrs = (typeof ($sub1=hrs)==typeof ($sub2=12) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
			}
			remainder = $m['math']['floor']((typeof ($mod1=mins)==typeof ($mod2=60) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)));
			if ((($bool6=((($cmp11=remainder)===($cmp12=10)?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				string_mins = (typeof ($add9='0')==typeof ($add10=$p['str'](remainder)) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			else {
				string_mins = $p['str'](remainder);
			}
			return (typeof ($add13=(typeof ($add11=$p['str'](hrs))==typeof ($add12=':') && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)))==typeof ($add14=string_mins) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
		}
	, 1, [null,null,['self'],['mins']]);
		$cls_definition['getHrsMins'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TimeSlot', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end TimeSlot */


/* end module: TimeSlot */


/*
PYJS_DEPS: ['math']
*/
