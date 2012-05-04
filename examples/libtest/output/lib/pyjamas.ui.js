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
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,res,$pyjs__trackstack_size_1,idx,$iter1_iter,p,$iter2_idx,r,$pyjs__trackstack_size_2,$iter1_array,$iter2_type,$1,$2,$iter2_array,$iter1_idx;
			$pyjs.track={module:'pyjamas.ui',lineno:45};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui';
			$pyjs.track.lineno=45;
			$pyjs.track.lineno=46;
			res = $p['list']([]);
			$pyjs.track.lineno=47;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = props;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				p = $iter1_nextval;
				$pyjs.track.lineno=48;
				r = $p['tuple']([]);
				$pyjs.track.lineno=49;
				$pyjs__trackstack_size_2=$pyjs.trackstack.length;
				$iter2_iter = cols;
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					idx = $iter2_nextval;
					$pyjs.track.lineno=50;
					r['append']((typeof ($1=p).__array != 'undefined'?
						((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(idx)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=51;
				res['append'](r);
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
			var $pyjs__ret = $m['get_list_columns'](props, $p['tuple']([$m['PROP_FNAM']]));
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
			$cls_definition['_props'] = $p['list']([]);
			$pyjs.track.lineno=60;
			$cls_definition['_elem_props'] = $p['list']([]);
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
				$pyjs_kwargs_call(self, 'applyValues', null, kwargs, [{}]);
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
				var $iter3_idx,args,$iter3_type,prop,$bool2,$bool3,$bool1,$iter3_iter,$iter3_array,$4,$3,$pyjs__trackstack_size_1,$iter3_nextval,fn;
				$pyjs.track={module:'pyjamas.ui', lineno:79};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=79;
				$pyjs.track.lineno=81;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = kwargs['items']();
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter3_nextval, 2, null);
					prop = $tupleassign1[0];
					args = $tupleassign1[1];
					$pyjs.track.lineno=82;
					fn = $p['getattr'](self, $p['sprintf']('set%s', prop), null);
					$pyjs.track.lineno=83;
					if ((($bool2=!(($bool1=fn) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1.__nonzero__=='function'?
								$bool1.__nonzero__() :
								(typeof $bool1.__len__=='function'?
									($bool1.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
							false :
							(typeof $bool2=='object'?
								(typeof $bool2.__nonzero__=='function'?
									$bool2.__nonzero__() :
									(typeof $bool2.__len__=='function'?
										($bool2.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=84;
						$pyjs.__active_exception_stack__ = null;
						throw ($p['Exception']($p['sprintf']('setter function for %s does not exist', prop)));
					}
					$pyjs.track.lineno=85;
					args = (typeof ($3=kwargs).__array != 'undefined'?
						((typeof $3.__array[$4=prop]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(prop));
					$pyjs.track.lineno=86;
					if ((($bool3=$p['isinstance'](args, $p['tuple'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
							false :
							(typeof $bool3=='object'?
								(typeof $bool3.__nonzero__=='function'?
									$bool3.__nonzero__() :
									(typeof $bool3.__len__=='function'?
										($bool3.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=87;
						$pyjs_kwargs_call(null, fn, args, null, [{}]);
					}
					else {
						$pyjs.track.lineno=89;
						fn(args);
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
				var $bool4,res,prop,$iter4_idx,$pyjs__trackstack_size_1,$iter4_type,$iter4_nextval,$iter4_array,$bool5,$iter4_iter,fn;
				$pyjs.track={module:'pyjamas.ui', lineno:91};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=91;
				$pyjs.track.lineno=96;
				res = $p['dict']([]);
				$pyjs.track.lineno=97;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = args;
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					prop = $iter4_nextval;
					$pyjs.track.lineno=98;
					fn = $p['getattr'](self, $p['sprintf']('get%s', prop), null);
					$pyjs.track.lineno=99;
					if ((($bool5=!(($bool4=fn) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
							false :
							(typeof $bool5=='object'?
								(typeof $bool5.__nonzero__=='function'?
									$bool5.__nonzero__() :
									(typeof $bool5.__len__=='function'?
										($bool5.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=100;
						$pyjs.__active_exception_stack__ = null;
						throw ($p['Exception']($p['sprintf']('getter function for %s does not exist', prop)));
					}
					$pyjs.track.lineno=101;
					res.__setitem__(prop, fn());
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
				var $iter5_nextval,$10,$8,$iter5_array,$pyjs__trackstack_size_1,$7,p,$9,$iter5_iter,$iter5_idx,$6,$iter5_type,$5,divs;
				$pyjs.track={module:'pyjamas.ui', lineno:113};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=113;
				$pyjs.track.lineno=114;
				divs = self['retrieveValues']((typeof wnames == "undefined"?$m.wnames:wnames));
				$pyjs.track.lineno=115;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = $m['get_prop_widget_function_names'](self['_getProps']());
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					p = $iter5_nextval;
					$pyjs.track.lineno=116;
					defaults.__setitem__((typeof ($9=p).__array != 'undefined'?
						((typeof $9.__array[$10=$m['PROP_NAME']]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__($m['PROP_NAME'])), (typeof ($7=divs).__array != 'undefined'?
						((typeof $7.__array[$8=(typeof ($5=p).__array != 'undefined'?
						((typeof $5.__array[$6=$m['PROP_FNAM']]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($m['PROP_FNAM']))]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__((typeof ($5=p).__array != 'undefined'?
						((typeof $5.__array[$6=$m['PROP_FNAM']]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($m['PROP_FNAM'])))));
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
				var $14,$15,$16,$11,$iter6_idx,$13,$iter6_type,convert_to_type,args,p,$iter6_array,val,$bool6,$12,$pyjs__trackstack_size_1,$iter6_iter,$bool7,$iter6_nextval;
				$pyjs.track={module:'pyjamas.ui', lineno:118};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=118;
				$pyjs.track.lineno=119;
				args = $p['dict']([]);
				$pyjs.track.lineno=120;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = self['_getProps']();
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					p = $iter6_nextval;
					$pyjs.track.lineno=121;
					val = app_context['getAppProperty']((typeof ($11=p).__array != 'undefined'?
						((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__($constant_int_0)));
					$pyjs.track.lineno=122;
					convert_to_type = (typeof ($13=p).__array != 'undefined'?
						((typeof $13.__array[$14=$m['PROP_TYPE']]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__($m['PROP_TYPE']));
					$pyjs.track.lineno=123;
					if ((($bool6=convert_to_type) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
							false :
							(typeof $bool6=='object'?
								(typeof $bool6.__nonzero__=='function'?
									$bool6.__nonzero__() :
									(typeof $bool6.__len__=='function'?
										($bool6.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=124;
						val = ((($bool7=val) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7.__nonzero__=='function'?
									$bool7.__nonzero__() :
									(typeof $bool7.__len__=='function'?
										($bool7.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )? (convert_to_type(val)) : (null));
					}
					$pyjs.track.lineno=125;
					args.__setitem__((typeof ($15=p).__array != 'undefined'?
						((typeof $15.__array[$16=$m['PROP_FNAM']]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__($m['PROP_FNAM'])), val);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=127;
				$pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
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
				var $bool10,convert_to_type,val,$21,$20,$22,$24,$bool11,$iter7_type,$iter7_iter,args,$iter7_idx,$bool8,$bool9,$17,$iter7_nextval,$iter7_array,$18,$19,p,$pyjs__trackstack_size_1,$23;
				$pyjs.track={module:'pyjamas.ui', lineno:129};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=129;
				$pyjs.track.lineno=130;
				args = $p['dict']([]);
				$pyjs.track.lineno=131;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = self['_getElementProps']();
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					p = $iter7_nextval;
					$pyjs.track.lineno=132;
					if ((($bool8=elemProps['has_key'](p)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
							false :
							(typeof $bool8=='object'?
								(typeof $bool8.__nonzero__=='function'?
									$bool8.__nonzero__() :
									(typeof $bool8.__len__=='function'?
										($bool8.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=133;
						val = (typeof ($17=elemProps).__array != 'undefined'?
							((typeof $17.__array[$18=p]) != 'undefined'?$17.__array[$18]:
								$17.__getitem__($18)):
								$17.__getitem__(p));
						$pyjs.track.lineno=134;
						convert_to_type = (typeof ($19=p).__array != 'undefined'?
							((typeof $19.__array[$20=$m['ELPROP_TYPE']]) != 'undefined'?$19.__array[$20]:
								$19.__getitem__($20)):
								$19.__getitem__($m['ELPROP_TYPE']));
						$pyjs.track.lineno=135;
						if ((($bool9=convert_to_type) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
								false :
								(typeof $bool9=='object'?
									(typeof $bool9.__nonzero__=='function'?
										$bool9.__nonzero__() :
										(typeof $bool9.__len__=='function'?
											($bool9.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=136;
							val = ((($bool10=val) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
								false :
								(typeof $bool10=='object'?
									(typeof $bool10.__nonzero__=='function'?
										$bool10.__nonzero__() :
										(typeof $bool10.__len__=='function'?
											($bool10.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )? (convert_to_type(val)) : (null));
						}
					}
					else {
						$pyjs.track.lineno=138;
						val = (typeof ($21=p).__array != 'undefined'?
							((typeof $21.__array[$22=$m['ELPROP_DFLT']]) != 'undefined'?$21.__array[$22]:
								$21.__getitem__($22)):
								$21.__getitem__($m['ELPROP_DFLT']));
						$pyjs.track.lineno=139;
						if ((($bool11=$p['op_is'](val, null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
								false :
								(typeof $bool11=='object'?
									(typeof $bool11.__nonzero__=='function'?
										$bool11.__nonzero__() :
										(typeof $bool11.__len__=='function'?
											($bool11.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=140;
							continue;
						}
					}
					$pyjs.track.lineno=141;
					args.__setitem__((typeof ($23=p).__array != 'undefined'?
						((typeof $23.__array[$24=$m['ELPROP_FNAM']]) != 'undefined'?$23.__array[$24]:
							$23.__getitem__($24)):
							$23.__getitem__($m['ELPROP_FNAM'])), $p['tuple']([context, val]));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui';
				$pyjs.track.lineno=143;
				$pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
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


