/* start module: math */
$pyjs.loaded_modules['math'] = function (__mod_name__) {
	if($pyjs.loaded_modules['math'].__was_initialized__) return $pyjs.loaded_modules['math'];
	var $m = $pyjs.loaded_modules["math"];
	$m.__repr__ = function() { return "<module: math>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'math';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'math.py, line 1:\n    from __pyjamas__ import JS';
		$m.__track_lines__[3] = 'math.py, line 3:\n    def ceil(x): return float(JS("Math.ceil(@{{x}}.valueOf())"))';
		$m.__track_lines__[4] = 'math.py, line 4:\n    def fabs(x): return float(JS("Math.abs(@{{x}}.valueOf())"))';
		$m.__track_lines__[5] = 'math.py, line 5:\n    def floor(x): return float(JS("Math.floor(@{{x}}.valueOf())"))';
		$m.__track_lines__[6] = 'math.py, line 6:\n    def exp(x): return float(JS("Math.exp(@{{x}}.valueOf())"))';
		$m.__track_lines__[7] = 'math.py, line 7:\n    def log(x, base=None):';
		$m.__track_lines__[8] = 'math.py, line 8:\n    if base is None:';
		$m.__track_lines__[9] = 'math.py, line 9:\n    return float(JS("Math.log(@{{x}}.valueOf())"))';
		$m.__track_lines__[10] = 'math.py, line 10:\n    return float(JS("Math.log(@{{x}}.valueOf()) / Math.log(@{{base}}.valueOf())"))';
		$m.__track_lines__[11] = 'math.py, line 11:\n    def pow(x, y): return float(JS("Math.pow(@{{x}}.valueOf(), @{{y}}.valueOf())"))';
		$m.__track_lines__[12] = 'math.py, line 12:\n    def sqrt(x): return float(JS("Math.sqrt(@{{x}}.valueOf())"))';
		$m.__track_lines__[13] = 'math.py, line 13:\n    def cos(x): return float(JS("Math.cos(@{{x}}.valueOf())"))';
		$m.__track_lines__[14] = 'math.py, line 14:\n    def sin(x): return float(JS("Math.sin(@{{x}}.valueOf())"))';
		$m.__track_lines__[15] = 'math.py, line 15:\n    def tan(x): return float(JS("Math.tan(@{{x}}.valueOf())"))';
		$m.__track_lines__[16] = 'math.py, line 16:\n    def acos(x): return float(JS("Math.acos(@{{x}}.valueOf())"))';
		$m.__track_lines__[17] = 'math.py, line 17:\n    def asin(x): return float(JS("Math.asin(@{{x}}.valueOf())"))';
		$m.__track_lines__[18] = 'math.py, line 18:\n    def atan(x): return float(JS("Math.atan(@{{x}}.valueOf())"))';
		$m.__track_lines__[19] = 'math.py, line 19:\n    def atan2(x, y): return float(JS("Math.atan2(@{{x}}.valueOf(), @{{y}}.valueOf())"))';
		$m.__track_lines__[21] = 'math.py, line 21:\n    pi = float(JS("Math.PI"))';
		$m.__track_lines__[22] = 'math.py, line 22:\n    e = float(JS("Math.E"))';
		$m.__track_lines__[23] = 'math.py, line 23:\n    __log10__ = float(JS("Math.LN10"))';
		$m.__track_lines__[24] = 'math.py, line 24:\n    __log2__ = log(2)';
		$m.__track_lines__[27] = 'math.py, line 27:\n    def fsum(x):';
		$m.__track_lines__[28] = 'math.py, line 28:\n    xx = [(fabs(v), i) for i, v in enumerate(x)]';
		$m.__track_lines__[29] = 'math.py, line 29:\n    xx.sort()';
		$m.__track_lines__[30] = 'math.py, line 30:\n    sum = 0';
		$m.__track_lines__[31] = 'math.py, line 31:\n    for i in xx:';
		$m.__track_lines__[32] = 'math.py, line 32:\n    sum += x[i[1]]';
		$m.__track_lines__[33] = 'math.py, line 33:\n    return sum';
		$m.__track_lines__[35] = 'math.py, line 35:\n    def frexp(x):';
		$m.__track_lines__[36] = 'math.py, line 36:\n    global __log2__';
		$m.__track_lines__[37] = 'math.py, line 37:\n    if x == 0:';
		$m.__track_lines__[38] = 'math.py, line 38:\n    return (0.0, 0)';
		$m.__track_lines__[40] = 'math.py, line 40:\n    e = int(log(abs(x))/__log2__) + 1';
		$m.__track_lines__[41] = 'math.py, line 41:\n    m = x / (2.**e)';
		$m.__track_lines__[42] = 'math.py, line 42:\n    return (m,e)';
		$m.__track_lines__[44] = 'math.py, line 44:\n    def ldexp(x, i):';
		$m.__track_lines__[45] = 'math.py, line 45:\n    return x * (2**i)';
		$m.__track_lines__[47] = 'math.py, line 47:\n    def log10 (arg):';
		$m.__track_lines__[48] = 'math.py, line 48:\n    return log(arg) / __log10__';
		$m.__track_lines__[50] = 'math.py, line 50:\n    def degrees(x):';
		$m.__track_lines__[51] = 'math.py, line 51:\n    return x * 180 / pi';
		$m.__track_lines__[53] = 'math.py, line 53:\n    def radians(x):';
		$m.__track_lines__[54] = 'math.py, line 54:\n    return x * pi / 180';
		$m.__track_lines__[56] = 'math.py, line 56:\n    def hypot(x, y):';
		$m.__track_lines__[58] = 'math.py, line 58:\n    x = abs(x)';
		$m.__track_lines__[59] = 'math.py, line 59:\n    y = abs(y)';
		$m.__track_lines__[60] = 'math.py, line 60:\n    x, y = max(x, y), min(x, y)';
		$m.__track_lines__[61] = 'math.py, line 61:\n    return x * sqrt(1 + (y/x) * (y/x))';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_180 = new $p['int'](180);
		$pyjs.track.module='math';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$m['ceil'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:3};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=3;
			var $pyjs__ret = $p['float'](Math.ceil(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['ceil'].__name__ = 'ceil';

		$m['ceil'].__bind_type__ = 0;
		$m['ceil'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=4;
		$m['fabs'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:4};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=4;
			var $pyjs__ret = $p['float'](Math.abs(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['fabs'].__name__ = 'fabs';

		$m['fabs'].__bind_type__ = 0;
		$m['fabs'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=5;
		$m['floor'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:5};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=5;
			$pyjs.track.lineno=5;
			$pyjs.track.lineno=5;
			var $pyjs__ret = $p['float'](Math.floor(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['floor'].__name__ = 'floor';

		$m['floor'].__bind_type__ = 0;
		$m['floor'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=6;
		$m['exp'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:6};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=6;
			var $pyjs__ret = $p['float'](Math.exp(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['exp'].__name__ = 'exp';

		$m['exp'].__bind_type__ = 0;
		$m['exp'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=7;
		$m['log'] = function(x, base) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof base == 'undefined') base=arguments.callee.__args__[3][1];
			var $bool1;
			$pyjs.track={module:'math',lineno:7};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=8;
			if ((($bool1=$p['op_is'](base, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$pyjs.track.lineno=9;
				$pyjs.track.lineno=9;
				var $pyjs__ret = $p['float'](Math.log(x.valueOf()));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=10;
			$pyjs.track.lineno=10;
			var $pyjs__ret = $p['float'](Math.log(x.valueOf()) / Math.log(base.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['log'].__name__ = 'log';

		$m['log'].__bind_type__ = 0;
		$m['log'].__args__ = [null,null,['x'],['base', null]];
		$pyjs.track.lineno=11;
		$m['pow'] = function(x, y) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'math',lineno:11};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=11;
			$pyjs.track.lineno=11;
			$pyjs.track.lineno=11;
			var $pyjs__ret = $p['float'](Math.pow(x.valueOf(), y.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pow'].__name__ = 'pow';

		$m['pow'].__bind_type__ = 0;
		$m['pow'].__args__ = [null,null,['x'],['y']];
		$pyjs.track.lineno=12;
		$m['sqrt'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:12};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=12;
			$pyjs.track.lineno=12;
			$pyjs.track.lineno=12;
			var $pyjs__ret = $p['float'](Math.sqrt(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['sqrt'].__name__ = 'sqrt';

		$m['sqrt'].__bind_type__ = 0;
		$m['sqrt'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=13;
		$m['cos'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:13};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=13;
			$pyjs.track.lineno=13;
			$pyjs.track.lineno=13;
			var $pyjs__ret = $p['float'](Math.cos(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['cos'].__name__ = 'cos';

		$m['cos'].__bind_type__ = 0;
		$m['cos'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=14;
		$m['sin'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:14};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=14;
			$pyjs.track.lineno=14;
			$pyjs.track.lineno=14;
			var $pyjs__ret = $p['float'](Math.sin(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['sin'].__name__ = 'sin';

		$m['sin'].__bind_type__ = 0;
		$m['sin'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=15;
		$m['tan'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:15};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=15;
			$pyjs.track.lineno=15;
			$pyjs.track.lineno=15;
			var $pyjs__ret = $p['float'](Math.tan(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['tan'].__name__ = 'tan';

		$m['tan'].__bind_type__ = 0;
		$m['tan'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=16;
		$m['acos'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:16};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=16;
			var $pyjs__ret = $p['float'](Math.acos(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['acos'].__name__ = 'acos';

		$m['acos'].__bind_type__ = 0;
		$m['acos'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=17;
		$m['asin'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:17};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=17;
			$pyjs.track.lineno=17;
			$pyjs.track.lineno=17;
			var $pyjs__ret = $p['float'](Math.asin(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['asin'].__name__ = 'asin';

		$m['asin'].__bind_type__ = 0;
		$m['asin'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=18;
		$m['atan'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'math',lineno:18};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=18;
			var $pyjs__ret = $p['float'](Math.atan(x.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['atan'].__name__ = 'atan';

		$m['atan'].__bind_type__ = 0;
		$m['atan'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=19;
		$m['atan2'] = function(x, y) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'math',lineno:19};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=19;
			$pyjs.track.lineno=19;
			$pyjs.track.lineno=19;
			var $pyjs__ret = $p['float'](Math.atan2(x.valueOf(), y.valueOf()));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['atan2'].__name__ = 'atan2';

		$m['atan2'].__bind_type__ = 0;
		$m['atan2'].__args__ = [null,null,['x'],['y']];
		$pyjs.track.lineno=21;
		$m['pi'] = $p['float'](Math.PI);
		$pyjs.track.lineno=22;
		$m['e'] = $p['float'](Math.E);
		$pyjs.track.lineno=23;
		$m['__log10__'] = $p['float'](Math.LN10);
		$pyjs.track.lineno=24;
		$m['__log2__'] = $m['log']($constant_int_2);
		$pyjs.track.lineno=27;
		$m['fsum'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,sum,$iter2_idx,$add2,xx,$add1,$pyjs__trackstack_size_1,$4,$2,$3,$iter2_array,$1;
			$pyjs.track={module:'math',lineno:27};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=27;
			$pyjs.track.lineno=28;
			xx = function(){
				var $iter1_nextval,$iter1_type,i,$pyjs__trackstack_size_1,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
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
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='math';

	return $collcomp1;}();
			$pyjs.track.lineno=29;
			xx['sort']();
			$pyjs.track.lineno=30;
			sum = $constant_int_0;
			$pyjs.track.lineno=31;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
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
				$pyjs.track.lineno=32;
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
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='math';
			$pyjs.track.lineno=33;
			$pyjs.track.lineno=33;
			var $pyjs__ret = sum;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['fsum'].__name__ = 'fsum';

		$m['fsum'].__bind_type__ = 0;
		$m['fsum'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=35;
		$m['frexp'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var e,$pow2,$pow1,m,$bool2,$add3,$add4,$div3,$div2,$div1,$div4;
			$pyjs.track={module:'math',lineno:35};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=35;
			$pyjs.track.lineno=36;
			$pyjs.track.lineno=37;
			if ((($bool2=$p['op_eq'](x, $constant_int_0)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$pyjs.track.lineno=38;
				$pyjs.track.lineno=38;
				var $pyjs__ret = $p['tuple']([0.0, $constant_int_0]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=40;
			e = (typeof ($add3=$p['int']((typeof ($div1=$m['log']($p['abs'](x)))==typeof ($div2=$m['__log2__']) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			$pyjs.track.lineno=41;
			m = (typeof ($div3=x)==typeof ($div4=(typeof ($pow1=2.0)==typeof ($pow2=e) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2))) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4));
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=42;
			var $pyjs__ret = $p['tuple']([m, e]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['frexp'].__name__ = 'frexp';

		$m['frexp'].__bind_type__ = 0;
		$m['frexp'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=44;
		$m['ldexp'] = function(x, i) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $pow4,$pow3,$mul2,$mul1;
			$pyjs.track={module:'math',lineno:44};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=44;
			$pyjs.track.lineno=45;
			$pyjs.track.lineno=45;
			var $pyjs__ret = (typeof ($mul1=x)==typeof ($mul2=(typeof ($pow3=$constant_int_2)==typeof ($pow4=i) && typeof $pow3=='number'?
				Math.pow($pow3,$pow4):
				$p['op_pow']($pow3,$pow4))) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['ldexp'].__name__ = 'ldexp';

		$m['ldexp'].__bind_type__ = 0;
		$m['ldexp'].__args__ = [null,null,['x'],['i']];
		$pyjs.track.lineno=47;
		$m['log10'] = function(arg) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $div5,$div6;
			$pyjs.track={module:'math',lineno:47};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=48;
			var $pyjs__ret = (typeof ($div5=$m['log'](arg))==typeof ($div6=$m['__log10__']) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['log10'].__name__ = 'log10';

		$m['log10'].__bind_type__ = 0;
		$m['log10'].__args__ = [null,null,['arg']];
		$pyjs.track.lineno=50;
		$m['degrees'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $div8,$mul4,$mul3,$div7;
			$pyjs.track={module:'math',lineno:50};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=50;
			$pyjs.track.lineno=51;
			$pyjs.track.lineno=51;
			var $pyjs__ret = (typeof ($div7=(typeof ($mul3=x)==typeof ($mul4=$constant_int_180) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($div8=$m['pi']) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['degrees'].__name__ = 'degrees';

		$m['degrees'].__bind_type__ = 0;
		$m['degrees'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=53;
		$m['radians'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $mul5,$div9,$div10,$mul6;
			$pyjs.track={module:'math',lineno:53};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=53;
			$pyjs.track.lineno=54;
			$pyjs.track.lineno=54;
			var $pyjs__ret = (typeof ($div9=(typeof ($mul5=x)==typeof ($mul6=$m['pi']) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))==typeof ($div10=$constant_int_180) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['radians'].__name__ = 'radians';

		$m['radians'].__bind_type__ = 0;
		$m['radians'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=56;
		$m['hypot'] = function(x, y) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $mul10,$div14,$add5,$div11,$div12,$div13,$mul7,$add6,$mul9,$mul8;
			$pyjs.track={module:'math',lineno:56};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='math';
			$pyjs.track.lineno=56;
			$pyjs.track.lineno=58;
			x = $p['abs'](x);
			$pyjs.track.lineno=59;
			y = $p['abs'](y);
			$pyjs.track.lineno=60;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['max'](x, y), $p['min'](x, y)]), 2, null);
			x = $tupleassign2[0];
			y = $tupleassign2[1];
			$pyjs.track.lineno=61;
			$pyjs.track.lineno=61;
			var $pyjs__ret = (typeof ($mul9=x)==typeof ($mul10=$m['sqrt']((typeof ($add5=$constant_int_1)==typeof ($add6=(typeof ($mul7=(typeof ($div11=y)==typeof ($div12=x) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12)))==typeof ($mul8=(typeof ($div13=y)==typeof ($div14=x) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14))) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)))) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['hypot'].__name__ = 'hypot';

		$m['hypot'].__bind_type__ = 0;
		$m['hypot'].__args__ = [null,null,['x'],['y']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end math */


/* end module: math */


