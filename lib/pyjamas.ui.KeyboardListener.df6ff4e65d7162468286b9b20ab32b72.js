/* start module: pyjamas.ui.KeyboardListener */
$pyjs.loaded_modules['pyjamas.ui.KeyboardListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.KeyboardListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.KeyboardListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.KeyboardListener"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.KeyboardListener>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.KeyboardListener';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['KeyboardListener'] = $pyjs.loaded_modules['pyjamas.ui.KeyboardListener'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.KeyboardListener.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.KeyboardListener.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.KeyboardListener.py, line 16:\n    from pyjamas.ui import Event';
		$m.__track_lines__[19] = 'pyjamas.ui.KeyboardListener.py, line 19:\n    KEY_ALT = 18';
		$m.__track_lines__[20] = 'pyjamas.ui.KeyboardListener.py, line 20:\n    KEY_BACKSPACE = 8';
		$m.__track_lines__[21] = 'pyjamas.ui.KeyboardListener.py, line 21:\n    KEY_CTRL = 17';
		$m.__track_lines__[22] = 'pyjamas.ui.KeyboardListener.py, line 22:\n    KEY_DELETE = 46';
		$m.__track_lines__[23] = 'pyjamas.ui.KeyboardListener.py, line 23:\n    KEY_DOWN = 40';
		$m.__track_lines__[24] = 'pyjamas.ui.KeyboardListener.py, line 24:\n    KEY_END = 35';
		$m.__track_lines__[25] = 'pyjamas.ui.KeyboardListener.py, line 25:\n    KEY_ENTER = 13';
		$m.__track_lines__[26] = 'pyjamas.ui.KeyboardListener.py, line 26:\n    KEY_ESCAPE = 27';
		$m.__track_lines__[27] = 'pyjamas.ui.KeyboardListener.py, line 27:\n    KEY_HOME = 36';
		$m.__track_lines__[28] = 'pyjamas.ui.KeyboardListener.py, line 28:\n    KEY_LEFT = 37';
		$m.__track_lines__[29] = 'pyjamas.ui.KeyboardListener.py, line 29:\n    KEY_PAGEDOWN = 34';
		$m.__track_lines__[30] = 'pyjamas.ui.KeyboardListener.py, line 30:\n    KEY_PAGEUP = 33';
		$m.__track_lines__[31] = 'pyjamas.ui.KeyboardListener.py, line 31:\n    KEY_RIGHT = 39';
		$m.__track_lines__[32] = 'pyjamas.ui.KeyboardListener.py, line 32:\n    KEY_SHIFT = 16';
		$m.__track_lines__[33] = 'pyjamas.ui.KeyboardListener.py, line 33:\n    KEY_TAB = 9';
		$m.__track_lines__[34] = 'pyjamas.ui.KeyboardListener.py, line 34:\n    KEY_UP = 38';
		$m.__track_lines__[36] = 'pyjamas.ui.KeyboardListener.py, line 36:\n    KEYS = [';
		$m.__track_lines__[55] = 'pyjamas.ui.KeyboardListener.py, line 55:\n    MODIFIER_ALT = 4';
		$m.__track_lines__[56] = 'pyjamas.ui.KeyboardListener.py, line 56:\n    MODIFIER_CTRL = 2';
		$m.__track_lines__[57] = 'pyjamas.ui.KeyboardListener.py, line 57:\n    MODIFIER_SHIFT = 1';
		$m.__track_lines__[59] = 'pyjamas.ui.KeyboardListener.py, line 59:\n    def getKeyboardModifiers(event):';
		$m.__track_lines__[60] = 'pyjamas.ui.KeyboardListener.py, line 60:\n    shift = 0';
		$m.__track_lines__[61] = 'pyjamas.ui.KeyboardListener.py, line 61:\n    ctrl = 0';
		$m.__track_lines__[62] = 'pyjamas.ui.KeyboardListener.py, line 62:\n    alt = 0';
		$m.__track_lines__[64] = 'pyjamas.ui.KeyboardListener.py, line 64:\n    if DOM.eventGetShiftKey(event):';
		$m.__track_lines__[65] = 'pyjamas.ui.KeyboardListener.py, line 65:\n    shift = MODIFIER_SHIFT';
		$m.__track_lines__[67] = 'pyjamas.ui.KeyboardListener.py, line 67:\n    if DOM.eventGetCtrlKey(event):';
		$m.__track_lines__[68] = 'pyjamas.ui.KeyboardListener.py, line 68:\n    ctrl = MODIFIER_CTRL';
		$m.__track_lines__[70] = 'pyjamas.ui.KeyboardListener.py, line 70:\n    if DOM.eventGetAltKey(event):';
		$m.__track_lines__[71] = 'pyjamas.ui.KeyboardListener.py, line 71:\n    alt = MODIFIER_ALT';
		$m.__track_lines__[73] = 'pyjamas.ui.KeyboardListener.py, line 73:\n    return shift | ctrl | alt';
		$m.__track_lines__[76] = 'pyjamas.ui.KeyboardListener.py, line 76:\n    def fireKeyboardEvent(listeners, sender, event):';
		$m.__track_lines__[77] = 'pyjamas.ui.KeyboardListener.py, line 77:\n    modifiers = getKeyboardModifiers(event)';
		$m.__track_lines__[78] = 'pyjamas.ui.KeyboardListener.py, line 78:\n    keycode = DOM.eventGetKeyCode(event)';
		$m.__track_lines__[80] = 'pyjamas.ui.KeyboardListener.py, line 80:\n    type = DOM.eventGetType(event)';
		$m.__track_lines__[81] = 'pyjamas.ui.KeyboardListener.py, line 81:\n    if type == "keydown":';
		$m.__track_lines__[82] = 'pyjamas.ui.KeyboardListener.py, line 82:\n    for listener in listeners:';
		$m.__track_lines__[83] = 'pyjamas.ui.KeyboardListener.py, line 83:\n    listener.onKeyDown(sender, keycode, modifiers)';
		$m.__track_lines__[85] = 'pyjamas.ui.KeyboardListener.py, line 85:\n    for listener in listeners:';
		$m.__track_lines__[86] = 'pyjamas.ui.KeyboardListener.py, line 86:\n    listener.onKeyUp(sender, keycode, modifiers)';
		$m.__track_lines__[88] = 'pyjamas.ui.KeyboardListener.py, line 88:\n    for listener in listeners:';
		$m.__track_lines__[89] = 'pyjamas.ui.KeyboardListener.py, line 89:\n    listener.onKeyPress(sender, keycode, modifiers)';
		$m.__track_lines__[91] = 'pyjamas.ui.KeyboardListener.py, line 91:\n    KEYBOARD_EVENTS = ["keydown", "keyup", "keypress"]';
		$m.__track_lines__[94] = 'pyjamas.ui.KeyboardListener.py, line 94:\n    class KeyboardHandler:';
		$m.__track_lines__[96] = 'pyjamas.ui.KeyboardListener.py, line 96:\n    def __init__(self):';
		$m.__track_lines__[98] = 'pyjamas.ui.KeyboardListener.py, line 98:\n    self._keyboardListeners = []';
		$m.__track_lines__[99] = 'pyjamas.ui.KeyboardListener.py, line 99:\n    self.sinkEvents( Event.KEYEVENTS )';
		$m.__track_lines__[101] = 'pyjamas.ui.KeyboardListener.py, line 101:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[102] = 'pyjamas.ui.KeyboardListener.py, line 102:\n    type = DOM.eventGetType(event)';
		$m.__track_lines__[103] = 'pyjamas.ui.KeyboardListener.py, line 103:\n    if type in [ "keydown", "keyup", "keypress" ]:';
		$m.__track_lines__[104] = 'pyjamas.ui.KeyboardListener.py, line 104:\n    fireKeyboardEvent(self._keyboardListeners, self, event)';
		$m.__track_lines__[106] = 'pyjamas.ui.KeyboardListener.py, line 106:\n    def addKeyboardListener(self, listener):';
		$m.__track_lines__[107] = 'pyjamas.ui.KeyboardListener.py, line 107:\n    self._keyboardListeners.append(listener)';
		$m.__track_lines__[109] = 'pyjamas.ui.KeyboardListener.py, line 109:\n    def removeKeyboardListener(self, listener):';
		$m.__track_lines__[110] = 'pyjamas.ui.KeyboardListener.py, line 110:\n    self._keyboardListeners.remove(listener)';
		$m.__track_lines__[112] = 'pyjamas.ui.KeyboardListener.py, line 112:\n    def onKeyDown(self, sender, keycode, modifiers):';
		$m.__track_lines__[113] = 'pyjamas.ui.KeyboardListener.py, line 113:\n    pass';
		$m.__track_lines__[115] = 'pyjamas.ui.KeyboardListener.py, line 115:\n    def onKeyUp(self, sender, keycode, modifiers):';
		$m.__track_lines__[116] = 'pyjamas.ui.KeyboardListener.py, line 116:\n    pass';
		$m.__track_lines__[118] = 'pyjamas.ui.KeyboardListener.py, line 118:\n    def onKeyPress(self, sender, keycode, modifiers):';
		$m.__track_lines__[119] = 'pyjamas.ui.KeyboardListener.py, line 119:\n    pass';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_36 = new $p['int'](36);
		var $constant_int_37 = new $p['int'](37);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_39 = new $p['int'](39);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_46 = new $p['int'](46);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_27 = new $p['int'](27);
		$pyjs.track.module='pyjamas.ui.KeyboardListener';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$m['KEY_ALT'] = $constant_int_18;
		$pyjs.track.lineno=20;
		$m['KEY_BACKSPACE'] = $constant_int_8;
		$pyjs.track.lineno=21;
		$m['KEY_CTRL'] = $constant_int_17;
		$pyjs.track.lineno=22;
		$m['KEY_DELETE'] = $constant_int_46;
		$pyjs.track.lineno=23;
		$m['KEY_DOWN'] = $constant_int_40;
		$pyjs.track.lineno=24;
		$m['KEY_END'] = $constant_int_35;
		$pyjs.track.lineno=25;
		$m['KEY_ENTER'] = $constant_int_13;
		$pyjs.track.lineno=26;
		$m['KEY_ESCAPE'] = $constant_int_27;
		$pyjs.track.lineno=27;
		$m['KEY_HOME'] = $constant_int_36;
		$pyjs.track.lineno=28;
		$m['KEY_LEFT'] = $constant_int_37;
		$pyjs.track.lineno=29;
		$m['KEY_PAGEDOWN'] = $constant_int_34;
		$pyjs.track.lineno=30;
		$m['KEY_PAGEUP'] = $constant_int_33;
		$pyjs.track.lineno=31;
		$m['KEY_RIGHT'] = $constant_int_39;
		$pyjs.track.lineno=32;
		$m['KEY_SHIFT'] = $constant_int_16;
		$pyjs.track.lineno=33;
		$m['KEY_TAB'] = $constant_int_9;
		$pyjs.track.lineno=34;
		$m['KEY_UP'] = $constant_int_38;
		$pyjs.track.lineno=36;
		$m['KEYS'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([$m['KEY_ALT'], $m['KEY_BACKSPACE'], $m['KEY_CTRL'], $m['KEY_DELETE'], $m['KEY_DOWN'], $m['KEY_END'], $m['KEY_ENTER'], $m['KEY_ESCAPE'], $m['KEY_HOME'], $m['KEY_LEFT'], $m['KEY_PAGEDOWN'], $m['KEY_PAGEUP'], $m['KEY_RIGHT'], $m['KEY_SHIFT'], $m['KEY_TAB'], $m['KEY_UP']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=55;
		$m['MODIFIER_ALT'] = $constant_int_4;
		$pyjs.track.lineno=56;
		$m['MODIFIER_CTRL'] = $constant_int_2;
		$pyjs.track.lineno=57;
		$m['MODIFIER_SHIFT'] = $constant_int_1;
		$pyjs.track.lineno=59;
		$m['getKeyboardModifiers'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var shift,alt,ctrl;
			$pyjs.track={module:'pyjamas.ui.KeyboardListener',lineno:59};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.KeyboardListener';
			$pyjs.track.lineno=59;
			$pyjs.track.lineno=60;
			shift = $constant_int_0;
			$pyjs.track.lineno=61;
			ctrl = $constant_int_0;
			$pyjs.track.lineno=62;
			alt = $constant_int_0;
			$pyjs.track.lineno=64;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetShiftKey'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
				$pyjs.track.lineno=65;
				shift = $m['MODIFIER_SHIFT'];
			}
			$pyjs.track.lineno=67;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetCtrlKey'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs.track.lineno=68;
				ctrl = $m['MODIFIER_CTRL'];
			}
			$pyjs.track.lineno=70;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetAltKey'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs.track.lineno=71;
				alt = $m['MODIFIER_ALT'];
			}
			$pyjs.track.lineno=73;
			$pyjs.track.lineno=73;
			var $pyjs__ret = $p['op_bitor']([shift, ctrl, alt]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getKeyboardModifiers'].__name__ = 'getKeyboardModifiers';

		$m['getKeyboardModifiers'].__bind_type__ = 0;
		$m['getKeyboardModifiers'].__args__ = [null,null,['event']];
		$pyjs.track.lineno=76;
		$m['fireKeyboardEvent'] = function(listeners, sender, event) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $iter3_type,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,type,$iter1_array,$iter1_nextval,listener,$iter2_idx,$iter2_nextval,$iter3_array,keycode,$iter1_type,modifiers,$iter1_idx,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs.track={module:'pyjamas.ui.KeyboardListener',lineno:76};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.KeyboardListener';
			$pyjs.track.lineno=76;
			$pyjs.track.lineno=77;
			modifiers = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getKeyboardModifiers'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.track.lineno=78;
			keycode = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetKeyCode'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs.track.lineno=80;
			type = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs.track.lineno=81;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](type, 'keydown'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs.track.lineno=82;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					listener = $iter1_nextval.$nextval;
					$pyjs.track.lineno=83;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onKeyDown'](sender, keycode, modifiers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](type, 'keyup'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs.track.lineno=85;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					listener = $iter2_nextval.$nextval;
					$pyjs.track.lineno=86;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onKeyUp'](sender, keycode, modifiers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](type, 'keypress'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs.track.lineno=88;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					listener = $iter3_nextval.$nextval;
					$pyjs.track.lineno=89;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onKeyPress'](sender, keycode, modifiers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['fireKeyboardEvent'].__name__ = 'fireKeyboardEvent';

		$m['fireKeyboardEvent'].__bind_type__ = 0;
		$m['fireKeyboardEvent'].__args__ = [null,null,['listeners'],['sender'],['event']];
		$pyjs.track.lineno=91;
		$m['KEYBOARD_EVENTS'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list'](['keydown', 'keyup', 'keypress']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
		$pyjs.track.lineno=94;
		$m['KeyboardHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.KeyboardListener';
			$cls_definition.__md5__ = '389c3b78e27003f466da7e05c81b8898';
			$pyjs.track.lineno=96;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.KeyboardListener', lineno:96};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
				$pyjs.track.lineno=96;
				$pyjs.track.lineno=98;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_keyboardListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) : $p['setattr'](self, '_keyboardListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()); 
				$pyjs.track.lineno=99;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['sinkEvents']($p['getattr']($m['Event'], 'KEYEVENTS'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=101;
			$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var type;
				$pyjs.track={module:'pyjamas.ui.KeyboardListener', lineno:101};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
				$pyjs.track.lineno=101;
				$pyjs.track.lineno=102;
				type = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.track.lineno=103;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['list'](['keydown', 'keyup', 'keypress']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})().__contains__(type));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
					$pyjs.track.lineno=104;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fireKeyboardEvent']($p['getattr'](self, '_keyboardListeners'), self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs.track.lineno=106;
			$method = $pyjs__bind_method2('addKeyboardListener', function(listener) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.KeyboardListener', lineno:106};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
				$pyjs.track.lineno=106;
				$pyjs.track.lineno=107;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_keyboardListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addKeyboardListener'] = $method;
			$pyjs.track.lineno=109;
			$method = $pyjs__bind_method2('removeKeyboardListener', function(listener) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.KeyboardListener', lineno:109};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
				$pyjs.track.lineno=109;
				$pyjs.track.lineno=110;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_keyboardListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeKeyboardListener'] = $method;
			$pyjs.track.lineno=112;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.KeyboardListener', lineno:112};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
				$pyjs.track.lineno=112;
				$pyjs.track.lineno=113;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
			$pyjs.track.lineno=115;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.KeyboardListener', lineno:115};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
				$pyjs.track.lineno=115;
				$pyjs.track.lineno=116;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyUp'] = $method;
			$pyjs.track.lineno=118;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '389c3b78e27003f466da7e05c81b8898') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.KeyboardListener', lineno:118};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.KeyboardListener';
				$pyjs.track.lineno=118;
				$pyjs.track.lineno=119;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			$pyjs.track.lineno=94;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('KeyboardHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.KeyboardListener */


/* end module: pyjamas.ui.KeyboardListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
