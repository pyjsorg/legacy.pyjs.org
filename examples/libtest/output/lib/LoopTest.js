/* start module: LoopTest */
$pyjs.loaded_modules['LoopTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LoopTest'].__was_initialized__) return $pyjs.loaded_modules['LoopTest'];
	var $m = $pyjs.loaded_modules["LoopTest"];
	$m.__repr__ = function() { return "<module: LoopTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LoopTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'LoopTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[2] = 'LoopTest.py, line 2:\n    import time';
		$m.__track_lines__[3] = 'LoopTest.py, line 3:\n    from write import write, writebr';
		$m.__track_lines__[5] = 'LoopTest.py, line 5:\n    class A(object):';
		$m.__track_lines__[7] = 'LoopTest.py, line 7:\n    def __init__(self, x):';
		$m.__track_lines__[8] = 'LoopTest.py, line 8:\n    self.x = x';
		$m.__track_lines__[10] = 'LoopTest.py, line 10:\n    def getX(self):';
		$m.__track_lines__[11] = 'LoopTest.py, line 11:\n    return self.x';
		$m.__track_lines__[13] = 'LoopTest.py, line 13:\n    def fib(n):';
		$m.__track_lines__[14] = 'LoopTest.py, line 14:\n    if n<3.0:';
		$m.__track_lines__[15] = 'LoopTest.py, line 15:\n    return 1.0';
		$m.__track_lines__[16] = 'LoopTest.py, line 16:\n    return fib(n-2.0)+fib(n-1.0)';
		$m.__track_lines__[18] = 'LoopTest.py, line 18:\n    def int_fib(n):';
		$m.__track_lines__[19] = 'LoopTest.py, line 19:\n    if n<3:';
		$m.__track_lines__[20] = 'LoopTest.py, line 20:\n    return 1';
		$m.__track_lines__[21] = 'LoopTest.py, line 21:\n    return int_fib(n-2)+int_fib(n-1)';
		$m.__track_lines__[23] = 'LoopTest.py, line 23:\n    def long_fib(n):';
		$m.__track_lines__[24] = 'LoopTest.py, line 24:\n    if n<3L:';
		$m.__track_lines__[25] = 'LoopTest.py, line 25:\n    return 1L';
		$m.__track_lines__[26] = 'LoopTest.py, line 26:\n    return long_fib(n-2L)+long_fib(n-1L)';
		$m.__track_lines__[28] = 'LoopTest.py, line 28:\n    class LoopTest(UnitTest):';
		$m.__track_lines__[30] = 'LoopTest.py, line 30:\n    def testLoop1(self):';
		$m.__track_lines__[31] = 'LoopTest.py, line 31:\n    t1 = t0 = time.time()';
		$m.__track_lines__[32] = 'LoopTest.py, line 32:\n    n = 1000';
		$m.__track_lines__[33] = 'LoopTest.py, line 33:\n    a = A(1)';
		$m.__track_lines__[34] = 'LoopTest.py, line 34:\n    m = 0;';
		$m.__track_lines__[35] = 'LoopTest.py, line 35:\n    while t1 - t0 == 0:';
		$m.__track_lines__[36] = 'LoopTest.py, line 36:\n    m += 1';
		$m.__track_lines__[37] = 'LoopTest.py, line 37:\n    for i in range(n):';
		$m.__track_lines__[38] = 'LoopTest.py, line 38:\n    x = a.getX()';
		$m.__track_lines__[39] = 'LoopTest.py, line 39:\n    t1 = time.time()';
		$m.__track_lines__[40] = 'LoopTest.py, line 40:\n    dt = t1 - t0';
		$m.__track_lines__[41] = 'LoopTest.py, line 41:\n    writebr("Loop1: %.2f/sec" % (n*m/dt))';
		$m.__track_lines__[43] = 'LoopTest.py, line 43:\n    def testLoop2(self):';
		$m.__track_lines__[44] = 'LoopTest.py, line 44:\n    t1 = t0 = time.time()';
		$m.__track_lines__[45] = 'LoopTest.py, line 45:\n    n = 100';
		$m.__track_lines__[46] = 'LoopTest.py, line 46:\n    m = 0.0';
		$m.__track_lines__[47] = 'LoopTest.py, line 47:\n    while t1 - t0 == 0:';
		$m.__track_lines__[48] = 'LoopTest.py, line 48:\n    m += 1.0';
		$m.__track_lines__[49] = 'LoopTest.py, line 49:\n    for i in range(n):';
		$m.__track_lines__[50] = 'LoopTest.py, line 50:\n    fib(10.0)';
		$m.__track_lines__[51] = 'LoopTest.py, line 51:\n    t1 = time.time()';
		$m.__track_lines__[52] = 'LoopTest.py, line 52:\n    dt = t1 - t0';
		$m.__track_lines__[53] = 'LoopTest.py, line 53:\n    writebr("Loop2 (float): %.2f/sec" % (n*m/dt))';
		$m.__track_lines__[55] = 'LoopTest.py, line 55:\n    def testLoop3(self):';
		$m.__track_lines__[56] = 'LoopTest.py, line 56:\n    t1 = t0 = time.time()';
		$m.__track_lines__[57] = 'LoopTest.py, line 57:\n    n = 100';
		$m.__track_lines__[58] = 'LoopTest.py, line 58:\n    m = 0.0';
		$m.__track_lines__[59] = 'LoopTest.py, line 59:\n    while t1 - t0 == 0:';
		$m.__track_lines__[60] = 'LoopTest.py, line 60:\n    m += 1.0';
		$m.__track_lines__[61] = 'LoopTest.py, line 61:\n    for i in range(n):';
		$m.__track_lines__[62] = 'LoopTest.py, line 62:\n    int_fib(10)';
		$m.__track_lines__[63] = 'LoopTest.py, line 63:\n    t1 = time.time()';
		$m.__track_lines__[64] = 'LoopTest.py, line 64:\n    dt = t1 - t0';
		$m.__track_lines__[65] = 'LoopTest.py, line 65:\n    writebr("Loop3 (int): %.2f/sec" % (n*m/dt))';
		$m.__track_lines__[67] = 'LoopTest.py, line 67:\n    def testLoop4(self):';
		$m.__track_lines__[68] = 'LoopTest.py, line 68:\n    t1 = t0 = time.time()';
		$m.__track_lines__[69] = 'LoopTest.py, line 69:\n    n = 100';
		$m.__track_lines__[70] = 'LoopTest.py, line 70:\n    m = 0.0';
		$m.__track_lines__[71] = 'LoopTest.py, line 71:\n    while t1 - t0 == 0:';
		$m.__track_lines__[72] = 'LoopTest.py, line 72:\n    m += 1.0';
		$m.__track_lines__[73] = 'LoopTest.py, line 73:\n    for i in range(n):';
		$m.__track_lines__[74] = 'LoopTest.py, line 74:\n    long_fib(10L)';
		$m.__track_lines__[75] = 'LoopTest.py, line 75:\n    t1 = time.time()';
		$m.__track_lines__[76] = 'LoopTest.py, line 76:\n    dt = t1 - t0';
		$m.__track_lines__[77] = 'LoopTest.py, line 77:\n    writebr("Loop4 (long): %.2f/sec" % (n*m/dt))';
		$m.__track_lines__[79] = "LoopTest.py, line 79:\n    '''";
		$m.__track_lines__[113] = "LoopTest.py, line 113:\n    if __name__ == '__main__':";
		$m.__track_lines__[114] = 'LoopTest.py, line 114:\n    l = LoopTest()';
		$m.__track_lines__[115] = 'LoopTest.py, line 115:\n    l.run()';
		var $bool8;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_10 = new $p['int'](10);
		var $constant_long_1 = new $p['long'](1);
		var $constant_long_2 = new $p['long'](2);
		var $constant_long_3 = new $p['long'](3);
		var $constant_long_10 = new $p['long'](10);
		$pyjs.track.module='LoopTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['time'] = $p['___import___']('time', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['write'] = $p['___import___']('write.write', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['writebr'] = $p['___import___']('write.writebr', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$m['A'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'LoopTest';
			$cls_definition.__md5__ = '480769ee82f013b8b8919e74f50a5983';
			$pyjs.track.lineno=7;
			$method = $pyjs__bind_method2('__init__', function(x) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '480769ee82f013b8b8919e74f50a5983') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'LoopTest', lineno:7};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LoopTest';
				$pyjs.track.lineno=7;
				$pyjs.track.lineno=8;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=10;
			$method = $pyjs__bind_method2('getX', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '480769ee82f013b8b8919e74f50a5983') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'LoopTest', lineno:10};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LoopTest';
				$pyjs.track.lineno=10;
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=11;
				var $pyjs__ret = $p['getattr'](self, 'x');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getX'] = $method;
			$pyjs.track.lineno=5;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('A', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=13;
		$m['fib'] = function(n) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $cmp1,$cmp2,$add2,$bool1,$sub3,$sub2,$sub1,$add1,$sub4;
			$pyjs.track={module:'LoopTest',lineno:13};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='LoopTest';
			$pyjs.track.lineno=13;
			$pyjs.track.lineno=14;
			if ((($bool1=((($cmp1=n)===($cmp2=3.0)?0:
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
				$pyjs.track.lineno=15;
				$pyjs.track.lineno=15;
				var $pyjs__ret = 1.0;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=16;
			var $pyjs__ret = (typeof ($add1=$m['fib']((typeof ($sub1=n)==typeof ($sub2=2.0) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2))))==typeof ($add2=$m['fib']((typeof ($sub3=n)==typeof ($sub4=1.0) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['fib'].__name__ = 'fib';

		$m['fib'].__bind_type__ = 0;
		$m['fib'].__args__ = [null,null,['n']];
		$pyjs.track.lineno=18;
		$m['int_fib'] = function(n) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $cmp4,$cmp3,$bool2,$add3,$sub8,$add4,$sub7,$sub6,$sub5;
			$pyjs.track={module:'LoopTest',lineno:18};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='LoopTest';
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=19;
			if ((($bool2=((($cmp3=n)===($cmp4=$constant_int_3)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$pyjs.track.lineno=20;
				$pyjs.track.lineno=20;
				var $pyjs__ret = $constant_int_1;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=21;
			$pyjs.track.lineno=21;
			var $pyjs__ret = (typeof ($add3=$m['int_fib']((typeof ($sub5=n)==typeof ($sub6=$constant_int_2) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6))))==typeof ($add4=$m['int_fib']((typeof ($sub7=n)==typeof ($sub8=$constant_int_1) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8)))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['int_fib'].__name__ = 'int_fib';

		$m['int_fib'].__bind_type__ = 0;
		$m['int_fib'].__args__ = [null,null,['n']];
		$pyjs.track.lineno=23;
		$m['long_fib'] = function(n) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $cmp5,$cmp6,$sub12,$sub11,$sub10,$bool3,$sub9,$add6,$add5;
			$pyjs.track={module:'LoopTest',lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='LoopTest';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=24;
			if ((($bool3=((($cmp5=n)===($cmp6=$constant_long_3)?0:
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
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=25;
				var $pyjs__ret = $constant_long_1;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=26;
			$pyjs.track.lineno=26;
			var $pyjs__ret = (typeof ($add5=$m['long_fib']((typeof ($sub9=n)==typeof ($sub10=$constant_long_2) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10))))==typeof ($add6=$m['long_fib']((typeof ($sub11=n)==typeof ($sub12=$constant_long_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				$p['op_sub']($sub11,$sub12)))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['long_fib'].__name__ = 'long_fib';

		$m['long_fib'].__bind_type__ = 0;
		$m['long_fib'].__args__ = [null,null,['n']];
		$pyjs.track.lineno=28;
		$m['LoopTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'LoopTest';
			$cls_definition.__md5__ = '3d43827b323379e2b756f621a47cc852';
			$pyjs.track.lineno=30;
			$method = $pyjs__bind_method2('testLoop1', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3d43827b323379e2b756f621a47cc852') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_iter,t1,$iter1_array,$add7,$iter1_nextval,$sub13,$sub16,$sub15,$sub14,$bool4,$div2,dt,$div1,$mul2,$mul1,a,$iter1_type,i,m,t0,n,$assign1,$iter1_idx,$pyjs__trackstack_size_1,x,$add8;
				$pyjs.track={module:'LoopTest', lineno:30};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LoopTest';
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=31;
				$assign1 = $m['time']['time']();
				t1 = $assign1;
				t0 = $assign1;
				$pyjs.track.lineno=32;
				n = $constant_int_1000;
				$pyjs.track.lineno=33;
				a = $m['A']($constant_int_1);
				$pyjs.track.lineno=34;
				m = $constant_int_0;
				$pyjs.track.lineno=35;
				while ((($bool4=$p['op_eq']((typeof ($sub13=t1)==typeof ($sub14=t0) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14)), $constant_int_0)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$pyjs.track.lineno=36;
					m = (typeof ($add7=m)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
					$pyjs.track.lineno=37;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter1_iter = $p['range'](n);
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						i = $iter1_nextval;
						$pyjs.track.lineno=38;
						x = a['getX']();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LoopTest';
					$pyjs.track.lineno=39;
					t1 = $m['time']['time']();
				}
				$pyjs.track.lineno=40;
				dt = (typeof ($sub15=t1)==typeof ($sub16=t0) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16));
				$pyjs.track.lineno=41;
				$m['writebr']($p['sprintf']('Loop1: %.2f/sec', (typeof ($div1=(typeof ($mul1=n)==typeof ($mul2=m) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($div2=dt) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLoop1'] = $method;
			$pyjs.track.lineno=43;
			$method = $pyjs__bind_method2('testLoop2', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3d43827b323379e2b756f621a47cc852') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub20,t1,$iter2_iter,$sub19,$sub18,$iter2_type,$pyjs__trackstack_size_1,$sub17,$iter2_idx,$add10,$bool5,$div3,dt,$mul4,$mul3,$div4,$iter2_nextval,i,m,t0,n,$assign2,$add9,$iter2_array;
				$pyjs.track={module:'LoopTest', lineno:43};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LoopTest';
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=44;
				$assign2 = $m['time']['time']();
				t1 = $assign2;
				t0 = $assign2;
				$pyjs.track.lineno=45;
				n = $constant_int_100;
				$pyjs.track.lineno=46;
				m = 0.0;
				$pyjs.track.lineno=47;
				while ((($bool5=$p['op_eq']((typeof ($sub17=t1)==typeof ($sub18=t0) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18)), $constant_int_0)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$pyjs.track.lineno=48;
					m = (typeof ($add9=m)==typeof ($add10=1.0) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
					$pyjs.track.lineno=49;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter2_iter = $p['range'](n);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						i = $iter2_nextval;
						$pyjs.track.lineno=50;
						$m['fib'](10.0);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LoopTest';
					$pyjs.track.lineno=51;
					t1 = $m['time']['time']();
				}
				$pyjs.track.lineno=52;
				dt = (typeof ($sub19=t1)==typeof ($sub20=t0) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20));
				$pyjs.track.lineno=53;
				$m['writebr']($p['sprintf']('Loop2 (float): %.2f/sec', (typeof ($div3=(typeof ($mul3=n)==typeof ($mul4=m) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($div4=dt) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLoop2'] = $method;
			$pyjs.track.lineno=55;
			$method = $pyjs__bind_method2('testLoop3', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3d43827b323379e2b756f621a47cc852') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub23,$sub21,$sub24,$iter3_type,t1,dt,$iter3_idx,$iter3_iter,$bool6,$add11,$add12,$iter3_array,$mul6,$mul5,$div6,$div5,i,m,t0,n,$assign3,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs.track={module:'LoopTest', lineno:55};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LoopTest';
				$pyjs.track.lineno=55;
				$pyjs.track.lineno=56;
				$assign3 = $m['time']['time']();
				t1 = $assign3;
				t0 = $assign3;
				$pyjs.track.lineno=57;
				n = $constant_int_100;
				$pyjs.track.lineno=58;
				m = 0.0;
				$pyjs.track.lineno=59;
				while ((($bool6=$p['op_eq']((typeof ($sub21=t1)==typeof ($sub22=t0) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22)), $constant_int_0)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$pyjs.track.lineno=60;
					m = (typeof ($add11=m)==typeof ($add12=1.0) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
					$pyjs.track.lineno=61;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter3_iter = $p['range'](n);
					if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter.__iter__();
						$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						i = $iter3_nextval;
						$pyjs.track.lineno=62;
						$m['int_fib']($constant_int_10);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LoopTest';
					$pyjs.track.lineno=63;
					t1 = $m['time']['time']();
				}
				$pyjs.track.lineno=64;
				dt = (typeof ($sub23=t1)==typeof ($sub24=t0) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24));
				$pyjs.track.lineno=65;
				$m['writebr']($p['sprintf']('Loop3 (int): %.2f/sec', (typeof ($div5=(typeof ($mul5=n)==typeof ($mul6=m) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($div6=dt) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLoop3'] = $method;
			$pyjs.track.lineno=67;
			$method = $pyjs__bind_method2('testLoop4', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3d43827b323379e2b756f621a47cc852') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub26,$sub27,$sub25,$sub28,$mul8,$iter4_type,t1,$iter4_iter,$add14,$div8,$bool7,$add13,$mul7,dt,$div7,i,$iter4_nextval,m,t0,n,$iter4_idx,$assign4,$pyjs__trackstack_size_1,$iter4_array;
				$pyjs.track={module:'LoopTest', lineno:67};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LoopTest';
				$pyjs.track.lineno=67;
				$pyjs.track.lineno=68;
				$assign4 = $m['time']['time']();
				t1 = $assign4;
				t0 = $assign4;
				$pyjs.track.lineno=69;
				n = $constant_int_100;
				$pyjs.track.lineno=70;
				m = 0.0;
				$pyjs.track.lineno=71;
				while ((($bool7=$p['op_eq']((typeof ($sub25=t1)==typeof ($sub26=t0) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26)), $constant_int_0)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$pyjs.track.lineno=72;
					m = (typeof ($add13=m)==typeof ($add14=1.0) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
					$pyjs.track.lineno=73;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter4_iter = $p['range'](n);
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						i = $iter4_nextval;
						$pyjs.track.lineno=74;
						$m['long_fib']($constant_long_10);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LoopTest';
					$pyjs.track.lineno=75;
					t1 = $m['time']['time']();
				}
				$pyjs.track.lineno=76;
				dt = (typeof ($sub27=t1)==typeof ($sub28=t0) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					$p['op_sub']($sub27,$sub28));
				$pyjs.track.lineno=77;
				$m['writebr']($p['sprintf']('Loop4 (long): %.2f/sec', (typeof ($div7=(typeof ($mul7=n)==typeof ($mul8=m) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($div8=dt) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLoop4'] = $method;
			$pyjs.track.lineno=28;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LoopTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=79;
		$pyjs.track.lineno=113;
		if ((($bool8=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			$pyjs.track.lineno=114;
			$m['l'] = $m['LoopTest']();
			$pyjs.track.lineno=115;
			$m['l']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end LoopTest */


/* end module: LoopTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'time', 'write.write', 'write', 'write.writebr']
*/
