/* start module: pyjamas.ui.DockPanel */
$pyjs.loaded_modules['pyjamas.ui.DockPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.DockPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.DockPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.DockPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.DockPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DockPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['DockPanel'] = $pyjs.loaded_modules['pyjamas.ui.DockPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.DockPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.DockPanel.py, line 15:\n    from pyjamas import Factory';
		$m.__track_lines__[16] = 'pyjamas.ui.DockPanel.py, line 16:\n    from pyjamas import DOM';
		$m.__track_lines__[18] = 'pyjamas.ui.DockPanel.py, line 18:\n    from pyjamas.ui.CellPanel import CellPanel';
		$m.__track_lines__[19] = 'pyjamas.ui.DockPanel.py, line 19:\n    from pyjamas.ui import HasHorizontalAlignment';
		$m.__track_lines__[20] = 'pyjamas.ui.DockPanel.py, line 20:\n    from pyjamas.ui import HasVerticalAlignment';
		$m.__track_lines__[22] = 'pyjamas.ui.DockPanel.py, line 22:\n    class DockPanelTmpRow:';
		$m.__track_lines__[23] = 'pyjamas.ui.DockPanel.py, line 23:\n    center = 0';
		$m.__track_lines__[24] = 'pyjamas.ui.DockPanel.py, line 24:\n    tr = None';
		$m.__track_lines__[26] = 'pyjamas.ui.DockPanel.py, line 26:\n    class LayoutData:';
		$m.__track_lines__[27] = 'pyjamas.ui.DockPanel.py, line 27:\n    def __init__(self, direction):';
		$m.__track_lines__[28] = 'pyjamas.ui.DockPanel.py, line 28:\n    self.direction = direction';
		$m.__track_lines__[29] = 'pyjamas.ui.DockPanel.py, line 29:\n    self.hAlign = "left"';
		$m.__track_lines__[30] = 'pyjamas.ui.DockPanel.py, line 30:\n    self.height = ""';
		$m.__track_lines__[31] = 'pyjamas.ui.DockPanel.py, line 31:\n    self.td = None';
		$m.__track_lines__[32] = 'pyjamas.ui.DockPanel.py, line 32:\n    self.vAlign = "top"';
		$m.__track_lines__[33] = 'pyjamas.ui.DockPanel.py, line 33:\n    self.width = ""';
		$m.__track_lines__[36] = 'pyjamas.ui.DockPanel.py, line 36:\n    class DockPanel(CellPanel):';
		$m.__track_lines__[38] = 'pyjamas.ui.DockPanel.py, line 38:\n    CENTER = "center"';
		$m.__track_lines__[39] = 'pyjamas.ui.DockPanel.py, line 39:\n    EAST = "east"';
		$m.__track_lines__[40] = 'pyjamas.ui.DockPanel.py, line 40:\n    NORTH = "north"';
		$m.__track_lines__[41] = 'pyjamas.ui.DockPanel.py, line 41:\n    SOUTH = "south"';
		$m.__track_lines__[42] = 'pyjamas.ui.DockPanel.py, line 42:\n    WEST = "west"';
		$m.__track_lines__[44] = 'pyjamas.ui.DockPanel.py, line 44:\n    elem_props = [';
		$m.__track_lines__[53] = 'pyjamas.ui.DockPanel.py, line 53:\n    def _getElementProps(self):';
		$m.__track_lines__[54] = 'pyjamas.ui.DockPanel.py, line 54:\n    return CellPanel._getElementProps() + self.elem_props';
		$m.__track_lines__[56] = 'pyjamas.ui.DockPanel.py, line 56:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[58] = 'pyjamas.ui.DockPanel.py, line 58:\n    self.center = None';
		$m.__track_lines__[59] = 'pyjamas.ui.DockPanel.py, line 59:\n    self.dock_children = [] # cannot use self.children';
		$m.__track_lines__[61] = 'pyjamas.ui.DockPanel.py, line 61:\n    CellPanel.__init__(self, **kwargs)';
		$m.__track_lines__[63] = 'pyjamas.ui.DockPanel.py, line 63:\n    def add(self, widget, direction):';
		$m.__track_lines__[64] = 'pyjamas.ui.DockPanel.py, line 64:\n    if direction == self.CENTER:';
		$m.__track_lines__[65] = 'pyjamas.ui.DockPanel.py, line 65:\n    if self.center is not None:';
		$m.__track_lines__[66] = 'pyjamas.ui.DockPanel.py, line 66:\n    raise Exception("Only one CENTER widget may be added")';
		$m.__track_lines__[67] = 'pyjamas.ui.DockPanel.py, line 67:\n    self.center = widget';
		$m.__track_lines__[69] = 'pyjamas.ui.DockPanel.py, line 69:\n    layout = LayoutData(direction)';
		$m.__track_lines__[70] = 'pyjamas.ui.DockPanel.py, line 70:\n    widget.setLayoutData(layout)';
		$m.__track_lines__[71] = 'pyjamas.ui.DockPanel.py, line 71:\n    self.setCellHorizontalAlignment(widget, self.horzAlign)';
		$m.__track_lines__[72] = 'pyjamas.ui.DockPanel.py, line 72:\n    self.setCellVerticalAlignment(widget, self.vertAlign)';
		$m.__track_lines__[74] = 'pyjamas.ui.DockPanel.py, line 74:\n    self.dock_children.append(widget)';
		$m.__track_lines__[75] = 'pyjamas.ui.DockPanel.py, line 75:\n    self.realizeTable(widget)';
		$m.__track_lines__[78] = 'pyjamas.ui.DockPanel.py, line 78:\n    def addIndexedItem(self, index, item):';
		$m.__track_lines__[79] = 'pyjamas.ui.DockPanel.py, line 79:\n    self.add(item, index[1])';
		$m.__track_lines__[81] = 'pyjamas.ui.DockPanel.py, line 81:\n    def getWidgetIndex(self, widget):';
		$m.__track_lines__[82] = 'pyjamas.ui.DockPanel.py, line 82:\n    index = self.dock_children.index(widget)';
		$m.__track_lines__[83] = 'pyjamas.ui.DockPanel.py, line 83:\n    direction = self.getWidgetDirection(widget)';
		$m.__track_lines__[84] = 'pyjamas.ui.DockPanel.py, line 84:\n    return (index, direction)';
		$m.__track_lines__[86] = 'pyjamas.ui.DockPanel.py, line 86:\n    def getIndexedChild(self, index):';
		$m.__track_lines__[87] = 'pyjamas.ui.DockPanel.py, line 87:\n    index, direction = index';
		$m.__track_lines__[88] = 'pyjamas.ui.DockPanel.py, line 88:\n    return self.dock_children[index]';
		$m.__track_lines__[90] = 'pyjamas.ui.DockPanel.py, line 90:\n    def getWidgetDirection(self, widget):';
		$m.__track_lines__[91] = 'pyjamas.ui.DockPanel.py, line 91:\n    if widget.getParent() != self:';
		$m.__track_lines__[92] = 'pyjamas.ui.DockPanel.py, line 92:\n    return None';
		$m.__track_lines__[93] = 'pyjamas.ui.DockPanel.py, line 93:\n    return widget.getLayoutData().direction';
		$m.__track_lines__[95] = 'pyjamas.ui.DockPanel.py, line 95:\n    def __len__(self):';
		$m.__track_lines__[96] = 'pyjamas.ui.DockPanel.py, line 96:\n    return len(self.dock_children)';
		$m.__track_lines__[98] = 'pyjamas.ui.DockPanel.py, line 98:\n    def __iter__(self):';
		$m.__track_lines__[99] = 'pyjamas.ui.DockPanel.py, line 99:\n    return self.dock_children.__iter__()';
		$m.__track_lines__[101] = 'pyjamas.ui.DockPanel.py, line 101:\n    def remove(self, widget):';
		$m.__track_lines__[102] = 'pyjamas.ui.DockPanel.py, line 102:\n    if widget == self.center:';
		$m.__track_lines__[103] = 'pyjamas.ui.DockPanel.py, line 103:\n    self.center = None';
		$m.__track_lines__[105] = 'pyjamas.ui.DockPanel.py, line 105:\n    ret = CellPanel.remove(self, widget)';
		$m.__track_lines__[106] = 'pyjamas.ui.DockPanel.py, line 106:\n    if ret:';
		$m.__track_lines__[107] = 'pyjamas.ui.DockPanel.py, line 107:\n    self.dock_children.remove(widget)';
		$m.__track_lines__[108] = 'pyjamas.ui.DockPanel.py, line 108:\n    self.realizeTable(None)';
		$m.__track_lines__[109] = 'pyjamas.ui.DockPanel.py, line 109:\n    return ret';
		$m.__track_lines__[111] = 'pyjamas.ui.DockPanel.py, line 111:\n    def setCellHeight(self, widget, height):';
		$m.__track_lines__[112] = 'pyjamas.ui.DockPanel.py, line 112:\n    data = widget.getLayoutData()';
		$m.__track_lines__[113] = 'pyjamas.ui.DockPanel.py, line 113:\n    data.height = height';
		$m.__track_lines__[114] = 'pyjamas.ui.DockPanel.py, line 114:\n    if data.td is not None:';
		$m.__track_lines__[115] = 'pyjamas.ui.DockPanel.py, line 115:\n    DOM.setStyleAttribute(data.td, "height", data.height)';
		$m.__track_lines__[117] = 'pyjamas.ui.DockPanel.py, line 117:\n    def setCellHorizontalAlignment(self, widget, align):';
		$m.__track_lines__[118] = 'pyjamas.ui.DockPanel.py, line 118:\n    data = widget.getLayoutData()';
		$m.__track_lines__[119] = 'pyjamas.ui.DockPanel.py, line 119:\n    data.hAlign = align';
		$m.__track_lines__[120] = 'pyjamas.ui.DockPanel.py, line 120:\n    if data.td is not None:';
		$m.__track_lines__[121] = 'pyjamas.ui.DockPanel.py, line 121:\n    DOM.setAttribute(data.td, "align", data.hAlign)';
		$m.__track_lines__[123] = 'pyjamas.ui.DockPanel.py, line 123:\n    def setCellVerticalAlignment(self, widget, align):';
		$m.__track_lines__[124] = 'pyjamas.ui.DockPanel.py, line 124:\n    data = widget.getLayoutData()';
		$m.__track_lines__[125] = 'pyjamas.ui.DockPanel.py, line 125:\n    data.vAlign = align';
		$m.__track_lines__[126] = 'pyjamas.ui.DockPanel.py, line 126:\n    if data.td is not None:';
		$m.__track_lines__[127] = 'pyjamas.ui.DockPanel.py, line 127:\n    DOM.setStyleAttribute(data.td, "verticalAlign", data.vAlign)';
		$m.__track_lines__[129] = 'pyjamas.ui.DockPanel.py, line 129:\n    def setCellWidth(self, widget, width):';
		$m.__track_lines__[130] = 'pyjamas.ui.DockPanel.py, line 130:\n    data = widget.getLayoutData()';
		$m.__track_lines__[131] = 'pyjamas.ui.DockPanel.py, line 131:\n    data.width = width';
		$m.__track_lines__[132] = 'pyjamas.ui.DockPanel.py, line 132:\n    if data.td is not None:';
		$m.__track_lines__[133] = 'pyjamas.ui.DockPanel.py, line 133:\n    DOM.setStyleAttribute(data.td, "width", data.width)';
		$m.__track_lines__[135] = 'pyjamas.ui.DockPanel.py, line 135:\n    def realizeTable(self, beingAdded):';
		$m.__track_lines__[136] = 'pyjamas.ui.DockPanel.py, line 136:\n    bodyElement = self.getBody()';
		$m.__track_lines__[138] = 'pyjamas.ui.DockPanel.py, line 138:\n    while DOM.getChildCount(bodyElement) > 0:';
		$m.__track_lines__[139] = 'pyjamas.ui.DockPanel.py, line 139:\n    DOM.removeChild(bodyElement, DOM.getChild(bodyElement, 0))';
		$m.__track_lines__[141] = 'pyjamas.ui.DockPanel.py, line 141:\n    rowCount = 1';
		$m.__track_lines__[142] = 'pyjamas.ui.DockPanel.py, line 142:\n    colCount = 1';
		$m.__track_lines__[143] = 'pyjamas.ui.DockPanel.py, line 143:\n    for child in self.dock_children:';
		$m.__track_lines__[144] = 'pyjamas.ui.DockPanel.py, line 144:\n    dir = child.getLayoutData().direction';
		$m.__track_lines__[145] = 'pyjamas.ui.DockPanel.py, line 145:\n    if dir == self.NORTH or dir == self.SOUTH:';
		$m.__track_lines__[146] = 'pyjamas.ui.DockPanel.py, line 146:\n    rowCount += 1';
		$m.__track_lines__[148] = 'pyjamas.ui.DockPanel.py, line 148:\n    colCount += 1';
		$m.__track_lines__[150] = 'pyjamas.ui.DockPanel.py, line 150:\n    rows = []';
		$m.__track_lines__[151] = 'pyjamas.ui.DockPanel.py, line 151:\n    for i in range(rowCount):';
		$m.__track_lines__[152] = 'pyjamas.ui.DockPanel.py, line 152:\n    rows.append(DockPanelTmpRow())';
		$m.__track_lines__[153] = 'pyjamas.ui.DockPanel.py, line 153:\n    rows[i].tr = DOM.createTR()';
		$m.__track_lines__[154] = 'pyjamas.ui.DockPanel.py, line 154:\n    DOM.appendChild(bodyElement, rows[i].tr)';
		$m.__track_lines__[156] = 'pyjamas.ui.DockPanel.py, line 156:\n    westCol = 0';
		$m.__track_lines__[157] = 'pyjamas.ui.DockPanel.py, line 157:\n    eastCol = colCount - 1';
		$m.__track_lines__[158] = 'pyjamas.ui.DockPanel.py, line 158:\n    northRow = 0';
		$m.__track_lines__[159] = 'pyjamas.ui.DockPanel.py, line 159:\n    southRow = rowCount - 1';
		$m.__track_lines__[160] = 'pyjamas.ui.DockPanel.py, line 160:\n    centerTd = None';
		$m.__track_lines__[162] = 'pyjamas.ui.DockPanel.py, line 162:\n    for child in self.dock_children:';
		$m.__track_lines__[163] = 'pyjamas.ui.DockPanel.py, line 163:\n    layout = child.getLayoutData()';
		$m.__track_lines__[165] = 'pyjamas.ui.DockPanel.py, line 165:\n    td = DOM.createTD()';
		$m.__track_lines__[166] = 'pyjamas.ui.DockPanel.py, line 166:\n    layout.td = td';
		$m.__track_lines__[167] = 'pyjamas.ui.DockPanel.py, line 167:\n    DOM.setAttribute(layout.td, "align", layout.hAlign)';
		$m.__track_lines__[168] = 'pyjamas.ui.DockPanel.py, line 168:\n    DOM.setStyleAttribute(layout.td, "verticalAlign", layout.vAlign)';
		$m.__track_lines__[169] = 'pyjamas.ui.DockPanel.py, line 169:\n    DOM.setAttribute(layout.td, "width", layout.width)';
		$m.__track_lines__[170] = 'pyjamas.ui.DockPanel.py, line 170:\n    DOM.setAttribute(layout.td, "height", layout.height)';
		$m.__track_lines__[172] = 'pyjamas.ui.DockPanel.py, line 172:\n    if layout.direction == self.NORTH:';
		$m.__track_lines__[173] = 'pyjamas.ui.DockPanel.py, line 173:\n    DOM.insertChild(rows[northRow].tr, td, rows[northRow].center)';
		$m.__track_lines__[174] = 'pyjamas.ui.DockPanel.py, line 174:\n    self.appendAndMaybeAdopt(td, child.getElement(), beingAdded)';
		$m.__track_lines__[175] = 'pyjamas.ui.DockPanel.py, line 175:\n    DOM.setIntAttribute(td, "colSpan", eastCol - westCol + 1)';
		$m.__track_lines__[176] = 'pyjamas.ui.DockPanel.py, line 176:\n    northRow += 1';
		$m.__track_lines__[178] = 'pyjamas.ui.DockPanel.py, line 178:\n    DOM.insertChild(rows[southRow].tr, td, rows[southRow].center)';
		$m.__track_lines__[179] = 'pyjamas.ui.DockPanel.py, line 179:\n    self.appendAndMaybeAdopt(td, child.getElement(), beingAdded)';
		$m.__track_lines__[180] = 'pyjamas.ui.DockPanel.py, line 180:\n    DOM.setIntAttribute(td, "colSpan", eastCol - westCol + 1)';
		$m.__track_lines__[181] = 'pyjamas.ui.DockPanel.py, line 181:\n    southRow -= 1';
		$m.__track_lines__[183] = 'pyjamas.ui.DockPanel.py, line 183:\n    row = rows[northRow]';
		$m.__track_lines__[184] = 'pyjamas.ui.DockPanel.py, line 184:\n    DOM.insertChild(row.tr, td, row.center)';
		$m.__track_lines__[185] = 'pyjamas.ui.DockPanel.py, line 185:\n    row.center += 1';
		$m.__track_lines__[186] = 'pyjamas.ui.DockPanel.py, line 186:\n    self.appendAndMaybeAdopt(td, child.getElement(), beingAdded)';
		$m.__track_lines__[187] = 'pyjamas.ui.DockPanel.py, line 187:\n    DOM.setIntAttribute(td, "rowSpan", southRow - northRow + 1)';
		$m.__track_lines__[188] = 'pyjamas.ui.DockPanel.py, line 188:\n    westCol += 1';
		$m.__track_lines__[190] = 'pyjamas.ui.DockPanel.py, line 190:\n    row = rows[northRow]';
		$m.__track_lines__[191] = 'pyjamas.ui.DockPanel.py, line 191:\n    DOM.insertChild(row.tr, td, row.center)';
		$m.__track_lines__[192] = 'pyjamas.ui.DockPanel.py, line 192:\n    self.appendAndMaybeAdopt(td, child.getElement(), beingAdded)';
		$m.__track_lines__[193] = 'pyjamas.ui.DockPanel.py, line 193:\n    DOM.setIntAttribute(td, "rowSpan", southRow - northRow + 1)';
		$m.__track_lines__[194] = 'pyjamas.ui.DockPanel.py, line 194:\n    eastCol -= 1';
		$m.__track_lines__[196] = 'pyjamas.ui.DockPanel.py, line 196:\n    centerTd = td';
		$m.__track_lines__[198] = 'pyjamas.ui.DockPanel.py, line 198:\n    if self.center is not None:';
		$m.__track_lines__[199] = 'pyjamas.ui.DockPanel.py, line 199:\n    row = rows[northRow]';
		$m.__track_lines__[200] = 'pyjamas.ui.DockPanel.py, line 200:\n    DOM.insertChild(row.tr, centerTd, row.center)';
		$m.__track_lines__[201] = 'pyjamas.ui.DockPanel.py, line 201:\n    self.appendAndMaybeAdopt(centerTd, self.center.getElement(), beingAdded)';
		$m.__track_lines__[203] = 'pyjamas.ui.DockPanel.py, line 203:\n    def appendAndMaybeAdopt(self, parent, child, beingAdded):';
		$m.__track_lines__[204] = 'pyjamas.ui.DockPanel.py, line 204:\n    if beingAdded is not None:';
		$m.__track_lines__[205] = 'pyjamas.ui.DockPanel.py, line 205:\n    if DOM.compare(child, beingAdded.getElement()):';
		$m.__track_lines__[206] = 'pyjamas.ui.DockPanel.py, line 206:\n    CellPanel.add(self, beingAdded, parent)';
		$m.__track_lines__[207] = 'pyjamas.ui.DockPanel.py, line 207:\n    return';
		$m.__track_lines__[208] = 'pyjamas.ui.DockPanel.py, line 208:\n    DOM.appendChild(parent, child)';
		$m.__track_lines__[210] = "pyjamas.ui.DockPanel.py, line 210:\n    Factory.registerClass('pyjamas.ui.DockPanel', 'DockPanel', DockPanel)";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='pyjamas.ui.DockPanel';
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
		$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=22;
		$m['DockPanelTmpRow'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DockPanel';
			$cls_definition.__md5__ = '735c459ac0767d727932c9ad502f34e5';
			$pyjs.track.lineno=23;
			$cls_definition['center'] = $constant_int_0;
			$pyjs.track.lineno=24;
			$cls_definition['tr'] = null;
			$pyjs.track.lineno=22;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DockPanelTmpRow', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=26;
		$m['LayoutData'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DockPanel';
			$cls_definition.__md5__ = '45a5f47e1a01409ae80aa97362fa9125';
			$pyjs.track.lineno=27;
			$method = $pyjs__bind_method2('__init__', function(direction) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					direction = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '45a5f47e1a01409ae80aa97362fa9125') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:27};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=28;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('direction', direction) : $p['setattr'](self, 'direction', direction); 
				$pyjs.track.lineno=29;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hAlign', 'left') : $p['setattr'](self, 'hAlign', 'left'); 
				$pyjs.track.lineno=30;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('height', '') : $p['setattr'](self, 'height', ''); 
				$pyjs.track.lineno=31;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('td', null) : $p['setattr'](self, 'td', null); 
				$pyjs.track.lineno=32;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vAlign', 'top') : $p['setattr'](self, 'vAlign', 'top'); 
				$pyjs.track.lineno=33;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('width', '') : $p['setattr'](self, 'width', ''); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['direction']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=26;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LayoutData', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=36;
		$m['DockPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.DockPanel';
			$cls_definition.__md5__ = '913652bb1641ed03890da568ef85f68f';
			$pyjs.track.lineno=38;
			$cls_definition['CENTER'] = 'center';
			$pyjs.track.lineno=39;
			$cls_definition['EAST'] = 'east';
			$pyjs.track.lineno=40;
			$cls_definition['NORTH'] = 'north';
			$pyjs.track.lineno=41;
			$cls_definition['SOUTH'] = 'south';
			$pyjs.track.lineno=42;
			$cls_definition['WEST'] = 'west';
			$pyjs.track.lineno=44;
			$cls_definition['elem_props'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['height', 'Cell Height', 'CellHeight', $p['str'], null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['width', 'Cell Width', 'CellWidth', $p['str'], null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['halign', 'Cell Horizontal Alignment', 'CellHorizontalAlignment', null, 'left']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['valign', 'Cell Vertical Alignment', 'CellVerticalAlignment', null, 'top']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.track.lineno=53;
			$method = $pyjs__bind_method2('_getElementProps', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:53};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=53;
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=54;
				var $pyjs__ret = $p['__op_add']($add1=(function(){try{try{$pyjs.in_try_except += 1;
				return $m['CellPanel']['_getElementProps']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(),$add2=$p['getattr'](self, 'elem_props'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_getElementProps'] = $method;
			$pyjs.track.lineno=56;
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
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
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

				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=58;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', null) : $p['setattr'](self, 'center', null); 
				$pyjs.track.lineno=59;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dock_children', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) : $p['setattr'](self, 'dock_children', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()); 
				$pyjs.track.lineno=61;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['CellPanel'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=63;
			$method = $pyjs__bind_method2('add', function(widget, direction) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					direction = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var layout;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:63};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=64;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](direction, $p['getattr'](self, 'CENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs.track.lineno=65;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_is']($p['getattr'](self, 'center'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
						$pyjs.track.lineno=66;
						$pyjs.__active_exception_stack__ = null;
						throw ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['Exception']('Only one CENTER widget may be added');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
					}
					$pyjs.track.lineno=67;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', widget) : $p['setattr'](self, 'center', widget); 
				}
				$pyjs.track.lineno=69;
				layout = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['LayoutData'](direction);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.track.lineno=70;
				(function(){try{try{$pyjs.in_try_except += 1;
				return widget['setLayoutData'](layout);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=71;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setCellHorizontalAlignment'](widget, $p['getattr'](self, 'horzAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.track.lineno=72;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setCellVerticalAlignment'](widget, $p['getattr'](self, 'vertAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.track.lineno=74;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['dock_children']['append'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs.track.lineno=75;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['realizeTable'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['direction']]);
			$cls_definition['add'] = $method;
			$pyjs.track.lineno=78;
			$method = $pyjs__bind_method2('addIndexedItem', function(index, item) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					item = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:78};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=79;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['add'](item, index.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['index'],['item']]);
			$cls_definition['addIndexedItem'] = $method;
			$pyjs.track.lineno=81;
			$method = $pyjs__bind_method2('getWidgetIndex', function(widget) {
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
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,direction;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:81};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=81;
				$pyjs.track.lineno=82;
				index = (function(){try{try{$pyjs.in_try_except += 1;
				return self['dock_children']['index'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=83;
				direction = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetDirection'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs.track.lineno=84;
				$pyjs.track.lineno=84;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([index, direction]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getWidgetIndex'] = $method;
			$pyjs.track.lineno=86;
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
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var direction;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:86};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=86;
				$pyjs.track.lineno=87;
				var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack'](index, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				index = $tupleassign1[0];
				direction = $tupleassign1[1];
				$pyjs.track.lineno=88;
				$pyjs.track.lineno=88;
				var $pyjs__ret = $p['getattr'](self, 'dock_children').__getitem__(index);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getIndexedChild'] = $method;
			$pyjs.track.lineno=90;
			$method = $pyjs__bind_method2('getWidgetDirection', function(widget) {
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
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:90};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=91;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
					$pyjs.track.lineno=92;
					$pyjs.track.lineno=92;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=93;
				$pyjs.track.lineno=93;
				var $pyjs__ret = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getLayoutData']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})(), 'direction');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getWidgetDirection'] = $method;
			$pyjs.track.lineno=95;
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
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:95};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=95;
				$pyjs.track.lineno=96;
				$pyjs.track.lineno=96;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($p['getattr'](self, 'dock_children'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs.track.lineno=98;
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
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:98};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=98;
				$pyjs.track.lineno=99;
				$pyjs.track.lineno=99;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['dock_children']['__iter__']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=101;
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
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ret;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:101};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=101;
				$pyjs.track.lineno=102;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](widget, $p['getattr'](self, 'center')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
					$pyjs.track.lineno=103;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', null) : $p['setattr'](self, 'center', null); 
				}
				$pyjs.track.lineno=105;
				ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['CellPanel']['remove'](self, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs.track.lineno=106;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](ret);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
					$pyjs.track.lineno=107;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['dock_children']['remove'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
					$pyjs.track.lineno=108;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['realizeTable'](null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				}
				$pyjs.track.lineno=109;
				$pyjs.track.lineno=109;
				var $pyjs__ret = ret;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=111;
			$method = $pyjs__bind_method2('setCellHeight', function(widget, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					height = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:111};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=111;
				$pyjs.track.lineno=112;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return widget['getLayoutData']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs.track.lineno=113;
				data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('height', height) : $p['setattr'](data, 'height', height); 
				$pyjs.track.lineno=114;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']($p['getattr'](data, 'td'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
					$pyjs.track.lineno=115;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute']($p['getattr'](data, 'td'), 'height', $p['getattr'](data, 'height'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['height']]);
			$cls_definition['setCellHeight'] = $method;
			$pyjs.track.lineno=117;
			$method = $pyjs__bind_method2('setCellHorizontalAlignment', function(widget, align) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					align = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:117};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=117;
				$pyjs.track.lineno=118;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return widget['getLayoutData']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs.track.lineno=119;
				data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('hAlign', align) : $p['setattr'](data, 'hAlign', align); 
				$pyjs.track.lineno=120;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']($p['getattr'](data, 'td'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
					$pyjs.track.lineno=121;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setAttribute']($p['getattr'](data, 'td'), 'align', $p['getattr'](data, 'hAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['align']]);
			$cls_definition['setCellHorizontalAlignment'] = $method;
			$pyjs.track.lineno=123;
			$method = $pyjs__bind_method2('setCellVerticalAlignment', function(widget, align) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					align = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:123};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=123;
				$pyjs.track.lineno=124;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return widget['getLayoutData']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$pyjs.track.lineno=125;
				data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('vAlign', align) : $p['setattr'](data, 'vAlign', align); 
				$pyjs.track.lineno=126;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']($p['getattr'](data, 'td'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
					$pyjs.track.lineno=127;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute']($p['getattr'](data, 'td'), 'verticalAlign', $p['getattr'](data, 'vAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['align']]);
			$cls_definition['setCellVerticalAlignment'] = $method;
			$pyjs.track.lineno=129;
			$method = $pyjs__bind_method2('setCellWidth', function(widget, width) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					width = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:129};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=129;
				$pyjs.track.lineno=130;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return widget['getLayoutData']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs.track.lineno=131;
				data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('width', width) : $p['setattr'](data, 'width', width); 
				$pyjs.track.lineno=132;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']($p['getattr'](data, 'td'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
					$pyjs.track.lineno=133;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute']($p['getattr'](data, 'td'), 'width', $p['getattr'](data, 'width'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['width']]);
			$cls_definition['setCellWidth'] = $method;
			$pyjs.track.lineno=135;
			$method = $pyjs__bind_method2('realizeTable', function(beingAdded) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					beingAdded = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var westCol,northRow,$iter3_type,$iter1_iter,$or1,centerTd,row,rows,layout,$iter2_iter,bodyElement,$add20,$iter3_iter,$add19,$sub9,$sub8,$iter1_array,$add14,$add7,$sub3,$sub2,$sub1,$sub7,$sub6,$iter3_array,$sub4,$or4,$add15,$sub10,$iter1_nextval,$or3,$or2,$sub13,$sub12,$sub11,$pyjs__trackstack_size_1,$sub16,$sub15,$sub14,$add13,rowCount,$iter2_idx,$iter3_idx,eastCol,$add11,$add12,child,$add18,td,$add16,$iter2_array,$iter2_nextval,$iter1_type,$sub5,i,southRow,$iter2_type,$add3,colCount,$add6,$iter1_idx,$add4,$add5,$add17,$add10,$add8,$add9,$iter3_nextval,dir;
				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:135};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=135;
				$pyjs.track.lineno=136;
				bodyElement = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getBody']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs.track.lineno=138;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getChildCount'](bodyElement);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
					$pyjs.track.lineno=139;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['removeChild'](bodyElement, (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getChild'](bodyElement, $constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				}
				$pyjs.track.lineno=141;
				rowCount = $constant_int_1;
				$pyjs.track.lineno=142;
				colCount = $constant_int_1;
				$pyjs.track.lineno=143;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'dock_children');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					child = $iter1_nextval.$nextval;
					$pyjs.track.lineno=144;
					dir = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
					return child['getLayoutData']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), 'direction');
					$pyjs.track.lineno=145;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($or1=$p['op_eq'](dir, $p['getattr'](self, 'NORTH')))?$or1:$p['op_eq'](dir, $p['getattr'](self, 'SOUTH'))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
						$pyjs.track.lineno=146;
						rowCount = $p['__op_add']($add3=rowCount,$add4=$constant_int_1);
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($or3=$p['op_eq'](dir, $p['getattr'](self, 'EAST')))?$or3:$p['op_eq'](dir, $p['getattr'](self, 'WEST'))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
						$pyjs.track.lineno=148;
						colCount = $p['__op_add']($add5=colCount,$add6=$constant_int_1);
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=150;
				rows = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$pyjs.track.lineno=151;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['range'](rowCount);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					i = $iter2_nextval.$nextval;
					$pyjs.track.lineno=152;
					(function(){try{try{$pyjs.in_try_except += 1;
					return rows['append']((function(){try{try{$pyjs.in_try_except += 1;
					return $m['DockPanelTmpRow']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
					$pyjs.track.lineno=153;
					rows.__getitem__(i).__is_instance__ && typeof rows.__getitem__(i).__setattr__ == 'function' ? rows.__getitem__(i).__setattr__('tr', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createTR']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) : $p['setattr'](rows.__getitem__(i), 'tr', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createTR']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()); 
					$pyjs.track.lineno=154;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['appendChild'](bodyElement, $p['getattr'](rows.__getitem__(i), 'tr'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=156;
				westCol = $constant_int_0;
				$pyjs.track.lineno=157;
				eastCol = $p['__op_sub']($sub1=colCount,$sub2=$constant_int_1);
				$pyjs.track.lineno=158;
				northRow = $constant_int_0;
				$pyjs.track.lineno=159;
				southRow = $p['__op_sub']($sub3=rowCount,$sub4=$constant_int_1);
				$pyjs.track.lineno=160;
				centerTd = null;
				$pyjs.track.lineno=162;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'dock_children');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					child = $iter3_nextval.$nextval;
					$pyjs.track.lineno=163;
					layout = (function(){try{try{$pyjs.in_try_except += 1;
					return child['getLayoutData']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
					$pyjs.track.lineno=165;
					td = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createTD']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
					$pyjs.track.lineno=166;
					layout.__is_instance__ && typeof layout.__setattr__ == 'function' ? layout.__setattr__('td', td) : $p['setattr'](layout, 'td', td); 
					$pyjs.track.lineno=167;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'align', $p['getattr'](layout, 'hAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
					$pyjs.track.lineno=168;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setStyleAttribute']($p['getattr'](layout, 'td'), 'verticalAlign', $p['getattr'](layout, 'vAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
					$pyjs.track.lineno=169;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'width', $p['getattr'](layout, 'width'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					$pyjs.track.lineno=170;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['setAttribute']($p['getattr'](layout, 'td'), 'height', $p['getattr'](layout, 'height'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					$pyjs.track.lineno=172;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'NORTH')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
						$pyjs.track.lineno=173;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['insertChild']($p['getattr'](rows.__getitem__(northRow), 'tr'), td, $p['getattr'](rows.__getitem__(northRow), 'center'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
						$pyjs.track.lineno=174;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['appendAndMaybeAdopt'](td, (function(){try{try{$pyjs.in_try_except += 1;
						return child['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})(), beingAdded);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
						$pyjs.track.lineno=175;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['setIntAttribute'](td, 'colSpan', $p['__op_add']($add7=$p['__op_sub']($sub5=eastCol,$sub6=westCol),$add8=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
						$pyjs.track.lineno=176;
						northRow = $p['__op_add']($add9=northRow,$add10=$constant_int_1);
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'SOUTH')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
						$pyjs.track.lineno=178;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['insertChild']($p['getattr'](rows.__getitem__(southRow), 'tr'), td, $p['getattr'](rows.__getitem__(southRow), 'center'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
						$pyjs.track.lineno=179;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['appendAndMaybeAdopt'](td, (function(){try{try{$pyjs.in_try_except += 1;
						return child['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})(), beingAdded);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
						$pyjs.track.lineno=180;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['setIntAttribute'](td, 'colSpan', $p['__op_add']($add11=$p['__op_sub']($sub7=eastCol,$sub8=westCol),$add12=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
						$pyjs.track.lineno=181;
						southRow = $p['__op_sub']($sub9=southRow,$sub10=$constant_int_1);
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'WEST')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
						$pyjs.track.lineno=183;
						row = rows.__getitem__(northRow);
						$pyjs.track.lineno=184;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['insertChild']($p['getattr'](row, 'tr'), td, $p['getattr'](row, 'center'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
						$pyjs.track.lineno=185;
						row.__is_instance__ && typeof row.__setattr__ == 'function' ? row.__setattr__('center', $p['__op_add']($add13=$p['getattr'](row, 'center'),$add14=$constant_int_1)) : $p['setattr'](row, 'center', $p['__op_add']($add13=$p['getattr'](row, 'center'),$add14=$constant_int_1)); 
						$pyjs.track.lineno=186;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['appendAndMaybeAdopt'](td, (function(){try{try{$pyjs.in_try_except += 1;
						return child['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})(), beingAdded);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
						$pyjs.track.lineno=187;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['setIntAttribute'](td, 'rowSpan', $p['__op_add']($add15=$p['__op_sub']($sub11=southRow,$sub12=northRow),$add16=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
						$pyjs.track.lineno=188;
						westCol = $p['__op_add']($add17=westCol,$add18=$constant_int_1);
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'EAST')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
						$pyjs.track.lineno=190;
						row = rows.__getitem__(northRow);
						$pyjs.track.lineno=191;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['insertChild']($p['getattr'](row, 'tr'), td, $p['getattr'](row, 'center'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
						$pyjs.track.lineno=192;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['appendAndMaybeAdopt'](td, (function(){try{try{$pyjs.in_try_except += 1;
						return child['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})(), beingAdded);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
						$pyjs.track.lineno=193;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['setIntAttribute'](td, 'rowSpan', $p['__op_add']($add19=$p['__op_sub']($sub13=southRow,$sub14=northRow),$add20=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
						$pyjs.track.lineno=194;
						eastCol = $p['__op_sub']($sub15=eastCol,$sub16=$constant_int_1);
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['getattr'](layout, 'direction'), $p['getattr'](self, 'CENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
						$pyjs.track.lineno=196;
						centerTd = td;
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=198;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is']($p['getattr'](self, 'center'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
					$pyjs.track.lineno=199;
					row = rows.__getitem__(northRow);
					$pyjs.track.lineno=200;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['insertChild']($p['getattr'](row, 'tr'), centerTd, $p['getattr'](row, 'center'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
					$pyjs.track.lineno=201;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['appendAndMaybeAdopt'](centerTd, (function(){try{try{$pyjs.in_try_except += 1;
					return self['center']['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})(), beingAdded);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['beingAdded']]);
			$cls_definition['realizeTable'] = $method;
			$pyjs.track.lineno=203;
			$method = $pyjs__bind_method2('appendAndMaybeAdopt', function(parent, child, beingAdded) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					child = arguments[2];
					beingAdded = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '913652bb1641ed03890da568ef85f68f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.DockPanel', lineno:203};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.DockPanel';
				$pyjs.track.lineno=203;
				$pyjs.track.lineno=204;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](beingAdded, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()) {
					$pyjs.track.lineno=205;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['compare'](child, (function(){try{try{$pyjs.in_try_except += 1;
					return beingAdded['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
						$pyjs.track.lineno=206;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['CellPanel']['add'](self, beingAdded, parent);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
						$pyjs.track.lineno=207;
						$pyjs.track.lineno=207;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				$pyjs.track.lineno=208;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild'](parent, child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['parent'],['child'],['beingAdded']]);
			$cls_definition['appendAndMaybeAdopt'] = $method;
			$pyjs.track.lineno=36;
			var $bases = new Array($m['CellPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DockPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=210;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.DockPanel', 'DockPanel', $m['DockPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DockPanel */


/* end module: pyjamas.ui.DockPanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
