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
		$m.__track_lines__[2] = 'pyjamas.DOM.py, line 2:\n    #';
		$m.__track_lines__[11] = 'pyjamas.DOM.py, line 11:\n    # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.';
		$m.__track_lines__[17] = 'pyjamas.DOM.py, line 17:\n    """';
		$m.__track_lines__[18] = 'pyjamas.DOM.py, line 18:\n    ';
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
		$m.__track_lines__[35] = 'pyjamas.DOM.py, line 35:\n    ONCHANGE,';
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
		$m.__track_lines__[81] = 'pyjamas.DOM.py, line 17:\n    """ ... def init():';
		$m.__track_lines__[93] = 'pyjamas.DOM.py, line 93:\n    ';
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
		$m.__track_lines__[106] = 'pyjamas.DOM.py, line 106:\n    ';
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
		$m.__track_lines__[142] = 'pyjamas.DOM.py, line 142:\n    ';
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
		$m.__track_lines__[180] = 'pyjamas.DOM.py, line 180:\n    ';
		$m.__track_lines__[181] = 'pyjamas.DOM.py, line 181:\n    global sCaptureElem';
		$m.__track_lines__[183] = 'pyjamas.DOM.py, line 183:\n    if event is None:';
		$m.__track_lines__[184] = 'pyjamas.DOM.py, line 184:\n    event = wnd().event';
		$m.__track_lines__[186] = 'pyjamas.DOM.py, line 186:\n    try:';
		$m.__track_lines__[187] = 'pyjamas.DOM.py, line 187:\n    event = get_main_frame().gobject_wrap(event) # webkit HACK!';
		$m.__track_lines__[188] = 'pyjamas.DOM.py, line 188:\n    except:';
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
		$m.__track_lines__[217] = 'pyjamas.DOM.py, line 93:\n     ... def addEventPreview(preview):';
		$m.__track_lines__[221] = 'pyjamas.DOM.py, line 221:\n    def appendChild(parent, child):';
		$m.__track_lines__[223] = 'pyjamas.DOM.py, line 223:\n    parent.appendChild(child)';
		$m.__track_lines__[225] = 'pyjamas.DOM.py, line 225:\n    def removeChild(parent, child):';
		$m.__track_lines__[227] = 'pyjamas.DOM.py, line 227:\n    parent.removeChild(child)';
		$m.__track_lines__[230] = 'pyjamas.DOM.py, line 230:\n    def replaceChild(parent, newChild, oldChild):';
		$m.__track_lines__[231] = 'pyjamas.DOM.py, line 231:\n    parent.replaceChild(newChild, oldChild)';
		$m.__track_lines__[234] = 'pyjamas.DOM.py, line 96:\n    mf._addEventListener(body, "click", cb) ... def buttonClick(element):';
		$m.__track_lines__[241] = 'pyjamas.DOM.py, line 101:\n    mf._addEventListener(body, "mousemove", cb) ... def compare(elem1, elem2):';
		$m.__track_lines__[247] = 'pyjamas.DOM.py, line 247:\n    def createAnchor():';
		$m.__track_lines__[248] = 'pyjamas.DOM.py, line 248:\n    return createElement("A")';
		$m.__track_lines__[251] = 'pyjamas.DOM.py, line 251:\n    def createButton():';
		$m.__track_lines__[252] = 'pyjamas.DOM.py, line 252:\n    return createElement("button")';
		$m.__track_lines__[255] = 'pyjamas.DOM.py, line 255:\n    def createCol():';
		$m.__track_lines__[256] = 'pyjamas.DOM.py, line 256:\n    return createElement("col")';
		$m.__track_lines__[259] = 'pyjamas.DOM.py, line 259:\n    def createDiv():';
		$m.__track_lines__[260] = 'pyjamas.DOM.py, line 260:\n    return createElement("div")';
		$m.__track_lines__[263] = 'pyjamas.DOM.py, line 106:\n     ... def createElement(tag):';
		$m.__track_lines__[265] = 'pyjamas.DOM.py, line 265:\n    ';
		$m.__track_lines__[266] = 'pyjamas.DOM.py, line 266:\n    ';
		$m.__track_lines__[267] = 'pyjamas.DOM.py, line 267:\n    def createFieldSet():';
		$m.__track_lines__[268] = 'pyjamas.DOM.py, line 268:\n    return createElement("fieldset")';
		$m.__track_lines__[269] = 'pyjamas.DOM.py, line 269:\n    ';
		$m.__track_lines__[271] = 'pyjamas.DOM.py, line 271:\n    def createForm():';
		$m.__track_lines__[272] = 'pyjamas.DOM.py, line 272:\n    return createElement("form")';
		$m.__track_lines__[275] = 'pyjamas.DOM.py, line 275:\n    def createIFrame():';
		$m.__track_lines__[276] = 'pyjamas.DOM.py, line 276:\n    return createElement("iframe")';
		$m.__track_lines__[277] = 'pyjamas.DOM.py, line 277:\n    ';
		$m.__track_lines__[279] = 'pyjamas.DOM.py, line 279:\n    def createImg():';
		$m.__track_lines__[280] = 'pyjamas.DOM.py, line 280:\n    return createElement("img")';
		$m.__track_lines__[283] = 'pyjamas.DOM.py, line 283:\n    def createInputCheck():';
		$m.__track_lines__[284] = 'pyjamas.DOM.py, line 284:\n    return createInputElement("checkbox")';
		$m.__track_lines__[287] = 'pyjamas.DOM.py, line 111:\n    def _dispatchEvent(sender, evt, useCap): ... def createInputElement(elementType):';
		$m.__track_lines__[293] = 'pyjamas.DOM.py, line 293:\n    def createInputPassword():';
		$m.__track_lines__[294] = 'pyjamas.DOM.py, line 294:\n    return createInputElement("password")';
		$m.__track_lines__[297] = 'pyjamas.DOM.py, line 118:\n    evt = get_main_frame().gobject_wrap(evt) # webkit HACK! ... def createInputRadio(group):';
		$m.__track_lines__[299] = 'pyjamas.DOM.py, line 299:\n    e.name = group';
		$m.__track_lines__[303] = 'pyjamas.DOM.py, line 303:\n    def createInputText():';
		$m.__track_lines__[304] = 'pyjamas.DOM.py, line 304:\n    return createInputElement("text")';
		$m.__track_lines__[307] = 'pyjamas.DOM.py, line 307:\n    def createLabel():';
		$m.__track_lines__[308] = 'pyjamas.DOM.py, line 308:\n    return createElement("label")';
		$m.__track_lines__[311] = 'pyjamas.DOM.py, line 311:\n    def createLegend():';
		$m.__track_lines__[312] = 'pyjamas.DOM.py, line 312:\n    return createElement("legend")';
		$m.__track_lines__[315] = 'pyjamas.DOM.py, line 315:\n    def createOptions():';
		$m.__track_lines__[316] = 'pyjamas.DOM.py, line 316:\n    return createElement("options")';
		$m.__track_lines__[317] = 'pyjamas.DOM.py, line 317:\n    ';
		$m.__track_lines__[319] = 'pyjamas.DOM.py, line 319:\n    def createSelect():';
		$m.__track_lines__[320] = 'pyjamas.DOM.py, line 320:\n    return createElement("select")';
		$m.__track_lines__[323] = 'pyjamas.DOM.py, line 323:\n    def createSpan():';
		$m.__track_lines__[324] = 'pyjamas.DOM.py, line 324:\n    return createElement("span")';
		$m.__track_lines__[325] = 'pyjamas.DOM.py, line 325:\n    ';
		$m.__track_lines__[327] = 'pyjamas.DOM.py, line 327:\n    def createTable():';
		$m.__track_lines__[328] = 'pyjamas.DOM.py, line 328:\n    return createElement("table")';
		$m.__track_lines__[331] = 'pyjamas.DOM.py, line 331:\n    def createTBody():';
		$m.__track_lines__[332] = 'pyjamas.DOM.py, line 332:\n    return createElement("tbody")';
		$m.__track_lines__[335] = 'pyjamas.DOM.py, line 335:\n    def createTD():';
		$m.__track_lines__[336] = 'pyjamas.DOM.py, line 336:\n    return createElement("td")';
		$m.__track_lines__[339] = 'pyjamas.DOM.py, line 339:\n    def createTextArea():';
		$m.__track_lines__[340] = 'pyjamas.DOM.py, line 340:\n    return createElement("textarea")';
		$m.__track_lines__[342] = 'pyjamas.DOM.py, line 342:\n    ';
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
		$m.__track_lines__[367] = 'pyjamas.DOM.py, line 367:\n    def eventGetClientX(evt):';
		$m.__track_lines__[368] = 'pyjamas.DOM.py, line 368:\n    return evt.clientX';
		$m.__track_lines__[371] = 'pyjamas.DOM.py, line 371:\n    def eventGetClientY(evt):';
		$m.__track_lines__[372] = 'pyjamas.DOM.py, line 372:\n    return evt.clientY';
		$m.__track_lines__[375] = 'pyjamas.DOM.py, line 375:\n    def eventGetCtrlKey(evt):';
		$m.__track_lines__[376] = 'pyjamas.DOM.py, line 376:\n    return evt.ctrlKey';
		$m.__track_lines__[379] = 'pyjamas.DOM.py, line 126:\n    listener = get_listener(cap) ... def eventGetFromElement(evt):';
		$m.__track_lines__[386] = 'pyjamas.DOM.py, line 131:\n    return ... def eventGetKeyCode(evt):';
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
		$m.__track_lines__[410] = 'pyjamas.DOM.py, line 137:\n    curElem = None ... def eventGetTarget(event):';
		$m.__track_lines__[414] = 'pyjamas.DOM.py, line 142:\n     ... def eventGetToElement(evt):';
		$m.__track_lines__[423] = 'pyjamas.DOM.py, line 423:\n    def eventGetType(event):';
		$m.__track_lines__[424] = 'pyjamas.DOM.py, line 424:\n    return event.type';
		$m.__track_lines__[426] = 'pyjamas.DOM.py, line 426:\n    def eventGetTypeInt(event):';
		$m.__track_lines__[427] = 'pyjamas.DOM.py, line 427:\n    return Event.eventmap.get(str(event.type), 0)';
		$m.__track_lines__[430] = 'pyjamas.DOM.py, line 430:\n    def eventGetTypeString(event):';
		$m.__track_lines__[431] = 'pyjamas.DOM.py, line 431:\n    return eventGetType(event)';
		$m.__track_lines__[432] = 'pyjamas.DOM.py, line 432:\n    ';
		$m.__track_lines__[434] = 'pyjamas.DOM.py, line 434:\n    def eventPreventDefault(evt):';
		$m.__track_lines__[435] = 'pyjamas.DOM.py, line 435:\n    evt.preventDefault()';
		$m.__track_lines__[438] = 'pyjamas.DOM.py, line 438:\n    def eventSetKeyCode(evt, key):';
		$m.__track_lines__[439] = 'pyjamas.DOM.py, line 439:\n    evt.keyCode = key';
		$m.__track_lines__[442] = 'pyjamas.DOM.py, line 147:\n    if not _dispatchCapturedEvent(evt): ... def eventToString(evt):';
		$m.__track_lines__[446] = 'pyjamas.DOM.py, line 446:\n    def iframeGetSrc(elem):';
		$m.__track_lines__[447] = 'pyjamas.DOM.py, line 447:\n    return elem.src';
		$m.__track_lines__[450] = 'pyjamas.DOM.py, line 11:\n    # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. ... def getAbsoluteLeft(elem):';
		$m.__track_lines__[464] = 'pyjamas.DOM.py, line 35:\n    ONCHANGE, ... def getAbsoluteTop(elem):';
		$m.__track_lines__[474] = 'pyjamas.DOM.py, line 474:\n    ';
		$m.__track_lines__[478] = "pyjamas.DOM.py, line 174:\n    lcEvent = doc().createEvent('UIEvent') ... def getAttribute(elem, attr):";
		$m.__track_lines__[479] = 'pyjamas.DOM.py, line 479:\n    attr = getattr(elem, attr)';
		$m.__track_lines__[484] = 'pyjamas.DOM.py, line 484:\n    ';
		$m.__track_lines__[485] = 'pyjamas.DOM.py, line 180:\n     ... def getElemAttribute(elem, attr):';
		$m.__track_lines__[492] = 'pyjamas.DOM.py, line 183:\n    if event is None: ... def getBooleanAttribute(elem, attr):';
		$m.__track_lines__[495] = 'pyjamas.DOM.py, line 495:\n    ';
		$m.__track_lines__[497] = 'pyjamas.DOM.py, line 497:\n    def getBooleanElemAttribute(elem, attr):';
		$m.__track_lines__[498] = 'pyjamas.DOM.py, line 498:\n    if not elem.hasAttribute(attr):';
		$m.__track_lines__[499] = 'pyjamas.DOM.py, line 499:\n    return None';
		$m.__track_lines__[500] = 'pyjamas.DOM.py, line 500:\n    return bool(elem.getAttribute(attr))';
		$m.__track_lines__[503] = 'pyjamas.DOM.py, line 503:\n    def getCaptureElement():';
		$m.__track_lines__[508] = 'pyjamas.DOM.py, line 194:\n    if et == "resize": ... def getChild(elem, index):';
		$m.__track_lines__[513] = 'pyjamas.DOM.py, line 513:\n    child = elem.firstChild';
		$m.__track_lines__[518] = 'pyjamas.DOM.py, line 518:\n    return child';
		$m.__track_lines__[523] = 'pyjamas.DOM.py, line 523:\n    ';
		$m.__track_lines__[524] = 'pyjamas.DOM.py, line 524:\n    def getChildCount(elem):';
		$m.__track_lines__[527] = 'pyjamas.DOM.py, line 527:\n    over all the children of that element and counts them.';
		$m.__track_lines__[538] = 'pyjamas.DOM.py, line 538:\n    def getChildIndex(parent, toFind):';
		$m.__track_lines__[539] = 'pyjamas.DOM.py, line 539:\n    """';
		$m.__track_lines__[540] = 'pyjamas.DOM.py, line 540:\n    Return the index of the given child in the given parent.';
		$m.__track_lines__[541] = 'pyjamas.DOM.py, line 541:\n    ';
		$m.__track_lines__[542] = 'pyjamas.DOM.py, line 542:\n    This performs a linear search.';
		$m.__track_lines__[543] = 'pyjamas.DOM.py, line 543:\n    """';
		$m.__track_lines__[544] = 'pyjamas.DOM.py, line 544:\n    count = 0';
		$m.__track_lines__[546] = 'pyjamas.DOM.py, line 546:\n    while child:';
		$m.__track_lines__[547] = 'pyjamas.DOM.py, line 547:\n    if child == toFind:';
		$m.__track_lines__[550] = 'pyjamas.DOM.py, line 550:\n    count += 1';
		$m.__track_lines__[556] = 'pyjamas.DOM.py, line 247:\n    def createAnchor(): ... def getElementById(id):';
		$m.__track_lines__[561] = 'pyjamas.DOM.py, line 561:\n    ';
		$m.__track_lines__[563] = 'pyjamas.DOM.py, line 256:\n    return createElement("col") ... def getEventListener(element):';
		$m.__track_lines__[564] = 'pyjamas.DOM.py, line 564:\n    """';
		$m.__track_lines__[565] = 'pyjamas.DOM.py, line 565:\n    See setEventListener() for more information.';
		$m.__track_lines__[566] = 'pyjamas.DOM.py, line 566:\n    """';
		$m.__track_lines__[567] = 'pyjamas.DOM.py, line 567:\n    return get_listener(element)';
		$m.__track_lines__[568] = 'pyjamas.DOM.py, line 568:\n    ';
		$m.__track_lines__[569] = 'pyjamas.DOM.py, line 569:\n    eventbitsmap = {}';
		$m.__track_lines__[570] = 'pyjamas.DOM.py, line 570:\n    ';
		$m.__track_lines__[572] = 'pyjamas.DOM.py, line 572:\n    def getEventsSunk(element):';
		$m.__track_lines__[576] = 'pyjamas.DOM.py, line 576:\n    """';
		$m.__track_lines__[579] = 'pyjamas.DOM.py, line 579:\n    ';
		$m.__track_lines__[580] = 'pyjamas.DOM.py, line 580:\n    def getFirstChild(elem):';
		$m.__track_lines__[581] = 'pyjamas.DOM.py, line 581:\n    child = elem and elem.firstChild';
		$m.__track_lines__[582] = 'pyjamas.DOM.py, line 582:\n    while child and child.nodeType != 1:';
		$m.__track_lines__[583] = 'pyjamas.DOM.py, line 583:\n    child = child.nextSibling';
		$m.__track_lines__[584] = 'pyjamas.DOM.py, line 584:\n    return child';
		$m.__track_lines__[585] = 'pyjamas.DOM.py, line 585:\n    ';
		$m.__track_lines__[586] = 'pyjamas.DOM.py, line 586:\n    ';
		$m.__track_lines__[587] = 'pyjamas.DOM.py, line 587:\n    def getLastChild(elem):';
		$m.__track_lines__[588] = 'pyjamas.DOM.py, line 588:\n    child = elem and elem.lastChild';
		$m.__track_lines__[589] = 'pyjamas.DOM.py, line 589:\n    while child and child.nodeType != 1:';
		$m.__track_lines__[590] = 'pyjamas.DOM.py, line 590:\n    child = child.previousSibling';
		$m.__track_lines__[591] = 'pyjamas.DOM.py, line 591:\n    return child';
		$m.__track_lines__[592] = 'pyjamas.DOM.py, line 592:\n    ';
		$m.__track_lines__[593] = 'pyjamas.DOM.py, line 593:\n    ';
		$m.__track_lines__[594] = 'pyjamas.DOM.py, line 594:\n    def getInnerHTML(element):';
		$m.__track_lines__[595] = 'pyjamas.DOM.py, line 595:\n    try:';
		$m.__track_lines__[596] = 'pyjamas.DOM.py, line 596:\n    return element and element.innerHtml # webkit. erk.';
		$m.__track_lines__[597] = 'pyjamas.DOM.py, line 597:\n    except:';
		$m.__track_lines__[599] = 'pyjamas.DOM.py, line 599:\n    ';
		$m.__track_lines__[601] = 'pyjamas.DOM.py, line 283:\n    def createInputCheck(): ... def getInnerText(element):';
		$m.__track_lines__[615] = 'pyjamas.DOM.py, line 299:\n    e.name = group ... def getIntAttribute(elem, attr):';
		$m.__track_lines__[619] = 'pyjamas.DOM.py, line 619:\n    def getIntElemAttribute(elem, attr):';
		$m.__track_lines__[620] = 'pyjamas.DOM.py, line 620:\n    if not elem.hasAttribute(attr):';
		$m.__track_lines__[621] = 'pyjamas.DOM.py, line 621:\n    return None';
		$m.__track_lines__[622] = 'pyjamas.DOM.py, line 622:\n    return int(elem.getAttribute(attr))';
		$m.__track_lines__[625] = 'pyjamas.DOM.py, line 308:\n    return createElement("label") ... def getIntStyleAttribute(elem, attr):';
		$m.__track_lines__[629] = 'pyjamas.DOM.py, line 629:\n    def getPrevSibling(elem):';
		$m.__track_lines__[630] = 'pyjamas.DOM.py, line 630:\n    sib = elem.previousSibling';
		$m.__track_lines__[631] = 'pyjamas.DOM.py, line 631:\n    while sib and sib.nodeType != 1:';
		$m.__track_lines__[632] = 'pyjamas.DOM.py, line 632:\n    sib = sib.previousSibling';
		$m.__track_lines__[633] = 'pyjamas.DOM.py, line 633:\n    return sib';
		$m.__track_lines__[636] = 'pyjamas.DOM.py, line 317:\n     ... def getNextSibling(elem):';
		$m.__track_lines__[643] = 'pyjamas.DOM.py, line 643:\n    def getNodeType(elem):';
		$m.__track_lines__[644] = 'pyjamas.DOM.py, line 644:\n    return elem.nodeType';
		$m.__track_lines__[647] = 'pyjamas.DOM.py, line 325:\n     ... def getParent(elem):';
		$m.__track_lines__[656] = 'pyjamas.DOM.py, line 336:\n    return createElement("td") ... def getStyleAttribute(elem, attr):';
		$m.__track_lines__[667] = 'pyjamas.DOM.py, line 342:\n     ... def insertChild(parent, toAdd, index):';
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
		$m.__track_lines__[707] = 'pyjamas.DOM.py, line 363:\n    def eventGetButton(evt): ... def iterChildren(elem):';
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
		$m.__track_lines__[757] = 'pyjamas.DOM.py, line 391:\n    return evt.repeat ... def walkChildren(elem):';
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
		$m.__track_lines__[789] = 'pyjamas.DOM.py, line 432:\n     ... def removeEventPreview(preview):';
		$m.__track_lines__[793] = 'pyjamas.DOM.py, line 793:\n    def getOffsetHeight(elem):';
		$m.__track_lines__[794] = 'pyjamas.DOM.py, line 794:\n    return elem.offsetHeight';
		$m.__track_lines__[797] = 'pyjamas.DOM.py, line 797:\n    def getOffsetWidth(elem):';
		$m.__track_lines__[798] = 'pyjamas.DOM.py, line 798:\n    return elem.offsetWidth';
		$m.__track_lines__[801] = 'pyjamas.DOM.py, line 435:\n    evt.preventDefault() ... def scrollIntoView(elem):';
		$m.__track_lines__[837] = "pyjamas.DOM.py, line 837:\n    def mash_name_for_glib(name, joiner='-'):";
		$m.__track_lines__[838] = "pyjamas.DOM.py, line 838:\n    res = ''";
		$m.__track_lines__[839] = 'pyjamas.DOM.py, line 839:\n    for c in name:';
		$m.__track_lines__[840] = 'pyjamas.DOM.py, line 840:\n    if c.isupper():';
		$m.__track_lines__[841] = 'pyjamas.DOM.py, line 841:\n    res += joiner + c.lower()';
		$m.__track_lines__[843] = 'pyjamas.DOM.py, line 843:\n    res += c';
		$m.__track_lines__[844] = 'pyjamas.DOM.py, line 844:\n    return res';
		$m.__track_lines__[847] = 'pyjamas.DOM.py, line 474:\n     ... def removeAttribute(element, attribute):';
		$m.__track_lines__[851] = 'pyjamas.DOM.py, line 479:\n    attr = getattr(elem, attr) ... def setAttribute(element, attribute, value):';
		$m.__track_lines__[856] = 'pyjamas.DOM.py, line 856:\n    def setElemAttribute(element, attribute, value):';
		$m.__track_lines__[857] = 'pyjamas.DOM.py, line 857:\n    element.setAttribute(attribute, value)';
		$m.__track_lines__[860] = 'pyjamas.DOM.py, line 484:\n     ... def setBooleanAttribute(elem, attr, value):';
		$m.__track_lines__[865] = 'pyjamas.DOM.py, line 865:\n    def setCapture(elem):';
		$m.__track_lines__[866] = 'pyjamas.DOM.py, line 866:\n    global sCaptureElem';
		$m.__track_lines__[867] = 'pyjamas.DOM.py, line 867:\n    sCaptureElem = elem';
		$m.__track_lines__[869] = 'pyjamas.DOM.py, line 869:\n    setCapture_impl(elem)';
		$m.__track_lines__[872] = 'pyjamas.DOM.py, line 872:\n    def setCapture_impl(elem): pass';
		$m.__track_lines__[874] = 'pyjamas.DOM.py, line 495:\n     ... def setEventListener(element, listener):';
		$m.__track_lines__[884] = 'pyjamas.DOM.py, line 884:\n    def createTextNode(txt):';
		$m.__track_lines__[885] = 'pyjamas.DOM.py, line 885:\n    return doc().createTextNode(txt)';
		$m.__track_lines__[888] = 'pyjamas.DOM.py, line 500:\n    return bool(elem.getAttribute(attr)) ... def setInnerHTML(element, html):';
		$m.__track_lines__[895] = 'pyjamas.DOM.py, line 503:\n    def getCaptureElement(): ... def setInnerText(elem, text):';
		$m.__track_lines__[902] = 'pyjamas.DOM.py, line 902:\n    def setIntElemAttribute(elem, attr, value):';
		$m.__track_lines__[903] = 'pyjamas.DOM.py, line 903:\n    elem.setAttribute(attr, str(value))';
		$m.__track_lines__[906] = 'pyjamas.DOM.py, line 513:\n    child = elem.firstChild ... def setIntAttribute(elem, attr, value):';
		$m.__track_lines__[910] = 'pyjamas.DOM.py, line 518:\n    return child ... def setIntStyleAttribute(elem, attr, value):';
		$m.__track_lines__[918] = 'pyjamas.DOM.py, line 523:\n     ... def setOptionText(select, text, index):';
		$m.__track_lines__[923] = 'pyjamas.DOM.py, line 527:\n    over all the children of that element and counts them. ... def setStyleAttribute(element, name, value):';
		$m.__track_lines__[929] = 'pyjamas.DOM.py, line 929:\n    def setStyleAttributes(element, **kwargs):';
		$m.__track_lines__[933] = 'pyjamas.DOM.py, line 933:\n    for attr, val in kwargs.items():';
		$m.__track_lines__[934] = "pyjamas.DOM.py, line 934:\n    if hasattr(element.style, 'setProperty'):";
		$m.__track_lines__[935] = 'pyjamas.DOM.py, line 935:\n    element.style.setProperty(mash_name_for_glib(attr), val, "")';
		$m.__track_lines__[937] = 'pyjamas.DOM.py, line 937:\n    element.style.setAttribute(attr, val, "")';
		$m.__track_lines__[939] = 'pyjamas.DOM.py, line 538:\n    def getChildIndex(parent, toFind): ... def sinkEvents(element, bits):';
		$m.__track_lines__[976] = 'pyjamas.DOM.py, line 976:\n    def sinkEventsMozilla(element, bits):';
		$m.__track_lines__[977] = 'pyjamas.DOM.py, line 977:\n    pass';
		$m.__track_lines__[979] = 'pyjamas.DOM.py, line 550:\n    count += 1 ... def toString(elem):';
		$m.__track_lines__[989] = 'pyjamas.DOM.py, line 561:\n     ... def dispatchEvent(event, element, listener):';
		$m.__track_lines__[993] = 'pyjamas.DOM.py, line 564:\n    """ ... def previewEvent(evt):';
		$m.__track_lines__[1011] = 'pyjamas.DOM.py, line 576:\n    """ ... def dispatchEventAndCatch(evt, elem, listener, handler):';
		$m.__track_lines__[1014] = 'pyjamas.DOM.py, line 1014:\n    currentEvent = None';
		$m.__track_lines__[1017] = 'pyjamas.DOM.py, line 579:\n     ... def dispatchEventImpl(event, element, listener):';
		$m.__track_lines__[1031] = 'pyjamas.DOM.py, line 589:\n    while child and child.nodeType != 1: ... def eventGetCurrentEvent():';
		$m.__track_lines__[1035] = 'pyjamas.DOM.py, line 592:\n     ... def insertListItem(select, item, value, index):';
		$m.__track_lines__[1046] = 'pyjamas.DOM.py, line 1046:\n    def getBodyOffsetTop():';
		$m.__track_lines__[1047] = 'pyjamas.DOM.py, line 1047:\n    return 0';
		$m.__track_lines__[1050] = 'pyjamas.DOM.py, line 1050:\n    def getBodyOffsetLeft():';
		$m.__track_lines__[1051] = 'pyjamas.DOM.py, line 1051:\n    return 0';
		$m.__track_lines__[1053] = 'pyjamas.DOM.py, line 57:\n    DOCUMENT_NODE = 9 ... def eventGetMouseWheelVelocityY(evt):';
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
			var mousewheel;
			mousewheel = $p['getattr']($m['Event'], 'eventbits').__getitem__($p['getattr']($m['Event'], 'eventmap').__getitem__('mousewheel')).__getitem__($constant_int_0);

    // Set up capture event dispatchers.
    $wnd.__dispatchCapturedMouseEvent = function(evt) {
        if ($wnd.__dispatchCapturedEvent(evt)) {
            var cap = $m.getCaptureElement();
            if (cap && cap.__listener) {
                $m.dispatchEvent(evt, cap, cap.__listener);
                evt.stopPropagation();
            }
        }
    };

    $wnd.__dispatchCapturedEvent = function(evt) {
        if (!$m.previewEvent(evt).valueOf()) {
            evt.stopPropagation();
            evt.preventDefault();
            return false;
        }

        return true;
        };

    $wnd.addEventListener(
        'mouseout',
        function(evt){
            var cap = $m.getCaptureElement();
            if (cap) {
                if (!evt.relatedTarget) {
                    // When the mouse leaves the window during capture,
                    // release capture and synthesize an 'onlosecapture' event.
                    $m['sCaptureElem'] = null;
                    if (cap.__listener) {
                        var lcEvent = $doc.createEvent('UIEvent');
                        lcEvent.initUIEvent('losecapture', false, false,
                                             $wnd, 0);
                        $m.dispatchEvent(lcEvent, cap, cap.__listener);
                    }
                }
            }
        },
        true
    );

    var dcme = $wnd.__dispatchCapturedMouseEvent;
    var dce = $wnd.__dispatchCapturedEvent;

    $wnd.addEventListener('click', dcme, true);
    $wnd.addEventListener('dblclick', dcme, true);
    $wnd.addEventListener('mousedown', dcme, true);
    $wnd.addEventListener('mouseup', dcme, true);
    $wnd.addEventListener('mousemove', dcme, true);
    $wnd.addEventListener('keydown', dce, true);
    $wnd.addEventListener('keyup', dce, true);
    $wnd.addEventListener('keypress', dce, true);
    
    $wnd.__dispatchEvent = function(evt) {
    
        var listener, curElem = this;
        
        while (curElem && !(listener = curElem.__listener)) {
            curElem = curElem.parentNode;
        }
        if (curElem && curElem.nodeType != 1) {
            curElem = null;
        }
    
        if (listener) {
            $m.dispatchEvent(evt, curElem, listener);
        }
    };
    var dcme = $wnd.__dispatchCapturedMouseEvent;
    $wnd.addEventListener(mousewheel, dcme, true);
    
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs.track.lineno=97;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs.track.lineno=98;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs.track.lineno=99;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs.track.lineno=100;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs.track.lineno=101;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs.track.lineno=102;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs.track.lineno=103;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs.track.lineno=104;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs.track.lineno=105;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.mf['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()['gobject_wrap'](sender);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
					$pyjs.track.lineno=118;
					evt = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()['gobject_wrap'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.track.lineno=126;
			listener = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs.track.lineno=127;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and1=cap)?!$p['op_is'](listener, null):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs.track.lineno=129;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs.track.lineno=130;
				(function(){try{try{$pyjs.in_try_except += 1;
				return evt['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})(), null):$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
				$pyjs.track.lineno=135;
				curElem = (function(){try{try{$pyjs.in_try_except += 1;
				return (typeof getParent == "undefined"?$m.getParent:getParent)(curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			}
			$pyjs.track.lineno=136;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and5=curElem)?!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof getNodeType == "undefined"?$m.getNodeType:getNodeType)(curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), $constant_int_1):$and5));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
				$pyjs.track.lineno=137;
				curElem = null;
			}
			$pyjs.track.lineno=139;
			listener = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs.track.lineno=140;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_is'](listener, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
				$pyjs.track.lineno=141;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, curElem, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs.track.lineno=150;
			listener = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs.track.lineno=151;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and7=cap)?!$p['op_is'](listener, null):$and7));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
				$pyjs.track.lineno=152;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				$pyjs.track.lineno=154;
				(function(){try{try{$pyjs.in_try_except += 1;
				return evt['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs.track.lineno=160;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](cap, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs.track.lineno=169;
			listener = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs.track.lineno=170;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](listener, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()['gobject_wrap'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs.track.lineno=194;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](et, 'resize'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs.track.lineno=195;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['onResize']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
				$pyjs.track.lineno=199;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['_dispatchCapturedMouseoutEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
			}
			$pyjs.track.lineno=200;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or1=$p['op_eq'](et, 'keyup'))?$or1:($p['bool']($or2=$p['op_eq'](et, 'keydown'))?$or2:($p['bool']($or3=$p['op_eq'](et, 'keypress'))?$or3:$p['op_eq'](et, 'change')))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
				$pyjs.track.lineno=202;
				$pyjs.track.lineno=202;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=204;
				$pyjs.track.lineno=204;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['_dispatchCapturedMouseEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs.track.lineno=211;
				(function(){try{try{$pyjs.in_try_except += 1;
				return event['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs.track.lineno=212;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof eventPreventDefault == "undefined"?$m.eventPreventDefault:eventPreventDefault)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
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
			$pyjs.track.lineno=93;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sEventPreviewStack']['append'](preview);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['replaceChild'].__name__ = 'replaceChild';

		$m['replaceChild'].__bind_type__ = 0;
		$m['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
		$pyjs.track.lineno=234;
		$m['buttonClick'] = function(button) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:234};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=234;
			$pyjs.track.lineno=96;

    button.click();
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['buttonClick'].__name__ = 'buttonClick';

		$m['buttonClick'].__bind_type__ = 0;
		$m['buttonClick'].__args__ = [null,null,['button']];
		$pyjs.track.lineno=241;
		$m['compare'] = function(elem1, elem2) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);


    return (elem1 == elem2);
    
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
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


    return $doc.createElement(tag);
    
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
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


    var e = $doc.createElement("INPUT");
    e.type = elementType;
    return e;
    
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
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


    var elem = $doc.createElement("INPUT");
    elem.type = 'radio';
    elem.name = group;
    return elem;
    
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
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


    var button = evt.button;
    if(button == 0){
        return 1;
    } else {
        return button;
    }
    
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


    return evt.fromElement ? evt.fromElement : null;
    
		};
		$m['eventGetFromElement'].__name__ = 'eventGetFromElement';

		$m['eventGetFromElement'].__bind_type__ = 0;
		$m['eventGetFromElement'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=386;
		$m['eventGetKeyCode'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    return evt.which ? evt.which :
            (evt.keyCode ? evt.keyCode : 0);
    
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


    return event.target ? event.target : null;
    
		};
		$m['eventGetTarget'].__name__ = 'eventGetTarget';

		$m['eventGetTarget'].__bind_type__ = 0;
		$m['eventGetTarget'].__args__ = [null,null,['event']];
		$pyjs.track.lineno=414;
		$m['eventGetToElement'] = function(evt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    return evt.relatedTarget ? evt.relatedTarget : null;
    
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})(), $constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
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


    return evt.toString();
    
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
		$m['getAbsoluteLeft'] = function(_elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    var left = 0;
    var elem = _elem;
    var curr = elem.parentNode;
    // This intentionally excludes body
    while (curr && curr != $doc.body) {

      // see https://bugs.opera.com/show_bug.cgi?id=249965
      // The net effect is that TR and TBODY elemnts report the scroll offsets
      // of the BODY and HTML elements instead of 0.
      if (curr.tagName != 'TR' && curr.tagName != 'TBODY') {
        left -= curr.scrollLeft;
      }
      curr = curr.parentNode;
    }

    while (elem) {
      left += elem.offsetLeft;
      elem = elem.offsetParent;
    }
    return left;
    
		};
		$m['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

		$m['getAbsoluteLeft'].__bind_type__ = 0;
		$m['getAbsoluteLeft'].__args__ = [null,null,['_elem']];
		$pyjs.track.lineno=464;
		$m['getAbsoluteTop'] = function(_elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    var top = 0;
    var elem = _elem;

    // This intentionally excludes body
    var curr = elem.parentNode;
    while (curr && curr != $doc.body) {
      // see getAbsoluteLeft()
      if (curr.tagName != 'TR' && curr.tagName != 'TBODY') {
        top -= curr.scrollTop;
      }
      curr = curr.parentNode;
    }

    while (elem) {
      top += elem.offsetTop;
      elem = elem.offsetParent;
    }
    return top;
    
		};
		$m['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

		$m['getAbsoluteTop'].__bind_type__ = 0;
		$m['getAbsoluteTop'].__args__ = [null,null,['_elem']];
		$pyjs.track.lineno=478;
		$m['getAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);


    var ret = elem[attr];
    return (ret == null) ? null : String(ret);
    
		};
		$m['getAttribute'].__name__ = 'getAttribute';

		$m['getAttribute'].__bind_type__ = 0;
		$m['getAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=485;
		$m['getElemAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:485};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=485;
			$pyjs.track.lineno=180;
			$pyjs.track.lineno=180;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return elem['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
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


    return !!elem[attr];
    
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
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
			$pyjs.track.lineno=188;
			$pyjs.track.lineno=188;
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


    var count = 0, child = elem.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (child.nodeType == 1) {
        if (index == count)
          return child;
        ++count;
      }
      child = next;
    }

    return null;
    
		};
		$m['getChild'].__name__ = 'getChild';

		$m['getChild'].__bind_type__ = 0;
		$m['getChild'].__args__ = [null,null,['elem'],['index']];
		$pyjs.track.lineno=524;
		$m['getChildCount'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    var count = 0, child = elem.firstChild;
    while (child) {
      if (child.nodeType == 1)
      ++count;
      child = child.nextSibling;
    }
    return count;
    
		};
		$m['getChildCount'].__name__ = 'getChildCount';

		$m['getChildCount'].__bind_type__ = 0;
		$m['getChildCount'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=538;
		$m['getChildIndex'] = function(parent, toFind) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);


    var count = 0, child = parent.firstChild;
    while (child) {
        if (child == toFind)
            return count;
        if (child.nodeType == 1)
            ++count;
        child = child.nextSibling;
    }

    return -1;
    
		};
		$m['getChildIndex'].__name__ = 'getChildIndex';

		$m['getChildIndex'].__bind_type__ = 0;
		$m['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
		$pyjs.track.lineno=556;
		$m['getElementById'] = function(id) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    var elem = $doc.getElementById(id);
    return elem ? elem : null;
    
		};
		$m['getElementById'].__name__ = 'getElementById';

		$m['getElementById'].__bind_type__ = 0;
		$m['getElementById'].__args__ = [null,null,['id']];
		$pyjs.track.lineno=563;
		$m['getEventListener'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    return element.__listener;
    
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
			$pyjs.track.lineno=265;
			$pyjs.track.lineno=266;
			$pyjs.track.lineno=266;
			var $pyjs__ret = new $p['int'](element.__eventBits ? element.__eventBits : 0);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getEventsSunk'].__name__ = 'getEventsSunk';

		$m['getEventsSunk'].__bind_type__ = 0;
		$m['getEventsSunk'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=580;
		$m['getFirstChild'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    var child = elem.firstChild;
    while (child && child.nodeType != 1)
      child = child.nextSibling;
    return child ? child : null;
    
		};
		$m['getFirstChild'].__name__ = 'getFirstChild';

		$m['getFirstChild'].__bind_type__ = 0;
		$m['getFirstChild'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=587;
		$m['getLastChild'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $and9,$and12,$and10,$and11,child;
			$pyjs.track={module:'pyjamas.DOM',lineno:587};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=587;
			$pyjs.track.lineno=588;
			child = ($p['bool']($and9=elem)?$p['getattr'](elem, 'lastChild'):$and9);
			$pyjs.track.lineno=589;
			while ($p['bool'](($p['bool']($and11=child)?!$p['op_eq']($p['getattr'](child, 'nodeType'), $constant_int_1):$and11))) {
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


    var ret = element.innerHTML;
    return (ret == null) ? null : ret;
    
		};
		$m['getInnerHTML'].__name__ = 'getInnerHTML';

		$m['getInnerHTML'].__bind_type__ = 0;
		$m['getInnerHTML'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=601;
		$m['getInnerText'] = function(element) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);


    // To mimic IE's 'innerText' property in the W3C DOM, we need to recursively
    // concatenate all child text nodes (depth first).
    var text = '', child = element.firstChild;
    while (child) {
      if (child.nodeType == 1){ // 1 == Element node
        text += $m['getInnerText'](child);
      } else if (child.nodeValue) {
        text += child.nodeValue;
      }
      child = child.nextSibling;
    }
    return text;
    
		};
		$m['getInnerText'].__name__ = 'getInnerText';

		$m['getInnerText'].__bind_type__ = 0;
		$m['getInnerText'].__args__ = [null,null,['element']];
		$pyjs.track.lineno=615;
		$m['getIntAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);


    var i = parseInt(elem[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
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


    var i = parseInt(elem.style[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
		};
		$m['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

		$m['getIntStyleAttribute'].__bind_type__ = 0;
		$m['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=629;
		$m['getPrevSibling'] = function(elem) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var sib,$and14,$and13;
			$pyjs.track={module:'pyjamas.DOM',lineno:629};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=629;
			$pyjs.track.lineno=630;
			sib = $p['getattr'](elem, 'previousSibling');
			$pyjs.track.lineno=631;
			while ($p['bool'](($p['bool']($and13=sib)?!$p['op_eq']($p['getattr'](sib, 'nodeType'), $constant_int_1):$and13))) {
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


    var sib = elem.nextSibling;
    while (sib && sib.nodeType != 1)
      sib = sib.nextSibling;
    return sib ? sib : null;
    
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


    var parent = elem.parentNode;
    if(parent == null) {
        return null;
    }
    if (parent.nodeType != 1)
        parent = null;
    return parent ? parent : null;
    
		};
		$m['getParent'].__name__ = 'getParent';

		$m['getParent'].__bind_type__ = 0;
		$m['getParent'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=656;
		$m['getStyleAttribute'] = function(elem, attr) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);


    var ret = elem.style[attr];
    return (ret == null) ? null : ret;
    
		};
		$m['getStyleAttribute'].__name__ = 'getStyleAttribute';

		$m['getStyleAttribute'].__bind_type__ = 0;
		$m['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
		$pyjs.track.lineno=667;
		$m['insertChild'] = function(parent, toAdd, index) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:667};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=667;
			$pyjs.track.lineno=342;

    var count = 0, child = parent.firstChild, before = null;
    while (child) {
      if (child.nodeType == 1) {
        if (count == index) {
          before = child;
          break;
        }
        ++count;
      }
      child = child.nextSibling;
    }

    parent.insertBefore(toAdd, before);
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'child')))) {
					$pyjs.track.lineno=695;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['StopIteration']);
				}
				$pyjs.track.lineno=696;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', $p['getattr'](self, 'child')) : $p['setattr'](self, 'lastChild', $p['getattr'](self, 'child')); 
				$pyjs.track.lineno=697;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getNextSibling']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) : $p['setattr'](self, 'child', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getNextSibling']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
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


    var parent = elem;
    var child = elem.firstChild;
    var lastChild = null;
    return {
        'next': function() {
            if (child == null) {
                throw $p['StopIteration'];
            }
            lastChild = child;
            child = $m['getNextSibling'](child);
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
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
				if ($p['bool'](all_nodes)) {
					$pyjs.track.lineno=721;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $p['getattr'](elem, 'firstChild')) : $p['setattr'](self, 'child', $p['getattr'](elem, 'firstChild')); 
				}
				else {
					$pyjs.track.lineno=723;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getFirstChild'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) : $p['setattr'](self, 'child', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getFirstChild'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()); 
				}
				$pyjs.track.lineno=724;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null); 
				$pyjs.track.lineno=725;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stack', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()) : $p['setattr'](self, 'stack', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
					$pyjs.track.lineno=736;
					nextSibling = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getNextSibling']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
				}
				$pyjs.track.lineno=737;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](firstChild, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()) {
					$pyjs.track.lineno=738;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_is'](nextSibling, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()) {
						$pyjs.track.lineno=739;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['stack']['append']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['tuple']([nextSibling, $p['getattr'](self, 'parent')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
					}
					$pyjs.track.lineno=740;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', $p['getattr'](self, 'child')) : $p['setattr'](self, 'parent', $p['getattr'](self, 'child')); 
					$pyjs.track.lineno=741;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', firstChild) : $p['setattr'](self, 'child', firstChild); 
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](nextSibling, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
					$pyjs.track.lineno=743;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', nextSibling) : $p['setattr'](self, 'child', nextSibling); 
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($p['getattr'](self, 'stack'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
					$pyjs.track.lineno=745;
					var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
					return self['stack']['pop']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
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


    var parent = elem;
    var child = $m['getFirstChild'](elem);
    var lastChild = null;
    var stack = [];
    var parentStack = [];
    return {
        'next': function() {
            if (child == null) {
                throw $p['StopIteration'];
            }
            lastChild = child;
            var firstChild = $m['getFirstChild'](child);
            var nextSibling = $m['getNextSibling'](child);
            if(firstChild != null) {
               if(nextSibling != null) {
                   stack.push(nextSibling);
                   parentStack.push(parent);
                }
                parent = child;
                child = firstChild;
            } else if(nextSibling != null) {
                child = nextSibling;
            } else if(stack.length > 0) {
                child = stack.pop();
                parent = parentStack.pop();
            } else {
                child = null;
            }
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
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
			while ($p['bool'](child)) {
				$pyjs.track.lineno=768;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['compare'](parent, child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
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
			var $and16,$and15;
			$pyjs.track={module:'pyjamas.DOM',lineno:778};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=778;
			$pyjs.track.lineno=780;
			$pyjs.track.lineno=781;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and15=$m['sCaptureElem'])?(function(){try{try{$pyjs.in_try_except += 1;
			return $m['compare'](elem, $m['sCaptureElem']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})():$and15));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()) {
				$pyjs.track.lineno=782;
				$m['sCaptureElem'] = null;
				$pyjs.track.lineno=783;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (typeof releaseCapture_impl == "undefined"?$m.releaseCapture_impl:releaseCapture_impl)(elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
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
			$pyjs.track.lineno=432;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sEventPreviewStack']['remove'](preview);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
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

			$pyjs.track={module:'pyjamas.DOM',lineno:801};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=801;
			$pyjs.track.lineno=435;

    var left = elem.offsetLeft, top = elem.offsetTop;
    var width = elem.offsetWidth, height = elem.offsetHeight;
    
    if (elem.parentNode != elem.offsetParent) {
        left -= elem.parentNode.offsetLeft;
        top -= elem.parentNode.offsetTop;
    }

    var cur = elem.parentNode;
    while (cur && (cur.nodeType == 1)) {
        if ((cur.style.overflow == 'auto') || (cur.style.overflow == 'scroll')) {
            if (left < cur.scrollLeft) {
                cur.scrollLeft = left;
            }
            if (left + width > cur.scrollLeft + cur.clientWidth) {
                cur.scrollLeft = (left + width) - cur.clientWidth;
            }
            if (top < cur.scrollTop) {
                cur.scrollTop = top;
            }
            if (top + height > cur.scrollTop + cur.clientHeight) {
                cur.scrollTop = (top + height) - cur.clientHeight;
            }
        }

        var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
        if (cur.parentNode != cur.offsetParent) {
            offsetLeft -= cur.parentNode.offsetLeft;
            offsetTop -= cur.parentNode.offsetTop;
        }

        left += offsetLeft - cur.scrollLeft;
        top += offsetTop - cur.scrollTop;
        cur = cur.parentNode;
    }
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['scrollIntoView'].__name__ = 'scrollIntoView';

		$m['scrollIntoView'].__bind_type__ = 0;
		$m['scrollIntoView'].__args__ = [null,null,['elem']];
		$pyjs.track.lineno=837;
		$m['mash_name_for_glib'] = function(name, joiner) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
			var c,$iter1_nextval,$iter1_idx,res,$add5,$iter1_iter,$add2,$add3,$add1,$add6,$iter1_array,$add4,$pyjs__trackstack_size_1,$iter1_type;
			$pyjs.track={module:'pyjamas.DOM',lineno:837};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=837;
			$pyjs.track.lineno=838;
			res = '';
			$pyjs.track.lineno=839;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = name;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				c = $iter1_nextval.$nextval;
				$pyjs.track.lineno=840;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return c['isupper']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()) {
					$pyjs.track.lineno=841;
					res = $p['__op_add']($add3=res,$add4=$p['__op_add']($add1=joiner,$add2=(function(){try{try{$pyjs.in_try_except += 1;
					return c['lower']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()));
				}
				else {
					$pyjs.track.lineno=843;
					res = $p['__op_add']($add5=res,$add6=c);
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
			$pyjs.track.lineno=474;

    delete element[attribute];
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
			$pyjs.track.lineno=479;

    element[attribute] = value;
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
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

			$pyjs.track={module:'pyjamas.DOM',lineno:860};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=860;
			$pyjs.track.lineno=484;

    elem[attr] = value;
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
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
			$pyjs.track.lineno=495;

    element.__listener = listener;
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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

			$pyjs.track={module:'pyjamas.DOM',lineno:888};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=888;
			$pyjs.track.lineno=500;
element.innerHTML = html || "";
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['setInnerHTML'].__name__ = 'setInnerHTML';

		$m['setInnerHTML'].__bind_type__ = 0;
		$m['setInnerHTML'].__args__ = [null,null,['element'],['html']];
		$pyjs.track.lineno=895;
		$m['setInnerText'] = function(elem, text) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:895};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=895;
			$pyjs.track.lineno=503;

    // Remove all children first.
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    // Add a new text node.
    elem.appendChild($doc.createTextNode(text));
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
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
			$pyjs.track.lineno=513;

    elem[attr] = value.valueOf();
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['setIntAttribute'].__name__ = 'setIntAttribute';

		$m['setIntAttribute'].__bind_type__ = 0;
		$m['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
		$pyjs.track.lineno=910;
		$m['setIntStyleAttribute'] = function(elem, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:910};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=910;
			$pyjs.track.lineno=518;

    elem.style[attr] = value.valueOf();
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
			$pyjs.track.lineno=523;
			option = (function(){try{try{$pyjs.in_try_except += 1;
			return select['options']['item'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
			$pyjs.track.lineno=524;
			option.__is_instance__ && typeof option.__setattr__ == 'function' ? option.__setattr__('text', text) : $p['setattr'](option, 'text', text); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setOptionText'].__name__ = 'setOptionText';

		$m['setOptionText'].__bind_type__ = 0;
		$m['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
		$pyjs.track.lineno=923;
		$m['setStyleAttribute'] = function(element, attr, value) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.DOM',lineno:923};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=923;
			$pyjs.track.lineno=527;

    element.style[attr] = value;
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['setStyleAttribute'].__name__ = 'setStyleAttribute';

		$m['setStyleAttribute'].__bind_type__ = 0;
		$m['setStyleAttribute'].__args__ = [null,null,['element'],['attr'],['value']];
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
				attr = $tupleassign2[0];
				val = $tupleassign2[1];
				$pyjs.track.lineno=934;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($p['getattr'](element, 'style'), 'setProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
					$pyjs.track.lineno=935;
					(function(){try{try{$pyjs.in_try_except += 1;
					return element['style']['setProperty']((function(){try{try{$pyjs.in_try_except += 1;
					return $m['mash_name_for_glib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})(), val, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
				}
				else {
					$pyjs.track.lineno=937;
					(function(){try{try{$pyjs.in_try_except += 1;
					return element['style']['setAttribute'](attr, val, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
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
			var $iter5_nextval,dispEvnt,$iter5_idx,$iter3_type,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$iter3_nextval,$iter3_iter,$iter5_array,event_name,$iter3_array,bit,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter4_array;
			$pyjs.track={module:'pyjamas.DOM',lineno:939};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=939;
			$pyjs.track.lineno=538;
element.__eventBits = bits;
			$pyjs.track.lineno=539;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof sinkEventsMozilla == "undefined"?$m.sinkEventsMozilla:sinkEventsMozilla)(element, bits);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
			$pyjs.track.lineno=540;
			dispEvnt = $wnd.__dispatchEvent;
			$pyjs.track.lineno=541;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter3_iter = $p['getattr']($m['Event'], 'eventbits');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				bit = $iter3_nextval.$nextval;
				$pyjs.track.lineno=542;
				if ($p['bool']($p['op_bitand2'](bits, bit))) {
					$pyjs.track.lineno=543;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter4_iter = $p['getattr']($m['Event'], 'eventbits').__getitem__(bit).__getitem__($constant_int_1);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
						event_name = $iter4_nextval.$nextval;
						$pyjs.track.lineno=544;
element['on'+event_name] = dispEvnt
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.DOM';
				}
				else {
					$pyjs.track.lineno=546;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter5_iter = $p['getattr']($m['Event'], 'eventbits').__getitem__(bit).__getitem__($constant_int_1);
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
						event_name = $iter5_nextval.$nextval;
						$pyjs.track.lineno=547;
element['on'+event_name] = null
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.DOM';
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


    var temp = elem.cloneNode(true);
    var tempDiv = $doc.createElement("DIV");
    tempDiv.appendChild(temp);
    var outer = tempDiv.innerHTML;
    temp.innerHTML = "";
    return outer;
    
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
			$pyjs.track.lineno=561;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof dispatchEventImpl == "undefined"?$m.dispatchEventImpl:dispatchEventImpl)(event, element, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
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
			var $sub2,$sub1,preview,ret;
			$pyjs.track={module:'pyjamas.DOM',lineno:993};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=993;
			$pyjs.track.lineno=564;
			ret = true;
			$pyjs.track.lineno=565;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($m['sEventPreviewStack']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()) {
				$pyjs.track.lineno=566;
				preview = $m['sEventPreviewStack'].__getitem__($p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($m['sEventPreviewStack']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})(),$sub2=$constant_int_1));
				$pyjs.track.lineno=567;
				ret = (function(){try{try{$pyjs.in_try_except += 1;
				return preview['onEventPreview'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
				$pyjs.track.lineno=568;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool'](ret));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) {
					$pyjs.track.lineno=569;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['eventCancelBubble'](evt, true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
					$pyjs.track.lineno=570;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['eventPreventDefault'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
				}
			}
			$pyjs.track.lineno=572;
			$pyjs.track.lineno=572;
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
			$pyjs.track.lineno=576;
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
			$pyjs.track.lineno=579;
			$pyjs.track.lineno=580;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](element, $m['sCaptureElem']));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})()) {
				$pyjs.track.lineno=581;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})(), 'losecapture'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
					$pyjs.track.lineno=582;
					$m['sCaptureElem'] = null;
				}
			}
			$pyjs.track.lineno=583;
			prevCurrentEvent = $m['currentEvent'];
			$pyjs.track.lineno=584;
			$m['currentEvent'] = event;
			$pyjs.track.lineno=585;
			(function(){try{try{$pyjs.in_try_except += 1;
			return listener['onBrowserEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs.track.lineno=586;
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
			$pyjs.track.lineno=589;
			$pyjs.track.lineno=589;
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
			$pyjs.track.lineno=592;
			option = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createElement']('OPTION');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
			$pyjs.track.lineno=593;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['setInnerText'](option, item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$pyjs.track.lineno=594;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_is'](value, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()) {
				$pyjs.track.lineno=595;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setAttribute'](option, 'value', value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			}
			$pyjs.track.lineno=596;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](index, (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) {
				$pyjs.track.lineno=597;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['appendChild'](select, option);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			}
			else {
				$pyjs.track.lineno=599;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['insertChild'](select, option, index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
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


    return evt.detail * 4 || 0;
    
		};
		$m['eventGetMouseWheelVelocityY'].__name__ = 'eventGetMouseWheelVelocityY';

		$m['eventGetMouseWheelVelocityY'].__bind_type__ = 0;
		$m['eventGetMouseWheelVelocityY'].__args__ = [null,null,['evt']];
		$pyjs.track.lineno=1059;
		if ($p['bool'](!$p['bool']($p['getattr']($m['pyjd'], 'is_desktop')))) {
			$pyjs.track.lineno=1060;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['init']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
