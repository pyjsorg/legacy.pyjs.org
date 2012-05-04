/* start module: SetTest */
$pyjs.loaded_modules['SetTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SetTest'].__was_initialized__) return $pyjs.loaded_modules['SetTest'];
	var $m = $pyjs.loaded_modules["SetTest"];
	$m.__repr__ = function() { return "<module: SetTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SetTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'SetTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[2] = 'SetTest.py, line 2:\n    from random import randrange, shuffle';
		$m.__track_lines__[5] = 'SetTest.py, line 5:\n    class PassThru(Exception):';
		$m.__track_lines__[6] = 'SetTest.py, line 6:\n    pass';
		$m.__track_lines__[9] = 'SetTest.py, line 9:\n    def check_pass_thru():';
		$m.__track_lines__[10] = 'SetTest.py, line 10:\n    raise PassThru';
		$m.__track_lines__[11] = 'SetTest.py, line 11:\n    yield 1';
		$m.__track_lines__[14] = 'SetTest.py, line 14:\n    class BadCmp:';
		$m.__track_lines__[15] = 'SetTest.py, line 15:\n    def __hash__(self):';
		$m.__track_lines__[16] = 'SetTest.py, line 16:\n    return 1';
		$m.__track_lines__[18] = 'SetTest.py, line 18:\n    def __cmp__(self, other):';
		$m.__track_lines__[19] = 'SetTest.py, line 19:\n    raise RuntimeError';
		$m.__track_lines__[22] = 'SetTest.py, line 22:\n    class ReprWrapper:';
		$m.__track_lines__[25] = 'SetTest.py, line 25:\n    def __repr__(self):';
		$m.__track_lines__[26] = 'SetTest.py, line 26:\n    return repr(self.value)';
		$m.__track_lines__[29] = 'SetTest.py, line 29:\n    class HashCountingInt(int):';
		$m.__track_lines__[32] = 'SetTest.py, line 32:\n    def __init__(self, *args):';
		$m.__track_lines__[33] = 'SetTest.py, line 33:\n    self.hash_count = 0';
		$m.__track_lines__[35] = 'SetTest.py, line 35:\n    def __hash__(self):';
		$m.__track_lines__[36] = 'SetTest.py, line 36:\n    self.hash_count += 1';
		$m.__track_lines__[37] = 'SetTest.py, line 37:\n    return int.__hash__(self)';
		$m.__track_lines__[40] = 'SetTest.py, line 40:\n    class TestJointOps(UnitTest):';
		$m.__track_lines__[43] = 'SetTest.py, line 43:\n    def setUp(self, *args, **kwargs):';
		$m.__track_lines__[44] = "SetTest.py, line 44:\n    self.word = word = 'simsalabim'";
		$m.__track_lines__[45] = "SetTest.py, line 45:\n    self.otherword = 'madagascar'";
		$m.__track_lines__[46] = "SetTest.py, line 46:\n    self.letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'";
		$m.__track_lines__[47] = 'SetTest.py, line 47:\n    self.s = self.thetype(word)';
		$m.__track_lines__[48] = 'SetTest.py, line 48:\n    self.d = dict.fromkeys(word)';
		$m.__track_lines__[50] = 'SetTest.py, line 50:\n    def test_new_or_init(self):';
		$m.__track_lines__[51] = 'SetTest.py, line 51:\n    self.assertRaises(TypeError, self.thetype, [], 2)';
		$m.__track_lines__[53] = 'SetTest.py, line 53:\n    def test_uniquification(self):';
		$m.__track_lines__[54] = 'SetTest.py, line 54:\n    actual = sorted(self.s)';
		$m.__track_lines__[55] = 'SetTest.py, line 55:\n    expected = sorted(self.d)';
		$m.__track_lines__[56] = 'SetTest.py, line 56:\n    self.assertEqual(actual, expected)';
		$m.__track_lines__[57] = 'SetTest.py, line 57:\n    self.assertRaises(PassThru, self.thetype, check_pass_thru())';
		$m.__track_lines__[58] = 'SetTest.py, line 58:\n    self.assertRaises(TypeError, self.thetype, [[]])';
		$m.__track_lines__[60] = 'SetTest.py, line 60:\n    def test_len(self):';
		$m.__track_lines__[61] = 'SetTest.py, line 61:\n    self.assertEqual(len(self.s), len(self.d))';
		$m.__track_lines__[63] = 'SetTest.py, line 63:\n    def test_contains(self):';
		$m.__track_lines__[64] = 'SetTest.py, line 64:\n    for c in self.letters:';
		$m.__track_lines__[65] = 'SetTest.py, line 65:\n    self.assertEqual(c in self.s, c in self.d)';
		$m.__track_lines__[66] = 'SetTest.py, line 66:\n    self.assertRaises(TypeError, self.s.__contains__, [[]])';
		$m.__track_lines__[67] = 'SetTest.py, line 67:\n    s = self.thetype([frozenset(self.letters)])';
		$m.__track_lines__[68] = 'SetTest.py, line 68:\n    self.assert_(self.thetype(self.letters) in s)';
		$m.__track_lines__[70] = 'SetTest.py, line 70:\n    def test_union(self):';
		$m.__track_lines__[71] = 'SetTest.py, line 71:\n    u = self.s.union(self.otherword)';
		$m.__track_lines__[72] = 'SetTest.py, line 72:\n    for c in self.letters:';
		$m.__track_lines__[73] = 'SetTest.py, line 73:\n    self.assertEqual(c in u, c in self.d or c in self.otherword)';
		$m.__track_lines__[74] = 'SetTest.py, line 74:\n    self.assertEqual(self.s, self.thetype(self.word))';
		$m.__track_lines__[77] = 'SetTest.py, line 77:\n    self.assertRaises(PassThru, self.s.union, check_pass_thru())';
		$m.__track_lines__[78] = 'SetTest.py, line 78:\n    self.assertRaises(TypeError, self.s.union, [[]])';
		$m.__track_lines__[80] = 'SetTest.py, line 80:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[81] = "SetTest.py, line 81:\n    self.assertEqual(self.thetype('abcba').union(C('cdc')), set('abcd'))";
		$m.__track_lines__[82] = "SetTest.py, line 82:\n    self.assertEqual(self.thetype('abcba').union(C('efgfe')),";
		$m.__track_lines__[84] = "SetTest.py, line 84:\n    self.assertEqual(self.thetype('abcba').union(C('ccb')), set('abc'))";
		$m.__track_lines__[85] = "SetTest.py, line 85:\n    self.assertEqual(self.thetype('abcba').union(C('ef')), set('abcef'))";
		$m.__track_lines__[89] = 'SetTest.py, line 89:\n    def test_or(self):';
		$m.__track_lines__[90] = 'SetTest.py, line 90:\n    i = self.s.union(self.otherword)';
		$m.__track_lines__[91] = 'SetTest.py, line 91:\n    self.assertEqual(self.s | set(self.otherword), i)';
		$m.__track_lines__[92] = 'SetTest.py, line 92:\n    self.assertEqual(self.s | frozenset(self.otherword), i)';
		$m.__track_lines__[93] = 'SetTest.py, line 93:\n    try:';
		$m.__track_lines__[94] = 'SetTest.py, line 94:\n    v = self.s | self.otherword';
		$m.__track_lines__[96] = 'SetTest.py, line 96:\n    pass';
		$m.__track_lines__[98] = 'SetTest.py, line 98:\n    self.fail("s|t did not screen-out general iterables")';
		$m.__track_lines__[100] = 'SetTest.py, line 100:\n    def test_intersection(self):';
		$m.__track_lines__[101] = 'SetTest.py, line 101:\n    i = self.s.intersection(self.otherword)';
		$m.__track_lines__[102] = 'SetTest.py, line 102:\n    for c in self.letters:';
		$m.__track_lines__[103] = 'SetTest.py, line 103:\n    self.assertEqual(c in i, c in self.d and c in self.otherword)';
		$m.__track_lines__[104] = 'SetTest.py, line 104:\n    self.assertEqual(self.s, self.thetype(self.word))';
		$m.__track_lines__[106] = 'SetTest.py, line 106:\n    self.assertRaises(PassThru, self.s.intersection, check_pass_thru())';
		$m.__track_lines__[108] = 'SetTest.py, line 108:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[109] = "SetTest.py, line 109:\n    self.assertEqual(self.thetype('abcba').intersection(C('cdc')),";
		$m.__track_lines__[111] = "SetTest.py, line 111:\n    self.assertEqual(self.thetype('abcba').intersection(C('efgfe')),";
		$m.__track_lines__[113] = "SetTest.py, line 113:\n    self.assertEqual(self.thetype('abcba').intersection(C('ccb')),";
		$m.__track_lines__[115] = "SetTest.py, line 115:\n    self.assertEqual(self.thetype('abcba').intersection(C('ef')),";
		$m.__track_lines__[119] = "SetTest.py, line 119:\n    s = self.thetype('abcba')";
		$m.__track_lines__[127] = 'SetTest.py, line 127:\n    def test_isdisjoint(self):';
		$m.__track_lines__[129] = "SetTest.py, line 129:\n    if not hasattr(set, 'isdisjoint'):";
		$m.__track_lines__[130] = 'SetTest.py, line 130:\n    self.fail("isdisjoint not supported")';
		$m.__track_lines__[131] = 'SetTest.py, line 131:\n    return';
		$m.__track_lines__[133] = 'SetTest.py, line 133:\n    def f(s1, s2):';
		$m.__track_lines__[135] = 'SetTest.py, line 135:\n    return not set(s1).intersection(s2)';
		$m.__track_lines__[137] = "SetTest.py, line 137:\n    for larg in '', 'a', 'ab', 'abc', 'ababac', 'cdc', 'cc', 'efgfe', 'ccb', 'ef':";
		$m.__track_lines__[138] = 'SetTest.py, line 138:\n    s1 = self.thetype(larg)';
		$m.__track_lines__[139] = "SetTest.py, line 139:\n    for rarg in '', 'a', 'ab', 'abc', 'ababac', 'cdc', 'cc', 'efgfe', 'ccb', 'ef':";
		$m.__track_lines__[141] = 'SetTest.py, line 141:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[142] = 'SetTest.py, line 142:\n    s2 = C(rarg)';
		$m.__track_lines__[143] = 'SetTest.py, line 143:\n    actual = s1.isdisjoint(s2)';
		$m.__track_lines__[144] = 'SetTest.py, line 144:\n    expected = f(s1, s2)';
		$m.__track_lines__[145] = 'SetTest.py, line 145:\n    self.assertEqual(actual, expected)';
		$m.__track_lines__[146] = 'SetTest.py, line 146:\n    self.assert_(actual is True or actual is False)';
		$m.__track_lines__[148] = 'SetTest.py, line 148:\n    def test_and(self):';
		$m.__track_lines__[149] = 'SetTest.py, line 149:\n    i = self.s.intersection(self.otherword)';
		$m.__track_lines__[150] = 'SetTest.py, line 150:\n    self.assertEqual(self.s & set(self.otherword), i)';
		$m.__track_lines__[151] = 'SetTest.py, line 151:\n    self.assertEqual(self.s & frozenset(self.otherword), i)';
		$m.__track_lines__[152] = 'SetTest.py, line 152:\n    try:';
		$m.__track_lines__[153] = 'SetTest.py, line 153:\n    v = self.s & self.otherword';
		$m.__track_lines__[155] = 'SetTest.py, line 155:\n    pass';
		$m.__track_lines__[157] = 'SetTest.py, line 157:\n    self.fail("s&t did not screen-out general iterables")';
		$m.__track_lines__[159] = 'SetTest.py, line 159:\n    def test_difference(self):';
		$m.__track_lines__[160] = 'SetTest.py, line 160:\n    i = self.s.difference(self.otherword)';
		$m.__track_lines__[161] = 'SetTest.py, line 161:\n    for c in self.letters:';
		$m.__track_lines__[162] = 'SetTest.py, line 162:\n    self.assertEqual(c in i, c in self.d and c not in self.otherword)';
		$m.__track_lines__[163] = 'SetTest.py, line 163:\n    self.assertEqual(self.s, self.thetype(self.word))';
		$m.__track_lines__[165] = 'SetTest.py, line 165:\n    self.assertRaises(PassThru, self.s.difference, check_pass_thru())';
		$m.__track_lines__[166] = 'SetTest.py, line 166:\n    self.assertRaises(TypeError, self.s.difference, [[]])';
		$m.__track_lines__[168] = 'SetTest.py, line 168:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[169] = "SetTest.py, line 169:\n    self.assertEqual(self.thetype('abcba').difference(C('cdc')),";
		$m.__track_lines__[171] = "SetTest.py, line 171:\n    self.assertEqual(self.thetype('abcba').difference(C('efgfe')),";
		$m.__track_lines__[173] = "SetTest.py, line 173:\n    self.assertEqual(self.thetype('abcba').difference(C('ccb')),";
		$m.__track_lines__[175] = "SetTest.py, line 175:\n    self.assertEqual(self.thetype('abcba').difference(C('ef')),";
		$m.__track_lines__[192] = 'SetTest.py, line 192:\n    def test_symmetric_difference(self):';
		$m.__track_lines__[193] = 'SetTest.py, line 193:\n    i = self.s.symmetric_difference(self.otherword)';
		$m.__track_lines__[194] = 'SetTest.py, line 194:\n    for c in self.letters:';
		$m.__track_lines__[195] = 'SetTest.py, line 195:\n    self.assertEqual(c in i, (c in self.d) ^ (c in self.otherword))';
		$m.__track_lines__[196] = 'SetTest.py, line 196:\n    self.assertEqual(self.s, self.thetype(self.word))';
		$m.__track_lines__[198] = 'SetTest.py, line 198:\n    self.assertRaises(PassThru, self.s.symmetric_difference,';
		$m.__track_lines__[200] = 'SetTest.py, line 200:\n    self.assertRaises(TypeError, self.s.symmetric_difference, [[]])';
		$m.__track_lines__[202] = 'SetTest.py, line 202:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[204] = "SetTest.py, line 203:\n    self.assertEqual( ... self.thetype('abcba').symmetric_difference(C('cdc')),";
		$m.__track_lines__[207] = "SetTest.py, line 206:\n    self.assertEqual( ... self.thetype('abcba').symmetric_difference(C('efgfe')),";
		$m.__track_lines__[210] = "SetTest.py, line 209:\n    self.assertEqual( ... self.thetype('abcba').symmetric_difference(C('ccb')), set('a'))";
		$m.__track_lines__[211] = "SetTest.py, line 211:\n    self.assertEqual(self.thetype('abcba').symmetric_difference(C('ef'))";
		$m.__track_lines__[214] = 'SetTest.py, line 214:\n    def test_xor(self):';
		$m.__track_lines__[215] = 'SetTest.py, line 215:\n    i = self.s.symmetric_difference(self.otherword)';
		$m.__track_lines__[216] = 'SetTest.py, line 216:\n    self.assertEqual(self.s ^ set(self.otherword), i)';
		$m.__track_lines__[217] = 'SetTest.py, line 217:\n    self.assertEqual(self.s ^ frozenset(self.otherword), i)';
		$m.__track_lines__[218] = 'SetTest.py, line 218:\n    try:';
		$m.__track_lines__[219] = 'SetTest.py, line 219:\n    v = self.s ^ self.otherword';
		$m.__track_lines__[221] = 'SetTest.py, line 221:\n    pass';
		$m.__track_lines__[223] = 'SetTest.py, line 223:\n    self.fail("s^t did not screen-out general iterables")';
		$m.__track_lines__[225] = 'SetTest.py, line 225:\n    def test_equality(self):';
		$m.__track_lines__[226] = 'SetTest.py, line 226:\n    self.assertEqual(self.s, set(self.word))';
		$m.__track_lines__[227] = 'SetTest.py, line 227:\n    self.assertEqual(self.s, frozenset(self.word))';
		$m.__track_lines__[228] = 'SetTest.py, line 228:\n    self.assertEqual(self.s == self.word, False)';
		$m.__track_lines__[229] = 'SetTest.py, line 229:\n    self.assertNotEqual(self.s, set(self.otherword))';
		$m.__track_lines__[230] = 'SetTest.py, line 230:\n    self.assertNotEqual(self.s, frozenset(self.otherword))';
		$m.__track_lines__[231] = 'SetTest.py, line 231:\n    self.assertEqual(self.s != self.word, True)';
		$m.__track_lines__[233] = 'SetTest.py, line 233:\n    def test_setOfFrozensets(self):';
		$m.__track_lines__[234] = "SetTest.py, line 234:\n    t = map(frozenset, ['abcdef', 'bcd', 'bdcb', 'fed', 'fedccba'])";
		$m.__track_lines__[235] = 'SetTest.py, line 235:\n    s = self.thetype(t)';
		$m.__track_lines__[236] = 'SetTest.py, line 236:\n    self.assertEqual(len(s), 3)';
		$m.__track_lines__[238] = 'SetTest.py, line 238:\n    def test_compare(self):';
		$m.__track_lines__[239] = 'SetTest.py, line 239:\n    self.assertRaises(TypeError, self.s.__cmp__, self.s)';
		$m.__track_lines__[241] = 'SetTest.py, line 241:\n    def test_sub_and_super(self):';
		$m.__track_lines__[242] = "SetTest.py, line 242:\n    p, q, r = map(self.thetype, ['ab', 'abcde', 'def'])";
		$m.__track_lines__[243] = 'SetTest.py, line 243:\n    self.assert_(p < q)';
		$m.__track_lines__[244] = 'SetTest.py, line 244:\n    self.assert_(p <= q)';
		$m.__track_lines__[245] = 'SetTest.py, line 245:\n    self.assert_(q <= q)';
		$m.__track_lines__[246] = 'SetTest.py, line 246:\n    self.assert_(q > p)';
		$m.__track_lines__[247] = 'SetTest.py, line 247:\n    self.assert_(q >= p)';
		$m.__track_lines__[248] = 'SetTest.py, line 248:\n    self.failIf(q < r)';
		$m.__track_lines__[249] = 'SetTest.py, line 249:\n    self.failIf(q <= r)';
		$m.__track_lines__[250] = 'SetTest.py, line 250:\n    self.failIf(q > r)';
		$m.__track_lines__[251] = 'SetTest.py, line 251:\n    self.failIf(q >= r)';
		$m.__track_lines__[252] = "SetTest.py, line 252:\n    self.assert_(set('a').issubset('abc'))";
		$m.__track_lines__[253] = "SetTest.py, line 253:\n    self.assert_(set('abc').issuperset('a'))";
		$m.__track_lines__[254] = "SetTest.py, line 254:\n    self.failIf(set('a').issubset('cbs'))";
		$m.__track_lines__[255] = "SetTest.py, line 255:\n    self.failIf(set('cbs').issuperset('a'))";
		$m.__track_lines__[270] = 'SetTest.py, line 270:\n    def test_badcmp(self):';
		$m.__track_lines__[271] = 'SetTest.py, line 271:\n    s = self.thetype([BadCmp()])';
		$m.__track_lines__[273] = 'SetTest.py, line 273:\n    try:';
		$m.__track_lines__[274] = 'SetTest.py, line 274:\n    s = self.thetype([BadCmp(), BadCmp()])';
		$m.__track_lines__[276] = 'SetTest.py, line 275:\n    self.fail( ... "Issue #571 Set allows adding objects with bad comparison methods")';
		$m.__track_lines__[278] = 'SetTest.py, line 278:\n    pass';
		$m.__track_lines__[313] = 'SetTest.py, line 313:\n    class SetTest(TestJointOps):';
		$m.__track_lines__[314] = 'SetTest.py, line 314:\n    thetype = set';
		$m.__track_lines__[316] = 'SetTest.py, line 316:\n    def test_init(self):';
		$m.__track_lines__[317] = 'SetTest.py, line 317:\n    s = self.thetype()';
		$m.__track_lines__[318] = 'SetTest.py, line 318:\n    s.__init__(self.word)';
		$m.__track_lines__[319] = 'SetTest.py, line 319:\n    self.assertEqual(s, set(self.word))';
		$m.__track_lines__[320] = 'SetTest.py, line 320:\n    s.__init__(self.otherword)';
		$m.__track_lines__[321] = 'SetTest.py, line 321:\n    self.assertEqual(s, set(self.otherword))';
		$m.__track_lines__[322] = 'SetTest.py, line 322:\n    self.assertRaises(TypeError, s.__init__, s, 2)';
		$m.__track_lines__[323] = 'SetTest.py, line 323:\n    self.assertRaises(TypeError, s.__init__, 1)';
		$m.__track_lines__[330] = 'SetTest.py, line 330:\n    def test_hash(self):';
		$m.__track_lines__[331] = 'SetTest.py, line 331:\n    self.assertRaises(TypeError, hash, self.s)';
		$m.__track_lines__[333] = 'SetTest.py, line 333:\n    def test_clear(self):';
		$m.__track_lines__[334] = 'SetTest.py, line 334:\n    self.s.clear()';
		$m.__track_lines__[335] = 'SetTest.py, line 335:\n    self.assertEqual(self.s, set())';
		$m.__track_lines__[336] = 'SetTest.py, line 336:\n    self.assertEqual(len(self.s), 0)';
		$m.__track_lines__[338] = 'SetTest.py, line 338:\n    def test_copy(self):';
		$m.__track_lines__[339] = 'SetTest.py, line 339:\n    dup = self.s.copy()';
		$m.__track_lines__[340] = 'SetTest.py, line 340:\n    self.assertEqual(self.s, dup)';
		$m.__track_lines__[343] = 'SetTest.py, line 343:\n    def test_add(self):';
		$m.__track_lines__[344] = "SetTest.py, line 344:\n    self.s.add('Q')";
		$m.__track_lines__[345] = "SetTest.py, line 345:\n    self.assert_('Q' in self.s)";
		$m.__track_lines__[346] = 'SetTest.py, line 346:\n    dup = self.s.copy()';
		$m.__track_lines__[347] = "SetTest.py, line 347:\n    self.s.add('Q')";
		$m.__track_lines__[348] = 'SetTest.py, line 348:\n    self.assertEqual(self.s, dup)';
		$m.__track_lines__[349] = 'SetTest.py, line 349:\n    self.assertRaises(TypeError, self.s.add, [])';
		$m.__track_lines__[351] = 'SetTest.py, line 351:\n    def test_remove(self):';
		$m.__track_lines__[352] = "SetTest.py, line 352:\n    self.s.remove('a')";
		$m.__track_lines__[353] = "SetTest.py, line 353:\n    self.assert_('a' not in self.s)";
		$m.__track_lines__[354] = "SetTest.py, line 354:\n    self.assertRaises(KeyError, self.s.remove, 'Q')";
		$m.__track_lines__[355] = 'SetTest.py, line 355:\n    self.assertRaises(TypeError, self.s.remove, [])';
		$m.__track_lines__[356] = 'SetTest.py, line 356:\n    s = self.thetype([frozenset(self.word)])';
		$m.__track_lines__[357] = 'SetTest.py, line 357:\n    self.assert_(self.thetype(self.word) in s)';
		$m.__track_lines__[358] = 'SetTest.py, line 358:\n    s.remove(self.thetype(self.word))';
		$m.__track_lines__[359] = 'SetTest.py, line 359:\n    self.assert_(self.thetype(self.word) not in s)';
		$m.__track_lines__[360] = 'SetTest.py, line 360:\n    self.assertRaises(KeyError, self.s.remove, self.thetype(self.word))';
		$m.__track_lines__[362] = 'SetTest.py, line 362:\n    def test_remove_keyerror_unpacking(self):';
		$m.__track_lines__[364] = "SetTest.py, line 364:\n    for v1 in ['Q', (1,)]:";
		$m.__track_lines__[365] = 'SetTest.py, line 365:\n    try:';
		$m.__track_lines__[366] = 'SetTest.py, line 366:\n    self.s.remove(v1)';
		$m.__track_lines__[368] = 'SetTest.py, line 368:\n    v2 = e.args[0]';
		$m.__track_lines__[369] = 'SetTest.py, line 369:\n    self.assertEqual(v1, v2)';
		$m.__track_lines__[371] = 'SetTest.py, line 371:\n    self.fail()';
		$m.__track_lines__[373] = 'SetTest.py, line 373:\n    def test_remove_keyerror_set(self):';
		$m.__track_lines__[374] = 'SetTest.py, line 374:\n    key = self.thetype([3, 4])';
		$m.__track_lines__[375] = 'SetTest.py, line 375:\n    try:';
		$m.__track_lines__[376] = 'SetTest.py, line 376:\n    self.s.remove(key)';
		$m.__track_lines__[378] = 'SetTest.py, line 378:\n    self.assertTrue(e[0] is key,';
		$m.__track_lines__[381] = 'SetTest.py, line 381:\n    self.fail()';
		$m.__track_lines__[383] = 'SetTest.py, line 383:\n    def test_discard(self):';
		$m.__track_lines__[384] = "SetTest.py, line 384:\n    self.s.discard('a')";
		$m.__track_lines__[385] = "SetTest.py, line 385:\n    self.assert_('a' not in self.s)";
		$m.__track_lines__[386] = "SetTest.py, line 386:\n    self.s.discard('Q')";
		$m.__track_lines__[387] = 'SetTest.py, line 387:\n    self.assertRaises(TypeError, self.s.discard, [])';
		$m.__track_lines__[388] = 'SetTest.py, line 388:\n    s = self.thetype([frozenset(self.word)])';
		$m.__track_lines__[389] = 'SetTest.py, line 389:\n    self.assert_(self.thetype(self.word) in s)';
		$m.__track_lines__[390] = 'SetTest.py, line 390:\n    s.discard(self.thetype(self.word))';
		$m.__track_lines__[391] = 'SetTest.py, line 391:\n    self.assert_(self.thetype(self.word) not in s)';
		$m.__track_lines__[392] = 'SetTest.py, line 392:\n    s.discard(self.thetype(self.word))';
		$m.__track_lines__[394] = 'SetTest.py, line 394:\n    def test_pop(self):';
		$m.__track_lines__[395] = 'SetTest.py, line 395:\n    for i in xrange(len(self.s)):';
		$m.__track_lines__[396] = 'SetTest.py, line 396:\n    elem = self.s.pop()';
		$m.__track_lines__[397] = 'SetTest.py, line 397:\n    self.assert_(elem not in self.s)';
		$m.__track_lines__[398] = 'SetTest.py, line 398:\n    self.assertRaises(KeyError, self.s.pop)';
		$m.__track_lines__[400] = 'SetTest.py, line 400:\n    def test_update(self):';
		$m.__track_lines__[401] = 'SetTest.py, line 401:\n    retval = self.s.update(self.otherword)';
		$m.__track_lines__[402] = 'SetTest.py, line 402:\n    self.assertEqual(retval, None)';
		$m.__track_lines__[404] = 'SetTest.py, line 404:\n    t = self.word + self.otherword';
		$m.__track_lines__[405] = 'SetTest.py, line 405:\n    for c in t:';
		$m.__track_lines__[406] = 'SetTest.py, line 406:\n    self.assert_(c in self.s)';
		$m.__track_lines__[407] = 'SetTest.py, line 407:\n    self.assertRaises(PassThru, self.s.update, check_pass_thru())';
		$m.__track_lines__[408] = 'SetTest.py, line 408:\n    self.assertRaises(TypeError, self.s.update, [[]])';
		$m.__track_lines__[409] = 'SetTest.py, line 409:\n    for p, q in (';
		$m.__track_lines__[412] = 'SetTest.py, line 412:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[413] = "SetTest.py, line 413:\n    s = self.thetype('abcba')";
		$m.__track_lines__[414] = 'SetTest.py, line 414:\n    self.assertEqual(s.update(C(p)), None)';
		$m.__track_lines__[415] = 'SetTest.py, line 415:\n    self.assertEqual(s, set(q))';
		$m.__track_lines__[417] = 'SetTest.py, line 417:\n    return';
		$m.__track_lines__[418] = "SetTest.py, line 418:\n    for p in ('cdc', 'efgfe', 'ccb', 'ef', 'abcda'):";
		$m.__track_lines__[419] = "SetTest.py, line 419:\n    q = 'ahi'";
		$m.__track_lines__[421] = 'SetTest.py, line 421:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[422] = "SetTest.py, line 422:\n    s = self.thetype('abcba')";
		$m.__track_lines__[423] = 'SetTest.py, line 423:\n    self.assertEqual(s.update(C(p), C(q)), None)';
		$m.__track_lines__[424] = 'SetTest.py, line 424:\n    self.assertEqual(s, set(s) | set(p) | set(q))';
		$m.__track_lines__[426] = 'SetTest.py, line 426:\n    def test_ior(self):';
		$m.__track_lines__[427] = 'SetTest.py, line 427:\n    self.s |= set(self.otherword)';
		$m.__track_lines__[429] = 'SetTest.py, line 429:\n    t = self.word + self.otherword';
		$m.__track_lines__[430] = 'SetTest.py, line 430:\n    if isinstance(self.s, set):';
		$m.__track_lines__[431] = 'SetTest.py, line 431:\n    for c in t:';
		$m.__track_lines__[432] = 'SetTest.py, line 432:\n    self.assert_(c in self.s)';
		$m.__track_lines__[434] = 'SetTest.py, line 434:\n    self.fail("|= result not a set")';
		$m.__track_lines__[437] = 'SetTest.py, line 437:\n    def test_intersection_update(self):';
		$m.__track_lines__[438] = 'SetTest.py, line 438:\n    retval = self.s.intersection_update(self.otherword)';
		$m.__track_lines__[439] = 'SetTest.py, line 439:\n    self.assertEqual(retval, None)';
		$m.__track_lines__[441] = 'SetTest.py, line 441:\n    t = self.word + self.otherword';
		$m.__track_lines__[442] = 'SetTest.py, line 442:\n    for c in t:';
		$m.__track_lines__[443] = 'SetTest.py, line 443:\n    if c in self.otherword and c in self.word:';
		$m.__track_lines__[444] = 'SetTest.py, line 444:\n    self.assert_(c in self.s)';
		$m.__track_lines__[446] = 'SetTest.py, line 446:\n    self.assert_(c not in self.s)';
		$m.__track_lines__[447] = 'SetTest.py, line 447:\n    self.assertRaises(PassThru, self.s.intersection_update,';
		$m.__track_lines__[449] = 'SetTest.py, line 449:\n    self.assertRaises(TypeError, self.s.intersection_update, [[]])';
		$m.__track_lines__[450] = "SetTest.py, line 450:\n    for p, q in (('cdc', 'c'), ('efgfe', ''), ('ccb', 'bc'), ('ef', '')):";
		$m.__track_lines__[452] = 'SetTest.py, line 452:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[453] = "SetTest.py, line 453:\n    s = self.thetype('abcba')";
		$m.__track_lines__[454] = 'SetTest.py, line 454:\n    self.assertEqual(s.intersection_update(C(p)), None)';
		$m.__track_lines__[455] = 'SetTest.py, line 455:\n    self.assertEqual(s, set(q))';
		$m.__track_lines__[456] = "SetTest.py, line 456:\n    ss = 'abcba'";
		$m.__track_lines__[457] = 'SetTest.py, line 457:\n    s = self.thetype(ss)';
		$m.__track_lines__[458] = "SetTest.py, line 458:\n    t = 'cbc'";
		$m.__track_lines__[463] = 'SetTest.py, line 463:\n    def test_iand(self):';
		$m.__track_lines__[464] = 'SetTest.py, line 464:\n    self.s &= set(self.otherword)';
		$m.__track_lines__[466] = 'SetTest.py, line 466:\n    t = self.word + self.otherword';
		$m.__track_lines__[467] = 'SetTest.py, line 467:\n    if isinstance(self.s, set):';
		$m.__track_lines__[468] = 'SetTest.py, line 468:\n    for c in t:';
		$m.__track_lines__[469] = 'SetTest.py, line 469:\n    if c in self.otherword and c in self.word:';
		$m.__track_lines__[470] = 'SetTest.py, line 470:\n    self.assert_(c in self.s)';
		$m.__track_lines__[472] = 'SetTest.py, line 472:\n    self.assert_(c not in self.s)';
		$m.__track_lines__[474] = 'SetTest.py, line 474:\n    self.fail("&= result not a set")';
		$m.__track_lines__[476] = 'SetTest.py, line 476:\n    def test_difference_update(self):';
		$m.__track_lines__[477] = 'SetTest.py, line 477:\n    retval = self.s.difference_update(self.otherword)';
		$m.__track_lines__[478] = 'SetTest.py, line 478:\n    self.assertEqual(retval, None)';
		$m.__track_lines__[480] = 'SetTest.py, line 480:\n    t = self.word + self.otherword';
		$m.__track_lines__[481] = 'SetTest.py, line 481:\n    for c in t:';
		$m.__track_lines__[482] = 'SetTest.py, line 482:\n    if c in self.word and c not in self.otherword:';
		$m.__track_lines__[483] = 'SetTest.py, line 483:\n    self.assert_(c in self.s)';
		$m.__track_lines__[485] = 'SetTest.py, line 485:\n    self.assert_(c not in self.s)';
		$m.__track_lines__[486] = 'SetTest.py, line 486:\n    self.assertRaises(PassThru, self.s.difference_update, check_pass_thru())';
		$m.__track_lines__[487] = 'SetTest.py, line 487:\n    self.assertRaises(TypeError, self.s.difference_update, [[]])';
		$m.__track_lines__[488] = 'SetTest.py, line 488:\n    self.assertRaises(TypeError, self.s.symmetric_difference_update, [[]])';
		$m.__track_lines__[489] = 'SetTest.py, line 489:\n    for p, q in (';
		$m.__track_lines__[492] = 'SetTest.py, line 492:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[493] = "SetTest.py, line 493:\n    s = self.thetype('abcba')";
		$m.__track_lines__[494] = 'SetTest.py, line 494:\n    self.assertEqual(s.difference_update(C(p)), None)';
		$m.__track_lines__[495] = 'SetTest.py, line 495:\n    self.assertEqual(s, set(q))';
		$m.__track_lines__[497] = "SetTest.py, line 497:\n    s = self.thetype('abcdefghih')";
		$m.__track_lines__[500] = "SetTest.py, line 500:\n    self.assertEqual(s, self.thetype('abcdefghih'))";
		$m.__track_lines__[502] = "SetTest.py, line 502:\n    s = self.thetype('abcdefghih')";
		$m.__track_lines__[503] = "SetTest.py, line 503:\n    s.difference_update(C('aba'))";
		$m.__track_lines__[504] = "SetTest.py, line 504:\n    self.assertEqual(s, self.thetype('cdefghih'))";
		$m.__track_lines__[511] = 'SetTest.py, line 511:\n    def test_isub(self):';
		$m.__track_lines__[512] = 'SetTest.py, line 512:\n    self.s -= set(self.otherword)';
		$m.__track_lines__[514] = 'SetTest.py, line 514:\n    t = self.word + self.otherword';
		$m.__track_lines__[515] = 'SetTest.py, line 515:\n    for c in t:';
		$m.__track_lines__[516] = 'SetTest.py, line 516:\n    if c in self.word and c not in self.otherword:';
		$m.__track_lines__[517] = 'SetTest.py, line 517:\n    self.assert_(c in self.s)';
		$m.__track_lines__[519] = 'SetTest.py, line 519:\n    self.assert_(c not in self.s)';
		$m.__track_lines__[521] = 'SetTest.py, line 521:\n    def test_symmetric_difference_update(self):';
		$m.__track_lines__[522] = 'SetTest.py, line 522:\n    retval = self.s.symmetric_difference_update(self.otherword)';
		$m.__track_lines__[523] = 'SetTest.py, line 523:\n    self.assertEqual(retval, None)';
		$m.__track_lines__[525] = 'SetTest.py, line 525:\n    t = self.word + self.otherword';
		$m.__track_lines__[526] = 'SetTest.py, line 526:\n    for c in t:';
		$m.__track_lines__[527] = 'SetTest.py, line 527:\n    if (c in self.word) ^ (c in self.otherword):';
		$m.__track_lines__[528] = 'SetTest.py, line 528:\n    self.assert_(c in self.s)';
		$m.__track_lines__[530] = 'SetTest.py, line 530:\n    self.assert_(c not in self.s)';
		$m.__track_lines__[531] = 'SetTest.py, line 531:\n    self.assertRaises(PassThru, self.s.symmetric_difference_update,';
		$m.__track_lines__[533] = 'SetTest.py, line 533:\n    self.assertRaises(TypeError, self.s.symmetric_difference_update, [[]])';
		$m.__track_lines__[534] = 'SetTest.py, line 534:\n    for p, q in (';
		$m.__track_lines__[537] = 'SetTest.py, line 537:\n    for C in set, frozenset, dict.fromkeys, str, list, tuple:';
		$m.__track_lines__[538] = "SetTest.py, line 538:\n    s = self.thetype('abcba')";
		$m.__track_lines__[539] = 'SetTest.py, line 539:\n    self.assertEqual(s.symmetric_difference_update(C(p)), None)';
		$m.__track_lines__[540] = 'SetTest.py, line 540:\n    self.assertEqual(s, set(q))';
		$m.__track_lines__[542] = 'SetTest.py, line 542:\n    def test_ixor(self):';
		$m.__track_lines__[543] = 'SetTest.py, line 543:\n    self.s ^= set(self.otherword)';
		$m.__track_lines__[545] = 'SetTest.py, line 545:\n    t = self.word + self.otherword';
		$m.__track_lines__[546] = 'SetTest.py, line 546:\n    if isinstance(self.s, set):';
		$m.__track_lines__[547] = 'SetTest.py, line 547:\n    for c in t:';
		$m.__track_lines__[548] = 'SetTest.py, line 548:\n    if (c in self.word) ^ (c in self.otherword):';
		$m.__track_lines__[549] = 'SetTest.py, line 549:\n    self.assert_(c in self.s)';
		$m.__track_lines__[551] = 'SetTest.py, line 551:\n    self.assert_(c not in self.s)';
		$m.__track_lines__[553] = 'SetTest.py, line 553:\n    self.fail("^= result not a set")';
		$m.__track_lines__[555] = 'SetTest.py, line 555:\n    def test_inplace_on_self(self):';
		$m.__track_lines__[556] = 'SetTest.py, line 556:\n    return';
		$m.__track_lines__[557] = 'SetTest.py, line 557:\n    t = self.s.copy()';
		$m.__track_lines__[558] = 'SetTest.py, line 558:\n    t |= t';
		$m.__track_lines__[559] = 'SetTest.py, line 559:\n    self.assertEqual(t, self.s)';
		$m.__track_lines__[560] = 'SetTest.py, line 560:\n    t &= t';
		$m.__track_lines__[561] = 'SetTest.py, line 561:\n    self.assertEqual(t, self.s)';
		$m.__track_lines__[562] = 'SetTest.py, line 562:\n    t -= t';
		$m.__track_lines__[563] = 'SetTest.py, line 563:\n    self.assertEqual(t, self.thetype())';
		$m.__track_lines__[564] = 'SetTest.py, line 564:\n    t = self.s.copy()';
		$m.__track_lines__[565] = 'SetTest.py, line 565:\n    t ^= t';
		$m.__track_lines__[566] = 'SetTest.py, line 566:\n    self.assertEqual(t, self.thetype())';
		$m.__track_lines__[569] = 'SetTest.py, line 569:\n    class SetSubclass(set):';
		$m.__track_lines__[570] = 'SetTest.py, line 570:\n    pass';
		$m.__track_lines__[573] = 'SetTest.py, line 573:\n    class TestSetSubclass(SetTest):';
		$m.__track_lines__[574] = 'SetTest.py, line 574:\n    thetype = SetSubclass';
		$m.__track_lines__[577] = 'SetTest.py, line 577:\n    class SetSubclassWithKeywordArgs(set):';
		$m.__track_lines__[578] = 'SetTest.py, line 578:\n    def __init__(self, iterable=[], newarg=None):';
		$m.__track_lines__[579] = 'SetTest.py, line 579:\n    set.__init__(self, iterable)';
		$m.__track_lines__[582] = 'SetTest.py, line 582:\n    class TestSetSubclassWithKeywordArgs(SetTest):';
		$m.__track_lines__[583] = 'SetTest.py, line 583:\n    def test_keywords_in_subclass(self):';
		$m.__track_lines__[585] = 'SetTest.py, line 585:\n    SetSubclassWithKeywordArgs(newarg=1)';
		$m.__track_lines__[588] = 'SetTest.py, line 588:\n    class FrozenSetTest(TestJointOps):';
		$m.__track_lines__[589] = 'SetTest.py, line 589:\n    thetype = frozenset';
		$m.__track_lines__[591] = 'SetTest.py, line 591:\n    def test_init(self):';
		$m.__track_lines__[592] = 'SetTest.py, line 592:\n    s = self.thetype(self.word)';
		$m.__track_lines__[593] = 'SetTest.py, line 593:\n    s.__init__(self.otherword)';
		$m.__track_lines__[594] = 'SetTest.py, line 594:\n    self.assertEqual(s, set(self.word))';
		$m.__track_lines__[596] = 'SetTest.py, line 596:\n    def test_singleton_empty_frozenset(self):';
		$m.__track_lines__[597] = 'SetTest.py, line 597:\n    f = frozenset()';
		$m.__track_lines__[598] = "SetTest.py, line 598:\n    efs = [frozenset(), frozenset([]), frozenset(()), frozenset(''),";
		$m.__track_lines__[604] = 'SetTest.py, line 604:\n    self.assertEqual(len(set(map(hash, efs))), 1)';
		$m.__track_lines__[611] = 'SetTest.py, line 611:\n    def test_hash(self):';
		$m.__track_lines__[612] = "SetTest.py, line 612:\n    self.assertEqual(hash(self.thetype('abcdeb')),";
		$m.__track_lines__[616] = 'SetTest.py, line 616:\n    n = 100';
		$m.__track_lines__[617] = 'SetTest.py, line 617:\n    seq = [randrange(n) for i in xrange(n)]';
		$m.__track_lines__[618] = 'SetTest.py, line 618:\n    results = set()';
		$m.__track_lines__[619] = 'SetTest.py, line 619:\n    for i in xrange(200):';
		$m.__track_lines__[620] = 'SetTest.py, line 620:\n    shuffle(seq)';
		$m.__track_lines__[621] = 'SetTest.py, line 621:\n    results.add(hash(self.thetype(seq)))';
		$m.__track_lines__[622] = 'SetTest.py, line 622:\n    self.assertEqual(len(results), 1)';
		$m.__track_lines__[624] = 'SetTest.py, line 624:\n    def test_copy(self):';
		$m.__track_lines__[625] = 'SetTest.py, line 625:\n    dup = self.s.copy()';
		$m.__track_lines__[626] = 'SetTest.py, line 626:\n    self.assertEqual(self.s, dup)';
		$m.__track_lines__[629] = 'SetTest.py, line 629:\n    def test_frozen_as_dictkey(self):';
		$m.__track_lines__[630] = "SetTest.py, line 630:\n    seq = range(10) + list('abcdefg') + ['apple']";
		$m.__track_lines__[631] = 'SetTest.py, line 631:\n    key1 = self.thetype(seq)';
		$m.__track_lines__[632] = 'SetTest.py, line 632:\n    key2 = self.thetype(reversed(seq))';
		$m.__track_lines__[633] = 'SetTest.py, line 633:\n    self.assertEqual(key1, key2)';
		$m.__track_lines__[635] = 'SetTest.py, line 635:\n    d = {}';
		$m.__track_lines__[636] = 'SetTest.py, line 636:\n    d[key1] = 42';
		$m.__track_lines__[637] = 'SetTest.py, line 637:\n    self.assertEqual(d[key2], 42)';
		$m.__track_lines__[639] = 'SetTest.py, line 639:\n    def test_hash_caching(self):';
		$m.__track_lines__[640] = "SetTest.py, line 640:\n    f = self.thetype('abcdcda')";
		$m.__track_lines__[641] = 'SetTest.py, line 641:\n    self.assertEqual(hash(f), hash(f))';
		$m.__track_lines__[643] = 'SetTest.py, line 643:\n    def test_hash_effectiveness(self):';
		$m.__track_lines__[644] = 'SetTest.py, line 644:\n    n = 13';
		$m.__track_lines__[645] = 'SetTest.py, line 645:\n    hashvalues = set()';
		$m.__track_lines__[646] = 'SetTest.py, line 646:\n    addhashvalue = hashvalues.add';
		$m.__track_lines__[648] = 'SetTest.py, line 648:\n    elemmasks = [(1, 1), (2, 2), (3, 4), (4, 8), (5, 16), (6, 32), (7, 64),';
		$m.__track_lines__[651] = 'SetTest.py, line 651:\n    for i in xrange(2 ** n):';
		$m.__track_lines__[652] = 'SetTest.py, line 652:\n    addhashvalue(hash(frozenset([e for e, m in elemmasks if m & i])))';
		$m.__track_lines__[653] = 'SetTest.py, line 653:\n    self.assertEqual(len(hashvalues), 2 ** n)';
		$m.__track_lines__[656] = 'SetTest.py, line 656:\n    class FrozenSetSubclass(frozenset):';
		$m.__track_lines__[657] = 'SetTest.py, line 657:\n    pass';
		$m.__track_lines__[660] = 'SetTest.py, line 660:\n    class FrozenSetSubclassTest(FrozenSetTest):';
		$m.__track_lines__[661] = 'SetTest.py, line 661:\n    thetype = FrozenSetSubclass';
		$m.__track_lines__[668] = 'SetTest.py, line 668:\n    def test_copy(self):';
		$m.__track_lines__[669] = 'SetTest.py, line 669:\n    dup = self.s.copy()';
		$m.__track_lines__[670] = 'SetTest.py, line 670:\n    self.assertEqual(self.s, dup)';
		$m.__track_lines__[673] = 'SetTest.py, line 673:\n    def test_nested_empty_constructor(self):';
		$m.__track_lines__[674] = 'SetTest.py, line 674:\n    s = self.thetype()';
		$m.__track_lines__[675] = 'SetTest.py, line 675:\n    t = self.thetype(s)';
		$m.__track_lines__[676] = 'SetTest.py, line 676:\n    self.assertEqual(s, t)';
		$m.__track_lines__[678] = 'SetTest.py, line 678:\n    def test_singleton_empty_frozenset(self):';
		$m.__track_lines__[679] = 'SetTest.py, line 679:\n    Frozenset = self.thetype';
		$m.__track_lines__[680] = 'SetTest.py, line 680:\n    f = frozenset()';
		$m.__track_lines__[681] = 'SetTest.py, line 681:\n    F = Frozenset()';
		$m.__track_lines__[682] = "SetTest.py, line 682:\n    efs = [Frozenset(), Frozenset([]), Frozenset(()), Frozenset(''),";
		$m.__track_lines__[688] = 'SetTest.py, line 688:\n    self.assertEqual(len(set(map(hash, efs))), len(efs))';
		$m.__track_lines__[692] = 'SetTest.py, line 692:\n    empty_set = set()';
		$m.__track_lines__[696] = 'SetTest.py, line 696:\n    class TestBasicOps(UnitTest):';
		$m.__track_lines__[697] = 'SetTest.py, line 697:\n    def test_repr(self):';
		$m.__track_lines__[698] = 'SetTest.py, line 698:\n    if self.repr is not None:';
		$m.__track_lines__[699] = 'SetTest.py, line 699:\n    self.assertEqual(repr(self.set), self.repr)';
		$m.__track_lines__[701] = 'SetTest.py, line 701:\n    def test_length(self):';
		$m.__track_lines__[702] = 'SetTest.py, line 702:\n    self.assertEqual(len(self.set), self.length)';
		$m.__track_lines__[704] = 'SetTest.py, line 704:\n    def test_self_equality(self):';
		$m.__track_lines__[705] = 'SetTest.py, line 705:\n    self.assertEqual(self.set, self.set)';
		$m.__track_lines__[707] = 'SetTest.py, line 707:\n    def test_equivalent_equality(self):';
		$m.__track_lines__[708] = 'SetTest.py, line 708:\n    self.assertEqual(self.set, self.dup)';
		$m.__track_lines__[710] = 'SetTest.py, line 710:\n    def test_copy(self):';
		$m.__track_lines__[711] = 'SetTest.py, line 711:\n    self.assertEqual(self.set.copy(), self.dup)';
		$m.__track_lines__[713] = 'SetTest.py, line 713:\n    def test_self_union(self):';
		$m.__track_lines__[714] = 'SetTest.py, line 714:\n    result = self.set | self.set';
		$m.__track_lines__[715] = 'SetTest.py, line 715:\n    self.assertEqual(result, self.dup)';
		$m.__track_lines__[717] = 'SetTest.py, line 717:\n    def test_empty_union(self):';
		$m.__track_lines__[718] = 'SetTest.py, line 718:\n    result = self.set | empty_set';
		$m.__track_lines__[719] = 'SetTest.py, line 719:\n    self.assertEqual(result, self.dup)';
		$m.__track_lines__[721] = 'SetTest.py, line 721:\n    def test_union_empty(self):';
		$m.__track_lines__[722] = 'SetTest.py, line 722:\n    result = empty_set | self.set';
		$m.__track_lines__[723] = 'SetTest.py, line 723:\n    self.assertEqual(result, self.dup)';
		$m.__track_lines__[725] = 'SetTest.py, line 725:\n    def test_self_intersection(self):';
		$m.__track_lines__[726] = 'SetTest.py, line 726:\n    result = self.set & self.set';
		$m.__track_lines__[727] = 'SetTest.py, line 727:\n    self.assertEqual(result, self.dup)';
		$m.__track_lines__[729] = 'SetTest.py, line 729:\n    def test_empty_intersection(self):';
		$m.__track_lines__[730] = 'SetTest.py, line 730:\n    result = self.set & empty_set';
		$m.__track_lines__[731] = 'SetTest.py, line 731:\n    self.assertEqual(result, empty_set)';
		$m.__track_lines__[733] = 'SetTest.py, line 733:\n    def test_intersection_empty(self):';
		$m.__track_lines__[734] = 'SetTest.py, line 734:\n    result = empty_set & self.set';
		$m.__track_lines__[735] = 'SetTest.py, line 735:\n    self.assertEqual(result, empty_set)';
		$m.__track_lines__[737] = 'SetTest.py, line 737:\n    def test_self_isdisjoint(self):';
		$m.__track_lines__[738] = 'SetTest.py, line 738:\n    result = self.set.isdisjoint(self.set)';
		$m.__track_lines__[739] = 'SetTest.py, line 739:\n    self.assertEqual(result, not self.set)';
		$m.__track_lines__[741] = 'SetTest.py, line 741:\n    def test_empty_isdisjoint(self):';
		$m.__track_lines__[742] = 'SetTest.py, line 742:\n    result = self.set.isdisjoint(empty_set)';
		$m.__track_lines__[743] = 'SetTest.py, line 743:\n    self.assertEqual(result, True)';
		$m.__track_lines__[745] = 'SetTest.py, line 745:\n    def test_isdisjoint_empty(self):';
		$m.__track_lines__[746] = 'SetTest.py, line 746:\n    result = empty_set.isdisjoint(self.set)';
		$m.__track_lines__[747] = 'SetTest.py, line 747:\n    self.assertEqual(result, True)';
		$m.__track_lines__[749] = 'SetTest.py, line 749:\n    def test_self_symmetric_difference(self):';
		$m.__track_lines__[750] = 'SetTest.py, line 750:\n    result = self.set ^ self.set';
		$m.__track_lines__[751] = 'SetTest.py, line 751:\n    self.assertEqual(result, empty_set)';
		$m.__track_lines__[753] = 'SetTest.py, line 753:\n    def checkempty_symmetric_difference(self):';
		$m.__track_lines__[754] = 'SetTest.py, line 754:\n    result = self.set ^ empty_set';
		$m.__track_lines__[755] = 'SetTest.py, line 755:\n    self.assertEqual(result, self.set)';
		$m.__track_lines__[757] = 'SetTest.py, line 757:\n    def test_self_difference(self):';
		$m.__track_lines__[758] = 'SetTest.py, line 758:\n    result = self.set - self.set';
		$m.__track_lines__[759] = 'SetTest.py, line 759:\n    self.assertEqual(result, empty_set)';
		$m.__track_lines__[761] = 'SetTest.py, line 761:\n    def test_empty_difference(self):';
		$m.__track_lines__[762] = 'SetTest.py, line 762:\n    result = self.set - empty_set';
		$m.__track_lines__[763] = 'SetTest.py, line 763:\n    self.assertEqual(result, self.dup)';
		$m.__track_lines__[765] = 'SetTest.py, line 765:\n    def test_empty_difference_rev(self):';
		$m.__track_lines__[766] = 'SetTest.py, line 766:\n    result = empty_set - self.set';
		$m.__track_lines__[767] = 'SetTest.py, line 767:\n    self.assertEqual(result, empty_set)';
		$m.__track_lines__[769] = 'SetTest.py, line 769:\n    def test_iteration(self):';
		$m.__track_lines__[770] = 'SetTest.py, line 770:\n    for v in self.set:';
		$m.__track_lines__[771] = 'SetTest.py, line 771:\n    self.assert_(v in self.values)';
		$m.__track_lines__[772] = 'SetTest.py, line 772:\n    setiter = iter(self.set)';
		$m.__track_lines__[775] = 'SetTest.py, line 775:\n    self.assertEqual(setiter.__length_hint__(), len(self.set))';
		$m.__track_lines__[780] = 'SetTest.py, line 780:\n    class TestBasicOpsEmpty(TestBasicOps):';
		$m.__track_lines__[781] = 'SetTest.py, line 781:\n    def setUp(self):';
		$m.__track_lines__[782] = 'SetTest.py, line 782:\n    self.case = "empty set"';
		$m.__track_lines__[783] = 'SetTest.py, line 783:\n    self.values = []';
		$m.__track_lines__[784] = 'SetTest.py, line 784:\n    self.set = set(self.values)';
		$m.__track_lines__[785] = 'SetTest.py, line 785:\n    self.dup = set(self.values)';
		$m.__track_lines__[786] = 'SetTest.py, line 786:\n    self.length = 0';
		$m.__track_lines__[787] = 'SetTest.py, line 787:\n    self.repr = "set([])"';
		$m.__track_lines__[791] = 'SetTest.py, line 791:\n    class TestBasicOpsSingleton(TestBasicOps):';
		$m.__track_lines__[792] = 'SetTest.py, line 792:\n    def setUp(self):';
		$m.__track_lines__[793] = 'SetTest.py, line 793:\n    self.case = "unit set (number)"';
		$m.__track_lines__[794] = 'SetTest.py, line 794:\n    self.values = [3]';
		$m.__track_lines__[795] = 'SetTest.py, line 795:\n    self.set = set(self.values)';
		$m.__track_lines__[796] = 'SetTest.py, line 796:\n    self.dup = set(self.values)';
		$m.__track_lines__[797] = 'SetTest.py, line 797:\n    self.length = 1';
		$m.__track_lines__[798] = 'SetTest.py, line 798:\n    self.repr = "set([3])"';
		$m.__track_lines__[800] = 'SetTest.py, line 800:\n    def test_in(self):';
		$m.__track_lines__[801] = 'SetTest.py, line 801:\n    self.failUnless(3 in self.set)';
		$m.__track_lines__[803] = 'SetTest.py, line 803:\n    def test_not_in(self):';
		$m.__track_lines__[804] = 'SetTest.py, line 804:\n    self.failUnless(2 not in self.set)';
		$m.__track_lines__[808] = 'SetTest.py, line 808:\n    class TestBasicOpsTuple(TestBasicOps):';
		$m.__track_lines__[809] = 'SetTest.py, line 809:\n    def setUp(self):';
		$m.__track_lines__[810] = 'SetTest.py, line 810:\n    self.case = "unit set (tuple)"';
		$m.__track_lines__[811] = 'SetTest.py, line 811:\n    self.values = [(0, "zero")]';
		$m.__track_lines__[812] = 'SetTest.py, line 812:\n    self.set = set(self.values)';
		$m.__track_lines__[813] = 'SetTest.py, line 813:\n    self.dup = set(self.values)';
		$m.__track_lines__[814] = 'SetTest.py, line 814:\n    self.length = 1';
		$m.__track_lines__[815] = 'SetTest.py, line 815:\n    self.repr = "set([(0, \'zero\')])"';
		$m.__track_lines__[817] = 'SetTest.py, line 817:\n    def test_in(self):';
		$m.__track_lines__[818] = 'SetTest.py, line 818:\n    self.failUnless((0, "zero") in self.set)';
		$m.__track_lines__[820] = 'SetTest.py, line 820:\n    def test_not_in(self):';
		$m.__track_lines__[821] = 'SetTest.py, line 821:\n    self.failUnless(9 not in self.set)';
		$m.__track_lines__[827] = 'SetTest.py, line 827:\n    def baditer():';
		$m.__track_lines__[828] = 'SetTest.py, line 828:\n    raise TypeError';
		$m.__track_lines__[829] = 'SetTest.py, line 829:\n    yield True';
		$m.__track_lines__[832] = 'SetTest.py, line 832:\n    def gooditer():';
		$m.__track_lines__[833] = 'SetTest.py, line 833:\n    yield True';
		$m.__track_lines__[836] = 'SetTest.py, line 836:\n    class TestExceptionPropagation(UnitTest):';
		$m.__track_lines__[839] = 'SetTest.py, line 839:\n    def test_instanceWithException(self):';
		$m.__track_lines__[840] = 'SetTest.py, line 840:\n    self.assertRaises(TypeError, set, baditer())';
		$m.__track_lines__[842] = 'SetTest.py, line 842:\n    def test_instancesWithoutException(self):';
		$m.__track_lines__[844] = 'SetTest.py, line 844:\n    set([1, 2, 3])';
		$m.__track_lines__[845] = 'SetTest.py, line 845:\n    set((1, 2, 3))';
		$m.__track_lines__[846] = "SetTest.py, line 846:\n    set({'one': 1, 'two': 2, 'three': 3})";
		$m.__track_lines__[847] = 'SetTest.py, line 847:\n    set(xrange(3))';
		$m.__track_lines__[848] = "SetTest.py, line 848:\n    set('abc')";
		$m.__track_lines__[849] = 'SetTest.py, line 849:\n    set(gooditer())';
		$m.__track_lines__[851] = 'SetTest.py, line 851:\n    def test_changingSizeWhileIterating(self):';
		$m.__track_lines__[852] = 'SetTest.py, line 852:\n    s = set([1, 2, 3])';
		$m.__track_lines__[853] = 'SetTest.py, line 853:\n    try:';
		$m.__track_lines__[854] = 'SetTest.py, line 854:\n    for i in s:';
		$m.__track_lines__[855] = 'SetTest.py, line 855:\n    s.update([4])';
		$m.__track_lines__[857] = 'SetTest.py, line 857:\n    pass';
		$m.__track_lines__[859] = 'SetTest.py, line 859:\n    self.fail("no exception when changing size during iteration")';
		$m.__track_lines__[863] = 'SetTest.py, line 863:\n    class TestSetOfSets(UnitTest):';
		$m.__track_lines__[864] = 'SetTest.py, line 864:\n    def test_constructor(self):';
		$m.__track_lines__[865] = 'SetTest.py, line 865:\n    inner = frozenset([1])';
		$m.__track_lines__[866] = 'SetTest.py, line 866:\n    outer = set([inner])';
		$m.__track_lines__[867] = 'SetTest.py, line 867:\n    element = outer.pop()';
		$m.__track_lines__[869] = 'SetTest.py, line 869:\n    outer.add(inner)        # Rebuild set of sets with .add method';
		$m.__track_lines__[870] = 'SetTest.py, line 870:\n    outer.remove(inner)';
		$m.__track_lines__[871] = 'SetTest.py, line 871:\n    self.assertEqual(outer, set())   # Verify that remove worked';
		$m.__track_lines__[872] = 'SetTest.py, line 872:\n    outer.discard(inner)    # Absence of KeyError indicates working fine';
		$m.__track_lines__[876] = 'SetTest.py, line 876:\n    class TestBinaryOps(UnitTest):';
		$m.__track_lines__[877] = 'SetTest.py, line 877:\n    def setUp(self):';
		$m.__track_lines__[878] = 'SetTest.py, line 878:\n    self.set = set((2, 4, 6))';
		$m.__track_lines__[880] = 'SetTest.py, line 880:\n    def test_eq(self):              # SF bug 643115';
		$m.__track_lines__[881] = 'SetTest.py, line 881:\n    self.assertEqual(self.set, set({2: 1, 4: 3, 6: 5}))';
		$m.__track_lines__[883] = 'SetTest.py, line 883:\n    def test_union_subset(self):';
		$m.__track_lines__[884] = 'SetTest.py, line 884:\n    result = self.set | set([2])';
		$m.__track_lines__[885] = 'SetTest.py, line 885:\n    self.assertEqual(result, set((2, 4, 6)))';
		$m.__track_lines__[887] = 'SetTest.py, line 887:\n    def test_union_superset(self):';
		$m.__track_lines__[888] = 'SetTest.py, line 888:\n    result = self.set | set([2, 4, 6, 8])';
		$m.__track_lines__[889] = 'SetTest.py, line 889:\n    self.assertEqual(result, set([2, 4, 6, 8]))';
		$m.__track_lines__[891] = 'SetTest.py, line 891:\n    def test_union_overlap(self):';
		$m.__track_lines__[892] = 'SetTest.py, line 892:\n    result = self.set | set([3, 4, 5])';
		$m.__track_lines__[893] = 'SetTest.py, line 893:\n    self.assertEqual(result, set([2, 3, 4, 5, 6]))';
		$m.__track_lines__[895] = 'SetTest.py, line 895:\n    def test_union_non_overlap(self):';
		$m.__track_lines__[896] = 'SetTest.py, line 896:\n    result = self.set | set([8])';
		$m.__track_lines__[897] = 'SetTest.py, line 897:\n    self.assertEqual(result, set([2, 4, 6, 8]))';
		$m.__track_lines__[899] = 'SetTest.py, line 899:\n    def test_intersection_subset(self):';
		$m.__track_lines__[900] = 'SetTest.py, line 900:\n    result = self.set & set((2, 4))';
		$m.__track_lines__[901] = 'SetTest.py, line 901:\n    self.assertEqual(result, set((2, 4)))';
		$m.__track_lines__[903] = 'SetTest.py, line 903:\n    def test_intersection_superset(self):';
		$m.__track_lines__[904] = 'SetTest.py, line 904:\n    result = self.set & set([2, 4, 6, 8])';
		$m.__track_lines__[905] = 'SetTest.py, line 905:\n    self.assertEqual(result, set([2, 4, 6]))';
		$m.__track_lines__[907] = 'SetTest.py, line 907:\n    def test_intersection_overlap(self):';
		$m.__track_lines__[908] = 'SetTest.py, line 908:\n    result = self.set & set([3, 4, 5])';
		$m.__track_lines__[909] = 'SetTest.py, line 909:\n    self.assertEqual(result, set([4]))';
		$m.__track_lines__[911] = 'SetTest.py, line 911:\n    def test_intersection_non_overlap(self):';
		$m.__track_lines__[912] = 'SetTest.py, line 912:\n    result = self.set & set([8])';
		$m.__track_lines__[913] = 'SetTest.py, line 913:\n    self.assertEqual(result, empty_set)';
		$m.__track_lines__[915] = 'SetTest.py, line 915:\n    def test_isdisjoint_subset(self):';
		$m.__track_lines__[916] = 'SetTest.py, line 916:\n    result = self.set.isdisjoint(set((2, 4)))';
		$m.__track_lines__[917] = 'SetTest.py, line 917:\n    self.assertEqual(result, False)';
		$m.__track_lines__[919] = 'SetTest.py, line 919:\n    def test_isdisjoint_superset(self):';
		$m.__track_lines__[920] = 'SetTest.py, line 920:\n    result = self.set.isdisjoint(set([2, 4, 6, 8]))';
		$m.__track_lines__[921] = 'SetTest.py, line 921:\n    self.assertEqual(result, False)';
		$m.__track_lines__[923] = 'SetTest.py, line 923:\n    def test_isdisjoint_overlap(self):';
		$m.__track_lines__[924] = 'SetTest.py, line 924:\n    result = self.set.isdisjoint(set([3, 4, 5]))';
		$m.__track_lines__[925] = 'SetTest.py, line 925:\n    self.assertEqual(result, False)';
		$m.__track_lines__[927] = 'SetTest.py, line 927:\n    def test_isdisjoint_non_overlap(self):';
		$m.__track_lines__[928] = 'SetTest.py, line 928:\n    result = self.set.isdisjoint(set([8]))';
		$m.__track_lines__[929] = 'SetTest.py, line 929:\n    self.assertEqual(result, True)';
		$m.__track_lines__[931] = 'SetTest.py, line 931:\n    def test_sym_difference_subset(self):';
		$m.__track_lines__[932] = 'SetTest.py, line 932:\n    result = self.set ^ set((2, 4))';
		$m.__track_lines__[933] = 'SetTest.py, line 933:\n    self.assertEqual(result, set([6]))';
		$m.__track_lines__[935] = 'SetTest.py, line 935:\n    def test_sym_difference_superset(self):';
		$m.__track_lines__[936] = 'SetTest.py, line 936:\n    result = self.set ^ set((2, 4, 6, 8))';
		$m.__track_lines__[937] = 'SetTest.py, line 937:\n    self.assertEqual(result, set([8]))';
		$m.__track_lines__[939] = 'SetTest.py, line 939:\n    def test_sym_difference_overlap(self):';
		$m.__track_lines__[940] = 'SetTest.py, line 940:\n    result = self.set ^ set((3, 4, 5))';
		$m.__track_lines__[941] = 'SetTest.py, line 941:\n    self.assertEqual(result, set([2, 3, 5, 6]))';
		$m.__track_lines__[943] = 'SetTest.py, line 943:\n    def test_sym_difference_non_overlap(self):';
		$m.__track_lines__[944] = 'SetTest.py, line 944:\n    result = self.set ^ set([8])';
		$m.__track_lines__[945] = 'SetTest.py, line 945:\n    self.assertEqual(result, set([2, 4, 6, 8]))';
		$m.__track_lines__[947] = 'SetTest.py, line 947:\n    def test_cmp(self):';
		$m.__track_lines__[948] = "SetTest.py, line 948:\n    a, b = set('a'), set('b')";
		$m.__track_lines__[949] = 'SetTest.py, line 949:\n    self.assertRaises(TypeError, cmp, a, b)';
		$m.__track_lines__[955] = 'SetTest.py, line 955:\n    self.assertEqual(cmp(a, a), 0)';
		$m.__track_lines__[957] = 'SetTest.py, line 957:\n    self.assertRaises(TypeError, cmp, a, 12)';
		$m.__track_lines__[958] = 'SetTest.py, line 958:\n    self.assertRaises(TypeError, cmp, "abc", a)';
		$m.__track_lines__[962] = 'SetTest.py, line 962:\n    class TestUpdateOps(UnitTest):';
		$m.__track_lines__[963] = 'SetTest.py, line 963:\n    def setUp(self):';
		$m.__track_lines__[964] = 'SetTest.py, line 964:\n    self.set = set((2, 4, 6))';
		$m.__track_lines__[966] = 'SetTest.py, line 966:\n    def test_union_subset(self):';
		$m.__track_lines__[967] = 'SetTest.py, line 967:\n    self.set |= set([2])';
		$m.__track_lines__[968] = 'SetTest.py, line 968:\n    self.assertEqual(self.set, set((2, 4, 6)))';
		$m.__track_lines__[970] = 'SetTest.py, line 970:\n    def test_union_superset(self):';
		$m.__track_lines__[971] = 'SetTest.py, line 971:\n    self.set |= set([2, 4, 6, 8])';
		$m.__track_lines__[972] = 'SetTest.py, line 972:\n    self.assertEqual(self.set, set([2, 4, 6, 8]))';
		$m.__track_lines__[974] = 'SetTest.py, line 974:\n    def test_union_overlap(self):';
		$m.__track_lines__[975] = 'SetTest.py, line 975:\n    self.set |= set([3, 4, 5])';
		$m.__track_lines__[976] = 'SetTest.py, line 976:\n    self.assertEqual(self.set, set([2, 3, 4, 5, 6]))';
		$m.__track_lines__[978] = 'SetTest.py, line 978:\n    def test_union_non_overlap(self):';
		$m.__track_lines__[979] = 'SetTest.py, line 979:\n    self.set |= set([8])';
		$m.__track_lines__[980] = 'SetTest.py, line 980:\n    self.assertEqual(self.set, set([2, 4, 6, 8]))';
		$m.__track_lines__[982] = 'SetTest.py, line 982:\n    def test_union_method_call(self):';
		$m.__track_lines__[983] = 'SetTest.py, line 983:\n    self.set.update(set([3, 4, 5]))';
		$m.__track_lines__[984] = 'SetTest.py, line 984:\n    self.assertEqual(self.set, set([2, 3, 4, 5, 6]))';
		$m.__track_lines__[986] = 'SetTest.py, line 986:\n    def test_intersection_subset(self):';
		$m.__track_lines__[987] = 'SetTest.py, line 987:\n    self.set &= set((2, 4))';
		$m.__track_lines__[988] = 'SetTest.py, line 988:\n    self.assertEqual(self.set, set((2, 4)))';
		$m.__track_lines__[990] = 'SetTest.py, line 990:\n    def test_intersection_superset(self):';
		$m.__track_lines__[991] = 'SetTest.py, line 991:\n    self.set &= set([2, 4, 6, 8])';
		$m.__track_lines__[992] = 'SetTest.py, line 992:\n    self.assertEqual(self.set, set([2, 4, 6]))';
		$m.__track_lines__[994] = 'SetTest.py, line 994:\n    def test_intersection_overlap(self):';
		$m.__track_lines__[995] = 'SetTest.py, line 995:\n    self.set &= set([3, 4, 5])';
		$m.__track_lines__[996] = 'SetTest.py, line 996:\n    self.assertEqual(self.set, set([4]))';
		$m.__track_lines__[998] = 'SetTest.py, line 998:\n    def test_intersection_non_overlap(self):';
		$m.__track_lines__[999] = 'SetTest.py, line 999:\n    self.set &= set([8])';
		$m.__track_lines__[1000] = 'SetTest.py, line 1000:\n    self.assertEqual(self.set, empty_set)';
		$m.__track_lines__[1002] = 'SetTest.py, line 1002:\n    def test_intersection_method_call(self):';
		$m.__track_lines__[1003] = 'SetTest.py, line 1003:\n    self.set.intersection_update(set([3, 4, 5]))';
		$m.__track_lines__[1004] = 'SetTest.py, line 1004:\n    self.assertEqual(self.set, set([4]))';
		$m.__track_lines__[1006] = 'SetTest.py, line 1006:\n    def test_sym_difference_subset(self):';
		$m.__track_lines__[1007] = 'SetTest.py, line 1007:\n    self.set ^= set((2, 4))';
		$m.__track_lines__[1008] = 'SetTest.py, line 1008:\n    self.assertEqual(self.set, set([6]))';
		$m.__track_lines__[1010] = 'SetTest.py, line 1010:\n    def test_sym_difference_superset(self):';
		$m.__track_lines__[1011] = 'SetTest.py, line 1011:\n    self.set ^= set((2, 4, 6, 8))';
		$m.__track_lines__[1012] = 'SetTest.py, line 1012:\n    self.assertEqual(self.set, set([8]))';
		$m.__track_lines__[1014] = 'SetTest.py, line 1014:\n    def test_sym_difference_overlap(self):';
		$m.__track_lines__[1015] = 'SetTest.py, line 1015:\n    self.set ^= set((3, 4, 5))';
		$m.__track_lines__[1016] = 'SetTest.py, line 1016:\n    self.assertEqual(self.set, set([2, 3, 5, 6]))';
		$m.__track_lines__[1018] = 'SetTest.py, line 1018:\n    def test_sym_difference_non_overlap(self):';
		$m.__track_lines__[1019] = 'SetTest.py, line 1019:\n    self.set ^= set([8])';
		$m.__track_lines__[1020] = 'SetTest.py, line 1020:\n    self.assertEqual(self.set, set([2, 4, 6, 8]))';
		$m.__track_lines__[1022] = 'SetTest.py, line 1022:\n    def test_sym_difference_method_call(self):';
		$m.__track_lines__[1023] = 'SetTest.py, line 1023:\n    self.set.symmetric_difference_update(set([3, 4, 5]))';
		$m.__track_lines__[1024] = 'SetTest.py, line 1024:\n    self.assertEqual(self.set, set([2, 3, 5, 6]))';
		$m.__track_lines__[1026] = 'SetTest.py, line 1026:\n    def test_difference_subset(self):';
		$m.__track_lines__[1027] = 'SetTest.py, line 1027:\n    self.set -= set((2, 4))';
		$m.__track_lines__[1028] = 'SetTest.py, line 1028:\n    self.assertEqual(self.set, set([6]))';
		$m.__track_lines__[1030] = 'SetTest.py, line 1030:\n    def test_difference_superset(self):';
		$m.__track_lines__[1031] = 'SetTest.py, line 1031:\n    self.set -= set((2, 4, 6, 8))';
		$m.__track_lines__[1032] = 'SetTest.py, line 1032:\n    self.assertEqual(self.set, set([]))';
		$m.__track_lines__[1034] = 'SetTest.py, line 1034:\n    def test_difference_overlap(self):';
		$m.__track_lines__[1035] = 'SetTest.py, line 1035:\n    self.set -= set((3, 4, 5))';
		$m.__track_lines__[1036] = 'SetTest.py, line 1036:\n    self.assertEqual(self.set, set([2, 6]))';
		$m.__track_lines__[1038] = 'SetTest.py, line 1038:\n    def test_difference_non_overlap(self):';
		$m.__track_lines__[1039] = 'SetTest.py, line 1039:\n    self.set -= set([8])';
		$m.__track_lines__[1040] = 'SetTest.py, line 1040:\n    self.assertEqual(self.set, set([2, 4, 6]))';
		$m.__track_lines__[1042] = 'SetTest.py, line 1042:\n    def test_difference_method_call(self):';
		$m.__track_lines__[1043] = 'SetTest.py, line 1043:\n    self.set.difference_update(set([3, 4, 5]))';
		$m.__track_lines__[1044] = 'SetTest.py, line 1044:\n    self.assertEqual(self.set, set([2, 6]))';
		$m.__track_lines__[1048] = 'SetTest.py, line 1048:\n    class TestMutate(UnitTest):';
		$m.__track_lines__[1049] = 'SetTest.py, line 1049:\n    def setUp(self):';
		$m.__track_lines__[1050] = 'SetTest.py, line 1050:\n    self.values = ["a", "b", "c"]';
		$m.__track_lines__[1051] = 'SetTest.py, line 1051:\n    self.set = set(self.values)';
		$m.__track_lines__[1053] = 'SetTest.py, line 1053:\n    def test_add_present(self):';
		$m.__track_lines__[1054] = 'SetTest.py, line 1054:\n    self.set.add("c")';
		$m.__track_lines__[1055] = 'SetTest.py, line 1055:\n    self.assertEqual(self.set, set("abc"))';
		$m.__track_lines__[1057] = 'SetTest.py, line 1057:\n    def test_add_absent(self):';
		$m.__track_lines__[1058] = 'SetTest.py, line 1058:\n    self.set.add("d")';
		$m.__track_lines__[1059] = 'SetTest.py, line 1059:\n    self.assertEqual(self.set, set("abcd"))';
		$m.__track_lines__[1061] = 'SetTest.py, line 1061:\n    def test_add_until_full(self):';
		$m.__track_lines__[1062] = 'SetTest.py, line 1062:\n    tmp = set()';
		$m.__track_lines__[1063] = 'SetTest.py, line 1063:\n    expected_len = 0';
		$m.__track_lines__[1064] = 'SetTest.py, line 1064:\n    for v in self.values:';
		$m.__track_lines__[1065] = 'SetTest.py, line 1065:\n    tmp.add(v)';
		$m.__track_lines__[1066] = 'SetTest.py, line 1066:\n    expected_len += 1';
		$m.__track_lines__[1067] = 'SetTest.py, line 1067:\n    self.assertEqual(len(tmp), expected_len)';
		$m.__track_lines__[1068] = 'SetTest.py, line 1068:\n    self.assertEqual(tmp, self.set)';
		$m.__track_lines__[1070] = 'SetTest.py, line 1070:\n    def test_remove_present(self):';
		$m.__track_lines__[1071] = 'SetTest.py, line 1071:\n    self.set.remove("b")';
		$m.__track_lines__[1072] = 'SetTest.py, line 1072:\n    self.assertEqual(self.set, set("ac"))';
		$m.__track_lines__[1074] = 'SetTest.py, line 1074:\n    def test_remove_absent(self):';
		$m.__track_lines__[1075] = 'SetTest.py, line 1075:\n    try:';
		$m.__track_lines__[1076] = 'SetTest.py, line 1076:\n    self.set.remove("d")';
		$m.__track_lines__[1077] = 'SetTest.py, line 1077:\n    self.fail("Removing missing element should have raised LookupError")';
		$m.__track_lines__[1079] = 'SetTest.py, line 1079:\n    pass';
		$m.__track_lines__[1081] = 'SetTest.py, line 1081:\n    def test_remove_until_empty(self):';
		$m.__track_lines__[1082] = 'SetTest.py, line 1082:\n    expected_len = len(self.set)';
		$m.__track_lines__[1083] = 'SetTest.py, line 1083:\n    for v in self.values:';
		$m.__track_lines__[1084] = 'SetTest.py, line 1084:\n    self.set.remove(v)';
		$m.__track_lines__[1085] = 'SetTest.py, line 1085:\n    expected_len -= 1';
		$m.__track_lines__[1086] = 'SetTest.py, line 1086:\n    self.assertEqual(len(self.set), expected_len)';
		$m.__track_lines__[1088] = 'SetTest.py, line 1088:\n    def test_discard_present(self):';
		$m.__track_lines__[1089] = 'SetTest.py, line 1089:\n    self.set.discard("c")';
		$m.__track_lines__[1090] = 'SetTest.py, line 1090:\n    self.assertEqual(self.set, set("ab"))';
		$m.__track_lines__[1092] = 'SetTest.py, line 1092:\n    def test_discard_absent(self):';
		$m.__track_lines__[1093] = 'SetTest.py, line 1093:\n    self.set.discard("d")';
		$m.__track_lines__[1094] = 'SetTest.py, line 1094:\n    self.assertEqual(self.set, set("abc"))';
		$m.__track_lines__[1096] = 'SetTest.py, line 1096:\n    def test_clear(self):';
		$m.__track_lines__[1097] = 'SetTest.py, line 1097:\n    self.set.clear()';
		$m.__track_lines__[1098] = 'SetTest.py, line 1098:\n    self.assertEqual(len(self.set), 0)';
		$m.__track_lines__[1100] = 'SetTest.py, line 1100:\n    def test_pop(self):';
		$m.__track_lines__[1101] = 'SetTest.py, line 1101:\n    popped = {}';
		$m.__track_lines__[1102] = 'SetTest.py, line 1102:\n    while self.set:';
		$m.__track_lines__[1103] = 'SetTest.py, line 1103:\n    popped[self.set.pop()] = None';
		$m.__track_lines__[1104] = 'SetTest.py, line 1104:\n    self.assertEqual(len(popped), len(self.values))';
		$m.__track_lines__[1105] = 'SetTest.py, line 1105:\n    for v in self.values:';
		$m.__track_lines__[1106] = 'SetTest.py, line 1106:\n    self.failUnless(v in popped)';
		$m.__track_lines__[1108] = 'SetTest.py, line 1108:\n    def test_update_empty_tuple(self):';
		$m.__track_lines__[1109] = 'SetTest.py, line 1109:\n    self.set.update(())';
		$m.__track_lines__[1110] = 'SetTest.py, line 1110:\n    self.assertEqual(self.set, set(self.values))';
		$m.__track_lines__[1112] = 'SetTest.py, line 1112:\n    def test_update_unit_tuple_overlap(self):';
		$m.__track_lines__[1113] = 'SetTest.py, line 1113:\n    self.set.update(("a",))';
		$m.__track_lines__[1114] = 'SetTest.py, line 1114:\n    self.assertEqual(self.set, set(self.values))';
		$m.__track_lines__[1116] = 'SetTest.py, line 1116:\n    def test_update_unit_tuple_non_overlap(self):';
		$m.__track_lines__[1117] = 'SetTest.py, line 1117:\n    self.set.update(("a", "z"))';
		$m.__track_lines__[1118] = 'SetTest.py, line 1118:\n    self.assertEqual(self.set, set(self.values + ["z"]))';
		$m.__track_lines__[1122] = 'SetTest.py, line 1122:\n    class TestSubsets(UnitTest):';
		$m.__track_lines__[1123] = 'SetTest.py, line 1123:\n    case2method = {"<=": "issubset",';
		$m.__track_lines__[1127] = 'SetTest.py, line 1127:\n    reverse = {"==": "==",';
		$m.__track_lines__[1135] = 'SetTest.py, line 1135:\n    def test_issubset(self):';
		$m.__track_lines__[1136] = 'SetTest.py, line 1136:\n    x = self.left';
		$m.__track_lines__[1137] = 'SetTest.py, line 1137:\n    y = self.right';
		$m.__track_lines__[1138] = 'SetTest.py, line 1138:\n    for case in "!=", "==", "<", "<=", ">", ">=":';
		$m.__track_lines__[1139] = 'SetTest.py, line 1139:\n    expected = case in self.cases';
		$m.__track_lines__[1141] = 'SetTest.py, line 1141:\n    result = eval("x" + case + "y", locals())';
		$m.__track_lines__[1142] = 'SetTest.py, line 1142:\n    self.assertEqual(result, expected)';
		$m.__track_lines__[1144] = 'SetTest.py, line 1144:\n    if case in TestSubsets.case2method:';
		$m.__track_lines__[1145] = 'SetTest.py, line 1145:\n    method = getattr(x, TestSubsets.case2method[case])';
		$m.__track_lines__[1146] = 'SetTest.py, line 1146:\n    result = method(y)';
		$m.__track_lines__[1147] = 'SetTest.py, line 1147:\n    self.assertEqual(result, expected)';
		$m.__track_lines__[1150] = 'SetTest.py, line 1150:\n    rcase = TestSubsets.reverse[case]';
		$m.__track_lines__[1151] = 'SetTest.py, line 1151:\n    result = eval("y" + rcase + "x", locals())';
		$m.__track_lines__[1152] = 'SetTest.py, line 1152:\n    self.assertEqual(result, expected)';
		$m.__track_lines__[1153] = 'SetTest.py, line 1153:\n    if rcase in TestSubsets.case2method:';
		$m.__track_lines__[1154] = 'SetTest.py, line 1154:\n    method = getattr(y, TestSubsets.case2method[rcase])';
		$m.__track_lines__[1155] = 'SetTest.py, line 1155:\n    result = method(x)';
		$m.__track_lines__[1156] = 'SetTest.py, line 1156:\n    self.assertEqual(result, expected)';
		$m.__track_lines__[1160] = 'SetTest.py, line 1160:\n    class TestSubsetEqualEmpty(TestSubsets):';
		$m.__track_lines__[1161] = 'SetTest.py, line 1161:\n    left = set()';
		$m.__track_lines__[1162] = 'SetTest.py, line 1162:\n    right = set()';
		$m.__track_lines__[1163] = 'SetTest.py, line 1163:\n    name = "both empty"';
		$m.__track_lines__[1164] = 'SetTest.py, line 1164:\n    cases = "==", "<=", ">="';
		$m.__track_lines__[1168] = 'SetTest.py, line 1168:\n    class TestSubsetEqualNonEmpty(TestSubsets):';
		$m.__track_lines__[1169] = 'SetTest.py, line 1169:\n    left = set([1, 2])';
		$m.__track_lines__[1170] = 'SetTest.py, line 1170:\n    right = set([1, 2])';
		$m.__track_lines__[1171] = 'SetTest.py, line 1171:\n    name = "equal pair"';
		$m.__track_lines__[1172] = 'SetTest.py, line 1172:\n    cases = "==", "<=", ">="';
		$m.__track_lines__[1176] = 'SetTest.py, line 1176:\n    class TestSubsetEmptyNonEmpty(TestSubsets):';
		$m.__track_lines__[1177] = 'SetTest.py, line 1177:\n    left = set()';
		$m.__track_lines__[1178] = 'SetTest.py, line 1178:\n    right = set([1, 2])';
		$m.__track_lines__[1179] = 'SetTest.py, line 1179:\n    name = "one empty, one non-empty"';
		$m.__track_lines__[1180] = 'SetTest.py, line 1180:\n    cases = "!=", "<", "<="';
		$m.__track_lines__[1184] = 'SetTest.py, line 1184:\n    class TestSubsetPartial(TestSubsets):';
		$m.__track_lines__[1185] = 'SetTest.py, line 1185:\n    left = set([1])';
		$m.__track_lines__[1186] = 'SetTest.py, line 1186:\n    right = set([1, 2])';
		$m.__track_lines__[1187] = 'SetTest.py, line 1187:\n    name = "one a non-empty proper subset of other"';
		$m.__track_lines__[1188] = 'SetTest.py, line 1188:\n    cases = "!=", "<", "<="';
		$m.__track_lines__[1192] = 'SetTest.py, line 1192:\n    class TestSubsetNonOverlap(TestSubsets):';
		$m.__track_lines__[1193] = 'SetTest.py, line 1193:\n    left = set([1])';
		$m.__track_lines__[1194] = 'SetTest.py, line 1194:\n    right = set([2])';
		$m.__track_lines__[1195] = 'SetTest.py, line 1195:\n    name = "neither empty, neither contains"';
		$m.__track_lines__[1196] = 'SetTest.py, line 1196:\n    cases = "!="';
		$m.__track_lines__[1200] = 'SetTest.py, line 1200:\n    class TestOnlySetsInBinaryOps(UnitTest):';
		$m.__track_lines__[1201] = 'SetTest.py, line 1201:\n    def test_eq_ne(self):';
		$m.__track_lines__[1203] = 'SetTest.py, line 1203:\n    self.assertEqual(self.other == self.set, False)';
		$m.__track_lines__[1204] = 'SetTest.py, line 1204:\n    self.assertEqual(self.set == self.other, False)';
		$m.__track_lines__[1205] = 'SetTest.py, line 1205:\n    self.assertEqual(self.other != self.set, True)';
		$m.__track_lines__[1206] = 'SetTest.py, line 1206:\n    self.assertEqual(self.set != self.other, True)';
		$m.__track_lines__[1208] = 'SetTest.py, line 1208:\n    def test_ge_gt_le_lt(self):';
		$m.__track_lines__[1209] = 'SetTest.py, line 1209:\n    self.assertRaises(TypeError, lambda: self.set < self.other)';
		$m.__track_lines__[1210] = 'SetTest.py, line 1210:\n    self.assertRaises(TypeError, lambda: self.set <= self.other)';
		$m.__track_lines__[1211] = 'SetTest.py, line 1211:\n    self.assertRaises(TypeError, lambda: self.set > self.other)';
		$m.__track_lines__[1212] = 'SetTest.py, line 1212:\n    self.assertRaises(TypeError, lambda: self.set >= self.other)';
		$m.__track_lines__[1214] = 'SetTest.py, line 1214:\n    self.assertRaises(TypeError, lambda: self.other < self.set)';
		$m.__track_lines__[1215] = 'SetTest.py, line 1215:\n    self.assertRaises(TypeError, lambda: self.other <= self.set)';
		$m.__track_lines__[1216] = 'SetTest.py, line 1216:\n    self.assertRaises(TypeError, lambda: self.other > self.set)';
		$m.__track_lines__[1217] = 'SetTest.py, line 1217:\n    self.assertRaises(TypeError, lambda: self.other >= self.set)';
		$m.__track_lines__[1219] = 'SetTest.py, line 1219:\n    def test_update_operator(self):';
		$m.__track_lines__[1220] = 'SetTest.py, line 1220:\n    try:';
		$m.__track_lines__[1221] = 'SetTest.py, line 1221:\n    self.set |= self.other';
		$m.__track_lines__[1223] = 'SetTest.py, line 1223:\n    pass';
		$m.__track_lines__[1225] = 'SetTest.py, line 1225:\n    self.fail("expected TypeError")';
		$m.__track_lines__[1227] = 'SetTest.py, line 1227:\n    def test_update(self):';
		$m.__track_lines__[1228] = 'SetTest.py, line 1228:\n    if self.otherIsIterable:';
		$m.__track_lines__[1229] = 'SetTest.py, line 1229:\n    self.set.update(self.other)';
		$m.__track_lines__[1231] = 'SetTest.py, line 1231:\n    self.assertRaises(TypeError, self.set.update, self.other)';
		$m.__track_lines__[1233] = 'SetTest.py, line 1233:\n    def test_union(self):';
		$m.__track_lines__[1234] = 'SetTest.py, line 1234:\n    self.assertRaises(TypeError, lambda: self.set | self.other)';
		$m.__track_lines__[1235] = 'SetTest.py, line 1235:\n    self.assertRaises(TypeError, lambda: self.other | self.set)';
		$m.__track_lines__[1236] = 'SetTest.py, line 1236:\n    if self.otherIsIterable:';
		$m.__track_lines__[1237] = 'SetTest.py, line 1237:\n    self.set.union(self.other)';
		$m.__track_lines__[1239] = 'SetTest.py, line 1239:\n    self.assertRaises(TypeError, self.set.union, self.other)';
		$m.__track_lines__[1241] = 'SetTest.py, line 1241:\n    def test_intersection_update_operator(self):';
		$m.__track_lines__[1242] = 'SetTest.py, line 1242:\n    try:';
		$m.__track_lines__[1243] = 'SetTest.py, line 1243:\n    self.set &= self.other';
		$m.__track_lines__[1245] = 'SetTest.py, line 1245:\n    pass';
		$m.__track_lines__[1247] = 'SetTest.py, line 1247:\n    self.fail("expected TypeError")';
		$m.__track_lines__[1249] = 'SetTest.py, line 1249:\n    def test_intersection_update(self):';
		$m.__track_lines__[1250] = 'SetTest.py, line 1250:\n    if self.otherIsIterable:';
		$m.__track_lines__[1251] = 'SetTest.py, line 1251:\n    self.set.intersection_update(self.other)';
		$m.__track_lines__[1253] = 'SetTest.py, line 1253:\n    self.assertRaises(TypeError,';
		$m.__track_lines__[1257] = 'SetTest.py, line 1257:\n    def test_intersection(self):';
		$m.__track_lines__[1258] = 'SetTest.py, line 1258:\n    self.assertRaises(TypeError, lambda: self.set & self.other)';
		$m.__track_lines__[1259] = 'SetTest.py, line 1259:\n    self.assertRaises(TypeError, lambda: self.other & self.set)';
		$m.__track_lines__[1260] = 'SetTest.py, line 1260:\n    if self.otherIsIterable:';
		$m.__track_lines__[1261] = 'SetTest.py, line 1261:\n    self.set.intersection(self.other)';
		$m.__track_lines__[1263] = 'SetTest.py, line 1263:\n    self.assertRaises(TypeError, self.set.intersection, self.other)';
		$m.__track_lines__[1265] = 'SetTest.py, line 1265:\n    def test_sym_difference_update_operator(self):';
		$m.__track_lines__[1266] = 'SetTest.py, line 1266:\n    try:';
		$m.__track_lines__[1267] = 'SetTest.py, line 1267:\n    self.set ^= self.other';
		$m.__track_lines__[1269] = 'SetTest.py, line 1269:\n    pass';
		$m.__track_lines__[1271] = 'SetTest.py, line 1271:\n    self.fail("expected TypeError")';
		$m.__track_lines__[1273] = 'SetTest.py, line 1273:\n    def test_sym_difference_update(self):';
		$m.__track_lines__[1274] = 'SetTest.py, line 1274:\n    if self.otherIsIterable:';
		$m.__track_lines__[1275] = 'SetTest.py, line 1275:\n    self.set.symmetric_difference_update(self.other)';
		$m.__track_lines__[1277] = 'SetTest.py, line 1277:\n    self.assertRaises(TypeError,';
		$m.__track_lines__[1281] = 'SetTest.py, line 1281:\n    def test_sym_difference(self):';
		$m.__track_lines__[1282] = 'SetTest.py, line 1282:\n    self.assertRaises(TypeError, lambda: self.set ^ self.other)';
		$m.__track_lines__[1283] = 'SetTest.py, line 1283:\n    self.assertRaises(TypeError, lambda: self.other ^ self.set)';
		$m.__track_lines__[1284] = 'SetTest.py, line 1284:\n    if self.otherIsIterable:';
		$m.__track_lines__[1285] = 'SetTest.py, line 1285:\n    self.set.symmetric_difference(self.other)';
		$m.__track_lines__[1287] = 'SetTest.py, line 1287:\n    self.assertRaises(TypeError, self.set.symmetric_difference,';
		$m.__track_lines__[1290] = 'SetTest.py, line 1290:\n    def test_difference_update_operator(self):';
		$m.__track_lines__[1291] = 'SetTest.py, line 1291:\n    try:';
		$m.__track_lines__[1292] = 'SetTest.py, line 1292:\n    self.set -= self.other';
		$m.__track_lines__[1294] = 'SetTest.py, line 1294:\n    pass';
		$m.__track_lines__[1296] = 'SetTest.py, line 1296:\n    self.fail("expected TypeError")';
		$m.__track_lines__[1298] = 'SetTest.py, line 1298:\n    def test_difference_update(self):';
		$m.__track_lines__[1299] = 'SetTest.py, line 1299:\n    if self.otherIsIterable:';
		$m.__track_lines__[1300] = 'SetTest.py, line 1300:\n    self.set.difference_update(self.other)';
		$m.__track_lines__[1302] = 'SetTest.py, line 1302:\n    self.assertRaises(TypeError,';
		$m.__track_lines__[1306] = 'SetTest.py, line 1306:\n    def test_difference(self):';
		$m.__track_lines__[1307] = 'SetTest.py, line 1307:\n    self.assertRaises(TypeError, lambda: self.set - self.other)';
		$m.__track_lines__[1308] = 'SetTest.py, line 1308:\n    self.assertRaises(TypeError, lambda: self.other - self.set)';
		$m.__track_lines__[1309] = 'SetTest.py, line 1309:\n    if self.otherIsIterable:';
		$m.__track_lines__[1310] = 'SetTest.py, line 1310:\n    self.set.difference(self.other)';
		$m.__track_lines__[1312] = 'SetTest.py, line 1312:\n    self.assertRaises(TypeError, self.set.difference, self.other)';
		$m.__track_lines__[1316] = 'SetTest.py, line 1316:\n    class TestOnlySetsNumeric(TestOnlySetsInBinaryOps):';
		$m.__track_lines__[1317] = 'SetTest.py, line 1317:\n    def setUp(self):';
		$m.__track_lines__[1318] = 'SetTest.py, line 1318:\n    self.set = set((1, 2, 3))';
		$m.__track_lines__[1319] = 'SetTest.py, line 1319:\n    self.other = 19';
		$m.__track_lines__[1320] = 'SetTest.py, line 1320:\n    self.otherIsIterable = False';
		$m.__track_lines__[1324] = 'SetTest.py, line 1324:\n    class TestOnlySetsDict(TestOnlySetsInBinaryOps):';
		$m.__track_lines__[1325] = 'SetTest.py, line 1325:\n    def setUp(self):';
		$m.__track_lines__[1326] = 'SetTest.py, line 1326:\n    self.set = set((1, 2, 3))';
		$m.__track_lines__[1327] = 'SetTest.py, line 1327:\n    self.other = {1: 2, 3: 4}';
		$m.__track_lines__[1328] = 'SetTest.py, line 1328:\n    self.otherIsIterable = True';
		$m.__track_lines__[1332] = 'SetTest.py, line 1332:\n    class TestOnlySetsOperator(TestOnlySetsInBinaryOps):';
		$m.__track_lines__[1333] = 'SetTest.py, line 1333:\n    def setUp(self):';
		$m.__track_lines__[1334] = 'SetTest.py, line 1334:\n    self.set = set((1, 2, 3))';
		$m.__track_lines__[1335] = 'SetTest.py, line 1335:\n    self.other = operator.add';
		$m.__track_lines__[1336] = 'SetTest.py, line 1336:\n    self.otherIsIterable = False';
		$m.__track_lines__[1340] = 'SetTest.py, line 1340:\n    class TestOnlySetsTuple(TestOnlySetsInBinaryOps):';
		$m.__track_lines__[1341] = 'SetTest.py, line 1341:\n    def setUp(self):';
		$m.__track_lines__[1342] = 'SetTest.py, line 1342:\n    self.set = set((1, 2, 3))';
		$m.__track_lines__[1343] = 'SetTest.py, line 1343:\n    self.other = (2, 4, 6)';
		$m.__track_lines__[1344] = 'SetTest.py, line 1344:\n    self.otherIsIterable = True';
		$m.__track_lines__[1348] = 'SetTest.py, line 1348:\n    class TestOnlySetsString(TestOnlySetsInBinaryOps):';
		$m.__track_lines__[1349] = 'SetTest.py, line 1349:\n    def setUp(self):';
		$m.__track_lines__[1350] = 'SetTest.py, line 1350:\n    self.set = set((1, 2, 3))';
		$m.__track_lines__[1351] = "SetTest.py, line 1351:\n    self.other = 'abc'";
		$m.__track_lines__[1352] = 'SetTest.py, line 1352:\n    self.otherIsIterable = True';
		$m.__track_lines__[1356] = 'SetTest.py, line 1356:\n    class TestOnlySetsGenerator(TestOnlySetsInBinaryOps):';
		$m.__track_lines__[1357] = 'SetTest.py, line 1357:\n    def setUp(self):';
		$m.__track_lines__[1358] = 'SetTest.py, line 1358:\n    def gen():';
		$m.__track_lines__[1359] = 'SetTest.py, line 1359:\n    for i in xrange(0, 10, 2):';
		$m.__track_lines__[1360] = 'SetTest.py, line 1360:\n    yield i';
		$m.__track_lines__[1362] = 'SetTest.py, line 1362:\n    self.set = set((1, 2, 3))';
		$m.__track_lines__[1363] = 'SetTest.py, line 1363:\n    self.other = gen()';
		$m.__track_lines__[1364] = 'SetTest.py, line 1364:\n    self.otherIsIterable = True';
		$m.__track_lines__[1368] = 'SetTest.py, line 1368:\n    class TestCopying(UnitTest):';
		$m.__track_lines__[1369] = 'SetTest.py, line 1369:\n    def test_copy(self):';
		$m.__track_lines__[1370] = 'SetTest.py, line 1370:\n    dup = self.set.copy()';
		$m.__track_lines__[1371] = 'SetTest.py, line 1371:\n    dup_list = list(dup);';
		$m.__track_lines__[1372] = 'SetTest.py, line 1372:\n    dup_list.sort()';
		$m.__track_lines__[1373] = 'SetTest.py, line 1373:\n    set_list = list(self.set);';
		$m.__track_lines__[1374] = 'SetTest.py, line 1374:\n    set_list.sort()';
		$m.__track_lines__[1375] = 'SetTest.py, line 1375:\n    self.assertEqual(len(dup_list), len(set_list))';
		$m.__track_lines__[1376] = 'SetTest.py, line 1376:\n    for i in range(len(dup_list)):';
		$m.__track_lines__[1377] = 'SetTest.py, line 1377:\n    self.failUnless(dup_list[i] is set_list[i])';
		$m.__track_lines__[1379] = 'SetTest.py, line 1379:\n    def test_deep_copy(self):';
		$m.__track_lines__[1380] = 'SetTest.py, line 1380:\n    dup = copy.deepcopy(self.set)';
		$m.__track_lines__[1382] = 'SetTest.py, line 1382:\n    dup_list = list(dup);';
		$m.__track_lines__[1383] = 'SetTest.py, line 1383:\n    dup_list.sort()';
		$m.__track_lines__[1384] = 'SetTest.py, line 1384:\n    set_list = list(self.set);';
		$m.__track_lines__[1385] = 'SetTest.py, line 1385:\n    set_list.sort()';
		$m.__track_lines__[1386] = 'SetTest.py, line 1386:\n    self.assertEqual(len(dup_list), len(set_list))';
		$m.__track_lines__[1387] = 'SetTest.py, line 1387:\n    for i in range(len(dup_list)):';
		$m.__track_lines__[1388] = 'SetTest.py, line 1388:\n    self.assertEqual(dup_list[i], set_list[i])';
		$m.__track_lines__[1392] = 'SetTest.py, line 1392:\n    class TestCopyingEmpty(TestCopying):';
		$m.__track_lines__[1393] = 'SetTest.py, line 1393:\n    def setUp(self):';
		$m.__track_lines__[1394] = 'SetTest.py, line 1394:\n    self.set = set()';
		$m.__track_lines__[1398] = 'SetTest.py, line 1398:\n    class TestCopyingSingleton(TestCopying):';
		$m.__track_lines__[1399] = 'SetTest.py, line 1399:\n    def setUp(self):';
		$m.__track_lines__[1400] = 'SetTest.py, line 1400:\n    self.set = set(["hello"])';
		$m.__track_lines__[1404] = 'SetTest.py, line 1404:\n    class TestCopyingTriple(TestCopying):';
		$m.__track_lines__[1405] = 'SetTest.py, line 1405:\n    def setUp(self):';
		$m.__track_lines__[1406] = 'SetTest.py, line 1406:\n    self.set = set(["zero", 0, None])';
		$m.__track_lines__[1410] = 'SetTest.py, line 1410:\n    class TestCopyingTuple(TestCopying):';
		$m.__track_lines__[1411] = 'SetTest.py, line 1411:\n    def setUp(self):';
		$m.__track_lines__[1412] = 'SetTest.py, line 1412:\n    self.set = set([(1, 2)])';
		$m.__track_lines__[1416] = 'SetTest.py, line 1416:\n    class TestCopyingNested(TestCopying):';
		$m.__track_lines__[1417] = 'SetTest.py, line 1417:\n    def setUp(self):';
		$m.__track_lines__[1418] = 'SetTest.py, line 1418:\n    self.set = set([((1, 2), (3, 4))])';
		$m.__track_lines__[1422] = 'SetTest.py, line 1422:\n    class TestIdentities(UnitTest):';
		$m.__track_lines__[1423] = 'SetTest.py, line 1423:\n    def setUp(self):';
		$m.__track_lines__[1424] = "SetTest.py, line 1424:\n    self.a = set('abracadabra')";
		$m.__track_lines__[1425] = "SetTest.py, line 1425:\n    self.b = set('alacazam')";
		$m.__track_lines__[1427] = 'SetTest.py, line 1427:\n    def test_binopsVsSubsets(self):';
		$m.__track_lines__[1428] = 'SetTest.py, line 1428:\n    a, b = self.a, self.b';
		$m.__track_lines__[1429] = 'SetTest.py, line 1429:\n    self.assert_(a - b < a)';
		$m.__track_lines__[1430] = 'SetTest.py, line 1430:\n    self.assert_(b - a < b)';
		$m.__track_lines__[1431] = 'SetTest.py, line 1431:\n    self.assert_(a & b < a)';
		$m.__track_lines__[1432] = 'SetTest.py, line 1432:\n    self.assert_(a & b < b)';
		$m.__track_lines__[1433] = 'SetTest.py, line 1433:\n    self.assert_(a | b > a)';
		$m.__track_lines__[1434] = 'SetTest.py, line 1434:\n    self.assert_(a | b > b)';
		$m.__track_lines__[1435] = 'SetTest.py, line 1435:\n    self.assert_(a ^ b < a | b)';
		$m.__track_lines__[1437] = 'SetTest.py, line 1437:\n    def test_commutativity(self):';
		$m.__track_lines__[1438] = 'SetTest.py, line 1438:\n    a, b = self.a, self.b';
		$m.__track_lines__[1439] = 'SetTest.py, line 1439:\n    self.assertEqual(a & b, b & a)';
		$m.__track_lines__[1440] = 'SetTest.py, line 1440:\n    self.assertEqual(a | b, b | a)';
		$m.__track_lines__[1441] = 'SetTest.py, line 1441:\n    self.assertEqual(a ^ b, b ^ a)';
		$m.__track_lines__[1442] = 'SetTest.py, line 1442:\n    if a != b:';
		$m.__track_lines__[1443] = 'SetTest.py, line 1443:\n    self.assertNotEqual(a - b, b - a)';
		$m.__track_lines__[1445] = 'SetTest.py, line 1445:\n    def test_summations(self):';
		$m.__track_lines__[1447] = 'SetTest.py, line 1447:\n    a, b = self.a, self.b';
		$m.__track_lines__[1448] = 'SetTest.py, line 1448:\n    self.assertEqual((a - b) | (a & b) | (b - a), a | b)';
		$m.__track_lines__[1449] = 'SetTest.py, line 1449:\n    self.assertEqual((a & b) | (a ^ b), a | b)';
		$m.__track_lines__[1450] = 'SetTest.py, line 1450:\n    self.assertEqual(a | (b - a), a | b)';
		$m.__track_lines__[1451] = 'SetTest.py, line 1451:\n    self.assertEqual((a - b) | b, a | b)';
		$m.__track_lines__[1452] = 'SetTest.py, line 1452:\n    self.assertEqual((a - b) | (a & b), a)';
		$m.__track_lines__[1453] = 'SetTest.py, line 1453:\n    self.assertEqual((b - a) | (a & b), b)';
		$m.__track_lines__[1454] = 'SetTest.py, line 1454:\n    self.assertEqual((a - b) | (b - a), a ^ b)';
		$m.__track_lines__[1456] = 'SetTest.py, line 1456:\n    def test_exclusion(self):';
		$m.__track_lines__[1458] = 'SetTest.py, line 1458:\n    a, b, zero = self.a, self.b, set()';
		$m.__track_lines__[1459] = 'SetTest.py, line 1459:\n    self.assertEqual((a - b) & b, zero)';
		$m.__track_lines__[1460] = 'SetTest.py, line 1460:\n    self.assertEqual((b - a) & a, zero)';
		$m.__track_lines__[1461] = 'SetTest.py, line 1461:\n    self.assertEqual((a & b) & (a ^ b), zero)';
		$m.__track_lines__[1465] = 'SetTest.py, line 1465:\n    def R(seqn):';
		$m.__track_lines__[1467] = 'SetTest.py, line 1467:\n    for i in seqn:';
		$m.__track_lines__[1468] = 'SetTest.py, line 1468:\n    yield i';
		$m.__track_lines__[1471] = 'SetTest.py, line 1471:\n    class G:';
		$m.__track_lines__[1474] = 'SetTest.py, line 1474:\n    def __init__(self, seqn):';
		$m.__track_lines__[1475] = 'SetTest.py, line 1475:\n    self.seqn = seqn';
		$m.__track_lines__[1477] = 'SetTest.py, line 1477:\n    def __getitem__(self, i):';
		$m.__track_lines__[1478] = 'SetTest.py, line 1478:\n    return self.seqn[i]';
		$m.__track_lines__[1481] = 'SetTest.py, line 1481:\n    class I:';
		$m.__track_lines__[1484] = 'SetTest.py, line 1484:\n    def __init__(self, seqn):';
		$m.__track_lines__[1485] = 'SetTest.py, line 1485:\n    self.seqn = seqn';
		$m.__track_lines__[1486] = 'SetTest.py, line 1486:\n    self.i = 0';
		$m.__track_lines__[1488] = 'SetTest.py, line 1488:\n    def __iter__(self):';
		$m.__track_lines__[1489] = 'SetTest.py, line 1489:\n    return self';
		$m.__track_lines__[1491] = 'SetTest.py, line 1491:\n    def next(self):';
		$m.__track_lines__[1492] = 'SetTest.py, line 1492:\n    if self.i >= len(self.seqn): raise StopIteration';
		$m.__track_lines__[1493] = 'SetTest.py, line 1493:\n    v = self.seqn[self.i]';
		$m.__track_lines__[1494] = 'SetTest.py, line 1494:\n    self.i += 1';
		$m.__track_lines__[1495] = 'SetTest.py, line 1495:\n    return v';
		$m.__track_lines__[1498] = 'SetTest.py, line 1498:\n    class Ig:';
		$m.__track_lines__[1501] = 'SetTest.py, line 1501:\n    def __init__(self, seqn):';
		$m.__track_lines__[1502] = 'SetTest.py, line 1502:\n    self.seqn = seqn';
		$m.__track_lines__[1503] = 'SetTest.py, line 1503:\n    self.i = 0';
		$m.__track_lines__[1505] = 'SetTest.py, line 1505:\n    def __iter__(self):';
		$m.__track_lines__[1506] = 'SetTest.py, line 1506:\n    for val in self.seqn:';
		$m.__track_lines__[1507] = 'SetTest.py, line 1507:\n    yield val';
		$m.__track_lines__[1510] = 'SetTest.py, line 1510:\n    class X:';
		$m.__track_lines__[1513] = 'SetTest.py, line 1513:\n    def __init__(self, seqn):';
		$m.__track_lines__[1514] = 'SetTest.py, line 1514:\n    self.seqn = seqn';
		$m.__track_lines__[1515] = 'SetTest.py, line 1515:\n    self.i = 0';
		$m.__track_lines__[1517] = 'SetTest.py, line 1517:\n    def next(self):';
		$m.__track_lines__[1518] = 'SetTest.py, line 1518:\n    if self.i >= len(self.seqn): raise StopIteration';
		$m.__track_lines__[1519] = 'SetTest.py, line 1519:\n    v = self.seqn[self.i]';
		$m.__track_lines__[1520] = 'SetTest.py, line 1520:\n    self.i += 1';
		$m.__track_lines__[1521] = 'SetTest.py, line 1521:\n    return v';
		$m.__track_lines__[1524] = 'SetTest.py, line 1524:\n    class N:';
		$m.__track_lines__[1527] = 'SetTest.py, line 1527:\n    def __init__(self, seqn):';
		$m.__track_lines__[1528] = 'SetTest.py, line 1528:\n    self.seqn = seqn';
		$m.__track_lines__[1529] = 'SetTest.py, line 1529:\n    self.i = 0';
		$m.__track_lines__[1531] = 'SetTest.py, line 1531:\n    def __iter__(self):';
		$m.__track_lines__[1532] = 'SetTest.py, line 1532:\n    return self';
		$m.__track_lines__[1535] = 'SetTest.py, line 1535:\n    class E:';
		$m.__track_lines__[1538] = 'SetTest.py, line 1538:\n    def __init__(self, seqn):';
		$m.__track_lines__[1539] = 'SetTest.py, line 1539:\n    self.seqn = seqn';
		$m.__track_lines__[1540] = 'SetTest.py, line 1540:\n    self.i = 0';
		$m.__track_lines__[1542] = 'SetTest.py, line 1542:\n    def __iter__(self):';
		$m.__track_lines__[1543] = 'SetTest.py, line 1543:\n    return self';
		$m.__track_lines__[1545] = 'SetTest.py, line 1545:\n    def next(self):';
		$m.__track_lines__[1546] = 'SetTest.py, line 1546:\n    t = 3 // 0';
		$m.__track_lines__[1549] = 'SetTest.py, line 1549:\n    class S:';
		$m.__track_lines__[1552] = 'SetTest.py, line 1552:\n    def __init__(self, seqn):';
		$m.__track_lines__[1553] = 'SetTest.py, line 1553:\n    pass';
		$m.__track_lines__[1555] = 'SetTest.py, line 1555:\n    def __iter__(self):';
		$m.__track_lines__[1556] = 'SetTest.py, line 1556:\n    return self';
		$m.__track_lines__[1558] = 'SetTest.py, line 1558:\n    def next(self):';
		$m.__track_lines__[1559] = 'SetTest.py, line 1559:\n    raise StopIteration';
		$m.__track_lines__[1562] = 'SetTest.py, line 1562:\n    class TestVariousIteratorArgs(UnitTest):';
		$m.__track_lines__[1563] = 'SetTest.py, line 1563:\n    def test_constructor(self):';
		$m.__track_lines__[1564] = 'SetTest.py, line 1564:\n    for cons in (set, frozenset):';
		$m.__track_lines__[1565] = 'SetTest.py, line 1565:\n    for s in (';
		$m.__track_lines__[1567] = 'SetTest.py, line 1567:\n    for g in (G, I, Ig, S, R):';
		$m.__track_lines__[1568] = 'SetTest.py, line 1568:\n    self.assertEqual(sorted(cons(g(s))), sorted(g(s)))';
		$m.__track_lines__[1569] = 'SetTest.py, line 1569:\n    self.assertRaises(TypeError, cons, X(s))';
		$m.__track_lines__[1570] = 'SetTest.py, line 1570:\n    self.assertRaises(TypeError, cons, N(s))';
		$m.__track_lines__[1571] = 'SetTest.py, line 1571:\n    self.assertRaises(ZeroDivisionError, cons, E(s))';
		$m.__track_lines__[1573] = 'SetTest.py, line 1573:\n    def test_inline_methods(self):';
		$m.__track_lines__[1574] = "SetTest.py, line 1574:\n    s = set('november')";
		$m.__track_lines__[1575] = 'SetTest.py, line 1575:\n    for data in (';
		$m.__track_lines__[1577] = 'SetTest.py, line 1577:\n    for meth in (';
		$m.__track_lines__[1580] = 'SetTest.py, line 1580:\n    for g in (G, I, Ig, R):';
		$m.__track_lines__[1581] = 'SetTest.py, line 1581:\n    expected = meth(data)';
		$m.__track_lines__[1582] = 'SetTest.py, line 1582:\n    actual = meth(G(data))';
		$m.__track_lines__[1583] = 'SetTest.py, line 1583:\n    if isinstance(expected, bool):';
		$m.__track_lines__[1584] = 'SetTest.py, line 1584:\n    self.assertEqual(actual, expected)';
		$m.__track_lines__[1586] = 'SetTest.py, line 1586:\n    self.assertEqual(sorted(actual), sorted(expected))';
		$m.__track_lines__[1587] = 'SetTest.py, line 1587:\n    self.assertRaises(TypeError, meth, X(s))';
		$m.__track_lines__[1588] = 'SetTest.py, line 1588:\n    self.assertRaises(TypeError, meth, N(s))';
		$m.__track_lines__[1589] = 'SetTest.py, line 1589:\n    self.assertRaises(ZeroDivisionError, meth, E(s))';
		$m.__track_lines__[1591] = 'SetTest.py, line 1591:\n    def test_inplace_methods(self):';
		$m.__track_lines__[1592] = 'SetTest.py, line 1592:\n    for data in (';
		$m.__track_lines__[1594] = "SetTest.py, line 1594:\n    for methname in ('update', 'intersection_update',";
		$m.__track_lines__[1597] = 'SetTest.py, line 1597:\n    for g in (G, I, Ig, S, R):';
		$m.__track_lines__[1598] = "SetTest.py, line 1598:\n    s = set('january')";
		$m.__track_lines__[1599] = 'SetTest.py, line 1599:\n    t = s.copy()';
		$m.__track_lines__[1600] = 'SetTest.py, line 1600:\n    getattr(s, methname)(list(g(data)))';
		$m.__track_lines__[1601] = 'SetTest.py, line 1601:\n    getattr(t, methname)(g(data))';
		$m.__track_lines__[1602] = 'SetTest.py, line 1602:\n    self.assertEqual(sorted(s), sorted(t))';
		$m.__track_lines__[1604] = "SetTest.py, line 1604:\n    self.assertRaises(TypeError, getattr(set('january'), methname),";
		$m.__track_lines__[1606] = "SetTest.py, line 1606:\n    self.assertRaises(TypeError, getattr(set('january'), methname),";
		$m.__track_lines__[1608] = 'SetTest.py, line 1608:\n    self.assertRaises(ZeroDivisionError,';

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
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_19 = new $p['int'](19);
		var $constant_int_512 = new $p['int'](512);
		var $constant_int_2200 = new $p['int'](2200);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_4096 = new $p['int'](4096);
		var $constant_int_1024 = new $p['int'](1024);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_2048 = new $p['int'](2048);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_2000 = new $p['int'](2000);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1000 = new $p['int'](1000);
		$pyjs.track.module='SetTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['randrange'] = $p['___import___']('random.randrange', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['shuffle'] = $p['___import___']('random.shuffle', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$m['PassThru'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '75558e0f8a0192366bfe3c94d987dbdc';
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=5;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PassThru', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=9;
		$m['check_pass_thru'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			
				$pyjs.track={module:'SetTest',lineno:9};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=9;
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$pyjs.track.lineno=10;
					$generator_state[0]=1;
					$pyjs.__active_exception_stack__ = null;
					throw ($m['PassThru']);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$pyjs.track.lineno=11;
					$pyjs.track.lineno=11;
					$yield_value = $constant_int_1;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					$yielding = true;
					$generator_state[0] = 2;
					return $yield_value;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
				}

				return;
			};
			return $generator;
		};
		$m['check_pass_thru'].__name__ = 'check_pass_thru';

		$m['check_pass_thru'].__bind_type__ = 0;
		$m['check_pass_thru'].__args__ = [null,null];
		$pyjs.track.lineno=14;
		$m['BadCmp'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '940be73323c2dfda98e841d13164551b';
			$pyjs.track.lineno=15;
			$method = $pyjs__bind_method2('__hash__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '940be73323c2dfda98e841d13164551b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:15};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=15;
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=16;
				var $pyjs__ret = $constant_int_1;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__hash__'] = $method;
			$pyjs.track.lineno=18;
			$method = $pyjs__bind_method2('__cmp__', function(other) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '940be73323c2dfda98e841d13164551b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:18};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=18;
				$pyjs.track.lineno=19;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['RuntimeError']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__cmp__'] = $method;
			$pyjs.track.lineno=14;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('BadCmp', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=22;
		$m['ReprWrapper'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '9645148a44e1ed1c8c4977345625d5bc';
			$pyjs.track.lineno=25;
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
					if (self.prototype.__md5__ !== '9645148a44e1ed1c8c4977345625d5bc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:25};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=26;
				$pyjs.track.lineno=26;
				var $pyjs__ret = $p['repr']($p['getattr'](self, 'value'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs.track.lineno=22;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ReprWrapper', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=29;
		$m['HashCountingInt'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'e269246c9ca5d5cd1be8873a176946ed';
			$pyjs.track.lineno=32;
			$method = $pyjs__bind_method2('__init__', function() {
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
					if (self.prototype.__md5__ !== 'e269246c9ca5d5cd1be8873a176946ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:32};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=32;
				$pyjs.track.lineno=33;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hash_count', $constant_int_0) : $p['setattr'](self, 'hash_count', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=35;
			$method = $pyjs__bind_method2('__hash__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e269246c9ca5d5cd1be8873a176946ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs.track={module:'SetTest', lineno:35};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=36;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hash_count', (typeof ($add1=$p['getattr'](self, 'hash_count'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) : $p['setattr'](self, 'hash_count', (typeof ($add1=$p['getattr'](self, 'hash_count'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))); 
				$pyjs.track.lineno=37;
				$pyjs.track.lineno=37;
				var $pyjs__ret = $p['int']['__hash__'](self);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__hash__'] = $method;
			$pyjs.track.lineno=29;
			var $bases = new Array($p['int']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HashCountingInt', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=40;
		$m['TestJointOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '9fe88950c2b5aadca43d27fa45cea2f7';
			$pyjs.track.lineno=43;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

					var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
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
				var word,$assign1;
				$pyjs.track={module:'SetTest', lineno:43};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=44;
				$assign1 = 'simsalabim';
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('word', $assign1) : $p['setattr'](self, 'word', $assign1); 
				word = $assign1;
				$pyjs.track.lineno=45;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('otherword', 'madagascar') : $p['setattr'](self, 'otherword', 'madagascar'); 
				$pyjs.track.lineno=46;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('letters', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') : $p['setattr'](self, 'letters', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'); 
				$pyjs.track.lineno=47;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('s', self['thetype'](word)) : $p['setattr'](self, 's', self['thetype'](word)); 
				$pyjs.track.lineno=48;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('d', $p['dict']['fromkeys'](word)) : $p['setattr'](self, 'd', $p['dict']['fromkeys'](word)); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('test_new_or_init', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				self['assertRaises']($p['TypeError'], $p['getattr'](self, 'thetype'), $p['list']([]), $constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_new_or_init'] = $method;
			$pyjs.track.lineno=53;
			$method = $pyjs__bind_method2('test_uniquification', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var expected,actual;
				$pyjs.track={module:'SetTest', lineno:53};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=53;
				$pyjs.track.lineno=54;
				actual = $p['sorted']($p['getattr'](self, 's'));
				$pyjs.track.lineno=55;
				expected = $p['sorted']($p['getattr'](self, 'd'));
				$pyjs.track.lineno=56;
				self['assertEqual'](actual, expected);
				$pyjs.track.lineno=57;
				self['assertRaises']($m['PassThru'], $p['getattr'](self, 'thetype'), $m['check_pass_thru']());
				$pyjs.track.lineno=58;
				self['assertRaises']($p['TypeError'], $p['getattr'](self, 'thetype'), $p['list']([$p['list']([])]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_uniquification'] = $method;
			$pyjs.track.lineno=60;
			$method = $pyjs__bind_method2('test_len', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len2,$len1;
				$pyjs.track={module:'SetTest', lineno:60};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=61;
				self['assertEqual']((($len1=$p['getattr'](self, 's')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), (($len2=$p['getattr'](self, 'd')) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_len'] = $method;
			$pyjs.track.lineno=63;
			$method = $pyjs__bind_method2('test_contains', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter1_nextval,$iter1_type,$iter1_iter,s,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs.track={module:'SetTest', lineno:63};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=64;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					c = $iter1_nextval;
					$pyjs.track.lineno=65;
					self['assertEqual']($p['getattr'](self, 's').__contains__(c), $p['getattr'](self, 'd').__contains__(c));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=66;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), '__contains__'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=67;
				s = self['thetype']($p['list']([$p['frozenset']($p['getattr'](self, 'letters'))]));
				$pyjs.track.lineno=68;
				self['assert_'](s.__contains__(self['thetype']($p['getattr'](self, 'letters'))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_contains'] = $method;
			$pyjs.track.lineno=70;
			$method = $pyjs__bind_method2('test_union', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_array,c,$iter2_nextval,$iter2_type,$iter2_iter,$or2,C,$iter3_type,$iter3_idx,$iter2_idx,$bool1,u,$iter3_iter,$pyjs__trackstack_size_1,$or1,$iter3_nextval,$iter2_array;
				$pyjs.track={module:'SetTest', lineno:70};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=70;
				$pyjs.track.lineno=71;
				u = self['s']['union']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=72;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					c = $iter2_nextval;
					$pyjs.track.lineno=73;
					self['assertEqual'](u.__contains__(c), ((($bool1=$or1=$p['getattr'](self, 'd').__contains__(c)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1.__nonzero__=='function'?
								$bool1.__nonzero__() :
								(typeof $bool1.__len__=='function'?
									($bool1.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:$p['getattr'](self, 'otherword').__contains__(c)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=74;
				self['assertEqual']($p['getattr'](self, 's'), self['thetype']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=77;
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'union'), $m['check_pass_thru']());
				$pyjs.track.lineno=78;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'union'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=80;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					C = $iter3_nextval;
					$pyjs.track.lineno=81;
					self['assertEqual'](self['thetype']('abcba')['union'](C('cdc')), $p['set']('abcd'));
					$pyjs.track.lineno=82;
					self['assertEqual'](self['thetype']('abcba')['union'](C('efgfe')), $p['set']('abcefg'));
					$pyjs.track.lineno=84;
					self['assertEqual'](self['thetype']('abcba')['union'](C('ccb')), $p['set']('abc'));
					$pyjs.track.lineno=85;
					self['assertEqual'](self['thetype']('abcba')['union'](C('ef')), $p['set']('abcef'));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union'] = $method;
			$pyjs.track.lineno=89;
			$method = $pyjs__bind_method2('test_or', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$pyjs_try_err,v;
				$pyjs.track={module:'SetTest', lineno:89};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=89;
				$pyjs.track.lineno=90;
				i = self['s']['union']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=91;
				self['assertEqual']($p['op_bitor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword'))), i);
				$pyjs.track.lineno=92;
				self['assertEqual']($p['op_bitor2']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'otherword'))), i);
				$pyjs.track.lineno=93;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=94;
					v = $p['op_bitor2']($p['getattr'](self, 's'), $p['getattr'](self, 'otherword'));
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=98;
						self['fail']('s|t did not screen-out general iterables');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=96;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_or'] = $method;
			$pyjs.track.lineno=100;
			$method = $pyjs__bind_method2('test_intersection', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$bool2,c,$iter5_idx,i,$iter4_nextval,$and1,$iter5_array,C,$iter4_idx,s,$iter5_iter,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter5_type,$iter4_iter,$and2;
				$pyjs.track={module:'SetTest', lineno:100};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=100;
				$pyjs.track.lineno=101;
				i = self['s']['intersection']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=102;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					c = $iter4_nextval;
					$pyjs.track.lineno=103;
					self['assertEqual'](i.__contains__(c), ((($bool2=$and1=$p['getattr'](self, 'd').__contains__(c)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['getattr'](self, 'otherword').__contains__(c):$and1));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=104;
				self['assertEqual']($p['getattr'](self, 's'), self['thetype']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=106;
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'intersection'), $m['check_pass_thru']());
				$pyjs.track.lineno=108;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					C = $iter5_nextval;
					$pyjs.track.lineno=109;
					self['assertEqual'](self['thetype']('abcba')['intersection'](C('cdc')), $p['set']('cc'));
					$pyjs.track.lineno=111;
					self['assertEqual'](self['thetype']('abcba')['intersection'](C('efgfe')), $p['set'](''));
					$pyjs.track.lineno=113;
					self['assertEqual'](self['thetype']('abcba')['intersection'](C('ccb')), $p['set']('bc'));
					$pyjs.track.lineno=115;
					self['assertEqual'](self['thetype']('abcba')['intersection'](C('ef')), $p['set'](''));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=119;
				s = self['thetype']('abcba');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection'] = $method;
			$pyjs.track.lineno=127;
			$method = $pyjs__bind_method2('test_isdisjoint', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_type,$iter8_iter,$iter6_iter,$iter6_nextval,$or3,s2,larg,expected,$iter7_type,$or4,C,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$bool3,$iter6_array,$bool6,$iter8_nextval,$bool4,$iter7_idx,actual,rarg,$iter7_nextval,f,$iter7_array,$iter8_array,$pyjs__trackstack_size_2,$pyjs__trackstack_size_3,$pyjs__trackstack_size_1,s1;
				$pyjs.track={module:'SetTest', lineno:127};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=127;
				$pyjs.track.lineno=129;
				if ((($bool4=!(($bool3=$p['hasattr']($p['set'], 'isdisjoint')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$pyjs.track.lineno=130;
					self['fail']('isdisjoint not supported');
					$pyjs.track.lineno=131;
					$pyjs.track.lineno=131;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=133;
				f = function(s1, s2) {
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
					var $bool5;
					$pyjs.track={module:'SetTest',lineno:133};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=133;
					$pyjs.track.lineno=135;
					$pyjs.track.lineno=135;
					var $pyjs__ret = !(($bool5=$p['set'](s1)['intersection'](s2)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) );
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				f.__name__ = 'f';

				f.__bind_type__ = 0;
				f.__args__ = [null,null,['s1'],['s2']];
				$pyjs.track.lineno=137;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = $p['tuple'](['', 'a', 'ab', 'abc', 'ababac', 'cdc', 'cc', 'efgfe', 'ccb', 'ef']);
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					larg = $iter6_nextval;
					$pyjs.track.lineno=138;
					s1 = self['thetype'](larg);
					$pyjs.track.lineno=139;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter7_iter = $p['tuple'](['', 'a', 'ab', 'abc', 'ababac', 'cdc', 'cc', 'efgfe', 'ccb', 'ef']);
					if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter.__iter__();
						$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						rarg = $iter7_nextval;
						$pyjs.track.lineno=141;
						$pyjs__trackstack_size_3=$pyjs.trackstack.length;
						$iter8_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
						if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
							$iter8_type = 0;
						} else {
							$iter8_iter = $iter8_iter.__iter__();
							$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter8_idx = 0;
						while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
							C = $iter8_nextval;
							$pyjs.track.lineno=142;
							s2 = C(rarg);
							$pyjs.track.lineno=143;
							actual = s1['isdisjoint'](s2);
							$pyjs.track.lineno=144;
							expected = f(s1, s2);
							$pyjs.track.lineno=145;
							self['assertEqual'](actual, expected);
							$pyjs.track.lineno=146;
							self['assert_'](((($bool6=$or3=$p['op_is'](actual, true)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
								false :
								(typeof $bool6=='object'?
									(typeof $bool6.__nonzero__=='function'?
										$bool6.__nonzero__() :
										(typeof $bool6.__len__=='function'?
											($bool6.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or3:$p['op_is'](actual, false)));
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_3) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_3);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint'] = $method;
			$pyjs.track.lineno=148;
			$method = $pyjs__bind_method2('test_and', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$pyjs_try_err,v;
				$pyjs.track={module:'SetTest', lineno:148};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=148;
				$pyjs.track.lineno=149;
				i = self['s']['intersection']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=150;
				self['assertEqual']($p['op_bitand2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword'))), i);
				$pyjs.track.lineno=151;
				self['assertEqual']($p['op_bitand2']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'otherword'))), i);
				$pyjs.track.lineno=152;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=153;
					v = $p['op_bitand2']($p['getattr'](self, 's'), $p['getattr'](self, 'otherword'));
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=157;
						self['fail']('s&t did not screen-out general iterables');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=155;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_and'] = $method;
			$pyjs.track.lineno=159;
			$method = $pyjs__bind_method2('test_difference', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter10_nextval,$iter9_iter,i,$and4,$and3,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,C,$bool7,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter9_array,$iter10_idx;
				$pyjs.track={module:'SetTest', lineno:159};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=159;
				$pyjs.track.lineno=160;
				i = self['s']['difference']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=161;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter9_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					c = $iter9_nextval;
					$pyjs.track.lineno=162;
					self['assertEqual'](i.__contains__(c), ((($bool7=$and3=$p['getattr'](self, 'd').__contains__(c)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7.__nonzero__=='function'?
								$bool7.__nonzero__() :
								(typeof $bool7.__len__=='function'?
									($bool7.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['getattr'](self, 'otherword').__contains__(c):$and3));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=163;
				self['assertEqual']($p['getattr'](self, 's'), self['thetype']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=165;
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'difference'), $m['check_pass_thru']());
				$pyjs.track.lineno=166;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'difference'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=168;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter10_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					C = $iter10_nextval;
					$pyjs.track.lineno=169;
					self['assertEqual'](self['thetype']('abcba')['difference'](C('cdc')), $p['set']('ab'));
					$pyjs.track.lineno=171;
					self['assertEqual'](self['thetype']('abcba')['difference'](C('efgfe')), $p['set']('abc'));
					$pyjs.track.lineno=173;
					self['assertEqual'](self['thetype']('abcba')['difference'](C('ccb')), $p['set']('a'));
					$pyjs.track.lineno=175;
					self['assertEqual'](self['thetype']('abcba')['difference'](C('ef')), $p['set']('abc'));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference'] = $method;
			$pyjs.track.lineno=192;
			$method = $pyjs__bind_method2('test_symmetric_difference', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,c,$iter12_idx,i,$iter11_iter,$iter11_type,$iter12_array,C,$iter12_iter,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$iter12_nextval;
				$pyjs.track={module:'SetTest', lineno:192};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=192;
				$pyjs.track.lineno=193;
				i = self['s']['symmetric_difference']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=194;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter11_iter = $p['getattr'](self, 'letters');
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					c = $iter11_nextval;
					$pyjs.track.lineno=195;
					self['assertEqual'](i.__contains__(c), $p['op_bitxor2']($p['getattr'](self, 'd').__contains__(c), $p['getattr'](self, 'otherword').__contains__(c)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=196;
				self['assertEqual']($p['getattr'](self, 's'), self['thetype']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=198;
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference'), $m['check_pass_thru']());
				$pyjs.track.lineno=200;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=202;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter12_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
				if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter.__iter__();
					$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					C = $iter12_nextval;
					$pyjs.track.lineno=204;
					self['assertEqual'](self['thetype']('abcba')['symmetric_difference'](C('cdc')), $p['set']('abd'));
					$pyjs.track.lineno=207;
					self['assertEqual'](self['thetype']('abcba')['symmetric_difference'](C('efgfe')), $p['set']('abcefg'));
					$pyjs.track.lineno=210;
					self['assertEqual'](self['thetype']('abcba')['symmetric_difference'](C('ccb')), $p['set']('a'));
					$pyjs.track.lineno=211;
					self['assertEqual'](self['thetype']('abcba')['symmetric_difference'](C('ef')), $p['set']('abcef'));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_symmetric_difference'] = $method;
			$pyjs.track.lineno=214;
			$method = $pyjs__bind_method2('test_xor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$pyjs_try_err,v;
				$pyjs.track={module:'SetTest', lineno:214};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=214;
				$pyjs.track.lineno=215;
				i = self['s']['symmetric_difference']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=216;
				self['assertEqual']($p['op_bitxor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword'))), i);
				$pyjs.track.lineno=217;
				self['assertEqual']($p['op_bitxor2']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'otherword'))), i);
				$pyjs.track.lineno=218;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=219;
					v = $p['op_bitxor2']($p['getattr'](self, 's'), $p['getattr'](self, 'otherword'));
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=223;
						self['fail']('s^t did not screen-out general iterables');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=221;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_xor'] = $method;
			$pyjs.track.lineno=225;
			$method = $pyjs__bind_method2('test_equality', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:225};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=225;
				$pyjs.track.lineno=226;
				self['assertEqual']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=227;
				self['assertEqual']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=228;
				self['assertEqual']($p['op_eq']($p['getattr'](self, 's'), $p['getattr'](self, 'word')), false);
				$pyjs.track.lineno=229;
				self['assertNotEqual']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')));
				$pyjs.track.lineno=230;
				self['assertNotEqual']($p['getattr'](self, 's'), $p['frozenset']($p['getattr'](self, 'otherword')));
				$pyjs.track.lineno=231;
				self['assertEqual'](!$p['op_eq']($p['getattr'](self, 's'), $p['getattr'](self, 'word')), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_equality'] = $method;
			$pyjs.track.lineno=233;
			$method = $pyjs__bind_method2('test_setOfFrozensets', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s,t,$len3;
				$pyjs.track={module:'SetTest', lineno:233};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=233;
				$pyjs.track.lineno=234;
				t = $p['map']($p['frozenset'], $p['list'](['abcdef', 'bcd', 'bdcb', 'fed', 'fedccba']));
				$pyjs.track.lineno=235;
				s = self['thetype'](t);
				$pyjs.track.lineno=236;
				self['assertEqual']((($len3=s) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3))))), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_setOfFrozensets'] = $method;
			$pyjs.track.lineno=238;
			$method = $pyjs__bind_method2('test_compare', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:238};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=238;
				$pyjs.track.lineno=239;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), '__cmp__'), $p['getattr'](self, 's'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_compare'] = $method;
			$pyjs.track.lineno=241;
			$method = $pyjs__bind_method2('test_sub_and_super', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp15,$cmp14,$cmp17,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$cmp18,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$cmp9,$cmp8,q,p,r;
				$pyjs.track={module:'SetTest', lineno:241};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=241;
				$pyjs.track.lineno=242;
				var $tupleassign1 = $p['__ass_unpack']($p['map']($p['getattr'](self, 'thetype'), $p['list'](['ab', 'abcde', 'def'])), 3, null);
				p = $tupleassign1[0];
				q = $tupleassign1[1];
				r = $tupleassign1[2];
				$pyjs.track.lineno=243;
				self['assert_'](((($cmp1=p)===($cmp2=q)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1));
				$pyjs.track.lineno=244;
				self['assert_'](((($cmp3=p)===($cmp4=q)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) < 1));
				$pyjs.track.lineno=245;
				self['assert_'](((($cmp5=q)===($cmp6=q)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) < 1));
				$pyjs.track.lineno=246;
				self['assert_'](((($cmp7=q)===($cmp8=p)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1));
				$pyjs.track.lineno=247;
				self['assert_'](((((($cmp9=q)===($cmp10=p)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))))|1) == 1));
				$pyjs.track.lineno=248;
				self['failIf'](((($cmp11=q)===($cmp12=r)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1));
				$pyjs.track.lineno=249;
				self['failIf'](((($cmp13=q)===($cmp14=r)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) < 1));
				$pyjs.track.lineno=250;
				self['failIf'](((($cmp15=q)===($cmp16=r)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1));
				$pyjs.track.lineno=251;
				self['failIf'](((((($cmp17=q)===($cmp18=r)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))))|1) == 1));
				$pyjs.track.lineno=252;
				self['assert_']($p['set']('a')['issubset']('abc'));
				$pyjs.track.lineno=253;
				self['assert_']($p['set']('abc')['issuperset']('a'));
				$pyjs.track.lineno=254;
				self['failIf']($p['set']('a')['issubset']('cbs'));
				$pyjs.track.lineno=255;
				self['failIf']($p['set']('cbs')['issuperset']('a'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sub_and_super'] = $method;
			$pyjs.track.lineno=270;
			$method = $pyjs__bind_method2('test_badcmp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9fe88950c2b5aadca43d27fa45cea2f7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,s;
				$pyjs.track={module:'SetTest', lineno:270};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=270;
				$pyjs.track.lineno=271;
				s = self['thetype']($p['list']([$m['BadCmp']()]));
				$pyjs.track.lineno=273;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=274;
					s = self['thetype']($p['list']([$m['BadCmp'](), $m['BadCmp']()]));
					$pyjs.track.lineno=276;
					self['fail']('Issue #571 Set allows adding objects with bad comparison methods');
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
					$pyjs.track.module='SetTest';
					if (($pyjs_try_err_name == $p['RuntimeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['RuntimeError'])) {
						$pyjs.track.lineno=278;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_badcmp'] = $method;
			$pyjs.track.lineno=40;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestJointOps', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=313;
		$m['SetTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '60b3f9ea28074b7d9e2ae258b8628f8d';
			$pyjs.track.lineno=314;
			$cls_definition['thetype'] = $p['set'];
			$pyjs.track.lineno=316;
			$method = $pyjs__bind_method2('test_init', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs.track={module:'SetTest', lineno:316};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=316;
				$pyjs.track.lineno=317;
				s = self['thetype']();
				$pyjs.track.lineno=318;
				s['__init__']($p['getattr'](self, 'word'));
				$pyjs.track.lineno=319;
				self['assertEqual'](s, $p['set']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=320;
				s['__init__']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=321;
				self['assertEqual'](s, $p['set']($p['getattr'](self, 'otherword')));
				$pyjs.track.lineno=322;
				self['assertRaises']($p['TypeError'], $p['getattr'](s, '__init__'), s, $constant_int_2);
				$pyjs.track.lineno=323;
				self['assertRaises']($p['TypeError'], $p['getattr'](s, '__init__'), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_init'] = $method;
			$pyjs.track.lineno=330;
			$method = $pyjs__bind_method2('test_hash', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:330};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=330;
				$pyjs.track.lineno=331;
				self['assertRaises']($p['TypeError'], $p['hash'], $p['getattr'](self, 's'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hash'] = $method;
			$pyjs.track.lineno=333;
			$method = $pyjs__bind_method2('test_clear', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len4;
				$pyjs.track={module:'SetTest', lineno:333};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=333;
				$pyjs.track.lineno=334;
				self['s']['clear']();
				$pyjs.track.lineno=335;
				self['assertEqual']($p['getattr'](self, 's'), $p['set']());
				$pyjs.track.lineno=336;
				self['assertEqual']((($len4=$p['getattr'](self, 's')) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4))))), $constant_int_0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_clear'] = $method;
			$pyjs.track.lineno=338;
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dup;
				$pyjs.track={module:'SetTest', lineno:338};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=338;
				$pyjs.track.lineno=339;
				dup = self['s']['copy']();
				$pyjs.track.lineno=340;
				self['assertEqual']($p['getattr'](self, 's'), dup);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$pyjs.track.lineno=343;
			$method = $pyjs__bind_method2('test_add', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dup;
				$pyjs.track={module:'SetTest', lineno:343};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=343;
				$pyjs.track.lineno=344;
				self['s']['add']('Q');
				$pyjs.track.lineno=345;
				self['assert_']($p['getattr'](self, 's').__contains__('Q'));
				$pyjs.track.lineno=346;
				dup = self['s']['copy']();
				$pyjs.track.lineno=347;
				self['s']['add']('Q');
				$pyjs.track.lineno=348;
				self['assertEqual']($p['getattr'](self, 's'), dup);
				$pyjs.track.lineno=349;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'add'), $p['list']([]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_add'] = $method;
			$pyjs.track.lineno=351;
			$method = $pyjs__bind_method2('test_remove', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs.track={module:'SetTest', lineno:351};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=351;
				$pyjs.track.lineno=352;
				self['s']['remove']('a');
				$pyjs.track.lineno=353;
				self['assert_'](!$p['getattr'](self, 's').__contains__('a'));
				$pyjs.track.lineno=354;
				self['assertRaises']($p['KeyError'], $p['getattr']($p['getattr'](self, 's'), 'remove'), 'Q');
				$pyjs.track.lineno=355;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'remove'), $p['list']([]));
				$pyjs.track.lineno=356;
				s = self['thetype']($p['list']([$p['frozenset']($p['getattr'](self, 'word'))]));
				$pyjs.track.lineno=357;
				self['assert_'](s.__contains__(self['thetype']($p['getattr'](self, 'word'))));
				$pyjs.track.lineno=358;
				s['remove'](self['thetype']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=359;
				self['assert_'](!s.__contains__(self['thetype']($p['getattr'](self, 'word'))));
				$pyjs.track.lineno=360;
				self['assertRaises']($p['KeyError'], $p['getattr']($p['getattr'](self, 's'), 'remove'), self['thetype']($p['getattr'](self, 'word')));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove'] = $method;
			$pyjs.track.lineno=362;
			$method = $pyjs__bind_method2('test_remove_keyerror_unpacking', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_nextval,$iter13_iter,$iter13_type,v1,v2,$pyjs_try_err,$iter13_idx,$pyjs__trackstack_size_1,e,$2,$iter13_array,$1;
				$pyjs.track={module:'SetTest', lineno:362};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=362;
				$pyjs.track.lineno=364;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter13_iter = $p['list'](['Q', $p['tuple']([$constant_int_1])]);
				if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter.__iter__();
					$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					v1 = $iter13_nextval;
					$pyjs.track.lineno=365;
					var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=366;
						self['s']['remove'](v1);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_2 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=371;
							self['fail']();
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='SetTest';
							if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=368;
								v2 = (typeof ($1=$p['getattr'](e, 'args')).__array != 'undefined'?
									((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
										$1.__getitem__($2)):
										$1.__getitem__($constant_int_0));
								$pyjs.track.lineno=369;
								self['assertEqual'](v1, v2);
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_keyerror_unpacking'] = $method;
			$pyjs.track.lineno=373;
			$method = $pyjs__bind_method2('test_remove_keyerror_set', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$pyjs_try_err,key,$6,$4,$5,$3;
				$pyjs.track={module:'SetTest', lineno:373};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=373;
				$pyjs.track.lineno=374;
				key = self['thetype']($p['list']([$constant_int_3, $constant_int_4]));
				$pyjs.track.lineno=375;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=376;
					self['s']['remove'](key);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=381;
						self['fail']();
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							e = $pyjs_try_err;
							$pyjs.track.lineno=378;
							self['assertTrue']($p['op_is']((typeof ($3=e).__array != 'undefined'?
								((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
									$3.__getitem__($4)):
									$3.__getitem__($constant_int_0)), key), $p['sprintf']('KeyError should be %s, not %s', $p['tuple']([key, (typeof ($5=e).__array != 'undefined'?
								((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
									$5.__getitem__($6)):
									$5.__getitem__($constant_int_0))])));
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_keyerror_set'] = $method;
			$pyjs.track.lineno=383;
			$method = $pyjs__bind_method2('test_discard', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs.track={module:'SetTest', lineno:383};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=383;
				$pyjs.track.lineno=384;
				self['s']['discard']('a');
				$pyjs.track.lineno=385;
				self['assert_'](!$p['getattr'](self, 's').__contains__('a'));
				$pyjs.track.lineno=386;
				self['s']['discard']('Q');
				$pyjs.track.lineno=387;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'discard'), $p['list']([]));
				$pyjs.track.lineno=388;
				s = self['thetype']($p['list']([$p['frozenset']($p['getattr'](self, 'word'))]));
				$pyjs.track.lineno=389;
				self['assert_'](s.__contains__(self['thetype']($p['getattr'](self, 'word'))));
				$pyjs.track.lineno=390;
				s['discard'](self['thetype']($p['getattr'](self, 'word')));
				$pyjs.track.lineno=391;
				self['assert_'](!s.__contains__(self['thetype']($p['getattr'](self, 'word'))));
				$pyjs.track.lineno=392;
				s['discard'](self['thetype']($p['getattr'](self, 'word')));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_discard'] = $method;
			$pyjs.track.lineno=394;
			$method = $pyjs__bind_method2('test_pop', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,i,elem,$len5,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
				$pyjs.track={module:'SetTest', lineno:394};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=394;
				$pyjs.track.lineno=395;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter14_iter = $p['xrange']((($len5=$p['getattr'](self, 's')) === null?$constant_int_0:
					(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
								$p['len']($len5))))));
				if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter.__iter__();
					$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
					$pyjs.track.lineno=396;
					elem = self['s']['pop']();
					$pyjs.track.lineno=397;
					self['assert_'](!$p['getattr'](self, 's').__contains__(elem));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=398;
				self['assertRaises']($p['KeyError'], $p['getattr']($p['getattr'](self, 's'), 'pop'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_pop'] = $method;
			$pyjs.track.lineno=400;
			$method = $pyjs__bind_method2('test_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,$iter18_iter,$iter16_idx,$iter17_type,$iter16_iter,$iter17_iter,$iter15_iter,$iter16_type,$add3,$iter19_nextval,$iter19_iter,$iter18_idx,$iter16_nextval,$iter18_nextval,$iter17_nextval,C,$iter15_nextval,$iter15_type,$iter15_array,$iter19_array,$iter17_array,$iter16_array,c,$iter19_idx,$iter18_array,$iter15_idx,q,p,s,$iter19_type,$pyjs__trackstack_size_2,t,$add4,$pyjs__trackstack_size_1,$iter17_idx,retval;
				$pyjs.track={module:'SetTest', lineno:400};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=400;
				$pyjs.track.lineno=401;
				retval = self['s']['update']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=402;
				self['assertEqual'](retval, null);
				$pyjs.track.lineno=404;
				t = (typeof ($add3=$p['getattr'](self, 'word'))==typeof ($add4=$p['getattr'](self, 'otherword')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$pyjs.track.lineno=405;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter15_iter = t;
				if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter.__iter__();
					$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					c = $iter15_nextval;
					$pyjs.track.lineno=406;
					self['assert_']($p['getattr'](self, 's').__contains__(c));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=407;
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'update'), $m['check_pass_thru']());
				$pyjs.track.lineno=408;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'update'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=409;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter16_iter = $p['tuple']([$p['tuple'](['cdc', 'abcd']), $p['tuple'](['efgfe', 'abcefg']), $p['tuple'](['ccb', 'abc']), $p['tuple'](['ef', 'abcef'])]);
				if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter.__iter__();
					$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter16_nextval, 2, null);
					p = $tupleassign2[0];
					q = $tupleassign2[1];
					$pyjs.track.lineno=412;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter17_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
						$iter17_type = 0;
					} else {
						$iter17_iter = $iter17_iter.__iter__();
						$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter17_idx = 0;
					while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
						C = $iter17_nextval;
						$pyjs.track.lineno=413;
						s = self['thetype']('abcba');
						$pyjs.track.lineno=414;
						self['assertEqual'](s['update'](C(p)), null);
						$pyjs.track.lineno=415;
						self['assertEqual'](s, $p['set'](q));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=417;
				$pyjs.track.lineno=417;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
				$pyjs.track.lineno=418;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter18_iter = $p['tuple'](['cdc', 'efgfe', 'ccb', 'ef', 'abcda']);
				if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter.__iter__();
					$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					p = $iter18_nextval;
					$pyjs.track.lineno=419;
					q = 'ahi';
					$pyjs.track.lineno=421;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter19_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
						$iter19_type = 0;
					} else {
						$iter19_iter = $iter19_iter.__iter__();
						$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter19_idx = 0;
					while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
						C = $iter19_nextval;
						$pyjs.track.lineno=422;
						s = self['thetype']('abcba');
						$pyjs.track.lineno=423;
						self['assertEqual'](s['update'](C(p), C(q)), null);
						$pyjs.track.lineno=424;
						self['assertEqual'](s, $p['op_bitor']([$p['set'](s), $p['set'](p), $p['set'](q)]));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update'] = $method;
			$pyjs.track.lineno=426;
			$method = $pyjs__bind_method2('test_ior', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_iter,$iter20_nextval,$iter20_type,$pyjs__trackstack_size_1,c,$iter20_idx,$add6,t,$add5,$bool8,$iter20_array;
				$pyjs.track={module:'SetTest', lineno:426};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=426;
				$pyjs.track.lineno=427;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('s', $p['op_bitor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))) : $p['setattr'](self, 's', $p['op_bitor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))); 
				$pyjs.track.lineno=429;
				t = (typeof ($add5=$p['getattr'](self, 'word'))==typeof ($add6=$p['getattr'](self, 'otherword')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				$pyjs.track.lineno=430;
				if ((($bool8=$p['isinstance']($p['getattr'](self, 's'), $p['set'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					$pyjs.track.lineno=431;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter20_iter = t;
					if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
						$iter20_type = 0;
					} else {
						$iter20_iter = $iter20_iter.__iter__();
						$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter20_idx = 0;
					while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
						c = $iter20_nextval;
						$pyjs.track.lineno=432;
						self['assert_']($p['getattr'](self, 's').__contains__(c));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				else {
					$pyjs.track.lineno=434;
					self['fail']('|= result not a set');
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ior'] = $method;
			$pyjs.track.lineno=437;
			$method = $pyjs__bind_method2('test_intersection_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter23_type,$iter22_array,$bool10,C,$iter23_idx,$iter22_type,q,$iter23_iter,t,$iter22_iter,$iter21_idx,$iter21_nextval,$iter22_nextval,$and5,$and6,$iter21_iter,$iter23_array,$bool9,c,$iter23_nextval,ss,$iter22_idx,$iter21_type,p,s,$pyjs__trackstack_size_2,$add7,$iter21_array,$pyjs__trackstack_size_1,$add8,retval;
				$pyjs.track={module:'SetTest', lineno:437};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=437;
				$pyjs.track.lineno=438;
				retval = self['s']['intersection_update']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=439;
				self['assertEqual'](retval, null);
				$pyjs.track.lineno=441;
				t = (typeof ($add7=$p['getattr'](self, 'word'))==typeof ($add8=$p['getattr'](self, 'otherword')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				$pyjs.track.lineno=442;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter21_iter = t;
				if (typeof ($iter21_array = $iter21_iter.__array) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter.__iter__();
					$iter21_type = typeof ($iter21_array = $iter21_iter.__array) != 'undefined'? 0 : (typeof $iter21_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					c = $iter21_nextval;
					$pyjs.track.lineno=443;
					if ((($bool10=((($bool9=$and5=$p['getattr'](self, 'otherword').__contains__(c)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9.__nonzero__=='function'?
								$bool9.__nonzero__() :
								(typeof $bool9.__len__=='function'?
									($bool9.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['getattr'](self, 'word').__contains__(c):$and5)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						$pyjs.track.lineno=444;
						self['assert_']($p['getattr'](self, 's').__contains__(c));
					}
					else {
						$pyjs.track.lineno=446;
						self['assert_'](!$p['getattr'](self, 's').__contains__(c));
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=447;
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'intersection_update'), $m['check_pass_thru']());
				$pyjs.track.lineno=449;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'intersection_update'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=450;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter22_iter = $p['tuple']([$p['tuple'](['cdc', 'c']), $p['tuple'](['efgfe', '']), $p['tuple'](['ccb', 'bc']), $p['tuple'](['ef', ''])]);
				if (typeof ($iter22_array = $iter22_iter.__array) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter.__iter__();
					$iter22_type = typeof ($iter22_array = $iter22_iter.__array) != 'undefined'? 0 : (typeof $iter22_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter22_nextval, 2, null);
					p = $tupleassign3[0];
					q = $tupleassign3[1];
					$pyjs.track.lineno=452;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter23_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
						$iter23_type = 0;
					} else {
						$iter23_iter = $iter23_iter.__iter__();
						$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter23_idx = 0;
					while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
						C = $iter23_nextval;
						$pyjs.track.lineno=453;
						s = self['thetype']('abcba');
						$pyjs.track.lineno=454;
						self['assertEqual'](s['intersection_update'](C(p)), null);
						$pyjs.track.lineno=455;
						self['assertEqual'](s, $p['set'](q));
						$pyjs.track.lineno=456;
						ss = 'abcba';
						$pyjs.track.lineno=457;
						s = self['thetype'](ss);
						$pyjs.track.lineno=458;
						t = 'cbc';
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_update'] = $method;
			$pyjs.track.lineno=463;
			$method = $pyjs__bind_method2('test_iand', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,c,$iter24_idx,$bool11,$bool13,$iter24_type,$bool12,$iter24_array,$add10,t,$pyjs__trackstack_size_1,$and7,$add9,$iter24_iter,$iter24_nextval;
				$pyjs.track={module:'SetTest', lineno:463};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=463;
				$pyjs.track.lineno=464;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('s', $p['op_bitand2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))) : $p['setattr'](self, 's', $p['op_bitand2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))); 
				$pyjs.track.lineno=466;
				t = (typeof ($add9=$p['getattr'](self, 'word'))==typeof ($add10=$p['getattr'](self, 'otherword')) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				$pyjs.track.lineno=467;
				if ((($bool11=$p['isinstance']($p['getattr'](self, 's'), $p['set'])) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					$pyjs.track.lineno=468;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter24_iter = t;
					if (typeof ($iter24_array = $iter24_iter.__array) != 'undefined') {
						$iter24_type = 0;
					} else {
						$iter24_iter = $iter24_iter.__iter__();
						$iter24_type = typeof ($iter24_array = $iter24_iter.__array) != 'undefined'? 0 : (typeof $iter24_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter24_idx = 0;
					while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
						c = $iter24_nextval;
						$pyjs.track.lineno=469;
						if ((($bool13=((($bool12=$and7=$p['getattr'](self, 'otherword').__contains__(c)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12.__nonzero__=='function'?
									$bool12.__nonzero__() :
									(typeof $bool12.__len__=='function'?
										($bool12.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['getattr'](self, 'word').__contains__(c):$and7)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
								false :
								(typeof $bool13=='object'?
									(typeof $bool13.__nonzero__=='function'?
										$bool13.__nonzero__() :
										(typeof $bool13.__len__=='function'?
											($bool13.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=470;
							self['assert_']($p['getattr'](self, 's').__contains__(c));
						}
						else {
							$pyjs.track.lineno=472;
							self['assert_'](!$p['getattr'](self, 's').__contains__(c));
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				else {
					$pyjs.track.lineno=474;
					self['fail']('&= result not a set');
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_iand'] = $method;
			$pyjs.track.lineno=476;
			$method = $pyjs__bind_method2('test_difference_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter25_nextval,$iter26_nextval,$iter25_array,$bool14,$bool15,$iter26_idx,$iter26_array,$iter27_nextval,$iter27_array,$iter26_type,$iter27_iter,$iter26_iter,$iter27_type,$and9,C,$and10,$add11,$add12,$iter27_idx,$iter25_type,c,$iter25_iter,q,p,s,$pyjs__trackstack_size_2,t,$iter25_idx,$pyjs__trackstack_size_1,retval;
				$pyjs.track={module:'SetTest', lineno:476};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=476;
				$pyjs.track.lineno=477;
				retval = self['s']['difference_update']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=478;
				self['assertEqual'](retval, null);
				$pyjs.track.lineno=480;
				t = (typeof ($add11=$p['getattr'](self, 'word'))==typeof ($add12=$p['getattr'](self, 'otherword')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
				$pyjs.track.lineno=481;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter25_iter = t;
				if (typeof ($iter25_array = $iter25_iter.__array) != 'undefined') {
					$iter25_type = 0;
				} else {
					$iter25_iter = $iter25_iter.__iter__();
					$iter25_type = typeof ($iter25_array = $iter25_iter.__array) != 'undefined'? 0 : (typeof $iter25_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter25_idx = 0;
				while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
					c = $iter25_nextval;
					$pyjs.track.lineno=482;
					if ((($bool15=((($bool14=$and9=$p['getattr'](self, 'word').__contains__(c)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14.__nonzero__=='function'?
								$bool14.__nonzero__() :
								(typeof $bool14.__len__=='function'?
									($bool14.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['getattr'](self, 'otherword').__contains__(c):$and9)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
						$pyjs.track.lineno=483;
						self['assert_']($p['getattr'](self, 's').__contains__(c));
					}
					else {
						$pyjs.track.lineno=485;
						self['assert_'](!$p['getattr'](self, 's').__contains__(c));
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=486;
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'difference_update'), $m['check_pass_thru']());
				$pyjs.track.lineno=487;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'difference_update'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=488;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference_update'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=489;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter26_iter = $p['tuple']([$p['tuple'](['cdc', 'ab']), $p['tuple'](['efgfe', 'abc']), $p['tuple'](['ccb', 'a']), $p['tuple'](['ef', 'abc'])]);
				if (typeof ($iter26_array = $iter26_iter.__array) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter.__iter__();
					$iter26_type = typeof ($iter26_array = $iter26_iter.__array) != 'undefined'? 0 : (typeof $iter26_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter26_nextval, 2, null);
					p = $tupleassign4[0];
					q = $tupleassign4[1];
					$pyjs.track.lineno=492;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter27_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter27_array = $iter27_iter.__array) != 'undefined') {
						$iter27_type = 0;
					} else {
						$iter27_iter = $iter27_iter.__iter__();
						$iter27_type = typeof ($iter27_array = $iter27_iter.__array) != 'undefined'? 0 : (typeof $iter27_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter27_idx = 0;
					while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
						C = $iter27_nextval;
						$pyjs.track.lineno=493;
						s = self['thetype']('abcba');
						$pyjs.track.lineno=494;
						self['assertEqual'](s['difference_update'](C(p)), null);
						$pyjs.track.lineno=495;
						self['assertEqual'](s, $p['set'](q));
						$pyjs.track.lineno=497;
						s = self['thetype']('abcdefghih');
						$pyjs.track.lineno=500;
						self['assertEqual'](s, self['thetype']('abcdefghih'));
						$pyjs.track.lineno=502;
						s = self['thetype']('abcdefghih');
						$pyjs.track.lineno=503;
						s['difference_update'](C('aba'));
						$pyjs.track.lineno=504;
						self['assertEqual'](s, self['thetype']('cdefghih'));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_update'] = $method;
			$pyjs.track.lineno=511;
			$method = $pyjs__bind_method2('test_isub', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and12,c,$iter28_array,$iter28_idx,$bool16,$bool17,$add14,$and11,t,$iter28_iter,$add13,$sub2,$sub1,$iter28_type,$pyjs__trackstack_size_1,$iter28_nextval;
				$pyjs.track={module:'SetTest', lineno:511};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=511;
				$pyjs.track.lineno=512;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('s', (typeof ($sub1=$p['getattr'](self, 's'))==typeof ($sub2=$p['set']($p['getattr'](self, 'otherword'))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 's', (typeof ($sub1=$p['getattr'](self, 's'))==typeof ($sub2=$p['set']($p['getattr'](self, 'otherword'))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				$pyjs.track.lineno=514;
				t = (typeof ($add13=$p['getattr'](self, 'word'))==typeof ($add14=$p['getattr'](self, 'otherword')) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				$pyjs.track.lineno=515;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter28_iter = t;
				if (typeof ($iter28_array = $iter28_iter.__array) != 'undefined') {
					$iter28_type = 0;
				} else {
					$iter28_iter = $iter28_iter.__iter__();
					$iter28_type = typeof ($iter28_array = $iter28_iter.__array) != 'undefined'? 0 : (typeof $iter28_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter28_idx = 0;
				while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
					c = $iter28_nextval;
					$pyjs.track.lineno=516;
					if ((($bool17=((($bool16=$and11=$p['getattr'](self, 'word').__contains__(c)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['getattr'](self, 'otherword').__contains__(c):$and11)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						$pyjs.track.lineno=517;
						self['assert_']($p['getattr'](self, 's').__contains__(c));
					}
					else {
						$pyjs.track.lineno=519;
						self['assert_'](!$p['getattr'](self, 's').__contains__(c));
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isub'] = $method;
			$pyjs.track.lineno=521;
			$method = $pyjs__bind_method2('test_symmetric_difference_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$iter31_nextval,C,$iter30_array,$iter30_nextval,$iter29_type,$iter31_idx,$iter29_array,$iter30_type,$iter31_array,$add15,$add16,$iter29_nextval,$iter30_idx,$iter31_type,c,$iter30_iter,$iter29_iter,q,p,s,$pyjs__trackstack_size_2,t,$pyjs__trackstack_size_1,$iter29_idx,retval,$iter31_iter;
				$pyjs.track={module:'SetTest', lineno:521};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=521;
				$pyjs.track.lineno=522;
				retval = self['s']['symmetric_difference_update']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=523;
				self['assertEqual'](retval, null);
				$pyjs.track.lineno=525;
				t = (typeof ($add15=$p['getattr'](self, 'word'))==typeof ($add16=$p['getattr'](self, 'otherword')) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
				$pyjs.track.lineno=526;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter29_iter = t;
				if (typeof ($iter29_array = $iter29_iter.__array) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter.__iter__();
					$iter29_type = typeof ($iter29_array = $iter29_iter.__array) != 'undefined'? 0 : (typeof $iter29_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					c = $iter29_nextval;
					$pyjs.track.lineno=527;
					if ((($bool18=$p['op_bitxor2']($p['getattr'](self, 'word').__contains__(c), $p['getattr'](self, 'otherword').__contains__(c))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						$pyjs.track.lineno=528;
						self['assert_']($p['getattr'](self, 's').__contains__(c));
					}
					else {
						$pyjs.track.lineno=530;
						self['assert_'](!$p['getattr'](self, 's').__contains__(c));
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=531;
				self['assertRaises']($m['PassThru'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference_update'), $m['check_pass_thru']());
				$pyjs.track.lineno=533;
				self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 's'), 'symmetric_difference_update'), $p['list']([$p['list']([])]));
				$pyjs.track.lineno=534;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter30_iter = $p['tuple']([$p['tuple'](['cdc', 'abd']), $p['tuple'](['efgfe', 'abcefg']), $p['tuple'](['ccb', 'a']), $p['tuple'](['ef', 'abcef'])]);
				if (typeof ($iter30_array = $iter30_iter.__array) != 'undefined') {
					$iter30_type = 0;
				} else {
					$iter30_iter = $iter30_iter.__iter__();
					$iter30_type = typeof ($iter30_array = $iter30_iter.__array) != 'undefined'? 0 : (typeof $iter30_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter30_idx = 0;
				while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter30_nextval, 2, null);
					p = $tupleassign5[0];
					q = $tupleassign5[1];
					$pyjs.track.lineno=537;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter31_iter = $p['tuple']([$p['set'], $p['frozenset'], $p['getattr']($p['dict'], 'fromkeys'), $p['str'], $p['list'], $p['tuple']]);
					if (typeof ($iter31_array = $iter31_iter.__array) != 'undefined') {
						$iter31_type = 0;
					} else {
						$iter31_iter = $iter31_iter.__iter__();
						$iter31_type = typeof ($iter31_array = $iter31_iter.__array) != 'undefined'? 0 : (typeof $iter31_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter31_idx = 0;
					while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
						C = $iter31_nextval;
						$pyjs.track.lineno=538;
						s = self['thetype']('abcba');
						$pyjs.track.lineno=539;
						self['assertEqual'](s['symmetric_difference_update'](C(p)), null);
						$pyjs.track.lineno=540;
						self['assertEqual'](s, $p['set'](q));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_symmetric_difference_update'] = $method;
			$pyjs.track.lineno=542;
			$method = $pyjs__bind_method2('test_ixor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool19,$iter32_idx,$iter32_nextval,c,$iter32_type,$iter32_iter,$add17,t,$iter32_array,$pyjs__trackstack_size_1,$add18,$bool20;
				$pyjs.track={module:'SetTest', lineno:542};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=542;
				$pyjs.track.lineno=543;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('s', $p['op_bitxor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))) : $p['setattr'](self, 's', $p['op_bitxor2']($p['getattr'](self, 's'), $p['set']($p['getattr'](self, 'otherword')))); 
				$pyjs.track.lineno=545;
				t = (typeof ($add17=$p['getattr'](self, 'word'))==typeof ($add18=$p['getattr'](self, 'otherword')) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
				$pyjs.track.lineno=546;
				if ((($bool19=$p['isinstance']($p['getattr'](self, 's'), $p['set'])) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					$pyjs.track.lineno=547;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter32_iter = t;
					if (typeof ($iter32_array = $iter32_iter.__array) != 'undefined') {
						$iter32_type = 0;
					} else {
						$iter32_iter = $iter32_iter.__iter__();
						$iter32_type = typeof ($iter32_array = $iter32_iter.__array) != 'undefined'? 0 : (typeof $iter32_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter32_idx = 0;
					while (typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined') {
						c = $iter32_nextval;
						$pyjs.track.lineno=548;
						if ((($bool20=$p['op_bitxor2']($p['getattr'](self, 'word').__contains__(c), $p['getattr'](self, 'otherword').__contains__(c))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
							$pyjs.track.lineno=549;
							self['assert_']($p['getattr'](self, 's').__contains__(c));
						}
						else {
							$pyjs.track.lineno=551;
							self['assert_'](!$p['getattr'](self, 's').__contains__(c));
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				else {
					$pyjs.track.lineno=553;
					self['fail']('^= result not a set');
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ixor'] = $method;
			$pyjs.track.lineno=555;
			$method = $pyjs__bind_method2('test_inplace_on_self', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60b3f9ea28074b7d9e2ae258b8628f8d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,t,$sub4;
				$pyjs.track={module:'SetTest', lineno:555};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=555;
				$pyjs.track.lineno=556;
				$pyjs.track.lineno=556;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
				$pyjs.track.lineno=557;
				t = self['s']['copy']();
				$pyjs.track.lineno=558;
				t = $p['op_bitor2'](t, t);
				$pyjs.track.lineno=559;
				self['assertEqual'](t, $p['getattr'](self, 's'));
				$pyjs.track.lineno=560;
				t = $p['op_bitand2'](t, t);
				$pyjs.track.lineno=561;
				self['assertEqual'](t, $p['getattr'](self, 's'));
				$pyjs.track.lineno=562;
				t = (typeof ($sub3=t)==typeof ($sub4=t) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				$pyjs.track.lineno=563;
				self['assertEqual'](t, self['thetype']());
				$pyjs.track.lineno=564;
				t = self['s']['copy']();
				$pyjs.track.lineno=565;
				t = $p['op_bitxor2'](t, t);
				$pyjs.track.lineno=566;
				self['assertEqual'](t, self['thetype']());
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_inplace_on_self'] = $method;
			$pyjs.track.lineno=313;
			var $bases = new Array($m['TestJointOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SetTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=569;
		$m['SetSubclass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '463f9eb71e378cfc9e880a931108111e';
			$pyjs.track.lineno=570;
			$pyjs.track.lineno=569;
			var $bases = new Array($p['set']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SetSubclass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=573;
		$m['TestSetSubclass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '8cc4b960a382ad222cb243db68bd0bcf';
			$pyjs.track.lineno=574;
			$cls_definition['thetype'] = $m['SetSubclass'];
			$pyjs.track.lineno=573;
			var $bases = new Array($m['SetTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSetSubclass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=577;
		$m['SetSubclassWithKeywordArgs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'c623f2118dd78bf5e2f55739f1bddaed';
			$pyjs.track.lineno=578;
			$method = $pyjs__bind_method2('__init__', function(iterable, newarg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					iterable = arguments[1];
					newarg = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c623f2118dd78bf5e2f55739f1bddaed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof iterable == 'undefined') iterable=arguments.callee.__args__[3][1];
				if (typeof newarg == 'undefined') newarg=arguments.callee.__args__[4][1];

				$pyjs.track={module:'SetTest', lineno:578};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=578;
				$pyjs.track.lineno=579;
				$p['set']['__init__'](self, iterable);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['iterable', $p['list']([])],['newarg', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=577;
			var $bases = new Array($p['set']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SetSubclassWithKeywordArgs', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=582;
		$m['TestSetSubclassWithKeywordArgs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '0af055b878522786128366d6736621db';
			$pyjs.track.lineno=583;
			$method = $pyjs__bind_method2('test_keywords_in_subclass', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0af055b878522786128366d6736621db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:583};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=583;
				$pyjs.track.lineno=585;
				$pyjs_kwargs_call(null, $m['SetSubclassWithKeywordArgs'], null, null, [{newarg:$constant_int_1}]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_keywords_in_subclass'] = $method;
			$pyjs.track.lineno=582;
			var $bases = new Array($m['SetTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSetSubclassWithKeywordArgs', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=588;
		$m['FrozenSetTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'de78efd26abd603ffb20539a12145d42';
			$pyjs.track.lineno=589;
			$cls_definition['thetype'] = $p['frozenset'];
			$pyjs.track.lineno=591;
			$method = $pyjs__bind_method2('test_init', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs.track={module:'SetTest', lineno:591};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=591;
				$pyjs.track.lineno=592;
				s = self['thetype']($p['getattr'](self, 'word'));
				$pyjs.track.lineno=593;
				s['__init__']($p['getattr'](self, 'otherword'));
				$pyjs.track.lineno=594;
				self['assertEqual'](s, $p['set']($p['getattr'](self, 'word')));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_init'] = $method;
			$pyjs.track.lineno=596;
			$method = $pyjs__bind_method2('test_singleton_empty_frozenset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len6,efs,f;
				$pyjs.track={module:'SetTest', lineno:596};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=596;
				$pyjs.track.lineno=597;
				f = $p['frozenset']();
				$pyjs.track.lineno=598;
				efs = $p['list']([$p['frozenset'](), $p['frozenset']($p['list']([])), $p['frozenset']($p['tuple']([])), $p['frozenset'](''), $p['frozenset'](), $p['frozenset']($p['list']([])), $p['frozenset']($p['tuple']([])), $p['frozenset'](''), $p['frozenset']($p['xrange']($constant_int_0)), $p['frozenset']($p['frozenset']()), $p['frozenset'](f), f]);
				$pyjs.track.lineno=604;
				self['assertEqual']((($len6=$p['set']($p['map']($p['hash'], efs))) === null?$constant_int_0:
					(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
								$p['len']($len6))))), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_singleton_empty_frozenset'] = $method;
			$pyjs.track.lineno=611;
			$method = $pyjs__bind_method2('test_hash', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter34_nextval,i,seq,$len7,$iter34_array,results,n,$iter34_idx,$iter34_iter,$pyjs__trackstack_size_1,$iter34_type;
				$pyjs.track={module:'SetTest', lineno:611};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=611;
				$pyjs.track.lineno=612;
				self['assertEqual']($p['hash'](self['thetype']('abcdeb')), $p['hash'](self['thetype']('ebecda')));
				$pyjs.track.lineno=616;
				n = $constant_int_100;
				$pyjs.track.lineno=617;
				seq = function(){
					var $iter33_iter,$iter33_nextval,$iter33_type,i,$collcomp1,$iter33_idx,$pyjs__trackstack_size_1,$iter33_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter33_iter = $p['xrange'](n);
				if (typeof ($iter33_array = $iter33_iter.__array) != 'undefined') {
					$iter33_type = 0;
				} else {
					$iter33_iter = $iter33_iter.__iter__();
					$iter33_type = typeof ($iter33_array = $iter33_iter.__array) != 'undefined'? 0 : (typeof $iter33_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter33_idx = 0;
				while (typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined') {
					i = $iter33_nextval;
					$collcomp1['append']($m['randrange'](n));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';

	return $collcomp1;}();
				$pyjs.track.lineno=618;
				results = $p['set']();
				$pyjs.track.lineno=619;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter34_iter = $p['xrange']($constant_int_200);
				if (typeof ($iter34_array = $iter34_iter.__array) != 'undefined') {
					$iter34_type = 0;
				} else {
					$iter34_iter = $iter34_iter.__iter__();
					$iter34_type = typeof ($iter34_array = $iter34_iter.__array) != 'undefined'? 0 : (typeof $iter34_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter34_idx = 0;
				while (typeof ($iter34_nextval=($iter34_type?($iter34_type > 0?$iter34_iter.next(true,false):$p['wrapped_next']($iter34_iter)):$iter34_array[$iter34_idx++])) != 'undefined') {
					i = $iter34_nextval;
					$pyjs.track.lineno=620;
					$m['shuffle'](seq);
					$pyjs.track.lineno=621;
					results['add']($p['hash'](self['thetype'](seq)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=622;
				self['assertEqual']((($len7=results) === null?$constant_int_0:
					(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
						(typeof $len7.__len__ == 'function'?$len7.__len__():
							(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
								$p['len']($len7))))), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hash'] = $method;
			$pyjs.track.lineno=624;
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dup;
				$pyjs.track={module:'SetTest', lineno:624};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=624;
				$pyjs.track.lineno=625;
				dup = self['s']['copy']();
				$pyjs.track.lineno=626;
				self['assertEqual']($p['getattr'](self, 's'), dup);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$pyjs.track.lineno=629;
			$method = $pyjs__bind_method2('test_frozen_as_dictkey', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,seq,$add21,$add20,$add22,$8,key2,$7,$add19,key1;
				$pyjs.track={module:'SetTest', lineno:629};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=629;
				$pyjs.track.lineno=630;
				seq = (typeof ($add21=(typeof ($add19=$p['range']($constant_int_10))==typeof ($add20=$p['list']('abcdefg')) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)))==typeof ($add22=$p['list'](['apple'])) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				$pyjs.track.lineno=631;
				key1 = self['thetype'](seq);
				$pyjs.track.lineno=632;
				key2 = self['thetype']($p['reversed'](seq));
				$pyjs.track.lineno=633;
				self['assertEqual'](key1, key2);
				$pyjs.track.lineno=635;
				d = $p['dict']([]);
				$pyjs.track.lineno=636;
				d.__setitem__(key1, $constant_int_42);
				$pyjs.track.lineno=637;
				self['assertEqual']((typeof ($7=d).__array != 'undefined'?
					((typeof $7.__array[$8=key2]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(key2)), $constant_int_42);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_frozen_as_dictkey'] = $method;
			$pyjs.track.lineno=639;
			$method = $pyjs__bind_method2('test_hash_caching', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f;
				$pyjs.track={module:'SetTest', lineno:639};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=639;
				$pyjs.track.lineno=640;
				f = self['thetype']('abcdcda');
				$pyjs.track.lineno=641;
				self['assertEqual']($p['hash'](f), $p['hash'](f));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hash_caching'] = $method;
			$pyjs.track.lineno=643;
			$method = $pyjs__bind_method2('test_hash_effectiveness', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'de78efd26abd603ffb20539a12145d42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pow4,$pow3,i,$pow1,$iter35_idx,$iter35_nextval,addhashvalue,n,$iter35_type,elemmasks,$pyjs__trackstack_size_1,hashvalues,$iter35_array,$iter35_iter,$len8,$pow2;
				$pyjs.track={module:'SetTest', lineno:643};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=643;
				$pyjs.track.lineno=644;
				n = $constant_int_13;
				$pyjs.track.lineno=645;
				hashvalues = $p['set']();
				$pyjs.track.lineno=646;
				addhashvalue = $p['getattr'](hashvalues, 'add');
				$pyjs.track.lineno=648;
				elemmasks = $p['list']([$p['tuple']([$constant_int_1, $constant_int_1]), $p['tuple']([$constant_int_2, $constant_int_2]), $p['tuple']([$constant_int_3, $constant_int_4]), $p['tuple']([$constant_int_4, $constant_int_8]), $p['tuple']([$constant_int_5, $constant_int_16]), $p['tuple']([$constant_int_6, $constant_int_32]), $p['tuple']([$constant_int_7, $constant_int_64]), $p['tuple']([$constant_int_8, $constant_int_128]), $p['tuple']([$constant_int_9, $constant_int_256]), $p['tuple']([$constant_int_10, $constant_int_512]), $p['tuple']([$constant_int_11, $constant_int_1024]), $p['tuple']([$constant_int_12, $constant_int_2048]), $p['tuple']([$constant_int_13, $constant_int_4096])]);
				$pyjs.track.lineno=651;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter35_iter = $p['xrange']((typeof ($pow1=$constant_int_2)==typeof ($pow2=n) && typeof $pow1=='number'?
					Math.pow($pow1,$pow2):
					$p['op_pow']($pow1,$pow2)));
				if (typeof ($iter35_array = $iter35_iter.__array) != 'undefined') {
					$iter35_type = 0;
				} else {
					$iter35_iter = $iter35_iter.__iter__();
					$iter35_type = typeof ($iter35_array = $iter35_iter.__array) != 'undefined'? 0 : (typeof $iter35_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter35_idx = 0;
				while (typeof ($iter35_nextval=($iter35_type?($iter35_type > 0?$iter35_iter.next(true,false):$p['wrapped_next']($iter35_iter)):$iter35_array[$iter35_idx++])) != 'undefined') {
					i = $iter35_nextval;
					$pyjs.track.lineno=652;
					addhashvalue($p['hash']($p['frozenset'](function(){
						var e,$iter36_nextval,$iter36_array,m,$collcomp2,$iter36_iter,$pyjs__trackstack_size_2,$iter36_idx,$bool21,$iter36_type;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter36_iter = elemmasks;
					if (typeof ($iter36_array = $iter36_iter.__array) != 'undefined') {
						$iter36_type = 0;
					} else {
						$iter36_iter = $iter36_iter.__iter__();
						$iter36_type = typeof ($iter36_array = $iter36_iter.__array) != 'undefined'? 0 : (typeof $iter36_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter36_idx = 0;
					while (typeof ($iter36_nextval=($iter36_type?($iter36_type > 0?$iter36_iter.next(true,false):$p['wrapped_next']($iter36_iter)):$iter36_array[$iter36_idx++])) != 'undefined') {
						var $tupleassign6 = $p['__ass_unpack']($iter36_nextval, 2, null);
						e = $tupleassign6[0];
						m = $tupleassign6[1];
						$pyjs.track.lineno=652;
						if ((($bool21=$p['op_bitand2'](m, i)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
								false :
								(typeof $bool21=='object'?
									(typeof $bool21.__nonzero__=='function'?
										$bool21.__nonzero__() :
										(typeof $bool21.__len__=='function'?
											($bool21.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$collcomp2['append'](e);
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';

	return $collcomp2;}())));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=653;
				self['assertEqual']((($len8=hashvalues) === null?$constant_int_0:
					(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
						(typeof $len8.__len__ == 'function'?$len8.__len__():
							(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
								$p['len']($len8))))), (typeof ($pow3=$constant_int_2)==typeof ($pow4=n) && typeof $pow3=='number'?
					Math.pow($pow3,$pow4):
					$p['op_pow']($pow3,$pow4)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hash_effectiveness'] = $method;
			$pyjs.track.lineno=588;
			var $bases = new Array($m['TestJointOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('FrozenSetTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=656;
		$m['FrozenSetSubclass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'cee99b6439ce06833ea9d82f68400131';
			$pyjs.track.lineno=657;
			$pyjs.track.lineno=656;
			var $bases = new Array($p['frozenset']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('FrozenSetSubclass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=660;
		$m['FrozenSetSubclassTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '381f0c22eca58cfc983ab2a494515046';
			$pyjs.track.lineno=661;
			$cls_definition['thetype'] = $m['FrozenSetSubclass'];
			$pyjs.track.lineno=668;
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '381f0c22eca58cfc983ab2a494515046') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dup;
				$pyjs.track={module:'SetTest', lineno:668};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=668;
				$pyjs.track.lineno=669;
				dup = self['s']['copy']();
				$pyjs.track.lineno=670;
				self['assertEqual']($p['getattr'](self, 's'), dup);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$pyjs.track.lineno=673;
			$method = $pyjs__bind_method2('test_nested_empty_constructor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '381f0c22eca58cfc983ab2a494515046') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s,t;
				$pyjs.track={module:'SetTest', lineno:673};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=673;
				$pyjs.track.lineno=674;
				s = self['thetype']();
				$pyjs.track.lineno=675;
				t = self['thetype'](s);
				$pyjs.track.lineno=676;
				self['assertEqual'](s, t);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_nested_empty_constructor'] = $method;
			$pyjs.track.lineno=678;
			$method = $pyjs__bind_method2('test_singleton_empty_frozenset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '381f0c22eca58cfc983ab2a494515046') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len10,efs,f,F,Frozenset,$len9;
				$pyjs.track={module:'SetTest', lineno:678};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=678;
				$pyjs.track.lineno=679;
				Frozenset = $p['getattr'](self, 'thetype');
				$pyjs.track.lineno=680;
				f = $p['frozenset']();
				$pyjs.track.lineno=681;
				F = Frozenset();
				$pyjs.track.lineno=682;
				efs = $p['list']([Frozenset(), Frozenset($p['list']([])), Frozenset($p['tuple']([])), Frozenset(''), Frozenset(), Frozenset($p['list']([])), Frozenset($p['tuple']([])), Frozenset(''), Frozenset($p['xrange']($constant_int_0)), Frozenset(Frozenset()), Frozenset($p['frozenset']()), f, F, Frozenset(f), Frozenset(F)]);
				$pyjs.track.lineno=688;
				self['assertEqual']((($len9=$p['set']($p['map']($p['hash'], efs))) === null?$constant_int_0:
					(typeof $len9.__array != 'undefined' ? new $p['int']($len9.__array.length):
						(typeof $len9.__len__ == 'function'?$len9.__len__():
							(typeof $len9.length != 'undefined'? new $p['int']($len9.length):
								$p['len']($len9))))), (($len10=efs) === null?$constant_int_0:
					(typeof $len10.__array != 'undefined' ? new $p['int']($len10.__array.length):
						(typeof $len10.__len__ == 'function'?$len10.__len__():
							(typeof $len10.length != 'undefined'? new $p['int']($len10.length):
								$p['len']($len10))))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_singleton_empty_frozenset'] = $method;
			$pyjs.track.lineno=660;
			var $bases = new Array($m['FrozenSetTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('FrozenSetSubclassTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=692;
		$m['empty_set'] = $p['set']();
		$pyjs.track.lineno=696;
		$m['TestBasicOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '34106f6ca82e11e17d3b3fd68466b361';
			$pyjs.track.lineno=697;
			$method = $pyjs__bind_method2('test_repr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool22;
				$pyjs.track={module:'SetTest', lineno:697};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=697;
				$pyjs.track.lineno=698;
				if ((($bool22=!$p['op_is']($p['getattr'](self, 'repr'), null)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=699;
					self['assertEqual']($p['repr']($p['getattr'](self, 'set')), $p['getattr'](self, 'repr'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_repr'] = $method;
			$pyjs.track.lineno=701;
			$method = $pyjs__bind_method2('test_length', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len11;
				$pyjs.track={module:'SetTest', lineno:701};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=701;
				$pyjs.track.lineno=702;
				self['assertEqual']((($len11=$p['getattr'](self, 'set')) === null?$constant_int_0:
					(typeof $len11.__array != 'undefined' ? new $p['int']($len11.__array.length):
						(typeof $len11.__len__ == 'function'?$len11.__len__():
							(typeof $len11.length != 'undefined'? new $p['int']($len11.length):
								$p['len']($len11))))), $p['getattr'](self, 'length'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_length'] = $method;
			$pyjs.track.lineno=704;
			$method = $pyjs__bind_method2('test_self_equality', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:704};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=704;
				$pyjs.track.lineno=705;
				self['assertEqual']($p['getattr'](self, 'set'), $p['getattr'](self, 'set'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_equality'] = $method;
			$pyjs.track.lineno=707;
			$method = $pyjs__bind_method2('test_equivalent_equality', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:707};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=707;
				$pyjs.track.lineno=708;
				self['assertEqual']($p['getattr'](self, 'set'), $p['getattr'](self, 'dup'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_equivalent_equality'] = $method;
			$pyjs.track.lineno=710;
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:710};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=710;
				$pyjs.track.lineno=711;
				self['assertEqual'](self['set']['copy'](), $p['getattr'](self, 'dup'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$pyjs.track.lineno=713;
			$method = $pyjs__bind_method2('test_self_union', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:713};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=713;
				$pyjs.track.lineno=714;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'set'));
				$pyjs.track.lineno=715;
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_union'] = $method;
			$pyjs.track.lineno=717;
			$method = $pyjs__bind_method2('test_empty_union', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:717};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=717;
				$pyjs.track.lineno=718;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $m['empty_set']);
				$pyjs.track.lineno=719;
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_union'] = $method;
			$pyjs.track.lineno=721;
			$method = $pyjs__bind_method2('test_union_empty', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:721};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=721;
				$pyjs.track.lineno=722;
				result = $p['op_bitor2']($m['empty_set'], $p['getattr'](self, 'set'));
				$pyjs.track.lineno=723;
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_empty'] = $method;
			$pyjs.track.lineno=725;
			$method = $pyjs__bind_method2('test_self_intersection', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:725};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=725;
				$pyjs.track.lineno=726;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['getattr'](self, 'set'));
				$pyjs.track.lineno=727;
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_intersection'] = $method;
			$pyjs.track.lineno=729;
			$method = $pyjs__bind_method2('test_empty_intersection', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:729};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=729;
				$pyjs.track.lineno=730;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $m['empty_set']);
				$pyjs.track.lineno=731;
				self['assertEqual'](result, $m['empty_set']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_intersection'] = $method;
			$pyjs.track.lineno=733;
			$method = $pyjs__bind_method2('test_intersection_empty', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:733};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=733;
				$pyjs.track.lineno=734;
				result = $p['op_bitand2']($m['empty_set'], $p['getattr'](self, 'set'));
				$pyjs.track.lineno=735;
				self['assertEqual'](result, $m['empty_set']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_empty'] = $method;
			$pyjs.track.lineno=737;
			$method = $pyjs__bind_method2('test_self_isdisjoint', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,$bool23;
				$pyjs.track={module:'SetTest', lineno:737};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=737;
				$pyjs.track.lineno=738;
				result = self['set']['isdisjoint']($p['getattr'](self, 'set'));
				$pyjs.track.lineno=739;
				self['assertEqual'](result, !(($bool23=$p['getattr'](self, 'set')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_isdisjoint'] = $method;
			$pyjs.track.lineno=741;
			$method = $pyjs__bind_method2('test_empty_isdisjoint', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:741};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=741;
				$pyjs.track.lineno=742;
				result = self['set']['isdisjoint']($m['empty_set']);
				$pyjs.track.lineno=743;
				self['assertEqual'](result, true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_isdisjoint'] = $method;
			$pyjs.track.lineno=745;
			$method = $pyjs__bind_method2('test_isdisjoint_empty', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:745};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=745;
				$pyjs.track.lineno=746;
				result = $m['empty_set']['isdisjoint']($p['getattr'](self, 'set'));
				$pyjs.track.lineno=747;
				self['assertEqual'](result, true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_empty'] = $method;
			$pyjs.track.lineno=749;
			$method = $pyjs__bind_method2('test_self_symmetric_difference', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:749};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=749;
				$pyjs.track.lineno=750;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'set'));
				$pyjs.track.lineno=751;
				self['assertEqual'](result, $m['empty_set']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_symmetric_difference'] = $method;
			$pyjs.track.lineno=753;
			$method = $pyjs__bind_method2('checkempty_symmetric_difference', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:753};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=753;
				$pyjs.track.lineno=754;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $m['empty_set']);
				$pyjs.track.lineno=755;
				self['assertEqual'](result, $p['getattr'](self, 'set'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['checkempty_symmetric_difference'] = $method;
			$pyjs.track.lineno=757;
			$method = $pyjs__bind_method2('test_self_difference', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub6,$sub5,result;
				$pyjs.track={module:'SetTest', lineno:757};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=757;
				$pyjs.track.lineno=758;
				result = (typeof ($sub5=$p['getattr'](self, 'set'))==typeof ($sub6=$p['getattr'](self, 'set')) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				$pyjs.track.lineno=759;
				self['assertEqual'](result, $m['empty_set']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_self_difference'] = $method;
			$pyjs.track.lineno=761;
			$method = $pyjs__bind_method2('test_empty_difference', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub8,$sub7,result;
				$pyjs.track={module:'SetTest', lineno:761};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=761;
				$pyjs.track.lineno=762;
				result = (typeof ($sub7=$p['getattr'](self, 'set'))==typeof ($sub8=$m['empty_set']) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8));
				$pyjs.track.lineno=763;
				self['assertEqual'](result, $p['getattr'](self, 'dup'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_difference'] = $method;
			$pyjs.track.lineno=765;
			$method = $pyjs__bind_method2('test_empty_difference_rev', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub10,$sub9,result;
				$pyjs.track={module:'SetTest', lineno:765};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=765;
				$pyjs.track.lineno=766;
				result = (typeof ($sub9=$m['empty_set'])==typeof ($sub10=$p['getattr'](self, 'set')) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				$pyjs.track.lineno=767;
				self['assertEqual'](result, $m['empty_set']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_empty_difference_rev'] = $method;
			$pyjs.track.lineno=769;
			$method = $pyjs__bind_method2('test_iteration', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '34106f6ca82e11e17d3b3fd68466b361') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len12,$iter37_idx,$pyjs__trackstack_size_1,setiter,$iter37_type,$iter37_array,v,$iter37_iter,$iter37_nextval;
				$pyjs.track={module:'SetTest', lineno:769};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=769;
				$pyjs.track.lineno=770;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter37_iter = $p['getattr'](self, 'set');
				if (typeof ($iter37_array = $iter37_iter.__array) != 'undefined') {
					$iter37_type = 0;
				} else {
					$iter37_iter = $iter37_iter.__iter__();
					$iter37_type = typeof ($iter37_array = $iter37_iter.__array) != 'undefined'? 0 : (typeof $iter37_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter37_idx = 0;
				while (typeof ($iter37_nextval=($iter37_type?($iter37_type > 0?$iter37_iter.next(true,false):$p['wrapped_next']($iter37_iter)):$iter37_array[$iter37_idx++])) != 'undefined') {
					v = $iter37_nextval;
					$pyjs.track.lineno=771;
					self['assert_']($p['getattr'](self, 'values').__contains__(v));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=772;
				setiter = $p['iter']($p['getattr'](self, 'set'));
				$pyjs.track.lineno=775;
				self['assertEqual'](setiter['__length_hint__'](), (($len12=$p['getattr'](self, 'set')) === null?$constant_int_0:
					(typeof $len12.__array != 'undefined' ? new $p['int']($len12.__array.length):
						(typeof $len12.__len__ == 'function'?$len12.__len__():
							(typeof $len12.length != 'undefined'? new $p['int']($len12.length):
								$p['len']($len12))))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_iteration'] = $method;
			$pyjs.track.lineno=696;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBasicOps', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=780;
		$m['TestBasicOpsEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '30dfc8f690a7e05131aaccc64b137cc6';
			$pyjs.track.lineno=781;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '30dfc8f690a7e05131aaccc64b137cc6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:781};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=781;
				$pyjs.track.lineno=782;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$case', 'empty set') : $p['setattr'](self, '$$case', 'empty set'); 
				$pyjs.track.lineno=783;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('values', $p['list']([])) : $p['setattr'](self, 'values', $p['list']([])); 
				$pyjs.track.lineno=784;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'set', $p['set']($p['getattr'](self, 'values'))); 
				$pyjs.track.lineno=785;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dup', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'dup', $p['set']($p['getattr'](self, 'values'))); 
				$pyjs.track.lineno=786;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('length', $constant_int_0) : $p['setattr'](self, 'length', $constant_int_0); 
				$pyjs.track.lineno=787;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('repr', 'set([])') : $p['setattr'](self, 'repr', 'set([])'); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=780;
			var $bases = new Array($m['TestBasicOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBasicOpsEmpty', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=791;
		$m['TestBasicOpsSingleton'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '4ce6386b318218bd114dc98b8a2e9ffb';
			$pyjs.track.lineno=792;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ce6386b318218bd114dc98b8a2e9ffb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:792};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=792;
				$pyjs.track.lineno=793;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$case', 'unit set (number)') : $p['setattr'](self, '$$case', 'unit set (number)'); 
				$pyjs.track.lineno=794;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('values', $p['list']([$constant_int_3])) : $p['setattr'](self, 'values', $p['list']([$constant_int_3])); 
				$pyjs.track.lineno=795;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'set', $p['set']($p['getattr'](self, 'values'))); 
				$pyjs.track.lineno=796;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dup', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'dup', $p['set']($p['getattr'](self, 'values'))); 
				$pyjs.track.lineno=797;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('length', $constant_int_1) : $p['setattr'](self, 'length', $constant_int_1); 
				$pyjs.track.lineno=798;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('repr', 'set([3])') : $p['setattr'](self, 'repr', 'set([3])'); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=800;
			$method = $pyjs__bind_method2('test_in', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ce6386b318218bd114dc98b8a2e9ffb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:800};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=800;
				$pyjs.track.lineno=801;
				self['failUnless']($p['getattr'](self, 'set').__contains__($constant_int_3));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_in'] = $method;
			$pyjs.track.lineno=803;
			$method = $pyjs__bind_method2('test_not_in', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ce6386b318218bd114dc98b8a2e9ffb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:803};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=803;
				$pyjs.track.lineno=804;
				self['failUnless'](!$p['getattr'](self, 'set').__contains__($constant_int_2));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_not_in'] = $method;
			$pyjs.track.lineno=791;
			var $bases = new Array($m['TestBasicOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBasicOpsSingleton', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=808;
		$m['TestBasicOpsTuple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '7bbec324343ba3eb992872a0302d37f2';
			$pyjs.track.lineno=809;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7bbec324343ba3eb992872a0302d37f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:809};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=809;
				$pyjs.track.lineno=810;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$case', 'unit set (tuple)') : $p['setattr'](self, '$$case', 'unit set (tuple)'); 
				$pyjs.track.lineno=811;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('values', $p['list']([$p['tuple']([$constant_int_0, 'zero'])])) : $p['setattr'](self, 'values', $p['list']([$p['tuple']([$constant_int_0, 'zero'])])); 
				$pyjs.track.lineno=812;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'set', $p['set']($p['getattr'](self, 'values'))); 
				$pyjs.track.lineno=813;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dup', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'dup', $p['set']($p['getattr'](self, 'values'))); 
				$pyjs.track.lineno=814;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('length', $constant_int_1) : $p['setattr'](self, 'length', $constant_int_1); 
				$pyjs.track.lineno=815;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('repr', "set([(0, 'zero')])") : $p['setattr'](self, 'repr', "set([(0, 'zero')])"); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=817;
			$method = $pyjs__bind_method2('test_in', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7bbec324343ba3eb992872a0302d37f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:817};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=817;
				$pyjs.track.lineno=818;
				self['failUnless']($p['getattr'](self, 'set').__contains__($p['tuple']([$constant_int_0, 'zero'])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_in'] = $method;
			$pyjs.track.lineno=820;
			$method = $pyjs__bind_method2('test_not_in', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7bbec324343ba3eb992872a0302d37f2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:820};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=820;
				$pyjs.track.lineno=821;
				self['failUnless'](!$p['getattr'](self, 'set').__contains__($constant_int_9));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_not_in'] = $method;
			$pyjs.track.lineno=808;
			var $bases = new Array($m['TestBasicOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBasicOpsTuple', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=827;
		$m['baditer'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			
				$pyjs.track={module:'SetTest',lineno:827};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=827;
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$pyjs.track.lineno=828;
					$generator_state[0]=1;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$pyjs.track.lineno=829;
					$pyjs.track.lineno=829;
					$yield_value = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					$yielding = true;
					$generator_state[0] = 2;
					return $yield_value;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
				}

				return;
			};
			return $generator;
		};
		$m['baditer'].__name__ = 'baditer';

		$m['baditer'].__bind_type__ = 0;
		$m['baditer'].__args__ = [null,null];
		$pyjs.track.lineno=832;
		$m['gooditer'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			
				$pyjs.track={module:'SetTest',lineno:832};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=832;
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$pyjs.track.lineno=833;
					$pyjs.track.lineno=833;
					$yield_value = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					$yielding = true;
					$generator_state[0] = 1;
					return $yield_value;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
				}

				return;
			};
			return $generator;
		};
		$m['gooditer'].__name__ = 'gooditer';

		$m['gooditer'].__bind_type__ = 0;
		$m['gooditer'].__args__ = [null,null];
		$pyjs.track.lineno=836;
		$m['TestExceptionPropagation'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'ec53ff63900797cc62149b4078b7cdbc';
			$pyjs.track.lineno=839;
			$method = $pyjs__bind_method2('test_instanceWithException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ec53ff63900797cc62149b4078b7cdbc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:839};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=839;
				$pyjs.track.lineno=840;
				self['assertRaises']($p['TypeError'], $p['set'], $m['baditer']());
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_instanceWithException'] = $method;
			$pyjs.track.lineno=842;
			$method = $pyjs__bind_method2('test_instancesWithoutException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ec53ff63900797cc62149b4078b7cdbc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:842};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=842;
				$pyjs.track.lineno=844;
				$p['set']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=845;
				$p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=846;
				$p['set']($p['dict']([['one', $constant_int_1], ['two', $constant_int_2], ['three', $constant_int_3]]));
				$pyjs.track.lineno=847;
				$p['set']($p['xrange']($constant_int_3));
				$pyjs.track.lineno=848;
				$p['set']('abc');
				$pyjs.track.lineno=849;
				$p['set']($m['gooditer']());
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_instancesWithoutException'] = $method;
			$pyjs.track.lineno=851;
			$method = $pyjs__bind_method2('test_changingSizeWhileIterating', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ec53ff63900797cc62149b4078b7cdbc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter38_iter,i,$iter38_idx,$iter38_nextval,s,$pyjs_try_err,$pyjs__trackstack_size_2,$iter38_type,$iter38_array;
				$pyjs.track={module:'SetTest', lineno:851};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=851;
				$pyjs.track.lineno=852;
				s = $p['set']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=853;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=854;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter38_iter = s;
					if (typeof ($iter38_array = $iter38_iter.__array) != 'undefined') {
						$iter38_type = 0;
					} else {
						$iter38_iter = $iter38_iter.__iter__();
						$iter38_type = typeof ($iter38_array = $iter38_iter.__array) != 'undefined'? 0 : (typeof $iter38_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter38_idx = 0;
					while (typeof ($iter38_nextval=($iter38_type?($iter38_type > 0?$iter38_iter.next(true,false):$p['wrapped_next']($iter38_iter)):$iter38_array[$iter38_idx++])) != 'undefined') {
						i = $iter38_nextval;
						$pyjs.track.lineno=855;
						s['update']($p['list']([$constant_int_4]));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=859;
						self['fail']('no exception when changing size during iteration');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['RuntimeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['RuntimeError'])) {
							$pyjs.track.lineno=857;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_changingSizeWhileIterating'] = $method;
			$pyjs.track.lineno=836;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestExceptionPropagation', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=863;
		$m['TestSetOfSets'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'fddf8ebbbc6858044f0d82b3c8d23f4c';
			$pyjs.track.lineno=864;
			$method = $pyjs__bind_method2('test_constructor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fddf8ebbbc6858044f0d82b3c8d23f4c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var outer,inner,element;
				$pyjs.track={module:'SetTest', lineno:864};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=864;
				$pyjs.track.lineno=865;
				inner = $p['frozenset']($p['list']([$constant_int_1]));
				$pyjs.track.lineno=866;
				outer = $p['set']($p['list']([inner]));
				$pyjs.track.lineno=867;
				element = outer['pop']();
				$pyjs.track.lineno=869;
				outer['add'](inner);
				$pyjs.track.lineno=870;
				outer['remove'](inner);
				$pyjs.track.lineno=871;
				self['assertEqual'](outer, $p['set']());
				$pyjs.track.lineno=872;
				outer['discard'](inner);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_constructor'] = $method;
			$pyjs.track.lineno=863;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSetOfSets', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=876;
		$m['TestBinaryOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'b3ddf18cf06e8e0188d9e4e3e33c9cf0';
			$pyjs.track.lineno=877;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:877};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=877;
				$pyjs.track.lineno=878;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6]))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=880;
			$method = $pyjs__bind_method2('test_eq', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:880};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=880;
				$pyjs.track.lineno=881;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['dict']([[$constant_int_2, $constant_int_1], [$constant_int_4, $constant_int_3], [$constant_int_6, $constant_int_5]])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_eq'] = $method;
			$pyjs.track.lineno=883;
			$method = $pyjs__bind_method2('test_union_subset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:883};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=883;
				$pyjs.track.lineno=884;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2])));
				$pyjs.track.lineno=885;
				self['assertEqual'](result, $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_subset'] = $method;
			$pyjs.track.lineno=887;
			$method = $pyjs__bind_method2('test_union_superset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:887};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=887;
				$pyjs.track.lineno=888;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.track.lineno=889;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_superset'] = $method;
			$pyjs.track.lineno=891;
			$method = $pyjs__bind_method2('test_union_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:891};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=891;
				$pyjs.track.lineno=892;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				$pyjs.track.lineno=893;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_overlap'] = $method;
			$pyjs.track.lineno=895;
			$method = $pyjs__bind_method2('test_union_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:895};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=895;
				$pyjs.track.lineno=896;
				result = $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])));
				$pyjs.track.lineno=897;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_non_overlap'] = $method;
			$pyjs.track.lineno=899;
			$method = $pyjs__bind_method2('test_intersection_subset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:899};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=899;
				$pyjs.track.lineno=900;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				$pyjs.track.lineno=901;
				self['assertEqual'](result, $p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_subset'] = $method;
			$pyjs.track.lineno=903;
			$method = $pyjs__bind_method2('test_intersection_superset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:903};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=903;
				$pyjs.track.lineno=904;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.track.lineno=905;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_superset'] = $method;
			$pyjs.track.lineno=907;
			$method = $pyjs__bind_method2('test_intersection_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:907};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=907;
				$pyjs.track.lineno=908;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				$pyjs.track.lineno=909;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_4])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_overlap'] = $method;
			$pyjs.track.lineno=911;
			$method = $pyjs__bind_method2('test_intersection_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:911};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=911;
				$pyjs.track.lineno=912;
				result = $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])));
				$pyjs.track.lineno=913;
				self['assertEqual'](result, $m['empty_set']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_non_overlap'] = $method;
			$pyjs.track.lineno=915;
			$method = $pyjs__bind_method2('test_isdisjoint_subset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:915};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=915;
				$pyjs.track.lineno=916;
				result = self['set']['isdisjoint']($p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				$pyjs.track.lineno=917;
				self['assertEqual'](result, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_subset'] = $method;
			$pyjs.track.lineno=919;
			$method = $pyjs__bind_method2('test_isdisjoint_superset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:919};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=919;
				$pyjs.track.lineno=920;
				result = self['set']['isdisjoint']($p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.track.lineno=921;
				self['assertEqual'](result, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_superset'] = $method;
			$pyjs.track.lineno=923;
			$method = $pyjs__bind_method2('test_isdisjoint_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:923};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=923;
				$pyjs.track.lineno=924;
				result = self['set']['isdisjoint']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				$pyjs.track.lineno=925;
				self['assertEqual'](result, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_overlap'] = $method;
			$pyjs.track.lineno=927;
			$method = $pyjs__bind_method2('test_isdisjoint_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:927};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=927;
				$pyjs.track.lineno=928;
				result = self['set']['isdisjoint']($p['set']($p['list']([$constant_int_8])));
				$pyjs.track.lineno=929;
				self['assertEqual'](result, true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_isdisjoint_non_overlap'] = $method;
			$pyjs.track.lineno=931;
			$method = $pyjs__bind_method2('test_sym_difference_subset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:931};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=931;
				$pyjs.track.lineno=932;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				$pyjs.track.lineno=933;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_subset'] = $method;
			$pyjs.track.lineno=935;
			$method = $pyjs__bind_method2('test_sym_difference_superset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:935};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=935;
				$pyjs.track.lineno=936;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.track.lineno=937;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_8])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_superset'] = $method;
			$pyjs.track.lineno=939;
			$method = $pyjs__bind_method2('test_sym_difference_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:939};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=939;
				$pyjs.track.lineno=940;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5])));
				$pyjs.track.lineno=941;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_5, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_overlap'] = $method;
			$pyjs.track.lineno=943;
			$method = $pyjs__bind_method2('test_sym_difference_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				$pyjs.track={module:'SetTest', lineno:943};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=943;
				$pyjs.track.lineno=944;
				result = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])));
				$pyjs.track.lineno=945;
				self['assertEqual'](result, $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_non_overlap'] = $method;
			$pyjs.track.lineno=947;
			$method = $pyjs__bind_method2('test_cmp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b3ddf18cf06e8e0188d9e4e3e33c9cf0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,b;
				$pyjs.track={module:'SetTest', lineno:947};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=947;
				$pyjs.track.lineno=948;
				var $tupleassign7 = $p['__ass_unpack']($p['tuple']([$p['set']('a'), $p['set']('b')]), 2, null);
				a = $tupleassign7[0];
				b = $tupleassign7[1];
				$pyjs.track.lineno=949;
				self['assertRaises']($p['TypeError'], $p['cmp'], a, b);
				$pyjs.track.lineno=955;
				self['assertEqual']($p['cmp'](a, a), $constant_int_0);
				$pyjs.track.lineno=957;
				self['assertRaises']($p['TypeError'], $p['cmp'], a, $constant_int_12);
				$pyjs.track.lineno=958;
				self['assertRaises']($p['TypeError'], $p['cmp'], 'abc', a);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_cmp'] = $method;
			$pyjs.track.lineno=876;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestBinaryOps', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=962;
		$m['TestUpdateOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '7be02f96a0de487d8ef35bb80b0b70fb';
			$pyjs.track.lineno=963;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:963};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=963;
				$pyjs.track.lineno=964;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6]))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=966;
			$method = $pyjs__bind_method2('test_union_subset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:966};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=966;
				$pyjs.track.lineno=967;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2])))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2])))); 
				$pyjs.track.lineno=968;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_subset'] = $method;
			$pyjs.track.lineno=970;
			$method = $pyjs__bind_method2('test_union_superset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:970};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=970;
				$pyjs.track.lineno=971;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))); 
				$pyjs.track.lineno=972;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_superset'] = $method;
			$pyjs.track.lineno=974;
			$method = $pyjs__bind_method2('test_union_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:974};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=974;
				$pyjs.track.lineno=975;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])))); 
				$pyjs.track.lineno=976;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_overlap'] = $method;
			$pyjs.track.lineno=978;
			$method = $pyjs__bind_method2('test_union_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:978};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=978;
				$pyjs.track.lineno=979;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))); 
				$pyjs.track.lineno=980;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_non_overlap'] = $method;
			$pyjs.track.lineno=982;
			$method = $pyjs__bind_method2('test_union_method_call', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:982};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=982;
				$pyjs.track.lineno=983;
				self['set']['update']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				$pyjs.track.lineno=984;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union_method_call'] = $method;
			$pyjs.track.lineno=986;
			$method = $pyjs__bind_method2('test_intersection_subset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:986};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=986;
				$pyjs.track.lineno=987;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])))); 
				$pyjs.track.lineno=988;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_subset'] = $method;
			$pyjs.track.lineno=990;
			$method = $pyjs__bind_method2('test_intersection_superset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:990};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=990;
				$pyjs.track.lineno=991;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))); 
				$pyjs.track.lineno=992;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_superset'] = $method;
			$pyjs.track.lineno=994;
			$method = $pyjs__bind_method2('test_intersection_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:994};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=994;
				$pyjs.track.lineno=995;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])))); 
				$pyjs.track.lineno=996;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_4])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_overlap'] = $method;
			$pyjs.track.lineno=998;
			$method = $pyjs__bind_method2('test_intersection_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:998};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=998;
				$pyjs.track.lineno=999;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))); 
				$pyjs.track.lineno=1000;
				self['assertEqual']($p['getattr'](self, 'set'), $m['empty_set']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_non_overlap'] = $method;
			$pyjs.track.lineno=1002;
			$method = $pyjs__bind_method2('test_intersection_method_call', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1002};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1002;
				$pyjs.track.lineno=1003;
				self['set']['intersection_update']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				$pyjs.track.lineno=1004;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_4])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_method_call'] = $method;
			$pyjs.track.lineno=1006;
			$method = $pyjs__bind_method2('test_sym_difference_subset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1006};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1006;
				$pyjs.track.lineno=1007;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4])))); 
				$pyjs.track.lineno=1008;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_subset'] = $method;
			$pyjs.track.lineno=1010;
			$method = $pyjs__bind_method2('test_sym_difference_superset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1010};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1010;
				$pyjs.track.lineno=1011;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])))); 
				$pyjs.track.lineno=1012;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_superset'] = $method;
			$pyjs.track.lineno=1014;
			$method = $pyjs__bind_method2('test_sym_difference_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1014};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1014;
				$pyjs.track.lineno=1015;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5])))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5])))); 
				$pyjs.track.lineno=1016;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_5, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_overlap'] = $method;
			$pyjs.track.lineno=1018;
			$method = $pyjs__bind_method2('test_sym_difference_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1018};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1018;
				$pyjs.track.lineno=1019;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_8])))); 
				$pyjs.track.lineno=1020;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_non_overlap'] = $method;
			$pyjs.track.lineno=1022;
			$method = $pyjs__bind_method2('test_sym_difference_method_call', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1022};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1022;
				$pyjs.track.lineno=1023;
				self['set']['symmetric_difference_update']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				$pyjs.track.lineno=1024;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_3, $constant_int_5, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_method_call'] = $method;
			$pyjs.track.lineno=1026;
			$method = $pyjs__bind_method2('test_difference_subset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub12,$sub11;
				$pyjs.track={module:'SetTest', lineno:1026};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1026;
				$pyjs.track.lineno=1027;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', (typeof ($sub11=$p['getattr'](self, 'set'))==typeof ($sub12=$p['set']($p['tuple']([$constant_int_2, $constant_int_4]))) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))) : $p['setattr'](self, 'set', (typeof ($sub11=$p['getattr'](self, 'set'))==typeof ($sub12=$p['set']($p['tuple']([$constant_int_2, $constant_int_4]))) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))); 
				$pyjs.track.lineno=1028;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_subset'] = $method;
			$pyjs.track.lineno=1030;
			$method = $pyjs__bind_method2('test_difference_superset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$sub14;
				$pyjs.track={module:'SetTest', lineno:1030};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1030;
				$pyjs.track.lineno=1031;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', (typeof ($sub13=$p['getattr'](self, 'set'))==typeof ($sub14=$p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8]))) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))) : $p['setattr'](self, 'set', (typeof ($sub13=$p['getattr'](self, 'set'))==typeof ($sub14=$p['set']($p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8]))) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14))); 
				$pyjs.track.lineno=1032;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_superset'] = $method;
			$pyjs.track.lineno=1034;
			$method = $pyjs__bind_method2('test_difference_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub16,$sub15;
				$pyjs.track={module:'SetTest', lineno:1034};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1034;
				$pyjs.track.lineno=1035;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', (typeof ($sub15=$p['getattr'](self, 'set'))==typeof ($sub16=$p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5]))) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16))) : $p['setattr'](self, 'set', (typeof ($sub15=$p['getattr'](self, 'set'))==typeof ($sub16=$p['set']($p['tuple']([$constant_int_3, $constant_int_4, $constant_int_5]))) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16))); 
				$pyjs.track.lineno=1036;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_overlap'] = $method;
			$pyjs.track.lineno=1038;
			$method = $pyjs__bind_method2('test_difference_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub18,$sub17;
				$pyjs.track={module:'SetTest', lineno:1038};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1038;
				$pyjs.track.lineno=1039;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', (typeof ($sub17=$p['getattr'](self, 'set'))==typeof ($sub18=$p['set']($p['list']([$constant_int_8]))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))) : $p['setattr'](self, 'set', (typeof ($sub17=$p['getattr'](self, 'set'))==typeof ($sub18=$p['set']($p['list']([$constant_int_8]))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))); 
				$pyjs.track.lineno=1040;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_4, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_non_overlap'] = $method;
			$pyjs.track.lineno=1042;
			$method = $pyjs__bind_method2('test_difference_method_call', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7be02f96a0de487d8ef35bb80b0b70fb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1042};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1042;
				$pyjs.track.lineno=1043;
				self['set']['difference_update']($p['set']($p['list']([$constant_int_3, $constant_int_4, $constant_int_5])));
				$pyjs.track.lineno=1044;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['list']([$constant_int_2, $constant_int_6])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_method_call'] = $method;
			$pyjs.track.lineno=962;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestUpdateOps', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1048;
		$m['TestMutate'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '774a534acf8fb9ede39e2727de3e53a6';
			$pyjs.track.lineno=1049;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1049};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1049;
				$pyjs.track.lineno=1050;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('values', $p['list'](['a', 'b', 'c'])) : $p['setattr'](self, 'values', $p['list'](['a', 'b', 'c'])); 
				$pyjs.track.lineno=1051;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['getattr'](self, 'values'))) : $p['setattr'](self, 'set', $p['set']($p['getattr'](self, 'values'))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1053;
			$method = $pyjs__bind_method2('test_add_present', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1053};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1053;
				$pyjs.track.lineno=1054;
				self['set']['add']('c');
				$pyjs.track.lineno=1055;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('abc'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_add_present'] = $method;
			$pyjs.track.lineno=1057;
			$method = $pyjs__bind_method2('test_add_absent', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1057};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1057;
				$pyjs.track.lineno=1058;
				self['set']['add']('d');
				$pyjs.track.lineno=1059;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('abcd'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_add_absent'] = $method;
			$pyjs.track.lineno=1061;
			$method = $pyjs__bind_method2('test_add_until_full', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tmp,$len13,$iter39_idx,v,$iter39_type,$iter39_array,expected_len,$iter39_nextval,$iter39_iter,$add24,$pyjs__trackstack_size_1,$add23;
				$pyjs.track={module:'SetTest', lineno:1061};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1061;
				$pyjs.track.lineno=1062;
				tmp = $p['set']();
				$pyjs.track.lineno=1063;
				expected_len = $constant_int_0;
				$pyjs.track.lineno=1064;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter39_iter = $p['getattr'](self, 'values');
				if (typeof ($iter39_array = $iter39_iter.__array) != 'undefined') {
					$iter39_type = 0;
				} else {
					$iter39_iter = $iter39_iter.__iter__();
					$iter39_type = typeof ($iter39_array = $iter39_iter.__array) != 'undefined'? 0 : (typeof $iter39_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter39_idx = 0;
				while (typeof ($iter39_nextval=($iter39_type?($iter39_type > 0?$iter39_iter.next(true,false):$p['wrapped_next']($iter39_iter)):$iter39_array[$iter39_idx++])) != 'undefined') {
					v = $iter39_nextval;
					$pyjs.track.lineno=1065;
					tmp['add'](v);
					$pyjs.track.lineno=1066;
					expected_len = (typeof ($add23=expected_len)==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
					$pyjs.track.lineno=1067;
					self['assertEqual']((($len13=tmp) === null?$constant_int_0:
						(typeof $len13.__array != 'undefined' ? new $p['int']($len13.__array.length):
							(typeof $len13.__len__ == 'function'?$len13.__len__():
								(typeof $len13.length != 'undefined'? new $p['int']($len13.length):
									$p['len']($len13))))), expected_len);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1068;
				self['assertEqual'](tmp, $p['getattr'](self, 'set'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_add_until_full'] = $method;
			$pyjs.track.lineno=1070;
			$method = $pyjs__bind_method2('test_remove_present', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1070};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1070;
				$pyjs.track.lineno=1071;
				self['set']['remove']('b');
				$pyjs.track.lineno=1072;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('ac'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_present'] = $method;
			$pyjs.track.lineno=1074;
			$method = $pyjs__bind_method2('test_remove_absent', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'SetTest', lineno:1074};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1074;
				$pyjs.track.lineno=1075;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=1076;
					self['set']['remove']('d');
					$pyjs.track.lineno=1077;
					self['fail']('Removing missing element should have raised LookupError');
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
					$pyjs.track.module='SetTest';
					if (($pyjs_try_err_name == $p['LookupError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['LookupError'])) {
						$pyjs.track.lineno=1079;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_absent'] = $method;
			$pyjs.track.lineno=1081;
			$method = $pyjs__bind_method2('test_remove_until_empty', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub19,$len14,$iter40_type,$pyjs__trackstack_size_1,$sub20,$iter40_iter,expected_len,$iter40_array,v,$iter40_nextval,$iter40_idx,$len15;
				$pyjs.track={module:'SetTest', lineno:1081};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1081;
				$pyjs.track.lineno=1082;
				expected_len = (($len14=$p['getattr'](self, 'set')) === null?$constant_int_0:
					(typeof $len14.__array != 'undefined' ? new $p['int']($len14.__array.length):
						(typeof $len14.__len__ == 'function'?$len14.__len__():
							(typeof $len14.length != 'undefined'? new $p['int']($len14.length):
								$p['len']($len14)))));
				$pyjs.track.lineno=1083;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter40_iter = $p['getattr'](self, 'values');
				if (typeof ($iter40_array = $iter40_iter.__array) != 'undefined') {
					$iter40_type = 0;
				} else {
					$iter40_iter = $iter40_iter.__iter__();
					$iter40_type = typeof ($iter40_array = $iter40_iter.__array) != 'undefined'? 0 : (typeof $iter40_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter40_idx = 0;
				while (typeof ($iter40_nextval=($iter40_type?($iter40_type > 0?$iter40_iter.next(true,false):$p['wrapped_next']($iter40_iter)):$iter40_array[$iter40_idx++])) != 'undefined') {
					v = $iter40_nextval;
					$pyjs.track.lineno=1084;
					self['set']['remove'](v);
					$pyjs.track.lineno=1085;
					expected_len = (typeof ($sub19=expected_len)==typeof ($sub20=$constant_int_1) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20));
					$pyjs.track.lineno=1086;
					self['assertEqual']((($len15=$p['getattr'](self, 'set')) === null?$constant_int_0:
						(typeof $len15.__array != 'undefined' ? new $p['int']($len15.__array.length):
							(typeof $len15.__len__ == 'function'?$len15.__len__():
								(typeof $len15.length != 'undefined'? new $p['int']($len15.length):
									$p['len']($len15))))), expected_len);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_remove_until_empty'] = $method;
			$pyjs.track.lineno=1088;
			$method = $pyjs__bind_method2('test_discard_present', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1088};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1088;
				$pyjs.track.lineno=1089;
				self['set']['discard']('c');
				$pyjs.track.lineno=1090;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('ab'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_discard_present'] = $method;
			$pyjs.track.lineno=1092;
			$method = $pyjs__bind_method2('test_discard_absent', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1092};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1092;
				$pyjs.track.lineno=1093;
				self['set']['discard']('d');
				$pyjs.track.lineno=1094;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']('abc'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_discard_absent'] = $method;
			$pyjs.track.lineno=1096;
			$method = $pyjs__bind_method2('test_clear', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len16;
				$pyjs.track={module:'SetTest', lineno:1096};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1096;
				$pyjs.track.lineno=1097;
				self['set']['clear']();
				$pyjs.track.lineno=1098;
				self['assertEqual']((($len16=$p['getattr'](self, 'set')) === null?$constant_int_0:
					(typeof $len16.__array != 'undefined' ? new $p['int']($len16.__array.length):
						(typeof $len16.__len__ == 'function'?$len16.__len__():
							(typeof $len16.length != 'undefined'? new $p['int']($len16.length):
								$p['len']($len16))))), $constant_int_0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_clear'] = $method;
			$pyjs.track.lineno=1100;
			$method = $pyjs__bind_method2('test_pop', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var popped,$iter41_array,$len17,$len18,$pyjs__trackstack_size_1,$bool24,$iter41_type,$iter41_nextval,v,$iter41_iter,$iter41_idx;
				$pyjs.track={module:'SetTest', lineno:1100};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1100;
				$pyjs.track.lineno=1101;
				popped = $p['dict']([]);
				$pyjs.track.lineno=1102;
				while ((($bool24=$p['getattr'](self, 'set')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1103;
					popped.__setitem__(self['set']['pop'](), null);
				}
				$pyjs.track.lineno=1104;
				self['assertEqual']((($len17=popped) === null?$constant_int_0:
					(typeof $len17.__array != 'undefined' ? new $p['int']($len17.__array.length):
						(typeof $len17.__len__ == 'function'?$len17.__len__():
							(typeof $len17.length != 'undefined'? new $p['int']($len17.length):
								$p['len']($len17))))), (($len18=$p['getattr'](self, 'values')) === null?$constant_int_0:
					(typeof $len18.__array != 'undefined' ? new $p['int']($len18.__array.length):
						(typeof $len18.__len__ == 'function'?$len18.__len__():
							(typeof $len18.length != 'undefined'? new $p['int']($len18.length):
								$p['len']($len18))))));
				$pyjs.track.lineno=1105;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter41_iter = $p['getattr'](self, 'values');
				if (typeof ($iter41_array = $iter41_iter.__array) != 'undefined') {
					$iter41_type = 0;
				} else {
					$iter41_iter = $iter41_iter.__iter__();
					$iter41_type = typeof ($iter41_array = $iter41_iter.__array) != 'undefined'? 0 : (typeof $iter41_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter41_idx = 0;
				while (typeof ($iter41_nextval=($iter41_type?($iter41_type > 0?$iter41_iter.next(true,false):$p['wrapped_next']($iter41_iter)):$iter41_array[$iter41_idx++])) != 'undefined') {
					v = $iter41_nextval;
					$pyjs.track.lineno=1106;
					self['failUnless'](popped.__contains__(v));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_pop'] = $method;
			$pyjs.track.lineno=1108;
			$method = $pyjs__bind_method2('test_update_empty_tuple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1108};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1108;
				$pyjs.track.lineno=1109;
				self['set']['update']($p['tuple']([]));
				$pyjs.track.lineno=1110;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['getattr'](self, 'values')));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update_empty_tuple'] = $method;
			$pyjs.track.lineno=1112;
			$method = $pyjs__bind_method2('test_update_unit_tuple_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1112};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1112;
				$pyjs.track.lineno=1113;
				self['set']['update']($p['tuple'](['a']));
				$pyjs.track.lineno=1114;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']($p['getattr'](self, 'values')));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update_unit_tuple_overlap'] = $method;
			$pyjs.track.lineno=1116;
			$method = $pyjs__bind_method2('test_update_unit_tuple_non_overlap', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '774a534acf8fb9ede39e2727de3e53a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add25,$add26;
				$pyjs.track={module:'SetTest', lineno:1116};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1116;
				$pyjs.track.lineno=1117;
				self['set']['update']($p['tuple'](['a', 'z']));
				$pyjs.track.lineno=1118;
				self['assertEqual']($p['getattr'](self, 'set'), $p['set']((typeof ($add25=$p['getattr'](self, 'values'))==typeof ($add26=$p['list'](['z'])) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update_unit_tuple_non_overlap'] = $method;
			$pyjs.track.lineno=1048;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestMutate', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1122;
		$m['TestSubsets'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'ae23442477dd5c9de56460df5f2ee82b';
			$pyjs.track.lineno=1123;
			$cls_definition['case2method'] = $p['dict']([['<=', 'issubset'], ['>=', 'issuperset']]);
			$pyjs.track.lineno=1127;
			$cls_definition['reverse'] = $p['dict']([['==', '=='], ['!=', '!='], ['<', '>'], ['>', '<'], ['<=', '>='], ['>=', '<=']]);
			$pyjs.track.lineno=1135;
			$method = $pyjs__bind_method2('test_issubset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ae23442477dd5c9de56460df5f2ee82b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter42_array,result,$add29,$add28,$iter42_idx,$add27,$bool25,$iter42_type,expected,method,$14,$bool26,$9,$$case,$10,$11,$12,$13,$add32,$add33,$add30,$add31,$add34,$iter42_iter,$iter42_nextval,$pyjs__trackstack_size_1,y,x,rcase;
				$pyjs.track={module:'SetTest', lineno:1135};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1135;
				$pyjs.track.lineno=1136;
				x = $p['getattr'](self, 'left');
				$pyjs.track.lineno=1137;
				y = $p['getattr'](self, 'right');
				$pyjs.track.lineno=1138;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter42_iter = $p['tuple'](['!=', '==', '<', '<=', '>', '>=']);
				if (typeof ($iter42_array = $iter42_iter.__array) != 'undefined') {
					$iter42_type = 0;
				} else {
					$iter42_iter = $iter42_iter.__iter__();
					$iter42_type = typeof ($iter42_array = $iter42_iter.__array) != 'undefined'? 0 : (typeof $iter42_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter42_idx = 0;
				while (typeof ($iter42_nextval=($iter42_type?($iter42_type > 0?$iter42_iter.next(true,false):$p['wrapped_next']($iter42_iter)):$iter42_array[$iter42_idx++])) != 'undefined') {
					$$case = $iter42_nextval;
					$pyjs.track.lineno=1139;
					expected = $p['getattr'](self, 'cases').__contains__($$case);
					$pyjs.track.lineno=1141;
					result = (typeof eval == "undefined"?$m.eval:eval)((typeof ($add29=(typeof ($add27='x')==typeof ($add28=$$case) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))==typeof ($add30='y') && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30)), $p.dict({'case': $$case,'$add28': $add28,'$iter42_idx': $iter42_idx,'self': self,'$add29': $add29,'$add27': $add27,'$iter42_array': $iter42_array,'$iter42_iter': $iter42_iter,'$iter42_nextval': $iter42_nextval,'$iter42_type': $iter42_type,'$pyjs__trackstack_size_1': $pyjs__trackstack_size_1,'y': y,'x': x,'$add30': $add30,'expected': expected}));
					$pyjs.track.lineno=1142;
					self['assertEqual'](result, expected);
					$pyjs.track.lineno=1144;
					if ((($bool25=$p['getattr']($m['TestSubsets'], 'case2method').__contains__($$case)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
							false :
							(typeof $bool25=='object'?
								(typeof $bool25.__nonzero__=='function'?
									$bool25.__nonzero__() :
									(typeof $bool25.__len__=='function'?
										($bool25.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=1145;
						method = $p['getattr'](x, (typeof ($9=$p['getattr']($m['TestSubsets'], 'case2method')).__array != 'undefined'?
							((typeof $9.__array[$10=$$case]) != 'undefined'?$9.__array[$10]:
								$9.__getitem__($10)):
								$9.__getitem__($$case)));
						$pyjs.track.lineno=1146;
						result = method(y);
						$pyjs.track.lineno=1147;
						self['assertEqual'](result, expected);
					}
					$pyjs.track.lineno=1150;
					rcase = (typeof ($11=$p['getattr']($m['TestSubsets'], 'reverse')).__array != 'undefined'?
						((typeof $11.__array[$12=$$case]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__($$case));
					$pyjs.track.lineno=1151;
					result = (typeof eval == "undefined"?$m.eval:eval)((typeof ($add33=(typeof ($add31='y')==typeof ($add32=rcase) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32)))==typeof ($add34='x') && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34)), $p.dict({'$iter42_array': $iter42_array,'result': result,'$add29': $add29,'$add28': $add28,'$iter42_idx': $iter42_idx,'self': self,'$add27': $add27,'$bool25': $bool25,'$iter42_type': $iter42_type,'expected': expected,'method': method,'$9': $9,'case': $$case,'$10': $10,'$11': $11,'$12': $12,'$add32': $add32,'$add33': $add33,'$add30': $add30,'$add31': $add31,'$add34': $add34,'$iter42_iter': $iter42_iter,'$iter42_nextval': $iter42_nextval,'$pyjs__trackstack_size_1': $pyjs__trackstack_size_1,'y': y,'x': x,'rcase': rcase}));
					$pyjs.track.lineno=1152;
					self['assertEqual'](result, expected);
					$pyjs.track.lineno=1153;
					if ((($bool26=$p['getattr']($m['TestSubsets'], 'case2method').__contains__(rcase)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
							false :
							(typeof $bool26=='object'?
								(typeof $bool26.__nonzero__=='function'?
									$bool26.__nonzero__() :
									(typeof $bool26.__len__=='function'?
										($bool26.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=1154;
						method = $p['getattr'](y, (typeof ($13=$p['getattr']($m['TestSubsets'], 'case2method')).__array != 'undefined'?
							((typeof $13.__array[$14=rcase]) != 'undefined'?$13.__array[$14]:
								$13.__getitem__($14)):
								$13.__getitem__(rcase)));
						$pyjs.track.lineno=1155;
						result = method(x);
						$pyjs.track.lineno=1156;
						self['assertEqual'](result, expected);
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_issubset'] = $method;
			$pyjs.track.lineno=1122;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsets', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1160;
		$m['TestSubsetEqualEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '1d207894d6114459a4e642f24895f4d8';
			$pyjs.track.lineno=1161;
			$cls_definition['left'] = $p['set']();
			$pyjs.track.lineno=1162;
			$cls_definition['right'] = $p['set']();
			$pyjs.track.lineno=1163;
			$cls_definition['$$name'] = 'both empty';
			$pyjs.track.lineno=1164;
			$cls_definition['cases'] = $p['tuple'](['==', '<=', '>=']);
			$pyjs.track.lineno=1160;
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetEqualEmpty', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1168;
		$m['TestSubsetEqualNonEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '1fd34372b359120a626c9e3019fae98c';
			$pyjs.track.lineno=1169;
			$cls_definition['left'] = $p['set']($p['list']([$constant_int_1, $constant_int_2]));
			$pyjs.track.lineno=1170;
			$cls_definition['right'] = $p['set']($p['list']([$constant_int_1, $constant_int_2]));
			$pyjs.track.lineno=1171;
			$cls_definition['$$name'] = 'equal pair';
			$pyjs.track.lineno=1172;
			$cls_definition['cases'] = $p['tuple'](['==', '<=', '>=']);
			$pyjs.track.lineno=1168;
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetEqualNonEmpty', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1176;
		$m['TestSubsetEmptyNonEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '303359b7a39042405bfc90675feccf27';
			$pyjs.track.lineno=1177;
			$cls_definition['left'] = $p['set']();
			$pyjs.track.lineno=1178;
			$cls_definition['right'] = $p['set']($p['list']([$constant_int_1, $constant_int_2]));
			$pyjs.track.lineno=1179;
			$cls_definition['$$name'] = 'one empty, one non-empty';
			$pyjs.track.lineno=1180;
			$cls_definition['cases'] = $p['tuple'](['!=', '<', '<=']);
			$pyjs.track.lineno=1176;
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetEmptyNonEmpty', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1184;
		$m['TestSubsetPartial'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'e75b208c7cdf9a1f1a359605bcbcc7c0';
			$pyjs.track.lineno=1185;
			$cls_definition['left'] = $p['set']($p['list']([$constant_int_1]));
			$pyjs.track.lineno=1186;
			$cls_definition['right'] = $p['set']($p['list']([$constant_int_1, $constant_int_2]));
			$pyjs.track.lineno=1187;
			$cls_definition['$$name'] = 'one a non-empty proper subset of other';
			$pyjs.track.lineno=1188;
			$cls_definition['cases'] = $p['tuple'](['!=', '<', '<=']);
			$pyjs.track.lineno=1184;
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetPartial', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1192;
		$m['TestSubsetNonOverlap'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '456233371de0c73e6dd22d3c41fb6f56';
			$pyjs.track.lineno=1193;
			$cls_definition['left'] = $p['set']($p['list']([$constant_int_1]));
			$pyjs.track.lineno=1194;
			$cls_definition['right'] = $p['set']($p['list']([$constant_int_2]));
			$pyjs.track.lineno=1195;
			$cls_definition['$$name'] = 'neither empty, neither contains';
			$pyjs.track.lineno=1196;
			$cls_definition['cases'] = '!=';
			$pyjs.track.lineno=1192;
			var $bases = new Array($m['TestSubsets']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestSubsetNonOverlap', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1200;
		$m['TestOnlySetsInBinaryOps'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'a17ad64ab34c723746d8a419d9888265';
			$pyjs.track.lineno=1201;
			$method = $pyjs__bind_method2('test_eq_ne', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1201};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1201;
				$pyjs.track.lineno=1203;
				self['assertEqual']($p['op_eq']($p['getattr'](self, 'other'), $p['getattr'](self, 'set')), false);
				$pyjs.track.lineno=1204;
				self['assertEqual']($p['op_eq']($p['getattr'](self, 'set'), $p['getattr'](self, 'other')), false);
				$pyjs.track.lineno=1205;
				self['assertEqual'](!$p['op_eq']($p['getattr'](self, 'other'), $p['getattr'](self, 'set')), true);
				$pyjs.track.lineno=1206;
				self['assertEqual'](!$p['op_eq']($p['getattr'](self, 'set'), $p['getattr'](self, 'other')), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_eq_ne'] = $method;
			$pyjs.track.lineno=1208;
			$method = $pyjs__bind_method2('test_ge_gt_le_lt', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1,$lambda8;
				$pyjs.track={module:'SetTest', lineno:1208};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1208;
				$pyjs.track.lineno=1209;
				var 				$lambda1 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $cmp20,$cmp19;
					$pyjs.track={module:'SetTest',lineno:1209};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1209;
					$pyjs.track.lineno=1209;
					$pyjs.track.lineno=1209;
					var $pyjs__ret = ((($cmp19=$p['getattr'](self, 'set'))===($cmp20=$p['getattr'](self, 'other'))?0:
						(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
							($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
							$p['cmp']($cmp19, $cmp20))) == -1);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda1);
				$pyjs.track.lineno=1210;
				var 				$lambda2 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $cmp21,$cmp22;
					$pyjs.track={module:'SetTest',lineno:1210};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1210;
					$pyjs.track.lineno=1210;
					$pyjs.track.lineno=1210;
					var $pyjs__ret = ((($cmp21=$p['getattr'](self, 'set'))===($cmp22=$p['getattr'](self, 'other'))?0:
						(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
							($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
							$p['cmp']($cmp21, $cmp22))) < 1);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda2.__name__ = '$lambda2';

				$lambda2.__bind_type__ = 0;
				$lambda2.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda2);
				$pyjs.track.lineno=1211;
				var 				$lambda3 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $cmp23,$cmp24;
					$pyjs.track={module:'SetTest',lineno:1211};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1211;
					$pyjs.track.lineno=1211;
					$pyjs.track.lineno=1211;
					var $pyjs__ret = ((($cmp23=$p['getattr'](self, 'set'))===($cmp24=$p['getattr'](self, 'other'))?0:
						(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
							($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
							$p['cmp']($cmp23, $cmp24))) == 1);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda3.__name__ = '$lambda3';

				$lambda3.__bind_type__ = 0;
				$lambda3.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda3);
				$pyjs.track.lineno=1212;
				var 				$lambda4 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $cmp25,$cmp26;
					$pyjs.track={module:'SetTest',lineno:1212};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1212;
					$pyjs.track.lineno=1212;
					$pyjs.track.lineno=1212;
					var $pyjs__ret = ((((($cmp25=$p['getattr'](self, 'set'))===($cmp26=$p['getattr'](self, 'other'))?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))))|1) == 1);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda4.__name__ = '$lambda4';

				$lambda4.__bind_type__ = 0;
				$lambda4.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda4);
				$pyjs.track.lineno=1214;
				var 				$lambda5 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $cmp28,$cmp27;
					$pyjs.track={module:'SetTest',lineno:1214};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1214;
					$pyjs.track.lineno=1214;
					$pyjs.track.lineno=1214;
					var $pyjs__ret = ((($cmp27=$p['getattr'](self, 'other'))===($cmp28=$p['getattr'](self, 'set'))?0:
						(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
							($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
							$p['cmp']($cmp27, $cmp28))) == -1);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda5.__name__ = '$lambda5';

				$lambda5.__bind_type__ = 0;
				$lambda5.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda5);
				$pyjs.track.lineno=1215;
				var 				$lambda6 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $cmp29,$cmp30;
					$pyjs.track={module:'SetTest',lineno:1215};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1215;
					$pyjs.track.lineno=1215;
					$pyjs.track.lineno=1215;
					var $pyjs__ret = ((($cmp29=$p['getattr'](self, 'other'))===($cmp30=$p['getattr'](self, 'set'))?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))) < 1);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda6.__name__ = '$lambda6';

				$lambda6.__bind_type__ = 0;
				$lambda6.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda6);
				$pyjs.track.lineno=1216;
				var 				$lambda7 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $cmp32,$cmp31;
					$pyjs.track={module:'SetTest',lineno:1216};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1216;
					$pyjs.track.lineno=1216;
					$pyjs.track.lineno=1216;
					var $pyjs__ret = ((($cmp31=$p['getattr'](self, 'other'))===($cmp32=$p['getattr'](self, 'set'))?0:
						(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
							($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
							$p['cmp']($cmp31, $cmp32))) == 1);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda7.__name__ = '$lambda7';

				$lambda7.__bind_type__ = 0;
				$lambda7.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda7);
				$pyjs.track.lineno=1217;
				var 				$lambda8 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $cmp34,$cmp33;
					$pyjs.track={module:'SetTest',lineno:1217};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1217;
					$pyjs.track.lineno=1217;
					$pyjs.track.lineno=1217;
					var $pyjs__ret = ((((($cmp33=$p['getattr'](self, 'other'))===($cmp34=$p['getattr'](self, 'set'))?0:
						(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
							($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
							$p['cmp']($cmp33, $cmp34))))|1) == 1);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda8.__name__ = '$lambda8';

				$lambda8.__bind_type__ = 0;
				$lambda8.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda8);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ge_gt_le_lt'] = $method;
			$pyjs.track.lineno=1219;
			$method = $pyjs__bind_method2('test_update_operator', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'SetTest', lineno:1219};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1219;
				$pyjs.track.lineno=1220;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=1221;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))) : $p['setattr'](self, 'set', $p['op_bitor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))); 
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=1225;
						self['fail']('expected TypeError');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=1223;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update_operator'] = $method;
			$pyjs.track.lineno=1227;
			$method = $pyjs__bind_method2('test_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool27;
				$pyjs.track={module:'SetTest', lineno:1227};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1227;
				$pyjs.track.lineno=1228;
				if ((($bool27=$p['getattr'](self, 'otherIsIterable')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27.__nonzero__=='function'?
								$bool27.__nonzero__() :
								(typeof $bool27.__len__=='function'?
									($bool27.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1229;
					self['set']['update']($p['getattr'](self, 'other'));
				}
				else {
					$pyjs.track.lineno=1231;
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'update'), $p['getattr'](self, 'other'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_update'] = $method;
			$pyjs.track.lineno=1233;
			$method = $pyjs__bind_method2('test_union', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda10,$bool28,$lambda9;
				$pyjs.track={module:'SetTest', lineno:1233};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1233;
				$pyjs.track.lineno=1234;
				var 				$lambda9 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'SetTest',lineno:1234};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1234;
					$pyjs.track.lineno=1234;
					$pyjs.track.lineno=1234;
					var $pyjs__ret = $p['op_bitor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda9.__name__ = '$lambda9';

				$lambda9.__bind_type__ = 0;
				$lambda9.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda9);
				$pyjs.track.lineno=1235;
				var 				$lambda10 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'SetTest',lineno:1235};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1235;
					$pyjs.track.lineno=1235;
					$pyjs.track.lineno=1235;
					var $pyjs__ret = $p['op_bitor2']($p['getattr'](self, 'other'), $p['getattr'](self, 'set'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda10.__name__ = '$lambda10';

				$lambda10.__bind_type__ = 0;
				$lambda10.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda10);
				$pyjs.track.lineno=1236;
				if ((($bool28=$p['getattr'](self, 'otherIsIterable')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28.__nonzero__=='function'?
								$bool28.__nonzero__() :
								(typeof $bool28.__len__=='function'?
									($bool28.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1237;
					self['set']['union']($p['getattr'](self, 'other'));
				}
				else {
					$pyjs.track.lineno=1239;
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'union'), $p['getattr'](self, 'other'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_union'] = $method;
			$pyjs.track.lineno=1241;
			$method = $pyjs__bind_method2('test_intersection_update_operator', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'SetTest', lineno:1241};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1241;
				$pyjs.track.lineno=1242;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=1243;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))) : $p['setattr'](self, 'set', $p['op_bitand2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))); 
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=1247;
						self['fail']('expected TypeError');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=1245;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_update_operator'] = $method;
			$pyjs.track.lineno=1249;
			$method = $pyjs__bind_method2('test_intersection_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool29;
				$pyjs.track={module:'SetTest', lineno:1249};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1249;
				$pyjs.track.lineno=1250;
				if ((($bool29=$p['getattr'](self, 'otherIsIterable')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29.__nonzero__=='function'?
								$bool29.__nonzero__() :
								(typeof $bool29.__len__=='function'?
									($bool29.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1251;
					self['set']['intersection_update']($p['getattr'](self, 'other'));
				}
				else {
					$pyjs.track.lineno=1253;
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'intersection_update'), $p['getattr'](self, 'other'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection_update'] = $method;
			$pyjs.track.lineno=1257;
			$method = $pyjs__bind_method2('test_intersection', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda12,$bool30,$lambda11;
				$pyjs.track={module:'SetTest', lineno:1257};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1257;
				$pyjs.track.lineno=1258;
				var 				$lambda11 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'SetTest',lineno:1258};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1258;
					$pyjs.track.lineno=1258;
					$pyjs.track.lineno=1258;
					var $pyjs__ret = $p['op_bitand2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda11.__name__ = '$lambda11';

				$lambda11.__bind_type__ = 0;
				$lambda11.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda11);
				$pyjs.track.lineno=1259;
				var 				$lambda12 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'SetTest',lineno:1259};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1259;
					$pyjs.track.lineno=1259;
					$pyjs.track.lineno=1259;
					var $pyjs__ret = $p['op_bitand2']($p['getattr'](self, 'other'), $p['getattr'](self, 'set'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda12.__name__ = '$lambda12';

				$lambda12.__bind_type__ = 0;
				$lambda12.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda12);
				$pyjs.track.lineno=1260;
				if ((($bool30=$p['getattr'](self, 'otherIsIterable')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30.__nonzero__=='function'?
								$bool30.__nonzero__() :
								(typeof $bool30.__len__=='function'?
									($bool30.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1261;
					self['set']['intersection']($p['getattr'](self, 'other'));
				}
				else {
					$pyjs.track.lineno=1263;
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'intersection'), $p['getattr'](self, 'other'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_intersection'] = $method;
			$pyjs.track.lineno=1265;
			$method = $pyjs__bind_method2('test_sym_difference_update_operator', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'SetTest', lineno:1265};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1265;
				$pyjs.track.lineno=1266;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=1267;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))) : $p['setattr'](self, 'set', $p['op_bitxor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'))); 
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=1271;
						self['fail']('expected TypeError');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=1269;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_update_operator'] = $method;
			$pyjs.track.lineno=1273;
			$method = $pyjs__bind_method2('test_sym_difference_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool31;
				$pyjs.track={module:'SetTest', lineno:1273};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1273;
				$pyjs.track.lineno=1274;
				if ((($bool31=$p['getattr'](self, 'otherIsIterable')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
						false :
						(typeof $bool31=='object'?
							(typeof $bool31.__nonzero__=='function'?
								$bool31.__nonzero__() :
								(typeof $bool31.__len__=='function'?
									($bool31.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1275;
					self['set']['symmetric_difference_update']($p['getattr'](self, 'other'));
				}
				else {
					$pyjs.track.lineno=1277;
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'symmetric_difference_update'), $p['getattr'](self, 'other'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference_update'] = $method;
			$pyjs.track.lineno=1281;
			$method = $pyjs__bind_method2('test_sym_difference', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda13,$bool32,$lambda14;
				$pyjs.track={module:'SetTest', lineno:1281};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1281;
				$pyjs.track.lineno=1282;
				var 				$lambda13 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'SetTest',lineno:1282};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1282;
					$pyjs.track.lineno=1282;
					$pyjs.track.lineno=1282;
					var $pyjs__ret = $p['op_bitxor2']($p['getattr'](self, 'set'), $p['getattr'](self, 'other'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda13.__name__ = '$lambda13';

				$lambda13.__bind_type__ = 0;
				$lambda13.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda13);
				$pyjs.track.lineno=1283;
				var 				$lambda14 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'SetTest',lineno:1283};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1283;
					$pyjs.track.lineno=1283;
					$pyjs.track.lineno=1283;
					var $pyjs__ret = $p['op_bitxor2']($p['getattr'](self, 'other'), $p['getattr'](self, 'set'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda14.__name__ = '$lambda14';

				$lambda14.__bind_type__ = 0;
				$lambda14.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda14);
				$pyjs.track.lineno=1284;
				if ((($bool32=$p['getattr'](self, 'otherIsIterable')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1285;
					self['set']['symmetric_difference']($p['getattr'](self, 'other'));
				}
				else {
					$pyjs.track.lineno=1287;
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'symmetric_difference'), $p['getattr'](self, 'other'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_sym_difference'] = $method;
			$pyjs.track.lineno=1290;
			$method = $pyjs__bind_method2('test_difference_update_operator', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub21,$pyjs_try_err;
				$pyjs.track={module:'SetTest', lineno:1290};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1290;
				$pyjs.track.lineno=1291;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=1292;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', (typeof ($sub21=$p['getattr'](self, 'set'))==typeof ($sub22=$p['getattr'](self, 'other')) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22))) : $p['setattr'](self, 'set', (typeof ($sub21=$p['getattr'](self, 'set'))==typeof ($sub22=$p['getattr'](self, 'other')) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22))); 
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=1296;
						self['fail']('expected TypeError');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=1294;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_update_operator'] = $method;
			$pyjs.track.lineno=1298;
			$method = $pyjs__bind_method2('test_difference_update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool33;
				$pyjs.track={module:'SetTest', lineno:1298};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1298;
				$pyjs.track.lineno=1299;
				if ((($bool33=$p['getattr'](self, 'otherIsIterable')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1300;
					self['set']['difference_update']($p['getattr'](self, 'other'));
				}
				else {
					$pyjs.track.lineno=1302;
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'difference_update'), $p['getattr'](self, 'other'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference_update'] = $method;
			$pyjs.track.lineno=1306;
			$method = $pyjs__bind_method2('test_difference', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a17ad64ab34c723746d8a419d9888265') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool34,$lambda16,$lambda15;
				$pyjs.track={module:'SetTest', lineno:1306};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1306;
				$pyjs.track.lineno=1307;
				var 				$lambda15 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $sub23,$sub24;
					$pyjs.track={module:'SetTest',lineno:1307};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1307;
					$pyjs.track.lineno=1307;
					$pyjs.track.lineno=1307;
					var $pyjs__ret = (typeof ($sub23=$p['getattr'](self, 'set'))==typeof ($sub24=$p['getattr'](self, 'other')) && (typeof $sub23=='number'||typeof $sub23=='string')?
						$sub23-$sub24:
						$p['op_sub']($sub23,$sub24));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda15.__name__ = '$lambda15';

				$lambda15.__bind_type__ = 0;
				$lambda15.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda15);
				$pyjs.track.lineno=1308;
				var 				$lambda16 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $sub26,$sub25;
					$pyjs.track={module:'SetTest',lineno:1308};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1308;
					$pyjs.track.lineno=1308;
					$pyjs.track.lineno=1308;
					var $pyjs__ret = (typeof ($sub25=$p['getattr'](self, 'other'))==typeof ($sub26=$p['getattr'](self, 'set')) && (typeof $sub25=='number'||typeof $sub25=='string')?
						$sub25-$sub26:
						$p['op_sub']($sub25,$sub26));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda16.__name__ = '$lambda16';

				$lambda16.__bind_type__ = 0;
				$lambda16.__args__ = [null,null];
				self['assertRaises']($p['TypeError'], $lambda16);
				$pyjs.track.lineno=1309;
				if ((($bool34=$p['getattr'](self, 'otherIsIterable')) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34.__nonzero__=='function'?
								$bool34.__nonzero__() :
								(typeof $bool34.__len__=='function'?
									($bool34.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1310;
					self['set']['difference']($p['getattr'](self, 'other'));
				}
				else {
					$pyjs.track.lineno=1312;
					self['assertRaises']($p['TypeError'], $p['getattr']($p['getattr'](self, 'set'), 'difference'), $p['getattr'](self, 'other'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_difference'] = $method;
			$pyjs.track.lineno=1200;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsInBinaryOps', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1316;
		$m['TestOnlySetsNumeric'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'c9c088c2a01b83dbc31fc0ffaee13d62';
			$pyjs.track.lineno=1317;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c9c088c2a01b83dbc31fc0ffaee13d62') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1317};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1317;
				$pyjs.track.lineno=1318;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				$pyjs.track.lineno=1319;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('other', $constant_int_19) : $p['setattr'](self, 'other', $constant_int_19); 
				$pyjs.track.lineno=1320;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('otherIsIterable', false) : $p['setattr'](self, 'otherIsIterable', false); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1316;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsNumeric', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1324;
		$m['TestOnlySetsDict'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '971fe96918cbf48ced8f9519245da298';
			$pyjs.track.lineno=1325;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '971fe96918cbf48ced8f9519245da298') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1325};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1325;
				$pyjs.track.lineno=1326;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				$pyjs.track.lineno=1327;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('other', $p['dict']([[$constant_int_1, $constant_int_2], [$constant_int_3, $constant_int_4]])) : $p['setattr'](self, 'other', $p['dict']([[$constant_int_1, $constant_int_2], [$constant_int_3, $constant_int_4]])); 
				$pyjs.track.lineno=1328;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('otherIsIterable', true) : $p['setattr'](self, 'otherIsIterable', true); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1324;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsDict', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1332;
		$m['TestOnlySetsOperator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'd3f5499e1dddd14fa1ef349049ad342c';
			$pyjs.track.lineno=1333;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd3f5499e1dddd14fa1ef349049ad342c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1333};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1333;
				$pyjs.track.lineno=1334;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				$pyjs.track.lineno=1335;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('other', $p['getattr']((typeof operator == "undefined"?$m.operator:operator), 'add')) : $p['setattr'](self, 'other', $p['getattr']((typeof operator == "undefined"?$m.operator:operator), 'add')); 
				$pyjs.track.lineno=1336;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('otherIsIterable', false) : $p['setattr'](self, 'otherIsIterable', false); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1332;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsOperator', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1340;
		$m['TestOnlySetsTuple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '2f0cbf7dc4b8ed84d9013cac119cfe40';
			$pyjs.track.lineno=1341;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2f0cbf7dc4b8ed84d9013cac119cfe40') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1341};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1341;
				$pyjs.track.lineno=1342;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				$pyjs.track.lineno=1343;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('other', $p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6])) : $p['setattr'](self, 'other', $p['tuple']([$constant_int_2, $constant_int_4, $constant_int_6])); 
				$pyjs.track.lineno=1344;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('otherIsIterable', true) : $p['setattr'](self, 'otherIsIterable', true); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1340;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsTuple', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1348;
		$m['TestOnlySetsString'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'e31e13fad0d33e97c86b622c6b9730b0';
			$pyjs.track.lineno=1349;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e31e13fad0d33e97c86b622c6b9730b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1349};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1349;
				$pyjs.track.lineno=1350;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				$pyjs.track.lineno=1351;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('other', 'abc') : $p['setattr'](self, 'other', 'abc'); 
				$pyjs.track.lineno=1352;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('otherIsIterable', true) : $p['setattr'](self, 'otherIsIterable', true); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1348;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsString', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1356;
		$m['TestOnlySetsGenerator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '5e96c3bc0fe21bd1c297485bac88c89c';
			$pyjs.track.lineno=1357;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5e96c3bc0fe21bd1c297485bac88c89c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var gen;
				$pyjs.track={module:'SetTest', lineno:1357};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1357;
				$pyjs.track.lineno=1358;
				gen = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $iter43_type,$iter44_type,$iter43_iter,$iter43_array,$iter44_idx,i,$iter44_array,$iter44_iter,$iter43_idx,$pyjs__trackstack_size_1,$iter44_nextval,$iter43_nextval;
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
					$pyjs.track.module='SetTest';
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
					$pyjs.track.module='SetTest';
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
					$pyjs.track.module='SetTest';
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
					$pyjs.track.module='SetTest';
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
					
						$pyjs.track={module:'SetTest',lineno:1358};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='SetTest';
						$pyjs.track.lineno=1358;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=1359;
							$pyjs__trackstack_size_1=$pyjs.trackstack.length;
							$iter44_iter = $p['xrange']($constant_int_0, $constant_int_10, $constant_int_2);
							if (typeof ($iter44_array = $iter44_iter.__array) != 'undefined') {
								$iter44_type = 0;
							} else {
								$iter44_iter = $iter44_iter.__iter__();
								$iter44_type = typeof ($iter44_array = $iter44_iter.__array) != 'undefined'? 0 : (typeof $iter44_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter44_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter44_nextval=($iter44_type?($iter44_type > 0?$iter44_iter.next(true,false):$p['wrapped_next']($iter44_iter)):$iter44_array[$iter44_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									i = $iter44_nextval;
									$pyjs.track.lineno=1360;
									$pyjs.track.lineno=1360;
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
							$pyjs.track.module='SetTest';
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
				gen.__name__ = 'gen';

				gen.__bind_type__ = 0;
				gen.__args__ = [null,null];
				$pyjs.track.lineno=1362;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))) : $p['setattr'](self, 'set', $p['set']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]))); 
				$pyjs.track.lineno=1363;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('other', gen()) : $p['setattr'](self, 'other', gen()); 
				$pyjs.track.lineno=1364;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('otherIsIterable', true) : $p['setattr'](self, 'otherIsIterable', true); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1356;
			var $bases = new Array($m['TestOnlySetsInBinaryOps']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestOnlySetsGenerator', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1368;
		$m['TestCopying'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '853feb2b1909ef0711aa5eed15347bb1';
			$pyjs.track.lineno=1369;
			$method = $pyjs__bind_method2('test_copy', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '853feb2b1909ef0711aa5eed15347bb1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $15,$16,$len21,$iter45_iter,$len20,i,$len19,set_list,$iter45_array,$iter45_type,$iter45_nextval,$17,$18,$pyjs__trackstack_size_1,dup,$iter45_idx,dup_list;
				$pyjs.track={module:'SetTest', lineno:1369};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1369;
				$pyjs.track.lineno=1370;
				dup = self['set']['copy']();
				$pyjs.track.lineno=1371;
				dup_list = $p['list'](dup);
				$pyjs.track.lineno=1372;
				dup_list['sort']();
				$pyjs.track.lineno=1373;
				set_list = $p['list']($p['getattr'](self, 'set'));
				$pyjs.track.lineno=1374;
				set_list['sort']();
				$pyjs.track.lineno=1375;
				self['assertEqual']((($len19=dup_list) === null?$constant_int_0:
					(typeof $len19.__array != 'undefined' ? new $p['int']($len19.__array.length):
						(typeof $len19.__len__ == 'function'?$len19.__len__():
							(typeof $len19.length != 'undefined'? new $p['int']($len19.length):
								$p['len']($len19))))), (($len20=set_list) === null?$constant_int_0:
					(typeof $len20.__array != 'undefined' ? new $p['int']($len20.__array.length):
						(typeof $len20.__len__ == 'function'?$len20.__len__():
							(typeof $len20.length != 'undefined'? new $p['int']($len20.length):
								$p['len']($len20))))));
				$pyjs.track.lineno=1376;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter45_iter = $p['range']((($len21=dup_list) === null?$constant_int_0:
					(typeof $len21.__array != 'undefined' ? new $p['int']($len21.__array.length):
						(typeof $len21.__len__ == 'function'?$len21.__len__():
							(typeof $len21.length != 'undefined'? new $p['int']($len21.length):
								$p['len']($len21))))));
				if (typeof ($iter45_array = $iter45_iter.__array) != 'undefined') {
					$iter45_type = 0;
				} else {
					$iter45_iter = $iter45_iter.__iter__();
					$iter45_type = typeof ($iter45_array = $iter45_iter.__array) != 'undefined'? 0 : (typeof $iter45_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter45_idx = 0;
				while (typeof ($iter45_nextval=($iter45_type?($iter45_type > 0?$iter45_iter.next(true,false):$p['wrapped_next']($iter45_iter)):$iter45_array[$iter45_idx++])) != 'undefined') {
					i = $iter45_nextval;
					$pyjs.track.lineno=1377;
					self['failUnless']($p['op_is']((typeof ($15=dup_list).__array != 'undefined'?
						((typeof $15.__array[$16=i]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__(i)), (typeof ($17=set_list).__array != 'undefined'?
						((typeof $17.__array[$18=i]) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__(i))));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_copy'] = $method;
			$pyjs.track.lineno=1379;
			$method = $pyjs__bind_method2('test_deep_copy', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '853feb2b1909ef0711aa5eed15347bb1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len24,$iter46_array,$len23,$len22,i,$20,set_list,$iter46_iter,$iter46_nextval,$19,$21,$iter46_idx,dup,dup_list,$pyjs__trackstack_size_1,$22,$iter46_type;
				$pyjs.track={module:'SetTest', lineno:1379};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1379;
				$pyjs.track.lineno=1380;
				dup = $m.copy['deepcopy']($p['getattr'](self, 'set'));
				$pyjs.track.lineno=1382;
				dup_list = $p['list'](dup);
				$pyjs.track.lineno=1383;
				dup_list['sort']();
				$pyjs.track.lineno=1384;
				set_list = $p['list']($p['getattr'](self, 'set'));
				$pyjs.track.lineno=1385;
				set_list['sort']();
				$pyjs.track.lineno=1386;
				self['assertEqual']((($len22=dup_list) === null?$constant_int_0:
					(typeof $len22.__array != 'undefined' ? new $p['int']($len22.__array.length):
						(typeof $len22.__len__ == 'function'?$len22.__len__():
							(typeof $len22.length != 'undefined'? new $p['int']($len22.length):
								$p['len']($len22))))), (($len23=set_list) === null?$constant_int_0:
					(typeof $len23.__array != 'undefined' ? new $p['int']($len23.__array.length):
						(typeof $len23.__len__ == 'function'?$len23.__len__():
							(typeof $len23.length != 'undefined'? new $p['int']($len23.length):
								$p['len']($len23))))));
				$pyjs.track.lineno=1387;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter46_iter = $p['range']((($len24=dup_list) === null?$constant_int_0:
					(typeof $len24.__array != 'undefined' ? new $p['int']($len24.__array.length):
						(typeof $len24.__len__ == 'function'?$len24.__len__():
							(typeof $len24.length != 'undefined'? new $p['int']($len24.length):
								$p['len']($len24))))));
				if (typeof ($iter46_array = $iter46_iter.__array) != 'undefined') {
					$iter46_type = 0;
				} else {
					$iter46_iter = $iter46_iter.__iter__();
					$iter46_type = typeof ($iter46_array = $iter46_iter.__array) != 'undefined'? 0 : (typeof $iter46_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter46_idx = 0;
				while (typeof ($iter46_nextval=($iter46_type?($iter46_type > 0?$iter46_iter.next(true,false):$p['wrapped_next']($iter46_iter)):$iter46_array[$iter46_idx++])) != 'undefined') {
					i = $iter46_nextval;
					$pyjs.track.lineno=1388;
					self['assertEqual']((typeof ($19=dup_list).__array != 'undefined'?
						((typeof $19.__array[$20=i]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__(i)), (typeof ($21=set_list).__array != 'undefined'?
						((typeof $21.__array[$22=i]) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__(i)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_deep_copy'] = $method;
			$pyjs.track.lineno=1368;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopying', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1392;
		$m['TestCopyingEmpty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'f5262c07159485e6e315b1dfb4838dab';
			$pyjs.track.lineno=1393;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f5262c07159485e6e315b1dfb4838dab') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1393};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1393;
				$pyjs.track.lineno=1394;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']()) : $p['setattr'](self, 'set', $p['set']()); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1392;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingEmpty', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1398;
		$m['TestCopyingSingleton'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '18fae02c35cdeb97941f388af896dc5d';
			$pyjs.track.lineno=1399;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '18fae02c35cdeb97941f388af896dc5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1399};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1399;
				$pyjs.track.lineno=1400;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['list'](['hello']))) : $p['setattr'](self, 'set', $p['set']($p['list'](['hello']))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1398;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingSingleton', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1404;
		$m['TestCopyingTriple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'c0a0fc172b8bab444020db9722dc7a1c';
			$pyjs.track.lineno=1405;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c0a0fc172b8bab444020db9722dc7a1c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1405};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1405;
				$pyjs.track.lineno=1406;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['list'](['zero', $constant_int_0, null]))) : $p['setattr'](self, 'set', $p['set']($p['list'](['zero', $constant_int_0, null]))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1404;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingTriple', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1410;
		$m['TestCopyingTuple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'c592ec1ce6c9e9165e529e1629218377';
			$pyjs.track.lineno=1411;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c592ec1ce6c9e9165e529e1629218377') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1411};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1411;
				$pyjs.track.lineno=1412;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['list']([$p['tuple']([$constant_int_1, $constant_int_2])]))) : $p['setattr'](self, 'set', $p['set']($p['list']([$p['tuple']([$constant_int_1, $constant_int_2])]))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1410;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingTuple', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1416;
		$m['TestCopyingNested'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '8434e648e489d006d103e2be0d55a739';
			$pyjs.track.lineno=1417;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8434e648e489d006d103e2be0d55a739') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1417};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1417;
				$pyjs.track.lineno=1418;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('set', $p['set']($p['list']([$p['tuple']([$p['tuple']([$constant_int_1, $constant_int_2]), $p['tuple']([$constant_int_3, $constant_int_4])])]))) : $p['setattr'](self, 'set', $p['set']($p['list']([$p['tuple']([$p['tuple']([$constant_int_1, $constant_int_2]), $p['tuple']([$constant_int_3, $constant_int_4])])]))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1416;
			var $bases = new Array($m['TestCopying']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestCopyingNested', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1422;
		$m['TestIdentities'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '52ea865ebce622b63bd4b309742483c6';
			$pyjs.track.lineno=1423;
			$method = $pyjs__bind_method2('setUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1423};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1423;
				$pyjs.track.lineno=1424;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('a', $p['set']('abracadabra')) : $p['setattr'](self, 'a', $p['set']('abracadabra')); 
				$pyjs.track.lineno=1425;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('b', $p['set']('alacazam')) : $p['setattr'](self, 'b', $p['set']('alacazam')); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=1427;
			$method = $pyjs__bind_method2('test_binopsVsSubsets', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$sub30,b,$sub27,$cmp40,$sub29,$cmp48,$cmp47,$cmp42,$cmp43,$cmp39,$cmp38,$cmp37,$cmp36,$cmp35,$cmp41,$cmp46,$sub28,$cmp44,$cmp45;
				$pyjs.track={module:'SetTest', lineno:1427};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1427;
				$pyjs.track.lineno=1428;
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'a'), $p['getattr'](self, 'b')]), 2, null);
				a = $tupleassign8[0];
				b = $tupleassign8[1];
				$pyjs.track.lineno=1429;
				self['assert_'](((($cmp35=(typeof ($sub27=a)==typeof ($sub28=b) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					$p['op_sub']($sub27,$sub28)))===($cmp36=a)?0:
					(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
						($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
						$p['cmp']($cmp35, $cmp36))) == -1));
				$pyjs.track.lineno=1430;
				self['assert_'](((($cmp37=(typeof ($sub29=b)==typeof ($sub30=a) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30)))===($cmp38=b)?0:
					(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
						($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
						$p['cmp']($cmp37, $cmp38))) == -1));
				$pyjs.track.lineno=1431;
				self['assert_'](((($cmp39=$p['op_bitand2'](a, b))===($cmp40=a)?0:
					(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
						($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
						$p['cmp']($cmp39, $cmp40))) == -1));
				$pyjs.track.lineno=1432;
				self['assert_'](((($cmp41=$p['op_bitand2'](a, b))===($cmp42=b)?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == -1));
				$pyjs.track.lineno=1433;
				self['assert_'](((($cmp43=$p['op_bitor2'](a, b))===($cmp44=a)?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))) == 1));
				$pyjs.track.lineno=1434;
				self['assert_'](((($cmp45=$p['op_bitor2'](a, b))===($cmp46=b)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == 1));
				$pyjs.track.lineno=1435;
				self['assert_'](((($cmp47=$p['op_bitxor2'](a, b))===($cmp48=$p['op_bitor2'](a, b))?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) == -1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_binopsVsSubsets'] = $method;
			$pyjs.track.lineno=1437;
			$method = $pyjs__bind_method2('test_commutativity', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$sub31,$sub33,b,$sub34,$sub32,$bool35;
				$pyjs.track={module:'SetTest', lineno:1437};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1437;
				$pyjs.track.lineno=1438;
				var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'a'), $p['getattr'](self, 'b')]), 2, null);
				a = $tupleassign9[0];
				b = $tupleassign9[1];
				$pyjs.track.lineno=1439;
				self['assertEqual']($p['op_bitand2'](a, b), $p['op_bitand2'](b, a));
				$pyjs.track.lineno=1440;
				self['assertEqual']($p['op_bitor2'](a, b), $p['op_bitor2'](b, a));
				$pyjs.track.lineno=1441;
				self['assertEqual']($p['op_bitxor2'](a, b), $p['op_bitxor2'](b, a));
				$pyjs.track.lineno=1442;
				if ((($bool35=!$p['op_eq'](a, b)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1443;
					self['assertNotEqual']((typeof ($sub31=a)==typeof ($sub32=b) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32)), (typeof ($sub33=b)==typeof ($sub34=a) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34)));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_commutativity'] = $method;
			$pyjs.track.lineno=1445;
			$method = $pyjs__bind_method2('test_summations', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,b,$sub35,$sub37,$sub36,$sub39,$sub38,$sub50,$sub48,$sub49,$sub40,$sub41,$sub42,$sub43,$sub44,$sub45,$sub46,$sub47;
				$pyjs.track={module:'SetTest', lineno:1445};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1445;
				$pyjs.track.lineno=1447;
				var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'a'), $p['getattr'](self, 'b')]), 2, null);
				a = $tupleassign10[0];
				b = $tupleassign10[1];
				$pyjs.track.lineno=1448;
				self['assertEqual']($p['op_bitor']([(typeof ($sub35=a)==typeof ($sub36=b) && (typeof $sub35=='number'||typeof $sub35=='string')?
					$sub35-$sub36:
					$p['op_sub']($sub35,$sub36)), $p['op_bitand2'](a, b), (typeof ($sub37=b)==typeof ($sub38=a) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38))]), $p['op_bitor2'](a, b));
				$pyjs.track.lineno=1449;
				self['assertEqual']($p['op_bitor2']($p['op_bitand2'](a, b), $p['op_bitxor2'](a, b)), $p['op_bitor2'](a, b));
				$pyjs.track.lineno=1450;
				self['assertEqual']($p['op_bitor2'](a, (typeof ($sub39=b)==typeof ($sub40=a) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40))), $p['op_bitor2'](a, b));
				$pyjs.track.lineno=1451;
				self['assertEqual']($p['op_bitor2']((typeof ($sub41=a)==typeof ($sub42=b) && (typeof $sub41=='number'||typeof $sub41=='string')?
					$sub41-$sub42:
					$p['op_sub']($sub41,$sub42)), b), $p['op_bitor2'](a, b));
				$pyjs.track.lineno=1452;
				self['assertEqual']($p['op_bitor2']((typeof ($sub43=a)==typeof ($sub44=b) && (typeof $sub43=='number'||typeof $sub43=='string')?
					$sub43-$sub44:
					$p['op_sub']($sub43,$sub44)), $p['op_bitand2'](a, b)), a);
				$pyjs.track.lineno=1453;
				self['assertEqual']($p['op_bitor2']((typeof ($sub45=b)==typeof ($sub46=a) && (typeof $sub45=='number'||typeof $sub45=='string')?
					$sub45-$sub46:
					$p['op_sub']($sub45,$sub46)), $p['op_bitand2'](a, b)), b);
				$pyjs.track.lineno=1454;
				self['assertEqual']($p['op_bitor2']((typeof ($sub47=a)==typeof ($sub48=b) && (typeof $sub47=='number'||typeof $sub47=='string')?
					$sub47-$sub48:
					$p['op_sub']($sub47,$sub48)), (typeof ($sub49=b)==typeof ($sub50=a) && (typeof $sub49=='number'||typeof $sub49=='string')?
					$sub49-$sub50:
					$p['op_sub']($sub49,$sub50))), $p['op_bitxor2'](a, b));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_summations'] = $method;
			$pyjs.track.lineno=1456;
			$method = $pyjs__bind_method2('test_exclusion', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '52ea865ebce622b63bd4b309742483c6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,b,$sub53,$sub52,$sub51,zero,$sub54;
				$pyjs.track={module:'SetTest', lineno:1456};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1456;
				$pyjs.track.lineno=1458;
				var $tupleassign11 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'a'), $p['getattr'](self, 'b'), $p['set']()]), 3, null);
				a = $tupleassign11[0];
				b = $tupleassign11[1];
				zero = $tupleassign11[2];
				$pyjs.track.lineno=1459;
				self['assertEqual']($p['op_bitand2']((typeof ($sub51=a)==typeof ($sub52=b) && (typeof $sub51=='number'||typeof $sub51=='string')?
					$sub51-$sub52:
					$p['op_sub']($sub51,$sub52)), b), zero);
				$pyjs.track.lineno=1460;
				self['assertEqual']($p['op_bitand2']((typeof ($sub53=b)==typeof ($sub54=a) && (typeof $sub53=='number'||typeof $sub53=='string')?
					$sub53-$sub54:
					$p['op_sub']($sub53,$sub54)), a), zero);
				$pyjs.track.lineno=1461;
				self['assertEqual']($p['op_bitand2']($p['op_bitand2'](a, b), $p['op_bitxor2'](a, b)), zero);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_exclusion'] = $method;
			$pyjs.track.lineno=1422;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestIdentities', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1465;
		$m['R'] = function(seqn) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter48_nextval,$iter47_idx,$iter48_iter,i,$pyjs__trackstack_size_1,$iter47_type,$iter48_array,$iter48_idx,$iter47_nextval,$iter47_array,$iter48_type,$iter47_iter;
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			$pyjs.track.module='SetTest';
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
			
				$pyjs.track={module:'SetTest',lineno:1465};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1465;
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$pyjs.track.lineno=1467;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter48_iter = seqn;
					if (typeof ($iter48_array = $iter48_iter.__array) != 'undefined') {
						$iter48_type = 0;
					} else {
						$iter48_iter = $iter48_iter.__iter__();
						$iter48_type = typeof ($iter48_array = $iter48_iter.__array) != 'undefined'? 0 : (typeof $iter48_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter48_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter48_nextval=($iter48_type?($iter48_type > 0?$iter48_iter.next(true,false):$p['wrapped_next']($iter48_iter)):$iter48_array[$iter48_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							i = $iter48_nextval;
							$pyjs.track.lineno=1468;
							$pyjs.track.lineno=1468;
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
					$pyjs.track.module='SetTest';
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
		$m['R'].__name__ = 'R';

		$m['R'].__bind_type__ = 0;
		$m['R'].__args__ = [null,null,['seqn']];
		$pyjs.track.lineno=1471;
		$m['G'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'bef588f8bb787a27aefa6e25b85d6c15';
			$pyjs.track.lineno=1474;
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bef588f8bb787a27aefa6e25b85d6c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1474};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1474;
				$pyjs.track.lineno=1475;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1477;
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
					if (self.prototype.__md5__ !== 'bef588f8bb787a27aefa6e25b85d6c15') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $23,$24;
				$pyjs.track={module:'SetTest', lineno:1477};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1477;
				$pyjs.track.lineno=1478;
				$pyjs.track.lineno=1478;
				var $pyjs__ret = (typeof ($23=$p['getattr'](self, 'seqn')).__array != 'undefined'?
					((typeof $23.__array[$24=i]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__(i));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['i']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs.track.lineno=1471;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('G', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1481;
		$m['I'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'f5bf13760967e00140dc757f7fcb0785';
			$pyjs.track.lineno=1484;
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f5bf13760967e00140dc757f7fcb0785') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1484};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1484;
				$pyjs.track.lineno=1485;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				$pyjs.track.lineno=1486;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1488;
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
					if (self.prototype.__md5__ !== 'f5bf13760967e00140dc757f7fcb0785') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1488};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1488;
				$pyjs.track.lineno=1489;
				$pyjs.track.lineno=1489;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=1491;
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
					if (self.prototype.__md5__ !== 'f5bf13760967e00140dc757f7fcb0785') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len25,$add36,$25,$26,$cmp49,$bool36,v,$cmp50,$add35;
				$pyjs.track={module:'SetTest', lineno:1491};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1491;
				$pyjs.track.lineno=1492;
				if ((($bool36=((((($cmp49=$p['getattr'](self, 'i'))===($cmp50=(($len25=$p['getattr'](self, 'seqn')) === null?$constant_int_0:
					(typeof $len25.__array != 'undefined' ? new $p['int']($len25.__array.length):
						(typeof $len25.__len__ == 'function'?$len25.__len__():
							(typeof $len25.length != 'undefined'? new $p['int']($len25.length):
								$p['len']($len25))))))?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$p['cmp']($cmp49, $cmp50))))|1) == 1)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36.__nonzero__=='function'?
								$bool36.__nonzero__() :
								(typeof $bool36.__len__=='function'?
									($bool36.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1492;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['StopIteration']);
				}
				$pyjs.track.lineno=1493;
				v = (typeof ($25=$p['getattr'](self, 'seqn')).__array != 'undefined'?
					((typeof $25.__array[$26=$p['getattr'](self, 'i')]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($p['getattr'](self, 'i')));
				$pyjs.track.lineno=1494;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', (typeof ($add35=$p['getattr'](self, 'i'))==typeof ($add36=$constant_int_1) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36))) : $p['setattr'](self, 'i', (typeof ($add35=$p['getattr'](self, 'i'))==typeof ($add36=$constant_int_1) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36))); 
				$pyjs.track.lineno=1495;
				$pyjs.track.lineno=1495;
				var $pyjs__ret = v;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=1481;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('I', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1498;
		$m['Ig'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '5a2db18ad5f42ab7fee73cca84b12727';
			$pyjs.track.lineno=1501;
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5a2db18ad5f42ab7fee73cca84b12727') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1501};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1501;
				$pyjs.track.lineno=1502;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				$pyjs.track.lineno=1503;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1505;
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
					if (self.prototype.__md5__ !== '5a2db18ad5f42ab7fee73cca84b12727') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter50_idx,val,$iter49_type,$iter50_type,$iter50_nextval,$iter49_array,$iter49_iter,$pyjs__trackstack_size_1,$iter50_array,$iter49_idx,$iter49_nextval,$iter50_iter;
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
				$pyjs.track.module='SetTest';
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
				$pyjs.track.module='SetTest';
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
				$pyjs.track.module='SetTest';
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
				$pyjs.track.module='SetTest';
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
				
					$pyjs.track={module:'SetTest',lineno:1505};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='SetTest';
					$pyjs.track.lineno=1505;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs.track.lineno=1506;
						$pyjs__trackstack_size_1=$pyjs.trackstack.length;
						$iter50_iter = $p['getattr'](self, 'seqn');
						if (typeof ($iter50_array = $iter50_iter.__array) != 'undefined') {
							$iter50_type = 0;
						} else {
							$iter50_iter = $iter50_iter.__iter__();
							$iter50_type = typeof ($iter50_array = $iter50_iter.__array) != 'undefined'? 0 : (typeof $iter50_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter50_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter50_nextval=($iter50_type?($iter50_type > 0?$iter50_iter.next(true,false):$p['wrapped_next']($iter50_iter)):$iter50_array[$iter50_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
								val = $iter50_nextval;
								$pyjs.track.lineno=1507;
								$pyjs.track.lineno=1507;
								$yield_value = val;
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
						$pyjs.track.module='SetTest';
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
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=1498;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Ig', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1510;
		$m['X'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '40612223deb4f1d0598104ba70ce55e0';
			$pyjs.track.lineno=1513;
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '40612223deb4f1d0598104ba70ce55e0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1513};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1513;
				$pyjs.track.lineno=1514;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				$pyjs.track.lineno=1515;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1517;
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
					if (self.prototype.__md5__ !== '40612223deb4f1d0598104ba70ce55e0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $28,$add38,$len26,$add37,$27,$bool37,v,$cmp51,$cmp52;
				$pyjs.track={module:'SetTest', lineno:1517};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1517;
				$pyjs.track.lineno=1518;
				if ((($bool37=((((($cmp51=$p['getattr'](self, 'i'))===($cmp52=(($len26=$p['getattr'](self, 'seqn')) === null?$constant_int_0:
					(typeof $len26.__array != 'undefined' ? new $p['int']($len26.__array.length):
						(typeof $len26.__len__ == 'function'?$len26.__len__():
							(typeof $len26.length != 'undefined'? new $p['int']($len26.length):
								$p['len']($len26))))))?0:
					(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
						($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
						$p['cmp']($cmp51, $cmp52))))|1) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37.__nonzero__=='function'?
								$bool37.__nonzero__() :
								(typeof $bool37.__len__=='function'?
									($bool37.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=1518;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['StopIteration']);
				}
				$pyjs.track.lineno=1519;
				v = (typeof ($27=$p['getattr'](self, 'seqn')).__array != 'undefined'?
					((typeof $27.__array[$28=$p['getattr'](self, 'i')]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__($p['getattr'](self, 'i')));
				$pyjs.track.lineno=1520;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', (typeof ($add37=$p['getattr'](self, 'i'))==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38))) : $p['setattr'](self, 'i', (typeof ($add37=$p['getattr'](self, 'i'))==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38))); 
				$pyjs.track.lineno=1521;
				$pyjs.track.lineno=1521;
				var $pyjs__ret = v;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=1510;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('X', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1524;
		$m['N'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'dbb7a531040faf3ca4a4bb15e7e83183';
			$pyjs.track.lineno=1527;
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dbb7a531040faf3ca4a4bb15e7e83183') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1527};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1527;
				$pyjs.track.lineno=1528;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				$pyjs.track.lineno=1529;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1531;
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
					if (self.prototype.__md5__ !== 'dbb7a531040faf3ca4a4bb15e7e83183') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1531};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1531;
				$pyjs.track.lineno=1532;
				$pyjs.track.lineno=1532;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=1524;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('N', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1535;
		$m['E'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '97ea1a7e55f5a4c812a5a756968d16ff';
			$pyjs.track.lineno=1538;
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '97ea1a7e55f5a4c812a5a756968d16ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1538};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1538;
				$pyjs.track.lineno=1539;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('seqn', seqn) : $p['setattr'](self, 'seqn', seqn); 
				$pyjs.track.lineno=1540;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('i', $constant_int_0) : $p['setattr'](self, 'i', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1542;
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
					if (self.prototype.__md5__ !== '97ea1a7e55f5a4c812a5a756968d16ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1542};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1542;
				$pyjs.track.lineno=1543;
				$pyjs.track.lineno=1543;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=1545;
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
					if (self.prototype.__md5__ !== '97ea1a7e55f5a4c812a5a756968d16ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $floordiv2,$floordiv1,t;
				$pyjs.track={module:'SetTest', lineno:1545};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1545;
				$pyjs.track.lineno=1546;
				t = (typeof ($floordiv1=$constant_int_3)==typeof ($floordiv2=$constant_int_0) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math.floor($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=1535;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('E', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1549;
		$m['S'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = '866dad0382cf1054b1fbb202d09010b0';
			$pyjs.track.lineno=1552;
			$method = $pyjs__bind_method2('__init__', function(seqn) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					seqn = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '866dad0382cf1054b1fbb202d09010b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1552};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1552;
				$pyjs.track.lineno=1553;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['seqn']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1555;
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
					if (self.prototype.__md5__ !== '866dad0382cf1054b1fbb202d09010b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1555};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1555;
				$pyjs.track.lineno=1556;
				$pyjs.track.lineno=1556;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=1558;
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
					if (self.prototype.__md5__ !== '866dad0382cf1054b1fbb202d09010b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'SetTest', lineno:1558};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1558;
				$pyjs.track.lineno=1559;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['StopIteration']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=1549;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('S', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1562;
		$m['TestVariousIteratorArgs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'SetTest';
			$cls_definition.__md5__ = 'e226274f4d066c5a8df8920f6adb6243';
			$pyjs.track.lineno=1563;
			$method = $pyjs__bind_method2('test_constructor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e226274f4d066c5a8df8920f6adb6243') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter53_idx,cons,$iter52_nextval,$iter52_array,$iter51_array,$iter52_iter,$iter51_iter,$iter51_nextval,$iter53_nextval,$iter53_type,$iter53_array,$iter52_type,$iter51_idx,$iter52_idx,g,$iter53_iter,s,$pyjs__trackstack_size_2,$pyjs__trackstack_size_3,$pyjs__trackstack_size_1,$iter51_type;
				$pyjs.track={module:'SetTest', lineno:1563};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1563;
				$pyjs.track.lineno=1564;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter51_iter = $p['tuple']([$p['set'], $p['frozenset']]);
				if (typeof ($iter51_array = $iter51_iter.__array) != 'undefined') {
					$iter51_type = 0;
				} else {
					$iter51_iter = $iter51_iter.__iter__();
					$iter51_type = typeof ($iter51_array = $iter51_iter.__array) != 'undefined'? 0 : (typeof $iter51_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter51_idx = 0;
				while (typeof ($iter51_nextval=($iter51_type?($iter51_type > 0?$iter51_iter.next(true,false):$p['wrapped_next']($iter51_iter)):$iter51_array[$iter51_idx++])) != 'undefined') {
					cons = $iter51_nextval;
					$pyjs.track.lineno=1565;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter52_iter = $p['tuple'](['123', '', $p['range']($constant_int_1000), $p['tuple'](['do', 1.2]), $p['xrange']($constant_int_2000, $constant_int_2200, $constant_int_5)]);
					if (typeof ($iter52_array = $iter52_iter.__array) != 'undefined') {
						$iter52_type = 0;
					} else {
						$iter52_iter = $iter52_iter.__iter__();
						$iter52_type = typeof ($iter52_array = $iter52_iter.__array) != 'undefined'? 0 : (typeof $iter52_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter52_idx = 0;
					while (typeof ($iter52_nextval=($iter52_type?($iter52_type > 0?$iter52_iter.next(true,false):$p['wrapped_next']($iter52_iter)):$iter52_array[$iter52_idx++])) != 'undefined') {
						s = $iter52_nextval;
						$pyjs.track.lineno=1567;
						$pyjs__trackstack_size_3=$pyjs.trackstack.length;
						$iter53_iter = $p['tuple']([$m['G'], $m['I'], $m['Ig'], $m['S'], $m['R']]);
						if (typeof ($iter53_array = $iter53_iter.__array) != 'undefined') {
							$iter53_type = 0;
						} else {
							$iter53_iter = $iter53_iter.__iter__();
							$iter53_type = typeof ($iter53_array = $iter53_iter.__array) != 'undefined'? 0 : (typeof $iter53_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter53_idx = 0;
						while (typeof ($iter53_nextval=($iter53_type?($iter53_type > 0?$iter53_iter.next(true,false):$p['wrapped_next']($iter53_iter)):$iter53_array[$iter53_idx++])) != 'undefined') {
							g = $iter53_nextval;
							$pyjs.track.lineno=1568;
							self['assertEqual']($p['sorted'](cons(g(s))), $p['sorted'](g(s)));
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_3) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_3);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						$pyjs.track.lineno=1569;
						self['assertRaises']($p['TypeError'], cons, $m['X'](s));
						$pyjs.track.lineno=1570;
						self['assertRaises']($p['TypeError'], cons, $m['N'](s));
						$pyjs.track.lineno=1571;
						self['assertRaises']($p['ZeroDivisionError'], cons, $m['E'](s));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_constructor'] = $method;
			$pyjs.track.lineno=1573;
			$method = $pyjs__bind_method2('test_inline_methods', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e226274f4d066c5a8df8920f6adb6243') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter56_array,meth,$iter55_nextval,$iter55_iter,$iter54_idx,expected,$iter54_nextval,$iter54_type,$iter54_iter,$iter56_idx,$iter55_array,$iter56_type,$iter56_nextval,$iter56_iter,data,$iter55_idx,actual,$iter54_array,g,s,$iter55_type,$pyjs__trackstack_size_2,$pyjs__trackstack_size_3,$pyjs__trackstack_size_1,$bool38;
				$pyjs.track={module:'SetTest', lineno:1573};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1573;
				$pyjs.track.lineno=1574;
				s = $p['set']('november');
				$pyjs.track.lineno=1575;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter54_iter = $p['tuple'](['123', '', $p['range']($constant_int_1000), $p['tuple'](['do', 1.2]), $p['xrange']($constant_int_2000, $constant_int_2200, $constant_int_5), 'december']);
				if (typeof ($iter54_array = $iter54_iter.__array) != 'undefined') {
					$iter54_type = 0;
				} else {
					$iter54_iter = $iter54_iter.__iter__();
					$iter54_type = typeof ($iter54_array = $iter54_iter.__array) != 'undefined'? 0 : (typeof $iter54_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter54_idx = 0;
				while (typeof ($iter54_nextval=($iter54_type?($iter54_type > 0?$iter54_iter.next(true,false):$p['wrapped_next']($iter54_iter)):$iter54_array[$iter54_idx++])) != 'undefined') {
					data = $iter54_nextval;
					$pyjs.track.lineno=1577;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter55_iter = $p['tuple']([$p['getattr'](s, 'union'), $p['getattr'](s, 'intersection'), $p['getattr'](s, 'difference'), $p['getattr'](s, 'symmetric_difference'), $p['getattr'](s, 'isdisjoint')]);
					if (typeof ($iter55_array = $iter55_iter.__array) != 'undefined') {
						$iter55_type = 0;
					} else {
						$iter55_iter = $iter55_iter.__iter__();
						$iter55_type = typeof ($iter55_array = $iter55_iter.__array) != 'undefined'? 0 : (typeof $iter55_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter55_idx = 0;
					while (typeof ($iter55_nextval=($iter55_type?($iter55_type > 0?$iter55_iter.next(true,false):$p['wrapped_next']($iter55_iter)):$iter55_array[$iter55_idx++])) != 'undefined') {
						meth = $iter55_nextval;
						$pyjs.track.lineno=1580;
						$pyjs__trackstack_size_3=$pyjs.trackstack.length;
						$iter56_iter = $p['tuple']([$m['G'], $m['I'], $m['Ig'], $m['R']]);
						if (typeof ($iter56_array = $iter56_iter.__array) != 'undefined') {
							$iter56_type = 0;
						} else {
							$iter56_iter = $iter56_iter.__iter__();
							$iter56_type = typeof ($iter56_array = $iter56_iter.__array) != 'undefined'? 0 : (typeof $iter56_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter56_idx = 0;
						while (typeof ($iter56_nextval=($iter56_type?($iter56_type > 0?$iter56_iter.next(true,false):$p['wrapped_next']($iter56_iter)):$iter56_array[$iter56_idx++])) != 'undefined') {
							g = $iter56_nextval;
							$pyjs.track.lineno=1581;
							expected = meth(data);
							$pyjs.track.lineno=1582;
							actual = meth($m['G'](data));
							$pyjs.track.lineno=1583;
							if ((($bool38=$p['isinstance'](expected, $p['bool'])) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
									false :
									(typeof $bool38=='object'?
										(typeof $bool38.__nonzero__=='function'?
											$bool38.__nonzero__() :
											(typeof $bool38.__len__=='function'?
												($bool38.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								$pyjs.track.lineno=1584;
								self['assertEqual'](actual, expected);
							}
							else {
								$pyjs.track.lineno=1586;
								self['assertEqual']($p['sorted'](actual), $p['sorted'](expected));
							}
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_3) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_3);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						$pyjs.track.lineno=1587;
						self['assertRaises']($p['TypeError'], meth, $m['X'](s));
						$pyjs.track.lineno=1588;
						self['assertRaises']($p['TypeError'], meth, $m['N'](s));
						$pyjs.track.lineno=1589;
						self['assertRaises']($p['ZeroDivisionError'], meth, $m['E'](s));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_inline_methods'] = $method;
			$pyjs.track.lineno=1591;
			$method = $pyjs__bind_method2('test_inplace_methods', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e226274f4d066c5a8df8920f6adb6243') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs__trackstack_size_1,$iter57_idx,$iter59_iter,$iter57_iter,t,$iter57_array,$iter58_array,$iter58_type,$iter59_array,$iter58_iter,data,$iter58_idx,$iter58_nextval,methname,$iter57_type,g,$iter59_idx,s,$pyjs__trackstack_size_2,$pyjs__trackstack_size_3,$iter59_nextval,$iter59_type,$iter57_nextval;
				$pyjs.track={module:'SetTest', lineno:1591};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='SetTest';
				$pyjs.track.lineno=1591;
				$pyjs.track.lineno=1592;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter57_iter = $p['tuple'](['123', '', $p['range']($constant_int_1000), $p['tuple'](['do', 1.2]), $p['xrange']($constant_int_2000, $constant_int_2200, $constant_int_5), 'december']);
				if (typeof ($iter57_array = $iter57_iter.__array) != 'undefined') {
					$iter57_type = 0;
				} else {
					$iter57_iter = $iter57_iter.__iter__();
					$iter57_type = typeof ($iter57_array = $iter57_iter.__array) != 'undefined'? 0 : (typeof $iter57_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter57_idx = 0;
				while (typeof ($iter57_nextval=($iter57_type?($iter57_type > 0?$iter57_iter.next(true,false):$p['wrapped_next']($iter57_iter)):$iter57_array[$iter57_idx++])) != 'undefined') {
					data = $iter57_nextval;
					$pyjs.track.lineno=1594;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter58_iter = $p['tuple'](['update', 'intersection_update', 'difference_update', 'symmetric_difference_update']);
					if (typeof ($iter58_array = $iter58_iter.__array) != 'undefined') {
						$iter58_type = 0;
					} else {
						$iter58_iter = $iter58_iter.__iter__();
						$iter58_type = typeof ($iter58_array = $iter58_iter.__array) != 'undefined'? 0 : (typeof $iter58_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter58_idx = 0;
					while (typeof ($iter58_nextval=($iter58_type?($iter58_type > 0?$iter58_iter.next(true,false):$p['wrapped_next']($iter58_iter)):$iter58_array[$iter58_idx++])) != 'undefined') {
						methname = $iter58_nextval;
						$pyjs.track.lineno=1597;
						$pyjs__trackstack_size_3=$pyjs.trackstack.length;
						$iter59_iter = $p['tuple']([$m['G'], $m['I'], $m['Ig'], $m['S'], $m['R']]);
						if (typeof ($iter59_array = $iter59_iter.__array) != 'undefined') {
							$iter59_type = 0;
						} else {
							$iter59_iter = $iter59_iter.__iter__();
							$iter59_type = typeof ($iter59_array = $iter59_iter.__array) != 'undefined'? 0 : (typeof $iter59_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter59_idx = 0;
						while (typeof ($iter59_nextval=($iter59_type?($iter59_type > 0?$iter59_iter.next(true,false):$p['wrapped_next']($iter59_iter)):$iter59_array[$iter59_idx++])) != 'undefined') {
							g = $iter59_nextval;
							$pyjs.track.lineno=1598;
							s = $p['set']('january');
							$pyjs.track.lineno=1599;
							t = s['copy']();
							$pyjs.track.lineno=1600;
							$p['getattr'](s, methname)($p['list'](g(data)));
							$pyjs.track.lineno=1601;
							$p['getattr'](t, methname)(g(data));
							$pyjs.track.lineno=1602;
							self['assertEqual']($p['sorted'](s), $p['sorted'](t));
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_3) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_3);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='SetTest';
						$pyjs.track.lineno=1604;
						self['assertRaises']($p['TypeError'], $p['getattr']($p['set']('january'), methname), $m['X'](data));
						$pyjs.track.lineno=1606;
						self['assertRaises']($p['TypeError'], $p['getattr']($p['set']('january'), methname), $m['N'](data));
						$pyjs.track.lineno=1608;
						self['assertRaises']($p['ZeroDivisionError'], $p['getattr']($p['set']('january'), methname), $m['E'](data));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='SetTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='SetTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_inplace_methods'] = $method;
			$pyjs.track.lineno=1562;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestVariousIteratorArgs', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end SetTest */


/* end module: SetTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'random.randrange', 'random', 'random.shuffle']
*/
