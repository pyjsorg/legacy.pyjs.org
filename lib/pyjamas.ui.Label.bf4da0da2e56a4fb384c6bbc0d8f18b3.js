/* start module: pyjamas.ui.Label */
$pyjs.loaded_modules['pyjamas.ui.Label'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Label'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Label'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Label"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Label>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Label';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Label'] = $pyjs.loaded_modules['pyjamas.ui.Label'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.Label.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.Label.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.Label.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.Label.py, line 17:\n    from pyjamas.ui.InnerText import InnerText';
		$m.__track_lines__[19] = 'pyjamas.ui.Label.py, line 19:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[20] = 'pyjamas.ui.Label.py, line 20:\n    from pyjamas.ui.MouseListener import MouseHandler';
		$m.__track_lines__[21] = 'pyjamas.ui.Label.py, line 21:\n    from pyjamas.ui.ClickListener import ClickHandler';
		$m.__track_lines__[23] = 'pyjamas.ui.Label.py, line 23:\n    class Label(Widget, MouseHandler, ClickHandler, InnerText):';
		$m.__track_lines__[25] = 'pyjamas.ui.Label.py, line 25:\n    _props = [("label", "Label", "Text", None),';
		$m.__track_lines__[30] = 'pyjamas.ui.Label.py, line 30:\n    def __init__(self, text=None, wordWrap=True, **kwargs):';
		$m.__track_lines__[31] = 'pyjamas.ui.Label.py, line 31:\n    kwargs[\'StyleName\'] = kwargs.get(\'StyleName\', "gwt-Label")';
		$m.__track_lines__[32] = "pyjamas.ui.Label.py, line 32:\n    kwargs['WordWrap'] = kwargs.get('WordWrap', wordWrap)";
		$m.__track_lines__[33] = 'pyjamas.ui.Label.py, line 33:\n    kwargs[\'HorizontalAlignment\'] = kwargs.get(\'HorizontalAlignment\', "")';
		$m.__track_lines__[34] = 'pyjamas.ui.Label.py, line 34:\n    if text:';
		$m.__track_lines__[35] = "pyjamas.ui.Label.py, line 35:\n    kwargs['Text'] = text";
		$m.__track_lines__[36] = "pyjamas.ui.Label.py, line 36:\n    self.setElement(kwargs.pop('Element', None) or DOM.createDiv())";
		$m.__track_lines__[37] = 'pyjamas.ui.Label.py, line 37:\n    self.horzAlign = ""';
		$m.__track_lines__[39] = 'pyjamas.ui.Label.py, line 39:\n    Widget.__init__(self, **kwargs)';
		$m.__track_lines__[40] = 'pyjamas.ui.Label.py, line 40:\n    MouseHandler.__init__(self)';
		$m.__track_lines__[41] = 'pyjamas.ui.Label.py, line 41:\n    ClickHandler.__init__(self)';
		$m.__track_lines__[44] = 'pyjamas.ui.Label.py, line 43:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[45] = 'pyjamas.ui.Label.py, line 45:\n    return Widget._getProps() + InnerText._getProps() + self._props';
		$m.__track_lines__[47] = 'pyjamas.ui.Label.py, line 47:\n    def getHorizontalAlignment(self):';
		$m.__track_lines__[48] = 'pyjamas.ui.Label.py, line 48:\n    return self.horzAlign';
		$m.__track_lines__[50] = 'pyjamas.ui.Label.py, line 50:\n    def getWordWrap(self):';
		$m.__track_lines__[51] = 'pyjamas.ui.Label.py, line 51:\n    ws = DOM.getStyleAttribute(self.getElement(), "whiteSpace")';
		$m.__track_lines__[52] = 'pyjamas.ui.Label.py, line 52:\n    return ws != "nowrap"';
		$m.__track_lines__[54] = 'pyjamas.ui.Label.py, line 54:\n    def setHorizontalAlignment(self, align):';
		$m.__track_lines__[55] = 'pyjamas.ui.Label.py, line 55:\n    self.horzAlign = align';
		$m.__track_lines__[56] = 'pyjamas.ui.Label.py, line 56:\n    DOM.setStyleAttribute(self.getElement(), "textAlign", align)';
		$m.__track_lines__[58] = 'pyjamas.ui.Label.py, line 58:\n    def setWordWrap(self, wrap):';
		$m.__track_lines__[59] = 'pyjamas.ui.Label.py, line 59:\n    style = wrap and "normal" or "nowrap"';
		$m.__track_lines__[60] = 'pyjamas.ui.Label.py, line 60:\n    DOM.setStyleAttribute(self.getElement(), "whiteSpace", style)';
		$m.__track_lines__[62] = "pyjamas.ui.Label.py, line 62:\n    Factory.registerClass('pyjamas.ui.Label', 'Label', Label)";


		$pyjs.track.module='pyjamas.ui.Label';
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
		$m['InnerText'] = $p['___import___']('pyjamas.ui.InnerText.InnerText', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$m['Label'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.Label';
			$cls_definition.__md5__ = 'e8a3a048ee47bf9a6435560f671efb67';
			$pyjs.track.lineno=25;
			$cls_definition['_props'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['label', 'Label', 'Text', null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['wordwrap', 'Word Wrap', 'WordWrap', null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['horzAlign', 'Horizontal Alignment', 'HorizontalAlignment', null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.track.lineno=30;
			$method = $pyjs__bind_method2('__init__', function(text, wordWrap) {
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
					text = arguments[1];
					wordWrap = arguments[2];
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
					if (self.prototype.__md5__ !== 'e8a3a048ee47bf9a6435560f671efb67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof wordWrap != 'undefined') {
						if (wordWrap !== null && typeof wordWrap['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = wordWrap;
							wordWrap = arguments[3];
						}
					} else 					if (typeof text != 'undefined') {
						if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = text;
							text = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];
				if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];
				var $or1,$or2;
				$pyjs.track={module:'pyjamas.ui.Label', lineno:30};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Label';
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=31;
				(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs.__setitem__('StyleName', (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('StyleName', 'gwt-Label');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs.track.lineno=32;
				(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs.__setitem__('WordWrap', (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('WordWrap', wordWrap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.track.lineno=33;
				(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs.__setitem__('HorizontalAlignment', (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('HorizontalAlignment', '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=34;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs.track.lineno=35;
					(function(){try{try{$pyjs.in_try_except += 1;
					return kwargs.__setitem__('Text', text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				}
				$pyjs.track.lineno=36;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setElement'](($p['bool']($or1=(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['pop']('Element', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})())?$or1:(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.track.lineno=37;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('horzAlign', '') : $p['setattr'](self, 'horzAlign', ''); 
				$pyjs.track.lineno=39;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs.track.lineno=40;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['MouseHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.track.lineno=41;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['ClickHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['text', null],['wordWrap', true]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=44;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 0, arguments.length);
    var self = this.prototype;
				var $add2,$add3,$add1,$add4;
				$pyjs.track={module:'pyjamas.ui.Label', lineno:44};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Label';
				$pyjs.track.lineno=44;
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=45;
				var $pyjs__ret = $p['__op_add']($add3=$p['__op_add']($add1=(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Widget']['_getProps']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})(),$add2=(function(){try{try{$pyjs.in_try_except += 1;
				return $m['InnerText']['_getProps']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()),$add4=$p['getattr'](self, '_props'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs.track.lineno=47;
			$method = $pyjs__bind_method2('getHorizontalAlignment', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e8a3a048ee47bf9a6435560f671efb67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Label', lineno:47};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Label';
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=48;
				$pyjs.track.lineno=48;
				var $pyjs__ret = $p['getattr'](self, 'horzAlign');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHorizontalAlignment'] = $method;
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('getWordWrap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e8a3a048ee47bf9a6435560f671efb67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ws;
				$pyjs.track={module:'pyjamas.ui.Label', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Label';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				ws = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getStyleAttribute']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), 'whiteSpace');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.track.lineno=52;
				$pyjs.track.lineno=52;
				var $pyjs__ret = !$p['op_eq'](ws, 'nowrap');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWordWrap'] = $method;
			$pyjs.track.lineno=54;
			$method = $pyjs__bind_method2('setHorizontalAlignment', function(align) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					align = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e8a3a048ee47bf9a6435560f671efb67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.Label', lineno:54};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Label';
				$pyjs.track.lineno=54;
				$pyjs.track.lineno=55;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('horzAlign', align) : $p['setattr'](self, 'horzAlign', align); 
				$pyjs.track.lineno=56;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setStyleAttribute']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), 'textAlign', align);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['align']]);
			$cls_definition['setHorizontalAlignment'] = $method;
			$pyjs.track.lineno=58;
			$method = $pyjs__bind_method2('setWordWrap', function(wrap) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					wrap = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e8a3a048ee47bf9a6435560f671efb67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or4,style,$or3,$and1,$and2;
				$pyjs.track={module:'pyjamas.ui.Label', lineno:58};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.Label';
				$pyjs.track.lineno=58;
				$pyjs.track.lineno=59;
				style = ($p['bool']($or3=($p['bool']($and1=wrap)?'normal':$and1))?$or3:'nowrap');
				$pyjs.track.lineno=60;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setStyleAttribute']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})(), 'whiteSpace', style);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['wrap']]);
			$cls_definition['setWordWrap'] = $method;
			$pyjs.track.lineno=23;
			var $bases = new Array($m['Widget'],$m['MouseHandler'],$m['ClickHandler'],$m['InnerText']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Label', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=62;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.Label', 'Label', $m['Label']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Label */


/* end module: pyjamas.ui.Label */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.InnerText.InnerText', 'pyjamas.ui', 'pyjamas.ui.InnerText', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
