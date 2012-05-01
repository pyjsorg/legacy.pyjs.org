/* start module: pyjamas.ui.RootPanel */
$pyjs.loaded_modules['pyjamas.ui.RootPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.RootPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.RootPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.RootPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.RootPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.RootPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['RootPanel'] = $pyjs.loaded_modules['pyjamas.ui.RootPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.RootPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.RootPanel.py, line 15:\n    import sys';
		$m.__track_lines__[16] = 'pyjamas.ui.RootPanel.py, line 16:\n    from __pyjamas__ import doc';
		$m.__track_lines__[17] = 'pyjamas.ui.RootPanel.py, line 17:\n    from pyjamas import Factory';
		$m.__track_lines__[19] = 'pyjamas.ui.RootPanel.py, line 19:\n    from pyjamas import DOM';
		$m.__track_lines__[20] = 'pyjamas.ui.RootPanel.py, line 20:\n    from pyjamas import Window';
		$m.__track_lines__[22] = 'pyjamas.ui.RootPanel.py, line 22:\n    from pyjamas.ui.AbsolutePanel import AbsolutePanel';
		$m.__track_lines__[24] = 'pyjamas.ui.RootPanel.py, line 24:\n    rootPanels = {}';
		$m.__track_lines__[25] = 'pyjamas.ui.RootPanel.py, line 25:\n    class RootPanelManager(object):';
		$m.__track_lines__[27] = 'pyjamas.ui.RootPanel.py, line 27:\n    def onWindowClosed(self):';
		$m.__track_lines__[28] = 'pyjamas.ui.RootPanel.py, line 28:\n    global rootPanels';
		$m.__track_lines__[29] = 'pyjamas.ui.RootPanel.py, line 29:\n    for panel in rootPanels.itervalues():';
		$m.__track_lines__[30] = 'pyjamas.ui.RootPanel.py, line 30:\n    panel.onDetach()';
		$m.__track_lines__[32] = 'pyjamas.ui.RootPanel.py, line 32:\n    def onWindowClosing(self):';
		$m.__track_lines__[33] = 'pyjamas.ui.RootPanel.py, line 33:\n    return None';
		$m.__track_lines__[35] = 'pyjamas.ui.RootPanel.py, line 35:\n    def get(id=None):';
		$m.__track_lines__[39] = 'pyjamas.ui.RootPanel.py, line 39:\n    if rootPanels.has_key(id):';
		$m.__track_lines__[40] = 'pyjamas.ui.RootPanel.py, line 40:\n    return rootPanels[id]';
		$m.__track_lines__[42] = 'pyjamas.ui.RootPanel.py, line 42:\n    element = None';
		$m.__track_lines__[43] = 'pyjamas.ui.RootPanel.py, line 43:\n    if id is not None:';
		$m.__track_lines__[44] = 'pyjamas.ui.RootPanel.py, line 44:\n    element = DOM.getElementById(id)';
		$m.__track_lines__[45] = 'pyjamas.ui.RootPanel.py, line 45:\n    if element is None:';
		$m.__track_lines__[46] = 'pyjamas.ui.RootPanel.py, line 46:\n    return None';
		$m.__track_lines__[48] = 'pyjamas.ui.RootPanel.py, line 48:\n    return manageRootPanel(RootPanelCls(element), id)';
		$m.__track_lines__[50] = 'pyjamas.ui.RootPanel.py, line 50:\n    def manageRootPanel(panel, id=None):';
		$m.__track_lines__[52] = 'pyjamas.ui.RootPanel.py, line 52:\n    if len(rootPanels) < 1:';
		$m.__track_lines__[53] = 'pyjamas.ui.RootPanel.py, line 53:\n    panelManager = RootPanelManager()';
		$m.__track_lines__[54] = 'pyjamas.ui.RootPanel.py, line 54:\n    Window.addWindowCloseListener(panelManager)';
		$m.__track_lines__[56] = 'pyjamas.ui.RootPanel.py, line 56:\n    rootPanels[id] = panel';
		$m.__track_lines__[57] = 'pyjamas.ui.RootPanel.py, line 57:\n    return panel';
		$m.__track_lines__[59] = 'pyjamas.ui.RootPanel.py, line 59:\n    class RootPanelCls(AbsolutePanel):';
		$m.__track_lines__[60] = 'pyjamas.ui.RootPanel.py, line 60:\n    def __init__(self, Element=None, **kwargs):';
		$m.__track_lines__[61] = 'pyjamas.ui.RootPanel.py, line 61:\n    if Element is not None:';
		$m.__track_lines__[62] = "pyjamas.ui.RootPanel.py, line 62:\n    kwargs['Element'] = Element";
		$m.__track_lines__[63] = 'pyjamas.ui.RootPanel.py, line 63:\n    AbsolutePanel.__init__(self, **kwargs)';
		$m.__track_lines__[64] = 'pyjamas.ui.RootPanel.py, line 64:\n    if Element is None:';
		$m.__track_lines__[66] = 'pyjamas.ui.RootPanel.py, line 66:\n    Element = self.getBodyElement()';
		$m.__track_lines__[67] = 'pyjamas.ui.RootPanel.py, line 67:\n    self.setElement(Element)';
		$m.__track_lines__[68] = 'pyjamas.ui.RootPanel.py, line 68:\n    self.onAttach()';
		$m.__track_lines__[70] = 'pyjamas.ui.RootPanel.py, line 70:\n    def getBodyElement(self):';
		$m.__track_lines__[71] = 'pyjamas.ui.RootPanel.py, line 71:\n    return doc().body';
		$m.__track_lines__[73] = "pyjamas.ui.RootPanel.py, line 73:\n    Factory.registerClass('pyjamas.ui.RootPanel', 'RootPanelCls', RootPanelCls)";
		$m.__track_lines__[75] = 'pyjamas.ui.RootPanel.py, line 75:\n    def RootPanel(id=None):';
		$m.__track_lines__[76] = 'pyjamas.ui.RootPanel.py, line 76:\n    return get(id)';

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='pyjamas.ui.RootPanel';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', 'pyjamas.ui');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track.lineno=17;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=22;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=24;
		$m['rootPanels'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=25;
		$m['RootPanelManager'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.RootPanel';
			$cls_definition.__md5__ = '321c40a652db9edd88520f020ce4261e';
			$pyjs.track.lineno=27;
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
					if (self.prototype.__md5__ !== '321c40a652db9edd88520f020ce4261e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,panel;
				$pyjs.track={module:'pyjamas.ui.RootPanel', lineno:27};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.RootPanel';
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=28;
				$pyjs.track.lineno=29;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m['rootPanels']['itervalues']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					panel = $iter1_nextval.$nextval;
					$pyjs.track.lineno=30;
					(function(){try{try{$pyjs.in_try_except += 1;
					return panel['onDetach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.RootPanel';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onWindowClosed'] = $method;
			$pyjs.track.lineno=32;
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
					if (self.prototype.__md5__ !== '321c40a652db9edd88520f020ce4261e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.RootPanel', lineno:32};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.RootPanel';
				$pyjs.track.lineno=32;
				$pyjs.track.lineno=33;
				$pyjs.track.lineno=33;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onWindowClosing'] = $method;
			$pyjs.track.lineno=25;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RootPanelManager', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=35;
		$m['get'] = function(id) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof id == 'undefined') id=arguments.callee.__args__[2][1];
			var element;
			$pyjs.track={module:'pyjamas.ui.RootPanel',lineno:35};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.RootPanel';
			$pyjs.track.lineno=35;
			$pyjs.track.lineno=39;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['rootPanels']['has_key'](id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs.track.lineno=40;
				$pyjs.track.lineno=40;
				var $pyjs__ret = $m['rootPanels'].__getitem__(id);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=42;
			element = null;
			$pyjs.track.lineno=43;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_is'](id, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs.track.lineno=44;
				element = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getElementById'](id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.track.lineno=45;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](element, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs.track.lineno=46;
					$pyjs.track.lineno=46;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=48;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof manageRootPanel == "undefined"?$m.manageRootPanel:manageRootPanel)((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof RootPanelCls == "undefined"?$m.RootPanelCls:RootPanelCls)(element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(), id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['get'].__name__ = 'get';

		$m['get'].__bind_type__ = 0;
		$m['get'].__args__ = [null,null,['id', null]];
		$pyjs.track.lineno=50;
		$m['manageRootPanel'] = function(panel, id) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof id == 'undefined') id=arguments.callee.__args__[3][1];
			var panelManager;
			$pyjs.track={module:'pyjamas.ui.RootPanel',lineno:50};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.RootPanel';
			$pyjs.track.lineno=50;
			$pyjs.track.lineno=52;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($m['rootPanels']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), $constant_int_1) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs.track.lineno=53;
				panelManager = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['RootPanelManager']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.track.lineno=54;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Window']['addWindowCloseListener'](panelManager);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			}
			$pyjs.track.lineno=56;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['rootPanels'].__setitem__(id, panel);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=57;
			var $pyjs__ret = panel;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['manageRootPanel'].__name__ = 'manageRootPanel';

		$m['manageRootPanel'].__bind_type__ = 0;
		$m['manageRootPanel'].__args__ = [null,null,['panel'],['id', null]];
		$pyjs.track.lineno=59;
		$m['RootPanelCls'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.RootPanel';
			$cls_definition.__md5__ = '90b897ef33b547050c6c483a1baefdf2';
			$pyjs.track.lineno=60;
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
					if (self.prototype.__md5__ !== '90b897ef33b547050c6c483a1baefdf2') {
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

				$pyjs.track={module:'pyjamas.ui.RootPanel', lineno:60};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.RootPanel';
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=61;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](Element, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs.track.lineno=62;
					(function(){try{try{$pyjs.in_try_except += 1;
					return kwargs.__setitem__('Element', Element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				}
				$pyjs.track.lineno=63;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['AbsolutePanel'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=64;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](Element, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs.track.lineno=66;
					Element = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getBodyElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
					$pyjs.track.lineno=67;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['setElement'](Element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				}
				$pyjs.track.lineno=68;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['onAttach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['Element', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=70;
			$method = $pyjs__bind_method2('getBodyElement', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '90b897ef33b547050c6c483a1baefdf2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.RootPanel', lineno:70};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.RootPanel';
				$pyjs.track.lineno=70;
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=71;
				var $pyjs__ret = $p['getattr']($doc, 'body');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBodyElement'] = $method;
			$pyjs.track.lineno=59;
			var $bases = new Array($m['AbsolutePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RootPanelCls', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=73;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.RootPanel', 'RootPanelCls', $m['RootPanelCls']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
		$pyjs.track.lineno=75;
		$m['RootPanel'] = function(id) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof id == 'undefined') id=arguments.callee.__args__[2][1];

			$pyjs.track={module:'pyjamas.ui.RootPanel',lineno:75};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.RootPanel';
			$pyjs.track.lineno=75;
			$pyjs.track.lineno=76;
			$pyjs.track.lineno=76;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get'](id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['RootPanel'].__name__ = 'RootPanel';

		$m['RootPanel'].__bind_type__ = 0;
		$m['RootPanel'].__args__ = [null,null,['id', null]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.RootPanel */


/* end module: pyjamas.ui.RootPanel */


/*
PYJS_DEPS: ['sys', 'pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.Window', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui', 'pyjamas.ui.AbsolutePanel']
*/
