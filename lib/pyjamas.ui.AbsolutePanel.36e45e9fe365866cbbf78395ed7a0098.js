/* start module: pyjamas.ui.AbsolutePanel */
$pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.AbsolutePanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.AbsolutePanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['AbsolutePanel'] = $pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.AbsolutePanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.AbsolutePanel.py, line 15:\n    from pyjamas import Factory';
		$m.__track_lines__[16] = 'pyjamas.ui.AbsolutePanel.py, line 16:\n    from pyjamas import DOM';
		$m.__track_lines__[18] = 'pyjamas.ui.AbsolutePanel.py, line 18:\n    from pyjamas.ui.ComplexPanel import ComplexPanel';
		$m.__track_lines__[20] = 'pyjamas.ui.AbsolutePanel.py, line 20:\n    class AbsolutePanel(ComplexPanel):';
		$m.__track_lines__[22] = 'pyjamas.ui.AbsolutePanel.py, line 22:\n    def __init__(self, **ka):';
		$m.__track_lines__[23] = "pyjamas.ui.AbsolutePanel.py, line 23:\n    element = ka.pop('Element', None) or DOM.createDiv()";
		$m.__track_lines__[24] = 'pyjamas.ui.AbsolutePanel.py, line 24:\n    self.setElement(element)';
		$m.__track_lines__[25] = 'pyjamas.ui.AbsolutePanel.py, line 25:\n    DOM.setStyleAttribute(element, "position", "relative")';
		$m.__track_lines__[26] = 'pyjamas.ui.AbsolutePanel.py, line 26:\n    DOM.setStyleAttribute(element, "overflow", "hidden")';
		$m.__track_lines__[27] = 'pyjamas.ui.AbsolutePanel.py, line 27:\n    ComplexPanel.__init__(self, **ka)';
		$m.__track_lines__[29] = 'pyjamas.ui.AbsolutePanel.py, line 29:\n    def add(self, widget, left=None, top=None):';
		$m.__track_lines__[30] = 'pyjamas.ui.AbsolutePanel.py, line 30:\n    ComplexPanel.add(self, widget, self.getElement())';
		$m.__track_lines__[32] = 'pyjamas.ui.AbsolutePanel.py, line 32:\n    if left is not None:';
		$m.__track_lines__[33] = 'pyjamas.ui.AbsolutePanel.py, line 33:\n    self.setWidgetPosition(widget, left, top)';
		$m.__track_lines__[35] = 'pyjamas.ui.AbsolutePanel.py, line 35:\n    def setWidgetPosition(self, widget, left, top):';
		$m.__track_lines__[36] = 'pyjamas.ui.AbsolutePanel.py, line 36:\n    self.checkWidgetParent(widget)';
		$m.__track_lines__[38] = 'pyjamas.ui.AbsolutePanel.py, line 38:\n    h = widget.getElement()';
		$m.__track_lines__[39] = 'pyjamas.ui.AbsolutePanel.py, line 39:\n    if (left == -1) and (top == -1):';
		$m.__track_lines__[40] = 'pyjamas.ui.AbsolutePanel.py, line 40:\n    DOM.setStyleAttribute(h, "left", "")';
		$m.__track_lines__[41] = 'pyjamas.ui.AbsolutePanel.py, line 41:\n    DOM.setStyleAttribute(h, "top", "")';
		$m.__track_lines__[42] = 'pyjamas.ui.AbsolutePanel.py, line 42:\n    DOM.setStyleAttribute(h, "position", "static")';
		$m.__track_lines__[44] = 'pyjamas.ui.AbsolutePanel.py, line 44:\n    DOM.setStyleAttribute(h, "position", "absolute")';
		$m.__track_lines__[45] = 'pyjamas.ui.AbsolutePanel.py, line 45:\n    DOM.setStyleAttribute(h, "left", "%dpx" % left)';
		$m.__track_lines__[46] = 'pyjamas.ui.AbsolutePanel.py, line 46:\n    DOM.setStyleAttribute(h, "top", "%dpx" % top)';
		$m.__track_lines__[48] = 'pyjamas.ui.AbsolutePanel.py, line 48:\n    def getWidgetLeft(self, widget):';
		$m.__track_lines__[49] = 'pyjamas.ui.AbsolutePanel.py, line 49:\n    self.checkWidgetParent(widget)';
		$m.__track_lines__[50] = 'pyjamas.ui.AbsolutePanel.py, line 50:\n    return DOM.getIntAttribute(widget.getElement(), "offsetLeft")';
		$m.__track_lines__[52] = 'pyjamas.ui.AbsolutePanel.py, line 52:\n    def getWidgetTop(self, widget):';
		$m.__track_lines__[53] = 'pyjamas.ui.AbsolutePanel.py, line 53:\n    self.checkWidgetParent(widget)';
		$m.__track_lines__[54] = 'pyjamas.ui.AbsolutePanel.py, line 54:\n    return DOM.getIntAttribute(widget.getElement(), "offsetTop")';
		$m.__track_lines__[56] = 'pyjamas.ui.AbsolutePanel.py, line 56:\n    def checkWidgetParent(self, widget):';
		$m.__track_lines__[57] = 'pyjamas.ui.AbsolutePanel.py, line 57:\n    if widget.getParent() != self:';
		$m.__track_lines__[58] = 'pyjamas.ui.AbsolutePanel.py, line 58:\n    raise Exception("Widget must be a child of this panel.")';
		$m.__track_lines__[60] = "pyjamas.ui.AbsolutePanel.py, line 60:\n    Factory.registerClass('pyjamas.ui.AbsolutePanel', 'AbsolutePanel', AbsolutePanel)";

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='pyjamas.ui.AbsolutePanel';
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
		$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$m['AbsolutePanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.AbsolutePanel';
			$cls_definition.__md5__ = 'f5d121ee3b088466fa60a710c87cc0de';
			$pyjs.track.lineno=22;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var ka = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
						var ka = arguments[arguments.length+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					var ka = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
						ka = arguments[arguments.length+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f5d121ee3b088466fa60a710c87cc0de') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ka == 'undefined') {
					ka = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							ka = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var element,$or1,$or2;
				$pyjs.track={module:'pyjamas.ui.AbsolutePanel', lineno:22};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.AbsolutePanel';
				$pyjs.track.lineno=22;
				$pyjs.track.lineno=23;
				element = ($p['bool']($or1=(function(){try{try{$pyjs.in_try_except += 1;
				return ka['pop']('Element', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})())?$or1:(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
				$pyjs.track.lineno=24;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setElement'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.track.lineno=25;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setStyleAttribute'](element, 'position', 'relative');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=26;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setStyleAttribute'](element, 'overflow', 'hidden');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs.track.lineno=27;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, ka, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['ka'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=29;
			$method = $pyjs__bind_method2('add', function(widget, left, top) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					left = arguments[2];
					top = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f5d121ee3b088466fa60a710c87cc0de') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof left == 'undefined') left=arguments.callee.__args__[4][1];
				if (typeof top == 'undefined') top=arguments.callee.__args__[5][1];

				$pyjs.track={module:'pyjamas.ui.AbsolutePanel', lineno:29};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.AbsolutePanel';
				$pyjs.track.lineno=29;
				$pyjs.track.lineno=30;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['ComplexPanel']['add'](self, widget, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.track.lineno=32;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](left, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs.track.lineno=33;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['setWidgetPosition'](widget, left, top);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['left', null],['top', null]]);
			$cls_definition['add'] = $method;
			$pyjs.track.lineno=35;
			$method = $pyjs__bind_method2('setWidgetPosition', function(widget, left, top) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					left = arguments[2];
					top = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f5d121ee3b088466fa60a710c87cc0de') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var h,$and2,$and1;
				$pyjs.track={module:'pyjamas.ui.AbsolutePanel', lineno:35};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.AbsolutePanel';
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=36;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['checkWidgetParent'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=38;
				h = (function(){try{try{$pyjs.in_try_except += 1;
				return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.track.lineno=39;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and1=$p['op_eq'](left, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))))?$p['op_eq'](top, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
					$pyjs.track.lineno=40;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute'](h, 'left', '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
					$pyjs.track.lineno=41;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute'](h, 'top', '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
					$pyjs.track.lineno=42;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute'](h, 'position', 'static');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				}
				else {
					$pyjs.track.lineno=44;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute'](h, 'position', 'absolute');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
					$pyjs.track.lineno=45;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute'](h, 'left', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('%dpx', left);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
					$pyjs.track.lineno=46;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute'](h, 'top', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('%dpx', top);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['left'],['top']]);
			$cls_definition['setWidgetPosition'] = $method;
			$pyjs.track.lineno=48;
			$method = $pyjs__bind_method2('getWidgetLeft', function(widget) {
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
					if (self.prototype.__md5__ !== 'f5d121ee3b088466fa60a710c87cc0de') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.AbsolutePanel', lineno:48};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.AbsolutePanel';
				$pyjs.track.lineno=48;
				$pyjs.track.lineno=49;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['checkWidgetParent'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=50;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getIntAttribute']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), 'offsetLeft');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getWidgetLeft'] = $method;
			$pyjs.track.lineno=52;
			$method = $pyjs__bind_method2('getWidgetTop', function(widget) {
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
					if (self.prototype.__md5__ !== 'f5d121ee3b088466fa60a710c87cc0de') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.AbsolutePanel', lineno:52};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.AbsolutePanel';
				$pyjs.track.lineno=52;
				$pyjs.track.lineno=53;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['checkWidgetParent'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=54;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getIntAttribute']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), 'offsetTop');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getWidgetTop'] = $method;
			$pyjs.track.lineno=56;
			$method = $pyjs__bind_method2('checkWidgetParent', function(widget) {
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
					if (self.prototype.__md5__ !== 'f5d121ee3b088466fa60a710c87cc0de') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.AbsolutePanel', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.AbsolutePanel';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=57;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs.track.lineno=58;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['Exception']('Widget must be a child of this panel.');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['checkWidgetParent'] = $method;
			$pyjs.track.lineno=20;
			var $bases = new Array($m['ComplexPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AbsolutePanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=60;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.AbsolutePanel', 'AbsolutePanel', $m['AbsolutePanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.AbsolutePanel */


/* end module: pyjamas.ui.AbsolutePanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel']
*/
