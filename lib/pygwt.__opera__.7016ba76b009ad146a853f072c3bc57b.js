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
		$m.__track_lines__[2] = 'pygwt.py, line 2:\n    ';
		$m.__track_lines__[3] = 'pygwt.py, line 3:\n    sNextHashId = 0';
		$m.__track_lines__[4] = 'pygwt.py, line 4:\n    ';
		$m.__track_lines__[5] = 'pygwt.py, line 2:\n     ... def getNextHashId():';
		$m.__track_lines__[38] = 'pygwt.py, line 38:\n    import pyjd';
		$m.__track_lines__[7] = 'pygwt.py, line 7:\n    sNextHashId += 1';
		$m.__track_lines__[40] = 'pygwt.py, line 40:\n    if images:';
		$m.__track_lines__[41] = 'pygwt.py, line 41:\n    if isinstance(images, str):';
		$m.__track_lines__[10] = 'pygwt.py, line 7:\n    sNextHashId += 1 ... def getHashCode(o):';
		$m.__track_lines__[44] = 'pygwt.py, line 44:\n    return getModuleBaseURL() + "images/"';
		$m.__track_lines__[13] = 'pygwt.py, line 13:\n    (@{{o}}.$H ? @{{o}}.$H : (@{{o}}.$H = @{{!pygwt_getNextHashId}}()))';
		$m.__track_lines__[46] = 'pygwt.py, line 46:\n    return getModuleBaseURL()';
		$m.__track_lines__[16] = 'pygwt.py, line 13:\n    (@{{o}}.$H ? @{{o}}.$H : (@{{o}}.$H = @{{!pygwt_getNextHashId}}())) ... def getModuleName():';
		$m.__track_lines__[18] = 'pygwt.py, line 18:\n    import sys';
		$m.__track_lines__[24] = 'pygwt.py, line 18:\n    import sys ... def getModuleBaseURL():';
		$m.__track_lines__[42] = "pygwt.py, line 42:\n    return getModuleBaseURL() + images + '/'";
		$m.__track_lines__[37] = 'pygwt.py, line 37:\n    def getImageBaseURL(images=False):';

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
			$pyjs.track.lineno=2;
			$pyjs.track.lineno=3;
			$m['sNextHashId'] = $p['__op_add']($add1=$m['sNextHashId'],$add2=$constant_int_1);
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=4;
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
        (o.$H ? o.$H : (o.$H = $m['getNextHashId']()));
    
		};
		$m['getHashCode'].__name__ = 'getHashCode';

		$m['getHashCode'].__bind_type__ = 0;
		$m['getHashCode'].__args__ = [null,null,['o']];
		$pyjs.track.lineno=16;
		$m['getModuleName'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);


    return $moduleName;
    
		};
		$m['getModuleName'].__name__ = 'getModuleName';

		$m['getModuleName'].__bind_type__ = 0;
		$m['getModuleName'].__args__ = [null,null];
		$pyjs.track.lineno=24;
		$m['getModuleBaseURL'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);


    // this is intentionally not using $doc, because we want
    // the module's own url
    var s = document.location.href;
    
    // Pull off any hash.
    var i = s.indexOf('#');
    if (i != -1)
        s = s.substring(0, i);
    
    // Pull off any query string.
    i = s.indexOf('?');
    if (i != -1)
        s = s.substring(0, i);
    
    // Rip off everything after the last slash.
    i = s.lastIndexOf('/');
    if (i != -1)
        s = s.substring(0, i);

    return (s.length > 0) ? s + "/" : "";
    
		};
		$m['getModuleBaseURL'].__name__ = 'getModuleBaseURL';

		$m['getModuleBaseURL'].__bind_type__ = 0;
		$m['getModuleBaseURL'].__args__ = [null,null];
		$pyjs.track.lineno=37;
		$m['getImageBaseURL'] = function(images) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof images == 'undefined') images=arguments.callee.__args__[2][1];
			var $add3,pyjd,$add6,$add7,$add4,$add5,$add8;
			$pyjs.track={module:'pygwt',lineno:37};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pygwt';
			$pyjs.track.lineno=37;
			$pyjs.track.lineno=38;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			pyjd = $p['___import___']('pyjd', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=40;
			if ($p['bool'](images)) {
				$pyjs.track.lineno=41;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](images, $p['str']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs.track.lineno=42;
					$pyjs.track.lineno=42;
					var $pyjs__ret = $p['__op_add']($add5=$p['__op_add']($add3=(function(){try{try{$pyjs.in_try_except += 1;
					return $m['getModuleBaseURL']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})(),$add4=images),$add6='/');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else {
					$pyjs.track.lineno=44;
					$pyjs.track.lineno=44;
					var $pyjs__ret = $p['__op_add']($add7=(function(){try{try{$pyjs.in_try_except += 1;
					return $m['getModuleBaseURL']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(),$add8='images/');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			else {
				$pyjs.track.lineno=46;
				$pyjs.track.lineno=46;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getModuleBaseURL']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
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
PYJS_DEPS: ['pyjd']
*/
