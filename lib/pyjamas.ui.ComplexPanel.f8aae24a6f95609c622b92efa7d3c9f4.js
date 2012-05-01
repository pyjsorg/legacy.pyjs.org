/* start module: pyjamas.ui.ComplexPanel */
$pyjs.loaded_modules['pyjamas.ui.ComplexPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ComplexPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ComplexPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.ComplexPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.ComplexPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ComplexPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['ComplexPanel'] = $pyjs.loaded_modules['pyjamas.ui.ComplexPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.ComplexPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.ComplexPanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.ComplexPanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.ComplexPanel.py, line 18:\n    from pyjamas.ui.Panel import Panel';
		$m.__track_lines__[20] = 'pyjamas.ui.ComplexPanel.py, line 20:\n    class ComplexPanel(Panel):';
		$m.__track_lines__[24] = 'pyjamas.ui.ComplexPanel.py, line 24:\n    def add(self, widget, container=None):';
		$m.__track_lines__[25] = 'pyjamas.ui.ComplexPanel.py, line 25:\n    if container is not None:';
		$m.__track_lines__[26] = 'pyjamas.ui.ComplexPanel.py, line 26:\n    self.insert(widget, container, self.getWidgetCount())';
		$m.__track_lines__[28] = 'pyjamas.ui.ComplexPanel.py, line 28:\n    self.insert(widget, self.getWidgetCount())';
		$m.__track_lines__[30] = 'pyjamas.ui.ComplexPanel.py, line 30:\n    def insert(self, widget, container, beforeIndex=None):';
		$m.__track_lines__[37] = 'pyjamas.ui.ComplexPanel.py, line 37:\n    if widget.getParent() == self:';
		$m.__track_lines__[38] = 'pyjamas.ui.ComplexPanel.py, line 38:\n    return';
		$m.__track_lines__[40] = 'pyjamas.ui.ComplexPanel.py, line 40:\n    if beforeIndex is None:';
		$m.__track_lines__[41] = 'pyjamas.ui.ComplexPanel.py, line 41:\n    beforeIndex = container';
		$m.__track_lines__[42] = 'pyjamas.ui.ComplexPanel.py, line 42:\n    container = self.getElement()';
		$m.__track_lines__[44] = 'pyjamas.ui.ComplexPanel.py, line 44:\n    self.adopt(widget, container)';
		$m.__track_lines__[45] = 'pyjamas.ui.ComplexPanel.py, line 45:\n    self.children.insert(beforeIndex, widget)';
		$m.__track_lines__[47] = 'pyjamas.ui.ComplexPanel.py, line 47:\n    def remove(self, widget):';
		$m.__track_lines__[48] = 'pyjamas.ui.ComplexPanel.py, line 48:\n    if isinstance(widget, int):';
		$m.__track_lines__[49] = 'pyjamas.ui.ComplexPanel.py, line 49:\n    widget = self.getWidget(widget)';
		$m.__track_lines__[50] = 'pyjamas.ui.ComplexPanel.py, line 50:\n    if widget not in self.getChildren():';
		$m.__track_lines__[51] = 'pyjamas.ui.ComplexPanel.py, line 51:\n    return False';
		$m.__track_lines__[53] = 'pyjamas.ui.ComplexPanel.py, line 53:\n    self.disown(widget)';
		$m.__track_lines__[54] = 'pyjamas.ui.ComplexPanel.py, line 54:\n    self.getChildren().remove(widget)';
		$m.__track_lines__[56] = 'pyjamas.ui.ComplexPanel.py, line 56:\n    return True';
		$m.__track_lines__[59] = "pyjamas.ui.ComplexPanel.py, line 59:\n    Factory.registerClass('pyjamas.ui.ComplexPanel', 'ComplexPanel', ComplexPanel)";


		$pyjs.track.module='pyjamas.ui.ComplexPanel';
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
		$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$m['ComplexPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.ComplexPanel';
			$cls_definition.__md5__ = '1fbf917a80065a178c6ba12c9d7003c3';
			$pyjs.track.lineno=24;
			$method = $pyjs__bind_method2('add', function(widget, container) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					container = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1fbf917a80065a178c6ba12c9d7003c3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof container == 'undefined') container=arguments.callee.__args__[4][1];

				$pyjs.track={module:'pyjamas.ui.ComplexPanel', lineno:24};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.ComplexPanel';
				$pyjs.track.lineno=24;
				$pyjs.track.lineno=25;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](container, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
					$pyjs.track.lineno=26;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['insert'](widget, container, (function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				}
				else {
					$pyjs.track.lineno=28;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['insert'](widget, (function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container', null]]);
			$cls_definition['add'] = $method;
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
					if (self.prototype.__md5__ !== '1fbf917a80065a178c6ba12c9d7003c3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof beforeIndex == 'undefined') beforeIndex=arguments.callee.__args__[5][1];

				$pyjs.track={module:'pyjamas.ui.ComplexPanel', lineno:30};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.ComplexPanel';
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=37;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
					$pyjs.track.lineno=41;
					beforeIndex = container;
					$pyjs.track.lineno=42;
					container = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				}
				$pyjs.track.lineno=44;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['adopt'](widget, container);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=45;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['children']['insert'](beforeIndex, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex', null]]);
			$cls_definition['insert'] = $method;
			$pyjs.track.lineno=47;
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
					if (self.prototype.__md5__ !== '1fbf917a80065a178c6ba12c9d7003c3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.ComplexPanel', lineno:47};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.ComplexPanel';
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=48;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](widget, $p['int']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
					$pyjs.track.lineno=49;
					widget = (function(){try{try{$pyjs.in_try_except += 1;
					return self['getWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				}
				$pyjs.track.lineno=50;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!(function(){try{try{$pyjs.in_try_except += 1;
				return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})().__contains__(widget));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
					$pyjs.track.lineno=51;
					$pyjs.track.lineno=51;
					var $pyjs__ret = false;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=53;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['disown'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.track.lineno=54;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()['remove'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=56;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$pyjs.track.lineno=20;
			var $bases = new Array($m['Panel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ComplexPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=59;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.ComplexPanel', 'ComplexPanel', $m['ComplexPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.ComplexPanel */


/* end module: pyjamas.ui.ComplexPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui', 'pyjamas.ui.Panel']
*/
