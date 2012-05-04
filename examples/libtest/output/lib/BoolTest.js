/* start module: BoolTest */
$pyjs.loaded_modules['BoolTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['BoolTest'].__was_initialized__) return $pyjs.loaded_modules['BoolTest'];
	var $m = $pyjs.loaded_modules["BoolTest"];
	$m.__repr__ = function() { return "<module: BoolTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'BoolTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'BoolTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'BoolTest.py, line 3:\n    class Stupid:';
		$m.__track_lines__[4] = 'BoolTest.py, line 4:\n    pass';
		$m.__track_lines__[6] = 'BoolTest.py, line 6:\n    class Foo:';
		$m.__track_lines__[8] = 'BoolTest.py, line 8:\n    def __init__(self, v):';
		$m.__track_lines__[9] = 'BoolTest.py, line 9:\n    self._v = v';
		$m.__track_lines__[11] = 'BoolTest.py, line 11:\n    def __nonzero__(self):';
		$m.__track_lines__[12] = 'BoolTest.py, line 12:\n    return self._v>0';
		$m.__track_lines__[14] = 'BoolTest.py, line 14:\n    def __len__(self):';
		$m.__track_lines__[15] = 'BoolTest.py, line 15:\n    return 1';
		$m.__track_lines__[17] = 'BoolTest.py, line 17:\n    class Bar:';
		$m.__track_lines__[19] = 'BoolTest.py, line 19:\n    def __init__(self, v):';
		$m.__track_lines__[20] = 'BoolTest.py, line 20:\n    self._v = v';
		$m.__track_lines__[22] = 'BoolTest.py, line 22:\n    def __len__(self):';
		$m.__track_lines__[23] = 'BoolTest.py, line 23:\n    return self._v';
		$m.__track_lines__[26] = 'BoolTest.py, line 26:\n    class BoolTest(UnitTest):';
		$m.__track_lines__[28] = 'BoolTest.py, line 28:\n    def testBaseTypes(self):';
		$m.__track_lines__[30] = 'BoolTest.py, line 30:\n    self.assertTrue(True)';
		$m.__track_lines__[31] = 'BoolTest.py, line 31:\n    self.assertFalse(False)';
		$m.__track_lines__[34] = 'BoolTest.py, line 34:\n    self.assertTrue(bool(True))';
		$m.__track_lines__[35] = 'BoolTest.py, line 35:\n    self.assertFalse(bool(False))';
		$m.__track_lines__[36] = 'BoolTest.py, line 36:\n    self.assertTrue(True == True)';
		$m.__track_lines__[37] = 'BoolTest.py, line 37:\n    self.assertFalse(False == True)';
		$m.__track_lines__[40] = 'BoolTest.py, line 40:\n    self.assertTrue(bool(1))';
		$m.__track_lines__[41] = 'BoolTest.py, line 41:\n    self.assertFalse(bool(0))';
		$m.__track_lines__[42] = 'BoolTest.py, line 42:\n    self.assertTrue(1)';
		$m.__track_lines__[43] = 'BoolTest.py, line 43:\n    self.assertFalse(0)';
		$m.__track_lines__[46] = "BoolTest.py, line 46:\n    self.assertTrue(bool('a'))";
		$m.__track_lines__[47] = "BoolTest.py, line 47:\n    self.assertFalse(bool(''))";
		$m.__track_lines__[48] = "BoolTest.py, line 48:\n    self.assertTrue('a')";
		$m.__track_lines__[49] = "BoolTest.py, line 49:\n    self.assertFalse('')";
		$m.__track_lines__[51] = 'BoolTest.py, line 51:\n    def testObjects(self):';
		$m.__track_lines__[54] = 'BoolTest.py, line 54:\n    self.assertTrue(bool(Stupid()))';
		$m.__track_lines__[55] = 'BoolTest.py, line 55:\n    self.assertTrue(Stupid())';
		$m.__track_lines__[58] = 'BoolTest.py, line 58:\n    self.assertFalse(bool(Foo(0)))';
		$m.__track_lines__[59] = 'BoolTest.py, line 59:\n    self.assertTrue(bool(Foo(1)))';
		$m.__track_lines__[60] = 'BoolTest.py, line 60:\n    self.assertFalse(Foo(0))';
		$m.__track_lines__[61] = 'BoolTest.py, line 61:\n    self.assertTrue(Foo(1))';
		$m.__track_lines__[64] = 'BoolTest.py, line 64:\n    self.assertFalse(bool(Bar(0)))';
		$m.__track_lines__[65] = 'BoolTest.py, line 65:\n    self.assertTrue(bool(Bar(1)))';
		$m.__track_lines__[66] = 'BoolTest.py, line 66:\n    self.assertFalse(Bar(0))';
		$m.__track_lines__[67] = 'BoolTest.py, line 67:\n    self.assertTrue(Bar(1))';
		$m.__track_lines__[71] = 'BoolTest.py, line 71:\n    self.assertFalse(bool([]))';
		$m.__track_lines__[72] = 'BoolTest.py, line 72:\n    self.assertTrue(bool([1]))';
		$m.__track_lines__[73] = 'BoolTest.py, line 73:\n    self.assertFalse([])';
		$m.__track_lines__[74] = 'BoolTest.py, line 74:\n    self.assertTrue([1])';
		$m.__track_lines__[77] = 'BoolTest.py, line 77:\n    self.assertFalse(bool({}))';
		$m.__track_lines__[78] = "BoolTest.py, line 78:\n    self.assertTrue(bool({'x':1}))";
		$m.__track_lines__[79] = 'BoolTest.py, line 79:\n    self.assertFalse({})';
		$m.__track_lines__[80] = "BoolTest.py, line 80:\n    self.assertTrue({'x':1})";
		$m.__track_lines__[83] = 'BoolTest.py, line 83:\n    def testIfStatement(self):';
		$m.__track_lines__[85] = 'BoolTest.py, line 85:\n    if({}):';
		$m.__track_lines__[86] = 'BoolTest.py, line 86:\n    self.fail("Empty dict should not evaluate to True in If")';
		$m.__track_lines__[88] = 'BoolTest.py, line 88:\n    self.assertTrue(True)';
		$m.__track_lines__[89] = 'BoolTest.py, line 89:\n    if({1: 5}):';
		$m.__track_lines__[90] = 'BoolTest.py, line 90:\n    self.assertTrue(True)';
		$m.__track_lines__[92] = 'BoolTest.py, line 92:\n    self.fail("Non-empty dict should evaluate to True in If")';
		$m.__track_lines__[93] = 'BoolTest.py, line 93:\n    if([]):';
		$m.__track_lines__[94] = 'BoolTest.py, line 94:\n    self.fail("Empty dict should not evaluate to True in If")';
		$m.__track_lines__[96] = 'BoolTest.py, line 96:\n    self.assertTrue(True)';
		$m.__track_lines__[97] = 'BoolTest.py, line 97:\n    if([1]):';
		$m.__track_lines__[98] = 'BoolTest.py, line 98:\n    self.assertTrue(True)';
		$m.__track_lines__[100] = 'BoolTest.py, line 100:\n    self.fail("Non-empty lists should evaluate to True in If")';
		$m.__track_lines__[101] = 'BoolTest.py, line 101:\n    if not []:';
		$m.__track_lines__[102] = 'BoolTest.py, line 102:\n    self.assertTrue(True)';
		$m.__track_lines__[104] = 'BoolTest.py, line 104:\n    self.fail("Non empty lists should not evaluate to True in If")';
		$m.__track_lines__[105] = 'BoolTest.py, line 105:\n    if [1] and {}:';
		$m.__track_lines__[106] = 'BoolTest.py, line 106:\n    self.fail("\'[1] and {}\' shoul evaluate to False")';
		$m.__track_lines__[108] = 'BoolTest.py, line 108:\n    self.assertTrue(True)';
		$m.__track_lines__[109] = 'BoolTest.py, line 109:\n    if [] or not {}:';
		$m.__track_lines__[110] = 'BoolTest.py, line 110:\n    self.assertTrue(True)';
		$m.__track_lines__[112] = 'BoolTest.py, line 112:\n    self.fail("\'[] or not {}\' shoul evaluate to True")';
		$m.__track_lines__[113] = 'BoolTest.py, line 113:\n    if [] and not {}:';
		$m.__track_lines__[114] = 'BoolTest.py, line 114:\n    self.fail("\'[] and not {}\' shoul evaluate to False")';
		$m.__track_lines__[116] = 'BoolTest.py, line 116:\n    self.assertTrue(True)';
		$m.__track_lines__[117] = 'BoolTest.py, line 117:\n    if 0 < 1 < 2:';
		$m.__track_lines__[118] = 'BoolTest.py, line 118:\n    self.assertTrue(True)';
		$m.__track_lines__[120] = 'BoolTest.py, line 120:\n    self.fail("if 0 < 1 < 2")';
		$m.__track_lines__[121] = 'BoolTest.py, line 121:\n    i = [0, 2, 4]';
		$m.__track_lines__[122] = 'BoolTest.py, line 122:\n    i = i.__iter__();';
		$m.__track_lines__[123] = 'BoolTest.py, line 123:\n    if 0 < i.next() < 4:';
		$m.__track_lines__[124] = 'BoolTest.py, line 124:\n    self.fail("iter (0)")';
		$m.__track_lines__[126] = 'BoolTest.py, line 126:\n    self.assertTrue(True)';
		$m.__track_lines__[127] = 'BoolTest.py, line 127:\n    if 0 < i.next() < 4:';
		$m.__track_lines__[128] = 'BoolTest.py, line 128:\n    self.assertTrue(True)';
		$m.__track_lines__[130] = 'BoolTest.py, line 130:\n    self.fail("iter (2)")';
		$m.__track_lines__[131] = 'BoolTest.py, line 131:\n    if 0 < i.next() < 4:';
		$m.__track_lines__[132] = 'BoolTest.py, line 132:\n    self.fail("iter (4)")';
		$m.__track_lines__[134] = 'BoolTest.py, line 134:\n    self.assertTrue(True)';
		$m.__track_lines__[137] = 'BoolTest.py, line 137:\n    def testWhileStatement(self):';
		$m.__track_lines__[138] = 'BoolTest.py, line 138:\n    while([]):';
		$m.__track_lines__[139] = 'BoolTest.py, line 139:\n    self.fail("Empty lists should not evaluate to True in While")';
		$m.__track_lines__[140] = 'BoolTest.py, line 140:\n    break;';
		$m.__track_lines__[141] = 'BoolTest.py, line 141:\n    while([1]):';
		$m.__track_lines__[142] = 'BoolTest.py, line 142:\n    return';
		$m.__track_lines__[143] = 'BoolTest.py, line 143:\n    self.fail("None-empty lists should evaluate to True in While")';
		$m.__track_lines__[145] = 'BoolTest.py, line 145:\n    def testLogic(self):';
		$m.__track_lines__[147] = 'BoolTest.py, line 147:\n    x = 0 or None';
		$m.__track_lines__[148] = 'BoolTest.py, line 148:\n    self.assertEqual(x, None, "0 or None should be None not %s" % repr(x) )';
		$m.__track_lines__[150] = 'BoolTest.py, line 150:\n    x = None and None';
		$m.__track_lines__[151] = 'BoolTest.py, line 151:\n    self.assertEqual(x, None, "None or None should be None not %s" % repr(x) )';
		$m.__track_lines__[153] = 'BoolTest.py, line 153:\n    x = False or None';
		$m.__track_lines__[154] = 'BoolTest.py, line 154:\n    self.assertEqual(x, None, "False or None should be None not %s" % repr(x) )';
		$m.__track_lines__[156] = 'BoolTest.py, line 156:\n    self.assertTrue((1 or 2) is 1, "(1 or 2) is 1")';
		$m.__track_lines__[157] = 'BoolTest.py, line 157:\n    self.assertTrue((0 or 2) is 2, "(0 or 2) is 2")';
		$m.__track_lines__[158] = 'BoolTest.py, line 158:\n    self.assertTrue((False or 0) is 0, "(False or 0) is 0")';
		$m.__track_lines__[159] = 'BoolTest.py, line 159:\n    self.assertTrue((0 or False) is False, "(0 or False) is False")';
		$m.__track_lines__[160] = 'BoolTest.py, line 160:\n    self.assertTrue((0 and 2) is 0, "(0 and 2) is 0")';
		$m.__track_lines__[161] = 'BoolTest.py, line 161:\n    self.assertTrue((1 and 2) is 2, "(1 and 2) is 2")';
		$m.__track_lines__[162] = 'BoolTest.py, line 162:\n    self.assertTrue((2 and 1) is 1, "(2 and 1) is 1")';
		$m.__track_lines__[163] = 'BoolTest.py, line 163:\n    self.assertTrue(([] and 2) == [], "([] and 2) == []")';
		$m.__track_lines__[164] = 'BoolTest.py, line 164:\n    try:';
		$m.__track_lines__[165] = 'BoolTest.py, line 165:\n    self.assertTrue(({} and 2) == {}, "({} and 2) == {}")';
		$m.__track_lines__[167] = 'BoolTest.py, line 167:\n    self.fail("Unexpected error on \'({} and 2) == {}\'")';
		$m.__track_lines__[168] = 'BoolTest.py, line 168:\n    try:';
		$m.__track_lines__[169] = 'BoolTest.py, line 169:\n    self.assertTrue((0 or False or {} or []) == [], "((0 or False or {} or []) == []")';
		$m.__track_lines__[171] = 'BoolTest.py, line 171:\n    self.fail("Unexpected error on \'(0 or False or {} or []) == []\'")';
		$m.__track_lines__[172] = 'BoolTest.py, line 172:\n    f = None';
		$m.__track_lines__[173] = 'BoolTest.py, line 173:\n    try:';
		$m.__track_lines__[174] = 'BoolTest.py, line 174:\n    self.assertTrue((f and f.test()) == None, "(f and f.test()) == None")';
		$m.__track_lines__[176] = 'BoolTest.py, line 176:\n    self.fail("Unexpected error on \'(f and f.test()) == None\'")';
		$m.__track_lines__[178] = 'BoolTest.py, line 178:\n    self.assertTrue(bool(None) is False, "bool(None) is False")';
		$m.__track_lines__[179] = 'BoolTest.py, line 179:\n    self.assertTrue(bool(False) is False, "bool(False) is False")';
		$m.__track_lines__[180] = 'BoolTest.py, line 180:\n    self.assertTrue(bool(0) is False, "bool(0) is False")';
		$m.__track_lines__[181] = 'BoolTest.py, line 181:\n    self.assertTrue(bool(0.0) is False, "bool(0.0) is False")';
		$m.__track_lines__[182] = 'BoolTest.py, line 182:\n    self.assertTrue(bool(\'\') is False, "bool(\'\') is False")';
		$m.__track_lines__[183] = 'BoolTest.py, line 183:\n    self.assertTrue(bool([]) is False, "bool(\'\') is False")';
		$m.__track_lines__[184] = 'BoolTest.py, line 184:\n    self.assertTrue(bool({}) is False, "bool(\'\') is False")';
		$m.__track_lines__[186] = 'BoolTest.py, line 186:\n    self.assertTrue(not None is True, "not None is True")';
		$m.__track_lines__[187] = 'BoolTest.py, line 187:\n    self.assertTrue(not False is True, "not False is True")';
		$m.__track_lines__[188] = 'BoolTest.py, line 188:\n    self.assertTrue(not 0 is True, "not 0 is True")';
		$m.__track_lines__[189] = 'BoolTest.py, line 189:\n    self.assertTrue(not 0.0 is True, "not 0.0 is True")';
		$m.__track_lines__[190] = 'BoolTest.py, line 190:\n    self.assertTrue(not \'\' is True, "not \'\' is True")';
		$m.__track_lines__[191] = 'BoolTest.py, line 191:\n    self.assertTrue(not [] is True, "not \'\' is True")';
		$m.__track_lines__[192] = 'BoolTest.py, line 192:\n    self.assertTrue(not {} is True, "not \'\' is True")';
		$m.__track_lines__[194] = 'BoolTest.py, line 194:\n    self.assertTrue(bool(1) is True, "bool(\'\') is True")';
		$m.__track_lines__[195] = 'BoolTest.py, line 195:\n    self.assertTrue(bool(1.0) is True, "bool(\'\') is True")';
		$m.__track_lines__[196] = 'BoolTest.py, line 196:\n    self.assertTrue(bool(\'a\') is True, "bool(\'\') is True")';
		$m.__track_lines__[197] = 'BoolTest.py, line 197:\n    self.assertTrue(bool([1]) is True, "bool(\'\') is True")';
		$m.__track_lines__[198] = 'BoolTest.py, line 198:\n    self.assertTrue(bool({\'a\':1}) is True, "bool(\'\') is True")';
		$m.__track_lines__[200] = 'BoolTest.py, line 200:\n    self.assertTrue(not 1 is False, "not \'\' is False")';
		$m.__track_lines__[201] = 'BoolTest.py, line 201:\n    self.assertTrue(not 1.0 is False, "not \'\' is False")';
		$m.__track_lines__[202] = 'BoolTest.py, line 202:\n    self.assertTrue(not \'a\' is False, "not \'\' is False")';
		$m.__track_lines__[203] = 'BoolTest.py, line 203:\n    self.assertTrue(not [1] is False, "not \'\' is False")';
		$m.__track_lines__[204] = 'BoolTest.py, line 204:\n    self.assertTrue(not {\'a\':1} is False, "not \'\' is False")';
		$m.__track_lines__[207] = "BoolTest.py, line 207:\n    d = {'hello': 5}";
		$m.__track_lines__[208] = 'BoolTest.py, line 208:\n    d2 = d or {}';
		$m.__track_lines__[209] = 'BoolTest.py, line 209:\n    try:';
		$m.__track_lines__[210] = 'BoolTest.py, line 210:\n    tst = d == d2';
		$m.__track_lines__[211] = 'BoolTest.py, line 211:\n    self.assertTrue(tst, "#297 -non-empty object or {} should return the object")';
		$m.__track_lines__[213] = 'BoolTest.py, line 213:\n    self.fail("#297 TypeError should not have been thrown")';
		$m.__track_lines__[216] = 'BoolTest.py, line 216:\n    d = {}';
		$m.__track_lines__[217] = 'BoolTest.py, line 217:\n    d2 = d or 5';
		$m.__track_lines__[218] = 'BoolTest.py, line 218:\n    try:';
		$m.__track_lines__[219] = 'BoolTest.py, line 219:\n    tst = d2 == 5';
		$m.__track_lines__[220] = 'BoolTest.py, line 220:\n    self.assertTrue(tst, "#297 \'empty object or 5\' should return 5")';
		$m.__track_lines__[222] = 'BoolTest.py, line 222:\n    self.fail("#297 TypeError should not have been thrown")';
		$m.__track_lines__[224] = 'BoolTest.py, line 224:\n    def testRepr(self):';
		$m.__track_lines__[225] = 'BoolTest.py, line 225:\n    self.assertEqual(repr(True), "True")';
		$m.__track_lines__[226] = 'BoolTest.py, line 226:\n    self.assertEqual(repr(False), "False")';
		$m.__track_lines__[227] = 'BoolTest.py, line 227:\n    self.assertEqual(repr(None), "None")';
		$m.__track_lines__[229] = 'BoolTest.py, line 229:\n    def testStr(self):';
		$m.__track_lines__[230] = 'BoolTest.py, line 230:\n    self.assertEqual(str(True), "True")';
		$m.__track_lines__[231] = 'BoolTest.py, line 231:\n    self.assertEqual(str(False), "False")';
		$m.__track_lines__[232] = 'BoolTest.py, line 232:\n    self.assertEqual(str(None), "None")';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		$pyjs.track.module='BoolTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['Stupid'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BoolTest';
			$cls_definition.__md5__ = 'cebebbfbee765dda84c8b652962b4dd5';
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=3;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Stupid', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=6;
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BoolTest';
			$cls_definition.__md5__ = 'e074c6920516ddc67b8d8ff8ce099531';
			$pyjs.track.lineno=8;
			$method = $pyjs__bind_method2('__init__', function(v) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					v = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e074c6920516ddc67b8d8ff8ce099531') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BoolTest', lineno:8};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=8;
				$pyjs.track.lineno=9;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_v', v) : $p['setattr'](self, '_v', v); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['v']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=11;
			$method = $pyjs__bind_method2('__nonzero__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e074c6920516ddc67b8d8ff8ce099531') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,$cmp2;
				$pyjs.track={module:'BoolTest', lineno:11};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=12;
				$pyjs.track.lineno=12;
				var $pyjs__ret = ((($cmp1=$p['getattr'](self, '_v'))===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__nonzero__'] = $method;
			$pyjs.track.lineno=14;
			$method = $pyjs__bind_method2('__len__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e074c6920516ddc67b8d8ff8ce099531') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BoolTest', lineno:14};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=14;
				$pyjs.track.lineno=15;
				$pyjs.track.lineno=15;
				var $pyjs__ret = $constant_int_1;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs.track.lineno=6;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=17;
		$m['Bar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BoolTest';
			$cls_definition.__md5__ = '671f1ae19d563e31a32a10325adef7ab';
			$pyjs.track.lineno=19;
			$method = $pyjs__bind_method2('__init__', function(v) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					v = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '671f1ae19d563e31a32a10325adef7ab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BoolTest', lineno:19};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=19;
				$pyjs.track.lineno=20;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_v', v) : $p['setattr'](self, '_v', v); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['v']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=22;
			$method = $pyjs__bind_method2('__len__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '671f1ae19d563e31a32a10325adef7ab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BoolTest', lineno:22};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=22;
				$pyjs.track.lineno=23;
				$pyjs.track.lineno=23;
				var $pyjs__ret = $p['getattr'](self, '_v');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs.track.lineno=17;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Bar', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=26;
		$m['BoolTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BoolTest';
			$cls_definition.__md5__ = '3a5c18588d7f6818d5e5852171a39180';
			$pyjs.track.lineno=28;
			$method = $pyjs__bind_method2('testBaseTypes', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3a5c18588d7f6818d5e5852171a39180') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BoolTest', lineno:28};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=28;
				$pyjs.track.lineno=30;
				self['assertTrue'](true);
				$pyjs.track.lineno=31;
				self['assertFalse'](false);
				$pyjs.track.lineno=34;
				self['assertTrue']($p['bool'](true));
				$pyjs.track.lineno=35;
				self['assertFalse']($p['bool'](false));
				$pyjs.track.lineno=36;
				self['assertTrue']($p['op_eq'](true, true));
				$pyjs.track.lineno=37;
				self['assertFalse']($p['op_eq'](false, true));
				$pyjs.track.lineno=40;
				self['assertTrue']($p['bool']($constant_int_1));
				$pyjs.track.lineno=41;
				self['assertFalse']($p['bool']($constant_int_0));
				$pyjs.track.lineno=42;
				self['assertTrue']($constant_int_1);
				$pyjs.track.lineno=43;
				self['assertFalse']($constant_int_0);
				$pyjs.track.lineno=46;
				self['assertTrue']($p['bool']('a'));
				$pyjs.track.lineno=47;
				self['assertFalse']($p['bool'](''));
				$pyjs.track.lineno=48;
				self['assertTrue']('a');
				$pyjs.track.lineno=49;
				self['assertFalse']('');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBaseTypes'] = $method;
			$pyjs.track.lineno=51;
			$method = $pyjs__bind_method2('testObjects', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3a5c18588d7f6818d5e5852171a39180') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BoolTest', lineno:51};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=54;
				self['assertTrue']($p['bool']($m['Stupid']()));
				$pyjs.track.lineno=55;
				self['assertTrue']($m['Stupid']());
				$pyjs.track.lineno=58;
				self['assertFalse']($p['bool']($m['Foo']($constant_int_0)));
				$pyjs.track.lineno=59;
				self['assertTrue']($p['bool']($m['Foo']($constant_int_1)));
				$pyjs.track.lineno=60;
				self['assertFalse']($m['Foo']($constant_int_0));
				$pyjs.track.lineno=61;
				self['assertTrue']($m['Foo']($constant_int_1));
				$pyjs.track.lineno=64;
				self['assertFalse']($p['bool']($m['Bar']($constant_int_0)));
				$pyjs.track.lineno=65;
				self['assertTrue']($p['bool']($m['Bar']($constant_int_1)));
				$pyjs.track.lineno=66;
				self['assertFalse']($m['Bar']($constant_int_0));
				$pyjs.track.lineno=67;
				self['assertTrue']($m['Bar']($constant_int_1));
				$pyjs.track.lineno=71;
				self['assertFalse']($p['bool']($p['list']([])));
				$pyjs.track.lineno=72;
				self['assertTrue']($p['bool']($p['list']([$constant_int_1])));
				$pyjs.track.lineno=73;
				self['assertFalse']($p['list']([]));
				$pyjs.track.lineno=74;
				self['assertTrue']($p['list']([$constant_int_1]));
				$pyjs.track.lineno=77;
				self['assertFalse']($p['bool']($p['dict']([])));
				$pyjs.track.lineno=78;
				self['assertTrue']($p['bool']($p['dict']([['x', $constant_int_1]])));
				$pyjs.track.lineno=79;
				self['assertFalse']($p['dict']([]));
				$pyjs.track.lineno=80;
				self['assertTrue']($p['dict']([['x', $constant_int_1]]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testObjects'] = $method;
			$pyjs.track.lineno=83;
			$method = $pyjs__bind_method2('testIfStatement', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3a5c18588d7f6818d5e5852171a39180') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$cmp13,$cmp15,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$cmp12,$or1,$or2,$and1,$and2,$and3,$and4,$bool2,$bool3,$cmp17,$bool1,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$cmp18,$cmp5,$cmp4,$cmp7,$cmp6,$cmp3,$cmp14,i,$cmp9,$cmp8,$cmp16,$cmp11,$cmp10;
				$pyjs.track={module:'BoolTest', lineno:83};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=85;
				if ((($bool1=$p['dict']([])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1.__nonzero__=='function'?
								$bool1.__nonzero__() :
								(typeof $bool1.__len__=='function'?
									($bool1.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=86;
					self['fail']('Empty dict should not evaluate to True in If');
				}
				else {
					$pyjs.track.lineno=88;
					self['assertTrue'](true);
				}
				$pyjs.track.lineno=89;
				if ((($bool2=$p['dict']([[$constant_int_1, $constant_int_5]])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=90;
					self['assertTrue'](true);
				}
				else {
					$pyjs.track.lineno=92;
					self['fail']('Non-empty dict should evaluate to True in If');
				}
				$pyjs.track.lineno=93;
				if ((($bool3=$p['list']([])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=94;
					self['fail']('Empty dict should not evaluate to True in If');
				}
				else {
					$pyjs.track.lineno=96;
					self['assertTrue'](true);
				}
				$pyjs.track.lineno=97;
				if ((($bool4=$p['list']([$constant_int_1])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=98;
					self['assertTrue'](true);
				}
				else {
					$pyjs.track.lineno=100;
					self['fail']('Non-empty lists should evaluate to True in If');
				}
				$pyjs.track.lineno=101;
				if ((($bool6=!(($bool5=$p['list']([])) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$pyjs.track.lineno=102;
					self['assertTrue'](true);
				}
				else {
					$pyjs.track.lineno=104;
					self['fail']('Non empty lists should not evaluate to True in If');
				}
				$pyjs.track.lineno=105;
				if ((($bool8=((($bool7=$and1=$p['list']([$constant_int_1])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['dict']([]):$and1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					$pyjs.track.lineno=106;
					self['fail']("'[1] and {}' shoul evaluate to False");
				}
				else {
					$pyjs.track.lineno=108;
					self['assertTrue'](true);
				}
				$pyjs.track.lineno=109;
				if ((($bool11=((($bool9=$or1=$p['list']([])) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:!(($bool10=$p['dict']([])) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					$pyjs.track.lineno=110;
					self['assertTrue'](true);
				}
				else {
					$pyjs.track.lineno=112;
					self['fail']("'[] or not {}' shoul evaluate to True");
				}
				$pyjs.track.lineno=113;
				if ((($bool14=((($bool12=$and3=$p['list']([])) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool13=$p['dict']([])) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and3)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14.__nonzero__=='function'?
								$bool14.__nonzero__() :
								(typeof $bool14.__len__=='function'?
									($bool14.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=114;
					self['fail']("'[] and not {}' shoul evaluate to False");
				}
				else {
					$pyjs.track.lineno=116;
					self['assertTrue'](true);
				}
				$pyjs.track.lineno=117;
				if ((($bool15=(((($cmp3=$constant_int_0)===($cmp4=($compare1 = $constant_int_1))?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)&&((($cmp5=$compare1)===($cmp6=($compare2 = $constant_int_2))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=118;
					self['assertTrue'](true);
				}
				else {
					$pyjs.track.lineno=120;
					self['fail']('if 0 < 1 < 2');
				}
				$pyjs.track.lineno=121;
				i = $p['list']([$constant_int_0, $constant_int_2, $constant_int_4]);
				$pyjs.track.lineno=122;
				i = i['__iter__']();
				$pyjs.track.lineno=123;
				if ((($bool16=(((($cmp7=$constant_int_0)===($cmp8=($compare3 = i['next']()))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)&&((($cmp9=$compare3)===($cmp10=($compare4 = $constant_int_4))?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == -1))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=124;
					self['fail']('iter (0)');
				}
				else {
					$pyjs.track.lineno=126;
					self['assertTrue'](true);
				}
				$pyjs.track.lineno=127;
				if ((($bool17=(((($cmp11=$constant_int_0)===($cmp12=($compare5 = i['next']()))?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1)&&((($cmp13=$compare5)===($cmp14=($compare6 = $constant_int_4))?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=128;
					self['assertTrue'](true);
				}
				else {
					$pyjs.track.lineno=130;
					self['fail']('iter (2)');
				}
				$pyjs.track.lineno=131;
				if ((($bool18=(((($cmp15=$constant_int_0)===($cmp16=($compare7 = i['next']()))?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == -1)&&((($cmp17=$compare7)===($cmp18=($compare8 = $constant_int_4))?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18.__nonzero__=='function'?
								$bool18.__nonzero__() :
								(typeof $bool18.__len__=='function'?
									($bool18.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=132;
					self['fail']('iter (4)');
				}
				else {
					$pyjs.track.lineno=134;
					self['assertTrue'](true);
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIfStatement'] = $method;
			$pyjs.track.lineno=137;
			$method = $pyjs__bind_method2('testWhileStatement', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3a5c18588d7f6818d5e5852171a39180') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool19,$bool20;
				$pyjs.track={module:'BoolTest', lineno:137};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=137;
				$pyjs.track.lineno=138;
				while ((($bool19=$p['list']([])) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=139;
					self['fail']('Empty lists should not evaluate to True in While');
					$pyjs.track.lineno=140;
					break;
				}
				$pyjs.track.lineno=141;
				while ((($bool20=$p['list']([$constant_int_1])) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20.__nonzero__=='function'?
								$bool20.__nonzero__() :
								(typeof $bool20.__len__=='function'?
									($bool20.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=142;
					$pyjs.track.lineno=142;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=143;
				self['fail']('None-empty lists should evaluate to True in While');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testWhileStatement'] = $method;
			$pyjs.track.lineno=145;
			$method = $pyjs__bind_method2('testLogic', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3a5c18588d7f6818d5e5852171a39180') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$bool50,$and9,$bool46,$bool45,$bool49,$bool44,$or16,d2,$bool42,$or15,$bool41,$bool33,$or17,$bool48,$bool25,$bool24,$bool27,$bool26,$bool21,$bool23,$bool22,$bool36,tst,$bool29,$bool28,$or22,$bool37,$or5,$or4,$or7,$or6,$bool43,$bool34,$or3,$bool40,$bool35,$or9,$and5,$and6,$or8,$and12,$and13,$and10,$and11,$and16,$and17,$and14,$and15,$and18,$and7,d,f,$or20,$bool47,$pyjs_try_err,$or21,$bool32,$or14,$bool30,$bool31,$or11,$or10,$or13,$or12,x,$bool38,$bool39,$or19,$or18;
				$pyjs.track={module:'BoolTest', lineno:145};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=145;
				$pyjs.track.lineno=147;
				x = ((($bool21=$or3=$constant_int_0) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:null);
				$pyjs.track.lineno=148;
				self['assertEqual'](x, null, $p['sprintf']('0 or None should be None not %s', $p['repr'](x)));
				$pyjs.track.lineno=150;
				x = ((($bool22=$and5=null) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?null:$and5);
				$pyjs.track.lineno=151;
				self['assertEqual'](x, null, $p['sprintf']('None or None should be None not %s', $p['repr'](x)));
				$pyjs.track.lineno=153;
				x = ((($bool23=$or5=false) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:null);
				$pyjs.track.lineno=154;
				self['assertEqual'](x, null, $p['sprintf']('False or None should be None not %s', $p['repr'](x)));
				$pyjs.track.lineno=156;
				self['assertTrue']($p['op_is'](((($bool24=$or7=$constant_int_1) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24.__nonzero__=='function'?
							$bool24.__nonzero__() :
							(typeof $bool24.__len__=='function'?
								($bool24.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or7:$constant_int_2), $constant_int_1), '(1 or 2) is 1');
				$pyjs.track.lineno=157;
				self['assertTrue']($p['op_is'](((($bool25=$or9=$constant_int_0) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or9:$constant_int_2), $constant_int_2), '(0 or 2) is 2');
				$pyjs.track.lineno=158;
				self['assertTrue']($p['op_is'](((($bool26=$or11=false) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26.__nonzero__=='function'?
							$bool26.__nonzero__() :
							(typeof $bool26.__len__=='function'?
								($bool26.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or11:$constant_int_0), $constant_int_0), '(False or 0) is 0');
				$pyjs.track.lineno=159;
				self['assertTrue']($p['op_is'](((($bool27=$or13=$constant_int_0) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or13:false), false), '(0 or False) is False');
				$pyjs.track.lineno=160;
				self['assertTrue']($p['op_is'](((($bool28=$and7=$constant_int_0) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$constant_int_2:$and7), $constant_int_0), '(0 and 2) is 0');
				$pyjs.track.lineno=161;
				self['assertTrue']($p['op_is'](((($bool29=$and9=$constant_int_1) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$constant_int_2:$and9), $constant_int_2), '(1 and 2) is 2');
				$pyjs.track.lineno=162;
				self['assertTrue']($p['op_is'](((($bool30=$and11=$constant_int_2) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$constant_int_1:$and11), $constant_int_1), '(2 and 1) is 1');
				$pyjs.track.lineno=163;
				self['assertTrue']($p['op_eq'](((($bool31=$and13=$p['list']([])) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$constant_int_2:$and13), $p['list']([])), '([] and 2) == []');
				$pyjs.track.lineno=164;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=165;
					self['assertTrue']($p['op_eq'](((($bool32=$and15=$p['dict']([])) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$constant_int_2:$and15), $p['dict']([])), '({} and 2) == {}');
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
					$pyjs.track.module='BoolTest';
					if (true) {
						$pyjs.track.lineno=167;
						self['fail']("Unexpected error on '({} and 2) == {}'");
					}
				}
				$pyjs.track.lineno=168;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=169;
					self['assertTrue']($p['op_eq'](((($bool33=$or15=$constant_int_0) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or15:((($bool34=$or16=false) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34.__nonzero__=='function'?
								$bool34.__nonzero__() :
								(typeof $bool34.__len__=='function'?
									($bool34.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or16:((($bool35=$or17=$p['dict']([])) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or17:$p['list']([])))), $p['list']([])), '((0 or False or {} or []) == []');
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
					$pyjs.track.module='BoolTest';
					if (true) {
						$pyjs.track.lineno=171;
						self['fail']("Unexpected error on '(0 or False or {} or []) == []'");
					}
				}
				$pyjs.track.lineno=172;
				f = null;
				$pyjs.track.lineno=173;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=174;
					self['assertTrue']($p['op_eq'](((($bool36=$and17=f) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36.__nonzero__=='function'?
								$bool36.__nonzero__() :
								(typeof $bool36.__len__=='function'?
									($bool36.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?f['test']():$and17), null), '(f and f.test()) == None');
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
					$pyjs.track.module='BoolTest';
					if (true) {
						$pyjs.track.lineno=176;
						self['fail']("Unexpected error on '(f and f.test()) == None'");
					}
				}
				$pyjs.track.lineno=178;
				self['assertTrue']($p['op_is']($p['bool'](null), false), 'bool(None) is False');
				$pyjs.track.lineno=179;
				self['assertTrue']($p['op_is']($p['bool'](false), false), 'bool(False) is False');
				$pyjs.track.lineno=180;
				self['assertTrue']($p['op_is']($p['bool']($constant_int_0), false), 'bool(0) is False');
				$pyjs.track.lineno=181;
				self['assertTrue']($p['op_is']($p['bool'](0.0), false), 'bool(0.0) is False');
				$pyjs.track.lineno=182;
				self['assertTrue']($p['op_is']($p['bool'](''), false), "bool('') is False");
				$pyjs.track.lineno=183;
				self['assertTrue']($p['op_is']($p['bool']($p['list']([])), false), "bool('') is False");
				$pyjs.track.lineno=184;
				self['assertTrue']($p['op_is']($p['bool']($p['dict']([])), false), "bool('') is False");
				$pyjs.track.lineno=186;
				self['assertTrue'](!(($bool37=$p['op_is'](null, true)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37.__nonzero__=='function'?
							$bool37.__nonzero__() :
							(typeof $bool37.__len__=='function'?
								($bool37.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), 'not None is True');
				$pyjs.track.lineno=187;
				self['assertTrue'](!(($bool38=$p['op_is'](false, true)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38.__nonzero__=='function'?
							$bool38.__nonzero__() :
							(typeof $bool38.__len__=='function'?
								($bool38.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), 'not False is True');
				$pyjs.track.lineno=188;
				self['assertTrue'](!(($bool39=$p['op_is']($constant_int_0, true)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
					false :
					(typeof $bool39=='object'?
						(typeof $bool39.__nonzero__=='function'?
							$bool39.__nonzero__() :
							(typeof $bool39.__len__=='function'?
								($bool39.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), 'not 0 is True');
				$pyjs.track.lineno=189;
				self['assertTrue'](!(($bool40=$p['op_is'](0.0, true)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40.__nonzero__=='function'?
							$bool40.__nonzero__() :
							(typeof $bool40.__len__=='function'?
								($bool40.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), 'not 0.0 is True');
				$pyjs.track.lineno=190;
				self['assertTrue'](!(($bool41=$p['op_is']('', true)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
					false :
					(typeof $bool41=='object'?
						(typeof $bool41.__nonzero__=='function'?
							$bool41.__nonzero__() :
							(typeof $bool41.__len__=='function'?
								($bool41.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), "not '' is True");
				$pyjs.track.lineno=191;
				self['assertTrue'](!(($bool42=$p['op_is']($p['list']([]), true)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42.__nonzero__=='function'?
							$bool42.__nonzero__() :
							(typeof $bool42.__len__=='function'?
								($bool42.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), "not '' is True");
				$pyjs.track.lineno=192;
				self['assertTrue'](!(($bool43=$p['op_is']($p['dict']([]), true)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43.__nonzero__=='function'?
							$bool43.__nonzero__() :
							(typeof $bool43.__len__=='function'?
								($bool43.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), "not '' is True");
				$pyjs.track.lineno=194;
				self['assertTrue']($p['op_is']($p['bool']($constant_int_1), true), "bool('') is True");
				$pyjs.track.lineno=195;
				self['assertTrue']($p['op_is']($p['bool'](1.0), true), "bool('') is True");
				$pyjs.track.lineno=196;
				self['assertTrue']($p['op_is']($p['bool']('a'), true), "bool('') is True");
				$pyjs.track.lineno=197;
				self['assertTrue']($p['op_is']($p['bool']($p['list']([$constant_int_1])), true), "bool('') is True");
				$pyjs.track.lineno=198;
				self['assertTrue']($p['op_is']($p['bool']($p['dict']([['a', $constant_int_1]])), true), "bool('') is True");
				$pyjs.track.lineno=200;
				self['assertTrue'](!(($bool44=$p['op_is']($constant_int_1, false)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), "not '' is False");
				$pyjs.track.lineno=201;
				self['assertTrue'](!(($bool45=$p['op_is'](1.0, false)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), "not '' is False");
				$pyjs.track.lineno=202;
				self['assertTrue'](!(($bool46=$p['op_is']('a', false)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46.__nonzero__=='function'?
							$bool46.__nonzero__() :
							(typeof $bool46.__len__=='function'?
								($bool46.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), "not '' is False");
				$pyjs.track.lineno=203;
				self['assertTrue'](!(($bool47=$p['op_is']($p['list']([$constant_int_1]), false)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
					false :
					(typeof $bool47=='object'?
						(typeof $bool47.__nonzero__=='function'?
							$bool47.__nonzero__() :
							(typeof $bool47.__len__=='function'?
								($bool47.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), "not '' is False");
				$pyjs.track.lineno=204;
				self['assertTrue'](!(($bool48=$p['op_is']($p['dict']([['a', $constant_int_1]]), false)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ), "not '' is False");
				$pyjs.track.lineno=207;
				d = $p['dict']([['hello', $constant_int_5]]);
				$pyjs.track.lineno=208;
				d2 = ((($bool49=$or19=d) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49.__nonzero__=='function'?
							$bool49.__nonzero__() :
							(typeof $bool49.__len__=='function'?
								($bool49.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or19:$p['dict']([]));
				$pyjs.track.lineno=209;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=210;
					tst = $p['op_eq'](d, d2);
					$pyjs.track.lineno=211;
					self['assertTrue'](tst, '#297 -non-empty object or {} should return the object');
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
					$pyjs.track.module='BoolTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs.track.lineno=213;
						self['fail']('#297 TypeError should not have been thrown');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=216;
				d = $p['dict']([]);
				$pyjs.track.lineno=217;
				d2 = ((($bool50=$or21=d) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or21:$constant_int_5);
				$pyjs.track.lineno=218;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=219;
					tst = $p['op_eq'](d2, $constant_int_5);
					$pyjs.track.lineno=220;
					self['assertTrue'](tst, "#297 'empty object or 5' should return 5");
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
					$pyjs.track.module='BoolTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs.track.lineno=222;
						self['fail']('#297 TypeError should not have been thrown');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLogic'] = $method;
			$pyjs.track.lineno=224;
			$method = $pyjs__bind_method2('testRepr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3a5c18588d7f6818d5e5852171a39180') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BoolTest', lineno:224};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=224;
				$pyjs.track.lineno=225;
				self['assertEqual']($p['repr'](true), 'True');
				$pyjs.track.lineno=226;
				self['assertEqual']($p['repr'](false), 'False');
				$pyjs.track.lineno=227;
				self['assertEqual']($p['repr'](null), 'None');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRepr'] = $method;
			$pyjs.track.lineno=229;
			$method = $pyjs__bind_method2('testStr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3a5c18588d7f6818d5e5852171a39180') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BoolTest', lineno:229};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BoolTest';
				$pyjs.track.lineno=229;
				$pyjs.track.lineno=230;
				self['assertEqual']($p['str'](true), 'True');
				$pyjs.track.lineno=231;
				self['assertEqual']($p['str'](false), 'False');
				$pyjs.track.lineno=232;
				self['assertEqual']($p['str'](null), 'None');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStr'] = $method;
			$pyjs.track.lineno=26;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('BoolTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end BoolTest */


/* end module: BoolTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/
