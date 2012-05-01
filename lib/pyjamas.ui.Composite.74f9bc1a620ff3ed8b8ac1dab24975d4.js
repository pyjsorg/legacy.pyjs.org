/* start module: pyjamas.ui.Composite */
$pyjs.loaded_modules['pyjamas.ui.Composite'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Composite'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Composite'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Composite"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Composite>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Composite';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Composite'] = $pyjs.loaded_modules['pyjamas.ui.Composite'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.Composite.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.Composite.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.Composite.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.Composite.py, line 18:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[20] = 'pyjamas.ui.Composite.py, line 20:\n    class Composite(Widget):';
		$m.__track_lines__[21] = 'pyjamas.ui.Composite.py, line 21:\n    def __init__(self, widget=None, **kwargs):';
		$m.__track_lines__[26] = 'pyjamas.ui.Composite.py, line 26:\n    self.widget = None';
		$m.__track_lines__[27] = 'pyjamas.ui.Composite.py, line 27:\n    self.attached = None';
		$m.__track_lines__[28] = 'pyjamas.ui.Composite.py, line 28:\n    if widget is not None:';
		$m.__track_lines__[29] = 'pyjamas.ui.Composite.py, line 29:\n    self.initWidget(widget)';
		$m.__track_lines__[30] = 'pyjamas.ui.Composite.py, line 30:\n    Widget.__init__(self, **kwargs)';
		$m.__track_lines__[32] = 'pyjamas.ui.Composite.py, line 32:\n    def initWidget(self, widget):';
		$m.__track_lines__[33] = 'pyjamas.ui.Composite.py, line 33:\n    if self.widget is not None:';
		$m.__track_lines__[34] = 'pyjamas.ui.Composite.py, line 34:\n    return';
		$m.__track_lines__[36] = 'pyjamas.ui.Composite.py, line 36:\n    widget.removeFromParent()';
		$m.__track_lines__[37] = 'pyjamas.ui.Composite.py, line 37:\n    self.setElement(widget.getElement())';
		$m.__track_lines__[39] = 'pyjamas.ui.Composite.py, line 39:\n    self.widget = widget';
		$m.__track_lines__[40] = 'pyjamas.ui.Composite.py, line 40:\n    widget.setParent(self)';
		$m.__track_lines__[42] = 'pyjamas.ui.Composite.py, line 42:\n    def isAttached(self):';
		$m.__track_lines__[43] = 'pyjamas.ui.Composite.py, line 43:\n    if self.widget is not None:';
		$m.__track_lines__[44] = 'pyjamas.ui.Composite.py, line 44:\n    return self.widget.isAttached()';
		$m.__track_lines__[45] = 'pyjamas.ui.Composite.py, line 45:\n    return False';
		$m.__track_lines__[47] = 'pyjamas.ui.Composite.py, line 47:\n    def onAttach(self):';
		$m.__track_lines__[49] = 'pyjamas.ui.Composite.py, line 49:\n    self.widget.onAttach()';
		$m.__track_lines__[50] = 'pyjamas.ui.Composite.py, line 50:\n    DOM.setEventListener(self.getElement(), self);';
		$m.__track_lines__[52] = 'pyjamas.ui.Composite.py, line 52:\n    self.onLoad()';
		$m.__track_lines__[54] = 'pyjamas.ui.Composite.py, line 54:\n    def onDetach(self):';
		$m.__track_lines__[55] = 'pyjamas.ui.Composite.py, line 55:\n    self.widget.onDetach()';
		$m.__track_lines__[57] = 'pyjamas.ui.Composite.py, line 57:\n    def setWidget(self, widget):';
		$m.__track_lines__[58] = 'pyjamas.ui.Composite.py, line 58:\n    self.initWidget(widget)';
		$m.__track_lines__[60] = 'pyjamas.ui.Composite.py, line 60:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[61] = 'pyjamas.ui.Composite.py, line 61:\n    Widget.onBrowserEvent(self, event) # takes care of auto-handlers';
		$m.__track_lines__[62] = 'pyjamas.ui.Composite.py, line 62:\n    self.widget.onBrowserEvent(event)';
		$m.__track_lines__[64] = "pyjamas.ui.Composite.py, line 64:\n    Factory.registerClass('pyjamas.ui.Composite', 'Composite', Composite)";


		$pyjs.track.module='pyjamas.ui.Composite';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$m['Composite'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Composite';
			$cls_definition.__md5__ = '801fc1face21422eec15325ffb7f8466';
			$pyjs.track.lineno=21;
			$method = $pyjs__bind_method2('__init__', function(widget) {
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
					widget = arguments[1];
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
					if (self.prototype.__md5__ !== '801fc1face21422eec15325ffb7f8466') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof widget != 'undefined') {
						if (widget !== null && typeof widget['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = widget;
							widget = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof widget == 'undefined') widget=arguments.callee.__args__[3][1];

				$pyjs.track={module:'pyjamas.ui.Composite', lineno:21};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Composite';
				$pyjs.track.lineno=21;
				$pyjs.track.lineno=26;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('widget', null) : $p['setattr'](self, 'widget', null); 
				$pyjs.track.lineno=27;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('attached', null) : $p['setattr'](self, 'attached', null); 
				$pyjs.track.lineno=28;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](widget, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
					$pyjs.track.lineno=29;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['initWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				}
				$pyjs.track.lineno=30;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['widget', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=32;
			$method = $pyjs__bind_method2('initWidget', function(widget) {
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
					if (self.prototype.__md5__ !== '801fc1face21422eec15325ffb7f8466') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Composite', lineno:32};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Composite';
				$pyjs.track.lineno=32;
				$pyjs.track.lineno=33;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']($p['getattr'](self, 'widget'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
					$pyjs.track.lineno=34;
					$pyjs.track.lineno=34;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=36;
				(function(){try{try{$pyjs.in_try_except += 1;
				return widget['removeFromParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs.track.lineno=37;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setElement']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs.track.lineno=39;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('widget', widget) : $p['setattr'](self, 'widget', widget); 
				$pyjs.track.lineno=40;
				(function(){try{try{$pyjs.in_try_except += 1;
				return widget['setParent'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['initWidget'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('isAttached', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '801fc1face21422eec15325ffb7f8466') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Composite', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Composite';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']($p['getattr'](self, 'widget'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs.track.lineno=44;
					$pyjs.track.lineno=44;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return self['widget']['isAttached']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=45;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isAttached'] = $method;
			$pyjs.track.lineno=47;
			$method = $pyjs__bind_method2('onAttach', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '801fc1face21422eec15325ffb7f8466') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Composite', lineno:47};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Composite';
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=49;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['widget']['onAttach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=50;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setEventListener']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=52;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['onLoad']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onAttach'] = $method;
			$pyjs.track.lineno=54;
			$method = $pyjs__bind_method2('onDetach', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '801fc1face21422eec15325ffb7f8466') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Composite', lineno:54};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Composite';
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=55;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['widget']['onDetach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$pyjs.track.lineno=57;
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
					if (self.prototype.__md5__ !== '801fc1face21422eec15325ffb7f8466') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Composite', lineno:57};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Composite';
				$pyjs.track.lineno=57;
				$pyjs.track.lineno=58;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['initWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['setWidget'] = $method;
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
					if (self.prototype.__md5__ !== '801fc1face21422eec15325ffb7f8466') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Composite', lineno:60};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Composite';
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=61;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Widget']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.track.lineno=62;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['widget']['onBrowserEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs.track.lineno=20;
			var $bases = new Array($m['Widget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Composite', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=64;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.Composite', 'Composite', $m['Composite']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Composite */


/* end module: pyjamas.ui.Composite */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget']
*/
