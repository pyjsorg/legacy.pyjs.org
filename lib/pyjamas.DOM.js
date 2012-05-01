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

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_9 = new $p['int'](9);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['getattr']($m['pyjd'], 'is_desktop'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
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
		$m['sEventPreviewStack'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
		$pyjs.track.lineno=30;
		$m['listeners'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
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
			var ret;
			$pyjs.track={module:'pyjamas.DOM',lineno:59};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=59;
			$pyjs.track.lineno=60;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](item, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=61;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=62;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](item, '__instance__');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs.track.lineno=63;
				ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['listeners']['get']($p['getattr'](item, '__instance__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			else {
				$pyjs.track.lineno=65;
				ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['listeners']['get']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hash'](item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
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

			$pyjs.track={module:'pyjamas.DOM',lineno:69};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=69;
			$pyjs.track.lineno=70;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](item, '__instance__');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs.track.lineno=71;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['listeners'].__setitem__($p['getattr'](item, '__instance__'), listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](listener, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs.track.lineno=73;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['listeners']['pop']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hash'](item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			}
			else {
				$pyjs.track.lineno=75;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['listeners'].__setitem__((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hash'](item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
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
			mf = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs.track.lineno=83;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('click', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs.track.lineno=84;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('change', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs.track.lineno=85;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('mouseout', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs.track.lineno=86;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('mousedown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs.track.lineno=87;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('mouseup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs.track.lineno=88;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('resize', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs.track.lineno=89;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('keyup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs.track.lineno=90;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('keydown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs.track.lineno=91;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('keypress', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs.track.lineno=92;
			(function(){try{try{$pyjs.in_try_except += 1;
			return mf['_addWindowEventListener']('mousewheel', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null];
		$pyjs.track.lineno=94;
		$m['_init_testing'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var body;
			$pyjs.track={module:'pyjamas.DOM',lineno:94};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=94;
			$pyjs.track.lineno=95;
			body = $doc['getElementsByTagName']('body').__getitem__($constant_int_0);
			$pyjs.track.lineno=96;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'click', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs.track.lineno=97;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs.track.lineno=98;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs.track.lineno=99;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs.track.lineno=100;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.track.lineno=101;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs.track.lineno=102;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs.track.lineno=103;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs.track.lineno=104;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs.track.lineno=105;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
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
			var curElem,$and3,$and1,$and2,cap,$and4,$and5,$and6,listener,$pyjs_try_err;
			$pyjs.track={module:'pyjamas.DOM',lineno:111};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=111;
			$pyjs.track.lineno=113;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](evt, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
				$pyjs.track.lineno=114;
				evt = $p['getattr']($wnd, 'event');
			}
			else {
				$pyjs.track.lineno=116;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=117;
					sender = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()['gobject_wrap'](sender);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
					$pyjs.track.lineno=118;
					evt = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()['gobject_wrap'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
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
			cap = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs.track.lineno=126;
			listener = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs.track.lineno=127;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and1=cap)?!$p['op_is'](listener, null):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
				$pyjs.track.lineno=129;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				$pyjs.track.lineno=130;
				(function(){try{try{$pyjs.in_try_except += 1;
				return evt['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs.track.lineno=131;
				$pyjs.track.lineno=131;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=133;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and3=curElem)?$p['op_is']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})(), null):$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
				$pyjs.track.lineno=135;
				curElem = (function(){try{try{$pyjs.in_try_except += 1;
				return (typeof getParent == "undefined"?$m.getParent:getParent)(curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			}
			$pyjs.track.lineno=136;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and5=curElem)?!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof getNodeType == "undefined"?$m.getNodeType:getNodeType)(curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})(), $constant_int_1):$and5));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
				$pyjs.track.lineno=137;
				curElem = null;
			}
			$pyjs.track.lineno=139;
			listener = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs.track.lineno=140;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_is'](listener, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
				$pyjs.track.lineno=141;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, curElem, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
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
			var listener,$and8,cap,$and7;
			$pyjs.track={module:'pyjamas.DOM',lineno:144};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=144;
			$pyjs.track.lineno=147;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
				$pyjs.track.lineno=148;
				$pyjs.track.lineno=148;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=149;
			cap = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs.track.lineno=150;
			listener = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs.track.lineno=151;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and7=cap)?!$p['op_is'](listener, null):$and7));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
				$pyjs.track.lineno=152;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs.track.lineno=154;
				(function(){try{try{$pyjs.in_try_except += 1;
				return evt['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
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
			var listener,lcEvent,cap;
			$pyjs.track={module:'pyjamas.DOM',lineno:157};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=157;
			$pyjs.track.lineno=158;
			cap = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs.track.lineno=160;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](cap, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs.track.lineno=161;
				$pyjs.track.lineno=161;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=163;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof eventGetToElement == "undefined"?$m.eventGetToElement:eventGetToElement)(evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
				$pyjs.track.lineno=164;
				$pyjs.track.lineno=164;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=168;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof setCapture == "undefined"?$m.setCapture:setCapture)(null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
			$pyjs.track.lineno=169;
			listener = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			$pyjs.track.lineno=170;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](listener, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(lcEvent, cap, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

		$m['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
		$m['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=179;
		$m['browser_event_cb'] = function(view, event, from_window) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $or4,$or1,$or3,$or2,$pyjs_try_err,et;
			$pyjs.track={module:'pyjamas.DOM',lineno:179};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=179;
			$pyjs.track.lineno=181;
			$pyjs.track.lineno=183;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](event, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
				$pyjs.track.lineno=184;
				event = $p['getattr']($wnd, 'event');
			}
			else {
				$pyjs.track.lineno=186;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=187;
					event = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()['gobject_wrap'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
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
			et = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			$pyjs.track.lineno=194;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](et, 'resize'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
				$pyjs.track.lineno=195;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['onResize']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$pyjs.track.lineno=196;
				$pyjs.track.lineno=196;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=197;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](et, 'mouseout'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
				$pyjs.track.lineno=199;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['_dispatchCapturedMouseoutEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			}
			$pyjs.track.lineno=200;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or1=$p['op_eq'](et, 'keyup'))?$or1:($p['bool']($or2=$p['op_eq'](et, 'keydown'))?$or2:($p['bool']($or3=$p['op_eq'](et, 'keypress'))?$or3:$p['op_eq'](et, 'change')))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs.track.lineno=202;
				$pyjs.track.lineno=202;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=204;
				$pyjs.track.lineno=204;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['_dispatchCapturedMouseEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
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

			$pyjs.track={module:'pyjamas.DOM',lineno:207};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=207;
			$pyjs.track.lineno=209;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof previewEvent == "undefined"?$m.previewEvent:previewEvent)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
				$pyjs.track.lineno=211;
				(function(){try{try{$pyjs.in_try_except += 1;
				return event['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
				$pyjs.track.lineno=212;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof eventPreventDefault == "undefined"?$m.eventPreventDefault:eventPreventDefault)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sEventPreviewStack']['append'](preview);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return parent['appendChild'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return parent['removeChild'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return parent['replaceChild'](newChild, oldChild);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return element['dispatchEvent'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['buttonClick'].__name__ = 'buttonClick';

		$m['buttonClick'].__bind_type__ = 0;
		$m['buttonClick'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=241;
		$m['compare'] = function(elem1, elem2) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $and9,$and10;
			$pyjs.track={module:'pyjamas.DOM',lineno:241};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=241;
			$pyjs.track.lineno=242;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and9=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](elem1, 'isSameNode');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})())?(function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](elem2, 'isSameNode');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})():$and9));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()) {
				$pyjs.track.lineno=243;
				$pyjs.track.lineno=243;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return elem1['isSameNode'](elem2);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof createElement == "undefined"?$m.createElement:createElement)('A');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof createElement == "undefined"?$m.createElement:createElement)('button');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof createElement == "undefined"?$m.createElement:createElement)('col');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof createElement == "undefined"?$m.createElement:createElement)('div');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('fieldset');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('form');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('iframe');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('img');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof createInputElement == "undefined"?$m.createInputElement:createInputElement)('checkbox');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
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
			e = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('input');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createInputElement']('password');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
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
			e = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createInputElement']('radio');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createInputElement']('text');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('label');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('legend');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('options');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('select');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('span');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('table');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('tbody');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('td');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('textarea');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('th');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('tr');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return evt['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
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
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=381;
					$pyjs.track.lineno=381;
					var $pyjs__ret = $p['getattr'](evt, 'fromElement');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} finally { $pyjs.in_try_except -= 1; }
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
			var $or5,$or7,$or6;
			$pyjs.track={module:'pyjamas.DOM',lineno:386};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=386;
			$pyjs.track.lineno=387;
			$pyjs.track.lineno=387;
			var $pyjs__ret = ($p['bool']($or5=$p['getattr'](evt, 'which'))?$or5:($p['bool']($or6=$p['getattr'](evt, 'keyCode'))?$or6:$constant_int_0));
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
			var type;
			$pyjs.track={module:'pyjamas.DOM',lineno:414};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=414;
			$pyjs.track.lineno=415;
			type = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
			$pyjs.track.lineno=416;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](type, 'mouseout'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()) {
				$pyjs.track.lineno=417;
				$pyjs.track.lineno=417;
				var $pyjs__ret = $p['getattr'](evt, 'relatedTarget');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](type, 'mouseover'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()) {
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Event']['eventmap']['get']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['getattr'](event, 'type'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})(), $constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return evt['preventDefault']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return evt['toString']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
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
			var curr,$add2,$add1,$sub3,$sub2,$sub1,$sub4,left;
			$pyjs.track={module:'pyjamas.DOM',lineno:450};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=450;
			$pyjs.track.lineno=451;
			left = $constant_int_0;
			$pyjs.track.lineno=452;
			curr = elem;
			$pyjs.track.lineno=453;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['getattr'](curr, 'offsetParent'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()) {
				$pyjs.track.lineno=454;
				left = $p['__op_sub']($sub1=left,$sub2=$p['getattr'](curr, 'scrollLeft'));
				$pyjs.track.lineno=455;
				curr = $p['getattr'](curr, 'parentNode');
			}
			$pyjs.track.lineno=457;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
				$pyjs.track.lineno=458;
				left = $p['__op_add']($add1=left,$add2=$p['__op_sub']($sub3=$p['getattr'](elem, 'offsetLeft'),$sub4=$p['getattr'](elem, 'scrollLeft')));
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
			var curr,top,$add3,$sub8,$add4,$sub7,$sub6,$sub5;
			$pyjs.track={module:'pyjamas.DOM',lineno:464};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=464;
			$pyjs.track.lineno=465;
			top = $constant_int_0;
			$pyjs.track.lineno=466;
			curr = elem;
			$pyjs.track.lineno=467;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['getattr'](curr, 'offsetParent'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
				$pyjs.track.lineno=468;
				top = $p['__op_sub']($sub5=top,$sub6=$p['getattr'](curr, 'scrollTop'));
				$pyjs.track.lineno=469;
				curr = $p['getattr'](curr, 'parentNode');
			}
			$pyjs.track.lineno=471;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()) {
				$pyjs.track.lineno=472;
				top = $p['__op_add']($add3=top,$add4=$p['__op_sub']($sub7=$p['getattr'](elem, 'offsetTop'),$sub8=$p['getattr'](elem, 'scrollTop')));
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

			$pyjs.track={module:'pyjamas.DOM',lineno:478};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=478;
			$pyjs.track.lineno=479;
			attr = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['getattr'](elem, attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
			$pyjs.track.lineno=480;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](attr, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
				$pyjs.track.lineno=481;
				$pyjs.track.lineno=481;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=482;
			$pyjs.track.lineno=482;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['str'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getAttribute'].__name__ = 'getAttribute';

		$m['getAttribute'].__bind_type__ = 0;
		$m['getAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=485;
		$m['getElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var mf;
			$pyjs.track={module:'pyjamas.DOM',lineno:485};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=485;
			$pyjs.track.lineno=486;
			mf = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
			$pyjs.track.lineno=487;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return elem['hasAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
				$pyjs.track.lineno=488;
				$pyjs.track.lineno=488;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['str']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](elem, (function(){try{try{$pyjs.in_try_except += 1;
				return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=489;
			$pyjs.track.lineno=489;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']((function(){try{try{$pyjs.in_try_except += 1;
			return elem['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
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
			mf = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
			$pyjs.track.lineno=494;
			$pyjs.track.lineno=494;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['getattr'](elem, (function(){try{try{$pyjs.in_try_except += 1;
			return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

		$m['getBooleanAttribute'].__bind_type__ = 0;
		$m['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=497;
		$m['getBooleanElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:497};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=497;
			$pyjs.track.lineno=498;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return elem['hasAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()) {
				$pyjs.track.lineno=499;
				$pyjs.track.lineno=499;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=500;
			$pyjs.track.lineno=500;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return elem['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
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
			var count,child,next,$add6,$add5;
			$pyjs.track={module:'pyjamas.DOM',lineno:508};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=508;
			$pyjs.track.lineno=512;
			count = $constant_int_0;
			$pyjs.track.lineno=513;
			child = $p['getattr'](elem, 'firstChild');
			$pyjs.track.lineno=514;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()) {
				$pyjs.track.lineno=515;
				next = $p['getattr'](child, 'nextSibling');
				$pyjs.track.lineno=516;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
					$pyjs.track.lineno=517;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](index, count));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
						$pyjs.track.lineno=518;
						$pyjs.track.lineno=518;
						var $pyjs__ret = child;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=519;
					count = $p['__op_add']($add5=count,$add6=$constant_int_1);
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
			var count,$add8,$add7,child;
			$pyjs.track={module:'pyjamas.DOM',lineno:524};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=524;
			$pyjs.track.lineno=529;
			count = $constant_int_0;
			$pyjs.track.lineno=530;
			child = $p['getattr'](elem, 'firstChild');
			$pyjs.track.lineno=531;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
				$pyjs.track.lineno=532;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()) {
					$pyjs.track.lineno=533;
					count = $p['__op_add']($add7=count,$add8=$constant_int_1);
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
			var count,$add10,child,$add9;
			$pyjs.track={module:'pyjamas.DOM',lineno:538};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=538;
			$pyjs.track.lineno=544;
			count = $constant_int_0;
			$pyjs.track.lineno=545;
			child = $p['getattr'](parent, 'firstChild');
			$pyjs.track.lineno=546;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})()) {
				$pyjs.track.lineno=547;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](child, toFind));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
					$pyjs.track.lineno=548;
					$pyjs.track.lineno=548;
					var $pyjs__ret = count;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=549;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()) {
					$pyjs.track.lineno=550;
					count = $p['__op_add']($add9=count,$add10=$constant_int_1);
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getEventListener'].__name__ = 'getEventListener';

		$m['getEventListener'].__bind_type__ = 0;
		$m['getEventListener'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=569;
		$m['eventbitsmap'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
		$pyjs.track.lineno=572;
		$m['getEventsSunk'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:572};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=572;
			$pyjs.track.lineno=577;
			$pyjs.track.lineno=577;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['eventbitsmap']['get'](element, $constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getEventsSunk'].__name__ = 'getEventsSunk';

		$m['getEventsSunk'].__bind_type__ = 0;
		$m['getEventsSunk'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=580;
		$m['getFirstChild'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $and12,$and13,$and11,$and14,child;
			$pyjs.track={module:'pyjamas.DOM',lineno:580};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=580;
			$pyjs.track.lineno=581;
			child = ($p['bool']($and11=elem)?$p['getattr'](elem, 'firstChild'):$and11);
			$pyjs.track.lineno=582;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and13=child)?!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1):$and13));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) {
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
			var $and15,$and16,$and17,child,$and18;
			$pyjs.track={module:'pyjamas.DOM',lineno:587};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=587;
			$pyjs.track.lineno=588;
			child = ($p['bool']($and15=elem)?$p['getattr'](elem, 'lastChild'):$and15);
			$pyjs.track.lineno=589;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and17=child)?!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1):$and17));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()) {
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
			var $and20,$pyjs_try_err,$and22,$and21,$and19;
			$pyjs.track={module:'pyjamas.DOM',lineno:594};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=594;
			$pyjs.track.lineno=595;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=596;
					$pyjs.track.lineno=596;
					var $pyjs__ret = ($p['bool']($and19=element)?$p['getattr'](element, 'innerHtml'):$and19);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} finally { $pyjs.in_try_except -= 1; }
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
					var $pyjs__ret = ($p['bool']($and21=element)?$p['getattr'](element, 'innerHTML'):$and21);
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
			var text,child,$add14,$add11,$add12,$add13;
			$pyjs.track={module:'pyjamas.DOM',lineno:601};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=601;
			$pyjs.track.lineno=604;
			text = '';
			$pyjs.track.lineno=605;
			child = $p['getattr'](element, 'firstChild');
			$pyjs.track.lineno=606;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()) {
				$pyjs.track.lineno=607;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})()) {
					$pyjs.track.lineno=608;
					text = $p['__op_add']($add11=text,$add12=(function(){try{try{$pyjs.in_try_except += 1;
					return $m['getInnerText'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})());
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](child, 'nodeValue'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
					$pyjs.track.lineno=610;
					text = $p['__op_add']($add13=text,$add14=$p['getattr'](child, 'nodeValue'));
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['int']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['getattr'](elem, attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getIntAttribute'].__name__ = 'getIntAttribute';

		$m['getIntAttribute'].__bind_type__ = 0;
		$m['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=619;
		$m['getIntElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:619};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=619;
			$pyjs.track.lineno=620;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return elem['hasAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()) {
				$pyjs.track.lineno=621;
				$pyjs.track.lineno=621;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=622;
			$pyjs.track.lineno=622;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['int']((function(){try{try{$pyjs.in_try_except += 1;
			return elem['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getIntAttribute']($p['getattr'](elem, 'style'), attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

		$m['getIntStyleAttribute'].__bind_type__ = 0;
		$m['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=629;
		$m['getPrevSibling'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $and23,sib,$and24;
			$pyjs.track={module:'pyjamas.DOM',lineno:629};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=629;
			$pyjs.track.lineno=630;
			sib = $p['getattr'](elem, 'previousSibling');
			$pyjs.track.lineno=631;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and23=sib)?!$p['op_eq']($p['getattr'](sib, 'nodeType'), $constant_int_1):$and23));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})()) {
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
			var sib,$and25,$and26;
			$pyjs.track={module:'pyjamas.DOM',lineno:636};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=636;
			$pyjs.track.lineno=637;
			sib = $p['getattr'](elem, 'nextSibling');
			$pyjs.track.lineno=638;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and25=sib)?!$p['op_eq']($p['getattr'](sib, 'nodeType'), $constant_int_1):$and25));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})()) {
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
			var parent;
			$pyjs.track={module:'pyjamas.DOM',lineno:647};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=647;
			$pyjs.track.lineno=648;
			parent = $p['getattr'](elem, 'parentNode');
			$pyjs.track.lineno=649;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](parent, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()) {
				$pyjs.track.lineno=650;
				$pyjs.track.lineno=650;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=651;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['getNodeType'](parent);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})(), $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()) {
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
			var $pyjs_try_err;
			$pyjs.track={module:'pyjamas.DOM',lineno:656};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=656;
			$pyjs.track.lineno=657;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=658;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['hasattr']($p['getattr'](elem, 'style'), 'getPropertyValue');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()) {
						$pyjs.track.lineno=659;
						$pyjs.track.lineno=659;
						var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
						return elem['style']['getPropertyValue']((function(){try{try{$pyjs.in_try_except += 1;
						return (typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['hasattr']($p['getattr'](elem, 'style'), 'getProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) {
						$pyjs.track.lineno=661;
						$pyjs.track.lineno=661;
						var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
						return elem['style']['getProperty']((function(){try{try{$pyjs.in_try_except += 1;
						return (typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=662;
					$pyjs.track.lineno=662;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return elem['style']['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} finally { $pyjs.in_try_except -= 1; }
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
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr']($p['getattr'](elem, 'style'), attr, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
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
			var count,$add15,$add16,child,before;
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
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})()) {
				$pyjs.track.lineno=672;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})()) {
					$pyjs.track.lineno=673;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](count, index));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) {
						$pyjs.track.lineno=674;
						before = child;
						$pyjs.track.lineno=675;
						break;
					}
					$pyjs.track.lineno=677;
					count = $p['__op_add']($add15=count,$add16=$constant_int_1);
				}
				$pyjs.track.lineno=678;
				child = $p['getattr'](child, 'nextSibling');
			}
			$pyjs.track.lineno=680;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](before, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})()) {
				$pyjs.track.lineno=681;
				(function(){try{try{$pyjs.in_try_except += 1;
				return parent['appendChild'](toAdd);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
			}
			else {
				$pyjs.track.lineno=683;
				(function(){try{try{$pyjs.in_try_except += 1;
				return parent['insertBefore'](toAdd, before);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
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

				$pyjs.track={module:'pyjamas.DOM', lineno:693};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=693;
				$pyjs.track.lineno=694;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'child')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})()) {
					$pyjs.track.lineno=695;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['StopIteration']);
				}
				$pyjs.track.lineno=696;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				$pyjs.track.lineno=697;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getNextSibling']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()) : $p['setattr'](self, 'child', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getNextSibling']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()); 
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
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['IterChildrenClass'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
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

				$pyjs.track={module:'pyjamas.DOM', lineno:717};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=717;
				$pyjs.track.lineno=718;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem); 
				$pyjs.track.lineno=719;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('all_nodes', all_nodes) : $p['setattr'](self, 'all_nodes', all_nodes); 
				$pyjs.track.lineno=720;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](all_nodes);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})()) {
					$pyjs.track.lineno=721;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $p['getattr'](elem, 'firstChild')) : $p['setattr'](self, 'child', $p['getattr'](elem, 'firstChild')); 
				}
				else {
					$pyjs.track.lineno=723;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getFirstChild'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) : $p['setattr'](self, 'child', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getFirstChild'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()); 
				}
				$pyjs.track.lineno=724;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null); 
				$pyjs.track.lineno=725;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stack', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})()) : $p['setattr'](self, 'stack', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})()); 
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
				var nextSibling,firstChild;
				$pyjs.track={module:'pyjamas.DOM', lineno:727};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=727;
				$pyjs.track.lineno=728;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'child')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
					$pyjs.track.lineno=729;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['StopIteration']);
				}
				$pyjs.track.lineno=730;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				$pyjs.track.lineno=731;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, 'all_nodes'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})()) {
					$pyjs.track.lineno=732;
					firstChild = $p['getattr']($p['getattr'](self, 'child'), 'firstChild');
					$pyjs.track.lineno=733;
					nextSibling = $p['getattr']($p['getattr'](self, 'child'), 'nextSibling');
				}
				else {
					$pyjs.track.lineno=735;
					firstChild = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getFirstChild']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
					$pyjs.track.lineno=736;
					nextSibling = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getNextSibling']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				}
				$pyjs.track.lineno=737;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](firstChild, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()) {
					$pyjs.track.lineno=738;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_is'](nextSibling, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})()) {
						$pyjs.track.lineno=739;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['stack']['append']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['tuple']([nextSibling, $p['getattr'](self, 'parent')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
					}
					$pyjs.track.lineno=740;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', $p['getattr'](self, 'child')) : $p['setattr'](self, 'parent', $p['getattr'](self, 'child')); 
					$pyjs.track.lineno=741;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', firstChild) : $p['setattr'](self, 'child', firstChild); 
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](nextSibling, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
					$pyjs.track.lineno=743;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', nextSibling) : $p['setattr'](self, 'child', nextSibling); 
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($p['getattr'](self, 'stack'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()) {
					$pyjs.track.lineno=745;
					var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
					return self['stack']['pop']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
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
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['IterWalkChildren'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['walkChildren'].__name__ = 'walkChildren';

		$m['walkChildren'].__bind_type__ = 0;
		$m['walkChildren'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=766;
		$m['isOrHasChild'] = function(parent, child) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:766};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=766;
			$pyjs.track.lineno=767;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()) {
				$pyjs.track.lineno=768;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['compare'](parent, child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})()) {
					$pyjs.track.lineno=769;
					$pyjs.track.lineno=769;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=770;
				child = $p['getattr'](child, 'parentNode');
				$pyjs.track.lineno=771;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool'](child));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})()) {
					$pyjs.track.lineno=772;
					$pyjs.track.lineno=772;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=773;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})()) {
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
			var $and28,$and27;
			$pyjs.track={module:'pyjamas.DOM',lineno:778};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=778;
			$pyjs.track.lineno=780;
			$pyjs.track.lineno=781;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and27=$m['sCaptureElem'])?(function(){try{try{$pyjs.in_try_except += 1;
			return $m['compare'](elem, $m['sCaptureElem']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})():$and27));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})()) {
				$pyjs.track.lineno=782;
				$m['sCaptureElem'] = null;
				$pyjs.track.lineno=783;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof releaseCapture_impl == "undefined"?$m.releaseCapture_impl:releaseCapture_impl)(elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sEventPreviewStack']['remove'](preview);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
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
			var $sub22,$sub23,$sub20,$sub21,$sub24,height,$and29,$add26,$add29,$add28,cur,$add21,$add20,top,$add22,$add25,$add24,$add27,$add19,width,$sub9,offsetLeft,offsetTop,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$or9,$or8,$sub15,$sub14,$and30,$sub16,$add17,$add18,$and31,$and32,$and33,$add32,$add30,$add31,$sub17,$add23,left;
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
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq']($p['getattr'](elem, 'parentNode'), $p['getattr'](elem, 'offsetParent')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})()) {
				$pyjs.track.lineno=808;
				left = $p['__op_sub']($sub9=left,$sub10=$p['getattr']($p['getattr'](elem, 'parentNode'), 'offsetLeft'));
				$pyjs.track.lineno=809;
				top = $p['__op_sub']($sub11=top,$sub12=$p['getattr']($p['getattr'](elem, 'parentNode'), 'offsetTop'));
			}
			$pyjs.track.lineno=811;
			cur = $p['getattr'](elem, 'parentNode');
			$pyjs.track.lineno=812;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and29=cur)?$p['op_eq']($p['getattr'](cur, 'nodeType'), $constant_int_1):$and29));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()) {
				$pyjs.track.lineno=813;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and31=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](cur, 'style');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})())?($p['bool']($and32=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($p['getattr'](cur, 'style'), 'overflow');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})())?($p['bool']($or8=$p['op_eq']($p['getattr']($p['getattr'](cur, 'style'), 'overflow'), 'auto'))?$or8:$p['op_eq']($p['getattr']($p['getattr'](cur, 'style'), 'overflow'), 'scroll')):$and32):$and31));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()) {
					$pyjs.track.lineno=815;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp'](left, $p['getattr'](cur, 'scrollLeft')) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})()) {
						$pyjs.track.lineno=816;
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', left) : $p['setattr'](cur, 'scrollLeft', left); 
					}
					$pyjs.track.lineno=817;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp']($p['__op_add']($add17=left,$add18=width), $p['__op_add']($add19=$p['getattr'](cur, 'scrollLeft'),$add20=$p['getattr'](cur, 'clientWidth'))) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})()) {
						$pyjs.track.lineno=818;
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', $p['__op_sub']($sub13=$p['__op_add']($add21=left,$add22=width),$sub14=$p['getattr'](cur, 'clientWidth'))) : $p['setattr'](cur, 'scrollLeft', $p['__op_sub']($sub13=$p['__op_add']($add21=left,$add22=width),$sub14=$p['getattr'](cur, 'clientWidth'))); 
					}
					$pyjs.track.lineno=819;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp'](top, $p['getattr'](cur, 'scrollTop')) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()) {
						$pyjs.track.lineno=820;
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', top) : $p['setattr'](cur, 'scrollTop', top); 
					}
					$pyjs.track.lineno=821;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp']($p['__op_add']($add23=top,$add24=height), $p['__op_add']($add25=$p['getattr'](cur, 'scrollTop'),$add26=$p['getattr'](cur, 'clientHeight'))) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})()) {
						$pyjs.track.lineno=822;
						cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', $p['__op_sub']($sub15=$p['__op_add']($add27=top,$add28=height),$sub16=$p['getattr'](cur, 'clientHeight'))) : $p['setattr'](cur, 'scrollTop', $p['__op_sub']($sub15=$p['__op_add']($add27=top,$add28=height),$sub16=$p['getattr'](cur, 'clientHeight'))); 
					}
				}
				$pyjs.track.lineno=824;
				offsetLeft = $p['getattr'](cur, 'offsetLeft');
				$pyjs.track.lineno=825;
				offsetTop = $p['getattr'](cur, 'offsetTop');
				$pyjs.track.lineno=826;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']($p['getattr'](cur, 'parentNode'), $p['getattr'](cur, 'offsetParent')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})()) {
					$pyjs.track.lineno=827;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['hasattr']($p['getattr'](cur, 'parentNode'), 'offsetLeft');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()) {
						$pyjs.track.lineno=828;
						offsetLeft = $p['__op_sub']($sub17=offsetLeft,$sub18=$p['getattr']($p['getattr'](cur, 'parentNode'), 'offsetLeft'));
					}
					$pyjs.track.lineno=829;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['hasattr']($p['getattr'](cur, 'parentNode'), 'offsetTop');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})()) {
						$pyjs.track.lineno=830;
						offsetTop = $p['__op_sub']($sub19=offsetTop,$sub20=$p['getattr']($p['getattr'](cur, 'parentNode'), 'offsetTop'));
					}
				}
				$pyjs.track.lineno=832;
				left = $p['__op_add']($add29=left,$add30=$p['__op_sub']($sub21=offsetLeft,$sub22=$p['getattr'](cur, 'scrollLeft')));
				$pyjs.track.lineno=833;
				top = $p['__op_add']($add31=top,$add32=$p['__op_sub']($sub23=offsetTop,$sub24=$p['getattr'](cur, 'scrollTop')));
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
			var c,$add35,$iter1_nextval,$iter1_idx,res,$add36,$add33,$add37,$add34,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$add38,$iter1_type;
			$pyjs.track={module:'pyjamas.DOM',lineno:837};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=837;
			$pyjs.track.lineno=838;
			res = '';
			$pyjs.track.lineno=839;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return name;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				c = $iter1_nextval.$nextval;
				$pyjs.track.lineno=840;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return c['isupper']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()) {
					$pyjs.track.lineno=841;
					res = $p['__op_add']($add35=res,$add36=$p['__op_add']($add33=joiner,$add34=(function(){try{try{$pyjs.in_try_except += 1;
					return c['lower']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})()));
				}
				else {
					$pyjs.track.lineno=843;
					res = $p['__op_add']($add37=res,$add38=c);
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return element['removeAttribute'](attribute);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['setattr'](element, attribute, value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return element['setAttribute'](attribute, value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})();
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
			mf = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
			$pyjs.track.lineno=862;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['setattr'](elem, (function(){try{try{$pyjs.in_try_except += 1;
			return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})(), value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof setCapture_impl == "undefined"?$m.setCapture_impl:setCapture_impl)(elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['set_listener'](element, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})();
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
			var $or11,$or10;
			$pyjs.track={module:'pyjamas.DOM',lineno:895};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=895;
			$pyjs.track.lineno=897;
			while ($p['bool'](!$p['op_is']($p['getattr'](elem, 'firstChild'), null))) {
				$pyjs.track.lineno=898;
				(function(){try{try{$pyjs.in_try_except += 1;
				return elem['removeChild']($p['getattr'](elem, 'firstChild'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
			}
			$pyjs.track.lineno=899;
			(function(){try{try{$pyjs.in_try_except += 1;
			return elem['appendChild']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['createTextNode'](($p['bool']($or10=text)?$or10:''));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return elem['setAttribute'](attr, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['str'](value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['setattr'](elem, attr, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['int'](value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setIntAttribute'].__name__ = 'setIntAttribute';

		$m['setIntAttribute'].__bind_type__ = 0;
		$m['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$pyjs.track.lineno=910;
		$m['setIntStyleAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var mf;
			$pyjs.track={module:'pyjamas.DOM',lineno:910};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=910;
			$pyjs.track.lineno=911;
			mf = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
			$pyjs.track.lineno=912;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr']($p['getattr'](elem, 'style'), 'setProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})()) {
				$pyjs.track.lineno=913;
				(function(){try{try{$pyjs.in_try_except += 1;
				return elem['style']['setProperty']((function(){try{try{$pyjs.in_try_except += 1;
				return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['str'](value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})(), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})();
			}
			else {
				$pyjs.track.lineno=915;
				(function(){try{try{$pyjs.in_try_except += 1;
				return elem['style']['setAttribute']((function(){try{try{$pyjs.in_try_except += 1;
				return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['str'](value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})(), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})();
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
			option = (function(){try{try{$pyjs.in_try_except += 1;
			return select['options']['item'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})();
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

			$pyjs.track={module:'pyjamas.DOM',lineno:923};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=923;
			$pyjs.track.lineno=924;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr']($p['getattr'](element, 'style'), 'setProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})()) {
				$pyjs.track.lineno=925;
				(function(){try{try{$pyjs.in_try_except += 1;
				return element['style']['setProperty']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['mash_name_for_glib'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})(), value, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})();
			}
			else {
				$pyjs.track.lineno=927;
				(function(){try{try{$pyjs.in_try_except += 1;
				return element['style']['setAttribute'](name, value, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})();
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
			var $iter2_nextval,$iter2_type,attr,$iter2_iter,$pyjs__trackstack_size_1,$iter2_idx,val,$iter2_array;
			$pyjs.track={module:'pyjamas.DOM',lineno:929};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=929;
			$pyjs.track.lineno=933;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return kwargs['items']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})();
				attr = $tupleassign2[0];
				val = $tupleassign2[1];
				$pyjs.track.lineno=934;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($p['getattr'](element, 'style'), 'setProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})()) {
					$pyjs.track.lineno=935;
					(function(){try{try{$pyjs.in_try_except += 1;
					return element['style']['setProperty']((function(){try{try{$pyjs.in_try_except += 1;
					return $m['mash_name_for_glib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})(), val, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
				}
				else {
					$pyjs.track.lineno=937;
					(function(){try{try{$pyjs.in_try_except += 1;
					return element['style']['setAttribute'](attr, val, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
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
			var mf,aev,event_name,cb,$iter3_nextval,$iter3_array,mask,$pyjs__trackstack_size_1,$iter3_idx,$iter3_iter,$iter3_type,bit;
			$pyjs.track={module:'pyjamas.DOM',lineno:939};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=939;
			$pyjs.track.lineno=946;
			mask = $p['op_bitxor2']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['getEventsSunk'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})(), bits);
			$pyjs.track.lineno=947;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['eventbitsmap'].__setitem__(element, bits);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
			$pyjs.track.lineno=948;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](mask));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})()) {
				$pyjs.track.lineno=949;
				$pyjs.track.lineno=949;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=951;
			bits = mask;
			$pyjs.track.lineno=953;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](bits));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})()) {
				$pyjs.track.lineno=954;
				$pyjs.track.lineno=954;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=955;
			mf = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
			$pyjs.track.lineno=956;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](mf, '_addEventListener');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})()) {
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof sinkEventsMozilla == "undefined"?$m.sinkEventsMozilla:sinkEventsMozilla)(element, bits);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
			$pyjs.track.lineno=966;
			bit = $constant_int_1;
			$pyjs.track.lineno=967;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](bits);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})()) {
				$pyjs.track.lineno=968;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](bit, bits) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()) {
					$pyjs.track.lineno=969;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['RuntimeError']('sinkEvents: bit outruns bits');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})());
				}
				$pyjs.track.lineno=970;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_bitand2'](bits, bit));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})()) {
					$pyjs.track.lineno=971;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr']($m['Event'], 'eventbits').__getitem__(bit).__getitem__($constant_int_1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
						event_name = $iter3_nextval.$nextval;
						$pyjs.track.lineno=972;
						(function(){try{try{$pyjs.in_try_except += 1;
						return aev(element, event_name, cb);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
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
			temp = (function(){try{try{$pyjs.in_try_except += 1;
			return elem['cloneNode'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})();
			$pyjs.track.lineno=981;
			tempDiv = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
			$pyjs.track.lineno=982;
			(function(){try{try{$pyjs.in_try_except += 1;
			return tempDiv['appendChild'](temp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
			$pyjs.track.lineno=983;
			outer = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getInnerHTML'](tempDiv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})();
			$pyjs.track.lineno=984;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['setInnerHTML'](temp, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})();
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
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof dispatchEventImpl == "undefined"?$m.dispatchEventImpl:dispatchEventImpl)(event, element, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['dispatchEvent'].__name__ = 'dispatchEvent';

		$m['dispatchEvent'].__bind_type__ = 0;
		$m['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
		$pyjs.track.lineno=993;
		$m['previewEvent'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var preview,ret;
			$pyjs.track={module:'pyjamas.DOM',lineno:993};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=993;
			$pyjs.track.lineno=995;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($m['sEventPreviewStack']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})()) {
				$pyjs.track.lineno=996;
				$pyjs.track.lineno=996;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=997;
			preview = $m['sEventPreviewStack'].__getitem__((typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			$pyjs.track.lineno=998;
			ret = (function(){try{try{$pyjs.in_try_except += 1;
			return preview['onEventPreview'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})();
			$pyjs.track.lineno=999;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](ret);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})()) {
				$pyjs.track.lineno=1000;
				$pyjs.track.lineno=1000;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=1003;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})()) {
				$pyjs.track.lineno=1004;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['eventCancelBubble'](evt, true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})();
				$pyjs.track.lineno=1005;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['eventPreventDefault'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})();
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
			var prevCurrentEvent;
			$pyjs.track={module:'pyjamas.DOM',lineno:1017};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1017;
			$pyjs.track.lineno=1018;
			$pyjs.track.lineno=1019;
			$pyjs.track.lineno=1020;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](element, $m['sCaptureElem']));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})()) {
				$pyjs.track.lineno=1021;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})(), 'losecapture'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})()) {
					$pyjs.track.lineno=1023;
					$m['sCaptureElem'] = null;
				}
			}
			$pyjs.track.lineno=1025;
			prevCurrentEvent = $m['currentEvent'];
			$pyjs.track.lineno=1026;
			$m['currentEvent'] = event;
			$pyjs.track.lineno=1027;
			(function(){try{try{$pyjs.in_try_except += 1;
			return listener['onBrowserEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})();
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
			var option;
			$pyjs.track={module:'pyjamas.DOM',lineno:1035};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=1035;
			$pyjs.track.lineno=1036;
			option = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('OPTION');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})();
			$pyjs.track.lineno=1037;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['setInnerText'](option, item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})();
			$pyjs.track.lineno=1038;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_is'](value, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})()) {
				$pyjs.track.lineno=1039;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setAttribute'](option, 'value', value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})();
			}
			$pyjs.track.lineno=1040;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](index, (typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})()) {
				$pyjs.track.lineno=1041;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['appendChild'](select, option);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})();
			}
			else {
				$pyjs.track.lineno=1043;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['insertChild'](select, option, index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})();
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
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']($p['getattr']($m['pyjd'], 'is_desktop')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})()) {
			$pyjs.track.lineno=1060;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['init']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
