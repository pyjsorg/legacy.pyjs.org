/* start module: pyjamas.ui */
$pyjs.loaded_modules['pyjamas.ui'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui"];
	$m.__repr__ = function() { return "<module: pyjamas.ui>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['ui'] = $pyjs.loaded_modules['pyjamas.ui'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[16] = 'pyjamas.ui.py, line 16:\n    class HasHorizontalAlignment:';
		$m.__track_lines__[17] = 'pyjamas.ui.py, line 17:\n    ALIGN_LEFT = "left"';
		$m.__track_lines__[18] = 'pyjamas.ui.py, line 18:\n    ALIGN_CENTER = "center"';
		$m.__track_lines__[19] = 'pyjamas.ui.py, line 19:\n    ALIGN_RIGHT = "right"';
		$m.__track_lines__[21] = 'pyjamas.ui.py, line 21:\n    class HasVerticalAlignment:';
		$m.__track_lines__[22] = 'pyjamas.ui.py, line 22:\n    ALIGN_TOP = "top"';
		$m.__track_lines__[23] = 'pyjamas.ui.py, line 23:\n    ALIGN_MIDDLE = "middle"';
		$m.__track_lines__[24] = 'pyjamas.ui.py, line 24:\n    ALIGN_BOTTOM = "bottom"';
		$m.__track_lines__[26] = 'pyjamas.ui.py, line 26:\n    class HasAlignment:';
		$m.__track_lines__[27] = 'pyjamas.ui.py, line 27:\n    ALIGN_BOTTOM = "bottom"';
		$m.__track_lines__[28] = 'pyjamas.ui.py, line 28:\n    ALIGN_MIDDLE = "middle"';
		$m.__track_lines__[29] = 'pyjamas.ui.py, line 29:\n    ALIGN_TOP = "top"';
		$m.__track_lines__[30] = 'pyjamas.ui.py, line 30:\n    ALIGN_CENTER = "center"';
		$m.__track_lines__[31] = 'pyjamas.ui.py, line 31:\n    ALIGN_LEFT = "left"';
		$m.__track_lines__[32] = 'pyjamas.ui.py, line 32:\n    ALIGN_RIGHT = "right"';
		$m.__track_lines__[34] = 'pyjamas.ui.py, line 34:\n    PROP_NAME = 0';
		$m.__track_lines__[35] = 'pyjamas.ui.py, line 35:\n    PROP_DESC = 1';
		$m.__track_lines__[36] = 'pyjamas.ui.py, line 36:\n    PROP_FNAM = 2';
		$m.__track_lines__[37] = 'pyjamas.ui.py, line 37:\n    PROP_TYPE = 3';
		$m.__track_lines__[39] = 'pyjamas.ui.py, line 39:\n    ELPROP_NAME = 0';
		$m.__track_lines__[40] = 'pyjamas.ui.py, line 40:\n    ELPROP_DESC = 1';
		$m.__track_lines__[41] = 'pyjamas.ui.py, line 41:\n    ELPROP_FNAM = 2';
		$m.__track_lines__[42] = 'pyjamas.ui.py, line 42:\n    ELPROP_TYPE = 3';
		$m.__track_lines__[43] = 'pyjamas.ui.py, line 43:\n    ELPROP_DFLT = 4';
		$m.__track_lines__[45] = 'pyjamas.ui.py, line 45:\n    def get_list_columns(props, cols):';
		$m.__track_lines__[46] = 'pyjamas.ui.py, line 46:\n    res = []';
		$m.__track_lines__[47] = 'pyjamas.ui.py, line 47:\n    for p in props:';
		$m.__track_lines__[48] = 'pyjamas.ui.py, line 48:\n    r = ()';
		$m.__track_lines__[49] = 'pyjamas.ui.py, line 49:\n    for idx in cols:';
		$m.__track_lines__[50] = 'pyjamas.ui.py, line 50:\n    r.append(p[idx])';
		$m.__track_lines__[51] = 'pyjamas.ui.py, line 51:\n    res.append(r)';
		$m.__track_lines__[52] = 'pyjamas.ui.py, line 52:\n    return res';
		$m.__track_lines__[54] = 'pyjamas.ui.py, line 54:\n    def get_prop_widget_function_names(props):';
		$m.__track_lines__[55] = 'pyjamas.ui.py, line 55:\n    return get_list_columns(props, (PROP_FNAM,))';
		$m.__track_lines__[57] = 'pyjamas.ui.py, line 57:\n    class Applier(object):';
		$m.__track_lines__[59] = 'pyjamas.ui.py, line 59:\n    _props = []';
		$m.__track_lines__[60] = 'pyjamas.ui.py, line 60:\n    _elem_props = []';
		$m.__track_lines__[62] = 'pyjamas.ui.py, line 62:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[77] = 'pyjamas.ui.py, line 77:\n    self.applyValues(**kwargs)';
		$m.__track_lines__[79] = 'pyjamas.ui.py, line 79:\n    def applyValues(self, **kwargs):';
		$m.__track_lines__[81] = 'pyjamas.ui.py, line 81:\n    for (prop, args) in kwargs.items():';
		$m.__track_lines__[82] = 'pyjamas.ui.py, line 82:\n    fn = getattr(self, "set%s" % prop, None)';
		$m.__track_lines__[83] = 'pyjamas.ui.py, line 83:\n    if not fn:';
		$m.__track_lines__[84] = 'pyjamas.ui.py, line 84:\n    raise Exception("setter function for %s does not exist" % prop)';
		$m.__track_lines__[85] = 'pyjamas.ui.py, line 85:\n    args = kwargs[prop]';
		$m.__track_lines__[86] = 'pyjamas.ui.py, line 86:\n    if isinstance(args, tuple):';
		$m.__track_lines__[87] = 'pyjamas.ui.py, line 87:\n    fn(*args)';
		$m.__track_lines__[89] = 'pyjamas.ui.py, line 89:\n    fn(args)';
		$m.__track_lines__[91] = 'pyjamas.ui.py, line 91:\n    def retrieveValues(self, *args):';
		$m.__track_lines__[96] = 'pyjamas.ui.py, line 96:\n    res = {}';
		$m.__track_lines__[97] = 'pyjamas.ui.py, line 97:\n    for prop in args:';
		$m.__track_lines__[98] = 'pyjamas.ui.py, line 98:\n    fn = getattr(self, "get%s" % prop, None)';
		$m.__track_lines__[99] = 'pyjamas.ui.py, line 99:\n    if not fn:';
		$m.__track_lines__[100] = 'pyjamas.ui.py, line 100:\n    raise Exception("getter function for %s does not exist" % prop)';
		$m.__track_lines__[101] = 'pyjamas.ui.py, line 101:\n    res[prop] = fn()';
		$m.__track_lines__[103] = 'pyjamas.ui.py, line 103:\n    return res';
		$m.__track_lines__[106] = 'pyjamas.ui.py, line 105:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[107] = 'pyjamas.ui.py, line 107:\n    return self._props';
		$m.__track_lines__[110] = 'pyjamas.ui.py, line 109:\n    @classmethod ... def _getElementProps(self):';
		$m.__track_lines__[111] = 'pyjamas.ui.py, line 111:\n    return self._elem_props';
		$m.__track_lines__[113] = 'pyjamas.ui.py, line 113:\n    def setDefaults(self, defaults):';
		$m.__track_lines__[114] = 'pyjamas.ui.py, line 114:\n    divs = self.retrieveValues(wnames)';
		$m.__track_lines__[115] = 'pyjamas.ui.py, line 115:\n    for p in get_prop_widget_function_names(self._getProps()):';
		$m.__track_lines__[116] = 'pyjamas.ui.py, line 116:\n    defaults[p[PROP_NAME]] = divs[p[PROP_FNAM]]';
		$m.__track_lines__[118] = 'pyjamas.ui.py, line 118:\n    def updateInstance(self, app_context):';
		$m.__track_lines__[119] = 'pyjamas.ui.py, line 119:\n    args = {}';
		$m.__track_lines__[120] = 'pyjamas.ui.py, line 120:\n    for p in self._getProps():';
		$m.__track_lines__[121] = 'pyjamas.ui.py, line 121:\n    val = app_context.getAppProperty(p[0])';
		$m.__track_lines__[122] = 'pyjamas.ui.py, line 122:\n    convert_to_type = p[PROP_TYPE]';
		$m.__track_lines__[123] = 'pyjamas.ui.py, line 123:\n    if convert_to_type:';
		$m.__track_lines__[124] = 'pyjamas.ui.py, line 124:\n    val = convert_to_type(val) if val else None';
		$m.__track_lines__[125] = 'pyjamas.ui.py, line 125:\n    args[p[PROP_FNAM]] = val';
		$m.__track_lines__[127] = 'pyjamas.ui.py, line 127:\n    self.applyValues(**args)';
		$m.__track_lines__[129] = 'pyjamas.ui.py, line 129:\n    def setElementProperties(self, context, elemProps):';
		$m.__track_lines__[130] = 'pyjamas.ui.py, line 130:\n    args = {}';
		$m.__track_lines__[131] = 'pyjamas.ui.py, line 131:\n    for p in self._getElementProps():';
		$m.__track_lines__[132] = 'pyjamas.ui.py, line 132:\n    if elemProps.has_key(p):';
		$m.__track_lines__[133] = 'pyjamas.ui.py, line 133:\n    val = elemProps[p]';
		$m.__track_lines__[134] = 'pyjamas.ui.py, line 134:\n    convert_to_type = p[ELPROP_TYPE]';
		$m.__track_lines__[135] = 'pyjamas.ui.py, line 135:\n    if convert_to_type:';
		$m.__track_lines__[136] = 'pyjamas.ui.py, line 136:\n    val = convert_to_type(val) if val else None';
		$m.__track_lines__[138] = 'pyjamas.ui.py, line 138:\n    val = p[ELPROP_DFLT]';
		$m.__track_lines__[139] = 'pyjamas.ui.py, line 139:\n    if val is None:';
		$m.__track_lines__[140] = 'pyjamas.ui.py, line 140:\n    continue';
		$m.__track_lines__[141] = 'pyjamas.ui.py, line 141:\n    args[p[ELPROP_FNAM]] = (context, val,)';
		$m.__track_lines__[143] = 'pyjamas.ui.py, line 143:\n    self.applyValues(**args)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		$pyjs.track.module='pyjamas.ui';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=16;
		$m['HasHorizontalAlignment'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui';
			$cls_definition.__md5__ = '14e69138ac76e029b4b92da08d4f01b0';
			$pyjs.track.lineno=17;
			$cls_definition['ALIGN_LEFT'] = 'left';
			$pyjs.track.lineno=18;
			$cls_definition['ALIGN_CENTER'] = 'center';
			$pyjs.track.lineno=19;
			$cls_definition['ALIGN_RIGHT'] = 'right';
			$pyjs.track.lineno=16;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HasHorizontalAlignment', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=21;
		$m['HasVerticalAlignment'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui';
			$cls_definition.__md5__ = '54d724413769681d085281c2ea24a91f';
			$pyjs.track.lineno=22;
			$cls_definition['ALIGN_TOP'] = 'top';
			$pyjs.track.lineno=23;
			$cls_definition['ALIGN_MIDDLE'] = 'middle';
			$pyjs.track.lineno=24;
			$cls_definition['ALIGN_BOTTOM'] = 'bottom';
			$pyjs.track.lineno=21;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HasVerticalAlignment', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=26;
		$m['HasAlignment'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui';
			$cls_definition.__md5__ = 'b8484321fff8a8c6c84216125d152f6d';
			$pyjs.track.lineno=27;
			$cls_definition['ALIGN_BOTTOM'] = 'bottom';
			$pyjs.track.lineno=28;
			$cls_definition['ALIGN_MIDDLE'] = 'middle';
			$pyjs.track.lineno=29;
			$cls_definition['ALIGN_TOP'] = 'top';
			$pyjs.track.lineno=30;
			$cls_definition['ALIGN_CENTER'] = 'center';
			$pyjs.track.lineno=31;
			$cls_definition['ALIGN_LEFT'] = 'left';
			$pyjs.track.lineno=32;
			$cls_definition['ALIGN_RIGHT'] = 'right';
			$pyjs.track.lineno=26;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HasAlignment', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=34;
		$m['PROP_NAME'] = $constant_int_0;
		$pyjs.track.lineno=35;
		$m['PROP_DESC'] = $constant_int_1;
		$pyjs.track.lineno=36;
		$m['PROP_FNAM'] = $constant_int_2;
		$pyjs.track.lineno=37;
		$m['PROP_TYPE'] = $constant_int_3;
		$pyjs.track.lineno=39;
		$m['ELPROP_NAME'] = $constant_int_0;
		$pyjs.track.lineno=40;
		$m['ELPROP_DESC'] = $constant_int_1;
		$pyjs.track.lineno=41;
		$m['ELPROP_FNAM'] = $constant_int_2;
		$pyjs.track.lineno=42;
		$m['ELPROP_TYPE'] = $constant_int_3;
		$pyjs.track.lineno=43;
		$m['ELPROP_DFLT'] = $constant_int_4;
		$pyjs.track.lineno=45;
		$m['get_list_columns'] = function(props, cols) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,res,$pyjs__trackstack_size_1,idx,$iter1_iter,p,$iter2_idx,r,$pyjs__trackstack_size_2,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
			$pyjs.track={module:'pyjamas.ui',lineno:45};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui';
			$pyjs.track.lineno=45;
			$pyjs.track.lineno=46;
			res = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=47;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return props;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				p = $iter1_nextval.$nextval;
				$pyjs.track.lineno=48;
				r = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.track.lineno=49;
				$pyjs__trackstack_size_2=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return cols;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					idx = $iter2_nextval.$nextval;
					$pyjs.track.lineno=50;
					(function(){try{try{$pyjs.in_try_except += 1;
					return r['append'](p.__getitem__(idx));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=51;
				(function(){try{try{$pyjs.in_try_except += 1;
				return res['append'](r);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.ui';
			$pyjs.track.lineno=52;
			$pyjs.track.lineno=52;
			var $pyjs__ret = res;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['get_list_columns'].__name__ = 'get_list_columns';

		$m['get_list_columns'].__bind_type__ = 0;
		$m['get_list_columns'].__args__ = [null,null,['props'],['cols']];
		$pyjs.track.lineno=54;
		$m['get_prop_widget_function_names'] = function(props) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.ui',lineno:54};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui';
			$pyjs.track.lineno=54;
			$pyjs.track.lineno=55;
			$pyjs.track.lineno=55;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['get_list_columns'](props, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([$m['PROP_FNAM']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['get_prop_widget_function_names'].__name__ = 'get_prop_widget_function_names';

		$m['get_prop_widget_function_names'].__bind_type__ = 0;
		$m['get_prop_widget_function_names'].__args__ = [null,null,['props']];
		$pyjs.track.lineno=57;
		$m['Applier'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui';
			$cls_definition.__md5__ = '59cdf9f76be0950e982cd23f4bbe2d19';
			$pyjs.track.lineno=59;
			$cls_definition['_props'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs.track.lineno=60;
			$cls_definition['_elem_props'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs.track.lineno=62;
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
					if (self.prototype.__md5__ !== '59cdf9f76be0950e982cd23f4bbe2d19') {
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

				$pyjs.track={module:'pyjamas.ui', lineno:62};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=62;
				$pyjs.track.lineno=77;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(self, 'applyValues', null, kwargs, [{}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=79;
			$method = $pyjs__bind_method2('applyValues', function() {
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
					if (self.prototype.__md5__ !== '59cdf9f76be0950e982cd23f4bbe2d19') {
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
				var $iter3_idx,args,$iter3_type,prop,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval,fn;
				$pyjs.track={module:'pyjamas.ui', lineno:79};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=79;
				$pyjs.track.lineno=81;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['items']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
					prop = $tupleassign1[0];
					args = $tupleassign1[1];
					$pyjs.track.lineno=82;
					fn = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, (function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('set%s', prop);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})(), null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
					$pyjs.track.lineno=83;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool'](fn));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
						$pyjs.track.lineno=84;
						$pyjs.__active_exception_stack__ = null;
						throw ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['Exception']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['sprintf']('setter function for %s does not exist', prop);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
					}
					$pyjs.track.lineno=85;
					args = kwargs.__getitem__(prop);
					$pyjs.track.lineno=86;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['isinstance'](args, $p['tuple']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
						$pyjs.track.lineno=87;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $pyjs_kwargs_call(null, fn, args, null, [{}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					}
					else {
						$pyjs.track.lineno=89;
						(function(){try{try{$pyjs.in_try_except += 1;
						return fn(args);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['applyValues'] = $method;
			$pyjs.track.lineno=91;
			$method = $pyjs__bind_method2('retrieveValues', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

					if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '59cdf9f76be0950e982cd23f4bbe2d19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var res,prop,$iter4_idx,$pyjs__trackstack_size_1,$iter4_type,$iter4_nextval,$iter4_array,$iter4_iter,fn;
				$pyjs.track={module:'pyjamas.ui', lineno:91};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=91;
				$pyjs.track.lineno=96;
				res = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.track.lineno=97;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return args;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
					prop = $iter4_nextval.$nextval;
					$pyjs.track.lineno=98;
					fn = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, (function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('get%s', prop);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
					$pyjs.track.lineno=99;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool'](fn));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
						$pyjs.track.lineno=100;
						$pyjs.__active_exception_stack__ = null;
						throw ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['Exception']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['sprintf']('getter function for %s does not exist', prop);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
					}
					$pyjs.track.lineno=101;
					(function(){try{try{$pyjs.in_try_except += 1;
					return res.__setitem__(prop, (function(){try{try{$pyjs.in_try_except += 1;
					return fn();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=103;
				$pyjs.track.lineno=103;
				var $pyjs__ret = res;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['retrieveValues'] = $method;
			$pyjs.track.lineno=106;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 0, arguments.length);
    var self = this.prototype;

				$pyjs.track={module:'pyjamas.ui', lineno:106};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=106;
				$pyjs.track.lineno=107;
				$pyjs.track.lineno=107;
				var $pyjs__ret = $p['getattr'](self, '_props');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs.track.lineno=110;
			$method = $pyjs__bind_method2('_getElementProps', function() {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 0, arguments.length);
    var self = this.prototype;

				$pyjs.track={module:'pyjamas.ui', lineno:110};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=110;
				$pyjs.track.lineno=111;
				$pyjs.track.lineno=111;
				var $pyjs__ret = $p['getattr'](self, '_elem_props');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getElementProps'] = $method;
			$pyjs.track.lineno=113;
			$method = $pyjs__bind_method2('setDefaults', function(defaults) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					defaults = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '59cdf9f76be0950e982cd23f4bbe2d19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_array,$pyjs__trackstack_size_1,p,$iter5_iter,$iter5_idx,$iter5_type,divs;
				$pyjs.track={module:'pyjamas.ui', lineno:113};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=113;
				$pyjs.track.lineno=114;
				divs = (function(){try{try{$pyjs.in_try_except += 1;
				return self['retrieveValues']((typeof wnames == "undefined"?$m.wnames:wnames));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs.track.lineno=115;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m['get_prop_widget_function_names']((function(){try{try{$pyjs.in_try_except += 1;
				return self['_getProps']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					p = $iter5_nextval.$nextval;
					$pyjs.track.lineno=116;
					(function(){try{try{$pyjs.in_try_except += 1;
					return defaults.__setitem__(p.__getitem__($m['PROP_NAME']), divs.__getitem__(p.__getitem__($m['PROP_FNAM'])));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['defaults']]);
			$cls_definition['setDefaults'] = $method;
			$pyjs.track.lineno=118;
			$method = $pyjs__bind_method2('updateInstance', function(app_context) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					app_context = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '59cdf9f76be0950e982cd23f4bbe2d19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var val,$iter6_idx,$iter6_type,convert_to_type,args,p,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
				$pyjs.track={module:'pyjamas.ui', lineno:118};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=118;
				$pyjs.track.lineno=119;
				args = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs.track.lineno=120;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return self['_getProps']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
					p = $iter6_nextval.$nextval;
					$pyjs.track.lineno=121;
					val = (function(){try{try{$pyjs.in_try_except += 1;
					return app_context['getAppProperty'](p.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
					$pyjs.track.lineno=122;
					convert_to_type = p.__getitem__($m['PROP_TYPE']);
					$pyjs.track.lineno=123;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](convert_to_type);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
						$pyjs.track.lineno=124;
						val = ($p['bool'](val)? ((function(){try{try{$pyjs.in_try_except += 1;
						return convert_to_type(val);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) : (null));
					}
					$pyjs.track.lineno=125;
					(function(){try{try{$pyjs.in_try_except += 1;
					return args.__setitem__(p.__getitem__($m['PROP_FNAM']), val);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=127;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['app_context']]);
			$cls_definition['updateInstance'] = $method;
			$pyjs.track.lineno=129;
			$method = $pyjs__bind_method2('setElementProperties', function(context, elemProps) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					context = arguments[1];
					elemProps = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '59cdf9f76be0950e982cd23f4bbe2d19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter7_array,val,$iter7_nextval,convert_to_type,$iter7_iter,args,p,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
				$pyjs.track={module:'pyjamas.ui', lineno:129};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=129;
				$pyjs.track.lineno=130;
				args = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs.track.lineno=131;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return self['_getElementProps']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
					p = $iter7_nextval.$nextval;
					$pyjs.track.lineno=132;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return elemProps['has_key'](p);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
						$pyjs.track.lineno=133;
						val = elemProps.__getitem__(p);
						$pyjs.track.lineno=134;
						convert_to_type = p.__getitem__($m['ELPROP_TYPE']);
						$pyjs.track.lineno=135;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](convert_to_type);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
							$pyjs.track.lineno=136;
							val = ($p['bool'](val)? ((function(){try{try{$pyjs.in_try_except += 1;
							return convert_to_type(val);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) : (null));
						}
					}
					else {
						$pyjs.track.lineno=138;
						val = p.__getitem__($m['ELPROP_DFLT']);
						$pyjs.track.lineno=139;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']($p['op_is'](val, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
							$pyjs.track.lineno=140;
							continue;
						}
					}
					$pyjs.track.lineno=141;
					(function(){try{try{$pyjs.in_try_except += 1;
					return args.__setitem__(p.__getitem__($m['ELPROP_FNAM']), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['tuple']([context, val]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=143;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['context'],['elemProps']]);
			$cls_definition['setElementProperties'] = $method;
			$pyjs.track.lineno=57;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Applier', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui */


/* end module: pyjamas.ui */


