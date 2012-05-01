/* start module: pyjamas.ui.DecoratorPanel */
$pyjs.loaded_modules['pyjamas.ui.DecoratorPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DecoratorPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DecoratorPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.DecoratorPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.DecoratorPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DecoratorPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['DecoratorPanel'] = $pyjs.loaded_modules['pyjamas.ui.DecoratorPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.DecoratorPanel.py, line 1:\n    # Copyright (C) 2006-2008 Google Inc.';
		$m.__track_lines__[4] = 'pyjamas.ui.DecoratorPanel.py, line 4:\n    from pyjamas import DOM';
		$m.__track_lines__[5] = 'pyjamas.ui.DecoratorPanel.py, line 5:\n    from pyjamas.ui.SimplePanel import SimplePanel';
		$m.__track_lines__[6] = 'pyjamas.ui.DecoratorPanel.py, line 6:\n    from pyjamas import Factory';
		$m.__track_lines__[7] = 'pyjamas.ui.DecoratorPanel.py, line 7:\n    from pyjamas.ui.TabPanel import TabPanel';
		$m.__track_lines__[8] = 'pyjamas.ui.DecoratorPanel.py, line 8:\n    from pyjamas.ui.TabBar import TabBar';
		$m.__track_lines__[10] = 'pyjamas.ui.DecoratorPanel.py, line 10:\n    """';
		$m.__track_lines__[51] = 'pyjamas.ui.DecoratorPanel.py, line 51:\n    class DecoratorPanel(SimplePanel):';
		$m.__track_lines__[53] = 'pyjamas.ui.DecoratorPanel.py, line 53:\n    DEFAULT_STYLENAME = "gwt-DecoratorPanel"';
		$m.__track_lines__[56] = 'pyjamas.ui.DecoratorPanel.py, line 56:\n    DEFAULT_ROW_STYLENAMES = [ "top", "middle", "bottom" ]';
		$m.__track_lines__[58] = 'pyjamas.ui.DecoratorPanel.py, line 58:\n    def __init__(self, rowStyles=None, containerIndex=1, **kwargs):';
		$m.__track_lines__[68] = 'pyjamas.ui.DecoratorPanel.py, line 68:\n    if rowStyles is None:';
		$m.__track_lines__[69] = 'pyjamas.ui.DecoratorPanel.py, line 69:\n    rowStyles = self.DEFAULT_ROW_STYLENAMES';
		$m.__track_lines__[71] = "pyjamas.ui.DecoratorPanel.py, line 71:\n    if kwargs.has_key('Element'):";
		$m.__track_lines__[72] = "pyjamas.ui.DecoratorPanel.py, line 72:\n    self.table = kwargs.pop('Element')";
		$m.__track_lines__[73] = 'pyjamas.ui.DecoratorPanel.py, line 73:\n    fc = DOM.getFirstChild(self.table)';
		$m.__track_lines__[74] = 'pyjamas.ui.DecoratorPanel.py, line 74:\n    if fc:';
		$m.__track_lines__[75] = 'pyjamas.ui.DecoratorPanel.py, line 75:\n    self.tbody = fc';
		$m.__track_lines__[77] = 'pyjamas.ui.DecoratorPanel.py, line 77:\n    self.tbody = DOM.createTBody()';
		$m.__track_lines__[78] = 'pyjamas.ui.DecoratorPanel.py, line 78:\n    DOM.appendChild(self.table, self.tbody)';
		$m.__track_lines__[81] = 'pyjamas.ui.DecoratorPanel.py, line 81:\n    self.table = DOM.createTable()';
		$m.__track_lines__[82] = 'pyjamas.ui.DecoratorPanel.py, line 82:\n    self.tbody = DOM.createTBody()';
		$m.__track_lines__[83] = 'pyjamas.ui.DecoratorPanel.py, line 83:\n    DOM.appendChild(self.table, self.tbody)';
		$m.__track_lines__[84] = 'pyjamas.ui.DecoratorPanel.py, line 84:\n    DOM.setAttribute(self.table, "cellSpacing", "0")';
		$m.__track_lines__[85] = 'pyjamas.ui.DecoratorPanel.py, line 85:\n    DOM.setAttribute(self.table, "cellPadding", "0")';
		$m.__track_lines__[87] = "pyjamas.ui.DecoratorPanel.py, line 87:\n    if not kwargs.has_key('StyleName'): kwargs['StyleName']=self.DEFAULT_STYLENAME";
		$m.__track_lines__[88] = 'pyjamas.ui.DecoratorPanel.py, line 88:\n    SimplePanel.__init__(self, self.table, **kwargs)';
		$m.__track_lines__[91] = 'pyjamas.ui.DecoratorPanel.py, line 91:\n    for i in range(len(rowStyles)):';
		$m.__track_lines__[92] = 'pyjamas.ui.DecoratorPanel.py, line 92:\n    row = self.createTR(rowStyles[i])';
		$m.__track_lines__[93] = 'pyjamas.ui.DecoratorPanel.py, line 93:\n    DOM.appendChild(self.tbody, row)';
		$m.__track_lines__[94] = 'pyjamas.ui.DecoratorPanel.py, line 94:\n    if i == containerIndex:';
		$m.__track_lines__[95] = 'pyjamas.ui.DecoratorPanel.py, line 95:\n    self.containerElem = DOM.getFirstChild(DOM.getChild(row, 1))';
		$m.__track_lines__[97] = 'pyjamas.ui.DecoratorPanel.py, line 97:\n    def createTR(self, styleName) :';
		$m.__track_lines__[108] = 'pyjamas.ui.DecoratorPanel.py, line 108:\n    trElem = DOM.createTR()';
		$m.__track_lines__[109] = 'pyjamas.ui.DecoratorPanel.py, line 109:\n    self.setStyleName(trElem, styleName)';
		$m.__track_lines__[110] = 'pyjamas.ui.DecoratorPanel.py, line 110:\n    DOM.appendChild(trElem, self.createTD(styleName + "Left"))';
		$m.__track_lines__[111] = 'pyjamas.ui.DecoratorPanel.py, line 111:\n    DOM.appendChild(trElem, self.createTD(styleName + "Center"))';
		$m.__track_lines__[112] = 'pyjamas.ui.DecoratorPanel.py, line 112:\n    DOM.appendChild(trElem, self.createTD(styleName + "Right"))';
		$m.__track_lines__[113] = 'pyjamas.ui.DecoratorPanel.py, line 113:\n    return trElem';
		$m.__track_lines__[115] = 'pyjamas.ui.DecoratorPanel.py, line 115:\n    def createTD(self, styleName) :';
		$m.__track_lines__[121] = 'pyjamas.ui.DecoratorPanel.py, line 121:\n    tdElem = DOM.createTD()';
		$m.__track_lines__[122] = 'pyjamas.ui.DecoratorPanel.py, line 122:\n    inner = DOM.createDiv()';
		$m.__track_lines__[123] = 'pyjamas.ui.DecoratorPanel.py, line 123:\n    DOM.appendChild(tdElem, inner)';
		$m.__track_lines__[124] = 'pyjamas.ui.DecoratorPanel.py, line 124:\n    self.setStyleName(tdElem, styleName)';
		$m.__track_lines__[125] = 'pyjamas.ui.DecoratorPanel.py, line 125:\n    self.setStyleName(inner, styleName + "Inner")';
		$m.__track_lines__[126] = 'pyjamas.ui.DecoratorPanel.py, line 126:\n    return tdElem';
		$m.__track_lines__[128] = 'pyjamas.ui.DecoratorPanel.py, line 128:\n    def getCellElement(self, row, cell) :';
		$m.__track_lines__[135] = 'pyjamas.ui.DecoratorPanel.py, line 135:\n    tr = DOM.getChild(self.tbody, row)';
		$m.__track_lines__[136] = 'pyjamas.ui.DecoratorPanel.py, line 136:\n    td = DOM.getChild(tr, cell)';
		$m.__track_lines__[137] = 'pyjamas.ui.DecoratorPanel.py, line 137:\n    return DOM.getFirstChild(td)';
		$m.__track_lines__[139] = 'pyjamas.ui.DecoratorPanel.py, line 139:\n    def getContainerElement(self):';
		$m.__track_lines__[140] = 'pyjamas.ui.DecoratorPanel.py, line 140:\n    return self.containerElem';
		$m.__track_lines__[142] = "pyjamas.ui.DecoratorPanel.py, line 142:\n    Factory.registerClass('pyjamas.ui.DecoratorPanel', 'DecoratorPanel', DecoratorPanel)";
		$m.__track_lines__[144] = 'pyjamas.ui.DecoratorPanel.py, line 144:\n    class DecoratedTabBar(TabBar):';
		$m.__track_lines__[146] = 'pyjamas.ui.DecoratorPanel.py, line 146:\n    TAB_ROW_STYLES = ["tabTop", "tabMiddle"]';
		$m.__track_lines__[148] = 'pyjamas.ui.DecoratorPanel.py, line 148:\n    STYLENAME_DEFAULT = "gwt-DecoratedTabBar"';
		$m.__track_lines__[150] = 'pyjamas.ui.DecoratorPanel.py, line 150:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[153] = 'pyjamas.ui.DecoratorPanel.py, line 153:\n    TabBar.__init__(self, **kwargs)';
		$m.__track_lines__[155] = 'pyjamas.ui.DecoratorPanel.py, line 155:\n    def createTabTextWrapper(self):';
		$m.__track_lines__[156] = 'pyjamas.ui.DecoratorPanel.py, line 156:\n    return DecoratorPanel(self.TAB_ROW_STYLES, 1)';
		$m.__track_lines__[158] = "pyjamas.ui.DecoratorPanel.py, line 158:\n    Factory.registerClass('pyjamas.ui.DecoratorPanel', 'DecoratedTabBar', DecoratedTabBar)";
		$m.__track_lines__[160] = 'pyjamas.ui.DecoratorPanel.py, line 160:\n    class DecoratedTabPanel(TabPanel):';
		$m.__track_lines__[161] = 'pyjamas.ui.DecoratorPanel.py, line 161:\n    DEFAULT_STYLENAME = "gwt-DecoratedTabPanel"';
		$m.__track_lines__[163] = 'pyjamas.ui.DecoratorPanel.py, line 163:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[164] = "pyjamas.ui.DecoratorPanel.py, line 164:\n    if not kwargs.has_key('StyleName'): kwargs['StyleName']=self.DEFAULT_STYLENAME";
		$m.__track_lines__[165] = "pyjamas.ui.DecoratorPanel.py, line 165:\n    if kwargs.has_key('TabBar'):";
		$m.__track_lines__[166] = "pyjamas.ui.DecoratorPanel.py, line 166:\n    tabbar = kwargs.pop('TabBar')";
		$m.__track_lines__[168] = 'pyjamas.ui.DecoratorPanel.py, line 168:\n    tabbar = DecoratedTabBar()';
		$m.__track_lines__[169] = 'pyjamas.ui.DecoratorPanel.py, line 169:\n    TabPanel.__init__(self, tabbar, **kwargs)';
		$m.__track_lines__[171] = 'pyjamas.ui.DecoratorPanel.py, line 171:\n    self.getTabBar().setStyleName(DecoratedTabBar.STYLENAME_DEFAULT)';
		$m.__track_lines__[173] = 'pyjamas.ui.DecoratorPanel.py, line 173:\n    def createTabTextWrapper(self):';
		$m.__track_lines__[174] = 'pyjamas.ui.DecoratorPanel.py, line 174:\n    return DecoratorPanel(DecoratedTabBar.TAB_ROW_STYLES, 1)';
		$m.__track_lines__[176] = "pyjamas.ui.DecoratorPanel.py, line 176:\n    Factory.registerClass('pyjamas.ui.DecoratorPanel', 'DecoratedTabPanel', DecoratedTabPanel)";
		$m.__track_lines__[178] = 'pyjamas.ui.DecoratorPanel.py, line 178:\n    class DecoratorTitledPanel(DecoratorPanel):';
		$m.__track_lines__[180] = 'pyjamas.ui.DecoratorPanel.py, line 180:\n    def __init__(self, title, titleStyle=None, imgStyle=None,';
		$m.__track_lines__[184] = 'pyjamas.ui.DecoratorPanel.py, line 184:\n    if rowStyles is None:';
		$m.__track_lines__[185] = 'pyjamas.ui.DecoratorPanel.py, line 185:\n    rowStyles = ["top", "top2", "middle", "bottom"]';
		$m.__track_lines__[187] = 'pyjamas.ui.DecoratorPanel.py, line 187:\n    if titleStyle is None:';
		$m.__track_lines__[188] = 'pyjamas.ui.DecoratorPanel.py, line 188:\n    titleStyle = "title"';
		$m.__track_lines__[190] = 'pyjamas.ui.DecoratorPanel.py, line 190:\n    DecoratorPanel.__init__(self, rowStyles, containerIndex, **kwargs)';
		$m.__track_lines__[192] = 'pyjamas.ui.DecoratorPanel.py, line 192:\n    inner = self.getCellElement(titleIndex, 1)';
		$m.__track_lines__[193] = 'pyjamas.ui.DecoratorPanel.py, line 193:\n    if imgStyle:';
		$m.__track_lines__[194] = 'pyjamas.ui.DecoratorPanel.py, line 194:\n    img = DOM.createDiv()';
		$m.__track_lines__[195] = 'pyjamas.ui.DecoratorPanel.py, line 195:\n    DOM.setAttribute(img, "className", imgStyle)';
		$m.__track_lines__[196] = 'pyjamas.ui.DecoratorPanel.py, line 196:\n    DOM.appendChild(inner, img)';
		$m.__track_lines__[197] = 'pyjamas.ui.DecoratorPanel.py, line 197:\n    tdiv = DOM.createDiv()';
		$m.__track_lines__[198] = 'pyjamas.ui.DecoratorPanel.py, line 198:\n    DOM.setAttribute(tdiv, "className", titleStyle)';
		$m.__track_lines__[199] = 'pyjamas.ui.DecoratorPanel.py, line 199:\n    DOM.setInnerText(tdiv, title)';
		$m.__track_lines__[200] = 'pyjamas.ui.DecoratorPanel.py, line 200:\n    DOM.appendChild(inner, tdiv)';
		$m.__track_lines__[202] = "pyjamas.ui.DecoratorPanel.py, line 202:\n    Factory.registerClass('pyjamas.ui.DecoratorPanel', 'DecoratorTitledPanel', DecoratorTitledPanel)";

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs.track.module='pyjamas.ui.DecoratorPanel';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=10;
		$pyjs.track.lineno=51;
		$m['DecoratorPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DecoratorPanel';
			$cls_definition.__md5__ = '055259f89086a68660c10c422bf50c30';
			$pyjs.track.lineno=53;
			$cls_definition['DEFAULT_STYLENAME'] = 'gwt-DecoratorPanel';
			$pyjs.track.lineno=56;
			$cls_definition['DEFAULT_ROW_STYLENAMES'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list'](['top', 'middle', 'bottom']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=58;
			$method = $pyjs__bind_method2('__init__', function(rowStyles, containerIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					rowStyles = arguments[1];
					containerIndex = arguments[2];
					var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '055259f89086a68660c10c422bf50c30') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof containerIndex != 'undefined') {
						if (containerIndex !== null && typeof containerIndex['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = containerIndex;
							containerIndex = arguments[3];
						}
					} else 					if (typeof rowStyles != 'undefined') {
						if (rowStyles !== null && typeof rowStyles['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = rowStyles;
							rowStyles = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof rowStyles == 'undefined') rowStyles=arguments.callee.__args__[3][1];
				if (typeof containerIndex == 'undefined') containerIndex=arguments.callee.__args__[4][1];
				var $iter1_nextval,$iter1_type,i,$pyjs__trackstack_size_1,fc,$iter1_iter,$iter1_array,row,$iter1_idx;
				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:58};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=58;
				$pyjs.track.lineno=68;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](rowStyles, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs.track.lineno=69;
					rowStyles = $p['getattr'](self, 'DEFAULT_ROW_STYLENAMES');
				}
				$pyjs.track.lineno=71;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
					$pyjs.track.lineno=72;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('table', (function(){try{try{$pyjs.in_try_except += 1;
					return kwargs['pop']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) : $p['setattr'](self, 'table', (function(){try{try{$pyjs.in_try_except += 1;
					return kwargs['pop']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()); 
					$pyjs.track.lineno=73;
					fc = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getFirstChild']($p['getattr'](self, 'table'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
					$pyjs.track.lineno=74;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](fc);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
						$pyjs.track.lineno=75;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tbody', fc) : $p['setattr'](self, 'tbody', fc); 
					}
					else {
						$pyjs.track.lineno=77;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tbody', (function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['createTBody']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) : $p['setattr'](self, 'tbody', (function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['createTBody']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()); 
						$pyjs.track.lineno=78;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['appendChild']($p['getattr'](self, 'table'), $p['getattr'](self, 'tbody'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
					}
				}
				else {
					$pyjs.track.lineno=81;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('table', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createTable']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) : $p['setattr'](self, 'table', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createTable']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()); 
					$pyjs.track.lineno=82;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tbody', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createTBody']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) : $p['setattr'](self, 'tbody', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createTBody']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()); 
					$pyjs.track.lineno=83;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['appendChild']($p['getattr'](self, 'table'), $p['getattr'](self, 'tbody'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
					$pyjs.track.lineno=84;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'cellSpacing', '0');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
					$pyjs.track.lineno=85;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'cellPadding', '0');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				}
				$pyjs.track.lineno=87;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('StyleName');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
					$pyjs.track.lineno=87;
					(function(){try{try{$pyjs.in_try_except += 1;
					return kwargs.__setitem__('StyleName', $p['getattr'](self, 'DEFAULT_STYLENAME'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				}
				$pyjs.track.lineno=88;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self, $p['getattr'](self, 'table')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.track.lineno=91;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](rowStyles);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					i = $iter1_nextval.$nextval;
					$pyjs.track.lineno=92;
					row = (function(){try{try{$pyjs.in_try_except += 1;
					return self['createTR'](rowStyles.__getitem__(i));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					$pyjs.track.lineno=93;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['appendChild']($p['getattr'](self, 'tbody'), row);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$pyjs.track.lineno=94;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](i, containerIndex));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
						$pyjs.track.lineno=95;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('containerElem', (function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['getFirstChild']((function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['getChild'](row, $constant_int_1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) : $p['setattr'](self, 'containerElem', (function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['getFirstChild']((function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['getChild'](row, $constant_int_1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()); 
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['rowStyles', null],['containerIndex', $constant_int_1]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=97;
			$method = $pyjs__bind_method2('createTR', function(styleName) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					styleName = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '055259f89086a68660c10c422bf50c30') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add6,$add4,$add5,trElem;
				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:97};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=97;
				$pyjs.track.lineno=108;
				trElem = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createTR']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs.track.lineno=109;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setStyleName'](trElem, styleName);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.track.lineno=110;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild'](trElem, (function(){try{try{$pyjs.in_try_except += 1;
				return self['createTD']($p['__op_add']($add1=styleName,$add2='Left'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs.track.lineno=111;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild'](trElem, (function(){try{try{$pyjs.in_try_except += 1;
				return self['createTD']($p['__op_add']($add3=styleName,$add4='Center'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs.track.lineno=112;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild'](trElem, (function(){try{try{$pyjs.in_try_except += 1;
				return self['createTD']($p['__op_add']($add5=styleName,$add6='Right'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs.track.lineno=113;
				$pyjs.track.lineno=113;
				var $pyjs__ret = trElem;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['styleName']]);
			$cls_definition['createTR'] = $method;
			$pyjs.track.lineno=115;
			$method = $pyjs__bind_method2('createTD', function(styleName) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					styleName = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '055259f89086a68660c10c422bf50c30') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tdElem,inner,$add8,$add7;
				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:115};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=115;
				$pyjs.track.lineno=121;
				tdElem = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createTD']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				$pyjs.track.lineno=122;
				inner = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs.track.lineno=123;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild'](tdElem, inner);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$pyjs.track.lineno=124;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setStyleName'](tdElem, styleName);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs.track.lineno=125;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setStyleName'](inner, $p['__op_add']($add7=styleName,$add8='Inner'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$pyjs.track.lineno=126;
				$pyjs.track.lineno=126;
				var $pyjs__ret = tdElem;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['styleName']]);
			$cls_definition['createTD'] = $method;
			$pyjs.track.lineno=128;
			$method = $pyjs__bind_method2('getCellElement', function(row, cell) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					cell = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '055259f89086a68660c10c422bf50c30') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tr,td;
				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:128};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=128;
				$pyjs.track.lineno=135;
				tr = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getChild']($p['getattr'](self, 'tbody'), row);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$pyjs.track.lineno=136;
				td = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getChild'](tr, cell);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				$pyjs.track.lineno=137;
				$pyjs.track.lineno=137;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getFirstChild'](td);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['row'],['cell']]);
			$cls_definition['getCellElement'] = $method;
			$pyjs.track.lineno=139;
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
					if (self.prototype.__md5__ !== '055259f89086a68660c10c422bf50c30') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:139};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=139;
				$pyjs.track.lineno=140;
				$pyjs.track.lineno=140;
				var $pyjs__ret = $p['getattr'](self, 'containerElem');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getContainerElement'] = $method;
			$pyjs.track.lineno=51;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratorPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=142;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratorPanel', $m['DecoratorPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
		$pyjs.track.lineno=144;
		$m['DecoratedTabBar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DecoratorPanel';
			$cls_definition.__md5__ = '45ef20009ce542c91251190b5fcd6ba2';
			$pyjs.track.lineno=146;
			$cls_definition['TAB_ROW_STYLES'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list'](['tabTop', 'tabMiddle']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs.track.lineno=148;
			$cls_definition['STYLENAME_DEFAULT'] = 'gwt-DecoratedTabBar';
			$pyjs.track.lineno=150;
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
					if (self.prototype.__md5__ !== '45ef20009ce542c91251190b5fcd6ba2') {
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

				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:150};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=150;
				$pyjs.track.lineno=153;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['TabBar'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=155;
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
					if (self.prototype.__md5__ !== '45ef20009ce542c91251190b5fcd6ba2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:155};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=155;
				$pyjs.track.lineno=156;
				$pyjs.track.lineno=156;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DecoratorPanel']($p['getattr'](self, 'TAB_ROW_STYLES'), $constant_int_1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createTabTextWrapper'] = $method;
			$pyjs.track.lineno=144;
			var $bases = new Array($m['TabBar']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratedTabBar', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=158;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratedTabBar', $m['DecoratedTabBar']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
		$pyjs.track.lineno=160;
		$m['DecoratedTabPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DecoratorPanel';
			$cls_definition.__md5__ = '3f04b0c2532e9fa1fd045b7709e13cd2';
			$pyjs.track.lineno=161;
			$cls_definition['DEFAULT_STYLENAME'] = 'gwt-DecoratedTabPanel';
			$pyjs.track.lineno=163;
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
					if (self.prototype.__md5__ !== '3f04b0c2532e9fa1fd045b7709e13cd2') {
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
				var tabbar;
				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:163};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=163;
				$pyjs.track.lineno=164;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('StyleName');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
					$pyjs.track.lineno=164;
					(function(){try{try{$pyjs.in_try_except += 1;
					return kwargs.__setitem__('StyleName', $p['getattr'](self, 'DEFAULT_STYLENAME'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				}
				$pyjs.track.lineno=165;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('TabBar');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
					$pyjs.track.lineno=166;
					tabbar = (function(){try{try{$pyjs.in_try_except += 1;
					return kwargs['pop']('TabBar');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				}
				else {
					$pyjs.track.lineno=168;
					tabbar = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DecoratedTabBar']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				}
				$pyjs.track.lineno=169;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['TabPanel'], '__init__', null, kwargs, [{}, self, tabbar]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
				$pyjs.track.lineno=171;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return self['getTabBar']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()['setStyleName']($p['getattr']($m['DecoratedTabBar'], 'STYLENAME_DEFAULT'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=173;
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
					if (self.prototype.__md5__ !== '3f04b0c2532e9fa1fd045b7709e13cd2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:173};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=173;
				$pyjs.track.lineno=174;
				$pyjs.track.lineno=174;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DecoratorPanel']($p['getattr']($m['DecoratedTabBar'], 'TAB_ROW_STYLES'), $constant_int_1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createTabTextWrapper'] = $method;
			$pyjs.track.lineno=160;
			var $bases = new Array($m['TabPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratedTabPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=176;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratedTabPanel', $m['DecoratedTabPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
		$pyjs.track.lineno=178;
		$m['DecoratorTitledPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DecoratorPanel';
			$cls_definition.__md5__ = '6fac41c6e5acbe3034d22e987defff00';
			$pyjs.track.lineno=180;
			$method = $pyjs__bind_method2('__init__', function(title, titleStyle, imgStyle, rowStyles, containerIndex, titleIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 7 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 7)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 8, arguments.length+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					titleStyle = arguments[2];
					imgStyle = arguments[3];
					rowStyles = arguments[4];
					containerIndex = arguments[5];
					titleIndex = arguments[6];
					var kwargs = arguments.length >= 8 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 8, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6fac41c6e5acbe3034d22e987defff00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof titleIndex != 'undefined') {
						if (titleIndex !== null && typeof titleIndex['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = titleIndex;
							titleIndex = arguments[7];
						}
					} else 					if (typeof containerIndex != 'undefined') {
						if (containerIndex !== null && typeof containerIndex['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = containerIndex;
							containerIndex = arguments[7];
						}
					} else 					if (typeof rowStyles != 'undefined') {
						if (rowStyles !== null && typeof rowStyles['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = rowStyles;
							rowStyles = arguments[7];
						}
					} else 					if (typeof imgStyle != 'undefined') {
						if (imgStyle !== null && typeof imgStyle['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = imgStyle;
							imgStyle = arguments[7];
						}
					} else 					if (typeof titleStyle != 'undefined') {
						if (titleStyle !== null && typeof titleStyle['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = titleStyle;
							titleStyle = arguments[7];
						}
					} else 					if (typeof title != 'undefined') {
						if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = title;
							title = arguments[7];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[7];
						}
					} else {
					}
				}
				if (typeof titleStyle == 'undefined') titleStyle=arguments.callee.__args__[4][1];
				if (typeof imgStyle == 'undefined') imgStyle=arguments.callee.__args__[5][1];
				if (typeof rowStyles == 'undefined') rowStyles=arguments.callee.__args__[6][1];
				if (typeof containerIndex == 'undefined') containerIndex=arguments.callee.__args__[7][1];
				if (typeof titleIndex == 'undefined') titleIndex=arguments.callee.__args__[8][1];
				var img,tdiv,inner;
				$pyjs.track={module:'pyjamas.ui.DecoratorPanel', lineno:180};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DecoratorPanel';
				$pyjs.track.lineno=180;
				$pyjs.track.lineno=184;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](rowStyles, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
					$pyjs.track.lineno=185;
					rowStyles = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['list'](['top', 'top2', 'middle', 'bottom']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				}
				$pyjs.track.lineno=187;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](titleStyle, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
					$pyjs.track.lineno=188;
					titleStyle = 'title';
				}
				$pyjs.track.lineno=190;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['DecoratorPanel'], '__init__', null, kwargs, [{}, self, rowStyles, containerIndex]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
				$pyjs.track.lineno=192;
				inner = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getCellElement'](titleIndex, $constant_int_1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$pyjs.track.lineno=193;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](imgStyle);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
					$pyjs.track.lineno=194;
					img = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					$pyjs.track.lineno=195;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setAttribute'](img, 'className', imgStyle);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					$pyjs.track.lineno=196;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['appendChild'](inner, img);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
				}
				$pyjs.track.lineno=197;
				tdiv = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$pyjs.track.lineno=198;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setAttribute'](tdiv, 'className', titleStyle);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs.track.lineno=199;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setInnerText'](tdiv, title);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				$pyjs.track.lineno=200;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild'](inner, tdiv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['title'],['titleStyle', null],['imgStyle', null],['rowStyles', null],['containerIndex', $constant_int_2],['titleIndex', $constant_int_1]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=178;
			var $bases = new Array($m['DecoratorPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratorTitledPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=202;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratorTitledPanel', $m['DecoratorTitledPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DecoratorPanel */


/* end module: pyjamas.ui.DecoratorPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.Factory', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.TabBar.TabBar', 'pyjamas.ui.TabBar']
*/
