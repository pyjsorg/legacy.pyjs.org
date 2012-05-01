/* start module: pyjamas.ui.SimplePanel */
$pyjs.loaded_modules['pyjamas.ui.SimplePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.SimplePanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.SimplePanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.SimplePanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.SimplePanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.SimplePanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['SimplePanel'] = $pyjs.loaded_modules['pyjamas.ui.SimplePanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.SimplePanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.SimplePanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.SimplePanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.SimplePanel.py, line 17:\n    from __pyjamas__ import console';
		$m.__track_lines__[18] = 'pyjamas.ui.SimplePanel.py, line 18:\n    from pyjamas.ui.Panel import Panel';
		$m.__track_lines__[20] = 'pyjamas.ui.SimplePanel.py, line 20:\n    class SimplePanel(Panel):';
		$m.__track_lines__[26] = 'pyjamas.ui.SimplePanel.py, line 26:\n    def __init__(self, Element=None, **kwargs):';
		$m.__track_lines__[27] = 'pyjamas.ui.SimplePanel.py, line 27:\n    if Element is None:';
		$m.__track_lines__[28] = 'pyjamas.ui.SimplePanel.py, line 28:\n    Element = DOM.createDiv()';
		$m.__track_lines__[29] = 'pyjamas.ui.SimplePanel.py, line 29:\n    self.setElement(Element)';
		$m.__track_lines__[30] = 'pyjamas.ui.SimplePanel.py, line 30:\n    Panel.__init__(self, **kwargs)';
		$m.__track_lines__[32] = 'pyjamas.ui.SimplePanel.py, line 32:\n    def add(self, widget):';
		$m.__track_lines__[33] = 'pyjamas.ui.SimplePanel.py, line 33:\n    if self.getWidget() is not None:';
		$m.__track_lines__[34] = 'pyjamas.ui.SimplePanel.py, line 34:\n    console.error("SimplePanel can only contain one child widget")';
		$m.__track_lines__[35] = 'pyjamas.ui.SimplePanel.py, line 35:\n    return';
		$m.__track_lines__[36] = 'pyjamas.ui.SimplePanel.py, line 36:\n    self.setWidget(widget)';
		$m.__track_lines__[38] = 'pyjamas.ui.SimplePanel.py, line 38:\n    def getWidget(self):';
		$m.__track_lines__[39] = 'pyjamas.ui.SimplePanel.py, line 39:\n    if len(self.children):';
		$m.__track_lines__[40] = 'pyjamas.ui.SimplePanel.py, line 40:\n    return self.children[0]';
		$m.__track_lines__[41] = 'pyjamas.ui.SimplePanel.py, line 41:\n    return None';
		$m.__track_lines__[43] = 'pyjamas.ui.SimplePanel.py, line 43:\n    def remove(self, widget):';
		$m.__track_lines__[44] = 'pyjamas.ui.SimplePanel.py, line 44:\n    if self.getWidget() != widget:';
		$m.__track_lines__[45] = 'pyjamas.ui.SimplePanel.py, line 45:\n    return False';
		$m.__track_lines__[46] = 'pyjamas.ui.SimplePanel.py, line 46:\n    self.disown(widget)';
		$m.__track_lines__[47] = 'pyjamas.ui.SimplePanel.py, line 47:\n    del self.children[0]';
		$m.__track_lines__[48] = 'pyjamas.ui.SimplePanel.py, line 48:\n    return True';
		$m.__track_lines__[50] = 'pyjamas.ui.SimplePanel.py, line 50:\n    def getContainerElement(self):';
		$m.__track_lines__[51] = 'pyjamas.ui.SimplePanel.py, line 51:\n    return self.getElement()';
		$m.__track_lines__[53] = 'pyjamas.ui.SimplePanel.py, line 53:\n    def setWidget(self, widget):';
		$m.__track_lines__[54] = 'pyjamas.ui.SimplePanel.py, line 54:\n    if self.getWidget() == widget:';
		$m.__track_lines__[55] = 'pyjamas.ui.SimplePanel.py, line 55:\n    return';
		$m.__track_lines__[57] = 'pyjamas.ui.SimplePanel.py, line 57:\n    if self.getWidget() is not None:';
		$m.__track_lines__[58] = 'pyjamas.ui.SimplePanel.py, line 58:\n    self.remove(self.getWidget())';
		$m.__track_lines__[60] = 'pyjamas.ui.SimplePanel.py, line 60:\n    if widget is not None:';
		$m.__track_lines__[61] = 'pyjamas.ui.SimplePanel.py, line 61:\n    self.adopt(widget, self.getContainerElement())';
		$m.__track_lines__[62] = 'pyjamas.ui.SimplePanel.py, line 62:\n    self.children.append(widget)';
		$m.__track_lines__[64] = "pyjamas.ui.SimplePanel.py, line 64:\n    Factory.registerClass('pyjamas.ui.SimplePanel', 'SimplePanel', SimplePanel)";

		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='pyjamas.ui.SimplePanel';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=17;
		$pyjs.track.lineno=18;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$m['SimplePanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.SimplePanel';
			$cls_definition.__md5__ = 'd05d1f0fc9d1615a4fad720fbf211e14';
			$pyjs.track.lineno=26;
			$method = $pyjs__bind_method2('__init__', function(Element) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					Element = arguments[1];
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd05d1f0fc9d1615a4fad720fbf211e14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof Element != 'undefined') {
						if (Element !== null && typeof Element['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = Element;
							Element = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof Element == 'undefined') Element=arguments.callee.__args__[3][1];

				$pyjs.track={module:'pyjamas.ui.SimplePanel', lineno:26};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.SimplePanel';
				$pyjs.track.lineno=26;
				$pyjs.track.lineno=27;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](Element, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
					$pyjs.track.lineno=28;
					Element = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				}
				$pyjs.track.lineno=29;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setElement'](Element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.track.lineno=30;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['Panel'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['Element', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=32;
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
					if (self.prototype.__md5__ !== 'd05d1f0fc9d1615a4fad720fbf211e14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.SimplePanel', lineno:32};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.SimplePanel';
				$pyjs.track.lineno=32;
				$pyjs.track.lineno=33;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})(), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs.track.lineno=34;
					(function(){try{try{$pyjs.in_try_except += 1;
					return console['error']('SimplePanel can only contain one child widget');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
					$pyjs.track.lineno=35;
					$pyjs.track.lineno=35;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=36;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['add'] = $method;
			$pyjs.track.lineno=38;
			$method = $pyjs__bind_method2('getWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd05d1f0fc9d1615a4fad720fbf211e14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.SimplePanel', lineno:38};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.SimplePanel';
				$pyjs.track.lineno=38;
				$pyjs.track.lineno=39;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($p['getattr'](self, 'children'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
					$pyjs.track.lineno=40;
					$pyjs.track.lineno=40;
					var $pyjs__ret = $p['getattr'](self, 'children').__getitem__($constant_int_0);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=41;
				$pyjs.track.lineno=41;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWidget'] = $method;
			$pyjs.track.lineno=43;
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
					if (self.prototype.__md5__ !== 'd05d1f0fc9d1615a4fad720fbf211e14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.SimplePanel', lineno:43};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.SimplePanel';
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=44;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), widget));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
					$pyjs.track.lineno=45;
					$pyjs.track.lineno=45;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=46;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['disown'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=47;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'children').__delitem__($constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.track.lineno=48;
				$pyjs.track.lineno=48;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('getContainerElement', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd05d1f0fc9d1615a4fad720fbf211e14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.SimplePanel', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.SimplePanel';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=51;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getContainerElement'] = $method;
			$pyjs.track.lineno=53;
			$method = $pyjs__bind_method2('setWidget', function(widget) {
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
					if (self.prototype.__md5__ !== 'd05d1f0fc9d1615a4fad720fbf211e14') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.SimplePanel', lineno:53};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.SimplePanel';
				$pyjs.track.lineno=53;
				$pyjs.track.lineno=54;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), widget));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs.track.lineno=55;
					$pyjs.track.lineno=55;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=57;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs.track.lineno=58;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['remove']((function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidget']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				}
				$pyjs.track.lineno=60;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](widget, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
					$pyjs.track.lineno=61;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['adopt'](widget, (function(){try{try{$pyjs.in_try_except += 1;
					return self['getContainerElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					$pyjs.track.lineno=62;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['children']['append'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['setWidget'] = $method;
			$pyjs.track.lineno=20;
			var $bases = new Array($m['Panel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SimplePanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=64;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.SimplePanel', 'SimplePanel', $m['SimplePanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.SimplePanel */


/* end module: pyjamas.ui.SimplePanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui', 'pyjamas.ui.Panel']
*/
