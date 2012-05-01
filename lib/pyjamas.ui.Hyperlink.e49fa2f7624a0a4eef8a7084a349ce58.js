/* start module: pyjamas.ui.Hyperlink */
$pyjs.loaded_modules['pyjamas.ui.Hyperlink'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Hyperlink'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Hyperlink'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Hyperlink"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Hyperlink>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Hyperlink';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Hyperlink'] = $pyjs.loaded_modules['pyjamas.ui.Hyperlink'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.Hyperlink.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.Hyperlink.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.Hyperlink.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.Hyperlink.py, line 17:\n    from pyjamas import History';
		$m.__track_lines__[19] = 'pyjamas.ui.Hyperlink.py, line 19:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[20] = 'pyjamas.ui.Hyperlink.py, line 20:\n    from pyjamas.ui import Event';
		$m.__track_lines__[21] = 'pyjamas.ui.Hyperlink.py, line 21:\n    from pyjamas.ui.ClickListener import ClickHandler';
		$m.__track_lines__[23] = 'pyjamas.ui.Hyperlink.py, line 23:\n    class Hyperlink(Widget, ClickHandler):';
		$m.__track_lines__[25] = 'pyjamas.ui.Hyperlink.py, line 25:\n    def __init__(self, text="", asHTML=False, Element=None, **kwargs):';
		$m.__track_lines__[27] = 'pyjamas.ui.Hyperlink.py, line 27:\n    if Element is None:';
		$m.__track_lines__[28] = 'pyjamas.ui.Hyperlink.py, line 28:\n    Element = DOM.createDiv()';
		$m.__track_lines__[29] = 'pyjamas.ui.Hyperlink.py, line 29:\n    self.anchorElem = DOM.createAnchor()';
		$m.__track_lines__[30] = 'pyjamas.ui.Hyperlink.py, line 30:\n    self.setElement(Element)';
		$m.__track_lines__[31] = 'pyjamas.ui.Hyperlink.py, line 31:\n    DOM.appendChild(self.getElement(), self.anchorElem)';
		$m.__track_lines__[33] = 'pyjamas.ui.Hyperlink.py, line 33:\n    if not kwargs.has_key(\'StyleName\'): kwargs[\'StyleName\']="gwt-Hyperlink"';
		$m.__track_lines__[34] = 'pyjamas.ui.Hyperlink.py, line 34:\n    if text:';
		$m.__track_lines__[35] = 'pyjamas.ui.Hyperlink.py, line 35:\n    if asHTML:';
		$m.__track_lines__[36] = "pyjamas.ui.Hyperlink.py, line 36:\n    kwargs['HTML'] = text";
		$m.__track_lines__[38] = "pyjamas.ui.Hyperlink.py, line 38:\n    kwargs['Text'] = text";
		$m.__track_lines__[39] = "pyjamas.ui.Hyperlink.py, line 39:\n    if not kwargs.has_key('TargetHistoryToken'):";
		$m.__track_lines__[40] = "pyjamas.ui.Hyperlink.py, line 40:\n    kwargs['TargetHistoryToken'] = None";
		$m.__track_lines__[42] = 'pyjamas.ui.Hyperlink.py, line 42:\n    Widget.__init__(self, **kwargs)';
		$m.__track_lines__[43] = 'pyjamas.ui.Hyperlink.py, line 43:\n    ClickHandler.__init__(self)';
		$m.__track_lines__[45] = 'pyjamas.ui.Hyperlink.py, line 45:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[46] = 'pyjamas.ui.Hyperlink.py, line 46:\n    Widget.onBrowserEvent(self, event)';
		$m.__track_lines__[47] = 'pyjamas.ui.Hyperlink.py, line 47:\n    event_type = DOM.eventGetType(event)';
		$m.__track_lines__[48] = 'pyjamas.ui.Hyperlink.py, line 48:\n    if event_type == "click":';
		$m.__track_lines__[49] = 'pyjamas.ui.Hyperlink.py, line 49:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[50] = 'pyjamas.ui.Hyperlink.py, line 50:\n    if self.targetHistoryToken is not None:';
		$m.__track_lines__[51] = 'pyjamas.ui.Hyperlink.py, line 51:\n    History.newItem(self.targetHistoryToken)';
		$m.__track_lines__[53] = 'pyjamas.ui.Hyperlink.py, line 53:\n    def getHTML(self):';
		$m.__track_lines__[54] = 'pyjamas.ui.Hyperlink.py, line 54:\n    return DOM.getInnerHTML(self.anchorElem)';
		$m.__track_lines__[56] = 'pyjamas.ui.Hyperlink.py, line 56:\n    def setHTML(self, html):';
		$m.__track_lines__[57] = 'pyjamas.ui.Hyperlink.py, line 57:\n    DOM.setInnerHTML(self.anchorElem, html)';
		$m.__track_lines__[59] = 'pyjamas.ui.Hyperlink.py, line 59:\n    def getText(self):';
		$m.__track_lines__[60] = 'pyjamas.ui.Hyperlink.py, line 60:\n    return DOM.getInnerText(self.anchorElem)';
		$m.__track_lines__[62] = 'pyjamas.ui.Hyperlink.py, line 62:\n    def setText(self, text):';
		$m.__track_lines__[63] = 'pyjamas.ui.Hyperlink.py, line 63:\n    DOM.setInnerText(self.anchorElem, text)';
		$m.__track_lines__[65] = 'pyjamas.ui.Hyperlink.py, line 65:\n    def getTargetHistoryToken(self):';
		$m.__track_lines__[66] = 'pyjamas.ui.Hyperlink.py, line 66:\n    return self.targetHistoryToken';
		$m.__track_lines__[68] = 'pyjamas.ui.Hyperlink.py, line 68:\n    def setTargetHistoryToken(self, targetHistoryToken):';
		$m.__track_lines__[69] = 'pyjamas.ui.Hyperlink.py, line 69:\n    self.targetHistoryToken = targetHistoryToken';
		$m.__track_lines__[70] = 'pyjamas.ui.Hyperlink.py, line 70:\n    if targetHistoryToken is None:';
		$m.__track_lines__[71] = "pyjamas.ui.Hyperlink.py, line 71:\n    targetHistoryToken = ''";
		$m.__track_lines__[72] = 'pyjamas.ui.Hyperlink.py, line 72:\n    DOM.setAttribute(self.anchorElem, "href", "#" + targetHistoryToken)';
		$m.__track_lines__[74] = "pyjamas.ui.Hyperlink.py, line 74:\n    Factory.registerClass('pyjamas.ui.Hyperlink', 'Hyperlink', Hyperlink)";


		$pyjs.track.module='pyjamas.ui.Hyperlink';
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
		$m['History'] = $p['___import___']('pyjamas.History', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$m['Hyperlink'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Hyperlink';
			$cls_definition.__md5__ = '396eefe7da1b91d110a178a19828f0cc';
			$pyjs.track.lineno=25;
			$method = $pyjs__bind_method2('__init__', function(text, asHTML, Element) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					asHTML = arguments[2];
					Element = arguments[3];
					var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '396eefe7da1b91d110a178a19828f0cc') {
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
							Element = arguments[4];
						}
					} else 					if (typeof asHTML != 'undefined') {
						if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = asHTML;
							asHTML = arguments[4];
						}
					} else 					if (typeof text != 'undefined') {
						if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = text;
							text = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];
				if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[4][1];
				if (typeof Element == 'undefined') Element=arguments.callee.__args__[5][1];

				$pyjs.track={module:'pyjamas.ui.Hyperlink', lineno:25};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Hyperlink';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=27;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](Element, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
					$pyjs.track.lineno=28;
					Element = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				}
				$pyjs.track.lineno=29;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('anchorElem', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createAnchor']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) : $p['setattr'](self, 'anchorElem', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createAnchor']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()); 
				$pyjs.track.lineno=30;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setElement'](Element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=31;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})(), $p['getattr'](self, 'anchorElem'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs.track.lineno=33;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('StyleName');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
					$pyjs.track.lineno=33;
					(function(){try{try{$pyjs.in_try_except += 1;
					return kwargs.__setitem__('StyleName', 'gwt-Hyperlink');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				}
				$pyjs.track.lineno=34;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
					$pyjs.track.lineno=35;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](asHTML);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
						$pyjs.track.lineno=36;
						(function(){try{try{$pyjs.in_try_except += 1;
						return kwargs.__setitem__('HTML', text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
					}
					else {
						$pyjs.track.lineno=38;
						(function(){try{try{$pyjs.in_try_except += 1;
						return kwargs.__setitem__('Text', text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
					}
				}
				$pyjs.track.lineno=39;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['has_key']('TargetHistoryToken');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
					$pyjs.track.lineno=40;
					(function(){try{try{$pyjs.in_try_except += 1;
					return kwargs.__setitem__('TargetHistoryToken', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				}
				$pyjs.track.lineno=42;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.track.lineno=43;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['ClickHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['text', ''],['asHTML', false],['Element', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=45;
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
					if (self.prototype.__md5__ !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event_type;
				$pyjs.track={module:'pyjamas.ui.Hyperlink', lineno:45};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Hyperlink';
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=46;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Widget']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=47;
				event_type = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs.track.lineno=48;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](event_type, 'click'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs.track.lineno=49;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['eventPreventDefault'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					$pyjs.track.lineno=50;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_is']($p['getattr'](self, 'targetHistoryToken'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
						$pyjs.track.lineno=51;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['History']['newItem']($p['getattr'](self, 'targetHistoryToken'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs.track.lineno=53;
			$method = $pyjs__bind_method2('getHTML', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Hyperlink', lineno:53};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Hyperlink';
				$pyjs.track.lineno=53;
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=54;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getInnerHTML']($p['getattr'](self, 'anchorElem'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHTML'] = $method;
			$pyjs.track.lineno=56;
			$method = $pyjs__bind_method2('setHTML', function(html) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Hyperlink', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Hyperlink';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=57;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setInnerHTML']($p['getattr'](self, 'anchorElem'), html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['html']]);
			$cls_definition['setHTML'] = $method;
			$pyjs.track.lineno=59;
			$method = $pyjs__bind_method2('getText', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Hyperlink', lineno:59};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Hyperlink';
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=60;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getInnerText']($p['getattr'](self, 'anchorElem'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getText'] = $method;
			$pyjs.track.lineno=62;
			$method = $pyjs__bind_method2('setText', function(text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Hyperlink', lineno:62};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Hyperlink';
				$pyjs.track.lineno=62;
				$pyjs.track.lineno=63;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setInnerText']($p['getattr'](self, 'anchorElem'), text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['setText'] = $method;
			$pyjs.track.lineno=65;
			$method = $pyjs__bind_method2('getTargetHistoryToken', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Hyperlink', lineno:65};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Hyperlink';
				$pyjs.track.lineno=65;
				$pyjs.track.lineno=66;
				$pyjs.track.lineno=66;
				var $pyjs__ret = $p['getattr'](self, 'targetHistoryToken');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTargetHistoryToken'] = $method;
			$pyjs.track.lineno=68;
			$method = $pyjs__bind_method2('setTargetHistoryToken', function(targetHistoryToken) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					targetHistoryToken = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs.track={module:'pyjamas.ui.Hyperlink', lineno:68};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Hyperlink';
				$pyjs.track.lineno=68;
				$pyjs.track.lineno=69;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('targetHistoryToken', targetHistoryToken) : $p['setattr'](self, 'targetHistoryToken', targetHistoryToken); 
				$pyjs.track.lineno=70;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](targetHistoryToken, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs.track.lineno=71;
					targetHistoryToken = '';
				}
				$pyjs.track.lineno=72;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setAttribute']($p['getattr'](self, 'anchorElem'), 'href', $p['__op_add']($add1='#',$add2=targetHistoryToken));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['targetHistoryToken']]);
			$cls_definition['setTargetHistoryToken'] = $method;
			$pyjs.track.lineno=23;
			var $bases = new Array($m['Widget'],$m['ClickHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Hyperlink', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=74;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.Hyperlink', 'Hyperlink', $m['Hyperlink']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Hyperlink */


/* end module: pyjamas.ui.Hyperlink */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.History', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Event', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
