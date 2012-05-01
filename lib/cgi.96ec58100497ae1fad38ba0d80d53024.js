/* start module: cgi */
$pyjs.loaded_modules['cgi'] = function (__mod_name__) {
	if($pyjs.loaded_modules['cgi'].__was_initialized__) return $pyjs.loaded_modules['cgi'];
	var $m = $pyjs.loaded_modules["cgi"];
	$m.__repr__ = function() { return "<module: cgi>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'cgi';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'cgi.py, line 1:\n    # Utilities';
		$m.__track_lines__[4] = 'cgi.py, line 4:\n    def escape(s, quote=None):';
		$m.__track_lines__[8] = 'cgi.py, line 8:\n    s = s.replace("&", "&amp;") # Must be done first!';
		$m.__track_lines__[9] = 'cgi.py, line 9:\n    s = s.replace("<", "&lt;")';
		$m.__track_lines__[10] = 'cgi.py, line 10:\n    s = s.replace(">", "&gt;")';
		$m.__track_lines__[11] = 'cgi.py, line 11:\n    if quote:';
		$m.__track_lines__[12] = 'cgi.py, line 12:\n    s = s.replace(\'"\', "&quot;")';
		$m.__track_lines__[13] = 'cgi.py, line 13:\n    return s';


		$pyjs.track.module='cgi';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=4;
		$m['escape'] = function(s, quote) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof quote == 'undefined') quote=arguments.callee.__args__[3][1];

			$pyjs.track={module:'cgi',lineno:4};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='cgi';
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=8;
			s = (function(){try{try{$pyjs.in_try_except += 1;
			return s['$$replace']('&', '&amp;');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=9;
			s = (function(){try{try{$pyjs.in_try_except += 1;
			return s['$$replace']('<', '&lt;');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=10;
			s = (function(){try{try{$pyjs.in_try_except += 1;
			return s['$$replace']('>', '&gt;');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.track.lineno=11;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](quote);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs.track.lineno=12;
				s = (function(){try{try{$pyjs.in_try_except += 1;
				return s['$$replace']('"', '&quot;');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			$pyjs.track.lineno=13;
			$pyjs.track.lineno=13;
			var $pyjs__ret = s;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['escape'].__name__ = 'escape';

		$m['escape'].__bind_type__ = 0;
		$m['escape'].__args__ = [null,null,['s'],['quote', null]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end cgi */


/* end module: cgi */


