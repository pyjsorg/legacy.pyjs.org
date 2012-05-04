/* start module: pyjamas.DOM */
$pyjs.loaded_modules['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DOM'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DOM'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.DOM"];
	$m.__repr__ = function() { return "<module: pyjamas.DOM>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['DOM'] = $pyjs.loaded_modules['pyjamas.DOM'];
	try {
		$m.__track_lines__[1] = 'pyjamas.DOM.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[19] = 'pyjamas.DOM.py, line 19:\n    import pyjd';
		$m.__track_lines__[21] = 'pyjamas.DOM.py, line 21:\n    if pyjd.is_desktop:';
		$m.__track_lines__[22] = 'pyjamas.DOM.py, line 22:\n    from pyjamas.Window import onResize, onClosing, onClosed';
		$m.__track_lines__[23] = 'pyjamas.DOM.py, line 23:\n    from __pyjamas__ import JS, doc, get_main_frame, wnd';
		$m.__track_lines__[25] = 'pyjamas.DOM.py, line 25:\n    currentEvent = None';
		$m.__track_lines__[27] = 'pyjamas.DOM.py, line 27:\n    sCaptureElem = None';
		$m.__track_lines__[28] = 'pyjamas.DOM.py, line 28:\n    sEventPreviewStack = []';
		$m.__track_lines__[30] = 'pyjamas.DOM.py, line 30:\n    listeners = {}';
		$m.__track_lines__[32] = 'pyjamas.DOM.py, line 32:\n    from pyjamas.ui import Event';
		$m.__track_lines__[33] = 'pyjamas.DOM.py, line 33:\n    from pyjamas.ui.Event import (';
		$m.__track_lines__[55] = 'pyjamas.DOM.py, line 55:\n    ELEMENT_NODE = 1';
		$m.__track_lines__[56] = 'pyjamas.DOM.py, line 56:\n    TEXT_NODE = 3';
		$m.__track_lines__[57] = 'pyjamas.DOM.py, line 57:\n    DOCUMENT_NODE = 9';
		$m.__track_lines__[59] = 'pyjamas.DOM.py, line 59:\n    def get_listener(item):';
		$m.__track_lines__[60] = 'pyjamas.DOM.py, line 60:\n    if item is None:';
		$m.__track_lines__[61] = 'pyjamas.DOM.py, line 61:\n    return None';
		$m.__track_lines__[62] = 'pyjamas.DOM.py, line 62:\n    if hasattr(item, "__instance__"):';
		$m.__track_lines__[63] = 'pyjamas.DOM.py, line 63:\n    ret = listeners.get(item.__instance__)';
		$m.__track_lines__[65] = 'pyjamas.DOM.py, line 65:\n    ret = listeners.get(hash(item))';
		$m.__track_lines__[66] = 'pyjamas.DOM.py, line 66:\n    return ret';
		$m.__track_lines__[69] = 'pyjamas.DOM.py, line 69:\n    def set_listener(item, listener):';
		$m.__track_lines__[70] = 'pyjamas.DOM.py, line 70:\n    if hasattr(item, "__instance__"):';
		$m.__track_lines__[71] = 'pyjamas.DOM.py, line 71:\n    listeners[item.__instance__] = listener';
		$m.__track_lines__[73] = 'pyjamas.DOM.py, line 73:\n    listeners.pop(hash(item))';
		$m.__track_lines__[75] = 'pyjamas.DOM.py, line 75:\n    listeners[hash(item)] = listener';
		$m.__track_lines__[78] = 'pyjamas.DOM.py, line 78:\n    hack_timer_workaround_bug_button = None';
		$m.__track_lines__[81] = 'pyjamas.DOM.py, line 81:\n    def init():';
		$m.__track_lines__[82] = 'pyjamas.DOM.py, line 82:\n    mf = get_main_frame()';
		$m.__track_lines__[83] = 'pyjamas.DOM.py, line 83:\n    mf._addWindowEventListener("click", browser_event_cb)';
		$m.__track_lines__[84] = 'pyjamas.DOM.py, line 84:\n    mf._addWindowEventListener("change", browser_event_cb)';
		$m.__track_lines__[85] = 'pyjamas.DOM.py, line 85:\n    mf._addWindowEventListener("mouseout", browser_event_cb)';
		$m.__track_lines__[86] = 'pyjamas.DOM.py, line 86:\n    mf._addWindowEventListener("mousedown", browser_event_cb)';
		$m.__track_lines__[87] = 'pyjamas.DOM.py, line 87:\n    mf._addWindowEventListener("mouseup", browser_event_cb)';
		$m.__track_lines__[88] = 'pyjamas.DOM.py, line 88:\n    mf._addWindowEventListener("resize", browser_event_cb)';
		$m.__track_lines__[89] = 'pyjamas.DOM.py, line 89:\n    mf._addWindowEventListener("keyup", browser_event_cb)';
		$m.__track_lines__[90] = 'pyjamas.DOM.py, line 90:\n    mf._addWindowEventListener("keydown", browser_event_cb)';
		$m.__track_lines__[91] = 'pyjamas.DOM.py, line 91:\n    mf._addWindowEventListener("keypress", browser_event_cb)';
		$m.__track_lines__[92] = 'pyjamas.DOM.py, line 92:\n    mf._addWindowEventListener("mousewheel", browser_event_cb)';
		$m.__track_lines__[94] = 'pyjamas.DOM.py, line 94:\n    def _init_testing():';
		$m.__track_lines__[95] = 'pyjamas.DOM.py, line 95:\n    body = doc().getElementsByTagName("body")[0]';
		$m.__track_lines__[96] = 'pyjamas.DOM.py, line 96:\n    mf._addEventListener(body, "click", cb)';
		$m.__track_lines__[97] = 'pyjamas.DOM.py, line 97:\n    mf._addEventListener(body, "change", cb)';
		$m.__track_lines__[98] = 'pyjamas.DOM.py, line 98:\n    mf._addEventListener(body, "mouseout", cb)';
		$m.__track_lines__[99] = 'pyjamas.DOM.py, line 99:\n    mf._addEventListener(body, "mousedown", cb)';
		$m.__track_lines__[100] = 'pyjamas.DOM.py, line 100:\n    mf._addEventListener(body, "mouseup", cb)';
		$m.__track_lines__[101] = 'pyjamas.DOM.py, line 101:\n    mf._addEventListener(body, "mousemove", cb)';
		$m.__track_lines__[102] = 'pyjamas.DOM.py, line 102:\n    mf._addEventListener(body, "resize", cb)';
		$m.__track_lines__[103] = 'pyjamas.DOM.py, line 103:\n    mf._addEventListener(body, "keyup", cb)';
		$m.__track_lines__[104] = 'pyjamas.DOM.py, line 104:\n    mf._addEventListener(body, "keydown", cb)';
		$m.__track_lines__[105] = 'pyjamas.DOM.py, line 105:\n    mf._addEventListener(body, "keypress", cb)';
		$m.__track_lines__[107] = 'pyjamas.DOM.py, line 107:\n    def _dispatchWindowEvent(sender, evt, useCap):';
		$m.__track_lines__[108] = 'pyjamas.DOM.py, line 108:\n    pass';
		$m.__track_lines__[111] = 'pyjamas.DOM.py, line 111:\n    def _dispatchEvent(sender, evt, useCap):';
		$m.__track_lines__[113] = 'pyjamas.DOM.py, line 113:\n    if evt is None:';
		$m.__track_lines__[114] = 'pyjamas.DOM.py, line 114:\n    evt = wnd().event';
		$m.__track_lines__[116] = 'pyjamas.DOM.py, line 116:\n    try:';
		$m.__track_lines__[117] = 'pyjamas.DOM.py, line 117:\n    sender = get_main_frame().gobject_wrap(sender) # webkit HACK!';
		$m.__track_lines__[118] = 'pyjamas.DOM.py, line 118:\n    evt = get_main_frame().gobject_wrap(evt) # webkit HACK!';
		$m.__track_lines__[120] = 'pyjamas.DOM.py, line 120:\n    pass';
		$m.__track_lines__[121] = 'pyjamas.DOM.py, line 121:\n    listener = None';
		$m.__track_lines__[122] = 'pyjamas.DOM.py, line 122:\n    curElem = sender';
		$m.__track_lines__[125] = 'pyjamas.DOM.py, line 125:\n    cap = getCaptureElement()';
		$m.__track_lines__[126] = 'pyjamas.DOM.py, line 126:\n    listener = get_listener(cap)';
		$m.__track_lines__[127] = 'pyjamas.DOM.py, line 127:\n    if cap and (listener is not None):';
		$m.__track_lines__[129] = 'pyjamas.DOM.py, line 129:\n    dispatchEvent(evt, cap, listener)';
		$m.__track_lines__[130] = 'pyjamas.DOM.py, line 130:\n    evt.stopPropagation()';
		$m.__track_lines__[131] = 'pyjamas.DOM.py, line 131:\n    return';
		$m.__track_lines__[133] = 'pyjamas.DOM.py, line 133:\n    while curElem and (get_listener(curElem) is None):';
		$m.__track_lines__[135] = 'pyjamas.DOM.py, line 135:\n    curElem = getParent(curElem)';
		$m.__track_lines__[136] = 'pyjamas.DOM.py, line 136:\n    if curElem and getNodeType(curElem) != 1:';
		$m.__track_lines__[137] = 'pyjamas.DOM.py, line 137:\n    curElem = None';
		$m.__track_lines__[139] = 'pyjamas.DOM.py, line 139:\n    listener = get_listener(curElem)';
		$m.__track_lines__[140] = 'pyjamas.DOM.py, line 140:\n    if listener is not None:';
		$m.__track_lines__[141] = 'pyjamas.DOM.py, line 141:\n    dispatchEvent(evt, curElem, listener)';
		$m.__track_lines__[144] = 'pyjamas.DOM.py, line 144:\n    def _dispatchCapturedMouseEvent(evt):';
		$m.__track_lines__[147] = 'pyjamas.DOM.py, line 147:\n    if not _dispatchCapturedEvent(evt):';
		$m.__track_lines__[148] = 'pyjamas.DOM.py, line 148:\n    return';
		$m.__track_lines__[149] = 'pyjamas.DOM.py, line 149:\n    cap = getCaptureElement()';
		$m.__track_lines__[150] = 'pyjamas.DOM.py, line 150:\n    listener = get_listener(cap)';
		$m.__track_lines__[151] = 'pyjamas.DOM.py, line 151:\n    if cap and (listener is not None):';
		$m.__track_lines__[152] = 'pyjamas.DOM.py, line 152:\n    dispatchEvent(evt, cap, listener)';
		$m.__track_lines__[154] = 'pyjamas.DOM.py, line 154:\n    evt.stopPropagation()';
		$m.__track_lines__[157] = 'pyjamas.DOM.py, line 157:\n    def _dispatchCapturedMouseoutEvent(evt):';
		$m.__track_lines__[158] = 'pyjamas.DOM.py, line 158:\n    cap = getCaptureElement()';
		$m.__track_lines__[160] = 'pyjamas.DOM.py, line 160:\n    if cap is None:';
		$m.__track_lines__[161] = 'pyjamas.DOM.py, line 161:\n    return';
		$m.__track_lines__[163] = 'pyjamas.DOM.py, line 163:\n    if eventGetToElement(evt):';
		$m.__track_lines__[164] = 'pyjamas.DOM.py, line 164:\n    return';
		$m.__track_lines__[168] = 'pyjamas.DOM.py, line 168:\n    setCapture(None)';
		$m.__track_lines__[169] = 'pyjamas.DOM.py, line 169:\n    listener = get_listener(cap)';
		$m.__track_lines__[170] = 'pyjamas.DOM.py, line 170:\n    if listener is None:';
		$m.__track_lines__[171] = 'pyjamas.DOM.py, line 171:\n    return';
		$m.__track_lines__[174] = "pyjamas.DOM.py, line 174:\n    lcEvent = doc().createEvent('UIEvent')";
		$m.__track_lines__[175] = "pyjamas.DOM.py, line 175:\n    lcEvent.initUIEvent('losecapture', False, False, wnd(), 0)";
		$m.__track_lines__[176] = 'pyjamas.DOM.py, line 176:\n    dispatchEvent(lcEvent, cap, listener)';
		$m.__track_lines__[179] = 'pyjamas.DOM.py, line 179:\n    def browser_event_cb(view, event, from_window):';
		$m.__track_lines__[181] = 'pyjamas.DOM.py, line 181:\n    global sCaptureElem';
		$m.__track_lines__[183] = 'pyjamas.DOM.py, line 183:\n    if event is None:';
		$m.__track_lines__[184] = 'pyjamas.DOM.py, line 184:\n    event = wnd().event';
		$m.__track_lines__[186] = 'pyjamas.DOM.py, line 186:\n    try:';
		$m.__track_lines__[187] = 'pyjamas.DOM.py, line 187:\n    event = get_main_frame().gobject_wrap(event) # webkit HACK!';
		$m.__track_lines__[189] = 'pyjamas.DOM.py, line 189:\n    pass';
		$m.__track_lines__[192] = 'pyjamas.DOM.py, line 192:\n    et = eventGetType(event)';
		$m.__track_lines__[194] = 'pyjamas.DOM.py, line 194:\n    if et == "resize":';
		$m.__track_lines__[195] = 'pyjamas.DOM.py, line 195:\n    onResize()';
		$m.__track_lines__[196] = 'pyjamas.DOM.py, line 196:\n    return';
		$m.__track_lines__[197] = "pyjamas.DOM.py, line 197:\n    if et == 'mouseout':";
		$m.__track_lines__[199] = 'pyjamas.DOM.py, line 199:\n    _dispatchCapturedMouseoutEvent(event)';
		$m.__track_lines__[200] = "pyjamas.DOM.py, line 200:\n    if (et == 'keyup' or et == 'keydown' or";
		$m.__track_lines__[202] = 'pyjamas.DOM.py, line 202:\n    return _dispatchCapturedEvent(event)';
		$m.__track_lines__[204] = 'pyjamas.DOM.py, line 204:\n    return _dispatchCapturedMouseEvent(event)';
		$m.__track_lines__[207] = 'pyjamas.DOM.py, line 207:\n    def _dispatchCapturedEvent(event):';
		$m.__track_lines__[209] = 'pyjamas.DOM.py, line 209:\n    if not previewEvent(event):';
		$m.__track_lines__[211] = 'pyjamas.DOM.py, line 211:\n    event.stopPropagation()';
		$m.__track_lines__[212] = 'pyjamas.DOM.py, line 212:\n    eventPreventDefault(event)';
		$m.__track_lines__[213] = 'pyjamas.DOM.py, line 213:\n    return False';
		$m.__track_lines__[214] = 'pyjamas.DOM.py, line 214:\n    return True';
		$m.__track_lines__[217] = 'pyjamas.DOM.py, line 217:\n    def addEventPreview(preview):';
		$m.__track_lines__[218] = 'pyjamas.DOM.py, line 218:\n    sEventPreviewStack.append(preview)';
		$m.__track_lines__[221] = 'pyjamas.DOM.py, line 221:\n    def appendChild(parent, child):';
		$m.__track_lines__[223] = 'pyjamas.DOM.py, line 223:\n    parent.appendChild(child)';
		$m.__track_lines__[225] = 'pyjamas.DOM.py, line 225:\n    def removeChild(parent, child):';
		$m.__track_lines__[227] = 'pyjamas.DOM.py, line 227:\n    parent.removeChild(child)';
		$m.__track_lines__[230] = 'pyjamas.DOM.py, line 230:\n    def replaceChild(parent, newChild, oldChild):';
		$m.__track_lines__[231] = 'pyjamas.DOM.py, line 231:\n    parent.replaceChild(newChild, oldChild)';
		$m.__track_lines__[234] = 'pyjamas.DOM.py, line 234:\n    def buttonClick(element):';
		$m.__track_lines__[235] = "pyjamas.DOM.py, line 235:\n    evt = doc().createEvent('MouseEvents')";
		$m.__track_lines__[236] = 'pyjamas.DOM.py, line 236:\n    evt.initMouseEvent("click", True, True, wnd(), 1, 0, 0, 0, 0, False,';
		$m.__track_lines__[238] = 'pyjamas.DOM.py, line 238:\n    element.dispatchEvent(evt)';
		$m.__track_lines__[241] = 'pyjamas.DOM.py, line 241:\n    def compare(elem1, elem2):';
		$m.__track_lines__[242] = 'pyjamas.DOM.py, line 242:\n    if hasattr(elem1, "isSameNode") and hasattr(elem2, "isSameNode"):';
		$m.__track_lines__[243] = 'pyjamas.DOM.py, line 243:\n    return elem1.isSameNode(elem2)';
		$m.__track_lines__[244] = 'pyjamas.DOM.py, line 244:\n    return elem1 == elem2';
		$m.__track_lines__[247] = 'pyjamas.DOM.py, line 247:\n    def createAnchor():';
		$m.__track_lines__[248] = 'pyjamas.DOM.py, line 248:\n    return createElement("A")';
		$m.__track_lines__[251] = 'pyjamas.DOM.py, line 251:\n    def createButton():';
		$m.__track_lines__[252] = 'pyjamas.DOM.py, line 252:\n    return createElement("button")';
		$m.__track_lines__[255] = 'pyjamas.DOM.py, line 255:\n    def createCol():';
		$m.__track_lines__[256] = 'pyjamas.DOM.py, line 256:\n    return createElement("col")';
		$m.__track_lines__[259] = 'pyjamas.DOM.py, line 259:\n    def createDiv():';
		$m.__track_lines__[260] = 'pyjamas.DOM.py, line 260:\n    return createElement("div")';
		$m.__track_lines__[263] = 'pyjamas.DOM.py, line 263:\n    def createElement(tag):';
		$m.__track_lines__[264] = 'pyjamas.DOM.py, line 264:\n    return doc().createElement(tag)';
		$m.__track_lines__[267] = 'pyjamas.DOM.py, line 267:\n    def createFieldSet():';
		$m.__track_lines__[268] = 'pyjamas.DOM.py, line 268:\n    return createElement("fieldset")';
		$m.__track_lines__[271] = 'pyjamas.DOM.py, line 271:\n    def createForm():';
		$m.__track_lines__[272] = 'pyjamas.DOM.py, line 272:\n    return createElement("form")';
		$m.__track_lines__[275] = 'pyjamas.DOM.py, line 275:\n    def createIFrame():';
		$m.__track_lines__[276] = 'pyjamas.DOM.py, line 276:\n    return createElement("iframe")';
		$m.__track_lines__[279] = 'pyjamas.DOM.py, line 279:\n    def createImg():';
		$m.__track_lines__[280] = 'pyjamas.DOM.py, line 280:\n    return createElement("img")';
		$m.__track_lines__[283] = 'pyjamas.DOM.py, line 283:\n    def createInputCheck():';
		$m.__track_lines__[284] = 'pyjamas.DOM.py, line 284:\n    return createInputElement("checkbox")';
		$m.__track_lines__[287] = 'pyjamas.DOM.py, line 287:\n    def createInputElement(elementType):';
		$m.__track_lines__[288] = 'pyjamas.DOM.py, line 288:\n    e = createElement("input")';
		$m.__track_lines__[289] = 'pyjamas.DOM.py, line 289:\n    e.type = elementType';
		$m.__track_lines__[290] = 'pyjamas.DOM.py, line 290:\n    return e';
		$m.__track_lines__[293] = 'pyjamas.DOM.py, line 293:\n    def createInputPassword():';
		$m.__track_lines__[294] = 'pyjamas.DOM.py, line 294:\n    return createInputElement("password")';
		$m.__track_lines__[297] = 'pyjamas.DOM.py, line 297:\n    def createInputRadio(group):';
		$m.__track_lines__[298] = "pyjamas.DOM.py, line 298:\n    e = createInputElement('radio')";
		$m.__track_lines__[299] = 'pyjamas.DOM.py, line 299:\n    e.name = group';
		$m.__track_lines__[300] = 'pyjamas.DOM.py, line 300:\n    return e';
		$m.__track_lines__[303] = 'pyjamas.DOM.py, line 303:\n    def createInputText():';
		$m.__track_lines__[304] = 'pyjamas.DOM.py, line 304:\n    return createInputElement("text")';
		$m.__track_lines__[307] = 'pyjamas.DOM.py, line 307:\n    def createLabel():';
		$m.__track_lines__[308] = 'pyjamas.DOM.py, line 308:\n    return createElement("label")';
		$m.__track_lines__[311] = 'pyjamas.DOM.py, line 311:\n    def createLegend():';
		$m.__track_lines__[312] = 'pyjamas.DOM.py, line 312:\n    return createElement("legend")';
		$m.__track_lines__[315] = 'pyjamas.DOM.py, line 315:\n    def createOptions():';
		$m.__track_lines__[316] = 'pyjamas.DOM.py, line 316:\n    return createElement("options")';
		$m.__track_lines__[319] = 'pyjamas.DOM.py, line 319:\n    def createSelect():';
		$m.__track_lines__[320] = 'pyjamas.DOM.py, line 320:\n    return createElement("select")';
		$m.__track_lines__[323] = 'pyjamas.DOM.py, line 323:\n    def createSpan():';
		$m.__track_lines__[324] = 'pyjamas.DOM.py, line 324:\n    return createElement("span")';
		$m.__track_lines__[327] = 'pyjamas.DOM.py, line 327:\n    def createTable():';
		$m.__track_lines__[328] = 'pyjamas.DOM.py, line 328:\n    return createElement("table")';
		$m.__track_lines__[331] = 'pyjamas.DOM.py, line 331:\n    def createTBody():';
		$m.__track_lines__[332] = 'pyjamas.DOM.py, line 332:\n    return createElement("tbody")';
		$m.__track_lines__[335] = 'pyjamas.DOM.py, line 335:\n    def createTD():';
		$m.__track_lines__[336] = 'pyjamas.DOM.py, line 336:\n    return createElement("td")';
		$m.__track_lines__[339] = 'pyjamas.DOM.py, line 339:\n    def createTextArea():';
		$m.__track_lines__[340] = 'pyjamas.DOM.py, line 340:\n    return createElement("textarea")';
		$m.__track_lines__[343] = 'pyjamas.DOM.py, line 343:\n    def createTH():';
		$m.__track_lines__[344] = 'pyjamas.DOM.py, line 344:\n    return createElement("th")';
		$m.__track_lines__[347] = 'pyjamas.DOM.py, line 347:\n    def createTR():';
		$m.__track_lines__[348] = 'pyjamas.DOM.py, line 348:\n    return createElement("tr")';
		$m.__track_lines__[351] = 'pyjamas.DOM.py, line 351:\n    def eventStopPropagation(evt):';
		$m.__track_lines__[352] = 'pyjamas.DOM.py, line 352:\n    evt.stopPropagation()';
		$m.__track_lines__[355] = 'pyjamas.DOM.py, line 355:\n    def eventCancelBubble(evt, cancel):';
		$m.__track_lines__[356] = 'pyjamas.DOM.py, line 356:\n    evt.cancelBubble = cancel';
		$m.__track_lines__[359] = 'pyjamas.DOM.py, line 359:\n    def eventGetAltKey(evt):';
		$m.__track_lines__[360] = 'pyjamas.DOM.py, line 360:\n    return evt.altKey';
		$m.__track_lines__[363] = 'pyjamas.DOM.py, line 363:\n    def eventGetButton(evt):';
		$m.__track_lines__[364] = 'pyjamas.DOM.py, line 364:\n    return evt.button';
		$m.__track_lines__[367] = 'pyjamas.DOM.py, line 367:\n    def eventGetClientX(evt):';
		$m.__track_lines__[368] = 'pyjamas.DOM.py, line 368:\n    return evt.clientX';
		$m.__track_lines__[371] = 'pyjamas.DOM.py, line 371:\n    def eventGetClientY(evt):';
		$m.__track_lines__[372] = 'pyjamas.DOM.py, line 372:\n    return evt.clientY';
		$m.__track_lines__[375] = 'pyjamas.DOM.py, line 375:\n    def eventGetCtrlKey(evt):';
		$m.__track_lines__[376] = 'pyjamas.DOM.py, line 376:\n    return evt.ctrlKey';
		$m.__track_lines__[379] = 'pyjamas.DOM.py, line 379:\n    def eventGetFromElement(evt):';
		$m.__track_lines__[380] = 'pyjamas.DOM.py, line 380:\n    try:';
		$m.__track_lines__[381] = 'pyjamas.DOM.py, line 381:\n    return evt.fromElement';
		$m.__track_lines__[383] = 'pyjamas.DOM.py, line 383:\n    return None';
		$m.__track_lines__[386] = 'pyjamas.DOM.py, line 386:\n    def eventGetKeyCode(evt):';
		$m.__track_lines__[387] = 'pyjamas.DOM.py, line 387:\n    return evt.which or evt.keyCode or 0';
		$m.__track_lines__[390] = 'pyjamas.DOM.py, line 390:\n    def eventGetRepeat(evt):';
		$m.__track_lines__[391] = 'pyjamas.DOM.py, line 391:\n    return evt.repeat';
		$m.__track_lines__[394] = 'pyjamas.DOM.py, line 394:\n    def eventGetScreenX(evt):';
		$m.__track_lines__[395] = 'pyjamas.DOM.py, line 395:\n    return evt.screenX';
		$m.__track_lines__[398] = 'pyjamas.DOM.py, line 398:\n    def eventGetScreenY(evt):';
		$m.__track_lines__[399] = 'pyjamas.DOM.py, line 399:\n    return evt.screenY';
		$m.__track_lines__[402] = 'pyjamas.DOM.py, line 402:\n    def eventGetShiftKey(evt):';
		$m.__track_lines__[403] = 'pyjamas.DOM.py, line 403:\n    return evt.shiftKey';
		$m.__track_lines__[406] = 'pyjamas.DOM.py, line 406:\n    def eventGetCurrentTarget(event):';
		$m.__track_lines__[407] = 'pyjamas.DOM.py, line 407:\n    return event.currentTarget';
		$m.__track_lines__[410] = 'pyjamas.DOM.py, line 410:\n    def eventGetTarget(event):';
		$m.__track_lines__[411] = 'pyjamas.DOM.py, line 411:\n    return event.target';
		$m.__track_lines__[414] = 'pyjamas.DOM.py, line 414:\n    def eventGetToElement(evt):';
		$m.__track_lines__[415] = 'pyjamas.DOM.py, line 415:\n    type = eventGetType(evt)';
		$m.__track_lines__[416] = "pyjamas.DOM.py, line 416:\n    if type == 'mouseout':";
		$m.__track_lines__[417] = 'pyjamas.DOM.py, line 417:\n    return evt.relatedTarget';
		$m.__track_lines__[419] = 'pyjamas.DOM.py, line 419:\n    return evt.target';
		$m.__track_lines__[420] = 'pyjamas.DOM.py, line 420:\n    return None';
		$m.__track_lines__[423] = 'pyjamas.DOM.py, line 423:\n    def eventGetType(event):';
		$m.__track_lines__[424] = 'pyjamas.DOM.py, line 424:\n    return event.type';
		$m.__track_lines__[426] = 'pyjamas.DOM.py, line 426:\n    def eventGetTypeInt(event):';
		$m.__track_lines__[427] = 'pyjamas.DOM.py, line 427:\n    return Event.eventmap.get(str(event.type), 0)';
		$m.__track_lines__[430] = 'pyjamas.DOM.py, line 430:\n    def eventGetTypeString(event):';
		$m.__track_lines__[431] = 'pyjamas.DOM.py, line 431:\n    return eventGetType(event)';
		$m.__track_lines__[434] = 'pyjamas.DOM.py, line 434:\n    def eventPreventDefault(evt):';
		$m.__track_lines__[435] = 'pyjamas.DOM.py, line 435:\n    evt.preventDefault()';
		$m.__track_lines__[438] = 'pyjamas.DOM.py, line 438:\n    def eventSetKeyCode(evt, key):';
		$m.__track_lines__[439] = 'pyjamas.DOM.py, line 439:\n    evt.keyCode = key';
		$m.__track_lines__[442] = 'pyjamas.DOM.py, line 442:\n    def eventToString(evt):';
		$m.__track_lines__[443] = 'pyjamas.DOM.py, line 443:\n    return evt.toString()';
		$m.__track_lines__[446] = 'pyjamas.DOM.py, line 446:\n    def iframeGetSrc(elem):';
		$m.__track_lines__[447] = 'pyjamas.DOM.py, line 447:\n    return elem.src';
		$m.__track_lines__[450] = 'pyjamas.DOM.py, line 450:\n    def getAbsoluteLeft(elem):';
		$m.__track_lines__[451] = 'pyjamas.DOM.py, line 451:\n    left = 0';
		$m.__track_lines__[452] = 'pyjamas.DOM.py, line 452:\n    curr = elem';
		$m.__track_lines__[453] = 'pyjamas.DOM.py, line 453:\n    while curr.offsetParent:';
		$m.__track_lines__[454] = 'pyjamas.DOM.py, line 454:\n    left -= curr.scrollLeft';
		$m.__track_lines__[455] = 'pyjamas.DOM.py, line 455:\n    curr = curr.parentNode';
		$m.__track_lines__[457] = 'pyjamas.DOM.py, line 457:\n    while elem:';
		$m.__track_lines__[458] = 'pyjamas.DOM.py, line 458:\n    left += elem.offsetLeft - elem.scrollLeft';
		$m.__track_lines__[459] = 'pyjamas.DOM.py, line 459:\n    elem = elem.offsetParent';
		$m.__track_lines__[461] = 'pyjamas.DOM.py, line 461:\n    return left';
		$m.__track_lines__[464] = 'pyjamas.DOM.py, line 464:\n    def getAbsoluteTop(elem):';
		$m.__track_lines__[465] = 'pyjamas.DOM.py, line 465:\n    top = 0';
		$m.__track_lines__[466] = 'pyjamas.DOM.py, line 466:\n    curr = elem';
		$m.__track_lines__[467] = 'pyjamas.DOM.py, line 467:\n    while curr.offsetParent:';
		$m.__track_lines__[468] = 'pyjamas.DOM.py, line 468:\n    top -= curr.scrollTop';
		$m.__track_lines__[469] = 'pyjamas.DOM.py, line 469:\n    curr = curr.parentNode';
		$m.__track_lines__[471] = 'pyjamas.DOM.py, line 471:\n    while elem:';
		$m.__track_lines__[472] = 'pyjamas.DOM.py, line 472:\n    top += elem.offsetTop - elem.scrollTop';
		$m.__track_lines__[473] = 'pyjamas.DOM.py, line 473:\n    elem = elem.offsetParent';
		$m.__track_lines__[475] = 'pyjamas.DOM.py, line 475:\n    return top';
		$m.__track_lines__[478] = 'pyjamas.DOM.py, line 478:\n    def getAttribute(elem, attr):';
		$m.__track_lines__[479] = 'pyjamas.DOM.py, line 479:\n    attr = getattr(elem, attr)';
		$m.__track_lines__[480] = 'pyjamas.DOM.py, line 480:\n    if attr is None:';
		$m.__track_lines__[481] = 'pyjamas.DOM.py, line 481:\n    return None';
		$m.__track_lines__[482] = 'pyjamas.DOM.py, line 482:\n    return str(attr)';
		$m.__track_lines__[485] = 'pyjamas.DOM.py, line 485:\n    def getElemAttribute(elem, attr):';
		$m.__track_lines__[486] = 'pyjamas.DOM.py, line 486:\n    mf = get_main_frame()';
		$m.__track_lines__[487] = 'pyjamas.DOM.py, line 487:\n    if not elem.hasAttribute(attr):';
		$m.__track_lines__[488] = 'pyjamas.DOM.py, line 488:\n    return str(getattr(elem, mf.mash_attrib(attr)))';
		$m.__track_lines__[489] = 'pyjamas.DOM.py, line 489:\n    return str(elem.getAttribute(attr))';
		$m.__track_lines__[492] = 'pyjamas.DOM.py, line 492:\n    def getBooleanAttribute(elem, attr):';
		$m.__track_lines__[493] = 'pyjamas.DOM.py, line 493:\n    mf = get_main_frame()';
		$m.__track_lines__[494] = 'pyjamas.DOM.py, line 494:\n    return bool(getattr(elem, mf.mash_attrib(attr)))';
		$m.__track_lines__[497] = 'pyjamas.DOM.py, line 497:\n    def getBooleanElemAttribute(elem, attr):';
		$m.__track_lines__[498] = 'pyjamas.DOM.py, line 498:\n    if not elem.hasAttribute(attr):';
		$m.__track_lines__[499] = 'pyjamas.DOM.py, line 499:\n    return None';
		$m.__track_lines__[500] = 'pyjamas.DOM.py, line 500:\n    return bool(elem.getAttribute(attr))';
		$m.__track_lines__[503] = 'pyjamas.DOM.py, line 503:\n    def getCaptureElement():';
		$m.__track_lines__[504] = 'pyjamas.DOM.py, line 504:\n    global sCaptureElem';
		$m.__track_lines__[505] = 'pyjamas.DOM.py, line 505:\n    return sCaptureElem';
		$m.__track_lines__[508] = 'pyjamas.DOM.py, line 508:\n    def getChild(elem, index):';
		$m.__track_lines__[512] = 'pyjamas.DOM.py, line 512:\n    count = 0';
		$m.__track_lines__[513] = 'pyjamas.DOM.py, line 513:\n    child = elem.firstChild';
		$m.__track_lines__[514] = 'pyjamas.DOM.py, line 514:\n    while child:';
		$m.__track_lines__[515] = 'pyjamas.DOM.py, line 515:\n    next = child.nextSibling';
		$m.__track_lines__[516] = 'pyjamas.DOM.py, line 516:\n    if child.nodeType == 1:';
		$m.__track_lines__[517] = 'pyjamas.DOM.py, line 517:\n    if index == count:';
		$m.__track_lines__[518] = 'pyjamas.DOM.py, line 518:\n    return child';
		$m.__track_lines__[519] = 'pyjamas.DOM.py, line 519:\n    count += 1';
		$m.__track_lines__[520] = 'pyjamas.DOM.py, line 520:\n    child = next';
		$m.__track_lines__[521] = 'pyjamas.DOM.py, line 521:\n    return None';
		$m.__track_lines__[524] = 'pyjamas.DOM.py, line 524:\n    def getChildCount(elem):';
		$m.__track_lines__[529] = 'pyjamas.DOM.py, line 529:\n    count = 0';
		$m.__track_lines__[530] = 'pyjamas.DOM.py, line 530:\n    child = elem.firstChild';
		$m.__track_lines__[531] = 'pyjamas.DOM.py, line 531:\n    while child:';
		$m.__track_lines__[532] = 'pyjamas.DOM.py, line 532:\n    if child.nodeType == 1:';
		$m.__track_lines__[533] = 'pyjamas.DOM.py, line 533:\n    count += 1';
		$m.__track_lines__[534] = 'pyjamas.DOM.py, line 534:\n    child = child.nextSibling';
		$m.__track_lines__[535] = 'pyjamas.DOM.py, line 535:\n    return count';
		$m.__track_lines__[538] = 'pyjamas.DOM.py, line 538:\n    def getChildIndex(parent, toFind):';
		$m.__track_lines__[544] = 'pyjamas.DOM.py, line 544:\n    count = 0';
		$m.__track_lines__[545] = 'pyjamas.DOM.py, line 545:\n    child = parent.firstChild';
		$m.__track_lines__[546] = 'pyjamas.DOM.py, line 546:\n    while child:';
		$m.__track_lines__[547] = 'pyjamas.DOM.py, line 547:\n    if child == toFind:';
		$m.__track_lines__[548] = 'pyjamas.DOM.py, line 548:\n    return count';
		$m.__track_lines__[549] = 'pyjamas.DOM.py, line 549:\n    if child.nodeType == 1:';
		$m.__track_lines__[550] = 'pyjamas.DOM.py, line 550:\n    count += 1';
		$m.__track_lines__[551] = 'pyjamas.DOM.py, line 551:\n    child = child.nextSibling';
		$m.__track_lines__[553] = 'pyjamas.DOM.py, line 553:\n    return -1';
		$m.__track_lines__[556] = 'pyjamas.DOM.py, line 556:\n    def getElementById(id):';
		$m.__track_lines__[560] = 'pyjamas.DOM.py, line 560:\n    return doc().getElementById(id)';
		$m.__track_lines__[563] = 'pyjamas.DOM.py, line 563:\n    def getEventListener(element):';
		$m.__track_lines__[567] = 'pyjamas.DOM.py, line 567:\n    return get_listener(element)';
		$m.__track_lines__[569] = 'pyjamas.DOM.py, line 569:\n    eventbitsmap = {}';
		$m.__track_lines__[572] = 'pyjamas.DOM.py, line 572:\n    def getEventsSunk(element):';
		$m.__track_lines__[577] = 'pyjamas.DOM.py, line 577:\n    return eventbitsmap.get(element, 0)';
		$m.__track_lines__[580] = 'pyjamas.DOM.py, line 580:\n    def getFirstChild(elem):';
		$m.__track_lines__[581] = 'pyjamas.DOM.py, line 581:\n    child = elem and elem.firstChild';
		$m.__track_lines__[582] = 'pyjamas.DOM.py, line 582:\n    while child and child.nodeType != 1:';
		$m.__track_lines__[583] = 'pyjamas.DOM.py, line 583:\n    child = child.nextSibling';
		$m.__track_lines__[584] = 'pyjamas.DOM.py, line 584:\n    return child';
		$m.__track_lines__[587] = 'pyjamas.DOM.py, line 587:\n    def getLastChild(elem):';
		$m.__track_lines__[588] = 'pyjamas.DOM.py, line 588:\n    child = elem and elem.lastChild';
		$m.__track_lines__[589] = 'pyjamas.DOM.py, line 589:\n    while child and child.nodeType != 1:';
		$m.__track_lines__[590] = 'pyjamas.DOM.py, line 590:\n    child = child.previousSibling';
		$m.__track_lines__[591] = 'pyjamas.DOM.py, line 591:\n    return child';
		$m.__track_lines__[594] = 'pyjamas.DOM.py, line 594:\n    def getInnerHTML(element):';
		$m.__track_lines__[595] = 'pyjamas.DOM.py, line 595:\n    try:';
		$m.__track_lines__[596] = 'pyjamas.DOM.py, line 596:\n    return element and element.innerHtml # webkit. erk.';
		$m.__track_lines__[598] = 'pyjamas.DOM.py, line 598:\n    return element and element.innerHTML # hulahop / xul.  yuk.';
		$m.__track_lines__[601] = 'pyjamas.DOM.py, line 601:\n    def getInnerText(element):';
		$m.__track_lines__[604] = "pyjamas.DOM.py, line 604:\n    text = ''";
		$m.__track_lines__[605] = 'pyjamas.DOM.py, line 605:\n    child = element.firstChild';
		$m.__track_lines__[606] = 'pyjamas.DOM.py, line 606:\n    while child:';
		$m.__track_lines__[607] = 'pyjamas.DOM.py, line 607:\n    if child.nodeType == 1:';
		$m.__track_lines__[608] = 'pyjamas.DOM.py, line 608:\n    text += getInnerText(child)';
		$m.__track_lines__[610] = 'pyjamas.DOM.py, line 610:\n    text += child.nodeValue';
		$m.__track_lines__[611] = 'pyjamas.DOM.py, line 611:\n    child = child.nextSibling';
		$m.__track_lines__[612] = 'pyjamas.DOM.py, line 612:\n    return text';
		$m.__track_lines__[615] = 'pyjamas.DOM.py, line 615:\n    def getIntAttribute(elem, attr):';
		$m.__track_lines__[616] = 'pyjamas.DOM.py, line 616:\n    return int(getattr(elem, attr))';
		$m.__track_lines__[619] = 'pyjamas.DOM.py, line 619:\n    def getIntElemAttribute(elem, attr):';
		$m.__track_lines__[620] = 'pyjamas.DOM.py, line 620:\n    if not elem.hasAttribute(attr):';
		$m.__track_lines__[621] = 'pyjamas.DOM.py, line 621:\n    return None';
		$m.__track_lines__[622] = 'pyjamas.DOM.py, line 622:\n    return int(elem.getAttribute(attr))';
		$m.__track_lines__[625] = 'pyjamas.DOM.py, line 625:\n    def getIntStyleAttribute(elem, attr):';
		$m.__track_lines__[626] = 'pyjamas.DOM.py, line 626:\n    return getIntAttribute(elem.style, attr)';
		$m.__track_lines__[629] = 'pyjamas.DOM.py, line 629:\n    def getPrevSibling(elem):';
		$m.__track_lines__[630] = 'pyjamas.DOM.py, line 630:\n    sib = elem.previousSibling';
		$m.__track_lines__[631] = 'pyjamas.DOM.py, line 631:\n    while sib and sib.nodeType != 1:';
		$m.__track_lines__[632] = 'pyjamas.DOM.py, line 632:\n    sib = sib.previousSibling';
		$m.__track_lines__[633] = 'pyjamas.DOM.py, line 633:\n    return sib';
		$m.__track_lines__[636] = 'pyjamas.DOM.py, line 636:\n    def getNextSibling(elem):';
		$m.__track_lines__[637] = 'pyjamas.DOM.py, line 637:\n    sib = elem.nextSibling';
		$m.__track_lines__[638] = 'pyjamas.DOM.py, line 638:\n    while sib and sib.nodeType != 1:';
		$m.__track_lines__[639] = 'pyjamas.DOM.py, line 639:\n    sib = sib.nextSibling';
		$m.__track_lines__[640] = 'pyjamas.DOM.py, line 640:\n    return sib';
		$m.__track_lines__[643] = 'pyjamas.DOM.py, line 643:\n    def getNodeType(elem):';
		$m.__track_lines__[644] = 'pyjamas.DOM.py, line 644:\n    return elem.nodeType';
		$m.__track_lines__[647] = 'pyjamas.DOM.py, line 647:\n    def getParent(elem):';
		$m.__track_lines__[648] = 'pyjamas.DOM.py, line 648:\n    parent = elem.parentNode';
		$m.__track_lines__[649] = 'pyjamas.DOM.py, line 649:\n    if parent is None:';
		$m.__track_lines__[650] = 'pyjamas.DOM.py, line 650:\n    return None';
		$m.__track_lines__[651] = 'pyjamas.DOM.py, line 651:\n    if getNodeType(parent) != 1:';
		$m.__track_lines__[652] = 'pyjamas.DOM.py, line 652:\n    return None';
		$m.__track_lines__[653] = 'pyjamas.DOM.py, line 653:\n    return parent';
		$m.__track_lines__[656] = 'pyjamas.DOM.py, line 656:\n    def getStyleAttribute(elem, attr):';
		$m.__track_lines__[657] = 'pyjamas.DOM.py, line 657:\n    try:';
		$m.__track_lines__[658] = "pyjamas.DOM.py, line 658:\n    if hasattr(elem.style, 'getPropertyValue'):";
		$m.__track_lines__[659] = 'pyjamas.DOM.py, line 659:\n    return elem.style.getPropertyValue(mash_name_for_glib(attr))';
		$m.__track_lines__[661] = 'pyjamas.DOM.py, line 661:\n    return elem.style.getProperty(mash_name_for_glib(attr))';
		$m.__track_lines__[662] = 'pyjamas.DOM.py, line 662:\n    return elem.style.getAttribute(attr)';
		$m.__track_lines__[664] = 'pyjamas.DOM.py, line 664:\n    return getattr(elem.style, attr, None)';
		$m.__track_lines__[667] = 'pyjamas.DOM.py, line 667:\n    def insertChild(parent, toAdd, index):';
		$m.__track_lines__[668] = 'pyjamas.DOM.py, line 668:\n    count = 0';
		$m.__track_lines__[669] = 'pyjamas.DOM.py, line 669:\n    child = parent.firstChild';
		$m.__track_lines__[670] = 'pyjamas.DOM.py, line 670:\n    before = None';
		$m.__track_lines__[671] = 'pyjamas.DOM.py, line 671:\n    while child:';
		$m.__track_lines__[672] = 'pyjamas.DOM.py, line 672:\n    if child.nodeType == 1:';
		$m.__track_lines__[673] = 'pyjamas.DOM.py, line 673:\n    if (count == index):';
		$m.__track_lines__[674] = 'pyjamas.DOM.py, line 674:\n    before = child';
		$m.__track_lines__[675] = 'pyjamas.DOM.py, line 675:\n    break';
		$m.__track_lines__[677] = 'pyjamas.DOM.py, line 677:\n    count += 1';
		$m.__track_lines__[678] = 'pyjamas.DOM.py, line 678:\n    child = child.nextSibling';
		$m.__track_lines__[680] = 'pyjamas.DOM.py, line 680:\n    if before is None:';
		$m.__track_lines__[681] = 'pyjamas.DOM.py, line 681:\n    parent.appendChild(toAdd)';
		$m.__track_lines__[683] = 'pyjamas.DOM.py, line 683:\n    parent.insertBefore(toAdd, before)';
		$m.__track_lines__[686] = 'pyjamas.DOM.py, line 686:\n    class IterChildrenClass:';
		$m.__track_lines__[688] = 'pyjamas.DOM.py, line 688:\n    def __init__(self, elem):';
		$m.__track_lines__[689] = 'pyjamas.DOM.py, line 689:\n    self.parent = elem';
		$m.__track_lines__[690] = 'pyjamas.DOM.py, line 690:\n    self.child = elem.firstChild';
		$m.__track_lines__[691] = 'pyjamas.DOM.py, line 691:\n    self.lastChild = None';
		$m.__track_lines__[693] = 'pyjamas.DOM.py, line 693:\n    def next(self):';
		$m.__track_lines__[694] = 'pyjamas.DOM.py, line 694:\n    if not self.child:';
		$m.__track_lines__[695] = 'pyjamas.DOM.py, line 695:\n    raise StopIteration';
		$m.__track_lines__[696] = 'pyjamas.DOM.py, line 696:\n    self.lastChild = self.child';
		$m.__track_lines__[697] = 'pyjamas.DOM.py, line 697:\n    self.child = getNextSibling(self.child)';
		$m.__track_lines__[698] = 'pyjamas.DOM.py, line 698:\n    return self.lastChild';
		$m.__track_lines__[700] = 'pyjamas.DOM.py, line 700:\n    def remove(self):';
		$m.__track_lines__[701] = 'pyjamas.DOM.py, line 701:\n    self.parent.removeChild(self.lastChild)';
		$m.__track_lines__[703] = 'pyjamas.DOM.py, line 703:\n    def __iter__(self):';
		$m.__track_lines__[704] = 'pyjamas.DOM.py, line 704:\n    return self';
		$m.__track_lines__[707] = 'pyjamas.DOM.py, line 707:\n    def iterChildren(elem):';
		$m.__track_lines__[712] = 'pyjamas.DOM.py, line 712:\n    return IterChildrenClass(elem)';
		$m.__track_lines__[715] = 'pyjamas.DOM.py, line 715:\n    class IterWalkChildren:';
		$m.__track_lines__[717] = 'pyjamas.DOM.py, line 717:\n    def __init__(self, elem, all_nodes=False):';
		$m.__track_lines__[718] = 'pyjamas.DOM.py, line 718:\n    self.parent = elem';
		$m.__track_lines__[719] = 'pyjamas.DOM.py, line 719:\n    self.all_nodes = all_nodes';
		$m.__track_lines__[720] = 'pyjamas.DOM.py, line 720:\n    if all_nodes:';
		$m.__track_lines__[721] = 'pyjamas.DOM.py, line 721:\n    self.child = elem.firstChild';
		$m.__track_lines__[723] = 'pyjamas.DOM.py, line 723:\n    self.child = getFirstChild(elem)';
		$m.__track_lines__[724] = 'pyjamas.DOM.py, line 724:\n    self.lastChild = None';
		$m.__track_lines__[725] = 'pyjamas.DOM.py, line 725:\n    self.stack = []';
		$m.__track_lines__[727] = 'pyjamas.DOM.py, line 727:\n    def next(self):';
		$m.__track_lines__[728] = 'pyjamas.DOM.py, line 728:\n    if not self.child:';
		$m.__track_lines__[729] = 'pyjamas.DOM.py, line 729:\n    raise StopIteration';
		$m.__track_lines__[730] = 'pyjamas.DOM.py, line 730:\n    self.lastChild = self.child';
		$m.__track_lines__[731] = 'pyjamas.DOM.py, line 731:\n    if self.all_nodes:';
		$m.__track_lines__[732] = 'pyjamas.DOM.py, line 732:\n    firstChild = self.child.firstChild';
		$m.__track_lines__[733] = 'pyjamas.DOM.py, line 733:\n    nextSibling = self.child.nextSibling';
		$m.__track_lines__[735] = 'pyjamas.DOM.py, line 735:\n    firstChild = getFirstChild(self.child)';
		$m.__track_lines__[736] = 'pyjamas.DOM.py, line 736:\n    nextSibling = getNextSibling(self.child)';
		$m.__track_lines__[737] = 'pyjamas.DOM.py, line 737:\n    if firstChild is not None:';
		$m.__track_lines__[738] = 'pyjamas.DOM.py, line 738:\n    if nextSibling is not None:';
		$m.__track_lines__[739] = 'pyjamas.DOM.py, line 739:\n    self.stack.append((nextSibling, self.parent))';
		$m.__track_lines__[740] = 'pyjamas.DOM.py, line 740:\n    self.parent = self.child';
		$m.__track_lines__[741] = 'pyjamas.DOM.py, line 741:\n    self.child = firstChild';
		$m.__track_lines__[743] = 'pyjamas.DOM.py, line 743:\n    self.child = nextSibling';
		$m.__track_lines__[745] = 'pyjamas.DOM.py, line 745:\n    (self.child, self.parent) = self.stack.pop()';
		$m.__track_lines__[747] = 'pyjamas.DOM.py, line 747:\n    self.child = None';
		$m.__track_lines__[748] = 'pyjamas.DOM.py, line 748:\n    return self.lastChild';
		$m.__track_lines__[750] = 'pyjamas.DOM.py, line 750:\n    def remove(self):';
		$m.__track_lines__[751] = 'pyjamas.DOM.py, line 751:\n    self.parent.removeChild(self.lastChild)';
		$m.__track_lines__[753] = 'pyjamas.DOM.py, line 753:\n    def __iter__(self):';
		$m.__track_lines__[754] = 'pyjamas.DOM.py, line 754:\n    return self';
		$m.__track_lines__[757] = 'pyjamas.DOM.py, line 757:\n    def walkChildren(elem):';
		$m.__track_lines__[763] = 'pyjamas.DOM.py, line 763:\n    return IterWalkChildren(elem)';
		$m.__track_lines__[766] = 'pyjamas.DOM.py, line 766:\n    def isOrHasChild(parent, child):';
		$m.__track_lines__[767] = 'pyjamas.DOM.py, line 767:\n    while child:';
		$m.__track_lines__[768] = 'pyjamas.DOM.py, line 768:\n    if compare(parent, child):';
		$m.__track_lines__[769] = 'pyjamas.DOM.py, line 769:\n    return True';
		$m.__track_lines__[770] = 'pyjamas.DOM.py, line 770:\n    child = child.parentNode';
		$m.__track_lines__[771] = 'pyjamas.DOM.py, line 771:\n    if not child:';
		$m.__track_lines__[772] = 'pyjamas.DOM.py, line 772:\n    return False';
		$m.__track_lines__[773] = 'pyjamas.DOM.py, line 773:\n    if child.nodeType != 1:';
		$m.__track_lines__[774] = 'pyjamas.DOM.py, line 774:\n    child = None';
		$m.__track_lines__[775] = 'pyjamas.DOM.py, line 775:\n    return False';
		$m.__track_lines__[778] = 'pyjamas.DOM.py, line 778:\n    def releaseCapture(elem):';
		$m.__track_lines__[780] = 'pyjamas.DOM.py, line 780:\n    global sCaptureElem';
		$m.__track_lines__[781] = 'pyjamas.DOM.py, line 781:\n    if sCaptureElem and compare(elem, sCaptureElem):';
		$m.__track_lines__[782] = 'pyjamas.DOM.py, line 782:\n    sCaptureElem = None';
		$m.__track_lines__[783] = 'pyjamas.DOM.py, line 783:\n    releaseCapture_impl(elem)';
		$m.__track_lines__[784] = 'pyjamas.DOM.py, line 784:\n    return';
		$m.__track_lines__[787] = 'pyjamas.DOM.py, line 787:\n    def releaseCapture_impl(elem): pass';
		$m.__track_lines__[789] = 'pyjamas.DOM.py, line 789:\n    def removeEventPreview(preview):';
		$m.__track_lines__[790] = 'pyjamas.DOM.py, line 790:\n    sEventPreviewStack.remove(preview)';
		$m.__track_lines__[793] = 'pyjamas.DOM.py, line 793:\n    def getOffsetHeight(elem):';
		$m.__track_lines__[794] = 'pyjamas.DOM.py, line 794:\n    return elem.offsetHeight';
		$m.__track_lines__[797] = 'pyjamas.DOM.py, line 797:\n    def getOffsetWidth(elem):';
		$m.__track_lines__[798] = 'pyjamas.DOM.py, line 798:\n    return elem.offsetWidth';
		$m.__track_lines__[801] = 'pyjamas.DOM.py, line 801:\n    def scrollIntoView(elem):';
		$m.__track_lines__[802] = 'pyjamas.DOM.py, line 802:\n    left = elem.offsetLeft';
		$m.__track_lines__[803] = 'pyjamas.DOM.py, line 803:\n    top = elem.offsetTop';
		$m.__track_lines__[804] = 'pyjamas.DOM.py, line 804:\n    width = elem.offsetWidth';
		$m.__track_lines__[805] = 'pyjamas.DOM.py, line 805:\n    height = elem.offsetHeight';
		$m.__track_lines__[807] = 'pyjamas.DOM.py, line 807:\n    if elem.parentNode != elem.offsetParent:';
		$m.__track_lines__[808] = 'pyjamas.DOM.py, line 808:\n    left -= elem.parentNode.offsetLeft';
		$m.__track_lines__[809] = 'pyjamas.DOM.py, line 809:\n    top -= elem.parentNode.offsetTop';
		$m.__track_lines__[811] = 'pyjamas.DOM.py, line 811:\n    cur = elem.parentNode';
		$m.__track_lines__[812] = 'pyjamas.DOM.py, line 812:\n    while cur and cur.nodeType == 1:';
		$m.__track_lines__[813] = "pyjamas.DOM.py, line 813:\n    if hasattr(cur, 'style') and hasattr(cur.style, 'overflow') and \\";
		$m.__track_lines__[815] = 'pyjamas.DOM.py, line 815:\n    if left < cur.scrollLeft:';
		$m.__track_lines__[816] = 'pyjamas.DOM.py, line 816:\n    cur.scrollLeft = left';
		$m.__track_lines__[817] = 'pyjamas.DOM.py, line 817:\n    if left + width > cur.scrollLeft + cur.clientWidth:';
		$m.__track_lines__[818] = 'pyjamas.DOM.py, line 818:\n    cur.scrollLeft = (left + width) - cur.clientWidth';
		$m.__track_lines__[819] = 'pyjamas.DOM.py, line 819:\n    if top < cur.scrollTop:';
		$m.__track_lines__[820] = 'pyjamas.DOM.py, line 820:\n    cur.scrollTop = top';
		$m.__track_lines__[821] = 'pyjamas.DOM.py, line 821:\n    if top + height > cur.scrollTop + cur.clientHeight:';
		$m.__track_lines__[822] = 'pyjamas.DOM.py, line 822:\n    cur.scrollTop = (top + height) - cur.clientHeight';
		$m.__track_lines__[824] = 'pyjamas.DOM.py, line 824:\n    offsetLeft = cur.offsetLeft';
		$m.__track_lines__[825] = 'pyjamas.DOM.py, line 825:\n    offsetTop = cur.offsetTop';
		$m.__track_lines__[826] = 'pyjamas.DOM.py, line 826:\n    if cur.parentNode != cur.offsetParent:';
		$m.__track_lines__[827] = 'pyjamas.DOM.py, line 827:\n    if hasattr(cur.parentNode, "offsetLeft"):';
		$m.__track_lines__[828] = 'pyjamas.DOM.py, line 828:\n    offsetLeft -= cur.parentNode.offsetLeft';
		$m.__track_lines__[829] = 'pyjamas.DOM.py, line 829:\n    if hasattr(cur.parentNode, "offsetTop"):';
		$m.__track_lines__[830] = 'pyjamas.DOM.py, line 830:\n    offsetTop -= cur.parentNode.offsetTop';
		$m.__track_lines__[832] = 'pyjamas.DOM.py, line 832:\n    left += offsetLeft - cur.scrollLeft';
		$m.__track_lines__[833] = 'pyjamas.DOM.py, line 833:\n    top += offsetTop - cur.scrollTop';
		$m.__track_lines__[834] = 'pyjamas.DOM.py, line 834:\n    cur = cur.parentNode';
		$m.__track_lines__[837] = "pyjamas.DOM.py, line 837:\n    def mash_name_for_glib(name, joiner='-'):";
		$m.__track_lines__[838] = "pyjamas.DOM.py, line 838:\n    res = ''";
		$m.__track_lines__[839] = 'pyjamas.DOM.py, line 839:\n    for c in name:';
		$m.__track_lines__[840] = 'pyjamas.DOM.py, line 840:\n    if c.isupper():';
		$m.__track_lines__[841] = 'pyjamas.DOM.py, line 841:\n    res += joiner + c.lower()';
		$m.__track_lines__[843] = 'pyjamas.DOM.py, line 843:\n    res += c';
		$m.__track_lines__[844] = 'pyjamas.DOM.py, line 844:\n    return res';
		$m.__track_lines__[847] = 'pyjamas.DOM.py, line 847:\n    def removeAttribute(element, attribute):';
		$m.__track_lines__[848] = 'pyjamas.DOM.py, line 848:\n    element.removeAttribute(attribute)';
		$m.__track_lines__[851] = 'pyjamas.DOM.py, line 851:\n    def setAttribute(element, attribute, value):';
		$m.__track_lines__[853] = 'pyjamas.DOM.py, line 853:\n    setattr(element, attribute, value)';
		$m.__track_lines__[856] = 'pyjamas.DOM.py, line 856:\n    def setElemAttribute(element, attribute, value):';
		$m.__track_lines__[857] = 'pyjamas.DOM.py, line 857:\n    element.setAttribute(attribute, value)';
		$m.__track_lines__[860] = 'pyjamas.DOM.py, line 860:\n    def setBooleanAttribute(elem, attr, value):';
		$m.__track_lines__[861] = 'pyjamas.DOM.py, line 861:\n    mf = get_main_frame()';
		$m.__track_lines__[862] = 'pyjamas.DOM.py, line 862:\n    setattr(elem, mf.mash_attrib(attr), value)';
		$m.__track_lines__[865] = 'pyjamas.DOM.py, line 865:\n    def setCapture(elem):';
		$m.__track_lines__[866] = 'pyjamas.DOM.py, line 866:\n    global sCaptureElem';
		$m.__track_lines__[867] = 'pyjamas.DOM.py, line 867:\n    sCaptureElem = elem';
		$m.__track_lines__[869] = 'pyjamas.DOM.py, line 869:\n    setCapture_impl(elem)';
		$m.__track_lines__[872] = 'pyjamas.DOM.py, line 872:\n    def setCapture_impl(elem): pass';
		$m.__track_lines__[874] = 'pyjamas.DOM.py, line 874:\n    def setEventListener(element, listener):';
		$m.__track_lines__[881] = 'pyjamas.DOM.py, line 881:\n    set_listener(element, listener)';
		$m.__track_lines__[884] = 'pyjamas.DOM.py, line 884:\n    def createTextNode(txt):';
		$m.__track_lines__[885] = 'pyjamas.DOM.py, line 885:\n    return doc().createTextNode(txt)';
		$m.__track_lines__[888] = 'pyjamas.DOM.py, line 888:\n    def setInnerHTML(element, html):';
		$m.__track_lines__[889] = 'pyjamas.DOM.py, line 889:\n    try:';
		$m.__track_lines__[890] = 'pyjamas.DOM.py, line 890:\n    element.innerHtml = html # webkit. yuk.';
		$m.__track_lines__[892] = 'pyjamas.DOM.py, line 892:\n    element.innerHTML = html # hulahop / xul.  yukk.';
		$m.__track_lines__[895] = 'pyjamas.DOM.py, line 895:\n    def setInnerText(elem, text):';
		$m.__track_lines__[897] = 'pyjamas.DOM.py, line 897:\n    while elem.firstChild is not None:';
		$m.__track_lines__[898] = 'pyjamas.DOM.py, line 898:\n    elem.removeChild(elem.firstChild)';
		$m.__track_lines__[899] = "pyjamas.DOM.py, line 899:\n    elem.appendChild(createTextNode(text or ''))";
		$m.__track_lines__[902] = 'pyjamas.DOM.py, line 902:\n    def setIntElemAttribute(elem, attr, value):';
		$m.__track_lines__[903] = 'pyjamas.DOM.py, line 903:\n    elem.setAttribute(attr, str(value))';
		$m.__track_lines__[906] = 'pyjamas.DOM.py, line 906:\n    def setIntAttribute(elem, attr, value):';
		$m.__track_lines__[907] = 'pyjamas.DOM.py, line 907:\n    setattr(elem, attr, int(value))';
		$m.__track_lines__[910] = 'pyjamas.DOM.py, line 910:\n    def setIntStyleAttribute(elem, attr, value):';
		$m.__track_lines__[911] = 'pyjamas.DOM.py, line 911:\n    mf = get_main_frame()';
		$m.__track_lines__[912] = "pyjamas.DOM.py, line 912:\n    if hasattr(elem.style, 'setProperty'):";
		$m.__track_lines__[913] = 'pyjamas.DOM.py, line 913:\n    elem.style.setProperty(mf.mash_attrib(attr), str(value), "")';
		$m.__track_lines__[915] = 'pyjamas.DOM.py, line 915:\n    elem.style.setAttribute(mf.mash_attrib(attr), str(value), "")';
		$m.__track_lines__[918] = 'pyjamas.DOM.py, line 918:\n    def setOptionText(select, text, index):';
		$m.__track_lines__[919] = 'pyjamas.DOM.py, line 919:\n    option = select.options.item(index)';
		$m.__track_lines__[920] = 'pyjamas.DOM.py, line 920:\n    option.textContent = text';
		$m.__track_lines__[923] = 'pyjamas.DOM.py, line 923:\n    def setStyleAttribute(element, name, value):';
		$m.__track_lines__[924] = "pyjamas.DOM.py, line 924:\n    if hasattr(element.style, 'setProperty'):";
		$m.__track_lines__[925] = 'pyjamas.DOM.py, line 925:\n    element.style.setProperty(mash_name_for_glib(name), value, "")';
		$m.__track_lines__[927] = 'pyjamas.DOM.py, line 927:\n    element.style.setAttribute(name, value, "")';
		$m.__track_lines__[929] = 'pyjamas.DOM.py, line 929:\n    def setStyleAttributes(element, **kwargs):';
		$m.__track_lines__[933] = 'pyjamas.DOM.py, line 933:\n    for attr, val in kwargs.items():';
		$m.__track_lines__[934] = "pyjamas.DOM.py, line 934:\n    if hasattr(element.style, 'setProperty'):";
		$m.__track_lines__[935] = 'pyjamas.DOM.py, line 935:\n    element.style.setProperty(mash_name_for_glib(attr), val, "")';
		$m.__track_lines__[937] = 'pyjamas.DOM.py, line 937:\n    element.style.setAttribute(attr, val, "")';
		$m.__track_lines__[939] = 'pyjamas.DOM.py, line 939:\n    def sinkEvents(element, bits):';
		$m.__track_lines__[946] = 'pyjamas.DOM.py, line 946:\n    mask = getEventsSunk(element) ^ bits';
		$m.__track_lines__[947] = 'pyjamas.DOM.py, line 947:\n    eventbitsmap[element] = bits';
		$m.__track_lines__[948] = 'pyjamas.DOM.py, line 948:\n    if not mask:';
		$m.__track_lines__[949] = 'pyjamas.DOM.py, line 949:\n    return';
		$m.__track_lines__[951] = 'pyjamas.DOM.py, line 951:\n    bits = mask';
		$m.__track_lines__[953] = 'pyjamas.DOM.py, line 953:\n    if not bits:';
		$m.__track_lines__[954] = 'pyjamas.DOM.py, line 954:\n    return';
		$m.__track_lines__[955] = 'pyjamas.DOM.py, line 955:\n    mf = get_main_frame()';
		$m.__track_lines__[956] = 'pyjamas.DOM.py, line 956:\n    if hasattr(mf, "_addEventListener"):';
		$m.__track_lines__[957] = 'pyjamas.DOM.py, line 957:\n    aev = mf._addEventListener';
		$m.__track_lines__[959] = 'pyjamas.DOM.py, line 959:\n    aev = mf.addEventListener';
		$m.__track_lines__[961] = 'pyjamas.DOM.py, line 961:\n    cb = _dispatchEvent';
		$m.__track_lines__[964] = 'pyjamas.DOM.py, line 964:\n    sinkEventsMozilla(element, bits)';
		$m.__track_lines__[966] = 'pyjamas.DOM.py, line 966:\n    bit = 1';
		$m.__track_lines__[967] = 'pyjamas.DOM.py, line 967:\n    while bits:';
		$m.__track_lines__[968] = 'pyjamas.DOM.py, line 968:\n    if bit > bits:';
		$m.__track_lines__[969] = 'pyjamas.DOM.py, line 969:\n    raise RuntimeError("sinkEvents: bit outruns bits")';
		$m.__track_lines__[970] = 'pyjamas.DOM.py, line 970:\n    if (bits & bit):';
		$m.__track_lines__[971] = 'pyjamas.DOM.py, line 971:\n    for event_name in Event.eventbits[bit][1]:';
		$m.__track_lines__[972] = 'pyjamas.DOM.py, line 972:\n    aev(element, event_name, cb)';
		$m.__track_lines__[973] = 'pyjamas.DOM.py, line 973:\n    bits ^= bit';
		$m.__track_lines__[974] = 'pyjamas.DOM.py, line 974:\n    bit <<= 1';
		$m.__track_lines__[976] = 'pyjamas.DOM.py, line 976:\n    def sinkEventsMozilla(element, bits):';
		$m.__track_lines__[977] = 'pyjamas.DOM.py, line 977:\n    pass';
		$m.__track_lines__[979] = 'pyjamas.DOM.py, line 979:\n    def toString(elem):';
		$m.__track_lines__[980] = 'pyjamas.DOM.py, line 980:\n    temp = elem.cloneNode(True)';
		$m.__track_lines__[981] = 'pyjamas.DOM.py, line 981:\n    tempDiv = createDiv()';
		$m.__track_lines__[982] = 'pyjamas.DOM.py, line 982:\n    tempDiv.appendChild(temp)';
		$m.__track_lines__[983] = 'pyjamas.DOM.py, line 983:\n    outer = getInnerHTML(tempDiv)';
		$m.__track_lines__[984] = 'pyjamas.DOM.py, line 984:\n    setInnerHTML(temp, "")';
		$m.__track_lines__[985] = 'pyjamas.DOM.py, line 985:\n    return outer';
		$m.__track_lines__[989] = 'pyjamas.DOM.py, line 989:\n    def dispatchEvent(event, element, listener):';
		$m.__track_lines__[990] = 'pyjamas.DOM.py, line 990:\n    dispatchEventImpl(event, element, listener)';
		$m.__track_lines__[993] = 'pyjamas.DOM.py, line 993:\n    def previewEvent(evt):';
		$m.__track_lines__[995] = 'pyjamas.DOM.py, line 995:\n    if len(sEventPreviewStack) == 0:';
		$m.__track_lines__[996] = 'pyjamas.DOM.py, line 996:\n    return True';
		$m.__track_lines__[997] = 'pyjamas.DOM.py, line 997:\n    preview = sEventPreviewStack[-1]';
		$m.__track_lines__[998] = 'pyjamas.DOM.py, line 998:\n    ret = preview.onEventPreview(evt)';
		$m.__track_lines__[999] = 'pyjamas.DOM.py, line 999:\n    if ret:';
		$m.__track_lines__[1000] = 'pyjamas.DOM.py, line 1000:\n    return True';
		$m.__track_lines__[1003] = 'pyjamas.DOM.py, line 1003:\n    if evt:';
		$m.__track_lines__[1004] = 'pyjamas.DOM.py, line 1004:\n    eventCancelBubble(evt, True)';
		$m.__track_lines__[1005] = 'pyjamas.DOM.py, line 1005:\n    eventPreventDefault(evt)';
		$m.__track_lines__[1007] = 'pyjamas.DOM.py, line 1007:\n    return ret';
		$m.__track_lines__[1011] = 'pyjamas.DOM.py, line 1011:\n    def dispatchEventAndCatch(evt, elem, listener, handler):';
		$m.__track_lines__[1012] = 'pyjamas.DOM.py, line 1012:\n    pass';
		$m.__track_lines__[1014] = 'pyjamas.DOM.py, line 1014:\n    currentEvent = None';
		$m.__track_lines__[1017] = 'pyjamas.DOM.py, line 1017:\n    def dispatchEventImpl(event, element, listener):';
		$m.__track_lines__[1018] = 'pyjamas.DOM.py, line 1018:\n    global sCaptureElem';
		$m.__track_lines__[1019] = 'pyjamas.DOM.py, line 1019:\n    global currentEvent';
		$m.__track_lines__[1020] = 'pyjamas.DOM.py, line 1020:\n    if element == sCaptureElem:';
		$m.__track_lines__[1021] = 'pyjamas.DOM.py, line 1021:\n    if eventGetType(event) == "losecapture":';
		$m.__track_lines__[1023] = 'pyjamas.DOM.py, line 1023:\n    sCaptureElem = None';
		$m.__track_lines__[1025] = 'pyjamas.DOM.py, line 1025:\n    prevCurrentEvent = currentEvent';
		$m.__track_lines__[1026] = 'pyjamas.DOM.py, line 1026:\n    currentEvent = event';
		$m.__track_lines__[1027] = 'pyjamas.DOM.py, line 1027:\n    listener.onBrowserEvent(event)';
		$m.__track_lines__[1028] = 'pyjamas.DOM.py, line 1028:\n    currentEvent = prevCurrentEvent';
		$m.__track_lines__[1031] = 'pyjamas.DOM.py, line 1031:\n    def eventGetCurrentEvent():';
		$m.__track_lines__[1032] = 'pyjamas.DOM.py, line 1032:\n    return currentEvent';
		$m.__track_lines__[1035] = 'pyjamas.DOM.py, line 1035:\n    def insertListItem(select, item, value, index):';
		$m.__track_lines__[1036] = 'pyjamas.DOM.py, line 1036:\n    option = createElement("OPTION")';
		$m.__track_lines__[1037] = 'pyjamas.DOM.py, line 1037:\n    setInnerText(option, item)';
		$m.__track_lines__[1038] = 'pyjamas.DOM.py, line 1038:\n    if value is not None:';
		$m.__track_lines__[1039] = 'pyjamas.DOM.py, line 1039:\n    setAttribute(option, "value", value)';
		$m.__track_lines__[1040] = 'pyjamas.DOM.py, line 1040:\n    if index == -1:';
		$m.__track_lines__[1041] = 'pyjamas.DOM.py, line 1041:\n    appendChild(select, option)';
		$m.__track_lines__[1043] = 'pyjamas.DOM.py, line 1043:\n    insertChild(select, option, index)';
		$m.__track_lines__[1046] = 'pyjamas.DOM.py, line 1046:\n    def getBodyOffsetTop():';
		$m.__track_lines__[1047] = 'pyjamas.DOM.py, line 1047:\n    return 0';
		$m.__track_lines__[1050] = 'pyjamas.DOM.py, line 1050:\n    def getBodyOffsetLeft():';
		$m.__track_lines__[1051] = 'pyjamas.DOM.py, line 1051:\n    return 0';
		$m.__track_lines__[1053] = 'pyjamas.DOM.py, line 1053:\n    def eventGetMouseWheelVelocityY(evt):';
		$m.__track_lines__[1056] = 'pyjamas.DOM.py, line 1056:\n    pass';
		$m.__track_lines__[1059] = 'pyjamas.DOM.py, line 1059:\n    if not pyjd.is_desktop:';
		$m.__track_lines__[1060] = 'pyjamas.DOM.py, line 1060:\n    init()';
		var $bool1,$bool131,$bool130;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_9 = new $p['int'](9);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		if ((($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$pyjs.track.lineno=22;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['onResize'] = $p['___import___']('pyjamas.Window.onResize', 'pyjamas', null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['onClosing'] = $p['___import___']('pyjamas.Window.onClosing', 'pyjamas', null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['onClosed'] = $p['___import___']('pyjamas.Window.onClosed', 'pyjamas', null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=25;
			$m['currentEvent'] = null;
		}
		$pyjs.track.lineno=27;
		$m['sCaptureElem'] = null;
		$pyjs.track.lineno=28;
		$m['sEventPreviewStack'] = $p['list']([]);
		$pyjs.track.lineno=30;
		$m['listeners'] = $p['dict']([]);
		$pyjs.track.lineno=32;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=33;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONBLUR'] = $p['___import___']('pyjamas.ui.Event.ONBLUR', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONCHANGE'] = $p['___import___']('pyjamas.ui.Event.ONCHANGE', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONCLICK'] = $p['___import___']('pyjamas.ui.Event.ONCLICK', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONCONTEXTMENU'] = $p['___import___']('pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONDBLCLICK'] = $p['___import___']('pyjamas.ui.Event.ONDBLCLICK', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONERROR'] = $p['___import___']('pyjamas.ui.Event.ONERROR', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONFOCUS'] = $p['___import___']('pyjamas.ui.Event.ONFOCUS', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONKEYDOWN'] = $p['___import___']('pyjamas.ui.Event.ONKEYDOWN', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONKEYPRESS'] = $p['___import___']('pyjamas.ui.Event.ONKEYPRESS', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONKEYUP'] = $p['___import___']('pyjamas.ui.Event.ONKEYUP', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONLOAD'] = $p['___import___']('pyjamas.ui.Event.ONLOAD', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONLOSECAPTURE'] = $p['___import___']('pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONMOUSEDOWN'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONMOUSEMOVE'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONMOUSEOUT'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONMOUSEOVER'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONMOUSEUP'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEUP', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONSCROLL'] = $p['___import___']('pyjamas.ui.Event.ONSCROLL', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ONINPUT'] = $p['___import___']('pyjamas.ui.Event.ONINPUT', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=55;
		$m['ELEMENT_NODE'] = $constant_int_1;
		$pyjs.track.lineno=56;
		$m['TEXT_NODE'] = $constant_int_3;
		$pyjs.track.lineno=57;
		$m['DOCUMENT_NODE'] = $constant_int_9;
		$pyjs.track.lineno=59;
		$m['get_listener'] = function(item) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool2,ret,$bool3;
			$pyjs.track={module:'pyjamas.DOM',lineno:59};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=59;
			$pyjs.track.lineno=60;
			if ((($bool2=$p['op_is'](item, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=61;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=62;
			if ((($bool3=$p['hasattr'](item, '__instance__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=63;
				ret = $m['listeners']['get']($p['getattr'](item, '__instance__'));
			}
			else {
				$pyjs.track.lineno=65;
				ret = $m['listeners']['get']($p['hash'](item));
			}
			$pyjs.track.lineno=66;
			$pyjs.track.lineno=66;
			var $pyjs__ret = ret;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['get_listener'].__name__ = 'get_listener';

		$m['get_listener'].__bind_type__ = 0;
		$m['get_listener'].__args__ = [null,null,['item']];
		$pyjs.track.lineno=69;
		$m['set_listener'] = function(item, listener) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool4,$bool5;
			$pyjs.track={module:'pyjamas.DOM',lineno:69};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=69;
			$pyjs.track.lineno=70;
			if ((($bool4=$p['hasattr'](item, '__instance__')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=71;
				$m['listeners'].__setitem__($p['getattr'](item, '__instance__'), listener);
			}
			else if ((($bool5=$p['op_is'](listener, null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=73;
				$m['listeners']['pop']($p['hash'](item));
			}
			else {
				$pyjs.track.lineno=75;
				$m['listeners'].__setitem__($p['hash'](item), listener);
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['set_listener'].__name__ = 'set_listener';

		$m['set_listener'].__bind_type__ = 0;
		$m['set_listener'].__args__ = [null,null,['item'],['listener']];
		$pyjs.track.lineno=78;
		$m['hack_timer_workaround_bug_button'] = null;
		$pyjs.track.lineno=81;
		$m['init'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var mf;
			$pyjs.track={module:'pyjamas.DOM',lineno:81};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=81;
			$pyjs.track.lineno=82;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			$pyjs.track.lineno=83;
			mf['_addWindowEventListener']('click', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=84;
			mf['_addWindowEventListener']('change', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=85;
			mf['_addWindowEventListener']('mouseout', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=86;
			mf['_addWindowEventListener']('mousedown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=87;
			mf['_addWindowEventListener']('mouseup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=88;
			mf['_addWindowEventListener']('resize', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=89;
			mf['_addWindowEventListener']('keyup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=90;
			mf['_addWindowEventListener']('keydown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=91;
			mf['_addWindowEventListener']('keypress', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.track.lineno=92;
			mf['_addWindowEventListener']('mousewheel', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null];
		$pyjs.track.lineno=94;
		$m['_init_testing'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var body,$2,$1;
			$pyjs.track={module:'pyjamas.DOM',lineno:94};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=94;
			$pyjs.track.lineno=95;
			body = (typeof ($1=$doc['getElementsByTagName']('body')).__array != 'undefined'?
				((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__($constant_int_0));
			$pyjs.track.lineno=96;
			$m.mf['_addEventListener'](body, 'click', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=97;
			$m.mf['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=98;
			$m.mf['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=99;
			$m.mf['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=100;
			$m.mf['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=101;
			$m.mf['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=102;
			$m.mf['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=103;
			$m.mf['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=104;
			$m.mf['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.track.lineno=105;
			$m.mf['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m.cb:cb));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_init_testing'].__name__ = '_init_testing';

		$m['_init_testing'].__bind_type__ = 0;
		$m['_init_testing'].__args__ = [null,null];
		$pyjs.track.lineno=107;
		$m['_dispatchWindowEvent'] = function(sender, evt, useCap) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:107};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=107;
			$pyjs.track.lineno=108;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

		$m['_dispatchWindowEvent'].__bind_type__ = 0;
		$m['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
		$pyjs.track.lineno=111;
		$m['_dispatchEvent'] = function(sender, evt, useCap) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var curElem,$and3,$bool10,$and1,$and2,cap,$and4,$and5,$and6,listener,$pyjs_try_err,$bool6,$bool11,$bool13,$bool8,$bool9,$bool12,$bool7;
			$pyjs.track={module:'pyjamas.DOM',lineno:111};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=111;
			$pyjs.track.lineno=113;
			if ((($bool6=$p['op_is'](evt, null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=114;
				evt = $p['getattr']($wnd, 'event');
			}
			else {
				$pyjs.track.lineno=116;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=117;
					sender = $m.get_main_frame()['gobject_wrap'](sender);
					$pyjs.track.lineno=118;
					evt = $m.get_main_frame()['gobject_wrap'](evt);
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.DOM';
					if (true) {
						$pyjs.track.lineno=120;
					}
				}
			}
			$pyjs.track.lineno=121;
			listener = null;
			$pyjs.track.lineno=122;
			curElem = sender;
			$pyjs.track.lineno=125;
			cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
			$pyjs.track.lineno=126;
			listener = $m['get_listener'](cap);
			$pyjs.track.lineno=127;
			if ((($bool8=((($bool7=$and1=cap) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_is'](listener, null):$and1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=129;
				(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
				$pyjs.track.lineno=130;
				evt['stopPropagation']();
				$pyjs.track.lineno=131;
				$pyjs.track.lineno=131;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=133;
			while ((($bool10=((($bool9=$and3=curElem) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['op_is']($m['get_listener'](curElem), null):$and3)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=135;
				curElem = (typeof getParent == "undefined"?$m.getParent:getParent)(curElem);
			}
			$pyjs.track.lineno=136;
			if ((($bool12=((($bool11=$and5=curElem) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']((typeof getNodeType == "undefined"?$m.getNodeType:getNodeType)(curElem), $constant_int_1):$and5)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=137;
				curElem = null;
			}
			$pyjs.track.lineno=139;
			listener = $m['get_listener'](curElem);
			$pyjs.track.lineno=140;
			if ((($bool13=!$p['op_is'](listener, null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=141;
				(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, curElem, listener);
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_dispatchEvent'].__name__ = '_dispatchEvent';

		$m['_dispatchEvent'].__bind_type__ = 0;
		$m['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
		$pyjs.track.lineno=144;
		$m['_dispatchCapturedMouseEvent'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $and8,cap,$bool14,$bool15,$bool16,$and7,listener,$bool17;
			$pyjs.track={module:'pyjamas.DOM',lineno:144};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=144;
			$pyjs.track.lineno=147;
			if ((($bool15=!(($bool14=(typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(evt)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=148;
				$pyjs.track.lineno=148;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=149;
			cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
			$pyjs.track.lineno=150;
			listener = $m['get_listener'](cap);
			$pyjs.track.lineno=151;
			if ((($bool17=((($bool16=$and7=cap) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16.__nonzero__=='function'?
						$bool16.__nonzero__() :
						(typeof $bool16.__len__=='function'?
							($bool16.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_is'](listener, null):$and7)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=152;
				(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
				$pyjs.track.lineno=154;
				evt['stopPropagation']();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

		$m['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
		$m['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=157;
		$m['_dispatchCapturedMouseoutEvent'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool18,$bool19,cap,listener,lcEvent,$bool20;
			$pyjs.track={module:'pyjamas.DOM',lineno:157};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=157;
			$pyjs.track.lineno=158;
			cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
			$pyjs.track.lineno=160;
			if ((($bool18=$p['op_is'](cap, null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18.__nonzero__=='function'?
							$bool18.__nonzero__() :
							(typeof $bool18.__len__=='function'?
								($bool18.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=161;
				$pyjs.track.lineno=161;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=163;
			if ((($bool19=(typeof eventGetToElement == "undefined"?$m.eventGetToElement:eventGetToElement)(evt)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=164;
				$pyjs.track.lineno=164;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=168;
			(typeof setCapture == "undefined"?$m.setCapture:setCapture)(null);
			$pyjs.track.lineno=169;
			listener = $m['get_listener'](cap);
			$pyjs.track.lineno=170;
			if ((($bool20=$p['op_is'](listener, null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20.__nonzero__=='function'?
							$bool20.__nonzero__() :
							(typeof $bool20.__len__=='function'?
								($bool20.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=171;
				$pyjs.track.lineno=171;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=174;
			lcEvent = $doc['createEvent']('UIEvent');
			$pyjs.track.lineno=175;
			lcEvent['initUIEvent']('losecapture', false, false, $wnd, $constant_int_0);
			$pyjs.track.lineno=176;
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(lcEvent, cap, listener);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

		$m['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
		$m['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=179;
		$m['browser_event_cb'] = function(view, event, from_window) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $or4,$or1,$or3,$or2,$bool25,$bool24,$bool27,$pyjs_try_err,$bool21,$bool26,$bool23,$bool22,et;
			$pyjs.track={module:'pyjamas.DOM',lineno:179};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=179;
			$pyjs.track.lineno=181;
			$pyjs.track.lineno=183;
			if ((($bool21=$p['op_is'](event, null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=184;
				event = $p['getattr']($wnd, 'event');
			}
			else {
				$pyjs.track.lineno=186;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=187;
					event = $m.get_main_frame()['gobject_wrap'](event);
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.DOM';
					if (true) {
						$pyjs.track.lineno=189;
					}
				}
			}
			$pyjs.track.lineno=192;
			et = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(event);
			$pyjs.track.lineno=194;
			if ((($bool22=$p['op_eq'](et, 'resize')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=195;
				$m['onResize']();
				$pyjs.track.lineno=196;
				$pyjs.track.lineno=196;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=197;
			if ((($bool23=$p['op_eq'](et, 'mouseout')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=199;
				$m['_dispatchCapturedMouseoutEvent'](event);
			}
			$pyjs.track.lineno=200;
			if ((($bool27=((($bool24=$or1=$p['op_eq'](et, 'keyup')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24.__nonzero__=='function'?
						$bool24.__nonzero__() :
						(typeof $bool24.__len__=='function'?
							($bool24.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($bool25=$or2=$p['op_eq'](et, 'keydown')) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25.__nonzero__=='function'?
						$bool25.__nonzero__() :
						(typeof $bool25.__len__=='function'?
							($bool25.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or2:((($bool26=$or3=$p['op_eq'](et, 'keypress')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26.__nonzero__=='function'?
						$bool26.__nonzero__() :
						(typeof $bool26.__len__=='function'?
							($bool26.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:$p['op_eq'](et, 'change'))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=202;
				$pyjs.track.lineno=202;
				var $pyjs__ret = (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(event);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=204;
				$pyjs.track.lineno=204;
				var $pyjs__ret = $m['_dispatchCapturedMouseEvent'](event);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['browser_event_cb'].__name__ = 'browser_event_cb';

		$m['browser_event_cb'].__bind_type__ = 0;
		$m['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
		$pyjs.track.lineno=207;
		$m['_dispatchCapturedEvent'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool29,$bool28;
			$pyjs.track={module:'pyjamas.DOM',lineno:207};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=207;
			$pyjs.track.lineno=209;
			if ((($bool29=!(($bool28=(typeof previewEvent == "undefined"?$m.previewEvent:previewEvent)(event)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28.__nonzero__=='function'?
						$bool28.__nonzero__() :
						(typeof $bool28.__len__=='function'?
							($bool28.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=211;
				event['stopPropagation']();
				$pyjs.track.lineno=212;
				(typeof eventPreventDefault == "undefined"?$m.eventPreventDefault:eventPreventDefault)(event);
				$pyjs.track.lineno=213;
				$pyjs.track.lineno=213;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=214;
			$pyjs.track.lineno=214;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

		$m['_dispatchCapturedEvent'].__bind_type__ = 0;
		$m['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
		$pyjs.track.lineno=217;
		$m['addEventPreview'] = function(preview) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:217};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=217;
			$pyjs.track.lineno=218;
			$m['sEventPreviewStack']['append'](preview);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['addEventPreview'].__name__ = 'addEventPreview';

		$m['addEventPreview'].__bind_type__ = 0;
		$m['addEventPreview'].__args__ = [null,null,['preview']];
		$pyjs.track.lineno=221;
		$m['appendChild'] = function(parent, child) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:221};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=221;
			$pyjs.track.lineno=223;
			parent['appendChild'](child);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['appendChild'].__name__ = 'appendChild';

		$m['appendChild'].__bind_type__ = 0;
		$m['appendChild'].__args__ = [null,null,['parent'],['child']];
		$pyjs.track.lineno=225;
		$m['removeChild'] = function(parent, child) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:225};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=225;
			$pyjs.track.lineno=227;
			parent['removeChild'](child);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['removeChild'].__name__ = 'removeChild';

		$m['removeChild'].__bind_type__ = 0;
		$m['removeChild'].__args__ = [null,null,['parent'],['child']];
		$pyjs.track.lineno=230;
		$m['replaceChild'] = function(parent, newChild, oldChild) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:230};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=230;
			$pyjs.track.lineno=231;
			parent['replaceChild'](newChild, oldChild);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['replaceChild'].__name__ = 'replaceChild';

		$m['replaceChild'].__bind_type__ = 0;
		$m['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
		$pyjs.track.lineno=234;
		$m['buttonClick'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var evt;
			$pyjs.track={module:'pyjamas.DOM',lineno:234};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=234;
			$pyjs.track.lineno=235;
			evt = $doc['createEvent']('MouseEvents');
			$pyjs.track.lineno=236;
			evt['initMouseEvent']('click', true, true, $wnd, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, false, false, false, false, $constant_int_0, element);
			$pyjs.track.lineno=238;
			element['dispatchEvent'](evt);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['buttonClick'].__name__ = 'buttonClick';

		$m['buttonClick'].__bind_type__ = 0;
		$m['buttonClick'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=241;
		$m['compare'] = function(elem1, elem2) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $and9,$and10,$bool30,$bool31;
			$pyjs.track={module:'pyjamas.DOM',lineno:241};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=241;
			$pyjs.track.lineno=242;
			if ((($bool31=((($bool30=$and9=$p['hasattr'](elem1, 'isSameNode')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30.__nonzero__=='function'?
						$bool30.__nonzero__() :
						(typeof $bool30.__len__=='function'?
							($bool30.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['hasattr'](elem2, 'isSameNode'):$and9)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=243;
				$pyjs.track.lineno=243;
				var $pyjs__ret = elem1['isSameNode'](elem2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=244;
			$pyjs.track.lineno=244;
			var $pyjs__ret = $p['op_eq'](elem1, elem2);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['compare'].__name__ = 'compare';

		$m['compare'].__bind_type__ = 0;
		$m['compare'].__args__ = [null,null,['elem1'],['elem2']];
		$pyjs.track.lineno=247;
		$m['createAnchor'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:247};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=247;
			$pyjs.track.lineno=248;
			$pyjs.track.lineno=248;
			var $pyjs__ret = (typeof createElement == "undefined"?$m.createElement:createElement)('A');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createAnchor'].__name__ = 'createAnchor';

		$m['createAnchor'].__bind_type__ = 0;
		$m['createAnchor'].__args__ = [null,null];
		$pyjs.track.lineno=251;
		$m['createButton'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:251};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=251;
			$pyjs.track.lineno=252;
			$pyjs.track.lineno=252;
			var $pyjs__ret = (typeof createElement == "undefined"?$m.createElement:createElement)('button');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createButton'].__name__ = 'createButton';

		$m['createButton'].__bind_type__ = 0;
		$m['createButton'].__args__ = [null,null];
		$pyjs.track.lineno=255;
		$m['createCol'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:255};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=255;
			$pyjs.track.lineno=256;
			$pyjs.track.lineno=256;
			var $pyjs__ret = (typeof createElement == "undefined"?$m.createElement:createElement)('col');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createCol'].__name__ = 'createCol';

		$m['createCol'].__bind_type__ = 0;
		$m['createCol'].__args__ = [null,null];
		$pyjs.track.lineno=259;
		$m['createDiv'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:259};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=259;
			$pyjs.track.lineno=260;
			$pyjs.track.lineno=260;
			var $pyjs__ret = (typeof createElement == "undefined"?$m.createElement:createElement)('div');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createDiv'].__name__ = 'createDiv';

		$m['createDiv'].__bind_type__ = 0;
		$m['createDiv'].__args__ = [null,null];
		$pyjs.track.lineno=263;
		$m['createElement'] = function(tag) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:263};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=263;
			$pyjs.track.lineno=264;
			$pyjs.track.lineno=264;
			var $pyjs__ret = $doc['createElement'](tag);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createElement'].__name__ = 'createElement';

		$m['createElement'].__bind_type__ = 0;
		$m['createElement'].__args__ = [null,null,['tag']];
		$pyjs.track.lineno=267;
		$m['createFieldSet'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:267};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=267;
			$pyjs.track.lineno=268;
			$pyjs.track.lineno=268;
			var $pyjs__ret = $m['createElement']('fieldset');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createFieldSet'].__name__ = 'createFieldSet';

		$m['createFieldSet'].__bind_type__ = 0;
		$m['createFieldSet'].__args__ = [null,null];
		$pyjs.track.lineno=271;
		$m['createForm'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:271};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=271;
			$pyjs.track.lineno=272;
			$pyjs.track.lineno=272;
			var $pyjs__ret = $m['createElement']('form');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createForm'].__name__ = 'createForm';

		$m['createForm'].__bind_type__ = 0;
		$m['createForm'].__args__ = [null,null];
		$pyjs.track.lineno=275;
		$m['createIFrame'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:275};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=275;
			$pyjs.track.lineno=276;
			$pyjs.track.lineno=276;
			var $pyjs__ret = $m['createElement']('iframe');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createIFrame'].__name__ = 'createIFrame';

		$m['createIFrame'].__bind_type__ = 0;
		$m['createIFrame'].__args__ = [null,null];
		$pyjs.track.lineno=279;
		$m['createImg'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:279};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=279;
			$pyjs.track.lineno=280;
			$pyjs.track.lineno=280;
			var $pyjs__ret = $m['createElement']('img');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createImg'].__name__ = 'createImg';

		$m['createImg'].__bind_type__ = 0;
		$m['createImg'].__args__ = [null,null];
		$pyjs.track.lineno=283;
		$m['createInputCheck'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:283};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=283;
			$pyjs.track.lineno=284;
			$pyjs.track.lineno=284;
			var $pyjs__ret = (typeof createInputElement == "undefined"?$m.createInputElement:createInputElement)('checkbox');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createInputCheck'].__name__ = 'createInputCheck';

		$m['createInputCheck'].__bind_type__ = 0;
		$m['createInputCheck'].__args__ = [null,null];
		$pyjs.track.lineno=287;
		$m['createInputElement'] = function(elementType) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var e;
			$pyjs.track={module:'pyjamas.DOM',lineno:287};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=287;
			$pyjs.track.lineno=288;
			e = $m['createElement']('input');
			$pyjs.track.lineno=289;
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('type', elementType) : $p['setattr'](e, 'type', elementType); 
			$pyjs.track.lineno=290;
			$pyjs.track.lineno=290;
			var $pyjs__ret = e;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createInputElement'].__name__ = 'createInputElement';

		$m['createInputElement'].__bind_type__ = 0;
		$m['createInputElement'].__args__ = [null,null,['elementType']];
		$pyjs.track.lineno=293;
		$m['createInputPassword'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:293};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=293;
			$pyjs.track.lineno=294;
			$pyjs.track.lineno=294;
			var $pyjs__ret = $m['createInputElement']('password');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createInputPassword'].__name__ = 'createInputPassword';

		$m['createInputPassword'].__bind_type__ = 0;
		$m['createInputPassword'].__args__ = [null,null];
		$pyjs.track.lineno=297;
		$m['createInputRadio'] = function(group) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var e;
			$pyjs.track={module:'pyjamas.DOM',lineno:297};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=297;
			$pyjs.track.lineno=298;
			e = $m['createInputElement']('radio');
			$pyjs.track.lineno=299;
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('$$name', group) : $p['setattr'](e, '$$name', group); 
			$pyjs.track.lineno=300;
			$pyjs.track.lineno=300;
			var $pyjs__ret = e;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createInputRadio'].__name__ = 'createInputRadio';

		$m['createInputRadio'].__bind_type__ = 0;
		$m['createInputRadio'].__args__ = [null,null,['group']];
		$pyjs.track.lineno=303;
		$m['createInputText'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:303};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=303;
			$pyjs.track.lineno=304;
			$pyjs.track.lineno=304;
			var $pyjs__ret = $m['createInputElement']('text');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createInputText'].__name__ = 'createInputText';

		$m['createInputText'].__bind_type__ = 0;
		$m['createInputText'].__args__ = [null,null];
		$pyjs.track.lineno=307;
		$m['createLabel'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:307};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=307;
			$pyjs.track.lineno=308;
			$pyjs.track.lineno=308;
			var $pyjs__ret = $m['createElement']('label');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createLabel'].__name__ = 'createLabel';

		$m['createLabel'].__bind_type__ = 0;
		$m['createLabel'].__args__ = [null,null];
		$pyjs.track.lineno=311;
		$m['createLegend'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:311};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=311;
			$pyjs.track.lineno=312;
			$pyjs.track.lineno=312;
			var $pyjs__ret = $m['createElement']('legend');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createLegend'].__name__ = 'createLegend';

		$m['createLegend'].__bind_type__ = 0;
		$m['createLegend'].__args__ = [null,null];
		$pyjs.track.lineno=315;
		$m['createOptions'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:315};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=315;
			$pyjs.track.lineno=316;
			$pyjs.track.lineno=316;
			var $pyjs__ret = $m['createElement']('options');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createOptions'].__name__ = 'createOptions';

		$m['createOptions'].__bind_type__ = 0;
		$m['createOptions'].__args__ = [null,null];
		$pyjs.track.lineno=319;
		$m['createSelect'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:319};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=319;
			$pyjs.track.lineno=320;
			$pyjs.track.lineno=320;
			var $pyjs__ret = $m['createElement']('select');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createSelect'].__name__ = 'createSelect';

		$m['createSelect'].__bind_type__ = 0;
		$m['createSelect'].__args__ = [null,null];
		$pyjs.track.lineno=323;
		$m['createSpan'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:323};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=323;
			$pyjs.track.lineno=324;
			$pyjs.track.lineno=324;
			var $pyjs__ret = $m['createElement']('span');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createSpan'].__name__ = 'createSpan';

		$m['createSpan'].__bind_type__ = 0;
		$m['createSpan'].__args__ = [null,null];
		$pyjs.track.lineno=327;
		$m['createTable'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:327};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=327;
			$pyjs.track.lineno=328;
			$pyjs.track.lineno=328;
			var $pyjs__ret = $m['createElement']('table');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createTable'].__name__ = 'createTable';

		$m['createTable'].__bind_type__ = 0;
		$m['createTable'].__args__ = [null,null];
		$pyjs.track.lineno=331;
		$m['createTBody'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:331};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=331;
			$pyjs.track.lineno=332;
			$pyjs.track.lineno=332;
			var $pyjs__ret = $m['createElement']('tbody');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createTBody'].__name__ = 'createTBody';

		$m['createTBody'].__bind_type__ = 0;
		$m['createTBody'].__args__ = [null,null];
		$pyjs.track.lineno=335;
		$m['createTD'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:335};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=335;
			$pyjs.track.lineno=336;
			$pyjs.track.lineno=336;
			var $pyjs__ret = $m['createElement']('td');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createTD'].__name__ = 'createTD';

		$m['createTD'].__bind_type__ = 0;
		$m['createTD'].__args__ = [null,null];
		$pyjs.track.lineno=339;
		$m['createTextArea'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:339};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=339;
			$pyjs.track.lineno=340;
			$pyjs.track.lineno=340;
			var $pyjs__ret = $m['createElement']('textarea');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createTextArea'].__name__ = 'createTextArea';

		$m['createTextArea'].__bind_type__ = 0;
		$m['createTextArea'].__args__ = [null,null];
		$pyjs.track.lineno=343;
		$m['createTH'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:343};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=343;
			$pyjs.track.lineno=344;
			$pyjs.track.lineno=344;
			var $pyjs__ret = $m['createElement']('th');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createTH'].__name__ = 'createTH';

		$m['createTH'].__bind_type__ = 0;
		$m['createTH'].__args__ = [null,null];
		$pyjs.track.lineno=347;
		$m['createTR'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:347};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=347;
			$pyjs.track.lineno=348;
			$pyjs.track.lineno=348;
			var $pyjs__ret = $m['createElement']('tr');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createTR'].__name__ = 'createTR';

		$m['createTR'].__bind_type__ = 0;
		$m['createTR'].__args__ = [null,null];
		$pyjs.track.lineno=351;
		$m['eventStopPropagation'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:351};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=351;
			$pyjs.track.lineno=352;
			evt['stopPropagation']();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['eventStopPropagation'].__name__ = 'eventStopPropagation';

		$m['eventStopPropagation'].__bind_type__ = 0;
		$m['eventStopPropagation'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=355;
		$m['eventCancelBubble'] = function(evt, cancel) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:355};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=355;
			$pyjs.track.lineno=356;
			evt.__is_instance__ && typeof evt.__setattr__ == 'function' ? evt.__setattr__('cancelBubble', cancel) : $p['setattr'](evt, 'cancelBubble', cancel); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['eventCancelBubble'].__name__ = 'eventCancelBubble';

		$m['eventCancelBubble'].__bind_type__ = 0;
		$m['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
		$pyjs.track.lineno=359;
		$m['eventGetAltKey'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:359};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=359;
			$pyjs.track.lineno=360;
			$pyjs.track.lineno=360;
			var $pyjs__ret = $p['getattr'](evt, 'altKey');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetAltKey'].__name__ = 'eventGetAltKey';

		$m['eventGetAltKey'].__bind_type__ = 0;
		$m['eventGetAltKey'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=363;
		$m['eventGetButton'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:363};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=363;
			$pyjs.track.lineno=364;
			$pyjs.track.lineno=364;
			var $pyjs__ret = $p['getattr'](evt, 'button');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetButton'].__name__ = 'eventGetButton';

		$m['eventGetButton'].__bind_type__ = 0;
		$m['eventGetButton'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=367;
		$m['eventGetClientX'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:367};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=367;
			$pyjs.track.lineno=368;
			$pyjs.track.lineno=368;
			var $pyjs__ret = $p['getattr'](evt, 'clientX');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetClientX'].__name__ = 'eventGetClientX';

		$m['eventGetClientX'].__bind_type__ = 0;
		$m['eventGetClientX'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=371;
		$m['eventGetClientY'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:371};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=371;
			$pyjs.track.lineno=372;
			$pyjs.track.lineno=372;
			var $pyjs__ret = $p['getattr'](evt, 'clientY');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetClientY'].__name__ = 'eventGetClientY';

		$m['eventGetClientY'].__bind_type__ = 0;
		$m['eventGetClientY'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=375;
		$m['eventGetCtrlKey'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:375};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=375;
			$pyjs.track.lineno=376;
			$pyjs.track.lineno=376;
			var $pyjs__ret = $p['getattr'](evt, 'ctrlKey');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

		$m['eventGetCtrlKey'].__bind_type__ = 0;
		$m['eventGetCtrlKey'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=379;
		$m['eventGetFromElement'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $pyjs_try_err;
			$pyjs.track={module:'pyjamas.DOM',lineno:379};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=379;
			$pyjs.track.lineno=380;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=381;
				$pyjs.track.lineno=381;
				var $pyjs__ret = $p['getattr'](evt, 'fromElement');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			} catch($pyjs_try_err) {
				$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
				$pyjs.__active_exception_stack__ = null;
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.DOM';
				if (true) {
					$pyjs.track.lineno=383;
					$pyjs.track.lineno=383;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['eventGetFromElement'].__name__ = 'eventGetFromElement';

		$m['eventGetFromElement'].__bind_type__ = 0;
		$m['eventGetFromElement'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=386;
		$m['eventGetKeyCode'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $or5,$or7,$or6,$bool32,$bool33;
			$pyjs.track={module:'pyjamas.DOM',lineno:386};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=386;
			$pyjs.track.lineno=387;
			$pyjs.track.lineno=387;
			var $pyjs__ret = ((($bool32=$or5=$p['getattr'](evt, 'which')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
				false :
				(typeof $bool32=='object'?
					(typeof $bool32.__nonzero__=='function'?
						$bool32.__nonzero__() :
						(typeof $bool32.__len__=='function'?
							($bool32.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:((($bool33=$or6=$p['getattr'](evt, 'keyCode')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
				false :
				(typeof $bool33=='object'?
					(typeof $bool33.__nonzero__=='function'?
						$bool33.__nonzero__() :
						(typeof $bool33.__len__=='function'?
							($bool33.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or6:$constant_int_0));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

		$m['eventGetKeyCode'].__bind_type__ = 0;
		$m['eventGetKeyCode'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=390;
		$m['eventGetRepeat'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:390};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=390;
			$pyjs.track.lineno=391;
			$pyjs.track.lineno=391;
			var $pyjs__ret = $p['getattr'](evt, 'repeat');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetRepeat'].__name__ = 'eventGetRepeat';

		$m['eventGetRepeat'].__bind_type__ = 0;
		$m['eventGetRepeat'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=394;
		$m['eventGetScreenX'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:394};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=394;
			$pyjs.track.lineno=395;
			$pyjs.track.lineno=395;
			var $pyjs__ret = $p['getattr'](evt, 'screenX');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetScreenX'].__name__ = 'eventGetScreenX';

		$m['eventGetScreenX'].__bind_type__ = 0;
		$m['eventGetScreenX'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=398;
		$m['eventGetScreenY'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:398};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=398;
			$pyjs.track.lineno=399;
			$pyjs.track.lineno=399;
			var $pyjs__ret = $p['getattr'](evt, 'screenY');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetScreenY'].__name__ = 'eventGetScreenY';

		$m['eventGetScreenY'].__bind_type__ = 0;
		$m['eventGetScreenY'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=402;
		$m['eventGetShiftKey'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:402};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=402;
			$pyjs.track.lineno=403;
			$pyjs.track.lineno=403;
			var $pyjs__ret = $p['getattr'](evt, 'shiftKey');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

		$m['eventGetShiftKey'].__bind_type__ = 0;
		$m['eventGetShiftKey'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=406;
		$m['eventGetCurrentTarget'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:406};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=406;
			$pyjs.track.lineno=407;
			$pyjs.track.lineno=407;
			var $pyjs__ret = $p['getattr'](event, 'currentTarget');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

		$m['eventGetCurrentTarget'].__bind_type__ = 0;
		$m['eventGetCurrentTarget'].__args__ = [null,null,['event']];
		$pyjs.track.lineno=410;
		$m['eventGetTarget'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:410};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=410;
			$pyjs.track.lineno=411;
			$pyjs.track.lineno=411;
			var $pyjs__ret = $p['getattr'](event, 'target');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetTarget'].__name__ = 'eventGetTarget';

		$m['eventGetTarget'].__bind_type__ = 0;
		$m['eventGetTarget'].__args__ = [null,null,['event']];
		$pyjs.track.lineno=414;
		$m['eventGetToElement'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var type,$bool34,$bool35;
			$pyjs.track={module:'pyjamas.DOM',lineno:414};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=414;
			$pyjs.track.lineno=415;
			type = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(evt);
			$pyjs.track.lineno=416;
			if ((($bool34=$p['op_eq'](type, 'mouseout')) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=417;
				$pyjs.track.lineno=417;
				var $pyjs__ret = $p['getattr'](evt, 'relatedTarget');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((($bool35=$p['op_eq'](type, 'mouseover')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35.__nonzero__=='function'?
							$bool35.__nonzero__() :
							(typeof $bool35.__len__=='function'?
								($bool35.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=419;
				$pyjs.track.lineno=419;
				var $pyjs__ret = $p['getattr'](evt, 'target');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=420;
			$pyjs.track.lineno=420;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetToElement'].__name__ = 'eventGetToElement';

		$m['eventGetToElement'].__bind_type__ = 0;
		$m['eventGetToElement'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=423;
		$m['eventGetType'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:423};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=423;
			$pyjs.track.lineno=424;
			$pyjs.track.lineno=424;
			var $pyjs__ret = $p['getattr'](event, 'type');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetType'].__name__ = 'eventGetType';

		$m['eventGetType'].__bind_type__ = 0;
		$m['eventGetType'].__args__ = [null,null,['event']];
		$pyjs.track.lineno=426;
		$m['eventGetTypeInt'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:426};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=426;
			$pyjs.track.lineno=427;
			$pyjs.track.lineno=427;
			var $pyjs__ret = $m['Event']['eventmap']['get']($p['str']($p['getattr'](event, 'type')), $constant_int_0);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

		$m['eventGetTypeInt'].__bind_type__ = 0;
		$m['eventGetTypeInt'].__args__ = [null,null,['event']];
		$pyjs.track.lineno=430;
		$m['eventGetTypeString'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:430};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=430;
			$pyjs.track.lineno=431;
			$pyjs.track.lineno=431;
			var $pyjs__ret = $m['eventGetType'](event);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetTypeString'].__name__ = 'eventGetTypeString';

		$m['eventGetTypeString'].__bind_type__ = 0;
		$m['eventGetTypeString'].__args__ = [null,null,['event']];
		$pyjs.track.lineno=434;
		$m['eventPreventDefault'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:434};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=434;
			$pyjs.track.lineno=435;
			evt['preventDefault']();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['eventPreventDefault'].__name__ = 'eventPreventDefault';

		$m['eventPreventDefault'].__bind_type__ = 0;
		$m['eventPreventDefault'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=438;
		$m['eventSetKeyCode'] = function(evt, key) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:438};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=438;
			$pyjs.track.lineno=439;
			evt.__is_instance__ && typeof evt.__setattr__ == 'function' ? evt.__setattr__('keyCode', key) : $p['setattr'](evt, 'keyCode', key); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

		$m['eventSetKeyCode'].__bind_type__ = 0;
		$m['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
		$pyjs.track.lineno=442;
		$m['eventToString'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:442};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=442;
			$pyjs.track.lineno=443;
			$pyjs.track.lineno=443;
			var $pyjs__ret = evt['toString']();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventToString'].__name__ = 'eventToString';

		$m['eventToString'].__bind_type__ = 0;
		$m['eventToString'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=446;
		$m['iframeGetSrc'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:446};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=446;
			$pyjs.track.lineno=447;
			$pyjs.track.lineno=447;
			var $pyjs__ret = $p['getattr'](elem, 'src');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['iframeGetSrc'].__name__ = 'iframeGetSrc';

		$m['iframeGetSrc'].__bind_type__ = 0;
		$m['iframeGetSrc'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=450;
		$m['getAbsoluteLeft'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var curr,$add2,$add1,$bool36,$bool37,$sub3,$sub2,$sub1,$sub4,left;
			$pyjs.track={module:'pyjamas.DOM',lineno:450};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=450;
			$pyjs.track.lineno=451;
			left = $constant_int_0;
			$pyjs.track.lineno=452;
			curr = elem;
			$pyjs.track.lineno=453;
			while ((($bool36=$p['getattr'](curr, 'offsetParent')) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36.__nonzero__=='function'?
							$bool36.__nonzero__() :
							(typeof $bool36.__len__=='function'?
								($bool36.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=454;
				left = (typeof ($sub1=left)==typeof ($sub2=$p['getattr'](curr, 'scrollLeft')) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				$pyjs.track.lineno=455;
				curr = $p['getattr'](curr, 'parentNode');
			}
			$pyjs.track.lineno=457;
			while ((($bool37=elem) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37.__nonzero__=='function'?
							$bool37.__nonzero__() :
							(typeof $bool37.__len__=='function'?
								($bool37.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=458;
				left = (typeof ($add1=left)==typeof ($add2=(typeof ($sub3=$p['getattr'](elem, 'offsetLeft'))==typeof ($sub4=$p['getattr'](elem, 'scrollLeft')) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				$pyjs.track.lineno=459;
				elem = $p['getattr'](elem, 'offsetParent');
			}
			$pyjs.track.lineno=461;
			$pyjs.track.lineno=461;
			var $pyjs__ret = left;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

		$m['getAbsoluteLeft'].__bind_type__ = 0;
		$m['getAbsoluteLeft'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=464;
		$m['getAbsoluteTop'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var curr,top,$add3,$sub8,$add4,$bool38,$bool39,$sub7,$sub6,$sub5;
			$pyjs.track={module:'pyjamas.DOM',lineno:464};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=464;
			$pyjs.track.lineno=465;
			top = $constant_int_0;
			$pyjs.track.lineno=466;
			curr = elem;
			$pyjs.track.lineno=467;
			while ((($bool38=$p['getattr'](curr, 'offsetParent')) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38.__nonzero__=='function'?
							$bool38.__nonzero__() :
							(typeof $bool38.__len__=='function'?
								($bool38.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=468;
				top = (typeof ($sub5=top)==typeof ($sub6=$p['getattr'](curr, 'scrollTop')) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				$pyjs.track.lineno=469;
				curr = $p['getattr'](curr, 'parentNode');
			}
			$pyjs.track.lineno=471;
			while ((($bool39=elem) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
					false :
					(typeof $bool39=='object'?
						(typeof $bool39.__nonzero__=='function'?
							$bool39.__nonzero__() :
							(typeof $bool39.__len__=='function'?
								($bool39.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=472;
				top = (typeof ($add3=top)==typeof ($add4=(typeof ($sub7=$p['getattr'](elem, 'offsetTop'))==typeof ($sub8=$p['getattr'](elem, 'scrollTop')) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$pyjs.track.lineno=473;
				elem = $p['getattr'](elem, 'offsetParent');
			}
			$pyjs.track.lineno=475;
			$pyjs.track.lineno=475;
			var $pyjs__ret = top;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

		$m['getAbsoluteTop'].__bind_type__ = 0;
		$m['getAbsoluteTop'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=478;
		$m['getAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool40;
			$pyjs.track={module:'pyjamas.DOM',lineno:478};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=478;
			$pyjs.track.lineno=479;
			attr = $p['getattr'](elem, attr);
			$pyjs.track.lineno=480;
			if ((($bool40=$p['op_is'](attr, null)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40.__nonzero__=='function'?
							$bool40.__nonzero__() :
							(typeof $bool40.__len__=='function'?
								($bool40.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=481;
				$pyjs.track.lineno=481;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=482;
			$pyjs.track.lineno=482;
			var $pyjs__ret = $p['str'](attr);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getAttribute'].__name__ = 'getAttribute';

		$m['getAttribute'].__bind_type__ = 0;
		$m['getAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=485;
		$m['getElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool42,mf,$bool41;
			$pyjs.track={module:'pyjamas.DOM',lineno:485};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=485;
			$pyjs.track.lineno=486;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			$pyjs.track.lineno=487;
			if ((($bool42=!(($bool41=elem['hasAttribute'](attr)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41.__nonzero__=='function'?
						$bool41.__nonzero__() :
						(typeof $bool41.__len__=='function'?
							($bool41.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42.__nonzero__=='function'?
							$bool42.__nonzero__() :
							(typeof $bool42.__len__=='function'?
								($bool42.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=488;
				$pyjs.track.lineno=488;
				var $pyjs__ret = $p['str']($p['getattr'](elem, mf['mash_attrib'](attr)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=489;
			$pyjs.track.lineno=489;
			var $pyjs__ret = $p['str'](elem['getAttribute'](attr));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getElemAttribute'].__name__ = 'getElemAttribute';

		$m['getElemAttribute'].__bind_type__ = 0;
		$m['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=492;
		$m['getBooleanAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var mf;
			$pyjs.track={module:'pyjamas.DOM',lineno:492};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=492;
			$pyjs.track.lineno=493;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			$pyjs.track.lineno=494;
			$pyjs.track.lineno=494;
			var $pyjs__ret = $p['bool']($p['getattr'](elem, mf['mash_attrib'](attr)));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

		$m['getBooleanAttribute'].__bind_type__ = 0;
		$m['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=497;
		$m['getBooleanElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool44,$bool43;
			$pyjs.track={module:'pyjamas.DOM',lineno:497};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=497;
			$pyjs.track.lineno=498;
			if ((($bool44=!(($bool43=elem['hasAttribute'](attr)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
				false :
				(typeof $bool43=='object'?
					(typeof $bool43.__nonzero__=='function'?
						$bool43.__nonzero__() :
						(typeof $bool43.__len__=='function'?
							($bool43.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=499;
				$pyjs.track.lineno=499;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=500;
			$pyjs.track.lineno=500;
			var $pyjs__ret = $p['bool'](elem['getAttribute'](attr));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

		$m['getBooleanElemAttribute'].__bind_type__ = 0;
		$m['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=503;
		$m['getCaptureElement'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:503};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=503;
			$pyjs.track.lineno=504;
			$pyjs.track.lineno=505;
			$pyjs.track.lineno=505;
			var $pyjs__ret = $m['sCaptureElem'];
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getCaptureElement'].__name__ = 'getCaptureElement';

		$m['getCaptureElement'].__bind_type__ = 0;
		$m['getCaptureElement'].__args__ = [null,null];
		$pyjs.track.lineno=508;
		$m['getChild'] = function(elem, index) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var count,$bool45,$bool46,$add5,$bool47,next,$add6,child;
			$pyjs.track={module:'pyjamas.DOM',lineno:508};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=508;
			$pyjs.track.lineno=512;
			count = $constant_int_0;
			$pyjs.track.lineno=513;
			child = $p['getattr'](elem, 'firstChild');
			$pyjs.track.lineno=514;
			while ((($bool45=child) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=515;
				next = $p['getattr'](child, 'nextSibling');
				$pyjs.track.lineno=516;
				if ((($bool46=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46.__nonzero__=='function'?
								$bool46.__nonzero__() :
								(typeof $bool46.__len__=='function'?
									($bool46.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=517;
					if ((($bool47=$p['op_eq'](index, count)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
							false :
							(typeof $bool47=='object'?
								(typeof $bool47.__nonzero__=='function'?
									$bool47.__nonzero__() :
									(typeof $bool47.__len__=='function'?
										($bool47.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=518;
						$pyjs.track.lineno=518;
						var $pyjs__ret = child;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=519;
					count = (typeof ($add5=count)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				$pyjs.track.lineno=520;
				child = next;
			}
			$pyjs.track.lineno=521;
			$pyjs.track.lineno=521;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getChild'].__name__ = 'getChild';

		$m['getChild'].__bind_type__ = 0;
		$m['getChild'].__args__ = [null,null,['elem'],['index']];
		$pyjs.track.lineno=524;
		$m['getChildCount'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var count,$bool49,$bool48,$add7,child,$add8;
			$pyjs.track={module:'pyjamas.DOM',lineno:524};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=524;
			$pyjs.track.lineno=529;
			count = $constant_int_0;
			$pyjs.track.lineno=530;
			child = $p['getattr'](elem, 'firstChild');
			$pyjs.track.lineno=531;
			while ((($bool48=child) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=532;
				if ((($bool49=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49.__nonzero__=='function'?
								$bool49.__nonzero__() :
								(typeof $bool49.__len__=='function'?
									($bool49.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=533;
					count = (typeof ($add7=count)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				$pyjs.track.lineno=534;
				child = $p['getattr'](child, 'nextSibling');
			}
			$pyjs.track.lineno=535;
			$pyjs.track.lineno=535;
			var $pyjs__ret = count;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getChildCount'].__name__ = 'getChildCount';

		$m['getChildCount'].__bind_type__ = 0;
		$m['getChildCount'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=538;
		$m['getChildIndex'] = function(parent, toFind) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var count,$bool50,$bool51,$bool52,child,$add10,$add9;
			$pyjs.track={module:'pyjamas.DOM',lineno:538};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=538;
			$pyjs.track.lineno=544;
			count = $constant_int_0;
			$pyjs.track.lineno=545;
			child = $p['getattr'](parent, 'firstChild');
			$pyjs.track.lineno=546;
			while ((($bool50=child) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=547;
				if ((($bool51=$p['op_eq'](child, toFind)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51.__nonzero__=='function'?
								$bool51.__nonzero__() :
								(typeof $bool51.__len__=='function'?
									($bool51.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=548;
					$pyjs.track.lineno=548;
					var $pyjs__ret = count;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=549;
				if ((($bool52=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
						false :
						(typeof $bool52=='object'?
							(typeof $bool52.__nonzero__=='function'?
								$bool52.__nonzero__() :
								(typeof $bool52.__len__=='function'?
									($bool52.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=550;
					count = (typeof ($add9=count)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				$pyjs.track.lineno=551;
				child = $p['getattr'](child, 'nextSibling');
			}
			$pyjs.track.lineno=553;
			$pyjs.track.lineno=553;
			var $pyjs__ret = (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getChildIndex'].__name__ = 'getChildIndex';

		$m['getChildIndex'].__bind_type__ = 0;
		$m['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
		$pyjs.track.lineno=556;
		$m['getElementById'] = function(id) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:556};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=556;
			$pyjs.track.lineno=560;
			$pyjs.track.lineno=560;
			var $pyjs__ret = $doc['getElementById'](id);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getElementById'].__name__ = 'getElementById';

		$m['getElementById'].__bind_type__ = 0;
		$m['getElementById'].__args__ = [null,null,['id']];
		$pyjs.track.lineno=563;
		$m['getEventListener'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:563};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=563;
			$pyjs.track.lineno=567;
			$pyjs.track.lineno=567;
			var $pyjs__ret = $m['get_listener'](element);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getEventListener'].__name__ = 'getEventListener';

		$m['getEventListener'].__bind_type__ = 0;
		$m['getEventListener'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=569;
		$m['eventbitsmap'] = $p['dict']([]);
		$pyjs.track.lineno=572;
		$m['getEventsSunk'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:572};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=572;
			$pyjs.track.lineno=577;
			$pyjs.track.lineno=577;
			var $pyjs__ret = $m['eventbitsmap']['get'](element, $constant_int_0);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getEventsSunk'].__name__ = 'getEventsSunk';

		$m['getEventsSunk'].__bind_type__ = 0;
		$m['getEventsSunk'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=580;
		$m['getFirstChild'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool54,$bool55,$bool53,$and12,$and13,$and11,$and14,child;
			$pyjs.track={module:'pyjamas.DOM',lineno:580};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=580;
			$pyjs.track.lineno=581;
			child = ((($bool53=$and11=elem) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
				false :
				(typeof $bool53=='object'?
					(typeof $bool53.__nonzero__=='function'?
						$bool53.__nonzero__() :
						(typeof $bool53.__len__=='function'?
							($bool53.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['getattr'](elem, 'firstChild'):$and11);
			$pyjs.track.lineno=582;
			while ((($bool55=((($bool54=$and13=child) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
				false :
				(typeof $bool54=='object'?
					(typeof $bool54.__nonzero__=='function'?
						$bool54.__nonzero__() :
						(typeof $bool54.__len__=='function'?
							($bool54.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1):$and13)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55.__nonzero__=='function'?
							$bool55.__nonzero__() :
							(typeof $bool55.__len__=='function'?
								($bool55.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=583;
				child = $p['getattr'](child, 'nextSibling');
			}
			$pyjs.track.lineno=584;
			$pyjs.track.lineno=584;
			var $pyjs__ret = child;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getFirstChild'].__name__ = 'getFirstChild';

		$m['getFirstChild'].__bind_type__ = 0;
		$m['getFirstChild'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=587;
		$m['getLastChild'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool56,$bool57,$and15,$bool58,$and16,$and17,child,$and18;
			$pyjs.track={module:'pyjamas.DOM',lineno:587};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=587;
			$pyjs.track.lineno=588;
			child = ((($bool56=$and15=elem) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
				false :
				(typeof $bool56=='object'?
					(typeof $bool56.__nonzero__=='function'?
						$bool56.__nonzero__() :
						(typeof $bool56.__len__=='function'?
							($bool56.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['getattr'](elem, 'lastChild'):$and15);
			$pyjs.track.lineno=589;
			while ((($bool58=((($bool57=$and17=child) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
				false :
				(typeof $bool57=='object'?
					(typeof $bool57.__nonzero__=='function'?
						$bool57.__nonzero__() :
						(typeof $bool57.__len__=='function'?
							($bool57.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1):$and17)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=590;
				child = $p['getattr'](child, 'previousSibling');
			}
			$pyjs.track.lineno=591;
			$pyjs.track.lineno=591;
			var $pyjs__ret = child;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getLastChild'].__name__ = 'getLastChild';

		$m['getLastChild'].__bind_type__ = 0;
		$m['getLastChild'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=594;
		$m['getInnerHTML'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool60,$and20,$bool59,$pyjs_try_err,$and22,$and21,$and19;
			$pyjs.track={module:'pyjamas.DOM',lineno:594};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=594;
			$pyjs.track.lineno=595;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=596;
				$pyjs.track.lineno=596;
				var $pyjs__ret = ((($bool59=$and19=element) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](element, 'innerHtml'):$and19);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			} catch($pyjs_try_err) {
				$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
				$pyjs.__active_exception_stack__ = null;
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.DOM';
				if (true) {
					$pyjs.track.lineno=598;
					$pyjs.track.lineno=598;
					var $pyjs__ret = ((($bool60=$and21=element) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60.__nonzero__=='function'?
								$bool60.__nonzero__() :
								(typeof $bool60.__len__=='function'?
									($bool60.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['getattr'](element, 'innerHTML'):$and21);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['getInnerHTML'].__name__ = 'getInnerHTML';

		$m['getInnerHTML'].__bind_type__ = 0;
		$m['getInnerHTML'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=601;
		$m['getInnerText'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool61,$bool63,$bool62,text,$add13,$add14,$add11,$add12,child;
			$pyjs.track={module:'pyjamas.DOM',lineno:601};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=601;
			$pyjs.track.lineno=604;
			text = '';
			$pyjs.track.lineno=605;
			child = $p['getattr'](element, 'firstChild');
			$pyjs.track.lineno=606;
			while ((($bool61=child) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61.__nonzero__=='function'?
							$bool61.__nonzero__() :
							(typeof $bool61.__len__=='function'?
								($bool61.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=607;
				if ((($bool62=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62.__nonzero__=='function'?
								$bool62.__nonzero__() :
								(typeof $bool62.__len__=='function'?
									($bool62.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=608;
					text = (typeof ($add11=text)==typeof ($add12=$m['getInnerText'](child)) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
				}
				else if ((($bool63=$p['getattr'](child, 'nodeValue')) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63.__nonzero__=='function'?
								$bool63.__nonzero__() :
								(typeof $bool63.__len__=='function'?
									($bool63.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=610;
					text = (typeof ($add13=text)==typeof ($add14=$p['getattr'](child, 'nodeValue')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
				}
				$pyjs.track.lineno=611;
				child = $p['getattr'](child, 'nextSibling');
			}
			$pyjs.track.lineno=612;
			$pyjs.track.lineno=612;
			var $pyjs__ret = text;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getInnerText'].__name__ = 'getInnerText';

		$m['getInnerText'].__bind_type__ = 0;
		$m['getInnerText'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=615;
		$m['getIntAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:615};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=615;
			$pyjs.track.lineno=616;
			$pyjs.track.lineno=616;
			var $pyjs__ret = $p['int']($p['getattr'](elem, attr));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getIntAttribute'].__name__ = 'getIntAttribute';

		$m['getIntAttribute'].__bind_type__ = 0;
		$m['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=619;
		$m['getIntElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool65,$bool64;
			$pyjs.track={module:'pyjamas.DOM',lineno:619};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=619;
			$pyjs.track.lineno=620;
			if ((($bool65=!(($bool64=elem['hasAttribute'](attr)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64.__nonzero__=='function'?
						$bool64.__nonzero__() :
						(typeof $bool64.__len__=='function'?
							($bool64.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
					false :
					(typeof $bool65=='object'?
						(typeof $bool65.__nonzero__=='function'?
							$bool65.__nonzero__() :
							(typeof $bool65.__len__=='function'?
								($bool65.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=621;
				$pyjs.track.lineno=621;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=622;
			$pyjs.track.lineno=622;
			var $pyjs__ret = $p['int'](elem['getAttribute'](attr));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

		$m['getIntElemAttribute'].__bind_type__ = 0;
		$m['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=625;
		$m['getIntStyleAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:625};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=625;
			$pyjs.track.lineno=626;
			$pyjs.track.lineno=626;
			var $pyjs__ret = $m['getIntAttribute']($p['getattr'](elem, 'style'), attr);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

		$m['getIntStyleAttribute'].__bind_type__ = 0;
		$m['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=629;
		$m['getPrevSibling'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool67,$bool66,sib,$and23,$and24;
			$pyjs.track={module:'pyjamas.DOM',lineno:629};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=629;
			$pyjs.track.lineno=630;
			sib = $p['getattr'](elem, 'previousSibling');
			$pyjs.track.lineno=631;
			while ((($bool67=((($bool66=$and23=sib) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
				false :
				(typeof $bool66=='object'?
					(typeof $bool66.__nonzero__=='function'?
						$bool66.__nonzero__() :
						(typeof $bool66.__len__=='function'?
							($bool66.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']($p['getattr'](sib, 'nodeType'), $constant_int_1):$and23)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
					false :
					(typeof $bool67=='object'?
						(typeof $bool67.__nonzero__=='function'?
							$bool67.__nonzero__() :
							(typeof $bool67.__len__=='function'?
								($bool67.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=632;
				sib = $p['getattr'](sib, 'previousSibling');
			}
			$pyjs.track.lineno=633;
			$pyjs.track.lineno=633;
			var $pyjs__ret = sib;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getPrevSibling'].__name__ = 'getPrevSibling';

		$m['getPrevSibling'].__bind_type__ = 0;
		$m['getPrevSibling'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=636;
		$m['getNextSibling'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool69,$bool68,sib,$and26,$and25;
			$pyjs.track={module:'pyjamas.DOM',lineno:636};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=636;
			$pyjs.track.lineno=637;
			sib = $p['getattr'](elem, 'nextSibling');
			$pyjs.track.lineno=638;
			while ((($bool69=((($bool68=$and25=sib) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
				false :
				(typeof $bool68=='object'?
					(typeof $bool68.__nonzero__=='function'?
						$bool68.__nonzero__() :
						(typeof $bool68.__len__=='function'?
							($bool68.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']($p['getattr'](sib, 'nodeType'), $constant_int_1):$and25)) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69.__nonzero__=='function'?
							$bool69.__nonzero__() :
							(typeof $bool69.__len__=='function'?
								($bool69.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=639;
				sib = $p['getattr'](sib, 'nextSibling');
			}
			$pyjs.track.lineno=640;
			$pyjs.track.lineno=640;
			var $pyjs__ret = sib;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getNextSibling'].__name__ = 'getNextSibling';

		$m['getNextSibling'].__bind_type__ = 0;
		$m['getNextSibling'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=643;
		$m['getNodeType'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:643};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=643;
			$pyjs.track.lineno=644;
			$pyjs.track.lineno=644;
			var $pyjs__ret = $p['getattr'](elem, 'nodeType');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getNodeType'].__name__ = 'getNodeType';

		$m['getNodeType'].__bind_type__ = 0;
		$m['getNodeType'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=647;
		$m['getParent'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool70,parent,$bool71;
			$pyjs.track={module:'pyjamas.DOM',lineno:647};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=647;
			$pyjs.track.lineno=648;
			parent = $p['getattr'](elem, 'parentNode');
			$pyjs.track.lineno=649;
			if ((($bool70=$p['op_is'](parent, null)) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70.__nonzero__=='function'?
							$bool70.__nonzero__() :
							(typeof $bool70.__len__=='function'?
								($bool70.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=650;
				$pyjs.track.lineno=650;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=651;
			if ((($bool71=!$p['op_eq']($m['getNodeType'](parent), $constant_int_1)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71.__nonzero__=='function'?
							$bool71.__nonzero__() :
							(typeof $bool71.__len__=='function'?
								($bool71.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=652;
				$pyjs.track.lineno=652;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=653;
			$pyjs.track.lineno=653;
			var $pyjs__ret = parent;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getParent'].__name__ = 'getParent';

		$m['getParent'].__bind_type__ = 0;
		$m['getParent'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=656;
		$m['getStyleAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool73,$pyjs_try_err,$bool72;
			$pyjs.track={module:'pyjamas.DOM',lineno:656};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=656;
			$pyjs.track.lineno=657;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=658;
				if ((($bool72=$p['hasattr']($p['getattr'](elem, 'style'), 'getPropertyValue')) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
						false :
						(typeof $bool72=='object'?
							(typeof $bool72.__nonzero__=='function'?
								$bool72.__nonzero__() :
								(typeof $bool72.__len__=='function'?
									($bool72.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=659;
					$pyjs.track.lineno=659;
					var $pyjs__ret = elem['style']['getPropertyValue']((typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else if ((($bool73=$p['hasattr']($p['getattr'](elem, 'style'), 'getProperty')) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
						false :
						(typeof $bool73=='object'?
							(typeof $bool73.__nonzero__=='function'?
								$bool73.__nonzero__() :
								(typeof $bool73.__len__=='function'?
									($bool73.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=661;
					$pyjs.track.lineno=661;
					var $pyjs__ret = elem['style']['getProperty']((typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=662;
				$pyjs.track.lineno=662;
				var $pyjs__ret = elem['style']['getAttribute'](attr);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			} catch($pyjs_try_err) {
				$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
				$pyjs.__active_exception_stack__ = null;
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.DOM';
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					$pyjs.track.lineno=664;
					$pyjs.track.lineno=664;
					var $pyjs__ret = $p['getattr']($p['getattr'](elem, 'style'), attr, null);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['getStyleAttribute'].__name__ = 'getStyleAttribute';

		$m['getStyleAttribute'].__bind_type__ = 0;
		$m['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=667;
		$m['insertChild'] = function(parent, toAdd, index) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var count,$bool76,$bool77,$bool74,$bool75,$add15,$add16,child,before;
			$pyjs.track={module:'pyjamas.DOM',lineno:667};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=667;
			$pyjs.track.lineno=668;
			count = $constant_int_0;
			$pyjs.track.lineno=669;
			child = $p['getattr'](parent, 'firstChild');
			$pyjs.track.lineno=670;
			before = null;
			$pyjs.track.lineno=671;
			while ((($bool74=child) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=672;
				if ((($bool75=$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
						false :
						(typeof $bool75=='object'?
							(typeof $bool75.__nonzero__=='function'?
								$bool75.__nonzero__() :
								(typeof $bool75.__len__=='function'?
									($bool75.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=673;
					if ((($bool76=$p['op_eq'](count, index)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
							false :
							(typeof $bool76=='object'?
								(typeof $bool76.__nonzero__=='function'?
									$bool76.__nonzero__() :
									(typeof $bool76.__len__=='function'?
										($bool76.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=674;
						before = child;
						$pyjs.track.lineno=675;
						break;
					}
					$pyjs.track.lineno=677;
					count = (typeof ($add15=count)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
				}
				$pyjs.track.lineno=678;
				child = $p['getattr'](child, 'nextSibling');
			}
			$pyjs.track.lineno=680;
			if ((($bool77=$p['op_is'](before, null)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
					false :
					(typeof $bool77=='object'?
						(typeof $bool77.__nonzero__=='function'?
							$bool77.__nonzero__() :
							(typeof $bool77.__len__=='function'?
								($bool77.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=681;
				parent['appendChild'](toAdd);
			}
			else {
				$pyjs.track.lineno=683;
				parent['insertBefore'](toAdd, before);
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['insertChild'].__name__ = 'insertChild';

		$m['insertChild'].__bind_type__ = 0;
		$m['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
		$pyjs.track.lineno=686;
		$m['IterChildrenClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.DOM';
			$cls_definition.__md5__ = '11d97d729fc0a85ba40e8929b22af90b';
			$pyjs.track.lineno=688;
			$method = $pyjs__bind_method2('__init__', function(elem) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.DOM', lineno:688};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=688;
				$pyjs.track.lineno=689;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem); 
				$pyjs.track.lineno=690;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $p['getattr'](elem, 'firstChild')) : $p['setattr'](self, 'child', $p['getattr'](elem, 'firstChild')); 
				$pyjs.track.lineno=691;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=693;
			$method = $pyjs__bind_method2('next', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool78,$bool79;
				$pyjs.track={module:'pyjamas.DOM', lineno:693};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=693;
				$pyjs.track.lineno=694;
				if ((($bool79=!(($bool78=$p['getattr'](self, 'child')) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78.__nonzero__=='function'?
							$bool78.__nonzero__() :
							(typeof $bool78.__len__=='function'?
								($bool78.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
						false :
						(typeof $bool79=='object'?
							(typeof $bool79.__nonzero__=='function'?
								$bool79.__nonzero__() :
								(typeof $bool79.__len__=='function'?
									($bool79.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=695;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['StopIteration']);
				}
				$pyjs.track.lineno=696;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				$pyjs.track.lineno=697;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $m['getNextSibling']($p['getattr'](self, 'child'))) : $p['setattr'](self, 'child', $m['getNextSibling']($p['getattr'](self, 'child'))); 
				$pyjs.track.lineno=698;
				$pyjs.track.lineno=698;
				var $pyjs__ret = $p['getattr'](self, 'lastChild');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=700;
			$method = $pyjs__bind_method2('remove', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.DOM', lineno:700};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=700;
				$pyjs.track.lineno=701;
				self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=703;
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
					if (self.prototype.__md5__ !== '11d97d729fc0a85ba40e8929b22af90b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.DOM', lineno:703};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=703;
				$pyjs.track.lineno=704;
				$pyjs.track.lineno=704;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=686;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('IterChildrenClass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=707;
		$m['iterChildren'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:707};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=707;
			$pyjs.track.lineno=712;
			$pyjs.track.lineno=712;
			var $pyjs__ret = $m['IterChildrenClass'](elem);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['iterChildren'].__name__ = 'iterChildren';

		$m['iterChildren'].__bind_type__ = 0;
		$m['iterChildren'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=715;
		$m['IterWalkChildren'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.DOM';
			$cls_definition.__md5__ = '8c737fccd3bdd27796a1c4a73193d915';
			$pyjs.track.lineno=717;
			$method = $pyjs__bind_method2('__init__', function(elem, all_nodes) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					all_nodes = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof all_nodes == 'undefined') all_nodes=arguments.callee.__args__[4][1];
				var $bool80;
				$pyjs.track={module:'pyjamas.DOM', lineno:717};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=717;
				$pyjs.track.lineno=718;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem); 
				$pyjs.track.lineno=719;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('all_nodes', all_nodes) : $p['setattr'](self, 'all_nodes', all_nodes); 
				$pyjs.track.lineno=720;
				if ((($bool80=all_nodes) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
						false :
						(typeof $bool80=='object'?
							(typeof $bool80.__nonzero__=='function'?
								$bool80.__nonzero__() :
								(typeof $bool80.__len__=='function'?
									($bool80.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=721;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $p['getattr'](elem, 'firstChild')) : $p['setattr'](self, 'child', $p['getattr'](elem, 'firstChild')); 
				}
				else {
					$pyjs.track.lineno=723;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $m['getFirstChild'](elem)) : $p['setattr'](self, 'child', $m['getFirstChild'](elem)); 
				}
				$pyjs.track.lineno=724;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null); 
				$pyjs.track.lineno=725;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stack', $p['list']([])) : $p['setattr'](self, 'stack', $p['list']([])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['all_nodes', false]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=727;
			$method = $pyjs__bind_method2('next', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool83,$bool82,$bool81,$cmp1,$bool86,$bool85,$bool84,$cmp2,nextSibling,firstChild,$len1,$bool87;
				$pyjs.track={module:'pyjamas.DOM', lineno:727};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=727;
				$pyjs.track.lineno=728;
				if ((($bool82=!(($bool81=$p['getattr'](self, 'child')) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
					false :
					(typeof $bool81=='object'?
						(typeof $bool81.__nonzero__=='function'?
							$bool81.__nonzero__() :
							(typeof $bool81.__len__=='function'?
								($bool81.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
						false :
						(typeof $bool82=='object'?
							(typeof $bool82.__nonzero__=='function'?
								$bool82.__nonzero__() :
								(typeof $bool82.__len__=='function'?
									($bool82.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=729;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['StopIteration']);
				}
				$pyjs.track.lineno=730;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				$pyjs.track.lineno=731;
				if ((($bool83=$p['getattr'](self, 'all_nodes')) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
						false :
						(typeof $bool83=='object'?
							(typeof $bool83.__nonzero__=='function'?
								$bool83.__nonzero__() :
								(typeof $bool83.__len__=='function'?
									($bool83.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=732;
					firstChild = $p['getattr']($p['getattr'](self, 'child'), 'firstChild');
					$pyjs.track.lineno=733;
					nextSibling = $p['getattr']($p['getattr'](self, 'child'), 'nextSibling');
				}
				else {
					$pyjs.track.lineno=735;
					firstChild = $m['getFirstChild']($p['getattr'](self, 'child'));
					$pyjs.track.lineno=736;
					nextSibling = $m['getNextSibling']($p['getattr'](self, 'child'));
				}
				$pyjs.track.lineno=737;
				if ((($bool84=!$p['op_is'](firstChild, null)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
						false :
						(typeof $bool84=='object'?
							(typeof $bool84.__nonzero__=='function'?
								$bool84.__nonzero__() :
								(typeof $bool84.__len__=='function'?
									($bool84.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=738;
					if ((($bool85=!$p['op_is'](nextSibling, null)) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
							false :
							(typeof $bool85=='object'?
								(typeof $bool85.__nonzero__=='function'?
									$bool85.__nonzero__() :
									(typeof $bool85.__len__=='function'?
										($bool85.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=739;
						self['stack']['append']($p['tuple']([nextSibling, $p['getattr'](self, 'parent')]));
					}
					$pyjs.track.lineno=740;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', $p['getattr'](self, 'child')) : $p['setattr'](self, 'parent', $p['getattr'](self, 'child')); 
					$pyjs.track.lineno=741;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', firstChild) : $p['setattr'](self, 'child', firstChild); 
				}
				else if ((($bool86=!$p['op_is'](nextSibling, null)) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
						false :
						(typeof $bool86=='object'?
							(typeof $bool86.__nonzero__=='function'?
								$bool86.__nonzero__() :
								(typeof $bool86.__len__=='function'?
									($bool86.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=743;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', nextSibling) : $p['setattr'](self, 'child', nextSibling); 
				}
				else if ((($bool87=((($cmp1=(($len1=$p['getattr'](self, 'stack')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))))===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
						false :
						(typeof $bool87=='object'?
							(typeof $bool87.__nonzero__=='function'?
								$bool87.__nonzero__() :
								(typeof $bool87.__len__=='function'?
									($bool87.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=745;
					var $tupleassign1 = $p['__ass_unpack'](self['stack']['pop'](), 2, null);
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $tupleassign1[0]) : $p['setattr'](self, 'child', $tupleassign1[0]); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', $tupleassign1[1]) : $p['setattr'](self, 'parent', $tupleassign1[1]); 
				}
				else {
					$pyjs.track.lineno=747;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', null) : $p['setattr'](self, 'child', null); 
				}
				$pyjs.track.lineno=748;
				$pyjs.track.lineno=748;
				var $pyjs__ret = $p['getattr'](self, 'lastChild');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=750;
			$method = $pyjs__bind_method2('remove', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.DOM', lineno:750};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=750;
				$pyjs.track.lineno=751;
				self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=753;
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
					if (self.prototype.__md5__ !== '8c737fccd3bdd27796a1c4a73193d915') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.DOM', lineno:753};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=753;
				$pyjs.track.lineno=754;
				$pyjs.track.lineno=754;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=715;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('IterWalkChildren', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=757;
		$m['walkChildren'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:757};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=757;
			$pyjs.track.lineno=763;
			$pyjs.track.lineno=763;
			var $pyjs__ret = $m['IterWalkChildren'](elem);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['walkChildren'].__name__ = 'walkChildren';

		$m['walkChildren'].__bind_type__ = 0;
		$m['walkChildren'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=766;
		$m['isOrHasChild'] = function(parent, child) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool90,$bool91,$bool92,$bool89,$bool88;
			$pyjs.track={module:'pyjamas.DOM',lineno:766};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=766;
			$pyjs.track.lineno=767;
			while ((($bool88=child) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
					false :
					(typeof $bool88=='object'?
						(typeof $bool88.__nonzero__=='function'?
							$bool88.__nonzero__() :
							(typeof $bool88.__len__=='function'?
								($bool88.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=768;
				if ((($bool89=$m['compare'](parent, child)) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
						false :
						(typeof $bool89=='object'?
							(typeof $bool89.__nonzero__=='function'?
								$bool89.__nonzero__() :
								(typeof $bool89.__len__=='function'?
									($bool89.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=769;
					$pyjs.track.lineno=769;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=770;
				child = $p['getattr'](child, 'parentNode');
				$pyjs.track.lineno=771;
				if ((($bool91=!(($bool90=child) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
					false :
					(typeof $bool90=='object'?
						(typeof $bool90.__nonzero__=='function'?
							$bool90.__nonzero__() :
							(typeof $bool90.__len__=='function'?
								($bool90.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
						false :
						(typeof $bool91=='object'?
							(typeof $bool91.__nonzero__=='function'?
								$bool91.__nonzero__() :
								(typeof $bool91.__len__=='function'?
									($bool91.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=772;
					$pyjs.track.lineno=772;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=773;
				if ((($bool92=!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1)) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
						false :
						(typeof $bool92=='object'?
							(typeof $bool92.__nonzero__=='function'?
								$bool92.__nonzero__() :
								(typeof $bool92.__len__=='function'?
									($bool92.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=774;
					child = null;
				}
			}
			$pyjs.track.lineno=775;
			$pyjs.track.lineno=775;
			var $pyjs__ret = false;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['isOrHasChild'].__name__ = 'isOrHasChild';

		$m['isOrHasChild'].__bind_type__ = 0;
		$m['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
		$pyjs.track.lineno=778;
		$m['releaseCapture'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool93,$bool94,$and28,$and27;
			$pyjs.track={module:'pyjamas.DOM',lineno:778};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=778;
			$pyjs.track.lineno=780;
			$pyjs.track.lineno=781;
			if ((($bool94=((($bool93=$and27=$m['sCaptureElem']) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
				false :
				(typeof $bool93=='object'?
					(typeof $bool93.__nonzero__=='function'?
						$bool93.__nonzero__() :
						(typeof $bool93.__len__=='function'?
							($bool93.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$m['compare'](elem, $m['sCaptureElem']):$and27)) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
					false :
					(typeof $bool94=='object'?
						(typeof $bool94.__nonzero__=='function'?
							$bool94.__nonzero__() :
							(typeof $bool94.__len__=='function'?
								($bool94.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=782;
				$m['sCaptureElem'] = null;
				$pyjs.track.lineno=783;
				(typeof releaseCapture_impl == "undefined"?$m.releaseCapture_impl:releaseCapture_impl)(elem);
			}
			$pyjs.track.lineno=784;
			$pyjs.track.lineno=784;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['releaseCapture'].__name__ = 'releaseCapture';

		$m['releaseCapture'].__bind_type__ = 0;
		$m['releaseCapture'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=787;
		$m['releaseCapture_impl'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:787};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=787;
			$pyjs.track.lineno=787;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['releaseCapture_impl'].__name__ = 'releaseCapture_impl';

		$m['releaseCapture_impl'].__bind_type__ = 0;
		$m['releaseCapture_impl'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=789;
		$m['removeEventPreview'] = function(preview) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:789};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=789;
			$pyjs.track.lineno=790;
			$m['sEventPreviewStack']['remove'](preview);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['removeEventPreview'].__name__ = 'removeEventPreview';

		$m['removeEventPreview'].__bind_type__ = 0;
		$m['removeEventPreview'].__args__ = [null,null,['preview']];
		$pyjs.track.lineno=793;
		$m['getOffsetHeight'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:793};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=793;
			$pyjs.track.lineno=794;
			$pyjs.track.lineno=794;
			var $pyjs__ret = $p['getattr'](elem, 'offsetHeight');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getOffsetHeight'].__name__ = 'getOffsetHeight';

		$m['getOffsetHeight'].__bind_type__ = 0;
		$m['getOffsetHeight'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=797;
		$m['getOffsetWidth'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:797};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=797;
			$pyjs.track.lineno=798;
			$pyjs.track.lineno=798;
			var $pyjs__ret = $p['getattr'](elem, 'offsetWidth');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getOffsetWidth'].__name__ = 'getOffsetWidth';

		$m['getOffsetWidth'].__bind_type__ = 0;
		$m['getOffsetWidth'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=801;
		$m['scrollIntoView'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $sub22,$sub23,$sub20,$sub21,$sub24,$add30,height,$and29,$cmp8,$add26,$add29,$add28,cur,$add21,$add18,top,$add22,$add25,$add24,$add27,$add19,width,$sub9,offsetLeft,offsetTop,$bool108,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$or9,$or8,$sub15,$sub14,$bool105,$bool104,$sub16,$add17,$bool101,$bool100,$bool103,$bool102,$cmp3,$and30,$and31,$and32,$and33,$cmp5,$cmp4,$cmp7,$cmp6,$bool95,$bool96,$bool97,$bool98,$bool99,$cmp10,$add31,$cmp9,$bool107,$add32,$bool106,$add20,$sub17,$add23,left;
			$pyjs.track={module:'pyjamas.DOM',lineno:801};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=801;
			$pyjs.track.lineno=802;
			left = $p['getattr'](elem, 'offsetLeft');
			$pyjs.track.lineno=803;
			top = $p['getattr'](elem, 'offsetTop');
			$pyjs.track.lineno=804;
			width = $p['getattr'](elem, 'offsetWidth');
			$pyjs.track.lineno=805;
			height = $p['getattr'](elem, 'offsetHeight');
			$pyjs.track.lineno=807;
			if ((($bool95=!$p['op_eq']($p['getattr'](elem, 'parentNode'), $p['getattr'](elem, 'offsetParent'))) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95.__nonzero__=='function'?
							$bool95.__nonzero__() :
							(typeof $bool95.__len__=='function'?
								($bool95.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=808;
				left = (typeof ($sub9=left)==typeof ($sub10=$p['getattr']($p['getattr'](elem, 'parentNode'), 'offsetLeft')) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				$pyjs.track.lineno=809;
				top = (typeof ($sub11=top)==typeof ($sub12=$p['getattr']($p['getattr'](elem, 'parentNode'), 'offsetTop')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12));
			}
			$pyjs.track.lineno=811;
			cur = $p['getattr'](elem, 'parentNode');
			$pyjs.track.lineno=812;
			while ((($bool97=((($bool96=$and29=cur) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
				false :
				(typeof $bool96=='object'?
					(typeof $bool96.__nonzero__=='function'?
						$bool96.__nonzero__() :
						(typeof $bool96.__len__=='function'?
							($bool96.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['op_eq']($p['getattr'](cur, 'nodeType'), $constant_int_1):$and29)) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
					false :
					(typeof $bool97=='object'?
						(typeof $bool97.__nonzero__=='function'?
							$bool97.__nonzero__() :
							(typeof $bool97.__len__=='function'?
								($bool97.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=813;
				if ((($bool101=((($bool98=$and31=$p['hasattr'](cur, 'style')) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98.__nonzero__=='function'?
							$bool98.__nonzero__() :
							(typeof $bool98.__len__=='function'?
								($bool98.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool99=$and32=$p['hasattr']($p['getattr'](cur, 'style'), 'overflow')) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
					false :
					(typeof $bool99=='object'?
						(typeof $bool99.__nonzero__=='function'?
							$bool99.__nonzero__() :
							(typeof $bool99.__len__=='function'?
								($bool99.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool100=$or8=$p['op_eq']($p['getattr']($p['getattr'](cur, 'style'), 'overflow'), 'auto')) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or8:$p['op_eq']($p['getattr']($p['getattr'](cur, 'style'), 'overflow'), 'scroll')):$and32):$and31)) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
						false :
						(typeof $bool101=='object'?
							(typeof $bool101.__nonzero__=='function'?
								$bool101.__nonzero__() :
								(typeof $bool101.__len__=='function'?
									($bool101.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=815;
					if ((($bool102=((($cmp3=left)===($cmp4=$p['getattr'](cur, 'scrollLeft'))?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
							false :
							(typeof $bool102=='object'?
								(typeof $bool102.__nonzero__=='function'?
									$bool102.__nonzero__() :
									(typeof $bool102.__len__=='function'?
										($bool102.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=816;
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', left) : $p['setattr'](cur, 'scrollLeft', left); 
					}
					$pyjs.track.lineno=817;
					if ((($bool103=((($cmp5=(typeof ($add17=left)==typeof ($add18=width) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18)))===($cmp6=(typeof ($add19=$p['getattr'](cur, 'scrollLeft'))==typeof ($add20=$p['getattr'](cur, 'clientWidth')) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)))?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
							false :
							(typeof $bool103=='object'?
								(typeof $bool103.__nonzero__=='function'?
									$bool103.__nonzero__() :
									(typeof $bool103.__len__=='function'?
										($bool103.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=818;
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', (typeof ($sub13=(typeof ($add21=left)==typeof ($add22=width) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22)))==typeof ($sub14=$p['getattr'](cur, 'clientWidth')) && (typeof $sub13=='number'||typeof $sub13=='string')?
							$sub13-$sub14:
							$p['op_sub']($sub13,$sub14))) : $p['setattr'](cur, 'scrollLeft', (typeof ($sub13=(typeof ($add21=left)==typeof ($add22=width) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22)))==typeof ($sub14=$p['getattr'](cur, 'clientWidth')) && (typeof $sub13=='number'||typeof $sub13=='string')?
							$sub13-$sub14:
							$p['op_sub']($sub13,$sub14))); 
					}
					$pyjs.track.lineno=819;
					if ((($bool104=((($cmp7=top)===($cmp8=$p['getattr'](cur, 'scrollTop'))?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
							false :
							(typeof $bool104=='object'?
								(typeof $bool104.__nonzero__=='function'?
									$bool104.__nonzero__() :
									(typeof $bool104.__len__=='function'?
										($bool104.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=820;
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', top) : $p['setattr'](cur, 'scrollTop', top); 
					}
					$pyjs.track.lineno=821;
					if ((($bool105=((($cmp9=(typeof ($add23=top)==typeof ($add24=height) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24)))===($cmp10=(typeof ($add25=$p['getattr'](cur, 'scrollTop'))==typeof ($add26=$p['getattr'](cur, 'clientHeight')) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26)))?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
							false :
							(typeof $bool105=='object'?
								(typeof $bool105.__nonzero__=='function'?
									$bool105.__nonzero__() :
									(typeof $bool105.__len__=='function'?
										($bool105.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=822;
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', (typeof ($sub15=(typeof ($add27=top)==typeof ($add28=height) && (typeof $add27=='number'||typeof $add27=='string')?
							$add27+$add28:
							$p['op_add']($add27,$add28)))==typeof ($sub16=$p['getattr'](cur, 'clientHeight')) && (typeof $sub15=='number'||typeof $sub15=='string')?
							$sub15-$sub16:
							$p['op_sub']($sub15,$sub16))) : $p['setattr'](cur, 'scrollTop', (typeof ($sub15=(typeof ($add27=top)==typeof ($add28=height) && (typeof $add27=='number'||typeof $add27=='string')?
							$add27+$add28:
							$p['op_add']($add27,$add28)))==typeof ($sub16=$p['getattr'](cur, 'clientHeight')) && (typeof $sub15=='number'||typeof $sub15=='string')?
							$sub15-$sub16:
							$p['op_sub']($sub15,$sub16))); 
					}
				}
				$pyjs.track.lineno=824;
				offsetLeft = $p['getattr'](cur, 'offsetLeft');
				$pyjs.track.lineno=825;
				offsetTop = $p['getattr'](cur, 'offsetTop');
				$pyjs.track.lineno=826;
				if ((($bool106=!$p['op_eq']($p['getattr'](cur, 'parentNode'), $p['getattr'](cur, 'offsetParent'))) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
						false :
						(typeof $bool106=='object'?
							(typeof $bool106.__nonzero__=='function'?
								$bool106.__nonzero__() :
								(typeof $bool106.__len__=='function'?
									($bool106.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=827;
					if ((($bool107=$p['hasattr']($p['getattr'](cur, 'parentNode'), 'offsetLeft')) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
							false :
							(typeof $bool107=='object'?
								(typeof $bool107.__nonzero__=='function'?
									$bool107.__nonzero__() :
									(typeof $bool107.__len__=='function'?
										($bool107.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=828;
						offsetLeft = (typeof ($sub17=offsetLeft)==typeof ($sub18=$p['getattr']($p['getattr'](cur, 'parentNode'), 'offsetLeft')) && (typeof $sub17=='number'||typeof $sub17=='string')?
							$sub17-$sub18:
							$p['op_sub']($sub17,$sub18));
					}
					$pyjs.track.lineno=829;
					if ((($bool108=$p['hasattr']($p['getattr'](cur, 'parentNode'), 'offsetTop')) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
							false :
							(typeof $bool108=='object'?
								(typeof $bool108.__nonzero__=='function'?
									$bool108.__nonzero__() :
									(typeof $bool108.__len__=='function'?
										($bool108.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=830;
						offsetTop = (typeof ($sub19=offsetTop)==typeof ($sub20=$p['getattr']($p['getattr'](cur, 'parentNode'), 'offsetTop')) && (typeof $sub19=='number'||typeof $sub19=='string')?
							$sub19-$sub20:
							$p['op_sub']($sub19,$sub20));
					}
				}
				$pyjs.track.lineno=832;
				left = (typeof ($add29=left)==typeof ($add30=(typeof ($sub21=offsetLeft)==typeof ($sub22=$p['getattr'](cur, 'scrollLeft')) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22))) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30));
				$pyjs.track.lineno=833;
				top = (typeof ($add31=top)==typeof ($add32=(typeof ($sub23=offsetTop)==typeof ($sub24=$p['getattr'](cur, 'scrollTop')) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
				$pyjs.track.lineno=834;
				cur = $p['getattr'](cur, 'parentNode');
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['scrollIntoView'].__name__ = 'scrollIntoView';

		$m['scrollIntoView'].__bind_type__ = 0;
		$m['scrollIntoView'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=837;
		$m['mash_name_for_glib'] = function(name, joiner) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
			var c,$add35,$iter1_nextval,$iter1_idx,res,$add36,$add33,$add37,$add34,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$bool109,$add38,$iter1_type;
			$pyjs.track={module:'pyjamas.DOM',lineno:837};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=837;
			$pyjs.track.lineno=838;
			res = '';
			$pyjs.track.lineno=839;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = name;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				c = $iter1_nextval;
				$pyjs.track.lineno=840;
				if ((($bool109=c['isupper']()) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
						false :
						(typeof $bool109=='object'?
							(typeof $bool109.__nonzero__=='function'?
								$bool109.__nonzero__() :
								(typeof $bool109.__len__=='function'?
									($bool109.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=841;
					res = (typeof ($add35=res)==typeof ($add36=(typeof ($add33=joiner)==typeof ($add34=c['lower']()) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34))) && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36));
				}
				else {
					$pyjs.track.lineno=843;
					res = (typeof ($add37=res)==typeof ($add38=c) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38));
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=844;
			$pyjs.track.lineno=844;
			var $pyjs__ret = res;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

		$m['mash_name_for_glib'].__bind_type__ = 0;
		$m['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', '-']];
		$pyjs.track.lineno=847;
		$m['removeAttribute'] = function(element, attribute) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:847};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=847;
			$pyjs.track.lineno=848;
			element['removeAttribute'](attribute);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['removeAttribute'].__name__ = 'removeAttribute';

		$m['removeAttribute'].__bind_type__ = 0;
		$m['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
		$pyjs.track.lineno=851;
		$m['setAttribute'] = function(element, attribute, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:851};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=851;
			$pyjs.track.lineno=853;
			$p['setattr'](element, attribute, value);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setAttribute'].__name__ = 'setAttribute';

		$m['setAttribute'].__bind_type__ = 0;
		$m['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
		$pyjs.track.lineno=856;
		$m['setElemAttribute'] = function(element, attribute, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:856};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=856;
			$pyjs.track.lineno=857;
			element['setAttribute'](attribute, value);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setElemAttribute'].__name__ = 'setElemAttribute';

		$m['setElemAttribute'].__bind_type__ = 0;
		$m['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
		$pyjs.track.lineno=860;
		$m['setBooleanAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var mf;
			$pyjs.track={module:'pyjamas.DOM',lineno:860};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=860;
			$pyjs.track.lineno=861;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			$pyjs.track.lineno=862;
			$p['setattr'](elem, mf['mash_attrib'](attr), value);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

		$m['setBooleanAttribute'].__bind_type__ = 0;
		$m['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$pyjs.track.lineno=865;
		$m['setCapture'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:865};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=865;
			$pyjs.track.lineno=866;
			$pyjs.track.lineno=867;
			$m['sCaptureElem'] = elem;
			$pyjs.track.lineno=869;
			(typeof setCapture_impl == "undefined"?$m.setCapture_impl:setCapture_impl)(elem);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setCapture'].__name__ = 'setCapture';

		$m['setCapture'].__bind_type__ = 0;
		$m['setCapture'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=872;
		$m['setCapture_impl'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:872};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=872;
			$pyjs.track.lineno=872;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setCapture_impl'].__name__ = 'setCapture_impl';

		$m['setCapture_impl'].__bind_type__ = 0;
		$m['setCapture_impl'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=874;
		$m['setEventListener'] = function(element, listener) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:874};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=874;
			$pyjs.track.lineno=881;
			$m['set_listener'](element, listener);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setEventListener'].__name__ = 'setEventListener';

		$m['setEventListener'].__bind_type__ = 0;
		$m['setEventListener'].__args__ = [null,null,['element'],['listener']];
		$pyjs.track.lineno=884;
		$m['createTextNode'] = function(txt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:884};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=884;
			$pyjs.track.lineno=885;
			$pyjs.track.lineno=885;
			var $pyjs__ret = $doc['createTextNode'](txt);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['createTextNode'].__name__ = 'createTextNode';

		$m['createTextNode'].__bind_type__ = 0;
		$m['createTextNode'].__args__ = [null,null,['txt']];
		$pyjs.track.lineno=888;
		$m['setInnerHTML'] = function(element, html) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $pyjs_try_err;
			$pyjs.track={module:'pyjamas.DOM',lineno:888};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=888;
			$pyjs.track.lineno=889;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=890;
				element.__is_instance__ && typeof element.__setattr__ == 'function' ? element.__setattr__('innerHtml', html) : $p['setattr'](element, 'innerHtml', html); 
			} catch($pyjs_try_err) {
				$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
				$pyjs.__active_exception_stack__ = null;
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.DOM';
				if (true) {
					$pyjs.track.lineno=892;
					element.__is_instance__ && typeof element.__setattr__ == 'function' ? element.__setattr__('innerHTML', html) : $p['setattr'](element, 'innerHTML', html); 
				}
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setInnerHTML'].__name__ = 'setInnerHTML';

		$m['setInnerHTML'].__bind_type__ = 0;
		$m['setInnerHTML'].__args__ = [null,null,['element'],['html']];
		$pyjs.track.lineno=895;
		$m['setInnerText'] = function(elem, text) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $bool110,$bool111,$or11,$or10;
			$pyjs.track={module:'pyjamas.DOM',lineno:895};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=895;
			$pyjs.track.lineno=897;
			while ((($bool110=!$p['op_is']($p['getattr'](elem, 'firstChild'), null)) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
					false :
					(typeof $bool110=='object'?
						(typeof $bool110.__nonzero__=='function'?
							$bool110.__nonzero__() :
							(typeof $bool110.__len__=='function'?
								($bool110.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=898;
				elem['removeChild']($p['getattr'](elem, 'firstChild'));
			}
			$pyjs.track.lineno=899;
			elem['appendChild']($m['createTextNode'](((($bool111=$or10=text) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
				false :
				(typeof $bool111=='object'?
					(typeof $bool111.__nonzero__=='function'?
						$bool111.__nonzero__() :
						(typeof $bool111.__len__=='function'?
							($bool111.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or10:'')));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setInnerText'].__name__ = 'setInnerText';

		$m['setInnerText'].__bind_type__ = 0;
		$m['setInnerText'].__args__ = [null,null,['elem'],['text']];
		$pyjs.track.lineno=902;
		$m['setIntElemAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:902};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=902;
			$pyjs.track.lineno=903;
			elem['setAttribute'](attr, $p['str'](value));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

		$m['setIntElemAttribute'].__bind_type__ = 0;
		$m['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$pyjs.track.lineno=906;
		$m['setIntAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:906};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=906;
			$pyjs.track.lineno=907;
			$p['setattr'](elem, attr, $p['int'](value));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setIntAttribute'].__name__ = 'setIntAttribute';

		$m['setIntAttribute'].__bind_type__ = 0;
		$m['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$pyjs.track.lineno=910;
		$m['setIntStyleAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $bool112,mf;
			$pyjs.track={module:'pyjamas.DOM',lineno:910};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=910;
			$pyjs.track.lineno=911;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			$pyjs.track.lineno=912;
			if ((($bool112=$p['hasattr']($p['getattr'](elem, 'style'), 'setProperty')) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
					false :
					(typeof $bool112=='object'?
						(typeof $bool112.__nonzero__=='function'?
							$bool112.__nonzero__() :
							(typeof $bool112.__len__=='function'?
								($bool112.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=913;
				elem['style']['setProperty'](mf['mash_attrib'](attr), $p['str'](value), '');
			}
			else {
				$pyjs.track.lineno=915;
				elem['style']['setAttribute'](mf['mash_attrib'](attr), $p['str'](value), '');
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

		$m['setIntStyleAttribute'].__bind_type__ = 0;
		$m['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$pyjs.track.lineno=918;
		$m['setOptionText'] = function(select, text, index) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var option;
			$pyjs.track={module:'pyjamas.DOM',lineno:918};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=918;
			$pyjs.track.lineno=919;
			option = select['options']['item'](index);
			$pyjs.track.lineno=920;
			option.__is_instance__ && typeof option.__setattr__ == 'function' ? option.__setattr__('textContent', text) : $p['setattr'](option, 'textContent', text); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setOptionText'].__name__ = 'setOptionText';

		$m['setOptionText'].__bind_type__ = 0;
		$m['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
		$pyjs.track.lineno=923;
		$m['setStyleAttribute'] = function(element, name, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $bool113;
			$pyjs.track={module:'pyjamas.DOM',lineno:923};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=923;
			$pyjs.track.lineno=924;
			if ((($bool113=$p['hasattr']($p['getattr'](element, 'style'), 'setProperty')) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
					false :
					(typeof $bool113=='object'?
						(typeof $bool113.__nonzero__=='function'?
							$bool113.__nonzero__() :
							(typeof $bool113.__len__=='function'?
								($bool113.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=925;
				element['style']['setProperty']($m['mash_name_for_glib'](name), value, '');
			}
			else {
				$pyjs.track.lineno=927;
				element['style']['setAttribute'](name, value, '');
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setStyleAttribute'].__name__ = 'setStyleAttribute';

		$m['setStyleAttribute'].__bind_type__ = 0;
		$m['setStyleAttribute'].__args__ = [null,null,['element'],['name'],['value']];
		$pyjs.track.lineno=929;
		$m['setStyleAttributes'] = function(element) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[1];
					}
				} else {
				}
			}
			var $iter2_nextval,$iter2_type,attr,$iter2_iter,$pyjs__trackstack_size_1,$iter2_idx,val,$bool114,$iter2_array;
			$pyjs.track={module:'pyjamas.DOM',lineno:929};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=929;
			$pyjs.track.lineno=933;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = kwargs['items']();
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 2, null);
				attr = $tupleassign2[0];
				val = $tupleassign2[1];
				$pyjs.track.lineno=934;
				if ((($bool114=$p['hasattr']($p['getattr'](element, 'style'), 'setProperty')) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
						false :
						(typeof $bool114=='object'?
							(typeof $bool114.__nonzero__=='function'?
								$bool114.__nonzero__() :
								(typeof $bool114.__len__=='function'?
									($bool114.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=935;
					element['style']['setProperty']($m['mash_name_for_glib'](attr), val, '');
				}
				else {
					$pyjs.track.lineno=937;
					element['style']['setAttribute'](attr, val, '');
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setStyleAttributes'].__name__ = 'setStyleAttributes';

		$m['setStyleAttributes'].__bind_type__ = 0;
		$m['setStyleAttributes'].__args__ = [null,['kwargs'],['element']];
		$pyjs.track.lineno=939;
		$m['sinkEvents'] = function(element, bits) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var cb,$cmp12,$bool116,$bool117,$bool115,$bool118,$bool119,$4,$iter3_idx,$iter3_array,$iter3_nextval,$3,$iter3_iter,event_name,$cmp11,$iter3_type,$6,bit,$5,$bool122,$bool121,$bool120,mf,aev,mask,$pyjs__trackstack_size_1;
			$pyjs.track={module:'pyjamas.DOM',lineno:939};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=939;
			$pyjs.track.lineno=946;
			mask = $p['op_bitxor2']($m['getEventsSunk'](element), bits);
			$pyjs.track.lineno=947;
			$m['eventbitsmap'].__setitem__(element, bits);
			$pyjs.track.lineno=948;
			if ((($bool116=!(($bool115=mask) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
				false :
				(typeof $bool115=='object'?
					(typeof $bool115.__nonzero__=='function'?
						$bool115.__nonzero__() :
						(typeof $bool115.__len__=='function'?
							($bool115.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
					false :
					(typeof $bool116=='object'?
						(typeof $bool116.__nonzero__=='function'?
							$bool116.__nonzero__() :
							(typeof $bool116.__len__=='function'?
								($bool116.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=949;
				$pyjs.track.lineno=949;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=951;
			bits = mask;
			$pyjs.track.lineno=953;
			if ((($bool118=!(($bool117=bits) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
				false :
				(typeof $bool117=='object'?
					(typeof $bool117.__nonzero__=='function'?
						$bool117.__nonzero__() :
						(typeof $bool117.__len__=='function'?
							($bool117.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
					false :
					(typeof $bool118=='object'?
						(typeof $bool118.__nonzero__=='function'?
							$bool118.__nonzero__() :
							(typeof $bool118.__len__=='function'?
								($bool118.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=954;
				$pyjs.track.lineno=954;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=955;
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			$pyjs.track.lineno=956;
			if ((($bool119=$p['hasattr'](mf, '_addEventListener')) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
					false :
					(typeof $bool119=='object'?
						(typeof $bool119.__nonzero__=='function'?
							$bool119.__nonzero__() :
							(typeof $bool119.__len__=='function'?
								($bool119.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=957;
				aev = $p['getattr'](mf, '_addEventListener');
			}
			else {
				$pyjs.track.lineno=959;
				aev = $p['getattr'](mf, 'addEventListener');
			}
			$pyjs.track.lineno=961;
			cb = $m['_dispatchEvent'];
			$pyjs.track.lineno=964;
			(typeof sinkEventsMozilla == "undefined"?$m.sinkEventsMozilla:sinkEventsMozilla)(element, bits);
			$pyjs.track.lineno=966;
			bit = $constant_int_1;
			$pyjs.track.lineno=967;
			while ((($bool120=bits) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
					false :
					(typeof $bool120=='object'?
						(typeof $bool120.__nonzero__=='function'?
							$bool120.__nonzero__() :
							(typeof $bool120.__len__=='function'?
								($bool120.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=968;
				if ((($bool121=((($cmp11=bit)===($cmp12=bits)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
						false :
						(typeof $bool121=='object'?
							(typeof $bool121.__nonzero__=='function'?
								$bool121.__nonzero__() :
								(typeof $bool121.__len__=='function'?
									($bool121.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=969;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['RuntimeError']('sinkEvents: bit outruns bits'));
				}
				$pyjs.track.lineno=970;
				if ((($bool122=$p['op_bitand2'](bits, bit)) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
						false :
						(typeof $bool122=='object'?
							(typeof $bool122.__nonzero__=='function'?
								$bool122.__nonzero__() :
								(typeof $bool122.__len__=='function'?
									($bool122.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=971;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter3_iter = (typeof ($5=(typeof ($3=$p['getattr']($m['Event'], 'eventbits')).__array != 'undefined'?
						((typeof $3.__array[$4=bit]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(bit))).__array != 'undefined'?
						((typeof $5.__array[$6=$constant_int_1]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($constant_int_1));
					if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter.__iter__();
						$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						event_name = $iter3_nextval;
						$pyjs.track.lineno=972;
						aev(element, event_name, cb);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.DOM';
					$pyjs.track.lineno=973;
					bits = $p['op_bitxor2'](bits, bit);
				}
				$pyjs.track.lineno=974;
				bit = $p['op_bitshiftleft'](bit,$constant_int_1);
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['sinkEvents'].__name__ = 'sinkEvents';

		$m['sinkEvents'].__bind_type__ = 0;
		$m['sinkEvents'].__args__ = [null,null,['element'],['bits']];
		$pyjs.track.lineno=976;
		$m['sinkEventsMozilla'] = function(element, bits) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:976};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=976;
			$pyjs.track.lineno=977;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['sinkEventsMozilla'].__name__ = 'sinkEventsMozilla';

		$m['sinkEventsMozilla'].__bind_type__ = 0;
		$m['sinkEventsMozilla'].__args__ = [null,null,['element'],['bits']];
		$pyjs.track.lineno=979;
		$m['toString'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var outer,tempDiv,temp;
			$pyjs.track={module:'pyjamas.DOM',lineno:979};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=979;
			$pyjs.track.lineno=980;
			temp = elem['cloneNode'](true);
			$pyjs.track.lineno=981;
			tempDiv = $m['createDiv']();
			$pyjs.track.lineno=982;
			tempDiv['appendChild'](temp);
			$pyjs.track.lineno=983;
			outer = $m['getInnerHTML'](tempDiv);
			$pyjs.track.lineno=984;
			$m['setInnerHTML'](temp, '');
			$pyjs.track.lineno=985;
			$pyjs.track.lineno=985;
			var $pyjs__ret = outer;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['toString'].__name__ = 'toString';

		$m['toString'].__bind_type__ = 0;
		$m['toString'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=989;
		$m['dispatchEvent'] = function(event, element, listener) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:989};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=989;
			$pyjs.track.lineno=990;
			(typeof dispatchEventImpl == "undefined"?$m.dispatchEventImpl:dispatchEventImpl)(event, element, listener);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['dispatchEvent'].__name__ = 'dispatchEvent';

		$m['dispatchEvent'].__bind_type__ = 0;
		$m['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
		$pyjs.track.lineno=993;
		$m['previewEvent'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool124,ret,$len2,$8,$7,$bool125,preview,$bool123;
			$pyjs.track={module:'pyjamas.DOM',lineno:993};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=993;
			$pyjs.track.lineno=995;
			if ((($bool123=$p['op_eq']((($len2=$m['sEventPreviewStack']) === null?$constant_int_0:
				(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
							$p['len']($len2))))), $constant_int_0)) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
					false :
					(typeof $bool123=='object'?
						(typeof $bool123.__nonzero__=='function'?
							$bool123.__nonzero__() :
							(typeof $bool123.__len__=='function'?
								($bool123.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=996;
				$pyjs.track.lineno=996;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=997;
			preview = (typeof ($7=$m['sEventPreviewStack']).__array != 'undefined'?
				((typeof $7.__array[$8=(typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__((typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))));
			$pyjs.track.lineno=998;
			ret = preview['onEventPreview'](evt);
			$pyjs.track.lineno=999;
			if ((($bool124=ret) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
					false :
					(typeof $bool124=='object'?
						(typeof $bool124.__nonzero__=='function'?
							$bool124.__nonzero__() :
							(typeof $bool124.__len__=='function'?
								($bool124.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=1000;
				$pyjs.track.lineno=1000;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=1003;
			if ((($bool125=evt) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
					false :
					(typeof $bool125=='object'?
						(typeof $bool125.__nonzero__=='function'?
							$bool125.__nonzero__() :
							(typeof $bool125.__len__=='function'?
								($bool125.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=1004;
				$m['eventCancelBubble'](evt, true);
				$pyjs.track.lineno=1005;
				$m['eventPreventDefault'](evt);
			}
			$pyjs.track.lineno=1007;
			$pyjs.track.lineno=1007;
			var $pyjs__ret = ret;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['previewEvent'].__name__ = 'previewEvent';

		$m['previewEvent'].__bind_type__ = 0;
		$m['previewEvent'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=1011;
		$m['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:1011};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1011;
			$pyjs.track.lineno=1012;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

		$m['dispatchEventAndCatch'].__bind_type__ = 0;
		$m['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
		$pyjs.track.lineno=1014;
		$m['currentEvent'] = null;
		$pyjs.track.lineno=1017;
		$m['dispatchEventImpl'] = function(event, element, listener) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $bool127,$bool126,prevCurrentEvent;
			$pyjs.track={module:'pyjamas.DOM',lineno:1017};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1017;
			$pyjs.track.lineno=1018;
			$pyjs.track.lineno=1019;
			$pyjs.track.lineno=1020;
			if ((($bool126=$p['op_eq'](element, $m['sCaptureElem'])) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
					false :
					(typeof $bool126=='object'?
						(typeof $bool126.__nonzero__=='function'?
							$bool126.__nonzero__() :
							(typeof $bool126.__len__=='function'?
								($bool126.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=1021;
				if ((($bool127=$p['op_eq']($m['eventGetType'](event), 'losecapture')) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
						false :
						(typeof $bool127=='object'?
							(typeof $bool127.__nonzero__=='function'?
								$bool127.__nonzero__() :
								(typeof $bool127.__len__=='function'?
									($bool127.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1023;
					$m['sCaptureElem'] = null;
				}
			}
			$pyjs.track.lineno=1025;
			prevCurrentEvent = $m['currentEvent'];
			$pyjs.track.lineno=1026;
			$m['currentEvent'] = event;
			$pyjs.track.lineno=1027;
			listener['onBrowserEvent'](event);
			$pyjs.track.lineno=1028;
			$m['currentEvent'] = prevCurrentEvent;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

		$m['dispatchEventImpl'].__bind_type__ = 0;
		$m['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
		$pyjs.track.lineno=1031;
		$m['eventGetCurrentEvent'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:1031};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1031;
			$pyjs.track.lineno=1032;
			$pyjs.track.lineno=1032;
			var $pyjs__ret = $m['currentEvent'];
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

		$m['eventGetCurrentEvent'].__bind_type__ = 0;
		$m['eventGetCurrentEvent'].__args__ = [null,null];
		$pyjs.track.lineno=1035;
		$m['insertListItem'] = function(select, item, value, index) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var option,$bool129,$bool128;
			$pyjs.track={module:'pyjamas.DOM',lineno:1035};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1035;
			$pyjs.track.lineno=1036;
			option = $m['createElement']('OPTION');
			$pyjs.track.lineno=1037;
			$m['setInnerText'](option, item);
			$pyjs.track.lineno=1038;
			if ((($bool128=!$p['op_is'](value, null)) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
					false :
					(typeof $bool128=='object'?
						(typeof $bool128.__nonzero__=='function'?
							$bool128.__nonzero__() :
							(typeof $bool128.__len__=='function'?
								($bool128.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=1039;
				$m['setAttribute'](option, 'value', value);
			}
			$pyjs.track.lineno=1040;
			if ((($bool129=$p['op_eq'](index, (typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)))) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
					false :
					(typeof $bool129=='object'?
						(typeof $bool129.__nonzero__=='function'?
							$bool129.__nonzero__() :
							(typeof $bool129.__len__=='function'?
								($bool129.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=1041;
				$m['appendChild'](select, option);
			}
			else {
				$pyjs.track.lineno=1043;
				$m['insertChild'](select, option, index);
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['insertListItem'].__name__ = 'insertListItem';

		$m['insertListItem'].__bind_type__ = 0;
		$m['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
		$pyjs.track.lineno=1046;
		$m['getBodyOffsetTop'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:1046};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1046;
			$pyjs.track.lineno=1047;
			$pyjs.track.lineno=1047;
			var $pyjs__ret = $constant_int_0;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

		$m['getBodyOffsetTop'].__bind_type__ = 0;
		$m['getBodyOffsetTop'].__args__ = [null,null];
		$pyjs.track.lineno=1050;
		$m['getBodyOffsetLeft'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:1050};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1050;
			$pyjs.track.lineno=1051;
			$pyjs.track.lineno=1051;
			var $pyjs__ret = $constant_int_0;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

		$m['getBodyOffsetLeft'].__bind_type__ = 0;
		$m['getBodyOffsetLeft'].__args__ = [null,null];
		$pyjs.track.lineno=1053;
		$m['eventGetMouseWheelVelocityY'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:1053};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1053;
			$pyjs.track.lineno=1056;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['eventGetMouseWheelVelocityY'].__name__ = 'eventGetMouseWheelVelocityY';

		$m['eventGetMouseWheelVelocityY'].__bind_type__ = 0;
		$m['eventGetMouseWheelVelocityY'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=1059;
		if ((($bool131=!(($bool130=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
			false :
			(typeof $bool130=='object'?
				(typeof $bool130.__nonzero__=='function'?
					$bool130.__nonzero__() :
					(typeof $bool130.__len__=='function'?
						($bool130.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
				false :
				(typeof $bool131=='object'?
					(typeof $bool131.__nonzero__=='function'?
						$bool131.__nonzero__() :
						(typeof $bool131.__len__=='function'?
							($bool131.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$pyjs.track.lineno=1060;
			$m['init']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
