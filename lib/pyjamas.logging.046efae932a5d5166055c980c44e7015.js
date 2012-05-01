/* start module: pyjamas.logging */
$pyjs.loaded_modules['pyjamas.logging'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.logging'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.logging'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.logging"];
	$m.__repr__ = function() { return "<module: pyjamas.logging>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.logging';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['logging'] = $pyjs.loaded_modules['pyjamas.logging'];
	try {
		$m.__track_lines__[1] = 'pyjamas.logging.py, line 1:\n    """Logging module for Pyjamas, mimicking CPython\'s logging module.';
		$m.__track_lines__[8] = "pyjamas.logging.py, line 8:\n    __author__ = 'Peter Bittner <peter.bittner@gmx.net>'";
		$m.__track_lines__[10] = 'pyjamas.logging.py, line 10:\n    from pyjamas.logging.handlers import \\';
		$m.__track_lines__[13] = 'pyjamas.logging.py, line 13:\n    from logging import getLogger, Formatter, StreamHandler, DEBUG, BASIC_FORMAT';
		$m.__track_lines__[16] = "pyjamas.logging.py, line 16:\n    PLAIN_FORMAT = '%(message)s'";
		$m.__track_lines__[18] = 'pyjamas.logging.py, line 18:\n    def getLoggerForHandler(handler, name=__name__, level=DEBUG, fmt=BASIC_FORMAT):';
		$m.__track_lines__[21] = 'pyjamas.logging.py, line 21:\n    formatter = Formatter(fmt)';
		$m.__track_lines__[22] = 'pyjamas.logging.py, line 22:\n    handler.setFormatter(formatter)';
		$m.__track_lines__[23] = 'pyjamas.logging.py, line 23:\n    logger = getLogger(name)';
		$m.__track_lines__[24] = 'pyjamas.logging.py, line 24:\n    logger.setLevel(level)';
		$m.__track_lines__[25] = 'pyjamas.logging.py, line 25:\n    logger.addHandler(handler)';
		$m.__track_lines__[26] = 'pyjamas.logging.py, line 26:\n    return logger';
		$m.__track_lines__[28] = 'pyjamas.logging.py, line 28:\n    def getAlertLogger(name=__name__, level=DEBUG, fmt=BASIC_FORMAT):';
		$m.__track_lines__[30] = 'pyjamas.logging.py, line 30:\n    return getLoggerForHandler(AlertHandler(), name, level, fmt)';
		$m.__track_lines__[32] = 'pyjamas.logging.py, line 32:\n    def getAppendLogger(name=__name__, level=DEBUG, fmt=BASIC_FORMAT):';
		$m.__track_lines__[34] = 'pyjamas.logging.py, line 34:\n    return getLoggerForHandler(AppendHandler(name), name, level, fmt)';
		$m.__track_lines__[36] = 'pyjamas.logging.py, line 36:\n    def getConsoleLogger(name=__name__, level=DEBUG, fmt=BASIC_FORMAT):';
		$m.__track_lines__[38] = 'pyjamas.logging.py, line 38:\n    return getLoggerForHandler(ConsoleHandler(), name, level, fmt)';
		$m.__track_lines__[40] = 'pyjamas.logging.py, line 40:\n    def getNullLogger(name=__name__, level=DEBUG, fmt=BASIC_FORMAT):';
		$m.__track_lines__[42] = 'pyjamas.logging.py, line 42:\n    return getLoggerForHandler(NullHandler(), name, level, fmt)';
		$m.__track_lines__[44] = 'pyjamas.logging.py, line 44:\n    def getPrintLogger(name=__name__, level=DEBUG, fmt=BASIC_FORMAT):';
		$m.__track_lines__[46] = 'pyjamas.logging.py, line 46:\n    return getLoggerForHandler(StreamHandler(), name, level, fmt)';


		$pyjs.track.module='pyjamas.logging';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=8;
		$m['__author__'] = 'Peter Bittner <peter.bittner@gmx.net>';
		$pyjs.track.lineno=10;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['AlertHandler'] = $p['___import___']('pyjamas.logging.handlers.AlertHandler', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['AppendHandler'] = $p['___import___']('pyjamas.logging.handlers.AppendHandler', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ConsoleHandler'] = $p['___import___']('pyjamas.logging.handlers.ConsoleHandler', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['NullHandler'] = $p['___import___']('pyjamas.logging.handlers.NullHandler', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=13;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['getLogger'] = $p['___import___']('logging.getLogger', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Formatter'] = $p['___import___']('logging.Formatter', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['StreamHandler'] = $p['___import___']('logging.StreamHandler', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DEBUG'] = $p['___import___']('logging.DEBUG', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['BASIC_FORMAT'] = $p['___import___']('logging.BASIC_FORMAT', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$m['PLAIN_FORMAT'] = '%(message)s';
		$pyjs.track.lineno=18;
		$m['getLoggerForHandler'] = function(handler, name, level, fmt) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
			if (typeof name == 'undefined') name=arguments.callee.__args__[3][1];
			if (typeof level == 'undefined') level=arguments.callee.__args__[4][1];
			if (typeof fmt == 'undefined') fmt=arguments.callee.__args__[5][1];
			var logger,formatter;
			$pyjs.track={module:'pyjamas.logging',lineno:18};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.logging';
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=21;
			formatter = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Formatter'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=22;
			(function(){try{try{$pyjs.in_try_except += 1;
			return handler['setFormatter'](formatter);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=23;
			logger = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getLogger'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.track.lineno=24;
			(function(){try{try{$pyjs.in_try_except += 1;
			return logger['setLevel'](level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.track.lineno=25;
			(function(){try{try{$pyjs.in_try_except += 1;
			return logger['addHandler'](handler);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.track.lineno=26;
			$pyjs.track.lineno=26;
			var $pyjs__ret = logger;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getLoggerForHandler'].__name__ = 'getLoggerForHandler';

		$m['getLoggerForHandler'].__bind_type__ = 0;
		$m['getLoggerForHandler'].__args__ = [null,null,['handler'],['name', (typeof __name__ == "undefined"?$m.__name__:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$pyjs.track.lineno=28;
		$m['getAlertLogger'] = function(name, level, fmt) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
			if (typeof name == 'undefined') name=arguments.callee.__args__[2][1];
			if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];
			if (typeof fmt == 'undefined') fmt=arguments.callee.__args__[4][1];

			$pyjs.track={module:'pyjamas.logging',lineno:28};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.logging';
			$pyjs.track.lineno=28;
			$pyjs.track.lineno=30;
			$pyjs.track.lineno=30;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getLoggerForHandler']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['AlertHandler']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(), name, level, fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getAlertLogger'].__name__ = 'getAlertLogger';

		$m['getAlertLogger'].__bind_type__ = 0;
		$m['getAlertLogger'].__args__ = [null,null,['name', (typeof __name__ == "undefined"?$m.__name__:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$pyjs.track.lineno=32;
		$m['getAppendLogger'] = function(name, level, fmt) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
			if (typeof name == 'undefined') name=arguments.callee.__args__[2][1];
			if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];
			if (typeof fmt == 'undefined') fmt=arguments.callee.__args__[4][1];

			$pyjs.track={module:'pyjamas.logging',lineno:32};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.logging';
			$pyjs.track.lineno=32;
			$pyjs.track.lineno=34;
			$pyjs.track.lineno=34;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getLoggerForHandler']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['AppendHandler'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})(), name, level, fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getAppendLogger'].__name__ = 'getAppendLogger';

		$m['getAppendLogger'].__bind_type__ = 0;
		$m['getAppendLogger'].__args__ = [null,null,['name', (typeof __name__ == "undefined"?$m.__name__:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$pyjs.track.lineno=36;
		$m['getConsoleLogger'] = function(name, level, fmt) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
			if (typeof name == 'undefined') name=arguments.callee.__args__[2][1];
			if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];
			if (typeof fmt == 'undefined') fmt=arguments.callee.__args__[4][1];

			$pyjs.track={module:'pyjamas.logging',lineno:36};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.logging';
			$pyjs.track.lineno=36;
			$pyjs.track.lineno=38;
			$pyjs.track.lineno=38;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getLoggerForHandler']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['ConsoleHandler']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(), name, level, fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getConsoleLogger'].__name__ = 'getConsoleLogger';

		$m['getConsoleLogger'].__bind_type__ = 0;
		$m['getConsoleLogger'].__args__ = [null,null,['name', (typeof __name__ == "undefined"?$m.__name__:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$pyjs.track.lineno=40;
		$m['getNullLogger'] = function(name, level, fmt) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
			if (typeof name == 'undefined') name=arguments.callee.__args__[2][1];
			if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];
			if (typeof fmt == 'undefined') fmt=arguments.callee.__args__[4][1];

			$pyjs.track={module:'pyjamas.logging',lineno:40};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.logging';
			$pyjs.track.lineno=40;
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=42;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getLoggerForHandler']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['NullHandler']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), name, level, fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getNullLogger'].__name__ = 'getNullLogger';

		$m['getNullLogger'].__bind_type__ = 0;
		$m['getNullLogger'].__args__ = [null,null,['name', (typeof __name__ == "undefined"?$m.__name__:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
		$pyjs.track.lineno=44;
		$m['getPrintLogger'] = function(name, level, fmt) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
			if (typeof name == 'undefined') name=arguments.callee.__args__[2][1];
			if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];
			if (typeof fmt == 'undefined') fmt=arguments.callee.__args__[4][1];

			$pyjs.track={module:'pyjamas.logging',lineno:44};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.logging';
			$pyjs.track.lineno=44;
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=46;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getLoggerForHandler']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['StreamHandler']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})(), name, level, fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getPrintLogger'].__name__ = 'getPrintLogger';

		$m['getPrintLogger'].__bind_type__ = 0;
		$m['getPrintLogger'].__args__ = [null,null,['name', (typeof __name__ == "undefined"?$m.__name__:__name__)],['level', $m['DEBUG']],['fmt', $m['BASIC_FORMAT']]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.logging */


/* end module: pyjamas.logging */


/*
PYJS_DEPS: ['pyjamas.logging.handlers.AlertHandler', 'pyjamas', 'pyjamas.logging', 'pyjamas.logging.handlers', 'pyjamas.logging.handlers.AppendHandler', 'pyjamas.logging.handlers.ConsoleHandler', 'pyjamas.logging.handlers.NullHandler', 'logging.getLogger', 'logging', 'logging.Formatter', 'logging.StreamHandler', 'logging.DEBUG', 'logging.BASIC_FORMAT']
*/
