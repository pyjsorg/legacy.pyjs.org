/* start module: DictTest */
$pyjs.loaded_modules['DictTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DictTest'].__was_initialized__) return $pyjs.loaded_modules['DictTest'];
	var $m = $pyjs.loaded_modules["DictTest"];
	$m.__repr__ = function() { return "<module: DictTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DictTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'DictTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'DictTest.py, line 3:\n    class Foo:';
		$m.__track_lines__[4] = 'DictTest.py, line 4:\n    pass';
		$m.__track_lines__[6] = 'DictTest.py, line 6:\n    class DictTest(UnitTest):';
		$m.__track_lines__[8] = 'DictTest.py, line 8:\n    def testStringKeys(self):';
		$m.__track_lines__[9] = "DictTest.py, line 9:\n    d = {'a':1, 'b':2, '3':3, 3:4}";
		$m.__track_lines__[10] = "DictTest.py, line 10:\n    self.assertEqual(d['a'], 1)";
		$m.__track_lines__[11] = "DictTest.py, line 11:\n    self.assertEqual(d['b'], 2)";
		$m.__track_lines__[23] = 'DictTest.py, line 23:\n    try:';
		$m.__track_lines__[24] = "DictTest.py, line 24:\n    x = d['notthere']";
		$m.__track_lines__[25] = "DictTest.py, line 25:\n    self.fail('__getitem__ must raise KeyError')";
		$m.__track_lines__[27] = "DictTest.py, line 27:\n    self.assertEqual(e.__class__.__name__, 'KeyError')";
		$m.__track_lines__[28] = 'DictTest.py, line 28:\n    self.assertEqual(str(e), "\'notthere\'")';
		$m.__track_lines__[30] = 'DictTest.py, line 30:\n    d = {}';
		$m.__track_lines__[31] = "DictTest.py, line 31:\n    self.assertEqual(1, d.setdefault('foo', 1))";
		$m.__track_lines__[32] = "DictTest.py, line 32:\n    self.assertEqual(1, d.setdefault('foo', 2))";
		$m.__track_lines__[33] = "DictTest.py, line 33:\n    self.assertEqual(1, d.get('foo', 2))";
		$m.__track_lines__[34] = "DictTest.py, line 34:\n    self.assertEqual(2, d.get('bar', 2))";
		$m.__track_lines__[35] = "DictTest.py, line 35:\n    self.assertEqual(3, d.setdefault('bar', 3))";
		$m.__track_lines__[37] = 'DictTest.py, line 37:\n    d = {}';
		$m.__track_lines__[38] = 'DictTest.py, line 38:\n    d.update({1:1})';
		$m.__track_lines__[39] = "DictTest.py, line 39:\n    d.update({2:2}, a='a')";
		$m.__track_lines__[40] = "DictTest.py, line 40:\n    self.assertEqual(d, {1:1, 2:2, 'a':'a'})";
		$m.__track_lines__[41] = "DictTest.py, line 41:\n    self.assertRaises(TypeError, getattr(d, 'update'), {}, {})";
		$m.__track_lines__[43] = 'DictTest.py, line 43:\n    def testTupleKeys(self):';
		$m.__track_lines__[44] = 'DictTest.py, line 44:\n    d = {}';
		$m.__track_lines__[45] = 'DictTest.py, line 45:\n    d[1] = 1';
		$m.__track_lines__[46] = 'DictTest.py, line 46:\n    d[(2,)] = 3';
		$m.__track_lines__[47] = 'DictTest.py, line 47:\n    d[(1,1)] = 4';
		$m.__track_lines__[48] = 'DictTest.py, line 48:\n    d[1,2] = 5';
		$m.__track_lines__[50] = 'DictTest.py, line 50:\n    v = {(1, 2): 5, 1: 1, (1, 1): 4, (2,): 3}';
		$m.__track_lines__[51] = 'DictTest.py, line 51:\n    self.assertTrue(d == v, "%r == %r" % (d, v))';
		$m.__track_lines__[53] = 'DictTest.py, line 53:\n    d = {}';
		$m.__track_lines__[54] = 'DictTest.py, line 54:\n    d[1] = 1';
		$m.__track_lines__[55] = 'DictTest.py, line 55:\n    d[1,] = 2';
		$m.__track_lines__[56] = 'DictTest.py, line 56:\n    v = {1: 1, (1,): 2}';
		$m.__track_lines__[57] = 'DictTest.py, line 57:\n    self.assertEqual(d, v, "%r == %r bug #273" % (d, v))';
		$m.__track_lines__[59] = 'DictTest.py, line 59:\n    def testObjectKeys(self):';
		$m.__track_lines__[60] = 'DictTest.py, line 60:\n    f1 = Foo()';
		$m.__track_lines__[61] = 'DictTest.py, line 61:\n    f2 = Foo()';
		$m.__track_lines__[62] = 'DictTest.py, line 62:\n    f3 = Foo()';
		$m.__track_lines__[63] = 'DictTest.py, line 63:\n    d = {f1:1, f2:2}';
		$m.__track_lines__[64] = 'DictTest.py, line 64:\n    self.assertEqual(d[f1], 1)';
		$m.__track_lines__[65] = 'DictTest.py, line 65:\n    self.assertEqual(d[f2], 2)';
		$m.__track_lines__[68] = 'DictTest.py, line 68:\n    keys = d.keys()';
		$m.__track_lines__[69] = 'DictTest.py, line 69:\n    keys.sort()';
		$m.__track_lines__[70] = 'DictTest.py, line 70:\n    expected = [f1, f2]';
		$m.__track_lines__[71] = 'DictTest.py, line 71:\n    expected.sort()';
		$m.__track_lines__[72] = 'DictTest.py, line 72:\n    self.assertEqual(keys, expected)';
		$m.__track_lines__[75] = 'DictTest.py, line 75:\n    values = d.values()';
		$m.__track_lines__[76] = 'DictTest.py, line 76:\n    values.sort()';
		$m.__track_lines__[78] = 'DictTest.py, line 78:\n    expected = [1, 2]';
		$m.__track_lines__[79] = 'DictTest.py, line 79:\n    self.assertEqual(values, expected)';
		$m.__track_lines__[81] = 'DictTest.py, line 81:\n    self.failUnless(f1 in d)';
		$m.__track_lines__[82] = 'DictTest.py, line 82:\n    self.failUnless(f2 in d)';
		$m.__track_lines__[83] = 'DictTest.py, line 83:\n    self.failIf(f3 in d)';
		$m.__track_lines__[85] = 'DictTest.py, line 85:\n    self.assertEqual(None, d.get(f3))';
		$m.__track_lines__[86] = 'DictTest.py, line 86:\n    self.assertEqual(1, d.get(f3, 1))';
		$m.__track_lines__[88] = 'DictTest.py, line 88:\n    d.update({f3:3})';
		$m.__track_lines__[89] = 'DictTest.py, line 89:\n    self.failUnless(f3 in d)';
		$m.__track_lines__[90] = 'DictTest.py, line 90:\n    self.assertEqual(d[f3], 3)';
		$m.__track_lines__[92] = 'DictTest.py, line 92:\n    self.assertEqual(3, len(d))';
		$m.__track_lines__[94] = 'DictTest.py, line 94:\n    dd = d.copy()';
		$m.__track_lines__[95] = 'DictTest.py, line 95:\n    self.assertEqual(dd[f3], 3)';
		$m.__track_lines__[96] = 'DictTest.py, line 96:\n    self.failIf(dd is d)';
		$m.__track_lines__[98] = 'DictTest.py, line 98:\n    def testConstructor(self):';
		$m.__track_lines__[99] = 'DictTest.py, line 99:\n    d = dict(([1, 1], [2,2]))';
		$m.__track_lines__[100] = 'DictTest.py, line 100:\n    self.assertEqual(d[1], 1)';
		$m.__track_lines__[101] = 'DictTest.py, line 101:\n    self.assertEqual(d[2], 2)';
		$m.__track_lines__[105] = 'DictTest.py, line 105:\n    d = dict(a=1, b=2)';
		$m.__track_lines__[106] = "DictTest.py, line 106:\n    self.assertEqual(d['a'], 1)";
		$m.__track_lines__[107] = "DictTest.py, line 107:\n    self.assertEqual(d['b'], 2)";
		$m.__track_lines__[108] = 'DictTest.py, line 108:\n    d = dict([(1, 1), (2,2)], a=1, b=2)';
		$m.__track_lines__[109] = 'DictTest.py, line 109:\n    self.assertEqual(d[1], 1)';
		$m.__track_lines__[110] = 'DictTest.py, line 110:\n    self.assertEqual(d[2], 2)';
		$m.__track_lines__[111] = "DictTest.py, line 111:\n    self.assertEqual(d['a'], 1)";
		$m.__track_lines__[112] = "DictTest.py, line 112:\n    self.assertEqual(d['b'], 2)";
		$m.__track_lines__[114] = 'DictTest.py, line 114:\n    def testIter(self):';
		$m.__track_lines__[115] = "DictTest.py, line 115:\n    d = {1: [1,2,3], 2: {'a': 1, 'b': 2, 'c': 3}}";
		$m.__track_lines__[116] = 'DictTest.py, line 116:\n    a = 0';
		$m.__track_lines__[117] = 'DictTest.py, line 117:\n    for k in d:';
		$m.__track_lines__[118] = 'DictTest.py, line 118:\n    a += k';
		$m.__track_lines__[119] = 'DictTest.py, line 119:\n    self.assertEqual(a, 3)';
		$m.__track_lines__[121] = 'DictTest.py, line 121:\n    a = 0';
		$m.__track_lines__[122] = 'DictTest.py, line 122:\n    for k in d[1]:';
		$m.__track_lines__[123] = 'DictTest.py, line 123:\n    a += k';
		$m.__track_lines__[124] = 'DictTest.py, line 124:\n    self.assertEqual(a, 6)';
		$m.__track_lines__[126] = 'DictTest.py, line 126:\n    a = 0';
		$m.__track_lines__[127] = 'DictTest.py, line 127:\n    for k in d[1][1:]:';
		$m.__track_lines__[128] = 'DictTest.py, line 128:\n    a += k';
		$m.__track_lines__[129] = 'DictTest.py, line 129:\n    self.assertEqual(a, 5)';
		$m.__track_lines__[131] = 'DictTest.py, line 131:\n    a = 0';
		$m.__track_lines__[132] = 'DictTest.py, line 132:\n    for k in d[2]:';
		$m.__track_lines__[133] = 'DictTest.py, line 133:\n    a += d[2][k]';
		$m.__track_lines__[134] = 'DictTest.py, line 134:\n    self.assertEqual(a, 6)';
		$m.__track_lines__[136] = 'DictTest.py, line 136:\n    def testEnumerate(self):';
		$m.__track_lines__[137] = "DictTest.py, line 137:\n    d = {1: [1,2,3], 2: {'a': 1, 'b': 2, 'c': 3}}";
		$m.__track_lines__[138] = 'DictTest.py, line 138:\n    sum_i = 0';
		$m.__track_lines__[139] = 'DictTest.py, line 139:\n    sum_k = 0';
		$m.__track_lines__[140] = 'DictTest.py, line 140:\n    for i, k in enumerate(d):';
		$m.__track_lines__[141] = 'DictTest.py, line 141:\n    sum_i += i';
		$m.__track_lines__[142] = 'DictTest.py, line 142:\n    sum_k += k';
		$m.__track_lines__[143] = 'DictTest.py, line 143:\n    self.assertEqual(sum_i, 1)';
		$m.__track_lines__[144] = 'DictTest.py, line 144:\n    self.assertEqual(sum_k, 3)';
		$m.__track_lines__[145] = 'DictTest.py, line 145:\n    a = 0';
		$m.__track_lines__[146] = 'DictTest.py, line 146:\n    for i, k in enumerate(sorted(d)):';
		$m.__track_lines__[147] = 'DictTest.py, line 147:\n    self.assertEqual(i+1, k)';
		$m.__track_lines__[148] = 'DictTest.py, line 148:\n    a += k';
		$m.__track_lines__[149] = 'DictTest.py, line 149:\n    self.assertEqual(a, 3)';
		$m.__track_lines__[151] = 'DictTest.py, line 151:\n    def testPop(self):';
		$m.__track_lines__[152] = "DictTest.py, line 152:\n    d = {'a': 1, 'b': 2, 'c': 3}";
		$m.__track_lines__[153] = "DictTest.py, line 153:\n    item = d.pop('d', 4)";
		$m.__track_lines__[154] = 'DictTest.py, line 154:\n    self.assertEqual(item, 4)';
		$m.__track_lines__[156] = 'DictTest.py, line 156:\n    try:';
		$m.__track_lines__[157] = "DictTest.py, line 157:\n    item = d.pop('d')";
		$m.__track_lines__[158] = 'DictTest.py, line 158:\n    self.fail("Failed to raise KeyError on d.pop(\'d\')")';
		$m.__track_lines__[160] = 'DictTest.py, line 160:\n    self.assertEqual(e[0], "d")';
		$m.__track_lines__[162] = "DictTest.py, line 162:\n    item = d.pop('b')";
		$m.__track_lines__[163] = 'DictTest.py, line 163:\n    self.assertEqual(item, 2)';
		$m.__track_lines__[165] = 'DictTest.py, line 165:\n    item = d.popitem()';
		$m.__track_lines__[166] = 'DictTest.py, line 166:\n    self.assertTrue(item == (\'a\',1) or item == (\'c\',3), "popped invalid item %s" % str(item))';
		$m.__track_lines__[168] = 'DictTest.py, line 168:\n    item = d.popitem()';
		$m.__track_lines__[169] = 'DictTest.py, line 169:\n    try:';
		$m.__track_lines__[170] = 'DictTest.py, line 170:\n    item = d.popitem()';
		$m.__track_lines__[172] = 'DictTest.py, line 172:\n    self.assertEqual(e[0], "popitem(): dictionary is empty")';
		$m.__track_lines__[174] = 'DictTest.py, line 174:\n    def testCmp(self):';
		$m.__track_lines__[175] = 'DictTest.py, line 175:\n    self.assertEqual(cmp({}, {}), 0)';
		$m.__track_lines__[176] = "DictTest.py, line 176:\n    self.assertEqual(cmp({},{'1':1}), -1)";
		$m.__track_lines__[177] = "DictTest.py, line 177:\n    self.assertEqual(cmp({'1':1}, {'1':1}), 0)";
		$m.__track_lines__[178] = "DictTest.py, line 178:\n    self.assertEqual(cmp({'1':1}, {'1':2}), -1)";
		$m.__track_lines__[179] = "DictTest.py, line 179:\n    self.assertEqual(cmp({'1':1}, {'1':0}), 1)";
		$m.__track_lines__[180] = "DictTest.py, line 180:\n    self.assertEqual(cmp({'1':1, '2':2}, {'1':0}), 1)";
		$m.__track_lines__[181] = "DictTest.py, line 181:\n    self.assertEqual(cmp({'1':1, '2':2}, {'1':2}), 1)";
		$m.__track_lines__[182] = "DictTest.py, line 182:\n    self.assertEqual(cmp({'1':1, '2':2}, {'2':2, '1':1}), 0)";
		$m.__track_lines__[184] = 'DictTest.py, line 184:\n    def testEq(self):';
		$m.__track_lines__[185] = 'DictTest.py, line 185:\n    self.failUnlessEqual({}, {})';
		$m.__track_lines__[186] = "DictTest.py, line 186:\n    self.failUnlessEqual({'1':1}, {'1':1})";
		$m.__track_lines__[187] = "DictTest.py, line 187:\n    self.failIfEqual({},{'1':1})";
		$m.__track_lines__[188] = "DictTest.py, line 188:\n    self.failIfEqual({'1':1},{'1':2})";
		$m.__track_lines__[190] = 'DictTest.py, line 190:\n    try:';
		$m.__track_lines__[191] = 'DictTest.py, line 191:\n    self.failIfEqual({\'1\':1}, [1,2], "Test for Bug 362")';
		$m.__track_lines__[193] = 'DictTest.py, line 193:\n    self.fail("Bug 362 - comparison between dict and non-dict")';
		$m.__track_lines__[195] = 'DictTest.py, line 195:\n    class DICT(dict): pass';
		$m.__track_lines__[196] = 'DictTest.py, line 196:\n    self.failUnlessEqual(DICT(), {})';
		$m.__track_lines__[197] = 'DictTest.py, line 197:\n    self.failUnlessEqual({}, DICT())';
		$m.__track_lines__[198] = 'DictTest.py, line 198:\n    self.failUnlessEqual(DICT(a=1), dict(a=1))';
		$m.__track_lines__[200] = 'DictTest.py, line 200:\n    def testFromkeys(self):';
		$m.__track_lines__[201] = "DictTest.py, line 201:\n    d1 = {'a':1, 'b':1}";
		$m.__track_lines__[202] = "DictTest.py, line 202:\n    d2 = {'a':None, 'b':None}";
		$m.__track_lines__[203] = 'DictTest.py, line 203:\n    self.assertEqual(dict.fromkeys(d1), d2)';
		$m.__track_lines__[204] = 'DictTest.py, line 204:\n    self.assertEqual(dict.fromkeys(d1, None), d2)';
		$m.__track_lines__[205] = 'DictTest.py, line 205:\n    self.assertEqual(dict.fromkeys(d1, 1), d1)';
		$m.__track_lines__[206] = 'DictTest.py, line 206:\n    self.assertEqual(d1.fromkeys(d1), d2)';
		$m.__track_lines__[207] = 'DictTest.py, line 207:\n    self.assertEqual(d1.fromkeys(d1, None), d2)';
		$m.__track_lines__[208] = 'DictTest.py, line 208:\n    self.assertEqual(d1.fromkeys(d1, 1), d1)';
		$m.__track_lines__[209] = "DictTest.py, line 209:\n    self.assertEqual(dict.fromkeys('ab'), d2)";
		$m.__track_lines__[211] = 'DictTest.py, line 211:\n    def testIteritems(self):';
		$m.__track_lines__[212] = 'DictTest.py, line 212:\n    d1 = {1:2,3:4}';
		$m.__track_lines__[213] = 'DictTest.py, line 213:\n    a,b = 0,0';
		$m.__track_lines__[214] = 'DictTest.py, line 214:\n    for x,y in d1.iteritems():';
		$m.__track_lines__[215] = 'DictTest.py, line 215:\n    a += x';
		$m.__track_lines__[216] = 'DictTest.py, line 216:\n    b += y';
		$m.__track_lines__[217] = 'DictTest.py, line 217:\n    self.assertEqual((a,b),(4,6))';
		$m.__track_lines__[219] = 'DictTest.py, line 219:\n    class DICT(dict): pass';
		$m.__track_lines__[222] = 'DictTest.py, line 222:\n    d2 = DICT({1:2,3:4})';
		$m.__track_lines__[223] = 'DictTest.py, line 223:\n    a,b = 0,0';
		$m.__track_lines__[224] = 'DictTest.py, line 224:\n    for x,y in d2.iteritems():';
		$m.__track_lines__[225] = 'DictTest.py, line 225:\n    a += x';
		$m.__track_lines__[226] = 'DictTest.py, line 226:\n    b += y';
		$m.__track_lines__[227] = 'DictTest.py, line 227:\n    self.assertEqual((a,b),(4,6))';
		$m.__track_lines__[229] = 'DictTest.py, line 229:\n    d3 = dict()';
		$m.__track_lines__[230] = 'DictTest.py, line 230:\n    a,b = 0,0';
		$m.__track_lines__[231] = 'DictTest.py, line 231:\n    for x,y in d3.iteritems():';
		$m.__track_lines__[232] = 'DictTest.py, line 232:\n    a += x';
		$m.__track_lines__[233] = 'DictTest.py, line 233:\n    b += y';
		$m.__track_lines__[234] = 'DictTest.py, line 234:\n    self.assertEqual((a,b),(0,0))';
		$m.__track_lines__[236] = 'DictTest.py, line 236:\n    def testUpdate(self):';
		$m.__track_lines__[237] = 'DictTest.py, line 237:\n    d1 = {1:2,3:4}';
		$m.__track_lines__[238] = 'DictTest.py, line 238:\n    d1.update({3:5,7:9})';
		$m.__track_lines__[239] = 'DictTest.py, line 239:\n    self.assertEqual(d1[3],5)';
		$m.__track_lines__[240] = 'DictTest.py, line 240:\n    try:';
		$m.__track_lines__[241] = 'DictTest.py, line 241:\n    d1.update(((3,6),(9,12)))';
		$m.__track_lines__[242] = 'DictTest.py, line 242:\n    self.assertEqual(d1[3],6)';
		$m.__track_lines__[244] = 'DictTest.py, line 244:\n    self.fail("Couldn\'t dict.update(...) with a tuple of pairs.")';
		$m.__track_lines__[246] = 'DictTest.py, line 246:\n    def testOverrideDict(self):';
		$m.__track_lines__[247] = 'DictTest.py, line 247:\n    dict = 1';
		$m.__track_lines__[248] = 'DictTest.py, line 248:\n    self.assertEqual(dict, 1)';
		$m.__track_lines__[249] = 'DictTest.py, line 249:\n    x = dict';
		$m.__track_lines__[250] = 'DictTest.py, line 250:\n    self.assertEqual(x, 1)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='DictTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DictTest';
			$cls_definition.__md5__ = '319fa0da68b32ac90f35ea4576cdd811';
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=3;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=6;
		$m['DictTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'DictTest';
			$cls_definition.__md5__ = '08789e1763da6e74c35ce771743f31c9';
			$pyjs.track.lineno=8;
			$method = $pyjs__bind_method2('testStringKeys', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,d,$pyjs_try_err,$6,x,$4,$5,$2,$3,$1;
				$pyjs.track={module:'DictTest', lineno:8};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=8;
				$pyjs.track.lineno=9;
				d = $p['dict']([['a', $constant_int_1], ['b', $constant_int_2], ['3', $constant_int_3], [$constant_int_3, $constant_int_4]]);
				$pyjs.track.lineno=10;
				self['assertEqual']((typeof ($1=d).__array != 'undefined'?
					((typeof $1.__array[$2='a']) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__('a')), $constant_int_1);
				$pyjs.track.lineno=11;
				self['assertEqual']((typeof ($3=d).__array != 'undefined'?
					((typeof $3.__array[$4='b']) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__('b')), $constant_int_2);
				$pyjs.track.lineno=23;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=24;
					x = (typeof ($5=d).__array != 'undefined'?
						((typeof $5.__array[$6='notthere']) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__('notthere'));
					$pyjs.track.lineno=25;
					self['fail']('__getitem__ must raise KeyError');
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
					$pyjs.track.module='DictTest';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=27;
						self['assertEqual']($p['getattr']($p['getattr'](e, '__class__'), '__name__'), 'KeyError');
						$pyjs.track.lineno=28;
						self['assertEqual']($p['str'](e), "'notthere'");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=30;
				d = $p['dict']([]);
				$pyjs.track.lineno=31;
				self['assertEqual']($constant_int_1, d['setdefault']('foo', $constant_int_1));
				$pyjs.track.lineno=32;
				self['assertEqual']($constant_int_1, d['setdefault']('foo', $constant_int_2));
				$pyjs.track.lineno=33;
				self['assertEqual']($constant_int_1, d['get']('foo', $constant_int_2));
				$pyjs.track.lineno=34;
				self['assertEqual']($constant_int_2, d['get']('bar', $constant_int_2));
				$pyjs.track.lineno=35;
				self['assertEqual']($constant_int_3, d['setdefault']('bar', $constant_int_3));
				$pyjs.track.lineno=37;
				d = $p['dict']([]);
				$pyjs.track.lineno=38;
				d['update']($p['dict']([[$constant_int_1, $constant_int_1]]));
				$pyjs.track.lineno=39;
				$pyjs_kwargs_call(d, 'update', null, null, [{a:'a'}, $p['dict']([[$constant_int_2, $constant_int_2]])]);
				$pyjs.track.lineno=40;
				self['assertEqual'](d, $p['dict']([[$constant_int_1, $constant_int_1], [$constant_int_2, $constant_int_2], ['a', 'a']]));
				$pyjs.track.lineno=41;
				self['assertRaises']($p['TypeError'], $p['getattr'](d, 'update'), $p['dict']([]), $p['dict']([]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStringKeys'] = $method;
			$pyjs.track.lineno=43;
			$method = $pyjs__bind_method2('testTupleKeys', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,v;
				$pyjs.track={module:'DictTest', lineno:43};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=44;
				d = $p['dict']([]);
				$pyjs.track.lineno=45;
				d.__setitem__($constant_int_1, $constant_int_1);
				$pyjs.track.lineno=46;
				d.__setitem__($p['tuple']([$constant_int_2]), $constant_int_3);
				$pyjs.track.lineno=47;
				d.__setitem__($p['tuple']([$constant_int_1, $constant_int_1]), $constant_int_4);
				$pyjs.track.lineno=48;
				d.__setitem__($p['tuple']([$constant_int_1, $constant_int_2]), $constant_int_5);
				$pyjs.track.lineno=50;
				v = $p['dict']([[$p['tuple']([$constant_int_1, $constant_int_2]), $constant_int_5], [$constant_int_1, $constant_int_1], [$p['tuple']([$constant_int_1, $constant_int_1]), $constant_int_4], [$p['tuple']([$constant_int_2]), $constant_int_3]]);
				$pyjs.track.lineno=51;
				self['assertTrue']($p['op_eq'](d, v), $p['sprintf']('%r == %r', $p['tuple']([d, v])));
				$pyjs.track.lineno=53;
				d = $p['dict']([]);
				$pyjs.track.lineno=54;
				d.__setitem__($constant_int_1, $constant_int_1);
				$pyjs.track.lineno=55;
				d.__setitem__($p['tuple']([$constant_int_1]), $constant_int_2);
				$pyjs.track.lineno=56;
				v = $p['dict']([[$constant_int_1, $constant_int_1], [$p['tuple']([$constant_int_1]), $constant_int_2]]);
				$pyjs.track.lineno=57;
				self['assertEqual'](d, v, $p['sprintf']('%r == %r bug #273', $p['tuple']([d, v])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTupleKeys'] = $method;
			$pyjs.track.lineno=59;
			$method = $pyjs__bind_method2('testObjectKeys', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,f1,f2,f3,$10,d,$12,$13,keys,$len1,values,$8,$9,expected,$7,dd,$11;
				$pyjs.track={module:'DictTest', lineno:59};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=60;
				f1 = $m['Foo']();
				$pyjs.track.lineno=61;
				f2 = $m['Foo']();
				$pyjs.track.lineno=62;
				f3 = $m['Foo']();
				$pyjs.track.lineno=63;
				d = $p['dict']([[f1, $constant_int_1], [f2, $constant_int_2]]);
				$pyjs.track.lineno=64;
				self['assertEqual']((typeof ($7=d).__array != 'undefined'?
					((typeof $7.__array[$8=f1]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(f1)), $constant_int_1);
				$pyjs.track.lineno=65;
				self['assertEqual']((typeof ($9=d).__array != 'undefined'?
					((typeof $9.__array[$10=f2]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(f2)), $constant_int_2);
				$pyjs.track.lineno=68;
				keys = d['keys']();
				$pyjs.track.lineno=69;
				keys['sort']();
				$pyjs.track.lineno=70;
				expected = $p['list']([f1, f2]);
				$pyjs.track.lineno=71;
				expected['sort']();
				$pyjs.track.lineno=72;
				self['assertEqual'](keys, expected);
				$pyjs.track.lineno=75;
				values = d['values']();
				$pyjs.track.lineno=76;
				values['sort']();
				$pyjs.track.lineno=78;
				expected = $p['list']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=79;
				self['assertEqual'](values, expected);
				$pyjs.track.lineno=81;
				self['failUnless'](d.__contains__(f1));
				$pyjs.track.lineno=82;
				self['failUnless'](d.__contains__(f2));
				$pyjs.track.lineno=83;
				self['failIf'](d.__contains__(f3));
				$pyjs.track.lineno=85;
				self['assertEqual'](null, d['get'](f3));
				$pyjs.track.lineno=86;
				self['assertEqual']($constant_int_1, d['get'](f3, $constant_int_1));
				$pyjs.track.lineno=88;
				d['update']($p['dict']([[f3, $constant_int_3]]));
				$pyjs.track.lineno=89;
				self['failUnless'](d.__contains__(f3));
				$pyjs.track.lineno=90;
				self['assertEqual']((typeof ($11=d).__array != 'undefined'?
					((typeof $11.__array[$12=f3]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(f3)), $constant_int_3);
				$pyjs.track.lineno=92;
				self['assertEqual']($constant_int_3, (($len1=d) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))));
				$pyjs.track.lineno=94;
				dd = d['copy']();
				$pyjs.track.lineno=95;
				self['assertEqual']((typeof ($13=dd).__array != 'undefined'?
					((typeof $13.__array[$14=f3]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(f3)), $constant_int_3);
				$pyjs.track.lineno=96;
				self['failIf']($p['op_is'](dd, d));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testObjectKeys'] = $method;
			$pyjs.track.lineno=98;
			$method = $pyjs__bind_method2('testConstructor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $29,$15,$16,$17,d,$28,$21,$20,$22,$18,$19,$27,$24,$26,$30,$25,$23;
				$pyjs.track={module:'DictTest', lineno:98};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=98;
				$pyjs.track.lineno=99;
				d = $p['dict']($p['tuple']([$p['list']([$constant_int_1, $constant_int_1]), $p['list']([$constant_int_2, $constant_int_2])]));
				$pyjs.track.lineno=100;
				self['assertEqual']((typeof ($15=d).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_1]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_1)), $constant_int_1);
				$pyjs.track.lineno=101;
				self['assertEqual']((typeof ($17=d).__array != 'undefined'?
					((typeof $17.__array[$18=$constant_int_2]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($constant_int_2)), $constant_int_2);
				$pyjs.track.lineno=105;
				d = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1, b:$constant_int_2}]);
				$pyjs.track.lineno=106;
				self['assertEqual']((typeof ($19=d).__array != 'undefined'?
					((typeof $19.__array[$20='a']) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__('a')), $constant_int_1);
				$pyjs.track.lineno=107;
				self['assertEqual']((typeof ($21=d).__array != 'undefined'?
					((typeof $21.__array[$22='b']) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__('b')), $constant_int_2);
				$pyjs.track.lineno=108;
				d = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1, b:$constant_int_2}, $p['list']([$p['tuple']([$constant_int_1, $constant_int_1]), $p['tuple']([$constant_int_2, $constant_int_2])])]);
				$pyjs.track.lineno=109;
				self['assertEqual']((typeof ($23=d).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_1]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_1)), $constant_int_1);
				$pyjs.track.lineno=110;
				self['assertEqual']((typeof ($25=d).__array != 'undefined'?
					((typeof $25.__array[$26=$constant_int_2]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($constant_int_2)), $constant_int_2);
				$pyjs.track.lineno=111;
				self['assertEqual']((typeof ($27=d).__array != 'undefined'?
					((typeof $27.__array[$28='a']) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__('a')), $constant_int_1);
				$pyjs.track.lineno=112;
				self['assertEqual']((typeof ($29=d).__array != 'undefined'?
					((typeof $29.__array[$30='b']) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__('b')), $constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testConstructor'] = $method;
			$pyjs.track.lineno=114;
			$method = $pyjs__bind_method2('testIter', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $34,$iter3_array,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter4_idx,$iter3_idx,$iter2_iter,$iter3_iter,$add7,$40,$iter1_array,$iter1_nextval,$add5,$iter2_idx,$37,$iter3_type,d,a,$iter2_nextval,$iter1_type,$38,$39,$36,$iter4_nextval,k,$35,$32,$33,$31,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$pyjs__trackstack_size_1,$iter4_array,$add8,$iter3_nextval,$iter2_array;
				$pyjs.track={module:'DictTest', lineno:114};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=114;
				$pyjs.track.lineno=115;
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3])], [$constant_int_2, $p['dict']([['a', $constant_int_1], ['b', $constant_int_2], ['c', $constant_int_3]])]]);
				$pyjs.track.lineno=116;
				a = $constant_int_0;
				$pyjs.track.lineno=117;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = d;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					k = $iter1_nextval;
					$pyjs.track.lineno=118;
					a = (typeof ($add1=a)==typeof ($add2=k) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=119;
				self['assertEqual'](a, $constant_int_3);
				$pyjs.track.lineno=121;
				a = $constant_int_0;
				$pyjs.track.lineno=122;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (typeof ($31=d).__array != 'undefined'?
					((typeof $31.__array[$32=$constant_int_1]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__($constant_int_1));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					k = $iter2_nextval;
					$pyjs.track.lineno=123;
					a = (typeof ($add3=a)==typeof ($add4=k) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=124;
				self['assertEqual'](a, $constant_int_6);
				$pyjs.track.lineno=126;
				a = $constant_int_0;
				$pyjs.track.lineno=127;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = $p['__getslice']((typeof ($33=d).__array != 'undefined'?
					((typeof $33.__array[$34=$constant_int_1]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__($constant_int_1)), $constant_int_1, null);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					k = $iter3_nextval;
					$pyjs.track.lineno=128;
					a = (typeof ($add5=a)==typeof ($add6=k) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=129;
				self['assertEqual'](a, $constant_int_5);
				$pyjs.track.lineno=131;
				a = $constant_int_0;
				$pyjs.track.lineno=132;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = (typeof ($35=d).__array != 'undefined'?
					((typeof $35.__array[$36=$constant_int_2]) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__($constant_int_2));
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					k = $iter4_nextval;
					$pyjs.track.lineno=133;
					a = (typeof ($add7=a)==typeof ($add8=(typeof ($39=(typeof ($37=d).__array != 'undefined'?
						((typeof $37.__array[$38=$constant_int_2]) != 'undefined'?$37.__array[$38]:
							$37.__getitem__($38)):
							$37.__getitem__($constant_int_2))).__array != 'undefined'?
						((typeof $39.__array[$40=k]) != 'undefined'?$39.__array[$40]:
							$39.__getitem__($40)):
							$39.__getitem__(k))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=134;
				self['assertEqual'](a, $constant_int_6);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter'] = $method;
			$pyjs.track.lineno=136;
			$method = $pyjs__bind_method2('testEnumerate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter6_type,$iter5_array,$iter5_iter,$iter5_type,$iter6_iter,$iter6_nextval,$iter5_idx,sum_i,sum_k,$iter6_idx,$add14,$add15,$iter6_array,$add10,$add11,$add12,$add13,a,d,i,k,$add16,$pyjs__trackstack_size_1,$add9;
				$pyjs.track={module:'DictTest', lineno:136};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=136;
				$pyjs.track.lineno=137;
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3])], [$constant_int_2, $p['dict']([['a', $constant_int_1], ['b', $constant_int_2], ['c', $constant_int_3]])]]);
				$pyjs.track.lineno=138;
				sum_i = $constant_int_0;
				$pyjs.track.lineno=139;
				sum_k = $constant_int_0;
				$pyjs.track.lineno=140;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = $p['enumerate'](d);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter5_nextval, 2, null);
					i = $tupleassign1[0];
					k = $tupleassign1[1];
					$pyjs.track.lineno=141;
					sum_i = (typeof ($add9=sum_i)==typeof ($add10=i) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
					$pyjs.track.lineno=142;
					sum_k = (typeof ($add11=sum_k)==typeof ($add12=k) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=143;
				self['assertEqual'](sum_i, $constant_int_1);
				$pyjs.track.lineno=144;
				self['assertEqual'](sum_k, $constant_int_3);
				$pyjs.track.lineno=145;
				a = $constant_int_0;
				$pyjs.track.lineno=146;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = $p['enumerate']($p['sorted'](d));
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter6_nextval, 2, null);
					i = $tupleassign2[0];
					k = $tupleassign2[1];
					$pyjs.track.lineno=147;
					self['assertEqual']((typeof ($add13=i)==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)), k);
					$pyjs.track.lineno=148;
					a = (typeof ($add15=a)==typeof ($add16=k) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=149;
				self['assertEqual'](a, $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testEnumerate'] = $method;
			$pyjs.track.lineno=151;
			$method = $pyjs__bind_method2('testPop', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1,e,d,$or2,item,$pyjs_try_err,$43,$42,$41,$or1,$44;
				$pyjs.track={module:'DictTest', lineno:151};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=151;
				$pyjs.track.lineno=152;
				d = $p['dict']([['a', $constant_int_1], ['b', $constant_int_2], ['c', $constant_int_3]]);
				$pyjs.track.lineno=153;
				item = d['pop']('d', $constant_int_4);
				$pyjs.track.lineno=154;
				self['assertEqual'](item, $constant_int_4);
				$pyjs.track.lineno=156;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=157;
					item = d['pop']('d');
					$pyjs.track.lineno=158;
					self['fail']("Failed to raise KeyError on d.pop('d')");
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
					$pyjs.track.module='DictTest';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=160;
						self['assertEqual']((typeof ($41=e).__array != 'undefined'?
							((typeof $41.__array[$42=$constant_int_0]) != 'undefined'?$41.__array[$42]:
								$41.__getitem__($42)):
								$41.__getitem__($constant_int_0)), 'd');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=162;
				item = d['pop']('b');
				$pyjs.track.lineno=163;
				self['assertEqual'](item, $constant_int_2);
				$pyjs.track.lineno=165;
				item = d['popitem']();
				$pyjs.track.lineno=166;
				self['assertTrue'](((($bool1=$or1=$p['op_eq'](item, $p['tuple'](['a', $constant_int_1]))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['op_eq'](item, $p['tuple'](['c', $constant_int_3]))), $p['sprintf']('popped invalid item %s', $p['str'](item)));
				$pyjs.track.lineno=168;
				item = d['popitem']();
				$pyjs.track.lineno=169;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=170;
					item = d['popitem']();
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
					$pyjs.track.module='DictTest';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=172;
						self['assertEqual']((typeof ($43=e).__array != 'undefined'?
							((typeof $43.__array[$44=$constant_int_0]) != 'undefined'?$43.__array[$44]:
								$43.__getitem__($44)):
								$43.__getitem__($constant_int_0)), 'popitem(): dictionary is empty');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPop'] = $method;
			$pyjs.track.lineno=174;
			$method = $pyjs__bind_method2('testCmp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'DictTest', lineno:174};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=174;
				$pyjs.track.lineno=175;
				self['assertEqual']($p['cmp']($p['dict']([]), $p['dict']([])), $constant_int_0);
				$pyjs.track.lineno=176;
				self['assertEqual']($p['cmp']($p['dict']([]), $p['dict']([['1', $constant_int_1]])), (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				$pyjs.track.lineno=177;
				self['assertEqual']($p['cmp']($p['dict']([['1', $constant_int_1]]), $p['dict']([['1', $constant_int_1]])), $constant_int_0);
				$pyjs.track.lineno=178;
				self['assertEqual']($p['cmp']($p['dict']([['1', $constant_int_1]]), $p['dict']([['1', $constant_int_2]])), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				$pyjs.track.lineno=179;
				self['assertEqual']($p['cmp']($p['dict']([['1', $constant_int_1]]), $p['dict']([['1', $constant_int_0]])), $constant_int_1);
				$pyjs.track.lineno=180;
				self['assertEqual']($p['cmp']($p['dict']([['1', $constant_int_1], ['2', $constant_int_2]]), $p['dict']([['1', $constant_int_0]])), $constant_int_1);
				$pyjs.track.lineno=181;
				self['assertEqual']($p['cmp']($p['dict']([['1', $constant_int_1], ['2', $constant_int_2]]), $p['dict']([['1', $constant_int_2]])), $constant_int_1);
				$pyjs.track.lineno=182;
				self['assertEqual']($p['cmp']($p['dict']([['1', $constant_int_1], ['2', $constant_int_2]]), $p['dict']([['2', $constant_int_2], ['1', $constant_int_1]])), $constant_int_0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCmp'] = $method;
			$pyjs.track.lineno=184;
			$method = $pyjs__bind_method2('testEq', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,DICT;
				$pyjs.track={module:'DictTest', lineno:184};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=184;
				$pyjs.track.lineno=185;
				self['failUnlessEqual']($p['dict']([]), $p['dict']([]));
				$pyjs.track.lineno=186;
				self['failUnlessEqual']($p['dict']([['1', $constant_int_1]]), $p['dict']([['1', $constant_int_1]]));
				$pyjs.track.lineno=187;
				self['failIfEqual']($p['dict']([]), $p['dict']([['1', $constant_int_1]]));
				$pyjs.track.lineno=188;
				self['failIfEqual']($p['dict']([['1', $constant_int_1]]), $p['dict']([['1', $constant_int_2]]));
				$pyjs.track.lineno=190;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=191;
					self['failIfEqual']($p['dict']([['1', $constant_int_1]]), $p['list']([$constant_int_1, $constant_int_2]), 'Test for Bug 362');
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
					$pyjs.track.module='DictTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs.track.lineno=193;
						self['fail']('Bug 362 - comparison between dict and non-dict');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=195;
				DICT = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'DictTest';
					$cls_definition.__md5__ = '1efa0f6f03e81a6f1fede8ffc2f65b01';
					$pyjs.track.lineno=195;
					$pyjs.track.lineno=195;
					var $bases = new Array($p['dict']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('DICT', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=196;
				self['failUnlessEqual'](DICT(), $p['dict']([]));
				$pyjs.track.lineno=197;
				self['failUnlessEqual']($p['dict']([]), DICT());
				$pyjs.track.lineno=198;
				self['failUnlessEqual']($pyjs_kwargs_call(null, DICT, null, null, [{a:$constant_int_1}]), $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1}]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testEq'] = $method;
			$pyjs.track.lineno=200;
			$method = $pyjs__bind_method2('testFromkeys', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d2,d1;
				$pyjs.track={module:'DictTest', lineno:200};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=200;
				$pyjs.track.lineno=201;
				d1 = $p['dict']([['a', $constant_int_1], ['b', $constant_int_1]]);
				$pyjs.track.lineno=202;
				d2 = $p['dict']([['a', null], ['b', null]]);
				$pyjs.track.lineno=203;
				self['assertEqual']($p['dict']['fromkeys'](d1), d2);
				$pyjs.track.lineno=204;
				self['assertEqual']($p['dict']['fromkeys'](d1, null), d2);
				$pyjs.track.lineno=205;
				self['assertEqual']($p['dict']['fromkeys'](d1, $constant_int_1), d1);
				$pyjs.track.lineno=206;
				self['assertEqual'](d1['fromkeys'](d1), d2);
				$pyjs.track.lineno=207;
				self['assertEqual'](d1['fromkeys'](d1, null), d2);
				$pyjs.track.lineno=208;
				self['assertEqual'](d1['fromkeys'](d1, $constant_int_1), d1);
				$pyjs.track.lineno=209;
				self['assertEqual']($p['dict']['fromkeys']('ab'), d2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFromkeys'] = $method;
			$pyjs.track.lineno=211;
			$method = $pyjs__bind_method2('testIteritems', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add25,$iter9_idx,$iter8_iter,d2,d3,d1,$add28,$iter9_iter,$add21,$add20,$add22,$iter9_nextval,$add24,$add27,$add26,$iter7_type,$iter9_type,$iter8_idx,$iter7_iter,$iter8_type,$add17,$iter8_nextval,$iter7_idx,$add18,$add19,a,b,$iter7_nextval,$iter7_array,$iter8_array,$iter9_array,DICT,$pyjs__trackstack_size_1,y,x,$add23;
				$pyjs.track={module:'DictTest', lineno:211};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=211;
				$pyjs.track.lineno=212;
				d1 = $p['dict']([[$constant_int_1, $constant_int_2], [$constant_int_3, $constant_int_4]]);
				$pyjs.track.lineno=213;
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$constant_int_0, $constant_int_0]), 2, null);
				a = $tupleassign3[0];
				b = $tupleassign3[1];
				$pyjs.track.lineno=214;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = d1['iteritems']();
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter7_nextval, 2, null);
					x = $tupleassign4[0];
					y = $tupleassign4[1];
					$pyjs.track.lineno=215;
					a = (typeof ($add17=a)==typeof ($add18=x) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
					$pyjs.track.lineno=216;
					b = (typeof ($add19=b)==typeof ($add20=y) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=217;
				self['assertEqual']($p['tuple']([a, b]), $p['tuple']([$constant_int_4, $constant_int_6]));
				$pyjs.track.lineno=219;
				DICT = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'DictTest';
					$cls_definition.__md5__ = 'ca22eb4b8c22ef29ce93324e2be05098';
					$pyjs.track.lineno=219;
					$pyjs.track.lineno=219;
					var $bases = new Array($p['dict']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('DICT', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=222;
				d2 = DICT($p['dict']([[$constant_int_1, $constant_int_2], [$constant_int_3, $constant_int_4]]));
				$pyjs.track.lineno=223;
				var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$constant_int_0, $constant_int_0]), 2, null);
				a = $tupleassign5[0];
				b = $tupleassign5[1];
				$pyjs.track.lineno=224;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter8_iter = d2['iteritems']();
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					var $tupleassign6 = $p['__ass_unpack']($iter8_nextval, 2, null);
					x = $tupleassign6[0];
					y = $tupleassign6[1];
					$pyjs.track.lineno=225;
					a = (typeof ($add21=a)==typeof ($add22=x) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22));
					$pyjs.track.lineno=226;
					b = (typeof ($add23=b)==typeof ($add24=y) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=227;
				self['assertEqual']($p['tuple']([a, b]), $p['tuple']([$constant_int_4, $constant_int_6]));
				$pyjs.track.lineno=229;
				d3 = $p['dict']();
				$pyjs.track.lineno=230;
				var $tupleassign7 = $p['__ass_unpack']($p['tuple']([$constant_int_0, $constant_int_0]), 2, null);
				a = $tupleassign7[0];
				b = $tupleassign7[1];
				$pyjs.track.lineno=231;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter9_iter = d3['iteritems']();
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					var $tupleassign8 = $p['__ass_unpack']($iter9_nextval, 2, null);
					x = $tupleassign8[0];
					y = $tupleassign8[1];
					$pyjs.track.lineno=232;
					a = (typeof ($add25=a)==typeof ($add26=x) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
					$pyjs.track.lineno=233;
					b = (typeof ($add27=b)==typeof ($add28=y) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=234;
				self['assertEqual']($p['tuple']([a, b]), $p['tuple']([$constant_int_0, $constant_int_0]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIteritems'] = $method;
			$pyjs.track.lineno=236;
			$method = $pyjs__bind_method2('testUpdate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,$48,$47,$46,$45,d1;
				$pyjs.track={module:'DictTest', lineno:236};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=236;
				$pyjs.track.lineno=237;
				d1 = $p['dict']([[$constant_int_1, $constant_int_2], [$constant_int_3, $constant_int_4]]);
				$pyjs.track.lineno=238;
				d1['update']($p['dict']([[$constant_int_3, $constant_int_5], [$constant_int_7, $constant_int_9]]));
				$pyjs.track.lineno=239;
				self['assertEqual']((typeof ($45=d1).__array != 'undefined'?
					((typeof $45.__array[$46=$constant_int_3]) != 'undefined'?$45.__array[$46]:
						$45.__getitem__($46)):
						$45.__getitem__($constant_int_3)), $constant_int_5);
				$pyjs.track.lineno=240;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=241;
					d1['update']($p['tuple']([$p['tuple']([$constant_int_3, $constant_int_6]), $p['tuple']([$constant_int_9, $constant_int_12])]));
					$pyjs.track.lineno=242;
					self['assertEqual']((typeof ($47=d1).__array != 'undefined'?
						((typeof $47.__array[$48=$constant_int_3]) != 'undefined'?$47.__array[$48]:
							$47.__getitem__($48)):
							$47.__getitem__($constant_int_3)), $constant_int_6);
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
					$pyjs.track.module='DictTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs.track.lineno=244;
						self['fail']("Couldn't dict.update(...) with a tuple of pairs.");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testUpdate'] = $method;
			$pyjs.track.lineno=246;
			$method = $pyjs__bind_method2('testOverrideDict', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '08789e1763da6e74c35ce771743f31c9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x,dict;
				$pyjs.track={module:'DictTest', lineno:246};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='DictTest';
				$pyjs.track.lineno=246;
				$pyjs.track.lineno=247;
				dict = $constant_int_1;
				$pyjs.track.lineno=248;
				self['assertEqual'](dict, $constant_int_1);
				$pyjs.track.lineno=249;
				x = dict;
				$pyjs.track.lineno=250;
				self['assertEqual'](x, $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOverrideDict'] = $method;
			$pyjs.track.lineno=6;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DictTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end DictTest */


/* end module: DictTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/
