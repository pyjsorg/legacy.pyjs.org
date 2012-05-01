/* start module: pyjamas.DeferredCommand */
$pyjs.loaded_modules['pyjamas.DeferredCommand'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DeferredCommand'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DeferredCommand'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.DeferredCommand"];
	$m.__repr__ = function() { return "<module: pyjamas.DeferredCommand>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DeferredCommand';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['DeferredCommand'] = $pyjs.loaded_modules['pyjamas.DeferredCommand'];
	try {
		$m.__track_lines__[1] = 'pyjamas.DeferredCommand.py, line 1:\n    from pyjamas.Timer import Timer';
		$m.__track_lines__[3] = 'pyjamas.DeferredCommand.py, line 3:\n    deferredCommands = []';
		$m.__track_lines__[4] = 'pyjamas.DeferredCommand.py, line 4:\n    timerIsActive = False';
		$m.__track_lines__[7] = 'pyjamas.DeferredCommand.py, line 7:\n    def add(cmd):';
		$m.__track_lines__[8] = 'pyjamas.DeferredCommand.py, line 8:\n    deferredCommands.append(cmd)';
		$m.__track_lines__[9] = 'pyjamas.DeferredCommand.py, line 9:\n    maybeSetDeferredCommandTimer()';
		$m.__track_lines__[12] = 'pyjamas.DeferredCommand.py, line 12:\n    def flushDeferredCommands():';
		$m.__track_lines__[13] = 'pyjamas.DeferredCommand.py, line 13:\n    for i in range(len(deferredCommands)):';
		$m.__track_lines__[14] = 'pyjamas.DeferredCommand.py, line 14:\n    current = deferredCommands[0]';
		$m.__track_lines__[15] = 'pyjamas.DeferredCommand.py, line 15:\n    del deferredCommands[0]';
		$m.__track_lines__[16] = 'pyjamas.DeferredCommand.py, line 16:\n    if current:';
		$m.__track_lines__[17] = 'pyjamas.DeferredCommand.py, line 17:\n    if hasattr(current, "execute"):';
		$m.__track_lines__[18] = 'pyjamas.DeferredCommand.py, line 18:\n    current.execute()';
		$m.__track_lines__[20] = 'pyjamas.DeferredCommand.py, line 20:\n    current()';
		$m.__track_lines__[23] = 'pyjamas.DeferredCommand.py, line 23:\n    def maybeSetDeferredCommandTimer():';
		$m.__track_lines__[24] = 'pyjamas.DeferredCommand.py, line 24:\n    global timerIsActive';
		$m.__track_lines__[26] = 'pyjamas.DeferredCommand.py, line 26:\n    if (not timerIsActive) and (not len(deferredCommands) == 0):';
		$m.__track_lines__[27] = 'pyjamas.DeferredCommand.py, line 27:\n    Timer(1, onTimer)';
		$m.__track_lines__[28] = 'pyjamas.DeferredCommand.py, line 28:\n    timerIsActive = True';
		$m.__track_lines__[31] = 'pyjamas.DeferredCommand.py, line 31:\n    def onTimer(t):';
		$m.__track_lines__[32] = 'pyjamas.DeferredCommand.py, line 32:\n    global timerIsActive';
		$m.__track_lines__[34] = 'pyjamas.DeferredCommand.py, line 34:\n    flushDeferredCommands()';
		$m.__track_lines__[35] = 'pyjamas.DeferredCommand.py, line 35:\n    timerIsActive = False';
		$m.__track_lines__[36] = 'pyjamas.DeferredCommand.py, line 36:\n    maybeSetDeferredCommandTimer()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='pyjamas.DeferredCommand';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['deferredCommands'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=4;
		$m['timerIsActive'] = false;
		$pyjs.track.lineno=7;
		$m['add'] = function(cmd) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DeferredCommand',lineno:7};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DeferredCommand';
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=8;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['deferredCommands']['append'](cmd);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=9;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof maybeSetDeferredCommandTimer == "undefined"?$m.maybeSetDeferredCommandTimer:maybeSetDeferredCommandTimer)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['add'].__name__ = 'add';

		$m['add'].__bind_type__ = 0;
		$m['add'].__args__ = [null,null,['cmd']];
		$pyjs.track.lineno=12;
		$m['flushDeferredCommands'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $iter1_nextval,$iter1_type,i,$iter1_iter,current,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
			$pyjs.track={module:'pyjamas.DeferredCommand',lineno:12};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DeferredCommand';
			$pyjs.track.lineno=12;
			$pyjs.track.lineno=13;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($m['deferredCommands']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				i = $iter1_nextval.$nextval;
				$pyjs.track.lineno=14;
				current = $m['deferredCommands'].__getitem__($constant_int_0);
				$pyjs.track.lineno=15;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['deferredCommands'].__delitem__($constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs.track.lineno=16;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](current);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
					$pyjs.track.lineno=17;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['hasattr'](current, 'execute');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
						$pyjs.track.lineno=18;
						(function(){try{try{$pyjs.in_try_except += 1;
						return current['execute']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
					}
					else {
						$pyjs.track.lineno=20;
						(function(){try{try{$pyjs.in_try_except += 1;
						return current();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
					}
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DeferredCommand';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['flushDeferredCommands'].__name__ = 'flushDeferredCommands';

		$m['flushDeferredCommands'].__bind_type__ = 0;
		$m['flushDeferredCommands'].__args__ = [null,null];
		$pyjs.track.lineno=23;
		$m['maybeSetDeferredCommandTimer'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $and1,$and2;
			$pyjs.track={module:'pyjamas.DeferredCommand',lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DeferredCommand';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=24;
			$pyjs.track.lineno=26;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and1=!$p['bool']($m['timerIsActive']))?!$p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($m['deferredCommands']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), $constant_int_0)):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs.track.lineno=27;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Timer']($constant_int_1, (typeof onTimer == "undefined"?$m.onTimer:onTimer));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.track.lineno=28;
				$m['timerIsActive'] = true;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['maybeSetDeferredCommandTimer'].__name__ = 'maybeSetDeferredCommandTimer';

		$m['maybeSetDeferredCommandTimer'].__bind_type__ = 0;
		$m['maybeSetDeferredCommandTimer'].__args__ = [null,null];
		$pyjs.track.lineno=31;
		$m['onTimer'] = function(t) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DeferredCommand',lineno:31};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DeferredCommand';
			$pyjs.track.lineno=31;
			$pyjs.track.lineno=32;
			$pyjs.track.lineno=34;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['flushDeferredCommands']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs.track.lineno=35;
			$m['timerIsActive'] = false;
			$pyjs.track.lineno=36;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['maybeSetDeferredCommandTimer']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['onTimer'].__name__ = 'onTimer';

		$m['onTimer'].__bind_type__ = 0;
		$m['onTimer'].__args__ = [null,null,['t']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.DeferredCommand */


/* end module: pyjamas.DeferredCommand */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer']
*/
