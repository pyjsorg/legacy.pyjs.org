/* start module: pyjamas.ui.ClickDelegatePanel */
$pyjs.loaded_modules['pyjamas.ui.ClickDelegatePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ClickDelegatePanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ClickDelegatePanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.ClickDelegatePanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.ClickDelegatePanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ClickDelegatePanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['ClickDelegatePanel'] = $pyjs.loaded_modules['pyjamas.ui.ClickDelegatePanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.ClickDelegatePanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.ClickDelegatePanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.ClickDelegatePanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[19] = 'pyjamas.ui.ClickDelegatePanel.py, line 19:\n    from pyjamas.ui.Composite import Composite';
		$m.__track_lines__[20] = 'pyjamas.ui.ClickDelegatePanel.py, line 20:\n    from pyjamas.ui import Event';
		$m.__track_lines__[21] = 'pyjamas.ui.ClickDelegatePanel.py, line 21:\n    from pyjamas.ui import Focus';
		$m.__track_lines__[22] = 'pyjamas.ui.ClickDelegatePanel.py, line 22:\n    from pyjamas.ui.SimplePanel import SimplePanel';
		$m.__track_lines__[23] = 'pyjamas.ui.ClickDelegatePanel.py, line 23:\n    from pyjamas.ui import KeyboardListener';
		$m.__track_lines__[25] = 'pyjamas.ui.ClickDelegatePanel.py, line 25:\n    class ClickDelegatePanel(Composite):';
		$m.__track_lines__[27] = 'pyjamas.ui.ClickDelegatePanel.py, line 27:\n    def __init__(self, p, child, cDelegate, kDelegate) :';
		$m.__track_lines__[29] = 'pyjamas.ui.ClickDelegatePanel.py, line 29:\n    Composite.__init__(self)';
		$m.__track_lines__[31] = 'pyjamas.ui.ClickDelegatePanel.py, line 31:\n    self.clickDelegate = cDelegate';
		$m.__track_lines__[32] = 'pyjamas.ui.ClickDelegatePanel.py, line 32:\n    self.keyDelegate = kDelegate';
		$m.__track_lines__[34] = 'pyjamas.ui.ClickDelegatePanel.py, line 34:\n    self.focusablePanel = SimplePanel(Focus.createFocusable())';
		$m.__track_lines__[35] = 'pyjamas.ui.ClickDelegatePanel.py, line 35:\n    self.focusablePanel.setWidget(child)';
		$m.__track_lines__[36] = 'pyjamas.ui.ClickDelegatePanel.py, line 36:\n    wrapperWidget = p.createTabTextWrapper()';
		$m.__track_lines__[37] = 'pyjamas.ui.ClickDelegatePanel.py, line 37:\n    if wrapperWidget is None:';
		$m.__track_lines__[38] = 'pyjamas.ui.ClickDelegatePanel.py, line 38:\n    self.initWidget(self.focusablePanel)';
		$m.__track_lines__[40] = 'pyjamas.ui.ClickDelegatePanel.py, line 40:\n    wrapperWidget.setWidget(self.focusablePanel)';
		$m.__track_lines__[41] = 'pyjamas.ui.ClickDelegatePanel.py, line 41:\n    self.initWidget(wrapperWidget)';
		$m.__track_lines__[43] = 'pyjamas.ui.ClickDelegatePanel.py, line 43:\n    if hasattr(child, "addKeyboardListener"):';
		$m.__track_lines__[44] = 'pyjamas.ui.ClickDelegatePanel.py, line 44:\n    child.addKeyboardListener(kDelegate)';
		$m.__track_lines__[46] = 'pyjamas.ui.ClickDelegatePanel.py, line 46:\n    self.sinkEvents(Event.ONCLICK | Event.ONKEYDOWN)';
		$m.__track_lines__[49] = 'pyjamas.ui.ClickDelegatePanel.py, line 49:\n    def onClick(self, sender=None):';
		$m.__track_lines__[50] = 'pyjamas.ui.ClickDelegatePanel.py, line 50:\n    self.clickDelegate.onClick(sender)';
		$m.__track_lines__[52] = 'pyjamas.ui.ClickDelegatePanel.py, line 52:\n    def getFocusablePanel(self):';
		$m.__track_lines__[53] = 'pyjamas.ui.ClickDelegatePanel.py, line 53:\n    return self.focusablePanel';
		$m.__track_lines__[55] = 'pyjamas.ui.ClickDelegatePanel.py, line 55:\n    def onBrowserEvent(self, event) :';
		$m.__track_lines__[56] = 'pyjamas.ui.ClickDelegatePanel.py, line 56:\n    type = DOM.eventGetType(event)';
		$m.__track_lines__[57] = 'pyjamas.ui.ClickDelegatePanel.py, line 57:\n    if type == "click":';
		$m.__track_lines__[58] = 'pyjamas.ui.ClickDelegatePanel.py, line 58:\n    self.onClick(self)';
		$m.__track_lines__[61] = 'pyjamas.ui.ClickDelegatePanel.py, line 61:\n    modifiers = KeyboardListener.getKeyboardModifiers(event)';
		$m.__track_lines__[62] = 'pyjamas.ui.ClickDelegatePanel.py, line 62:\n    if hasattr(self.keyDelegate, "onKeyDown"):';
		$m.__track_lines__[63] = 'pyjamas.ui.ClickDelegatePanel.py, line 63:\n    self.keyDelegate.onKeyDown(self, DOM.eventGetKeyCode(event),';


		$pyjs.track.module='pyjamas.ui.ClickDelegatePanel';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=22;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=25;
		$m['ClickDelegatePanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.ClickDelegatePanel';
			$cls_definition.__md5__ = '74c0756e3144e65b68c592e21a0e1338';
			$pyjs.track.lineno=27;
			$method = $pyjs__bind_method2('__init__', function(p, child, cDelegate, kDelegate) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					p = arguments[1];
					child = arguments[2];
					cDelegate = arguments[3];
					kDelegate = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '74c0756e3144e65b68c592e21a0e1338') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var wrapperWidget;
				$pyjs.track={module:'pyjamas.ui.ClickDelegatePanel', lineno:27};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.ClickDelegatePanel';
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=29;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Composite']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs.track.lineno=31;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('clickDelegate', cDelegate) : $p['setattr'](self, 'clickDelegate', cDelegate); 
				$pyjs.track.lineno=32;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('keyDelegate', kDelegate) : $p['setattr'](self, 'keyDelegate', kDelegate); 
				$pyjs.track.lineno=34;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('focusablePanel', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['SimplePanel']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['Focus']['createFocusable']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) : $p['setattr'](self, 'focusablePanel', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['SimplePanel']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['Focus']['createFocusable']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()); 
				$pyjs.track.lineno=35;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['focusablePanel']['setWidget'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=36;
				wrapperWidget = (function(){try{try{$pyjs.in_try_except += 1;
				return p['createTabTextWrapper']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs.track.lineno=37;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](wrapperWidget, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs.track.lineno=38;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['initWidget']($p['getattr'](self, 'focusablePanel'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				}
				else {
					$pyjs.track.lineno=40;
					(function(){try{try{$pyjs.in_try_except += 1;
					return wrapperWidget['setWidget']($p['getattr'](self, 'focusablePanel'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
					$pyjs.track.lineno=41;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['initWidget'](wrapperWidget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				}
				$pyjs.track.lineno=43;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](child, 'addKeyboardListener');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs.track.lineno=44;
					(function(){try{try{$pyjs.in_try_except += 1;
					return child['addKeyboardListener'](kDelegate);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				}
				$pyjs.track.lineno=46;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['sinkEvents']($p['op_bitor2']($p['getattr']($m['Event'], 'ONCLICK'), $p['getattr']($m['Event'], 'ONKEYDOWN')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['p'],['child'],['cDelegate'],['kDelegate']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=49;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '74c0756e3144e65b68c592e21a0e1338') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

				$pyjs.track={module:'pyjamas.ui.ClickDelegatePanel', lineno:49};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.ClickDelegatePanel';
				$pyjs.track.lineno=49;
				$pyjs.track.lineno=50;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['clickDelegate']['onClick'](sender);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$pyjs.track.lineno=52;
			$method = $pyjs__bind_method2('getFocusablePanel', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '74c0756e3144e65b68c592e21a0e1338') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.ClickDelegatePanel', lineno:52};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.ClickDelegatePanel';
				$pyjs.track.lineno=52;
				$pyjs.track.lineno=53;
				$pyjs.track.lineno=53;
				var $pyjs__ret = $p['getattr'](self, 'focusablePanel');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFocusablePanel'] = $method;
			$pyjs.track.lineno=55;
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
					if (self.prototype.__md5__ !== '74c0756e3144e65b68c592e21a0e1338') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var modifiers,type;
				$pyjs.track={module:'pyjamas.ui.ClickDelegatePanel', lineno:55};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.ClickDelegatePanel';
				$pyjs.track.lineno=55;
				$pyjs.track.lineno=56;
				type = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.track.lineno=57;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](type, 'click'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
					$pyjs.track.lineno=58;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['onClick'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](type, 'keydown'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
					$pyjs.track.lineno=61;
					modifiers = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['KeyboardListener']['getKeyboardModifiers'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
					$pyjs.track.lineno=62;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['hasattr']($p['getattr'](self, 'keyDelegate'), 'onKeyDown');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
						$pyjs.track.lineno=63;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['keyDelegate']['onKeyDown'](self, (function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['eventGetKeyCode'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), modifiers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs.track.lineno=25;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ClickDelegatePanel', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.ClickDelegatePanel */


/* end module: pyjamas.ui.ClickDelegatePanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.Event', 'pyjamas.ui.Focus', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.KeyboardListener']
*/
