/* start module: pyjamas.ui.VerticalPanel */
$pyjs.loaded_modules['pyjamas.ui.VerticalPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.VerticalPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.VerticalPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.VerticalPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.VerticalPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.VerticalPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['VerticalPanel'] = $pyjs.loaded_modules['pyjamas.ui.VerticalPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.VerticalPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.VerticalPanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.VerticalPanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.VerticalPanel.py, line 18:\n    from pyjamas.ui.CellPanel import CellPanel';
		$m.__track_lines__[19] = 'pyjamas.ui.VerticalPanel.py, line 19:\n    from pyjamas.ui import HasHorizontalAlignment';
		$m.__track_lines__[20] = 'pyjamas.ui.VerticalPanel.py, line 20:\n    from pyjamas.ui import HasVerticalAlignment';
		$m.__track_lines__[22] = 'pyjamas.ui.VerticalPanel.py, line 22:\n    class VerticalPanel(CellPanel):';
		$m.__track_lines__[24] = 'pyjamas.ui.VerticalPanel.py, line 24:\n    def insert(self, widget, container, beforeIndex=None):';
		$m.__track_lines__[31] = 'pyjamas.ui.VerticalPanel.py, line 31:\n    if widget.getParent() == self:';
		$m.__track_lines__[32] = 'pyjamas.ui.VerticalPanel.py, line 32:\n    return';
		$m.__track_lines__[34] = 'pyjamas.ui.VerticalPanel.py, line 34:\n    if beforeIndex is None:';
		$m.__track_lines__[35] = 'pyjamas.ui.VerticalPanel.py, line 35:\n    beforeIndex = container';
		$m.__track_lines__[36] = 'pyjamas.ui.VerticalPanel.py, line 36:\n    container = self.getBody()';
		$m.__track_lines__[38] = 'pyjamas.ui.VerticalPanel.py, line 38:\n    widget.removeFromParent()';
		$m.__track_lines__[40] = 'pyjamas.ui.VerticalPanel.py, line 40:\n    tr = DOM.createTR()';
		$m.__track_lines__[41] = 'pyjamas.ui.VerticalPanel.py, line 41:\n    td = DOM.createTD()';
		$m.__track_lines__[43] = 'pyjamas.ui.VerticalPanel.py, line 43:\n    DOM.insertChild(container, tr, beforeIndex)';
		$m.__track_lines__[44] = 'pyjamas.ui.VerticalPanel.py, line 44:\n    DOM.appendChild(tr, td)';
		$m.__track_lines__[46] = 'pyjamas.ui.VerticalPanel.py, line 46:\n    CellPanel.insert(self, widget, td, beforeIndex)';
		$m.__track_lines__[48] = 'pyjamas.ui.VerticalPanel.py, line 48:\n    self.setCellHorizontalAlignment(widget, self.horzAlign)';
		$m.__track_lines__[49] = 'pyjamas.ui.VerticalPanel.py, line 49:\n    self.setCellVerticalAlignment(widget, self.vertAlign)';
		$m.__track_lines__[51] = 'pyjamas.ui.VerticalPanel.py, line 51:\n    def remove(self, widget):';
		$m.__track_lines__[52] = 'pyjamas.ui.VerticalPanel.py, line 52:\n    if isinstance(widget, int):';
		$m.__track_lines__[53] = 'pyjamas.ui.VerticalPanel.py, line 53:\n    widget = self.getWidget(widget)';
		$m.__track_lines__[55] = 'pyjamas.ui.VerticalPanel.py, line 55:\n    if widget.getParent() != self:';
		$m.__track_lines__[56] = 'pyjamas.ui.VerticalPanel.py, line 56:\n    return False';
		$m.__track_lines__[58] = 'pyjamas.ui.VerticalPanel.py, line 58:\n    td = DOM.getParent(widget.getElement())';
		$m.__track_lines__[59] = 'pyjamas.ui.VerticalPanel.py, line 59:\n    tr = DOM.getParent(td)';
		$m.__track_lines__[60] = 'pyjamas.ui.VerticalPanel.py, line 60:\n    DOM.removeChild(self.getBody(), tr)';
		$m.__track_lines__[62] = 'pyjamas.ui.VerticalPanel.py, line 62:\n    CellPanel.remove(self, widget)';
		$m.__track_lines__[63] = 'pyjamas.ui.VerticalPanel.py, line 63:\n    return True';
		$m.__track_lines__[66] = "pyjamas.ui.VerticalPanel.py, line 66:\n    Factory.registerClass('pyjamas.ui.VerticalPanel', 'VerticalPanel', VerticalPanel)";


		$pyjs.track.module='pyjamas.ui.VerticalPanel';
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
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=22;
		$m['VerticalPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.VerticalPanel';
			$cls_definition.__md5__ = '21e8baac210caf4c2f0f5173e6e0e4ff';
			$pyjs.track.lineno=24;
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
					if (self.prototype.__md5__ !== '21e8baac210caf4c2f0f5173e6e0e4ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[5][1];
				var tr,td;
				$pyjs.track={module:'pyjamas.ui.VerticalPanel', lineno:24};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.VerticalPanel';
				$pyjs.track.lineno=24;
				$pyjs.track.lineno=31;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs.track.lineno=32;
					$pyjs.track.lineno=32;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=34;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](beforeIndex, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
					$pyjs.track.lineno=35;
					beforeIndex = container;
					$pyjs.track.lineno=36;
					container = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getBody']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				}
				$pyjs.track.lineno=38;
				(function(){try{try{$pyjs.in_try_except += 1;
				return widget['removeFromParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs.track.lineno=40;
				tr = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createTR']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs.track.lineno=41;
				td = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createTD']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs.track.lineno=43;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['insertChild'](container, tr, beforeIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.track.lineno=44;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['appendChild'](tr, td);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs.track.lineno=46;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['CellPanel']['insert'](self, widget, td, beforeIndex);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=48;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setCellHorizontalAlignment'](widget, $p['getattr'](self, 'horzAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=49;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setCellVerticalAlignment'](widget, $p['getattr'](self, 'vertAlign'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex', null]]);
			$cls_definition['insert'] = $method;
			$pyjs.track.lineno=51;
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
					if (self.prototype.__md5__ !== '21e8baac210caf4c2f0f5173e6e0e4ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td,tr;
				$pyjs.track={module:'pyjamas.ui.VerticalPanel', lineno:51};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.VerticalPanel';
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=52;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](widget, $p['int']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
					$pyjs.track.lineno=53;
					widget = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				}
				$pyjs.track.lineno=55;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs.track.lineno=56;
					$pyjs.track.lineno=56;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=58;
				td = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getParent']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=59;
				tr = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getParent'](td);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs.track.lineno=60;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['removeChild']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getBody']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), tr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.track.lineno=62;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['CellPanel']['remove'](self, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=63;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=22;
			var $bases = new Array($m['CellPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('VerticalPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=66;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.VerticalPanel', 'VerticalPanel', $m['VerticalPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.VerticalPanel */


/* end module: pyjamas.ui.VerticalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
