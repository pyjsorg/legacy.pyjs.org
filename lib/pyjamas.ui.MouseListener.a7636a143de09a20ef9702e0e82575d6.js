/* start module: pyjamas.ui.MouseListener */
$pyjs.loaded_modules['pyjamas.ui.MouseListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.MouseListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.MouseListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.MouseListener"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.MouseListener>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MouseListener';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['MouseListener'] = $pyjs.loaded_modules['pyjamas.ui.MouseListener'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.MouseListener.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.MouseListener.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.MouseListener.py, line 16:\n    from pyjamas.ui import Event';
		$m.__track_lines__[17] = 'pyjamas.ui.MouseListener.py, line 17:\n    from pyjamas.EventController import Handler';
		$m.__track_lines__[19] = 'pyjamas.ui.MouseListener.py, line 19:\n    def fireMouseEvent(listeners, sender, event):';
		$m.__track_lines__[20] = 'pyjamas.ui.MouseListener.py, line 20:\n    x = DOM.eventGetClientX(event) - DOM.getAbsoluteLeft(sender.getElement())';
		$m.__track_lines__[21] = 'pyjamas.ui.MouseListener.py, line 21:\n    y = DOM.eventGetClientY(event) - DOM.getAbsoluteTop(sender.getElement())';
		$m.__track_lines__[23] = 'pyjamas.ui.MouseListener.py, line 23:\n    etype = DOM.eventGetType(event)';
		$m.__track_lines__[24] = 'pyjamas.ui.MouseListener.py, line 24:\n    if etype == "mousedown":';
		$m.__track_lines__[25] = 'pyjamas.ui.MouseListener.py, line 25:\n    for listener in listeners:';
		$m.__track_lines__[26] = 'pyjamas.ui.MouseListener.py, line 26:\n    listener.onMouseDown(sender, x, y)';
		$m.__track_lines__[27] = 'pyjamas.ui.MouseListener.py, line 27:\n    return True';
		$m.__track_lines__[29] = 'pyjamas.ui.MouseListener.py, line 29:\n    for listener in listeners:';
		$m.__track_lines__[30] = 'pyjamas.ui.MouseListener.py, line 30:\n    listener.onMouseUp(sender, x, y)';
		$m.__track_lines__[31] = 'pyjamas.ui.MouseListener.py, line 31:\n    return True';
		$m.__track_lines__[33] = 'pyjamas.ui.MouseListener.py, line 33:\n    for listener in listeners:';
		$m.__track_lines__[34] = 'pyjamas.ui.MouseListener.py, line 34:\n    listener.onMouseMove(sender, x, y)';
		$m.__track_lines__[35] = 'pyjamas.ui.MouseListener.py, line 35:\n    return True';
		$m.__track_lines__[37] = 'pyjamas.ui.MouseListener.py, line 37:\n    to_element = DOM.eventGetToElement(event)';
		$m.__track_lines__[38] = 'pyjamas.ui.MouseListener.py, line 38:\n    if to_element and not DOM.isOrHasChild(sender.getElement(), to_element):';
		$m.__track_lines__[39] = 'pyjamas.ui.MouseListener.py, line 39:\n    for listener in listeners:';
		$m.__track_lines__[40] = 'pyjamas.ui.MouseListener.py, line 40:\n    listener.onMouseEnter(sender)';
		$m.__track_lines__[41] = 'pyjamas.ui.MouseListener.py, line 41:\n    return True';
		$m.__track_lines__[43] = 'pyjamas.ui.MouseListener.py, line 43:\n    to_element = DOM.eventGetToElement(event)';
		$m.__track_lines__[44] = 'pyjamas.ui.MouseListener.py, line 44:\n    if to_element and not DOM.isOrHasChild(sender.getElement(), to_element):';
		$m.__track_lines__[45] = 'pyjamas.ui.MouseListener.py, line 45:\n    for listener in listeners:';
		$m.__track_lines__[46] = 'pyjamas.ui.MouseListener.py, line 46:\n    listener.onMouseLeave(sender)';
		$m.__track_lines__[47] = 'pyjamas.ui.MouseListener.py, line 47:\n    return True';
		$m.__track_lines__[48] = 'pyjamas.ui.MouseListener.py, line 48:\n    return False';
		$m.__track_lines__[50] = 'pyjamas.ui.MouseListener.py, line 50:\n    MOUSE_EVENTS = [ "mousedown", "mouseup", "mousemove", "mouseover", "mouseout"]';
		$m.__track_lines__[52] = 'pyjamas.ui.MouseListener.py, line 52:\n    class MouseHandler(object):';
		$m.__track_lines__[54] = 'pyjamas.ui.MouseListener.py, line 54:\n    def __init__(self, preventDefault=False):';
		$m.__track_lines__[56] = 'pyjamas.ui.MouseListener.py, line 56:\n    self._mouseListeners = []';
		$m.__track_lines__[57] = 'pyjamas.ui.MouseListener.py, line 57:\n    self._mousePreventDefault = preventDefault';
		$m.__track_lines__[58] = 'pyjamas.ui.MouseListener.py, line 58:\n    self.sinkEvents( Event.MOUSEEVENTS )';
		$m.__track_lines__[60] = 'pyjamas.ui.MouseListener.py, line 60:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[61] = 'pyjamas.ui.MouseListener.py, line 61:\n    etype = DOM.eventGetType(event)';
		$m.__track_lines__[62] = 'pyjamas.ui.MouseListener.py, line 62:\n    if etype in MOUSE_EVENTS:';
		$m.__track_lines__[63] = 'pyjamas.ui.MouseListener.py, line 63:\n    if self._mousePreventDefault:';
		$m.__track_lines__[64] = 'pyjamas.ui.MouseListener.py, line 64:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[65] = 'pyjamas.ui.MouseListener.py, line 65:\n    return fireMouseEvent(self._mouseListeners, self, event)';
		$m.__track_lines__[66] = 'pyjamas.ui.MouseListener.py, line 66:\n    return False';
		$m.__track_lines__[68] = 'pyjamas.ui.MouseListener.py, line 68:\n    def addMouseListener(self, listener):';
		$m.__track_lines__[69] = 'pyjamas.ui.MouseListener.py, line 69:\n    self._mouseListeners.append(listener)';
		$m.__track_lines__[71] = 'pyjamas.ui.MouseListener.py, line 71:\n    def removeMouseListener(self, listener):';
		$m.__track_lines__[72] = 'pyjamas.ui.MouseListener.py, line 72:\n    self._mouseListeners.remove(listener)';
		$m.__track_lines__[74] = 'pyjamas.ui.MouseListener.py, line 74:\n    def onMouseMove(self, sender, x, y):';
		$m.__track_lines__[75] = 'pyjamas.ui.MouseListener.py, line 75:\n    pass';
		$m.__track_lines__[77] = 'pyjamas.ui.MouseListener.py, line 77:\n    def onMouseDown(self, sender, x, y):';
		$m.__track_lines__[78] = 'pyjamas.ui.MouseListener.py, line 78:\n    pass';
		$m.__track_lines__[80] = 'pyjamas.ui.MouseListener.py, line 80:\n    def onMouseUp(self, sender, x, y):';
		$m.__track_lines__[81] = 'pyjamas.ui.MouseListener.py, line 81:\n    pass';
		$m.__track_lines__[83] = 'pyjamas.ui.MouseListener.py, line 83:\n    def onMouseEnter(self, sender):';
		$m.__track_lines__[84] = 'pyjamas.ui.MouseListener.py, line 84:\n    pass';
		$m.__track_lines__[86] = 'pyjamas.ui.MouseListener.py, line 86:\n    def onMouseLeave(self, sender):';
		$m.__track_lines__[87] = 'pyjamas.ui.MouseListener.py, line 87:\n    pass';
		$m.__track_lines__[89] = 'pyjamas.ui.MouseListener.py, line 89:\n    def onMouseGlassEnter(self, sender):';
		$m.__track_lines__[90] = 'pyjamas.ui.MouseListener.py, line 90:\n    pass';
		$m.__track_lines__[92] = 'pyjamas.ui.MouseListener.py, line 92:\n    def onMouseGlassLeave(self, sender):';
		$m.__track_lines__[93] = 'pyjamas.ui.MouseListener.py, line 93:\n    pass';
		$m.__track_lines__[95] = 'pyjamas.ui.MouseListener.py, line 95:\n    class MouseWheelHandler(object):';
		$m.__track_lines__[97] = 'pyjamas.ui.MouseListener.py, line 97:\n    def __init__(self, preventDefault=False):';
		$m.__track_lines__[99] = 'pyjamas.ui.MouseListener.py, line 99:\n    self._mouseWheelListeners = []';
		$m.__track_lines__[100] = 'pyjamas.ui.MouseListener.py, line 100:\n    self._mouseWheelPreventDefault = preventDefault';
		$m.__track_lines__[101] = 'pyjamas.ui.MouseListener.py, line 101:\n    self.sinkEvents( Event.ONMOUSEWHEEL )';
		$m.__track_lines__[103] = 'pyjamas.ui.MouseListener.py, line 103:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[104] = 'pyjamas.ui.MouseListener.py, line 104:\n    etype = DOM.eventGetType(event)';
		$m.__track_lines__[105] = 'pyjamas.ui.MouseListener.py, line 105:\n    if etype == "mousewheel":';
		$m.__track_lines__[106] = 'pyjamas.ui.MouseListener.py, line 106:\n    if self._mouseWheelPreventDefault:';
		$m.__track_lines__[107] = 'pyjamas.ui.MouseListener.py, line 107:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[108] = 'pyjamas.ui.MouseListener.py, line 108:\n    velocity = DOM.eventGetMouseWheelVelocityY(event)';
		$m.__track_lines__[109] = 'pyjamas.ui.MouseListener.py, line 109:\n    for listener in self._mouseWheelListeners:';
		$m.__track_lines__[110] = 'pyjamas.ui.MouseListener.py, line 110:\n    listener.onMouseWheel(self, velocity)';
		$m.__track_lines__[111] = 'pyjamas.ui.MouseListener.py, line 111:\n    return True';
		$m.__track_lines__[113] = 'pyjamas.ui.MouseListener.py, line 113:\n    def addMouseWheelListener(self, listener):';
		$m.__track_lines__[114] = 'pyjamas.ui.MouseListener.py, line 114:\n    self._mouseWheelListeners.append(listener)';
		$m.__track_lines__[116] = 'pyjamas.ui.MouseListener.py, line 116:\n    def removeMouseWheelListener(self, listener):';
		$m.__track_lines__[117] = 'pyjamas.ui.MouseListener.py, line 117:\n    self._mouseWheelListeners.remove(listener)';
		$m.__track_lines__[119] = 'pyjamas.ui.MouseListener.py, line 119:\n    def onMouseWheel(self, sender, velocity):';
		$m.__track_lines__[120] = 'pyjamas.ui.MouseListener.py, line 120:\n    pass';


		$pyjs.track.module='pyjamas.ui.MouseListener';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=17;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Handler'] = $p['___import___']('pyjamas.EventController.Handler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$m['fireMouseEvent'] = function(listeners, sender, event) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $iter5_nextval,$iter5_array,$iter3_array,$iter1_iter,$iter5_iter,to_element,$iter4_type,$iter5_type,$iter2_type,$iter4_iter,$iter4_array,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,$iter1_array,$iter5_idx,etype,$sub2,$sub1,$sub4,$iter1_nextval,$and1,$and2,$and3,$and4,listener,$sub3,$iter2_idx,$iter3_type,$iter1_type,$iter2_nextval,$iter4_nextval,$iter4_idx,$iter1_idx,$pyjs__trackstack_size_1,y,x,$iter2_array;
			$pyjs.track={module:'pyjamas.ui.MouseListener',lineno:19};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.MouseListener';
			$pyjs.track.lineno=19;
			$pyjs.track.lineno=20;
			x = $p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetClientX'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(),$sub2=(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['getAbsoluteLeft']((function(){try{try{$pyjs.in_try_except += 1;
			return sender['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
			$pyjs.track.lineno=21;
			y = $p['__op_sub']($sub3=(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetClientY'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(),$sub4=(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['getAbsoluteTop']((function(){try{try{$pyjs.in_try_except += 1;
			return sender['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
			$pyjs.track.lineno=23;
			etype = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs.track.lineno=24;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'mousedown'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
				$pyjs.track.lineno=25;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					listener = $iter1_nextval.$nextval;
					$pyjs.track.lineno=26;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onMouseDown'](sender, x, y);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=27;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'mouseup'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs.track.lineno=29;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					listener = $iter2_nextval.$nextval;
					$pyjs.track.lineno=30;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onMouseUp'](sender, x, y);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=31;
				$pyjs.track.lineno=31;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'mousemove'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs.track.lineno=33;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					listener = $iter3_nextval.$nextval;
					$pyjs.track.lineno=34;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onMouseMove'](sender, x, y);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=35;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'mouseover'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs.track.lineno=37;
				to_element = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetToElement'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.track.lineno=38;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and1=to_element)?!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['isOrHasChild']((function(){try{try{$pyjs.in_try_except += 1;
				return sender['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})(), to_element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs.track.lineno=39;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
						listener = $iter4_nextval.$nextval;
						$pyjs.track.lineno=40;
						(function(){try{try{$pyjs.in_try_except += 1;
						return listener['onMouseEnter'](sender);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.ui.MouseListener';
				}
				$pyjs.track.lineno=41;
				$pyjs.track.lineno=41;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'mouseout'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs.track.lineno=43;
				to_element = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetToElement'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs.track.lineno=44;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and3=to_element)?!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['isOrHasChild']((function(){try{try{$pyjs.in_try_except += 1;
				return sender['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), to_element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()):$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
					$pyjs.track.lineno=45;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
						listener = $iter5_nextval.$nextval;
						$pyjs.track.lineno=46;
						(function(){try{try{$pyjs.in_try_except += 1;
						return listener['onMouseLeave'](sender);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.ui.MouseListener';
				}
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=47;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=48;
			var $pyjs__ret = false;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['fireMouseEvent'].__name__ = 'fireMouseEvent';

		$m['fireMouseEvent'].__bind_type__ = 0;
		$m['fireMouseEvent'].__args__ = [null,null,['listeners'],['sender'],['event']];
		$pyjs.track.lineno=50;
		$m['MOUSE_EVENTS'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list'](['mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs.track.lineno=52;
		$m['MouseHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.MouseListener';
			$cls_definition.__md5__ = 'f819dcb31a2aeb75f2a90af350b948cd';
			$pyjs.track.lineno=54;
			$method = $pyjs__bind_method2('__init__', function(preventDefault) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					preventDefault = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof preventDefault == 'undefined') preventDefault=arguments.callee.__args__[3][1];

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:54};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=56;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_mouseListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) : $p['setattr'](self, '_mouseListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()); 
				$pyjs.track.lineno=57;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_mousePreventDefault', preventDefault) : $p['setattr'](self, '_mousePreventDefault', preventDefault); 
				$pyjs.track.lineno=58;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['sinkEvents']($p['getattr']($m['Event'], 'MOUSEEVENTS'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['preventDefault', false]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=60;
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
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var etype;
				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:60};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=61;
				etype = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs.track.lineno=62;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($m['MOUSE_EVENTS'].__contains__(etype));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
					$pyjs.track.lineno=63;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['getattr'](self, '_mousePreventDefault'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
						$pyjs.track.lineno=64;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['eventPreventDefault'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
					}
					$pyjs.track.lineno=65;
					$pyjs.track.lineno=65;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['fireMouseEvent']($p['getattr'](self, '_mouseListeners'), self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=66;
				$pyjs.track.lineno=66;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs.track.lineno=68;
			$method = $pyjs__bind_method2('addMouseListener', function(listener) {
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
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:68};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=68;
				$pyjs.track.lineno=69;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_mouseListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addMouseListener'] = $method;
			$pyjs.track.lineno=71;
			$method = $pyjs__bind_method2('removeMouseListener', function(listener) {
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
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:71};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=72;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_mouseListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeMouseListener'] = $method;
			$pyjs.track.lineno=74;
			$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:74};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=74;
				$pyjs.track.lineno=75;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
			$pyjs.track.lineno=77;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:77};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=77;
				$pyjs.track.lineno=78;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$pyjs.track.lineno=80;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:80};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=80;
				$pyjs.track.lineno=81;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$pyjs.track.lineno=83;
			$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:83};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=84;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseEnter'] = $method;
			$pyjs.track.lineno=86;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:86};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=86;
				$pyjs.track.lineno=87;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			$pyjs.track.lineno=89;
			$method = $pyjs__bind_method2('onMouseGlassEnter', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:89};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=89;
				$pyjs.track.lineno=90;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseGlassEnter'] = $method;
			$pyjs.track.lineno=92;
			$method = $pyjs__bind_method2('onMouseGlassLeave', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f819dcb31a2aeb75f2a90af350b948cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:92};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=92;
				$pyjs.track.lineno=93;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseGlassLeave'] = $method;
			$pyjs.track.lineno=52;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MouseHandler', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=95;
		$m['MouseWheelHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.MouseListener';
			$cls_definition.__md5__ = 'a1822cfd81a4c3f4435b6dfab301215a';
			$pyjs.track.lineno=97;
			$method = $pyjs__bind_method2('__init__', function(preventDefault) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					preventDefault = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof preventDefault == 'undefined') preventDefault=arguments.callee.__args__[3][1];

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:97};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=97;
				$pyjs.track.lineno=99;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_mouseWheelListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) : $p['setattr'](self, '_mouseWheelListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()); 
				$pyjs.track.lineno=100;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_mouseWheelPreventDefault', preventDefault) : $p['setattr'](self, '_mouseWheelPreventDefault', preventDefault); 
				$pyjs.track.lineno=101;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['sinkEvents']($p['getattr']($m['Event'], 'ONMOUSEWHEEL'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['preventDefault', false]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=103;
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
					if (self.prototype.__md5__ !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,listener,$iter6_array,$pyjs__trackstack_size_1,etype,velocity,$iter6_iter,$iter6_nextval;
				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:103};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=103;
				$pyjs.track.lineno=104;
				etype = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				$pyjs.track.lineno=105;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](etype, 'mousewheel'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs.track.lineno=106;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['getattr'](self, '_mouseWheelPreventDefault'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
						$pyjs.track.lineno=107;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['eventPreventDefault'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
					}
					$pyjs.track.lineno=108;
					velocity = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['eventGetMouseWheelVelocityY'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
					$pyjs.track.lineno=109;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter6_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, '_mouseWheelListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
						listener = $iter6_nextval.$nextval;
						$pyjs.track.lineno=110;
						(function(){try{try{$pyjs.in_try_except += 1;
						return listener['onMouseWheel'](self, velocity);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.ui.MouseListener';
					$pyjs.track.lineno=111;
					$pyjs.track.lineno=111;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs.track.lineno=113;
			$method = $pyjs__bind_method2('addMouseWheelListener', function(listener) {
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
					if (self.prototype.__md5__ !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:113};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=113;
				$pyjs.track.lineno=114;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_mouseWheelListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addMouseWheelListener'] = $method;
			$pyjs.track.lineno=116;
			$method = $pyjs__bind_method2('removeMouseWheelListener', function(listener) {
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
					if (self.prototype.__md5__ !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:116};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=116;
				$pyjs.track.lineno=117;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_mouseWheelListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeMouseWheelListener'] = $method;
			$pyjs.track.lineno=119;
			$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a1822cfd81a4c3f4435b6dfab301215a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.MouseListener', lineno:119};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.MouseListener';
				$pyjs.track.lineno=119;
				$pyjs.track.lineno=120;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['onMouseWheel'] = $method;
			$pyjs.track.lineno=95;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MouseWheelHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.MouseListener */


/* end module: pyjamas.ui.MouseListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.EventController.Handler', 'pyjamas.EventController']
*/
