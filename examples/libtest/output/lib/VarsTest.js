/* start module: VarsTest */
$pyjs.loaded_modules['VarsTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['VarsTest'].__was_initialized__) return $pyjs.loaded_modules['VarsTest'];
	var $m = $pyjs.loaded_modules["VarsTest"];
	$m.__repr__ = function() { return "<module: VarsTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'VarsTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'VarsTest.py, line 1:\n    import UnitTest';
		$m.__track_lines__[2] = 'VarsTest.py, line 2:\n    import foo';
		$m.__track_lines__[3] = 'VarsTest.py, line 3:\n    import foo as myfoo';
		$m.__track_lines__[4] = 'VarsTest.py, line 4:\n    from foo import foo_value as myfoo_value, get_foo_value as myget_foo_value';
		$m.__track_lines__[6] = 'VarsTest.py, line 6:\n    module_global_x = 1';
		$m.__track_lines__[8] = 'VarsTest.py, line 8:\n    data = []';
		$m.__track_lines__[9] = 'VarsTest.py, line 9:\n    data.append(5)';
		$m.__track_lines__[10] = 'VarsTest.py, line 10:\n    data.append(6)';
		$m.__track_lines__[12] = 'VarsTest.py, line 12:\n    data_test = cmp(data, [1,2,3])';
		$m.__track_lines__[14] = 'VarsTest.py, line 14:\n    def changeme(lst):';
		$m.__track_lines__[15] = 'VarsTest.py, line 15:\n    lst[0] = 5';
		$m.__track_lines__[17] = 'VarsTest.py, line 17:\n    def import_sys():';
		$m.__track_lines__[18] = 'VarsTest.py, line 18:\n    global sys';
		$m.__track_lines__[19] = 'VarsTest.py, line 19:\n    import sys';
		$m.__track_lines__[23] = 'VarsTest.py, line 23:\n    class VarsTest(UnitTest.UnitTest):';
		$m.__track_lines__[25] = 'VarsTest.py, line 25:\n    def testGlobalListData(self):';
		$m.__track_lines__[26] = 'VarsTest.py, line 26:\n    self.assertTrue(cmp(data, [1,2,3]), "global list should be [1,2,3]")';
		$m.__track_lines__[27] = 'VarsTest.py, line 27:\n    self.assertTrue(data_test, "global test of list should be True")';
		$m.__track_lines__[29] = 'VarsTest.py, line 29:\n    def testChangeUsingTopLevelFunction(self):';
		$m.__track_lines__[30] = 'VarsTest.py, line 30:\n    l = [1,2,3]';
		$m.__track_lines__[31] = 'VarsTest.py, line 31:\n    changeme(l)';
		$m.__track_lines__[32] = 'VarsTest.py, line 32:\n    self.assertEqual(l[0], 5)';
		$m.__track_lines__[34] = 'VarsTest.py, line 34:\n    def testChangeVarInInnerScope(self):';
		$m.__track_lines__[35] = 'VarsTest.py, line 35:\n    x = 5';
		$m.__track_lines__[36] = 'VarsTest.py, line 36:\n    if x == 1:';
		$m.__track_lines__[37] = 'VarsTest.py, line 37:\n    x = 2';
		$m.__track_lines__[39] = 'VarsTest.py, line 39:\n    x = 3';
		$m.__track_lines__[40] = 'VarsTest.py, line 40:\n    self.assertEqual(x, 3, "the value of x should be 3")';
		$m.__track_lines__[42] = 'VarsTest.py, line 42:\n    def testGlobalVars(self):';
		$m.__track_lines__[43] = 'VarsTest.py, line 43:\n    self.assertEqual(module_global_x, 1)';
		$m.__track_lines__[45] = 'VarsTest.py, line 45:\n    def testImports(self):';
		$m.__track_lines__[46] = 'VarsTest.py, line 46:\n    self.failUnless(UnitTest.UnitTest())';
		$m.__track_lines__[48] = 'VarsTest.py, line 48:\n    def testLocalVar(self):';
		$m.__track_lines__[49] = 'VarsTest.py, line 49:\n    VarsTest = 1';
		$m.__track_lines__[50] = 'VarsTest.py, line 50:\n    self.assertEqual(VarsTest, 1)';
		$m.__track_lines__[52] = 'VarsTest.py, line 52:\n    def testUnpack(self):';
		$m.__track_lines__[53] = 'VarsTest.py, line 53:\n    l = [1, 2]';
		$m.__track_lines__[54] = 'VarsTest.py, line 54:\n    x, y = l';
		$m.__track_lines__[55] = 'VarsTest.py, line 55:\n    self.assertEqual(x, 1)';
		$m.__track_lines__[56] = 'VarsTest.py, line 56:\n    self.assertEqual(y, 2)';
		$m.__track_lines__[58] = 'VarsTest.py, line 58:\n    x = ((1, 2), 3, (4, 5))';
		$m.__track_lines__[59] = 'VarsTest.py, line 59:\n    (a, b), c, (d, e) = x';
		$m.__track_lines__[60] = 'VarsTest.py, line 60:\n    self.assertEqual(a, 1)';
		$m.__track_lines__[61] = 'VarsTest.py, line 61:\n    self.assertEqual([a, b, c, d, e], [1,2,3,4,5])';
		$m.__track_lines__[63] = 'VarsTest.py, line 63:\n    x = (1, (2, (3, (4, 5), 6), 7), 8, (9, 10))';
		$m.__track_lines__[64] = 'VarsTest.py, line 64:\n    a1, (b1, (c1, (d1, d2), c2), b2), a2, a3 = x';
		$m.__track_lines__[65] = 'VarsTest.py, line 65:\n    self.assertEqual(d1, 4)';
		$m.__track_lines__[66] = 'VarsTest.py, line 66:\n    self.assertEqual([a1, b1, c1, d1, d2, c2, b2, a2, a3], [1, 2, 3, 4, 5, 6, 7, 8, (9, 10)])';
		$m.__track_lines__[69] = 'VarsTest.py, line 69:\n    class X(object):';
		$m.__track_lines__[70] = 'VarsTest.py, line 70:\n    pass';
		$m.__track_lines__[72] = 'VarsTest.py, line 72:\n    x = X()';
		$m.__track_lines__[73] = 'VarsTest.py, line 73:\n    x.a = 1';
		$m.__track_lines__[74] = 'VarsTest.py, line 74:\n    d = {}';
		$m.__track_lines__[75] = 'VarsTest.py, line 75:\n    l = [1,3,4]';
		$m.__track_lines__[76] = "VarsTest.py, line 76:\n    l[1:2], x.a, d['zz'] = ((10, 11), 20, 30)";
		$m.__track_lines__[77] = 'VarsTest.py, line 77:\n    self.assertEqual(l, [1, 10, 11, 4])';
		$m.__track_lines__[78] = 'VarsTest.py, line 78:\n    self.assertEqual(x.a, 20)';
		$m.__track_lines__[79] = "VarsTest.py, line 79:\n    self.assertEqual(d, {'zz': 30})";
		$m.__track_lines__[81] = 'VarsTest.py, line 81:\n    [a,b,c] = [1,2,3]';
		$m.__track_lines__[82] = 'VarsTest.py, line 82:\n    self.assertEqual([a,b,c], [1,2,3])';
		$m.__track_lines__[83] = 'VarsTest.py, line 83:\n    [a,b,c] = 4,5,6';
		$m.__track_lines__[84] = 'VarsTest.py, line 84:\n    self.assertEqual([a,b,c], [4,5,6])';
		$m.__track_lines__[87] = 'VarsTest.py, line 87:\n    """';
		$m.__track_lines__[90] = 'VarsTest.py, line 90:\n    a,b,c = set([7,8,9])';
		$m.__track_lines__[91] = 'VarsTest.py, line 91:\n    self.assertEqual(set([a,b,c]), set([7,8,9])) # NO ORDERING in sets';
		$m.__track_lines__[93] = 'VarsTest.py, line 93:\n    def testUnpackInLoop(self):';
		$m.__track_lines__[94] = 'VarsTest.py, line 94:\n    l = [[1, 2],[1, 2]]';
		$m.__track_lines__[95] = 'VarsTest.py, line 95:\n    for xxx, yyy in l:';
		$m.__track_lines__[96] = 'VarsTest.py, line 96:\n    self.assertEqual(xxx, 1)';
		$m.__track_lines__[97] = 'VarsTest.py, line 97:\n    self.assertEqual(yyy, 2)';
		$m.__track_lines__[99] = 'VarsTest.py, line 99:\n    def testImportedNamespace(self):';
		$m.__track_lines__[100] = 'VarsTest.py, line 100:\n    b = foo.Bar()';
		$m.__track_lines__[101] = 'VarsTest.py, line 101:\n    self.assertEqual(b.X, 1) # declared instance works';
		$m.__track_lines__[102] = 'VarsTest.py, line 102:\n    self.assertEqual(foo.Bar.X, 1) # XXX due to __Bar, this fails.  hmmm...';
		$m.__track_lines__[103] = 'VarsTest.py, line 103:\n    self.assertEqual(foo.bar.X, 1)';
		$m.__track_lines__[105] = 'VarsTest.py, line 105:\n    def testImport(self):';
		$m.__track_lines__[106] = 'VarsTest.py, line 106:\n    global sys';
		$m.__track_lines__[107] = 'VarsTest.py, line 107:\n    a0 = foo.foo_value';
		$m.__track_lines__[108] = 'VarsTest.py, line 108:\n    a1 = 2';
		$m.__track_lines__[109] = 'VarsTest.py, line 109:\n    self.assertEqual(myfoo_value, a0)';
		$m.__track_lines__[110] = 'VarsTest.py, line 110:\n    self.assertEqual(myget_foo_value(), a0)';
		$m.__track_lines__[111] = 'VarsTest.py, line 111:\n    myfoo.foo_value = a1';
		$m.__track_lines__[112] = 'VarsTest.py, line 112:\n    self.assertEqual(myfoo_value, a0)';
		$m.__track_lines__[113] = 'VarsTest.py, line 113:\n    self.assertEqual(myget_foo_value(), a1)';
		$m.__track_lines__[114] = 'VarsTest.py, line 114:\n    import_sys()';
		$m.__track_lines__[115] = 'VarsTest.py, line 115:\n    try:';
		$m.__track_lines__[116] = "VarsTest.py, line 116:\n    self.assertEqual(sys.__name__, 'sys')";
		$m.__track_lines__[118] = 'VarsTest.py, line 118:\n    self.fail("Global module sys not available (bug #216)")';
		$m.__track_lines__[120] = 'VarsTest.py, line 120:\n    def testGlobalsBltin(self):';
		$m.__track_lines__[121] = 'VarsTest.py, line 121:\n    globs = globals()';
		$m.__track_lines__[122] = 'VarsTest.py, line 122:\n    globkeys = globs.keys()';
		$m.__track_lines__[123] = "VarsTest.py, line 123:\n    globkeys2 = filter(lambda x: not x.startswith('__'), globkeys)";
		$m.__track_lines__[124] = "VarsTest.py, line 124:\n    if 'sys' in globkeys2:";
		$m.__track_lines__[125] = "VarsTest.py, line 125:\n    globkeys2.remove('sys') # `global sys` in cpython does not make";
		$m.__track_lines__[127] = 'VarsTest.py, line 127:\n    self.assertEqual(set(globkeys2),';
		$m.__track_lines__[133] = "VarsTest.py, line 133:\n    self.assertEqual(globs['__name__'], __name__)";
		$m.__track_lines__[135] = 'VarsTest.py, line 135:\n    try:';
		$m.__track_lines__[136] = "VarsTest.py, line 136:\n    globals()['new_global_via_dict'] = 1";
		$m.__track_lines__[137] = "VarsTest.py, line 137:\n    self.assertEqual(globals()['new_global_via_dict'], 1)";
		$m.__track_lines__[139] = 'VarsTest.py, line 139:\n    self.fail("Assigning to globals() does not work, #590")';
		$m.__track_lines__[141] = 'VarsTest.py, line 141:\n    def testDiscardNames(self):';
		$m.__track_lines__[142] = 'VarsTest.py, line 142:\n    try:';
		$m.__track_lines__[143] = 'VarsTest.py, line 143:\n    someundefinedvariable1234';
		$m.__track_lines__[145] = 'VarsTest.py, line 145:\n    pass';
		$m.__track_lines__[147] = 'VarsTest.py, line 147:\n    self.fail("Discarded names should trigger NameError if undefined, bug #584")';
		$m.__track_lines__[149] = 'VarsTest.py, line 149:\n    class X(object):';
		$m.__track_lines__[150] = 'VarsTest.py, line 150:\n    pass';
		$m.__track_lines__[152] = 'VarsTest.py, line 152:\n    x = X()';
		$m.__track_lines__[153] = 'VarsTest.py, line 153:\n    try:';
		$m.__track_lines__[154] = 'VarsTest.py, line 154:\n    x.a';
		$m.__track_lines__[156] = 'VarsTest.py, line 156:\n    pass';
		$m.__track_lines__[158] = 'VarsTest.py, line 158:\n    self.fail("Discarded getattr should trigger AttributeError if undefined, bug #584")';
		$m.__track_lines__[160] = 'VarsTest.py, line 160:\n    def testAugmentedAssignments(self):';
		$m.__track_lines__[161] = 'VarsTest.py, line 161:\n    a = a0 = 100';
		$m.__track_lines__[162] = 'VarsTest.py, line 162:\n    self.assertTrue(a is a0)';
		$m.__track_lines__[163] = 'VarsTest.py, line 163:\n    a += 1';
		$m.__track_lines__[164] = 'VarsTest.py, line 164:\n    self.assertFalse(a is a0)';
		$m.__track_lines__[165] = 'VarsTest.py, line 165:\n    self.assertEqual(a, 101)';
		$m.__track_lines__[167] = 'VarsTest.py, line 167:\n    a -= 1';
		$m.__track_lines__[168] = 'VarsTest.py, line 168:\n    self.assertEqual(a, 100)';
		$m.__track_lines__[170] = 'VarsTest.py, line 170:\n    a *= 2';
		$m.__track_lines__[171] = 'VarsTest.py, line 171:\n    self.assertEqual(a, 200)';
		$m.__track_lines__[173] = 'VarsTest.py, line 173:\n    a /= 3';
		$m.__track_lines__[174] = 'VarsTest.py, line 174:\n    self.assertEqual(a, 66)';
		$m.__track_lines__[176] = 'VarsTest.py, line 176:\n    a //= 60';
		$m.__track_lines__[177] = 'VarsTest.py, line 177:\n    self.assertEqual(a, 1)';
		$m.__track_lines__[179] = 'VarsTest.py, line 179:\n    a = 15';
		$m.__track_lines__[180] = 'VarsTest.py, line 180:\n    a %= 10';
		$m.__track_lines__[181] = 'VarsTest.py, line 181:\n    self.assertEqual(a, 5)';
		$m.__track_lines__[183] = 'VarsTest.py, line 183:\n    a **= 2';
		$m.__track_lines__[184] = 'VarsTest.py, line 184:\n    self.assertEqual(a, 25)';
		$m.__track_lines__[186] = 'VarsTest.py, line 186:\n    a >>= 2';
		$m.__track_lines__[187] = 'VarsTest.py, line 187:\n    self.assertEqual(a, 6)';
		$m.__track_lines__[189] = 'VarsTest.py, line 189:\n    a <<= 2';
		$m.__track_lines__[190] = 'VarsTest.py, line 190:\n    self.assertEqual(a, 24)';
		$m.__track_lines__[192] = 'VarsTest.py, line 192:\n    a &= 16';
		$m.__track_lines__[193] = 'VarsTest.py, line 193:\n    self.assertEqual(a, 16)';
		$m.__track_lines__[195] = 'VarsTest.py, line 195:\n    a ^= 8';
		$m.__track_lines__[196] = 'VarsTest.py, line 196:\n    self.assertEqual(a, 24)';
		$m.__track_lines__[198] = 'VarsTest.py, line 198:\n    a |= 32';
		$m.__track_lines__[199] = 'VarsTest.py, line 199:\n    self.assertEqual(a, 56)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_56 = new $p['int'](56);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_66 = new $p['int'](66);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_101 = new $p['int'](101);
		$pyjs.track.module='VarsTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['foo'] = $p['___import___']('foo', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['myfoo'] = $pyjs.loaded_modules['foo'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['myfoo_value'] = $p['___import___']('foo.foo_value', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['myget_foo_value'] = $p['___import___']('foo.get_foo_value', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$m['module_global_x'] = $constant_int_1;
		$pyjs.track.lineno=8;
		$m['data'] = $p['list']([]);
		$pyjs.track.lineno=9;
		$m['data']['append']($constant_int_5);
		$pyjs.track.lineno=10;
		$m['data']['append']($constant_int_6);
		$pyjs.track.lineno=12;
		$m['data_test'] = $p['cmp']($m['data'], $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
		$pyjs.track.lineno=14;
		$m['changeme'] = function(lst) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'VarsTest',lineno:14};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='VarsTest';
			$pyjs.track.lineno=14;
			$pyjs.track.lineno=15;
			lst.__setitem__($constant_int_0, $constant_int_5);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['changeme'].__name__ = 'changeme';

		$m['changeme'].__bind_type__ = 0;
		$m['changeme'].__args__ = [null,null,['lst']];
		$pyjs.track.lineno=17;
		$m['import_sys'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'VarsTest',lineno:17};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='VarsTest';
			$pyjs.track.lineno=17;
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=19;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['sys'] = $p['___import___']('sys', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['import_sys'].__name__ = 'import_sys';

		$m['import_sys'].__bind_type__ = 0;
		$m['import_sys'].__args__ = [null,null];
		$pyjs.track.lineno=23;
		$m['VarsTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'VarsTest';
			$cls_definition.__md5__ = '47ed73b1405dcf02e2a9899aa5107e8a';
			$pyjs.track.lineno=25;
			$method = $pyjs__bind_method2('testGlobalListData', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'VarsTest', lineno:25};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=26;
				self['assertTrue']($p['cmp']($m['data'], $p['list']([$constant_int_1, $constant_int_2, $constant_int_3])), 'global list should be [1,2,3]');
				$pyjs.track.lineno=27;
				self['assertTrue']($m['data_test'], 'global test of list should be True');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGlobalListData'] = $method;
			$pyjs.track.lineno=29;
			$method = $pyjs__bind_method2('testChangeUsingTopLevelFunction', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $2,l,$1;
				$pyjs.track={module:'VarsTest', lineno:29};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=29;
				$pyjs.track.lineno=30;
				l = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=31;
				$m['changeme'](l);
				$pyjs.track.lineno=32;
				self['assertEqual']((typeof ($1=l).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testChangeUsingTopLevelFunction'] = $method;
			$pyjs.track.lineno=34;
			$method = $pyjs__bind_method2('testChangeVarInInnerScope', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,x,$bool1;
				$pyjs.track={module:'VarsTest', lineno:34};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=34;
				$pyjs.track.lineno=35;
				x = $constant_int_5;
				$pyjs.track.lineno=36;
				if ((($bool1=$p['op_eq'](x, $constant_int_1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=37;
					x = $constant_int_2;
				}
				else if ((($bool2=$p['op_eq'](x, $constant_int_5)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=39;
					x = $constant_int_3;
				}
				$pyjs.track.lineno=40;
				self['assertEqual'](x, $constant_int_3, 'the value of x should be 3');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testChangeVarInInnerScope'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('testGlobalVars', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'VarsTest', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				self['assertEqual']($m['module_global_x'], $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGlobalVars'] = $method;
			$pyjs.track.lineno=45;
			$method = $pyjs__bind_method2('testImports', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'VarsTest', lineno:45};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=46;
				self['failUnless']($m['UnitTest']['UnitTest']());
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImports'] = $method;
			$pyjs.track.lineno=48;
			$method = $pyjs__bind_method2('testLocalVar', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var VarsTest;
				$pyjs.track={module:'VarsTest', lineno:48};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=48;
				$pyjs.track.lineno=49;
				VarsTest = $constant_int_1;
				$pyjs.track.lineno=50;
				self['assertEqual'](VarsTest, $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLocalVar'] = $method;
			$pyjs.track.lineno=52;
			$method = $pyjs__bind_method2('testUnpack', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,c,b,e,d,l,X,a1,a3,a2,b1,b2,c2,y,x,c1,d2,d1;
				$pyjs.track={module:'VarsTest', lineno:52};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=52;
				$pyjs.track.lineno=53;
				l = $p['list']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=54;
				var $tupleassign1 = $p['__ass_unpack'](l, 2, null);
				x = $tupleassign1[0];
				y = $tupleassign1[1];
				$pyjs.track.lineno=55;
				self['assertEqual'](x, $constant_int_1);
				$pyjs.track.lineno=56;
				self['assertEqual'](y, $constant_int_2);
				$pyjs.track.lineno=58;
				x = $p['tuple']([$p['tuple']([$constant_int_1, $constant_int_2]), $constant_int_3, $p['tuple']([$constant_int_4, $constant_int_5])]);
				$pyjs.track.lineno=59;
				var $tupleassign2 = $p['__ass_unpack'](x, 3, null);
				var $tupleassign3 = $p['__ass_unpack']($tupleassign2[0], 2, null);
				a = $tupleassign3[0];
				b = $tupleassign3[1];
				c = $tupleassign2[1];
				var $tupleassign4 = $p['__ass_unpack']($tupleassign2[2], 2, null);
				d = $tupleassign4[0];
				e = $tupleassign4[1];
				$pyjs.track.lineno=60;
				self['assertEqual'](a, $constant_int_1);
				$pyjs.track.lineno=61;
				self['assertEqual']($p['list']([a, b, c, d, e]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]));
				$pyjs.track.lineno=63;
				x = $p['tuple']([$constant_int_1, $p['tuple']([$constant_int_2, $p['tuple']([$constant_int_3, $p['tuple']([$constant_int_4, $constant_int_5]), $constant_int_6]), $constant_int_7]), $constant_int_8, $p['tuple']([$constant_int_9, $constant_int_10])]);
				$pyjs.track.lineno=64;
				var $tupleassign5 = $p['__ass_unpack'](x, 4, null);
				a1 = $tupleassign5[0];
				var $tupleassign6 = $p['__ass_unpack']($tupleassign5[1], 3, null);
				b1 = $tupleassign6[0];
				var $tupleassign7 = $p['__ass_unpack']($tupleassign6[1], 3, null);
				c1 = $tupleassign7[0];
				var $tupleassign8 = $p['__ass_unpack']($tupleassign7[1], 2, null);
				d1 = $tupleassign8[0];
				d2 = $tupleassign8[1];
				c2 = $tupleassign7[2];
				b2 = $tupleassign6[2];
				a2 = $tupleassign5[2];
				a3 = $tupleassign5[3];
				$pyjs.track.lineno=65;
				self['assertEqual'](d1, $constant_int_4);
				$pyjs.track.lineno=66;
				self['assertEqual']($p['list']([a1, b1, c1, d1, d2, c2, b2, a2, a3]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_8, $p['tuple']([$constant_int_9, $constant_int_10])]));
				$pyjs.track.lineno=69;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'VarsTest';
					$cls_definition.__md5__ = '253a02535a6241b5aa586e20d5bc0e5a';
					$pyjs.track.lineno=70;
					$pyjs.track.lineno=69;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=72;
				x = X();
				$pyjs.track.lineno=73;
				x.__is_instance__ && typeof x.__setattr__ == 'function' ? x.__setattr__('a', $constant_int_1) : $p['setattr'](x, 'a', $constant_int_1); 
				$pyjs.track.lineno=74;
				d = $p['dict']([]);
				$pyjs.track.lineno=75;
				l = $p['list']([$constant_int_1, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=76;
				var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['tuple']([$constant_int_10, $constant_int_11]), $constant_int_20, $constant_int_30]), 3, null);
				$p['__setslice'](l, $constant_int_1, $constant_int_2, $tupleassign9[0]);
				x.__is_instance__ && typeof x.__setattr__ == 'function' ? x.__setattr__('a', $tupleassign9[1]) : $p['setattr'](x, 'a', $tupleassign9[1]); 
				d.__setitem__('zz', $tupleassign9[2]);
				$pyjs.track.lineno=77;
				self['assertEqual'](l, $p['list']([$constant_int_1, $constant_int_10, $constant_int_11, $constant_int_4]));
				$pyjs.track.lineno=78;
				self['assertEqual']($p['getattr'](x, 'a'), $constant_int_20);
				$pyjs.track.lineno=79;
				self['assertEqual'](d, $p['dict']([['zz', $constant_int_30]]));
				$pyjs.track.lineno=81;
				var $tupleassign10 = $p['__ass_unpack']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3]), 3, null);
				a = $tupleassign10[0];
				b = $tupleassign10[1];
				c = $tupleassign10[2];
				$pyjs.track.lineno=82;
				self['assertEqual']($p['list']([a, b, c]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=83;
				var $tupleassign11 = $p['__ass_unpack']($p['tuple']([$constant_int_4, $constant_int_5, $constant_int_6]), 3, null);
				a = $tupleassign11[0];
				b = $tupleassign11[1];
				c = $tupleassign11[2];
				$pyjs.track.lineno=84;
				self['assertEqual']($p['list']([a, b, c]), $p['list']([$constant_int_4, $constant_int_5, $constant_int_6]));
				$pyjs.track.lineno=87;
				$pyjs.track.lineno=90;
				var $tupleassign12 = $p['__ass_unpack']($p['set']($p['list']([$constant_int_7, $constant_int_8, $constant_int_9])), 3, null);
				a = $tupleassign12[0];
				b = $tupleassign12[1];
				c = $tupleassign12[2];
				$pyjs.track.lineno=91;
				self['assertEqual']($p['set']($p['list']([a, b, c])), $p['set']($p['list']([$constant_int_7, $constant_int_8, $constant_int_9])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testUnpack'] = $method;
			$pyjs.track.lineno=93;
			$method = $pyjs__bind_method2('testUnpackInLoop', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,xxx,yyy,l,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs.track={module:'VarsTest', lineno:93};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=93;
				$pyjs.track.lineno=94;
				l = $p['list']([$p['list']([$constant_int_1, $constant_int_2]), $p['list']([$constant_int_1, $constant_int_2])]);
				$pyjs.track.lineno=95;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = l;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign13 = $p['__ass_unpack']($iter1_nextval, 2, null);
					xxx = $tupleassign13[0];
					yyy = $tupleassign13[1];
					$pyjs.track.lineno=96;
					self['assertEqual'](xxx, $constant_int_1);
					$pyjs.track.lineno=97;
					self['assertEqual'](yyy, $constant_int_2);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='VarsTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testUnpackInLoop'] = $method;
			$pyjs.track.lineno=99;
			$method = $pyjs__bind_method2('testImportedNamespace', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var b;
				$pyjs.track={module:'VarsTest', lineno:99};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=99;
				$pyjs.track.lineno=100;
				b = $m['foo']['Bar']();
				$pyjs.track.lineno=101;
				self['assertEqual']($p['getattr'](b, 'X'), $constant_int_1);
				$pyjs.track.lineno=102;
				self['assertEqual']($p['getattr']($p['getattr']($m['foo'], 'Bar'), 'X'), $constant_int_1);
				$pyjs.track.lineno=103;
				self['assertEqual']($p['getattr']($p['getattr']($m['foo'], 'bar'), 'X'), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImportedNamespace'] = $method;
			$pyjs.track.lineno=105;
			$method = $pyjs__bind_method2('testImport', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a0,$pyjs_try_err,a1;
				$pyjs.track={module:'VarsTest', lineno:105};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=105;
				$pyjs.track.lineno=106;
				$pyjs.track.lineno=107;
				a0 = $p['getattr']($m['foo'], 'foo_value');
				$pyjs.track.lineno=108;
				a1 = $constant_int_2;
				$pyjs.track.lineno=109;
				self['assertEqual']($m['myfoo_value'], a0);
				$pyjs.track.lineno=110;
				self['assertEqual']($m['myget_foo_value'](), a0);
				$pyjs.track.lineno=111;
				$m['myfoo'].__is_instance__ && typeof $m['myfoo'].__setattr__ == 'function' ? $m['myfoo'].__setattr__('foo_value', a1) : $p['setattr']($m['myfoo'], 'foo_value', a1); 
				$pyjs.track.lineno=112;
				self['assertEqual']($m['myfoo_value'], a0);
				$pyjs.track.lineno=113;
				self['assertEqual']($m['myget_foo_value'](), a1);
				$pyjs.track.lineno=114;
				$m['import_sys']();
				$pyjs.track.lineno=115;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=116;
					self['assertEqual']($p['getattr']($m['sys'], '__name__'), 'sys');
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
					$pyjs.track.module='VarsTest';
					if (true) {
						$pyjs.track.lineno=118;
						self['fail']('Global module sys not available (bug #216)');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImport'] = $method;
			$pyjs.track.lineno=120;
			$method = $pyjs__bind_method2('testGlobalsBltin', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1,$4,globkeys2,$pyjs_try_err,$bool4,$6,globkeys,$5,globs,$3;
				$pyjs.track={module:'VarsTest', lineno:120};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=120;
				$pyjs.track.lineno=121;
				globs = $p['_globals']($m);
				$pyjs.track.lineno=122;
				globkeys = globs['keys']();
				$pyjs.track.lineno=123;
				var 				$lambda1 = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $bool3;
					$pyjs.track={module:'VarsTest',lineno:123};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='VarsTest';
					$pyjs.track.lineno=123;
					$pyjs.track.lineno=123;
					$pyjs.track.lineno=123;
					var $pyjs__ret = !(($bool3=x['startswith']('__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) );
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null,['x']];
				globkeys2 = $p['filter']($lambda1, globkeys);
				$pyjs.track.lineno=124;
				if ((($bool4=globkeys2.__contains__('sys')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$pyjs.track.lineno=125;
					globkeys2['remove']('sys');
				}
				$pyjs.track.lineno=127;
				self['assertEqual']($p['set'](globkeys2), $p['set']($p['list'](['changeme', 'foo', 'myfoo_value', 'data', 'UnitTest', 'import_sys', 'VarsTest', 'data_test', 'module_global_x', 'myget_foo_value', 'myfoo'])));
				$pyjs.track.lineno=133;
				self['assertEqual']((typeof ($3=globs).__array != 'undefined'?
					((typeof $3.__array[$4='__name__']) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__('__name__')), (typeof __name__ == "undefined"?$m.__name__:__name__));
				$pyjs.track.lineno=135;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=136;
					$p['_globals']($m).__setitem__('new_global_via_dict', $constant_int_1);
					$pyjs.track.lineno=137;
					self['assertEqual']((typeof ($5=$p['_globals']($m)).__array != 'undefined'?
						((typeof $5.__array[$6='new_global_via_dict']) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__('new_global_via_dict')), $constant_int_1);
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
					$pyjs.track.module='VarsTest';
					if (true) {
						$pyjs.track.lineno=139;
						self['fail']('Assigning to globals() does not work, #590');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGlobalsBltin'] = $method;
			$pyjs.track.lineno=141;
			$method = $pyjs__bind_method2('testDiscardNames', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var X,$pyjs_try_err,x;
				$pyjs.track={module:'VarsTest', lineno:141};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=141;
				$pyjs.track.lineno=142;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=143;
					(typeof someundefinedvariable1234 == "undefined"?$m.someundefinedvariable1234:someundefinedvariable1234);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=147;
						self['fail']('Discarded names should trigger NameError if undefined, bug #584');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='VarsTest';
						if (($pyjs_try_err_name == $p['NameError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NameError'])) {
							$pyjs.track.lineno=145;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.track.lineno=149;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'VarsTest';
					$cls_definition.__md5__ = '29e4c41f09d9f34604609dd1fdc5082f';
					$pyjs.track.lineno=150;
					$pyjs.track.lineno=149;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=152;
				x = X();
				$pyjs.track.lineno=153;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=154;
					$p['getattr'](x, 'a');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=158;
						self['fail']('Discarded getattr should trigger AttributeError if undefined, bug #584');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='VarsTest';
						if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							$pyjs.track.lineno=156;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDiscardNames'] = $method;
			$pyjs.track.lineno=160;
			$method = $pyjs__bind_method2('testAugmentedAssignments', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '47ed73b1405dcf02e2a9899aa5107e8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$pow2,$pow1,$add2,a0,$mod1,$add1,$assign1,$floordiv2,$floordiv1,$mod2,$div2,$sub2,$sub1,$div1,$mul2,$mul1;
				$pyjs.track={module:'VarsTest', lineno:160};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='VarsTest';
				$pyjs.track.lineno=160;
				$pyjs.track.lineno=161;
				$assign1 = $constant_int_100;
				a = $assign1;
				a0 = $assign1;
				$pyjs.track.lineno=162;
				self['assertTrue']($p['op_is'](a, a0));
				$pyjs.track.lineno=163;
				a = (typeof ($add1=a)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				$pyjs.track.lineno=164;
				self['assertFalse']($p['op_is'](a, a0));
				$pyjs.track.lineno=165;
				self['assertEqual'](a, $constant_int_101);
				$pyjs.track.lineno=167;
				a = (typeof ($sub1=a)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				$pyjs.track.lineno=168;
				self['assertEqual'](a, $constant_int_100);
				$pyjs.track.lineno=170;
				a = (typeof ($mul1=a)==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				$pyjs.track.lineno=171;
				self['assertEqual'](a, $constant_int_200);
				$pyjs.track.lineno=173;
				a = (typeof ($div1=a)==typeof ($div2=$constant_int_3) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				$pyjs.track.lineno=174;
				self['assertEqual'](a, $constant_int_66);
				$pyjs.track.lineno=176;
				a = (typeof ($floordiv1=a)==typeof ($floordiv2=$constant_int_60) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math.floor($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2));
				$pyjs.track.lineno=177;
				self['assertEqual'](a, $constant_int_1);
				$pyjs.track.lineno=179;
				a = $constant_int_15;
				$pyjs.track.lineno=180;
				a = (typeof ($mod1=a)==typeof ($mod2=$constant_int_10) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
				$pyjs.track.lineno=181;
				self['assertEqual'](a, $constant_int_5);
				$pyjs.track.lineno=183;
				a = (typeof ($pow1=a)==typeof ($pow2=$constant_int_2) && typeof $pow1=='number'?
					Math.pow($pow1,$pow2):
					$p['op_pow']($pow1,$pow2));
				$pyjs.track.lineno=184;
				self['assertEqual'](a, $constant_int_25);
				$pyjs.track.lineno=186;
				a = $p['op_bitshiftright'](a,$constant_int_2);
				$pyjs.track.lineno=187;
				self['assertEqual'](a, $constant_int_6);
				$pyjs.track.lineno=189;
				a = $p['op_bitshiftleft'](a,$constant_int_2);
				$pyjs.track.lineno=190;
				self['assertEqual'](a, $constant_int_24);
				$pyjs.track.lineno=192;
				a = $p['op_bitand2'](a, $constant_int_16);
				$pyjs.track.lineno=193;
				self['assertEqual'](a, $constant_int_16);
				$pyjs.track.lineno=195;
				a = $p['op_bitxor2'](a, $constant_int_8);
				$pyjs.track.lineno=196;
				self['assertEqual'](a, $constant_int_24);
				$pyjs.track.lineno=198;
				a = $p['op_bitor2'](a, $constant_int_32);
				$pyjs.track.lineno=199;
				self['assertEqual'](a, $constant_int_56);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAugmentedAssignments'] = $method;
			$pyjs.track.lineno=23;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('VarsTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end VarsTest */


/* end module: VarsTest */


/*
PYJS_DEPS: ['UnitTest', 'foo', 'foo.foo_value', 'foo.get_foo_value', 'sys']
*/
