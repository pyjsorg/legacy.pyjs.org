/* start module: BuiltinTest */
$pyjs.loaded_modules['BuiltinTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['BuiltinTest'].__was_initialized__) return $pyjs.loaded_modules['BuiltinTest'];
	var $m = $pyjs.loaded_modules["BuiltinTest"];
	$m.__repr__ = function() { return "<module: BuiltinTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'BuiltinTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'BuiltinTest.py, line 1:\n    from UnitTest import UnitTest, PY27_BEHAVIOUR';
		$m.__track_lines__[3] = 'BuiltinTest.py, line 3:\n    try:';
		$m.__track_lines__[4] = 'BuiltinTest.py, line 4:\n    builtin_value = builtin.value';
		$m.__track_lines__[6] = 'BuiltinTest.py, line 6:\n    builtin_value = None';
		$m.__track_lines__[7] = 'BuiltinTest.py, line 7:\n    if False:';
		$m.__track_lines__[8] = 'BuiltinTest.py, line 8:\n    import builtin';
		$m.__track_lines__[9] = 'BuiltinTest.py, line 9:\n    import builtin';
		$m.__track_lines__[11] = 'BuiltinTest.py, line 11:\n    from imports.cls import CLS';
		$m.__track_lines__[12] = 'BuiltinTest.py, line 12:\n    from imports.cls1 import CLS as CLS1';
		$m.__track_lines__[15] = 'BuiltinTest.py, line 15:\n    def other(**kwargs):';
		$m.__track_lines__[16] = 'BuiltinTest.py, line 16:\n    return kwargs';
		$m.__track_lines__[18] = 'BuiltinTest.py, line 18:\n    def foo(_some, _long, _list, _of, _arguments):';
		$m.__track_lines__[19] = 'BuiltinTest.py, line 19:\n    _additional = 5';
		$m.__track_lines__[20] = 'BuiltinTest.py, line 20:\n    return other(**locals())';
		$m.__track_lines__[22] = 'BuiltinTest.py, line 22:\n    class ColourThing(object):';
		$m.__track_lines__[23] = 'BuiltinTest.py, line 23:\n    def rgb():';
		$m.__track_lines__[24] = 'BuiltinTest.py, line 24:\n    def fset(self, rgb):';
		$m.__track_lines__[25] = 'BuiltinTest.py, line 25:\n    self.r, self.g, self.b = rgb';
		$m.__track_lines__[26] = 'BuiltinTest.py, line 26:\n    def fget(self):';
		$m.__track_lines__[27] = 'BuiltinTest.py, line 27:\n    return (self.r, self.g, self.b)';
		$m.__track_lines__[28] = 'BuiltinTest.py, line 28:\n    return property(**locals())';
		$m.__track_lines__[30] = 'BuiltinTest.py, line 30:\n    class C(object):';
		$m.__track_lines__[32] = 'BuiltinTest.py, line 31:\n    @property ... def x(self):';
		$m.__track_lines__[33] = 'BuiltinTest.py, line 33:\n    return [1,2,3]';
		$m.__track_lines__[35] = 'BuiltinTest.py, line 35:\n    class Foo:';
		$m.__track_lines__[36] = 'BuiltinTest.py, line 36:\n    pass';
		$m.__track_lines__[38] = 'BuiltinTest.py, line 38:\n    class LocalsTest:';
		$m.__track_lines__[39] = 'BuiltinTest.py, line 39:\n    def __init__(self):';
		$m.__track_lines__[40] = 'BuiltinTest.py, line 40:\n    pass';
		$m.__track_lines__[42] = 'BuiltinTest.py, line 42:\n    def testargs(self, test1, test2):';
		$m.__track_lines__[43] = 'BuiltinTest.py, line 43:\n    return locals()';
		$m.__track_lines__[45] = 'BuiltinTest.py, line 45:\n    def testkwargs(self, test1=None, test2=None):';
		$m.__track_lines__[46] = 'BuiltinTest.py, line 46:\n    return locals()';
		$m.__track_lines__[48] = 'BuiltinTest.py, line 48:\n    class BuiltinTest(UnitTest):';
		$m.__track_lines__[50] = 'BuiltinTest.py, line 50:\n    def testMinMax(self):';
		$m.__track_lines__[51] = 'BuiltinTest.py, line 51:\n    self.assertEqual(max(1,2,3,4), 4)';
		$m.__track_lines__[52] = 'BuiltinTest.py, line 52:\n    self.assertEqual(min(1,2,3,4), 1)';
		$m.__track_lines__[53] = 'BuiltinTest.py, line 53:\n    self.assertEqual(max([1,2,3,4]), 4)';
		$m.__track_lines__[54] = 'BuiltinTest.py, line 54:\n    self.assertEqual(min([1,2,3,4]), 1)';
		$m.__track_lines__[55] = 'BuiltinTest.py, line 55:\n    self.assertTrue(max([5,3,4],[6,1,2]) == [6,1,2] , "max([5,3,4],[6,1,2])")';
		$m.__track_lines__[56] = 'BuiltinTest.py, line 56:\n    self.assertTrue(min([5,3,4],[6,1,2]) == [5,3,4] , "min([5,3,4],[6,1,2])")';
		$m.__track_lines__[58] = 'BuiltinTest.py, line 58:\n    def testIterProperty(self):';
		$m.__track_lines__[59] = 'BuiltinTest.py, line 59:\n    o = C()';
		$m.__track_lines__[60] = 'BuiltinTest.py, line 60:\n    tst = []';
		$m.__track_lines__[61] = 'BuiltinTest.py, line 61:\n    for y in iter(o.x):';
		$m.__track_lines__[62] = 'BuiltinTest.py, line 62:\n    tst.append(y)';
		$m.__track_lines__[63] = 'BuiltinTest.py, line 63:\n    self.assertTrue(tst, [1,2,3])';
		$m.__track_lines__[64] = 'BuiltinTest.py, line 64:\n    tst = []';
		$m.__track_lines__[65] = 'BuiltinTest.py, line 65:\n    try:';
		$m.__track_lines__[66] = 'BuiltinTest.py, line 66:\n    for y in o.x:';
		$m.__track_lines__[67] = 'BuiltinTest.py, line 67:\n    tst.append(y)';
		$m.__track_lines__[68] = 'BuiltinTest.py, line 68:\n    self.assertTrue(tst, [1,2,3])';
		$m.__track_lines__[70] = 'BuiltinTest.py, line 70:\n    self.fail("#490 - no function iter.__iter__ not a function")';
		$m.__track_lines__[73] = 'BuiltinTest.py, line 73:\n    def testInt(self):';
		$m.__track_lines__[74] = 'BuiltinTest.py, line 74:\n    self.assertEqual(int("5"), 5)';
		$m.__track_lines__[75] = 'BuiltinTest.py, line 75:\n    self.assertEqual(int("09"), 9)';
		$m.__track_lines__[76] = 'BuiltinTest.py, line 76:\n    self.assertEqual(6, 6)';
		$m.__track_lines__[77] = 'BuiltinTest.py, line 77:\n    self.assertEqual(int("0"), 0)';
		$m.__track_lines__[78] = 'BuiltinTest.py, line 78:\n    self.assertEqual(int(0), 0)';
		$m.__track_lines__[79] = 'BuiltinTest.py, line 79:\n    self.assertEqual(int("-1"), -1)';
		$m.__track_lines__[80] = 'BuiltinTest.py, line 80:\n    self.assertEqual(int("- 2"), -2)';
		$m.__track_lines__[81] = 'BuiltinTest.py, line 81:\n    self.assertEqual(int(" - 3"), -3)';
		$m.__track_lines__[83] = 'BuiltinTest.py, line 83:\n    try:';
		$m.__track_lines__[84] = "BuiltinTest.py, line 84:\n    int('')";
		$m.__track_lines__[85] = 'BuiltinTest.py, line 85:\n    self.fail("No int() argument error raised: int(\'\')")';
		$m.__track_lines__[87] = 'BuiltinTest.py, line 87:\n    self.assertEqual(e[0], "invalid literal for int() with base 10: \'\'")';
		$m.__track_lines__[89] = 'BuiltinTest.py, line 89:\n    try:';
		$m.__track_lines__[90] = "BuiltinTest.py, line 90:\n    int(' ')";
		$m.__track_lines__[91] = 'BuiltinTest.py, line 91:\n    self.fail("No int() argument error raised: int(\' \')")';
		$m.__track_lines__[93] = 'BuiltinTest.py, line 93:\n    self.assertEqual(e[0], "invalid literal for int() with base 10: \'\'")';
		$m.__track_lines__[95] = 'BuiltinTest.py, line 95:\n    try:';
		$m.__track_lines__[96] = "BuiltinTest.py, line 96:\n    int('not int')";
		$m.__track_lines__[97] = 'BuiltinTest.py, line 97:\n    self.fail("No int() argument error raised: int(\'not-int\')")';
		$m.__track_lines__[99] = 'BuiltinTest.py, line 99:\n    self.assertEqual(e[0], "invalid literal for int() with base 10: \'not int\'")';
		$m.__track_lines__[101] = 'BuiltinTest.py, line 101:\n    try:';
		$m.__track_lines__[102] = 'BuiltinTest.py, line 102:\n    int(1, 10)';
		$m.__track_lines__[103] = 'BuiltinTest.py, line 103:\n    self.fail("No int() argument error raised: int(1, 10)")';
		$m.__track_lines__[105] = 'BuiltinTest.py, line 105:\n    self.assertEqual(e[0], "int() can\'t convert non-string with explicit base")';
		$m.__track_lines__[107] = 'BuiltinTest.py, line 107:\n    try:';
		$m.__track_lines__[108] = "BuiltinTest.py, line 108:\n    int('10px')";
		$m.__track_lines__[109] = 'BuiltinTest.py, line 109:\n    self.fail("No int() argument error raised: int(\'10px\')")';
		$m.__track_lines__[111] = 'BuiltinTest.py, line 111:\n    self.assertEqual(e[0], "invalid literal for int() with base 10: \'10px\'")';
		$m.__track_lines__[113] = 'BuiltinTest.py, line 113:\n    def testFloat(self):';
		$m.__track_lines__[114] = 'BuiltinTest.py, line 114:\n    self.assertEqual(float("5.1"), 5.1)';
		$m.__track_lines__[115] = 'BuiltinTest.py, line 115:\n    self.assertEqual(float("09"), 9)';
		$m.__track_lines__[116] = 'BuiltinTest.py, line 116:\n    self.assertEqual(6.1, 6.1)';
		$m.__track_lines__[117] = 'BuiltinTest.py, line 117:\n    self.assertEqual(float("0"), 0)';
		$m.__track_lines__[118] = 'BuiltinTest.py, line 118:\n    self.assertEqual(float(0), 0)';
		$m.__track_lines__[120] = 'BuiltinTest.py, line 120:\n    try:';
		$m.__track_lines__[121] = "BuiltinTest.py, line 121:\n    float('not float')";
		$m.__track_lines__[122] = 'BuiltinTest.py, line 122:\n    self.fail("No float(\'not float\') argument error raised")';
		$m.__track_lines__[124] = 'BuiltinTest.py, line 124:\n    self.assertIn(e[0], [';
		$m.__track_lines__[129] = 'BuiltinTest.py, line 129:\n    try:';
		$m.__track_lines__[130] = "BuiltinTest.py, line 130:\n    float('')";
		$m.__track_lines__[131] = 'BuiltinTest.py, line 131:\n    self.fail("No float(\'\') argument error raised")';
		$m.__track_lines__[133] = 'BuiltinTest.py, line 133:\n    self.assertIn(e[0], [';
		$m.__track_lines__[138] = 'BuiltinTest.py, line 138:\n    try:';
		$m.__track_lines__[139] = "BuiltinTest.py, line 139:\n    float(' ')";
		$m.__track_lines__[140] = 'BuiltinTest.py, line 140:\n    self.fail("No float(\' \') argument error raised")';
		$m.__track_lines__[142] = 'BuiltinTest.py, line 142:\n    self.assertIn(e[0], [';
		$m.__track_lines__[147] = 'BuiltinTest.py, line 147:\n    self.assertTrue(isinstance(1.0, float), "1.0 should be instance of float")';
		$m.__track_lines__[149] = 'BuiltinTest.py, line 149:\n    def testOrdChr(self):';
		$m.__track_lines__[150] = 'BuiltinTest.py, line 150:\n    for i in range(256):';
		$m.__track_lines__[151] = 'BuiltinTest.py, line 151:\n    self.assertEqual(ord(chr(i)), i)';
		$m.__track_lines__[153] = 'BuiltinTest.py, line 153:\n    def testMod(self):';
		$m.__track_lines__[154] = 'BuiltinTest.py, line 154:\n    self.assertEqual(12 % 5, 2)';
		$m.__track_lines__[155] = 'BuiltinTest.py, line 155:\n    self.assertEqual(-0.4 % 1, 0.6, "Modulo error 1 for negative base, bug #473")';
		$m.__track_lines__[156] = 'BuiltinTest.py, line 156:\n    self.assertEqual(-0.3 % 1.0, 0.7)';
		$m.__track_lines__[157] = 'BuiltinTest.py, line 157:\n    self.assertEqual(-1 % 2, 1)';
		$m.__track_lines__[158] = 'BuiltinTest.py, line 158:\n    self.assertEqual(-1 % -2, -1)';
		$m.__track_lines__[159] = 'BuiltinTest.py, line 159:\n    self.assertEqual(-1 % 3L, 2L)';
		$m.__track_lines__[160] = 'BuiltinTest.py, line 160:\n    self.assertEqual(-2 % -3L, -2L)';
		$m.__track_lines__[161] = 'BuiltinTest.py, line 161:\n    self.assertEqual(-1L % 4, 3L)';
		$m.__track_lines__[162] = 'BuiltinTest.py, line 162:\n    self.assertEqual(-3L % -4, -3L)';
		$m.__track_lines__[163] = 'BuiltinTest.py, line 163:\n    self.assertEqual(-1L % 5L, 4L)';
		$m.__track_lines__[164] = 'BuiltinTest.py, line 164:\n    self.assertEqual(-4L % -5L, -4L)';
		$m.__track_lines__[165] = 'BuiltinTest.py, line 165:\n    self.assertEqual(-1.0 % 6, 5.0)';
		$m.__track_lines__[166] = 'BuiltinTest.py, line 166:\n    self.assertEqual(-5.0 % -6, -5.0)';
		$m.__track_lines__[168] = 'BuiltinTest.py, line 168:\n    def testPower(self):';
		$m.__track_lines__[169] = 'BuiltinTest.py, line 169:\n    self.assertEqual(3 ** 4, 81)';
		$m.__track_lines__[171] = 'BuiltinTest.py, line 171:\n    def testPowerfunc(self):';
		$m.__track_lines__[172] = 'BuiltinTest.py, line 172:\n    self.assertEqual(pow(10, 3), 1000)';
		$m.__track_lines__[173] = 'BuiltinTest.py, line 173:\n    self.assertEqual(pow(10, 3, 7), 6)';
		$m.__track_lines__[175] = 'BuiltinTest.py, line 175:\n    def testHex(self):';
		$m.__track_lines__[176] = "BuiltinTest.py, line 176:\n    self.assertEqual(hex(23), '0x17')";
		$m.__track_lines__[177] = 'BuiltinTest.py, line 177:\n    try:';
		$m.__track_lines__[178] = 'BuiltinTest.py, line 178:\n    h = hex(23.2)';
		$m.__track_lines__[179] = 'BuiltinTest.py, line 179:\n    self.fail("No hex() argument error raised")';
		$m.__track_lines__[181] = 'BuiltinTest.py, line 181:\n    self.assertEqual(why.args[0], "hex() argument can\'t be converted to hex")';
		$m.__track_lines__[183] = 'BuiltinTest.py, line 183:\n    def testOct(self):';
		$m.__track_lines__[184] = "BuiltinTest.py, line 184:\n    self.assertEqual(oct(23), '027')";
		$m.__track_lines__[185] = 'BuiltinTest.py, line 185:\n    try:';
		$m.__track_lines__[186] = 'BuiltinTest.py, line 186:\n    o = oct(23.2)';
		$m.__track_lines__[187] = 'BuiltinTest.py, line 187:\n    self.fail("No oct() argument error raised")';
		$m.__track_lines__[189] = 'BuiltinTest.py, line 189:\n    self.assertEqual(str(why), "oct() argument can\'t be converted to oct")';
		$m.__track_lines__[191] = 'BuiltinTest.py, line 191:\n    def testRound(self):';
		$m.__track_lines__[192] = 'BuiltinTest.py, line 192:\n    self.assertEqual(round(13.12345), 13.0)';
		$m.__track_lines__[193] = 'BuiltinTest.py, line 193:\n    self.assertEqual(round(13.12345, 3), 13.123)';
		$m.__track_lines__[194] = 'BuiltinTest.py, line 194:\n    self.assertEqual(round(-13.12345), -13.0)';
		$m.__track_lines__[195] = 'BuiltinTest.py, line 195:\n    self.assertEqual(round(-13.12345, 3), -13.123)';
		$m.__track_lines__[196] = 'BuiltinTest.py, line 196:\n    self.assertEqual(round(13.62345), 14.0)';
		$m.__track_lines__[197] = 'BuiltinTest.py, line 197:\n    self.assertEqual(round(13.62345, 3), 13.623)';
		$m.__track_lines__[198] = 'BuiltinTest.py, line 198:\n    self.assertEqual(round(-13.62345), -14.0)';
		$m.__track_lines__[199] = 'BuiltinTest.py, line 199:\n    self.assertEqual(round(-13.62345, 3), -13.623)';
		$m.__track_lines__[201] = 'BuiltinTest.py, line 201:\n    def testDivmod(self):';
		$m.__track_lines__[202] = 'BuiltinTest.py, line 202:\n    test_set = [(14, 3, 4, 2),';
		$m.__track_lines__[206] = 'BuiltinTest.py, line 206:\n    for x, y, p, q in test_set:';
		$m.__track_lines__[207] = 'BuiltinTest.py, line 207:\n    d = divmod(x,y)';
		$m.__track_lines__[208] = 'BuiltinTest.py, line 208:\n    self.assertEqual(d[0], p)';
		$m.__track_lines__[209] = 'BuiltinTest.py, line 209:\n    self.assertEqual(abs(d[1] - q) < 0.00001, True)';
		$m.__track_lines__[211] = 'BuiltinTest.py, line 211:\n    def testFloorDiv(self):';
		$m.__track_lines__[212] = 'BuiltinTest.py, line 212:\n    self.assertEqual(1, 4//3)';
		$m.__track_lines__[213] = 'BuiltinTest.py, line 213:\n    self.assertEqual(1, 5//3)';
		$m.__track_lines__[214] = 'BuiltinTest.py, line 214:\n    self.assertEqual(2, 6//3)';
		$m.__track_lines__[216] = 'BuiltinTest.py, line 216:\n    def testAll(self):';
		$m.__track_lines__[217] = "BuiltinTest.py, line 217:\n    self.assertEqual(all([True, 1, 'a']), True)";
		$m.__track_lines__[218] = "BuiltinTest.py, line 218:\n    self.assertEqual(all([True, 1, None, 'a']), False)";
		$m.__track_lines__[219] = "BuiltinTest.py, line 219:\n    self.assertEqual(all([True, 1, '', 'a']), False)";
		$m.__track_lines__[220] = "BuiltinTest.py, line 220:\n    self.assertEqual(all([True, 1, False, 'a']), False)";
		$m.__track_lines__[222] = 'BuiltinTest.py, line 222:\n    def testAny(self):';
		$m.__track_lines__[223] = "BuiltinTest.py, line 223:\n    self.assertEqual(any([True, 1, 'a']), True)";
		$m.__track_lines__[224] = "BuiltinTest.py, line 224:\n    self.assertEqual(any([True, 1, None, 'a']), True)";
		$m.__track_lines__[225] = "BuiltinTest.py, line 225:\n    self.assertEqual(any([True, 1, '', 'a']), True)";
		$m.__track_lines__[226] = "BuiltinTest.py, line 226:\n    self.assertEqual(any([True, 1, False, 'a']), True)";
		$m.__track_lines__[227] = "BuiltinTest.py, line 227:\n    self.assertEqual(any([False, '', None]), False)";
		$m.__track_lines__[229] = 'BuiltinTest.py, line 229:\n    def testRepr(self):';
		$m.__track_lines__[230] = 'BuiltinTest.py, line 230:\n    l1 = [1,2,3]';
		$m.__track_lines__[231] = 'BuiltinTest.py, line 231:\n    l2 = ["a", "b", "c"]';
		$m.__track_lines__[232] = 'BuiltinTest.py, line 232:\n    t1 = (4,5,6,7)';
		$m.__track_lines__[233] = 'BuiltinTest.py, line 233:\n    t2 = ("aa", "bb")';
		$m.__track_lines__[234] = 'BuiltinTest.py, line 234:\n    d1 = {\'a\': 1, "b": "B"}';
		$m.__track_lines__[235] = 'BuiltinTest.py, line 235:\n    d2 = {1: l1, 2: l2, 3: t1, 4: t2, 5:d1}';
		$m.__track_lines__[236] = 'BuiltinTest.py, line 236:\n    i1 = 10000';
		$m.__track_lines__[237] = 'BuiltinTest.py, line 237:\n    f1 = 1.5';
		$m.__track_lines__[238] = "BuiltinTest.py, line 238:\n    self.assertEqual(repr(l1), '[1, 2, 3]')";
		$m.__track_lines__[239] = "BuiltinTest.py, line 239:\n    self.assertEqual(l1.__repr__(), '[1, 2, 3]')";
		$m.__track_lines__[240] = 'BuiltinTest.py, line 240:\n    self.assertEqual(repr(l2), "[\'a\', \'b\', \'c\']")';
		$m.__track_lines__[241] = "BuiltinTest.py, line 241:\n    self.assertEqual(repr(t1), '(4, 5, 6, 7)')";
		$m.__track_lines__[242] = 'BuiltinTest.py, line 242:\n    self.assertEqual(repr(t2), "(\'aa\', \'bb\')")';
		$m.__track_lines__[243] = 'BuiltinTest.py, line 243:\n    self.assertEqual(repr(d1), "{\'a\': 1, \'b\': \'B\'}")';
		$m.__track_lines__[244] = 'BuiltinTest.py, line 244:\n    self.assertEqual(repr(d2), "{1: [1, 2, 3], 2: [\'a\', \'b\', \'c\'], 3: (4, 5, 6, 7), 4: (\'aa\', \'bb\'), 5: {\'a\': 1, \'b\': \'B\'}}")';
		$m.__track_lines__[245] = 'BuiltinTest.py, line 245:\n    self.assertEqual(d2.__repr__(), "{1: [1, 2, 3], 2: [\'a\', \'b\', \'c\'], 3: (4, 5, 6, 7), 4: (\'aa\', \'bb\'), 5: {\'a\': 1, \'b\': \'B\'}}")';
		$m.__track_lines__[246] = "BuiltinTest.py, line 246:\n    self.assertEqual(repr(i1), '10000')";
		$m.__track_lines__[247] = "BuiltinTest.py, line 247:\n    self.assertEqual(i1.__repr__(), '10000')";
		$m.__track_lines__[248] = "BuiltinTest.py, line 248:\n    self.assertEqual(repr(f1), '1.5')";
		$m.__track_lines__[249] = "BuiltinTest.py, line 249:\n    self.assertEqual(f1.__repr__(), '1.5', 'float.__repr__() returns type instead of value, bug #487')";
		$m.__track_lines__[250] = "BuiltinTest.py, line 250:\n    self.assertEqual(`l1`, '[1, 2, 3]')";
		$m.__track_lines__[252] = 'BuiltinTest.py, line 252:\n    def testIsInstance(self):';
		$m.__track_lines__[254] = "BuiltinTest.py, line 254:\n    s = 'hello'";
		$m.__track_lines__[255] = 'BuiltinTest.py, line 255:\n    self.assertTrue(isinstance(s, str), "s is a string")';
		$m.__track_lines__[256] = 'BuiltinTest.py, line 256:\n    self.assertFalse(isinstance(s, int), "s is a string not an integer")';
		$m.__track_lines__[258] = 'BuiltinTest.py, line 258:\n    s = 1';
		$m.__track_lines__[259] = 'BuiltinTest.py, line 259:\n    self.assertFalse(isinstance(s, str), "s is an integer not a string")';
		$m.__track_lines__[260] = 'BuiltinTest.py, line 260:\n    self.assertTrue(isinstance(s, int), "s is an integer")';
		$m.__track_lines__[262] = 'BuiltinTest.py, line 262:\n    self.assertFalse(isinstance(\'\', list), "\'\' is not instance of list")';
		$m.__track_lines__[263] = 'BuiltinTest.py, line 263:\n    self.assertTrue(isinstance([], list), "[] is an instance of list")';
		$m.__track_lines__[265] = 'BuiltinTest.py, line 265:\n    class Cls(object):';
		$m.__track_lines__[266] = 'BuiltinTest.py, line 266:\n    pass';
		$m.__track_lines__[267] = 'BuiltinTest.py, line 267:\n    self.assertTrue(isinstance(Cls, type), "Bug #578 classes are instances of type")';
		$m.__track_lines__[269] = 'BuiltinTest.py, line 269:\n    def testImport(self):';
		$m.__track_lines__[270] = 'BuiltinTest.py, line 270:\n    self.assertEqual(builtin_value, None, "The builtin is loaded before import!")';
		$m.__track_lines__[271] = 'BuiltinTest.py, line 271:\n    try:';
		$m.__track_lines__[272] = 'BuiltinTest.py, line 272:\n    self.assertEqual(builtin.value, builtin.get_value())';
		$m.__track_lines__[274] = 'BuiltinTest.py, line 274:\n    self.fail("Import failed for builtin")';
		$m.__track_lines__[276] = 'BuiltinTest.py, line 276:\n    from imports import overrideme';
		$m.__track_lines__[277] = 'BuiltinTest.py, line 277:\n    cls1 = CLS1()';
		$m.__track_lines__[278] = 'BuiltinTest.py, line 278:\n    self.assertTrue(CLS is CLS1, "CLS is CLS1")';
		$m.__track_lines__[279] = 'BuiltinTest.py, line 279:\n    self.assertTrue(isinstance(cls1, CLS), "isinstance(cls1, CLS)")';
		$m.__track_lines__[280] = 'BuiltinTest.py, line 280:\n    self.assertEqual(overrideme, "not overridden")';
		$m.__track_lines__[281] = 'BuiltinTest.py, line 281:\n    import imports.override';
		$m.__track_lines__[282] = 'BuiltinTest.py, line 282:\n    self.assertEqual(overrideme, "not overridden")';
		$m.__track_lines__[283] = 'BuiltinTest.py, line 283:\n    from imports import overrideme';
		$m.__track_lines__[284] = 'BuiltinTest.py, line 284:\n    try:';
		$m.__track_lines__[285] = 'BuiltinTest.py, line 285:\n    self.assertTrue(overrideme.overridden is True, "overrideme.overridden is True")';
		$m.__track_lines__[287] = 'BuiltinTest.py, line 287:\n    self.fail("Exception on \'overrideme.overridden is True\'")';
		$m.__track_lines__[289] = 'BuiltinTest.py, line 289:\n    import imports';
		$m.__track_lines__[290] = 'BuiltinTest.py, line 290:\n    self.assertTrue(CLS is imports.loccls.CLS, "CLS is imports.loccls.CLS")';
		$m.__track_lines__[291] = 'BuiltinTest.py, line 291:\n    self.assertTrue(CLS is imports.upcls.CLS, "CLS is imports.upcls.CLS")';
		$m.__track_lines__[293] = 'BuiltinTest.py, line 293:\n    def testImport(self):';
		$m.__track_lines__[295] = 'BuiltinTest.py, line 295:\n    self.fail("Bug #XXX - from X import .. not completely implemented, only considering modules")';
		$m.__track_lines__[296] = 'BuiltinTest.py, line 296:\n    return';
		$m.__track_lines__[298] = 'BuiltinTest.py, line 298:\n    from imports import __doc__ as imports_doc';
		$m.__track_lines__[299] = 'BuiltinTest.py, line 299:\n    self.assertEqual(imports.__doc__, imports_doc, "Module object must have __doc__ attribute")';
		$m.__track_lines__[300] = 'BuiltinTest.py, line 300:\n    from imports import __name__ as imports_name';
		$m.__track_lines__[301] = 'BuiltinTest.py, line 301:\n    self.assertEqual(imports.__name__, imports_name)';
		$m.__track_lines__[304] = 'BuiltinTest.py, line 304:\n    self.assertEqual(imports.all_masked, False, "from ... import * should respect __all__, #615")';
		$m.__track_lines__[305] = 'BuiltinTest.py, line 305:\n    self.assertEqual(imports.all_override, True, "Should override globals, #615")';
		$m.__track_lines__[306] = 'BuiltinTest.py, line 306:\n    self.assertEqual(imports.all_import1, 1)';
		$m.__track_lines__[307] = 'BuiltinTest.py, line 307:\n    self.assertEqual(imports.all_import2, 3)';
		$m.__track_lines__[308] = 'BuiltinTest.py, line 308:\n    self.assertEqual(imports.all_import3, 3)';
		$m.__track_lines__[312] = 'BuiltinTest.py, line 312:\n    import __builtin__';
		$m.__track_lines__[313] = 'BuiltinTest.py, line 313:\n    self.assertEqual(__builtin__.dict, dict, "__builtin__.dict != dict")';
		$m.__track_lines__[315] = 'BuiltinTest.py, line 315:\n    from __builtin__ import dict as dict_bltin';
		$m.__track_lines__[316] = 'BuiltinTest.py, line 316:\n    self.assertEqual(dict_bltin, dict, "__builtin__.dict != dict")';
		$m.__track_lines__[319] = 'BuiltinTest.py, line 319:\n    def testBitOperations(self):';
		$m.__track_lines__[320] = 'BuiltinTest.py, line 320:\n    self.assertEqual(1 << 2 - 1, 2, "shift error 1")';
		$m.__track_lines__[321] = 'BuiltinTest.py, line 321:\n    self.assertEqual((1 << 2) - 1, 3, "shift error 2")';
		$m.__track_lines__[322] = 'BuiltinTest.py, line 322:\n    self.assertEqual(1 & 3 + 1, 0, "and error 1")';
		$m.__track_lines__[323] = 'BuiltinTest.py, line 323:\n    self.assertEqual((1 & 3) + 1, 2, "and error 2")';
		$m.__track_lines__[324] = 'BuiltinTest.py, line 324:\n    self.assertEqual(4 >> 2, 1, "right shift error 1")';
		$m.__track_lines__[325] = 'BuiltinTest.py, line 325:\n    self.assertEqual(-4 >> 2, -1, "right shift error 2 - bug #341")';
		$m.__track_lines__[327] = 'BuiltinTest.py, line 327:\n    def testLocals(self):';
		$m.__track_lines__[328] = 'BuiltinTest.py, line 328:\n    v1 = 1';
		$m.__track_lines__[329] = 'BuiltinTest.py, line 329:\n    v2 = 2';
		$m.__track_lines__[331] = 'BuiltinTest.py, line 331:\n    local_vars = locals()';
		$m.__track_lines__[332] = 'BuiltinTest.py, line 332:\n    self.assertEqual(len(local_vars), 3)';
		$m.__track_lines__[333] = "BuiltinTest.py, line 333:\n    self.assertEqual(local_vars['v1'], 1)";
		$m.__track_lines__[335] = 'BuiltinTest.py, line 335:\n    def fn1():';
		$m.__track_lines__[336] = 'BuiltinTest.py, line 336:\n    a = 1';
		$m.__track_lines__[337] = 'BuiltinTest.py, line 337:\n    def fn2():';
		$m.__track_lines__[338] = 'BuiltinTest.py, line 338:\n    b = 1';
		$m.__track_lines__[339] = 'BuiltinTest.py, line 339:\n    c = locals()';
		$m.__track_lines__[340] = 'BuiltinTest.py, line 340:\n    return c';
		$m.__track_lines__[341] = 'BuiltinTest.py, line 341:\n    return fn2()';
		$m.__track_lines__[343] = 'BuiltinTest.py, line 343:\n    local_vars = fn1()';
		$m.__track_lines__[344] = "BuiltinTest.py, line 344:\n    self.assertEqual(local_vars, {'b': 1})";
		$m.__track_lines__[346] = 'BuiltinTest.py, line 346:\n    def fn2():';
		$m.__track_lines__[347] = 'BuiltinTest.py, line 347:\n    lx = 3';
		$m.__track_lines__[348] = 'BuiltinTest.py, line 348:\n    def g():';
		$m.__track_lines__[349] = 'BuiltinTest.py, line 349:\n    li = lx';
		$m.__track_lines__[350] = 'BuiltinTest.py, line 350:\n    return locals()';
		$m.__track_lines__[351] = 'BuiltinTest.py, line 351:\n    return g()';
		$m.__track_lines__[352] = 'BuiltinTest.py, line 352:\n    self.assertEqual(fn2(), {\'li\':3, \'lx\':3}, "locals() bugs: #589")';
		$m.__track_lines__[354] = 'BuiltinTest.py, line 354:\n    def fn3():';
		$m.__track_lines__[355] = 'BuiltinTest.py, line 355:\n    lx = 3';
		$m.__track_lines__[356] = 'BuiltinTest.py, line 356:\n    def g():';
		$m.__track_lines__[357] = 'BuiltinTest.py, line 357:\n    def lh():';
		$m.__track_lines__[358] = 'BuiltinTest.py, line 358:\n    li = lx';
		$m.__track_lines__[359] = 'BuiltinTest.py, line 359:\n    return locals()';
		$m.__track_lines__[360] = 'BuiltinTest.py, line 360:\n    return locals(), lh()';
		$m.__track_lines__[361] = 'BuiltinTest.py, line 361:\n    return g()';
		$m.__track_lines__[362] = 'BuiltinTest.py, line 362:\n    outer_locals, inner_locals = fn3()';
		$m.__track_lines__[363] = 'BuiltinTest.py, line 363:\n    self.assertEqual(inner_locals, {\'li\':3, \'lx\':3}, "locals() bugs: #589")';
		$m.__track_lines__[364] = 'BuiltinTest.py, line 364:\n    keys = outer_locals.keys()';
		$m.__track_lines__[365] = 'BuiltinTest.py, line 365:\n    keys.sort()';
		$m.__track_lines__[366] = 'BuiltinTest.py, line 366:\n    self.assertEqual(keys, [\'lh\', \'lx\'], "locals() bugs: #589")';
		$m.__track_lines__[368] = 'BuiltinTest.py, line 368:\n    def fn4(x):';
		$m.__track_lines__[369] = 'BuiltinTest.py, line 369:\n    class X:';
		$m.__track_lines__[370] = 'BuiltinTest.py, line 370:\n    x = 12';
		$m.__track_lines__[371] = 'BuiltinTest.py, line 371:\n    def fn4(self):';
		$m.__track_lines__[372] = 'BuiltinTest.py, line 372:\n    return x';
		$m.__track_lines__[373] = 'BuiltinTest.py, line 373:\n    locals()';
		$m.__track_lines__[374] = 'BuiltinTest.py, line 374:\n    return X';
		$m.__track_lines__[375] = 'BuiltinTest.py, line 375:\n    self.assertEqual(fn4(1).x, 12)';
		$m.__track_lines__[377] = "BuiltinTest.py, line 377:\n    args = {'test1': 5, 'test2': 'hello'}";
		$m.__track_lines__[378] = 'BuiltinTest.py, line 378:\n    la = LocalsTest()';
		$m.__track_lines__[379] = 'BuiltinTest.py, line 379:\n    argsreturn = la.testkwargs(**args)';
		$m.__track_lines__[380] = "BuiltinTest.py, line 380:\n    args['self'] = la";
		$m.__track_lines__[381] = 'BuiltinTest.py, line 381:\n    self.assertEqual(args, argsreturn)';
		$m.__track_lines__[383] = "BuiltinTest.py, line 383:\n    del args['self']";
		$m.__track_lines__[384] = 'BuiltinTest.py, line 384:\n    argsreturn = la.testargs(**args)';
		$m.__track_lines__[385] = "BuiltinTest.py, line 385:\n    args['self'] = la";
		$m.__track_lines__[386] = 'BuiltinTest.py, line 386:\n    self.assertEqual(args, argsreturn)';
		$m.__track_lines__[388] = 'BuiltinTest.py, line 388:\n    t = ColourThing()';
		$m.__track_lines__[389] = 'BuiltinTest.py, line 389:\n    t.rgb = 1';
		$m.__track_lines__[390] = 'BuiltinTest.py, line 390:\n    self.assertEqual(t.rgb, 1)';
		$m.__track_lines__[392] = 'BuiltinTest.py, line 392:\n    args = foo(0, 1, 2, 3, 4)';
		$m.__track_lines__[393] = "BuiltinTest.py, line 393:\n    self.assertEqual(args, {'_some': 0, '_additional': 5,";
		$m.__track_lines__[397] = 'BuiltinTest.py, line 397:\n    def testIfExp(self):';
		$m.__track_lines__[398] = 'BuiltinTest.py, line 398:\n    var = 1 if True else 0';
		$m.__track_lines__[399] = 'BuiltinTest.py, line 399:\n    self.assertEqual(var, 1)';
		$m.__track_lines__[400] = 'BuiltinTest.py, line 400:\n    var = 1 if False else 0';
		$m.__track_lines__[401] = 'BuiltinTest.py, line 401:\n    self.assertEqual(var, 0)';
		$m.__track_lines__[402] = 'BuiltinTest.py, line 402:\n    var = 1 if [] else 0';
		$m.__track_lines__[403] = 'BuiltinTest.py, line 403:\n    self.assertEqual(var, 0)';
		$m.__track_lines__[404] = 'BuiltinTest.py, line 404:\n    var = 1 if not [] else 0';
		$m.__track_lines__[405] = 'BuiltinTest.py, line 405:\n    self.assertEqual(var, 1)';
		$m.__track_lines__[407] = 'BuiltinTest.py, line 407:\n    def testRange(self):';
		$m.__track_lines__[408] = 'BuiltinTest.py, line 408:\n    r = range(3)';
		$m.__track_lines__[409] = 'BuiltinTest.py, line 409:\n    self.assertEqual(r, [0, 1, 2])';
		$m.__track_lines__[410] = 'BuiltinTest.py, line 410:\n    r = range(2, 5)';
		$m.__track_lines__[411] = 'BuiltinTest.py, line 411:\n    self.assertEqual(r, [2, 3, 4])';
		$m.__track_lines__[412] = 'BuiltinTest.py, line 412:\n    r = range(2, 15, 3)';
		$m.__track_lines__[413] = 'BuiltinTest.py, line 413:\n    self.assertEqual(r, [2, 5, 8, 11, 14])';
		$m.__track_lines__[414] = 'BuiltinTest.py, line 414:\n    r = range(15, 2, -3)';
		$m.__track_lines__[415] = 'BuiltinTest.py, line 415:\n    self.assertEqual(r, [15, 12, 9, 6, 3])';
		$m.__track_lines__[416] = 'BuiltinTest.py, line 416:\n    r = range(15, 2, 3)';
		$m.__track_lines__[417] = 'BuiltinTest.py, line 417:\n    self.assertEqual(r, [])';
		$m.__track_lines__[418] = 'BuiltinTest.py, line 418:\n    r = range(-6, -2, -1)';
		$m.__track_lines__[419] = 'BuiltinTest.py, line 419:\n    self.assertEqual(r, [])';
		$m.__track_lines__[420] = 'BuiltinTest.py, line 420:\n    r = range(2, 1, 2)';
		$m.__track_lines__[421] = 'BuiltinTest.py, line 421:\n    self.assertEqual(r, [])';
		$m.__track_lines__[422] = 'BuiltinTest.py, line 422:\n    r = range(0, 2, 2)';
		$m.__track_lines__[423] = 'BuiltinTest.py, line 423:\n    self.assertEqual(r, [0])';
		$m.__track_lines__[425] = 'BuiltinTest.py, line 425:\n    def testXRange(self):';
		$m.__track_lines__[426] = 'BuiltinTest.py, line 426:\n    r = [i for i in xrange(3)]';
		$m.__track_lines__[427] = 'BuiltinTest.py, line 427:\n    self.assertEqual(r, [0, 1, 2])';
		$m.__track_lines__[428] = 'BuiltinTest.py, line 428:\n    r = [i for i in xrange(2, 5)]';
		$m.__track_lines__[429] = 'BuiltinTest.py, line 429:\n    self.assertEqual(r, [2, 3, 4])';
		$m.__track_lines__[430] = 'BuiltinTest.py, line 430:\n    r = [i for i in xrange(2, 15, 3)]';
		$m.__track_lines__[431] = 'BuiltinTest.py, line 431:\n    self.assertEqual(r, [2, 5, 8, 11, 14])';
		$m.__track_lines__[432] = 'BuiltinTest.py, line 432:\n    r = [i for i in xrange(15, 2, -3)]';
		$m.__track_lines__[433] = 'BuiltinTest.py, line 433:\n    self.assertEqual(r, [15, 12, 9, 6, 3])';
		$m.__track_lines__[434] = 'BuiltinTest.py, line 434:\n    r = [i for i in xrange(15, 2, 3)]';
		$m.__track_lines__[435] = 'BuiltinTest.py, line 435:\n    self.assertEqual(r, [])';
		$m.__track_lines__[436] = 'BuiltinTest.py, line 436:\n    r = [i for i in xrange(-6, -2, -1)]';
		$m.__track_lines__[437] = 'BuiltinTest.py, line 437:\n    self.assertEqual(r, [])';
		$m.__track_lines__[438] = 'BuiltinTest.py, line 438:\n    self.assertEqual(str(xrange(3)), "xrange(3)")';
		$m.__track_lines__[439] = 'BuiltinTest.py, line 439:\n    self.assertEqual(str(xrange(3,4)), "xrange(3, 4)")';
		$m.__track_lines__[440] = 'BuiltinTest.py, line 440:\n    self.assertEqual(str(xrange(3,4,5)), "xrange(3, 8, 5)")';
		$m.__track_lines__[441] = 'BuiltinTest.py, line 441:\n    self.assertEqual(str(xrange(14,3,-5)), "xrange(14, -1, -5)")';
		$m.__track_lines__[443] = 'BuiltinTest.py, line 443:\n    def testForLoop(self):';
		$m.__track_lines__[444] = 'BuiltinTest.py, line 444:\n    n1 = 0';
		$m.__track_lines__[445] = 'BuiltinTest.py, line 445:\n    n2 = 0';
		$m.__track_lines__[446] = 'BuiltinTest.py, line 446:\n    for i in range(10):';
		$m.__track_lines__[447] = 'BuiltinTest.py, line 447:\n    n1 += i';
		$m.__track_lines__[448] = 'BuiltinTest.py, line 448:\n    for i in xrange(4):';
		$m.__track_lines__[449] = 'BuiltinTest.py, line 449:\n    n2 += i';
		$m.__track_lines__[450] = 'BuiltinTest.py, line 450:\n    self.assertEqual(n1, 45)';
		$m.__track_lines__[451] = 'BuiltinTest.py, line 451:\n    self.assertEqual(n2, 60)';
		$m.__track_lines__[452] = 'BuiltinTest.py, line 452:\n    self.assertEqual(i, 3)';
		$m.__track_lines__[454] = 'BuiltinTest.py, line 454:\n    try:';
		$m.__track_lines__[455] = 'BuiltinTest.py, line 455:\n    for i in xrange(4):';
		$m.__track_lines__[456] = 'BuiltinTest.py, line 456:\n    raise StopIteration';
		$m.__track_lines__[457] = 'BuiltinTest.py, line 457:\n    self.fail("Failed to raise StopIteration")';
		$m.__track_lines__[459] = 'BuiltinTest.py, line 459:\n    self.assertTrue(True)';
		$m.__track_lines__[460] = 'BuiltinTest.py, line 460:\n    self.assertEqual(i, 0)';
		$m.__track_lines__[462] = 'BuiltinTest.py, line 462:\n    e = 0';
		$m.__track_lines__[463] = 'BuiltinTest.py, line 463:\n    i = -1';
		$m.__track_lines__[464] = 'BuiltinTest.py, line 464:\n    for i in range(1):';
		$m.__track_lines__[465] = 'BuiltinTest.py, line 465:\n    pass';
		$m.__track_lines__[467] = 'BuiltinTest.py, line 467:\n    e = 1';
		$m.__track_lines__[468] = 'BuiltinTest.py, line 468:\n    self.assertEqual(i, 0)';
		$m.__track_lines__[469] = 'BuiltinTest.py, line 469:\n    self.assertEqual(e, 1)';
		$m.__track_lines__[471] = 'BuiltinTest.py, line 471:\n    e = 0';
		$m.__track_lines__[472] = 'BuiltinTest.py, line 472:\n    i = -1';
		$m.__track_lines__[473] = 'BuiltinTest.py, line 473:\n    for i in range(0):';
		$m.__track_lines__[474] = 'BuiltinTest.py, line 474:\n    pass';
		$m.__track_lines__[476] = 'BuiltinTest.py, line 476:\n    e = 1';
		$m.__track_lines__[477] = 'BuiltinTest.py, line 477:\n    self.assertEqual(i, -1)';
		$m.__track_lines__[478] = 'BuiltinTest.py, line 478:\n    self.assertEqual(e, 1, "bug #316 for X in Y:... else ...")';
		$m.__track_lines__[480] = 'BuiltinTest.py, line 480:\n    e = 0';
		$m.__track_lines__[481] = 'BuiltinTest.py, line 481:\n    i = -1';
		$m.__track_lines__[482] = 'BuiltinTest.py, line 482:\n    for i in range(1):';
		$m.__track_lines__[483] = 'BuiltinTest.py, line 483:\n    e = 1';
		$m.__track_lines__[484] = 'BuiltinTest.py, line 484:\n    break';
		$m.__track_lines__[486] = 'BuiltinTest.py, line 486:\n    e = 2';
		$m.__track_lines__[487] = 'BuiltinTest.py, line 487:\n    self.assertEqual(i, 0)';
		$m.__track_lines__[488] = 'BuiltinTest.py, line 488:\n    self.assertEqual(e, 1)';
		$m.__track_lines__[490] = 'BuiltinTest.py, line 490:\n    class X(object):';
		$m.__track_lines__[491] = 'BuiltinTest.py, line 491:\n    pass';
		$m.__track_lines__[492] = 'BuiltinTest.py, line 492:\n    x = X()';
		$m.__track_lines__[493] = 'BuiltinTest.py, line 493:\n    x.a = 1';
		$m.__track_lines__[494] = 'BuiltinTest.py, line 494:\n    for x.a in [3,4,5]:';
		$m.__track_lines__[495] = 'BuiltinTest.py, line 495:\n    pass';
		$m.__track_lines__[496] = 'BuiltinTest.py, line 496:\n    self.assertEqual(x.a, 5)';
		$m.__track_lines__[498] = 'BuiltinTest.py, line 498:\n    d = {}';
		$m.__track_lines__[499] = "BuiltinTest.py, line 499:\n    for d['zz'] in [1,2,3]:";
		$m.__track_lines__[500] = 'BuiltinTest.py, line 500:\n    pass';
		$m.__track_lines__[501] = "BuiltinTest.py, line 501:\n    self.assertEqual(d, {'zz': 3})";
		$m.__track_lines__[503] = 'BuiltinTest.py, line 503:\n    l = [1]';
		$m.__track_lines__[504] = 'BuiltinTest.py, line 504:\n    for l[0] in [1,2,3]:';
		$m.__track_lines__[505] = 'BuiltinTest.py, line 505:\n    pass';
		$m.__track_lines__[506] = 'BuiltinTest.py, line 506:\n    self.assertEqual(l, [3])';
		$m.__track_lines__[508] = 'BuiltinTest.py, line 508:\n    l = [1,3,4]';
		$m.__track_lines__[509] = 'BuiltinTest.py, line 509:\n    for l[1:2] in [[5,6,7]]:';
		$m.__track_lines__[510] = 'BuiltinTest.py, line 510:\n    pass';
		$m.__track_lines__[511] = 'BuiltinTest.py, line 511:\n    self.assertEqual(l, [1, 5, 6, 7, 4])';
		$m.__track_lines__[513] = 'BuiltinTest.py, line 513:\n    x = ((1, 2), 3, (4, 5))';
		$m.__track_lines__[514] = 'BuiltinTest.py, line 514:\n    for (a, b), c, (d, e) in [x]*5:';
		$m.__track_lines__[515] = 'BuiltinTest.py, line 515:\n    pass';
		$m.__track_lines__[516] = 'BuiltinTest.py, line 516:\n    self.assertEqual([a, b, c, d, e], [1,2,3,4,5])';
		$m.__track_lines__[518] = 'BuiltinTest.py, line 518:\n    for [[a, b], c, [d, e]] in [x]*5:';
		$m.__track_lines__[519] = 'BuiltinTest.py, line 519:\n    pass';
		$m.__track_lines__[520] = 'BuiltinTest.py, line 520:\n    self.assertEqual([a, b, c, d, e], [1,2,3,4,5])';
		$m.__track_lines__[522] = 'BuiltinTest.py, line 522:\n    def testIter(self):';
		$m.__track_lines__[524] = 'BuiltinTest.py, line 524:\n    class i:';
		$m.__track_lines__[525] = 'BuiltinTest.py, line 525:\n    def __init__(self):';
		$m.__track_lines__[526] = 'BuiltinTest.py, line 526:\n    self.idx = 0';
		$m.__track_lines__[528] = 'BuiltinTest.py, line 528:\n    def __iter__(self):';
		$m.__track_lines__[529] = 'BuiltinTest.py, line 529:\n    return self';
		$m.__track_lines__[531] = 'BuiltinTest.py, line 531:\n    def next(self):';
		$m.__track_lines__[532] = 'BuiltinTest.py, line 532:\n    self.idx += 1';
		$m.__track_lines__[533] = 'BuiltinTest.py, line 533:\n    if self.idx == 5:';
		$m.__track_lines__[534] = 'BuiltinTest.py, line 534:\n    raise StopIteration';
		$m.__track_lines__[535] = 'BuiltinTest.py, line 535:\n    return self.idx';
		$m.__track_lines__[538] = 'BuiltinTest.py, line 538:\n    res = []';
		$m.__track_lines__[539] = 'BuiltinTest.py, line 539:\n    try:';
		$m.__track_lines__[540] = 'BuiltinTest.py, line 540:\n    for j in i():';
		$m.__track_lines__[541] = 'BuiltinTest.py, line 541:\n    res.append(j)';
		$m.__track_lines__[542] = 'BuiltinTest.py, line 542:\n    if len(res) > 5:';
		$m.__track_lines__[543] = 'BuiltinTest.py, line 543:\n    self.fail("too many items in user-defined iterator")';
		$m.__track_lines__[544] = 'BuiltinTest.py, line 544:\n    break';
		$m.__track_lines__[546] = 'BuiltinTest.py, line 546:\n    self.fail("error in user-defined iterator (caught here so tests can proceed)")';
		$m.__track_lines__[548] = 'BuiltinTest.py, line 548:\n    self.assertEqual(res, range(1,5))';
		$m.__track_lines__[550] = 'BuiltinTest.py, line 550:\n    def testSorted(self):';
		$m.__track_lines__[551] = 'BuiltinTest.py, line 551:\n    lst1 = range(10)';
		$m.__track_lines__[552] = 'BuiltinTest.py, line 552:\n    lst2 = range(10)';
		$m.__track_lines__[553] = 'BuiltinTest.py, line 553:\n    lst2.reverse()';
		$m.__track_lines__[554] = 'BuiltinTest.py, line 554:\n    self.assertTrue(lst1 == sorted(lst2), "lst1 == sorted(lst2)")';
		$m.__track_lines__[556] = 'BuiltinTest.py, line 556:\n    self.assertTrue(lst1 == sorted(xrange(10)), "lst1 == sorted(xrange(1))")';
		$m.__track_lines__[557] = 'BuiltinTest.py, line 557:\n    self.assertTrue(lst2 == sorted(xrange(10), reverse=True), "lst2 == sorted(xrange(10), reverse=True)")';
		$m.__track_lines__[559] = 'BuiltinTest.py, line 559:\n    def testReversed(self):';
		$m.__track_lines__[560] = 'BuiltinTest.py, line 560:\n    lst1 = range(10)';
		$m.__track_lines__[561] = 'BuiltinTest.py, line 561:\n    lst2 = range(10)';
		$m.__track_lines__[562] = 'BuiltinTest.py, line 562:\n    lst2.reverse()';
		$m.__track_lines__[563] = 'BuiltinTest.py, line 563:\n    tpl1 = tuple(lst1)';
		$m.__track_lines__[564] = 'BuiltinTest.py, line 564:\n    self.assertTrue(lst1 == list(reversed(lst2)), "lst1 == reversed(lst2)")';
		$m.__track_lines__[565] = 'BuiltinTest.py, line 565:\n    self.assertTrue(lst2 == list(reversed(xrange(10))), "lst2 == reversed(xrange(10), reverse=True)")';
		$m.__track_lines__[566] = 'BuiltinTest.py, line 566:\n    self.assertTrue(lst2 == list(reversed(tpl1)), "lst1 == reversed(tpl1)")';
		$m.__track_lines__[567] = "BuiltinTest.py, line 567:\n    dict1 = {'a': 'A', 'b': 'B'}";
		$m.__track_lines__[568] = 'BuiltinTest.py, line 568:\n    self.assertRaises(TypeError, reversed, dict1)';
		$m.__track_lines__[570] = 'BuiltinTest.py, line 570:\n    def testType(self):';
		$m.__track_lines__[571] = 'BuiltinTest.py, line 571:\n    try:';
		$m.__track_lines__[572] = 'BuiltinTest.py, line 572:\n    self.assertTrue(type(object) is type)';
		$m.__track_lines__[574] = 'BuiltinTest.py, line 574:\n    self.fail("Bug #229" + str(why))';
		$m.__track_lines__[575] = 'BuiltinTest.py, line 575:\n    self.assertTrue(type([]) is type([]))';
		$m.__track_lines__[576] = 'BuiltinTest.py, line 576:\n    self.assertTrue(type([]) is list)';
		$m.__track_lines__[577] = 'BuiltinTest.py, line 577:\n    try:';
		$m.__track_lines__[578] = 'BuiltinTest.py, line 578:\n    self.assertTrue(type([]) == list)';
		$m.__track_lines__[580] = 'BuiltinTest.py, line 580:\n    self.fail("Bug #515")';
		$m.__track_lines__[581] = 'BuiltinTest.py, line 581:\n    self.assertTrue(type("") is str, "str")';
		$m.__track_lines__[582] = 'BuiltinTest.py, line 582:\n    self.assertTrue(type(True) is bool, "bool")';
		$m.__track_lines__[583] = 'BuiltinTest.py, line 583:\n    self.assertTrue(type(1) is int, "int")';
		$m.__track_lines__[584] = 'BuiltinTest.py, line 584:\n    self.assertTrue(type(1L) is long, "long")';
		$m.__track_lines__[585] = 'BuiltinTest.py, line 585:\n    self.assertTrue(type(1.1) is float, "float 1.1")';
		$m.__track_lines__[586] = 'BuiltinTest.py, line 586:\n    self.assertTrue(type(1.0) is float, "float 1.0 issue #524")';
		$m.__track_lines__[588] = 'BuiltinTest.py, line 588:\n    def testIter(self):';
		$m.__track_lines__[589] = 'BuiltinTest.py, line 589:\n    class G(object):';
		$m.__track_lines__[590] = 'BuiltinTest.py, line 590:\n    def __getitem__(self, i):';
		$m.__track_lines__[591] = 'BuiltinTest.py, line 591:\n    if 0 <= i <= 4:';
		$m.__track_lines__[592] = 'BuiltinTest.py, line 592:\n    return i';
		$m.__track_lines__[593] = 'BuiltinTest.py, line 593:\n    raise IndexError("index out of range")';
		$m.__track_lines__[594] = 'BuiltinTest.py, line 594:\n    def fn():';
		$m.__track_lines__[595] = 'BuiltinTest.py, line 595:\n    for i in [0,1,2,3,4]:';
		$m.__track_lines__[596] = 'BuiltinTest.py, line 596:\n    yield i';
		$m.__track_lines__[598] = 'BuiltinTest.py, line 598:\n    lst = [0,1,2,3,4]';
		$m.__track_lines__[599] = 'BuiltinTest.py, line 599:\n    self.assertEqual(lst, list(iter(lst)), "iter(lst)")';
		$m.__track_lines__[600] = 'BuiltinTest.py, line 600:\n    g = G()';
		$m.__track_lines__[601] = 'BuiltinTest.py, line 601:\n    self.assertEqual(lst, list(iter(g)), "iter(g)")';
		$m.__track_lines__[602] = 'BuiltinTest.py, line 602:\n    self.assertEqual(lst, list(iter(fn().next, 5)), "iter(fn().next, 5)")';
		$m.__track_lines__[603] = 'BuiltinTest.py, line 603:\n    self.assertEqual([0,1], list(iter(fn().next, 2)), "iter(fn().next, 2)")';
		$m.__track_lines__[605] = 'BuiltinTest.py, line 605:\n    def testReduce(self):';
		$m.__track_lines__[606] = 'BuiltinTest.py, line 606:\n    v = reduce(lambda x, y: x+y, [1, 2, 3, 4, 5])';
		$m.__track_lines__[607] = 'BuiltinTest.py, line 607:\n    self.assertEqual(v, 15)';
		$m.__track_lines__[609] = 'BuiltinTest.py, line 609:\n    def testZip(self):';
		$m.__track_lines__[610] = 'BuiltinTest.py, line 610:\n    lst1 = [0,1,2,3]';
		$m.__track_lines__[611] = 'BuiltinTest.py, line 611:\n    lst2 = [10,11,12]';
		$m.__track_lines__[612] = "BuiltinTest.py, line 612:\n    dict1 = {'a': 'A', 'b': 'B'}";
		$m.__track_lines__[613] = 'BuiltinTest.py, line 613:\n    v = zip(lst1)';
		$m.__track_lines__[614] = 'BuiltinTest.py, line 614:\n    self.assertEqual(v, [(0,), (1,), (2,), (3,)])';
		$m.__track_lines__[615] = 'BuiltinTest.py, line 615:\n    v = zip(lst1, lst2)';
		$m.__track_lines__[616] = 'BuiltinTest.py, line 616:\n    self.assertEqual(v, [(0, 10), (1, 11), (2, 12)])';
		$m.__track_lines__[617] = 'BuiltinTest.py, line 617:\n    v = zip(dict1)';
		$m.__track_lines__[618] = "BuiltinTest.py, line 618:\n    self.assertEqual(v, [('a',), ('b',)])";
		$m.__track_lines__[619] = 'BuiltinTest.py, line 619:\n    v = zip(lst1, dict1, lst2)';
		$m.__track_lines__[620] = "BuiltinTest.py, line 620:\n    self.assertEqual(v, [(0, 'a', 10), (1, 'b', 11)])";
		$m.__track_lines__[622] = 'BuiltinTest.py, line 622:\n    def testSum(self):';
		$m.__track_lines__[623] = 'BuiltinTest.py, line 623:\n    self.assertEqual(6, sum([0,1,2,3]))';
		$m.__track_lines__[624] = 'BuiltinTest.py, line 624:\n    self.assertEqual(5, sum([0,1,2,3], -1))';
		$m.__track_lines__[625] = 'BuiltinTest.py, line 625:\n    self.assertRaises(TypeError, sum, [0,1,2,3], "a")';
		$m.__track_lines__[627] = 'BuiltinTest.py, line 627:\n    def testSlice(self):';
		$m.__track_lines__[629] = 'BuiltinTest.py, line 629:\n    self.assertEqual(repr(slice(1, 2, 3)), "slice(1, 2, 3)", "slice() is mis-used, issue #582")';
		$m.__track_lines__[631] = 'BuiltinTest.py, line 631:\n    s1 = slice(1, 2, 3)';
		$m.__track_lines__[632] = 'BuiltinTest.py, line 632:\n    s2 = slice(1, 2, 3)';
		$m.__track_lines__[633] = 'BuiltinTest.py, line 633:\n    s3 = slice(1, 2, 4)';
		$m.__track_lines__[634] = 'BuiltinTest.py, line 634:\n    self.assertEqual(s1, s2)';
		$m.__track_lines__[635] = 'BuiltinTest.py, line 635:\n    self.assertNotEqual(s1, s3, "slice() is mis-used, issue #582")';
		$m.__track_lines__[637] = 'BuiltinTest.py, line 637:\n    s = slice(1)';
		$m.__track_lines__[638] = 'BuiltinTest.py, line 638:\n    self.assertEqual(s.start, None)';
		$m.__track_lines__[639] = 'BuiltinTest.py, line 639:\n    self.assertEqual(s.stop, 1)';
		$m.__track_lines__[640] = 'BuiltinTest.py, line 640:\n    self.assertEqual(s.step, None)';
		$m.__track_lines__[642] = 'BuiltinTest.py, line 642:\n    s = slice(1, 2)';
		$m.__track_lines__[643] = 'BuiltinTest.py, line 643:\n    self.assertEqual(s.start, 1)';
		$m.__track_lines__[644] = 'BuiltinTest.py, line 644:\n    self.assertEqual(s.stop, 2)';
		$m.__track_lines__[645] = 'BuiltinTest.py, line 645:\n    self.assertEqual(s.step, None)';
		$m.__track_lines__[647] = 'BuiltinTest.py, line 647:\n    s = slice(1, 2, 3)';
		$m.__track_lines__[648] = 'BuiltinTest.py, line 648:\n    self.assertEqual(s.start, 1)';
		$m.__track_lines__[649] = 'BuiltinTest.py, line 649:\n    self.assertEqual(s.stop, 2)';
		$m.__track_lines__[650] = 'BuiltinTest.py, line 650:\n    self.assertEqual(s.step, 3)';
		$m.__track_lines__[652] = 'BuiltinTest.py, line 652:\n    class AnyClass:';
		$m.__track_lines__[653] = 'BuiltinTest.py, line 653:\n    pass';
		$m.__track_lines__[655] = 'BuiltinTest.py, line 655:\n    obj = AnyClass()';
		$m.__track_lines__[656] = 'BuiltinTest.py, line 656:\n    s = slice(obj)';
		$m.__track_lines__[657] = 'BuiltinTest.py, line 657:\n    self.assertTrue(s.stop is obj)';
		$m.__track_lines__[659] = 'BuiltinTest.py, line 659:\n    self.assertEqual(slice(None           ).indices(10), (0, 10,  1))';
		$m.__track_lines__[660] = 'BuiltinTest.py, line 660:\n    self.assertEqual(slice(None,  None,  2).indices(10), (0, 10,  2))';
		$m.__track_lines__[661] = 'BuiltinTest.py, line 661:\n    self.assertEqual(slice(1,     None,  2).indices(10), (1, 10,  2))';
		$m.__track_lines__[662] = 'BuiltinTest.py, line 662:\n    self.assertEqual(slice(None,  None, -1).indices(10), (9, -1, -1))';
		$m.__track_lines__[663] = 'BuiltinTest.py, line 663:\n    self.assertEqual(slice(None,  None, -2).indices(10), (9, -1, -2))';
		$m.__track_lines__[664] = 'BuiltinTest.py, line 664:\n    self.assertEqual(slice(3,     None, -2).indices(10), (3, -1, -2))';
		$m.__track_lines__[665] = 'BuiltinTest.py, line 665:\n    self.assertEqual(slice(None, -9).indices(10), (0, 1, 1))';
		$m.__track_lines__[666] = 'BuiltinTest.py, line 666:\n    self.assertEqual(slice(None, -10).indices(10), (0, 0, 1))';
		$m.__track_lines__[667] = 'BuiltinTest.py, line 667:\n    self.assertEqual(slice(None, -11).indices(10), (0, 0, 1))';
		$m.__track_lines__[668] = 'BuiltinTest.py, line 668:\n    self.assertEqual(slice(None, -10, -1).indices(10), (9, 0, -1))';
		$m.__track_lines__[669] = 'BuiltinTest.py, line 669:\n    self.assertEqual(slice(None, -11, -1).indices(10), (9, -1, -1))';
		$m.__track_lines__[670] = 'BuiltinTest.py, line 670:\n    self.assertEqual(slice(None, -12, -1).indices(10), (9, -1, -1))';
		$m.__track_lines__[671] = 'BuiltinTest.py, line 671:\n    self.assertEqual(slice(None, 9).indices(10), (0, 9, 1))';
		$m.__track_lines__[672] = 'BuiltinTest.py, line 672:\n    self.assertEqual(slice(None, 10).indices(10), (0, 10, 1))';
		$m.__track_lines__[673] = 'BuiltinTest.py, line 673:\n    self.assertEqual(slice(None, 11).indices(10), (0, 10, 1))';
		$m.__track_lines__[674] = 'BuiltinTest.py, line 674:\n    self.assertEqual(slice(None, 8, -1).indices(10), (9, 8, -1))';
		$m.__track_lines__[675] = 'BuiltinTest.py, line 675:\n    self.assertEqual(slice(None, 9, -1).indices(10), (9, 9, -1))';
		$m.__track_lines__[676] = 'BuiltinTest.py, line 676:\n    self.assertEqual(slice(None, 10, -1).indices(10), (9, 9, -1))';
		$m.__track_lines__[679] = 'BuiltinTest.py, line 678:\n    self.assertEqual( ... slice(-100,  100     ).indices(10),';
		$m.__track_lines__[683] = 'BuiltinTest.py, line 682:\n    self.assertEqual( ... slice(100,  -100,  -1).indices(10),';
		$m.__track_lines__[686] = 'BuiltinTest.py, line 686:\n    self.assertEqual(slice(-100L, 100L, 2L).indices(10), (0, 10,  2))';
		$m.__track_lines__[690] = 'BuiltinTest.py, line 690:\n    def test_format(self):';
		$m.__track_lines__[691] = "BuiltinTest.py, line 691:\n    self.assertEqual(''.format(), '')";
		$m.__track_lines__[692] = "BuiltinTest.py, line 692:\n    self.assertEqual('a'.format(), 'a')";
		$m.__track_lines__[693] = "BuiltinTest.py, line 693:\n    self.assertEqual('ab'.format(), 'ab')";
		$m.__track_lines__[694] = "BuiltinTest.py, line 694:\n    self.assertEqual('a{{'.format(), 'a{')";
		$m.__track_lines__[695] = "BuiltinTest.py, line 695:\n    self.assertEqual('a}}'.format(), 'a}')";
		$m.__track_lines__[696] = "BuiltinTest.py, line 696:\n    self.assertEqual('{{b'.format(), '{b')";
		$m.__track_lines__[697] = "BuiltinTest.py, line 697:\n    self.assertEqual('}}b'.format(), '}b')";
		$m.__track_lines__[698] = "BuiltinTest.py, line 698:\n    self.assertEqual('a{{b'.format(), 'a{b')";
		$m.__track_lines__[700] = 'BuiltinTest.py, line 700:\n    import datetime';
		$m.__track_lines__[701] = 'BuiltinTest.py, line 701:\n    self.assertEqual("My name is {0}".format(\'Fred\'), "My name is Fred")';
		$m.__track_lines__[702] = 'BuiltinTest.py, line 702:\n    self.assertEqual("My name is {0[name]}".format(dict(name=\'Fred\')),';
		$m.__track_lines__[704] = 'BuiltinTest.py, line 704:\n    self.assertEqual("My name is {0} :-{{}}".format(\'Fred\'),';
		$m.__track_lines__[707] = 'BuiltinTest.py, line 707:\n    d = datetime.date(2007, 8, 18)';
		$m.__track_lines__[708] = 'BuiltinTest.py, line 708:\n    self.assertEqual("The year is {0.year}".format(d),';
		$m.__track_lines__[712] = 'BuiltinTest.py, line 712:\n    class C:';
		$m.__track_lines__[713] = 'BuiltinTest.py, line 713:\n    def __init__(self, x=100):';
		$m.__track_lines__[714] = 'BuiltinTest.py, line 714:\n    self._x = x';
		$m.__track_lines__[715] = 'BuiltinTest.py, line 715:\n    def __format__(self, spec):';
		$m.__track_lines__[716] = 'BuiltinTest.py, line 716:\n    return spec';
		$m.__track_lines__[718] = 'BuiltinTest.py, line 718:\n    class D:';
		$m.__track_lines__[719] = 'BuiltinTest.py, line 719:\n    def __init__(self, x):';
		$m.__track_lines__[720] = 'BuiltinTest.py, line 720:\n    self.x = x';
		$m.__track_lines__[721] = 'BuiltinTest.py, line 721:\n    def __format__(self, spec):';
		$m.__track_lines__[722] = 'BuiltinTest.py, line 722:\n    return str(self.x)';
		$m.__track_lines__[725] = 'BuiltinTest.py, line 725:\n    class E:';
		$m.__track_lines__[726] = 'BuiltinTest.py, line 726:\n    def __init__(self, x):';
		$m.__track_lines__[727] = 'BuiltinTest.py, line 727:\n    self.x = x';
		$m.__track_lines__[728] = 'BuiltinTest.py, line 728:\n    def __str__(self):';
		$m.__track_lines__[729] = "BuiltinTest.py, line 729:\n    return 'E(' + self.x + ')'";
		$m.__track_lines__[732] = 'BuiltinTest.py, line 732:\n    class F:';
		$m.__track_lines__[733] = 'BuiltinTest.py, line 733:\n    def __init__(self, x):';
		$m.__track_lines__[734] = 'BuiltinTest.py, line 734:\n    self.x = x';
		$m.__track_lines__[735] = 'BuiltinTest.py, line 735:\n    def __repr__(self):';
		$m.__track_lines__[736] = "BuiltinTest.py, line 736:\n    return 'F(' + self.x + ')'";
		$m.__track_lines__[739] = 'BuiltinTest.py, line 739:\n    class G:';
		$m.__track_lines__[740] = 'BuiltinTest.py, line 740:\n    def __init__(self, x):';
		$m.__track_lines__[741] = 'BuiltinTest.py, line 741:\n    self.x = x';
		$m.__track_lines__[742] = 'BuiltinTest.py, line 742:\n    def __str__(self):';
		$m.__track_lines__[743] = 'BuiltinTest.py, line 743:\n    return "string is " + self.x';
		$m.__track_lines__[744] = 'BuiltinTest.py, line 744:\n    def __format__(self, format_spec):';
		$m.__track_lines__[745] = "BuiltinTest.py, line 745:\n    if format_spec == 'd':";
		$m.__track_lines__[746] = "BuiltinTest.py, line 746:\n    return 'G(' + self.x + ')'";
		$m.__track_lines__[747] = 'BuiltinTest.py, line 747:\n    return object.__format__(self, format_spec)';
		$m.__track_lines__[749] = 'BuiltinTest.py, line 749:\n    class Galt:';
		$m.__track_lines__[750] = 'BuiltinTest.py, line 750:\n    def __init__(self, x):';
		$m.__track_lines__[751] = 'BuiltinTest.py, line 751:\n    self.x = x';
		$m.__track_lines__[752] = 'BuiltinTest.py, line 752:\n    def __str__(self):';
		$m.__track_lines__[753] = 'BuiltinTest.py, line 753:\n    return "string is " + self.x';
		$m.__track_lines__[754] = 'BuiltinTest.py, line 754:\n    def __format__(self, format_spec):';
		$m.__track_lines__[755] = "BuiltinTest.py, line 755:\n    if format_spec == 'd':";
		$m.__track_lines__[756] = "BuiltinTest.py, line 756:\n    return 'G(' + self.x + ')'";
		$m.__track_lines__[757] = 'BuiltinTest.py, line 757:\n    return format(str(self), format_spec)';
		$m.__track_lines__[760] = 'BuiltinTest.py, line 760:\n    class H:';
		$m.__track_lines__[761] = 'BuiltinTest.py, line 761:\n    def __format__(self, format_spec):';
		$m.__track_lines__[762] = 'BuiltinTest.py, line 762:\n    return 1.0';
		$m.__track_lines__[764] = 'BuiltinTest.py, line 764:\n    class I(datetime.date):';
		$m.__track_lines__[765] = 'BuiltinTest.py, line 765:\n    def __format__(self, format_spec):';
		$m.__track_lines__[766] = 'BuiltinTest.py, line 766:\n    return self.strftime(format_spec)';
		$m.__track_lines__[768] = 'BuiltinTest.py, line 768:\n    class J(int):';
		$m.__track_lines__[769] = 'BuiltinTest.py, line 769:\n    def __format__(self, format_spec):';
		$m.__track_lines__[770] = 'BuiltinTest.py, line 770:\n    return int.__format__(self * 2, format_spec)';
		$m.__track_lines__[773] = "BuiltinTest.py, line 773:\n    self.assertEqual(''.format(), '')";
		$m.__track_lines__[774] = "BuiltinTest.py, line 774:\n    self.assertEqual('abc'.format(), 'abc')";
		$m.__track_lines__[775] = "BuiltinTest.py, line 775:\n    self.assertEqual('{0}'.format('abc'), 'abc')";
		$m.__track_lines__[776] = "BuiltinTest.py, line 776:\n    self.assertEqual('{0:}'.format('abc'), 'abc')";
		$m.__track_lines__[777] = "BuiltinTest.py, line 777:\n    self.assertEqual('X{0}'.format('abc'), 'Xabc')";
		$m.__track_lines__[778] = "BuiltinTest.py, line 778:\n    self.assertEqual('{0}X'.format('abc'), 'abcX')";
		$m.__track_lines__[779] = "BuiltinTest.py, line 779:\n    self.assertEqual('X{0}Y'.format('abc'), 'XabcY')";
		$m.__track_lines__[780] = "BuiltinTest.py, line 780:\n    self.assertEqual('{1}'.format(1, 'abc'), 'abc')";
		$m.__track_lines__[781] = "BuiltinTest.py, line 781:\n    self.assertEqual('X{1}'.format(1, 'abc'), 'Xabc')";
		$m.__track_lines__[782] = "BuiltinTest.py, line 782:\n    self.assertEqual('{1}X'.format(1, 'abc'), 'abcX')";
		$m.__track_lines__[783] = "BuiltinTest.py, line 783:\n    self.assertEqual('X{1}Y'.format(1, 'abc'), 'XabcY')";
		$m.__track_lines__[784] = "BuiltinTest.py, line 784:\n    self.assertEqual('{0}'.format(-15), '-15')";
		$m.__track_lines__[785] = "BuiltinTest.py, line 785:\n    self.assertEqual('{0}{1}'.format(-15, 'abc'), '-15abc')";
		$m.__track_lines__[786] = "BuiltinTest.py, line 786:\n    self.assertEqual('{0}X{1}'.format(-15, 'abc'), '-15Xabc')";
		$m.__track_lines__[787] = "BuiltinTest.py, line 787:\n    self.assertEqual('{{'.format(), '{')";
		$m.__track_lines__[788] = "BuiltinTest.py, line 788:\n    self.assertEqual('}}'.format(), '}')";
		$m.__track_lines__[789] = "BuiltinTest.py, line 789:\n    self.assertEqual('{{}}'.format(), '{}')";
		$m.__track_lines__[790] = "BuiltinTest.py, line 790:\n    self.assertEqual('{{x}}'.format(), '{x}')";
		$m.__track_lines__[791] = "BuiltinTest.py, line 791:\n    self.assertEqual('{{{0}}}'.format(123), '{123}')";
		$m.__track_lines__[792] = "BuiltinTest.py, line 792:\n    self.assertEqual('{{{{0}}}}'.format(), '{{0}}')";
		$m.__track_lines__[793] = "BuiltinTest.py, line 793:\n    self.assertEqual('}}{{'.format(), '}{')";
		$m.__track_lines__[794] = "BuiltinTest.py, line 794:\n    self.assertEqual('}}x{{'.format(), '}x{')";
		$m.__track_lines__[797] = 'BuiltinTest.py, line 797:\n    self.assertEqual("{0[foo-bar]}".format({\'foo-bar\':\'baz\'}), \'baz\')';
		$m.__track_lines__[798] = 'BuiltinTest.py, line 798:\n    self.assertEqual("{0[foo bar]}".format({\'foo bar\':\'baz\'}), \'baz\')';
		$m.__track_lines__[799] = 'BuiltinTest.py, line 799:\n    self.assertEqual("{0[ ]}".format({\' \':3}), \'3\')';
		$m.__track_lines__[801] = "BuiltinTest.py, line 801:\n    self.assertEqual('{foo._x}'.format(foo=C(20)), '20')";
		$m.__track_lines__[802] = "BuiltinTest.py, line 802:\n    self.assertEqual('{1}{0}'.format(D(10), D(20)), '2010')";
		$m.__track_lines__[803] = "BuiltinTest.py, line 803:\n    self.assertEqual('{0._x.x}'.format(C(D('abc'))), 'abc')";
		$m.__track_lines__[804] = "BuiltinTest.py, line 804:\n    self.assertEqual('{0[0]}'.format(['abc', 'def']), 'abc')";
		$m.__track_lines__[805] = "BuiltinTest.py, line 805:\n    self.assertEqual('{0[1]}'.format(['abc', 'def']), 'def')";
		$m.__track_lines__[806] = "BuiltinTest.py, line 806:\n    self.assertEqual('{0[1][0]}'.format(['abc', ['def']]), 'def')";
		$m.__track_lines__[807] = "BuiltinTest.py, line 807:\n    self.assertEqual('{0[1][0].x}'.format(['abc', [D('def')]]), 'def')";
		$m.__track_lines__[810] = "BuiltinTest.py, line 810:\n    self.assertEqual('{0:.3s}'.format('abc'), 'abc')";
		$m.__track_lines__[811] = "BuiltinTest.py, line 811:\n    self.assertEqual('{0:.3s}'.format('ab'), 'ab')";
		$m.__track_lines__[812] = "BuiltinTest.py, line 812:\n    self.assertEqual('{0:.3s}'.format('abcdef'), 'abc')";
		$m.__track_lines__[813] = "BuiltinTest.py, line 813:\n    self.assertEqual('{0:.0s}'.format('abcdef'), '')";
		$m.__track_lines__[814] = "BuiltinTest.py, line 814:\n    self.assertEqual('{0:3.3s}'.format('abc'), 'abc')";
		$m.__track_lines__[815] = "BuiltinTest.py, line 815:\n    self.assertEqual('{0:2.3s}'.format('abc'), 'abc')";
		$m.__track_lines__[816] = "BuiltinTest.py, line 816:\n    self.assertEqual('{0:2.2s}'.format('abc'), 'ab')";
		$m.__track_lines__[817] = "BuiltinTest.py, line 817:\n    self.assertEqual('{0:3.2s}'.format('abc'), 'ab ')";
		$m.__track_lines__[818] = "BuiltinTest.py, line 818:\n    self.assertEqual('{0:x<0s}'.format('result'), 'result')";
		$m.__track_lines__[819] = "BuiltinTest.py, line 819:\n    self.assertEqual('{0:x<5s}'.format('result'), 'result')";
		$m.__track_lines__[820] = "BuiltinTest.py, line 820:\n    self.assertEqual('{0:x<6s}'.format('result'), 'result')";
		$m.__track_lines__[821] = "BuiltinTest.py, line 821:\n    self.assertEqual('{0:x<7s}'.format('result'), 'resultx')";
		$m.__track_lines__[822] = "BuiltinTest.py, line 822:\n    self.assertEqual('{0:x<8s}'.format('result'), 'resultxx')";
		$m.__track_lines__[823] = "BuiltinTest.py, line 823:\n    self.assertEqual('{0: <7s}'.format('result'), 'result ')";
		$m.__track_lines__[824] = "BuiltinTest.py, line 824:\n    self.assertEqual('{0:<7s}'.format('result'), 'result ')";
		$m.__track_lines__[825] = "BuiltinTest.py, line 825:\n    self.assertEqual('{0:>7s}'.format('result'), ' result')";
		$m.__track_lines__[826] = "BuiltinTest.py, line 826:\n    self.assertEqual('{0:>8s}'.format('result'), '  result')";
		$m.__track_lines__[827] = "BuiltinTest.py, line 827:\n    self.assertEqual('{0:^8s}'.format('result'), ' result ')";
		$m.__track_lines__[828] = "BuiltinTest.py, line 828:\n    self.assertEqual('{0:^9s}'.format('result'), ' result  ')";
		$m.__track_lines__[829] = "BuiltinTest.py, line 829:\n    self.assertEqual('{0:^10s}'.format('result'), '  result  ')";
		$m.__track_lines__[830] = "BuiltinTest.py, line 830:\n    self.assertEqual('{0:10000}'.format('a'), 'a' + ' ' * 9999)";
		$m.__track_lines__[831] = "BuiltinTest.py, line 831:\n    self.assertEqual('{0:10000}'.format(''), ' ' * 10000)";
		$m.__track_lines__[832] = "BuiltinTest.py, line 832:\n    self.assertEqual('{0:10000000}'.format(''), ' ' * 10000000)";
		$m.__track_lines__[835] = "BuiltinTest.py, line 835:\n    self.assertEqual('{0:abc}'.format(C()), 'abc')";
		$m.__track_lines__[838] = "BuiltinTest.py, line 838:\n    self.assertEqual('{0!s}'.format('Hello'), 'Hello')";
		$m.__track_lines__[839] = "BuiltinTest.py, line 839:\n    self.assertEqual('{0!s:}'.format('Hello'), 'Hello')";
		$m.__track_lines__[840] = "BuiltinTest.py, line 840:\n    self.assertEqual('{0!s:15}'.format('Hello'), 'Hello          ')";
		$m.__track_lines__[841] = "BuiltinTest.py, line 841:\n    self.assertEqual('{0!s:15s}'.format('Hello'), 'Hello          ')";
		$m.__track_lines__[842] = 'BuiltinTest.py, line 842:\n    self.assertEqual(\'{0!r}\'.format(\'Hello\'), "\'Hello\'")';
		$m.__track_lines__[843] = 'BuiltinTest.py, line 843:\n    self.assertEqual(\'{0!r:}\'.format(\'Hello\'), "\'Hello\'")';
		$m.__track_lines__[844] = "BuiltinTest.py, line 844:\n    self.assertEqual('{0!r}'.format(F('Hello')), 'F(Hello)')";
		$m.__track_lines__[847] = "BuiltinTest.py, line 847:\n    self.assertEqual('{0}'.format({}), '{}')";
		$m.__track_lines__[848] = "BuiltinTest.py, line 848:\n    self.assertEqual('{0}'.format([]), '[]')";
		$m.__track_lines__[849] = "BuiltinTest.py, line 849:\n    self.assertEqual('{0}'.format([1]), '[1]')";
		$m.__track_lines__[850] = "BuiltinTest.py, line 850:\n    self.assertEqual('{0}'.format(E('data')), 'E(data)')";
		$m.__track_lines__[851] = "BuiltinTest.py, line 851:\n    self.assertEqual('{0:d}'.format(G('data')), 'G(data)')";
		$m.__track_lines__[852] = "BuiltinTest.py, line 852:\n    self.assertEqual('{0!s}'.format(G('dat1')), 'string is dat1')";
		$m.__track_lines__[854] = "BuiltinTest.py, line 854:\n    self.assertEqual('{0:^10}'.format(E('dat2')), ' E(dat2)  ')";
		$m.__track_lines__[855] = "BuiltinTest.py, line 855:\n    self.assertEqual('{0:^10s}'.format(E('dat3')), ' E(dat3)  ')";
		$m.__track_lines__[856] = "BuiltinTest.py, line 856:\n    self.assertEqual('{0:>15s}'.format(Galt('dat4')), ' string is dat4')";
		$m.__track_lines__[859] = 'BuiltinTest.py, line 859:\n    try:';
		$m.__track_lines__[860] = "BuiltinTest.py, line 860:\n    self.assertEqual('{0:>15s}'.format(G('dat5')), ' string is dat5')";
		$m.__track_lines__[862] = 'BuiltinTest.py, line 862:\n    self.fail("object.__format__ missing#674")';
		$m.__track_lines__[865] = 'BuiltinTest.py, line 865:\n    self.assertEqual("{0:date: %Y-%m-%d}".format(';
		$m.__track_lines__[871] = 'BuiltinTest.py, line 871:\n    self.assertEqual("{0}".format(J(10)), "20",';
		$m.__track_lines__[876] = "BuiltinTest.py, line 876:\n    self.assertEqual('{0:}'.format('a'), 'a')";
		$m.__track_lines__[879] = 'BuiltinTest.py, line 879:\n    self.assertEqual("{0:.{1}}".format(\'hello world\', 5), \'hello\')';
		$m.__track_lines__[880] = 'BuiltinTest.py, line 880:\n    self.assertEqual("{0:.{1}s}".format(\'hello world\', 5), \'hello\')';
		$m.__track_lines__[881] = 'BuiltinTest.py, line 881:\n    self.assertEqual("{0:.{precision}s}".format(\'hello world\', precision=5), \'hello\')';
		$m.__track_lines__[882] = 'BuiltinTest.py, line 882:\n    self.assertEqual("{0:{width}.{precision}s}".format(\'hello world\', width=10, precision=5), \'hello     \')';
		$m.__track_lines__[883] = 'BuiltinTest.py, line 883:\n    self.assertEqual("{0:{width}.{precision}s}".format(\'hello world\', width=\'10\', precision=\'5\'), \'hello     \')';
		$m.__track_lines__[886] = "BuiltinTest.py, line 886:\n    self.format_raises(ValueError, '{')";
		$m.__track_lines__[887] = "BuiltinTest.py, line 887:\n    self.format_raises(ValueError, '}')";
		$m.__track_lines__[888] = "BuiltinTest.py, line 888:\n    self.format_raises(ValueError, 'a{')";
		$m.__track_lines__[889] = "BuiltinTest.py, line 889:\n    self.format_raises(ValueError, 'a}')";
		$m.__track_lines__[890] = "BuiltinTest.py, line 890:\n    self.format_raises(ValueError, '{a')";
		$m.__track_lines__[891] = "BuiltinTest.py, line 891:\n    self.format_raises(ValueError, '}a')";
		$m.__track_lines__[892] = "BuiltinTest.py, line 892:\n    self.format_raises(IndexError, '{0}')";
		$m.__track_lines__[893] = "BuiltinTest.py, line 893:\n    self.format_raises(IndexError, '{1}', 'abc')";
		$m.__track_lines__[894] = "BuiltinTest.py, line 894:\n    self.format_raises(KeyError,   '{x}')";
		$m.__track_lines__[895] = 'BuiltinTest.py, line 895:\n    self.format_raises(ValueError, "}{")';
		$m.__track_lines__[896] = 'BuiltinTest.py, line 896:\n    self.format_raises(ValueError, "{")';
		$m.__track_lines__[897] = 'BuiltinTest.py, line 897:\n    self.format_raises(ValueError, "}")';
		$m.__track_lines__[898] = 'BuiltinTest.py, line 898:\n    self.format_raises(ValueError, "abc{0:{}")';
		$m.__track_lines__[899] = 'BuiltinTest.py, line 899:\n    self.format_raises(ValueError, "{0")';
		$m.__track_lines__[900] = 'BuiltinTest.py, line 900:\n    self.format_raises(IndexError, "{0.}")';
		$m.__track_lines__[901] = 'BuiltinTest.py, line 901:\n    self.format_raises(ValueError, "{0.}", 0)';
		$m.__track_lines__[902] = 'BuiltinTest.py, line 902:\n    self.format_raises(IndexError, "{0[}")';
		$m.__track_lines__[903] = 'BuiltinTest.py, line 903:\n    self.format_raises(ValueError, "{0[}", [])';
		$m.__track_lines__[904] = 'BuiltinTest.py, line 904:\n    self.format_raises(KeyError,   "{0]}")';
		$m.__track_lines__[905] = 'BuiltinTest.py, line 905:\n    self.format_raises(ValueError, "{0.[]}", 0)';
		$m.__track_lines__[906] = 'BuiltinTest.py, line 906:\n    self.format_raises(ValueError, "{0..foo}", 0)';
		$m.__track_lines__[907] = 'BuiltinTest.py, line 907:\n    self.format_raises(ValueError, "{0[0}", 0)';
		$m.__track_lines__[908] = 'BuiltinTest.py, line 908:\n    self.format_raises(ValueError, "{0[0:foo}", 0)';
		$m.__track_lines__[909] = 'BuiltinTest.py, line 909:\n    self.format_raises(KeyError,   "{c]}")';
		$m.__track_lines__[910] = 'BuiltinTest.py, line 910:\n    self.format_raises(ValueError, "{{ {{{0}}", 0)';
		$m.__track_lines__[911] = 'BuiltinTest.py, line 911:\n    self.format_raises(ValueError, "{0}}", 0)';
		$m.__track_lines__[912] = 'BuiltinTest.py, line 912:\n    self.format_raises(KeyError,   "{foo}", bar=3)';
		$m.__track_lines__[913] = 'BuiltinTest.py, line 913:\n    self.format_raises(ValueError, "{0!x}", 3)';
		$m.__track_lines__[914] = 'BuiltinTest.py, line 914:\n    self.format_raises(ValueError, "{0!}", 0)';
		$m.__track_lines__[915] = 'BuiltinTest.py, line 915:\n    self.format_raises(ValueError, "{0!rs}", 0)';
		$m.__track_lines__[916] = 'BuiltinTest.py, line 916:\n    self.format_raises(ValueError, "{!}")';
		$m.__track_lines__[917] = 'BuiltinTest.py, line 917:\n    self.format_raises(IndexError, "{:}")';
		$m.__track_lines__[918] = 'BuiltinTest.py, line 918:\n    self.format_raises(IndexError, "{:s}")';
		$m.__track_lines__[919] = 'BuiltinTest.py, line 919:\n    self.format_raises(IndexError, "{}")';
		$m.__track_lines__[922] = 'BuiltinTest.py, line 922:\n    self.format_raises(ValueError, "{0[0]x}", [None])';
		$m.__track_lines__[923] = 'BuiltinTest.py, line 923:\n    self.format_raises(ValueError, "{0[0](10)}", [None])';
		$m.__track_lines__[927] = "BuiltinTest.py, line 927:\n    self.format_raises(TypeError, '{0[{1}]}', 'abcdefg', 4)";
		$m.__track_lines__[930] = 'BuiltinTest.py, line 930:\n    self.format_raises(ValueError, "{0:{1:{2}}}", \'abc\', \'s\', \'\')';
		$m.__track_lines__[931] = 'BuiltinTest.py, line 931:\n    self.format_raises(ValueError, "{0:{1:{2:{3:{4:{5:{6}}}}}}}",';
		$m.__track_lines__[935] = 'BuiltinTest.py, line 935:\n    self.format_raises(ValueError, "{0:-s}", \'\')';
		$m.__track_lines__[936] = 'BuiltinTest.py, line 936:\n    self.assertRaises(ValueError, format, "", "-")';
		$m.__track_lines__[937] = 'BuiltinTest.py, line 937:\n    self.format_raises(ValueError, "{0:=s}", \'\')';
		$m.__track_lines__[939] = 'BuiltinTest.py, line 939:\n    def test_format_auto_numbering(self):';
		$m.__track_lines__[940] = 'BuiltinTest.py, line 940:\n    class C:';
		$m.__track_lines__[941] = 'BuiltinTest.py, line 941:\n    def __init__(self, x=100):';
		$m.__track_lines__[942] = 'BuiltinTest.py, line 942:\n    self._x = x';
		$m.__track_lines__[943] = 'BuiltinTest.py, line 943:\n    def __format__(self, spec):';
		$m.__track_lines__[944] = 'BuiltinTest.py, line 944:\n    return spec';
		$m.__track_lines__[946] = "BuiltinTest.py, line 946:\n    self.assertEqual('{}'.format(10), '10')";
		$m.__track_lines__[947] = "BuiltinTest.py, line 947:\n    self.assertEqual('{:5}'.format('s'), 's    ')";
		$m.__track_lines__[948] = 'BuiltinTest.py, line 948:\n    self.assertEqual(\'{!r}\'.format(\'s\'), "\'s\'")';
		$m.__track_lines__[949] = "BuiltinTest.py, line 949:\n    self.assertEqual('{._x}'.format(C(10)), '10')";
		$m.__track_lines__[950] = "BuiltinTest.py, line 950:\n    self.assertEqual('{[1]}'.format([1, 2]), '2')";
		$m.__track_lines__[951] = "BuiltinTest.py, line 951:\n    self.assertEqual('{[a]}'.format({'a':4, 'b':2}), '4')";
		$m.__track_lines__[952] = "BuiltinTest.py, line 952:\n    self.assertEqual('a{}b{}c'.format(0, 1), 'a0b1c')";
		$m.__track_lines__[954] = "BuiltinTest.py, line 954:\n    self.assertEqual('a{:{}}b'.format('x', '^10'), 'a    x     b')";
		$m.__track_lines__[955] = "BuiltinTest.py, line 955:\n    self.assertEqual('a{:{}x}b'.format(20, '#'), 'a0x14b')";
		$m.__track_lines__[958] = "BuiltinTest.py, line 958:\n    self.format_raises(ValueError, '{}{1}', 1, 2)";
		$m.__track_lines__[959] = "BuiltinTest.py, line 959:\n    self.format_raises(ValueError, '{1}{}', 1, 2)";
		$m.__track_lines__[960] = "BuiltinTest.py, line 960:\n    self.format_raises(ValueError, '{:{1}}', 1, 2)";
		$m.__track_lines__[961] = "BuiltinTest.py, line 961:\n    self.format_raises(ValueError, '{0:{}}', 1, 2)";
		$m.__track_lines__[964] = "BuiltinTest.py, line 964:\n    self.assertEqual('{f}{}'.format(4, f='test'), 'test4')";
		$m.__track_lines__[965] = "BuiltinTest.py, line 965:\n    self.assertEqual('{}{f}'.format(4, f='test'), '4test')";
		$m.__track_lines__[966] = "BuiltinTest.py, line 966:\n    self.assertEqual('{:{f}}{g}{}'.format(1, 3, g='g', f=2), ' 1g3')";
		$m.__track_lines__[967] = "BuiltinTest.py, line 967:\n    self.assertEqual('{f:{}}{}{g}'.format(2, 4, f=1, g='g'), ' 14g')";
		$m.__track_lines__[971] = 'BuiltinTest.py, line 971:\n    def format_raises(self, e, *args, **kw):';
		$m.__track_lines__[972] = 'BuiltinTest.py, line 972:\n    self.startTest()';
		$m.__track_lines__[973] = 'BuiltinTest.py, line 973:\n    try:';
		$m.__track_lines__[974] = 'BuiltinTest.py, line 974:\n    args[0].format(*args[1:], **kw)';
		$m.__track_lines__[976] = 'BuiltinTest.py, line 976:\n    return True';
		$m.__track_lines__[978] = "BuiltinTest.py, line 978:\n    if hasattr(e, '__name__'):";
		$m.__track_lines__[979] = 'BuiltinTest.py, line 979:\n    excName = e.__name__';
		$m.__track_lines__[981] = 'BuiltinTest.py, line 981:\n    excName = str(e)';
		$m.__track_lines__[982] = 'BuiltinTest.py, line 982:\n    self.fail("%s not raised" % excName)';
		$m.__track_lines__[983] = 'BuiltinTest.py, line 983:\n    return False';
		$m.__track_lines__[988] = 'BuiltinTest.py, line 988:\n    def test_format_float(self):';
		$m.__track_lines__[992] = "BuiltinTest.py, line 992:\n    self.assertEqual(format(0.0, 'f'), '0.000000')";
		$m.__track_lines__[1001] = 'BuiltinTest.py, line 1001:\n    x = 100/7.';
		$m.__track_lines__[1002] = "BuiltinTest.py, line 1002:\n    self.assertEqual(format(x, ''), str(x))";
		$m.__track_lines__[1007] = "BuiltinTest.py, line 1007:\n    self.assertEqual(format(1.0, 'f'), '1.000000')";
		$m.__track_lines__[1009] = "BuiltinTest.py, line 1009:\n    self.assertEqual(format(-1.0, 'f'), '-1.000000')";
		$m.__track_lines__[1011] = "BuiltinTest.py, line 1011:\n    self.assertEqual(format( 1.0, ' f'), ' 1.000000')";
		$m.__track_lines__[1012] = "BuiltinTest.py, line 1012:\n    self.assertEqual(format(-1.0, ' f'), '-1.000000')";
		$m.__track_lines__[1013] = "BuiltinTest.py, line 1013:\n    self.assertEqual(format( 1.0, '+f'), '+1.000000')";
		$m.__track_lines__[1014] = "BuiltinTest.py, line 1014:\n    self.assertEqual(format(-1.0, '+f'), '-1.000000')";
		$m.__track_lines__[1017] = "BuiltinTest.py, line 1017:\n    self.assertEqual(format(-1.0, '%'), '-100.000000%')";
		$m.__track_lines__[1020] = 'BuiltinTest.py, line 1020:\n    self.format_raises(ValueError, "{:s}", 3.0)';
		$m.__track_lines__[1024] = "BuiltinTest.py, line 1024:\n    for format_spec in ([chr(x) for x in range(ord('a'), ord('z')+1)] +";
		$m.__track_lines__[1026] = "BuiltinTest.py, line 1026:\n    if not format_spec in 'eEfFgGn%':";
		$m.__track_lines__[1028] = 'BuiltinTest.py, line 1028:\n    issue524_solved = False';
		$m.__track_lines__[1029] = 'BuiltinTest.py, line 1029:\n    try:';
		$m.__track_lines__[1030] = "BuiltinTest.py, line 1030:\n    format(1.0, 'd')";
		$m.__track_lines__[1032] = 'BuiltinTest.py, line 1032:\n    issue524_solved = True';
		$m.__track_lines__[1033] = "BuiltinTest.py, line 1033:\n    if not issue524_solved and format_spec in 'bcdoxX':";
		$m.__track_lines__[1034] = 'BuiltinTest.py, line 1034:\n    continue';
		$m.__track_lines__[1035] = 'BuiltinTest.py, line 1035:\n    self.assertRaises(ValueError, format, 0.0, format_spec)';
		$m.__track_lines__[1036] = 'BuiltinTest.py, line 1036:\n    self.assertRaises(ValueError, format, 1.0, format_spec)';
		$m.__track_lines__[1037] = 'BuiltinTest.py, line 1037:\n    self.assertRaises(ValueError, format, -1.0, format_spec)';
		$m.__track_lines__[1038] = 'BuiltinTest.py, line 1038:\n    self.assertRaises(ValueError, format, 1e100, format_spec)';
		$m.__track_lines__[1039] = 'BuiltinTest.py, line 1039:\n    self.assertRaises(ValueError, format, -1e100, format_spec)';
		$m.__track_lines__[1040] = 'BuiltinTest.py, line 1040:\n    self.assertRaises(ValueError, format, 1e-100, format_spec)';
		$m.__track_lines__[1041] = 'BuiltinTest.py, line 1041:\n    self.assertRaises(ValueError, format, -1e-100, format_spec)';
		$m.__track_lines__[1045] = 'BuiltinTest.py, line 1045:\n    try:';
		$m.__track_lines__[1046] = "BuiltinTest.py, line 1046:\n    INF = float('inf')";
		$m.__track_lines__[1047] = "BuiltinTest.py, line 1047:\n    NAN = float('nan')";
		$m.__track_lines__[1049] = 'BuiltinTest.py, line 1049:\n    pass';
		$m.__track_lines__[1051] = "BuiltinTest.py, line 1051:\n    self.assertEqual('{0:f}'.format(INF), 'inf')";
		$m.__track_lines__[1052] = "BuiltinTest.py, line 1052:\n    self.assertEqual('{0:F}'.format(INF), 'INF')";
		$m.__track_lines__[1053] = "BuiltinTest.py, line 1053:\n    self.assertEqual('{0:f}'.format(-INF), '-inf')";
		$m.__track_lines__[1054] = "BuiltinTest.py, line 1054:\n    self.assertEqual('{0:F}'.format(-INF), '-INF')";
		$m.__track_lines__[1055] = "BuiltinTest.py, line 1055:\n    self.assertEqual('{0:f}'.format(NAN), 'nan')";
		$m.__track_lines__[1056] = "BuiltinTest.py, line 1056:\n    self.assertEqual('{0:F}'.format(NAN), 'NAN')";
		$m.__track_lines__[1058] = 'BuiltinTest.py, line 1058:\n    def test_issue5864(self):';
		$m.__track_lines__[1059] = "BuiltinTest.py, line 1059:\n    self.assertEqual(format(123.456, '.4'), '123.5')";
		$m.__track_lines__[1060] = "BuiltinTest.py, line 1060:\n    self.assertEqual(format(1234.56, '.4'), '1.235e+03')";
		$m.__track_lines__[1061] = "BuiltinTest.py, line 1061:\n    self.assertEqual(format(12345.6, '.4'), '1.235e+04')";
		$m.__track_lines__[1067] = 'BuiltinTest.py, line 1067:\n    def test_sign(self):';
		$m.__track_lines__[1068] = 'BuiltinTest.py, line 1068:\n    self.assertEquals(format(-6), "-6")';
		$m.__track_lines__[1069] = 'BuiltinTest.py, line 1069:\n    self.assertEquals(format(-6, "-"), "-6")';
		$m.__track_lines__[1070] = 'BuiltinTest.py, line 1070:\n    self.assertEquals(format(-6, "+"), "-6")';
		$m.__track_lines__[1071] = 'BuiltinTest.py, line 1071:\n    self.assertEquals(format(-6, " "), "-6")';
		$m.__track_lines__[1072] = 'BuiltinTest.py, line 1072:\n    self.assertEquals(format(6, " "), " 6")';
		$m.__track_lines__[1073] = 'BuiltinTest.py, line 1073:\n    self.assertEquals(format(6, "-"), "6")';
		$m.__track_lines__[1074] = 'BuiltinTest.py, line 1074:\n    self.assertEquals(format(6, "+"), "+6")';
		$m.__track_lines__[1076] = 'BuiltinTest.py, line 1076:\n    def test_thousands_separator(self):';
		$m.__track_lines__[1077] = 'BuiltinTest.py, line 1077:\n    self.assertEquals(format(123, ","), "123")';
		$m.__track_lines__[1078] = 'BuiltinTest.py, line 1078:\n    self.assertEquals(format(12345, ","), "12,345")';
		$m.__track_lines__[1079] = 'BuiltinTest.py, line 1079:\n    self.assertEquals(format(123456789, ","), "123,456,789")';
		$m.__track_lines__[1080] = 'BuiltinTest.py, line 1080:\n    self.assertEquals(format(12345, "7,"), " 12,345")';
		$m.__track_lines__[1081] = 'BuiltinTest.py, line 1081:\n    self.assertEquals(format(12345, "<7,"), "12,345 ")';
		$m.__track_lines__[1082] = 'BuiltinTest.py, line 1082:\n    self.assertEquals(format(1234, "0=10,"), "00,001,234")';
		$m.__track_lines__[1083] = 'BuiltinTest.py, line 1083:\n    self.assertEquals(format(1234, "010,"), "00,001,234")';
		var $bool1,$pyjs_try_err;
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
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_10000 = new $p['int'](10000);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_123456789 = new $p['int'](123456789);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_27 = new $p['int'](27);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_12345 = new $p['int'](12345);
		var $constant_int_10000000 = new $p['int'](10000000);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_81 = new $p['int'](81);
		var $constant_int_1234 = new $p['int'](1234);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_2007 = new $p['int'](2007);
		var $constant_int_9999 = new $p['int'](9999);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_123 = new $p['int'](123);
		var $constant_long_1 = new $p['long'](1);
		var $constant_long_2 = new $p['long'](2);
		var $constant_long_3 = new $p['long'](3);
		var $constant_long_4 = new $p['long'](4);
		var $constant_long_5 = new $p['long'](5);
		var $constant_long_100 = new $p['long'](100);
		$pyjs.track.module='BuiltinTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['PY27_BEHAVIOUR'] = $p['___import___']('UnitTest.PY27_BEHAVIOUR', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=4;
			$m['builtin_value'] = $p['getattr']((typeof builtin == "undefined"?$m.builtin:builtin), 'value');
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
			$pyjs.track.module='BuiltinTest';
			if (true) {
				$pyjs.track.lineno=6;
				$m['builtin_value'] = null;
			}
		}
		$pyjs.track.lineno=7;
		if ((($bool1=false) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$pyjs.track.lineno=8;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['builtin'] = $p['___import___']('builtin', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		}
		$pyjs.track.lineno=9;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['builtin'] = $p['___import___']('builtin', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=11;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['CLS'] = $p['___import___']('imports.cls.CLS', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=12;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['CLS1'] = $p['___import___']('imports.cls1.CLS', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=15;
		$m['other'] = function() {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
{
				}
			}

			$pyjs.track={module:'BuiltinTest',lineno:15};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='BuiltinTest';
			$pyjs.track.lineno=15;
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=16;
			var $pyjs__ret = kwargs;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['other'].__name__ = 'other';

		$m['other'].__bind_type__ = 0;
		$m['other'].__args__ = [null,['kwargs']];
		$pyjs.track.lineno=18;
		$m['foo'] = function(_some, _long, _list, _of, _arguments) {
			if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
			var _additional;
			$pyjs.track={module:'BuiltinTest',lineno:18};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='BuiltinTest';
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=19;
			_additional = $constant_int_5;
			$pyjs.track.lineno=20;
			$pyjs.track.lineno=20;
			var $pyjs__ret = $pyjs_kwargs_call(null, $m['other'], null, $p.dict({'_some': _some,'_list': _list,'_additional': _additional,'_long': _long,'_of': _of,'_arguments': _arguments}), [{}]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo'].__name__ = 'foo';

		$m['foo'].__bind_type__ = 0;
		$m['foo'].__args__ = [null,null,['_some'],['_long'],['_list'],['_of'],['_arguments']];
		$pyjs.track.lineno=22;
		$m['ColourThing'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = '9825483768d39b83ef27351285b90816';
			$pyjs.track.lineno=23;
			$method = $pyjs__bind_method2('rgb', function() {
				if (this.__is_instance__ === true) {
					if ($pyjs.options.arg_count && arguments.length != -1) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length+1);
				} else {
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
				}
				var fset,fget;
				$pyjs.track={module:'BuiltinTest', lineno:23};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=23;
				$pyjs.track.lineno=24;
				fset = function(self, rgb) {
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

					$pyjs.track={module:'BuiltinTest',lineno:24};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=24;
					$pyjs.track.lineno=25;
					var $tupleassign1 = $p['__ass_unpack'](rgb, 3, null);
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('r', $tupleassign1[0]) : $p['setattr'](self, 'r', $tupleassign1[0]); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('g', $tupleassign1[1]) : $p['setattr'](self, 'g', $tupleassign1[1]); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('b', $tupleassign1[2]) : $p['setattr'](self, 'b', $tupleassign1[2]); 
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fset.__name__ = 'fset';

				fset.__bind_type__ = 0;
				fset.__args__ = [null,null,['self'],['rgb']];
				$pyjs.track.lineno=26;
				fget = function(self) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'BuiltinTest',lineno:26};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=26;
					$pyjs.track.lineno=27;
					$pyjs.track.lineno=27;
					var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b')]);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fget.__name__ = 'fget';

				fget.__bind_type__ = 0;
				fget.__args__ = [null,null,['self']];
				$pyjs.track.lineno=28;
				$pyjs.track.lineno=28;
				var $pyjs__ret = $pyjs_kwargs_call(null, $p['property'], null, $p.dict({'fset': fset,'fget': fget}), [{}]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null]);
			$cls_definition['rgb'] = $method;
			$pyjs.track.lineno=22;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ColourThing', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=30;
		$m['C'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = 'fd59be65a92797103e0e5d5a603763a9';
			$pyjs.track.lineno=32;
			$method = $pyjs__bind_method2('x', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fd59be65a92797103e0e5d5a603763a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:32};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=32;
				$pyjs.track.lineno=33;
				$pyjs.track.lineno=33;
				var $pyjs__ret = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['x'] = $p['property']($p['staticmethod']($method));
			$pyjs.track.lineno=30;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('C', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=35;
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = '74ea3024d40ef457630a2dc41fd952a0';
			$pyjs.track.lineno=36;
			$pyjs.track.lineno=35;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=38;
		$m['LocalsTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = '6899ef27534aeff6a456220b70e6d580';
			$pyjs.track.lineno=39;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6899ef27534aeff6a456220b70e6d580') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:39};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=39;
				$pyjs.track.lineno=40;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('testargs', function(test1, test2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					test1 = arguments[1];
					test2 = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6899ef27534aeff6a456220b70e6d580') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=43;
				var $pyjs__ret = $p.dict({'test1': test1,'self': self,'test2': test2});
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['test1'],['test2']]);
			$cls_definition['testargs'] = $method;
			$pyjs.track.lineno=45;
			$method = $pyjs__bind_method2('testkwargs', function(test1, test2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					test1 = arguments[1];
					test2 = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6899ef27534aeff6a456220b70e6d580') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof test1 == 'undefined') test1=arguments.callee.__args__[3][1];
				if (typeof test2 == 'undefined') test2=arguments.callee.__args__[4][1];

				$pyjs.track={module:'BuiltinTest', lineno:45};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=46;
				$pyjs.track.lineno=46;
				var $pyjs__ret = $p.dict({'test1': test1,'self': self,'test2': test2});
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['test1', null],['test2', null]]);
			$cls_definition['testkwargs'] = $method;
			$pyjs.track.lineno=38;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LocalsTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=48;
		$m['BuiltinTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'BuiltinTest';
			$cls_definition.__md5__ = '334de2122148adba7d37466708b0c4f6';
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('testMinMax', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				self['assertEqual']($p['max']($constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4), $constant_int_4);
				$pyjs.track.lineno=52;
				self['assertEqual']($p['min']($constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4), $constant_int_1);
				$pyjs.track.lineno=53;
				self['assertEqual']($p['max']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), $constant_int_4);
				$pyjs.track.lineno=54;
				self['assertEqual']($p['min']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), $constant_int_1);
				$pyjs.track.lineno=55;
				self['assertTrue']($p['op_eq']($p['max']($p['list']([$constant_int_5, $constant_int_3, $constant_int_4]), $p['list']([$constant_int_6, $constant_int_1, $constant_int_2])), $p['list']([$constant_int_6, $constant_int_1, $constant_int_2])), 'max([5,3,4],[6,1,2])');
				$pyjs.track.lineno=56;
				self['assertTrue']($p['op_eq']($p['min']($p['list']([$constant_int_5, $constant_int_3, $constant_int_4]), $p['list']([$constant_int_6, $constant_int_1, $constant_int_2])), $p['list']([$constant_int_5, $constant_int_3, $constant_int_4])), 'min([5,3,4],[6,1,2])');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMinMax'] = $method;
			$pyjs.track.lineno=58;
			$method = $pyjs__bind_method2('testIterProperty', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,o,$iter1_iter,$iter2_idx,$pyjs_try_err,$pyjs__trackstack_size_2,$iter1_array,$pyjs__trackstack_size_1,y,$iter2_type,tst,$iter2_array,$iter1_idx;
				$pyjs.track={module:'BuiltinTest', lineno:58};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=58;
				$pyjs.track.lineno=59;
				o = $m['C']();
				$pyjs.track.lineno=60;
				tst = $p['list']([]);
				$pyjs.track.lineno=61;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = $p['iter']($p['getattr'](o, 'x'));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					y = $iter1_nextval;
					$pyjs.track.lineno=62;
					tst['append'](y);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=63;
				self['assertTrue'](tst, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=64;
				tst = $p['list']([]);
				$pyjs.track.lineno=65;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=66;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter2_iter = $p['getattr'](o, 'x');
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						y = $iter2_nextval;
						$pyjs.track.lineno=67;
						tst['append'](y);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=68;
					self['assertTrue'](tst, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
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
					$pyjs.track.module='BuiltinTest';
					if (true) {
						$pyjs.track.lineno=70;
						self['fail']('#490 - no function iter.__iter__ not a function');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIterProperty'] = $method;
			$pyjs.track.lineno=73;
			$method = $pyjs__bind_method2('testInt', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$10,$pyjs_try_err,$8,$9,$6,$7,$4,$5,$2,$3,$1;
				$pyjs.track={module:'BuiltinTest', lineno:73};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=73;
				$pyjs.track.lineno=74;
				self['assertEqual']($p['int']('5'), $constant_int_5);
				$pyjs.track.lineno=75;
				self['assertEqual']($p['int']('09'), $constant_int_9);
				$pyjs.track.lineno=76;
				self['assertEqual']($constant_int_6, $constant_int_6);
				$pyjs.track.lineno=77;
				self['assertEqual']($p['int']('0'), $constant_int_0);
				$pyjs.track.lineno=78;
				self['assertEqual']($p['int']($constant_int_0), $constant_int_0);
				$pyjs.track.lineno=79;
				self['assertEqual']($p['int']('-1'), (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				$pyjs.track.lineno=80;
				self['assertEqual']($p['int']('- 2'), (typeof ($usub2=$constant_int_2)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				$pyjs.track.lineno=81;
				self['assertEqual']($p['int'](' - 3'), (typeof ($usub3=$constant_int_3)=='number'?
					-$usub3:
					$p['op_usub']($usub3)));
				$pyjs.track.lineno=83;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=84;
					$p['int']('');
					$pyjs.track.lineno=85;
					self['fail']("No int() argument error raised: int('')");
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=87;
						self['assertEqual']((typeof ($1=e).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_0)), "invalid literal for int() with base 10: ''");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=89;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=90;
					$p['int'](' ');
					$pyjs.track.lineno=91;
					self['fail']("No int() argument error raised: int(' ')");
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=93;
						self['assertEqual']((typeof ($3=e).__array != 'undefined'?
							((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__($constant_int_0)), "invalid literal for int() with base 10: ''");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=95;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=96;
					$p['int']('not int');
					$pyjs.track.lineno=97;
					self['fail']("No int() argument error raised: int('not-int')");
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=99;
						self['assertEqual']((typeof ($5=e).__array != 'undefined'?
							((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
								$5.__getitem__($6)):
								$5.__getitem__($constant_int_0)), "invalid literal for int() with base 10: 'not int'");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=101;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=102;
					$p['int']($constant_int_1, $constant_int_10);
					$pyjs.track.lineno=103;
					self['fail']('No int() argument error raised: int(1, 10)');
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=105;
						self['assertEqual']((typeof ($7=e).__array != 'undefined'?
							((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
								$7.__getitem__($8)):
								$7.__getitem__($constant_int_0)), "int() can't convert non-string with explicit base");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=107;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=108;
					$p['int']('10px');
					$pyjs.track.lineno=109;
					self['fail']("No int() argument error raised: int('10px')");
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=111;
						self['assertEqual']((typeof ($9=e).__array != 'undefined'?
							((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
								$9.__getitem__($10)):
								$9.__getitem__($constant_int_0)), "invalid literal for int() with base 10: '10px'");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInt'] = $method;
			$pyjs.track.lineno=113;
			$method = $pyjs__bind_method2('testFloat', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,e,$11,$12,$13,$pyjs_try_err;
				$pyjs.track={module:'BuiltinTest', lineno:113};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=113;
				$pyjs.track.lineno=114;
				self['assertEqual']($p['float']('5.1'), 5.1);
				$pyjs.track.lineno=115;
				self['assertEqual']($p['float']('09'), $constant_int_9);
				$pyjs.track.lineno=116;
				self['assertEqual'](6.1, 6.1);
				$pyjs.track.lineno=117;
				self['assertEqual']($p['float']('0'), $constant_int_0);
				$pyjs.track.lineno=118;
				self['assertEqual']($p['float']($constant_int_0), $constant_int_0);
				$pyjs.track.lineno=120;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=121;
					$p['float']('not float');
					$pyjs.track.lineno=122;
					self['fail']("No float('not float') argument error raised");
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=124;
						self['assertIn']((typeof ($11=e).__array != 'undefined'?
							((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
								$11.__getitem__($12)):
								$11.__getitem__($constant_int_0)), $p['list'](['invalid literal for float(): not float', 'could not convert string to float: not float']));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=129;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=130;
					$p['float']('');
					$pyjs.track.lineno=131;
					self['fail']("No float('') argument error raised");
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=133;
						self['assertIn']((typeof ($13=e).__array != 'undefined'?
							((typeof $13.__array[$14=$constant_int_0]) != 'undefined'?$13.__array[$14]:
								$13.__getitem__($14)):
								$13.__getitem__($constant_int_0)), $p['list'](['empty string for float()', 'could not convert string to float: ']));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=138;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=139;
					$p['float'](' ');
					$pyjs.track.lineno=140;
					self['fail']("No float(' ') argument error raised");
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=142;
						self['assertIn']((typeof ($15=e).__array != 'undefined'?
							((typeof $15.__array[$16=$constant_int_0]) != 'undefined'?$15.__array[$16]:
								$15.__getitem__($16)):
								$15.__getitem__($constant_int_0)), $p['list'](['empty string for float()', 'could not convert string to float: ']));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=147;
				self['assertTrue']($p['isinstance'](1.0, $p['float']), '1.0 should be instance of float');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFloat'] = $method;
			$pyjs.track.lineno=149;
			$method = $pyjs__bind_method2('testOrdChr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,i,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs.track={module:'BuiltinTest', lineno:149};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=149;
				$pyjs.track.lineno=150;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = $p['range']($constant_int_256);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					$pyjs.track.lineno=151;
					self['assertEqual']($p['ord']($p['chr'](i)), i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOrdChr'] = $method;
			$pyjs.track.lineno=153;
			$method = $pyjs__bind_method2('testMod', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod20,$mod21,$mod22,$mod23,$mod24,$mod25,$mod26,$mod5,$mod4,$mod7,$mod6,$mod1,$mod3,$mod2,$mod9,$mod8,$mod15,$mod14,$mod17,$mod16,$mod11,$mod10,$mod13,$mod12,$mod19,$mod18;
				$pyjs.track={module:'BuiltinTest', lineno:153};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=153;
				$pyjs.track.lineno=154;
				self['assertEqual']((typeof ($mod1=$constant_int_12)==typeof ($mod2=$constant_int_5) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), $constant_int_2);
				$pyjs.track.lineno=155;
				self['assertEqual']((typeof ($mod3=(typeof ($usub4=0.4)=='number'?
					-$usub4:
					$p['op_usub']($usub4)))==typeof ($mod4=$constant_int_1) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), 0.6, 'Modulo error 1 for negative base, bug #473');
				$pyjs.track.lineno=156;
				self['assertEqual']((typeof ($mod5=(typeof ($usub5=0.3)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))==typeof ($mod6=1.0) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)), 0.7);
				$pyjs.track.lineno=157;
				self['assertEqual']((typeof ($mod7=(typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)))==typeof ($mod8=$constant_int_2) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8)), $constant_int_1);
				$pyjs.track.lineno=158;
				self['assertEqual']((typeof ($mod9=(typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7)))==typeof ($mod10=(typeof ($usub8=$constant_int_2)=='number'?
					-$usub8:
					$p['op_usub']($usub8))) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)), (typeof ($usub9=$constant_int_1)=='number'?
					-$usub9:
					$p['op_usub']($usub9)));
				$pyjs.track.lineno=159;
				self['assertEqual']((typeof ($mod11=(typeof ($usub10=$constant_int_1)=='number'?
					-$usub10:
					$p['op_usub']($usub10)))==typeof ($mod12=$constant_long_3) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12)), $constant_long_2);
				$pyjs.track.lineno=160;
				self['assertEqual']((typeof ($mod13=(typeof ($usub11=$constant_int_2)=='number'?
					-$usub11:
					$p['op_usub']($usub11)))==typeof ($mod14=(typeof ($usub12=$constant_long_3)=='number'?
					-$usub12:
					$p['op_usub']($usub12))) && typeof $mod13=='number'?
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
					$p['op_mod']($mod13,$mod14)), (typeof ($usub13=$constant_long_2)=='number'?
					-$usub13:
					$p['op_usub']($usub13)));
				$pyjs.track.lineno=161;
				self['assertEqual']((typeof ($mod15=(typeof ($usub14=$constant_long_1)=='number'?
					-$usub14:
					$p['op_usub']($usub14)))==typeof ($mod16=$constant_int_4) && typeof $mod15=='number'?
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
					$p['op_mod']($mod15,$mod16)), $constant_long_3);
				$pyjs.track.lineno=162;
				self['assertEqual']((typeof ($mod17=(typeof ($usub15=$constant_long_3)=='number'?
					-$usub15:
					$p['op_usub']($usub15)))==typeof ($mod18=(typeof ($usub16=$constant_int_4)=='number'?
					-$usub16:
					$p['op_usub']($usub16))) && typeof $mod17=='number'?
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
					$p['op_mod']($mod17,$mod18)), (typeof ($usub17=$constant_long_3)=='number'?
					-$usub17:
					$p['op_usub']($usub17)));
				$pyjs.track.lineno=163;
				self['assertEqual']((typeof ($mod19=(typeof ($usub18=$constant_long_1)=='number'?
					-$usub18:
					$p['op_usub']($usub18)))==typeof ($mod20=$constant_long_5) && typeof $mod19=='number'?
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
					$p['op_mod']($mod19,$mod20)), $constant_long_4);
				$pyjs.track.lineno=164;
				self['assertEqual']((typeof ($mod21=(typeof ($usub19=$constant_long_4)=='number'?
					-$usub19:
					$p['op_usub']($usub19)))==typeof ($mod22=(typeof ($usub20=$constant_long_5)=='number'?
					-$usub20:
					$p['op_usub']($usub20))) && typeof $mod21=='number'?
					(($mod21=$mod21%$mod22)<0&&$mod22>0?$mod21+$mod22:$mod21):
					$p['op_mod']($mod21,$mod22)), (typeof ($usub21=$constant_long_4)=='number'?
					-$usub21:
					$p['op_usub']($usub21)));
				$pyjs.track.lineno=165;
				self['assertEqual']((typeof ($mod23=(typeof ($usub22=1.0)=='number'?
					-$usub22:
					$p['op_usub']($usub22)))==typeof ($mod24=$constant_int_6) && typeof $mod23=='number'?
					(($mod23=$mod23%$mod24)<0&&$mod24>0?$mod23+$mod24:$mod23):
					$p['op_mod']($mod23,$mod24)), 5.0);
				$pyjs.track.lineno=166;
				self['assertEqual']((typeof ($mod25=(typeof ($usub23=5.0)=='number'?
					-$usub23:
					$p['op_usub']($usub23)))==typeof ($mod26=(typeof ($usub24=$constant_int_6)=='number'?
					-$usub24:
					$p['op_usub']($usub24))) && typeof $mod25=='number'?
					(($mod25=$mod25%$mod26)<0&&$mod26>0?$mod25+$mod26:$mod25):
					$p['op_mod']($mod25,$mod26)), (typeof ($usub25=5.0)=='number'?
					-$usub25:
					$p['op_usub']($usub25)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMod'] = $method;
			$pyjs.track.lineno=168;
			$method = $pyjs__bind_method2('testPower', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pow2,$pow1;
				$pyjs.track={module:'BuiltinTest', lineno:168};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=168;
				$pyjs.track.lineno=169;
				self['assertEqual']((typeof ($pow1=$constant_int_3)==typeof ($pow2=$constant_int_4) && typeof $pow1=='number'?
					Math.pow($pow1,$pow2):
					$p['op_pow']($pow1,$pow2)), $constant_int_81);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPower'] = $method;
			$pyjs.track.lineno=171;
			$method = $pyjs__bind_method2('testPowerfunc', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:171};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=171;
				$pyjs.track.lineno=172;
				self['assertEqual']($p['pow']($constant_int_10, $constant_int_3), $constant_int_1000);
				$pyjs.track.lineno=173;
				self['assertEqual']($p['pow']($constant_int_10, $constant_int_3, $constant_int_7), $constant_int_6);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPowerfunc'] = $method;
			$pyjs.track.lineno=175;
			$method = $pyjs__bind_method2('testHex', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $17,h,$18,$pyjs_try_err,why;
				$pyjs.track={module:'BuiltinTest', lineno:175};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=175;
				$pyjs.track.lineno=176;
				self['assertEqual']($p['hex']($constant_int_23), '0x17');
				$pyjs.track.lineno=177;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=178;
					h = $p['hex'](23.2);
					$pyjs.track.lineno=179;
					self['fail']('No hex() argument error raised');
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						why = $pyjs_try_err;
						$pyjs.track.lineno=181;
						self['assertEqual']((typeof ($17=$p['getattr'](why, 'args')).__array != 'undefined'?
							((typeof $17.__array[$18=$constant_int_0]) != 'undefined'?$17.__array[$18]:
								$17.__getitem__($18)):
								$17.__getitem__($constant_int_0)), "hex() argument can't be converted to hex");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testHex'] = $method;
			$pyjs.track.lineno=183;
			$method = $pyjs__bind_method2('testOct', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,why,o;
				$pyjs.track={module:'BuiltinTest', lineno:183};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=183;
				$pyjs.track.lineno=184;
				self['assertEqual']($p['oct']($constant_int_23), '027');
				$pyjs.track.lineno=185;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=186;
					o = $p['oct'](23.2);
					$pyjs.track.lineno=187;
					self['fail']('No oct() argument error raised');
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						why = $pyjs_try_err;
						$pyjs.track.lineno=189;
						self['assertEqual']($p['str'](why), "oct() argument can't be converted to oct");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOct'] = $method;
			$pyjs.track.lineno=191;
			$method = $pyjs__bind_method2('testRound', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:191};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=191;
				$pyjs.track.lineno=192;
				self['assertEqual']($p['round'](13.12345), 13.0);
				$pyjs.track.lineno=193;
				self['assertEqual']($p['round'](13.12345, $constant_int_3), 13.123);
				$pyjs.track.lineno=194;
				self['assertEqual']($p['round']((typeof ($usub26=13.12345)=='number'?
					-$usub26:
					$p['op_usub']($usub26))), (typeof ($usub27=13.0)=='number'?
					-$usub27:
					$p['op_usub']($usub27)));
				$pyjs.track.lineno=195;
				self['assertEqual']($p['round']((typeof ($usub28=13.12345)=='number'?
					-$usub28:
					$p['op_usub']($usub28)), $constant_int_3), (typeof ($usub29=13.123)=='number'?
					-$usub29:
					$p['op_usub']($usub29)));
				$pyjs.track.lineno=196;
				self['assertEqual']($p['round'](13.62345), 14.0);
				$pyjs.track.lineno=197;
				self['assertEqual']($p['round'](13.62345, $constant_int_3), 13.623);
				$pyjs.track.lineno=198;
				self['assertEqual']($p['round']((typeof ($usub30=13.62345)=='number'?
					-$usub30:
					$p['op_usub']($usub30))), (typeof ($usub31=14.0)=='number'?
					-$usub31:
					$p['op_usub']($usub31)));
				$pyjs.track.lineno=199;
				self['assertEqual']($p['round']((typeof ($usub32=13.62345)=='number'?
					-$usub32:
					$p['op_usub']($usub32)), $constant_int_3), (typeof ($usub33=13.623)=='number'?
					-$usub33:
					$p['op_usub']($usub33)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRound'] = $method;
			$pyjs.track.lineno=201;
			$method = $pyjs__bind_method2('testDivmod', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var q,$cmp2,$cmp1,test_set,p,$21,$iter4_nextval,$22,$19,$sub2,$iter4_idx,y,$20,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,x,$sub1,$iter4_iter,d;
				$pyjs.track={module:'BuiltinTest', lineno:201};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=201;
				$pyjs.track.lineno=202;
				test_set = $p['list']([$p['tuple']([$constant_int_14, $constant_int_3, $constant_int_4, $constant_int_2]), $p['tuple']([14.1, $constant_int_3, 4.0, 2.1]), $p['tuple']([14.1, 3.1, 4.0, 1.7])]);
				$pyjs.track.lineno=206;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = test_set;
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter4_nextval, 4, null);
					x = $tupleassign2[0];
					y = $tupleassign2[1];
					p = $tupleassign2[2];
					q = $tupleassign2[3];
					$pyjs.track.lineno=207;
					d = $p['divmod'](x, y);
					$pyjs.track.lineno=208;
					self['assertEqual']((typeof ($19=d).__array != 'undefined'?
						((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__($constant_int_0)), p);
					$pyjs.track.lineno=209;
					self['assertEqual'](((($cmp1=$p['abs']((typeof ($sub1=(typeof ($21=d).__array != 'undefined'?
						((typeof $21.__array[$22=$constant_int_1]) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__($constant_int_1)))==typeof ($sub2=q) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))))===($cmp2=1e-05)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1), true);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDivmod'] = $method;
			$pyjs.track.lineno=211;
			$method = $pyjs__bind_method2('testFloorDiv', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $floordiv6,$floordiv5,$floordiv4,$floordiv3,$floordiv2,$floordiv1;
				$pyjs.track={module:'BuiltinTest', lineno:211};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=211;
				$pyjs.track.lineno=212;
				self['assertEqual']($constant_int_1, (typeof ($floordiv1=$constant_int_4)==typeof ($floordiv2=$constant_int_3) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math.floor($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2)));
				$pyjs.track.lineno=213;
				self['assertEqual']($constant_int_1, (typeof ($floordiv3=$constant_int_5)==typeof ($floordiv4=$constant_int_3) && typeof $floordiv3=='number' && $floordiv4 !== 0?
					Math.floor($floordiv3/$floordiv4):
					$p['op_floordiv']($floordiv3,$floordiv4)));
				$pyjs.track.lineno=214;
				self['assertEqual']($constant_int_2, (typeof ($floordiv5=$constant_int_6)==typeof ($floordiv6=$constant_int_3) && typeof $floordiv5=='number' && $floordiv6 !== 0?
					Math.floor($floordiv5/$floordiv6):
					$p['op_floordiv']($floordiv5,$floordiv6)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFloorDiv'] = $method;
			$pyjs.track.lineno=216;
			$method = $pyjs__bind_method2('testAll', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:216};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=216;
				$pyjs.track.lineno=217;
				self['assertEqual']($p['all']($p['list']([true, $constant_int_1, 'a'])), true);
				$pyjs.track.lineno=218;
				self['assertEqual']($p['all']($p['list']([true, $constant_int_1, null, 'a'])), false);
				$pyjs.track.lineno=219;
				self['assertEqual']($p['all']($p['list']([true, $constant_int_1, '', 'a'])), false);
				$pyjs.track.lineno=220;
				self['assertEqual']($p['all']($p['list']([true, $constant_int_1, false, 'a'])), false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAll'] = $method;
			$pyjs.track.lineno=222;
			$method = $pyjs__bind_method2('testAny', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:222};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=222;
				$pyjs.track.lineno=223;
				self['assertEqual']($p['any']($p['list']([true, $constant_int_1, 'a'])), true);
				$pyjs.track.lineno=224;
				self['assertEqual']($p['any']($p['list']([true, $constant_int_1, null, 'a'])), true);
				$pyjs.track.lineno=225;
				self['assertEqual']($p['any']($p['list']([true, $constant_int_1, '', 'a'])), true);
				$pyjs.track.lineno=226;
				self['assertEqual']($p['any']($p['list']([true, $constant_int_1, false, 'a'])), true);
				$pyjs.track.lineno=227;
				self['assertEqual']($p['any']($p['list']([false, '', null])), false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAny'] = $method;
			$pyjs.track.lineno=229;
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
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1,i1,t2,t1,l2,l1,d2,d1;
				$pyjs.track={module:'BuiltinTest', lineno:229};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=229;
				$pyjs.track.lineno=230;
				l1 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=231;
				l2 = $p['list'](['a', 'b', 'c']);
				$pyjs.track.lineno=232;
				t1 = $p['tuple']([$constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7]);
				$pyjs.track.lineno=233;
				t2 = $p['tuple'](['aa', 'bb']);
				$pyjs.track.lineno=234;
				d1 = $p['dict']([['a', $constant_int_1], ['b', 'B']]);
				$pyjs.track.lineno=235;
				d2 = $p['dict']([[$constant_int_1, l1], [$constant_int_2, l2], [$constant_int_3, t1], [$constant_int_4, t2], [$constant_int_5, d1]]);
				$pyjs.track.lineno=236;
				i1 = $constant_int_10000;
				$pyjs.track.lineno=237;
				f1 = 1.5;
				$pyjs.track.lineno=238;
				self['assertEqual']($p['repr'](l1), '[1, 2, 3]');
				$pyjs.track.lineno=239;
				self['assertEqual'](l1['__repr__'](), '[1, 2, 3]');
				$pyjs.track.lineno=240;
				self['assertEqual']($p['repr'](l2), "['a', 'b', 'c']");
				$pyjs.track.lineno=241;
				self['assertEqual']($p['repr'](t1), '(4, 5, 6, 7)');
				$pyjs.track.lineno=242;
				self['assertEqual']($p['repr'](t2), "('aa', 'bb')");
				$pyjs.track.lineno=243;
				self['assertEqual']($p['repr'](d1), "{'a': 1, 'b': 'B'}");
				$pyjs.track.lineno=244;
				self['assertEqual']($p['repr'](d2), "{1: [1, 2, 3], 2: ['a', 'b', 'c'], 3: (4, 5, 6, 7), 4: ('aa', 'bb'), 5: {'a': 1, 'b': 'B'}}");
				$pyjs.track.lineno=245;
				self['assertEqual'](d2['__repr__'](), "{1: [1, 2, 3], 2: ['a', 'b', 'c'], 3: (4, 5, 6, 7), 4: ('aa', 'bb'), 5: {'a': 1, 'b': 'B'}}");
				$pyjs.track.lineno=246;
				self['assertEqual']($p['repr'](i1), '10000');
				$pyjs.track.lineno=247;
				self['assertEqual'](i1['__repr__'](), '10000');
				$pyjs.track.lineno=248;
				self['assertEqual']($p['repr'](f1), '1.5');
				$pyjs.track.lineno=249;
				self['assertEqual'](f1['__repr__'](), '1.5', 'float.__repr__() returns type instead of value, bug #487');
				$pyjs.track.lineno=250;
				self['assertEqual']($p['repr'](l1), '[1, 2, 3]');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRepr'] = $method;
			$pyjs.track.lineno=252;
			$method = $pyjs__bind_method2('testIsInstance', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s,Cls;
				$pyjs.track={module:'BuiltinTest', lineno:252};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=252;
				$pyjs.track.lineno=254;
				s = 'hello';
				$pyjs.track.lineno=255;
				self['assertTrue']($p['isinstance'](s, $p['str']), 's is a string');
				$pyjs.track.lineno=256;
				self['assertFalse']($p['isinstance'](s, $p['int']), 's is a string not an integer');
				$pyjs.track.lineno=258;
				s = $constant_int_1;
				$pyjs.track.lineno=259;
				self['assertFalse']($p['isinstance'](s, $p['str']), 's is an integer not a string');
				$pyjs.track.lineno=260;
				self['assertTrue']($p['isinstance'](s, $p['int']), 's is an integer');
				$pyjs.track.lineno=262;
				self['assertFalse']($p['isinstance']('', $p['list']), "'' is not instance of list");
				$pyjs.track.lineno=263;
				self['assertTrue']($p['isinstance']($p['list']([]), $p['list']), '[] is an instance of list');
				$pyjs.track.lineno=265;
				Cls = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'ce745f267f05f4829c02418464a4da11';
					$pyjs.track.lineno=266;
					$pyjs.track.lineno=265;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('Cls', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=267;
				self['assertTrue']($p['isinstance'](Cls, $p['type']), 'Bug #578 classes are instances of type');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsInstance'] = $method;
			$pyjs.track.lineno=269;
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
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var cls1,imports,$pyjs_try_err,overrideme;
				$pyjs.track={module:'BuiltinTest', lineno:269};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=269;
				$pyjs.track.lineno=270;
				self['assertEqual']($m['builtin_value'], null, 'The builtin is loaded before import!');
				$pyjs.track.lineno=271;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=272;
					self['assertEqual']($p['getattr']($m['builtin'], 'value'), $m['builtin']['get_value']());
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
					$pyjs.track.module='BuiltinTest';
					if (true) {
						$pyjs.track.lineno=274;
						self['fail']('Import failed for builtin');
					}
				}
				$pyjs.track.lineno=276;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				overrideme = $p['___import___']('imports.overrideme', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=277;
				cls1 = $m['CLS1']();
				$pyjs.track.lineno=278;
				self['assertTrue']($p['op_is']($m['CLS'], $m['CLS1']), 'CLS is CLS1');
				$pyjs.track.lineno=279;
				self['assertTrue']($p['isinstance'](cls1, $m['CLS']), 'isinstance(cls1, CLS)');
				$pyjs.track.lineno=280;
				self['assertEqual'](overrideme, 'not overridden');
				$pyjs.track.lineno=281;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				imports = $p['___import___']('imports.override', null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=282;
				self['assertEqual'](overrideme, 'not overridden');
				$pyjs.track.lineno=283;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				overrideme = $p['___import___']('imports.overrideme', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=284;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=285;
					self['assertTrue']($p['op_is']($p['getattr'](overrideme, 'overridden'), true), 'overrideme.overridden is True');
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
					$pyjs.track.module='BuiltinTest';
					if (true) {
						$pyjs.track.lineno=287;
						self['fail']("Exception on 'overrideme.overridden is True'");
					}
				}
				$pyjs.track.lineno=289;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				imports = $p['___import___']('imports', null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=290;
				self['assertTrue']($p['op_is']($m['CLS'], $p['getattr']($p['getattr'](imports, 'loccls'), 'CLS')), 'CLS is imports.loccls.CLS');
				$pyjs.track.lineno=291;
				self['assertTrue']($p['op_is']($m['CLS'], $p['getattr']($p['getattr'](imports, 'upcls'), 'CLS')), 'CLS is imports.upcls.CLS');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImport'] = $method;
			$pyjs.track.lineno=293;
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
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dict_bltin,__builtin__,imports_doc,imports_name;
				$pyjs.track={module:'BuiltinTest', lineno:293};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=293;
				$pyjs.track.lineno=295;
				self['fail']('Bug #XXX - from X import .. not completely implemented, only considering modules');
				$pyjs.track.lineno=296;
				$pyjs.track.lineno=296;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
				$pyjs.track.lineno=298;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				imports_doc = $p['___import___']('imports.__doc__', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=299;
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), '__doc__'), imports_doc, 'Module object must have __doc__ attribute');
				$pyjs.track.lineno=300;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				imports_name = $p['___import___']('imports.__name__', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=301;
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), '__name__'), imports_name);
				$pyjs.track.lineno=304;
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_masked'), false, 'from ... import * should respect __all__, #615');
				$pyjs.track.lineno=305;
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_override'), true, 'Should override globals, #615');
				$pyjs.track.lineno=306;
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_import1'), $constant_int_1);
				$pyjs.track.lineno=307;
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_import2'), $constant_int_3);
				$pyjs.track.lineno=308;
				self['assertEqual']($p['getattr']((typeof imports == "undefined"?$m.imports:imports), 'all_import3'), $constant_int_3);
				$pyjs.track.lineno=312;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				__builtin__ = $p['___import___']('__builtin__', null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=313;
				self['assertEqual']($p['getattr'](__builtin__, 'dict'), $p['dict'], '__builtin__.dict != dict');
				$pyjs.track.lineno=315;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				dict_bltin = $p['___import___']('__builtin__.dict', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=316;
				self['assertEqual'](dict_bltin, $p['dict'], '__builtin__.dict != dict');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImport'] = $method;
			$pyjs.track.lineno=319;
			$method = $pyjs__bind_method2('testBitOperations', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4,$sub3,$sub6,$sub5,$sub4;
				$pyjs.track={module:'BuiltinTest', lineno:319};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=319;
				$pyjs.track.lineno=320;
				self['assertEqual']($p['op_bitshiftleft']($constant_int_1,(typeof ($sub3=$constant_int_2)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))), $constant_int_2, 'shift error 1');
				$pyjs.track.lineno=321;
				self['assertEqual']((typeof ($sub5=$p['op_bitshiftleft']($constant_int_1,$constant_int_2))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)), $constant_int_3, 'shift error 2');
				$pyjs.track.lineno=322;
				self['assertEqual']($p['op_bitand2']($constant_int_1, (typeof ($add1=$constant_int_3)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))), $constant_int_0, 'and error 1');
				$pyjs.track.lineno=323;
				self['assertEqual']((typeof ($add3=$p['op_bitand2']($constant_int_1, $constant_int_3))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)), $constant_int_2, 'and error 2');
				$pyjs.track.lineno=324;
				self['assertEqual']($p['op_bitshiftright']($constant_int_4,$constant_int_2), $constant_int_1, 'right shift error 1');
				$pyjs.track.lineno=325;
				self['assertEqual']($p['op_bitshiftright']((typeof ($usub34=$constant_int_4)=='number'?
					-$usub34:
					$p['op_usub']($usub34)),$constant_int_2), (typeof ($usub35=$constant_int_1)=='number'?
					-$usub35:
					$p['op_usub']($usub35)), 'right shift error 2 - bug #341');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBitOperations'] = $method;
			$pyjs.track.lineno=327;
			$method = $pyjs__bind_method2('testLocals', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fn4,fn3,fn2,fn1,la,keys,args,$24,argsreturn,inner_locals,outer_locals,v1,v2,local_vars,t,$len1,$23;
				$pyjs.track={module:'BuiltinTest', lineno:327};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=327;
				$pyjs.track.lineno=328;
				v1 = $constant_int_1;
				$pyjs.track.lineno=329;
				v2 = $constant_int_2;
				$pyjs.track.lineno=331;
				local_vars = $p.dict({'v1': v1,'self': self,'v2': v2});
				$pyjs.track.lineno=332;
				self['assertEqual']((($len1=local_vars) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), $constant_int_3);
				$pyjs.track.lineno=333;
				self['assertEqual']((typeof ($23=local_vars).__array != 'undefined'?
					((typeof $23.__array[$24='v1']) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__('v1')), $constant_int_1);
				$pyjs.track.lineno=335;
				fn1 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,fn2;
					$pyjs.track={module:'BuiltinTest',lineno:335};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=335;
					$pyjs.track.lineno=336;
					a = $constant_int_1;
					$pyjs.track.lineno=337;
					fn2 = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
						var c,b;
						$pyjs.track={module:'BuiltinTest',lineno:337};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=337;
						$pyjs.track.lineno=338;
						b = $constant_int_1;
						$pyjs.track.lineno=339;
						c = $p.dict({'b': b});
						$pyjs.track.lineno=340;
						$pyjs.track.lineno=340;
						var $pyjs__ret = c;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					};
					fn2.__name__ = 'fn2';

					fn2.__bind_type__ = 0;
					fn2.__args__ = [null,null];
					$pyjs.track.lineno=341;
					$pyjs.track.lineno=341;
					var $pyjs__ret = fn2();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn1.__name__ = 'fn1';

				fn1.__bind_type__ = 0;
				fn1.__args__ = [null,null];
				$pyjs.track.lineno=343;
				local_vars = fn1();
				$pyjs.track.lineno=344;
				self['assertEqual'](local_vars, $p['dict']([['b', $constant_int_1]]));
				$pyjs.track.lineno=346;
				fn2 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var g,lx;
					$pyjs.track={module:'BuiltinTest',lineno:346};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=346;
					$pyjs.track.lineno=347;
					lx = $constant_int_3;
					$pyjs.track.lineno=348;
					g = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
						var li;
						$pyjs.track={module:'BuiltinTest',lineno:348};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=348;
						$pyjs.track.lineno=349;
						li = lx;
						$pyjs.track.lineno=350;
						$pyjs.track.lineno=350;
						var $pyjs__ret = $p.dict({'li': li});
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					};
					g.__name__ = 'g';

					g.__bind_type__ = 0;
					g.__args__ = [null,null];
					$pyjs.track.lineno=351;
					$pyjs.track.lineno=351;
					var $pyjs__ret = g();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn2.__name__ = 'fn2';

				fn2.__bind_type__ = 0;
				fn2.__args__ = [null,null];
				$pyjs.track.lineno=352;
				self['assertEqual'](fn2(), $p['dict']([['li', $constant_int_3], ['lx', $constant_int_3]]), 'locals() bugs: #589');
				$pyjs.track.lineno=354;
				fn3 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var g,lx;
					$pyjs.track={module:'BuiltinTest',lineno:354};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=354;
					$pyjs.track.lineno=355;
					lx = $constant_int_3;
					$pyjs.track.lineno=356;
					g = function() {
						if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
						var lh;
						$pyjs.track={module:'BuiltinTest',lineno:356};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=356;
						$pyjs.track.lineno=357;
						lh = function() {
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
							var li;
							$pyjs.track={module:'BuiltinTest',lineno:357};$pyjs.trackstack.push($pyjs.track);
							$pyjs.track.module='BuiltinTest';
							$pyjs.track.lineno=357;
							$pyjs.track.lineno=358;
							li = lx;
							$pyjs.track.lineno=359;
							$pyjs.track.lineno=359;
							var $pyjs__ret = $p.dict({'li': li});
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						};
						lh.__name__ = 'lh';

						lh.__bind_type__ = 0;
						lh.__args__ = [null,null];
						$pyjs.track.lineno=360;
						$pyjs.track.lineno=360;
						var $pyjs__ret = $p['tuple']([$p.dict({'lh': lh}), lh()]);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					};
					g.__name__ = 'g';

					g.__bind_type__ = 0;
					g.__args__ = [null,null];
					$pyjs.track.lineno=361;
					$pyjs.track.lineno=361;
					var $pyjs__ret = g();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn3.__name__ = 'fn3';

				fn3.__bind_type__ = 0;
				fn3.__args__ = [null,null];
				$pyjs.track.lineno=362;
				var $tupleassign3 = $p['__ass_unpack'](fn3(), 2, null);
				outer_locals = $tupleassign3[0];
				inner_locals = $tupleassign3[1];
				$pyjs.track.lineno=363;
				self['assertEqual'](inner_locals, $p['dict']([['li', $constant_int_3], ['lx', $constant_int_3]]), 'locals() bugs: #589');
				$pyjs.track.lineno=364;
				keys = outer_locals['keys']();
				$pyjs.track.lineno=365;
				keys['sort']();
				$pyjs.track.lineno=366;
				self['assertEqual'](keys, $p['list'](['lh', 'lx']), 'locals() bugs: #589');
				$pyjs.track.lineno=368;
				fn4 = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'BuiltinTest',lineno:368};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=368;
					$pyjs.track.lineno=369;
					$m['X'] = (function(){
						var $cls_definition = new Object();
						var $method;
						$cls_definition.__module__ = 'BuiltinTest';
						$cls_definition.__md5__ = '90cf3c7319c973772f9743e9e182253c';
						$pyjs.track.lineno=370;
						$cls_definition['x'] = $constant_int_12;
						$pyjs.track.lineno=371;
						$method = $pyjs__bind_method2('fn4', function() {
							if (this.__is_instance__ === true) {
								var self = this;
								if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
							} else {
								var self = arguments[0];
								if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
								if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
							}
							if ($pyjs.options.arg_instance_type) {
								if (self.prototype.__md5__ !== '90cf3c7319c973772f9743e9e182253c') {
									if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
										$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
									}
								}
							}

							$pyjs.track={module:'BuiltinTest', lineno:371};$pyjs.trackstack.push($pyjs.track);
							$pyjs.track.module='BuiltinTest';
							$pyjs.track.lineno=371;
							$pyjs.track.lineno=372;
							$pyjs.track.lineno=372;
							var $pyjs__ret = x;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						}
	, 1, [null,null,['self']]);
						$cls_definition['fn4'] = $method;
						$pyjs.track.lineno=373;
						$p.dict({'x': $cls_definition['x'],'fn4': $p['staticmethod']($cls_definition['fn4'])});
						$pyjs.track.lineno=369;
						var $bases = new Array(pyjslib.object);
						var $data = $p['dict']();
						for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
						return $p['_create_class']('X', $p['tuple']($bases), $data);
					})();
					$pyjs.track.lineno=374;
					$pyjs.track.lineno=374;
					var $pyjs__ret = $m['X'];
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn4.__name__ = 'fn4';

				fn4.__bind_type__ = 0;
				fn4.__args__ = [null,null,['x']];
				$pyjs.track.lineno=375;
				self['assertEqual']($p['getattr'](fn4($constant_int_1), 'x'), $constant_int_12);
				$pyjs.track.lineno=377;
				args = $p['dict']([['test1', $constant_int_5], ['test2', 'hello']]);
				$pyjs.track.lineno=378;
				la = $m['LocalsTest']();
				$pyjs.track.lineno=379;
				argsreturn = $pyjs_kwargs_call(la, 'testkwargs', null, args, [{}]);
				$pyjs.track.lineno=380;
				args.__setitem__('self', la);
				$pyjs.track.lineno=381;
				self['assertEqual'](args, argsreturn);
				$pyjs.track.lineno=383;
				args.__delitem__('self');
				$pyjs.track.lineno=384;
				argsreturn = $pyjs_kwargs_call(la, 'testargs', null, args, [{}]);
				$pyjs.track.lineno=385;
				args.__setitem__('self', la);
				$pyjs.track.lineno=386;
				self['assertEqual'](args, argsreturn);
				$pyjs.track.lineno=388;
				t = $m['ColourThing']();
				$pyjs.track.lineno=389;
				t.__is_instance__ && typeof t.__setattr__ == 'function' ? t.__setattr__('rgb', $constant_int_1) : $p['setattr'](t, 'rgb', $constant_int_1); 
				$pyjs.track.lineno=390;
				self['assertEqual']($p['getattr'](t, 'rgb'), $constant_int_1);
				$pyjs.track.lineno=392;
				args = $m['foo']($constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4);
				$pyjs.track.lineno=393;
				self['assertEqual'](args, $p['dict']([['_some', $constant_int_0], ['_additional', $constant_int_5], ['_of', $constant_int_3], ['_list', $constant_int_2], ['_long', $constant_int_1], ['_arguments', $constant_int_4]]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLocals'] = $method;
			$pyjs.track.lineno=397;
			$method = $pyjs__bind_method2('testIfExp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3,$bool6,$bool4,$bool5,$$var;
				$pyjs.track={module:'BuiltinTest', lineno:397};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=397;
				$pyjs.track.lineno=398;
				$$var = ((($bool2=true) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($constant_int_1) : ($constant_int_0));
				$pyjs.track.lineno=399;
				self['assertEqual']($$var, $constant_int_1);
				$pyjs.track.lineno=400;
				$$var = ((($bool3=false) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($constant_int_1) : ($constant_int_0));
				$pyjs.track.lineno=401;
				self['assertEqual']($$var, $constant_int_0);
				$pyjs.track.lineno=402;
				$$var = ((($bool4=$p['list']([])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($constant_int_1) : ($constant_int_0));
				$pyjs.track.lineno=403;
				self['assertEqual']($$var, $constant_int_0);
				$pyjs.track.lineno=404;
				$$var = ((($bool6=!(($bool5=$p['list']([])) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						 true ) )? ($constant_int_1) : ($constant_int_0));
				$pyjs.track.lineno=405;
				self['assertEqual']($$var, $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIfExp'] = $method;
			$pyjs.track.lineno=407;
			$method = $pyjs__bind_method2('testRange', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r;
				$pyjs.track={module:'BuiltinTest', lineno:407};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=407;
				$pyjs.track.lineno=408;
				r = $p['range']($constant_int_3);
				$pyjs.track.lineno=409;
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2]));
				$pyjs.track.lineno=410;
				r = $p['range']($constant_int_2, $constant_int_5);
				$pyjs.track.lineno=411;
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_3, $constant_int_4]));
				$pyjs.track.lineno=412;
				r = $p['range']($constant_int_2, $constant_int_15, $constant_int_3);
				$pyjs.track.lineno=413;
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_5, $constant_int_8, $constant_int_11, $constant_int_14]));
				$pyjs.track.lineno=414;
				r = $p['range']($constant_int_15, $constant_int_2, (typeof ($usub36=$constant_int_3)=='number'?
					-$usub36:
					$p['op_usub']($usub36)));
				$pyjs.track.lineno=415;
				self['assertEqual'](r, $p['list']([$constant_int_15, $constant_int_12, $constant_int_9, $constant_int_6, $constant_int_3]));
				$pyjs.track.lineno=416;
				r = $p['range']($constant_int_15, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=417;
				self['assertEqual'](r, $p['list']([]));
				$pyjs.track.lineno=418;
				r = $p['range']((typeof ($usub37=$constant_int_6)=='number'?
					-$usub37:
					$p['op_usub']($usub37)), (typeof ($usub38=$constant_int_2)=='number'?
					-$usub38:
					$p['op_usub']($usub38)), (typeof ($usub39=$constant_int_1)=='number'?
					-$usub39:
					$p['op_usub']($usub39)));
				$pyjs.track.lineno=419;
				self['assertEqual'](r, $p['list']([]));
				$pyjs.track.lineno=420;
				r = $p['range']($constant_int_2, $constant_int_1, $constant_int_2);
				$pyjs.track.lineno=421;
				self['assertEqual'](r, $p['list']([]));
				$pyjs.track.lineno=422;
				r = $p['range']($constant_int_0, $constant_int_2, $constant_int_2);
				$pyjs.track.lineno=423;
				self['assertEqual'](r, $p['list']([$constant_int_0]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRange'] = $method;
			$pyjs.track.lineno=425;
			$method = $pyjs__bind_method2('testXRange', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r;
				$pyjs.track={module:'BuiltinTest', lineno:425};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=425;
				$pyjs.track.lineno=426;
				r = function(){
					var $iter5_nextval,i,$iter5_idx,$pyjs__trackstack_size_1,$collcomp1,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = $p['xrange']($constant_int_3);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					$collcomp1['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';

	return $collcomp1;}();
				$pyjs.track.lineno=427;
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2]));
				$pyjs.track.lineno=428;
				r = function(){
					var $iter6_idx,$iter6_type,$collcomp2,i,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = $p['xrange']($constant_int_2, $constant_int_5);
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					$collcomp2['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';

	return $collcomp2;}();
				$pyjs.track.lineno=429;
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_3, $constant_int_4]));
				$pyjs.track.lineno=430;
				r = function(){
					var $iter7_nextval,i,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
	$collcomp3 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = $p['xrange']($constant_int_2, $constant_int_15, $constant_int_3);
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					i = $iter7_nextval;
					$collcomp3['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';

	return $collcomp3;}();
				$pyjs.track.lineno=431;
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_5, $constant_int_8, $constant_int_11, $constant_int_14]));
				$pyjs.track.lineno=432;
				r = function(){
					var $iter8_idx,i,$iter8_type,$collcomp4,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1;
	$collcomp4 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter8_iter = $p['xrange']($constant_int_15, $constant_int_2, (typeof ($usub40=$constant_int_3)=='number'?
					-$usub40:
					$p['op_usub']($usub40)));
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					i = $iter8_nextval;
					$collcomp4['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';

	return $collcomp4;}();
				$pyjs.track.lineno=433;
				self['assertEqual'](r, $p['list']([$constant_int_15, $constant_int_12, $constant_int_9, $constant_int_6, $constant_int_3]));
				$pyjs.track.lineno=434;
				r = function(){
					var $iter9_iter,i,$collcomp5,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs__trackstack_size_1,$iter9_array;
	$collcomp5 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter9_iter = $p['xrange']($constant_int_15, $constant_int_2, $constant_int_3);
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					$collcomp5['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';

	return $collcomp5;}();
				$pyjs.track.lineno=435;
				self['assertEqual'](r, $p['list']([]));
				$pyjs.track.lineno=436;
				r = function(){
					var $iter10_nextval,i,$collcomp6,$iter10_idx,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter;
	$collcomp6 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter10_iter = $p['xrange']((typeof ($usub41=$constant_int_6)=='number'?
					-$usub41:
					$p['op_usub']($usub41)), (typeof ($usub42=$constant_int_2)=='number'?
					-$usub42:
					$p['op_usub']($usub42)), (typeof ($usub43=$constant_int_1)=='number'?
					-$usub43:
					$p['op_usub']($usub43)));
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					i = $iter10_nextval;
					$collcomp6['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';

	return $collcomp6;}();
				$pyjs.track.lineno=437;
				self['assertEqual'](r, $p['list']([]));
				$pyjs.track.lineno=438;
				self['assertEqual']($p['str']($p['xrange']($constant_int_3)), 'xrange(3)');
				$pyjs.track.lineno=439;
				self['assertEqual']($p['str']($p['xrange']($constant_int_3, $constant_int_4)), 'xrange(3, 4)');
				$pyjs.track.lineno=440;
				self['assertEqual']($p['str']($p['xrange']($constant_int_3, $constant_int_4, $constant_int_5)), 'xrange(3, 8, 5)');
				$pyjs.track.lineno=441;
				self['assertEqual']($p['str']($p['xrange']($constant_int_14, $constant_int_3, (typeof ($usub44=$constant_int_5)=='number'?
					-$usub44:
					$p['op_usub']($usub44)))), 'xrange(14, -1, -5)');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testXRange'] = $method;
			$pyjs.track.lineno=443;
			$method = $pyjs__bind_method2('testForLoop', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter17_type,$iter20_array,$iter14_idx,$iter11_idx,$iter13_array,$iter16_test,$iter17_nextval,$iter20_iter,$iter14_array,$iter12_array,$iter11_array,X,$iter13_nextval,d,$iter18_array,l,$iter15_idx,$iter21_type,$iter20_idx,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,x,$iter22_array,$iter18_iter,$iter16_idx,$iter15_iter,$iter19_nextval,$iter16_nextval,$iter22_iter,$iter14_type,$iter11_iter,$add5,$iter22_nextval,$iter19_array,$iter21_iter,c,$iter19_idx,$iter13_iter,$iter11_type,$iter22_idx,$iter19_type,$iter12_idx,$iter12_nextval,$iter13_idx,$iter19_iter,$iter13_type,$iter18_type,$iter16_array,$iter21_nextval,$iter20_type,$mul4,$mul3,$mul2,$mul1,$iter14_nextval,b,$iter12_iter,$add6,$add7,$iter15_type,$iter17_idx,$add8,$iter14_test,$iter20_nextval,$iter22_type,$iter16_iter,$iter17_iter,$iter16_type,$iter18_idx,$pyjs_try_err,$iter18_nextval,$iter21_idx,$iter15_nextval,$iter15_test,$iter15_array,$iter17_array,$iter14_iter,$iter11_nextval,a,e,i,$iter12_type,$iter21_array,n1,n2;
				$pyjs.track={module:'BuiltinTest', lineno:443};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=443;
				$pyjs.track.lineno=444;
				n1 = $constant_int_0;
				$pyjs.track.lineno=445;
				n2 = $constant_int_0;
				$pyjs.track.lineno=446;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter11_iter = $p['range']($constant_int_10);
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					i = $iter11_nextval;
					$pyjs.track.lineno=447;
					n1 = (typeof ($add5=n1)==typeof ($add6=i) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
					$pyjs.track.lineno=448;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter12_iter = $p['xrange']($constant_int_4);
					if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
						$iter12_type = 0;
					} else {
						$iter12_iter = $iter12_iter.__iter__();
						$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter12_idx = 0;
					while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
						i = $iter12_nextval;
						$pyjs.track.lineno=449;
						n2 = (typeof ($add7=n2)==typeof ($add8=i) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='BuiltinTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=450;
				self['assertEqual'](n1, $constant_int_45);
				$pyjs.track.lineno=451;
				self['assertEqual'](n2, $constant_int_60);
				$pyjs.track.lineno=452;
				self['assertEqual'](i, $constant_int_3);
				$pyjs.track.lineno=454;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=455;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter13_iter = $p['xrange']($constant_int_4);
					if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
						$iter13_type = 0;
					} else {
						$iter13_iter = $iter13_iter.__iter__();
						$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter13_idx = 0;
					while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
						i = $iter13_nextval;
						$pyjs.track.lineno=456;
						$pyjs.__active_exception_stack__ = null;
						throw ($p['StopIteration']);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=457;
					self['fail']('Failed to raise StopIteration');
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=459;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=460;
				self['assertEqual'](i, $constant_int_0);
				$pyjs.track.lineno=462;
				e = $constant_int_0;
				$pyjs.track.lineno=463;
				i = (typeof ($usub45=$constant_int_1)=='number'?
					-$usub45:
					$p['op_usub']($usub45));
				$pyjs.track.lineno=464;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter14_iter = $p['range']($constant_int_1);
				if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter.__iter__();
					$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while ($iter14_test = typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
					$pyjs.track.lineno=465;
				}
				if (!$iter14_test) {
					$pyjs.track.lineno=467;
					e = $constant_int_1;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=468;
				self['assertEqual'](i, $constant_int_0);
				$pyjs.track.lineno=469;
				self['assertEqual'](e, $constant_int_1);
				$pyjs.track.lineno=471;
				e = $constant_int_0;
				$pyjs.track.lineno=472;
				i = (typeof ($usub46=$constant_int_1)=='number'?
					-$usub46:
					$p['op_usub']($usub46));
				$pyjs.track.lineno=473;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter15_iter = $p['range']($constant_int_0);
				if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter.__iter__();
					$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while ($iter15_test = typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					i = $iter15_nextval;
					$pyjs.track.lineno=474;
				}
				if (!$iter15_test) {
					$pyjs.track.lineno=476;
					e = $constant_int_1;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=477;
				self['assertEqual'](i, (typeof ($usub47=$constant_int_1)=='number'?
					-$usub47:
					$p['op_usub']($usub47)));
				$pyjs.track.lineno=478;
				self['assertEqual'](e, $constant_int_1, 'bug #316 for X in Y:... else ...');
				$pyjs.track.lineno=480;
				e = $constant_int_0;
				$pyjs.track.lineno=481;
				i = (typeof ($usub48=$constant_int_1)=='number'?
					-$usub48:
					$p['op_usub']($usub48));
				$pyjs.track.lineno=482;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter16_iter = $p['range']($constant_int_1);
				if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter.__iter__();
					$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while ($iter16_test = typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					i = $iter16_nextval;
					$pyjs.track.lineno=483;
					e = $constant_int_1;
					$pyjs.track.lineno=484;
					break;
				}
				if (!$iter16_test) {
					$pyjs.track.lineno=486;
					e = $constant_int_2;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=487;
				self['assertEqual'](i, $constant_int_0);
				$pyjs.track.lineno=488;
				self['assertEqual'](e, $constant_int_1);
				$pyjs.track.lineno=490;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '4a8702b516c4202a996fe8716388ff38';
					$pyjs.track.lineno=491;
					$pyjs.track.lineno=490;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=492;
				x = X();
				$pyjs.track.lineno=493;
				x.__is_instance__ && typeof x.__setattr__ == 'function' ? x.__setattr__('a', $constant_int_1) : $p['setattr'](x, 'a', $constant_int_1); 
				$pyjs.track.lineno=494;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter17_iter = $p['list']([$constant_int_3, $constant_int_4, $constant_int_5]);
				if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
					$iter17_type = 0;
				} else {
					$iter17_iter = $iter17_iter.__iter__();
					$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter17_idx = 0;
				while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
					x.__is_instance__ && typeof x.__setattr__ == 'function' ? x.__setattr__('a', $iter17_nextval) : $p['setattr'](x, 'a', $iter17_nextval); 
					$pyjs.track.lineno=495;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=496;
				self['assertEqual']($p['getattr'](x, 'a'), $constant_int_5);
				$pyjs.track.lineno=498;
				d = $p['dict']([]);
				$pyjs.track.lineno=499;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter18_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter.__iter__();
					$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					d.__setitem__('zz', $iter18_nextval);
					$pyjs.track.lineno=500;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=501;
				self['assertEqual'](d, $p['dict']([['zz', $constant_int_3]]));
				$pyjs.track.lineno=503;
				l = $p['list']([$constant_int_1]);
				$pyjs.track.lineno=504;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter19_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
					$iter19_type = 0;
				} else {
					$iter19_iter = $iter19_iter.__iter__();
					$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter19_idx = 0;
				while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
					l.__setitem__($constant_int_0, $iter19_nextval);
					$pyjs.track.lineno=505;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=506;
				self['assertEqual'](l, $p['list']([$constant_int_3]));
				$pyjs.track.lineno=508;
				l = $p['list']([$constant_int_1, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=509;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter20_iter = $p['list']([$p['list']([$constant_int_5, $constant_int_6, $constant_int_7])]);
				if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter.__iter__();
					$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
					$p['__setslice'](l, $constant_int_1, $constant_int_2, $iter20_nextval);
					$pyjs.track.lineno=510;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=511;
				self['assertEqual'](l, $p['list']([$constant_int_1, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_4]));
				$pyjs.track.lineno=513;
				x = $p['tuple']([$p['tuple']([$constant_int_1, $constant_int_2]), $constant_int_3, $p['tuple']([$constant_int_4, $constant_int_5])]);
				$pyjs.track.lineno=514;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter21_iter = (typeof ($mul1=$p['list']([x]))==typeof ($mul2=$constant_int_5) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				if (typeof ($iter21_array = $iter21_iter.__array) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter.__iter__();
					$iter21_type = typeof ($iter21_array = $iter21_iter.__array) != 'undefined'? 0 : (typeof $iter21_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter21_nextval, 3, null);
					var $tupleassign5 = $p['__ass_unpack']($tupleassign4[0], 2, null);
					a = $tupleassign5[0];
					b = $tupleassign5[1];
					c = $tupleassign4[1];
					var $tupleassign6 = $p['__ass_unpack']($tupleassign4[2], 2, null);
					d = $tupleassign6[0];
					e = $tupleassign6[1];
					$pyjs.track.lineno=515;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=516;
				self['assertEqual']($p['list']([a, b, c, d, e]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]));
				$pyjs.track.lineno=518;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter22_iter = (typeof ($mul3=$p['list']([x]))==typeof ($mul4=$constant_int_5) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
				if (typeof ($iter22_array = $iter22_iter.__array) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter.__iter__();
					$iter22_type = typeof ($iter22_array = $iter22_iter.__array) != 'undefined'? 0 : (typeof $iter22_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
					var $tupleassign7 = $p['__ass_unpack']($iter22_nextval, 3, null);
					var $tupleassign8 = $p['__ass_unpack']($tupleassign7[0], 2, null);
					a = $tupleassign8[0];
					b = $tupleassign8[1];
					c = $tupleassign7[1];
					var $tupleassign9 = $p['__ass_unpack']($tupleassign7[2], 2, null);
					d = $tupleassign9[0];
					e = $tupleassign9[1];
					$pyjs.track.lineno=519;
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=520;
				self['assertEqual']($p['list']([a, b, c, d, e]), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testForLoop'] = $method;
			$pyjs.track.lineno=522;
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
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len2,$iter23_type,$iter23_nextval,$cmp3,$cmp4,i,res,j,$iter23_iter,$pyjs_try_err,$iter23_array,$iter23_idx,$pyjs__trackstack_size_2,$bool8;
				$pyjs.track={module:'BuiltinTest', lineno:522};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=522;
				$pyjs.track.lineno=524;
				i = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '1e14e93d9c6c7a069cde3ffded7f13fa';
					$pyjs.track.lineno=525;
					$method = $pyjs__bind_method2('__init__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '1e14e93d9c6c7a069cde3ffded7f13fa') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:525};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=525;
						$pyjs.track.lineno=526;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('idx', $constant_int_0) : $p['setattr'](self, 'idx', $constant_int_0); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=528;
					$method = $pyjs__bind_method2('__iter__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '1e14e93d9c6c7a069cde3ffded7f13fa') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:528};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=528;
						$pyjs.track.lineno=529;
						$pyjs.track.lineno=529;
						var $pyjs__ret = self;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['__iter__'] = $method;
					$pyjs.track.lineno=531;
					$method = $pyjs__bind_method2('next', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '1e14e93d9c6c7a069cde3ffded7f13fa') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add9,$add10,$bool7;
						$pyjs.track={module:'BuiltinTest', lineno:531};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=531;
						$pyjs.track.lineno=532;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('idx', (typeof ($add9=$p['getattr'](self, 'idx'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10))) : $p['setattr'](self, 'idx', (typeof ($add9=$p['getattr'](self, 'idx'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10))); 
						$pyjs.track.lineno=533;
						if ((($bool7=$p['op_eq']($p['getattr'](self, 'idx'), $constant_int_5)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
								false :
								(typeof $bool7=='object'?
									(typeof $bool7.__nonzero__=='function'?
										$bool7.__nonzero__() :
										(typeof $bool7.__len__=='function'?
											($bool7.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=534;
							$pyjs.__active_exception_stack__ = null;
							throw ($p['StopIteration']);
						}
						$pyjs.track.lineno=535;
						$pyjs.track.lineno=535;
						var $pyjs__ret = $p['getattr'](self, 'idx');
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['next'] = $method;
					$pyjs.track.lineno=524;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('i', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=538;
				res = $p['list']([]);
				$pyjs.track.lineno=539;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=540;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter23_iter = i();
					if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
						$iter23_type = 0;
					} else {
						$iter23_iter = $iter23_iter.__iter__();
						$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter23_idx = 0;
					while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
						j = $iter23_nextval;
						$pyjs.track.lineno=541;
						res['append'](j);
						$pyjs.track.lineno=542;
						if ((($bool8=((($cmp3=(($len2=res) === null?$constant_int_0:
							(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
								(typeof $len2.__len__ == 'function'?$len2.__len__():
									(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
										$p['len']($len2))))))===($cmp4=$constant_int_5)?0:
							(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
								($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
								$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
							$pyjs.track.lineno=543;
							self['fail']('too many items in user-defined iterator');
							$pyjs.track.lineno=544;
							break;
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='BuiltinTest';
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
					$pyjs.track.module='BuiltinTest';
					if (true) {
						$pyjs.track.lineno=546;
						self['fail']('error in user-defined iterator (caught here so tests can proceed)');
					}
				}
				$pyjs.track.lineno=548;
				self['assertEqual'](res, $p['range']($constant_int_1, $constant_int_5));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter'] = $method;
			$pyjs.track.lineno=550;
			$method = $pyjs__bind_method2('testSorted', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var lst2,lst1;
				$pyjs.track={module:'BuiltinTest', lineno:550};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=550;
				$pyjs.track.lineno=551;
				lst1 = $p['range']($constant_int_10);
				$pyjs.track.lineno=552;
				lst2 = $p['range']($constant_int_10);
				$pyjs.track.lineno=553;
				lst2['reverse']();
				$pyjs.track.lineno=554;
				self['assertTrue']($p['op_eq'](lst1, $p['sorted'](lst2)), 'lst1 == sorted(lst2)');
				$pyjs.track.lineno=556;
				self['assertTrue']($p['op_eq'](lst1, $p['sorted']($p['xrange']($constant_int_10))), 'lst1 == sorted(xrange(1))');
				$pyjs.track.lineno=557;
				self['assertTrue']($p['op_eq'](lst2, $pyjs_kwargs_call(null, $p['sorted'], null, null, [{reverse:true}, $p['xrange']($constant_int_10)])), 'lst2 == sorted(xrange(10), reverse=True)');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSorted'] = $method;
			$pyjs.track.lineno=559;
			$method = $pyjs__bind_method2('testReversed', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dict1,lst2,lst1,tpl1;
				$pyjs.track={module:'BuiltinTest', lineno:559};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=559;
				$pyjs.track.lineno=560;
				lst1 = $p['range']($constant_int_10);
				$pyjs.track.lineno=561;
				lst2 = $p['range']($constant_int_10);
				$pyjs.track.lineno=562;
				lst2['reverse']();
				$pyjs.track.lineno=563;
				tpl1 = $p['tuple'](lst1);
				$pyjs.track.lineno=564;
				self['assertTrue']($p['op_eq'](lst1, $p['list']($p['reversed'](lst2))), 'lst1 == reversed(lst2)');
				$pyjs.track.lineno=565;
				self['assertTrue']($p['op_eq'](lst2, $p['list']($p['reversed']($p['xrange']($constant_int_10)))), 'lst2 == reversed(xrange(10), reverse=True)');
				$pyjs.track.lineno=566;
				self['assertTrue']($p['op_eq'](lst2, $p['list']($p['reversed'](tpl1))), 'lst1 == reversed(tpl1)');
				$pyjs.track.lineno=567;
				dict1 = $p['dict']([['a', 'A'], ['b', 'B']]);
				$pyjs.track.lineno=568;
				self['assertRaises']($p['TypeError'], $p['reversed'], dict1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReversed'] = $method;
			$pyjs.track.lineno=570;
			$method = $pyjs__bind_method2('testType', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,why,$add12,$add11;
				$pyjs.track={module:'BuiltinTest', lineno:570};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=570;
				$pyjs.track.lineno=571;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=572;
					self['assertTrue']($p['op_is']($p['type']($p['object']), $p['type']));
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
					$pyjs.track.module='BuiltinTest';
					if (($pyjs_try_err_name == $p['NotImplementedError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
						why = $pyjs_try_err;
						$pyjs.track.lineno=574;
						self['fail']((typeof ($add11='Bug #229')==typeof ($add12=$p['str'](why)) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12)));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=575;
				self['assertTrue']($p['op_is']($p['type']($p['list']([])), $p['type']($p['list']([]))));
				$pyjs.track.lineno=576;
				self['assertTrue']($p['op_is']($p['type']($p['list']([])), $p['list']));
				$pyjs.track.lineno=577;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=578;
					self['assertTrue']($p['op_eq']($p['type']($p['list']([])), $p['list']));
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
					$pyjs.track.module='BuiltinTest';
					if (true) {
						$pyjs.track.lineno=580;
						self['fail']('Bug #515');
					}
				}
				$pyjs.track.lineno=581;
				self['assertTrue']($p['op_is']($p['type'](''), $p['str']), 'str');
				$pyjs.track.lineno=582;
				self['assertTrue']($p['op_is']($p['type'](true), $p['bool']), 'bool');
				$pyjs.track.lineno=583;
				self['assertTrue']($p['op_is']($p['type']($constant_int_1), $p['int']), 'int');
				$pyjs.track.lineno=584;
				self['assertTrue']($p['op_is']($p['type']($constant_long_1), $p['long']), 'long');
				$pyjs.track.lineno=585;
				self['assertTrue']($p['op_is']($p['type'](1.1), $p['float']), 'float 1.1');
				$pyjs.track.lineno=586;
				self['assertTrue']($p['op_is']($p['type'](1.0), $p['float']), 'float 1.0 issue #524');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testType'] = $method;
			$pyjs.track.lineno=588;
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
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var g,lst,fn,G;
				$pyjs.track={module:'BuiltinTest', lineno:588};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=588;
				$pyjs.track.lineno=589;
				G = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '0334d8912fe29f0351e3336b2ede1c6b';
					$pyjs.track.lineno=590;
					$method = $pyjs__bind_method2('__getitem__', function(i) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							i = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '0334d8912fe29f0351e3336b2ede1c6b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $cmp5,$cmp7,$cmp6,$cmp8,$bool9;
						$pyjs.track={module:'BuiltinTest', lineno:590};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=590;
						$pyjs.track.lineno=591;
						if ((($bool9=(((($cmp5=$constant_int_0)===($cmp6=($compare1 = i))?0:
							(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
								($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
								$p['cmp']($cmp5, $cmp6))) < 1)&&((($cmp7=$compare1)===($cmp8=($compare2 = $constant_int_4))?0:
							(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
								($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
								$p['cmp']($cmp7, $cmp8))) < 1))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
							$pyjs.track.lineno=592;
							$pyjs.track.lineno=592;
							var $pyjs__ret = i;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						}
						$pyjs.track.lineno=593;
						$pyjs.__active_exception_stack__ = null;
						throw ($p['IndexError']('index out of range'));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['i']]);
					$cls_definition['__getitem__'] = $method;
					$pyjs.track.lineno=589;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('G', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=594;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $iter24_idx,i,$iter25_array,$iter25_nextval,$iter25_iter,$iter24_type,$iter24_array,$iter25_idx,$pyjs__trackstack_size_1,$iter25_type,$iter24_iter,$iter24_nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					var $pyjs__trackstack_size_0 = $pyjs.trackstack.length;
						var $res;
						$yield_value = $exc = null;
						try {
							$res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res == 'undefined') {
								if (noStop === true) {
									$generator_state[0] = -1;
									return;
								}
								throw $p['StopIteration']();
							}
						} catch (e) {
										sys.save_exception_stack();
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_0) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_0);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='BuiltinTest';
							$is_executing=false;
							$generator_state[0] = -1;
							if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
								return;
							}
							throw e;
						}
						return $res;
					};
					$generator['__iter__'] = function () {return $generator;};
					$generator['send'] = function ($val) {
					var $pyjs__trackstack_size_0 = $pyjs.trackstack.length;
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
										sys.save_exception_stack();
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_0) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_0);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='BuiltinTest';
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					var $pyjs__trackstack_size_0 = $pyjs.trackstack.length;
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
										sys.save_exception_stack();
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_0) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_0);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='BuiltinTest';
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					var $pyjs__trackstack_size_0 = $pyjs.trackstack.length;
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
										sys.save_exception_stack();
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_0) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_0);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='BuiltinTest';
							$generator_state[0] = -1;
							$is_executing=false;
							if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
							throw (e);
						}
						return null;
					};
					$generator['$genfunc'] = function () {
						var $yielding = false;
						if ($is_executing) throw $p['ValueError']('generator already executing');
						$is_executing = true;
					
						$pyjs.track={module:'BuiltinTest',lineno:594};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=594;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=595;
							$pyjs__trackstack_size_1=$pyjs.trackstack.length;
							$iter25_iter = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
							if (typeof ($iter25_array = $iter25_iter.__array) != 'undefined') {
								$iter25_type = 0;
							} else {
								$iter25_iter = $iter25_iter.__iter__();
								$iter25_type = typeof ($iter25_array = $iter25_iter.__array) != 'undefined'? 0 : (typeof $iter25_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter25_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									i = $iter25_nextval;
									$pyjs.track.lineno=596;
									$pyjs.track.lineno=596;
									$yield_value = i;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 1;
									return $yield_value;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='BuiltinTest';
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
						}

						return;
					};
					return $generator;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=598;
				lst = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=599;
				self['assertEqual'](lst, $p['list']($p['iter'](lst)), 'iter(lst)');
				$pyjs.track.lineno=600;
				g = G();
				$pyjs.track.lineno=601;
				self['assertEqual'](lst, $p['list']($p['iter'](g)), 'iter(g)');
				$pyjs.track.lineno=602;
				self['assertEqual'](lst, $p['list']($p['iter']($p['getattr'](fn(), 'next'), $constant_int_5)), 'iter(fn().next, 5)');
				$pyjs.track.lineno=603;
				self['assertEqual']($p['list']([$constant_int_0, $constant_int_1]), $p['list']($p['iter']($p['getattr'](fn(), 'next'), $constant_int_2)), 'iter(fn().next, 2)');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter'] = $method;
			$pyjs.track.lineno=605;
			$method = $pyjs__bind_method2('testReduce', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1,v;
				$pyjs.track={module:'BuiltinTest', lineno:605};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=605;
				$pyjs.track.lineno=606;
				var 				$lambda1 = function(x, y) {
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
					var $add14,$add13;
					$pyjs.track={module:'BuiltinTest',lineno:606};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='BuiltinTest';
					$pyjs.track.lineno=606;
					$pyjs.track.lineno=606;
					$pyjs.track.lineno=606;
					var $pyjs__ret = (typeof ($add13=x)==typeof ($add14=y) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null,['x'],['y']];
				v = $p['reduce']($lambda1, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]));
				$pyjs.track.lineno=607;
				self['assertEqual'](v, $constant_int_15);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReduce'] = $method;
			$pyjs.track.lineno=609;
			$method = $pyjs__bind_method2('testZip', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dict1,lst2,lst1,v;
				$pyjs.track={module:'BuiltinTest', lineno:609};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=609;
				$pyjs.track.lineno=610;
				lst1 = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=611;
				lst2 = $p['list']([$constant_int_10, $constant_int_11, $constant_int_12]);
				$pyjs.track.lineno=612;
				dict1 = $p['dict']([['a', 'A'], ['b', 'B']]);
				$pyjs.track.lineno=613;
				v = $p['zip'](lst1);
				$pyjs.track.lineno=614;
				self['assertEqual'](v, $p['list']([$p['tuple']([$constant_int_0]), $p['tuple']([$constant_int_1]), $p['tuple']([$constant_int_2]), $p['tuple']([$constant_int_3])]));
				$pyjs.track.lineno=615;
				v = $p['zip'](lst1, lst2);
				$pyjs.track.lineno=616;
				self['assertEqual'](v, $p['list']([$p['tuple']([$constant_int_0, $constant_int_10]), $p['tuple']([$constant_int_1, $constant_int_11]), $p['tuple']([$constant_int_2, $constant_int_12])]));
				$pyjs.track.lineno=617;
				v = $p['zip'](dict1);
				$pyjs.track.lineno=618;
				self['assertEqual'](v, $p['list']([$p['tuple'](['a']), $p['tuple'](['b'])]));
				$pyjs.track.lineno=619;
				v = $p['zip'](lst1, dict1, lst2);
				$pyjs.track.lineno=620;
				self['assertEqual'](v, $p['list']([$p['tuple']([$constant_int_0, 'a', $constant_int_10]), $p['tuple']([$constant_int_1, 'b', $constant_int_11])]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testZip'] = $method;
			$pyjs.track.lineno=622;
			$method = $pyjs__bind_method2('testSum', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:622};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=622;
				$pyjs.track.lineno=623;
				self['assertEqual']($constant_int_6, $p['sum']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3])));
				$pyjs.track.lineno=624;
				self['assertEqual']($constant_int_5, $p['sum']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]), (typeof ($usub49=$constant_int_1)=='number'?
					-$usub49:
					$p['op_usub']($usub49))));
				$pyjs.track.lineno=625;
				self['assertRaises']($p['TypeError'], $p['sum'], $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]), 'a');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSum'] = $method;
			$pyjs.track.lineno=627;
			$method = $pyjs__bind_method2('testSlice', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj,s3,s2,s,AnyClass,s1;
				$pyjs.track={module:'BuiltinTest', lineno:627};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=627;
				$pyjs.track.lineno=629;
				self['assertEqual']($p['repr']($p['slice']($constant_int_1, $constant_int_2, $constant_int_3)), 'slice(1, 2, 3)', 'slice() is mis-used, issue #582');
				$pyjs.track.lineno=631;
				s1 = $p['slice']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=632;
				s2 = $p['slice']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=633;
				s3 = $p['slice']($constant_int_1, $constant_int_2, $constant_int_4);
				$pyjs.track.lineno=634;
				self['assertEqual'](s1, s2);
				$pyjs.track.lineno=635;
				self['assertNotEqual'](s1, s3, 'slice() is mis-used, issue #582');
				$pyjs.track.lineno=637;
				s = $p['slice']($constant_int_1);
				$pyjs.track.lineno=638;
				self['assertEqual']($p['getattr'](s, 'start'), null);
				$pyjs.track.lineno=639;
				self['assertEqual']($p['getattr'](s, 'stop'), $constant_int_1);
				$pyjs.track.lineno=640;
				self['assertEqual']($p['getattr'](s, 'step'), null);
				$pyjs.track.lineno=642;
				s = $p['slice']($constant_int_1, $constant_int_2);
				$pyjs.track.lineno=643;
				self['assertEqual']($p['getattr'](s, 'start'), $constant_int_1);
				$pyjs.track.lineno=644;
				self['assertEqual']($p['getattr'](s, 'stop'), $constant_int_2);
				$pyjs.track.lineno=645;
				self['assertEqual']($p['getattr'](s, 'step'), null);
				$pyjs.track.lineno=647;
				s = $p['slice']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=648;
				self['assertEqual']($p['getattr'](s, 'start'), $constant_int_1);
				$pyjs.track.lineno=649;
				self['assertEqual']($p['getattr'](s, 'stop'), $constant_int_2);
				$pyjs.track.lineno=650;
				self['assertEqual']($p['getattr'](s, 'step'), $constant_int_3);
				$pyjs.track.lineno=652;
				AnyClass = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '019c08bbf13186539b519c3fb2374e1b';
					$pyjs.track.lineno=653;
					$pyjs.track.lineno=652;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('AnyClass', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=655;
				obj = AnyClass();
				$pyjs.track.lineno=656;
				s = $p['slice'](obj);
				$pyjs.track.lineno=657;
				self['assertTrue']($p['op_is']($p['getattr'](s, 'stop'), obj));
				$pyjs.track.lineno=659;
				self['assertEqual']($p['slice'](null)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_1]));
				$pyjs.track.lineno=660;
				self['assertEqual']($p['slice'](null, null, $constant_int_2)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_2]));
				$pyjs.track.lineno=661;
				self['assertEqual']($p['slice']($constant_int_1, null, $constant_int_2)['indices']($constant_int_10), $p['tuple']([$constant_int_1, $constant_int_10, $constant_int_2]));
				$pyjs.track.lineno=662;
				self['assertEqual']($p['slice'](null, null, (typeof ($usub50=$constant_int_1)=='number'?
					-$usub50:
					$p['op_usub']($usub50)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, (typeof ($usub51=$constant_int_1)=='number'?
					-$usub51:
					$p['op_usub']($usub51)), (typeof ($usub52=$constant_int_1)=='number'?
					-$usub52:
					$p['op_usub']($usub52))]));
				$pyjs.track.lineno=663;
				self['assertEqual']($p['slice'](null, null, (typeof ($usub53=$constant_int_2)=='number'?
					-$usub53:
					$p['op_usub']($usub53)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, (typeof ($usub54=$constant_int_1)=='number'?
					-$usub54:
					$p['op_usub']($usub54)), (typeof ($usub55=$constant_int_2)=='number'?
					-$usub55:
					$p['op_usub']($usub55))]));
				$pyjs.track.lineno=664;
				self['assertEqual']($p['slice']($constant_int_3, null, (typeof ($usub56=$constant_int_2)=='number'?
					-$usub56:
					$p['op_usub']($usub56)))['indices']($constant_int_10), $p['tuple']([$constant_int_3, (typeof ($usub57=$constant_int_1)=='number'?
					-$usub57:
					$p['op_usub']($usub57)), (typeof ($usub58=$constant_int_2)=='number'?
					-$usub58:
					$p['op_usub']($usub58))]));
				$pyjs.track.lineno=665;
				self['assertEqual']($p['slice'](null, (typeof ($usub59=$constant_int_9)=='number'?
					-$usub59:
					$p['op_usub']($usub59)))['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_1, $constant_int_1]));
				$pyjs.track.lineno=666;
				self['assertEqual']($p['slice'](null, (typeof ($usub60=$constant_int_10)=='number'?
					-$usub60:
					$p['op_usub']($usub60)))['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_1]));
				$pyjs.track.lineno=667;
				self['assertEqual']($p['slice'](null, (typeof ($usub61=$constant_int_11)=='number'?
					-$usub61:
					$p['op_usub']($usub61)))['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_1]));
				$pyjs.track.lineno=668;
				self['assertEqual']($p['slice'](null, (typeof ($usub62=$constant_int_10)=='number'?
					-$usub62:
					$p['op_usub']($usub62)), (typeof ($usub63=$constant_int_1)=='number'?
					-$usub63:
					$p['op_usub']($usub63)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, $constant_int_0, (typeof ($usub64=$constant_int_1)=='number'?
					-$usub64:
					$p['op_usub']($usub64))]));
				$pyjs.track.lineno=669;
				self['assertEqual']($p['slice'](null, (typeof ($usub65=$constant_int_11)=='number'?
					-$usub65:
					$p['op_usub']($usub65)), (typeof ($usub66=$constant_int_1)=='number'?
					-$usub66:
					$p['op_usub']($usub66)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, (typeof ($usub67=$constant_int_1)=='number'?
					-$usub67:
					$p['op_usub']($usub67)), (typeof ($usub68=$constant_int_1)=='number'?
					-$usub68:
					$p['op_usub']($usub68))]));
				$pyjs.track.lineno=670;
				self['assertEqual']($p['slice'](null, (typeof ($usub69=$constant_int_12)=='number'?
					-$usub69:
					$p['op_usub']($usub69)), (typeof ($usub70=$constant_int_1)=='number'?
					-$usub70:
					$p['op_usub']($usub70)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, (typeof ($usub71=$constant_int_1)=='number'?
					-$usub71:
					$p['op_usub']($usub71)), (typeof ($usub72=$constant_int_1)=='number'?
					-$usub72:
					$p['op_usub']($usub72))]));
				$pyjs.track.lineno=671;
				self['assertEqual']($p['slice'](null, $constant_int_9)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_9, $constant_int_1]));
				$pyjs.track.lineno=672;
				self['assertEqual']($p['slice'](null, $constant_int_10)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_1]));
				$pyjs.track.lineno=673;
				self['assertEqual']($p['slice'](null, $constant_int_11)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_1]));
				$pyjs.track.lineno=674;
				self['assertEqual']($p['slice'](null, $constant_int_8, (typeof ($usub73=$constant_int_1)=='number'?
					-$usub73:
					$p['op_usub']($usub73)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, $constant_int_8, (typeof ($usub74=$constant_int_1)=='number'?
					-$usub74:
					$p['op_usub']($usub74))]));
				$pyjs.track.lineno=675;
				self['assertEqual']($p['slice'](null, $constant_int_9, (typeof ($usub75=$constant_int_1)=='number'?
					-$usub75:
					$p['op_usub']($usub75)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, $constant_int_9, (typeof ($usub76=$constant_int_1)=='number'?
					-$usub76:
					$p['op_usub']($usub76))]));
				$pyjs.track.lineno=676;
				self['assertEqual']($p['slice'](null, $constant_int_10, (typeof ($usub77=$constant_int_1)=='number'?
					-$usub77:
					$p['op_usub']($usub77)))['indices']($constant_int_10), $p['tuple']([$constant_int_9, $constant_int_9, (typeof ($usub78=$constant_int_1)=='number'?
					-$usub78:
					$p['op_usub']($usub78))]));
				$pyjs.track.lineno=679;
				self['assertEqual']($p['slice']((typeof ($usub79=$constant_int_100)=='number'?
					-$usub79:
					$p['op_usub']($usub79)), $constant_int_100)['indices']($constant_int_10), $p['slice'](null)['indices']($constant_int_10));
				$pyjs.track.lineno=683;
				self['assertEqual']($p['slice']($constant_int_100, (typeof ($usub80=$constant_int_100)=='number'?
					-$usub80:
					$p['op_usub']($usub80)), (typeof ($usub81=$constant_int_1)=='number'?
					-$usub81:
					$p['op_usub']($usub81)))['indices']($constant_int_10), $p['slice'](null, null, (typeof ($usub82=$constant_int_1)=='number'?
					-$usub82:
					$p['op_usub']($usub82)))['indices']($constant_int_10));
				$pyjs.track.lineno=686;
				self['assertEqual']($p['slice']((typeof ($usub83=$constant_long_100)=='number'?
					-$usub83:
					$p['op_usub']($usub83)), $constant_long_100, $constant_long_2)['indices']($constant_int_10), $p['tuple']([$constant_int_0, $constant_int_10, $constant_int_2]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSlice'] = $method;
			$pyjs.track.lineno=690;
			$method = $pyjs__bind_method2('test_format', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var Galt,$mul11,C,$mul12,E,d,G,F,I,H,J,$add36,datetime,$pyjs_try_err,$mul9,$mul8,$mul7,$add35,$mul10,D;
				$pyjs.track={module:'BuiltinTest', lineno:690};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=690;
				$pyjs.track.lineno=691;
				self['assertEqual'](''['format'](), '');
				$pyjs.track.lineno=692;
				self['assertEqual']('a'['format'](), 'a');
				$pyjs.track.lineno=693;
				self['assertEqual']('ab'['format'](), 'ab');
				$pyjs.track.lineno=694;
				self['assertEqual']('a{{'['format'](), 'a{');
				$pyjs.track.lineno=695;
				self['assertEqual']('a}}'['format'](), 'a}');
				$pyjs.track.lineno=696;
				self['assertEqual']('{{b'['format'](), '{b');
				$pyjs.track.lineno=697;
				self['assertEqual']('}}b'['format'](), '}b');
				$pyjs.track.lineno=698;
				self['assertEqual']('a{{b'['format'](), 'a{b');
				$pyjs.track.lineno=700;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				datetime = $p['___import___']('datetime', null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=701;
				self['assertEqual']('My name is {0}'['format']('Fred'), 'My name is Fred');
				$pyjs.track.lineno=702;
				self['assertEqual']('My name is {0[name]}'['format']($pyjs_kwargs_call(null, $p['dict'], null, null, [{name:'Fred'}])), 'My name is Fred');
				$pyjs.track.lineno=704;
				self['assertEqual']('My name is {0} :-{{}}'['format']('Fred'), 'My name is Fred :-{}');
				$pyjs.track.lineno=707;
				d = datetime['date']($constant_int_2007, $constant_int_8, $constant_int_18);
				$pyjs.track.lineno=708;
				self['assertEqual']('The year is {0.year}'['format'](d), 'The year is 2007');
				$pyjs.track.lineno=712;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '4f6589ca1bc50e562a3c2d0d68e3402b';
					$pyjs.track.lineno=713;
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '4f6589ca1bc50e562a3c2d0d68e3402b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

						$pyjs.track={module:'BuiltinTest', lineno:713};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=713;
						$pyjs.track.lineno=714;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', x) : $p['setattr'](self, '_x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x', $constant_int_100]]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=715;
					$method = $pyjs__bind_method2('__format__', function(spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '4f6589ca1bc50e562a3c2d0d68e3402b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:715};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=715;
						$pyjs.track.lineno=716;
						$pyjs.track.lineno=716;
						var $pyjs__ret = spec;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['spec']]);
					$cls_definition['__format__'] = $method;
					$pyjs.track.lineno=712;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=718;
				D = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'f216f67c3238b78d595dfdb197487b50';
					$pyjs.track.lineno=719;
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'f216f67c3238b78d595dfdb197487b50') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:719};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=719;
						$pyjs.track.lineno=720;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=721;
					$method = $pyjs__bind_method2('__format__', function(spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'f216f67c3238b78d595dfdb197487b50') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:721};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=721;
						$pyjs.track.lineno=722;
						$pyjs.track.lineno=722;
						var $pyjs__ret = $p['str']($p['getattr'](self, 'x'));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['spec']]);
					$cls_definition['__format__'] = $method;
					$pyjs.track.lineno=718;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('D', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=725;
				E = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'b67bc2be14598c07da7b428c92b08e1e';
					$pyjs.track.lineno=726;
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'b67bc2be14598c07da7b428c92b08e1e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:726};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=726;
						$pyjs.track.lineno=727;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=728;
					$method = $pyjs__bind_method2('__str__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'b67bc2be14598c07da7b428c92b08e1e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add15,$add17,$add18,$add16;
						$pyjs.track={module:'BuiltinTest', lineno:728};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=728;
						$pyjs.track.lineno=729;
						$pyjs.track.lineno=729;
						var $pyjs__ret = (typeof ($add17=(typeof ($add15='E(')==typeof ($add16=$p['getattr'](self, 'x')) && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16)))==typeof ($add18=')') && (typeof $add17=='number'||typeof $add17=='string')?
							$add17+$add18:
							$p['op_add']($add17,$add18));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['__str__'] = $method;
					$pyjs.track.lineno=725;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('E', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=732;
				F = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'c1de753f5f019f39bae1325a88cf531b';
					$pyjs.track.lineno=733;
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c1de753f5f019f39bae1325a88cf531b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:733};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=733;
						$pyjs.track.lineno=734;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=735;
					$method = $pyjs__bind_method2('__repr__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c1de753f5f019f39bae1325a88cf531b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add21,$add20,$add22,$add19;
						$pyjs.track={module:'BuiltinTest', lineno:735};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=735;
						$pyjs.track.lineno=736;
						$pyjs.track.lineno=736;
						var $pyjs__ret = (typeof ($add21=(typeof ($add19='F(')==typeof ($add20=$p['getattr'](self, 'x')) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20)))==typeof ($add22=')') && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['__repr__'] = $method;
					$pyjs.track.lineno=732;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('F', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=739;
				G = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '0997c850880443e7236e399a8469b706';
					$pyjs.track.lineno=740;
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '0997c850880443e7236e399a8469b706') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:740};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=740;
						$pyjs.track.lineno=741;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=742;
					$method = $pyjs__bind_method2('__str__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '0997c850880443e7236e399a8469b706') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add23,$add24;
						$pyjs.track={module:'BuiltinTest', lineno:742};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=742;
						$pyjs.track.lineno=743;
						$pyjs.track.lineno=743;
						var $pyjs__ret = (typeof ($add23='string is ')==typeof ($add24=$p['getattr'](self, 'x')) && (typeof $add23=='number'||typeof $add23=='string')?
							$add23+$add24:
							$p['op_add']($add23,$add24));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['__str__'] = $method;
					$pyjs.track.lineno=744;
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '0997c850880443e7236e399a8469b706') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add28,$bool10,$add25,$add27,$add26;
						$pyjs.track={module:'BuiltinTest', lineno:744};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=744;
						$pyjs.track.lineno=745;
						if ((($bool10=$p['op_eq'](format_spec, 'd')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
								false :
								(typeof $bool10=='object'?
									(typeof $bool10.__nonzero__=='function'?
										$bool10.__nonzero__() :
										(typeof $bool10.__len__=='function'?
											($bool10.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=746;
							$pyjs.track.lineno=746;
							var $pyjs__ret = (typeof ($add27=(typeof ($add25='G(')==typeof ($add26=$p['getattr'](self, 'x')) && (typeof $add25=='number'||typeof $add25=='string')?
								$add25+$add26:
								$p['op_add']($add25,$add26)))==typeof ($add28=')') && (typeof $add27=='number'||typeof $add27=='string')?
								$add27+$add28:
								$p['op_add']($add27,$add28));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						}
						$pyjs.track.lineno=747;
						$pyjs.track.lineno=747;
						var $pyjs__ret = $p['object']['__format__'](self, format_spec);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					$pyjs.track.lineno=739;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('G', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=749;
				Galt = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'c9ce0e0c3a55bd5f883772d2d49fc68e';
					$pyjs.track.lineno=750;
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c9ce0e0c3a55bd5f883772d2d49fc68e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:750};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=750;
						$pyjs.track.lineno=751;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=752;
					$method = $pyjs__bind_method2('__str__', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c9ce0e0c3a55bd5f883772d2d49fc68e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add29,$add30;
						$pyjs.track={module:'BuiltinTest', lineno:752};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=752;
						$pyjs.track.lineno=753;
						$pyjs.track.lineno=753;
						var $pyjs__ret = (typeof ($add29='string is ')==typeof ($add30=$p['getattr'](self, 'x')) && (typeof $add29=='number'||typeof $add29=='string')?
							$add29+$add30:
							$p['op_add']($add29,$add30));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['__str__'] = $method;
					$pyjs.track.lineno=754;
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c9ce0e0c3a55bd5f883772d2d49fc68e') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add32,$bool11,$add31,$add34,$add33;
						$pyjs.track={module:'BuiltinTest', lineno:754};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=754;
						$pyjs.track.lineno=755;
						if ((($bool11=$p['op_eq'](format_spec, 'd')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
							$pyjs.track.lineno=756;
							$pyjs.track.lineno=756;
							var $pyjs__ret = (typeof ($add33=(typeof ($add31='G(')==typeof ($add32=$p['getattr'](self, 'x')) && (typeof $add31=='number'||typeof $add31=='string')?
								$add31+$add32:
								$p['op_add']($add31,$add32)))==typeof ($add34=')') && (typeof $add33=='number'||typeof $add33=='string')?
								$add33+$add34:
								$p['op_add']($add33,$add34));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						}
						$pyjs.track.lineno=757;
						$pyjs.track.lineno=757;
						var $pyjs__ret = $p['format']($p['str'](self), format_spec);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					$pyjs.track.lineno=749;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('Galt', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=760;
				H = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '74db7ceb84817eaa157f2ab0c5c68579';
					$pyjs.track.lineno=761;
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '74db7ceb84817eaa157f2ab0c5c68579') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:761};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=761;
						$pyjs.track.lineno=762;
						$pyjs.track.lineno=762;
						var $pyjs__ret = 1.0;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					$pyjs.track.lineno=760;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('H', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=764;
				I = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '38d899c4a86f832e262eae40cb9d032c';
					$pyjs.track.lineno=765;
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '38d899c4a86f832e262eae40cb9d032c') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:765};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=765;
						$pyjs.track.lineno=766;
						$pyjs.track.lineno=766;
						var $pyjs__ret = self['strftime'](format_spec);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					$pyjs.track.lineno=764;
					var $bases = new Array($p['getattr'](datetime, 'date'));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('I', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=768;
				J = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = '1dcd720dd5e95d1119a5fc8315079fa6';
					$pyjs.track.lineno=769;
					$method = $pyjs__bind_method2('__format__', function(format_spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							format_spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '1dcd720dd5e95d1119a5fc8315079fa6') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $mul6,$mul5;
						$pyjs.track={module:'BuiltinTest', lineno:769};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=769;
						$pyjs.track.lineno=770;
						$pyjs.track.lineno=770;
						var $pyjs__ret = $p['int']['__format__']((typeof ($mul5=self)==typeof ($mul6=$constant_int_2) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)), format_spec);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['format_spec']]);
					$cls_definition['__format__'] = $method;
					$pyjs.track.lineno=768;
					var $bases = new Array($p['int']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('J', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=773;
				self['assertEqual'](''['format'](), '');
				$pyjs.track.lineno=774;
				self['assertEqual']('abc'['format'](), 'abc');
				$pyjs.track.lineno=775;
				self['assertEqual']('{0}'['format']('abc'), 'abc');
				$pyjs.track.lineno=776;
				self['assertEqual']('{0:}'['format']('abc'), 'abc');
				$pyjs.track.lineno=777;
				self['assertEqual']('X{0}'['format']('abc'), 'Xabc');
				$pyjs.track.lineno=778;
				self['assertEqual']('{0}X'['format']('abc'), 'abcX');
				$pyjs.track.lineno=779;
				self['assertEqual']('X{0}Y'['format']('abc'), 'XabcY');
				$pyjs.track.lineno=780;
				self['assertEqual']('{1}'['format']($constant_int_1, 'abc'), 'abc');
				$pyjs.track.lineno=781;
				self['assertEqual']('X{1}'['format']($constant_int_1, 'abc'), 'Xabc');
				$pyjs.track.lineno=782;
				self['assertEqual']('{1}X'['format']($constant_int_1, 'abc'), 'abcX');
				$pyjs.track.lineno=783;
				self['assertEqual']('X{1}Y'['format']($constant_int_1, 'abc'), 'XabcY');
				$pyjs.track.lineno=784;
				self['assertEqual']('{0}'['format']((typeof ($usub84=$constant_int_15)=='number'?
					-$usub84:
					$p['op_usub']($usub84))), '-15');
				$pyjs.track.lineno=785;
				self['assertEqual']('{0}{1}'['format']((typeof ($usub85=$constant_int_15)=='number'?
					-$usub85:
					$p['op_usub']($usub85)), 'abc'), '-15abc');
				$pyjs.track.lineno=786;
				self['assertEqual']('{0}X{1}'['format']((typeof ($usub86=$constant_int_15)=='number'?
					-$usub86:
					$p['op_usub']($usub86)), 'abc'), '-15Xabc');
				$pyjs.track.lineno=787;
				self['assertEqual']('{{'['format'](), '{');
				$pyjs.track.lineno=788;
				self['assertEqual']('}}'['format'](), '}');
				$pyjs.track.lineno=789;
				self['assertEqual']('{{}}'['format'](), '{}');
				$pyjs.track.lineno=790;
				self['assertEqual']('{{x}}'['format'](), '{x}');
				$pyjs.track.lineno=791;
				self['assertEqual']('{{{0}}}'['format']($constant_int_123), '{123}');
				$pyjs.track.lineno=792;
				self['assertEqual']('{{{{0}}}}'['format'](), '{{0}}');
				$pyjs.track.lineno=793;
				self['assertEqual']('}}{{'['format'](), '}{');
				$pyjs.track.lineno=794;
				self['assertEqual']('}}x{{'['format'](), '}x{');
				$pyjs.track.lineno=797;
				self['assertEqual']('{0[foo-bar]}'['format']($p['dict']([['foo-bar', 'baz']])), 'baz');
				$pyjs.track.lineno=798;
				self['assertEqual']('{0[foo bar]}'['format']($p['dict']([['foo bar', 'baz']])), 'baz');
				$pyjs.track.lineno=799;
				self['assertEqual']('{0[ ]}'['format']($p['dict']([[' ', $constant_int_3]])), '3');
				$pyjs.track.lineno=801;
				self['assertEqual']($pyjs_kwargs_call('{foo._x}', 'format', null, null, [{foo:C($constant_int_20)}]), '20');
				$pyjs.track.lineno=802;
				self['assertEqual']('{1}{0}'['format'](D($constant_int_10), D($constant_int_20)), '2010');
				$pyjs.track.lineno=803;
				self['assertEqual']('{0._x.x}'['format'](C(D('abc'))), 'abc');
				$pyjs.track.lineno=804;
				self['assertEqual']('{0[0]}'['format']($p['list'](['abc', 'def'])), 'abc');
				$pyjs.track.lineno=805;
				self['assertEqual']('{0[1]}'['format']($p['list'](['abc', 'def'])), 'def');
				$pyjs.track.lineno=806;
				self['assertEqual']('{0[1][0]}'['format']($p['list'](['abc', $p['list'](['def'])])), 'def');
				$pyjs.track.lineno=807;
				self['assertEqual']('{0[1][0].x}'['format']($p['list'](['abc', $p['list']([D('def')])])), 'def');
				$pyjs.track.lineno=810;
				self['assertEqual']('{0:.3s}'['format']('abc'), 'abc');
				$pyjs.track.lineno=811;
				self['assertEqual']('{0:.3s}'['format']('ab'), 'ab');
				$pyjs.track.lineno=812;
				self['assertEqual']('{0:.3s}'['format']('abcdef'), 'abc');
				$pyjs.track.lineno=813;
				self['assertEqual']('{0:.0s}'['format']('abcdef'), '');
				$pyjs.track.lineno=814;
				self['assertEqual']('{0:3.3s}'['format']('abc'), 'abc');
				$pyjs.track.lineno=815;
				self['assertEqual']('{0:2.3s}'['format']('abc'), 'abc');
				$pyjs.track.lineno=816;
				self['assertEqual']('{0:2.2s}'['format']('abc'), 'ab');
				$pyjs.track.lineno=817;
				self['assertEqual']('{0:3.2s}'['format']('abc'), 'ab ');
				$pyjs.track.lineno=818;
				self['assertEqual']('{0:x<0s}'['format']('result'), 'result');
				$pyjs.track.lineno=819;
				self['assertEqual']('{0:x<5s}'['format']('result'), 'result');
				$pyjs.track.lineno=820;
				self['assertEqual']('{0:x<6s}'['format']('result'), 'result');
				$pyjs.track.lineno=821;
				self['assertEqual']('{0:x<7s}'['format']('result'), 'resultx');
				$pyjs.track.lineno=822;
				self['assertEqual']('{0:x<8s}'['format']('result'), 'resultxx');
				$pyjs.track.lineno=823;
				self['assertEqual']('{0: <7s}'['format']('result'), 'result ');
				$pyjs.track.lineno=824;
				self['assertEqual']('{0:<7s}'['format']('result'), 'result ');
				$pyjs.track.lineno=825;
				self['assertEqual']('{0:>7s}'['format']('result'), ' result');
				$pyjs.track.lineno=826;
				self['assertEqual']('{0:>8s}'['format']('result'), '  result');
				$pyjs.track.lineno=827;
				self['assertEqual']('{0:^8s}'['format']('result'), ' result ');
				$pyjs.track.lineno=828;
				self['assertEqual']('{0:^9s}'['format']('result'), ' result  ');
				$pyjs.track.lineno=829;
				self['assertEqual']('{0:^10s}'['format']('result'), '  result  ');
				$pyjs.track.lineno=830;
				self['assertEqual']('{0:10000}'['format']('a'), (typeof ($add35='a')==typeof ($add36=(typeof ($mul7=' ')==typeof ($mul8=$constant_int_9999) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)));
				$pyjs.track.lineno=831;
				self['assertEqual']('{0:10000}'['format'](''), (typeof ($mul9=' ')==typeof ($mul10=$constant_int_10000) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
				$pyjs.track.lineno=832;
				self['assertEqual']('{0:10000000}'['format'](''), (typeof ($mul11=' ')==typeof ($mul12=$constant_int_10000000) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)));
				$pyjs.track.lineno=835;
				self['assertEqual']('{0:abc}'['format'](C()), 'abc');
				$pyjs.track.lineno=838;
				self['assertEqual']('{0!s}'['format']('Hello'), 'Hello');
				$pyjs.track.lineno=839;
				self['assertEqual']('{0!s:}'['format']('Hello'), 'Hello');
				$pyjs.track.lineno=840;
				self['assertEqual']('{0!s:15}'['format']('Hello'), 'Hello          ');
				$pyjs.track.lineno=841;
				self['assertEqual']('{0!s:15s}'['format']('Hello'), 'Hello          ');
				$pyjs.track.lineno=842;
				self['assertEqual']('{0!r}'['format']('Hello'), "'Hello'");
				$pyjs.track.lineno=843;
				self['assertEqual']('{0!r:}'['format']('Hello'), "'Hello'");
				$pyjs.track.lineno=844;
				self['assertEqual']('{0!r}'['format'](F('Hello')), 'F(Hello)');
				$pyjs.track.lineno=847;
				self['assertEqual']('{0}'['format']($p['dict']([])), '{}');
				$pyjs.track.lineno=848;
				self['assertEqual']('{0}'['format']($p['list']([])), '[]');
				$pyjs.track.lineno=849;
				self['assertEqual']('{0}'['format']($p['list']([$constant_int_1])), '[1]');
				$pyjs.track.lineno=850;
				self['assertEqual']('{0}'['format'](E('data')), 'E(data)');
				$pyjs.track.lineno=851;
				self['assertEqual']('{0:d}'['format'](G('data')), 'G(data)');
				$pyjs.track.lineno=852;
				self['assertEqual']('{0!s}'['format'](G('dat1')), 'string is dat1');
				$pyjs.track.lineno=854;
				self['assertEqual']('{0:^10}'['format'](E('dat2')), ' E(dat2)  ');
				$pyjs.track.lineno=855;
				self['assertEqual']('{0:^10s}'['format'](E('dat3')), ' E(dat3)  ');
				$pyjs.track.lineno=856;
				self['assertEqual']('{0:>15s}'['format'](Galt('dat4')), ' string is dat4');
				$pyjs.track.lineno=859;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=860;
					self['assertEqual']('{0:>15s}'['format'](G('dat5')), ' string is dat5');
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
					$pyjs.track.module='BuiltinTest';
					if (true) {
						$pyjs.track.lineno=862;
						self['fail']('object.__format__ missing#674');
					}
				}
				$pyjs.track.lineno=865;
				self['assertEqual']('{0:date: %Y-%m-%d}'['format']($pyjs_kwargs_call(null, I, null, null, [{year:$constant_int_2007, month:$constant_int_8, day:$constant_int_27}])), 'date: 2007-08-27', 'Issue #673. datetime.date should have __format___');
				$pyjs.track.lineno=871;
				self['assertEqual']('{0}'['format'](J($constant_int_10)), '20', 'Issue #670 derived from int/float/str not instance of object');
				$pyjs.track.lineno=876;
				self['assertEqual']('{0:}'['format']('a'), 'a');
				$pyjs.track.lineno=879;
				self['assertEqual']('{0:.{1}}'['format']('hello world', $constant_int_5), 'hello');
				$pyjs.track.lineno=880;
				self['assertEqual']('{0:.{1}s}'['format']('hello world', $constant_int_5), 'hello');
				$pyjs.track.lineno=881;
				self['assertEqual']($pyjs_kwargs_call('{0:.{precision}s}', 'format', null, null, [{precision:$constant_int_5}, 'hello world']), 'hello');
				$pyjs.track.lineno=882;
				self['assertEqual']($pyjs_kwargs_call('{0:{width}.{precision}s}', 'format', null, null, [{width:$constant_int_10, precision:$constant_int_5}, 'hello world']), 'hello     ');
				$pyjs.track.lineno=883;
				self['assertEqual']($pyjs_kwargs_call('{0:{width}.{precision}s}', 'format', null, null, [{width:'10', precision:'5'}, 'hello world']), 'hello     ');
				$pyjs.track.lineno=886;
				self['format_raises']($p['ValueError'], '{');
				$pyjs.track.lineno=887;
				self['format_raises']($p['ValueError'], '}');
				$pyjs.track.lineno=888;
				self['format_raises']($p['ValueError'], 'a{');
				$pyjs.track.lineno=889;
				self['format_raises']($p['ValueError'], 'a}');
				$pyjs.track.lineno=890;
				self['format_raises']($p['ValueError'], '{a');
				$pyjs.track.lineno=891;
				self['format_raises']($p['ValueError'], '}a');
				$pyjs.track.lineno=892;
				self['format_raises']($p['IndexError'], '{0}');
				$pyjs.track.lineno=893;
				self['format_raises']($p['IndexError'], '{1}', 'abc');
				$pyjs.track.lineno=894;
				self['format_raises']($p['KeyError'], '{x}');
				$pyjs.track.lineno=895;
				self['format_raises']($p['ValueError'], '}{');
				$pyjs.track.lineno=896;
				self['format_raises']($p['ValueError'], '{');
				$pyjs.track.lineno=897;
				self['format_raises']($p['ValueError'], '}');
				$pyjs.track.lineno=898;
				self['format_raises']($p['ValueError'], 'abc{0:{}');
				$pyjs.track.lineno=899;
				self['format_raises']($p['ValueError'], '{0');
				$pyjs.track.lineno=900;
				self['format_raises']($p['IndexError'], '{0.}');
				$pyjs.track.lineno=901;
				self['format_raises']($p['ValueError'], '{0.}', $constant_int_0);
				$pyjs.track.lineno=902;
				self['format_raises']($p['IndexError'], '{0[}');
				$pyjs.track.lineno=903;
				self['format_raises']($p['ValueError'], '{0[}', $p['list']([]));
				$pyjs.track.lineno=904;
				self['format_raises']($p['KeyError'], '{0]}');
				$pyjs.track.lineno=905;
				self['format_raises']($p['ValueError'], '{0.[]}', $constant_int_0);
				$pyjs.track.lineno=906;
				self['format_raises']($p['ValueError'], '{0..foo}', $constant_int_0);
				$pyjs.track.lineno=907;
				self['format_raises']($p['ValueError'], '{0[0}', $constant_int_0);
				$pyjs.track.lineno=908;
				self['format_raises']($p['ValueError'], '{0[0:foo}', $constant_int_0);
				$pyjs.track.lineno=909;
				self['format_raises']($p['KeyError'], '{c]}');
				$pyjs.track.lineno=910;
				self['format_raises']($p['ValueError'], '{{ {{{0}}', $constant_int_0);
				$pyjs.track.lineno=911;
				self['format_raises']($p['ValueError'], '{0}}', $constant_int_0);
				$pyjs.track.lineno=912;
				$pyjs_kwargs_call(self, 'format_raises', null, null, [{bar:$constant_int_3}, $p['KeyError'], '{foo}']);
				$pyjs.track.lineno=913;
				self['format_raises']($p['ValueError'], '{0!x}', $constant_int_3);
				$pyjs.track.lineno=914;
				self['format_raises']($p['ValueError'], '{0!}', $constant_int_0);
				$pyjs.track.lineno=915;
				self['format_raises']($p['ValueError'], '{0!rs}', $constant_int_0);
				$pyjs.track.lineno=916;
				self['format_raises']($p['ValueError'], '{!}');
				$pyjs.track.lineno=917;
				self['format_raises']($p['IndexError'], '{:}');
				$pyjs.track.lineno=918;
				self['format_raises']($p['IndexError'], '{:s}');
				$pyjs.track.lineno=919;
				self['format_raises']($p['IndexError'], '{}');
				$pyjs.track.lineno=922;
				self['format_raises']($p['ValueError'], '{0[0]x}', $p['list']([null]));
				$pyjs.track.lineno=923;
				self['format_raises']($p['ValueError'], '{0[0](10)}', $p['list']([null]));
				$pyjs.track.lineno=927;
				self['format_raises']($p['TypeError'], '{0[{1}]}', 'abcdefg', $constant_int_4);
				$pyjs.track.lineno=930;
				self['format_raises']($p['ValueError'], '{0:{1:{2}}}', 'abc', 's', '');
				$pyjs.track.lineno=931;
				self['format_raises']($p['ValueError'], '{0:{1:{2:{3:{4:{5:{6}}}}}}}', $constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7);
				$pyjs.track.lineno=935;
				self['format_raises']($p['ValueError'], '{0:-s}', '');
				$pyjs.track.lineno=936;
				self['assertRaises']($p['ValueError'], $p['format'], '', '-');
				$pyjs.track.lineno=937;
				self['format_raises']($p['ValueError'], '{0:=s}', '');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_format'] = $method;
			$pyjs.track.lineno=939;
			$method = $pyjs__bind_method2('test_format_auto_numbering', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var C;
				$pyjs.track={module:'BuiltinTest', lineno:939};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=939;
				$pyjs.track.lineno=940;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'BuiltinTest';
					$cls_definition.__md5__ = 'abc3b60e0a7063fc24c655be197552c6';
					$pyjs.track.lineno=941;
					$method = $pyjs__bind_method2('__init__', function(x) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							x = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'abc3b60e0a7063fc24c655be197552c6') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

						$pyjs.track={module:'BuiltinTest', lineno:941};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=941;
						$pyjs.track.lineno=942;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', x) : $p['setattr'](self, '_x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x', $constant_int_100]]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=943;
					$method = $pyjs__bind_method2('__format__', function(spec) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							spec = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'abc3b60e0a7063fc24c655be197552c6') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'BuiltinTest', lineno:943};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='BuiltinTest';
						$pyjs.track.lineno=943;
						$pyjs.track.lineno=944;
						$pyjs.track.lineno=944;
						var $pyjs__ret = spec;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['spec']]);
					$cls_definition['__format__'] = $method;
					$pyjs.track.lineno=940;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=946;
				self['assertEqual']('{}'['format']($constant_int_10), '10');
				$pyjs.track.lineno=947;
				self['assertEqual']('{:5}'['format']('s'), 's    ');
				$pyjs.track.lineno=948;
				self['assertEqual']('{!r}'['format']('s'), "'s'");
				$pyjs.track.lineno=949;
				self['assertEqual']('{._x}'['format'](C($constant_int_10)), '10');
				$pyjs.track.lineno=950;
				self['assertEqual']('{[1]}'['format']($p['list']([$constant_int_1, $constant_int_2])), '2');
				$pyjs.track.lineno=951;
				self['assertEqual']('{[a]}'['format']($p['dict']([['a', $constant_int_4], ['b', $constant_int_2]])), '4');
				$pyjs.track.lineno=952;
				self['assertEqual']('a{}b{}c'['format']($constant_int_0, $constant_int_1), 'a0b1c');
				$pyjs.track.lineno=954;
				self['assertEqual']('a{:{}}b'['format']('x', '^10'), 'a    x     b');
				$pyjs.track.lineno=955;
				self['assertEqual']('a{:{}x}b'['format']($constant_int_20, '#'), 'a0x14b');
				$pyjs.track.lineno=958;
				self['format_raises']($p['ValueError'], '{}{1}', $constant_int_1, $constant_int_2);
				$pyjs.track.lineno=959;
				self['format_raises']($p['ValueError'], '{1}{}', $constant_int_1, $constant_int_2);
				$pyjs.track.lineno=960;
				self['format_raises']($p['ValueError'], '{:{1}}', $constant_int_1, $constant_int_2);
				$pyjs.track.lineno=961;
				self['format_raises']($p['ValueError'], '{0:{}}', $constant_int_1, $constant_int_2);
				$pyjs.track.lineno=964;
				self['assertEqual']($pyjs_kwargs_call('{f}{}', 'format', null, null, [{f:'test'}, $constant_int_4]), 'test4');
				$pyjs.track.lineno=965;
				self['assertEqual']($pyjs_kwargs_call('{}{f}', 'format', null, null, [{f:'test'}, $constant_int_4]), '4test');
				$pyjs.track.lineno=966;
				self['assertEqual']($pyjs_kwargs_call('{:{f}}{g}{}', 'format', null, null, [{g:'g', f:$constant_int_2}, $constant_int_1, $constant_int_3]), ' 1g3');
				$pyjs.track.lineno=967;
				self['assertEqual']($pyjs_kwargs_call('{f:{}}{}{g}', 'format', null, null, [{f:$constant_int_1, g:'g'}, $constant_int_2, $constant_int_4]), ' 14g');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_format_auto_numbering'] = $method;
			$pyjs.track.lineno=971;
			$method = $pyjs__bind_method2('format_raises', function(e) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kw = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						if (typeof kw != 'undefined') args.__array.push(kw);
						var kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					e = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kw = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						if (typeof kw != 'undefined') args.__array.push(kw);
						kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kw == 'undefined') {
					kw = $p['__empty_dict']();
					if (typeof e != 'undefined') {
						if (e !== null && typeof e['$pyjs_is_kwarg'] != 'undefined') {
							kw = e;
							e = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kw = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $25,$26,$pyjs_try_err,excName,$bool12;
				$pyjs.track={module:'BuiltinTest', lineno:971};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=971;
				$pyjs.track.lineno=972;
				self['startTest']();
				$pyjs.track.lineno=973;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=974;
					$pyjs_kwargs_call((typeof ($25=args).__array != 'undefined'?
						((typeof $25.__array[$26=$constant_int_0]) != 'undefined'?$25.__array[$26]:
							$25.__getitem__($26)):
							$25.__getitem__($constant_int_0)), 'format', $p['__getslice'](args, $constant_int_1, null), kw, [{}]);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=978;
						if ((($bool12=$p['hasattr'](e, '__name__')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
								false :
								(typeof $bool12=='object'?
									(typeof $bool12.__nonzero__=='function'?
										$bool12.__nonzero__() :
										(typeof $bool12.__len__=='function'?
											($bool12.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=979;
							excName = $p['getattr'](e, '__name__');
						}
						else {
							$pyjs.track.lineno=981;
							excName = $p['str'](e);
						}
						$pyjs.track.lineno=982;
						self['fail']($p['sprintf']('%s not raised', excName));
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='BuiltinTest';
						if (($pyjs_try_err_name == e.__name__)||$p['_isinstance']($pyjs_try_err,e)) {
							$pyjs.track.lineno=976;
							$pyjs.track.lineno=976;
							var $pyjs__ret = true;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.track.lineno=983;
				$pyjs.track.lineno=983;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',['kw'],['self'],['e']]);
			$cls_definition['format_raises'] = $method;
			$pyjs.track.lineno=988;
			$method = $pyjs__bind_method2('test_format_float', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter26_nextval,$bool13,$bool14,$bool15,$bool16,$bool17,$iter26_idx,format_spec,$iter26_array,issue524_solved,$add42,$add41,$iter26_type,$pyjs_try_err,$iter26_iter,$and1,$and2,$div2,$div1,NAN,$pyjs__trackstack_size_1,x,INF;
				$pyjs.track={module:'BuiltinTest', lineno:988};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=988;
				$pyjs.track.lineno=992;
				self['assertEqual']($p['format'](0.0, 'f'), '0.000000');
				$pyjs.track.lineno=1001;
				x = (typeof ($div1=$constant_int_100)==typeof ($div2=7.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				$pyjs.track.lineno=1002;
				self['assertEqual']($p['format'](x, ''), $p['str'](x));
				$pyjs.track.lineno=1007;
				self['assertEqual']($p['format'](1.0, 'f'), '1.000000');
				$pyjs.track.lineno=1009;
				self['assertEqual']($p['format']((typeof ($usub87=1.0)=='number'?
					-$usub87:
					$p['op_usub']($usub87)), 'f'), '-1.000000');
				$pyjs.track.lineno=1011;
				self['assertEqual']($p['format'](1.0, ' f'), ' 1.000000');
				$pyjs.track.lineno=1012;
				self['assertEqual']($p['format']((typeof ($usub88=1.0)=='number'?
					-$usub88:
					$p['op_usub']($usub88)), ' f'), '-1.000000');
				$pyjs.track.lineno=1013;
				self['assertEqual']($p['format'](1.0, '+f'), '+1.000000');
				$pyjs.track.lineno=1014;
				self['assertEqual']($p['format']((typeof ($usub89=1.0)=='number'?
					-$usub89:
					$p['op_usub']($usub89)), '+f'), '-1.000000');
				$pyjs.track.lineno=1017;
				self['assertEqual']($p['format']((typeof ($usub90=1.0)=='number'?
					-$usub90:
					$p['op_usub']($usub90)), '%'), '-100.000000%');
				$pyjs.track.lineno=1020;
				self['format_raises']($p['ValueError'], '{:s}', 3.0);
				$pyjs.track.lineno=1024;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter26_iter = (typeof ($add41=function(){
					var $iter27_nextval,$add38,$iter27_idx,$collcomp7,$add37,$iter27_array,$iter27_iter,$pyjs__trackstack_size_1,x,$iter27_type;
	$collcomp7 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter27_iter = $p['range']($p['ord']('a'), (typeof ($add37=$p['ord']('z'))==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38)));
				if (typeof ($iter27_array = $iter27_iter.__array) != 'undefined') {
					$iter27_type = 0;
				} else {
					$iter27_iter = $iter27_iter.__iter__();
					$iter27_type = typeof ($iter27_array = $iter27_iter.__array) != 'undefined'? 0 : (typeof $iter27_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter27_idx = 0;
				while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
					x = $iter27_nextval;
					$collcomp7['append']($p['chr'](x));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';

	return $collcomp7;}())==typeof ($add42=function(){
					var $add39,$iter28_array,$iter28_nextval,$iter28_idx,$collcomp8,$add40,x,$iter28_iter,$iter28_type,$pyjs__trackstack_size_1;
	$collcomp8 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter28_iter = $p['range']($p['ord']('A'), (typeof ($add39=$p['ord']('Z'))==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40)));
				if (typeof ($iter28_array = $iter28_iter.__array) != 'undefined') {
					$iter28_type = 0;
				} else {
					$iter28_iter = $iter28_iter.__iter__();
					$iter28_type = typeof ($iter28_array = $iter28_iter.__array) != 'undefined'? 0 : (typeof $iter28_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter28_idx = 0;
				while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
					x = $iter28_nextval;
					$collcomp8['append']($p['chr'](x));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';

	return $collcomp8;}()) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42));
				if (typeof ($iter26_array = $iter26_iter.__array) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter.__iter__();
					$iter26_type = typeof ($iter26_array = $iter26_iter.__array) != 'undefined'? 0 : (typeof $iter26_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					format_spec = $iter26_nextval;
					$pyjs.track.lineno=1026;
					if ((($bool14=!(($bool13='eEfFgGn%'.__contains__(format_spec)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
						$pyjs.track.lineno=1028;
						issue524_solved = false;
						$pyjs.track.lineno=1029;
						var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
						try {
							$pyjs.track.lineno=1030;
							$p['format'](1.0, 'd');
						} catch($pyjs_try_err) {
							$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_2 - 1);
							$pyjs.__active_exception_stack__ = null;
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='BuiltinTest';
							if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
								$pyjs.track.lineno=1032;
								issue524_solved = true;
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
						$pyjs.track.lineno=1033;
						if ((($bool17=((($bool16=$and1=!(($bool15=issue524_solved) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15.__nonzero__=='function'?
									$bool15.__nonzero__() :
									(typeof $bool15.__len__=='function'?
										($bool15.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
							false :
							(typeof $bool16=='object'?
								(typeof $bool16.__nonzero__=='function'?
									$bool16.__nonzero__() :
									(typeof $bool16.__len__=='function'?
										($bool16.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?'bcdoxX'.__contains__(format_spec):$and1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
							$pyjs.track.lineno=1034;
							continue;
						}
						$pyjs.track.lineno=1035;
						self['assertRaises']($p['ValueError'], $p['format'], 0.0, format_spec);
						$pyjs.track.lineno=1036;
						self['assertRaises']($p['ValueError'], $p['format'], 1.0, format_spec);
						$pyjs.track.lineno=1037;
						self['assertRaises']($p['ValueError'], $p['format'], (typeof ($usub91=1.0)=='number'?
							-$usub91:
							$p['op_usub']($usub91)), format_spec);
						$pyjs.track.lineno=1038;
						self['assertRaises']($p['ValueError'], $p['format'], 1e+100, format_spec);
						$pyjs.track.lineno=1039;
						self['assertRaises']($p['ValueError'], $p['format'], (typeof ($usub92=1e+100)=='number'?
							-$usub92:
							$p['op_usub']($usub92)), format_spec);
						$pyjs.track.lineno=1040;
						self['assertRaises']($p['ValueError'], $p['format'], 1e-100, format_spec);
						$pyjs.track.lineno=1041;
						self['assertRaises']($p['ValueError'], $p['format'], (typeof ($usub93=1e-100)=='number'?
							-$usub93:
							$p['op_usub']($usub93)), format_spec);
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=1045;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=1046;
					INF = $p['float']('inf');
					$pyjs.track.lineno=1047;
					NAN = $p['float']('nan');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=1051;
						self['assertEqual']('{0:f}'['format'](INF), 'inf');
						$pyjs.track.lineno=1052;
						self['assertEqual']('{0:F}'['format'](INF), 'INF');
						$pyjs.track.lineno=1053;
						self['assertEqual']('{0:f}'['format']((typeof ($usub94=INF)=='number'?
							-$usub94:
							$p['op_usub']($usub94))), '-inf');
						$pyjs.track.lineno=1054;
						self['assertEqual']('{0:F}'['format']((typeof ($usub95=INF)=='number'?
							-$usub95:
							$p['op_usub']($usub95))), '-INF');
						$pyjs.track.lineno=1055;
						self['assertEqual']('{0:f}'['format'](NAN), 'nan');
						$pyjs.track.lineno=1056;
						self['assertEqual']('{0:F}'['format'](NAN), 'NAN');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='BuiltinTest';
						if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							$pyjs.track.lineno=1049;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_format_float'] = $method;
			$pyjs.track.lineno=1058;
			$method = $pyjs__bind_method2('test_issue5864', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:1058};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=1058;
				$pyjs.track.lineno=1059;
				self['assertEqual']($p['format'](123.456, '.4'), '123.5');
				$pyjs.track.lineno=1060;
				self['assertEqual']($p['format'](1234.56, '.4'), '1.235e+03');
				$pyjs.track.lineno=1061;
				self['assertEqual']($p['format'](12345.6, '.4'), '1.235e+04');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_issue5864'] = $method;
			$pyjs.track.lineno=1067;
			$method = $pyjs__bind_method2('test_sign', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:1067};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=1067;
				$pyjs.track.lineno=1068;
				self['assertEquals']($p['format']((typeof ($usub96=$constant_int_6)=='number'?
					-$usub96:
					$p['op_usub']($usub96))), '-6');
				$pyjs.track.lineno=1069;
				self['assertEquals']($p['format']((typeof ($usub97=$constant_int_6)=='number'?
					-$usub97:
					$p['op_usub']($usub97)), '-'), '-6');
				$pyjs.track.lineno=1070;
				self['assertEquals']($p['format']((typeof ($usub98=$constant_int_6)=='number'?
					-$usub98:
					$p['op_usub']($usub98)), '+'), '-6');
				$pyjs.track.lineno=1071;
				self['assertEquals']($p['format']((typeof ($usub99=$constant_int_6)=='number'?
					-$usub99:
					$p['op_usub']($usub99)), ' '), '-6');
				$pyjs.track.lineno=1072;
				self['assertEquals']($p['format']($constant_int_6, ' '), ' 6');
				$pyjs.track.lineno=1073;
				self['assertEquals']($p['format']($constant_int_6, '-'), '6');
				$pyjs.track.lineno=1074;
				self['assertEquals']($p['format']($constant_int_6, '+'), '+6');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sign'] = $method;
			$pyjs.track.lineno=1076;
			$method = $pyjs__bind_method2('test_thousands_separator', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '334de2122148adba7d37466708b0c4f6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'BuiltinTest', lineno:1076};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='BuiltinTest';
				$pyjs.track.lineno=1076;
				$pyjs.track.lineno=1077;
				self['assertEquals']($p['format']($constant_int_123, ','), '123');
				$pyjs.track.lineno=1078;
				self['assertEquals']($p['format']($constant_int_12345, ','), '12,345');
				$pyjs.track.lineno=1079;
				self['assertEquals']($p['format']($constant_int_123456789, ','), '123,456,789');
				$pyjs.track.lineno=1080;
				self['assertEquals']($p['format']($constant_int_12345, '7,'), ' 12,345');
				$pyjs.track.lineno=1081;
				self['assertEquals']($p['format']($constant_int_12345, '<7,'), '12,345 ');
				$pyjs.track.lineno=1082;
				self['assertEquals']($p['format']($constant_int_1234, '0=10,'), '00,001,234');
				$pyjs.track.lineno=1083;
				self['assertEquals']($p['format']($constant_int_1234, '010,'), '00,001,234');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_thousands_separator'] = $method;
			$pyjs.track.lineno=48;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('BuiltinTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end BuiltinTest */


/* end module: BuiltinTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.PY27_BEHAVIOUR', 'builtin', 'imports.cls.CLS', 'imports', 'imports.cls', 'imports.cls1.CLS', 'imports.cls1', 'imports.overrideme', 'imports.override', 'imports.__doc__', 'imports.__name__', '__builtin__', '__builtin__.dict', 'datetime']
*/
