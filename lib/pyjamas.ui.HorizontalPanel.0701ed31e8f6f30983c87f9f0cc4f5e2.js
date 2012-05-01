/* start module: pyjamas.ui.HorizontalPanel */
$pyjs.loaded_modules['pyjamas.ui.HorizontalPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HorizontalPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HorizontalPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.HorizontalPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.HorizontalPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HorizontalPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['HorizontalPanel'] = $pyjs.loaded_modules['pyjamas.ui.HorizontalPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.HorizontalPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.HorizontalPanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.HorizontalPanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.HorizontalPanel.py, line 18:\n    from pyjamas.ui.CellPanel import CellPanel';
		$m.__track_lines__[21] = 'pyjamas.ui.HorizontalPanel.py, line 21:\n    class HorizontalPanel(CellPanel):';
		$m.__track_lines__[23] = 'pyjamas.ui.HorizontalPanel.py, line 23:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[25] = 'pyjamas.ui.HorizontalPanel.py, line 25:\n    CellPanel.__init__(self, **kwargs)';
		$m.__track_lines__[27] = 'pyjamas.ui.HorizontalPanel.py, line 27:\n    self.tableRow = DOM.createTR()';
		$m.__track_lines__[28] = 'pyjamas.ui.HorizontalPanel.py, line 28:\n    DOM.appendChild(self.getBody(), self.tableRow)';
		$m.__track_lines__[30] = 'pyjamas.ui.HorizontalPanel.py, line 30:\n    def insert(self, widget, container, beforeIndex=None):';
		$m.__track_lines__[37] = 'pyjamas.ui.HorizontalPanel.py, line 37:\n    if widget.getParent() == self:';
		$m.__track_lines__[38] = 'pyjamas.ui.HorizontalPanel.py, line 38:\n    return';
		$m.__track_lines__[40] = 'pyjamas.ui.HorizontalPanel.py, line 40:\n    if beforeIndex is None:';
		$m.__track_lines__[41] = 'pyjamas.ui.HorizontalPanel.py, line 41:\n    beforeIndex = container';
		$m.__track_lines__[42] = 'pyjamas.ui.HorizontalPanel.py, line 42:\n    container = self.tableRow';
		$m.__track_lines__[44] = 'pyjamas.ui.HorizontalPanel.py, line 44:\n    if widget.getParent() == self:';
		$m.__track_lines__[45] = 'pyjamas.ui.HorizontalPanel.py, line 45:\n    return';
		$m.__track_lines__[47] = 'pyjamas.ui.HorizontalPanel.py, line 47:\n    widget.removeFromParent()';
		$m.__track_lines__[49] = 'pyjamas.ui.HorizontalPanel.py, line 49:\n    td = DOM.createTD()';
		$m.__track_lines__[50] = 'pyjamas.ui.HorizontalPanel.py, line 50:\n    DOM.insertChild(container, td, beforeIndex)';
		$m.__track_lines__[52] = 'pyjamas.ui.HorizontalPanel.py, line 52:\n    CellPanel.insert(self, widget, td, beforeIndex)';
		$m.__track_lines__[54] = 'pyjamas.ui.HorizontalPanel.py, line 54:\n    self.setCellHorizontalAlignment(widget, self.horzAlign)';
		$m.__track_lines__[55] = 'pyjamas.ui.HorizontalPanel.py, line 55:\n    self.setCellVerticalAlignment(widget, self.vertAlign)';
		$m.__track_lines__[57] = 'pyjamas.ui.HorizontalPanel.py, line 57:\n    def remove(self, widget):';
		$m.__track_lines__[58] = 'pyjamas.ui.HorizontalPanel.py, line 58:\n    if isinstance(widget, int):';
		$m.__track_lines__[59] = 'pyjamas.ui.HorizontalPanel.py, line 59:\n    widget = self.getWidget(widget)';
		$m.__track_lines__[61] = 'pyjamas.ui.HorizontalPanel.py, line 61:\n    if widget.getParent() != self:';
		$m.__track_lines__[62] = 'pyjamas.ui.HorizontalPanel.py, line 62:\n    return False';
		$m.__track_lines__[64] = 'pyjamas.ui.HorizontalPanel.py, line 64:\n    td = DOM.getParent(widget.getElement())';
		$m.__track_lines__[65] = 'pyjamas.ui.HorizontalPanel.py, line 65:\n    DOM.removeChild(self.tableRow, td)';
		$m.__track_lines__[67] = 'pyjamas.ui.HorizontalPanel.py, line 67:\n    CellPanel.remove(self, widget)';
		$m.__track_lines__[68] = 'pyjamas.ui.HorizontalPanel.py, line 68:\n    return True';
		$m.__track_lines__[71] = "pyjamas.ui.HorizontalPanel.py, line 71:\n    Factory.registerClass('pyjamas.ui.HorizontalPanel', 'HorizontalPanel', HorizontalPanel)";


		$pyjs.track.module='pyjamas.ui.HorizontalPanel';
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
		$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$m['HorizontalPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.HorizontalPanel';
			$cls_definition.__md5__ = '863518eb3152d281922b46794a4587a6';
			$pyjs.track.lineno=23;
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
					if (self.prototype.__md5__ !== '863518eb3152d281922b46794a4587a6') {
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

				$pyjs.track={module:'pyjamas.ui.HorizontalPanel', lineno:23};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HorizontalPanel';
				$pyjs.track.lineno=23;
				$pyjs.track.lineno=25;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['CellPanel'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs.track.lineno=27;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tableRow', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createTR']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) : $p['setattr'](self, 'tableRow', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createTR']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()); 
				$pyjs.track.lineno=28;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getBody']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})(), $p['getattr'](self, 'tableRow'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=30;
			$method = $pyjs__bind_method2('insert', function(widget, container, beforeIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					container = arguments[2];
					beforeIndex = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '863518eb3152d281922b46794a4587a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[5][1];
				var td;
				$pyjs.track={module:'pyjamas.ui.HorizontalPanel', lineno:30};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HorizontalPanel';
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=37;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs.track.lineno=38;
					$pyjs.track.lineno=38;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=40;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](beforeIndex, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
					$pyjs.track.lineno=41;
					beforeIndex = container;
					$pyjs.track.lineno=42;
					container = $p['getattr'](self, 'tableRow');
				}
				$pyjs.track.lineno=44;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
					$pyjs.track.lineno=45;
					$pyjs.track.lineno=45;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=47;
				(function(){try{try{$pyjs.in_try_except += 1;
				return widget['removeFromParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=49;
				td = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createTD']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=50;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['insertChild'](container, td, beforeIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.track.lineno=52;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['CellPanel']['insert'](self, widget, td, beforeIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=54;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setCellHorizontalAlignment'](widget, $p['getattr'](self, 'horzAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.track.lineno=55;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setCellVerticalAlignment'](widget, $p['getattr'](self, 'vertAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex', null]]);
			$cls_definition['insert'] = $method;
			$pyjs.track.lineno=57;
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
					if (self.prototype.__md5__ !== '863518eb3152d281922b46794a4587a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs.track={module:'pyjamas.ui.HorizontalPanel', lineno:57};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HorizontalPanel';
				$pyjs.track.lineno=57;
				$pyjs.track.lineno=58;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](widget, $p['int']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs.track.lineno=59;
					widget = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				}
				$pyjs.track.lineno=61;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs.track.lineno=62;
					$pyjs.track.lineno=62;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=64;
				td = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getParent']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.track.lineno=65;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['removeChild']($p['getattr'](self, 'tableRow'), td);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.track.lineno=67;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['CellPanel']['remove'](self, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.track.lineno=68;
				$pyjs.track.lineno=68;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=21;
			var $bases = new Array($m['CellPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HorizontalPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=71;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.HorizontalPanel', 'HorizontalPanel', $m['HorizontalPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.HorizontalPanel */


/* end module: pyjamas.ui.HorizontalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel']
*/
