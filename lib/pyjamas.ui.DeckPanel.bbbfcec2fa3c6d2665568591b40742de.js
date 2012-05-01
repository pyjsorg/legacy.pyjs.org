/* start module: pyjamas.ui.DeckPanel */
$pyjs.loaded_modules['pyjamas.ui.DeckPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DeckPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DeckPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.DeckPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.DeckPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DeckPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['DeckPanel'] = $pyjs.loaded_modules['pyjamas.ui.DeckPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.DeckPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[16] = 'pyjamas.ui.DeckPanel.py, line 16:\n    from pyjamas import DOM';
		$m.__track_lines__[17] = 'pyjamas.ui.DeckPanel.py, line 17:\n    from pyjamas import Factory';
		$m.__track_lines__[19] = 'pyjamas.ui.DeckPanel.py, line 19:\n    from pyjamas.ui.ComplexPanel import ComplexPanel';
		$m.__track_lines__[21] = 'pyjamas.ui.DeckPanel.py, line 21:\n    class DeckPanel(ComplexPanel):';
		$m.__track_lines__[22] = 'pyjamas.ui.DeckPanel.py, line 22:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[23] = 'pyjamas.ui.DeckPanel.py, line 23:\n    self.visibleWidget = None';
		$m.__track_lines__[24] = "pyjamas.ui.DeckPanel.py, line 24:\n    if kwargs.has_key('Element'):";
		$m.__track_lines__[25] = "pyjamas.ui.DeckPanel.py, line 25:\n    element = kwargs.pop('Element')";
		$m.__track_lines__[27] = 'pyjamas.ui.DeckPanel.py, line 27:\n    element = DOM.createDiv()';
		$m.__track_lines__[28] = 'pyjamas.ui.DeckPanel.py, line 28:\n    self.setElement(element)';
		$m.__track_lines__[29] = 'pyjamas.ui.DeckPanel.py, line 29:\n    ComplexPanel.__init__(self, **kwargs)';
		$m.__track_lines__[31] = 'pyjamas.ui.DeckPanel.py, line 31:\n    def add(self, widget):';
		$m.__track_lines__[32] = 'pyjamas.ui.DeckPanel.py, line 32:\n    self.insert(widget, self.getWidgetCount())';
		$m.__track_lines__[34] = 'pyjamas.ui.DeckPanel.py, line 34:\n    def getVisibleWidget(self):';
		$m.__track_lines__[35] = 'pyjamas.ui.DeckPanel.py, line 35:\n    return self.getWidgetIndex(self.visibleWidget)';
		$m.__track_lines__[37] = 'pyjamas.ui.DeckPanel.py, line 37:\n    def insert(self, widget, beforeIndex=None):';
		$m.__track_lines__[38] = 'pyjamas.ui.DeckPanel.py, line 38:\n    if (beforeIndex < 0) or (beforeIndex > self.getWidgetCount()):';
		$m.__track_lines__[40] = 'pyjamas.ui.DeckPanel.py, line 40:\n    return';
		$m.__track_lines__[42] = 'pyjamas.ui.DeckPanel.py, line 42:\n    ComplexPanel.insert(self, widget, self.getElement(), beforeIndex)';
		$m.__track_lines__[44] = 'pyjamas.ui.DeckPanel.py, line 44:\n    child = widget.getElement()';
		$m.__track_lines__[45] = 'pyjamas.ui.DeckPanel.py, line 45:\n    DOM.setStyleAttribute(child, "width", "100%")';
		$m.__track_lines__[46] = 'pyjamas.ui.DeckPanel.py, line 46:\n    DOM.setStyleAttribute(child, "height", "100%")';
		$m.__track_lines__[47] = 'pyjamas.ui.DeckPanel.py, line 47:\n    widget.setVisible(False)';
		$m.__track_lines__[49] = 'pyjamas.ui.DeckPanel.py, line 49:\n    def remove(self, widget):';
		$m.__track_lines__[50] = 'pyjamas.ui.DeckPanel.py, line 50:\n    if isinstance(widget, int):';
		$m.__track_lines__[51] = 'pyjamas.ui.DeckPanel.py, line 51:\n    widget = self.getWidget(widget)';
		$m.__track_lines__[53] = 'pyjamas.ui.DeckPanel.py, line 53:\n    if not ComplexPanel.remove(self, widget):';
		$m.__track_lines__[54] = 'pyjamas.ui.DeckPanel.py, line 54:\n    return False';
		$m.__track_lines__[56] = 'pyjamas.ui.DeckPanel.py, line 56:\n    if self.visibleWidget == widget:';
		$m.__track_lines__[57] = 'pyjamas.ui.DeckPanel.py, line 57:\n    self.visibleWidget = None';
		$m.__track_lines__[59] = 'pyjamas.ui.DeckPanel.py, line 59:\n    return True';
		$m.__track_lines__[61] = 'pyjamas.ui.DeckPanel.py, line 61:\n    def showWidget(self, index):';
		$m.__track_lines__[62] = 'pyjamas.ui.DeckPanel.py, line 62:\n    self.checkIndex(index)';
		$m.__track_lines__[64] = 'pyjamas.ui.DeckPanel.py, line 64:\n    if self.visibleWidget is not None:';
		$m.__track_lines__[65] = 'pyjamas.ui.DeckPanel.py, line 65:\n    self.visibleWidget.setVisible(False)';
		$m.__track_lines__[67] = 'pyjamas.ui.DeckPanel.py, line 67:\n    self.visibleWidget = self.getWidget(index)';
		$m.__track_lines__[68] = 'pyjamas.ui.DeckPanel.py, line 68:\n    self.visibleWidget.setVisible(True)';
		$m.__track_lines__[70] = 'pyjamas.ui.DeckPanel.py, line 70:\n    def checkIndex(self, index):';
		$m.__track_lines__[71] = 'pyjamas.ui.DeckPanel.py, line 71:\n    if (index < 0) or (index >= self.getWidgetCount()):';
		$m.__track_lines__[73] = 'pyjamas.ui.DeckPanel.py, line 73:\n    pass';
		$m.__track_lines__[75] = "pyjamas.ui.DeckPanel.py, line 75:\n    Factory.registerClass('pyjamas.ui.DeckPanel', 'DeckPanel', DeckPanel)";

		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='pyjamas.ui.DeckPanel';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=17;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$m['DeckPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DeckPanel';
			$cls_definition.__md5__ = 'f0ac5fe2133fdd75f2b600b37cb3b407';
			$pyjs.track.lineno=22;
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
					if (self.prototype.__md5__ !== 'f0ac5fe2133fdd75f2b600b37cb3b407') {
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
				var element;
				$pyjs.track={module:'pyjamas.ui.DeckPanel', lineno:22};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DeckPanel';
				$pyjs.track.lineno=22;
				$pyjs.track.lineno=23;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('visibleWidget', null) : $p['setattr'](self, 'visibleWidget', null); 
				$pyjs.track.lineno=24;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs.track.lineno=25;
					element = (function(){try{try{$pyjs.in_try_except += 1;
					return kwargs['pop']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				}
				else {
					$pyjs.track.lineno=27;
					element = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				}
				$pyjs.track.lineno=28;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setElement'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs.track.lineno=29;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=31;
			$method = $pyjs__bind_method2('add', function(widget) {
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
					if (self.prototype.__md5__ !== 'f0ac5fe2133fdd75f2b600b37cb3b407') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DeckPanel', lineno:31};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DeckPanel';
				$pyjs.track.lineno=31;
				$pyjs.track.lineno=32;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['insert'](widget, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['add'] = $method;
			$pyjs.track.lineno=34;
			$method = $pyjs__bind_method2('getVisibleWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f0ac5fe2133fdd75f2b600b37cb3b407') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DeckPanel', lineno:34};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DeckPanel';
				$pyjs.track.lineno=34;
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=35;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetIndex']($p['getattr'](self, 'visibleWidget'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getVisibleWidget'] = $method;
			$pyjs.track.lineno=37;
			$method = $pyjs__bind_method2('insert', function(widget, beforeIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					beforeIndex = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f0ac5fe2133fdd75f2b600b37cb3b407') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[4][1];
				var $or1,$or2,child;
				$pyjs.track={module:'pyjamas.ui.DeckPanel', lineno:37};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DeckPanel';
				$pyjs.track.lineno=37;
				$pyjs.track.lineno=38;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or1=($p['cmp'](beforeIndex, $constant_int_0) == -1))?$or1:($p['cmp'](beforeIndex, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) == 1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs.track.lineno=40;
					$pyjs.track.lineno=40;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=42;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['ComplexPanel']['insert'](self, widget, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), beforeIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=44;
				child = (function(){try{try{$pyjs.in_try_except += 1;
				return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.track.lineno=45;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setStyleAttribute'](child, 'width', '100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.track.lineno=46;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setStyleAttribute'](child, 'height', '100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs.track.lineno=47;
				(function(){try{try{$pyjs.in_try_except += 1;
				return widget['setVisible'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['beforeIndex', null]]);
			$cls_definition['insert'] = $method;
			$pyjs.track.lineno=49;
			$method = $pyjs__bind_method2('remove', function(widget) {
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
					if (self.prototype.__md5__ !== 'f0ac5fe2133fdd75f2b600b37cb3b407') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DeckPanel', lineno:49};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DeckPanel';
				$pyjs.track.lineno=49;
				$pyjs.track.lineno=50;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](widget, $p['int']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs.track.lineno=51;
					widget = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				$pyjs.track.lineno=53;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['ComplexPanel']['remove'](self, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
					$pyjs.track.lineno=54;
					$pyjs.track.lineno=54;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=56;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](self, 'visibleWidget'), widget));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
					$pyjs.track.lineno=57;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('visibleWidget', null) : $p['setattr'](self, 'visibleWidget', null); 
				}
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=59;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=61;
			$method = $pyjs__bind_method2('showWidget', function(index) {
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
					if (self.prototype.__md5__ !== 'f0ac5fe2133fdd75f2b600b37cb3b407') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DeckPanel', lineno:61};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DeckPanel';
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=62;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['checkIndex'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.track.lineno=64;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']($p['getattr'](self, 'visibleWidget'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
					$pyjs.track.lineno=65;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['visibleWidget']['setVisible'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				}
				$pyjs.track.lineno=67;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('visibleWidget', (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) : $p['setattr'](self, 'visibleWidget', (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()); 
				$pyjs.track.lineno=68;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['visibleWidget']['setVisible'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['showWidget'] = $method;
			$pyjs.track.lineno=70;
			$method = $pyjs__bind_method2('checkIndex', function(index) {
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
					if (self.prototype.__md5__ !== 'f0ac5fe2133fdd75f2b600b37cb3b407') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or3,$or4;
				$pyjs.track={module:'pyjamas.ui.DeckPanel', lineno:70};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DeckPanel';
				$pyjs.track.lineno=70;
				$pyjs.track.lineno=71;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or3=($p['cmp'](index, $constant_int_0) == -1))?$or3:((($p['cmp'](index, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()))|1) == 1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
					$pyjs.track.lineno=73;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['checkIndex'] = $method;
			$pyjs.track.lineno=21;
			var $bases = new Array($m['ComplexPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DeckPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=75;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.DeckPanel', 'DeckPanel', $m['DeckPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DeckPanel */


/* end module: pyjamas.ui.DeckPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel']
*/
