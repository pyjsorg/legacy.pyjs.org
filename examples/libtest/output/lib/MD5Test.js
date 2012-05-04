/* start module: MD5Test */
$pyjs.loaded_modules['MD5Test'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MD5Test'].__was_initialized__) return $pyjs.loaded_modules['MD5Test'];
	var $m = $pyjs.loaded_modules["MD5Test"];
	$m.__repr__ = function() { return "<module: MD5Test>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MD5Test';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'MD5Test.py, line 1:\n    # Testing md5 module';
		$m.__track_lines__[3] = 'MD5Test.py, line 3:\n    import sys';
		$m.__track_lines__[4] = 'MD5Test.py, line 4:\n    import UnitTest';
		$m.__track_lines__[12] = 'MD5Test.py, line 12:\n    from md5 import md5';
		$m.__track_lines__[14] = "MD5Test.py, line 14:\n    if sys.platform in ['mozilla', 'ie6', 'opera', 'oldmoz',";
		$m.__track_lines__[16] = 'MD5Test.py, line 16:\n    from __pyjamas__ import JS';
		$m.__track_lines__[18] = 'MD5Test.py, line 18:\n    def hexstr(s):';
		$m.__track_lines__[19] = "MD5Test.py, line 19:\n    h = '0123456789abcdef'";
		$m.__track_lines__[20] = "MD5Test.py, line 20:\n    r = ''";
		$m.__track_lines__[21] = 'MD5Test.py, line 21:\n    i = None';
		$m.__track_lines__[22] = 'MD5Test.py, line 22:\n    for x in range(16):';
		$m.__track_lines__[23] = 'MD5Test.py, line 23:\n    i = int(JS("@{{s}}[@{{x}}]"))';
		$m.__track_lines__[24] = 'MD5Test.py, line 24:\n    r = r + h[(i >> 4) & 0xF] + h[i & 0xF]';
		$m.__track_lines__[25] = 'MD5Test.py, line 25:\n    return r';
		$m.__track_lines__[29] = 'MD5Test.py, line 29:\n    def hexstr(s):';
		$m.__track_lines__[30] = "MD5Test.py, line 30:\n    h = '0123456789abcdef'";
		$m.__track_lines__[31] = "MD5Test.py, line 31:\n    r = ''";
		$m.__track_lines__[32] = 'MD5Test.py, line 32:\n    for c in s:';
		$m.__track_lines__[33] = 'MD5Test.py, line 33:\n    i = ord(c)';
		$m.__track_lines__[34] = 'MD5Test.py, line 34:\n    r = r + h[(i >> 4) & 0xF] + h[i & 0xF]';
		$m.__track_lines__[35] = 'MD5Test.py, line 35:\n    return r';
		$m.__track_lines__[38] = 'MD5Test.py, line 38:\n    class MD5Test(UnitTest.UnitTest):';
		$m.__track_lines__[40] = 'MD5Test.py, line 40:\n    def md5test(self, s, expected):';
		$m.__track_lines__[41] = 'MD5Test.py, line 41:\n    self.assertEqual(hexstr(md5(s).digest()), expected)';
		$m.__track_lines__[42] = 'MD5Test.py, line 42:\n    self.assertEqual(md5(s).hexdigest(), expected)';
		$m.__track_lines__[44] = 'MD5Test.py, line 44:\n    def test_basics(self):';
		$m.__track_lines__[45] = "MD5Test.py, line 45:\n    self.md5test('', 'd41d8cd98f00b204e9800998ecf8427e')";
		$m.__track_lines__[46] = "MD5Test.py, line 46:\n    self.md5test('a', '0cc175b9c0f1b6a831c399e269772661')";
		$m.__track_lines__[47] = "MD5Test.py, line 47:\n    self.md5test('abc', '900150983cd24fb0d6963f7d28e17f72')";
		$m.__track_lines__[48] = "MD5Test.py, line 48:\n    self.md5test('message digest', 'f96b697d7cb7938d525a2f31aaf161d0')";
		$m.__track_lines__[49] = "MD5Test.py, line 49:\n    self.md5test('abcdefghijklmnopqrstuvwxyz', 'c3fcd3d76192e4007dfb496cca67e13b')";
		$m.__track_lines__[50] = "MD5Test.py, line 50:\n    self.md5test('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',";
		$m.__track_lines__[52] = "MD5Test.py, line 52:\n    self.md5test('12345678901234567890123456789012345678901234567890123456789012345678901234567890',";
		$m.__track_lines__[55] = 'MD5Test.py, line 55:\n    def test_hexdigest(self):';
		$m.__track_lines__[56] = "MD5Test.py, line 56:\n    m = md5('testing the hexdigest method')";
		$m.__track_lines__[57] = 'MD5Test.py, line 57:\n    h = m.hexdigest()';
		$m.__track_lines__[58] = 'MD5Test.py, line 58:\n    self.assertEqual(hexstr(m.digest()), h)';
		$m.__track_lines__[60] = 'MD5Test.py, line 60:\n    def test_large_update(self):';
		$m.__track_lines__[65] = "MD5Test.py, line 65:\n    aas = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'";
		$m.__track_lines__[66] = "MD5Test.py, line 66:\n    bs = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'";
		$m.__track_lines__[67] = "MD5Test.py, line 67:\n    cs = 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'";
		$m.__track_lines__[69] = 'MD5Test.py, line 69:\n    m1 = md5()';
		$m.__track_lines__[70] = 'MD5Test.py, line 70:\n    m1.update(aas)';
		$m.__track_lines__[71] = 'MD5Test.py, line 71:\n    m1.update(bs)';
		$m.__track_lines__[72] = 'MD5Test.py, line 72:\n    m1.update(cs)';
		$m.__track_lines__[74] = 'MD5Test.py, line 74:\n    m2 = md5()';
		$m.__track_lines__[75] = 'MD5Test.py, line 75:\n    m2.update(aas + bs + cs)';
		$m.__track_lines__[76] = 'MD5Test.py, line 76:\n    self.assertEqual(hexstr(m1.digest()), hexstr(m2.digest()))';
		var $bool1;
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_15 = new $p['int'](15);
		$pyjs.track.module='MD5Test';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=12;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['md5'] = $p['___import___']('md5.md5', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=14;
		if ((($bool1=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari', 'spidermonkey', 'pyv8']).__contains__($p['getattr']($m['sys'], 'platform'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=18;
			$m['hexstr'] = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $iter1_nextval,$iter1_type,i,h,$4,$iter1_iter,$add2,$add3,r,$iter1_array,$add4,$pyjs__trackstack_size_1,x,$add1,$1,$2,$3,$iter1_idx;
				$pyjs.track={module:'MD5Test',lineno:18};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MD5Test';
				$pyjs.track.lineno=18;
				$pyjs.track.lineno=19;
				h = '0123456789abcdef';
				$pyjs.track.lineno=20;
				r = '';
				$pyjs.track.lineno=21;
				i = null;
				$pyjs.track.lineno=22;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = $p['range']($constant_int_16);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					x = $iter1_nextval;
					$pyjs.track.lineno=23;
					i = $p['int'](s[x]);
					$pyjs.track.lineno=24;
					r = (typeof ($add3=(typeof ($add1=r)==typeof ($add2=(typeof ($1=h).__array != 'undefined'?
						((typeof $1.__array[$2=$p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__($p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)))==typeof ($add4=(typeof ($3=h).__array != 'undefined'?
						((typeof $3.__array[$4=$p['op_bitand2'](i, $constant_int_15)]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__($p['op_bitand2'](i, $constant_int_15)))) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='MD5Test';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=25;
				var $pyjs__ret = r;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			$m['hexstr'].__name__ = 'hexstr';

			$m['hexstr'].__bind_type__ = 0;
			$m['hexstr'].__args__ = [null,null,['s']];
		}
		else {
			$pyjs.track.lineno=29;
			$m['hexstr'] = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var c,$iter2_nextval,$iter2_type,$iter2_iter,i,h,$add5,$iter2_idx,r,$add6,$add7,$8,$pyjs__trackstack_size_1,$6,$7,$add8,$5,$iter2_array;
				$pyjs.track={module:'MD5Test',lineno:29};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MD5Test';
				$pyjs.track.lineno=29;
				$pyjs.track.lineno=30;
				h = '0123456789abcdef';
				$pyjs.track.lineno=31;
				r = '';
				$pyjs.track.lineno=32;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = s;
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					c = $iter2_nextval;
					$pyjs.track.lineno=33;
					i = $p['ord'](c);
					$pyjs.track.lineno=34;
					r = (typeof ($add7=(typeof ($add5=r)==typeof ($add6=(typeof ($5=h).__array != 'undefined'?
						((typeof $5.__array[$6=$p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)))==typeof ($add8=(typeof ($7=h).__array != 'undefined'?
						((typeof $7.__array[$8=$p['op_bitand2'](i, $constant_int_15)]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__($p['op_bitand2'](i, $constant_int_15)))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='MD5Test';
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=35;
				var $pyjs__ret = r;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			$m['hexstr'].__name__ = 'hexstr';

			$m['hexstr'].__bind_type__ = 0;
			$m['hexstr'].__args__ = [null,null,['s']];
		}
		$pyjs.track.lineno=38;
		$m['MD5Test'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'MD5Test';
			$cls_definition.__md5__ = '71ddfc606fe3aedaac79ec806325d10a';
			$pyjs.track.lineno=40;
			$method = $pyjs__bind_method2('md5test', function(s, expected) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					expected = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '71ddfc606fe3aedaac79ec806325d10a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MD5Test', lineno:40};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MD5Test';
				$pyjs.track.lineno=40;
				$pyjs.track.lineno=41;
				self['assertEqual']($m['hexstr']($m['md5'](s)['digest']()), expected);
				$pyjs.track.lineno=42;
				self['assertEqual']($m['md5'](s)['hexdigest'](), expected);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['s'],['expected']]);
			$cls_definition['md5test'] = $method;
			$pyjs.track.lineno=44;
			$method = $pyjs__bind_method2('test_basics', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '71ddfc606fe3aedaac79ec806325d10a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'MD5Test', lineno:44};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MD5Test';
				$pyjs.track.lineno=44;
				$pyjs.track.lineno=45;
				self['md5test']('', 'd41d8cd98f00b204e9800998ecf8427e');
				$pyjs.track.lineno=46;
				self['md5test']('a', '0cc175b9c0f1b6a831c399e269772661');
				$pyjs.track.lineno=47;
				self['md5test']('abc', '900150983cd24fb0d6963f7d28e17f72');
				$pyjs.track.lineno=48;
				self['md5test']('message digest', 'f96b697d7cb7938d525a2f31aaf161d0');
				$pyjs.track.lineno=49;
				self['md5test']('abcdefghijklmnopqrstuvwxyz', 'c3fcd3d76192e4007dfb496cca67e13b');
				$pyjs.track.lineno=50;
				self['md5test']('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 'd174ab98d277d9f5a5611c2c9f419d9f');
				$pyjs.track.lineno=52;
				self['md5test']('12345678901234567890123456789012345678901234567890123456789012345678901234567890', '57edf4a22be3c955ac49da2e2107b67a');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_basics'] = $method;
			$pyjs.track.lineno=55;
			$method = $pyjs__bind_method2('test_hexdigest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '71ddfc606fe3aedaac79ec806325d10a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var h,m;
				$pyjs.track={module:'MD5Test', lineno:55};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MD5Test';
				$pyjs.track.lineno=55;
				$pyjs.track.lineno=56;
				m = $m['md5']('testing the hexdigest method');
				$pyjs.track.lineno=57;
				h = m['hexdigest']();
				$pyjs.track.lineno=58;
				self['assertEqual']($m['hexstr'](m['digest']()), h);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hexdigest'] = $method;
			$pyjs.track.lineno=60;
			$method = $pyjs__bind_method2('test_large_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '71ddfc606fe3aedaac79ec806325d10a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,bs,m1,$add11,aas,m2,cs,$add10,$add9;
				$pyjs.track={module:'MD5Test', lineno:60};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='MD5Test';
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=65;
				aas = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
				$pyjs.track.lineno=66;
				bs = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
				$pyjs.track.lineno=67;
				cs = 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc';
				$pyjs.track.lineno=69;
				m1 = $m['md5']();
				$pyjs.track.lineno=70;
				m1['update'](aas);
				$pyjs.track.lineno=71;
				m1['update'](bs);
				$pyjs.track.lineno=72;
				m1['update'](cs);
				$pyjs.track.lineno=74;
				m2 = $m['md5']();
				$pyjs.track.lineno=75;
				m2['update']((typeof ($add11=(typeof ($add9=aas)==typeof ($add10=bs) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10)))==typeof ($add12=cs) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)));
				$pyjs.track.lineno=76;
				self['assertEqual']($m['hexstr'](m1['digest']()), $m['hexstr'](m2['digest']()));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_large_update'] = $method;
			$pyjs.track.lineno=38;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MD5Test', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end MD5Test */


/* end module: MD5Test */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'md5.md5', 'md5']
*/
