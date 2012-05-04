/* start module: string */
$pyjs.loaded_modules['string'] = function (__mod_name__) {
	if($pyjs.loaded_modules['string'].__was_initialized__) return $pyjs.loaded_modules['string'];
	var $m = $pyjs.loaded_modules["string"];
	$m.__repr__ = function() { return "<module: string>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'string';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'string.py, line 1:\n    """The code is taken from the python2.6 tring module.';
		$m.__track_lines__[20] = "string.py, line 20:\n    whitespace = ' \\t\\n\\r\\v\\f'";
		$m.__track_lines__[21] = "string.py, line 21:\n    lowercase = 'abcdefghijklmnopqrstuvwxyz'";
		$m.__track_lines__[22] = "string.py, line 22:\n    uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'";
		$m.__track_lines__[23] = 'string.py, line 23:\n    letters = lowercase + uppercase';
		$m.__track_lines__[24] = 'string.py, line 24:\n    ascii_lowercase = lowercase';
		$m.__track_lines__[25] = 'string.py, line 25:\n    ascii_uppercase = uppercase';
		$m.__track_lines__[26] = 'string.py, line 26:\n    ascii_letters = ascii_lowercase + ascii_uppercase';
		$m.__track_lines__[27] = "string.py, line 27:\n    digits = '0123456789'";
		$m.__track_lines__[28] = "string.py, line 28:\n    hexdigits = digits + 'abcdef' + 'ABCDEF'";
		$m.__track_lines__[29] = "string.py, line 29:\n    octdigits = '01234567'";
		$m.__track_lines__[30] = 'string.py, line 30:\n    punctuation = """!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"""';
		$m.__track_lines__[31] = 'string.py, line 31:\n    printable = digits + letters + punctuation + whitespace';
		$m.__track_lines__[35] = 'string.py, line 35:\n    l = map(chr, xrange(256))';
		$m.__track_lines__[36] = "string.py, line 36:\n    _idmap = str('').join(l)";
		$m.__track_lines__[37] = 'string.py, line 37:\n    del l';
		$m.__track_lines__[42] = 'string.py, line 42:\n    def capwords(s, sep=None):';
		$m.__track_lines__[53] = 'string.py, line 53:\n    if sep is None:';
		$m.__track_lines__[54] = "string.py, line 54:\n    sep = ' '";
		$m.__track_lines__[55] = 'string.py, line 55:\n    return sep.join(x.capitalize() for x in s.split(sep))';
		$m.__track_lines__[60] = 'string.py, line 60:\n    _idmapL = None';
		$m.__track_lines__[61] = 'string.py, line 61:\n    def maketrans(fromstr, tostr):';
		$m.__track_lines__[69] = 'string.py, line 69:\n    if len(fromstr) != len(tostr):';
		$m.__track_lines__[70] = 'string.py, line 70:\n    raise ValueError, "maketrans arguments must have same length"';
		$m.__track_lines__[71] = 'string.py, line 71:\n    global _idmapL';
		$m.__track_lines__[72] = 'string.py, line 72:\n    if not _idmapL:';
		$m.__track_lines__[73] = 'string.py, line 73:\n    _idmapL = list(_idmap)';
		$m.__track_lines__[74] = 'string.py, line 74:\n    L = _idmapL[:]';
		$m.__track_lines__[75] = 'string.py, line 75:\n    fromstr = map(ord, fromstr)';
		$m.__track_lines__[76] = 'string.py, line 76:\n    for i in range(len(fromstr)):';
		$m.__track_lines__[77] = 'string.py, line 77:\n    L[fromstr[i]] = tostr[i]';
		$m.__track_lines__[78] = "string.py, line 78:\n    return ''.join(L)";
		$m.__track_lines__[83] = 'string.py, line 83:\n    import re as _re';
		$m.__track_lines__[85] = 'string.py, line 85:\n    class _multimap:';
		$m.__track_lines__[91] = 'string.py, line 91:\n    def __init__(self, primary, secondary):';
		$m.__track_lines__[92] = 'string.py, line 92:\n    self._primary = primary';
		$m.__track_lines__[93] = 'string.py, line 93:\n    self._secondary = secondary';
		$m.__track_lines__[95] = 'string.py, line 95:\n    def __getitem__(self, key):';
		$m.__track_lines__[96] = 'string.py, line 96:\n    try:';
		$m.__track_lines__[97] = 'string.py, line 97:\n    return self._primary[key]';
		$m.__track_lines__[99] = 'string.py, line 99:\n    return self._secondary[key]';
		$m.__track_lines__[107] = 'string.py, line 107:\n    class Template:';
		$m.__track_lines__[110] = "string.py, line 110:\n    delimiter = r'$'    #!$%^*@#~?|+ all work, &=/ do not";
		$m.__track_lines__[111] = "string.py, line 111:\n    idpattern = r'[_a-z][_a-z0-9]*'";
		$m.__track_lines__[112] = "string.py, line 112:\n    regexp = r'%(delim)s(?:(%(delim)s)|(%(id)s)|{(%(id)s)}|())'";
		$m.__track_lines__[114] = 'string.py, line 114:\n    def __init__(self, template):';
		$m.__track_lines__[115] = 'string.py, line 115:\n    self._definePattern()';
		$m.__track_lines__[116] = 'string.py, line 116:\n    self.template = template';
		$m.__track_lines__[118] = 'string.py, line 118:\n    def _definePattern(self):';
		$m.__track_lines__[119] = 'string.py, line 119:\n    regexp = self.regexp % {';
		$m.__track_lines__[123] = 'string.py, line 123:\n    self.pattern = _re.compile(regexp, _re.IGNORECASE )';
		$m.__track_lines__[127] = 'string.py, line 127:\n    def _invalid(self, mo):';
		$m.__track_lines__[128] = 'string.py, line 128:\n    i = mo.start()';
		$m.__track_lines__[129] = 'string.py, line 129:\n    j = min(i+10,len(self.template))';
		$m.__track_lines__[130] = "string.py, line 130:\n    raise ValueError('Invalid placeholder in string: ' + self.template[i:j])";
		$m.__track_lines__[132] = 'string.py, line 132:\n    def substitute(self, *args, **kws):';
		$m.__track_lines__[133] = 'string.py, line 133:\n    if len(args) > 1:';
		$m.__track_lines__[134] = "string.py, line 134:\n    raise TypeError('Too many positional arguments')";
		$m.__track_lines__[135] = 'string.py, line 135:\n    if not args:';
		$m.__track_lines__[136] = 'string.py, line 136:\n    mapping = kws';
		$m.__track_lines__[138] = 'string.py, line 138:\n    mapping = _multimap(kws, args[0])';
		$m.__track_lines__[140] = 'string.py, line 140:\n    mapping = args[0]';
		$m.__track_lines__[142] = 'string.py, line 142:\n    def convert(mo):';
		$m.__track_lines__[145] = 'string.py, line 145:\n    named = mo.group(2) or mo.group(3)';
		$m.__track_lines__[146] = 'string.py, line 146:\n    if named is not None:';
		$m.__track_lines__[147] = 'string.py, line 147:\n    val = mapping[named]';
		$m.__track_lines__[150] = "string.py, line 150:\n    return '%s' % (val,)";
		$m.__track_lines__[151] = 'string.py, line 151:\n    if mo.group(1) is not None:';
		$m.__track_lines__[152] = 'string.py, line 152:\n    return self.delimiter';
		$m.__track_lines__[153] = 'string.py, line 153:\n    if mo.group(4) is not None:';
		$m.__track_lines__[154] = 'string.py, line 154:\n    self._invalid(mo)';
		$m.__track_lines__[155] = "string.py, line 155:\n    raise ValueError('Unrecognized named group in pattern',";
		$m.__track_lines__[157] = 'string.py, line 157:\n    return self.pattern.sub(convert, self.template)';
		$m.__track_lines__[159] = 'string.py, line 159:\n    def safe_substitute(self, *args, **kws):';
		$m.__track_lines__[160] = 'string.py, line 160:\n    if len(args) > 1:';
		$m.__track_lines__[161] = "string.py, line 161:\n    raise TypeError('Too many positional arguments')";
		$m.__track_lines__[162] = 'string.py, line 162:\n    if not args:';
		$m.__track_lines__[163] = 'string.py, line 163:\n    mapping = kws';
		$m.__track_lines__[165] = 'string.py, line 165:\n    mapping = _multimap(kws, args[0])';
		$m.__track_lines__[167] = 'string.py, line 167:\n    mapping = args[0]';
		$m.__track_lines__[169] = 'string.py, line 169:\n    def convert(mo):';
		$m.__track_lines__[170] = 'string.py, line 170:\n    named = mo.group(2)';
		$m.__track_lines__[171] = 'string.py, line 171:\n    if named is not None:';
		$m.__track_lines__[172] = 'string.py, line 172:\n    try:';
		$m.__track_lines__[175] = "string.py, line 175:\n    return '%s' % (mapping[named],)";
		$m.__track_lines__[177] = 'string.py, line 177:\n    return self.delimiter + named';
		$m.__track_lines__[178] = 'string.py, line 178:\n    braced = mo.group(3)';
		$m.__track_lines__[179] = 'string.py, line 179:\n    if braced is not None:';
		$m.__track_lines__[180] = 'string.py, line 180:\n    try:';
		$m.__track_lines__[181] = "string.py, line 181:\n    return '%s' % (mapping[braced],)";
		$m.__track_lines__[183] = "string.py, line 183:\n    return self.delimiter + '{' + braced + '}'";
		$m.__track_lines__[184] = 'string.py, line 184:\n    if mo.group(1) is not None:';
		$m.__track_lines__[185] = 'string.py, line 185:\n    return self.delimiter';
		$m.__track_lines__[186] = 'string.py, line 186:\n    if mo.group(4) is not None:';
		$m.__track_lines__[187] = 'string.py, line 187:\n    return self.delimiter';
		$m.__track_lines__[188] = "string.py, line 188:\n    raise ValueError('Unrecognized named group in pattern',";
		$m.__track_lines__[190] = 'string.py, line 190:\n    return self.pattern.sub(convert, self.template)';
		var $add14,$add11,$add12,$add13,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9;
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='string';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=20;
		$m['whitespace'] = ' \t\n\r\x0b\x0c';
		$pyjs.track.lineno=21;
		$m['lowercase'] = 'abcdefghijklmnopqrstuvwxyz';
		$pyjs.track.lineno=22;
		$m['uppercase'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$pyjs.track.lineno=23;
		$m['letters'] = (typeof ($add1=$m['lowercase'])==typeof ($add2=$m['uppercase']) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		$pyjs.track.lineno=24;
		$m['ascii_lowercase'] = $m['lowercase'];
		$pyjs.track.lineno=25;
		$m['ascii_uppercase'] = $m['uppercase'];
		$pyjs.track.lineno=26;
		$m['ascii_letters'] = (typeof ($add3=$m['ascii_lowercase'])==typeof ($add4=$m['ascii_uppercase']) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4));
		$pyjs.track.lineno=27;
		$m['digits'] = '0123456789';
		$pyjs.track.lineno=28;
		$m['hexdigits'] = (typeof ($add7=(typeof ($add5=$m['digits'])==typeof ($add6='abcdef') && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6)))==typeof ($add8='ABCDEF') && (typeof $add7=='number'||typeof $add7=='string')?
			$add7+$add8:
			$p['op_add']($add7,$add8));
		$pyjs.track.lineno=29;
		$m['octdigits'] = '01234567';
		$pyjs.track.lineno=30;
		$m['punctuation'] = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
		$pyjs.track.lineno=31;
		$m['printable'] = (typeof ($add13=(typeof ($add11=(typeof ($add9=$m['digits'])==typeof ($add10=$m['letters']) && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			$p['op_add']($add9,$add10)))==typeof ($add12=$m['punctuation']) && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			$p['op_add']($add11,$add12)))==typeof ($add14=$m['whitespace']) && (typeof $add13=='number'||typeof $add13=='string')?
			$add13+$add14:
			$p['op_add']($add13,$add14));
		$pyjs.track.lineno=35;
		$m['l'] = $p['map']($p['chr'], $p['xrange']($constant_int_256));
		$pyjs.track.lineno=36;
		$m['_idmap'] = $p['str']('')['join']($m['l']);
		$pyjs.track.lineno=37;
		delete $m['l'];
		$pyjs.track.lineno=42;
		$m['capwords'] = function(s, sep) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof sep == 'undefined') sep=arguments.callee.__args__[3][1];
			var $iter1_nextval,$iter1_type,$iter1_iter,$bool1,$iter1_array,x,$iter1_idx;
			$pyjs.track={module:'string',lineno:42};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='string';
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=53;
			if ((($bool1=$p['op_is'](sep, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$pyjs.track.lineno=54;
				sep = ' ';
			}
			$pyjs.track.lineno=55;
			$pyjs.track.lineno=55;
			var $pyjs__ret = sep['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration']();
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter1_iter = s['$$split'](sep);
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							x = $iter1_nextval;
							$yield_value = x['capitalize']();
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['capwords'].__name__ = 'capwords';

		$m['capwords'].__bind_type__ = 0;
		$m['capwords'].__args__ = [null,null,['s'],['sep', null]];
		$pyjs.track.lineno=60;
		$m['_idmapL'] = null;
		$pyjs.track.lineno=61;
		$m['maketrans'] = function(fromstr, tostr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$pyjs__trackstack_size_1,$iter2_idx,L,$bool2,$bool3,$len2,$len3,$bool4,$len1,$4,$2,$3,$iter2_array,$1;
			$pyjs.track={module:'string',lineno:61};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='string';
			$pyjs.track.lineno=61;
			$pyjs.track.lineno=69;
			if ((($bool2=!$p['op_eq']((($len1=fromstr) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1))))), (($len2=tostr) === null?$constant_int_0:
				(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
							$p['len']($len2))))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$pyjs.track.lineno=70;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'maketrans arguments must have same length';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=71;
			$pyjs.track.lineno=72;
			if ((($bool4=!(($bool3=$m['_idmapL']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$pyjs.track.lineno=73;
				$m['_idmapL'] = $p['list']($m['_idmap']);
			}
			$pyjs.track.lineno=74;
			L = $p['__getslice']($m['_idmapL'], 0, null);
			$pyjs.track.lineno=75;
			fromstr = $p['map']($p['ord'], fromstr);
			$pyjs.track.lineno=76;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = $p['range']((($len3=fromstr) === null?$constant_int_0:
				(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
							$p['len']($len3))))));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				$pyjs.track.lineno=77;
				L.__setitem__((typeof ($3=fromstr).__array != 'undefined'?
					((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(i)), (typeof ($1=tostr).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i)));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='string';
			$pyjs.track.lineno=78;
			$pyjs.track.lineno=78;
			var $pyjs__ret = ''['join'](L);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['maketrans'].__name__ = 'maketrans';

		$m['maketrans'].__bind_type__ = 0;
		$m['maketrans'].__args__ = [null,null,['fromstr'],['tostr']];
		$pyjs.track.lineno=83;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_re'] = $p['___import___']('re', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=85;
		$m['_multimap'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'string';
			$cls_definition.__md5__ = 'ea1c794b2d8efdbdd7b884398d3ac149';
			$pyjs.track.lineno=91;
			$method = $pyjs__bind_method2('__init__', function(primary, secondary) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					primary = arguments[1];
					secondary = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ea1c794b2d8efdbdd7b884398d3ac149') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'string', lineno:91};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='string';
				$pyjs.track.lineno=91;
				$pyjs.track.lineno=92;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_primary', primary) : $p['setattr'](self, '_primary', primary); 
				$pyjs.track.lineno=93;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_secondary', secondary) : $p['setattr'](self, '_secondary', secondary); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['primary'],['secondary']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=95;
			$method = $pyjs__bind_method2('__getitem__', function(key) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ea1c794b2d8efdbdd7b884398d3ac149') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $8,$pyjs_try_err,$6,$7,$5;
				$pyjs.track={module:'string', lineno:95};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='string';
				$pyjs.track.lineno=95;
				$pyjs.track.lineno=96;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=97;
					$pyjs.track.lineno=97;
					var $pyjs__ret = (typeof ($5=$p['getattr'](self, '_primary')).__array != 'undefined'?
						((typeof $5.__array[$6=key]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(key));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
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
					$pyjs.track.module='string';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						$pyjs.track.lineno=99;
						$pyjs.track.lineno=99;
						var $pyjs__ret = (typeof ($7=$p['getattr'](self, '_secondary')).__array != 'undefined'?
							((typeof $7.__array[$8=key]) != 'undefined'?$7.__array[$8]:
								$7.__getitem__($8)):
								$7.__getitem__(key));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs.track.lineno=85;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('_multimap', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=107;
		$m['Template'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'string';
			$cls_definition.__md5__ = '3dcdcd6a5050af166e0f7aec3ac8386b';
			$pyjs.track.lineno=110;
			$cls_definition['delimiter'] = '$';
			$pyjs.track.lineno=111;
			$cls_definition['idpattern'] = '[_a-z][_a-z0-9]*';
			$pyjs.track.lineno=112;
			$cls_definition['regexp'] = '%(delim)s(?:(%(delim)s)|(%(id)s)|{(%(id)s)}|())';
			$pyjs.track.lineno=114;
			$method = $pyjs__bind_method2('__init__', function(template) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					template = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'string', lineno:114};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='string';
				$pyjs.track.lineno=114;
				$pyjs.track.lineno=115;
				self['_definePattern']();
				$pyjs.track.lineno=116;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('template', template) : $p['setattr'](self, 'template', template); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['template']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=118;
			$method = $pyjs__bind_method2('_definePattern', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add15,$add16,$mod1,$mod2,regexp;
				$pyjs.track={module:'string', lineno:118};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='string';
				$pyjs.track.lineno=118;
				$pyjs.track.lineno=119;
				regexp = (typeof ($mod1=$p['getattr'](self, 'regexp'))==typeof ($mod2=$p['dict']([['delim', (typeof ($add15='\\')==typeof ($add16=$p['getattr'](self, 'delimiter')) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))], ['id', $p['getattr'](self, 'idpattern')]])) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
				$pyjs.track.lineno=123;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pattern', $m['_re']['compile'](regexp, $p['getattr']($m['_re'], 'IGNORECASE'))) : $p['setattr'](self, 'pattern', $m['_re']['compile'](regexp, $p['getattr']($m['_re'], 'IGNORECASE'))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_definePattern'] = $method;
			$pyjs.track.lineno=127;
			$method = $pyjs__bind_method2('_invalid', function(mo) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					mo = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$add20,j,$add19,$len4,$add17,$add18;
				$pyjs.track={module:'string', lineno:127};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='string';
				$pyjs.track.lineno=127;
				$pyjs.track.lineno=128;
				i = mo['start']();
				$pyjs.track.lineno=129;
				j = $p['min']((typeof ($add17=i)==typeof ($add18=$constant_int_10) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)), (($len4=$p['getattr'](self, 'template')) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4))))));
				$pyjs.track.lineno=130;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['ValueError']((typeof ($add19='Invalid placeholder in string: ')==typeof ($add20=$p['__getslice']($p['getattr'](self, 'template'), i, j)) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['mo']]);
			$cls_definition['_invalid'] = $method;
			$pyjs.track.lineno=132;
			$method = $pyjs__bind_method2('substitute', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

					var kws = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kws != 'object' || kws.__name__ != 'dict' || typeof kws.$pyjs_is_kwarg == 'undefined') {
						if (typeof kws != 'undefined') args.__array.push(kws);
						var kws = arguments[arguments.length+1];
					} else {
						delete kws['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kws = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kws != 'object' || kws.__name__ != 'dict' || typeof kws.$pyjs_is_kwarg == 'undefined') {
						if (typeof kws != 'undefined') args.__array.push(kws);
						kws = arguments[arguments.length+1];
					} else {
						delete kws['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kws == 'undefined') {
					kws = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kws = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var convert,$cmp1,$9,$12,$cmp2,mapping,$len5,$bool6,$bool7,$bool5,$10,$bool8,$11;
				$pyjs.track={module:'string', lineno:132};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='string';
				$pyjs.track.lineno=132;
				$pyjs.track.lineno=133;
				if ((($bool5=((($cmp1=(($len5=args) === null?$constant_int_0:
					(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
								$p['len']($len5))))))===($cmp2=$constant_int_1)?0:
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
					$pyjs.track.lineno=134;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('Too many positional arguments'));
				}
				$pyjs.track.lineno=135;
				if ((($bool7=!(($bool6=args) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$pyjs.track.lineno=136;
					mapping = kws;
				}
				else if ((($bool8=kws) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					$pyjs.track.lineno=138;
					mapping = $m['_multimap'](kws, (typeof ($9=args).__array != 'undefined'?
						((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__($constant_int_0)));
				}
				else {
					$pyjs.track.lineno=140;
					mapping = (typeof ($11=args).__array != 'undefined'?
						((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__($constant_int_0));
				}
				$pyjs.track.lineno=142;
				convert = function(mo) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $14,named,$or1,val,$or2,$bool10,$bool11,$13,$bool9,$bool12;
					$pyjs.track={module:'string',lineno:142};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='string';
					$pyjs.track.lineno=142;
					$pyjs.track.lineno=145;
					named = ((($bool9=$or1=mo['group']($constant_int_2)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9.__nonzero__=='function'?
								$bool9.__nonzero__() :
								(typeof $bool9.__len__=='function'?
									($bool9.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:mo['group']($constant_int_3));
					$pyjs.track.lineno=146;
					if ((($bool10=!$p['op_is'](named, null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
							false :
							(typeof $bool10=='object'?
								(typeof $bool10.__nonzero__=='function'?
									$bool10.__nonzero__() :
									(typeof $bool10.__len__=='function'?
										($bool10.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=147;
						val = (typeof ($13=mapping).__array != 'undefined'?
							((typeof $13.__array[$14=named]) != 'undefined'?$13.__array[$14]:
								$13.__getitem__($14)):
								$13.__getitem__(named));
						$pyjs.track.lineno=150;
						$pyjs.track.lineno=150;
						var $pyjs__ret = $p['sprintf']('%s', $p['tuple']([val]));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=151;
					if ((($bool11=!$p['op_is'](mo['group']($constant_int_1), null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
							false :
							(typeof $bool11=='object'?
								(typeof $bool11.__nonzero__=='function'?
									$bool11.__nonzero__() :
									(typeof $bool11.__len__=='function'?
										($bool11.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=152;
						$pyjs.track.lineno=152;
						var $pyjs__ret = $p['getattr'](self, 'delimiter');
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=153;
					if ((($bool12=!$p['op_is'](mo['group']($constant_int_4), null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12.__nonzero__=='function'?
									$bool12.__nonzero__() :
									(typeof $bool12.__len__=='function'?
										($bool12.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=154;
						self['_invalid'](mo);
					}
					$pyjs.track.lineno=155;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['ValueError']('Unrecognized named group in pattern', $p['getattr'](self, 'pattern')));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				convert.__name__ = 'convert';

				convert.__bind_type__ = 0;
				convert.__args__ = [null,null,['mo']];
				$pyjs.track.lineno=157;
				$pyjs.track.lineno=157;
				var $pyjs__ret = self['pattern']['sub'](convert, $p['getattr'](self, 'template'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',['kws'],['self']]);
			$cls_definition['substitute'] = $method;
			$pyjs.track.lineno=159;
			$method = $pyjs__bind_method2('safe_substitute', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

					var kws = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kws != 'object' || kws.__name__ != 'dict' || typeof kws.$pyjs_is_kwarg == 'undefined') {
						if (typeof kws != 'undefined') args.__array.push(kws);
						var kws = arguments[arguments.length+1];
					} else {
						delete kws['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kws = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kws != 'object' || kws.__name__ != 'dict' || typeof kws.$pyjs_is_kwarg == 'undefined') {
						if (typeof kws != 'undefined') args.__array.push(kws);
						kws = arguments[arguments.length+1];
					} else {
						delete kws['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3dcdcd6a5050af166e0f7aec3ac8386b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kws == 'undefined') {
					kws = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kws = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $cmp4,$16,$bool13,$cmp3,$15,$18,$bool14,$bool15,$bool16,mapping,$len6,$17,convert;
				$pyjs.track={module:'string', lineno:159};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='string';
				$pyjs.track.lineno=159;
				$pyjs.track.lineno=160;
				if ((($bool13=((($cmp3=(($len6=args) === null?$constant_int_0:
					(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
								$p['len']($len6))))))===($cmp4=$constant_int_1)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					$pyjs.track.lineno=161;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('Too many positional arguments'));
				}
				$pyjs.track.lineno=162;
				if ((($bool15=!(($bool14=args) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14.__nonzero__=='function'?
							$bool14.__nonzero__() :
							(typeof $bool14.__len__=='function'?
								($bool14.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=163;
					mapping = kws;
				}
				else if ((($bool16=kws) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=165;
					mapping = $m['_multimap'](kws, (typeof ($15=args).__array != 'undefined'?
						((typeof $15.__array[$16=$constant_int_0]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__($constant_int_0)));
				}
				else {
					$pyjs.track.lineno=167;
					mapping = (typeof ($17=args).__array != 'undefined'?
						((typeof $17.__array[$18=$constant_int_0]) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__($constant_int_0));
				}
				$pyjs.track.lineno=169;
				convert = function(mo) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $bool18,$add28,named,$22,$bool19,$add21,$20,$add22,$add25,$19,$add27,$bool17,$21,$pyjs_try_err,$bool20,braced,$add24,$add26,$add23;
					$pyjs.track={module:'string',lineno:169};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='string';
					$pyjs.track.lineno=169;
					$pyjs.track.lineno=170;
					named = mo['group']($constant_int_2);
					$pyjs.track.lineno=171;
					if ((($bool17=!$p['op_is'](named, null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
							false :
							(typeof $bool17=='object'?
								(typeof $bool17.__nonzero__=='function'?
									$bool17.__nonzero__() :
									(typeof $bool17.__len__=='function'?
										($bool17.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=172;
						var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
						try {
							$pyjs.track.lineno=175;
							$pyjs.track.lineno=175;
							var $pyjs__ret = $p['sprintf']('%s', $p['tuple']([(typeof ($19=mapping).__array != 'undefined'?
								((typeof $19.__array[$20=named]) != 'undefined'?$19.__array[$20]:
									$19.__getitem__($20)):
									$19.__getitem__(named))]));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
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
							$pyjs.track.module='string';
							if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
								$pyjs.track.lineno=177;
								$pyjs.track.lineno=177;
								var $pyjs__ret = (typeof ($add21=$p['getattr'](self, 'delimiter'))==typeof ($add22=named) && (typeof $add21=='number'||typeof $add21=='string')?
									$add21+$add22:
									$p['op_add']($add21,$add22));
								$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
								return $pyjs__ret;
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.track.lineno=178;
					braced = mo['group']($constant_int_3);
					$pyjs.track.lineno=179;
					if ((($bool18=!$p['op_is'](braced, null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
							false :
							(typeof $bool18=='object'?
								(typeof $bool18.__nonzero__=='function'?
									$bool18.__nonzero__() :
									(typeof $bool18.__len__=='function'?
										($bool18.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=180;
						var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
						try {
							$pyjs.track.lineno=181;
							$pyjs.track.lineno=181;
							var $pyjs__ret = $p['sprintf']('%s', $p['tuple']([(typeof ($21=mapping).__array != 'undefined'?
								((typeof $21.__array[$22=braced]) != 'undefined'?$21.__array[$22]:
									$21.__getitem__($22)):
									$21.__getitem__(braced))]));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
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
							$pyjs.track.module='string';
							if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
								$pyjs.track.lineno=183;
								$pyjs.track.lineno=183;
								var $pyjs__ret = (typeof ($add27=(typeof ($add25=(typeof ($add23=$p['getattr'](self, 'delimiter'))==typeof ($add24='{') && (typeof $add23=='number'||typeof $add23=='string')?
									$add23+$add24:
									$p['op_add']($add23,$add24)))==typeof ($add26=braced) && (typeof $add25=='number'||typeof $add25=='string')?
									$add25+$add26:
									$p['op_add']($add25,$add26)))==typeof ($add28='}') && (typeof $add27=='number'||typeof $add27=='string')?
									$add27+$add28:
									$p['op_add']($add27,$add28));
								$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
								return $pyjs__ret;
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.track.lineno=184;
					if ((($bool19=!$p['op_is'](mo['group']($constant_int_1), null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
							false :
							(typeof $bool19=='object'?
								(typeof $bool19.__nonzero__=='function'?
									$bool19.__nonzero__() :
									(typeof $bool19.__len__=='function'?
										($bool19.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=185;
						$pyjs.track.lineno=185;
						var $pyjs__ret = $p['getattr'](self, 'delimiter');
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=186;
					if ((($bool20=!$p['op_is'](mo['group']($constant_int_4), null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
							false :
							(typeof $bool20=='object'?
								(typeof $bool20.__nonzero__=='function'?
									$bool20.__nonzero__() :
									(typeof $bool20.__len__=='function'?
										($bool20.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=187;
						$pyjs.track.lineno=187;
						var $pyjs__ret = $p['getattr'](self, 'delimiter');
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=188;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['ValueError']('Unrecognized named group in pattern', $p['getattr'](self, 'pattern')));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				convert.__name__ = 'convert';

				convert.__bind_type__ = 0;
				convert.__args__ = [null,null,['mo']];
				$pyjs.track.lineno=190;
				$pyjs.track.lineno=190;
				var $pyjs__ret = self['pattern']['sub'](convert, $p['getattr'](self, 'template'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',['kws'],['self']]);
			$cls_definition['safe_substitute'] = $method;
			$pyjs.track.lineno=107;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Template', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end string */


/* end module: string */


/*
PYJS_DEPS: ['re']
*/
