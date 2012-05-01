/* start module: pyjamas.ui.TabBar */
$pyjs.loaded_modules['pyjamas.ui.TabBar'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TabBar'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TabBar'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.TabBar"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.TabBar>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TabBar';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['TabBar'] = $pyjs.loaded_modules['pyjamas.ui.TabBar'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.TabBar.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.TabBar.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.TabBar.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.TabBar.py, line 17:\n    from pyjamas.ui.Composite import Composite';
		$m.__track_lines__[18] = 'pyjamas.ui.TabBar.py, line 18:\n    from pyjamas.ui import Event';
		$m.__track_lines__[19] = 'pyjamas.ui.TabBar.py, line 19:\n    from pyjamas.ui.HTML import HTML';
		$m.__track_lines__[20] = 'pyjamas.ui.TabBar.py, line 20:\n    from pyjamas.ui.Label import Label';
		$m.__track_lines__[21] = 'pyjamas.ui.TabBar.py, line 21:\n    from pyjamas.ui.HorizontalPanel import HorizontalPanel';
		$m.__track_lines__[22] = 'pyjamas.ui.TabBar.py, line 22:\n    from pyjamas.ui.ClickDelegatePanel import ClickDelegatePanel';
		$m.__track_lines__[23] = 'pyjamas.ui.TabBar.py, line 23:\n    from pyjamas.ui import HasAlignment';
		$m.__track_lines__[25] = 'pyjamas.ui.TabBar.py, line 25:\n    class TabBar(Composite):';
		$m.__track_lines__[27] = 'pyjamas.ui.TabBar.py, line 27:\n    STYLENAME_DEFAULT = "gwt-TabBarItem"';
		$m.__track_lines__[29] = 'pyjamas.ui.TabBar.py, line 29:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[31] = 'pyjamas.ui.TabBar.py, line 31:\n    if not kwargs.has_key(\'StyleName\'): kwargs[\'StyleName\']="gwt-TabBar"';
		$m.__track_lines__[35] = 'pyjamas.ui.TabBar.py, line 35:\n    element = None';
		$m.__track_lines__[36] = "pyjamas.ui.TabBar.py, line 36:\n    if kwargs.has_key('Element'):";
		$m.__track_lines__[37] = "pyjamas.ui.TabBar.py, line 37:\n    element = kwargs.pop('Element')";
		$m.__track_lines__[39] = 'pyjamas.ui.TabBar.py, line 39:\n    self.panel = HorizontalPanel(Element=element)';
		$m.__track_lines__[40] = 'pyjamas.ui.TabBar.py, line 40:\n    self.selectedTab = None';
		$m.__track_lines__[41] = 'pyjamas.ui.TabBar.py, line 41:\n    self.tabListeners = []';
		$m.__track_lines__[43] = 'pyjamas.ui.TabBar.py, line 43:\n    self.panel.setVerticalAlignment(HasAlignment.ALIGN_BOTTOM)';
		$m.__track_lines__[45] = 'pyjamas.ui.TabBar.py, line 45:\n    first = HTML("&nbsp;", True)';
		$m.__track_lines__[46] = 'pyjamas.ui.TabBar.py, line 46:\n    rest = HTML("&nbsp;", True)';
		$m.__track_lines__[47] = 'pyjamas.ui.TabBar.py, line 47:\n    first.setStyleName("gwt-TabBarFirst")';
		$m.__track_lines__[48] = 'pyjamas.ui.TabBar.py, line 48:\n    rest.setStyleName("gwt-TabBarRest")';
		$m.__track_lines__[49] = 'pyjamas.ui.TabBar.py, line 49:\n    first.setHeight("100%")';
		$m.__track_lines__[50] = 'pyjamas.ui.TabBar.py, line 50:\n    rest.setHeight("100%")';
		$m.__track_lines__[52] = 'pyjamas.ui.TabBar.py, line 52:\n    self.panel.add(first)';
		$m.__track_lines__[53] = 'pyjamas.ui.TabBar.py, line 53:\n    self.panel.add(rest)';
		$m.__track_lines__[54] = 'pyjamas.ui.TabBar.py, line 54:\n    first.setHeight("100%")';
		$m.__track_lines__[55] = 'pyjamas.ui.TabBar.py, line 55:\n    self.panel.setCellHeight(first, "100%")';
		$m.__track_lines__[56] = 'pyjamas.ui.TabBar.py, line 56:\n    self.panel.setCellWidth(rest, "100%")';
		$m.__track_lines__[58] = 'pyjamas.ui.TabBar.py, line 58:\n    Composite.__init__(self, self.panel, **kwargs)';
		$m.__track_lines__[59] = 'pyjamas.ui.TabBar.py, line 59:\n    self.sinkEvents(Event.ONCLICK)';
		$m.__track_lines__[61] = 'pyjamas.ui.TabBar.py, line 61:\n    def addTab(self, text, asHTML=False):';
		$m.__track_lines__[62] = 'pyjamas.ui.TabBar.py, line 62:\n    self.insertTab(text, asHTML, self.getTabCount())';
		$m.__track_lines__[64] = 'pyjamas.ui.TabBar.py, line 64:\n    def addTabListener(self, listener):';
		$m.__track_lines__[65] = 'pyjamas.ui.TabBar.py, line 65:\n    self.tabListeners.append(listener)';
		$m.__track_lines__[67] = 'pyjamas.ui.TabBar.py, line 67:\n    def getSelectedTab(self):';
		$m.__track_lines__[68] = 'pyjamas.ui.TabBar.py, line 68:\n    if self.selectedTab is None:';
		$m.__track_lines__[69] = 'pyjamas.ui.TabBar.py, line 69:\n    return -1';
		$m.__track_lines__[70] = 'pyjamas.ui.TabBar.py, line 70:\n    return self.panel.getWidgetIndex(self.selectedTab) - 1';
		$m.__track_lines__[72] = 'pyjamas.ui.TabBar.py, line 72:\n    def getTabCount(self):';
		$m.__track_lines__[73] = 'pyjamas.ui.TabBar.py, line 73:\n    return self.panel.getWidgetCount() - 2';
		$m.__track_lines__[75] = 'pyjamas.ui.TabBar.py, line 75:\n    def getTabWidget(self, index):';
		$m.__track_lines__[76] = 'pyjamas.ui.TabBar.py, line 76:\n    if index >= self.getTabCount():';
		$m.__track_lines__[77] = 'pyjamas.ui.TabBar.py, line 77:\n    return None';
		$m.__track_lines__[78] = 'pyjamas.ui.TabBar.py, line 78:\n    delPanel = self.panel.getWidget(index + 1)';
		$m.__track_lines__[79] = 'pyjamas.ui.TabBar.py, line 79:\n    focusablePanel = delPanel.getFocusablePanel()';
		$m.__track_lines__[80] = 'pyjamas.ui.TabBar.py, line 80:\n    widget = focusablePanel.getWidget()';
		$m.__track_lines__[81] = 'pyjamas.ui.TabBar.py, line 81:\n    return widget';
		$m.__track_lines__[83] = 'pyjamas.ui.TabBar.py, line 83:\n    def getTabHTML(self, index):';
		$m.__track_lines__[84] = 'pyjamas.ui.TabBar.py, line 84:\n    widget = self.getTabWidget(index)';
		$m.__track_lines__[85] = 'pyjamas.ui.TabBar.py, line 85:\n    if hasattr(widget, "getHTML"):';
		$m.__track_lines__[86] = 'pyjamas.ui.TabBar.py, line 86:\n    return widget.getHTML()';
		$m.__track_lines__[88] = 'pyjamas.ui.TabBar.py, line 88:\n    return widget.getText()';
		$m.__track_lines__[90] = 'pyjamas.ui.TabBar.py, line 90:\n    fpe = DOM.getParent(self.focusablePanel.getElement())';
		$m.__track_lines__[91] = 'pyjamas.ui.TabBar.py, line 91:\n    return DOM.getInnerHTML(fpe)';
		$m.__track_lines__[93] = 'pyjamas.ui.TabBar.py, line 93:\n    def createTabTextWrapper(self):';
		$m.__track_lines__[94] = 'pyjamas.ui.TabBar.py, line 94:\n    return None';
		$m.__track_lines__[96] = 'pyjamas.ui.TabBar.py, line 96:\n    def insertTab(self, text, asHTML, beforeIndex=None):';
		$m.__track_lines__[105] = 'pyjamas.ui.TabBar.py, line 105:\n    if beforeIndex is None:';
		$m.__track_lines__[106] = 'pyjamas.ui.TabBar.py, line 106:\n    beforeIndex = asHTML';
		$m.__track_lines__[107] = 'pyjamas.ui.TabBar.py, line 107:\n    asHTML = False';
		$m.__track_lines__[109] = 'pyjamas.ui.TabBar.py, line 109:\n    if (beforeIndex < 0) or (beforeIndex > self.getTabCount()):';
		$m.__track_lines__[111] = 'pyjamas.ui.TabBar.py, line 111:\n    pass';
		$m.__track_lines__[113] = 'pyjamas.ui.TabBar.py, line 113:\n    if text is None:';
		$m.__track_lines__[114] = 'pyjamas.ui.TabBar.py, line 114:\n    text = HTML("&nbsp;", True)';
		$m.__track_lines__[115] = 'pyjamas.ui.TabBar.py, line 115:\n    text.setWidth("100%")';
		$m.__track_lines__[116] = 'pyjamas.ui.TabBar.py, line 116:\n    text.setStyleName("gwt-TabBarRest")';
		$m.__track_lines__[117] = 'pyjamas.ui.TabBar.py, line 117:\n    self.panel.insert(text, beforeIndex + 1)';
		$m.__track_lines__[118] = 'pyjamas.ui.TabBar.py, line 118:\n    self.panel.setCellWidth(text, "100%")';
		$m.__track_lines__[119] = 'pyjamas.ui.TabBar.py, line 119:\n    return';
		$m.__track_lines__[121] = 'pyjamas.ui.TabBar.py, line 121:\n    istext = isinstance(text, basestring)';
		$m.__track_lines__[123] = 'pyjamas.ui.TabBar.py, line 123:\n    if istext:';
		$m.__track_lines__[124] = 'pyjamas.ui.TabBar.py, line 124:\n    if asHTML:';
		$m.__track_lines__[125] = 'pyjamas.ui.TabBar.py, line 125:\n    item = HTML(text)';
		$m.__track_lines__[127] = 'pyjamas.ui.TabBar.py, line 127:\n    item = Label(text)';
		$m.__track_lines__[128] = 'pyjamas.ui.TabBar.py, line 128:\n    item.setWordWrap(False)';
		$m.__track_lines__[131] = 'pyjamas.ui.TabBar.py, line 131:\n    item = text';
		$m.__track_lines__[133] = 'pyjamas.ui.TabBar.py, line 133:\n    self.insertTabWidget(item, beforeIndex)';
		$m.__track_lines__[135] = 'pyjamas.ui.TabBar.py, line 135:\n    def insertTabWidget(self, widget, beforeIndex):';
		$m.__track_lines__[137] = 'pyjamas.ui.TabBar.py, line 137:\n    delWidget = ClickDelegatePanel(self, widget, self, self)';
		$m.__track_lines__[138] = 'pyjamas.ui.TabBar.py, line 138:\n    delWidget.setStyleName(self.STYLENAME_DEFAULT)';
		$m.__track_lines__[140] = 'pyjamas.ui.TabBar.py, line 140:\n    focusablePanel = delWidget.getFocusablePanel()';
		$m.__track_lines__[141] = 'pyjamas.ui.TabBar.py, line 141:\n    self.panel.insert(delWidget, beforeIndex + 1)';
		$m.__track_lines__[143] = 'pyjamas.ui.TabBar.py, line 143:\n    self.setStyleName(DOM.getParent(delWidget.getElement()),';
		$m.__track_lines__[149] = 'pyjamas.ui.TabBar.py, line 149:\n    def onClick(self, sender=None):';
		$m.__track_lines__[150] = 'pyjamas.ui.TabBar.py, line 150:\n    for i in range(1, self.panel.getWidgetCount() - 1):';
		$m.__track_lines__[151] = 'pyjamas.ui.TabBar.py, line 151:\n    if DOM.isOrHasChild(self.panel.getWidget(i).getElement(),';
		$m.__track_lines__[153] = 'pyjamas.ui.TabBar.py, line 153:\n    return self.selectTab(i - 1)';
		$m.__track_lines__[154] = 'pyjamas.ui.TabBar.py, line 154:\n    return False';
		$m.__track_lines__[156] = 'pyjamas.ui.TabBar.py, line 156:\n    def removeTab(self, index):';
		$m.__track_lines__[157] = 'pyjamas.ui.TabBar.py, line 157:\n    self.checkTabIndex(index)';
		$m.__track_lines__[159] = 'pyjamas.ui.TabBar.py, line 159:\n    toRemove = self.panel.getWidget(index + 1)';
		$m.__track_lines__[160] = 'pyjamas.ui.TabBar.py, line 160:\n    if toRemove == self.selectedTab:';
		$m.__track_lines__[161] = 'pyjamas.ui.TabBar.py, line 161:\n    self.selectedTab = None';
		$m.__track_lines__[162] = 'pyjamas.ui.TabBar.py, line 162:\n    self.panel.remove(toRemove)';
		$m.__track_lines__[164] = 'pyjamas.ui.TabBar.py, line 164:\n    def removeTabListener(self, listener):';
		$m.__track_lines__[165] = 'pyjamas.ui.TabBar.py, line 165:\n    self.tabListeners.remove(listener)';
		$m.__track_lines__[167] = 'pyjamas.ui.TabBar.py, line 167:\n    def selectTab(self, index):';
		$m.__track_lines__[168] = 'pyjamas.ui.TabBar.py, line 168:\n    self.checkTabIndex(index)';
		$m.__track_lines__[170] = 'pyjamas.ui.TabBar.py, line 170:\n    for listener in self.tabListeners:';
		$m.__track_lines__[171] = 'pyjamas.ui.TabBar.py, line 171:\n    if not listener.onBeforeTabSelected(self, index):';
		$m.__track_lines__[172] = 'pyjamas.ui.TabBar.py, line 172:\n    return False';
		$m.__track_lines__[174] = 'pyjamas.ui.TabBar.py, line 174:\n    self.setSelectionStyle(self.selectedTab, False)';
		$m.__track_lines__[175] = 'pyjamas.ui.TabBar.py, line 175:\n    if index == -1:';
		$m.__track_lines__[176] = 'pyjamas.ui.TabBar.py, line 176:\n    self.selectedTab = None';
		$m.__track_lines__[177] = 'pyjamas.ui.TabBar.py, line 177:\n    return True';
		$m.__track_lines__[179] = 'pyjamas.ui.TabBar.py, line 179:\n    self.selectedTab = self.panel.getWidget(index + 1)';
		$m.__track_lines__[180] = 'pyjamas.ui.TabBar.py, line 180:\n    self.setSelectionStyle(self.selectedTab, True)';
		$m.__track_lines__[182] = 'pyjamas.ui.TabBar.py, line 182:\n    for listener in self.tabListeners:';
		$m.__track_lines__[183] = 'pyjamas.ui.TabBar.py, line 183:\n    listener.onTabSelected(self, index)';
		$m.__track_lines__[185] = 'pyjamas.ui.TabBar.py, line 185:\n    return True';
		$m.__track_lines__[187] = 'pyjamas.ui.TabBar.py, line 187:\n    def checkTabIndex(self, index):';
		$m.__track_lines__[188] = 'pyjamas.ui.TabBar.py, line 188:\n    if (index < -1) or (index >= self.getTabCount()):';
		$m.__track_lines__[190] = 'pyjamas.ui.TabBar.py, line 190:\n    pass';
		$m.__track_lines__[192] = 'pyjamas.ui.TabBar.py, line 192:\n    def setSelectionStyle(self, item, selected):';
		$m.__track_lines__[193] = 'pyjamas.ui.TabBar.py, line 193:\n    if item is not None:';
		$m.__track_lines__[194] = 'pyjamas.ui.TabBar.py, line 194:\n    if selected:';
		$m.__track_lines__[195] = 'pyjamas.ui.TabBar.py, line 195:\n    item.addStyleName("gwt-TabBarItem-selected")';
		$m.__track_lines__[196] = 'pyjamas.ui.TabBar.py, line 196:\n    self.setStyleName(DOM.getParent(item.getElement()),';
		$m.__track_lines__[200] = 'pyjamas.ui.TabBar.py, line 200:\n    item.removeStyleName("gwt-TabBarItem-selected")';
		$m.__track_lines__[201] = 'pyjamas.ui.TabBar.py, line 201:\n    self.setStyleName(DOM.getParent(item.getElement()),';
		$m.__track_lines__[204] = "pyjamas.ui.TabBar.py, line 204:\n    Factory.registerClass('pyjamas.ui.TabBar', 'TabBar', TabBar)";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs.track.module='pyjamas.ui.TabBar';
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
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=22;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ClickDelegatePanel'] = $p['___import___']('pyjamas.ui.ClickDelegatePanel.ClickDelegatePanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=25;
		$m['TabBar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.TabBar';
			$cls_definition.__md5__ = '4791de96a9e8894c5342fe0d998742af';
			$pyjs.track.lineno=27;
			$cls_definition['STYLENAME_DEFAULT'] = 'gwt-TabBarItem';
			$pyjs.track.lineno=29;
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
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
				var element,rest,first;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:29};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=29;
				$pyjs.track.lineno=31;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('StyleName');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs.track.lineno=31;
					(function(){try{try{$pyjs.in_try_except += 1;
					return kwargs.__setitem__('StyleName', 'gwt-TabBar');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				}
				$pyjs.track.lineno=35;
				element = null;
				$pyjs.track.lineno=36;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
					$pyjs.track.lineno=37;
					element = (function(){try{try{$pyjs.in_try_except += 1;
					return kwargs['pop']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				}
				$pyjs.track.lineno=39;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{Element:element}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) : $p['setattr'](self, 'panel', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{Element:element}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()); 
				$pyjs.track.lineno=40;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedTab', null) : $p['setattr'](self, 'selectedTab', null); 
				$pyjs.track.lineno=41;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tabListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) : $p['setattr'](self, 'tabListeners', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()); 
				$pyjs.track.lineno=43;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_BOTTOM'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs.track.lineno=45;
				first = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTML']('&nbsp;', true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=46;
				rest = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTML']('&nbsp;', true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=47;
				(function(){try{try{$pyjs.in_try_except += 1;
				return first['setStyleName']('gwt-TabBarFirst');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.track.lineno=48;
				(function(){try{try{$pyjs.in_try_except += 1;
				return rest['setStyleName']('gwt-TabBarRest');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=49;
				(function(){try{try{$pyjs.in_try_except += 1;
				return first['setHeight']('100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.track.lineno=50;
				(function(){try{try{$pyjs.in_try_except += 1;
				return rest['setHeight']('100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.track.lineno=52;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['add'](first);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs.track.lineno=53;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['add'](rest);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.track.lineno=54;
				(function(){try{try{$pyjs.in_try_except += 1;
				return first['setHeight']('100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.track.lineno=55;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['setCellHeight'](first, '100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=56;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['setCellWidth'](rest, '100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs.track.lineno=58;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, $p['getattr'](self, 'panel')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs.track.lineno=59;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['sinkEvents']($p['getattr']($m['Event'], 'ONCLICK'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=61;
			$method = $pyjs__bind_method2('addTab', function(text, asHTML) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					asHTML = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[4][1];

				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:61};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=62;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['insertTab'](text, asHTML, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getTabCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text'],['asHTML', false]]);
			$cls_definition['addTab'] = $method;
			$pyjs.track.lineno=64;
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:64};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=64;
				$pyjs.track.lineno=65;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addTabListener'] = $method;
			$pyjs.track.lineno=67;
			$method = $pyjs__bind_method2('getSelectedTab', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub2,$sub1;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:67};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=67;
				$pyjs.track.lineno=68;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is']($p['getattr'](self, 'selectedTab'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
					$pyjs.track.lineno=69;
					$pyjs.track.lineno=69;
					var $pyjs__ret = (typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=70;
				$pyjs.track.lineno=70;
				var $pyjs__ret = $p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['getWidgetIndex']($p['getattr'](self, 'selectedTab'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})(),$sub2=$constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSelectedTab'] = $method;
			$pyjs.track.lineno=72;
			$method = $pyjs__bind_method2('getTabCount', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,$sub4;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:72};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=72;
				$pyjs.track.lineno=73;
				$pyjs.track.lineno=73;
				var $pyjs__ret = $p['__op_sub']($sub3=(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(),$sub4=$constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTabCount'] = $method;
			$pyjs.track.lineno=75;
			$method = $pyjs__bind_method2('getTabWidget', function(index) {
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var widget,delPanel,$add2,$add1,focusablePanel;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:75};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=75;
				$pyjs.track.lineno=76;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp'](index, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getTabCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
					$pyjs.track.lineno=77;
					$pyjs.track.lineno=77;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=78;
				delPanel = (function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['getWidget']($p['__op_add']($add1=index,$add2=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs.track.lineno=79;
				focusablePanel = (function(){try{try{$pyjs.in_try_except += 1;
				return delPanel['getFocusablePanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs.track.lineno=80;
				widget = (function(){try{try{$pyjs.in_try_except += 1;
				return focusablePanel['getWidget']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs.track.lineno=81;
				$pyjs.track.lineno=81;
				var $pyjs__ret = widget;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getTabWidget'] = $method;
			$pyjs.track.lineno=83;
			$method = $pyjs__bind_method2('getTabHTML', function(index) {
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fpe,widget;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:83};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=84;
				widget = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getTabWidget'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs.track.lineno=85;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](widget, 'getHTML');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
					$pyjs.track.lineno=86;
					$pyjs.track.lineno=86;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return widget['getHTML']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](widget, 'getText');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
					$pyjs.track.lineno=88;
					$pyjs.track.lineno=88;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return widget['getText']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else {
					$pyjs.track.lineno=90;
					fpe = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getParent']((function(){try{try{$pyjs.in_try_except += 1;
					return self['focusablePanel']['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
					$pyjs.track.lineno=91;
					$pyjs.track.lineno=91;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getInnerHTML'](fpe);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getTabHTML'] = $method;
			$pyjs.track.lineno=93;
			$method = $pyjs__bind_method2('createTabTextWrapper', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:93};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=93;
				$pyjs.track.lineno=94;
				$pyjs.track.lineno=94;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createTabTextWrapper'] = $method;
			$pyjs.track.lineno=96;
			$method = $pyjs__bind_method2('insertTab', function(text, asHTML, beforeIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					asHTML = arguments[2];
					beforeIndex = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[5][1];
				var istext,$or1,$or2,$add3,item,$add4;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:96};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=96;
				$pyjs.track.lineno=105;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](beforeIndex, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs.track.lineno=106;
					beforeIndex = asHTML;
					$pyjs.track.lineno=107;
					asHTML = false;
				}
				$pyjs.track.lineno=109;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or1=($p['cmp'](beforeIndex, $constant_int_0) == -1))?$or1:($p['cmp'](beforeIndex, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getTabCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) == 1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
					$pyjs.track.lineno=111;
				}
				$pyjs.track.lineno=113;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](text, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
					$pyjs.track.lineno=114;
					text = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['HTML']('&nbsp;', true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
					$pyjs.track.lineno=115;
					(function(){try{try{$pyjs.in_try_except += 1;
					return text['setWidth']('100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
					$pyjs.track.lineno=116;
					(function(){try{try{$pyjs.in_try_except += 1;
					return text['setStyleName']('gwt-TabBarRest');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
					$pyjs.track.lineno=117;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['panel']['insert'](text, $p['__op_add']($add3=beforeIndex,$add4=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
					$pyjs.track.lineno=118;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['panel']['setCellWidth'](text, '100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
					$pyjs.track.lineno=119;
					$pyjs.track.lineno=119;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=121;
				istext = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](text, $p['basestring']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs.track.lineno=123;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](istext);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
					$pyjs.track.lineno=124;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](asHTML);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
						$pyjs.track.lineno=125;
						item = (function(){try{try{$pyjs.in_try_except += 1;
						return $m['HTML'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
					}
					else {
						$pyjs.track.lineno=127;
						item = (function(){try{try{$pyjs.in_try_except += 1;
						return $m['Label'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
					}
					$pyjs.track.lineno=128;
					(function(){try{try{$pyjs.in_try_except += 1;
					return item['setWordWrap'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				}
				else {
					$pyjs.track.lineno=131;
					item = text;
				}
				$pyjs.track.lineno=133;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['insertTabWidget'](item, beforeIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text'],['asHTML'],['beforeIndex', null]]);
			$cls_definition['insertTab'] = $method;
			$pyjs.track.lineno=135;
			$method = $pyjs__bind_method2('insertTabWidget', function(widget, beforeIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					beforeIndex = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var focusablePanel,$add7,$add5,$add6,$add8,delWidget;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:135};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=135;
				$pyjs.track.lineno=137;
				delWidget = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['ClickDelegatePanel'](self, widget, self, self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs.track.lineno=138;
				(function(){try{try{$pyjs.in_try_except += 1;
				return delWidget['setStyleName']($p['getattr'](self, 'STYLENAME_DEFAULT'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$pyjs.track.lineno=140;
				focusablePanel = (function(){try{try{$pyjs.in_try_except += 1;
				return delWidget['getFocusablePanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs.track.lineno=141;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['insert'](delWidget, $p['__op_add']($add5=beforeIndex,$add6=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
				$pyjs.track.lineno=143;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setStyleName']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getParent']((function(){try{try{$pyjs.in_try_except += 1;
				return delWidget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})(), $p['__op_add']($add7=$p['getattr'](self, 'STYLENAME_DEFAULT'),$add8='-wrapper'), true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['beforeIndex']]);
			$cls_definition['insertTabWidget'] = $method;
			$pyjs.track.lineno=149;
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];
				var $iter1_nextval,$iter1_type,$iter1_idx,i,$iter1_iter,$sub8,$iter1_array,$pyjs__trackstack_size_1,$sub7,$sub6,$sub5;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:149};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=149;
				$pyjs.track.lineno=150;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['range']($constant_int_1, $p['__op_sub']($sub5=(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})(),$sub6=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					i = $iter1_nextval.$nextval;
					$pyjs.track.lineno=151;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['isOrHasChild']((function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return self['panel']['getWidget'](i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
					return sender['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
						$pyjs.track.lineno=153;
						$pyjs.track.lineno=153;
						var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
						return self['selectTab']($p['__op_sub']($sub7=i,$sub8=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=154;
				$pyjs.track.lineno=154;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$pyjs.track.lineno=156;
			$method = $pyjs__bind_method2('removeTab', function(index) {
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,$add10,toRemove;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:156};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=156;
				$pyjs.track.lineno=157;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['checkTabIndex'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$pyjs.track.lineno=159;
				toRemove = (function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['getWidget']($p['__op_add']($add9=index,$add10=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$pyjs.track.lineno=160;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](toRemove, $p['getattr'](self, 'selectedTab')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
					$pyjs.track.lineno=161;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedTab', null) : $p['setattr'](self, 'selectedTab', null); 
				}
				$pyjs.track.lineno=162;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['remove'](toRemove);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['removeTab'] = $method;
			$pyjs.track.lineno=164;
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:164};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=164;
				$pyjs.track.lineno=165;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['tabListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeTabListener'] = $method;
			$pyjs.track.lineno=167;
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter3_array,$iter3_type,listener,$iter2_idx,$iter3_idx,$add11,$add12,$pyjs__trackstack_size_1,$iter3_nextval,$iter2_array,$iter3_iter;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:167};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=167;
				$pyjs.track.lineno=168;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['checkTabIndex'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs.track.lineno=170;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'tabListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					listener = $iter2_nextval.$nextval;
					$pyjs.track.lineno=171;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return listener['onBeforeTabSelected'](self, index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
						$pyjs.track.lineno=172;
						$pyjs.track.lineno=172;
						var $pyjs__ret = false;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=174;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setSelectionStyle']($p['getattr'](self, 'selectedTab'), false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
				$pyjs.track.lineno=175;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](index, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
					$pyjs.track.lineno=176;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedTab', null) : $p['setattr'](self, 'selectedTab', null); 
					$pyjs.track.lineno=177;
					$pyjs.track.lineno=177;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=179;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedTab', (function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['getWidget']($p['__op_add']($add11=index,$add12=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()) : $p['setattr'](self, 'selectedTab', (function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['getWidget']($p['__op_add']($add11=index,$add12=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()); 
				$pyjs.track.lineno=180;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setSelectionStyle']($p['getattr'](self, 'selectedTab'), true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				$pyjs.track.lineno=182;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'tabListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					listener = $iter3_nextval.$nextval;
					$pyjs.track.lineno=183;
					(function(){try{try{$pyjs.in_try_except += 1;
					return listener['onTabSelected'](self, index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=185;
				$pyjs.track.lineno=185;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['selectTab'] = $method;
			$pyjs.track.lineno=187;
			$method = $pyjs__bind_method2('checkTabIndex', function(index) {
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
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or3,$or4;
				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:187};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=187;
				$pyjs.track.lineno=188;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or3=($p['cmp'](index, (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))) == -1))?$or3:((($p['cmp'](index, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getTabCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()))|1) == 1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
					$pyjs.track.lineno=190;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['checkTabIndex'] = $method;
			$pyjs.track.lineno=192;
			$method = $pyjs__bind_method2('setSelectionStyle', function(item, selected) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					selected = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4791de96a9e8894c5342fe0d998742af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.TabBar', lineno:192};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.TabBar';
				$pyjs.track.lineno=192;
				$pyjs.track.lineno=193;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](item, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()) {
					$pyjs.track.lineno=194;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](selected);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()) {
						$pyjs.track.lineno=195;
						(function(){try{try{$pyjs.in_try_except += 1;
						return item['addStyleName']('gwt-TabBarItem-selected');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
						$pyjs.track.lineno=196;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['setStyleName']((function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['getParent']((function(){try{try{$pyjs.in_try_except += 1;
						return item['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})(), 'gwt-TabBarItem-wrapper-selected', true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
					}
					else {
						$pyjs.track.lineno=200;
						(function(){try{try{$pyjs.in_try_except += 1;
						return item['removeStyleName']('gwt-TabBarItem-selected');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
						$pyjs.track.lineno=201;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['setStyleName']((function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['getParent']((function(){try{try{$pyjs.in_try_except += 1;
						return item['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})(), 'gwt-TabBarItem-wrapper-selected', false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['item'],['selected']]);
			$cls_definition['setSelectionStyle'] = $method;
			$pyjs.track.lineno=25;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TabBar', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=204;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.TabBar', 'TabBar', $m['TabBar']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.TabBar */


/* end module: pyjamas.ui.TabBar */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.Event', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ClickDelegatePanel.ClickDelegatePanel', 'pyjamas.ui.ClickDelegatePanel', 'pyjamas.ui.HasAlignment']
*/
