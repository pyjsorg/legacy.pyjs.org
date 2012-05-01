/* start module: pyjamas.ui.Panel */
$pyjs.loaded_modules['pyjamas.ui.Panel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Panel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Panel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Panel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Panel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Panel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Panel'] = $pyjs.loaded_modules['pyjamas.ui.Panel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.Panel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.Panel.py, line 15:\n    from pyjamas import Factory';
		$m.__track_lines__[16] = 'pyjamas.ui.Panel.py, line 16:\n    from pyjamas import DOM';
		$m.__track_lines__[18] = 'pyjamas.ui.Panel.py, line 18:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[20] = 'pyjamas.ui.Panel.py, line 20:\n    class PanelBase(object):';
		$m.__track_lines__[22] = 'pyjamas.ui.Panel.py, line 22:\n    def clear(self):';
		$m.__track_lines__[26] = 'pyjamas.ui.Panel.py, line 26:\n    children = []';
		$m.__track_lines__[27] = 'pyjamas.ui.Panel.py, line 27:\n    for child in self.__iter__():';
		$m.__track_lines__[28] = 'pyjamas.ui.Panel.py, line 28:\n    children.append(child)';
		$m.__track_lines__[30] = 'pyjamas.ui.Panel.py, line 30:\n    for child in children:';
		$m.__track_lines__[31] = 'pyjamas.ui.Panel.py, line 31:\n    self.remove(child)';
		$m.__track_lines__[33] = 'pyjamas.ui.Panel.py, line 33:\n    def doAttachChildren(self):';
		$m.__track_lines__[34] = 'pyjamas.ui.Panel.py, line 34:\n    for child in self:';
		$m.__track_lines__[35] = 'pyjamas.ui.Panel.py, line 35:\n    child.onAttach()';
		$m.__track_lines__[37] = 'pyjamas.ui.Panel.py, line 37:\n    def doDetachChildren(self):';
		$m.__track_lines__[38] = 'pyjamas.ui.Panel.py, line 38:\n    for child in self:';
		$m.__track_lines__[39] = 'pyjamas.ui.Panel.py, line 39:\n    child.onDetach()';
		$m.__track_lines__[41] = 'pyjamas.ui.Panel.py, line 41:\n    def getWidgetCount(self):';
		$m.__track_lines__[42] = 'pyjamas.ui.Panel.py, line 42:\n    return len(self.getChildren())';
		$m.__track_lines__[44] = 'pyjamas.ui.Panel.py, line 44:\n    def getWidget(self, index):';
		$m.__track_lines__[45] = 'pyjamas.ui.Panel.py, line 45:\n    return self.getChildren()[index]';
		$m.__track_lines__[47] = 'pyjamas.ui.Panel.py, line 47:\n    def getIndexedChild(self, index):';
		$m.__track_lines__[48] = 'pyjamas.ui.Panel.py, line 48:\n    return self.getWidget(index)';
		$m.__track_lines__[50] = 'pyjamas.ui.Panel.py, line 50:\n    def addIndexedItem(self, index, child):';
		$m.__track_lines__[51] = 'pyjamas.ui.Panel.py, line 51:\n    self.add(child)';
		$m.__track_lines__[53] = 'pyjamas.ui.Panel.py, line 53:\n    def getWidgetIndex(self, child):';
		$m.__track_lines__[54] = 'pyjamas.ui.Panel.py, line 54:\n    return self.getChildren().index(child)';
		$m.__track_lines__[56] = 'pyjamas.ui.Panel.py, line 56:\n    def getChildren(self):';
		$m.__track_lines__[57] = 'pyjamas.ui.Panel.py, line 57:\n    return self.children # assumes self.children: override if needed.';
		$m.__track_lines__[59] = 'pyjamas.ui.Panel.py, line 59:\n    def setWidget(self, index, widget):';
		$m.__track_lines__[63] = 'pyjamas.ui.Panel.py, line 63:\n    existing = self.getWidget(index)';
		$m.__track_lines__[64] = 'pyjamas.ui.Panel.py, line 64:\n    if existing is not None:';
		$m.__track_lines__[65] = 'pyjamas.ui.Panel.py, line 65:\n    self.remove(existing)';
		$m.__track_lines__[66] = 'pyjamas.ui.Panel.py, line 66:\n    self.insert(widget, index)';
		$m.__track_lines__[68] = 'pyjamas.ui.Panel.py, line 68:\n    def append(self, widget):';
		$m.__track_lines__[69] = 'pyjamas.ui.Panel.py, line 69:\n    return self.add(widget)';
		$m.__track_lines__[71] = 'pyjamas.ui.Panel.py, line 71:\n    def __setitem__(self, index, widget):';
		$m.__track_lines__[72] = 'pyjamas.ui.Panel.py, line 72:\n    return self.setWidget(index, widget)';
		$m.__track_lines__[74] = 'pyjamas.ui.Panel.py, line 74:\n    def __getitem__(self, index):';
		$m.__track_lines__[75] = 'pyjamas.ui.Panel.py, line 75:\n    return self.getWidget(index)';
		$m.__track_lines__[77] = 'pyjamas.ui.Panel.py, line 77:\n    def __len__(self):';
		$m.__track_lines__[78] = 'pyjamas.ui.Panel.py, line 78:\n    return len(self.getChildren())';
		$m.__track_lines__[80] = 'pyjamas.ui.Panel.py, line 80:\n    def __nonzero__(self):';
		$m.__track_lines__[81] = 'pyjamas.ui.Panel.py, line 81:\n    return self is not None';
		$m.__track_lines__[83] = 'pyjamas.ui.Panel.py, line 83:\n    def __iter__(self):';
		$m.__track_lines__[84] = 'pyjamas.ui.Panel.py, line 84:\n    return self.getChildren().__iter__()';
		$m.__track_lines__[87] = 'pyjamas.ui.Panel.py, line 87:\n    class Panel(PanelBase, Widget):';
		$m.__track_lines__[88] = 'pyjamas.ui.Panel.py, line 88:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[89] = 'pyjamas.ui.Panel.py, line 89:\n    self.children = []';
		$m.__track_lines__[90] = 'pyjamas.ui.Panel.py, line 90:\n    PanelBase.__init__(self)';
		$m.__track_lines__[91] = 'pyjamas.ui.Panel.py, line 91:\n    Widget.__init__(self, **kwargs)';
		$m.__track_lines__[93] = 'pyjamas.ui.Panel.py, line 93:\n    def disown(self, widget):';
		$m.__track_lines__[94] = 'pyjamas.ui.Panel.py, line 94:\n    if widget.getParent() is not self:';
		$m.__track_lines__[95] = 'pyjamas.ui.Panel.py, line 95:\n    raise Exception("widget %s is not a child of this panel %s" % \\';
		$m.__track_lines__[97] = 'pyjamas.ui.Panel.py, line 97:\n    element = widget.getElement()';
		$m.__track_lines__[98] = 'pyjamas.ui.Panel.py, line 98:\n    widget.setParent(None)';
		$m.__track_lines__[99] = 'pyjamas.ui.Panel.py, line 99:\n    parentElement = DOM.getParent(element)';
		$m.__track_lines__[100] = 'pyjamas.ui.Panel.py, line 100:\n    if parentElement is not None:';
		$m.__track_lines__[101] = 'pyjamas.ui.Panel.py, line 101:\n    DOM.removeChild(parentElement, element)';
		$m.__track_lines__[103] = 'pyjamas.ui.Panel.py, line 103:\n    def adopt(self, widget, container):';
		$m.__track_lines__[104] = 'pyjamas.ui.Panel.py, line 104:\n    if container is not None:';
		$m.__track_lines__[105] = 'pyjamas.ui.Panel.py, line 105:\n    widget.removeFromParent()';
		$m.__track_lines__[106] = 'pyjamas.ui.Panel.py, line 106:\n    DOM.appendChild(container, widget.getElement())';
		$m.__track_lines__[107] = 'pyjamas.ui.Panel.py, line 107:\n    widget.setParent(self)';
		$m.__track_lines__[110] = "pyjamas.ui.Panel.py, line 110:\n    Factory.registerClass('pyjamas.ui.Panel', 'Panel', Panel)";


		$pyjs.track.module='pyjamas.ui.Panel';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$m['PanelBase'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Panel';
			$cls_definition.__md5__ = 'abe63f85733d7aca104d7b524908e3c0';
			$pyjs.track.lineno=22;
			$method = $pyjs__bind_method2('clear', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$pyjs__trackstack_size_1,$iter1_iter,$iter2_idx,$iter1_array,child,$iter2_type,children,$iter2_array,$iter1_idx;
				$pyjs.track={module:'pyjamas.ui.Panel', lineno:22};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=22;
				$pyjs.track.lineno=26;
				children = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs.track.lineno=27;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return self['__iter__']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					child = $iter1_nextval.$nextval;
					$pyjs.track.lineno=28;
					(function(){try{try{$pyjs.in_try_except += 1;
					return children['append'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=30;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return children;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					child = $iter2_nextval.$nextval;
					$pyjs.track.lineno=31;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['remove'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$pyjs.track.lineno=33;
			$method = $pyjs__bind_method2('doAttachChildren', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var child,$iter3_idx,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs.track={module:'pyjamas.ui.Panel', lineno:33};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=33;
				$pyjs.track.lineno=34;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return self;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					child = $iter3_nextval.$nextval;
					$pyjs.track.lineno=35;
					(function(){try{try{$pyjs.in_try_except += 1;
					return child['onAttach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['doAttachChildren'] = $method;
			$pyjs.track.lineno=37;
			$method = $pyjs__bind_method2('doDetachChildren', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,$pyjs__trackstack_size_1,$iter4_idx,$iter4_type,child,$iter4_array,$iter4_iter;
				$pyjs.track={module:'pyjamas.ui.Panel', lineno:37};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=37;
				$pyjs.track.lineno=38;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return self;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
					child = $iter4_nextval.$nextval;
					$pyjs.track.lineno=39;
					(function(){try{try{$pyjs.in_try_except += 1;
					return child['onDetach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['doDetachChildren'] = $method;
			$pyjs.track.lineno=41;
			$method = $pyjs__bind_method2('getWidgetCount', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:41};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=41;
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=42;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWidgetCount'] = $method;
			$pyjs.track.lineno=44;
			$method = $pyjs__bind_method2('getWidget', function(index) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:44};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=44;
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=45;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})().__getitem__(index);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getWidget'] = $method;
			$pyjs.track.lineno=47;
			$method = $pyjs__bind_method2('getIndexedChild', function(index) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:47};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=48;
				$pyjs.track.lineno=48;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getIndexedChild'] = $method;
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('addIndexedItem', function(index, child) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					child = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['add'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index'],['child']]);
			$cls_definition['addIndexedItem'] = $method;
			$pyjs.track.lineno=53;
			$method = $pyjs__bind_method2('getWidgetIndex', function(child) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					child = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:53};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=53;
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=54;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['index'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['child']]);
			$cls_definition['getWidgetIndex'] = $method;
			$pyjs.track.lineno=56;
			$method = $pyjs__bind_method2('getChildren', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=57;
				$pyjs.track.lineno=57;
				var $pyjs__ret = $p['getattr'](self, 'children');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getChildren'] = $method;
			$pyjs.track.lineno=59;
			$method = $pyjs__bind_method2('setWidget', function(index, widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					widget = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var existing;
				$pyjs.track={module:'pyjamas.ui.Panel', lineno:59};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=63;
				existing = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.track.lineno=64;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](existing, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs.track.lineno=65;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['remove'](existing);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				$pyjs.track.lineno=66;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['insert'](widget, index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index'],['widget']]);
			$cls_definition['setWidget'] = $method;
			$pyjs.track.lineno=68;
			$method = $pyjs__bind_method2('append', function(widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:68};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=68;
				$pyjs.track.lineno=69;
				$pyjs.track.lineno=69;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['add'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['append'] = $method;
			$pyjs.track.lineno=71;
			$method = $pyjs__bind_method2('__setitem__', function(index, widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					widget = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:71};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=72;
				$pyjs.track.lineno=72;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['setWidget'](index, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['widget']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs.track.lineno=74;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:74};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=74;
				$pyjs.track.lineno=75;
				$pyjs.track.lineno=75;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs.track.lineno=77;
			$method = $pyjs__bind_method2('__len__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:77};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=77;
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=78;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs.track.lineno=80;
			$method = $pyjs__bind_method2('__nonzero__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:80};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=80;
				$pyjs.track.lineno=81;
				$pyjs.track.lineno=81;
				var $pyjs__ret = !$p['op_is'](self, null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__nonzero__'] = $method;
			$pyjs.track.lineno=83;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'abe63f85733d7aca104d7b524908e3c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:83};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=84;
				$pyjs.track.lineno=84;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['__iter__']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=20;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PanelBase', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=87;
		$m['Panel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Panel';
			$cls_definition.__md5__ = '6c97a221a23ac4bfe7d5cc921b76415c';
			$pyjs.track.lineno=88;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6c97a221a23ac4bfe7d5cc921b76415c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:88};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=88;
				$pyjs.track.lineno=89;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('children', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) : $p['setattr'](self, 'children', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()); 
				$pyjs.track.lineno=90;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['PanelBase']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs.track.lineno=91;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=93;
			$method = $pyjs__bind_method2('disown', function(widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6c97a221a23ac4bfe7d5cc921b76415c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var parentElement,element;
				$pyjs.track={module:'pyjamas.ui.Panel', lineno:93};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=93;
				$pyjs.track.lineno=94;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
					$pyjs.track.lineno=95;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['Exception']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('widget %s is not a child of this panel %s', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
					return $p['str'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['str'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
				}
				$pyjs.track.lineno=97;
				element = (function(){try{try{$pyjs.in_try_except += 1;
				return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$pyjs.track.lineno=98;
				(function(){try{try{$pyjs.in_try_except += 1;
				return widget['setParent'](null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$pyjs.track.lineno=99;
				parentElement = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getParent'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				$pyjs.track.lineno=100;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](parentElement, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
					$pyjs.track.lineno=101;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['removeChild'](parentElement, element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['disown'] = $method;
			$pyjs.track.lineno=103;
			$method = $pyjs__bind_method2('adopt', function(widget, container) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					container = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6c97a221a23ac4bfe7d5cc921b76415c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Panel', lineno:103};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Panel';
				$pyjs.track.lineno=103;
				$pyjs.track.lineno=104;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](container, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs.track.lineno=105;
					(function(){try{try{$pyjs.in_try_except += 1;
					return widget['removeFromParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
					$pyjs.track.lineno=106;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['appendChild'](container, (function(){try{try{$pyjs.in_try_except += 1;
					return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				}
				$pyjs.track.lineno=107;
				(function(){try{try{$pyjs.in_try_except += 1;
				return widget['setParent'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container']]);
			$cls_definition['adopt'] = $method;
			$pyjs.track.lineno=87;
			var $bases = new Array($m['PanelBase'],$m['Widget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Panel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=110;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.Panel', 'Panel', $m['Panel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Panel */


/* end module: pyjamas.ui.Panel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget']
*/
