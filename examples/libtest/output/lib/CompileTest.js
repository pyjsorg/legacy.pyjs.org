/* start module: CompileTest */
$pyjs.loaded_modules['CompileTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['CompileTest'].__was_initialized__) return $pyjs.loaded_modules['CompileTest'];
	var $m = $pyjs.loaded_modules["CompileTest"];
	$m.__repr__ = function() { return "<module: CompileTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CompileTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'CompileTest.py, line 1:\n    """';
		$m.__track_lines__[8] = 'CompileTest.py, line 8:\n    import UnitTest';
		$m.__track_lines__[9] = 'CompileTest.py, line 9:\n    gl = None';
		$m.__track_lines__[10] = 'CompileTest.py, line 10:\n    class CompileTest(UnitTest.UnitTest):';
		$m.__track_lines__[11] = 'CompileTest.py, line 11:\n    def test_issue_432(self):';
		$m.__track_lines__[13] = 'CompileTest.py, line 13:\n    x, y = 1, 2';
		$m.__track_lines__[14] = 'CompileTest.py, line 14:\n    del x, y';
		$m.__track_lines__[16] = 'CompileTest.py, line 16:\n    def test_issue_433(self):';
		$m.__track_lines__[18] = 'CompileTest.py, line 18:\n    for x in [1, 2] + [3, 4]:';
		$m.__track_lines__[19] = 'CompileTest.py, line 19:\n    pass';
		$m.__track_lines__[21] = 'CompileTest.py, line 21:\n    def test_discard_expressions(self):';
		$m.__track_lines__[23] = 'CompileTest.py, line 23:\n    x = 10';
		$m.__track_lines__[24] = 'CompileTest.py, line 24:\n    x';
		$m.__track_lines__[25] = 'CompileTest.py, line 25:\n    "some string"';
		$m.__track_lines__[28] = 'CompileTest.py, line 28:\n    def test_callfunc_expressions(self):';
		$m.__track_lines__[29] = 'CompileTest.py, line 29:\n    s = "123"';
		$m.__track_lines__[30] = "CompileTest.py, line 30:\n    x = ('a' + 'b').strip()";
		$m.__track_lines__[31] = 'CompileTest.py, line 31:\n    ("    " + s).rstrip()';
		$m.__track_lines__[34] = 'CompileTest.py, line 34:\n    def test_function_deep_args_unpacking(self):';
		$m.__track_lines__[40] = "CompileTest.py, line 40:\n    self.fail('Bug #527, Function deep args unpacking fails to compile')";
		$m.__track_lines__[42] = 'CompileTest.py, line 42:\n    def test_subscript_tuple(self):';
		$m.__track_lines__[43] = 'CompileTest.py, line 43:\n    d = {}';
		$m.__track_lines__[44] = 'CompileTest.py, line 44:\n    d[(1,2)] = 3';
		$m.__track_lines__[45] = 'CompileTest.py, line 45:\n    x = d[1,2]';
		$m.__track_lines__[46] = 'CompileTest.py, line 46:\n    d[3,4] = 5';
		$m.__track_lines__[49] = 'CompileTest.py, line 49:\n    def test_bad_import(self):';
		$m.__track_lines__[50] = 'CompileTest.py, line 50:\n    try: import _nonexistentmodule';
		$m.__track_lines__[51] = 'CompileTest.py, line 51:\n    except: pass';
		$m.__track_lines__[53] = 'CompileTest.py, line 53:\n    try: import _importtimeerror';
		$m.__track_lines__[54] = 'CompileTest.py, line 54:\n    except: pass';
		$m.__track_lines__[56] = 'CompileTest.py, line 56:\n    """';
		$m.__track_lines__[60] = 'CompileTest.py, line 60:\n    self.fail("try: import badcode/except does not catch SyntaxError, #592")';
		$m.__track_lines__[62] = 'CompileTest.py, line 62:\n    """';
		$m.__track_lines__[66] = 'CompileTest.py, line 66:\n    self.fail("try: import badcode/except does not catch TranslationError, #592")';
		$m.__track_lines__[68] = 'CompileTest.py, line 68:\n    def testClassScopeExceptions(self):';
		$m.__track_lines__[76] = 'CompileTest.py, line 76:\n    self.fail("try/catch in class definition scope, issue #593")';
		$m.__track_lines__[78] = 'CompileTest.py, line 78:\n    def testWithFlowControl(self):';
		$m.__track_lines__[112] = 'CompileTest.py, line 112:\n    self.fail("Flow control statements inside with, issue #625")';

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_10 = new $p['int'](10);
		$pyjs.track.module='CompileTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=8;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$m['gl'] = null;
		$pyjs.track.lineno=10;
		$m['CompileTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'CompileTest';
			$cls_definition.__md5__ = 'a85e3ab7355364d3464ba257c98ef172';
			$pyjs.track.lineno=11;
			$method = $pyjs__bind_method2('test_issue_432', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var y,x;
				$pyjs.track={module:'CompileTest', lineno:11};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=13;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$constant_int_1, $constant_int_2]), 2, null);
				x = $tupleassign1[0];
				y = $tupleassign1[1];
				$pyjs.track.lineno=14;
				$pyjs.track.lineno=14;
				$p['_del'](x);
				$pyjs.track.lineno=14;
				$p['_del'](y);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_issue_432'] = $method;
			$pyjs.track.lineno=16;
			$method = $pyjs__bind_method2('test_issue_433', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,$add2,$add1,$iter1_array,$pyjs__trackstack_size_1,x,$iter1_idx;
				$pyjs.track={module:'CompileTest', lineno:16};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=18;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (typeof ($add1=$p['list']([$constant_int_1, $constant_int_2]))==typeof ($add2=$p['list']([$constant_int_3, $constant_int_4])) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					x = $iter1_nextval;
					$pyjs.track.lineno=19;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='CompileTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_issue_433'] = $method;
			$pyjs.track.lineno=21;
			$method = $pyjs__bind_method2('test_discard_expressions', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x;
				$pyjs.track={module:'CompileTest', lineno:21};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=21;
				$p['tuple']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=23;
				x = $constant_int_10;
				$pyjs.track.lineno=24;
				x;
				$pyjs.track.lineno=25;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_discard_expressions'] = $method;
			$pyjs.track.lineno=28;
			$method = $pyjs__bind_method2('test_callfunc_expressions', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,s,$add6,$add4,$add5,x;
				$pyjs.track={module:'CompileTest', lineno:28};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=28;
				$pyjs.track.lineno=29;
				s = '123';
				$pyjs.track.lineno=30;
				x = (typeof ($add3='a')==typeof ($add4='b') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))['strip']();
				$pyjs.track.lineno=31;
				(typeof ($add5='    ')==typeof ($add6=s) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))['rstrip']();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_callfunc_expressions'] = $method;
			$pyjs.track.lineno=34;
			$method = $pyjs__bind_method2('test_function_deep_args_unpacking', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'CompileTest', lineno:34};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=34;
				$pyjs.track.lineno=40;
				self['fail']('Bug #527, Function deep args unpacking fails to compile');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_function_deep_args_unpacking'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('test_subscript_tuple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x,$2,d,$1;
				$pyjs.track={module:'CompileTest', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				d = $p['dict']([]);
				$pyjs.track.lineno=44;
				d.__setitem__($p['tuple']([$constant_int_1, $constant_int_2]), $constant_int_3);
				$pyjs.track.lineno=45;
				x = (typeof ($1=d).__array != 'undefined'?
					((typeof $1.__array[$2=$p['tuple']([$constant_int_1, $constant_int_2])]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($p['tuple']([$constant_int_1, $constant_int_2])));
				$pyjs.track.lineno=46;
				d.__setitem__($p['tuple']([$constant_int_3, $constant_int_4]), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_subscript_tuple'] = $method;
			$pyjs.track.lineno=49;
			$method = $pyjs__bind_method2('test_bad_import', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _importtimeerror,$pyjs_try_err,_nonexistentmodule;
				$pyjs.track={module:'CompileTest', lineno:49};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=49;
				$pyjs.track.lineno=50;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=50;
					$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
					_nonexistentmodule = $p['___import___']('_nonexistentmodule', null);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
					$pyjs.track.module='CompileTest';
					if (true) {
						$pyjs.track.lineno=51;
					}
				}
				$pyjs.track.lineno=53;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=53;
					$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
					_importtimeerror = $p['___import___']('_importtimeerror', null);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
					$pyjs.track.module='CompileTest';
					if (true) {
						$pyjs.track.lineno=54;
					}
				}
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=60;
				self['fail']('try: import badcode/except does not catch SyntaxError, #592');
				$pyjs.track.lineno=62;
				$pyjs.track.lineno=66;
				self['fail']('try: import badcode/except does not catch TranslationError, #592');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_bad_import'] = $method;
			$pyjs.track.lineno=68;
			$method = $pyjs__bind_method2('testClassScopeExceptions', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'CompileTest', lineno:68};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=68;
				$pyjs.track.lineno=76;
				self['fail']('try/catch in class definition scope, issue #593');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassScopeExceptions'] = $method;
			$pyjs.track.lineno=78;
			$method = $pyjs__bind_method2('testWithFlowControl', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a85e3ab7355364d3464ba257c98ef172') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'CompileTest', lineno:78};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CompileTest';
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=112;
				self['fail']('Flow control statements inside with, issue #625');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testWithFlowControl'] = $method;
			$pyjs.track.lineno=10;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('CompileTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end CompileTest */


/* end module: CompileTest */


/*
PYJS_DEPS: ['UnitTest', '_nonexistentmodule', '_importtimeerror']
*/
