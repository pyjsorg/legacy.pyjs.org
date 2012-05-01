/* start module: pyjamas.ui.Widget */
$pyjs.loaded_modules['pyjamas.ui.Widget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Widget'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Widget'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Widget"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Widget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Widget';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Widget'] = $pyjs.loaded_modules['pyjamas.ui.Widget'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.Widget.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.Widget.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.Widget.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.Widget.py, line 18:\n    from pyjamas.ui.UIObject import UIObject';
		$m.__track_lines__[19] = 'pyjamas.ui.Widget.py, line 19:\n    from pyjamas.ui import Event';
		$m.__track_lines__[20] = 'pyjamas.ui.Widget.py, line 20:\n    from pyjamas.ui.ClickListener import ClickHandler';
		$m.__track_lines__[21] = 'pyjamas.ui.Widget.py, line 21:\n    from pyjamas.ui.FocusListener import FocusHandler';
		$m.__track_lines__[22] = 'pyjamas.ui.Widget.py, line 22:\n    from pyjamas.ui.KeyboardListener import KeyboardHandler';
		$m.__track_lines__[23] = 'pyjamas.ui.Widget.py, line 23:\n    from pyjamas.ui.MouseListener import MouseHandler, MouseWheelHandler';
		$m.__track_lines__[24] = 'pyjamas.ui.Widget.py, line 24:\n    from pyjamas.ui.InputListener import InputHandler';
		$m.__track_lines__[25] = 'pyjamas.ui.Widget.py, line 25:\n    from pyjamas.ui.ChangeListener import ChangeHandler';
		$m.__track_lines__[26] = 'pyjamas.ui.Widget.py, line 26:\n    from pyjamas.ui.DragHandler import DragHandler';
		$m.__track_lines__[27] = 'pyjamas.ui.Widget.py, line 27:\n    from pyjamas.ui.DropHandler import DropHandler';
		$m.__track_lines__[29] = 'pyjamas.ui.Widget.py, line 29:\n    class Widget(UIObject):';
		$m.__track_lines__[35] = 'pyjamas.ui.Widget.py, line 35:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[36] = 'pyjamas.ui.Widget.py, line 36:\n    self.attached = False';
		$m.__track_lines__[37] = 'pyjamas.ui.Widget.py, line 37:\n    self.parent = None';
		$m.__track_lines__[38] = 'pyjamas.ui.Widget.py, line 38:\n    self.layoutData = None';
		$m.__track_lines__[39] = 'pyjamas.ui.Widget.py, line 39:\n    self.contextMenu = None';
		$m.__track_lines__[41] = 'pyjamas.ui.Widget.py, line 41:\n    UIObject.__init__(self, **kwargs)';
		$m.__track_lines__[43] = 'pyjamas.ui.Widget.py, line 43:\n    def getLayoutData(self):';
		$m.__track_lines__[44] = 'pyjamas.ui.Widget.py, line 44:\n    return self.layoutData';
		$m.__track_lines__[46] = 'pyjamas.ui.Widget.py, line 46:\n    def getParent(self):';
		$m.__track_lines__[50] = 'pyjamas.ui.Widget.py, line 50:\n    return self.parent';
		$m.__track_lines__[52] = 'pyjamas.ui.Widget.py, line 52:\n    def isAttached(self):';
		$m.__track_lines__[54] = 'pyjamas.ui.Widget.py, line 54:\n    return self.attached';
		$m.__track_lines__[56] = 'pyjamas.ui.Widget.py, line 56:\n    def setContextMenu(self, menu):';
		$m.__track_lines__[57] = 'pyjamas.ui.Widget.py, line 57:\n    self.contextMenu = menu';
		$m.__track_lines__[58] = 'pyjamas.ui.Widget.py, line 58:\n    if menu is not None:';
		$m.__track_lines__[59] = 'pyjamas.ui.Widget.py, line 59:\n    self.sinkEvents(Event.ONCONTEXTMENU)';
		$m.__track_lines__[61] = 'pyjamas.ui.Widget.py, line 61:\n    self.unsinkEvents(Event.ONCONTEXTMENU)';
		$m.__track_lines__[63] = 'pyjamas.ui.Widget.py, line 63:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[68] = 'pyjamas.ui.Widget.py, line 68:\n    if hasattr(self, "_clickListeners"):';
		$m.__track_lines__[69] = 'pyjamas.ui.Widget.py, line 69:\n    ClickHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[70] = 'pyjamas.ui.Widget.py, line 70:\n    if hasattr(self, "_keyboardListeners"):';
		$m.__track_lines__[71] = 'pyjamas.ui.Widget.py, line 71:\n    KeyboardHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[72] = 'pyjamas.ui.Widget.py, line 72:\n    if hasattr(self, "_mouseListeners"):';
		$m.__track_lines__[73] = 'pyjamas.ui.Widget.py, line 73:\n    MouseHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[74] = 'pyjamas.ui.Widget.py, line 74:\n    if hasattr(self, "_mouseWheelListeners"):';
		$m.__track_lines__[75] = 'pyjamas.ui.Widget.py, line 75:\n    MouseWheelHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[76] = 'pyjamas.ui.Widget.py, line 76:\n    if hasattr(self, "_focusListeners"):';
		$m.__track_lines__[77] = 'pyjamas.ui.Widget.py, line 77:\n    FocusHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[78] = 'pyjamas.ui.Widget.py, line 78:\n    if hasattr(self, "_dragListeners"):';
		$m.__track_lines__[79] = 'pyjamas.ui.Widget.py, line 79:\n    DragHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[80] = 'pyjamas.ui.Widget.py, line 80:\n    if hasattr(self, "_changeListeners"):';
		$m.__track_lines__[81] = 'pyjamas.ui.Widget.py, line 81:\n    ChangeHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[82] = 'pyjamas.ui.Widget.py, line 82:\n    if hasattr(self, "_inputListeners"):';
		$m.__track_lines__[83] = 'pyjamas.ui.Widget.py, line 83:\n    InputHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[84] = 'pyjamas.ui.Widget.py, line 84:\n    if hasattr(self, "_dropListeners"):';
		$m.__track_lines__[85] = 'pyjamas.ui.Widget.py, line 85:\n    DropHandler.onBrowserEvent(self, event)';
		$m.__track_lines__[87] = 'pyjamas.ui.Widget.py, line 87:\n    if self.contextMenu is None:';
		$m.__track_lines__[88] = 'pyjamas.ui.Widget.py, line 88:\n    return True';
		$m.__track_lines__[90] = 'pyjamas.ui.Widget.py, line 90:\n    type = DOM.eventGetType(event)';
		$m.__track_lines__[91] = 'pyjamas.ui.Widget.py, line 91:\n    if type == "contextmenu":';
		$m.__track_lines__[92] = 'pyjamas.ui.Widget.py, line 92:\n    DOM.eventCancelBubble(event, True)';
		$m.__track_lines__[93] = 'pyjamas.ui.Widget.py, line 93:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[94] = 'pyjamas.ui.Widget.py, line 94:\n    self.contextMenu.onContextMenu(self)';
		$m.__track_lines__[95] = 'pyjamas.ui.Widget.py, line 95:\n    return False';
		$m.__track_lines__[97] = 'pyjamas.ui.Widget.py, line 97:\n    return True';
		$m.__track_lines__[99] = 'pyjamas.ui.Widget.py, line 99:\n    def onLoad(self):';
		$m.__track_lines__[100] = 'pyjamas.ui.Widget.py, line 100:\n    pass';
		$m.__track_lines__[102] = 'pyjamas.ui.Widget.py, line 102:\n    def doDetachChildren(self):';
		$m.__track_lines__[103] = 'pyjamas.ui.Widget.py, line 103:\n    pass';
		$m.__track_lines__[105] = 'pyjamas.ui.Widget.py, line 105:\n    def doAttachChildren(self):';
		$m.__track_lines__[106] = 'pyjamas.ui.Widget.py, line 106:\n    pass';
		$m.__track_lines__[108] = 'pyjamas.ui.Widget.py, line 108:\n    def onAttach(self):';
		$m.__track_lines__[111] = 'pyjamas.ui.Widget.py, line 111:\n    if self.isAttached():';
		$m.__track_lines__[112] = 'pyjamas.ui.Widget.py, line 112:\n    return';
		$m.__track_lines__[113] = 'pyjamas.ui.Widget.py, line 113:\n    self.attached = True';
		$m.__track_lines__[114] = 'pyjamas.ui.Widget.py, line 114:\n    DOM.setEventListener(self.getElement(), self)';
		$m.__track_lines__[115] = 'pyjamas.ui.Widget.py, line 115:\n    self.doAttachChildren()';
		$m.__track_lines__[116] = 'pyjamas.ui.Widget.py, line 116:\n    self.onLoad()';
		$m.__track_lines__[118] = 'pyjamas.ui.Widget.py, line 118:\n    def onDetach(self):';
		$m.__track_lines__[120] = 'pyjamas.ui.Widget.py, line 120:\n    if not self.isAttached():';
		$m.__track_lines__[121] = 'pyjamas.ui.Widget.py, line 121:\n    return';
		$m.__track_lines__[122] = 'pyjamas.ui.Widget.py, line 122:\n    self.doDetachChildren()';
		$m.__track_lines__[123] = 'pyjamas.ui.Widget.py, line 123:\n    self.attached = False';
		$m.__track_lines__[124] = 'pyjamas.ui.Widget.py, line 124:\n    DOM.setEventListener(self.getElement(), None)';
		$m.__track_lines__[126] = 'pyjamas.ui.Widget.py, line 126:\n    def setLayoutData(self, layoutData):';
		$m.__track_lines__[127] = 'pyjamas.ui.Widget.py, line 127:\n    self.layoutData = layoutData';
		$m.__track_lines__[129] = 'pyjamas.ui.Widget.py, line 129:\n    def setParent(self, parent):';
		$m.__track_lines__[132] = 'pyjamas.ui.Widget.py, line 132:\n    oldparent = self.parent';
		$m.__track_lines__[133] = 'pyjamas.ui.Widget.py, line 133:\n    self.parent = parent';
		$m.__track_lines__[134] = 'pyjamas.ui.Widget.py, line 134:\n    if parent is None:';
		$m.__track_lines__[135] = 'pyjamas.ui.Widget.py, line 135:\n    if oldparent is not None and oldparent.attached:';
		$m.__track_lines__[136] = 'pyjamas.ui.Widget.py, line 136:\n    self.onDetach()';
		$m.__track_lines__[138] = 'pyjamas.ui.Widget.py, line 138:\n    self.onAttach()';
		$m.__track_lines__[140] = 'pyjamas.ui.Widget.py, line 140:\n    def removeFromParent(self):';
		$m.__track_lines__[143] = 'pyjamas.ui.Widget.py, line 143:\n    if hasattr(self.parent, "remove"):';
		$m.__track_lines__[144] = 'pyjamas.ui.Widget.py, line 144:\n    self.parent.remove(self)';
		$m.__track_lines__[146] = 'pyjamas.ui.Widget.py, line 146:\n    def getID(self):';
		$m.__track_lines__[148] = 'pyjamas.ui.Widget.py, line 148:\n    return DOM.getAttribute(self.getElement(), "id")';
		$m.__track_lines__[150] = 'pyjamas.ui.Widget.py, line 150:\n    def setID(self, id):';
		$m.__track_lines__[152] = 'pyjamas.ui.Widget.py, line 152:\n    DOM.setAttribute(self.getElement(), "id", id)';
		$m.__track_lines__[154] = "pyjamas.ui.Widget.py, line 154:\n    Factory.registerClass('pyjamas.ui.Widget', 'Widget', Widget)";


		$pyjs.track.module='pyjamas.ui.Widget';
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
		$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['FocusHandler'] = $p['___import___']('pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=22;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['MouseWheelHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=24;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['InputHandler'] = $p['___import___']('pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=25;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ChangeHandler'] = $p['___import___']('pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=26;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DragHandler'] = $p['___import___']('pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=27;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DropHandler'] = $p['___import___']('pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=29;
		$m['Widget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Widget';
			$cls_definition.__md5__ = '6eecdc28167259d04493783e809323fe';
			$pyjs.track.lineno=35;
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
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
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

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:35};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=36;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('attached', false) : $p['setattr'](self, 'attached', false); 
				$pyjs.track.lineno=37;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', null) : $p['setattr'](self, 'parent', null); 
				$pyjs.track.lineno=38;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('layoutData', null) : $p['setattr'](self, 'layoutData', null); 
				$pyjs.track.lineno=39;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contextMenu', null) : $p['setattr'](self, 'contextMenu', null); 
				$pyjs.track.lineno=41;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['UIObject'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=43;
			$method = $pyjs__bind_method2('getLayoutData', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:43};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=44;
				$pyjs.track.lineno=44;
				var $pyjs__ret = $p['getattr'](self, 'layoutData');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLayoutData'] = $method;
			$pyjs.track.lineno=46;
			$method = $pyjs__bind_method2('getParent', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:46};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=46;
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=50;
				var $pyjs__ret = $p['getattr'](self, 'parent');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getParent'] = $method;
			$pyjs.track.lineno=52;
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
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:52};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=52;
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=54;
				var $pyjs__ret = $p['getattr'](self, 'attached');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isAttached'] = $method;
			$pyjs.track.lineno=56;
			$method = $pyjs__bind_method2('setContextMenu', function(menu) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					menu = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=57;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contextMenu', menu) : $p['setattr'](self, 'contextMenu', menu); 
				$pyjs.track.lineno=58;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](menu, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs.track.lineno=59;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				}
				else {
					$pyjs.track.lineno=61;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['unsinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['menu']]);
			$cls_definition['setContextMenu'] = $method;
			$pyjs.track.lineno=63;
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
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var type;
				$pyjs.track={module:'pyjamas.ui.Widget', lineno:63};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=68;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_clickListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs.track.lineno=69;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['ClickHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				}
				$pyjs.track.lineno=70;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_keyboardListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs.track.lineno=71;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['KeyboardHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				}
				$pyjs.track.lineno=72;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_mouseListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
					$pyjs.track.lineno=73;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['MouseHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				}
				$pyjs.track.lineno=74;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_mouseWheelListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
					$pyjs.track.lineno=75;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['MouseWheelHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				}
				$pyjs.track.lineno=76;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_focusListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
					$pyjs.track.lineno=77;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['FocusHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				}
				$pyjs.track.lineno=78;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_dragListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs.track.lineno=79;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DragHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				}
				$pyjs.track.lineno=80;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_changeListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
					$pyjs.track.lineno=81;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['ChangeHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				}
				$pyjs.track.lineno=82;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_inputListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
					$pyjs.track.lineno=83;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['InputHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				}
				$pyjs.track.lineno=84;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, '_dropListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
					$pyjs.track.lineno=85;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DropHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				}
				$pyjs.track.lineno=87;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is']($p['getattr'](self, 'contextMenu'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
					$pyjs.track.lineno=88;
					$pyjs.track.lineno=88;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=90;
				type = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs.track.lineno=91;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](type, 'contextmenu'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
					$pyjs.track.lineno=92;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['eventCancelBubble'](event, true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
					$pyjs.track.lineno=93;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['eventPreventDefault'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
					$pyjs.track.lineno=94;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['contextMenu']['onContextMenu'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
					$pyjs.track.lineno=95;
					$pyjs.track.lineno=95;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=97;
				$pyjs.track.lineno=97;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs.track.lineno=99;
			$method = $pyjs__bind_method2('onLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:99};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=99;
				$pyjs.track.lineno=100;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onLoad'] = $method;
			$pyjs.track.lineno=102;
			$method = $pyjs__bind_method2('doDetachChildren', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:102};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=102;
				$pyjs.track.lineno=103;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['doDetachChildren'] = $method;
			$pyjs.track.lineno=105;
			$method = $pyjs__bind_method2('doAttachChildren', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:105};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=105;
				$pyjs.track.lineno=106;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['doAttachChildren'] = $method;
			$pyjs.track.lineno=108;
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
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:108};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=108;
				$pyjs.track.lineno=111;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['isAttached']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
					$pyjs.track.lineno=112;
					$pyjs.track.lineno=112;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=113;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('attached', true) : $p['setattr'](self, 'attached', true); 
				$pyjs.track.lineno=114;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setEventListener']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})(), self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				$pyjs.track.lineno=115;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['doAttachChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs.track.lineno=116;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['onLoad']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onAttach'] = $method;
			$pyjs.track.lineno=118;
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
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:118};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=118;
				$pyjs.track.lineno=120;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['isAttached']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
					$pyjs.track.lineno=121;
					$pyjs.track.lineno=121;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=122;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['doDetachChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs.track.lineno=123;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('attached', false) : $p['setattr'](self, 'attached', false); 
				$pyjs.track.lineno=124;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setEventListener']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})(), null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onDetach'] = $method;
			$pyjs.track.lineno=126;
			$method = $pyjs__bind_method2('setLayoutData', function(layoutData) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					layoutData = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:126};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=126;
				$pyjs.track.lineno=127;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('layoutData', layoutData) : $p['setattr'](self, 'layoutData', layoutData); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['layoutData']]);
			$cls_definition['setLayoutData'] = $method;
			$pyjs.track.lineno=129;
			$method = $pyjs__bind_method2('setParent', function(parent) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and2,oldparent;
				$pyjs.track={module:'pyjamas.ui.Widget', lineno:129};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=129;
				$pyjs.track.lineno=132;
				oldparent = $p['getattr'](self, 'parent');
				$pyjs.track.lineno=133;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', parent) : $p['setattr'](self, 'parent', parent); 
				$pyjs.track.lineno=134;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](parent, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
					$pyjs.track.lineno=135;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($and1=!$p['op_is'](oldparent, null))?$p['getattr'](oldparent, 'attached'):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
						$pyjs.track.lineno=136;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['onDetach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
					}
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](parent, 'attached'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
					$pyjs.track.lineno=138;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['onAttach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['parent']]);
			$cls_definition['setParent'] = $method;
			$pyjs.track.lineno=140;
			$method = $pyjs__bind_method2('removeFromParent', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:140};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=140;
				$pyjs.track.lineno=143;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($p['getattr'](self, 'parent'), 'remove');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
					$pyjs.track.lineno=144;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['parent']['remove'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['removeFromParent'] = $method;
			$pyjs.track.lineno=146;
			$method = $pyjs__bind_method2('getID', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:146};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=146;
				$pyjs.track.lineno=148;
				$pyjs.track.lineno=148;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getAttribute']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})(), 'id');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getID'] = $method;
			$pyjs.track.lineno=150;
			$method = $pyjs__bind_method2('setID', function(id) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					id = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6eecdc28167259d04493783e809323fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Widget', lineno:150};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Widget';
				$pyjs.track.lineno=150;
				$pyjs.track.lineno=152;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setAttribute']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})(), 'id', id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['id']]);
			$cls_definition['setID'] = $method;
			$pyjs.track.lineno=29;
			var $bases = new Array($m['UIObject']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Widget', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=154;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.Widget', 'Widget', $m['Widget']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Widget */


/* end module: pyjamas.ui.Widget */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', 'pyjamas.ui.UIObject', 'pyjamas.ui.Event', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui.FocusListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui.InputListener', 'pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui.ChangeListener', 'pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui.DragHandler', 'pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui.DropHandler']
*/
