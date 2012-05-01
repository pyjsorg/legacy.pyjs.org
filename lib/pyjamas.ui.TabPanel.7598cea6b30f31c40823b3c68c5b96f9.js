/* start module: pyjamas.ui.TabPanel */
$pyjs.loaded_modules['pyjamas.ui.TabPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TabPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TabPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.TabPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.TabPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TabPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['TabPanel'] = $pyjs.loaded_modules['pyjamas.ui.TabPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.TabPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[132] = 'pyjamas.ui.TabPanel.py, line 132:\n    if isinstance(index, basestring):';
		$m.__track_lines__[133] = 'pyjamas.ui.TabPanel.py, line 133:\n    index = self.tab_names[index]';
		$m.__track_lines__[134] = 'pyjamas.ui.TabPanel.py, line 134:\n    if not isinstance(index, int):';
		$m.__track_lines__[135] = 'pyjamas.ui.TabPanel.py, line 135:\n    index = self.getWidgetIndex(index)';
		$m.__track_lines__[137] = 'pyjamas.ui.TabPanel.py, line 137:\n    self.tabBar.selectTab(index)';
		$m.__track_lines__[139] = "pyjamas.ui.TabPanel.py, line 139:\n    Factory.registerClass('pyjamas.ui.TabPanel', 'TabPanel', TabPanel)";
		$m.__track_lines__[15] = 'pyjamas.ui.TabPanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.TabPanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.TabPanel.py, line 17:\n    from __pyjamas__ import console';
		$m.__track_lines__[19] = 'pyjamas.ui.TabPanel.py, line 19:\n    from pyjamas.ui.Composite import Composite';
		$m.__track_lines__[20] = 'pyjamas.ui.TabPanel.py, line 20:\n    from pyjamas.ui.DeckPanel import DeckPanel';
		$m.__track_lines__[21] = 'pyjamas.ui.TabPanel.py, line 21:\n    from pyjamas.ui.VerticalPanel import VerticalPanel';
		$m.__track_lines__[22] = 'pyjamas.ui.TabPanel.py, line 22:\n    from pyjamas.ui.Panel import PanelBase';
		$m.__track_lines__[23] = 'pyjamas.ui.TabPanel.py, line 23:\n    from pyjamas.ui.TabBar import TabBar';
		$m.__track_lines__[25] = 'pyjamas.ui.TabPanel.py, line 25:\n    class TabPanel(PanelBase, Composite):';
		$m.__track_lines__[26] = 'pyjamas.ui.TabPanel.py, line 26:\n    def __init__(self, tabBar=None, **kwargs):';
		$m.__track_lines__[27] = 'pyjamas.ui.TabPanel.py, line 27:\n    self.children = [] # TODO: can self.children be used instead?';
		$m.__track_lines__[28] = 'pyjamas.ui.TabPanel.py, line 28:\n    self.tab_names = {}';
		$m.__track_lines__[29] = "pyjamas.ui.TabPanel.py, line 29:\n    self.deck = kwargs.pop('Deck', None)";
		$m.__track_lines__[30] = "pyjamas.ui.TabPanel.py, line 30:\n    floatingtab = kwargs.pop('FloatingTab', False)";
		$m.__track_lines__[31] = 'pyjamas.ui.TabPanel.py, line 31:\n    if self.deck is None:';
		$m.__track_lines__[32] = 'pyjamas.ui.TabPanel.py, line 32:\n    self.deck = DeckPanel(StyleName="gwt-TabPanelBottom")';
		$m.__track_lines__[33] = 'pyjamas.ui.TabPanel.py, line 33:\n    if tabBar is None:';
		$m.__track_lines__[34] = 'pyjamas.ui.TabPanel.py, line 34:\n    self.tabBar = TabBar()';
		$m.__track_lines__[36] = 'pyjamas.ui.TabPanel.py, line 36:\n    self.tabBar = tabBar';
		$m.__track_lines__[37] = 'pyjamas.ui.TabPanel.py, line 37:\n    self.tabListeners = []';
		$m.__track_lines__[41] = "pyjamas.ui.TabPanel.py, line 41:\n    element = kwargs.pop('Element', None)";
		$m.__track_lines__[43] = 'pyjamas.ui.TabPanel.py, line 43:\n    panel = VerticalPanel(Element=element)';
		$m.__track_lines__[44] = 'pyjamas.ui.TabPanel.py, line 44:\n    if not floatingtab:';
		$m.__track_lines__[45] = 'pyjamas.ui.TabPanel.py, line 45:\n    panel.add(self.tabBar)';
		$m.__track_lines__[46] = 'pyjamas.ui.TabPanel.py, line 46:\n    if self.deck.getParent() is None:';
		$m.__track_lines__[47] = 'pyjamas.ui.TabPanel.py, line 47:\n    panel.add(self.deck)';
		$m.__track_lines__[48] = 'pyjamas.ui.TabPanel.py, line 48:\n    panel.setCellHeight(self.deck, "100%")';
		$m.__track_lines__[49] = 'pyjamas.ui.TabPanel.py, line 49:\n    self.tabBar.setWidth("100%")';
		$m.__track_lines__[50] = 'pyjamas.ui.TabPanel.py, line 50:\n    self.tabBar.addTabListener(self)';
		$m.__track_lines__[52] = 'pyjamas.ui.TabPanel.py, line 52:\n    kwargs[\'StyleName\'] = kwargs.get(\'StyleName\', "gwt-TabPanel")';
		$m.__track_lines__[54] = 'pyjamas.ui.TabPanel.py, line 54:\n    PanelBase.__init__(self)';
		$m.__track_lines__[55] = 'pyjamas.ui.TabPanel.py, line 55:\n    Composite.__init__(self, panel, **kwargs)';
		$m.__track_lines__[57] = 'pyjamas.ui.TabPanel.py, line 57:\n    def add(self, widget, tabText=None, asHTML=False, name=None):';
		$m.__track_lines__[65] = 'pyjamas.ui.TabPanel.py, line 65:\n    self.insert(widget, tabText, asHTML, self.getWidgetCount(), name)';
		$m.__track_lines__[67] = 'pyjamas.ui.TabPanel.py, line 67:\n    def addTabListener(self, listener):';
		$m.__track_lines__[68] = 'pyjamas.ui.TabPanel.py, line 68:\n    self.tabListeners.append(listener)';
		$m.__track_lines__[70] = 'pyjamas.ui.TabPanel.py, line 70:\n    def getDeckPanel(self):';
		$m.__track_lines__[71] = 'pyjamas.ui.TabPanel.py, line 71:\n    return self.deck';
		$m.__track_lines__[73] = 'pyjamas.ui.TabPanel.py, line 73:\n    def getTabBar(self):';
		$m.__track_lines__[74] = 'pyjamas.ui.TabPanel.py, line 74:\n    return self.tabBar';
		$m.__track_lines__[76] = 'pyjamas.ui.TabPanel.py, line 76:\n    def insert(self, widget, tabText, asHTML=False, beforeIndex=None,';
		$m.__track_lines__[78] = 'pyjamas.ui.TabPanel.py, line 78:\n    if beforeIndex is None:';
		$m.__track_lines__[79] = 'pyjamas.ui.TabPanel.py, line 79:\n    beforeIndex = asHTML';
		$m.__track_lines__[80] = 'pyjamas.ui.TabPanel.py, line 80:\n    asHTML = False';
		$m.__track_lines__[82] = 'pyjamas.ui.TabPanel.py, line 82:\n    self.children.insert(beforeIndex, widget)';
		$m.__track_lines__[83] = 'pyjamas.ui.TabPanel.py, line 83:\n    if name is not None:';
		$m.__track_lines__[84] = 'pyjamas.ui.TabPanel.py, line 84:\n    self.tab_names[name] = widget';
		$m.__track_lines__[85] = 'pyjamas.ui.TabPanel.py, line 85:\n    self.tabBar.insertTab(tabText, asHTML, beforeIndex)';
		$m.__track_lines__[86] = 'pyjamas.ui.TabPanel.py, line 86:\n    self.deck.insert(widget, beforeIndex)';
		$m.__track_lines__[88] = 'pyjamas.ui.TabPanel.py, line 88:\n    def onBeforeTabSelected(self, sender, tabIndex):';
		$m.__track_lines__[89] = 'pyjamas.ui.TabPanel.py, line 89:\n    for listener in self.tabListeners:';
		$m.__track_lines__[90] = 'pyjamas.ui.TabPanel.py, line 90:\n    if not listener.onBeforeTabSelected(sender, tabIndex):';
		$m.__track_lines__[91] = 'pyjamas.ui.TabPanel.py, line 91:\n    return False';
		$m.__track_lines__[92] = 'pyjamas.ui.TabPanel.py, line 92:\n    return True';
		$m.__track_lines__[94] = 'pyjamas.ui.TabPanel.py, line 94:\n    def onTabSelected(self, sender, tabIndex):';
		$m.__track_lines__[95] = 'pyjamas.ui.TabPanel.py, line 95:\n    self.deck.showWidget(tabIndex)';
		$m.__track_lines__[96] = 'pyjamas.ui.TabPanel.py, line 96:\n    for listener in self.tabListeners:';
		$m.__track_lines__[97] = 'pyjamas.ui.TabPanel.py, line 97:\n    listener.onTabSelected(sender, tabIndex)';
		$m.__track_lines__[99] = 'pyjamas.ui.TabPanel.py, line 99:\n    def remove(self, widget):';
		$m.__track_lines__[104] = 'pyjamas.ui.TabPanel.py, line 104:\n    if isinstance(widget, basestring):';
		$m.__track_lines__[105] = 'pyjamas.ui.TabPanel.py, line 105:\n    widget = self.tab_names[widget]';
		$m.__track_lines__[107] = 'pyjamas.ui.TabPanel.py, line 107:\n    widget = self.getWidget(widget)';
		$m.__track_lines__[109] = 'pyjamas.ui.TabPanel.py, line 109:\n    for (k, w) in self.tab_names.items():';
		$m.__track_lines__[110] = 'pyjamas.ui.TabPanel.py, line 110:\n    if widget == w:';
		$m.__track_lines__[111] = 'pyjamas.ui.TabPanel.py, line 111:\n    self.tab_names.pop(k)';
		$m.__track_lines__[112] = 'pyjamas.ui.TabPanel.py, line 112:\n    break';
		$m.__track_lines__[114] = 'pyjamas.ui.TabPanel.py, line 114:\n    index = self.getWidgetIndex(widget)';
		$m.__track_lines__[115] = 'pyjamas.ui.TabPanel.py, line 115:\n    if index == -1:';
		$m.__track_lines__[116] = 'pyjamas.ui.TabPanel.py, line 116:\n    return False';
		$m.__track_lines__[118] = 'pyjamas.ui.TabPanel.py, line 118:\n    self.children.remove(widget)';
		$m.__track_lines__[119] = 'pyjamas.ui.TabPanel.py, line 119:\n    self.tabBar.removeTab(index)';
		$m.__track_lines__[120] = 'pyjamas.ui.TabPanel.py, line 120:\n    self.deck.remove(widget)';
		$m.__track_lines__[121] = 'pyjamas.ui.TabPanel.py, line 121:\n    return True';
		$m.__track_lines__[123] = 'pyjamas.ui.TabPanel.py, line 123:\n    def removeTabListener(self, listener):';
		$m.__track_lines__[124] = 'pyjamas.ui.TabPanel.py, line 124:\n    self.tabListeners.remove(listener)';
		$m.__track_lines__[126] = 'pyjamas.ui.TabPanel.py, line 126:\n    def selectTab(self, index):';

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='pyjamas.ui.TabPanel';
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
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DeckPanel'] = $p['___import___']('pyjamas.ui.DeckPanel.DeckPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=22;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['PanelBase'] = $p['___import___']('pyjamas.ui.Panel.PanelBase', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=25;
		$m['TabPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.TabPanel';
			$cls_definition.__md5__ = '54cf8ab43f1c5b6d2e6739ba3e137750';
			$pyjs.track.lineno=26;
			$method = $pyjs__bind_method2('__init__', function(tabBar) {
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
					tabBar = arguments[1];
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
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof tabBar != 'undefined') {
						if (tabBar !== null && typeof tabBar['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = tabBar;
							tabBar = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof tabBar == 'undefined') tabBar=arguments.callee.__args__[3][1];
				var element,floatingtab,panel;
				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:26};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=26;
				$pyjs.track.lineno=27;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('children', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) : $p['setattr'](self, 'children', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()); 
				$pyjs.track.lineno=28;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tab_names', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) : $p['setattr'](self, 'tab_names', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()); 
				$pyjs.track.lineno=29;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('deck', (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['pop']('Deck', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) : $p['setattr'](self, 'deck', (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['pop']('Deck', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()); 
				$pyjs.track.lineno=30;
				floatingtab = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['pop']('FloatingTab', false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=31;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is']($p['getattr'](self, 'deck'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
					$pyjs.track.lineno=32;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('deck', (function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(null, $m['DeckPanel'], null, null, [{StyleName:'gwt-TabPanelBottom'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) : $p['setattr'](self, 'deck', (function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(null, $m['DeckPanel'], null, null, [{StyleName:'gwt-TabPanelBottom'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()); 
				}
				$pyjs.track.lineno=33;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](tabBar, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
					$pyjs.track.lineno=34;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tabBar', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['TabBar']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) : $p['setattr'](self, 'tabBar', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['TabBar']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()); 
				}
				else {
					$pyjs.track.lineno=36;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tabBar', tabBar) : $p['setattr'](self, 'tabBar', tabBar); 
				}
				$pyjs.track.lineno=37;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tabListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) : $p['setattr'](self, 'tabListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()); 
				$pyjs.track.lineno=41;
				element = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['pop']('Element', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=43;
				panel = (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{Element:element}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=44;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool'](floatingtab));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
					$pyjs.track.lineno=45;
					(function(){try{try{$pyjs.in_try_except += 1;
					return panel['add']($p['getattr'](self, 'tabBar'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				}
				$pyjs.track.lineno=46;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is']((function(){try{try{$pyjs.in_try_except += 1;
				return self['deck']['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})(), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
					$pyjs.track.lineno=47;
					(function(){try{try{$pyjs.in_try_except += 1;
					return panel['add']($p['getattr'](self, 'deck'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
					$pyjs.track.lineno=48;
					(function(){try{try{$pyjs.in_try_except += 1;
					return panel['setCellHeight']($p['getattr'](self, 'deck'), '100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				}
				$pyjs.track.lineno=49;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabBar']['setWidth']('100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.track.lineno=50;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabBar']['addTabListener'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=52;
				(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs.__setitem__('StyleName', (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('StyleName', 'gwt-TabPanel');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs.track.lineno=54;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['PanelBase']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.track.lineno=55;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, panel]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['tabBar', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=57;
			$method = $pyjs__bind_method2('add', function(widget, tabText, asHTML, name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					tabText = arguments[2];
					asHTML = arguments[3];
					name = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof tabText == 'undefined') tabText=arguments.callee.__args__[4][1];
				if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[5][1];
				if (typeof name == 'undefined') name=arguments.callee.__args__[6][1];

				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:57};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=57;
				$pyjs.track.lineno=65;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['insert'](widget, tabText, asHTML, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})(), name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['tabText', null],['asHTML', false],['name', null]]);
			$cls_definition['add'] = $method;
			$pyjs.track.lineno=67;
			$method = $pyjs__bind_method2('addTabListener', function(listener) {
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
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:67};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=67;
				$pyjs.track.lineno=68;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addTabListener'] = $method;
			$pyjs.track.lineno=70;
			$method = $pyjs__bind_method2('getDeckPanel', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:70};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=70;
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=71;
				var $pyjs__ret = $p['getattr'](self, 'deck');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDeckPanel'] = $method;
			$pyjs.track.lineno=73;
			$method = $pyjs__bind_method2('getTabBar', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:73};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=73;
				$pyjs.track.lineno=74;
				$pyjs.track.lineno=74;
				var $pyjs__ret = $p['getattr'](self, 'tabBar');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTabBar'] = $method;
			$pyjs.track.lineno=76;
			$method = $pyjs__bind_method2('insert', function(widget, tabText, asHTML, beforeIndex, name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 6, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					tabText = arguments[2];
					asHTML = arguments[3];
					beforeIndex = arguments[4];
					name = arguments[5];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 6, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[5][1];
				if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[6][1];
				if (typeof name == 'undefined') name=arguments.callee.__args__[7][1];

				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:76};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=76;
				$pyjs.track.lineno=78;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](beforeIndex, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
					$pyjs.track.lineno=79;
					beforeIndex = asHTML;
					$pyjs.track.lineno=80;
					asHTML = false;
				}
				$pyjs.track.lineno=82;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['children']['insert'](beforeIndex, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.track.lineno=83;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](name, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs.track.lineno=84;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, 'tab_names').__setitem__(name, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				}
				$pyjs.track.lineno=85;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabBar']['insertTab'](tabText, asHTML, beforeIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs.track.lineno=86;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['deck']['insert'](widget, beforeIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['tabText'],['asHTML', false],['beforeIndex', null],['name', null]]);
			$cls_definition['insert'] = $method;
			$pyjs.track.lineno=88;
			$method = $pyjs__bind_method2('onBeforeTabSelected', function(sender, tabIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					tabIndex = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_idx,$iter1_iter,listener,$iter1_array,$pyjs__trackstack_size_1,$iter1_type;
				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:88};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=88;
				$pyjs.track.lineno=89;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'tabListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					listener = $iter1_nextval.$nextval;
					$pyjs.track.lineno=90;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return listener['onBeforeTabSelected'](sender, tabIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
						$pyjs.track.lineno=91;
						$pyjs.track.lineno=91;
						var $pyjs__ret = false;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=92;
				$pyjs.track.lineno=92;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
			$cls_definition['onBeforeTabSelected'] = $method;
			$pyjs.track.lineno=94;
			$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					tabIndex = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,listener,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:94};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=94;
				$pyjs.track.lineno=95;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['deck']['showWidget'](tabIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs.track.lineno=96;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'tabListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					listener = $iter2_nextval.$nextval;
					$pyjs.track.lineno=97;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onTabSelected'](sender, tabIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
			$cls_definition['onTabSelected'] = $method;
			$pyjs.track.lineno=99;
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
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$iter3_idx,$iter3_type,$iter3_iter,w,$iter3_array,k,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:99};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=99;
				$pyjs.track.lineno=104;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](widget, $p['basestring']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
					$pyjs.track.lineno=105;
					widget = $p['getattr'](self, 'tab_names').__getitem__(widget);
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](widget, $p['int']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
					$pyjs.track.lineno=107;
					widget = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				}
				$pyjs.track.lineno=109;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return self['tab_names']['items']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
					k = $tupleassign1[0];
					w = $tupleassign1[1];
					$pyjs.track.lineno=110;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](widget, w));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
						$pyjs.track.lineno=111;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['tab_names']['pop'](k);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
						$pyjs.track.lineno=112;
						break;
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=114;
				index = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetIndex'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$pyjs.track.lineno=115;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](index, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
					$pyjs.track.lineno=116;
					$pyjs.track.lineno=116;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=118;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['children']['remove'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				$pyjs.track.lineno=119;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabBar']['removeTab'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$pyjs.track.lineno=120;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['deck']['remove'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs.track.lineno=121;
				$pyjs.track.lineno=121;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=123;
			$method = $pyjs__bind_method2('removeTabListener', function(listener) {
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
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:123};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=123;
				$pyjs.track.lineno=124;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeTabListener'] = $method;
			$pyjs.track.lineno=126;
			$method = $pyjs__bind_method2('selectTab', function(index) {
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
					if (self.prototype.__md5__ !== '54cf8ab43f1c5b6d2e6739ba3e137750') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabPanel', lineno:126};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabPanel';
				$pyjs.track.lineno=126;
				$pyjs.track.lineno=132;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](index, $p['basestring']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
					$pyjs.track.lineno=133;
					index = $p['getattr'](self, 'tab_names').__getitem__(index);
				}
				$pyjs.track.lineno=134;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](index, $p['int']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
					$pyjs.track.lineno=135;
					index = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidgetIndex'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				}
				$pyjs.track.lineno=137;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabBar']['selectTab'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['selectTab'] = $method;
			$pyjs.track.lineno=25;
			var $bases = new Array($m['PanelBase'],$m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TabPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=139;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.TabPanel', 'TabPanel', $m['TabPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.TabPanel */


/* end module: pyjamas.ui.TabPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.DeckPanel.DeckPanel', 'pyjamas.ui.DeckPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Panel.PanelBase', 'pyjamas.ui.Panel', 'pyjamas.ui.TabBar.TabBar', 'pyjamas.ui.TabBar']
*/
