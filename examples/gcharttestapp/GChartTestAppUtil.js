/* start module: GChartTestAppUtil */
$pyjs.loaded_modules['GChartTestAppUtil'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartTestAppUtil'].__was_initialized__) return $pyjs.loaded_modules['GChartTestAppUtil'];
	var $m = $pyjs.loaded_modules["GChartTestAppUtil"];
	$m.__repr__ = function() { return "<module: GChartTestAppUtil>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartTestAppUtil';
	$m.__name__ = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['getTitle'] = function(obj) {
		var $add2,$add3,$add1,$add6,result,$add4,$add5;
		result = $p['getattr']($p['getattr'](obj, '__class__'), '__name__');
		result = $p['__getslice'](result, 0, (typeof ($add1=result['rfind']('.'))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2)));
		return (typeof ($add5=(typeof ($add3='<h4><br>')==typeof ($add4=result) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4)))==typeof ($add6='</h4>') && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6));
	};
	$m['getTitle'].__name__ = 'getTitle';

	$m['getTitle'].__bind_type__ = 0;
	$m['getTitle'].__args__ = [null,null,['obj']];
	$m['i'] = 0;
	$m['rnd'] = function() {
		var a,c,m,$mod1,$add7,$mod2,$div2,$add8,$div1,$mul2,$mul1;
		m = 217728;
		a = 84589;
		c = 45989;
		$m['i'] = (typeof ($mod1=(typeof ($add7=(typeof ($mul1=a)==typeof ($mul2=$m['i']) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)))==typeof ($add8=c) && (typeof $add7=='number'||typeof $add7=='string')?
			$add7+$add8:
			$p['op_add']($add7,$add8)))==typeof ($mod2=m) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2));
		return (typeof ($div1=$p['float']($m['i']))==typeof ($div2=m) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2));
	};
	$m['rnd'].__name__ = 'rnd';

	$m['rnd'].__bind_type__ = 0;
	$m['rnd'].__args__ = [null,null];
	return this;
}; /* end GChartTestAppUtil */


/* end module: GChartTestAppUtil */


/*
PYJS_DEPS: ['pyjd']
*/
