/* start module: traceback */
$pyjs.loaded_modules['traceback'] = function (__mod_name__) {
	if($pyjs.loaded_modules['traceback'].__was_initialized__) return $pyjs.loaded_modules['traceback'];
	var $m = $pyjs.loaded_modules["traceback"];
	$m.__repr__ = function() { return "<module: traceback>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'traceback';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'traceback.py, line 1:\n    import sys';
		$m.__track_lines__[3] = 'traceback.py, line 3:\n    def format_exception(etype, value, tb, limit=None):';
		$m.__track_lines__[4] = 'traceback.py, line 4:\n    return sys._get_traceback_list(value, tb, limit=limit)';
		$m.__track_lines__[6] = 'traceback.py, line 6:\n    def print_exc():';
		$m.__track_lines__[7] = 'traceback.py, line 7:\n    print sys._get_traceback_list(value, tb, None)';


		$pyjs.track.module='traceback';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['format_exception'] = function(etype, value, tb, limit) {
			if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
			if (typeof limit == 'undefined') limit=arguments.callee.__args__[5][1];

			$pyjs.track={module:'traceback',lineno:3};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='traceback';
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=4;
			var $pyjs__ret = $pyjs_kwargs_call($m['sys'], '_get_traceback_list', null, null, [{limit:limit}, value, tb]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['format_exception'].__name__ = 'format_exception';

		$m['format_exception'].__bind_type__ = 0;
		$m['format_exception'].__args__ = [null,null,['etype'],['value'],['tb'],['limit', null]];
		$pyjs.track.lineno=6;
		$m['print_exc'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'traceback',lineno:6};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='traceback';
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=7;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['print_exc'].__name__ = 'print_exc';

		$m['print_exc'].__bind_type__ = 0;
		$m['print_exc'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end traceback */


/* end module: traceback */


/*
PYJS_DEPS: ['sys']
*/
