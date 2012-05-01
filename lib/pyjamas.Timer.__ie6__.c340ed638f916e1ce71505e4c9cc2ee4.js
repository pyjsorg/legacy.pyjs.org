/* start module: pyjamas.Timer */
$pyjs.loaded_modules['pyjamas.Timer'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Timer'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Timer'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Timer"];
	$m.__repr__ = function() { return "<module: pyjamas.Timer>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Timer';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['Timer'] = $pyjs.loaded_modules['pyjamas.Timer'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Timer.py, line 1:\n    # Copyright (C) 2010, Daniel Popowich <danielpopowich@gmail.com>';
		$m.__track_lines__[132] = 'pyjamas.Timer.py, line 132:\n    if delayMillis != 0:';
		$m.__track_lines__[133] = 'pyjamas.Timer.py, line 133:\n    self.schedule(delayMillis)';
		$m.__track_lines__[129] = 'pyjamas.Timer.py, line 129:\n    self.__impl_init_hook()';
		$m.__track_lines__[136] = 'pyjamas.Timer.py, line 136:\n    pass';
		$m.__track_lines__[138] = 'pyjamas.Timer.py, line 138:\n    def cancel(self):';
		$m.__track_lines__[141] = 'pyjamas.Timer.py, line 141:\n    if self.__tid is None:';
		$m.__track_lines__[142] = 'pyjamas.Timer.py, line 142:\n    return';
		$m.__track_lines__[15] = 'pyjamas.Timer.py, line 15:\n    from pyjamas import Window';
		$m.__track_lines__[16] = 'pyjamas.Timer.py, line 16:\n    from __pyjamas__ import JS, get_main_frame';
		$m.__track_lines__[17] = 'pyjamas.Timer.py, line 17:\n    import pyjd';
		$m.__track_lines__[18] = 'pyjamas.Timer.py, line 18:\n    from traceback import print_exc # used in Timer.pywebkitgtknew.py for debugging';
		$m.__track_lines__[147] = 'pyjamas.Timer.py, line 147:\n    self.__clearTimeout(self.__tid)';
		$m.__track_lines__[20] = 'pyjamas.Timer.py, line 20:\n    class Timer(object):';
		$m.__track_lines__[149] = 'pyjamas.Timer.py, line 149:\n    self.__tid = None';
		$m.__track_lines__[150] = 'pyjamas.Timer.py, line 150:\n    Timer.__timers.discard(self)';
		$m.__track_lines__[152] = 'pyjamas.Timer.py, line 152:\n    def run(self):';
		$m.__track_lines__[154] = "pyjamas.Timer.py, line 154:\n    raise NotImplementedError, ('''Timer.run() must be overridden or Timer";
		$m.__track_lines__[28] = 'pyjamas.Timer.py, line 28:\n    ';
		$m.__track_lines__[158] = 'pyjamas.Timer.py, line 158:\n    def schedule(self, delayMillis):';
		$m.__track_lines__[33] = 'pyjamas.Timer.py, line 33:\n    ';
		$m.__track_lines__[34] = 'pyjamas.Timer.py, line 34:\n    schedule(delayMillis) -- schedule the timer to fire delayMillis';
		$m.__track_lines__[163] = 'pyjamas.Timer.py, line 163:\n    if delayMillis <= 0:';
		$m.__track_lines__[164] = "pyjamas.Timer.py, line 164:\n    raise ValueError, 'delay must be positive'";
		$m.__track_lines__[166] = 'pyjamas.Timer.py, line 166:\n    self.cancel()';
		$m.__track_lines__[167] = 'pyjamas.Timer.py, line 167:\n    self.__is_repeating = False';
		$m.__track_lines__[168] = 'pyjamas.Timer.py, line 168:\n    self.__tid = self.__setTimeout(delayMillis)';
		$m.__track_lines__[169] = 'pyjamas.Timer.py, line 169:\n    Timer.__timers.add(self)';
		$m.__track_lines__[135] = 'pyjamas.Timer.py, line 135:\n    def __impl_init_hook(self):';
		$m.__track_lines__[172] = 'pyjamas.Timer.py, line 172:\n    def scheduleRepeating(self, periodMillis):';
		$m.__track_lines__[47] = 'pyjamas.Timer.py, line 47:\n    __timers = set()';
		$m.__track_lines__[180] = 'pyjamas.Timer.py, line 180:\n    self.cancel()';
		$m.__track_lines__[49] = 'pyjamas.Timer.py, line 49:\n    class __WindowCloseListener:';
		$m.__track_lines__[178] = "pyjamas.Timer.py, line 178:\n    raise ValueError, 'period must be positive'";
		$m.__track_lines__[52] = 'pyjamas.Timer.py, line 52:\n    def onWindowClosed(self):';
		$m.__track_lines__[53] = 'pyjamas.Timer.py, line 53:\n    for timer in list(Timer.__timers):';
		$m.__track_lines__[54] = 'pyjamas.Timer.py, line 54:\n    timer.cancel()';
		$m.__track_lines__[183] = 'pyjamas.Timer.py, line 183:\n    Timer.__timers.add(self)';
		$m.__track_lines__[56] = 'pyjamas.Timer.py, line 56:\n    def onWindowClosing(self):';
		$m.__track_lines__[57] = 'pyjamas.Timer.py, line 57:\n    pass';
		$m.__track_lines__[186] = 'pyjamas.Timer.py, line 186:\n    def __fire(self):';
		$m.__track_lines__[59] = 'pyjamas.Timer.py, line 59:\n    def __init__(self, delayMillis=0, notify=None):';
		$m.__track_lines__[188] = 'pyjamas.Timer.py, line 188:\n    if not self.__is_repeating:';
		$m.__track_lines__[189] = 'pyjamas.Timer.py, line 189:\n    Timer.__timers.discard(self)';
		$m.__track_lines__[190] = 'pyjamas.Timer.py, line 190:\n    self.__onTimer()';
		$m.__track_lines__[181] = 'pyjamas.Timer.py, line 181:\n    self.__is_repeating = True';
		$m.__track_lines__[196] = 'pyjamas.Timer.py, line 20:\n    class Timer(object): ... def __setTimeout(self, delayMillis):';
		$m.__track_lines__[182] = 'pyjamas.Timer.py, line 182:\n    self.__tid = self.__setInterval(periodMillis)';
		$m.__track_lines__[199] = 'pyjamas.Timer.py, line 28:\n     ... def __clearTimeout(self,tid):';
		$m.__track_lines__[177] = 'pyjamas.Timer.py, line 177:\n    if periodMillis <= 0:';
		$m.__track_lines__[202] = 'pyjamas.Timer.py, line 33:\n     ... def __setInterval(self, periodMillis):';
		$m.__track_lines__[205] = 'pyjamas.Timer.py, line 41:\n    calls schedule() on itself as its last action. ... def __clearInterval(self, tid):';
		$m.__track_lines__[41] = 'pyjamas.Timer.py, line 41:\n    calls schedule() on itself as its last action.';
		$m.__track_lines__[144] = 'pyjamas.Timer.py, line 144:\n    if self.__is_repeating:';
		$m.__track_lines__[145] = 'pyjamas.Timer.py, line 145:\n    self.__clearInterval(self.__tid)';
		$m.__track_lines__[113] = 'pyjamas.Timer.py, line 113:\n    self.__tid = None';
		$m.__track_lines__[114] = 'pyjamas.Timer.py, line 114:\n    self.__onTimer = lambda: self.run()';
		$m.__track_lines__[115] = 'pyjamas.Timer.py, line 115:\n    Window.addWindowCloseListener(Timer.__WindowCloseListener())';
		$m.__track_lines__[118] = 'pyjamas.Timer.py, line 118:\n    if notify is not None:';
		$m.__track_lines__[119] = "pyjamas.Timer.py, line 119:\n    run = getattr(notify, 'onTimer', notify)";
		$m.__track_lines__[120] = 'pyjamas.Timer.py, line 120:\n    if not callable(run):';
		$m.__track_lines__[121] = "pyjamas.Timer.py, line 121:\n    raise ValueError, 'Programming error: notify must be callable'";
		$m.__track_lines__[122] = 'pyjamas.Timer.py, line 122:\n    self.__onTimer = lambda: run(self)';
		$m.__track_lines__[21] = 'pyjamas.Timer.py, line 21:\n    ';

		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='pyjamas.Timer';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track.lineno=17;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['print_exc'] = $p['___import___']('traceback.print_exc', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$m['Timer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Timer';
			$cls_definition.__md5__ = '2b2190b4f8d82a1352b26dd4fadb7b7b';
			$pyjs.track.lineno=47;
			$cls_definition['__timers'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['set']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=49;
			$cls_definition['__WindowCloseListener'] = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition.__module__ = 'pyjamas.Timer';
				$cls_definition.__md5__ = 'b5efcf8238c2ed91736b602e3bf5f07f';
				$pyjs.track.lineno=52;
				$method = $pyjs__bind_method2('onWindowClosed', function() {
					if (this.__is_instance__ === true) {
						var self = this;
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
					} else {
						var self = arguments[0];
						if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
						if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					}
					if ($pyjs.options.arg_instance_type) {
						if (self.prototype.__md5__ !== 'b5efcf8238c2ed91736b602e3bf5f07f') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}
					var $iter1_nextval,$iter1_type,timer,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
					$pyjs.track={module:'pyjamas.Timer', lineno:52};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='pyjamas.Timer';
					$pyjs.track.lineno=52;
					$pyjs.track.lineno=53;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $p['list']($p['getattr']($m['Timer'], '__timers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
						timer = $iter1_nextval.$nextval;
						$pyjs.track.lineno=54;
						(function(){try{try{$pyjs.in_try_except += 1;
						return timer['cancel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.Timer';
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				}
	, 1, [null,null,['self']]);
				$cls_definition['onWindowClosed'] = $method;
				$pyjs.track.lineno=56;
				$method = $pyjs__bind_method2('onWindowClosing', function() {
					if (this.__is_instance__ === true) {
						var self = this;
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
					} else {
						var self = arguments[0];
						if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
						if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					}
					if ($pyjs.options.arg_instance_type) {
						if (self.prototype.__md5__ !== 'b5efcf8238c2ed91736b602e3bf5f07f') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}

					$pyjs.track={module:'pyjamas.Timer', lineno:56};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='pyjamas.Timer';
					$pyjs.track.lineno=56;
					$pyjs.track.lineno=57;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				}
	, 1, [null,null,['self']]);
				$cls_definition['onWindowClosing'] = $method;
				$pyjs.track.lineno=49;
				var $bases = new Array(pyjslib.object);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
				return $p['_create_class']('__WindowCloseListener', $p['tuple']($bases), $data);
			})();
			$pyjs.track.lineno=59;
			$method = $pyjs__bind_method2('__init__', function(delayMillis, notify) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					delayMillis = arguments[1];
					notify = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof delayMillis == 'undefined') delayMillis=arguments.callee.__args__[3][1];
				if (typeof notify == 'undefined') notify=arguments.callee.__args__[4][1];
				var run,$lambda2,$lambda1;
				$pyjs.track={module:'pyjamas.Timer', lineno:59};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=113;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__tid', null) : $p['setattr'](self, '__tid', null); 
				$pyjs.track.lineno=114;
				var 				$lambda1 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'pyjamas.Timer',lineno:114};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='pyjamas.Timer';
					$pyjs.track.lineno=114;
					$pyjs.track.lineno=114;
					$pyjs.track.lineno=114;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return self['run']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null];
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__onTimer', $lambda1) : $p['setattr'](self, '__onTimer', $lambda1); 
				$pyjs.track.lineno=115;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Window']['addWindowCloseListener']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['Timer']['__WindowCloseListener']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs.track.lineno=118;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](notify, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
					$pyjs.track.lineno=119;
					run = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](notify, 'onTimer', notify);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
					$pyjs.track.lineno=120;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['callable'](run);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
						$pyjs.track.lineno=121;
						$pyjs.__active_exception_stack__ = null;

						var $pyjs__raise_expr1 = $p['ValueError'];
						var $pyjs__raise_expr2 = 'Programming error: notify must be callable';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
					$pyjs.track.lineno=122;
					var 					$lambda2 = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

						$pyjs.track={module:'pyjamas.Timer',lineno:122};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='pyjamas.Timer';
						$pyjs.track.lineno=122;
						$pyjs.track.lineno=122;
						$pyjs.track.lineno=122;
						var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
						return run(self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					};
					$lambda2.__name__ = '$lambda2';

					$lambda2.__bind_type__ = 0;
					$lambda2.__args__ = [null,null];
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__onTimer', $lambda2) : $p['setattr'](self, '__onTimer', $lambda2); 
				}
				$pyjs.track.lineno=129;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['__impl_init_hook']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=132;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq'](delayMillis, $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
					$pyjs.track.lineno=133;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['schedule'](delayMillis);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['delayMillis', $constant_int_0],['notify', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=135;
			$method = $pyjs__bind_method2('__impl_init_hook', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Timer', lineno:135};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=135;
				$pyjs.track.lineno=136;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__impl_init_hook'] = $method;
			$pyjs.track.lineno=138;
			$method = $pyjs__bind_method2('cancel', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Timer', lineno:138};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=138;
				$pyjs.track.lineno=141;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is']($p['getattr'](self, '__tid'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
					$pyjs.track.lineno=142;
					$pyjs.track.lineno=142;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=144;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, '__is_repeating'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs.track.lineno=145;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['__clearInterval']($p['getattr'](self, '__tid'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				}
				else {
					$pyjs.track.lineno=147;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['__clearTimeout']($p['getattr'](self, '__tid'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				}
				$pyjs.track.lineno=149;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__tid', null) : $p['setattr'](self, '__tid', null); 
				$pyjs.track.lineno=150;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Timer']['__timers']['discard'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cancel'] = $method;
			$pyjs.track.lineno=152;
			$method = $pyjs__bind_method2('run', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Timer', lineno:152};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=152;
				$pyjs.track.lineno=154;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['NotImplementedError'];
				var $pyjs__raise_expr2 = 'Timer.run() must be overridden or Timer\n                                       must be instantiated with notify keyword\n                                       argument';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$pyjs.track.lineno=158;
			$method = $pyjs__bind_method2('schedule', function(delayMillis) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					delayMillis = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Timer', lineno:158};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=158;
				$pyjs.track.lineno=163;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](delayMillis, $constant_int_0) < 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs.track.lineno=164;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'delay must be positive';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=166;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['cancel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.track.lineno=167;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__is_repeating', false) : $p['setattr'](self, '__is_repeating', false); 
				$pyjs.track.lineno=168;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__tid', (function(){try{try{$pyjs.in_try_except += 1;
				return self['__setTimeout'](delayMillis);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) : $p['setattr'](self, '__tid', (function(){try{try{$pyjs.in_try_except += 1;
				return self['__setTimeout'](delayMillis);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()); 
				$pyjs.track.lineno=169;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Timer']['__timers']['add'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['delayMillis']]);
			$cls_definition['schedule'] = $method;
			$pyjs.track.lineno=172;
			$method = $pyjs__bind_method2('scheduleRepeating', function(periodMillis) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					periodMillis = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Timer', lineno:172};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=172;
				$pyjs.track.lineno=177;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](periodMillis, $constant_int_0) < 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
					$pyjs.track.lineno=178;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'period must be positive';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=180;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['cancel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.track.lineno=181;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__is_repeating', true) : $p['setattr'](self, '__is_repeating', true); 
				$pyjs.track.lineno=182;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__tid', (function(){try{try{$pyjs.in_try_except += 1;
				return self['__setInterval'](periodMillis);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) : $p['setattr'](self, '__tid', (function(){try{try{$pyjs.in_try_except += 1;
				return self['__setInterval'](periodMillis);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()); 
				$pyjs.track.lineno=183;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Timer']['__timers']['add'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['periodMillis']]);
			$cls_definition['scheduleRepeating'] = $method;
			$pyjs.track.lineno=186;
			$method = $pyjs__bind_method2('__fire', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Timer', lineno:186};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=186;
				$pyjs.track.lineno=188;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '__is_repeating')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs.track.lineno=189;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['Timer']['__timers']['discard'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				}
				$pyjs.track.lineno=190;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['__onTimer']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__fire'] = $method;
			$pyjs.track.lineno=196;
			$method = $pyjs__bind_method2('__setTimeout', function(delayMillis) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					delayMillis = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fire;
				fire = $p['getattr'](self, '__fire');

        return $wnd.setTimeout(function() {
           fire();
          }, delayMillis);
        
			}
	, 1, [null,null,['self'],['delayMillis']]);
			$cls_definition['__setTimeout'] = $method;
			$pyjs.track.lineno=199;
			$method = $pyjs__bind_method2('__clearTimeout', function(tid) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tid = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Timer', lineno:199};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=199;
				$pyjs.track.lineno=28;

        $wnd.clearTimeout(tid);
        
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			}
	, 1, [null,null,['self'],['tid']]);
			$cls_definition['__clearTimeout'] = $method;
			$pyjs.track.lineno=202;
			$method = $pyjs__bind_method2('__setInterval', function(periodMillis) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					periodMillis = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fire;
				fire = $p['getattr'](self, '__fire');

        return $wnd.setInterval(function() {
           fire();
          }, periodMillis);
        
			}
	, 1, [null,null,['self'],['periodMillis']]);
			$cls_definition['__setInterval'] = $method;
			$pyjs.track.lineno=205;
			$method = $pyjs__bind_method2('__clearInterval', function(tid) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tid = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2b2190b4f8d82a1352b26dd4fadb7b7b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Timer', lineno:205};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Timer';
				$pyjs.track.lineno=205;
				$pyjs.track.lineno=41;

        $wnd.clearInterval(tid);
        
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			}
	, 1, [null,null,['self'],['tid']]);
			$cls_definition['__clearInterval'] = $method;
			$pyjs.track.lineno=20;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Timer', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Timer */


/* end module: pyjamas.Timer */


/*
PYJS_DEPS: ['pyjamas.Window', 'pyjamas', 'pyjd', 'traceback.print_exc', 'traceback']
*/
