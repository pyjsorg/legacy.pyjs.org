/* start module: ListTest */
$pyjs.loaded_modules['ListTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ListTest'].__was_initialized__) return $pyjs.loaded_modules['ListTest'];
	var $m = $pyjs.loaded_modules["ListTest"];
	$m.__repr__ = function() { return "<module: ListTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ListTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'ListTest.py, line 1:\n    from UnitTest import UnitTest, IN_JS';
		$m.__track_lines__[2] = 'ListTest.py, line 2:\n    import sys';
		$m.__track_lines__[4] = 'ListTest.py, line 4:\n    class LetterNode(list):';
		$m.__track_lines__[6] = 'ListTest.py, line 6:\n    def __init__(self, letter, childnodes=None):';
		$m.__track_lines__[7] = 'ListTest.py, line 7:\n    self.letter = letter';
		$m.__track_lines__[8] = 'ListTest.py, line 8:\n    if childnodes is None:';
		$m.__track_lines__[9] = 'ListTest.py, line 9:\n    childnodes = []';
		$m.__track_lines__[10] = 'ListTest.py, line 10:\n    list.__init__(self, childnodes)';
		$m.__track_lines__[12] = 'ListTest.py, line 12:\n    def __cmp__(self, l):';
		$m.__track_lines__[13] = 'ListTest.py, line 13:\n    if isinstance(l, LetterNode):';
		$m.__track_lines__[14] = 'ListTest.py, line 14:\n    return cmp(self.letter, l.letter)';
		$m.__track_lines__[15] = 'ListTest.py, line 15:\n    return cmp(self.letter, l)';
		$m.__track_lines__[17] = 'ListTest.py, line 17:\n    words = "golf fred frederick fried".split(" ")';
		$m.__track_lines__[19] = 'ListTest.py, line 19:\n    def get_test_letters():';
		$m.__track_lines__[20] = 'ListTest.py, line 20:\n    res = []';
		$m.__track_lines__[21] = 'ListTest.py, line 21:\n    for w in words:';
		$m.__track_lines__[22] = 'ListTest.py, line 22:\n    p = res';
		$m.__track_lines__[23] = 'ListTest.py, line 23:\n    for l in w:';
		$m.__track_lines__[24] = 'ListTest.py, line 24:\n    try:';
		$m.__track_lines__[25] = 'ListTest.py, line 25:\n    idx = p.index(l)';
		$m.__track_lines__[26] = 'ListTest.py, line 26:\n    p = p[idx]';
		$m.__track_lines__[28] = 'ListTest.py, line 28:\n    ln = LetterNode(l)';
		$m.__track_lines__[29] = 'ListTest.py, line 29:\n    p.append(ln)';
		$m.__track_lines__[30] = 'ListTest.py, line 30:\n    p = ln';
		$m.__track_lines__[31] = 'ListTest.py, line 31:\n    p.append(LetterNode("."))';
		$m.__track_lines__[33] = 'ListTest.py, line 33:\n    return res';
		$m.__track_lines__[35] = 'ListTest.py, line 35:\n    class ListTest(UnitTest):';
		$m.__track_lines__[37] = 'ListTest.py, line 37:\n    def testSliceGet(self):';
		$m.__track_lines__[38] = 'ListTest.py, line 38:\n    value = [0, 1, 2, 3, 4]';
		$m.__track_lines__[40] = 'ListTest.py, line 40:\n    self.assertTrue(value[-1] is 4)';
		$m.__track_lines__[41] = 'ListTest.py, line 41:\n    self.assertTrue(value[1] is 1)';
		$m.__track_lines__[42] = 'ListTest.py, line 42:\n    self.assertTrue(value[4] is 4)';
		$m.__track_lines__[43] = 'ListTest.py, line 43:\n    self.assertTrue(value[-3] is 2)';
		$m.__track_lines__[45] = 'ListTest.py, line 45:\n    l = [1, 2]';
		$m.__track_lines__[46] = 'ListTest.py, line 46:\n    self.assertEqual(l[True], 2)';
		$m.__track_lines__[47] = 'ListTest.py, line 47:\n    self.assertEqual(l[False], 1)';
		$m.__track_lines__[49] = 'ListTest.py, line 49:\n    def testSliceRange(self):';
		$m.__track_lines__[50] = 'ListTest.py, line 50:\n    value = [0, 1, 2, 3, 4]';
		$m.__track_lines__[52] = 'ListTest.py, line 52:\n    self.assertTrue(value[1:3][0] is 1)';
		$m.__track_lines__[53] = 'ListTest.py, line 53:\n    self.assertTrue(value[1:3][1] is 2)';
		$m.__track_lines__[54] = 'ListTest.py, line 54:\n    self.assertTrue(len(value[1:2]) is 1)';
		$m.__track_lines__[55] = 'ListTest.py, line 55:\n    self.assertTrue(len(value[1:3]) is 2)';
		$m.__track_lines__[57] = 'ListTest.py, line 57:\n    self.assertTrue(value[:2][0] is 0)';
		$m.__track_lines__[58] = 'ListTest.py, line 58:\n    self.assertTrue(value[:2][1] is 1)';
		$m.__track_lines__[59] = 'ListTest.py, line 59:\n    self.assertTrue(len(value[:2]) is 2)';
		$m.__track_lines__[60] = 'ListTest.py, line 60:\n    self.assertTrue(len(value[:1]) is 1)';
		$m.__track_lines__[62] = 'ListTest.py, line 62:\n    self.assertTrue(value[:-1][0] is 0)';
		$m.__track_lines__[63] = 'ListTest.py, line 63:\n    self.assertTrue(value[:-1][3] is 3)';
		$m.__track_lines__[64] = 'ListTest.py, line 64:\n    self.assertTrue(len(value[:-1]) is 4)';
		$m.__track_lines__[66] = 'ListTest.py, line 66:\n    self.assertTrue(value[:][3] is 3)';
		$m.__track_lines__[67] = 'ListTest.py, line 67:\n    self.assertTrue(len(value[:]) is 5)';
		$m.__track_lines__[69] = 'ListTest.py, line 69:\n    self.assertTrue(value[0:][3] is 3)';
		$m.__track_lines__[70] = 'ListTest.py, line 70:\n    self.assertTrue(value[1:][0] is 1)';
		$m.__track_lines__[71] = 'ListTest.py, line 71:\n    self.assertTrue(len(value[1:]) is 4)';
		$m.__track_lines__[73] = 'ListTest.py, line 73:\n    self.assertTrue(value[-1:][0] is 4)';
		$m.__track_lines__[74] = 'ListTest.py, line 74:\n    self.assertTrue(len(value[-1:3]) is 0)';
		$m.__track_lines__[76] = 'ListTest.py, line 76:\n    def testListAdd(self):';
		$m.__track_lines__[78] = 'ListTest.py, line 78:\n    l1 = [1, 2]';
		$m.__track_lines__[79] = 'ListTest.py, line 79:\n    l2 = [3, 4]';
		$m.__track_lines__[81] = 'ListTest.py, line 81:\n    added = l1 + l2';
		$m.__track_lines__[83] = 'ListTest.py, line 83:\n    self.assertTrue( added == [1,2,3,4],';
		$m.__track_lines__[86] = 'ListTest.py, line 86:\n    l1 += l2';
		$m.__track_lines__[87] = 'ListTest.py, line 87:\n    self.assertTrue(l1 == [1,2,3,4], "l1 += l2: result %s" % repr(l1))';
		$m.__track_lines__[89] = 'ListTest.py, line 89:\n    def testSliceSet(self):';
		$m.__track_lines__[90] = 'ListTest.py, line 90:\n    value = [1,2,3]';
		$m.__track_lines__[91] = 'ListTest.py, line 91:\n    value[1:2] = [11,12]';
		$m.__track_lines__[92] = 'ListTest.py, line 92:\n    self.assertTrue(value == [1, 11, 12, 3], "%s == [1, 11, 12, 3]" % value)';
		$m.__track_lines__[93] = 'ListTest.py, line 93:\n    value[3:] = [21,22,23]';
		$m.__track_lines__[94] = 'ListTest.py, line 94:\n    self.assertTrue(value == [1, 11, 12, 21, 22, 23], "%s == [1, 11, 12, 21, 22, 23]" % value)';
		$m.__track_lines__[98] = 'ListTest.py, line 98:\n    def testMultipleSliceSet(self):';
		$m.__track_lines__[100] = 'ListTest.py, line 100:\n    l1 = [1, 2, 3]';
		$m.__track_lines__[101] = 'ListTest.py, line 101:\n    l2 = [4, 5, 6]';
		$m.__track_lines__[102] = 'ListTest.py, line 102:\n    l1[:], l2[:] = [7, 8, 9], [10, 11, 12]';
		$m.__track_lines__[103] = 'ListTest.py, line 103:\n    self.assertTrue(l1 == [7, 8, 9], "%s == [7, 8, 9]" % l1)';
		$m.__track_lines__[104] = 'ListTest.py, line 104:\n    self.assertTrue(l2 == [10, 11, 12], "%s == [10, 11, 12]" % l2)';
		$m.__track_lines__[106] = 'ListTest.py, line 106:\n    def testDelete(self):';
		$m.__track_lines__[107] = 'ListTest.py, line 107:\n    self.assertTrue(delete_value == [1, 2, 5], "%s == [1, 2, 5]" % (delete_value,))';
		$m.__track_lines__[109] = 'ListTest.py, line 109:\n    value = [0, 1, 2, 3, 4]';
		$m.__track_lines__[110] = 'ListTest.py, line 110:\n    del value[4]';
		$m.__track_lines__[111] = 'ListTest.py, line 111:\n    self.assertTrue(len(value) is 4)';
		$m.__track_lines__[112] = 'ListTest.py, line 112:\n    self.assertTrue(value[3] is 3)';
		$m.__track_lines__[114] = 'ListTest.py, line 114:\n    del value[-1]';
		$m.__track_lines__[115] = 'ListTest.py, line 115:\n    self.assertTrue(len(value) is 3)';
		$m.__track_lines__[116] = 'ListTest.py, line 116:\n    self.assertTrue(value[2] is 2)';
		$m.__track_lines__[118] = 'ListTest.py, line 118:\n    try:';
		$m.__track_lines__[119] = 'ListTest.py, line 119:\n    del value[3]';
		$m.__track_lines__[120] = 'ListTest.py, line 120:\n    self.fail("Failed to raise error on \'del value[3]\'")';
		$m.__track_lines__[122] = 'ListTest.py, line 122:\n    self.assertEqual(e[0], "list assignment index out of range")';
		$m.__track_lines__[124] = 'ListTest.py, line 124:\n    try:';
		$m.__track_lines__[125] = 'ListTest.py, line 125:\n    del value[-4]';
		$m.__track_lines__[126] = 'ListTest.py, line 126:\n    self.fail("Failed to raise error on \'del value[-4]\'")';
		$m.__track_lines__[128] = 'ListTest.py, line 128:\n    self.assertEqual(e[0], "list assignment index out of range")';
		$m.__track_lines__[130] = 'ListTest.py, line 130:\n    value = [0, 1, 2, 3, 4]';
		$m.__track_lines__[131] = 'ListTest.py, line 131:\n    del value[1:3]';
		$m.__track_lines__[132] = 'ListTest.py, line 132:\n    self.assertTrue(value == [0, 3, 4], "%s == [0, 3, 4]" % value)';
		$m.__track_lines__[133] = 'ListTest.py, line 133:\n    del value[:]';
		$m.__track_lines__[134] = 'ListTest.py, line 134:\n    self.assertTrue(value == [], "%s = []" % value)';
		$m.__track_lines__[136] = 'ListTest.py, line 136:\n    def testSortNoKwArgs(self):';
		$m.__track_lines__[137] = "ListTest.py, line 137:\n    l1 = ['c', 'd', 'a', 'b']";
		$m.__track_lines__[138] = 'ListTest.py, line 138:\n    l1.sort()';
		$m.__track_lines__[139] = "ListTest.py, line 139:\n    self.assertTrue(l1[0] == 'a')";
		$m.__track_lines__[140] = "ListTest.py, line 140:\n    self.assertTrue(l1[1] == 'b')";
		$m.__track_lines__[141] = "ListTest.py, line 141:\n    self.assertTrue(l1[2] == 'c')";
		$m.__track_lines__[142] = "ListTest.py, line 142:\n    self.assertTrue(l1[3] == 'd')";
		$m.__track_lines__[144] = "ListTest.py, line 144:\n    l2 = ['C', 'd', 'A', 'b']";
		$m.__track_lines__[145] = 'ListTest.py, line 145:\n    def toLower(x):';
		$m.__track_lines__[146] = 'ListTest.py, line 146:\n    return x.lower()';
		$m.__track_lines__[147] = 'ListTest.py, line 147:\n    l2.sort(None, toLower)';
		$m.__track_lines__[148] = "ListTest.py, line 148:\n    self.assertTrue(l2[0] == 'A')";
		$m.__track_lines__[149] = "ListTest.py, line 149:\n    self.assertTrue(l2[1] == 'b')";
		$m.__track_lines__[150] = "ListTest.py, line 150:\n    self.assertTrue(l2[2] == 'C')";
		$m.__track_lines__[151] = "ListTest.py, line 151:\n    self.assertTrue(l2[3] == 'd')";
		$m.__track_lines__[153] = "ListTest.py, line 153:\n    l3 = ['C', 'd', 'A', 'b']";
		$m.__track_lines__[154] = 'ListTest.py, line 154:\n    l3.sort(None, toLower, True)';
		$m.__track_lines__[155] = "ListTest.py, line 155:\n    self.assertTrue(l3[0] == 'd')";
		$m.__track_lines__[156] = "ListTest.py, line 156:\n    self.assertTrue(l3[1] == 'C')";
		$m.__track_lines__[157] = "ListTest.py, line 157:\n    self.assertTrue(l3[2] == 'b')";
		$m.__track_lines__[158] = "ListTest.py, line 158:\n    self.assertTrue(l3[3] == 'A')";
		$m.__track_lines__[160] = "ListTest.py, line 160:\n    l4 = ['c', 'd', 'a', 'b']";
		$m.__track_lines__[161] = 'ListTest.py, line 161:\n    l4.sort(None, None, True)';
		$m.__track_lines__[162] = "ListTest.py, line 162:\n    self.assertTrue(l4[0] == 'd')";
		$m.__track_lines__[163] = "ListTest.py, line 163:\n    self.assertTrue(l4[1] == 'c')";
		$m.__track_lines__[164] = "ListTest.py, line 164:\n    self.assertTrue(l4[2] == 'b')";
		$m.__track_lines__[165] = "ListTest.py, line 165:\n    self.assertTrue(l4[3] == 'a')";
		$m.__track_lines__[167] = 'ListTest.py, line 167:\n    def testPop(self):';
		$m.__track_lines__[168] = "ListTest.py, line 168:\n    a = ['a']";
		$m.__track_lines__[169] = "ListTest.py, line 169:\n    b = ['b']";
		$m.__track_lines__[170] = "ListTest.py, line 170:\n    c = ['c']";
		$m.__track_lines__[171] = "ListTest.py, line 171:\n    d = ['d']";
		$m.__track_lines__[172] = "ListTest.py, line 172:\n    e = ['e']";
		$m.__track_lines__[174] = 'ListTest.py, line 174:\n    value = [a, b, c, d, e]';
		$m.__track_lines__[176] = 'ListTest.py, line 176:\n    try:';
		$m.__track_lines__[177] = 'ListTest.py, line 177:\n    x = value.pop(5)';
		$m.__track_lines__[178] = 'ListTest.py, line 178:\n    self.fail("Failed to raise error on \'value.pop(5)\'")';
		$m.__track_lines__[180] = 'ListTest.py, line 180:\n    self.assertEqual(err[0], "pop index out of range")';
		$m.__track_lines__[182] = 'ListTest.py, line 182:\n    try:';
		$m.__track_lines__[183] = 'ListTest.py, line 183:\n    x = value.pop(-6)';
		$m.__track_lines__[184] = 'ListTest.py, line 184:\n    self.fail("Failed to raise error on \'value.pop(-6)\'")';
		$m.__track_lines__[186] = 'ListTest.py, line 186:\n    self.assertEqual(err[0], "pop index out of range")';
		$m.__track_lines__[188] = 'ListTest.py, line 188:\n    x = value.pop(4)';
		$m.__track_lines__[189] = 'ListTest.py, line 189:\n    self.assertTrue(x==e, "x==e")';
		$m.__track_lines__[190] = 'ListTest.py, line 190:\n    self.assertTrue(len(value) is 4, "len(value) is 4")';
		$m.__track_lines__[192] = 'ListTest.py, line 192:\n    x = value.pop(-1)';
		$m.__track_lines__[193] = 'ListTest.py, line 193:\n    self.assertTrue(x==d, "x==d")';
		$m.__track_lines__[194] = 'ListTest.py, line 194:\n    self.assertTrue(len(value) is 3, "len(value) is 3")';
		$m.__track_lines__[196] = 'ListTest.py, line 196:\n    x = value.pop()';
		$m.__track_lines__[197] = 'ListTest.py, line 197:\n    self.assertTrue(x==c, "x==c")';
		$m.__track_lines__[198] = 'ListTest.py, line 198:\n    self.assertTrue(len(value) is 2, "len(value) is 2")';
		$m.__track_lines__[200] = 'ListTest.py, line 200:\n    x = value.pop(0)';
		$m.__track_lines__[201] = 'ListTest.py, line 201:\n    self.assertTrue(x==a, "x==a")';
		$m.__track_lines__[202] = 'ListTest.py, line 202:\n    self.assertTrue(len(value) is 1, "len(value) is 1")';
		$m.__track_lines__[204] = 'ListTest.py, line 204:\n    x = value.pop()';
		$m.__track_lines__[205] = 'ListTest.py, line 205:\n    try:';
		$m.__track_lines__[206] = 'ListTest.py, line 206:\n    x = value.pop()';
		$m.__track_lines__[207] = 'ListTest.py, line 207:\n    self.fail("Failed to raise error on \'value.pop()\'")';
		$m.__track_lines__[209] = 'ListTest.py, line 209:\n    self.assertEqual(err[0], "pop from empty list")';
		$m.__track_lines__[212] = 'ListTest.py, line 212:\n    def testSort(self):';
		$m.__track_lines__[213] = "ListTest.py, line 213:\n    l1 = ['c', 'd', 'a', 'b']";
		$m.__track_lines__[214] = 'ListTest.py, line 214:\n    l1.sort()';
		$m.__track_lines__[215] = "ListTest.py, line 215:\n    self.assertTrue(l1[0] == 'a')";
		$m.__track_lines__[216] = "ListTest.py, line 216:\n    self.assertTrue(l1[1] == 'b')";
		$m.__track_lines__[217] = "ListTest.py, line 217:\n    self.assertTrue(l1[2] == 'c')";
		$m.__track_lines__[218] = "ListTest.py, line 218:\n    self.assertTrue(l1[3] == 'd')";
		$m.__track_lines__[220] = "ListTest.py, line 220:\n    l2 = ['C', 'd', 'A', 'b']";
		$m.__track_lines__[221] = 'ListTest.py, line 221:\n    def toLower(x):';
		$m.__track_lines__[222] = 'ListTest.py, line 222:\n    return x.lower()';
		$m.__track_lines__[223] = 'ListTest.py, line 223:\n    l2.sort(key=toLower)';
		$m.__track_lines__[224] = "ListTest.py, line 224:\n    self.assertTrue(l2[0] == 'A')";
		$m.__track_lines__[225] = "ListTest.py, line 225:\n    self.assertTrue(l2[1] == 'b')";
		$m.__track_lines__[226] = "ListTest.py, line 226:\n    self.assertTrue(l2[2] == 'C')";
		$m.__track_lines__[227] = "ListTest.py, line 227:\n    self.assertTrue(l2[3] == 'd')";
		$m.__track_lines__[229] = "ListTest.py, line 229:\n    l3 = ['C', 'd', 'A', 'b']";
		$m.__track_lines__[230] = 'ListTest.py, line 230:\n    l3.sort(key=toLower, reverse=True)';
		$m.__track_lines__[231] = "ListTest.py, line 231:\n    self.assertTrue(l3[0] == 'd')";
		$m.__track_lines__[232] = "ListTest.py, line 232:\n    self.assertTrue(l3[1] == 'C')";
		$m.__track_lines__[233] = "ListTest.py, line 233:\n    self.assertTrue(l3[2] == 'b')";
		$m.__track_lines__[234] = "ListTest.py, line 234:\n    self.assertTrue(l3[3] == 'A')";
		$m.__track_lines__[236] = "ListTest.py, line 236:\n    l4 = ['c', 'd', 'a', 'b']";
		$m.__track_lines__[237] = 'ListTest.py, line 237:\n    l4.sort(reverse=True)';
		$m.__track_lines__[238] = "ListTest.py, line 238:\n    self.assertTrue(l4[0] == 'd')";
		$m.__track_lines__[239] = "ListTest.py, line 239:\n    self.assertTrue(l4[1] == 'c')";
		$m.__track_lines__[240] = "ListTest.py, line 240:\n    self.assertTrue(l4[2] == 'b')";
		$m.__track_lines__[241] = "ListTest.py, line 241:\n    self.assertTrue(l4[3] == 'a')";
		$m.__track_lines__[243] = 'ListTest.py, line 243:\n    def testCmp(self):';
		$m.__track_lines__[244] = 'ListTest.py, line 244:\n    l1 = [1,2,3]';
		$m.__track_lines__[245] = 'ListTest.py, line 245:\n    l2 = [1,2]';
		$m.__track_lines__[246] = 'ListTest.py, line 246:\n    l3 = [1,2,3]';
		$m.__track_lines__[247] = 'ListTest.py, line 247:\n    l4 = [1,2,4]';
		$m.__track_lines__[249] = 'ListTest.py, line 249:\n    t1 = (1,2,3)';
		$m.__track_lines__[251] = 'ListTest.py, line 251:\n    self.assertEquals(cmp([],[]), 0, "Empty lists are the same")';
		$m.__track_lines__[252] = 'ListTest.py, line 252:\n    self.assertTrue([]==[])';
		$m.__track_lines__[253] = 'ListTest.py, line 253:\n    self.assertEquals([]!=[], False)';
		$m.__track_lines__[254] = 'ListTest.py, line 254:\n    self.assertTrue(cmp(l1, l2) == 1)';
		$m.__track_lines__[255] = 'ListTest.py, line 255:\n    self.assertTrue(cmp(l2, l1) == -1)';
		$m.__track_lines__[256] = 'ListTest.py, line 256:\n    self.assertTrue(cmp(l3, l4) == -1)';
		$m.__track_lines__[257] = 'ListTest.py, line 257:\n    self.assertTrue(cmp(l4, l3) == 1)';
		$m.__track_lines__[258] = 'ListTest.py, line 258:\n    self.assertTrue(l1 == l3, "l1 == l3")';
		$m.__track_lines__[259] = 'ListTest.py, line 259:\n    self.assertTrue(l1 > l2, "l1 > l2")';
		$m.__track_lines__[260] = 'ListTest.py, line 260:\n    self.assertTrue(l1 >= l2, "l1 >= l2")';
		$m.__track_lines__[261] = 'ListTest.py, line 261:\n    self.assertTrue(l2 < l1, "l2 < l1")';
		$m.__track_lines__[262] = 'ListTest.py, line 262:\n    self.assertTrue(l2 <= l1, "l2 <= l1")';
		$m.__track_lines__[264] = 'ListTest.py, line 264:\n    b1 = B()';
		$m.__track_lines__[265] = 'ListTest.py, line 265:\n    b2 = B()';
		$m.__track_lines__[266] = 'ListTest.py, line 266:\n    l1 = [b1, b2]';
		$m.__track_lines__[267] = 'ListTest.py, line 267:\n    l2 = [b2, b1]';
		$m.__track_lines__[268] = "ListTest.py, line 268:\n    self.assertFalse(l1==l2, 'TODO: cmp() plain objects fails')";
		$m.__track_lines__[270] = 'ListTest.py, line 270:\n    def testCmpListTuple(self):';
		$m.__track_lines__[271] = 'ListTest.py, line 271:\n    t1 = (1,2,3)';
		$m.__track_lines__[272] = 'ListTest.py, line 272:\n    l1 = [1,2,3]';
		$m.__track_lines__[274] = 'ListTest.py, line 274:\n    self.assertFalse(l1 == t1)';
		$m.__track_lines__[275] = 'ListTest.py, line 275:\n    self.assertTrue(cmp(l1, t1) == -1)';
		$m.__track_lines__[276] = 'ListTest.py, line 276:\n    self.assertTrue(cmp(t1, l1) == 1)';
		$m.__track_lines__[277] = 'ListTest.py, line 277:\n    self.assertTrue(l1 != t1, "l1 != t1")';
		$m.__track_lines__[279] = 'ListTest.py, line 279:\n    def testSortCmp(self):';
		$m.__track_lines__[280] = 'ListTest.py, line 280:\n    a = A()';
		$m.__track_lines__[281] = 'ListTest.py, line 281:\n    l1 = [a, 1]';
		$m.__track_lines__[282] = 'ListTest.py, line 282:\n    l1.sort()';
		$m.__track_lines__[283] = 'ListTest.py, line 283:\n    l2 = [1, a]';
		$m.__track_lines__[284] = 'ListTest.py, line 284:\n    l2.sort()';
		$m.__track_lines__[285] = "ListTest.py, line 285:\n    self.assertTrue(l1[0] is a) # don't use == it will call A.__cmp__!";
		$m.__track_lines__[286] = "ListTest.py, line 286:\n    self.assertTrue(l2[0] is a) # don't use == it will call A.__cmp__!";
		$m.__track_lines__[287] = 'ListTest.py, line 287:\n    self.assertFalse(l1[0] == a) # use == A.__cmp__ always fails';
		$m.__track_lines__[289] = 'ListTest.py, line 289:\n    def testReverse(self):';
		$m.__track_lines__[290] = 'ListTest.py, line 290:\n    l = [1,2,3]';
		$m.__track_lines__[291] = 'ListTest.py, line 291:\n    l.reverse()';
		$m.__track_lines__[292] = 'ListTest.py, line 292:\n    self.assertEqual(l[0], 3)';
		$m.__track_lines__[293] = 'ListTest.py, line 293:\n    self.assertEqual(l[2], 1)';
		$m.__track_lines__[295] = 'ListTest.py, line 295:\n    def testConstructor(self):';
		$m.__track_lines__[296] = 'ListTest.py, line 296:\n    l1 = list()';
		$m.__track_lines__[297] = 'ListTest.py, line 297:\n    self.assertEqual(len(l1),0)';
		$m.__track_lines__[300] = 'ListTest.py, line 300:\n    l2 = list()';
		$m.__track_lines__[301] = 'ListTest.py, line 301:\n    self.assertEqual(len(l2),0)';
		$m.__track_lines__[303] = 'ListTest.py, line 303:\n    l3 = list([])';
		$m.__track_lines__[304] = 'ListTest.py, line 304:\n    self.assertEqual(len(l3),0)';
		$m.__track_lines__[306] = 'ListTest.py, line 306:\n    l4 = list([10,])';
		$m.__track_lines__[307] = 'ListTest.py, line 307:\n    self.assertEqual(len(l4),1)';
		$m.__track_lines__[308] = 'ListTest.py, line 308:\n    self.assertEqual(l4[0],10)';
		$m.__track_lines__[310] = 'ListTest.py, line 310:\n    l5 = list(range(10,40,10))';
		$m.__track_lines__[311] = 'ListTest.py, line 311:\n    self.assertEqual(len(l5),3)';
		$m.__track_lines__[312] = 'ListTest.py, line 312:\n    self.assertEqual(l5[0],10)';
		$m.__track_lines__[313] = 'ListTest.py, line 313:\n    self.assertEqual(l5[1],20)';
		$m.__track_lines__[314] = 'ListTest.py, line 314:\n    self.assertEqual(l5[2],30)';
		$m.__track_lines__[316] = 'ListTest.py, line 316:\n    l6 = list(l4)';
		$m.__track_lines__[317] = 'ListTest.py, line 317:\n    self.assertEqual(len(l6),1)';
		$m.__track_lines__[318] = 'ListTest.py, line 318:\n    self.assertEqual(l6[0],10)';
		$m.__track_lines__[320] = 'ListTest.py, line 320:\n    def testRangeList(self):';
		$m.__track_lines__[321] = 'ListTest.py, line 321:\n    list1 = [0, 1, 2, 3]';
		$m.__track_lines__[322] = 'ListTest.py, line 322:\n    list2 = range(0, 4)';
		$m.__track_lines__[323] = 'ListTest.py, line 323:\n    self.assertTrue(list1 == list2)';
		$m.__track_lines__[325] = 'ListTest.py, line 325:\n    def testExtend(self):';
		$m.__track_lines__[326] = 'ListTest.py, line 326:\n    l = [10,20]';
		$m.__track_lines__[327] = 'ListTest.py, line 327:\n    l.extend([30,40])';
		$m.__track_lines__[328] = 'ListTest.py, line 328:\n    self.assertEqual(len(l),4)';
		$m.__track_lines__[329] = 'ListTest.py, line 329:\n    self.assertEqual(l[0], 10)';
		$m.__track_lines__[330] = 'ListTest.py, line 330:\n    self.assertEqual(l[1], 20)';
		$m.__track_lines__[331] = 'ListTest.py, line 331:\n    self.assertEqual(l[2], 30)';
		$m.__track_lines__[332] = 'ListTest.py, line 332:\n    self.assertEqual(l[3], 40)';
		$m.__track_lines__[334] = 'ListTest.py, line 334:\n    l2 = [10,20]';
		$m.__track_lines__[335] = 'ListTest.py, line 335:\n    l2.extend([])';
		$m.__track_lines__[336] = 'ListTest.py, line 336:\n    self.assertEqual(len(l2),2)';
		$m.__track_lines__[338] = 'ListTest.py, line 338:\n    l3 = []';
		$m.__track_lines__[339] = 'ListTest.py, line 339:\n    l3.extend([10,20])';
		$m.__track_lines__[340] = 'ListTest.py, line 340:\n    self.assertEqual(len(l3),2)';
		$m.__track_lines__[341] = 'ListTest.py, line 341:\n    self.assertEqual(l3[0],10)';
		$m.__track_lines__[342] = 'ListTest.py, line 342:\n    self.assertEqual(l3[1],20)';
		$m.__track_lines__[344] = 'ListTest.py, line 344:\n    l4 = []';
		$m.__track_lines__[345] = 'ListTest.py, line 345:\n    l4.extend([])';
		$m.__track_lines__[346] = 'ListTest.py, line 346:\n    self.assertEqual(len(l4),0)';
		$m.__track_lines__[348] = 'ListTest.py, line 348:\n    def testIter2(self):';
		$m.__track_lines__[349] = 'ListTest.py, line 349:\n    i = 0';
		$m.__track_lines__[351] = 'ListTest.py, line 351:\n    for item in [0,1,2,3]:';
		$m.__track_lines__[352] = 'ListTest.py, line 352:\n    self.assertEqual(item, i)';
		$m.__track_lines__[353] = 'ListTest.py, line 353:\n    i += 1';
		$m.__track_lines__[355] = 'ListTest.py, line 355:\n    i = 0';
		$m.__track_lines__[356] = 'ListTest.py, line 356:\n    for item in [0,1,2,3][1:-1]:';
		$m.__track_lines__[357] = 'ListTest.py, line 357:\n    i += item';
		$m.__track_lines__[358] = 'ListTest.py, line 358:\n    self.assertEqual(i, 3)';
		$m.__track_lines__[360] = 'ListTest.py, line 360:\n    def testIter(self):';
		$m.__track_lines__[361] = 'ListTest.py, line 361:\n    l = [0,1,2,3]';
		$m.__track_lines__[362] = 'ListTest.py, line 362:\n    i = 0';
		$m.__track_lines__[364] = 'ListTest.py, line 364:\n    it = l.__iter__()';
		$m.__track_lines__[365] = 'ListTest.py, line 365:\n    while True:';
		$m.__track_lines__[366] = 'ListTest.py, line 366:\n    try:';
		$m.__track_lines__[367] = 'ListTest.py, line 367:\n    item = it.next()';
		$m.__track_lines__[369] = 'ListTest.py, line 369:\n    break';
		$m.__track_lines__[370] = 'ListTest.py, line 370:\n    self.assertEqual(item, l[i])';
		$m.__track_lines__[371] = 'ListTest.py, line 371:\n    i += 1';
		$m.__track_lines__[373] = 'ListTest.py, line 373:\n    def testIndex(self):';
		$m.__track_lines__[374] = 'ListTest.py, line 374:\n    l = [2,4,6,8]';
		$m.__track_lines__[375] = 'ListTest.py, line 375:\n    try:';
		$m.__track_lines__[376] = 'ListTest.py, line 376:\n    self.assertEqual(l.index(2), 0)';
		$m.__track_lines__[378] = 'ListTest.py, line 378:\n    self.fail("ValueError raised when not expected")';
		$m.__track_lines__[380] = 'ListTest.py, line 380:\n    try:';
		$m.__track_lines__[381] = 'ListTest.py, line 381:\n    l.index(200000)';
		$m.__track_lines__[383] = "ListTest.py, line 383:\n    print '[%s]' % str(e)";
		$m.__track_lines__[384] = 'ListTest.py, line 384:\n    self.assertIn(str(e), [';
		$m.__track_lines__[389] = 'ListTest.py, line 389:\n    self.fail("ValueError not raised")';
		$m.__track_lines__[392] = 'ListTest.py, line 392:\n    l = [[1],[2],[3]]';
		$m.__track_lines__[393] = 'ListTest.py, line 393:\n    self.assertEqual(l.index([2]), 1)';
		$m.__track_lines__[395] = 'ListTest.py, line 395:\n    def testIndexClass(self):';
		$m.__track_lines__[397] = 'ListTest.py, line 397:\n    l = get_test_letters()';
		$m.__track_lines__[398] = "ListTest.py, line 398:\n    self.assertEqual(l[0].letter, 'g', '#413 index __cmp__ class issue')";
		$m.__track_lines__[399] = "ListTest.py, line 399:\n    self.assertEqual(l[1].letter, 'f', '#413 index __cmp__ class issue')";
		$m.__track_lines__[400] = "ListTest.py, line 400:\n    self.assertEqual(l[0][0].letter, 'o', '#413 index __cmp__ class issue')";
		$m.__track_lines__[401] = "ListTest.py, line 401:\n    self.assertEqual(l[1][0].letter, 'r', '#413 index __cmp__ class issue')";
		$m.__track_lines__[402] = "ListTest.py, line 402:\n    self.assertEqual(len(l), 2, '#413 index __cmp__ class issue')";
		$m.__track_lines__[403] = "ListTest.py, line 403:\n    self.assertEqual(len(l[0]), 1, '#413 index __cmp__ class issue')";
		$m.__track_lines__[404] = "ListTest.py, line 404:\n    self.assertEqual(len(l[1]), 1, '#413 index __cmp__ class issue')";
		$m.__track_lines__[405] = "ListTest.py, line 405:\n    self.assertEqual(len(l[0][0]), 1, '#413 index __cmp__ class issue')";
		$m.__track_lines__[406] = "ListTest.py, line 406:\n    self.assertEqual(len(l[1][0]), 2, '#413 index __cmp__ class issue')";
		$m.__track_lines__[408] = 'ListTest.py, line 408:\n    def testAugAssign(self):';
		$m.__track_lines__[409] = 'ListTest.py, line 409:\n    l = [10, 10.0]';
		$m.__track_lines__[410] = 'ListTest.py, line 410:\n    def getidx(x):';
		$m.__track_lines__[411] = 'ListTest.py, line 411:\n    return x';
		$m.__track_lines__[412] = 'ListTest.py, line 412:\n    def getlist():';
		$m.__track_lines__[413] = 'ListTest.py, line 413:\n    return l';
		$m.__track_lines__[414] = 'ListTest.py, line 414:\n    l[0] += 1';
		$m.__track_lines__[415] = 'ListTest.py, line 415:\n    self.assertEqual(l[0], 11)';
		$m.__track_lines__[416] = 'ListTest.py, line 416:\n    l[0] -= 2';
		$m.__track_lines__[417] = 'ListTest.py, line 417:\n    self.assertEqual(l[0], 9)';
		$m.__track_lines__[418] = 'ListTest.py, line 418:\n    l[0] /= 3';
		$m.__track_lines__[419] = 'ListTest.py, line 419:\n    self.assertEqual(l[0], 3)';
		$m.__track_lines__[420] = 'ListTest.py, line 420:\n    l[0] *= 9';
		$m.__track_lines__[421] = 'ListTest.py, line 421:\n    self.assertEqual(l[0], 27)';
		$m.__track_lines__[422] = 'ListTest.py, line 422:\n    l[0] %= 5';
		$m.__track_lines__[423] = 'ListTest.py, line 423:\n    self.assertEqual(l[0], 2)';
		$m.__track_lines__[424] = 'ListTest.py, line 424:\n    a = 0';
		$m.__track_lines__[425] = 'ListTest.py, line 425:\n    l[a] += 1';
		$m.__track_lines__[426] = 'ListTest.py, line 426:\n    self.assertEqual(l[0], 3)';
		$m.__track_lines__[427] = 'ListTest.py, line 427:\n    l[getidx(0)] += 1';
		$m.__track_lines__[428] = 'ListTest.py, line 428:\n    self.assertEqual(l[0], 4)';
		$m.__track_lines__[429] = 'ListTest.py, line 429:\n    getlist()[getidx(0)] += 1';
		$m.__track_lines__[430] = 'ListTest.py, line 430:\n    self.assertEqual(l[0], 5)';
		$m.__track_lines__[432] = 'ListTest.py, line 432:\n    def testListComp(self):';
		$m.__track_lines__[433] = "ListTest.py, line 433:\n    l1 = ['a', 'b', 'c']";
		$m.__track_lines__[434] = 'ListTest.py, line 434:\n    l2 = [i for i in l1]';
		$m.__track_lines__[435] = "ListTest.py, line 435:\n    self.assertTrue(l1 == l2, 'simple')";
		$m.__track_lines__[437] = 'ListTest.py, line 437:\n    vec1 = [1, 3, 5]';
		$m.__track_lines__[438] = 'ListTest.py, line 438:\n    vec2 = [2, 4, 6]';
		$m.__track_lines__[439] = 'ListTest.py, line 439:\n    l = [3*x for x in vec1 if x >= 3]';
		$m.__track_lines__[440] = "ListTest.py, line 440:\n    self.assertTrue(l == [9,15], 'conditional')";
		$m.__track_lines__[442] = 'ListTest.py, line 442:\n    l = [(x,y) for x in vec1 if x >= 3 for y in vec2 if y > 3]';
		$m.__track_lines__[443] = "ListTest.py, line 443:\n    self.assertTrue(l == [(3, 4), (3, 6), (5, 4), (5, 6)], 'double')";
		$m.__track_lines__[445] = 'ListTest.py, line 445:\n    l = [i for i in [j for j in [1,2,3]]]';
		$m.__track_lines__[446] = 'ListTest.py, line 446:\n    self.assertTrue(l == [1,2,3])';
		$m.__track_lines__[448] = 'ListTest.py, line 448:\n    self.assertTrue([1] > [0,1], "[1] > [0,1]")';
		$m.__track_lines__[449] = 'ListTest.py, line 449:\n    self.assertTrue([0,1] < [1], "[0,1] < [1]")';
		$m.__track_lines__[451] = 'ListTest.py, line 451:\n    def testListContains(self):';
		$m.__track_lines__[452] = "ListTest.py, line 452:\n    l = [['monkey'], ['patch'], ['fish'], ['chips']]";
		$m.__track_lines__[453] = 'ListTest.py, line 453:\n    self.assertTrue([\'fish\'] in l, "[\'fish\'] in l")';
		$m.__track_lines__[455] = "ListTest.py, line 455:\n    l = [{'monkey':1}, {'patch':1}, {'fish':1}, {'chips':1}]";
		$m.__track_lines__[456] = 'ListTest.py, line 456:\n    self.assertTrue({\'fish\':1} in l, "{\'fish\':1} in l")';
		$m.__track_lines__[458] = 'ListTest.py, line 458:\n    def testExtendedSlicing(self):';
		$m.__track_lines__[460] = 'ListTest.py, line 460:\n    self.fail("Bug #xxx - need better __setitem__ implementation for builtin lists")';
		$m.__track_lines__[461] = 'ListTest.py, line 461:\n    return';
		$m.__track_lines__[464] = 'ListTest.py, line 464:\n    a = range(20)';
		$m.__track_lines__[465] = 'ListTest.py, line 465:\n    a[slice(2,10,3)] = [1,2,3]';
		$m.__track_lines__[466] = 'ListTest.py, line 466:\n    self.assertEqual(a, [0, 1, 1, 3, 4, 2, 6, 7, 3,';
		$m.__track_lines__[471] = 'ListTest.py, line 471:\n    a = [0,1,2,3,4]';
		$m.__track_lines__[472] = 'ListTest.py, line 472:\n    del a[::2]';
		$m.__track_lines__[473] = 'ListTest.py, line 473:\n    self.assertEqual(a, [1,3])';
		$m.__track_lines__[475] = 'ListTest.py, line 475:\n    a = range(5)';
		$m.__track_lines__[476] = 'ListTest.py, line 476:\n    del a[1::2]';
		$m.__track_lines__[477] = 'ListTest.py, line 477:\n    self.assertEqual(a, [0,2,4])';
		$m.__track_lines__[479] = 'ListTest.py, line 479:\n    a = range(5)';
		$m.__track_lines__[480] = 'ListTest.py, line 480:\n    del a[1::-2]';
		$m.__track_lines__[481] = 'ListTest.py, line 481:\n    self.assertEqual(a, [0,2,3,4])';
		$m.__track_lines__[483] = 'ListTest.py, line 483:\n    a = range(10)';
		$m.__track_lines__[484] = 'ListTest.py, line 484:\n    del a[::1000]';
		$m.__track_lines__[485] = 'ListTest.py, line 485:\n    self.assertEqual(a, [1, 2, 3, 4, 5, 6, 7, 8, 9])';
		$m.__track_lines__[488] = 'ListTest.py, line 488:\n    a = range(10)';
		$m.__track_lines__[489] = 'ListTest.py, line 489:\n    a[::2] = [-1]*5';
		$m.__track_lines__[490] = 'ListTest.py, line 490:\n    self.assertEqual(a, list([-1, 1, -1, 3, -1, 5, -1, 7, -1, 9]))';
		$m.__track_lines__[492] = 'ListTest.py, line 492:\n    a = list(range(10))';
		$m.__track_lines__[493] = 'ListTest.py, line 493:\n    a[::-4] = [10]*3';
		$m.__track_lines__[494] = 'ListTest.py, line 494:\n    self.assertEqual(a, list([0, 10, 2, 3, 4, 10, 6, 7, 8 ,10]))';
		$m.__track_lines__[496] = 'ListTest.py, line 496:\n    a = list(range(4))';
		$m.__track_lines__[497] = 'ListTest.py, line 497:\n    a[::-1] = a';
		$m.__track_lines__[498] = 'ListTest.py, line 498:\n    self.assertEqual(a, list([3, 2, 1, 0]))';
		$m.__track_lines__[500] = 'ListTest.py, line 500:\n    a = list(range(10))';
		$m.__track_lines__[501] = 'ListTest.py, line 501:\n    b = a[:]';
		$m.__track_lines__[502] = 'ListTest.py, line 502:\n    c = a[:]';
		$m.__track_lines__[503] = 'ListTest.py, line 503:\n    a[2:3] = list(["two", "elements"])';
		$m.__track_lines__[504] = 'ListTest.py, line 504:\n    b[slice(2,3)] = list(["two", "elements"])';
		$m.__track_lines__[505] = 'ListTest.py, line 505:\n    c[2:3:] = list(["two", "elements"])';
		$m.__track_lines__[506] = 'ListTest.py, line 506:\n    self.assertEqual(a, b)';
		$m.__track_lines__[507] = 'ListTest.py, line 507:\n    self.assertEqual(a, c)';
		$m.__track_lines__[509] = 'ListTest.py, line 509:\n    a = list(range(10))';
		$m.__track_lines__[510] = 'ListTest.py, line 510:\n    a[::2] = tuple(range(5))';
		$m.__track_lines__[511] = 'ListTest.py, line 511:\n    self.assertEqual(a, list([0, 1, 1, 3, 2, 5, 3, 7, 4, 9]))';
		$m.__track_lines__[514] = 'ListTest.py, line 514:\n    if sys.version_info < (2,5,5):';
		$m.__track_lines__[515] = 'ListTest.py, line 515:\n    return';
		$m.__track_lines__[517] = 'ListTest.py, line 517:\n    a = list(range(10))';
		$m.__track_lines__[518] = 'ListTest.py, line 518:\n    del a[9::1<<333]';
		$m.__track_lines__[520] = 'ListTest.py, line 520:\n    def testStr(self):';
		$m.__track_lines__[521] = 'ListTest.py, line 521:\n    self.assertEqual(str([0,1]), "[0, 1]")';
		$m.__track_lines__[523] = 'ListTest.py, line 523:\n    def testRepr(self):';
		$m.__track_lines__[524] = 'ListTest.py, line 524:\n    self.assertEqual(repr([0,1]), "[0, 1]")';
		$m.__track_lines__[527] = 'ListTest.py, line 527:\n    class A:';
		$m.__track_lines__[528] = 'ListTest.py, line 528:\n    def __cmp__(self, other):';
		$m.__track_lines__[529] = 'ListTest.py, line 529:\n    return -1';
		$m.__track_lines__[531] = 'ListTest.py, line 531:\n    class B:';
		$m.__track_lines__[532] = 'ListTest.py, line 532:\n    pass';
		$m.__track_lines__[534] = 'ListTest.py, line 534:\n    delete_value = [1,2,3,4,5]';
		$m.__track_lines__[535] = 'ListTest.py, line 535:\n    del delete_value[3]';
		$m.__track_lines__[536] = 'ListTest.py, line 536:\n    del delete_value[2:3]';

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
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_19 = new $p['int'](19);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_21 = new $p['int'](21);
		var $constant_int_22 = new $p['int'](22);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_27 = new $p['int'](27);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_200000 = new $p['int'](200000);
		var $constant_int_333 = new $p['int'](333);
		var $constant_int_1000 = new $p['int'](1000);
		$pyjs.track.module='ListTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['IN_JS'] = $p['___import___']('UnitTest.IN_JS', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['LetterNode'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ListTest';
			$cls_definition.__md5__ = '1a6bdc14b92807af7234152138312805';
			$pyjs.track.lineno=6;
			$method = $pyjs__bind_method2('__init__', function(letter, childnodes) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					letter = arguments[1];
					childnodes = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1a6bdc14b92807af7234152138312805') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof childnodes == 'undefined') childnodes=arguments.callee.__args__[4][1];
				var $bool1;
				$pyjs.track={module:'ListTest', lineno:6};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=6;
				$pyjs.track.lineno=7;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('letter', letter) : $p['setattr'](self, 'letter', letter); 
				$pyjs.track.lineno=8;
				if ((($bool1=$p['op_is'](childnodes, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=9;
					childnodes = $p['list']([]);
				}
				$pyjs.track.lineno=10;
				$p['list']['__init__'](self, childnodes);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['letter'],['childnodes', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=12;
			$method = $pyjs__bind_method2('__cmp__', function(l) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					l = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1a6bdc14b92807af7234152138312805') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2;
				$pyjs.track={module:'ListTest', lineno:12};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=12;
				$pyjs.track.lineno=13;
				if ((($bool2=$p['isinstance'](l, $m['LetterNode'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=14;
					$pyjs.track.lineno=14;
					var $pyjs__ret = $p['cmp']($p['getattr'](self, 'letter'), $p['getattr'](l, 'letter'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=15;
				$pyjs.track.lineno=15;
				var $pyjs__ret = $p['cmp']($p['getattr'](self, 'letter'), l);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['l']]);
			$cls_definition['__cmp__'] = $method;
			$pyjs.track.lineno=4;
			var $bases = new Array($p['list']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LetterNode', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=17;
		$m['words'] = 'golf fred frederick fried'['$$split'](' ');
		$pyjs.track.lineno=19;
		$m['get_test_letters'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,ln,res,l,idx,$iter1_iter,p,$iter2_idx,$pyjs_try_err,$pyjs__trackstack_size_2,$iter1_array,w,$pyjs__trackstack_size_1,$iter2_type,$1,$2,$iter2_array,$iter1_idx;
			$pyjs.track={module:'ListTest',lineno:19};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ListTest';
			$pyjs.track.lineno=19;
			$pyjs.track.lineno=20;
			res = $p['list']([]);
			$pyjs.track.lineno=21;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = $m['words'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				w = $iter1_nextval;
				$pyjs.track.lineno=22;
				p = res;
				$pyjs.track.lineno=23;
				$pyjs__trackstack_size_2=$pyjs.trackstack.length;
				$iter2_iter = w;
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					l = $iter2_nextval;
					$pyjs.track.lineno=24;
					var $pyjs__trackstack_size_3 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=25;
						idx = p['index'](l);
						$pyjs.track.lineno=26;
						p = (typeof ($1=p).__array != 'undefined'?
							((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__(idx));
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_3 - 1);
						$pyjs.__active_exception_stack__ = null;
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_3) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_3);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ListTest';
						if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							$pyjs.track.lineno=28;
							ln = $m['LetterNode'](l);
							$pyjs.track.lineno=29;
							p['append'](ln);
							$pyjs.track.lineno=30;
							p = ln;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=31;
				p['append']($m['LetterNode']('.'));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='ListTest';
			$pyjs.track.lineno=33;
			$pyjs.track.lineno=33;
			var $pyjs__ret = res;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['get_test_letters'].__name__ = 'get_test_letters';

		$m['get_test_letters'].__bind_type__ = 0;
		$m['get_test_letters'].__args__ = [null,null];
		$pyjs.track.lineno=35;
		$m['ListTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ListTest';
			$cls_definition.__md5__ = '2571893d70b3becf44a13175b850cba9';
			$pyjs.track.lineno=37;
			$method = $pyjs__bind_method2('testSliceGet', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$10,$11,$12,$13,l,value,$8,$9,$6,$7,$4,$5,$3;
				$pyjs.track={module:'ListTest', lineno:37};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=37;
				$pyjs.track.lineno=38;
				value = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=40;
				self['assertTrue']($p['op_is']((typeof ($3=value).__array != 'undefined'?
					((typeof $3.__array[$4=(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))), $constant_int_4));
				$pyjs.track.lineno=41;
				self['assertTrue']($p['op_is']((typeof ($5=value).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_1]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_1)), $constant_int_1));
				$pyjs.track.lineno=42;
				self['assertTrue']($p['op_is']((typeof ($7=value).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_4]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_4)), $constant_int_4));
				$pyjs.track.lineno=43;
				self['assertTrue']($p['op_is']((typeof ($9=value).__array != 'undefined'?
					((typeof $9.__array[$10=(typeof ($usub2=$constant_int_3)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__((typeof ($usub2=$constant_int_3)=='number'?
					-$usub2:
					$p['op_usub']($usub2)))), $constant_int_2));
				$pyjs.track.lineno=45;
				l = $p['list']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=46;
				self['assertEqual']((typeof ($11=l).__array != 'undefined'?
					((typeof $11.__array[$12=true]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(true)), $constant_int_2);
				$pyjs.track.lineno=47;
				self['assertEqual']((typeof ($13=l).__array != 'undefined'?
					((typeof $13.__array[$14=false]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(false)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSliceGet'] = $method;
			$pyjs.track.lineno=49;
			$method = $pyjs__bind_method2('testSliceRange', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $32,$33,$30,$29,$28,$21,$20,$22,$25,$24,$27,$26,$15,$16,$17,$34,$18,$19,value,$31,$len6,$len7,$len4,$len5,$len2,$len3,$len1,$23,$len8;
				$pyjs.track={module:'ListTest', lineno:49};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=49;
				$pyjs.track.lineno=50;
				value = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=52;
				self['assertTrue']($p['op_is']((typeof ($15=$p['__getslice'](value, $constant_int_1, $constant_int_3)).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_0]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_0)), $constant_int_1));
				$pyjs.track.lineno=53;
				self['assertTrue']($p['op_is']((typeof ($17=$p['__getslice'](value, $constant_int_1, $constant_int_3)).__array != 'undefined'?
					((typeof $17.__array[$18=$constant_int_1]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($constant_int_1)), $constant_int_2));
				$pyjs.track.lineno=54;
				self['assertTrue']($p['op_is']((($len1=$p['__getslice'](value, $constant_int_1, $constant_int_2)) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), $constant_int_1));
				$pyjs.track.lineno=55;
				self['assertTrue']($p['op_is']((($len2=$p['__getslice'](value, $constant_int_1, $constant_int_3)) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))), $constant_int_2));
				$pyjs.track.lineno=57;
				self['assertTrue']($p['op_is']((typeof ($19=$p['__getslice'](value, 0, $constant_int_2)).__array != 'undefined'?
					((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__($constant_int_0)), $constant_int_0));
				$pyjs.track.lineno=58;
				self['assertTrue']($p['op_is']((typeof ($21=$p['__getslice'](value, 0, $constant_int_2)).__array != 'undefined'?
					((typeof $21.__array[$22=$constant_int_1]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($constant_int_1)), $constant_int_1));
				$pyjs.track.lineno=59;
				self['assertTrue']($p['op_is']((($len3=$p['__getslice'](value, 0, $constant_int_2)) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3))))), $constant_int_2));
				$pyjs.track.lineno=60;
				self['assertTrue']($p['op_is']((($len4=$p['__getslice'](value, 0, $constant_int_1)) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4))))), $constant_int_1));
				$pyjs.track.lineno=62;
				self['assertTrue']($p['op_is']((typeof ($23=$p['__getslice'](value, 0, (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)))).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_0]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_0)), $constant_int_0));
				$pyjs.track.lineno=63;
				self['assertTrue']($p['op_is']((typeof ($25=$p['__getslice'](value, 0, (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)))).__array != 'undefined'?
					((typeof $25.__array[$26=$constant_int_3]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($constant_int_3)), $constant_int_3));
				$pyjs.track.lineno=64;
				self['assertTrue']($p['op_is']((($len5=$p['__getslice'](value, 0, (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))) === null?$constant_int_0:
					(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
								$p['len']($len5))))), $constant_int_4));
				$pyjs.track.lineno=66;
				self['assertTrue']($p['op_is']((typeof ($27=$p['__getslice'](value, 0, null)).__array != 'undefined'?
					((typeof $27.__array[$28=$constant_int_3]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__($constant_int_3)), $constant_int_3));
				$pyjs.track.lineno=67;
				self['assertTrue']($p['op_is']((($len6=$p['__getslice'](value, 0, null)) === null?$constant_int_0:
					(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
								$p['len']($len6))))), $constant_int_5));
				$pyjs.track.lineno=69;
				self['assertTrue']($p['op_is']((typeof ($29=$p['__getslice'](value, $constant_int_0, null)).__array != 'undefined'?
					((typeof $29.__array[$30=$constant_int_3]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__($constant_int_3)), $constant_int_3));
				$pyjs.track.lineno=70;
				self['assertTrue']($p['op_is']((typeof ($31=$p['__getslice'](value, $constant_int_1, null)).__array != 'undefined'?
					((typeof $31.__array[$32=$constant_int_0]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__($constant_int_0)), $constant_int_1));
				$pyjs.track.lineno=71;
				self['assertTrue']($p['op_is']((($len7=$p['__getslice'](value, $constant_int_1, null)) === null?$constant_int_0:
					(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
						(typeof $len7.__len__ == 'function'?$len7.__len__():
							(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
								$p['len']($len7))))), $constant_int_4));
				$pyjs.track.lineno=73;
				self['assertTrue']($p['op_is']((typeof ($33=$p['__getslice'](value, (typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)), null)).__array != 'undefined'?
					((typeof $33.__array[$34=$constant_int_0]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__($constant_int_0)), $constant_int_4));
				$pyjs.track.lineno=74;
				self['assertTrue']($p['op_is']((($len8=$p['__getslice'](value, (typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7)), $constant_int_3)) === null?$constant_int_0:
					(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
						(typeof $len8.__len__ == 'function'?$len8.__len__():
							(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
								$p['len']($len8))))), $constant_int_0));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSliceRange'] = $method;
			$pyjs.track.lineno=76;
			$method = $pyjs__bind_method2('testListAdd', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var added,$add2,$add3,$add1,l2,$add4,l1;
				$pyjs.track={module:'ListTest', lineno:76};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=76;
				$pyjs.track.lineno=78;
				l1 = $p['list']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=79;
				l2 = $p['list']([$constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=81;
				added = (typeof ($add1=l1)==typeof ($add2=l2) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				$pyjs.track.lineno=83;
				self['assertTrue']($p['op_eq'](added, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), $p['sprintf']('l1 + l2: actual result %s', $p['repr'](added)));
				$pyjs.track.lineno=86;
				l1 = (typeof ($add3=l1)==typeof ($add4=l2) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$pyjs.track.lineno=87;
				self['assertTrue']($p['op_eq'](l1, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), $p['sprintf']('l1 += l2: result %s', $p['repr'](l1)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testListAdd'] = $method;
			$pyjs.track.lineno=89;
			$method = $pyjs__bind_method2('testSliceSet', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var value;
				$pyjs.track={module:'ListTest', lineno:89};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=89;
				$pyjs.track.lineno=90;
				value = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=91;
				$p['__setslice'](value, $constant_int_1, $constant_int_2, $p['list']([$constant_int_11, $constant_int_12]));
				$pyjs.track.lineno=92;
				self['assertTrue']($p['op_eq'](value, $p['list']([$constant_int_1, $constant_int_11, $constant_int_12, $constant_int_3])), $p['sprintf']('%s == [1, 11, 12, 3]', value));
				$pyjs.track.lineno=93;
				$p['__setslice'](value, $constant_int_3, null, $p['list']([$constant_int_21, $constant_int_22, $constant_int_23]));
				$pyjs.track.lineno=94;
				self['assertTrue']($p['op_eq'](value, $p['list']([$constant_int_1, $constant_int_11, $constant_int_12, $constant_int_21, $constant_int_22, $constant_int_23])), $p['sprintf']('%s == [1, 11, 12, 21, 22, 23]', value));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSliceSet'] = $method;
			$pyjs.track.lineno=98;
			$method = $pyjs__bind_method2('testMultipleSliceSet', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l2,l1;
				$pyjs.track={module:'ListTest', lineno:98};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=98;
				$pyjs.track.lineno=100;
				l1 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=101;
				l2 = $p['list']([$constant_int_4, $constant_int_5, $constant_int_6]);
				$pyjs.track.lineno=102;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['list']([$constant_int_7, $constant_int_8, $constant_int_9]), $p['list']([$constant_int_10, $constant_int_11, $constant_int_12])]), 2, null);
				$p['__setslice'](l1, 0, null, $tupleassign1[0]);
				$p['__setslice'](l2, 0, null, $tupleassign1[1]);
				$pyjs.track.lineno=103;
				self['assertTrue']($p['op_eq'](l1, $p['list']([$constant_int_7, $constant_int_8, $constant_int_9])), $p['sprintf']('%s == [7, 8, 9]', l1));
				$pyjs.track.lineno=104;
				self['assertTrue']($p['op_eq'](l2, $p['list']([$constant_int_10, $constant_int_11, $constant_int_12])), $p['sprintf']('%s == [10, 11, 12]', l2));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMultipleSliceSet'] = $method;
			$pyjs.track.lineno=106;
			$method = $pyjs__bind_method2('testDelete', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len10,e,$38,$39,$36,$37,$35,value,$pyjs_try_err,$42,$41,$40,$len9;
				$pyjs.track={module:'ListTest', lineno:106};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=106;
				$pyjs.track.lineno=107;
				self['assertTrue']($p['op_eq']((typeof delete_value == "undefined"?$m.delete_value:delete_value), $p['list']([$constant_int_1, $constant_int_2, $constant_int_5])), $p['sprintf']('%s == [1, 2, 5]', $p['tuple']([(typeof delete_value == "undefined"?$m.delete_value:delete_value)])));
				$pyjs.track.lineno=109;
				value = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=110;
				value.__delitem__($constant_int_4);
				$pyjs.track.lineno=111;
				self['assertTrue']($p['op_is']((($len9=value) === null?$constant_int_0:
					(typeof $len9.__array != 'undefined' ? new $p['int']($len9.__array.length):
						(typeof $len9.__len__ == 'function'?$len9.__len__():
							(typeof $len9.length != 'undefined'? new $p['int']($len9.length):
								$p['len']($len9))))), $constant_int_4));
				$pyjs.track.lineno=112;
				self['assertTrue']($p['op_is']((typeof ($35=value).__array != 'undefined'?
					((typeof $35.__array[$36=$constant_int_3]) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__($constant_int_3)), $constant_int_3));
				$pyjs.track.lineno=114;
				value.__delitem__((typeof ($usub8=$constant_int_1)=='number'?
					-$usub8:
					$p['op_usub']($usub8)));
				$pyjs.track.lineno=115;
				self['assertTrue']($p['op_is']((($len10=value) === null?$constant_int_0:
					(typeof $len10.__array != 'undefined' ? new $p['int']($len10.__array.length):
						(typeof $len10.__len__ == 'function'?$len10.__len__():
							(typeof $len10.length != 'undefined'? new $p['int']($len10.length):
								$p['len']($len10))))), $constant_int_3));
				$pyjs.track.lineno=116;
				self['assertTrue']($p['op_is']((typeof ($37=value).__array != 'undefined'?
					((typeof $37.__array[$38=$constant_int_2]) != 'undefined'?$37.__array[$38]:
						$37.__getitem__($38)):
						$37.__getitem__($constant_int_2)), $constant_int_2));
				$pyjs.track.lineno=118;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=119;
					value.__delitem__($constant_int_3);
					$pyjs.track.lineno=120;
					self['fail']("Failed to raise error on 'del value[3]'");
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
					$pyjs.track.module='ListTest';
					if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=122;
						self['assertEqual']((typeof ($39=e).__array != 'undefined'?
							((typeof $39.__array[$40=$constant_int_0]) != 'undefined'?$39.__array[$40]:
								$39.__getitem__($40)):
								$39.__getitem__($constant_int_0)), 'list assignment index out of range');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=124;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=125;
					value.__delitem__((typeof ($usub9=$constant_int_4)=='number'?
						-$usub9:
						$p['op_usub']($usub9)));
					$pyjs.track.lineno=126;
					self['fail']("Failed to raise error on 'del value[-4]'");
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
					$pyjs.track.module='ListTest';
					if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=128;
						self['assertEqual']((typeof ($41=e).__array != 'undefined'?
							((typeof $41.__array[$42=$constant_int_0]) != 'undefined'?$41.__array[$42]:
								$41.__getitem__($42)):
								$41.__getitem__($constant_int_0)), 'list assignment index out of range');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=130;
				value = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=131;
				$p['__delslice'](value, $constant_int_1, $constant_int_3)
				$pyjs.track.lineno=132;
				self['assertTrue']($p['op_eq'](value, $p['list']([$constant_int_0, $constant_int_3, $constant_int_4])), $p['sprintf']('%s == [0, 3, 4]', value));
				$pyjs.track.lineno=133;
				$p['__delslice'](value, 0, null)
				$pyjs.track.lineno=134;
				self['assertTrue']($p['op_eq'](value, $p['list']([])), $p['sprintf']('%s = []', value));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDelete'] = $method;
			$pyjs.track.lineno=136;
			$method = $pyjs__bind_method2('testSortNoKwArgs', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $62,toLower,$49,$48,$69,$68,$43,$64,$67,$66,$47,$46,$45,$44,$65,$72,$73,$70,$71,$63,$74,$61,$60,$58,$59,l4,l2,l3,l1,$50,$51,$52,$53,$54,$55,$56,$57;
				$pyjs.track={module:'ListTest', lineno:136};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=136;
				$pyjs.track.lineno=137;
				l1 = $p['list'](['c', 'd', 'a', 'b']);
				$pyjs.track.lineno=138;
				l1['sort']();
				$pyjs.track.lineno=139;
				self['assertTrue']($p['op_eq']((typeof ($43=l1).__array != 'undefined'?
					((typeof $43.__array[$44=$constant_int_0]) != 'undefined'?$43.__array[$44]:
						$43.__getitem__($44)):
						$43.__getitem__($constant_int_0)), 'a'));
				$pyjs.track.lineno=140;
				self['assertTrue']($p['op_eq']((typeof ($45=l1).__array != 'undefined'?
					((typeof $45.__array[$46=$constant_int_1]) != 'undefined'?$45.__array[$46]:
						$45.__getitem__($46)):
						$45.__getitem__($constant_int_1)), 'b'));
				$pyjs.track.lineno=141;
				self['assertTrue']($p['op_eq']((typeof ($47=l1).__array != 'undefined'?
					((typeof $47.__array[$48=$constant_int_2]) != 'undefined'?$47.__array[$48]:
						$47.__getitem__($48)):
						$47.__getitem__($constant_int_2)), 'c'));
				$pyjs.track.lineno=142;
				self['assertTrue']($p['op_eq']((typeof ($49=l1).__array != 'undefined'?
					((typeof $49.__array[$50=$constant_int_3]) != 'undefined'?$49.__array[$50]:
						$49.__getitem__($50)):
						$49.__getitem__($constant_int_3)), 'd'));
				$pyjs.track.lineno=144;
				l2 = $p['list'](['C', 'd', 'A', 'b']);
				$pyjs.track.lineno=145;
				toLower = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'ListTest',lineno:145};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ListTest';
					$pyjs.track.lineno=145;
					$pyjs.track.lineno=146;
					$pyjs.track.lineno=146;
					var $pyjs__ret = x['lower']();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				toLower.__name__ = 'toLower';

				toLower.__bind_type__ = 0;
				toLower.__args__ = [null,null,['x']];
				$pyjs.track.lineno=147;
				l2['sort'](null, toLower);
				$pyjs.track.lineno=148;
				self['assertTrue']($p['op_eq']((typeof ($51=l2).__array != 'undefined'?
					((typeof $51.__array[$52=$constant_int_0]) != 'undefined'?$51.__array[$52]:
						$51.__getitem__($52)):
						$51.__getitem__($constant_int_0)), 'A'));
				$pyjs.track.lineno=149;
				self['assertTrue']($p['op_eq']((typeof ($53=l2).__array != 'undefined'?
					((typeof $53.__array[$54=$constant_int_1]) != 'undefined'?$53.__array[$54]:
						$53.__getitem__($54)):
						$53.__getitem__($constant_int_1)), 'b'));
				$pyjs.track.lineno=150;
				self['assertTrue']($p['op_eq']((typeof ($55=l2).__array != 'undefined'?
					((typeof $55.__array[$56=$constant_int_2]) != 'undefined'?$55.__array[$56]:
						$55.__getitem__($56)):
						$55.__getitem__($constant_int_2)), 'C'));
				$pyjs.track.lineno=151;
				self['assertTrue']($p['op_eq']((typeof ($57=l2).__array != 'undefined'?
					((typeof $57.__array[$58=$constant_int_3]) != 'undefined'?$57.__array[$58]:
						$57.__getitem__($58)):
						$57.__getitem__($constant_int_3)), 'd'));
				$pyjs.track.lineno=153;
				l3 = $p['list'](['C', 'd', 'A', 'b']);
				$pyjs.track.lineno=154;
				l3['sort'](null, toLower, true);
				$pyjs.track.lineno=155;
				self['assertTrue']($p['op_eq']((typeof ($59=l3).__array != 'undefined'?
					((typeof $59.__array[$60=$constant_int_0]) != 'undefined'?$59.__array[$60]:
						$59.__getitem__($60)):
						$59.__getitem__($constant_int_0)), 'd'));
				$pyjs.track.lineno=156;
				self['assertTrue']($p['op_eq']((typeof ($61=l3).__array != 'undefined'?
					((typeof $61.__array[$62=$constant_int_1]) != 'undefined'?$61.__array[$62]:
						$61.__getitem__($62)):
						$61.__getitem__($constant_int_1)), 'C'));
				$pyjs.track.lineno=157;
				self['assertTrue']($p['op_eq']((typeof ($63=l3).__array != 'undefined'?
					((typeof $63.__array[$64=$constant_int_2]) != 'undefined'?$63.__array[$64]:
						$63.__getitem__($64)):
						$63.__getitem__($constant_int_2)), 'b'));
				$pyjs.track.lineno=158;
				self['assertTrue']($p['op_eq']((typeof ($65=l3).__array != 'undefined'?
					((typeof $65.__array[$66=$constant_int_3]) != 'undefined'?$65.__array[$66]:
						$65.__getitem__($66)):
						$65.__getitem__($constant_int_3)), 'A'));
				$pyjs.track.lineno=160;
				l4 = $p['list'](['c', 'd', 'a', 'b']);
				$pyjs.track.lineno=161;
				l4['sort'](null, null, true);
				$pyjs.track.lineno=162;
				self['assertTrue']($p['op_eq']((typeof ($67=l4).__array != 'undefined'?
					((typeof $67.__array[$68=$constant_int_0]) != 'undefined'?$67.__array[$68]:
						$67.__getitem__($68)):
						$67.__getitem__($constant_int_0)), 'd'));
				$pyjs.track.lineno=163;
				self['assertTrue']($p['op_eq']((typeof ($69=l4).__array != 'undefined'?
					((typeof $69.__array[$70=$constant_int_1]) != 'undefined'?$69.__array[$70]:
						$69.__getitem__($70)):
						$69.__getitem__($constant_int_1)), 'c'));
				$pyjs.track.lineno=164;
				self['assertTrue']($p['op_eq']((typeof ($71=l4).__array != 'undefined'?
					((typeof $71.__array[$72=$constant_int_2]) != 'undefined'?$71.__array[$72]:
						$71.__getitem__($72)):
						$71.__getitem__($constant_int_2)), 'b'));
				$pyjs.track.lineno=165;
				self['assertTrue']($p['op_eq']((typeof ($73=l4).__array != 'undefined'?
					((typeof $73.__array[$74=$constant_int_3]) != 'undefined'?$73.__array[$74]:
						$73.__getitem__($74)):
						$73.__getitem__($constant_int_3)), 'a'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSortNoKwArgs'] = $method;
			$pyjs.track.lineno=167;
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
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$len11,c,b,e,d,err,$75,$len14,$79,$len12,value,$80,$pyjs_try_err,$76,$len13,x,$78,$77;
				$pyjs.track={module:'ListTest', lineno:167};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=167;
				$pyjs.track.lineno=168;
				a = $p['list'](['a']);
				$pyjs.track.lineno=169;
				b = $p['list'](['b']);
				$pyjs.track.lineno=170;
				c = $p['list'](['c']);
				$pyjs.track.lineno=171;
				d = $p['list'](['d']);
				$pyjs.track.lineno=172;
				e = $p['list'](['e']);
				$pyjs.track.lineno=174;
				value = $p['list']([a, b, c, d, e]);
				$pyjs.track.lineno=176;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=177;
					x = value['pop']($constant_int_5);
					$pyjs.track.lineno=178;
					self['fail']("Failed to raise error on 'value.pop(5)'");
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
					$pyjs.track.module='ListTest';
					if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						err = $pyjs_try_err;
						$pyjs.track.lineno=180;
						self['assertEqual']((typeof ($75=err).__array != 'undefined'?
							((typeof $75.__array[$76=$constant_int_0]) != 'undefined'?$75.__array[$76]:
								$75.__getitem__($76)):
								$75.__getitem__($constant_int_0)), 'pop index out of range');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=182;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=183;
					x = value['pop']((typeof ($usub10=$constant_int_6)=='number'?
						-$usub10:
						$p['op_usub']($usub10)));
					$pyjs.track.lineno=184;
					self['fail']("Failed to raise error on 'value.pop(-6)'");
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
					$pyjs.track.module='ListTest';
					if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						err = $pyjs_try_err;
						$pyjs.track.lineno=186;
						self['assertEqual']((typeof ($77=err).__array != 'undefined'?
							((typeof $77.__array[$78=$constant_int_0]) != 'undefined'?$77.__array[$78]:
								$77.__getitem__($78)):
								$77.__getitem__($constant_int_0)), 'pop index out of range');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=188;
				x = value['pop']($constant_int_4);
				$pyjs.track.lineno=189;
				self['assertTrue']($p['op_eq'](x, e), 'x==e');
				$pyjs.track.lineno=190;
				self['assertTrue']($p['op_is']((($len11=value) === null?$constant_int_0:
					(typeof $len11.__array != 'undefined' ? new $p['int']($len11.__array.length):
						(typeof $len11.__len__ == 'function'?$len11.__len__():
							(typeof $len11.length != 'undefined'? new $p['int']($len11.length):
								$p['len']($len11))))), $constant_int_4), 'len(value) is 4');
				$pyjs.track.lineno=192;
				x = value['pop']((typeof ($usub11=$constant_int_1)=='number'?
					-$usub11:
					$p['op_usub']($usub11)));
				$pyjs.track.lineno=193;
				self['assertTrue']($p['op_eq'](x, d), 'x==d');
				$pyjs.track.lineno=194;
				self['assertTrue']($p['op_is']((($len12=value) === null?$constant_int_0:
					(typeof $len12.__array != 'undefined' ? new $p['int']($len12.__array.length):
						(typeof $len12.__len__ == 'function'?$len12.__len__():
							(typeof $len12.length != 'undefined'? new $p['int']($len12.length):
								$p['len']($len12))))), $constant_int_3), 'len(value) is 3');
				$pyjs.track.lineno=196;
				x = value['pop']();
				$pyjs.track.lineno=197;
				self['assertTrue']($p['op_eq'](x, c), 'x==c');
				$pyjs.track.lineno=198;
				self['assertTrue']($p['op_is']((($len13=value) === null?$constant_int_0:
					(typeof $len13.__array != 'undefined' ? new $p['int']($len13.__array.length):
						(typeof $len13.__len__ == 'function'?$len13.__len__():
							(typeof $len13.length != 'undefined'? new $p['int']($len13.length):
								$p['len']($len13))))), $constant_int_2), 'len(value) is 2');
				$pyjs.track.lineno=200;
				x = value['pop']($constant_int_0);
				$pyjs.track.lineno=201;
				self['assertTrue']($p['op_eq'](x, a), 'x==a');
				$pyjs.track.lineno=202;
				self['assertTrue']($p['op_is']((($len14=value) === null?$constant_int_0:
					(typeof $len14.__array != 'undefined' ? new $p['int']($len14.__array.length):
						(typeof $len14.__len__ == 'function'?$len14.__len__():
							(typeof $len14.length != 'undefined'? new $p['int']($len14.length):
								$p['len']($len14))))), $constant_int_1), 'len(value) is 1');
				$pyjs.track.lineno=204;
				x = value['pop']();
				$pyjs.track.lineno=205;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=206;
					x = value['pop']();
					$pyjs.track.lineno=207;
					self['fail']("Failed to raise error on 'value.pop()'");
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
					$pyjs.track.module='ListTest';
					if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						err = $pyjs_try_err;
						$pyjs.track.lineno=209;
						self['assertEqual']((typeof ($79=err).__array != 'undefined'?
							((typeof $79.__array[$80=$constant_int_0]) != 'undefined'?$79.__array[$80]:
								$79.__getitem__($80)):
								$79.__getitem__($constant_int_0)), 'pop from empty list');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPop'] = $method;
			$pyjs.track.lineno=212;
			$method = $pyjs__bind_method2('testSort', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $98,$99,$110,$111,$94,$95,$96,$97,$90,$91,$92,$93,$112,toLower,$106,$107,$109,$108,$101,$100,$103,$102,$105,$104,$89,$88,$87,$86,$85,$84,$83,$82,$81,l4,l2,l3,l1;
				$pyjs.track={module:'ListTest', lineno:212};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=212;
				$pyjs.track.lineno=213;
				l1 = $p['list'](['c', 'd', 'a', 'b']);
				$pyjs.track.lineno=214;
				l1['sort']();
				$pyjs.track.lineno=215;
				self['assertTrue']($p['op_eq']((typeof ($81=l1).__array != 'undefined'?
					((typeof $81.__array[$82=$constant_int_0]) != 'undefined'?$81.__array[$82]:
						$81.__getitem__($82)):
						$81.__getitem__($constant_int_0)), 'a'));
				$pyjs.track.lineno=216;
				self['assertTrue']($p['op_eq']((typeof ($83=l1).__array != 'undefined'?
					((typeof $83.__array[$84=$constant_int_1]) != 'undefined'?$83.__array[$84]:
						$83.__getitem__($84)):
						$83.__getitem__($constant_int_1)), 'b'));
				$pyjs.track.lineno=217;
				self['assertTrue']($p['op_eq']((typeof ($85=l1).__array != 'undefined'?
					((typeof $85.__array[$86=$constant_int_2]) != 'undefined'?$85.__array[$86]:
						$85.__getitem__($86)):
						$85.__getitem__($constant_int_2)), 'c'));
				$pyjs.track.lineno=218;
				self['assertTrue']($p['op_eq']((typeof ($87=l1).__array != 'undefined'?
					((typeof $87.__array[$88=$constant_int_3]) != 'undefined'?$87.__array[$88]:
						$87.__getitem__($88)):
						$87.__getitem__($constant_int_3)), 'd'));
				$pyjs.track.lineno=220;
				l2 = $p['list'](['C', 'd', 'A', 'b']);
				$pyjs.track.lineno=221;
				toLower = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'ListTest',lineno:221};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ListTest';
					$pyjs.track.lineno=221;
					$pyjs.track.lineno=222;
					$pyjs.track.lineno=222;
					var $pyjs__ret = x['lower']();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				toLower.__name__ = 'toLower';

				toLower.__bind_type__ = 0;
				toLower.__args__ = [null,null,['x']];
				$pyjs.track.lineno=223;
				$pyjs_kwargs_call(l2, 'sort', null, null, [{key:toLower}]);
				$pyjs.track.lineno=224;
				self['assertTrue']($p['op_eq']((typeof ($89=l2).__array != 'undefined'?
					((typeof $89.__array[$90=$constant_int_0]) != 'undefined'?$89.__array[$90]:
						$89.__getitem__($90)):
						$89.__getitem__($constant_int_0)), 'A'));
				$pyjs.track.lineno=225;
				self['assertTrue']($p['op_eq']((typeof ($91=l2).__array != 'undefined'?
					((typeof $91.__array[$92=$constant_int_1]) != 'undefined'?$91.__array[$92]:
						$91.__getitem__($92)):
						$91.__getitem__($constant_int_1)), 'b'));
				$pyjs.track.lineno=226;
				self['assertTrue']($p['op_eq']((typeof ($93=l2).__array != 'undefined'?
					((typeof $93.__array[$94=$constant_int_2]) != 'undefined'?$93.__array[$94]:
						$93.__getitem__($94)):
						$93.__getitem__($constant_int_2)), 'C'));
				$pyjs.track.lineno=227;
				self['assertTrue']($p['op_eq']((typeof ($95=l2).__array != 'undefined'?
					((typeof $95.__array[$96=$constant_int_3]) != 'undefined'?$95.__array[$96]:
						$95.__getitem__($96)):
						$95.__getitem__($constant_int_3)), 'd'));
				$pyjs.track.lineno=229;
				l3 = $p['list'](['C', 'd', 'A', 'b']);
				$pyjs.track.lineno=230;
				$pyjs_kwargs_call(l3, 'sort', null, null, [{key:toLower, reverse:true}]);
				$pyjs.track.lineno=231;
				self['assertTrue']($p['op_eq']((typeof ($97=l3).__array != 'undefined'?
					((typeof $97.__array[$98=$constant_int_0]) != 'undefined'?$97.__array[$98]:
						$97.__getitem__($98)):
						$97.__getitem__($constant_int_0)), 'd'));
				$pyjs.track.lineno=232;
				self['assertTrue']($p['op_eq']((typeof ($99=l3).__array != 'undefined'?
					((typeof $99.__array[$100=$constant_int_1]) != 'undefined'?$99.__array[$100]:
						$99.__getitem__($100)):
						$99.__getitem__($constant_int_1)), 'C'));
				$pyjs.track.lineno=233;
				self['assertTrue']($p['op_eq']((typeof ($101=l3).__array != 'undefined'?
					((typeof $101.__array[$102=$constant_int_2]) != 'undefined'?$101.__array[$102]:
						$101.__getitem__($102)):
						$101.__getitem__($constant_int_2)), 'b'));
				$pyjs.track.lineno=234;
				self['assertTrue']($p['op_eq']((typeof ($103=l3).__array != 'undefined'?
					((typeof $103.__array[$104=$constant_int_3]) != 'undefined'?$103.__array[$104]:
						$103.__getitem__($104)):
						$103.__getitem__($constant_int_3)), 'A'));
				$pyjs.track.lineno=236;
				l4 = $p['list'](['c', 'd', 'a', 'b']);
				$pyjs.track.lineno=237;
				$pyjs_kwargs_call(l4, 'sort', null, null, [{reverse:true}]);
				$pyjs.track.lineno=238;
				self['assertTrue']($p['op_eq']((typeof ($105=l4).__array != 'undefined'?
					((typeof $105.__array[$106=$constant_int_0]) != 'undefined'?$105.__array[$106]:
						$105.__getitem__($106)):
						$105.__getitem__($constant_int_0)), 'd'));
				$pyjs.track.lineno=239;
				self['assertTrue']($p['op_eq']((typeof ($107=l4).__array != 'undefined'?
					((typeof $107.__array[$108=$constant_int_1]) != 'undefined'?$107.__array[$108]:
						$107.__getitem__($108)):
						$107.__getitem__($constant_int_1)), 'c'));
				$pyjs.track.lineno=240;
				self['assertTrue']($p['op_eq']((typeof ($109=l4).__array != 'undefined'?
					((typeof $109.__array[$110=$constant_int_2]) != 'undefined'?$109.__array[$110]:
						$109.__getitem__($110)):
						$109.__getitem__($constant_int_2)), 'b'));
				$pyjs.track.lineno=241;
				self['assertTrue']($p['op_eq']((typeof ($111=l4).__array != 'undefined'?
					((typeof $111.__array[$112=$constant_int_3]) != 'undefined'?$111.__array[$112]:
						$111.__getitem__($112)):
						$111.__getitem__($constant_int_3)), 'a'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSort'] = $method;
			$pyjs.track.lineno=243;
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
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$cmp8,t1,l4,l2,l3,b2,l1,b1;
				$pyjs.track={module:'ListTest', lineno:243};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=243;
				$pyjs.track.lineno=244;
				l1 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=245;
				l2 = $p['list']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=246;
				l3 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=247;
				l4 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_4]);
				$pyjs.track.lineno=249;
				t1 = $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=251;
				self['assertEquals']($p['cmp']($p['list']([]), $p['list']([])), $constant_int_0, 'Empty lists are the same');
				$pyjs.track.lineno=252;
				self['assertTrue']($p['op_eq']($p['list']([]), $p['list']([])));
				$pyjs.track.lineno=253;
				self['assertEquals'](!$p['op_eq']($p['list']([]), $p['list']([])), false);
				$pyjs.track.lineno=254;
				self['assertTrue']($p['op_eq']($p['cmp'](l1, l2), $constant_int_1));
				$pyjs.track.lineno=255;
				self['assertTrue']($p['op_eq']($p['cmp'](l2, l1), (typeof ($usub12=$constant_int_1)=='number'?
					-$usub12:
					$p['op_usub']($usub12))));
				$pyjs.track.lineno=256;
				self['assertTrue']($p['op_eq']($p['cmp'](l3, l4), (typeof ($usub13=$constant_int_1)=='number'?
					-$usub13:
					$p['op_usub']($usub13))));
				$pyjs.track.lineno=257;
				self['assertTrue']($p['op_eq']($p['cmp'](l4, l3), $constant_int_1));
				$pyjs.track.lineno=258;
				self['assertTrue']($p['op_eq'](l1, l3), 'l1 == l3');
				$pyjs.track.lineno=259;
				self['assertTrue'](((($cmp1=l1)===($cmp2=l2)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1), 'l1 > l2');
				$pyjs.track.lineno=260;
				self['assertTrue'](((((($cmp3=l1)===($cmp4=l2)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))))|1) == 1), 'l1 >= l2');
				$pyjs.track.lineno=261;
				self['assertTrue'](((($cmp5=l2)===($cmp6=l1)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1), 'l2 < l1');
				$pyjs.track.lineno=262;
				self['assertTrue'](((($cmp7=l2)===($cmp8=l1)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) < 1), 'l2 <= l1');
				$pyjs.track.lineno=264;
				b1 = (typeof B == "undefined"?$m.B:B)();
				$pyjs.track.lineno=265;
				b2 = (typeof B == "undefined"?$m.B:B)();
				$pyjs.track.lineno=266;
				l1 = $p['list']([b1, b2]);
				$pyjs.track.lineno=267;
				l2 = $p['list']([b2, b1]);
				$pyjs.track.lineno=268;
				self['assertFalse']($p['op_eq'](l1, l2), 'TODO: cmp() plain objects fails');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCmp'] = $method;
			$pyjs.track.lineno=270;
			$method = $pyjs__bind_method2('testCmpListTuple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l1,t1;
				$pyjs.track={module:'ListTest', lineno:270};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=270;
				$pyjs.track.lineno=271;
				t1 = $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=272;
				l1 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=274;
				self['assertFalse']($p['op_eq'](l1, t1));
				$pyjs.track.lineno=275;
				self['assertTrue']($p['op_eq']($p['cmp'](l1, t1), (typeof ($usub14=$constant_int_1)=='number'?
					-$usub14:
					$p['op_usub']($usub14))));
				$pyjs.track.lineno=276;
				self['assertTrue']($p['op_eq']($p['cmp'](t1, l1), $constant_int_1));
				$pyjs.track.lineno=277;
				self['assertTrue'](!$p['op_eq'](l1, t1), 'l1 != t1');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCmpListTuple'] = $method;
			$pyjs.track.lineno=279;
			$method = $pyjs__bind_method2('testSortCmp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$116,$114,$115,$113,$117,$118,l2,l1;
				$pyjs.track={module:'ListTest', lineno:279};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=279;
				$pyjs.track.lineno=280;
				a = (typeof A == "undefined"?$m.A:A)();
				$pyjs.track.lineno=281;
				l1 = $p['list']([a, $constant_int_1]);
				$pyjs.track.lineno=282;
				l1['sort']();
				$pyjs.track.lineno=283;
				l2 = $p['list']([$constant_int_1, a]);
				$pyjs.track.lineno=284;
				l2['sort']();
				$pyjs.track.lineno=285;
				self['assertTrue']($p['op_is']((typeof ($113=l1).__array != 'undefined'?
					((typeof $113.__array[$114=$constant_int_0]) != 'undefined'?$113.__array[$114]:
						$113.__getitem__($114)):
						$113.__getitem__($constant_int_0)), a));
				$pyjs.track.lineno=286;
				self['assertTrue']($p['op_is']((typeof ($115=l2).__array != 'undefined'?
					((typeof $115.__array[$116=$constant_int_0]) != 'undefined'?$115.__array[$116]:
						$115.__getitem__($116)):
						$115.__getitem__($constant_int_0)), a));
				$pyjs.track.lineno=287;
				self['assertFalse']($p['op_eq']((typeof ($117=l1).__array != 'undefined'?
					((typeof $117.__array[$118=$constant_int_0]) != 'undefined'?$117.__array[$118]:
						$117.__getitem__($118)):
						$117.__getitem__($constant_int_0)), a));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSortCmp'] = $method;
			$pyjs.track.lineno=289;
			$method = $pyjs__bind_method2('testReverse', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l,$119,$122,$121,$120;
				$pyjs.track={module:'ListTest', lineno:289};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=289;
				$pyjs.track.lineno=290;
				l = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=291;
				l['reverse']();
				$pyjs.track.lineno=292;
				self['assertEqual']((typeof ($119=l).__array != 'undefined'?
					((typeof $119.__array[$120=$constant_int_0]) != 'undefined'?$119.__array[$120]:
						$119.__getitem__($120)):
						$119.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=293;
				self['assertEqual']((typeof ($121=l).__array != 'undefined'?
					((typeof $121.__array[$122=$constant_int_2]) != 'undefined'?$121.__array[$122]:
						$121.__getitem__($122)):
						$121.__getitem__($constant_int_2)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReverse'] = $method;
			$pyjs.track.lineno=295;
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
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $130,$131,$132,$len20,$129,$128,$123,$127,$126,$125,$124,$len15,$len16,$len17,$len18,$len19,l6,l4,l5,l2,l3,l1;
				$pyjs.track={module:'ListTest', lineno:295};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=295;
				$pyjs.track.lineno=296;
				l1 = $p['list']();
				$pyjs.track.lineno=297;
				self['assertEqual']((($len15=l1) === null?$constant_int_0:
					(typeof $len15.__array != 'undefined' ? new $p['int']($len15.__array.length):
						(typeof $len15.__len__ == 'function'?$len15.__len__():
							(typeof $len15.length != 'undefined'? new $p['int']($len15.length):
								$p['len']($len15))))), $constant_int_0);
				$pyjs.track.lineno=300;
				l2 = $p['list']();
				$pyjs.track.lineno=301;
				self['assertEqual']((($len16=l2) === null?$constant_int_0:
					(typeof $len16.__array != 'undefined' ? new $p['int']($len16.__array.length):
						(typeof $len16.__len__ == 'function'?$len16.__len__():
							(typeof $len16.length != 'undefined'? new $p['int']($len16.length):
								$p['len']($len16))))), $constant_int_0);
				$pyjs.track.lineno=303;
				l3 = $p['list']($p['list']([]));
				$pyjs.track.lineno=304;
				self['assertEqual']((($len17=l3) === null?$constant_int_0:
					(typeof $len17.__array != 'undefined' ? new $p['int']($len17.__array.length):
						(typeof $len17.__len__ == 'function'?$len17.__len__():
							(typeof $len17.length != 'undefined'? new $p['int']($len17.length):
								$p['len']($len17))))), $constant_int_0);
				$pyjs.track.lineno=306;
				l4 = $p['list']($p['list']([$constant_int_10]));
				$pyjs.track.lineno=307;
				self['assertEqual']((($len18=l4) === null?$constant_int_0:
					(typeof $len18.__array != 'undefined' ? new $p['int']($len18.__array.length):
						(typeof $len18.__len__ == 'function'?$len18.__len__():
							(typeof $len18.length != 'undefined'? new $p['int']($len18.length):
								$p['len']($len18))))), $constant_int_1);
				$pyjs.track.lineno=308;
				self['assertEqual']((typeof ($123=l4).__array != 'undefined'?
					((typeof $123.__array[$124=$constant_int_0]) != 'undefined'?$123.__array[$124]:
						$123.__getitem__($124)):
						$123.__getitem__($constant_int_0)), $constant_int_10);
				$pyjs.track.lineno=310;
				l5 = $p['list']($p['range']($constant_int_10, $constant_int_40, $constant_int_10));
				$pyjs.track.lineno=311;
				self['assertEqual']((($len19=l5) === null?$constant_int_0:
					(typeof $len19.__array != 'undefined' ? new $p['int']($len19.__array.length):
						(typeof $len19.__len__ == 'function'?$len19.__len__():
							(typeof $len19.length != 'undefined'? new $p['int']($len19.length):
								$p['len']($len19))))), $constant_int_3);
				$pyjs.track.lineno=312;
				self['assertEqual']((typeof ($125=l5).__array != 'undefined'?
					((typeof $125.__array[$126=$constant_int_0]) != 'undefined'?$125.__array[$126]:
						$125.__getitem__($126)):
						$125.__getitem__($constant_int_0)), $constant_int_10);
				$pyjs.track.lineno=313;
				self['assertEqual']((typeof ($127=l5).__array != 'undefined'?
					((typeof $127.__array[$128=$constant_int_1]) != 'undefined'?$127.__array[$128]:
						$127.__getitem__($128)):
						$127.__getitem__($constant_int_1)), $constant_int_20);
				$pyjs.track.lineno=314;
				self['assertEqual']((typeof ($129=l5).__array != 'undefined'?
					((typeof $129.__array[$130=$constant_int_2]) != 'undefined'?$129.__array[$130]:
						$129.__getitem__($130)):
						$129.__getitem__($constant_int_2)), $constant_int_30);
				$pyjs.track.lineno=316;
				l6 = $p['list'](l4);
				$pyjs.track.lineno=317;
				self['assertEqual']((($len20=l6) === null?$constant_int_0:
					(typeof $len20.__array != 'undefined' ? new $p['int']($len20.__array.length):
						(typeof $len20.__len__ == 'function'?$len20.__len__():
							(typeof $len20.length != 'undefined'? new $p['int']($len20.length):
								$p['len']($len20))))), $constant_int_1);
				$pyjs.track.lineno=318;
				self['assertEqual']((typeof ($131=l6).__array != 'undefined'?
					((typeof $131.__array[$132=$constant_int_0]) != 'undefined'?$131.__array[$132]:
						$131.__getitem__($132)):
						$131.__getitem__($constant_int_0)), $constant_int_10);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testConstructor'] = $method;
			$pyjs.track.lineno=320;
			$method = $pyjs__bind_method2('testRangeList', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var list1,list2;
				$pyjs.track={module:'ListTest', lineno:320};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=320;
				$pyjs.track.lineno=321;
				list1 = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=322;
				list2 = $p['range']($constant_int_0, $constant_int_4);
				$pyjs.track.lineno=323;
				self['assertTrue']($p['op_eq'](list1, list2));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRangeList'] = $method;
			$pyjs.track.lineno=325;
			$method = $pyjs__bind_method2('testExtend', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len24,$len21,$len23,$len22,$141,l,$142,$140,$138,$139,l4,l2,l3,$143,$144,$133,$134,$135,$136,$137;
				$pyjs.track={module:'ListTest', lineno:325};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=325;
				$pyjs.track.lineno=326;
				l = $p['list']([$constant_int_10, $constant_int_20]);
				$pyjs.track.lineno=327;
				l['extend']($p['list']([$constant_int_30, $constant_int_40]));
				$pyjs.track.lineno=328;
				self['assertEqual']((($len21=l) === null?$constant_int_0:
					(typeof $len21.__array != 'undefined' ? new $p['int']($len21.__array.length):
						(typeof $len21.__len__ == 'function'?$len21.__len__():
							(typeof $len21.length != 'undefined'? new $p['int']($len21.length):
								$p['len']($len21))))), $constant_int_4);
				$pyjs.track.lineno=329;
				self['assertEqual']((typeof ($133=l).__array != 'undefined'?
					((typeof $133.__array[$134=$constant_int_0]) != 'undefined'?$133.__array[$134]:
						$133.__getitem__($134)):
						$133.__getitem__($constant_int_0)), $constant_int_10);
				$pyjs.track.lineno=330;
				self['assertEqual']((typeof ($135=l).__array != 'undefined'?
					((typeof $135.__array[$136=$constant_int_1]) != 'undefined'?$135.__array[$136]:
						$135.__getitem__($136)):
						$135.__getitem__($constant_int_1)), $constant_int_20);
				$pyjs.track.lineno=331;
				self['assertEqual']((typeof ($137=l).__array != 'undefined'?
					((typeof $137.__array[$138=$constant_int_2]) != 'undefined'?$137.__array[$138]:
						$137.__getitem__($138)):
						$137.__getitem__($constant_int_2)), $constant_int_30);
				$pyjs.track.lineno=332;
				self['assertEqual']((typeof ($139=l).__array != 'undefined'?
					((typeof $139.__array[$140=$constant_int_3]) != 'undefined'?$139.__array[$140]:
						$139.__getitem__($140)):
						$139.__getitem__($constant_int_3)), $constant_int_40);
				$pyjs.track.lineno=334;
				l2 = $p['list']([$constant_int_10, $constant_int_20]);
				$pyjs.track.lineno=335;
				l2['extend']($p['list']([]));
				$pyjs.track.lineno=336;
				self['assertEqual']((($len22=l2) === null?$constant_int_0:
					(typeof $len22.__array != 'undefined' ? new $p['int']($len22.__array.length):
						(typeof $len22.__len__ == 'function'?$len22.__len__():
							(typeof $len22.length != 'undefined'? new $p['int']($len22.length):
								$p['len']($len22))))), $constant_int_2);
				$pyjs.track.lineno=338;
				l3 = $p['list']([]);
				$pyjs.track.lineno=339;
				l3['extend']($p['list']([$constant_int_10, $constant_int_20]));
				$pyjs.track.lineno=340;
				self['assertEqual']((($len23=l3) === null?$constant_int_0:
					(typeof $len23.__array != 'undefined' ? new $p['int']($len23.__array.length):
						(typeof $len23.__len__ == 'function'?$len23.__len__():
							(typeof $len23.length != 'undefined'? new $p['int']($len23.length):
								$p['len']($len23))))), $constant_int_2);
				$pyjs.track.lineno=341;
				self['assertEqual']((typeof ($141=l3).__array != 'undefined'?
					((typeof $141.__array[$142=$constant_int_0]) != 'undefined'?$141.__array[$142]:
						$141.__getitem__($142)):
						$141.__getitem__($constant_int_0)), $constant_int_10);
				$pyjs.track.lineno=342;
				self['assertEqual']((typeof ($143=l3).__array != 'undefined'?
					((typeof $143.__array[$144=$constant_int_1]) != 'undefined'?$143.__array[$144]:
						$143.__getitem__($144)):
						$143.__getitem__($constant_int_1)), $constant_int_20);
				$pyjs.track.lineno=344;
				l4 = $p['list']([]);
				$pyjs.track.lineno=345;
				l4['extend']($p['list']([]));
				$pyjs.track.lineno=346;
				self['assertEqual']((($len24=l4) === null?$constant_int_0:
					(typeof $len24.__array != 'undefined' ? new $p['int']($len24.__array.length):
						(typeof $len24.__len__ == 'function'?$len24.__len__():
							(typeof $len24.length != 'undefined'? new $p['int']($len24.length):
								$p['len']($len24))))), $constant_int_0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExtend'] = $method;
			$pyjs.track.lineno=348;
			$method = $pyjs__bind_method2('testIter2', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,i,$iter4_iter,$iter3_type,$iter4_idx,item,$add5,$add6,$iter3_iter,$iter4_type,$iter3_array,$iter4_array,$add8,$iter4_nextval,$pyjs__trackstack_size_1,$iter3_nextval,$add7;
				$pyjs.track={module:'ListTest', lineno:348};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=348;
				$pyjs.track.lineno=349;
				i = $constant_int_0;
				$pyjs.track.lineno=351;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					item = $iter3_nextval;
					$pyjs.track.lineno=352;
					self['assertEqual'](item, i);
					$pyjs.track.lineno=353;
					i = (typeof ($add5=i)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=355;
				i = $constant_int_0;
				$pyjs.track.lineno=356;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = $p['__getslice']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]), $constant_int_1, (typeof ($usub15=$constant_int_1)=='number'?
					-$usub15:
					$p['op_usub']($usub15)));
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					item = $iter4_nextval;
					$pyjs.track.lineno=357;
					i = (typeof ($add7=i)==typeof ($add8=item) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=358;
				self['assertEqual'](i, $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter2'] = $method;
			$pyjs.track.lineno=360;
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
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,item,i,l,it,$bool3,$pyjs_try_err,$add10,$145,$146;
				$pyjs.track={module:'ListTest', lineno:360};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=360;
				$pyjs.track.lineno=361;
				l = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=362;
				i = $constant_int_0;
				$pyjs.track.lineno=364;
				it = l['__iter__']();
				$pyjs.track.lineno=365;
				while ((($bool3=true) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=366;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=367;
						item = it['next']();
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
						$pyjs.track.module='ListTest';
						if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
							$pyjs.track.lineno=369;
							break;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=370;
					self['assertEqual'](item, (typeof ($145=l).__array != 'undefined'?
						((typeof $145.__array[$146=i]) != 'undefined'?$145.__array[$146]:
							$145.__getitem__($146)):
							$145.__getitem__(i)));
					$pyjs.track.lineno=371;
					i = (typeof ($add9=i)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter'] = $method;
			$pyjs.track.lineno=373;
			$method = $pyjs__bind_method2('testIndex', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e,l;
				$pyjs.track={module:'ListTest', lineno:373};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=373;
				$pyjs.track.lineno=374;
				l = $p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8]);
				$pyjs.track.lineno=375;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=376;
					self['assertEqual'](l['index']($constant_int_2), $constant_int_0);
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
					$pyjs.track.module='ListTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						$pyjs.track.lineno=378;
						self['fail']('ValueError raised when not expected');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=380;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=381;
					l['index']($constant_int_200000);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=389;
						self['fail']('ValueError not raised');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ListTest';
						if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							e = $pyjs_try_err;
							$pyjs.track.lineno=383;
							$pyjs.track.lineno=384;
							self['assertIn']($p['str'](e), $p['list'](['list.index(x): x not in list', '200000 is not in list']), 'ValueError exception has incorrect message');
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.track.lineno=392;
				l = $p['list']([$p['list']([$constant_int_1]), $p['list']([$constant_int_2]), $p['list']([$constant_int_3])]);
				$pyjs.track.lineno=393;
				self['assertEqual'](l['index']($p['list']([$constant_int_2])), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIndex'] = $method;
			$pyjs.track.lineno=395;
			$method = $pyjs__bind_method2('testIndexClass', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $152,$153,$150,$151,$156,$157,$154,$155,$158,$159,$len25,$len27,$len26,$len29,$len28,$170,$167,$166,$165,$164,$149,$148,$161,$160,$147,$169,$168,l,$163,$162;
				$pyjs.track={module:'ListTest', lineno:395};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=395;
				$pyjs.track.lineno=397;
				l = $m['get_test_letters']();
				$pyjs.track.lineno=398;
				self['assertEqual']($p['getattr']((typeof ($147=l).__array != 'undefined'?
					((typeof $147.__array[$148=$constant_int_0]) != 'undefined'?$147.__array[$148]:
						$147.__getitem__($148)):
						$147.__getitem__($constant_int_0)), 'letter'), 'g', '#413 index __cmp__ class issue');
				$pyjs.track.lineno=399;
				self['assertEqual']($p['getattr']((typeof ($149=l).__array != 'undefined'?
					((typeof $149.__array[$150=$constant_int_1]) != 'undefined'?$149.__array[$150]:
						$149.__getitem__($150)):
						$149.__getitem__($constant_int_1)), 'letter'), 'f', '#413 index __cmp__ class issue');
				$pyjs.track.lineno=400;
				self['assertEqual']($p['getattr']((typeof ($153=(typeof ($151=l).__array != 'undefined'?
					((typeof $151.__array[$152=$constant_int_0]) != 'undefined'?$151.__array[$152]:
						$151.__getitem__($152)):
						$151.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $153.__array[$154=$constant_int_0]) != 'undefined'?$153.__array[$154]:
						$153.__getitem__($154)):
						$153.__getitem__($constant_int_0)), 'letter'), 'o', '#413 index __cmp__ class issue');
				$pyjs.track.lineno=401;
				self['assertEqual']($p['getattr']((typeof ($157=(typeof ($155=l).__array != 'undefined'?
					((typeof $155.__array[$156=$constant_int_1]) != 'undefined'?$155.__array[$156]:
						$155.__getitem__($156)):
						$155.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $157.__array[$158=$constant_int_0]) != 'undefined'?$157.__array[$158]:
						$157.__getitem__($158)):
						$157.__getitem__($constant_int_0)), 'letter'), 'r', '#413 index __cmp__ class issue');
				$pyjs.track.lineno=402;
				self['assertEqual']((($len25=l) === null?$constant_int_0:
					(typeof $len25.__array != 'undefined' ? new $p['int']($len25.__array.length):
						(typeof $len25.__len__ == 'function'?$len25.__len__():
							(typeof $len25.length != 'undefined'? new $p['int']($len25.length):
								$p['len']($len25))))), $constant_int_2, '#413 index __cmp__ class issue');
				$pyjs.track.lineno=403;
				self['assertEqual']((($len26=(typeof ($159=l).__array != 'undefined'?
					((typeof $159.__array[$160=$constant_int_0]) != 'undefined'?$159.__array[$160]:
						$159.__getitem__($160)):
						$159.__getitem__($constant_int_0))) === null?$constant_int_0:
					(typeof $len26.__array != 'undefined' ? new $p['int']($len26.__array.length):
						(typeof $len26.__len__ == 'function'?$len26.__len__():
							(typeof $len26.length != 'undefined'? new $p['int']($len26.length):
								$p['len']($len26))))), $constant_int_1, '#413 index __cmp__ class issue');
				$pyjs.track.lineno=404;
				self['assertEqual']((($len27=(typeof ($161=l).__array != 'undefined'?
					((typeof $161.__array[$162=$constant_int_1]) != 'undefined'?$161.__array[$162]:
						$161.__getitem__($162)):
						$161.__getitem__($constant_int_1))) === null?$constant_int_0:
					(typeof $len27.__array != 'undefined' ? new $p['int']($len27.__array.length):
						(typeof $len27.__len__ == 'function'?$len27.__len__():
							(typeof $len27.length != 'undefined'? new $p['int']($len27.length):
								$p['len']($len27))))), $constant_int_1, '#413 index __cmp__ class issue');
				$pyjs.track.lineno=405;
				self['assertEqual']((($len28=(typeof ($165=(typeof ($163=l).__array != 'undefined'?
					((typeof $163.__array[$164=$constant_int_0]) != 'undefined'?$163.__array[$164]:
						$163.__getitem__($164)):
						$163.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $165.__array[$166=$constant_int_0]) != 'undefined'?$165.__array[$166]:
						$165.__getitem__($166)):
						$165.__getitem__($constant_int_0))) === null?$constant_int_0:
					(typeof $len28.__array != 'undefined' ? new $p['int']($len28.__array.length):
						(typeof $len28.__len__ == 'function'?$len28.__len__():
							(typeof $len28.length != 'undefined'? new $p['int']($len28.length):
								$p['len']($len28))))), $constant_int_1, '#413 index __cmp__ class issue');
				$pyjs.track.lineno=406;
				self['assertEqual']((($len29=(typeof ($169=(typeof ($167=l).__array != 'undefined'?
					((typeof $167.__array[$168=$constant_int_1]) != 'undefined'?$167.__array[$168]:
						$167.__getitem__($168)):
						$167.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $169.__array[$170=$constant_int_0]) != 'undefined'?$169.__array[$170]:
						$169.__getitem__($170)):
						$169.__getitem__($constant_int_0))) === null?$constant_int_0:
					(typeof $len29.__array != 'undefined' ? new $p['int']($len29.__array.length):
						(typeof $len29.__len__ == 'function'?$len29.__len__():
							(typeof $len29.length != 'undefined'? new $p['int']($len29.length):
								$p['len']($len29))))), $constant_int_2, '#413 index __cmp__ class issue');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIndexClass'] = $method;
			$pyjs.track.lineno=408;
			$method = $pyjs__bind_method2('testAugAssign', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var getlist,$174,$175,$176,$177,$mod1,$171,$172,$173,$178,$179,$mul2,$189,$188,$181,$180,$sub1,$182,$185,$184,$187,$186,$augexpr1,$augexpr2,$198,$202,$200,$201,$augsub2,$augsub1,$add14,$add15,$add16,$add17,$add11,$add12,$sub2,$div2,$div1,$add18,$183,$mul1,getidx,a,$mod2,l,$add13,$199,$196,$197,$194,$195,$192,$193,$190,$191;
				$pyjs.track={module:'ListTest', lineno:408};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=408;
				$pyjs.track.lineno=409;
				l = $p['list']([$constant_int_10, 10.0]);
				$pyjs.track.lineno=410;
				getidx = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'ListTest',lineno:410};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ListTest';
					$pyjs.track.lineno=410;
					$pyjs.track.lineno=411;
					$pyjs.track.lineno=411;
					var $pyjs__ret = x;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				getidx.__name__ = 'getidx';

				getidx.__bind_type__ = 0;
				getidx.__args__ = [null,null,['x']];
				$pyjs.track.lineno=412;
				getlist = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'ListTest',lineno:412};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ListTest';
					$pyjs.track.lineno=412;
					$pyjs.track.lineno=413;
					$pyjs.track.lineno=413;
					var $pyjs__ret = l;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				getlist.__name__ = 'getlist';

				getlist.__bind_type__ = 0;
				getlist.__args__ = [null,null];
				$pyjs.track.lineno=414;
				l.__setitem__($constant_int_0, (typeof ($add11=(typeof ($171=l).__array != 'undefined'?
					((typeof $171.__array[$172=$constant_int_0]) != 'undefined'?$171.__array[$172]:
						$171.__getitem__($172)):
						$171.__getitem__($constant_int_0)))==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)));
				$pyjs.track.lineno=415;
				self['assertEqual']((typeof ($173=l).__array != 'undefined'?
					((typeof $173.__array[$174=$constant_int_0]) != 'undefined'?$173.__array[$174]:
						$173.__getitem__($174)):
						$173.__getitem__($constant_int_0)), $constant_int_11);
				$pyjs.track.lineno=416;
				l.__setitem__($constant_int_0, (typeof ($sub1=(typeof ($175=l).__array != 'undefined'?
					((typeof $175.__array[$176=$constant_int_0]) != 'undefined'?$175.__array[$176]:
						$175.__getitem__($176)):
						$175.__getitem__($constant_int_0)))==typeof ($sub2=$constant_int_2) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)));
				$pyjs.track.lineno=417;
				self['assertEqual']((typeof ($177=l).__array != 'undefined'?
					((typeof $177.__array[$178=$constant_int_0]) != 'undefined'?$177.__array[$178]:
						$177.__getitem__($178)):
						$177.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=418;
				l.__setitem__($constant_int_0, (typeof ($div1=(typeof ($179=l).__array != 'undefined'?
					((typeof $179.__array[$180=$constant_int_0]) != 'undefined'?$179.__array[$180]:
						$179.__getitem__($180)):
						$179.__getitem__($constant_int_0)))==typeof ($div2=$constant_int_3) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)));
				$pyjs.track.lineno=419;
				self['assertEqual']((typeof ($181=l).__array != 'undefined'?
					((typeof $181.__array[$182=$constant_int_0]) != 'undefined'?$181.__array[$182]:
						$181.__getitem__($182)):
						$181.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=420;
				l.__setitem__($constant_int_0, (typeof ($mul1=(typeof ($183=l).__array != 'undefined'?
					((typeof $183.__array[$184=$constant_int_0]) != 'undefined'?$183.__array[$184]:
						$183.__getitem__($184)):
						$183.__getitem__($constant_int_0)))==typeof ($mul2=$constant_int_9) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				$pyjs.track.lineno=421;
				self['assertEqual']((typeof ($185=l).__array != 'undefined'?
					((typeof $185.__array[$186=$constant_int_0]) != 'undefined'?$185.__array[$186]:
						$185.__getitem__($186)):
						$185.__getitem__($constant_int_0)), $constant_int_27);
				$pyjs.track.lineno=422;
				l.__setitem__($constant_int_0, (typeof ($mod1=(typeof ($187=l).__array != 'undefined'?
					((typeof $187.__array[$188=$constant_int_0]) != 'undefined'?$187.__array[$188]:
						$187.__getitem__($188)):
						$187.__getitem__($constant_int_0)))==typeof ($mod2=$constant_int_5) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)));
				$pyjs.track.lineno=423;
				self['assertEqual']((typeof ($189=l).__array != 'undefined'?
					((typeof $189.__array[$190=$constant_int_0]) != 'undefined'?$189.__array[$190]:
						$189.__getitem__($190)):
						$189.__getitem__($constant_int_0)), $constant_int_2);
				$pyjs.track.lineno=424;
				a = $constant_int_0;
				$pyjs.track.lineno=425;
				l.__setitem__(a, (typeof ($add13=(typeof ($191=l).__array != 'undefined'?
					((typeof $191.__array[$192=a]) != 'undefined'?$191.__array[$192]:
						$191.__getitem__($192)):
						$191.__getitem__(a)))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)));
				$pyjs.track.lineno=426;
				self['assertEqual']((typeof ($193=l).__array != 'undefined'?
					((typeof $193.__array[$194=$constant_int_0]) != 'undefined'?$193.__array[$194]:
						$193.__getitem__($194)):
						$193.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=427;
				var $augsub1 = getidx($constant_int_0);
				var $augexpr1 = l;
				$augexpr1.__setitem__($augsub1, (typeof ($add15=(typeof ($195=$augexpr1).__array != 'undefined'?
					((typeof $195.__array[$196=$augsub1]) != 'undefined'?$195.__array[$196]:
						$195.__getitem__($196)):
						$195.__getitem__($augsub1)))==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)));
				$pyjs.track.lineno=428;
				self['assertEqual']((typeof ($197=l).__array != 'undefined'?
					((typeof $197.__array[$198=$constant_int_0]) != 'undefined'?$197.__array[$198]:
						$197.__getitem__($198)):
						$197.__getitem__($constant_int_0)), $constant_int_4);
				$pyjs.track.lineno=429;
				var $augsub2 = getidx($constant_int_0);
				var $augexpr2 = getlist();
				$augexpr2.__setitem__($augsub2, (typeof ($add17=(typeof ($199=$augexpr2).__array != 'undefined'?
					((typeof $199.__array[$200=$augsub2]) != 'undefined'?$199.__array[$200]:
						$199.__getitem__($200)):
						$199.__getitem__($augsub2)))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)));
				$pyjs.track.lineno=430;
				self['assertEqual']((typeof ($201=l).__array != 'undefined'?
					((typeof $201.__array[$202=$constant_int_0]) != 'undefined'?$201.__array[$202]:
						$201.__getitem__($202)):
						$201.__getitem__($constant_int_0)), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAugAssign'] = $method;
			$pyjs.track.lineno=432;
			$method = $pyjs__bind_method2('testListComp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l1,l,$cmp15,$cmp17,$cmp16,vec2,vec1,l2,$cmp18;
				$pyjs.track={module:'ListTest', lineno:432};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=432;
				$pyjs.track.lineno=433;
				l1 = $p['list'](['a', 'b', 'c']);
				$pyjs.track.lineno=434;
				l2 = function(){
					var $iter5_nextval,i,$iter5_idx,$pyjs__trackstack_size_1,$collcomp1,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = l1;
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
				$pyjs.track.module='ListTest';

	return $collcomp1;}();
				$pyjs.track.lineno=435;
				self['assertTrue']($p['op_eq'](l1, l2), 'simple');
				$pyjs.track.lineno=437;
				vec1 = $p['list']([$constant_int_1, $constant_int_3, $constant_int_5]);
				$pyjs.track.lineno=438;
				vec2 = $p['list']([$constant_int_2, $constant_int_4, $constant_int_6]);
				$pyjs.track.lineno=439;
				l = function(){
					var $iter6_idx,$iter6_type,$cmp9,$collcomp2,$iter6_array,$cmp10,$bool4,$pyjs__trackstack_size_1,x,$iter6_iter,$mul4,$mul3,$iter6_nextval;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = vec1;
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					x = $iter6_nextval;
					$pyjs.track.lineno=439;
					if ((($bool4=((((($cmp9=x)===($cmp10=$constant_int_3)?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						$collcomp2['append']((typeof ($mul3=$constant_int_3)==typeof ($mul4=x) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)));
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ListTest';

	return $collcomp2;}();
				$pyjs.track.lineno=440;
				self['assertTrue']($p['op_eq'](l, $p['list']([$constant_int_9, $constant_int_15])), 'conditional');
				$pyjs.track.lineno=442;
				l = function(){
					var $bool6,$cmp12,$iter8_idx,$iter8_array,$iter7_nextval,$cmp14,$iter7_iter,$iter8_type,$iter7_array,$collcomp3,$iter8_iter,$pyjs__trackstack_size_2,$cmp11,$iter8_nextval,$cmp13,$iter7_idx,y,x,$bool5,$iter7_type,$pyjs__trackstack_size_1;
	$collcomp3 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = vec1;
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					x = $iter7_nextval;
					$pyjs.track.lineno=442;
					if ((($bool5=((((($cmp11=x)===($cmp12=$constant_int_3)?0:
						(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
							($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
							$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						$pyjs.track.lineno=442;
						$pyjs__trackstack_size_2=$pyjs.trackstack.length;
						$iter8_iter = vec2;
						if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
							$iter8_type = 0;
						} else {
							$iter8_iter = $iter8_iter.__iter__();
							$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter8_idx = 0;
						while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
							y = $iter8_nextval;
							$pyjs.track.lineno=442;
							if ((($bool6=((($cmp13=y)===($cmp14=$constant_int_3)?0:
								(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
									($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
									$p['cmp']($cmp13, $cmp14))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
								$collcomp3['append']($p['tuple']([x, y]));
							}
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ListTest';
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ListTest';

	return $collcomp3;}();
				$pyjs.track.lineno=443;
				self['assertTrue']($p['op_eq'](l, $p['list']([$p['tuple']([$constant_int_3, $constant_int_4]), $p['tuple']([$constant_int_3, $constant_int_6]), $p['tuple']([$constant_int_5, $constant_int_4]), $p['tuple']([$constant_int_5, $constant_int_6])])), 'double');
				$pyjs.track.lineno=445;
				l = function(){
					var $iter9_iter,i,$collcomp4,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs__trackstack_size_1,$iter9_array;
	$collcomp4 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter9_iter = function(){
					var $iter10_nextval,$collcomp5,j,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx;
	$collcomp5 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter10_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					j = $iter10_nextval;
					$collcomp5['append'](j);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ListTest';

	return $collcomp5;}();
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					$collcomp4['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ListTest';

	return $collcomp4;}();
				$pyjs.track.lineno=446;
				self['assertTrue']($p['op_eq'](l, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3])));
				$pyjs.track.lineno=448;
				self['assertTrue'](((($cmp15=$p['list']([$constant_int_1]))===($cmp16=$p['list']([$constant_int_0, $constant_int_1]))?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1), '[1] > [0,1]');
				$pyjs.track.lineno=449;
				self['assertTrue'](((($cmp17=$p['list']([$constant_int_0, $constant_int_1]))===($cmp18=$p['list']([$constant_int_1]))?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1), '[0,1] < [1]');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testListComp'] = $method;
			$pyjs.track.lineno=451;
			$method = $pyjs__bind_method2('testListContains', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l;
				$pyjs.track={module:'ListTest', lineno:451};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=451;
				$pyjs.track.lineno=452;
				l = $p['list']([$p['list'](['monkey']), $p['list'](['patch']), $p['list'](['fish']), $p['list'](['chips'])]);
				$pyjs.track.lineno=453;
				self['assertTrue'](l.__contains__($p['list'](['fish'])), "['fish'] in l");
				$pyjs.track.lineno=455;
				l = $p['list']([$p['dict']([['monkey', $constant_int_1]]), $p['dict']([['patch', $constant_int_1]]), $p['dict']([['fish', $constant_int_1]]), $p['dict']([['chips', $constant_int_1]])]);
				$pyjs.track.lineno=456;
				self['assertTrue'](l.__contains__($p['dict']([['fish', $constant_int_1]])), "{'fish':1} in l");
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testListContains'] = $method;
			$pyjs.track.lineno=458;
			$method = $pyjs__bind_method2('testExtendedSlicing', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,c,b,$cmp20,$bool7,$mul8,$mul7,$mul6,$mul5,$cmp19;
				$pyjs.track={module:'ListTest', lineno:458};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=458;
				$pyjs.track.lineno=460;
				self['fail']('Bug #xxx - need better __setitem__ implementation for builtin lists');
				$pyjs.track.lineno=461;
				$pyjs.track.lineno=461;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
				$pyjs.track.lineno=464;
				a = $p['range']($constant_int_20);
				$pyjs.track.lineno=465;
				a.__setitem__($p['slice']($constant_int_2, $constant_int_10, $constant_int_3), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=466;
				self['assertEqual'](a, $p['list']([$constant_int_0, $constant_int_1, $constant_int_1, $constant_int_3, $constant_int_4, $constant_int_2, $constant_int_6, $constant_int_7, $constant_int_3, $constant_int_9, $constant_int_10, $constant_int_11, $constant_int_12, $constant_int_13, $constant_int_14, $constant_int_15, $constant_int_16, $constant_int_17, $constant_int_18, $constant_int_19]));
				$pyjs.track.lineno=471;
				a = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=472;
				a.__delitem__($p['slice'](null, null, $constant_int_2));
				$pyjs.track.lineno=473;
				self['assertEqual'](a, $p['list']([$constant_int_1, $constant_int_3]));
				$pyjs.track.lineno=475;
				a = $p['range']($constant_int_5);
				$pyjs.track.lineno=476;
				a.__delitem__($p['slice']($constant_int_1, null, $constant_int_2));
				$pyjs.track.lineno=477;
				self['assertEqual'](a, $p['list']([$constant_int_0, $constant_int_2, $constant_int_4]));
				$pyjs.track.lineno=479;
				a = $p['range']($constant_int_5);
				$pyjs.track.lineno=480;
				a.__delitem__($p['slice']($constant_int_1, null, (typeof ($usub16=$constant_int_2)=='number'?
					-$usub16:
					$p['op_usub']($usub16))));
				$pyjs.track.lineno=481;
				self['assertEqual'](a, $p['list']([$constant_int_0, $constant_int_2, $constant_int_3, $constant_int_4]));
				$pyjs.track.lineno=483;
				a = $p['range']($constant_int_10);
				$pyjs.track.lineno=484;
				a.__delitem__($p['slice'](null, null, $constant_int_1000));
				$pyjs.track.lineno=485;
				self['assertEqual'](a, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_8, $constant_int_9]));
				$pyjs.track.lineno=488;
				a = $p['range']($constant_int_10);
				$pyjs.track.lineno=489;
				a.__setitem__($p['slice'](null, null, $constant_int_2), (typeof ($mul5=$p['list']([(typeof ($usub17=$constant_int_1)=='number'?
					-$usub17:
					$p['op_usub']($usub17))]))==typeof ($mul6=$constant_int_5) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
				$pyjs.track.lineno=490;
				self['assertEqual'](a, $p['list']($p['list']([(typeof ($usub18=$constant_int_1)=='number'?
					-$usub18:
					$p['op_usub']($usub18)), $constant_int_1, (typeof ($usub19=$constant_int_1)=='number'?
					-$usub19:
					$p['op_usub']($usub19)), $constant_int_3, (typeof ($usub20=$constant_int_1)=='number'?
					-$usub20:
					$p['op_usub']($usub20)), $constant_int_5, (typeof ($usub21=$constant_int_1)=='number'?
					-$usub21:
					$p['op_usub']($usub21)), $constant_int_7, (typeof ($usub22=$constant_int_1)=='number'?
					-$usub22:
					$p['op_usub']($usub22)), $constant_int_9])));
				$pyjs.track.lineno=492;
				a = $p['list']($p['range']($constant_int_10));
				$pyjs.track.lineno=493;
				a.__setitem__($p['slice'](null, null, (typeof ($usub23=$constant_int_4)=='number'?
					-$usub23:
					$p['op_usub']($usub23))), (typeof ($mul7=$p['list']([$constant_int_10]))==typeof ($mul8=$constant_int_3) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)));
				$pyjs.track.lineno=494;
				self['assertEqual'](a, $p['list']($p['list']([$constant_int_0, $constant_int_10, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_10, $constant_int_6, $constant_int_7, $constant_int_8, $constant_int_10])));
				$pyjs.track.lineno=496;
				a = $p['list']($p['range']($constant_int_4));
				$pyjs.track.lineno=497;
				a.__setitem__($p['slice'](null, null, (typeof ($usub24=$constant_int_1)=='number'?
					-$usub24:
					$p['op_usub']($usub24))), a);
				$pyjs.track.lineno=498;
				self['assertEqual'](a, $p['list']($p['list']([$constant_int_3, $constant_int_2, $constant_int_1, $constant_int_0])));
				$pyjs.track.lineno=500;
				a = $p['list']($p['range']($constant_int_10));
				$pyjs.track.lineno=501;
				b = $p['__getslice'](a, 0, null);
				$pyjs.track.lineno=502;
				c = $p['__getslice'](a, 0, null);
				$pyjs.track.lineno=503;
				$p['__setslice'](a, $constant_int_2, $constant_int_3, $p['list']($p['list'](['two', 'elements'])));
				$pyjs.track.lineno=504;
				b.__setitem__($p['slice']($constant_int_2, $constant_int_3), $p['list']($p['list'](['two', 'elements'])));
				$pyjs.track.lineno=505;
				c.__setitem__($p['slice']($constant_int_2, $constant_int_3, null), $p['list']($p['list'](['two', 'elements'])));
				$pyjs.track.lineno=506;
				self['assertEqual'](a, b);
				$pyjs.track.lineno=507;
				self['assertEqual'](a, c);
				$pyjs.track.lineno=509;
				a = $p['list']($p['range']($constant_int_10));
				$pyjs.track.lineno=510;
				a.__setitem__($p['slice'](null, null, $constant_int_2), $p['tuple']($p['range']($constant_int_5)));
				$pyjs.track.lineno=511;
				self['assertEqual'](a, $p['list']($p['list']([$constant_int_0, $constant_int_1, $constant_int_1, $constant_int_3, $constant_int_2, $constant_int_5, $constant_int_3, $constant_int_7, $constant_int_4, $constant_int_9])));
				$pyjs.track.lineno=514;
				if ((($bool7=((($cmp19=$p['getattr']($m['sys'], 'version_info'))===($cmp20=$p['tuple']([$constant_int_2, $constant_int_5, $constant_int_5]))?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$pyjs.track.lineno=515;
					$pyjs.track.lineno=515;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=517;
				a = $p['list']($p['range']($constant_int_10));
				$pyjs.track.lineno=518;
				a.__delitem__($p['slice']($constant_int_9, null, $p['op_bitshiftleft']($constant_int_1,$constant_int_333)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExtendedSlicing'] = $method;
			$pyjs.track.lineno=520;
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
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ListTest', lineno:520};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=520;
				$pyjs.track.lineno=521;
				self['assertEqual']($p['str']($p['list']([$constant_int_0, $constant_int_1])), '[0, 1]');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStr'] = $method;
			$pyjs.track.lineno=523;
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
					if (self.prototype.__md5__ !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ListTest', lineno:523};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=523;
				$pyjs.track.lineno=524;
				self['assertEqual']($p['repr']($p['list']([$constant_int_0, $constant_int_1])), '[0, 1]');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRepr'] = $method;
			$pyjs.track.lineno=35;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ListTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=527;
		$m['A'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ListTest';
			$cls_definition.__md5__ = '25932ecc61dada22df92637f0c55ec73';
			$pyjs.track.lineno=528;
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
					if (self.prototype.__md5__ !== '25932ecc61dada22df92637f0c55ec73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ListTest', lineno:528};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ListTest';
				$pyjs.track.lineno=528;
				$pyjs.track.lineno=529;
				$pyjs.track.lineno=529;
				var $pyjs__ret = (typeof ($usub25=$constant_int_1)=='number'?
					-$usub25:
					$p['op_usub']($usub25));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__cmp__'] = $method;
			$pyjs.track.lineno=527;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('A', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=531;
		$m['B'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ListTest';
			$cls_definition.__md5__ = 'ee13f5f8145cf02ed13749f4dda5f903';
			$pyjs.track.lineno=532;
			$pyjs.track.lineno=531;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('B', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=534;
		$m['delete_value'] = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]);
		$pyjs.track.lineno=535;
		$m['delete_value'].__delitem__($constant_int_3);
		$pyjs.track.lineno=536;
		$p['__delslice']($m['delete_value'], $constant_int_2, $constant_int_3)
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ListTest */


/* end module: ListTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_JS', 'sys']
*/
