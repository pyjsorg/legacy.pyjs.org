/* start module: RandomModuleTest */
$pyjs.loaded_modules['RandomModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['RandomModuleTest'].__was_initialized__) return $pyjs.loaded_modules['RandomModuleTest'];
	var $m = $pyjs.loaded_modules["RandomModuleTest"];
	$m.__repr__ = function() { return "<module: RandomModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'RandomModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'RandomModuleTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'RandomModuleTest.py, line 3:\n    import random';
		$m.__track_lines__[4] = 'RandomModuleTest.py, line 4:\n    from math import log, exp, sqrt, pi';
		$m.__track_lines__[5] = 'RandomModuleTest.py, line 5:\n    try:';
		$m.__track_lines__[6] = 'RandomModuleTest.py, line 6:\n    from math import fsum as msum';
		$m.__track_lines__[9] = 'RandomModuleTest.py, line 9:\n    from math import fabs';
		$m.__track_lines__[10] = 'RandomModuleTest.py, line 10:\n    def msum(x):';
		$m.__track_lines__[11] = 'RandomModuleTest.py, line 11:\n    xx = [(fabs(v), i) for i, v in enumerate(x)]';
		$m.__track_lines__[12] = 'RandomModuleTest.py, line 12:\n    xx.sort()';
		$m.__track_lines__[13] = 'RandomModuleTest.py, line 13:\n    sum = 0';
		$m.__track_lines__[14] = 'RandomModuleTest.py, line 14:\n    for i in xx:';
		$m.__track_lines__[15] = 'RandomModuleTest.py, line 15:\n    sum += x[i[1]]';
		$m.__track_lines__[16] = 'RandomModuleTest.py, line 16:\n    return sum';
		$m.__track_lines__[19] = 'RandomModuleTest.py, line 19:\n    _gammacoeff = (0.9999999999995183, 676.5203681218835, -1259.139216722289,';
		$m.__track_lines__[23] = 'RandomModuleTest.py, line 23:\n    def gamma(z, cof=_gammacoeff, g=7):';
		$m.__track_lines__[24] = 'RandomModuleTest.py, line 24:\n    z -= 1.0';
		$m.__track_lines__[27] = 'RandomModuleTest.py, line 27:\n    v1 = [cof[0]]';
		$m.__track_lines__[28] = 'RandomModuleTest.py, line 28:\n    v2 = [cof[i] / (z+i) for i in range(1,len(cof))]';
		$m.__track_lines__[29] = 'RandomModuleTest.py, line 29:\n    v1 = v1.__add__(v2)';
		$m.__track_lines__[30] = 'RandomModuleTest.py, line 30:\n    s = msum(v1)';
		$m.__track_lines__[31] = 'RandomModuleTest.py, line 31:\n    z += 0.5';
		$m.__track_lines__[32] = 'RandomModuleTest.py, line 32:\n    return (z+g)**z / exp(z+g) * sqrt(2.0*pi) * s';
		$m.__track_lines__[34] = 'RandomModuleTest.py, line 34:\n    class RandomModuleTest(UnitTest):';
		$m.__track_lines__[36] = 'RandomModuleTest.py, line 36:\n    def test_zeroinputs(self):';
		$m.__track_lines__[38] = 'RandomModuleTest.py, line 38:\n    g = random.Random()';
		$m.__track_lines__[39] = 'RandomModuleTest.py, line 39:\n    xx = [g.random() for i in xrange(50)]';
		$m.__track_lines__[40] = 'RandomModuleTest.py, line 40:\n    x = [0.0]';
		$m.__track_lines__[41] = 'RandomModuleTest.py, line 41:\n    xx = xx.__add__(x.__mul__(5))';
		$m.__track_lines__[42] = 'RandomModuleTest.py, line 42:\n    x = xx[:]';
		$m.__track_lines__[43] = "RandomModuleTest.py, line 43:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[44] = 'RandomModuleTest.py, line 44:\n    g.uniform(1,10)';
		$m.__track_lines__[45] = 'RandomModuleTest.py, line 45:\n    x = xx[:]';
		$m.__track_lines__[46] = "RandomModuleTest.py, line 46:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[47] = 'RandomModuleTest.py, line 47:\n    g.paretovariate(1.0)';
		$m.__track_lines__[48] = 'RandomModuleTest.py, line 48:\n    x = xx[:]';
		$m.__track_lines__[49] = "RandomModuleTest.py, line 49:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[50] = 'RandomModuleTest.py, line 50:\n    g.expovariate(1.0)';
		$m.__track_lines__[51] = 'RandomModuleTest.py, line 51:\n    x = xx[:]';
		$m.__track_lines__[52] = "RandomModuleTest.py, line 52:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[53] = 'RandomModuleTest.py, line 53:\n    g.weibullvariate(1.0, 1.0)';
		$m.__track_lines__[54] = 'RandomModuleTest.py, line 54:\n    x = xx[:]';
		$m.__track_lines__[55] = "RandomModuleTest.py, line 55:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[56] = 'RandomModuleTest.py, line 56:\n    g.normalvariate(0.0, 1.0)';
		$m.__track_lines__[57] = 'RandomModuleTest.py, line 57:\n    x = xx[:]';
		$m.__track_lines__[58] = "RandomModuleTest.py, line 58:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[59] = 'RandomModuleTest.py, line 59:\n    g.gauss(0.0, 1.0)';
		$m.__track_lines__[60] = 'RandomModuleTest.py, line 60:\n    x = xx[:]';
		$m.__track_lines__[61] = "RandomModuleTest.py, line 61:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[62] = 'RandomModuleTest.py, line 62:\n    g.lognormvariate(0.0, 1.0)';
		$m.__track_lines__[63] = 'RandomModuleTest.py, line 63:\n    x = xx[:]';
		$m.__track_lines__[64] = "RandomModuleTest.py, line 64:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[65] = 'RandomModuleTest.py, line 65:\n    g.vonmisesvariate(0.0, 1.0)';
		$m.__track_lines__[66] = 'RandomModuleTest.py, line 66:\n    x = xx[:]';
		$m.__track_lines__[67] = "RandomModuleTest.py, line 67:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[68] = 'RandomModuleTest.py, line 68:\n    g.gammavariate(0.01, 1.0)';
		$m.__track_lines__[69] = 'RandomModuleTest.py, line 69:\n    x = xx[:]';
		$m.__track_lines__[70] = "RandomModuleTest.py, line 70:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[71] = 'RandomModuleTest.py, line 71:\n    g.gammavariate(1.0, 1.0)';
		$m.__track_lines__[72] = 'RandomModuleTest.py, line 72:\n    x = xx[:]';
		$m.__track_lines__[73] = "RandomModuleTest.py, line 73:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[74] = 'RandomModuleTest.py, line 74:\n    g.gammavariate(200.0, 1.0)';
		$m.__track_lines__[75] = 'RandomModuleTest.py, line 75:\n    x = xx[:]';
		$m.__track_lines__[76] = "RandomModuleTest.py, line 76:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[77] = 'RandomModuleTest.py, line 77:\n    g.betavariate(3.0, 3.0)';
		$m.__track_lines__[78] = "RandomModuleTest.py, line 78:\n    if hasattr(g, 'triangular'):";
		$m.__track_lines__[79] = 'RandomModuleTest.py, line 79:\n    x = xx[:]';
		$m.__track_lines__[80] = "RandomModuleTest.py, line 80:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[81] = 'RandomModuleTest.py, line 81:\n    g.triangular(0.0, 1.0, 1.0/3.0)';
		$m.__track_lines__[83] = 'RandomModuleTest.py, line 83:\n    def test_avg_std(self):';
		$m.__track_lines__[86] = 'RandomModuleTest.py, line 86:\n    g = random.Random()';
		$m.__track_lines__[87] = 'RandomModuleTest.py, line 87:\n    N = 5000';
		$m.__track_lines__[88] = 'RandomModuleTest.py, line 88:\n    xx = [i/float(N) for i in xrange(1,N)]';
		$m.__track_lines__[89] = 'RandomModuleTest.py, line 89:\n    dists = [';
		$m.__track_lines__[96] = "RandomModuleTest.py, line 96:\n    if hasattr(g, 'triangular'):";
		$m.__track_lines__[97] = 'RandomModuleTest.py, line 97:\n    dists.append((g.triangular, (0.0, 1.0, 1.0/3.0), 4.0/9.0, 7.0/9.0/18.0))';
		$m.__track_lines__[98] = 'RandomModuleTest.py, line 98:\n    for variate, args, mu, sigmasqrd in dists:';
		$m.__track_lines__[99] = 'RandomModuleTest.py, line 99:\n    x = xx[:]';
		$m.__track_lines__[100] = "RandomModuleTest.py, line 100:\n    g.random = getattr(x, 'pop')";
		$m.__track_lines__[101] = 'RandomModuleTest.py, line 101:\n    y = []';
		$m.__track_lines__[102] = 'RandomModuleTest.py, line 102:\n    for i in xrange(len(x)):';
		$m.__track_lines__[103] = 'RandomModuleTest.py, line 103:\n    try:';
		$m.__track_lines__[104] = 'RandomModuleTest.py, line 104:\n    y.append(variate(*args))';
		$m.__track_lines__[106] = 'RandomModuleTest.py, line 106:\n    pass';
		$m.__track_lines__[107] = 'RandomModuleTest.py, line 107:\n    s1 = s2 = 0';
		$m.__track_lines__[108] = 'RandomModuleTest.py, line 108:\n    for e in y:';
		$m.__track_lines__[109] = 'RandomModuleTest.py, line 109:\n    s1 += e';
		$m.__track_lines__[110] = 'RandomModuleTest.py, line 110:\n    s2 += (e - mu) ** 2';
		$m.__track_lines__[111] = 'RandomModuleTest.py, line 111:\n    N = len(y)';
		$m.__track_lines__[112] = 'RandomModuleTest.py, line 112:\n    self.assertAlmostEqual(s1/N, mu, 2)';
		$m.__track_lines__[113] = 'RandomModuleTest.py, line 113:\n    self.assertAlmostEqual(s2/(N-1), sigmasqrd, 2)';
		var $pyjs_try_err;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_5000 = new $p['int'](5000);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		$pyjs.track.module='RandomModuleTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['random'] = $p['___import___']('random', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['log'] = $p['___import___']('math.log', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['exp'] = $p['___import___']('math.exp', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sqrt'] = $p['___import___']('math.sqrt', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['pi'] = $p['___import___']('math.pi', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=6;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['msum'] = $p['___import___']('math.fsum', null, null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		} catch($pyjs_try_err) {
			$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
			$pyjs.__active_exception_stack__ = null;
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='RandomModuleTest';
			if (true) {
				$pyjs.track.lineno=9;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				$m['fabs'] = $p['___import___']('math.fabs', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=10;
				$m['msum'] = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $iter2_nextval,$iter2_type,$iter2_iter,i,sum,$iter2_idx,$add2,xx,$add1,$pyjs__trackstack_size_2,$4,$2,$3,$iter2_array,$1;
					$pyjs.track={module:'RandomModuleTest',lineno:10};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='RandomModuleTest';
					$pyjs.track.lineno=10;
					$pyjs.track.lineno=11;
					xx = function(){
						var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$pyjs__trackstack_size_2,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter1_iter = $p['enumerate'](x);
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
						v = $tupleassign1[1];
						$collcomp1['append']($p['tuple']([$m['fabs'](v), i]));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='RandomModuleTest';

	return $collcomp1;}();
					$pyjs.track.lineno=12;
					xx['sort']();
					$pyjs.track.lineno=13;
					sum = $constant_int_0;
					$pyjs.track.lineno=14;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter2_iter = xx;
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						i = $iter2_nextval;
						$pyjs.track.lineno=15;
						sum = (typeof ($add1=sum)==typeof ($add2=(typeof ($3=x).__array != 'undefined'?
							((typeof $3.__array[$4=(typeof ($1=i).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_1]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_1))]) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__((typeof ($1=i).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_1]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_1))))) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='RandomModuleTest';
					$pyjs.track.lineno=16;
					$pyjs.track.lineno=16;
					var $pyjs__ret = sum;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$m['msum'].__name__ = 'msum';

				$m['msum'].__bind_type__ = 0;
				$m['msum'].__args__ = [null,null,['x']];
			}
		}
		$pyjs.track.lineno=19;
		$m['_gammacoeff'] = $p['tuple']([1.0, 676.520368122, (typeof ($usub1=1259.13921672)=='number'?
			-$usub1:
			$p['op_usub']($usub1)), 771.323428776, (typeof ($usub2=176.61502915)=='number'?
			-$usub2:
			$p['op_usub']($usub2)), 12.5073432401, (typeof ($usub3=0.13857103313)=='number'?
			-$usub3:
			$p['op_usub']($usub3)), 9.93493711393e-06, 1.65947018741e-07]);
		$pyjs.track.lineno=23;
		$m['gamma'] = function(z, cof, g) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
			if (typeof cof == 'undefined') cof=arguments.callee.__args__[3][1];
			if (typeof g == 'undefined') g=arguments.callee.__args__[4][1];
			var $mul6,$mul4,$pow2,$pow1,$div4,$sub2,$sub1,v1,v2,$add10,$6,$div3,$mul5,$5,$mul3,$mul2,$mul1,s,$add6,$add7,$add5,$add8,$add9;
			$pyjs.track={module:'RandomModuleTest',lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='RandomModuleTest';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=24;
			z = (typeof ($sub1=z)==typeof ($sub2=1.0) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			$pyjs.track.lineno=27;
			v1 = $p['list']([(typeof ($5=cof).__array != 'undefined'?
				((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__($constant_int_0))]);
			$pyjs.track.lineno=28;
			v2 = function(){
				var $iter3_idx,$add4,i,$iter3_nextval,$iter3_array,$collcomp2,$add3,$len1,$iter3_iter,$8,$iter3_type,$div2,$7,$div1,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter3_iter = $p['range']($constant_int_1, (($len1=cof) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1))))));
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				$collcomp2['append']((typeof ($div1=(typeof ($7=cof).__array != 'undefined'?
					((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(i)))==typeof ($div2=(typeof ($add3=z)==typeof ($add4=i) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='RandomModuleTest';

	return $collcomp2;}();
			$pyjs.track.lineno=29;
			v1 = v1['__add__'](v2);
			$pyjs.track.lineno=30;
			s = $m['msum'](v1);
			$pyjs.track.lineno=31;
			z = (typeof ($add5=z)==typeof ($add6=0.5) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			$pyjs.track.lineno=32;
			$pyjs.track.lineno=32;
			var $pyjs__ret = (typeof ($mul5=(typeof ($mul3=(typeof ($div3=(typeof ($pow1=(typeof ($add7=z)==typeof ($add8=g) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))==typeof ($pow2=z) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2)))==typeof ($div4=$m['exp']((typeof ($add9=z)==typeof ($add10=g) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))==typeof ($mul4=$m['sqrt']((typeof ($mul1=2.0)==typeof ($mul2=$m['pi']) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($mul6=s) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['gamma'].__name__ = 'gamma';

		$m['gamma'].__bind_type__ = 0;
		$m['gamma'].__args__ = [null,null,['z'],['cof', $m['_gammacoeff']],['g', $constant_int_7]];
		$pyjs.track.lineno=34;
		$m['RandomModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'RandomModuleTest';
			$cls_definition.__md5__ = 'edb20583816566c5c01e7b669609c836';
			$pyjs.track.lineno=36;
			$method = $pyjs__bind_method2('test_zeroinputs', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'edb20583816566c5c01e7b669609c836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var g,xx,$bool1,x,$div6,$div5;
				$pyjs.track={module:'RandomModuleTest', lineno:36};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='RandomModuleTest';
				$pyjs.track.lineno=36;
				$pyjs.track.lineno=38;
				g = $m['random']['Random']();
				$pyjs.track.lineno=39;
				xx = function(){
					var i,$iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = $p['xrange']($constant_int_50);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					$collcomp3['append'](g['random']());
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='RandomModuleTest';

	return $collcomp3;}();
				$pyjs.track.lineno=40;
				x = $p['list']([0.0]);
				$pyjs.track.lineno=41;
				xx = xx['__add__'](x['__mul__']($constant_int_5));
				$pyjs.track.lineno=42;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=43;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=44;
				g['uniform']($constant_int_1, $constant_int_10);
				$pyjs.track.lineno=45;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=46;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=47;
				g['paretovariate'](1.0);
				$pyjs.track.lineno=48;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=49;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=50;
				g['expovariate'](1.0);
				$pyjs.track.lineno=51;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=52;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=53;
				g['weibullvariate'](1.0, 1.0);
				$pyjs.track.lineno=54;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=55;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=56;
				g['normalvariate'](0.0, 1.0);
				$pyjs.track.lineno=57;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=58;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=59;
				g['gauss'](0.0, 1.0);
				$pyjs.track.lineno=60;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=61;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=62;
				g['lognormvariate'](0.0, 1.0);
				$pyjs.track.lineno=63;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=64;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=65;
				g['vonmisesvariate'](0.0, 1.0);
				$pyjs.track.lineno=66;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=67;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=68;
				g['gammavariate'](0.01, 1.0);
				$pyjs.track.lineno=69;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=70;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=71;
				g['gammavariate'](1.0, 1.0);
				$pyjs.track.lineno=72;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=73;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=74;
				g['gammavariate'](200.0, 1.0);
				$pyjs.track.lineno=75;
				x = $p['__getslice'](xx, 0, null);
				$pyjs.track.lineno=76;
				g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
				$pyjs.track.lineno=77;
				g['betavariate'](3.0, 3.0);
				$pyjs.track.lineno=78;
				if ((($bool1=$p['hasattr'](g, 'triangular')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=79;
					x = $p['__getslice'](xx, 0, null);
					$pyjs.track.lineno=80;
					g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
					$pyjs.track.lineno=81;
					g['triangular'](0.0, 1.0, (typeof ($div5=1.0)==typeof ($div6=3.0) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6)));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_zeroinputs'] = $method;
			$pyjs.track.lineno=83;
			$method = $pyjs__bind_method2('test_avg_std', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'edb20583816566c5c01e7b669609c836') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub8,$iter7_type,variate,$bool2,$iter6_array,$iter7_nextval,$pyjs__trackstack_size_2,dists,$pyjs__trackstack_size_1,x,$iter8_iter,$iter6_iter,$pow12,$pow11,$pow10,$pow7,$pow6,$pow5,$pow4,$pow3,$div37,$div34,$div35,$div38,$pow9,$pow8,$len2,$iter8_type,$sub10,$iter6_idx,$sub13,$sub12,$sub11,args,$sub16,$sub15,$sub14,$div21,$div20,$div23,$div22,$div25,$div24,$div27,$div26,$div29,$div28,$iter8_array,$add17,$iter6_type,$add13,xx,$div18,$div19,$div14,$div15,$div16,$div17,$div10,$div11,$div12,$div13,$iter8_idx,$iter7_iter,N,$iter8_nextval,$mul8,$mul7,g,mu,$assign1,$len3,$div31,$iter6_nextval,$add21,s2,$add22,$sub9,$pyjs_try_err,$sub3,$sub7,$sub6,$sub5,$sub4,$div32,$div33,$div30,$add14,$add15,$add16,$div9,$add11,$add12,$iter7_idx,$div36,$add18,$add19,e,sigmasqrd,i,$iter7_array,$add20,y,s1;
				$pyjs.track={module:'RandomModuleTest', lineno:83};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='RandomModuleTest';
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=86;
				g = $m['random']['Random']();
				$pyjs.track.lineno=87;
				N = $constant_int_5000;
				$pyjs.track.lineno=88;
				xx = function(){
					var $iter5_nextval,i,$iter5_idx,$collcomp4,$div8,$iter5_iter,$iter5_array,$iter5_type,$pyjs__trackstack_size_1,$div7;
	$collcomp4 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = $p['xrange']($constant_int_1, N);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					$collcomp4['append']((typeof ($div7=i)==typeof ($div8=$p['float'](N)) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='RandomModuleTest';

	return $collcomp4;}();
				$pyjs.track.lineno=89;
				dists = $p['list']([$p['tuple']([$p['getattr'](g, 'uniform'), $p['tuple']([1.0, 10.0]), (typeof ($div9=(typeof ($add11=10.0)==typeof ($add12=1.0) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)), (typeof ($div11=(typeof ($pow3=(typeof ($sub3=10.0)==typeof ($sub4=1.0) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($pow4=$constant_int_2) && typeof $pow3=='number'?
					Math.pow($pow3,$pow4):
					$p['op_pow']($pow3,$pow4)))==typeof ($div12=$constant_int_12) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12))]), $p['tuple']([$p['getattr'](g, 'expovariate'), $p['tuple']([1.5]), (typeof ($div13=$constant_int_1)==typeof ($div14=1.5) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)), (typeof ($div15=$constant_int_1)==typeof ($div16=(typeof ($pow5=1.5)==typeof ($pow6=$constant_int_2) && typeof $pow5=='number'?
					Math.pow($pow5,$pow6):
					$p['op_pow']($pow5,$pow6))) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16))]), $p['tuple']([$p['getattr'](g, 'paretovariate'), $p['tuple']([5.0]), (typeof ($div17=5.0)==typeof ($div18=(typeof ($sub5=5.0)==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6))) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)), (typeof ($div19=5.0)==typeof ($div20=(typeof ($mul7=(typeof ($pow7=(typeof ($sub7=5.0)==typeof ($sub8=$constant_int_1) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)))==typeof ($pow8=$constant_int_2) && typeof $pow7=='number'?
					Math.pow($pow7,$pow8):
					$p['op_pow']($pow7,$pow8)))==typeof ($mul8=(typeof ($sub9=5.0)==typeof ($sub10=$constant_int_2) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10))) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20))]), $p['tuple']([$p['getattr'](g, 'weibullvariate'), $p['tuple']([1.0, 3.0]), $m['gamma']((typeof ($add13=$constant_int_1)==typeof ($add14=(typeof ($div21=$constant_int_1)==typeof ($div22=3.0) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))), (typeof ($sub11=$m['gamma']((typeof ($add15=$constant_int_1)==typeof ($add16=(typeof ($div23=$constant_int_2)==typeof ($div24=3.0) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24))) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))))==typeof ($sub12=(typeof ($pow9=$m['gamma']((typeof ($add17=$constant_int_1)==typeof ($add18=(typeof ($div25=$constant_int_1)==typeof ($div26=3.0) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18))))==typeof ($pow10=$constant_int_2) && typeof $pow9=='number'?
					Math.pow($pow9,$pow10):
					$p['op_pow']($pow9,$pow10))) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))])]);
				$pyjs.track.lineno=96;
				if ((($bool2=$p['hasattr'](g, 'triangular')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=97;
					dists['append']($p['tuple']([$p['getattr'](g, 'triangular'), $p['tuple']([0.0, 1.0, (typeof ($div27=1.0)==typeof ($div28=3.0) && typeof $div27=='number' && $div28 !== 0?
						$div27/$div28:
						$p['op_div']($div27,$div28))]), (typeof ($div29=4.0)==typeof ($div30=9.0) && typeof $div29=='number' && $div30 !== 0?
						$div29/$div30:
						$p['op_div']($div29,$div30)), (typeof ($div33=(typeof ($div31=7.0)==typeof ($div32=9.0) && typeof $div31=='number' && $div32 !== 0?
						$div31/$div32:
						$p['op_div']($div31,$div32)))==typeof ($div34=18.0) && typeof $div33=='number' && $div34 !== 0?
						$div33/$div34:
						$p['op_div']($div33,$div34))]));
				}
				$pyjs.track.lineno=98;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = dists;
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter6_nextval, 4, null);
					variate = $tupleassign2[0];
					args = $tupleassign2[1];
					mu = $tupleassign2[2];
					sigmasqrd = $tupleassign2[3];
					$pyjs.track.lineno=99;
					x = $p['__getslice'](xx, 0, null);
					$pyjs.track.lineno=100;
					g.__is_instance__ && typeof g.__setattr__ == 'function' ? g.__setattr__('random', $p['getattr'](x, 'pop')) : $p['setattr'](g, 'random', $p['getattr'](x, 'pop')); 
					$pyjs.track.lineno=101;
					y = $p['list']([]);
					$pyjs.track.lineno=102;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter7_iter = $p['xrange']((($len2=x) === null?$constant_int_0:
						(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
							(typeof $len2.__len__ == 'function'?$len2.__len__():
								(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
									$p['len']($len2))))));
					if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter.__iter__();
						$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						i = $iter7_nextval;
						$pyjs.track.lineno=103;
						var $pyjs__trackstack_size_3 = $pyjs.trackstack.length;
						try {
							$pyjs.track.lineno=104;
							y['append']($pyjs_kwargs_call(null, variate, args, null, [{}]));
						} catch($pyjs_try_err) {
							$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_3 - 1);
							$pyjs.__active_exception_stack__ = null;
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_3) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_3);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='RandomModuleTest';
							if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
								$pyjs.track.lineno=106;
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='RandomModuleTest';
					$pyjs.track.lineno=107;
					$assign1 = $constant_int_0;
					s1 = $assign1;
					s2 = $assign1;
					$pyjs.track.lineno=108;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter8_iter = y;
					if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter.__iter__();
						$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						e = $iter8_nextval;
						$pyjs.track.lineno=109;
						s1 = (typeof ($add19=s1)==typeof ($add20=e) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20));
						$pyjs.track.lineno=110;
						s2 = (typeof ($add21=s2)==typeof ($add22=(typeof ($pow11=(typeof ($sub13=e)==typeof ($sub14=mu) && (typeof $sub13=='number'||typeof $sub13=='string')?
							$sub13-$sub14:
							$p['op_sub']($sub13,$sub14)))==typeof ($pow12=$constant_int_2) && typeof $pow11=='number'?
							Math.pow($pow11,$pow12):
							$p['op_pow']($pow11,$pow12))) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='RandomModuleTest';
					$pyjs.track.lineno=111;
					N = (($len3=y) === null?$constant_int_0:
						(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
							(typeof $len3.__len__ == 'function'?$len3.__len__():
								(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
									$p['len']($len3)))));
					$pyjs.track.lineno=112;
					self['assertAlmostEqual']((typeof ($div35=s1)==typeof ($div36=N) && typeof $div35=='number' && $div36 !== 0?
						$div35/$div36:
						$p['op_div']($div35,$div36)), mu, $constant_int_2);
					$pyjs.track.lineno=113;
					self['assertAlmostEqual']((typeof ($div37=s2)==typeof ($div38=(typeof ($sub15=N)==typeof ($sub16=$constant_int_1) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16))) && typeof $div37=='number' && $div38 !== 0?
						$div37/$div38:
						$p['op_div']($div37,$div38)), sigmasqrd, $constant_int_2);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='RandomModuleTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_avg_std'] = $method;
			$pyjs.track.lineno=34;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RandomModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end RandomModuleTest */


/* end module: RandomModuleTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'random', 'math.log', 'math', 'math.exp', 'math.sqrt', 'math.pi', 'math.fsum', 'math.fabs']
*/
