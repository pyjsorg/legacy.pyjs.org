/* start module: pyjamas.ui.DropHandler */
$pyjs.loaded_modules['pyjamas.ui.DropHandler'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DropHandler'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DropHandler'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.DropHandler"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.DropHandler>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DropHandler';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['DropHandler'] = $pyjs.loaded_modules['pyjamas.ui.DropHandler'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.DropHandler.py, line 1:\n    # Copyright (C) 2010 Jim Washington';
		$m.__track_lines__[15] = 'pyjamas.ui.DropHandler.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.DropHandler.py, line 16:\n    from pyjamas.ui import Event';
		$m.__track_lines__[18] = 'pyjamas.ui.DropHandler.py, line 18:\n    DROP_EVENTS = [ "dragenter", "dragover", "dragleave", "drop"]';
		$m.__track_lines__[20] = 'pyjamas.ui.DropHandler.py, line 20:\n    def fireDropEvent(listeners, event):';
		$m.__track_lines__[21] = 'pyjamas.ui.DropHandler.py, line 21:\n    etype = DOM.eventGetType(event)';
		$m.__track_lines__[22] = 'pyjamas.ui.DropHandler.py, line 22:\n    if etype == "dragenter":';
		$m.__track_lines__[23] = 'pyjamas.ui.DropHandler.py, line 23:\n    for listener in listeners:';
		$m.__track_lines__[24] = 'pyjamas.ui.DropHandler.py, line 24:\n    listener.onDragEnter(event)';
		$m.__track_lines__[25] = 'pyjamas.ui.DropHandler.py, line 25:\n    return True';
		$m.__track_lines__[27] = 'pyjamas.ui.DropHandler.py, line 27:\n    for listener in listeners:';
		$m.__track_lines__[28] = 'pyjamas.ui.DropHandler.py, line 28:\n    listener.onDragOver(event)';
		$m.__track_lines__[29] = 'pyjamas.ui.DropHandler.py, line 29:\n    return True';
		$m.__track_lines__[31] = 'pyjamas.ui.DropHandler.py, line 31:\n    for listener in listeners:';
		$m.__track_lines__[32] = 'pyjamas.ui.DropHandler.py, line 32:\n    listener.onDragLeave(event)';
		$m.__track_lines__[33] = 'pyjamas.ui.DropHandler.py, line 33:\n    return True';
		$m.__track_lines__[35] = 'pyjamas.ui.DropHandler.py, line 35:\n    for listener in listeners:';
		$m.__track_lines__[36] = 'pyjamas.ui.DropHandler.py, line 36:\n    listener.onDrop(event)';
		$m.__track_lines__[37] = 'pyjamas.ui.DropHandler.py, line 37:\n    return True';
		$m.__track_lines__[38] = 'pyjamas.ui.DropHandler.py, line 38:\n    return False';
		$m.__track_lines__[41] = 'pyjamas.ui.DropHandler.py, line 41:\n    class DropHandler(object):';
		$m.__track_lines__[43] = 'pyjamas.ui.DropHandler.py, line 43:\n    def __init__(self):';
		$m.__track_lines__[44] = 'pyjamas.ui.DropHandler.py, line 44:\n    self._dropListeners = []';
		$m.__track_lines__[45] = 'pyjamas.ui.DropHandler.py, line 45:\n    self.sinkEvents(Event.DROPEVENTS)';
		$m.__track_lines__[47] = 'pyjamas.ui.DropHandler.py, line 47:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[48] = 'pyjamas.ui.DropHandler.py, line 48:\n    event_type = DOM.eventGetType(event)';
		$m.__track_lines__[49] = 'pyjamas.ui.DropHandler.py, line 49:\n    if event_type in DROP_EVENTS:';
		$m.__track_lines__[50] = 'pyjamas.ui.DropHandler.py, line 50:\n    return fireDropEvent(self._dropListeners, event)';
		$m.__track_lines__[51] = 'pyjamas.ui.DropHandler.py, line 51:\n    return False';
		$m.__track_lines__[53] = 'pyjamas.ui.DropHandler.py, line 53:\n    def addDropListener(self, listener):';
		$m.__track_lines__[54] = 'pyjamas.ui.DropHandler.py, line 54:\n    self._dropListeners.append(listener)';
		$m.__track_lines__[56] = 'pyjamas.ui.DropHandler.py, line 56:\n    def removeDropListener(self, listener):';
		$m.__track_lines__[57] = 'pyjamas.ui.DropHandler.py, line 57:\n    self._dropListeners.remove(listener)';
		$m.__track_lines__[59] = 'pyjamas.ui.DropHandler.py, line 59:\n    def onDragEnter(self,event):';
		$m.__track_lines__[71] = 'pyjamas.ui.DropHandler.py, line 71:\n    pass';
		$m.__track_lines__[73] = 'pyjamas.ui.DropHandler.py, line 73:\n    def onDragOver(self,event):';
		$m.__track_lines__[87] = 'pyjamas.ui.DropHandler.py, line 87:\n    pass';
		$m.__track_lines__[89] = 'pyjamas.ui.DropHandler.py, line 89:\n    def onDragLeave(self,event):';
		$m.__track_lines__[93] = 'pyjamas.ui.DropHandler.py, line 93:\n    pass';
		$m.__track_lines__[95] = 'pyjamas.ui.DropHandler.py, line 95:\n    def onDrop(self,event):';
		$m.__track_lines__[100] = 'pyjamas.ui.DropHandler.py, line 100:\n    pass';


		$pyjs.track.module='pyjamas.ui.DropHandler';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$m['DROP_EVENTS'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list'](['dragenter', 'dragover', 'dragleave', 'drop']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=20;
		$m['fireDropEvent'] = function(listeners, event) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $iter3_type,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,etype,$iter1_array,$iter1_nextval,listener,$iter2_idx,$iter3_array,$iter2_nextval,$iter1_type,$iter4_nextval,$iter4_idx,$iter1_idx,$pyjs__trackstack_size_1,$iter4_array,$iter2_array;
			$pyjs.track={module:'pyjamas.ui.DropHandler',lineno:20};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.DropHandler';
			$pyjs.track.lineno=20;
			$pyjs.track.lineno=21;
			etype = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=22;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'dragenter'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
				$pyjs.track.lineno=23;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					listener = $iter1_nextval.$nextval;
					$pyjs.track.lineno=24;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onDragEnter'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=25;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'dragover'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs.track.lineno=27;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					listener = $iter2_nextval.$nextval;
					$pyjs.track.lineno=28;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onDragOver'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=29;
				$pyjs.track.lineno=29;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'dragleave'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs.track.lineno=31;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					listener = $iter3_nextval.$nextval;
					$pyjs.track.lineno=32;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onDragLeave'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=33;
				$pyjs.track.lineno=33;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](etype, 'drop'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
				$pyjs.track.lineno=35;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return listeners;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
					listener = $iter4_nextval.$nextval;
					$pyjs.track.lineno=36;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onDrop'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=37;
				$pyjs.track.lineno=37;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=38;
			$pyjs.track.lineno=38;
			var $pyjs__ret = false;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['fireDropEvent'].__name__ = 'fireDropEvent';

		$m['fireDropEvent'].__bind_type__ = 0;
		$m['fireDropEvent'].__args__ = [null,null,['listeners'],['event']];
		$pyjs.track.lineno=41;
		$m['DropHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DropHandler';
			$cls_definition.__md5__ = '57ef5bc3d87d32a8b9dd276524652040';
			$pyjs.track.lineno=43;
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
					if (self.prototype.__md5__ !== '57ef5bc3d87d32a8b9dd276524652040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DropHandler', lineno:43};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=44;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_dropListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) : $p['setattr'](self, '_dropListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()); 
				$pyjs.track.lineno=45;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['sinkEvents']($p['getattr']($m['Event'], 'DROPEVENTS'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=47;
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
					if (self.prototype.__md5__ !== '57ef5bc3d87d32a8b9dd276524652040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event_type;
				$pyjs.track={module:'pyjamas.ui.DropHandler', lineno:47};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=48;
				event_type = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.track.lineno=49;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($m['DROP_EVENTS'].__contains__(event_type));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
					$pyjs.track.lineno=50;
					$pyjs.track.lineno=50;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['fireDropEvent']($p['getattr'](self, '_dropListeners'), event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=51;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs.track.lineno=53;
			$method = $pyjs__bind_method2('addDropListener', function(listener) {
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
					if (self.prototype.__md5__ !== '57ef5bc3d87d32a8b9dd276524652040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DropHandler', lineno:53};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=53;
				$pyjs.track.lineno=54;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_dropListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addDropListener'] = $method;
			$pyjs.track.lineno=56;
			$method = $pyjs__bind_method2('removeDropListener', function(listener) {
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
					if (self.prototype.__md5__ !== '57ef5bc3d87d32a8b9dd276524652040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DropHandler', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=57;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_dropListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeDropListener'] = $method;
			$pyjs.track.lineno=59;
			$method = $pyjs__bind_method2('onDragEnter', function(event) {
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
					if (self.prototype.__md5__ !== '57ef5bc3d87d32a8b9dd276524652040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DropHandler', lineno:59};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=71;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnter'] = $method;
			$pyjs.track.lineno=73;
			$method = $pyjs__bind_method2('onDragOver', function(event) {
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
					if (self.prototype.__md5__ !== '57ef5bc3d87d32a8b9dd276524652040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DropHandler', lineno:73};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=73;
				$pyjs.track.lineno=87;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragOver'] = $method;
			$pyjs.track.lineno=89;
			$method = $pyjs__bind_method2('onDragLeave', function(event) {
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
					if (self.prototype.__md5__ !== '57ef5bc3d87d32a8b9dd276524652040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DropHandler', lineno:89};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=89;
				$pyjs.track.lineno=93;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragLeave'] = $method;
			$pyjs.track.lineno=95;
			$method = $pyjs__bind_method2('onDrop', function(event) {
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
					if (self.prototype.__md5__ !== '57ef5bc3d87d32a8b9dd276524652040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DropHandler', lineno:95};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DropHandler';
				$pyjs.track.lineno=95;
				$pyjs.track.lineno=100;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrop'] = $method;
			$pyjs.track.lineno=41;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DropHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DropHandler */


/* end module: pyjamas.ui.DropHandler */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
