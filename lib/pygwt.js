/* start module: pygwt */
$pyjs.loaded_modules['pygwt'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pygwt'].__was_initialized__) return $pyjs.loaded_modules['pygwt'];
	var $m = $pyjs.loaded_modules["pygwt"];
	$m.__repr__ = function() { return "<module: pygwt>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pygwt';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'pygwt.py, line 1:\n    from __pyjamas__ import get_main_frame, doc, JS';
		$m.__track_lines__[3] = 'pygwt.py, line 3:\n    sNextHashId = 0';
		$m.__track_lines__[5] = 'pygwt.py, line 5:\n    def getNextHashId():';
		$m.__track_lines__[6] = 'pygwt.py, line 6:\n    global sNextHashId';
		$m.__track_lines__[7] = 'pygwt.py, line 7:\n    sNextHashId += 1';
		$m.__track_lines__[8] = 'pygwt.py, line 8:\n    return sNextHashId';
		$m.__track_lines__[10] = 'pygwt.py, line 10:\n    def getHashCode(o):';
		$m.__track_lines__[11] = 'pygwt.py, line 11:\n    JS("""';
		$m.__track_lines__[16] = 'pygwt.py, line 16:\n    def getModuleName():';
		$m.__track_lines__[17] = 'pygwt.py, line 17:\n    import os';
		$m.__track_lines__[18] = 'pygwt.py, line 18:\n    import sys';
		$m.__track_lines__[19] = 'pygwt.py, line 19:\n    mod_name = sys.argv[0]';
		$m.__track_lines__[20] = 'pygwt.py, line 20:\n    mod_name = os.path.split(mod_name)[1]';
		$m.__track_lines__[21] = 'pygwt.py, line 21:\n    mod_name = os.path.spliext(mod_name)[0]';
		$m.__track_lines__[22] = 'pygwt.py, line 22:\n    return mod_name';
		$m.__track_lines__[24] = 'pygwt.py, line 24:\n    def getModuleBaseURL():';
		$m.__track_lines__[25] = 'pygwt.py, line 25:\n    import os.path';
		$m.__track_lines__[28] = 'pygwt.py, line 28:\n    s = get_main_frame().getUri()';
		$m.__track_lines__[31] = 'pygwt.py, line 31:\n    s = os.path.dirname(s)';
		$m.__track_lines__[33] = 'pygwt.py, line 33:\n    if len(s) > 0:';
		$m.__track_lines__[34] = 'pygwt.py, line 34:\n    return s + "/"';
		$m.__track_lines__[35] = 'pygwt.py, line 35:\n    return ""';
		$m.__track_lines__[37] = 'pygwt.py, line 37:\n    def getImageBaseURL(images=False):';
		$m.__track_lines__[38] = 'pygwt.py, line 38:\n    import pyjd';
		$m.__track_lines__[40] = 'pygwt.py, line 40:\n    if images:';
		$m.__track_lines__[41] = 'pygwt.py, line 41:\n    if isinstance(images, str):';
		$m.__track_lines__[42] = "pygwt.py, line 42:\n    return getModuleBaseURL() + images + '/'";
		$m.__track_lines__[44] = 'pygwt.py, line 44:\n    return getModuleBaseURL() + "images/"';
		$m.__track_lines__[46] = 'pygwt.py, line 46:\n    return getModuleBaseURL()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='pygwt';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$m['sNextHashId'] = $constant_int_0;
		$pyjs.track.lineno=5;
		$m['getNextHashId'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $add2,$add1;
			$pyjs.track={module:'pygwt',lineno:5};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pygwt';
			$pyjs.track.lineno=5;
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=7;
			$m['sNextHashId'] = $p['__op_add']($add1=$m['sNextHashId'],$add2=$constant_int_1);
			$pyjs.track.lineno=8;
			$pyjs.track.lineno=8;
			var $pyjs__ret = $m['sNextHashId'];
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getNextHashId'].__name__ = 'getNextHashId';

		$m['getNextHashId'].__bind_type__ = 0;
		$m['getNextHashId'].__args__ = [null,null];
		$pyjs.track.lineno=10;
		$m['getHashCode'] = function(o) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    return (o == null) ? 0 :
        (o.$H ? o.$H : (o.$H = pygwt_getNextHashId()))
    
		};
		$m['getHashCode'].__name__ = 'getHashCode';

		$m['getHashCode'].__bind_type__ = 0;
		$m['getHashCode'].__args__ = [null,null,['o']];
		$pyjs.track.lineno=16;
		$m['getModuleName'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var sys,os,mod_name;
			$pyjs.track={module:'pygwt',lineno:16};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pygwt';
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=17;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			os = $p['___import___']('os', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=18;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			sys = $p['___import___']('sys', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=19;
			mod_name = $p['getattr'](sys, 'argv').__getitem__($constant_int_0);
			$pyjs.track.lineno=20;
			mod_name = (function(){try{try{$pyjs.in_try_except += 1;
			return os['path']['$$split'](mod_name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})().__getitem__($constant_int_1);
			$pyjs.track.lineno=21;
			mod_name = (function(){try{try{$pyjs.in_try_except += 1;
			return os['path']['spliext'](mod_name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})().__getitem__($constant_int_0);
			$pyjs.track.lineno=22;
			$pyjs.track.lineno=22;
			var $pyjs__ret = mod_name;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getModuleName'].__name__ = 'getModuleName';

		$m['getModuleName'].__bind_type__ = 0;
		$m['getModuleName'].__args__ = [null,null];
		$pyjs.track.lineno=24;
		$m['getModuleBaseURL'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $add3,s,os,$add4;
			$pyjs.track={module:'pygwt',lineno:24};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pygwt';
			$pyjs.track.lineno=24;
			$pyjs.track.lineno=25;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			os = $p['___import___']('os.path', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=28;
			s = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['getUri']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.track.lineno=31;
			s = (function(){try{try{$pyjs.in_try_except += 1;
			return os['path']['dirname'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.track.lineno=33;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs.track.lineno=34;
				$pyjs.track.lineno=34;
				var $pyjs__ret = $p['__op_add']($add3=s,$add4='/');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=35;
			$pyjs.track.lineno=35;
			var $pyjs__ret = '';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getModuleBaseURL'].__name__ = 'getModuleBaseURL';

		$m['getModuleBaseURL'].__bind_type__ = 0;
		$m['getModuleBaseURL'].__args__ = [null,null];
		$pyjs.track.lineno=37;
		$m['getImageBaseURL'] = function(images) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof images == 'undefined') images=arguments.callee.__args__[2][1];
			var pyjd,$add6,$add7,$add5,$add10,$add8,$add9;
			$pyjs.track={module:'pygwt',lineno:37};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pygwt';
			$pyjs.track.lineno=37;
			$pyjs.track.lineno=38;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			pyjd = $p['___import___']('pyjd', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=40;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](images);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
				$pyjs.track.lineno=41;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](images, $p['str']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
					$pyjs.track.lineno=42;
					$pyjs.track.lineno=42;
					var $pyjs__ret = $p['__op_add']($add7=$p['__op_add']($add5=(function(){try{try{$pyjs.in_try_except += 1;
					return $m['getModuleBaseURL']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(),$add6=images),$add8='/');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else {
					$pyjs.track.lineno=44;
					$pyjs.track.lineno=44;
					var $pyjs__ret = $p['__op_add']($add9=(function(){try{try{$pyjs.in_try_except += 1;
					return $m['getModuleBaseURL']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(),$add10='images/');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			else {
				$pyjs.track.lineno=46;
				$pyjs.track.lineno=46;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getModuleBaseURL']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['getImageBaseURL'].__name__ = 'getImageBaseURL';

		$m['getImageBaseURL'].__bind_type__ = 0;
		$m['getImageBaseURL'].__args__ = [null,null,['images', false]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pygwt */


/* end module: pygwt */


/*
PYJS_DEPS: ['os', 'sys', 'os.path', 'pyjd']
*/
