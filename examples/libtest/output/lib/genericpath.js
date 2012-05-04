/* start module: genericpath */
$pyjs.loaded_modules['genericpath'] = function (__mod_name__) {
	if($pyjs.loaded_modules['genericpath'].__was_initialized__) return $pyjs.loaded_modules['genericpath'];
	var $m = $pyjs.loaded_modules["genericpath"];
	$m.__repr__ = function() { return "<module: genericpath>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'genericpath';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'genericpath.py, line 1:\n    """';
		$m.__track_lines__[6] = 'genericpath.py, line 6:\n    import os';
		$m.__track_lines__[7] = 'genericpath.py, line 7:\n    import stat';
		$m.__track_lines__[9] = "genericpath.py, line 9:\n    __all__ = ['commonprefix', 'exists', 'getatime', 'getctime', 'getmtime',";
		$m.__track_lines__[15] = 'genericpath.py, line 15:\n    def exists(path):';
		$m.__track_lines__[17] = 'genericpath.py, line 17:\n    try:';
		$m.__track_lines__[18] = 'genericpath.py, line 18:\n    os.stat(path)';
		$m.__track_lines__[20] = 'genericpath.py, line 20:\n    return False';
		$m.__track_lines__[21] = 'genericpath.py, line 21:\n    return True';
		$m.__track_lines__[26] = 'genericpath.py, line 26:\n    def isfile(path):';
		$m.__track_lines__[28] = 'genericpath.py, line 28:\n    try:';
		$m.__track_lines__[29] = 'genericpath.py, line 29:\n    st = os.stat(path)';
		$m.__track_lines__[31] = 'genericpath.py, line 31:\n    return False';
		$m.__track_lines__[32] = 'genericpath.py, line 32:\n    return stat.S_ISREG(st.st_mode)';
		$m.__track_lines__[38] = 'genericpath.py, line 38:\n    def isdir(s):';
		$m.__track_lines__[40] = 'genericpath.py, line 40:\n    try:';
		$m.__track_lines__[41] = 'genericpath.py, line 41:\n    st = os.stat(s)';
		$m.__track_lines__[43] = 'genericpath.py, line 43:\n    return False';
		$m.__track_lines__[44] = 'genericpath.py, line 44:\n    return stat.S_ISDIR(st.st_mode)';
		$m.__track_lines__[47] = 'genericpath.py, line 47:\n    def getsize(filename):';
		$m.__track_lines__[49] = 'genericpath.py, line 49:\n    return os.stat(filename).st_size';
		$m.__track_lines__[52] = 'genericpath.py, line 52:\n    def getmtime(filename):';
		$m.__track_lines__[54] = 'genericpath.py, line 54:\n    return os.stat(filename).st_mtime';
		$m.__track_lines__[57] = 'genericpath.py, line 57:\n    def getatime(filename):';
		$m.__track_lines__[59] = 'genericpath.py, line 59:\n    return os.stat(filename).st_atime';
		$m.__track_lines__[62] = 'genericpath.py, line 62:\n    def getctime(filename):';
		$m.__track_lines__[64] = 'genericpath.py, line 64:\n    return os.stat(filename).st_ctime';
		$m.__track_lines__[68] = 'genericpath.py, line 68:\n    def commonprefix(m):';
		$m.__track_lines__[70] = "genericpath.py, line 70:\n    if not m: return ''";
		$m.__track_lines__[71] = 'genericpath.py, line 71:\n    s1 = min(m)';
		$m.__track_lines__[72] = 'genericpath.py, line 72:\n    s2 = max(m)';
		$m.__track_lines__[73] = 'genericpath.py, line 73:\n    for i, c in enumerate(s1):';
		$m.__track_lines__[74] = 'genericpath.py, line 74:\n    if c != s2[i]:';
		$m.__track_lines__[75] = 'genericpath.py, line 75:\n    return s1[:i]';
		$m.__track_lines__[76] = 'genericpath.py, line 76:\n    return s1';
		$m.__track_lines__[85] = 'genericpath.py, line 85:\n    def _splitext(p, sep, altsep, extsep):';
		$m.__track_lines__[91] = 'genericpath.py, line 91:\n    sepIndex = p.rfind(sep)';
		$m.__track_lines__[92] = 'genericpath.py, line 92:\n    if altsep:';
		$m.__track_lines__[93] = 'genericpath.py, line 93:\n    altsepIndex = p.rfind(altsep)';
		$m.__track_lines__[94] = 'genericpath.py, line 94:\n    sepIndex = max(sepIndex, altsepIndex)';
		$m.__track_lines__[96] = 'genericpath.py, line 96:\n    dotIndex = p.rfind(extsep)';
		$m.__track_lines__[97] = 'genericpath.py, line 97:\n    if dotIndex > sepIndex:';
		$m.__track_lines__[99] = 'genericpath.py, line 99:\n    filenameIndex = sepIndex + 1';
		$m.__track_lines__[100] = 'genericpath.py, line 100:\n    while filenameIndex < dotIndex:';
		$m.__track_lines__[101] = 'genericpath.py, line 101:\n    if p[filenameIndex] != extsep:';
		$m.__track_lines__[102] = 'genericpath.py, line 102:\n    return p[:dotIndex], p[dotIndex:]';
		$m.__track_lines__[103] = 'genericpath.py, line 103:\n    filenameIndex += 1';
		$m.__track_lines__[105] = "genericpath.py, line 105:\n    return p, ''";

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='genericpath';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['os'] = $p['___import___']('os', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['stat'] = $p['___import___']('stat', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$m['__all__'] = $p['list'](['commonprefix', 'exists', 'getatime', 'getctime', 'getmtime', 'getsize', 'isdir', 'isfile']);
		$pyjs.track.lineno=15;
		$m['exists'] = function(path) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $pyjs_try_err;
			$pyjs.track={module:'genericpath',lineno:15};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=15;
			$pyjs.track.lineno=17;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=18;
				$m['os']['stat'](path);
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
				$pyjs.track.module='genericpath';
				if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error').__name__)||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
					$pyjs.track.lineno=20;
					$pyjs.track.lineno=20;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=21;
			$pyjs.track.lineno=21;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['exists'].__name__ = 'exists';

		$m['exists'].__bind_type__ = 0;
		$m['exists'].__args__ = [null,null,['path']];
		$pyjs.track.lineno=26;
		$m['isfile'] = function(path) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $pyjs_try_err,st;
			$pyjs.track={module:'genericpath',lineno:26};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=26;
			$pyjs.track.lineno=28;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=29;
				st = $m['os']['stat'](path);
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
				$pyjs.track.module='genericpath';
				if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error').__name__)||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
					$pyjs.track.lineno=31;
					$pyjs.track.lineno=31;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=32;
			$pyjs.track.lineno=32;
			var $pyjs__ret = $m['stat']['S_ISREG']($p['getattr'](st, 'st_mode'));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['isfile'].__name__ = 'isfile';

		$m['isfile'].__bind_type__ = 0;
		$m['isfile'].__args__ = [null,null,['path']];
		$pyjs.track.lineno=38;
		$m['isdir'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $pyjs_try_err,st;
			$pyjs.track={module:'genericpath',lineno:38};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=38;
			$pyjs.track.lineno=40;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=41;
				st = $m['os']['stat'](s);
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
				$pyjs.track.module='genericpath';
				if (($pyjs_try_err_name == $p['getattr']($m['os'], 'error').__name__)||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['os'], 'error'))) {
					$pyjs.track.lineno=43;
					$pyjs.track.lineno=43;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=44;
			$pyjs.track.lineno=44;
			var $pyjs__ret = $m['stat']['S_ISDIR']($p['getattr'](st, 'st_mode'));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['isdir'].__name__ = 'isdir';

		$m['isdir'].__bind_type__ = 0;
		$m['isdir'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=47;
		$m['getsize'] = function(filename) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'genericpath',lineno:47};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=49;
			$pyjs.track.lineno=49;
			var $pyjs__ret = $p['getattr']($m['os']['stat'](filename), 'st_size');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getsize'].__name__ = 'getsize';

		$m['getsize'].__bind_type__ = 0;
		$m['getsize'].__args__ = [null,null,['filename']];
		$pyjs.track.lineno=52;
		$m['getmtime'] = function(filename) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'genericpath',lineno:52};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=52;
			$pyjs.track.lineno=54;
			$pyjs.track.lineno=54;
			var $pyjs__ret = $p['getattr']($m['os']['stat'](filename), 'st_mtime');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getmtime'].__name__ = 'getmtime';

		$m['getmtime'].__bind_type__ = 0;
		$m['getmtime'].__args__ = [null,null,['filename']];
		$pyjs.track.lineno=57;
		$m['getatime'] = function(filename) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'genericpath',lineno:57};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=59;
			$pyjs.track.lineno=59;
			var $pyjs__ret = $p['getattr']($m['os']['stat'](filename), 'st_atime');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getatime'].__name__ = 'getatime';

		$m['getatime'].__bind_type__ = 0;
		$m['getatime'].__args__ = [null,null,['filename']];
		$pyjs.track.lineno=62;
		$m['getctime'] = function(filename) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'genericpath',lineno:62};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=62;
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=64;
			var $pyjs__ret = $p['getattr']($m['os']['stat'](filename), 'st_ctime');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getctime'].__name__ = 'getctime';

		$m['getctime'].__bind_type__ = 0;
		$m['getctime'].__args__ = [null,null,['filename']];
		$pyjs.track.lineno=68;
		$m['commonprefix'] = function(m) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var c,$iter1_nextval,$iter1_type,i,s2,s1,$iter1_iter,$bool2,$bool3,$bool1,$iter1_array,$pyjs__trackstack_size_1,$1,$2,$iter1_idx;
			$pyjs.track={module:'genericpath',lineno:68};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=68;
			$pyjs.track.lineno=70;
			if ((($bool2=!(($bool1=m) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$pyjs.track.lineno=70;
				var $pyjs__ret = '';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=71;
			s1 = $p['min'](m);
			$pyjs.track.lineno=72;
			s2 = $p['max'](m);
			$pyjs.track.lineno=73;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = $p['enumerate'](s1);
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
				c = $tupleassign1[1];
				$pyjs.track.lineno=74;
				if ((($bool3=!$p['op_eq'](c, (typeof ($1=s2).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i)))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=75;
					$pyjs.track.lineno=75;
					var $pyjs__ret = $p['__getslice'](s1, 0, i);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=76;
			$pyjs.track.lineno=76;
			var $pyjs__ret = s1;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['commonprefix'].__name__ = 'commonprefix';

		$m['commonprefix'].__bind_type__ = 0;
		$m['commonprefix'].__args__ = [null,null,['m']];
		$pyjs.track.lineno=85;
		$m['_splitext'] = function(p, sep, altsep, extsep) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var altsepIndex,$add3,$bool6,$bool7,$bool4,$bool5,filenameIndex,$4,$3,sepIndex,$cmp4,$cmp1,$cmp3,$cmp2,$add2,$add1,$add4,dotIndex;
			$pyjs.track={module:'genericpath',lineno:85};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='genericpath';
			$pyjs.track.lineno=85;
			$pyjs.track.lineno=91;
			sepIndex = p['rfind'](sep);
			$pyjs.track.lineno=92;
			if ((($bool4=altsep) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$pyjs.track.lineno=93;
				altsepIndex = p['rfind'](altsep);
				$pyjs.track.lineno=94;
				sepIndex = $p['max'](sepIndex, altsepIndex);
			}
			$pyjs.track.lineno=96;
			dotIndex = p['rfind'](extsep);
			$pyjs.track.lineno=97;
			if ((($bool5=((($cmp1=dotIndex)===($cmp2=sepIndex)?0:
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
				$pyjs.track.lineno=99;
				filenameIndex = (typeof ($add1=sepIndex)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				$pyjs.track.lineno=100;
				while ((($bool6=((($cmp3=filenameIndex)===($cmp4=dotIndex)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$pyjs.track.lineno=101;
					if ((($bool7=!$p['op_eq']((typeof ($3=p).__array != 'undefined'?
						((typeof $3.__array[$4=filenameIndex]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(filenameIndex)), extsep)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						$pyjs.track.lineno=102;
						$pyjs.track.lineno=102;
						var $pyjs__ret = $p['tuple']([$p['__getslice'](p, 0, dotIndex), $p['__getslice'](p, dotIndex, null)]);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=103;
					filenameIndex = (typeof ($add3=filenameIndex)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
				}
			}
			$pyjs.track.lineno=105;
			$pyjs.track.lineno=105;
			var $pyjs__ret = $p['tuple']([p, '']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['_splitext'].__name__ = '_splitext';

		$m['_splitext'].__bind_type__ = 0;
		$m['_splitext'].__args__ = [null,null,['p'],['sep'],['altsep'],['extsep']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end genericpath */


/* end module: genericpath */


/*
PYJS_DEPS: ['os', 'stat']
*/
