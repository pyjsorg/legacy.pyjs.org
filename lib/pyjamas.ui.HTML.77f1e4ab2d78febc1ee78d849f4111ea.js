/* start module: pyjamas.ui.HTML */
$pyjs.loaded_modules['pyjamas.ui.HTML'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HTML'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HTML'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.HTML"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.HTML>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTML';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['HTML'] = $pyjs.loaded_modules['pyjamas.ui.HTML'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.HTML.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.HTML.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.HTML.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.HTML.py, line 18:\n    from pyjamas.ui.Label import Label';
		$m.__track_lines__[19] = 'pyjamas.ui.HTML.py, line 19:\n    from pyjamas.ui import Event';
		$m.__track_lines__[20] = 'pyjamas.ui.HTML.py, line 20:\n    from pyjamas.ui.InnerHTML import InnerHTML';
		$m.__track_lines__[21] = 'pyjamas.ui.HTML.py, line 21:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[23] = 'pyjamas.ui.HTML.py, line 23:\n    class HTML(Label, InnerHTML):';
		$m.__track_lines__[25] = 'pyjamas.ui.HTML.py, line 25:\n    _props = [';
		$m.__track_lines__[30] = 'pyjamas.ui.HTML.py, line 30:\n    def __init__(self, html=None, wordWrap=True, **kwargs):';
		$m.__track_lines__[31] = 'pyjamas.ui.HTML.py, line 31:\n    kwargs[\'StyleName\'] = kwargs.get(\'StyleName\', "gwt-HTML")';
		$m.__track_lines__[32] = 'pyjamas.ui.HTML.py, line 32:\n    if html:';
		$m.__track_lines__[33] = "pyjamas.ui.HTML.py, line 33:\n    kwargs['HTML'] = html";
		$m.__track_lines__[34] = 'pyjamas.ui.HTML.py, line 34:\n    Label.__init__(self, wordWrap=wordWrap, **kwargs)';
		$m.__track_lines__[35] = 'pyjamas.ui.HTML.py, line 35:\n    self.sinkEvents(Event.ONCLICK | Event.MOUSEEVENTS)';
		$m.__track_lines__[38] = 'pyjamas.ui.HTML.py, line 37:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[39] = 'pyjamas.ui.HTML.py, line 39:\n    return Widget._getProps() + self._props';
		$m.__track_lines__[41] = 'pyjamas.ui.HTML.py, line 41:\n    def _setWeirdProps(self, props, builderstate):';
		$m.__track_lines__[42] = 'pyjamas.ui.HTML.py, line 42:\n    if props.has_key("label"):';
		$m.__track_lines__[43] = "pyjamas.ui.HTML.py, line 43:\n    props['text'] = props['label']";
		$m.__track_lines__[44] = "pyjamas.ui.HTML.py, line 44:\n    del props['label']";
		$m.__track_lines__[45] = 'pyjamas.ui.HTML.py, line 45:\n    if not props.has_key("text"):';
		$m.__track_lines__[46] = 'pyjamas.ui.HTML.py, line 46:\n    return';
		$m.__track_lines__[47] = 'pyjamas.ui.HTML.py, line 47:\n    txt = props["text"]';
		$m.__track_lines__[48] = 'pyjamas.ui.HTML.py, line 48:\n    if props.get("html", False):';
		$m.__track_lines__[49] = 'pyjamas.ui.HTML.py, line 49:\n    self.setHTML(txt)';
		$m.__track_lines__[51] = 'pyjamas.ui.HTML.py, line 51:\n    self.setText(txt)';
		$m.__track_lines__[54] = "pyjamas.ui.HTML.py, line 54:\n    Factory.registerClass('pyjamas.ui.HTML', 'HTML', HTML)";


		$pyjs.track.module='pyjamas.ui.HTML';
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
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$m['HTML'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.HTML';
			$cls_definition.__md5__ = '01380b8e0b796daf0f7a870c367aab8c';
			$pyjs.track.lineno=25;
			$cls_definition['_props'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['wordwrap', 'Word Wrap', 'WordWrap', null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](['horzAlign', 'Horizontal Alignment', 'HorizontalAlignment', null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.track.lineno=30;
			$method = $pyjs__bind_method2('__init__', function(html, wordWrap) {
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
					html = arguments[1];
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
					if (self.prototype.__md5__ !== '01380b8e0b796daf0f7a870c367aab8c') {
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
					} else 					if (typeof html != 'undefined') {
						if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = html;
							html = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
				if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];

				$pyjs.track={module:'pyjamas.ui.HTML', lineno:30};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTML';
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=31;
				(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs.__setitem__('StyleName', (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('StyleName', 'gwt-HTML');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs.track.lineno=32;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs.track.lineno=33;
					(function(){try{try{$pyjs.in_try_except += 1;
					return kwargs.__setitem__('HTML', html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				}
				$pyjs.track.lineno=34;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['Label'], '__init__', null, kwargs, [{wordWrap:wordWrap}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.track.lineno=35;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['sinkEvents']($p['op_bitor2']($p['getattr']($m['Event'], 'ONCLICK'), $p['getattr']($m['Event'], 'MOUSEEVENTS')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['html', null],['wordWrap', true]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=38;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 0, arguments.length);
    var self = this.prototype;
				var $add2,$add1;
				$pyjs.track={module:'pyjamas.ui.HTML', lineno:38};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTML';
				$pyjs.track.lineno=38;
				$pyjs.track.lineno=39;
				$pyjs.track.lineno=39;
				var $pyjs__ret = $p['__op_add']($add1=(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Widget']['_getProps']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(),$add2=$p['getattr'](self, '_props'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs.track.lineno=41;
			$method = $pyjs__bind_method2('_setWeirdProps', function(props, builderstate) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					props = arguments[1];
					builderstate = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '01380b8e0b796daf0f7a870c367aab8c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var txt;
				$pyjs.track={module:'pyjamas.ui.HTML', lineno:41};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTML';
				$pyjs.track.lineno=41;
				$pyjs.track.lineno=42;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return props['has_key']('label');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
					$pyjs.track.lineno=43;
					(function(){try{try{$pyjs.in_try_except += 1;
					return props.__setitem__('text', props.__getitem__('label'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
					$pyjs.track.lineno=44;
					(function(){try{try{$pyjs.in_try_except += 1;
					return props.__delitem__('label');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				}
				$pyjs.track.lineno=45;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return props['has_key']('text');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
					$pyjs.track.lineno=46;
					$pyjs.track.lineno=46;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=47;
				txt = props.__getitem__('text');
				$pyjs.track.lineno=48;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return props['get']('html', false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
					$pyjs.track.lineno=49;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['setHTML'](txt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				}
				else {
					$pyjs.track.lineno=51;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['setText'](txt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['props'],['builderstate']]);
			$cls_definition['_setWeirdProps'] = $method;
			$pyjs.track.lineno=23;
			var $bases = new Array($m['Label'],$m['InnerHTML']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HTML', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=54;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.HTML', 'HTML', $m['HTML']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.HTML */


/* end module: pyjamas.ui.HTML */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Label.Label', 'pyjamas.ui', 'pyjamas.ui.Label', 'pyjamas.ui.Event', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
