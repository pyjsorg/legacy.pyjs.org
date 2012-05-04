/* start module: ArgsTest */
$pyjs.loaded_modules['ArgsTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ArgsTest'].__was_initialized__) return $pyjs.loaded_modules['ArgsTest'];
	var $m = $pyjs.loaded_modules["ArgsTest"];
	$m.__repr__ = function() { return "<module: ArgsTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ArgsTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'ArgsTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'ArgsTest.py, line 3:\n    def aArgs(*args):';
		$m.__track_lines__[4] = 'ArgsTest.py, line 4:\n    return args';
		$m.__track_lines__[6] = 'ArgsTest.py, line 6:\n    def ftest(a, b):';
		$m.__track_lines__[7] = 'ArgsTest.py, line 7:\n    return [a, b]';
		$m.__track_lines__[9] = 'ArgsTest.py, line 9:\n    class ArgsTest(UnitTest):';
		$m.__track_lines__[11] = 'ArgsTest.py, line 11:\n    def testNaming1(self):';
		$m.__track_lines__[12] = 'ArgsTest.py, line 12:\n    values = ftest(1, 2)';
		$m.__track_lines__[13] = 'ArgsTest.py, line 13:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[14] = 'ArgsTest.py, line 14:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[16] = 'ArgsTest.py, line 16:\n    def testNaming2(self):';
		$m.__track_lines__[17] = 'ArgsTest.py, line 17:\n    values = ftest(a=1, b=2)';
		$m.__track_lines__[18] = 'ArgsTest.py, line 18:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[19] = 'ArgsTest.py, line 19:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[21] = 'ArgsTest.py, line 21:\n    def testNaming3(self):';
		$m.__track_lines__[22] = 'ArgsTest.py, line 22:\n    values = ftest(1, b=2)';
		$m.__track_lines__[23] = 'ArgsTest.py, line 23:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[24] = 'ArgsTest.py, line 24:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[26] = 'ArgsTest.py, line 26:\n    def testNaming4(self):';
		$m.__track_lines__[27] = 'ArgsTest.py, line 27:\n    exc_raised = False';
		$m.__track_lines__[28] = 'ArgsTest.py, line 28:\n    try:';
		$m.__track_lines__[29] = 'ArgsTest.py, line 29:\n    values = ftest(1, c=2)';
		$m.__track_lines__[31] = 'ArgsTest.py, line 31:\n    exc_raised = True';
		$m.__track_lines__[32] = 'ArgsTest.py, line 32:\n    self.assertTrue(exc_raised, "TypeError \'c\' unexpected arg not raised")';
		$m.__track_lines__[34] = 'ArgsTest.py, line 34:\n    def testNaming5(self):';
		$m.__track_lines__[35] = 'ArgsTest.py, line 35:\n    exc_raised = False';
		$m.__track_lines__[36] = 'ArgsTest.py, line 36:\n    try:';
		$m.__track_lines__[37] = 'ArgsTest.py, line 37:\n    values = ftest()';
		$m.__track_lines__[39] = 'ArgsTest.py, line 39:\n    exc_raised = True';
		$m.__track_lines__[40] = 'ArgsTest.py, line 40:\n    self.assertTrue(exc_raised, "TypeError \'ftest() takes exactly 2 arguments (0 given)\' not raised")';
		$m.__track_lines__[42] = 'ArgsTest.py, line 42:\n    def testSimpleCall(self):';
		$m.__track_lines__[43] = 'ArgsTest.py, line 43:\n    values = foo(1, 2, 3)';
		$m.__track_lines__[44] = 'ArgsTest.py, line 44:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[45] = 'ArgsTest.py, line 45:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[46] = 'ArgsTest.py, line 46:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[48] = 'ArgsTest.py, line 48:\n    values = foo2(1, 2, 3)';
		$m.__track_lines__[49] = 'ArgsTest.py, line 49:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[50] = 'ArgsTest.py, line 50:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[51] = 'ArgsTest.py, line 51:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[53] = 'ArgsTest.py, line 53:\n    def testKeywordCall1(self):';
		$m.__track_lines__[54] = 'ArgsTest.py, line 54:\n    values = foo2(c=3, b=2, a=1)';
		$m.__track_lines__[55] = 'ArgsTest.py, line 55:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[56] = 'ArgsTest.py, line 56:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[57] = 'ArgsTest.py, line 57:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[59] = 'ArgsTest.py, line 59:\n    def testKeywordCall2(self):';
		$m.__track_lines__[60] = 'ArgsTest.py, line 60:\n    values = foo2(b=2, a=1, c=3)';
		$m.__track_lines__[61] = 'ArgsTest.py, line 61:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[62] = 'ArgsTest.py, line 62:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[63] = 'ArgsTest.py, line 63:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[65] = 'ArgsTest.py, line 65:\n    def testKeywordCall3(self):';
		$m.__track_lines__[66] = 'ArgsTest.py, line 66:\n    values = foo2(1, c=3)';
		$m.__track_lines__[67] = 'ArgsTest.py, line 67:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[68] = 'ArgsTest.py, line 68:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[69] = 'ArgsTest.py, line 69:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[71] = 'ArgsTest.py, line 71:\n    def testKeywordCall4(self):';
		$m.__track_lines__[72] = 'ArgsTest.py, line 72:\n    values = foo2()';
		$m.__track_lines__[73] = 'ArgsTest.py, line 73:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[74] = 'ArgsTest.py, line 74:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[75] = 'ArgsTest.py, line 75:\n    self.assertEquals(values[2], None)';
		$m.__track_lines__[77] = 'ArgsTest.py, line 77:\n    def testKeywordCall5(self):';
		$m.__track_lines__[78] = 'ArgsTest.py, line 78:\n    values = foo2(c=True)';
		$m.__track_lines__[79] = 'ArgsTest.py, line 79:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[80] = 'ArgsTest.py, line 80:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[81] = 'ArgsTest.py, line 81:\n    self.assertEquals(values[2], True)';
		$m.__track_lines__[83] = 'ArgsTest.py, line 83:\n    def testStarArgs(self):';
		$m.__track_lines__[84] = 'ArgsTest.py, line 84:\n    args = (1,2)';
		$m.__track_lines__[85] = 'ArgsTest.py, line 85:\n    res = aArgs(*args)';
		$m.__track_lines__[86] = 'ArgsTest.py, line 86:\n    self.assertEquals(args, res)';
		$m.__track_lines__[88] = 'ArgsTest.py, line 88:\n    args = "123"';
		$m.__track_lines__[89] = 'ArgsTest.py, line 89:\n    try:';
		$m.__track_lines__[90] = 'ArgsTest.py, line 90:\n    res = aArgs(*args)';
		$m.__track_lines__[91] = 'ArgsTest.py, line 91:\n    called = True';
		$m.__track_lines__[92] = 'ArgsTest.py, line 92:\n    exc = None';
		$m.__track_lines__[94] = 'ArgsTest.py, line 94:\n    called = False';
		$m.__track_lines__[95] = 'ArgsTest.py, line 95:\n    exc = e';
		$m.__track_lines__[99] = 'ArgsTest.py, line 99:\n    self.assertTrue(called,';
		$m.__track_lines__[101] = 'ArgsTest.py, line 101:\n    self.assertEquals(res, ("1", "2", "3"))';
		$m.__track_lines__[104] = 'ArgsTest.py, line 104:\n    args = 1';
		$m.__track_lines__[105] = 'ArgsTest.py, line 105:\n    try:';
		$m.__track_lines__[106] = 'ArgsTest.py, line 106:\n    res = aArgs(*args)';
		$m.__track_lines__[107] = 'ArgsTest.py, line 107:\n    called = True';
		$m.__track_lines__[109] = 'ArgsTest.py, line 109:\n    called = False';
		$m.__track_lines__[111] = 'ArgsTest.py, line 111:\n    self.assertFalse(called,';
		$m.__track_lines__[115] = 'ArgsTest.py, line 115:\n    args = (1,)';
		$m.__track_lines__[116] = 'ArgsTest.py, line 116:\n    res = aArgs(*args)';
		$m.__track_lines__[117] = 'ArgsTest.py, line 117:\n    self.assertEquals(args, res)';
		$m.__track_lines__[119] = 'ArgsTest.py, line 119:\n    args = (1,)';
		$m.__track_lines__[120] = 'ArgsTest.py, line 120:\n    res = aArgs(args)';
		$m.__track_lines__[121] = 'ArgsTest.py, line 121:\n    self.assertEquals((args,), res)';
		$m.__track_lines__[124] = 'ArgsTest.py, line 124:\n    def testDefaultValuesCall(self):';
		$m.__track_lines__[125] = 'ArgsTest.py, line 125:\n    values = foo3(b=7)';
		$m.__track_lines__[126] = 'ArgsTest.py, line 126:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[127] = 'ArgsTest.py, line 127:\n    self.assertEquals(values[1], 7)';
		$m.__track_lines__[128] = 'ArgsTest.py, line 128:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[130] = 'ArgsTest.py, line 130:\n    values = foo3(a=9)';
		$m.__track_lines__[131] = 'ArgsTest.py, line 131:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[132] = 'ArgsTest.py, line 132:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[133] = 'ArgsTest.py, line 133:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[135] = 'ArgsTest.py, line 135:\n    values = foo3()';
		$m.__track_lines__[136] = 'ArgsTest.py, line 136:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[137] = 'ArgsTest.py, line 137:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[138] = 'ArgsTest.py, line 138:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[140] = 'ArgsTest.py, line 140:\n    def testVarargsCall(self):';
		$m.__track_lines__[141] = 'ArgsTest.py, line 141:\n    values = foo4(9, 8, 7, 2, 3, 4)';
		$m.__track_lines__[142] = 'ArgsTest.py, line 142:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[143] = 'ArgsTest.py, line 143:\n    self.assertEquals(values[1], 8)';
		$m.__track_lines__[144] = 'ArgsTest.py, line 144:\n    self.assertEquals(values[2], 7)';
		$m.__track_lines__[145] = 'ArgsTest.py, line 145:\n    self.assertEquals(values[3][0], 2)';
		$m.__track_lines__[146] = 'ArgsTest.py, line 146:\n    self.assertEquals(values[3][1], 3)';
		$m.__track_lines__[147] = 'ArgsTest.py, line 147:\n    self.assertEquals(values[3][2], 4)';
		$m.__track_lines__[149] = 'ArgsTest.py, line 149:\n    values = foo4(9, 8, 7, 3, 2, 1)';
		$m.__track_lines__[150] = 'ArgsTest.py, line 150:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[151] = 'ArgsTest.py, line 151:\n    self.assertEquals(values[1], 8)';
		$m.__track_lines__[152] = 'ArgsTest.py, line 152:\n    self.assertEquals(values[2], 7)';
		$m.__track_lines__[153] = 'ArgsTest.py, line 153:\n    self.assertEquals(values[3][0], 3)';
		$m.__track_lines__[154] = 'ArgsTest.py, line 154:\n    self.assertEquals(values[3][1], 2)';
		$m.__track_lines__[155] = 'ArgsTest.py, line 155:\n    self.assertEquals(values[3][2], 1)';
		$m.__track_lines__[157] = 'ArgsTest.py, line 157:\n    def testKwargsCall(self):';
		$m.__track_lines__[158] = 'ArgsTest.py, line 158:\n    values = foo5(9, 8, 7, x=5, y=7)';
		$m.__track_lines__[159] = 'ArgsTest.py, line 159:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[160] = 'ArgsTest.py, line 160:\n    self.assertEquals(values[1], 8)';
		$m.__track_lines__[161] = 'ArgsTest.py, line 161:\n    self.assertEquals(values[2], 7)';
		$m.__track_lines__[162] = 'ArgsTest.py, line 162:\n    self.assertEquals(values[3]["x"], 5)';
		$m.__track_lines__[163] = 'ArgsTest.py, line 163:\n    self.assertEquals(values[3]["y"], 7)';
		$m.__track_lines__[165] = 'ArgsTest.py, line 165:\n    def testComboCall(self):';
		$m.__track_lines__[166] = 'ArgsTest.py, line 166:\n    values = foo6(9, 8, 7, 1, 2, 3, x=4, y=5)';
		$m.__track_lines__[167] = 'ArgsTest.py, line 167:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[168] = 'ArgsTest.py, line 168:\n    self.assertEquals(values[1], 8)';
		$m.__track_lines__[169] = 'ArgsTest.py, line 169:\n    self.assertEquals(values[2], 7)';
		$m.__track_lines__[170] = 'ArgsTest.py, line 170:\n    self.assertEquals(values[3][0], 1)';
		$m.__track_lines__[171] = 'ArgsTest.py, line 171:\n    self.assertEquals(values[3][1], 2)';
		$m.__track_lines__[172] = 'ArgsTest.py, line 172:\n    self.assertEquals(values[3][2], 3)';
		$m.__track_lines__[173] = 'ArgsTest.py, line 173:\n    self.assertEquals(values[4]["x"], 4)';
		$m.__track_lines__[174] = 'ArgsTest.py, line 174:\n    self.assertEquals(values[4]["y"], 5)';
		$m.__track_lines__[176] = 'ArgsTest.py, line 176:\n    def testEdgeCall(self):';
		$m.__track_lines__[177] = 'ArgsTest.py, line 177:\n    values = foo7(1,2,3,b=2)';
		$m.__track_lines__[178] = 'ArgsTest.py, line 178:\n    self.assertEqual(values[0], 1)';
		$m.__track_lines__[179] = 'ArgsTest.py, line 179:\n    self.assertEqual(values[1], (2,3))';
		$m.__track_lines__[180] = "ArgsTest.py, line 180:\n    self.assertEqual(values[2], {'b':2})";
		$m.__track_lines__[182] = "ArgsTest.py, line 182:\n    values = foo7(1, 2, 3, {'b':2})";
		$m.__track_lines__[183] = 'ArgsTest.py, line 183:\n    self.assertEqual(values[0], 1)';
		$m.__track_lines__[184] = "ArgsTest.py, line 184:\n    self.assertEqual(values[1], (2,3,{'b':2}))";
		$m.__track_lines__[185] = 'ArgsTest.py, line 185:\n    self.assertEqual(values[2], {})';
		$m.__track_lines__[187] = 'ArgsTest.py, line 187:\n    vaules = foo8(1, b=2)';
		$m.__track_lines__[188] = 'ArgsTest.py, line 188:\n    self.assertEqual(vaules[0], 1)';
		$m.__track_lines__[189] = "ArgsTest.py, line 189:\n    self.assertEqual(vaules[1], {'b':2})";
		$m.__track_lines__[191] = "ArgsTest.py, line 191:\n    vaules = foo8({'b':2})";
		$m.__track_lines__[192] = "ArgsTest.py, line 192:\n    self.assertEqual(vaules[0], {'b':2})";
		$m.__track_lines__[193] = 'ArgsTest.py, line 193:\n    self.assertEqual(vaules[1], {})';
		$m.__track_lines__[195] = 'ArgsTest.py, line 195:\n    def testSimpleCtorCall(self):';
		$m.__track_lines__[196] = 'ArgsTest.py, line 196:\n    values = ArgsTestClass_foo(1, 2, 3).x';
		$m.__track_lines__[197] = 'ArgsTest.py, line 197:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[198] = 'ArgsTest.py, line 198:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[199] = 'ArgsTest.py, line 199:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[201] = 'ArgsTest.py, line 201:\n    values = ArgsTestClass_foo2(1, 2, 3).x';
		$m.__track_lines__[202] = 'ArgsTest.py, line 202:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[203] = 'ArgsTest.py, line 203:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[204] = 'ArgsTest.py, line 204:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[206] = 'ArgsTest.py, line 206:\n    def testKeywordCtorCall(self):';
		$m.__track_lines__[207] = 'ArgsTest.py, line 207:\n    values = ArgsTestClass_foo2(c=3, b=2, a=1).x';
		$m.__track_lines__[208] = 'ArgsTest.py, line 208:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[209] = 'ArgsTest.py, line 209:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[210] = 'ArgsTest.py, line 210:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[212] = 'ArgsTest.py, line 212:\n    values = ArgsTestClass_foo2(b=2, a=1, c=3).x';
		$m.__track_lines__[213] = 'ArgsTest.py, line 213:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[214] = 'ArgsTest.py, line 214:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[215] = 'ArgsTest.py, line 215:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[217] = 'ArgsTest.py, line 217:\n    values = ArgsTestClass_foo2().x';
		$m.__track_lines__[218] = 'ArgsTest.py, line 218:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[219] = 'ArgsTest.py, line 219:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[220] = 'ArgsTest.py, line 220:\n    self.assertEquals(values[2], None)';
		$m.__track_lines__[222] = 'ArgsTest.py, line 222:\n    values = ArgsTestClass_foo2(c=True).x';
		$m.__track_lines__[223] = 'ArgsTest.py, line 223:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[224] = 'ArgsTest.py, line 224:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[225] = 'ArgsTest.py, line 225:\n    self.assertEquals(values[2], True)';
		$m.__track_lines__[228] = 'ArgsTest.py, line 228:\n    def testDefaultValuesCtorCall(self):';
		$m.__track_lines__[229] = 'ArgsTest.py, line 229:\n    values = ArgsTestClass_foo3(b=7).x';
		$m.__track_lines__[230] = 'ArgsTest.py, line 230:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[231] = 'ArgsTest.py, line 231:\n    self.assertEquals(values[1], 7)';
		$m.__track_lines__[232] = 'ArgsTest.py, line 232:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[234] = 'ArgsTest.py, line 234:\n    values = ArgsTestClass_foo3(a=9).x';
		$m.__track_lines__[235] = 'ArgsTest.py, line 235:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[236] = 'ArgsTest.py, line 236:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[237] = 'ArgsTest.py, line 237:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[239] = 'ArgsTest.py, line 239:\n    values = ArgsTestClass_foo3().x';
		$m.__track_lines__[240] = 'ArgsTest.py, line 240:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[241] = 'ArgsTest.py, line 241:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[242] = 'ArgsTest.py, line 242:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[244] = 'ArgsTest.py, line 244:\n    def testVarargsCtorCall(self):';
		$m.__track_lines__[245] = 'ArgsTest.py, line 245:\n    values = ArgsTestClass_foo4(9, 8, 7, 2, 3, 4).x';
		$m.__track_lines__[246] = 'ArgsTest.py, line 246:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[247] = 'ArgsTest.py, line 247:\n    self.assertEquals(values[1], 8)';
		$m.__track_lines__[248] = 'ArgsTest.py, line 248:\n    self.assertEquals(values[2], 7)';
		$m.__track_lines__[249] = 'ArgsTest.py, line 249:\n    self.assertEquals(values[3][0], 2)';
		$m.__track_lines__[250] = 'ArgsTest.py, line 250:\n    self.assertEquals(values[3][1], 3)';
		$m.__track_lines__[251] = 'ArgsTest.py, line 251:\n    self.assertEquals(values[3][2], 4)';
		$m.__track_lines__[253] = 'ArgsTest.py, line 253:\n    values = ArgsTestClass_foo4(9, 8, 7, 3, 2, 1).x';
		$m.__track_lines__[254] = 'ArgsTest.py, line 254:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[255] = 'ArgsTest.py, line 255:\n    self.assertEquals(values[1], 8)';
		$m.__track_lines__[256] = 'ArgsTest.py, line 256:\n    self.assertEquals(values[2], 7)';
		$m.__track_lines__[257] = 'ArgsTest.py, line 257:\n    self.assertEquals(values[3][0], 3)';
		$m.__track_lines__[258] = 'ArgsTest.py, line 258:\n    self.assertEquals(values[3][1], 2)';
		$m.__track_lines__[259] = 'ArgsTest.py, line 259:\n    self.assertEquals(values[3][2], 1)';
		$m.__track_lines__[261] = 'ArgsTest.py, line 261:\n    def testKwargsCtorCall(self):';
		$m.__track_lines__[262] = 'ArgsTest.py, line 262:\n    values = ArgsTestClass_foo5(9, 8, 7, x=5, y=7).x';
		$m.__track_lines__[263] = 'ArgsTest.py, line 263:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[264] = 'ArgsTest.py, line 264:\n    self.assertEquals(values[1], 8)';
		$m.__track_lines__[265] = 'ArgsTest.py, line 265:\n    self.assertEquals(values[2], 7)';
		$m.__track_lines__[266] = 'ArgsTest.py, line 266:\n    self.assertEquals(values[3]["x"], 5)';
		$m.__track_lines__[267] = 'ArgsTest.py, line 267:\n    self.assertEquals(values[3]["y"], 7)';
		$m.__track_lines__[269] = 'ArgsTest.py, line 269:\n    def testComboCtorCall(self):';
		$m.__track_lines__[270] = 'ArgsTest.py, line 270:\n    values = ArgsTestClass_foo6(9, 8, 7, 1, 2, 3, x=4, y=5).x';
		$m.__track_lines__[271] = 'ArgsTest.py, line 271:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[272] = 'ArgsTest.py, line 272:\n    self.assertEquals(values[1], 8)';
		$m.__track_lines__[273] = 'ArgsTest.py, line 273:\n    self.assertEquals(values[2], 7)';
		$m.__track_lines__[274] = 'ArgsTest.py, line 274:\n    self.assertEquals(values[3][0], 1)';
		$m.__track_lines__[275] = 'ArgsTest.py, line 275:\n    self.assertEquals(values[3][1], 2)';
		$m.__track_lines__[276] = 'ArgsTest.py, line 276:\n    self.assertEquals(values[3][2], 3)';
		$m.__track_lines__[277] = 'ArgsTest.py, line 277:\n    self.assertEquals(values[4]["x"], 4)';
		$m.__track_lines__[278] = 'ArgsTest.py, line 278:\n    self.assertEquals(values[4]["y"], 5)';
		$m.__track_lines__[280] = 'ArgsTest.py, line 280:\n    def testSimpleMethodCall(self):';
		$m.__track_lines__[281] = 'ArgsTest.py, line 281:\n    values = ArgsTestClass().foo(1, 2, 3)';
		$m.__track_lines__[282] = 'ArgsTest.py, line 282:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[283] = 'ArgsTest.py, line 283:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[284] = 'ArgsTest.py, line 284:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[286] = 'ArgsTest.py, line 286:\n    values = ArgsTestClass().foo2(1, 2, 3)';
		$m.__track_lines__[287] = 'ArgsTest.py, line 287:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[288] = 'ArgsTest.py, line 288:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[289] = 'ArgsTest.py, line 289:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[291] = 'ArgsTest.py, line 291:\n    def testKeywordMethodCall(self):';
		$m.__track_lines__[292] = 'ArgsTest.py, line 292:\n    values = ArgsTestClass().foo2(c=3, b=2, a=1)';
		$m.__track_lines__[293] = 'ArgsTest.py, line 293:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[294] = 'ArgsTest.py, line 294:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[295] = 'ArgsTest.py, line 295:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[297] = 'ArgsTest.py, line 297:\n    values = ArgsTestClass().foo2(b=2, a=1, c=3)';
		$m.__track_lines__[298] = 'ArgsTest.py, line 298:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[299] = 'ArgsTest.py, line 299:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[300] = 'ArgsTest.py, line 300:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[302] = 'ArgsTest.py, line 302:\n    values = ArgsTestClass().foo2()';
		$m.__track_lines__[303] = 'ArgsTest.py, line 303:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[304] = 'ArgsTest.py, line 304:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[305] = 'ArgsTest.py, line 305:\n    self.assertEquals(values[2], None)';
		$m.__track_lines__[307] = 'ArgsTest.py, line 307:\n    values = ArgsTestClass().foo2(c=True)';
		$m.__track_lines__[308] = 'ArgsTest.py, line 308:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[309] = 'ArgsTest.py, line 309:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[310] = 'ArgsTest.py, line 310:\n    self.assertEquals(values[2], True)';
		$m.__track_lines__[313] = 'ArgsTest.py, line 313:\n    def testDefaultValuesMethodCall(self):';
		$m.__track_lines__[314] = 'ArgsTest.py, line 314:\n    values = ArgsTestClass().foo3(b=7)';
		$m.__track_lines__[315] = 'ArgsTest.py, line 315:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[316] = 'ArgsTest.py, line 316:\n    self.assertEquals(values[1], 7)';
		$m.__track_lines__[317] = 'ArgsTest.py, line 317:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[319] = 'ArgsTest.py, line 319:\n    values = ArgsTestClass().foo3(a=9)';
		$m.__track_lines__[320] = 'ArgsTest.py, line 320:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[321] = 'ArgsTest.py, line 321:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[322] = 'ArgsTest.py, line 322:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[324] = 'ArgsTest.py, line 324:\n    values = ArgsTestClass().foo3()';
		$m.__track_lines__[325] = 'ArgsTest.py, line 325:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[326] = 'ArgsTest.py, line 326:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[327] = 'ArgsTest.py, line 327:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[329] = 'ArgsTest.py, line 329:\n    def testVarargsMethodCall(self):';
		$m.__track_lines__[330] = 'ArgsTest.py, line 330:\n    values = ArgsTestClass().foo4(1, 2, 3)';
		$m.__track_lines__[331] = 'ArgsTest.py, line 331:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[332] = 'ArgsTest.py, line 332:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[333] = 'ArgsTest.py, line 333:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[335] = 'ArgsTest.py, line 335:\n    values = ArgsTestClass().foo4(3, 2, 1)';
		$m.__track_lines__[336] = 'ArgsTest.py, line 336:\n    self.assertEquals(values[0], 3)';
		$m.__track_lines__[337] = 'ArgsTest.py, line 337:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[338] = 'ArgsTest.py, line 338:\n    self.assertEquals(values[2], 1)';
		$m.__track_lines__[340] = 'ArgsTest.py, line 340:\n    def testKwargsMethodCall(self):';
		$m.__track_lines__[341] = 'ArgsTest.py, line 341:\n    values = ArgsTestClass().foo5(x=5, y=7)';
		$m.__track_lines__[342] = 'ArgsTest.py, line 342:\n    self.assertEquals(values["x"], 5)';
		$m.__track_lines__[343] = 'ArgsTest.py, line 343:\n    self.assertEquals(values["y"], 7)';
		$m.__track_lines__[345] = 'ArgsTest.py, line 345:\n    def testComboMethodCall(self):';
		$m.__track_lines__[346] = 'ArgsTest.py, line 346:\n    values = ArgsTestClass().foo6(1, 2, 3, x=4, y=5)';
		$m.__track_lines__[347] = 'ArgsTest.py, line 347:\n    self.assertEquals(values[0][0], 1)';
		$m.__track_lines__[348] = 'ArgsTest.py, line 348:\n    self.assertEquals(values[0][1], 2)';
		$m.__track_lines__[349] = 'ArgsTest.py, line 349:\n    self.assertEquals(values[0][2], 3)';
		$m.__track_lines__[350] = 'ArgsTest.py, line 350:\n    self.assertEquals(values[1]["x"], 4)';
		$m.__track_lines__[351] = 'ArgsTest.py, line 351:\n    self.assertEquals(values[1]["y"], 5)';
		$m.__track_lines__[353] = 'ArgsTest.py, line 353:\n    def testEdgeMethodCall(self):';
		$m.__track_lines__[354] = 'ArgsTest.py, line 354:\n    values = ArgsTestClass().foo7(1,2,3,b=2)';
		$m.__track_lines__[355] = 'ArgsTest.py, line 355:\n    self.assertEqual(values[0], 1)';
		$m.__track_lines__[356] = 'ArgsTest.py, line 356:\n    self.assertEqual(values[1], (2,3))';
		$m.__track_lines__[357] = "ArgsTest.py, line 357:\n    self.assertEqual(values[2], {'b':2})";
		$m.__track_lines__[359] = "ArgsTest.py, line 359:\n    values = ArgsTestClass().foo7(1, 2, 3, {'b':2})";
		$m.__track_lines__[360] = 'ArgsTest.py, line 360:\n    self.assertEqual(values[0], 1)';
		$m.__track_lines__[361] = "ArgsTest.py, line 361:\n    self.assertEqual(values[1], (2,3,{'b':2}))";
		$m.__track_lines__[362] = 'ArgsTest.py, line 362:\n    self.assertEqual(values[2], {})';
		$m.__track_lines__[364] = 'ArgsTest.py, line 364:\n    vaules = ArgsTestClass().foo8(1, b=2)';
		$m.__track_lines__[365] = 'ArgsTest.py, line 365:\n    self.assertEqual(vaules[0], 1)';
		$m.__track_lines__[366] = "ArgsTest.py, line 366:\n    self.assertEqual(vaules[1], {'b':2})";
		$m.__track_lines__[368] = "ArgsTest.py, line 368:\n    vaules = ArgsTestClass().foo8({'b':2})";
		$m.__track_lines__[369] = "ArgsTest.py, line 369:\n    self.assertEqual(vaules[0], {'b':2})";
		$m.__track_lines__[370] = 'ArgsTest.py, line 370:\n    self.assertEqual(vaules[1], {})';
		$m.__track_lines__[372] = 'ArgsTest.py, line 372:\n    def testSimpleStaticMethodCall(self):';
		$m.__track_lines__[373] = 'ArgsTest.py, line 373:\n    values = ArgsTestClass2.foo(1, 2, 3)';
		$m.__track_lines__[374] = 'ArgsTest.py, line 374:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[375] = 'ArgsTest.py, line 375:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[376] = 'ArgsTest.py, line 376:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[378] = 'ArgsTest.py, line 378:\n    values = ArgsTestClass2.foo2(1, 2, 3)';
		$m.__track_lines__[379] = 'ArgsTest.py, line 379:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[380] = 'ArgsTest.py, line 380:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[381] = 'ArgsTest.py, line 381:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[383] = 'ArgsTest.py, line 383:\n    def testKeywordStaticMethodCall(self):';
		$m.__track_lines__[384] = 'ArgsTest.py, line 384:\n    values = ArgsTestClass2.foo2(c=3, b=2, a=1)';
		$m.__track_lines__[385] = 'ArgsTest.py, line 385:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[386] = 'ArgsTest.py, line 386:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[387] = 'ArgsTest.py, line 387:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[389] = 'ArgsTest.py, line 389:\n    values = ArgsTestClass2.foo2(b=2, a=1, c=3)';
		$m.__track_lines__[390] = 'ArgsTest.py, line 390:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[391] = 'ArgsTest.py, line 391:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[392] = 'ArgsTest.py, line 392:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[394] = 'ArgsTest.py, line 394:\n    values = ArgsTestClass2.foo2()';
		$m.__track_lines__[395] = 'ArgsTest.py, line 395:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[396] = 'ArgsTest.py, line 396:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[397] = 'ArgsTest.py, line 397:\n    self.assertEquals(values[2], None)';
		$m.__track_lines__[399] = 'ArgsTest.py, line 399:\n    values = ArgsTestClass2.foo2(c=True)';
		$m.__track_lines__[400] = 'ArgsTest.py, line 400:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[401] = 'ArgsTest.py, line 401:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[402] = 'ArgsTest.py, line 402:\n    self.assertEquals(values[2], True)';
		$m.__track_lines__[404] = 'ArgsTest.py, line 404:\n    def testDefaultValuesStaticMethodCall(self):';
		$m.__track_lines__[405] = 'ArgsTest.py, line 405:\n    values = ArgsTestClass2.foo3(b=7)';
		$m.__track_lines__[406] = 'ArgsTest.py, line 406:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[407] = 'ArgsTest.py, line 407:\n    self.assertEquals(values[1], 7)';
		$m.__track_lines__[408] = 'ArgsTest.py, line 408:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[410] = 'ArgsTest.py, line 410:\n    values = ArgsTestClass2.foo3(a=9)';
		$m.__track_lines__[411] = 'ArgsTest.py, line 411:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[412] = 'ArgsTest.py, line 412:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[413] = 'ArgsTest.py, line 413:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[415] = 'ArgsTest.py, line 415:\n    values = ArgsTestClass2.foo3()';
		$m.__track_lines__[416] = 'ArgsTest.py, line 416:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[417] = 'ArgsTest.py, line 417:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[418] = 'ArgsTest.py, line 418:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[420] = 'ArgsTest.py, line 420:\n    def testVarargsStaticMethodCall(self):';
		$m.__track_lines__[421] = 'ArgsTest.py, line 421:\n    values = ArgsTestClass2.foo4(1, 2, 3)';
		$m.__track_lines__[422] = 'ArgsTest.py, line 422:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[423] = 'ArgsTest.py, line 423:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[424] = 'ArgsTest.py, line 424:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[426] = 'ArgsTest.py, line 426:\n    values = ArgsTestClass2.foo4(3, 2, 1)';
		$m.__track_lines__[427] = 'ArgsTest.py, line 427:\n    self.assertEquals(values[0], 3)';
		$m.__track_lines__[428] = 'ArgsTest.py, line 428:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[429] = 'ArgsTest.py, line 429:\n    self.assertEquals(values[2], 1)';
		$m.__track_lines__[431] = 'ArgsTest.py, line 431:\n    def testKwargsStaticMethodCall(self):';
		$m.__track_lines__[432] = 'ArgsTest.py, line 432:\n    values = ArgsTestClass2.foo5(x=5, y=7)';
		$m.__track_lines__[433] = 'ArgsTest.py, line 433:\n    self.assertEquals(values["x"], 5)';
		$m.__track_lines__[434] = 'ArgsTest.py, line 434:\n    self.assertEquals(values["y"], 7)';
		$m.__track_lines__[436] = 'ArgsTest.py, line 436:\n    def testComboStaticMethodCall(self):';
		$m.__track_lines__[437] = 'ArgsTest.py, line 437:\n    values = ArgsTestClass2.foo6(1, 2, 3, x=4, y=5)';
		$m.__track_lines__[438] = 'ArgsTest.py, line 438:\n    self.assertEquals(values[0][0], 1)';
		$m.__track_lines__[439] = 'ArgsTest.py, line 439:\n    self.assertEquals(values[0][1], 2)';
		$m.__track_lines__[440] = 'ArgsTest.py, line 440:\n    self.assertEquals(values[0][2], 3)';
		$m.__track_lines__[441] = 'ArgsTest.py, line 441:\n    self.assertEquals(values[1]["x"], 4)';
		$m.__track_lines__[442] = 'ArgsTest.py, line 442:\n    self.assertEquals(values[1]["y"], 5)';
		$m.__track_lines__[444] = 'ArgsTest.py, line 444:\n    def testEdgeStaticMethodCall(self):';
		$m.__track_lines__[445] = 'ArgsTest.py, line 445:\n    values = ArgsTestClass2.foo7(1,2,3,b=2)';
		$m.__track_lines__[446] = 'ArgsTest.py, line 446:\n    self.assertEqual(values[0], 1)';
		$m.__track_lines__[447] = 'ArgsTest.py, line 447:\n    self.assertEqual(values[1], (2,3))';
		$m.__track_lines__[448] = "ArgsTest.py, line 448:\n    self.assertEqual(values[2], {'b':2})";
		$m.__track_lines__[450] = "ArgsTest.py, line 450:\n    values = ArgsTestClass2.foo7(1, 2, 3, {'b':2})";
		$m.__track_lines__[451] = 'ArgsTest.py, line 451:\n    self.assertEqual(values[0], 1)';
		$m.__track_lines__[452] = "ArgsTest.py, line 452:\n    self.assertEqual(values[1], (2,3,{'b':2}))";
		$m.__track_lines__[453] = 'ArgsTest.py, line 453:\n    self.assertEqual(values[2], {})';
		$m.__track_lines__[455] = 'ArgsTest.py, line 455:\n    vaules = ArgsTestClass2.foo8(1, b=2)';
		$m.__track_lines__[456] = 'ArgsTest.py, line 456:\n    self.assertEqual(vaules[0], 1)';
		$m.__track_lines__[457] = "ArgsTest.py, line 457:\n    self.assertEqual(vaules[1], {'b':2})";
		$m.__track_lines__[459] = "ArgsTest.py, line 459:\n    vaules = ArgsTestClass2.foo8({'b':2})";
		$m.__track_lines__[460] = "ArgsTest.py, line 460:\n    self.assertEqual(vaules[0], {'b':2})";
		$m.__track_lines__[461] = 'ArgsTest.py, line 461:\n    self.assertEqual(vaules[1], {})';
		$m.__track_lines__[463] = 'ArgsTest.py, line 463:\n    def testSimpleClassMethodCall(self):';
		$m.__track_lines__[464] = 'ArgsTest.py, line 464:\n    values = ArgsTestClass3.foo(1, 2, 3)';
		$m.__track_lines__[465] = 'ArgsTest.py, line 465:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[466] = 'ArgsTest.py, line 466:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[467] = 'ArgsTest.py, line 467:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[469] = 'ArgsTest.py, line 469:\n    values = ArgsTestClass3.foo2(1, 2, 3)';
		$m.__track_lines__[470] = 'ArgsTest.py, line 470:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[471] = 'ArgsTest.py, line 471:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[472] = 'ArgsTest.py, line 472:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[474] = 'ArgsTest.py, line 474:\n    def testKeywordClassMethodCall(self):';
		$m.__track_lines__[475] = 'ArgsTest.py, line 475:\n    values = ArgsTestClass3.foo2(c=3, b=2, a=1)';
		$m.__track_lines__[476] = 'ArgsTest.py, line 476:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[477] = 'ArgsTest.py, line 477:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[478] = 'ArgsTest.py, line 478:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[480] = 'ArgsTest.py, line 480:\n    values = ArgsTestClass3.foo2(b=2, a=1, c=3)';
		$m.__track_lines__[481] = 'ArgsTest.py, line 481:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[482] = 'ArgsTest.py, line 482:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[483] = 'ArgsTest.py, line 483:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[485] = 'ArgsTest.py, line 485:\n    values = ArgsTestClass3.foo2()';
		$m.__track_lines__[486] = 'ArgsTest.py, line 486:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[487] = 'ArgsTest.py, line 487:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[488] = 'ArgsTest.py, line 488:\n    self.assertEquals(values[2], None)';
		$m.__track_lines__[490] = 'ArgsTest.py, line 490:\n    values = ArgsTestClass3.foo2(c=True)';
		$m.__track_lines__[491] = 'ArgsTest.py, line 491:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[492] = 'ArgsTest.py, line 492:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[493] = 'ArgsTest.py, line 493:\n    self.assertEquals(values[2], True)';
		$m.__track_lines__[496] = 'ArgsTest.py, line 496:\n    def testDefaultValuesClassMethodCall(self):';
		$m.__track_lines__[497] = 'ArgsTest.py, line 497:\n    values = ArgsTestClass3.foo3(b=7)';
		$m.__track_lines__[498] = 'ArgsTest.py, line 498:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[499] = 'ArgsTest.py, line 499:\n    self.assertEquals(values[1], 7)';
		$m.__track_lines__[500] = 'ArgsTest.py, line 500:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[502] = 'ArgsTest.py, line 502:\n    values = ArgsTestClass3.foo3(a=9)';
		$m.__track_lines__[503] = 'ArgsTest.py, line 503:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[504] = 'ArgsTest.py, line 504:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[505] = 'ArgsTest.py, line 505:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[507] = 'ArgsTest.py, line 507:\n    values = ArgsTestClass3.foo3()';
		$m.__track_lines__[508] = 'ArgsTest.py, line 508:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[509] = 'ArgsTest.py, line 509:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[510] = 'ArgsTest.py, line 510:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[512] = 'ArgsTest.py, line 512:\n    def testVarargsClassMethodCall(self):';
		$m.__track_lines__[513] = 'ArgsTest.py, line 513:\n    values = ArgsTestClass3.foo4(1, 2, 3)';
		$m.__track_lines__[514] = 'ArgsTest.py, line 514:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[515] = 'ArgsTest.py, line 515:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[516] = 'ArgsTest.py, line 516:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[518] = 'ArgsTest.py, line 518:\n    values = ArgsTestClass3.foo4(3, 2, 1)';
		$m.__track_lines__[519] = 'ArgsTest.py, line 519:\n    self.assertEquals(values[0], 3)';
		$m.__track_lines__[520] = 'ArgsTest.py, line 520:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[521] = 'ArgsTest.py, line 521:\n    self.assertEquals(values[2], 1)';
		$m.__track_lines__[523] = 'ArgsTest.py, line 523:\n    def testKwargsClassMethodCall(self):';
		$m.__track_lines__[524] = 'ArgsTest.py, line 524:\n    values = ArgsTestClass3.foo5(x=5, y=7)';
		$m.__track_lines__[525] = 'ArgsTest.py, line 525:\n    self.assertEquals(values["x"], 5)';
		$m.__track_lines__[526] = 'ArgsTest.py, line 526:\n    self.assertEquals(values["y"], 7)';
		$m.__track_lines__[528] = 'ArgsTest.py, line 528:\n    def testComboClassMethodCall(self):';
		$m.__track_lines__[529] = 'ArgsTest.py, line 529:\n    values = ArgsTestClass3.foo6(1, 2, 3, x=4, y=5)';
		$m.__track_lines__[530] = 'ArgsTest.py, line 530:\n    self.assertEquals(values[0][0], 1)';
		$m.__track_lines__[531] = 'ArgsTest.py, line 531:\n    self.assertEquals(values[0][1], 2)';
		$m.__track_lines__[532] = 'ArgsTest.py, line 532:\n    self.assertEquals(values[0][2], 3)';
		$m.__track_lines__[533] = 'ArgsTest.py, line 533:\n    self.assertEquals(values[1]["x"], 4)';
		$m.__track_lines__[534] = 'ArgsTest.py, line 534:\n    self.assertEquals(values[1]["y"], 5)';
		$m.__track_lines__[536] = 'ArgsTest.py, line 536:\n    def testEdgeClassMethodCall(self):';
		$m.__track_lines__[537] = 'ArgsTest.py, line 537:\n    values = ArgsTestClass3.foo7(1,2,3,b=2)';
		$m.__track_lines__[538] = 'ArgsTest.py, line 538:\n    self.assertEqual(values[0], 1)';
		$m.__track_lines__[539] = 'ArgsTest.py, line 539:\n    self.assertEqual(values[1], (2,3))';
		$m.__track_lines__[540] = "ArgsTest.py, line 540:\n    self.assertEqual(values[2], {'b':2})";
		$m.__track_lines__[542] = "ArgsTest.py, line 542:\n    values = ArgsTestClass3.foo7(1, 2, 3, {'b':2})";
		$m.__track_lines__[543] = 'ArgsTest.py, line 543:\n    self.assertEqual(values[0], 1)';
		$m.__track_lines__[544] = "ArgsTest.py, line 544:\n    self.assertEqual(values[1], (2,3,{'b':2}))";
		$m.__track_lines__[545] = 'ArgsTest.py, line 545:\n    self.assertEqual(values[2], {})';
		$m.__track_lines__[547] = 'ArgsTest.py, line 547:\n    vaules = ArgsTestClass3.foo8(1, b=2)';
		$m.__track_lines__[548] = 'ArgsTest.py, line 548:\n    self.assertEqual(vaules[0], 1)';
		$m.__track_lines__[549] = "ArgsTest.py, line 549:\n    self.assertEqual(vaules[1], {'b':2})";
		$m.__track_lines__[551] = "ArgsTest.py, line 551:\n    vaules = ArgsTestClass3.foo8({'b':2})";
		$m.__track_lines__[552] = "ArgsTest.py, line 552:\n    self.assertEqual(vaules[0], {'b':2})";
		$m.__track_lines__[553] = 'ArgsTest.py, line 553:\n    self.assertEqual(vaules[1], {})';
		$m.__track_lines__[555] = 'ArgsTest.py, line 555:\n    def testSimpleIndirectClassMethodCall(self):';
		$m.__track_lines__[556] = 'ArgsTest.py, line 556:\n    values = ArgsTestClass3().foo(1, 2, 3)';
		$m.__track_lines__[557] = 'ArgsTest.py, line 557:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[558] = 'ArgsTest.py, line 558:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[559] = 'ArgsTest.py, line 559:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[561] = 'ArgsTest.py, line 561:\n    values = ArgsTestClass3().foo2(1, 2, 3)';
		$m.__track_lines__[562] = 'ArgsTest.py, line 562:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[563] = 'ArgsTest.py, line 563:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[564] = 'ArgsTest.py, line 564:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[566] = 'ArgsTest.py, line 566:\n    def testKeywordIndirectClassMethodCall(self):';
		$m.__track_lines__[567] = 'ArgsTest.py, line 567:\n    values = ArgsTestClass3().foo2(c=3, b=2, a=1)';
		$m.__track_lines__[568] = 'ArgsTest.py, line 568:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[569] = 'ArgsTest.py, line 569:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[570] = 'ArgsTest.py, line 570:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[572] = 'ArgsTest.py, line 572:\n    values = ArgsTestClass3().foo2(b=2, a=1, c=3)';
		$m.__track_lines__[573] = 'ArgsTest.py, line 573:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[574] = 'ArgsTest.py, line 574:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[575] = 'ArgsTest.py, line 575:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[577] = 'ArgsTest.py, line 577:\n    values = ArgsTestClass3().foo2()';
		$m.__track_lines__[578] = 'ArgsTest.py, line 578:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[579] = 'ArgsTest.py, line 579:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[580] = 'ArgsTest.py, line 580:\n    self.assertEquals(values[2], None)';
		$m.__track_lines__[582] = 'ArgsTest.py, line 582:\n    values = ArgsTestClass3().foo2(c=True)';
		$m.__track_lines__[583] = 'ArgsTest.py, line 583:\n    self.assertEquals(values[0], None)';
		$m.__track_lines__[584] = 'ArgsTest.py, line 584:\n    self.assertEquals(values[1], None)';
		$m.__track_lines__[585] = 'ArgsTest.py, line 585:\n    self.assertEquals(values[2], True)';
		$m.__track_lines__[588] = 'ArgsTest.py, line 588:\n    def testDefaultValuesIndirectClassMethodCall(self):';
		$m.__track_lines__[589] = 'ArgsTest.py, line 589:\n    values = ArgsTestClass3().foo3(b=7)';
		$m.__track_lines__[590] = 'ArgsTest.py, line 590:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[591] = 'ArgsTest.py, line 591:\n    self.assertEquals(values[1], 7)';
		$m.__track_lines__[592] = 'ArgsTest.py, line 592:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[594] = 'ArgsTest.py, line 594:\n    values = ArgsTestClass3().foo3(a=9)';
		$m.__track_lines__[595] = 'ArgsTest.py, line 595:\n    self.assertEquals(values[0], 9)';
		$m.__track_lines__[596] = 'ArgsTest.py, line 596:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[597] = 'ArgsTest.py, line 597:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[599] = 'ArgsTest.py, line 599:\n    values = ArgsTestClass3().foo3()';
		$m.__track_lines__[600] = 'ArgsTest.py, line 600:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[601] = 'ArgsTest.py, line 601:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[602] = 'ArgsTest.py, line 602:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[604] = 'ArgsTest.py, line 604:\n    def testVarargsIndirectClassMethodCall(self):';
		$m.__track_lines__[605] = 'ArgsTest.py, line 605:\n    values = ArgsTestClass3().foo4(1, 2, 3)';
		$m.__track_lines__[606] = 'ArgsTest.py, line 606:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[607] = 'ArgsTest.py, line 607:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[608] = 'ArgsTest.py, line 608:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[610] = 'ArgsTest.py, line 610:\n    values = ArgsTestClass3().foo4(3, 2, 1)';
		$m.__track_lines__[611] = 'ArgsTest.py, line 611:\n    self.assertEquals(values[0], 3)';
		$m.__track_lines__[612] = 'ArgsTest.py, line 612:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[613] = 'ArgsTest.py, line 613:\n    self.assertEquals(values[2], 1)';
		$m.__track_lines__[615] = 'ArgsTest.py, line 615:\n    def testKwargsIndirectClassMethodCall(self):';
		$m.__track_lines__[616] = 'ArgsTest.py, line 616:\n    values = ArgsTestClass3().foo5(x=5, y=7)';
		$m.__track_lines__[617] = 'ArgsTest.py, line 617:\n    self.assertEquals(values["x"], 5)';
		$m.__track_lines__[618] = 'ArgsTest.py, line 618:\n    self.assertEquals(values["y"], 7)';
		$m.__track_lines__[620] = 'ArgsTest.py, line 620:\n    def testComboIndirectClassMethodCall(self):';
		$m.__track_lines__[621] = 'ArgsTest.py, line 621:\n    values = ArgsTestClass3().foo6(1, 2, 3, x=4, y=5)';
		$m.__track_lines__[622] = 'ArgsTest.py, line 622:\n    self.assertEquals(values[0][0], 1)';
		$m.__track_lines__[623] = 'ArgsTest.py, line 623:\n    self.assertEquals(values[0][1], 2)';
		$m.__track_lines__[624] = 'ArgsTest.py, line 624:\n    self.assertEquals(values[0][2], 3)';
		$m.__track_lines__[625] = 'ArgsTest.py, line 625:\n    self.assertEquals(values[1]["x"], 4)';
		$m.__track_lines__[626] = 'ArgsTest.py, line 626:\n    self.assertEquals(values[1]["y"], 5)';
		$m.__track_lines__[628] = 'ArgsTest.py, line 628:\n    def testKwArgsRecurse(self):';
		$m.__track_lines__[629] = 'ArgsTest.py, line 629:\n    kwa = kw_args(x=5, y=6)';
		$m.__track_lines__[630] = 'ArgsTest.py, line 630:\n    if kwa:';
		$m.__track_lines__[631] = "ArgsTest.py, line 631:\n    self.assertEquals(kwa.get('x'), 5)";
		$m.__track_lines__[632] = "ArgsTest.py, line 632:\n    self.assertEquals(kwa.get('y'), 6)";
		$m.__track_lines__[634] = 'ArgsTest.py, line 634:\n    kwa = kw_args2(x=5, y=6)';
		$m.__track_lines__[635] = 'ArgsTest.py, line 635:\n    if kwa:';
		$m.__track_lines__[636] = "ArgsTest.py, line 636:\n    self.assertEquals(kwa.get('x'), 5)";
		$m.__track_lines__[637] = "ArgsTest.py, line 637:\n    self.assertEquals(kwa.get('y'), 6)";
		$m.__track_lines__[639] = 'ArgsTest.py, line 639:\n    values = varargs_kwargs(1,2,3,4,c=3)';
		$m.__track_lines__[640] = 'ArgsTest.py, line 640:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[641] = 'ArgsTest.py, line 641:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[642] = 'ArgsTest.py, line 642:\n    self.assertEquals(values[2], (3,4))';
		$m.__track_lines__[643] = "ArgsTest.py, line 643:\n    self.assertEquals(values[3]['c'], 3)";
		$m.__track_lines__[645] = 'ArgsTest.py, line 645:\n    values = varargs_kwargs2(1,2,3,4,c=3)';
		$m.__track_lines__[646] = 'ArgsTest.py, line 646:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[647] = 'ArgsTest.py, line 647:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[648] = 'ArgsTest.py, line 648:\n    self.assertEquals(values[2], (3,4))';
		$m.__track_lines__[649] = "ArgsTest.py, line 649:\n    self.assertEquals(values[3]['c'], 3)";
		$m.__track_lines__[651] = 'ArgsTest.py, line 651:\n    values = varargs_kwargs2(1)';
		$m.__track_lines__[652] = 'ArgsTest.py, line 652:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[653] = 'ArgsTest.py, line 653:\n    self.assertEquals(values[1], 3)';
		$m.__track_lines__[655] = "ArgsTest.py, line 655:\n    values = varargs_kwargs2(1, {'a':1}, {})";
		$m.__track_lines__[656] = 'ArgsTest.py, line 656:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[657] = "ArgsTest.py, line 657:\n    self.assertEquals(values[1]['a'], 1)";
		$m.__track_lines__[659] = "ArgsTest.py, line 659:\n    values = varargs_kwargs2(1, {'a':1})";
		$m.__track_lines__[660] = 'ArgsTest.py, line 660:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[661] = 'ArgsTest.py, line 661:\n    try:';
		$m.__track_lines__[662] = "ArgsTest.py, line 662:\n    self.assertEquals(values[1], {'a':1})";
		$m.__track_lines__[664] = 'ArgsTest.py, line 664:\n    self.fail("Last arg in *args,**kwargs is dict problem")';
		$m.__track_lines__[666] = 'ArgsTest.py, line 666:\n    def testKwArgsInherit(self):';
		$m.__track_lines__[668] = 'ArgsTest.py, line 668:\n    c = KwArgs(x=5, y=6)';
		$m.__track_lines__[669] = "ArgsTest.py, line 669:\n    self.assertTrue(hasattr(c, 'kwargs'))";
		$m.__track_lines__[670] = "ArgsTest.py, line 670:\n    kwa = getattr(c, 'kwargs', None)";
		$m.__track_lines__[671] = 'ArgsTest.py, line 671:\n    if kwa:';
		$m.__track_lines__[672] = "ArgsTest.py, line 672:\n    self.assertEquals(kwa.get('x'), 5)";
		$m.__track_lines__[673] = "ArgsTest.py, line 673:\n    self.assertEquals(kwa.get('y'), 6)";
		$m.__track_lines__[674] = "ArgsTest.py, line 674:\n    self.assertEquals(kwa.get('z'), 7)";
		$m.__track_lines__[676] = 'ArgsTest.py, line 676:\n    try:';
		$m.__track_lines__[677] = 'ArgsTest.py, line 677:\n    c = Kwargs2(x=5, y=6)';
		$m.__track_lines__[678] = "ArgsTest.py, line 678:\n    self.assertTrue(hasattr(c, 'kwargs'))";
		$m.__track_lines__[679] = "ArgsTest.py, line 679:\n    kwa = getattr(c, 'kwargs', None)";
		$m.__track_lines__[680] = 'ArgsTest.py, line 680:\n    if kwa:';
		$m.__track_lines__[681] = "ArgsTest.py, line 681:\n    self.assertEquals(kwa.get('x'), 5)";
		$m.__track_lines__[682] = "ArgsTest.py, line 682:\n    self.assertEquals(kwa.get('y'), 6)";
		$m.__track_lines__[683] = "ArgsTest.py, line 683:\n    self.assertEquals(kwa.get('z'), 7)";
		$m.__track_lines__[685] = 'ArgsTest.py, line 685:\n    self.assertTrue(False, "runtime error in kwargs, needs investigating")';
		$m.__track_lines__[687] = 'ArgsTest.py, line 687:\n    c.set_kwargs(x=5, y=6)';
		$m.__track_lines__[688] = "ArgsTest.py, line 688:\n    self.assertTrue(hasattr(c, 'kwargs'))";
		$m.__track_lines__[689] = "ArgsTest.py, line 689:\n    kwa = getattr(c, 'kwargs', None)";
		$m.__track_lines__[690] = 'ArgsTest.py, line 690:\n    if kwa:';
		$m.__track_lines__[691] = "ArgsTest.py, line 691:\n    self.assertEquals(kwa.get('x'), 5)";
		$m.__track_lines__[692] = "ArgsTest.py, line 692:\n    self.assertEquals(kwa.get('y'), 6)";
		$m.__track_lines__[693] = "ArgsTest.py, line 693:\n    self.assertEquals(kwa.get('z'), 8)";
		$m.__track_lines__[696] = 'ArgsTest.py, line 696:\n    c.set_kwargs2(x=5, y=6)';
		$m.__track_lines__[697] = "ArgsTest.py, line 697:\n    self.assertTrue(hasattr(c, 'kwargs'))";
		$m.__track_lines__[698] = "ArgsTest.py, line 698:\n    kwa = getattr(c, 'kwargs', None)";
		$m.__track_lines__[699] = 'ArgsTest.py, line 699:\n    if kwa:';
		$m.__track_lines__[700] = "ArgsTest.py, line 700:\n    self.assertEquals(kwa.get('x'), 5)";
		$m.__track_lines__[701] = "ArgsTest.py, line 701:\n    self.assertEquals(kwa.get('y'), 6)";
		$m.__track_lines__[702] = "ArgsTest.py, line 702:\n    self.assertEquals(kwa.get('z'), 8)";
		$m.__track_lines__[705] = 'ArgsTest.py, line 705:\n    c.set_kwargs3(x=5, y=6)';
		$m.__track_lines__[706] = "ArgsTest.py, line 706:\n    self.assertTrue(hasattr(c, 'kwargs'))";
		$m.__track_lines__[707] = "ArgsTest.py, line 707:\n    kwa = getattr(c, 'kwargs', None)";
		$m.__track_lines__[708] = 'ArgsTest.py, line 708:\n    if kwa:';
		$m.__track_lines__[709] = "ArgsTest.py, line 709:\n    self.assertEquals(kwa.get('x'), 5)";
		$m.__track_lines__[710] = "ArgsTest.py, line 710:\n    self.assertEquals(kwa.get('y'), 6)";
		$m.__track_lines__[711] = "ArgsTest.py, line 711:\n    self.assertEquals(kwa.get('z'), 8)";
		$m.__track_lines__[713] = 'ArgsTest.py, line 713:\n    def testKwArgsNameMapping(self):';
		$m.__track_lines__[714] = "ArgsTest.py, line 714:\n    kwargs = dict(comment='Comment', name='Name')";
		$m.__track_lines__[715] = 'ArgsTest.py, line 715:\n    def fn(comment=None, name=None):';
		$m.__track_lines__[716] = 'ArgsTest.py, line 716:\n    return dict(comment=comment, name=name)';
		$m.__track_lines__[717] = 'ArgsTest.py, line 717:\n    kwargs_out = fn(**kwargs)';
		$m.__track_lines__[718] = 'ArgsTest.py, line 718:\n    self.assertEquals(kwargs, kwargs_out)';
		$m.__track_lines__[719] = "ArgsTest.py, line 719:\n    kwargs = {'comment': 'Comment', 'name': 'Name'}";
		$m.__track_lines__[720] = 'ArgsTest.py, line 720:\n    kwargs_out = fn(**kwargs)';
		$m.__track_lines__[721] = 'ArgsTest.py, line 721:\n    self.assertEquals(kwargs, kwargs_out)';
		$m.__track_lines__[723] = 'ArgsTest.py, line 723:\n    def testLookupOrder(self):';
		$m.__track_lines__[724] = 'ArgsTest.py, line 724:\n    def fn(fint = int):';
		$m.__track_lines__[725] = 'ArgsTest.py, line 725:\n    return fint(1.2);';
		$m.__track_lines__[726] = 'ArgsTest.py, line 726:\n    class A:';
		$m.__track_lines__[727] = 'ArgsTest.py, line 727:\n    def fn(self, fint = int):';
		$m.__track_lines__[728] = 'ArgsTest.py, line 728:\n    return fint(1.2);';
		$m.__track_lines__[729] = 'ArgsTest.py, line 729:\n    self.assertEqual(fn(), 1)';
		$m.__track_lines__[730] = 'ArgsTest.py, line 730:\n    self.assertEqual(A().fn(), 1)';
		$m.__track_lines__[732] = 'ArgsTest.py, line 732:\n    def testArgIsModuleName(self):';
		$m.__track_lines__[733] = 'ArgsTest.py, line 733:\n    def fn(ArgsTest):';
		$m.__track_lines__[734] = 'ArgsTest.py, line 734:\n    return foo(ArgsTest, 2, 3)';
		$m.__track_lines__[735] = 'ArgsTest.py, line 735:\n    self.assertEqual(__name__, \'ArgsTest\', "Argument to fn must be equal to module name")';
		$m.__track_lines__[736] = "ArgsTest.py, line 736:\n    self.assertEqual(fn('foo'), ['foo', 2, 3])";
		$m.__track_lines__[738] = 'ArgsTest.py, line 738:\n    def testGetattr(self):';
		$m.__track_lines__[739] = 'ArgsTest.py, line 739:\n    instance = ArgsTestClass()';
		$m.__track_lines__[740] = 'ArgsTest.py, line 740:\n    foo = instance.foo';
		$m.__track_lines__[742] = 'ArgsTest.py, line 742:\n    values = foo(1, 2, 3)';
		$m.__track_lines__[743] = 'ArgsTest.py, line 743:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[744] = 'ArgsTest.py, line 744:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[745] = 'ArgsTest.py, line 745:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[747] = 'ArgsTest.py, line 747:\n    values = foo(*(1, 2, 3))';
		$m.__track_lines__[748] = 'ArgsTest.py, line 748:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[749] = 'ArgsTest.py, line 749:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[750] = 'ArgsTest.py, line 750:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[752] = 'ArgsTest.py, line 752:\n    try:';
		$m.__track_lines__[753] = 'ArgsTest.py, line 753:\n    values = foo(*(1, 2), **dict(c=3))';
		$m.__track_lines__[754] = 'ArgsTest.py, line 754:\n    self.assertEquals(values[0], 1)';
		$m.__track_lines__[755] = 'ArgsTest.py, line 755:\n    self.assertEquals(values[1], 2)';
		$m.__track_lines__[756] = 'ArgsTest.py, line 756:\n    self.assertEquals(values[2], 3)';
		$m.__track_lines__[758] = "ArgsTest.py, line 758:\n    self.fail('foo() takes exactly 4 arguments (5 given), bug #503')";
		$m.__track_lines__[760] = 'ArgsTest.py, line 760:\n    def testArgsUnpack(self):';
		$m.__track_lines__[761] = 'ArgsTest.py, line 761:\n    def func(a, (b, c), d):';
		$m.__track_lines__[762] = 'ArgsTest.py, line 762:\n    return a + b + c + d';
		$m.__track_lines__[763] = 'ArgsTest.py, line 763:\n    try:';
		$m.__track_lines__[764] = "ArgsTest.py, line 764:\n    self.assertEqual(func(1, (2, 3), 4), 10, 'Function args unpacking not supported, #527')";
		$m.__track_lines__[766] = "ArgsTest.py, line 766:\n    self.fail('Bug #527 Function args unpacking not supported')";
		$m.__track_lines__[769] = 'ArgsTest.py, line 769:\n    def foo(a, b, c):';
		$m.__track_lines__[770] = 'ArgsTest.py, line 770:\n    return [a, b, c]';
		$m.__track_lines__[772] = 'ArgsTest.py, line 772:\n    def foo2(a=None, b=None, c=None):';
		$m.__track_lines__[773] = 'ArgsTest.py, line 773:\n    return [a, b, c]';
		$m.__track_lines__[775] = 'ArgsTest.py, line 775:\n    def foo3(a=1, b=2, c=3):';
		$m.__track_lines__[776] = 'ArgsTest.py, line 776:\n    return [a, b, c]';
		$m.__track_lines__[778] = 'ArgsTest.py, line 778:\n    def foo4(a, b, c, *args):';
		$m.__track_lines__[779] = 'ArgsTest.py, line 779:\n    return a, b, c, args';
		$m.__track_lines__[781] = 'ArgsTest.py, line 781:\n    def foo5(a, b, c, **kwargs):';
		$m.__track_lines__[782] = 'ArgsTest.py, line 782:\n    return a, b, c, kwargs';
		$m.__track_lines__[784] = 'ArgsTest.py, line 784:\n    def foo6(a, b, c, *args, **kwargs):';
		$m.__track_lines__[785] = 'ArgsTest.py, line 785:\n    return (a, b, c, args, kwargs)';
		$m.__track_lines__[787] = 'ArgsTest.py, line 787:\n    def foo7(a, *args, **kwargs):';
		$m.__track_lines__[788] = 'ArgsTest.py, line 788:\n    return (a, args, kwargs)';
		$m.__track_lines__[790] = 'ArgsTest.py, line 790:\n    def foo8(a, **kwargs):';
		$m.__track_lines__[791] = 'ArgsTest.py, line 791:\n    return (a, kwargs)';
		$m.__track_lines__[793] = 'ArgsTest.py, line 793:\n    class ArgsTestClass_foo:';
		$m.__track_lines__[794] = 'ArgsTest.py, line 794:\n    def __init__(self, a, b, c):';
		$m.__track_lines__[795] = 'ArgsTest.py, line 795:\n    self.x = [a, b, c]';
		$m.__track_lines__[797] = 'ArgsTest.py, line 797:\n    class ArgsTestClass_foo2:';
		$m.__track_lines__[798] = 'ArgsTest.py, line 798:\n    def __init__(self, a=None, b=None, c=None):';
		$m.__track_lines__[799] = 'ArgsTest.py, line 799:\n    self.x = [a, b, c]';
		$m.__track_lines__[801] = 'ArgsTest.py, line 801:\n    class ArgsTestClass_foo3:';
		$m.__track_lines__[802] = 'ArgsTest.py, line 802:\n    def __init__(self, a=1, b=2, c=3):';
		$m.__track_lines__[803] = 'ArgsTest.py, line 803:\n    self.x = [a, b, c]';
		$m.__track_lines__[805] = 'ArgsTest.py, line 805:\n    class ArgsTestClass_foo4:';
		$m.__track_lines__[806] = 'ArgsTest.py, line 806:\n    def __init__(self, a, b, c, *args):';
		$m.__track_lines__[807] = 'ArgsTest.py, line 807:\n    self.x = a, b, c, args';
		$m.__track_lines__[809] = 'ArgsTest.py, line 809:\n    class ArgsTestClass_foo5:';
		$m.__track_lines__[810] = 'ArgsTest.py, line 810:\n    def __init__(self, a, b, c, **kwargs):';
		$m.__track_lines__[811] = 'ArgsTest.py, line 811:\n    self.x = a, b, c, kwargs';
		$m.__track_lines__[813] = 'ArgsTest.py, line 813:\n    class ArgsTestClass_foo6:';
		$m.__track_lines__[814] = 'ArgsTest.py, line 814:\n    def __init__(self, a, b, c, *args, **kwargs):';
		$m.__track_lines__[815] = 'ArgsTest.py, line 815:\n    self.x = (a, b, c, args, kwargs)';
		$m.__track_lines__[817] = 'ArgsTest.py, line 817:\n    class ArgsTestClass:';
		$m.__track_lines__[818] = 'ArgsTest.py, line 818:\n    def foo(self, a, b, c):';
		$m.__track_lines__[819] = 'ArgsTest.py, line 819:\n    return [a, b, c]';
		$m.__track_lines__[821] = 'ArgsTest.py, line 821:\n    def foo2(self, a=None, b=None, c=None):';
		$m.__track_lines__[822] = 'ArgsTest.py, line 822:\n    return [a, b, c]';
		$m.__track_lines__[824] = 'ArgsTest.py, line 824:\n    def foo3(self, a=1, b=2, c=3):';
		$m.__track_lines__[825] = 'ArgsTest.py, line 825:\n    return [a, b, c]';
		$m.__track_lines__[827] = 'ArgsTest.py, line 827:\n    def foo4(self, *args):';
		$m.__track_lines__[828] = 'ArgsTest.py, line 828:\n    return args';
		$m.__track_lines__[830] = 'ArgsTest.py, line 830:\n    def foo5(self, **kwargs):';
		$m.__track_lines__[831] = 'ArgsTest.py, line 831:\n    return kwargs';
		$m.__track_lines__[833] = 'ArgsTest.py, line 833:\n    def foo6(self, *args, **kwargs):';
		$m.__track_lines__[834] = 'ArgsTest.py, line 834:\n    return (args, kwargs)';
		$m.__track_lines__[836] = 'ArgsTest.py, line 836:\n    def foo7(self, a, *args, **kwargs):';
		$m.__track_lines__[837] = 'ArgsTest.py, line 837:\n    return (a, args, kwargs)';
		$m.__track_lines__[839] = 'ArgsTest.py, line 839:\n    def foo8(self, a, **kwargs):';
		$m.__track_lines__[840] = 'ArgsTest.py, line 840:\n    return (a, kwargs)';
		$m.__track_lines__[843] = 'ArgsTest.py, line 843:\n    class ArgsTestClass2:';
		$m.__track_lines__[845] = 'ArgsTest.py, line 844:\n    @staticmethod ... def foo(a, b, c):';
		$m.__track_lines__[846] = 'ArgsTest.py, line 846:\n    return [a, b, c]';
		$m.__track_lines__[849] = 'ArgsTest.py, line 848:\n    @staticmethod ... def foo2(a=None, b=None, c=None):';
		$m.__track_lines__[850] = 'ArgsTest.py, line 850:\n    return [a, b, c]';
		$m.__track_lines__[853] = 'ArgsTest.py, line 852:\n    @staticmethod ... def foo3(a=1, b=2, c=3):';
		$m.__track_lines__[854] = 'ArgsTest.py, line 854:\n    return [a, b, c]';
		$m.__track_lines__[857] = 'ArgsTest.py, line 856:\n    @staticmethod ... def foo4(*args):';
		$m.__track_lines__[858] = 'ArgsTest.py, line 858:\n    return args';
		$m.__track_lines__[861] = 'ArgsTest.py, line 860:\n    @staticmethod ... def foo5(**kwargs):';
		$m.__track_lines__[862] = 'ArgsTest.py, line 862:\n    return kwargs';
		$m.__track_lines__[865] = 'ArgsTest.py, line 864:\n    @staticmethod ... def foo6(*args, **kwargs):';
		$m.__track_lines__[866] = 'ArgsTest.py, line 866:\n    return (args, kwargs)';
		$m.__track_lines__[869] = 'ArgsTest.py, line 868:\n    @staticmethod ... def foo7(a, *args, **kwargs):';
		$m.__track_lines__[870] = 'ArgsTest.py, line 870:\n    return (a, args, kwargs)';
		$m.__track_lines__[873] = 'ArgsTest.py, line 872:\n    @staticmethod ... def foo8(a, **kwargs):';
		$m.__track_lines__[874] = 'ArgsTest.py, line 874:\n    return (a, kwargs)';
		$m.__track_lines__[876] = 'ArgsTest.py, line 876:\n    class ArgsTestClass3:';
		$m.__track_lines__[878] = 'ArgsTest.py, line 877:\n    @classmethod ... def foo(self, a, b, c):';
		$m.__track_lines__[879] = 'ArgsTest.py, line 879:\n    return [a, b, c]';
		$m.__track_lines__[882] = 'ArgsTest.py, line 881:\n    @classmethod ... def foo2(self, a=None, b=None, c=None):';
		$m.__track_lines__[883] = 'ArgsTest.py, line 883:\n    return [a, b, c]';
		$m.__track_lines__[886] = 'ArgsTest.py, line 885:\n    @classmethod ... def foo3(self, a=1, b=2, c=3):';
		$m.__track_lines__[887] = 'ArgsTest.py, line 887:\n    return [a, b, c]';
		$m.__track_lines__[890] = 'ArgsTest.py, line 889:\n    @classmethod ... def foo4(self, *args):';
		$m.__track_lines__[891] = 'ArgsTest.py, line 891:\n    return args';
		$m.__track_lines__[894] = 'ArgsTest.py, line 893:\n    @classmethod ... def foo5(self, **kwargs):';
		$m.__track_lines__[895] = 'ArgsTest.py, line 895:\n    return kwargs';
		$m.__track_lines__[898] = 'ArgsTest.py, line 897:\n    @classmethod ... def foo6(self, *args, **kwargs):';
		$m.__track_lines__[899] = 'ArgsTest.py, line 899:\n    return (args, kwargs)';
		$m.__track_lines__[902] = 'ArgsTest.py, line 901:\n    @classmethod ... def foo7(self, a, *args, **kwargs):';
		$m.__track_lines__[903] = 'ArgsTest.py, line 903:\n    return (a, args, kwargs)';
		$m.__track_lines__[906] = 'ArgsTest.py, line 905:\n    @classmethod ... def foo8(self, a, **kwargs):';
		$m.__track_lines__[907] = 'ArgsTest.py, line 907:\n    return (a, kwargs)';
		$m.__track_lines__[910] = 'ArgsTest.py, line 910:\n    class KwArgs:';
		$m.__track_lines__[911] = 'ArgsTest.py, line 911:\n    def __init__(self, z=7, zz=77, **kwargs):';
		$m.__track_lines__[912] = 'ArgsTest.py, line 912:\n    self.kwargs = kwargs';
		$m.__track_lines__[913] = "ArgsTest.py, line 913:\n    self.kwargs['z'] = z # XXX this causes problems: kwargs is undefined";
		$m.__track_lines__[915] = 'ArgsTest.py, line 915:\n    def set_kwargs(self, z=8, **kwargs):';
		$m.__track_lines__[916] = 'ArgsTest.py, line 916:\n    self.kwargs = kwargs';
		$m.__track_lines__[917] = "ArgsTest.py, line 917:\n    self.kwargs['z'] = z";
		$m.__track_lines__[919] = 'ArgsTest.py, line 919:\n    class Kwargs2(KwArgs):';
		$m.__track_lines__[921] = 'ArgsTest.py, line 921:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[922] = 'ArgsTest.py, line 922:\n    KwArgs.__init__(self, **kwargs)';
		$m.__track_lines__[924] = 'ArgsTest.py, line 924:\n    def set_kwargs2(self, **kwargs):';
		$m.__track_lines__[925] = 'ArgsTest.py, line 925:\n    KwArgs.set_kwargs(self, **kwargs)';
		$m.__track_lines__[927] = 'ArgsTest.py, line 927:\n    def set_kwargs3(self, **kwargs):';
		$m.__track_lines__[928] = 'ArgsTest.py, line 928:\n    skw = getattr(self, "set_kwargs")';
		$m.__track_lines__[929] = 'ArgsTest.py, line 929:\n    skw(**kwargs)';
		$m.__track_lines__[931] = 'ArgsTest.py, line 931:\n    def kw_args(**kwargs):';
		$m.__track_lines__[932] = 'ArgsTest.py, line 932:\n    return kwargs';
		$m.__track_lines__[934] = 'ArgsTest.py, line 934:\n    def kw_args2(**kwargs):';
		$m.__track_lines__[935] = 'ArgsTest.py, line 935:\n    return kw_args(**kwargs)';
		$m.__track_lines__[937] = 'ArgsTest.py, line 937:\n    def varargs_kwargs(arg1, arg2=2, *args, **kwargs):';
		$m.__track_lines__[938] = 'ArgsTest.py, line 938:\n    return (arg1, arg2, args, kwargs)';
		$m.__track_lines__[940] = 'ArgsTest.py, line 940:\n    def varargs_kwargs2(arg1, arg2=3, *args, **kwargs):';
		$m.__track_lines__[941] = 'ArgsTest.py, line 941:\n    return varargs_kwargs(arg1, arg2, *args, **kwargs)';

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
		var $constant_int_77 = new $p['int'](77);
		$pyjs.track.module='ArgsTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['aArgs'] = function() {
			if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


			$pyjs.track={module:'ArgsTest',lineno:3};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=4;
			var $pyjs__ret = args;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aArgs'].__name__ = 'aArgs';

		$m['aArgs'].__bind_type__ = 0;
		$m['aArgs'].__args__ = ['args',null];
		$pyjs.track.lineno=6;
		$m['ftest'] = function(a, b) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'ArgsTest',lineno:6};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=7;
			var $pyjs__ret = $p['list']([a, b]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['ftest'].__name__ = 'ftest';

		$m['ftest'].__bind_type__ = 0;
		$m['ftest'].__args__ = [null,null,['a'],['b']];
		$pyjs.track.lineno=9;
		$m['ArgsTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = '912c959ea80c5980444629f7cf5ab5ed';
			$pyjs.track.lineno=11;
			$method = $pyjs__bind_method2('testNaming1', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var values,$4,$2,$3,$1;
				$pyjs.track={module:'ArgsTest', lineno:11};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=12;
				values = $m['ftest']($constant_int_1, $constant_int_2);
				$pyjs.track.lineno=13;
				self['assertEquals']((typeof ($1=values).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=14;
				self['assertEquals']((typeof ($3=values).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_1]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNaming1'] = $method;
			$pyjs.track.lineno=16;
			$method = $pyjs__bind_method2('testNaming2', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var values,$8,$6,$7,$5;
				$pyjs.track={module:'ArgsTest', lineno:16};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=17;
				values = $pyjs_kwargs_call(null, $m['ftest'], null, null, [{a:$constant_int_1, b:$constant_int_2}]);
				$pyjs.track.lineno=18;
				self['assertEquals']((typeof ($5=values).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=19;
				self['assertEquals']((typeof ($7=values).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_1]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNaming2'] = $method;
			$pyjs.track.lineno=21;
			$method = $pyjs__bind_method2('testNaming3', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $10,$11,$12,values,$9;
				$pyjs.track={module:'ArgsTest', lineno:21};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=21;
				$pyjs.track.lineno=22;
				values = $pyjs_kwargs_call(null, $m['ftest'], null, null, [{b:$constant_int_2}, $constant_int_1]);
				$pyjs.track.lineno=23;
				self['assertEquals']((typeof ($9=values).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=24;
				self['assertEquals']((typeof ($11=values).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_1]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNaming3'] = $method;
			$pyjs.track.lineno=26;
			$method = $pyjs__bind_method2('testNaming4', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,values,t,exc_raised;
				$pyjs.track={module:'ArgsTest', lineno:26};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=26;
				$pyjs.track.lineno=27;
				exc_raised = false;
				$pyjs.track.lineno=28;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=29;
					values = $pyjs_kwargs_call(null, $m['ftest'], null, null, [{c:$constant_int_2}, $constant_int_1]);
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
					$pyjs.track.module='ArgsTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						t = $pyjs_try_err;
						$pyjs.track.lineno=31;
						exc_raised = true;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=32;
				self['assertTrue'](exc_raised, "TypeError 'c' unexpected arg not raised");
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNaming4'] = $method;
			$pyjs.track.lineno=34;
			$method = $pyjs__bind_method2('testNaming5', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,values,t,exc_raised;
				$pyjs.track={module:'ArgsTest', lineno:34};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=34;
				$pyjs.track.lineno=35;
				exc_raised = false;
				$pyjs.track.lineno=36;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=37;
					values = $m['ftest']();
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
					$pyjs.track.module='ArgsTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						t = $pyjs_try_err;
						$pyjs.track.lineno=39;
						exc_raised = true;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=40;
				self['assertTrue'](exc_raised, "TypeError 'ftest() takes exactly 2 arguments (0 given)' not raised");
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNaming5'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('testSimpleCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,$17,$13,$21,$20,$22,$18,$19,$24,values,$23;
				$pyjs.track={module:'ArgsTest', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				values = (typeof foo == "undefined"?$m.foo:foo)($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=44;
				self['assertEquals']((typeof ($13=values).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_0]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=45;
				self['assertEquals']((typeof ($15=values).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_1]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=46;
				self['assertEquals']((typeof ($17=values).__array != 'undefined'?
					((typeof $17.__array[$18=$constant_int_2]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=48;
				values = (typeof foo2 == "undefined"?$m.foo2:foo2)($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=49;
				self['assertEquals']((typeof ($19=values).__array != 'undefined'?
					((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=50;
				self['assertEquals']((typeof ($21=values).__array != 'undefined'?
					((typeof $21.__array[$22=$constant_int_1]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=51;
				self['assertEquals']((typeof ($23=values).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_2]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleCall'] = $method;
			$pyjs.track.lineno=53;
			$method = $pyjs__bind_method2('testKeywordCall1', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $29,$28,$25,$27,$26,values,$30;
				$pyjs.track={module:'ArgsTest', lineno:53};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=53;
				$pyjs.track.lineno=54;
				values = $pyjs_kwargs_call(null, (typeof foo2 == "undefined"?$m.foo2:foo2), null, null, [{c:$constant_int_3, b:$constant_int_2, a:$constant_int_1}]);
				$pyjs.track.lineno=55;
				self['assertEquals']((typeof ($25=values).__array != 'undefined'?
					((typeof $25.__array[$26=$constant_int_0]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=56;
				self['assertEquals']((typeof ($27=values).__array != 'undefined'?
					((typeof $27.__array[$28=$constant_int_1]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=57;
				self['assertEquals']((typeof ($29=values).__array != 'undefined'?
					((typeof $29.__array[$30=$constant_int_2]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordCall1'] = $method;
			$pyjs.track.lineno=59;
			$method = $pyjs__bind_method2('testKeywordCall2', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $36,$34,$35,$32,$33,$31,values;
				$pyjs.track={module:'ArgsTest', lineno:59};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=60;
				values = $pyjs_kwargs_call(null, (typeof foo2 == "undefined"?$m.foo2:foo2), null, null, [{b:$constant_int_2, a:$constant_int_1, c:$constant_int_3}]);
				$pyjs.track.lineno=61;
				self['assertEquals']((typeof ($31=values).__array != 'undefined'?
					((typeof $31.__array[$32=$constant_int_0]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=62;
				self['assertEquals']((typeof ($33=values).__array != 'undefined'?
					((typeof $33.__array[$34=$constant_int_1]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=63;
				self['assertEquals']((typeof ($35=values).__array != 'undefined'?
					((typeof $35.__array[$36=$constant_int_2]) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordCall2'] = $method;
			$pyjs.track.lineno=65;
			$method = $pyjs__bind_method2('testKeywordCall3', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $38,$39,$37,values,$42,$41,$40;
				$pyjs.track={module:'ArgsTest', lineno:65};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=65;
				$pyjs.track.lineno=66;
				values = $pyjs_kwargs_call(null, (typeof foo2 == "undefined"?$m.foo2:foo2), null, null, [{c:$constant_int_3}, $constant_int_1]);
				$pyjs.track.lineno=67;
				self['assertEquals']((typeof ($37=values).__array != 'undefined'?
					((typeof $37.__array[$38=$constant_int_0]) != 'undefined'?$37.__array[$38]:
						$37.__getitem__($38)):
						$37.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=68;
				self['assertEquals']((typeof ($39=values).__array != 'undefined'?
					((typeof $39.__array[$40=$constant_int_1]) != 'undefined'?$39.__array[$40]:
						$39.__getitem__($40)):
						$39.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=69;
				self['assertEquals']((typeof ($41=values).__array != 'undefined'?
					((typeof $41.__array[$42=$constant_int_2]) != 'undefined'?$41.__array[$42]:
						$41.__getitem__($42)):
						$41.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordCall3'] = $method;
			$pyjs.track.lineno=71;
			$method = $pyjs__bind_method2('testKeywordCall4', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $48,values,$43,$47,$46,$45,$44;
				$pyjs.track={module:'ArgsTest', lineno:71};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=72;
				values = (typeof foo2 == "undefined"?$m.foo2:foo2)();
				$pyjs.track.lineno=73;
				self['assertEquals']((typeof ($43=values).__array != 'undefined'?
					((typeof $43.__array[$44=$constant_int_0]) != 'undefined'?$43.__array[$44]:
						$43.__getitem__($44)):
						$43.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=74;
				self['assertEquals']((typeof ($45=values).__array != 'undefined'?
					((typeof $45.__array[$46=$constant_int_1]) != 'undefined'?$45.__array[$46]:
						$45.__getitem__($46)):
						$45.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=75;
				self['assertEquals']((typeof ($47=values).__array != 'undefined'?
					((typeof $47.__array[$48=$constant_int_2]) != 'undefined'?$47.__array[$48]:
						$47.__getitem__($48)):
						$47.__getitem__($constant_int_2)), null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordCall4'] = $method;
			$pyjs.track.lineno=77;
			$method = $pyjs__bind_method2('testKeywordCall5', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $49,values,$50,$51,$52,$53,$54;
				$pyjs.track={module:'ArgsTest', lineno:77};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=77;
				$pyjs.track.lineno=78;
				values = $pyjs_kwargs_call(null, (typeof foo2 == "undefined"?$m.foo2:foo2), null, null, [{c:true}]);
				$pyjs.track.lineno=79;
				self['assertEquals']((typeof ($49=values).__array != 'undefined'?
					((typeof $49.__array[$50=$constant_int_0]) != 'undefined'?$49.__array[$50]:
						$49.__getitem__($50)):
						$49.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=80;
				self['assertEquals']((typeof ($51=values).__array != 'undefined'?
					((typeof $51.__array[$52=$constant_int_1]) != 'undefined'?$51.__array[$52]:
						$51.__getitem__($52)):
						$51.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=81;
				self['assertEquals']((typeof ($53=values).__array != 'undefined'?
					((typeof $53.__array[$54=$constant_int_2]) != 'undefined'?$53.__array[$54]:
						$53.__getitem__($54)):
						$53.__getitem__($constant_int_2)), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordCall5'] = $method;
			$pyjs.track.lineno=83;
			$method = $pyjs__bind_method2('testStarArgs', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,exc,res,args,$add2,$add3,$pyjs_try_err,$add4,$add1,called;
				$pyjs.track={module:'ArgsTest', lineno:83};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=84;
				args = $p['tuple']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=85;
				res = $pyjs_kwargs_call(null, $m['aArgs'], args, null, [{}]);
				$pyjs.track.lineno=86;
				self['assertEquals'](args, res);
				$pyjs.track.lineno=88;
				args = '123';
				$pyjs.track.lineno=89;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=90;
					res = $pyjs_kwargs_call(null, $m['aArgs'], args, null, [{}]);
					$pyjs.track.lineno=91;
					called = true;
					$pyjs.track.lineno=92;
					exc = null;
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
					$pyjs.track.module='ArgsTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=94;
						called = false;
						$pyjs.track.lineno=95;
						exc = e;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=99;
				self['assertTrue'](called, (typeof ($add3=(typeof ($add1='exception not expected but function called:')==typeof ($add2=$p['repr'](res)) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4=$p['repr'](exc)) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)));
				$pyjs.track.lineno=101;
				self['assertEquals'](res, $p['tuple'](['1', '2', '3']));
				$pyjs.track.lineno=104;
				args = $constant_int_1;
				$pyjs.track.lineno=105;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=106;
					res = $pyjs_kwargs_call(null, $m['aArgs'], args, null, [{}]);
					$pyjs.track.lineno=107;
					called = true;
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
					$pyjs.track.module='ArgsTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs.track.lineno=109;
						called = false;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=111;
				self['assertFalse'](called, 'exception expected but not raised - TypeError: aArgs() argument after * must be a sequence');
				$pyjs.track.lineno=115;
				args = $p['tuple']([$constant_int_1]);
				$pyjs.track.lineno=116;
				res = $pyjs_kwargs_call(null, $m['aArgs'], args, null, [{}]);
				$pyjs.track.lineno=117;
				self['assertEquals'](args, res);
				$pyjs.track.lineno=119;
				args = $p['tuple']([$constant_int_1]);
				$pyjs.track.lineno=120;
				res = $m['aArgs'](args);
				$pyjs.track.lineno=121;
				self['assertEquals']($p['tuple']([args]), res);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStarArgs'] = $method;
			$pyjs.track.lineno=124;
			$method = $pyjs__bind_method2('testDefaultValuesCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $72,$68,$70,$66,$69,$60,$58,$59,$71,values,$63,$65,$64,$67,$62,$61,$55,$56,$57;
				$pyjs.track={module:'ArgsTest', lineno:124};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=124;
				$pyjs.track.lineno=125;
				values = $pyjs_kwargs_call(null, (typeof foo3 == "undefined"?$m.foo3:foo3), null, null, [{b:$constant_int_7}]);
				$pyjs.track.lineno=126;
				self['assertEquals']((typeof ($55=values).__array != 'undefined'?
					((typeof $55.__array[$56=$constant_int_0]) != 'undefined'?$55.__array[$56]:
						$55.__getitem__($56)):
						$55.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=127;
				self['assertEquals']((typeof ($57=values).__array != 'undefined'?
					((typeof $57.__array[$58=$constant_int_1]) != 'undefined'?$57.__array[$58]:
						$57.__getitem__($58)):
						$57.__getitem__($constant_int_1)), $constant_int_7);
				$pyjs.track.lineno=128;
				self['assertEquals']((typeof ($59=values).__array != 'undefined'?
					((typeof $59.__array[$60=$constant_int_2]) != 'undefined'?$59.__array[$60]:
						$59.__getitem__($60)):
						$59.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=130;
				values = $pyjs_kwargs_call(null, (typeof foo3 == "undefined"?$m.foo3:foo3), null, null, [{a:$constant_int_9}]);
				$pyjs.track.lineno=131;
				self['assertEquals']((typeof ($61=values).__array != 'undefined'?
					((typeof $61.__array[$62=$constant_int_0]) != 'undefined'?$61.__array[$62]:
						$61.__getitem__($62)):
						$61.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=132;
				self['assertEquals']((typeof ($63=values).__array != 'undefined'?
					((typeof $63.__array[$64=$constant_int_1]) != 'undefined'?$63.__array[$64]:
						$63.__getitem__($64)):
						$63.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=133;
				self['assertEquals']((typeof ($65=values).__array != 'undefined'?
					((typeof $65.__array[$66=$constant_int_2]) != 'undefined'?$65.__array[$66]:
						$65.__getitem__($66)):
						$65.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=135;
				values = (typeof foo3 == "undefined"?$m.foo3:foo3)();
				$pyjs.track.lineno=136;
				self['assertEquals']((typeof ($67=values).__array != 'undefined'?
					((typeof $67.__array[$68=$constant_int_0]) != 'undefined'?$67.__array[$68]:
						$67.__getitem__($68)):
						$67.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=137;
				self['assertEquals']((typeof ($69=values).__array != 'undefined'?
					((typeof $69.__array[$70=$constant_int_1]) != 'undefined'?$69.__array[$70]:
						$69.__getitem__($70)):
						$69.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=138;
				self['assertEquals']((typeof ($71=values).__array != 'undefined'?
					((typeof $71.__array[$72=$constant_int_2]) != 'undefined'?$71.__array[$72]:
						$71.__getitem__($72)):
						$71.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDefaultValuesCall'] = $method;
			$pyjs.track.lineno=140;
			$method = $pyjs__bind_method2('testVarargsCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $98,$99,$94,$95,$96,$97,$90,$91,$92,$93,$107,$106,$108,$101,$100,$103,$102,$105,$104,$89,$88,$87,$86,$85,$84,$83,$82,$81,$80,$73,$76,$77,$74,$75,$78,$79,values;
				$pyjs.track={module:'ArgsTest', lineno:140};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=140;
				$pyjs.track.lineno=141;
				values = (typeof foo4 == "undefined"?$m.foo4:foo4)($constant_int_9, $constant_int_8, $constant_int_7, $constant_int_2, $constant_int_3, $constant_int_4);
				$pyjs.track.lineno=142;
				self['assertEquals']((typeof ($73=values).__array != 'undefined'?
					((typeof $73.__array[$74=$constant_int_0]) != 'undefined'?$73.__array[$74]:
						$73.__getitem__($74)):
						$73.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=143;
				self['assertEquals']((typeof ($75=values).__array != 'undefined'?
					((typeof $75.__array[$76=$constant_int_1]) != 'undefined'?$75.__array[$76]:
						$75.__getitem__($76)):
						$75.__getitem__($constant_int_1)), $constant_int_8);
				$pyjs.track.lineno=144;
				self['assertEquals']((typeof ($77=values).__array != 'undefined'?
					((typeof $77.__array[$78=$constant_int_2]) != 'undefined'?$77.__array[$78]:
						$77.__getitem__($78)):
						$77.__getitem__($constant_int_2)), $constant_int_7);
				$pyjs.track.lineno=145;
				self['assertEquals']((typeof ($81=(typeof ($79=values).__array != 'undefined'?
					((typeof $79.__array[$80=$constant_int_3]) != 'undefined'?$79.__array[$80]:
						$79.__getitem__($80)):
						$79.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $81.__array[$82=$constant_int_0]) != 'undefined'?$81.__array[$82]:
						$81.__getitem__($82)):
						$81.__getitem__($constant_int_0)), $constant_int_2);
				$pyjs.track.lineno=146;
				self['assertEquals']((typeof ($85=(typeof ($83=values).__array != 'undefined'?
					((typeof $83.__array[$84=$constant_int_3]) != 'undefined'?$83.__array[$84]:
						$83.__getitem__($84)):
						$83.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $85.__array[$86=$constant_int_1]) != 'undefined'?$85.__array[$86]:
						$85.__getitem__($86)):
						$85.__getitem__($constant_int_1)), $constant_int_3);
				$pyjs.track.lineno=147;
				self['assertEquals']((typeof ($89=(typeof ($87=values).__array != 'undefined'?
					((typeof $87.__array[$88=$constant_int_3]) != 'undefined'?$87.__array[$88]:
						$87.__getitem__($88)):
						$87.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $89.__array[$90=$constant_int_2]) != 'undefined'?$89.__array[$90]:
						$89.__getitem__($90)):
						$89.__getitem__($constant_int_2)), $constant_int_4);
				$pyjs.track.lineno=149;
				values = (typeof foo4 == "undefined"?$m.foo4:foo4)($constant_int_9, $constant_int_8, $constant_int_7, $constant_int_3, $constant_int_2, $constant_int_1);
				$pyjs.track.lineno=150;
				self['assertEquals']((typeof ($91=values).__array != 'undefined'?
					((typeof $91.__array[$92=$constant_int_0]) != 'undefined'?$91.__array[$92]:
						$91.__getitem__($92)):
						$91.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=151;
				self['assertEquals']((typeof ($93=values).__array != 'undefined'?
					((typeof $93.__array[$94=$constant_int_1]) != 'undefined'?$93.__array[$94]:
						$93.__getitem__($94)):
						$93.__getitem__($constant_int_1)), $constant_int_8);
				$pyjs.track.lineno=152;
				self['assertEquals']((typeof ($95=values).__array != 'undefined'?
					((typeof $95.__array[$96=$constant_int_2]) != 'undefined'?$95.__array[$96]:
						$95.__getitem__($96)):
						$95.__getitem__($constant_int_2)), $constant_int_7);
				$pyjs.track.lineno=153;
				self['assertEquals']((typeof ($99=(typeof ($97=values).__array != 'undefined'?
					((typeof $97.__array[$98=$constant_int_3]) != 'undefined'?$97.__array[$98]:
						$97.__getitem__($98)):
						$97.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $99.__array[$100=$constant_int_0]) != 'undefined'?$99.__array[$100]:
						$99.__getitem__($100)):
						$99.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=154;
				self['assertEquals']((typeof ($103=(typeof ($101=values).__array != 'undefined'?
					((typeof $101.__array[$102=$constant_int_3]) != 'undefined'?$101.__array[$102]:
						$101.__getitem__($102)):
						$101.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $103.__array[$104=$constant_int_1]) != 'undefined'?$103.__array[$104]:
						$103.__getitem__($104)):
						$103.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=155;
				self['assertEquals']((typeof ($107=(typeof ($105=values).__array != 'undefined'?
					((typeof $105.__array[$106=$constant_int_3]) != 'undefined'?$105.__array[$106]:
						$105.__getitem__($106)):
						$105.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $107.__array[$108=$constant_int_2]) != 'undefined'?$107.__array[$108]:
						$107.__getitem__($108)):
						$107.__getitem__($constant_int_2)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testVarargsCall'] = $method;
			$pyjs.track.lineno=157;
			$method = $pyjs__bind_method2('testKwargsCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $116,$117,$114,$115,$112,$113,$110,$111,$109,$118,$119,values,$122,$121,$120;
				$pyjs.track={module:'ArgsTest', lineno:157};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=157;
				$pyjs.track.lineno=158;
				values = $pyjs_kwargs_call(null, (typeof foo5 == "undefined"?$m.foo5:foo5), null, null, [{x:$constant_int_5, y:$constant_int_7}, $constant_int_9, $constant_int_8, $constant_int_7]);
				$pyjs.track.lineno=159;
				self['assertEquals']((typeof ($109=values).__array != 'undefined'?
					((typeof $109.__array[$110=$constant_int_0]) != 'undefined'?$109.__array[$110]:
						$109.__getitem__($110)):
						$109.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=160;
				self['assertEquals']((typeof ($111=values).__array != 'undefined'?
					((typeof $111.__array[$112=$constant_int_1]) != 'undefined'?$111.__array[$112]:
						$111.__getitem__($112)):
						$111.__getitem__($constant_int_1)), $constant_int_8);
				$pyjs.track.lineno=161;
				self['assertEquals']((typeof ($113=values).__array != 'undefined'?
					((typeof $113.__array[$114=$constant_int_2]) != 'undefined'?$113.__array[$114]:
						$113.__getitem__($114)):
						$113.__getitem__($constant_int_2)), $constant_int_7);
				$pyjs.track.lineno=162;
				self['assertEquals']((typeof ($117=(typeof ($115=values).__array != 'undefined'?
					((typeof $115.__array[$116=$constant_int_3]) != 'undefined'?$115.__array[$116]:
						$115.__getitem__($116)):
						$115.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $117.__array[$118='x']) != 'undefined'?$117.__array[$118]:
						$117.__getitem__($118)):
						$117.__getitem__('x')), $constant_int_5);
				$pyjs.track.lineno=163;
				self['assertEquals']((typeof ($121=(typeof ($119=values).__array != 'undefined'?
					((typeof $119.__array[$120=$constant_int_3]) != 'undefined'?$119.__array[$120]:
						$119.__getitem__($120)):
						$119.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $121.__array[$122='y']) != 'undefined'?$121.__array[$122]:
						$121.__getitem__($122)):
						$121.__getitem__('y')), $constant_int_7);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwargsCall'] = $method;
			$pyjs.track.lineno=165;
			$method = $pyjs__bind_method2('testComboCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $138,$139,$130,$131,$132,$133,$134,$135,$136,$137,$145,$127,$126,$143,$124,$129,$128,$148,$123,$144,$147,$146,$141,$140,$125,$142,values;
				$pyjs.track={module:'ArgsTest', lineno:165};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=165;
				$pyjs.track.lineno=166;
				values = $pyjs_kwargs_call(null, (typeof foo6 == "undefined"?$m.foo6:foo6), null, null, [{x:$constant_int_4, y:$constant_int_5}, $constant_int_9, $constant_int_8, $constant_int_7, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=167;
				self['assertEquals']((typeof ($123=values).__array != 'undefined'?
					((typeof $123.__array[$124=$constant_int_0]) != 'undefined'?$123.__array[$124]:
						$123.__getitem__($124)):
						$123.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=168;
				self['assertEquals']((typeof ($125=values).__array != 'undefined'?
					((typeof $125.__array[$126=$constant_int_1]) != 'undefined'?$125.__array[$126]:
						$125.__getitem__($126)):
						$125.__getitem__($constant_int_1)), $constant_int_8);
				$pyjs.track.lineno=169;
				self['assertEquals']((typeof ($127=values).__array != 'undefined'?
					((typeof $127.__array[$128=$constant_int_2]) != 'undefined'?$127.__array[$128]:
						$127.__getitem__($128)):
						$127.__getitem__($constant_int_2)), $constant_int_7);
				$pyjs.track.lineno=170;
				self['assertEquals']((typeof ($131=(typeof ($129=values).__array != 'undefined'?
					((typeof $129.__array[$130=$constant_int_3]) != 'undefined'?$129.__array[$130]:
						$129.__getitem__($130)):
						$129.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $131.__array[$132=$constant_int_0]) != 'undefined'?$131.__array[$132]:
						$131.__getitem__($132)):
						$131.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=171;
				self['assertEquals']((typeof ($135=(typeof ($133=values).__array != 'undefined'?
					((typeof $133.__array[$134=$constant_int_3]) != 'undefined'?$133.__array[$134]:
						$133.__getitem__($134)):
						$133.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $135.__array[$136=$constant_int_1]) != 'undefined'?$135.__array[$136]:
						$135.__getitem__($136)):
						$135.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=172;
				self['assertEquals']((typeof ($139=(typeof ($137=values).__array != 'undefined'?
					((typeof $137.__array[$138=$constant_int_3]) != 'undefined'?$137.__array[$138]:
						$137.__getitem__($138)):
						$137.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $139.__array[$140=$constant_int_2]) != 'undefined'?$139.__array[$140]:
						$139.__getitem__($140)):
						$139.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=173;
				self['assertEquals']((typeof ($143=(typeof ($141=values).__array != 'undefined'?
					((typeof $141.__array[$142=$constant_int_4]) != 'undefined'?$141.__array[$142]:
						$141.__getitem__($142)):
						$141.__getitem__($constant_int_4))).__array != 'undefined'?
					((typeof $143.__array[$144='x']) != 'undefined'?$143.__array[$144]:
						$143.__getitem__($144)):
						$143.__getitem__('x')), $constant_int_4);
				$pyjs.track.lineno=174;
				self['assertEquals']((typeof ($147=(typeof ($145=values).__array != 'undefined'?
					((typeof $145.__array[$146=$constant_int_4]) != 'undefined'?$145.__array[$146]:
						$145.__getitem__($146)):
						$145.__getitem__($constant_int_4))).__array != 'undefined'?
					((typeof $147.__array[$148='y']) != 'undefined'?$147.__array[$148]:
						$147.__getitem__($148)):
						$147.__getitem__('y')), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComboCall'] = $method;
			$pyjs.track.lineno=176;
			$method = $pyjs__bind_method2('testEdgeCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $152,$153,$150,$151,$156,$157,$154,$155,$158,$159,$167,$166,$165,$164,$163,$162,$161,$160,$168,vaules,values,$149;
				$pyjs.track={module:'ArgsTest', lineno:176};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=176;
				$pyjs.track.lineno=177;
				values = $pyjs_kwargs_call(null, (typeof foo7 == "undefined"?$m.foo7:foo7), null, null, [{b:$constant_int_2}, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=178;
				self['assertEqual']((typeof ($149=values).__array != 'undefined'?
					((typeof $149.__array[$150=$constant_int_0]) != 'undefined'?$149.__array[$150]:
						$149.__getitem__($150)):
						$149.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=179;
				self['assertEqual']((typeof ($151=values).__array != 'undefined'?
					((typeof $151.__array[$152=$constant_int_1]) != 'undefined'?$151.__array[$152]:
						$151.__getitem__($152)):
						$151.__getitem__($constant_int_1)), $p['tuple']([$constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=180;
				self['assertEqual']((typeof ($153=values).__array != 'undefined'?
					((typeof $153.__array[$154=$constant_int_2]) != 'undefined'?$153.__array[$154]:
						$153.__getitem__($154)):
						$153.__getitem__($constant_int_2)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=182;
				values = (typeof foo7 == "undefined"?$m.foo7:foo7)($constant_int_1, $constant_int_2, $constant_int_3, $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=183;
				self['assertEqual']((typeof ($155=values).__array != 'undefined'?
					((typeof $155.__array[$156=$constant_int_0]) != 'undefined'?$155.__array[$156]:
						$155.__getitem__($156)):
						$155.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=184;
				self['assertEqual']((typeof ($157=values).__array != 'undefined'?
					((typeof $157.__array[$158=$constant_int_1]) != 'undefined'?$157.__array[$158]:
						$157.__getitem__($158)):
						$157.__getitem__($constant_int_1)), $p['tuple']([$constant_int_2, $constant_int_3, $p['dict']([['b', $constant_int_2]])]));
				$pyjs.track.lineno=185;
				self['assertEqual']((typeof ($159=values).__array != 'undefined'?
					((typeof $159.__array[$160=$constant_int_2]) != 'undefined'?$159.__array[$160]:
						$159.__getitem__($160)):
						$159.__getitem__($constant_int_2)), $p['dict']([]));
				$pyjs.track.lineno=187;
				vaules = $pyjs_kwargs_call(null, (typeof foo8 == "undefined"?$m.foo8:foo8), null, null, [{b:$constant_int_2}, $constant_int_1]);
				$pyjs.track.lineno=188;
				self['assertEqual']((typeof ($161=vaules).__array != 'undefined'?
					((typeof $161.__array[$162=$constant_int_0]) != 'undefined'?$161.__array[$162]:
						$161.__getitem__($162)):
						$161.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=189;
				self['assertEqual']((typeof ($163=vaules).__array != 'undefined'?
					((typeof $163.__array[$164=$constant_int_1]) != 'undefined'?$163.__array[$164]:
						$163.__getitem__($164)):
						$163.__getitem__($constant_int_1)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=191;
				vaules = (typeof foo8 == "undefined"?$m.foo8:foo8)($p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=192;
				self['assertEqual']((typeof ($165=vaules).__array != 'undefined'?
					((typeof $165.__array[$166=$constant_int_0]) != 'undefined'?$165.__array[$166]:
						$165.__getitem__($166)):
						$165.__getitem__($constant_int_0)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=193;
				self['assertEqual']((typeof ($167=vaules).__array != 'undefined'?
					((typeof $167.__array[$168=$constant_int_1]) != 'undefined'?$167.__array[$168]:
						$167.__getitem__($168)):
						$167.__getitem__($constant_int_1)), $p['dict']([]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testEdgeCall'] = $method;
			$pyjs.track.lineno=195;
			$method = $pyjs__bind_method2('testSimpleCtorCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $180,$174,$175,$176,$177,$170,$171,$172,$173,values,$178,$179,$169;
				$pyjs.track={module:'ArgsTest', lineno:195};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=195;
				$pyjs.track.lineno=196;
				values = $p['getattr']((typeof ArgsTestClass_foo == "undefined"?$m.ArgsTestClass_foo:ArgsTestClass_foo)($constant_int_1, $constant_int_2, $constant_int_3), 'x');
				$pyjs.track.lineno=197;
				self['assertEquals']((typeof ($169=values).__array != 'undefined'?
					((typeof $169.__array[$170=$constant_int_0]) != 'undefined'?$169.__array[$170]:
						$169.__getitem__($170)):
						$169.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=198;
				self['assertEquals']((typeof ($171=values).__array != 'undefined'?
					((typeof $171.__array[$172=$constant_int_1]) != 'undefined'?$171.__array[$172]:
						$171.__getitem__($172)):
						$171.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=199;
				self['assertEquals']((typeof ($173=values).__array != 'undefined'?
					((typeof $173.__array[$174=$constant_int_2]) != 'undefined'?$173.__array[$174]:
						$173.__getitem__($174)):
						$173.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=201;
				values = $p['getattr']((typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2)($constant_int_1, $constant_int_2, $constant_int_3), 'x');
				$pyjs.track.lineno=202;
				self['assertEquals']((typeof ($175=values).__array != 'undefined'?
					((typeof $175.__array[$176=$constant_int_0]) != 'undefined'?$175.__array[$176]:
						$175.__getitem__($176)):
						$175.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=203;
				self['assertEquals']((typeof ($177=values).__array != 'undefined'?
					((typeof $177.__array[$178=$constant_int_1]) != 'undefined'?$177.__array[$178]:
						$177.__getitem__($178)):
						$177.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=204;
				self['assertEquals']((typeof ($179=values).__array != 'undefined'?
					((typeof $179.__array[$180=$constant_int_2]) != 'undefined'?$179.__array[$180]:
						$179.__getitem__($180)):
						$179.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleCtorCall'] = $method;
			$pyjs.track.lineno=206;
			$method = $pyjs__bind_method2('testKeywordCtorCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $189,$188,$181,$183,$182,$185,$184,$187,$186,$202,$203,$200,$201,$204,values,$198,$199,$196,$197,$194,$195,$192,$193,$190,$191;
				$pyjs.track={module:'ArgsTest', lineno:206};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=206;
				$pyjs.track.lineno=207;
				values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2), null, null, [{c:$constant_int_3, b:$constant_int_2, a:$constant_int_1}]), 'x');
				$pyjs.track.lineno=208;
				self['assertEquals']((typeof ($181=values).__array != 'undefined'?
					((typeof $181.__array[$182=$constant_int_0]) != 'undefined'?$181.__array[$182]:
						$181.__getitem__($182)):
						$181.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=209;
				self['assertEquals']((typeof ($183=values).__array != 'undefined'?
					((typeof $183.__array[$184=$constant_int_1]) != 'undefined'?$183.__array[$184]:
						$183.__getitem__($184)):
						$183.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=210;
				self['assertEquals']((typeof ($185=values).__array != 'undefined'?
					((typeof $185.__array[$186=$constant_int_2]) != 'undefined'?$185.__array[$186]:
						$185.__getitem__($186)):
						$185.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=212;
				values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2), null, null, [{b:$constant_int_2, a:$constant_int_1, c:$constant_int_3}]), 'x');
				$pyjs.track.lineno=213;
				self['assertEquals']((typeof ($187=values).__array != 'undefined'?
					((typeof $187.__array[$188=$constant_int_0]) != 'undefined'?$187.__array[$188]:
						$187.__getitem__($188)):
						$187.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=214;
				self['assertEquals']((typeof ($189=values).__array != 'undefined'?
					((typeof $189.__array[$190=$constant_int_1]) != 'undefined'?$189.__array[$190]:
						$189.__getitem__($190)):
						$189.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=215;
				self['assertEquals']((typeof ($191=values).__array != 'undefined'?
					((typeof $191.__array[$192=$constant_int_2]) != 'undefined'?$191.__array[$192]:
						$191.__getitem__($192)):
						$191.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=217;
				values = $p['getattr']((typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2)(), 'x');
				$pyjs.track.lineno=218;
				self['assertEquals']((typeof ($193=values).__array != 'undefined'?
					((typeof $193.__array[$194=$constant_int_0]) != 'undefined'?$193.__array[$194]:
						$193.__getitem__($194)):
						$193.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=219;
				self['assertEquals']((typeof ($195=values).__array != 'undefined'?
					((typeof $195.__array[$196=$constant_int_1]) != 'undefined'?$195.__array[$196]:
						$195.__getitem__($196)):
						$195.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=220;
				self['assertEquals']((typeof ($197=values).__array != 'undefined'?
					((typeof $197.__array[$198=$constant_int_2]) != 'undefined'?$197.__array[$198]:
						$197.__getitem__($198)):
						$197.__getitem__($constant_int_2)), null);
				$pyjs.track.lineno=222;
				values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo2 == "undefined"?$m.ArgsTestClass_foo2:ArgsTestClass_foo2), null, null, [{c:true}]), 'x');
				$pyjs.track.lineno=223;
				self['assertEquals']((typeof ($199=values).__array != 'undefined'?
					((typeof $199.__array[$200=$constant_int_0]) != 'undefined'?$199.__array[$200]:
						$199.__getitem__($200)):
						$199.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=224;
				self['assertEquals']((typeof ($201=values).__array != 'undefined'?
					((typeof $201.__array[$202=$constant_int_1]) != 'undefined'?$201.__array[$202]:
						$201.__getitem__($202)):
						$201.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=225;
				self['assertEquals']((typeof ($203=values).__array != 'undefined'?
					((typeof $203.__array[$204=$constant_int_2]) != 'undefined'?$203.__array[$204]:
						$203.__getitem__($204)):
						$203.__getitem__($constant_int_2)), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordCtorCall'] = $method;
			$pyjs.track.lineno=228;
			$method = $pyjs__bind_method2('testDefaultValuesCtorCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $208,$209,$220,$221,$206,$207,$222,$205,$215,$214,$217,$216,values,$210,$213,$212,$211,$219,$218;
				$pyjs.track={module:'ArgsTest', lineno:228};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=228;
				$pyjs.track.lineno=229;
				values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo3 == "undefined"?$m.ArgsTestClass_foo3:ArgsTestClass_foo3), null, null, [{b:$constant_int_7}]), 'x');
				$pyjs.track.lineno=230;
				self['assertEquals']((typeof ($205=values).__array != 'undefined'?
					((typeof $205.__array[$206=$constant_int_0]) != 'undefined'?$205.__array[$206]:
						$205.__getitem__($206)):
						$205.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=231;
				self['assertEquals']((typeof ($207=values).__array != 'undefined'?
					((typeof $207.__array[$208=$constant_int_1]) != 'undefined'?$207.__array[$208]:
						$207.__getitem__($208)):
						$207.__getitem__($constant_int_1)), $constant_int_7);
				$pyjs.track.lineno=232;
				self['assertEquals']((typeof ($209=values).__array != 'undefined'?
					((typeof $209.__array[$210=$constant_int_2]) != 'undefined'?$209.__array[$210]:
						$209.__getitem__($210)):
						$209.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=234;
				values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo3 == "undefined"?$m.ArgsTestClass_foo3:ArgsTestClass_foo3), null, null, [{a:$constant_int_9}]), 'x');
				$pyjs.track.lineno=235;
				self['assertEquals']((typeof ($211=values).__array != 'undefined'?
					((typeof $211.__array[$212=$constant_int_0]) != 'undefined'?$211.__array[$212]:
						$211.__getitem__($212)):
						$211.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=236;
				self['assertEquals']((typeof ($213=values).__array != 'undefined'?
					((typeof $213.__array[$214=$constant_int_1]) != 'undefined'?$213.__array[$214]:
						$213.__getitem__($214)):
						$213.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=237;
				self['assertEquals']((typeof ($215=values).__array != 'undefined'?
					((typeof $215.__array[$216=$constant_int_2]) != 'undefined'?$215.__array[$216]:
						$215.__getitem__($216)):
						$215.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=239;
				values = $p['getattr']((typeof ArgsTestClass_foo3 == "undefined"?$m.ArgsTestClass_foo3:ArgsTestClass_foo3)(), 'x');
				$pyjs.track.lineno=240;
				self['assertEquals']((typeof ($217=values).__array != 'undefined'?
					((typeof $217.__array[$218=$constant_int_0]) != 'undefined'?$217.__array[$218]:
						$217.__getitem__($218)):
						$217.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=241;
				self['assertEquals']((typeof ($219=values).__array != 'undefined'?
					((typeof $219.__array[$220=$constant_int_1]) != 'undefined'?$219.__array[$220]:
						$219.__getitem__($220)):
						$219.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=242;
				self['assertEquals']((typeof ($221=values).__array != 'undefined'?
					((typeof $221.__array[$222=$constant_int_2]) != 'undefined'?$221.__array[$222]:
						$221.__getitem__($222)):
						$221.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDefaultValuesCtorCall'] = $method;
			$pyjs.track.lineno=244;
			$method = $pyjs__bind_method2('testVarargsCtorCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $239,$238,$237,$236,$235,$234,$233,$232,$231,$230,$248,$249,$246,$247,$244,$245,$242,$243,$240,$241,$228,$229,$224,$225,$226,$227,$223,$258,values,$251,$250,$253,$252,$255,$254,$257,$256;
				$pyjs.track={module:'ArgsTest', lineno:244};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=244;
				$pyjs.track.lineno=245;
				values = $p['getattr']((typeof ArgsTestClass_foo4 == "undefined"?$m.ArgsTestClass_foo4:ArgsTestClass_foo4)($constant_int_9, $constant_int_8, $constant_int_7, $constant_int_2, $constant_int_3, $constant_int_4), 'x');
				$pyjs.track.lineno=246;
				self['assertEquals']((typeof ($223=values).__array != 'undefined'?
					((typeof $223.__array[$224=$constant_int_0]) != 'undefined'?$223.__array[$224]:
						$223.__getitem__($224)):
						$223.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=247;
				self['assertEquals']((typeof ($225=values).__array != 'undefined'?
					((typeof $225.__array[$226=$constant_int_1]) != 'undefined'?$225.__array[$226]:
						$225.__getitem__($226)):
						$225.__getitem__($constant_int_1)), $constant_int_8);
				$pyjs.track.lineno=248;
				self['assertEquals']((typeof ($227=values).__array != 'undefined'?
					((typeof $227.__array[$228=$constant_int_2]) != 'undefined'?$227.__array[$228]:
						$227.__getitem__($228)):
						$227.__getitem__($constant_int_2)), $constant_int_7);
				$pyjs.track.lineno=249;
				self['assertEquals']((typeof ($231=(typeof ($229=values).__array != 'undefined'?
					((typeof $229.__array[$230=$constant_int_3]) != 'undefined'?$229.__array[$230]:
						$229.__getitem__($230)):
						$229.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $231.__array[$232=$constant_int_0]) != 'undefined'?$231.__array[$232]:
						$231.__getitem__($232)):
						$231.__getitem__($constant_int_0)), $constant_int_2);
				$pyjs.track.lineno=250;
				self['assertEquals']((typeof ($235=(typeof ($233=values).__array != 'undefined'?
					((typeof $233.__array[$234=$constant_int_3]) != 'undefined'?$233.__array[$234]:
						$233.__getitem__($234)):
						$233.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $235.__array[$236=$constant_int_1]) != 'undefined'?$235.__array[$236]:
						$235.__getitem__($236)):
						$235.__getitem__($constant_int_1)), $constant_int_3);
				$pyjs.track.lineno=251;
				self['assertEquals']((typeof ($239=(typeof ($237=values).__array != 'undefined'?
					((typeof $237.__array[$238=$constant_int_3]) != 'undefined'?$237.__array[$238]:
						$237.__getitem__($238)):
						$237.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $239.__array[$240=$constant_int_2]) != 'undefined'?$239.__array[$240]:
						$239.__getitem__($240)):
						$239.__getitem__($constant_int_2)), $constant_int_4);
				$pyjs.track.lineno=253;
				values = $p['getattr']((typeof ArgsTestClass_foo4 == "undefined"?$m.ArgsTestClass_foo4:ArgsTestClass_foo4)($constant_int_9, $constant_int_8, $constant_int_7, $constant_int_3, $constant_int_2, $constant_int_1), 'x');
				$pyjs.track.lineno=254;
				self['assertEquals']((typeof ($241=values).__array != 'undefined'?
					((typeof $241.__array[$242=$constant_int_0]) != 'undefined'?$241.__array[$242]:
						$241.__getitem__($242)):
						$241.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=255;
				self['assertEquals']((typeof ($243=values).__array != 'undefined'?
					((typeof $243.__array[$244=$constant_int_1]) != 'undefined'?$243.__array[$244]:
						$243.__getitem__($244)):
						$243.__getitem__($constant_int_1)), $constant_int_8);
				$pyjs.track.lineno=256;
				self['assertEquals']((typeof ($245=values).__array != 'undefined'?
					((typeof $245.__array[$246=$constant_int_2]) != 'undefined'?$245.__array[$246]:
						$245.__getitem__($246)):
						$245.__getitem__($constant_int_2)), $constant_int_7);
				$pyjs.track.lineno=257;
				self['assertEquals']((typeof ($249=(typeof ($247=values).__array != 'undefined'?
					((typeof $247.__array[$248=$constant_int_3]) != 'undefined'?$247.__array[$248]:
						$247.__getitem__($248)):
						$247.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $249.__array[$250=$constant_int_0]) != 'undefined'?$249.__array[$250]:
						$249.__getitem__($250)):
						$249.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=258;
				self['assertEquals']((typeof ($253=(typeof ($251=values).__array != 'undefined'?
					((typeof $251.__array[$252=$constant_int_3]) != 'undefined'?$251.__array[$252]:
						$251.__getitem__($252)):
						$251.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $253.__array[$254=$constant_int_1]) != 'undefined'?$253.__array[$254]:
						$253.__getitem__($254)):
						$253.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=259;
				self['assertEquals']((typeof ($257=(typeof ($255=values).__array != 'undefined'?
					((typeof $255.__array[$256=$constant_int_3]) != 'undefined'?$255.__array[$256]:
						$255.__getitem__($256)):
						$255.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $257.__array[$258=$constant_int_2]) != 'undefined'?$257.__array[$258]:
						$257.__getitem__($258)):
						$257.__getitem__($constant_int_2)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testVarargsCtorCall'] = $method;
			$pyjs.track.lineno=261;
			$method = $pyjs__bind_method2('testKwargsCtorCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $260,$272,$269,$259,$261,$262,$263,values,$265,$266,$267,$268,$264,$270,$271;
				$pyjs.track={module:'ArgsTest', lineno:261};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=261;
				$pyjs.track.lineno=262;
				values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo5 == "undefined"?$m.ArgsTestClass_foo5:ArgsTestClass_foo5), null, null, [{x:$constant_int_5, y:$constant_int_7}, $constant_int_9, $constant_int_8, $constant_int_7]), 'x');
				$pyjs.track.lineno=263;
				self['assertEquals']((typeof ($259=values).__array != 'undefined'?
					((typeof $259.__array[$260=$constant_int_0]) != 'undefined'?$259.__array[$260]:
						$259.__getitem__($260)):
						$259.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=264;
				self['assertEquals']((typeof ($261=values).__array != 'undefined'?
					((typeof $261.__array[$262=$constant_int_1]) != 'undefined'?$261.__array[$262]:
						$261.__getitem__($262)):
						$261.__getitem__($constant_int_1)), $constant_int_8);
				$pyjs.track.lineno=265;
				self['assertEquals']((typeof ($263=values).__array != 'undefined'?
					((typeof $263.__array[$264=$constant_int_2]) != 'undefined'?$263.__array[$264]:
						$263.__getitem__($264)):
						$263.__getitem__($constant_int_2)), $constant_int_7);
				$pyjs.track.lineno=266;
				self['assertEquals']((typeof ($267=(typeof ($265=values).__array != 'undefined'?
					((typeof $265.__array[$266=$constant_int_3]) != 'undefined'?$265.__array[$266]:
						$265.__getitem__($266)):
						$265.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $267.__array[$268='x']) != 'undefined'?$267.__array[$268]:
						$267.__getitem__($268)):
						$267.__getitem__('x')), $constant_int_5);
				$pyjs.track.lineno=267;
				self['assertEquals']((typeof ($271=(typeof ($269=values).__array != 'undefined'?
					((typeof $269.__array[$270=$constant_int_3]) != 'undefined'?$269.__array[$270]:
						$269.__getitem__($270)):
						$269.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $271.__array[$272='y']) != 'undefined'?$271.__array[$272]:
						$271.__getitem__($272)):
						$271.__getitem__('y')), $constant_int_7);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwargsCtorCall'] = $method;
			$pyjs.track.lineno=269;
			$method = $pyjs__bind_method2('testComboCtorCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $298,$295,$294,$297,$296,$291,$290,$293,$292,$277,$282,$283,$280,$281,$286,$287,$284,$285,$288,$289,$273,values,$276,$275,$274,$279,$278;
				$pyjs.track={module:'ArgsTest', lineno:269};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=269;
				$pyjs.track.lineno=270;
				values = $p['getattr']($pyjs_kwargs_call(null, (typeof ArgsTestClass_foo6 == "undefined"?$m.ArgsTestClass_foo6:ArgsTestClass_foo6), null, null, [{x:$constant_int_4, y:$constant_int_5}, $constant_int_9, $constant_int_8, $constant_int_7, $constant_int_1, $constant_int_2, $constant_int_3]), 'x');
				$pyjs.track.lineno=271;
				self['assertEquals']((typeof ($273=values).__array != 'undefined'?
					((typeof $273.__array[$274=$constant_int_0]) != 'undefined'?$273.__array[$274]:
						$273.__getitem__($274)):
						$273.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=272;
				self['assertEquals']((typeof ($275=values).__array != 'undefined'?
					((typeof $275.__array[$276=$constant_int_1]) != 'undefined'?$275.__array[$276]:
						$275.__getitem__($276)):
						$275.__getitem__($constant_int_1)), $constant_int_8);
				$pyjs.track.lineno=273;
				self['assertEquals']((typeof ($277=values).__array != 'undefined'?
					((typeof $277.__array[$278=$constant_int_2]) != 'undefined'?$277.__array[$278]:
						$277.__getitem__($278)):
						$277.__getitem__($constant_int_2)), $constant_int_7);
				$pyjs.track.lineno=274;
				self['assertEquals']((typeof ($281=(typeof ($279=values).__array != 'undefined'?
					((typeof $279.__array[$280=$constant_int_3]) != 'undefined'?$279.__array[$280]:
						$279.__getitem__($280)):
						$279.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $281.__array[$282=$constant_int_0]) != 'undefined'?$281.__array[$282]:
						$281.__getitem__($282)):
						$281.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=275;
				self['assertEquals']((typeof ($285=(typeof ($283=values).__array != 'undefined'?
					((typeof $283.__array[$284=$constant_int_3]) != 'undefined'?$283.__array[$284]:
						$283.__getitem__($284)):
						$283.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $285.__array[$286=$constant_int_1]) != 'undefined'?$285.__array[$286]:
						$285.__getitem__($286)):
						$285.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=276;
				self['assertEquals']((typeof ($289=(typeof ($287=values).__array != 'undefined'?
					((typeof $287.__array[$288=$constant_int_3]) != 'undefined'?$287.__array[$288]:
						$287.__getitem__($288)):
						$287.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $289.__array[$290=$constant_int_2]) != 'undefined'?$289.__array[$290]:
						$289.__getitem__($290)):
						$289.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=277;
				self['assertEquals']((typeof ($293=(typeof ($291=values).__array != 'undefined'?
					((typeof $291.__array[$292=$constant_int_4]) != 'undefined'?$291.__array[$292]:
						$291.__getitem__($292)):
						$291.__getitem__($constant_int_4))).__array != 'undefined'?
					((typeof $293.__array[$294='x']) != 'undefined'?$293.__array[$294]:
						$293.__getitem__($294)):
						$293.__getitem__('x')), $constant_int_4);
				$pyjs.track.lineno=278;
				self['assertEquals']((typeof ($297=(typeof ($295=values).__array != 'undefined'?
					((typeof $295.__array[$296=$constant_int_4]) != 'undefined'?$295.__array[$296]:
						$295.__getitem__($296)):
						$295.__getitem__($constant_int_4))).__array != 'undefined'?
					((typeof $297.__array[$298='y']) != 'undefined'?$297.__array[$298]:
						$297.__getitem__($298)):
						$297.__getitem__('y')), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComboCtorCall'] = $method;
			$pyjs.track.lineno=280;
			$method = $pyjs__bind_method2('testSimpleMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $310,$307,$303,$302,$301,$300,$299,$306,$305,$304,values,$309,$308;
				$pyjs.track={module:'ArgsTest', lineno:280};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=280;
				$pyjs.track.lineno=281;
				values = $m.ArgsTestClass()['foo']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=282;
				self['assertEquals']((typeof ($299=values).__array != 'undefined'?
					((typeof $299.__array[$300=$constant_int_0]) != 'undefined'?$299.__array[$300]:
						$299.__getitem__($300)):
						$299.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=283;
				self['assertEquals']((typeof ($301=values).__array != 'undefined'?
					((typeof $301.__array[$302=$constant_int_1]) != 'undefined'?$301.__array[$302]:
						$301.__getitem__($302)):
						$301.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=284;
				self['assertEquals']((typeof ($303=values).__array != 'undefined'?
					((typeof $303.__array[$304=$constant_int_2]) != 'undefined'?$303.__array[$304]:
						$303.__getitem__($304)):
						$303.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=286;
				values = $m.ArgsTestClass()['foo2']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=287;
				self['assertEquals']((typeof ($305=values).__array != 'undefined'?
					((typeof $305.__array[$306=$constant_int_0]) != 'undefined'?$305.__array[$306]:
						$305.__getitem__($306)):
						$305.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=288;
				self['assertEquals']((typeof ($307=values).__array != 'undefined'?
					((typeof $307.__array[$308=$constant_int_1]) != 'undefined'?$307.__array[$308]:
						$307.__getitem__($308)):
						$307.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=289;
				self['assertEquals']((typeof ($309=values).__array != 'undefined'?
					((typeof $309.__array[$310=$constant_int_2]) != 'undefined'?$309.__array[$310]:
						$309.__getitem__($310)):
						$309.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleMethodCall'] = $method;
			$pyjs.track.lineno=291;
			$method = $pyjs__bind_method2('testKeywordMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $329,$328,$314,$321,$320,$323,$322,$325,$324,$327,$326,$311,$312,$313,values,$315,$316,$317,$318,$319,$334,$332,$333,$330,$331;
				$pyjs.track={module:'ArgsTest', lineno:291};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=291;
				$pyjs.track.lineno=292;
				values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo2', null, null, [{c:$constant_int_3, b:$constant_int_2, a:$constant_int_1}]);
				$pyjs.track.lineno=293;
				self['assertEquals']((typeof ($311=values).__array != 'undefined'?
					((typeof $311.__array[$312=$constant_int_0]) != 'undefined'?$311.__array[$312]:
						$311.__getitem__($312)):
						$311.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=294;
				self['assertEquals']((typeof ($313=values).__array != 'undefined'?
					((typeof $313.__array[$314=$constant_int_1]) != 'undefined'?$313.__array[$314]:
						$313.__getitem__($314)):
						$313.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=295;
				self['assertEquals']((typeof ($315=values).__array != 'undefined'?
					((typeof $315.__array[$316=$constant_int_2]) != 'undefined'?$315.__array[$316]:
						$315.__getitem__($316)):
						$315.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=297;
				values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo2', null, null, [{b:$constant_int_2, a:$constant_int_1, c:$constant_int_3}]);
				$pyjs.track.lineno=298;
				self['assertEquals']((typeof ($317=values).__array != 'undefined'?
					((typeof $317.__array[$318=$constant_int_0]) != 'undefined'?$317.__array[$318]:
						$317.__getitem__($318)):
						$317.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=299;
				self['assertEquals']((typeof ($319=values).__array != 'undefined'?
					((typeof $319.__array[$320=$constant_int_1]) != 'undefined'?$319.__array[$320]:
						$319.__getitem__($320)):
						$319.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=300;
				self['assertEquals']((typeof ($321=values).__array != 'undefined'?
					((typeof $321.__array[$322=$constant_int_2]) != 'undefined'?$321.__array[$322]:
						$321.__getitem__($322)):
						$321.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=302;
				values = $m.ArgsTestClass()['foo2']();
				$pyjs.track.lineno=303;
				self['assertEquals']((typeof ($323=values).__array != 'undefined'?
					((typeof $323.__array[$324=$constant_int_0]) != 'undefined'?$323.__array[$324]:
						$323.__getitem__($324)):
						$323.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=304;
				self['assertEquals']((typeof ($325=values).__array != 'undefined'?
					((typeof $325.__array[$326=$constant_int_1]) != 'undefined'?$325.__array[$326]:
						$325.__getitem__($326)):
						$325.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=305;
				self['assertEquals']((typeof ($327=values).__array != 'undefined'?
					((typeof $327.__array[$328=$constant_int_2]) != 'undefined'?$327.__array[$328]:
						$327.__getitem__($328)):
						$327.__getitem__($constant_int_2)), null);
				$pyjs.track.lineno=307;
				values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo2', null, null, [{c:true}]);
				$pyjs.track.lineno=308;
				self['assertEquals']((typeof ($329=values).__array != 'undefined'?
					((typeof $329.__array[$330=$constant_int_0]) != 'undefined'?$329.__array[$330]:
						$329.__getitem__($330)):
						$329.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=309;
				self['assertEquals']((typeof ($331=values).__array != 'undefined'?
					((typeof $331.__array[$332=$constant_int_1]) != 'undefined'?$331.__array[$332]:
						$331.__getitem__($332)):
						$331.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=310;
				self['assertEquals']((typeof ($333=values).__array != 'undefined'?
					((typeof $333.__array[$334=$constant_int_2]) != 'undefined'?$333.__array[$334]:
						$333.__getitem__($334)):
						$333.__getitem__($constant_int_2)), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordMethodCall'] = $method;
			$pyjs.track.lineno=313;
			$method = $pyjs__bind_method2('testDefaultValuesMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $349,$348,$347,$346,$344,$343,$342,$341,$340,$351,values,$352,$338,$339,$336,$337,$350,$335,$345;
				$pyjs.track={module:'ArgsTest', lineno:313};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=313;
				$pyjs.track.lineno=314;
				values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo3', null, null, [{b:$constant_int_7}]);
				$pyjs.track.lineno=315;
				self['assertEquals']((typeof ($335=values).__array != 'undefined'?
					((typeof $335.__array[$336=$constant_int_0]) != 'undefined'?$335.__array[$336]:
						$335.__getitem__($336)):
						$335.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=316;
				self['assertEquals']((typeof ($337=values).__array != 'undefined'?
					((typeof $337.__array[$338=$constant_int_1]) != 'undefined'?$337.__array[$338]:
						$337.__getitem__($338)):
						$337.__getitem__($constant_int_1)), $constant_int_7);
				$pyjs.track.lineno=317;
				self['assertEquals']((typeof ($339=values).__array != 'undefined'?
					((typeof $339.__array[$340=$constant_int_2]) != 'undefined'?$339.__array[$340]:
						$339.__getitem__($340)):
						$339.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=319;
				values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo3', null, null, [{a:$constant_int_9}]);
				$pyjs.track.lineno=320;
				self['assertEquals']((typeof ($341=values).__array != 'undefined'?
					((typeof $341.__array[$342=$constant_int_0]) != 'undefined'?$341.__array[$342]:
						$341.__getitem__($342)):
						$341.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=321;
				self['assertEquals']((typeof ($343=values).__array != 'undefined'?
					((typeof $343.__array[$344=$constant_int_1]) != 'undefined'?$343.__array[$344]:
						$343.__getitem__($344)):
						$343.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=322;
				self['assertEquals']((typeof ($345=values).__array != 'undefined'?
					((typeof $345.__array[$346=$constant_int_2]) != 'undefined'?$345.__array[$346]:
						$345.__getitem__($346)):
						$345.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=324;
				values = $m.ArgsTestClass()['foo3']();
				$pyjs.track.lineno=325;
				self['assertEquals']((typeof ($347=values).__array != 'undefined'?
					((typeof $347.__array[$348=$constant_int_0]) != 'undefined'?$347.__array[$348]:
						$347.__getitem__($348)):
						$347.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=326;
				self['assertEquals']((typeof ($349=values).__array != 'undefined'?
					((typeof $349.__array[$350=$constant_int_1]) != 'undefined'?$349.__array[$350]:
						$349.__getitem__($350)):
						$349.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=327;
				self['assertEquals']((typeof ($351=values).__array != 'undefined'?
					((typeof $351.__array[$352=$constant_int_2]) != 'undefined'?$351.__array[$352]:
						$351.__getitem__($352)):
						$351.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDefaultValuesMethodCall'] = $method;
			$pyjs.track.lineno=329;
			$method = $pyjs__bind_method2('testVarargsMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $358,$359,$354,$355,$357,$353,$364,values,$360,$363,$362,$361,$356;
				$pyjs.track={module:'ArgsTest', lineno:329};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=329;
				$pyjs.track.lineno=330;
				values = $m.ArgsTestClass()['foo4']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=331;
				self['assertEquals']((typeof ($353=values).__array != 'undefined'?
					((typeof $353.__array[$354=$constant_int_0]) != 'undefined'?$353.__array[$354]:
						$353.__getitem__($354)):
						$353.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=332;
				self['assertEquals']((typeof ($355=values).__array != 'undefined'?
					((typeof $355.__array[$356=$constant_int_1]) != 'undefined'?$355.__array[$356]:
						$355.__getitem__($356)):
						$355.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=333;
				self['assertEquals']((typeof ($357=values).__array != 'undefined'?
					((typeof $357.__array[$358=$constant_int_2]) != 'undefined'?$357.__array[$358]:
						$357.__getitem__($358)):
						$357.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=335;
				values = $m.ArgsTestClass()['foo4']($constant_int_3, $constant_int_2, $constant_int_1);
				$pyjs.track.lineno=336;
				self['assertEquals']((typeof ($359=values).__array != 'undefined'?
					((typeof $359.__array[$360=$constant_int_0]) != 'undefined'?$359.__array[$360]:
						$359.__getitem__($360)):
						$359.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=337;
				self['assertEquals']((typeof ($361=values).__array != 'undefined'?
					((typeof $361.__array[$362=$constant_int_1]) != 'undefined'?$361.__array[$362]:
						$361.__getitem__($362)):
						$361.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=338;
				self['assertEquals']((typeof ($363=values).__array != 'undefined'?
					((typeof $363.__array[$364=$constant_int_2]) != 'undefined'?$363.__array[$364]:
						$363.__getitem__($364)):
						$363.__getitem__($constant_int_2)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testVarargsMethodCall'] = $method;
			$pyjs.track.lineno=340;
			$method = $pyjs__bind_method2('testKwargsMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $365,$367,$366,values,$368;
				$pyjs.track={module:'ArgsTest', lineno:340};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=340;
				$pyjs.track.lineno=341;
				values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo5', null, null, [{x:$constant_int_5, y:$constant_int_7}]);
				$pyjs.track.lineno=342;
				self['assertEquals']((typeof ($365=values).__array != 'undefined'?
					((typeof $365.__array[$366='x']) != 'undefined'?$365.__array[$366]:
						$365.__getitem__($366)):
						$365.__getitem__('x')), $constant_int_5);
				$pyjs.track.lineno=343;
				self['assertEquals']((typeof ($367=values).__array != 'undefined'?
					((typeof $367.__array[$368='y']) != 'undefined'?$367.__array[$368]:
						$367.__getitem__($368)):
						$367.__getitem__('y')), $constant_int_7);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwargsMethodCall'] = $method;
			$pyjs.track.lineno=345;
			$method = $pyjs__bind_method2('testComboMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $378,$379,$372,$373,$370,$371,$376,$377,$374,$375,$369,$388,$383,$382,$381,$380,$387,$386,$385,$384,values;
				$pyjs.track={module:'ArgsTest', lineno:345};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=345;
				$pyjs.track.lineno=346;
				values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo6', null, null, [{x:$constant_int_4, y:$constant_int_5}, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=347;
				self['assertEquals']((typeof ($371=(typeof ($369=values).__array != 'undefined'?
					((typeof $369.__array[$370=$constant_int_0]) != 'undefined'?$369.__array[$370]:
						$369.__getitem__($370)):
						$369.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $371.__array[$372=$constant_int_0]) != 'undefined'?$371.__array[$372]:
						$371.__getitem__($372)):
						$371.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=348;
				self['assertEquals']((typeof ($375=(typeof ($373=values).__array != 'undefined'?
					((typeof $373.__array[$374=$constant_int_0]) != 'undefined'?$373.__array[$374]:
						$373.__getitem__($374)):
						$373.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $375.__array[$376=$constant_int_1]) != 'undefined'?$375.__array[$376]:
						$375.__getitem__($376)):
						$375.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=349;
				self['assertEquals']((typeof ($379=(typeof ($377=values).__array != 'undefined'?
					((typeof $377.__array[$378=$constant_int_0]) != 'undefined'?$377.__array[$378]:
						$377.__getitem__($378)):
						$377.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $379.__array[$380=$constant_int_2]) != 'undefined'?$379.__array[$380]:
						$379.__getitem__($380)):
						$379.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=350;
				self['assertEquals']((typeof ($383=(typeof ($381=values).__array != 'undefined'?
					((typeof $381.__array[$382=$constant_int_1]) != 'undefined'?$381.__array[$382]:
						$381.__getitem__($382)):
						$381.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $383.__array[$384='x']) != 'undefined'?$383.__array[$384]:
						$383.__getitem__($384)):
						$383.__getitem__('x')), $constant_int_4);
				$pyjs.track.lineno=351;
				self['assertEquals']((typeof ($387=(typeof ($385=values).__array != 'undefined'?
					((typeof $385.__array[$386=$constant_int_1]) != 'undefined'?$385.__array[$386]:
						$385.__getitem__($386)):
						$385.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $387.__array[$388='y']) != 'undefined'?$387.__array[$388]:
						$387.__getitem__($388)):
						$387.__getitem__('y')), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComboMethodCall'] = $method;
			$pyjs.track.lineno=353;
			$method = $pyjs__bind_method2('testEdgeMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $398,$399,$408,$392,$391,$404,$405,$406,$407,$400,$401,$402,$403,$393,$394,$395,$396,$397,$389,$390,vaules,values;
				$pyjs.track={module:'ArgsTest', lineno:353};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=353;
				$pyjs.track.lineno=354;
				values = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo7', null, null, [{b:$constant_int_2}, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=355;
				self['assertEqual']((typeof ($389=values).__array != 'undefined'?
					((typeof $389.__array[$390=$constant_int_0]) != 'undefined'?$389.__array[$390]:
						$389.__getitem__($390)):
						$389.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=356;
				self['assertEqual']((typeof ($391=values).__array != 'undefined'?
					((typeof $391.__array[$392=$constant_int_1]) != 'undefined'?$391.__array[$392]:
						$391.__getitem__($392)):
						$391.__getitem__($constant_int_1)), $p['tuple']([$constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=357;
				self['assertEqual']((typeof ($393=values).__array != 'undefined'?
					((typeof $393.__array[$394=$constant_int_2]) != 'undefined'?$393.__array[$394]:
						$393.__getitem__($394)):
						$393.__getitem__($constant_int_2)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=359;
				values = $m.ArgsTestClass()['foo7']($constant_int_1, $constant_int_2, $constant_int_3, $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=360;
				self['assertEqual']((typeof ($395=values).__array != 'undefined'?
					((typeof $395.__array[$396=$constant_int_0]) != 'undefined'?$395.__array[$396]:
						$395.__getitem__($396)):
						$395.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=361;
				self['assertEqual']((typeof ($397=values).__array != 'undefined'?
					((typeof $397.__array[$398=$constant_int_1]) != 'undefined'?$397.__array[$398]:
						$397.__getitem__($398)):
						$397.__getitem__($constant_int_1)), $p['tuple']([$constant_int_2, $constant_int_3, $p['dict']([['b', $constant_int_2]])]));
				$pyjs.track.lineno=362;
				self['assertEqual']((typeof ($399=values).__array != 'undefined'?
					((typeof $399.__array[$400=$constant_int_2]) != 'undefined'?$399.__array[$400]:
						$399.__getitem__($400)):
						$399.__getitem__($constant_int_2)), $p['dict']([]));
				$pyjs.track.lineno=364;
				vaules = $pyjs_kwargs_call($m.ArgsTestClass(), 'foo8', null, null, [{b:$constant_int_2}, $constant_int_1]);
				$pyjs.track.lineno=365;
				self['assertEqual']((typeof ($401=vaules).__array != 'undefined'?
					((typeof $401.__array[$402=$constant_int_0]) != 'undefined'?$401.__array[$402]:
						$401.__getitem__($402)):
						$401.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=366;
				self['assertEqual']((typeof ($403=vaules).__array != 'undefined'?
					((typeof $403.__array[$404=$constant_int_1]) != 'undefined'?$403.__array[$404]:
						$403.__getitem__($404)):
						$403.__getitem__($constant_int_1)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=368;
				vaules = $m.ArgsTestClass()['foo8']($p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=369;
				self['assertEqual']((typeof ($405=vaules).__array != 'undefined'?
					((typeof $405.__array[$406=$constant_int_0]) != 'undefined'?$405.__array[$406]:
						$405.__getitem__($406)):
						$405.__getitem__($constant_int_0)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=370;
				self['assertEqual']((typeof ($407=vaules).__array != 'undefined'?
					((typeof $407.__array[$408=$constant_int_1]) != 'undefined'?$407.__array[$408]:
						$407.__getitem__($408)):
						$407.__getitem__($constant_int_1)), $p['dict']([]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testEdgeMethodCall'] = $method;
			$pyjs.track.lineno=372;
			$method = $pyjs__bind_method2('testSimpleStaticMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $420,values,$409,$419,$418,$417,$416,$415,$414,$413,$412,$411,$410;
				$pyjs.track={module:'ArgsTest', lineno:372};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=372;
				$pyjs.track.lineno=373;
				values = $m.ArgsTestClass2['foo']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=374;
				self['assertEquals']((typeof ($409=values).__array != 'undefined'?
					((typeof $409.__array[$410=$constant_int_0]) != 'undefined'?$409.__array[$410]:
						$409.__getitem__($410)):
						$409.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=375;
				self['assertEquals']((typeof ($411=values).__array != 'undefined'?
					((typeof $411.__array[$412=$constant_int_1]) != 'undefined'?$411.__array[$412]:
						$411.__getitem__($412)):
						$411.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=376;
				self['assertEquals']((typeof ($413=values).__array != 'undefined'?
					((typeof $413.__array[$414=$constant_int_2]) != 'undefined'?$413.__array[$414]:
						$413.__getitem__($414)):
						$413.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=378;
				values = $m.ArgsTestClass2['foo2']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=379;
				self['assertEquals']((typeof ($415=values).__array != 'undefined'?
					((typeof $415.__array[$416=$constant_int_0]) != 'undefined'?$415.__array[$416]:
						$415.__getitem__($416)):
						$415.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=380;
				self['assertEquals']((typeof ($417=values).__array != 'undefined'?
					((typeof $417.__array[$418=$constant_int_1]) != 'undefined'?$417.__array[$418]:
						$417.__getitem__($418)):
						$417.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=381;
				self['assertEquals']((typeof ($419=values).__array != 'undefined'?
					((typeof $419.__array[$420=$constant_int_2]) != 'undefined'?$419.__array[$420]:
						$419.__getitem__($420)):
						$419.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleStaticMethodCall'] = $method;
			$pyjs.track.lineno=383;
			$method = $pyjs__bind_method2('testKeywordStaticMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $440,$441,$442,$443,$444,$428,$429,$422,$423,$421,$426,$427,$424,$425,$435,$434,$437,$436,$431,$430,$433,$432,$439,$438,values;
				$pyjs.track={module:'ArgsTest', lineno:383};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=383;
				$pyjs.track.lineno=384;
				values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo2', null, null, [{c:$constant_int_3, b:$constant_int_2, a:$constant_int_1}]);
				$pyjs.track.lineno=385;
				self['assertEquals']((typeof ($421=values).__array != 'undefined'?
					((typeof $421.__array[$422=$constant_int_0]) != 'undefined'?$421.__array[$422]:
						$421.__getitem__($422)):
						$421.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=386;
				self['assertEquals']((typeof ($423=values).__array != 'undefined'?
					((typeof $423.__array[$424=$constant_int_1]) != 'undefined'?$423.__array[$424]:
						$423.__getitem__($424)):
						$423.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=387;
				self['assertEquals']((typeof ($425=values).__array != 'undefined'?
					((typeof $425.__array[$426=$constant_int_2]) != 'undefined'?$425.__array[$426]:
						$425.__getitem__($426)):
						$425.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=389;
				values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo2', null, null, [{b:$constant_int_2, a:$constant_int_1, c:$constant_int_3}]);
				$pyjs.track.lineno=390;
				self['assertEquals']((typeof ($427=values).__array != 'undefined'?
					((typeof $427.__array[$428=$constant_int_0]) != 'undefined'?$427.__array[$428]:
						$427.__getitem__($428)):
						$427.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=391;
				self['assertEquals']((typeof ($429=values).__array != 'undefined'?
					((typeof $429.__array[$430=$constant_int_1]) != 'undefined'?$429.__array[$430]:
						$429.__getitem__($430)):
						$429.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=392;
				self['assertEquals']((typeof ($431=values).__array != 'undefined'?
					((typeof $431.__array[$432=$constant_int_2]) != 'undefined'?$431.__array[$432]:
						$431.__getitem__($432)):
						$431.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=394;
				values = $m.ArgsTestClass2['foo2']();
				$pyjs.track.lineno=395;
				self['assertEquals']((typeof ($433=values).__array != 'undefined'?
					((typeof $433.__array[$434=$constant_int_0]) != 'undefined'?$433.__array[$434]:
						$433.__getitem__($434)):
						$433.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=396;
				self['assertEquals']((typeof ($435=values).__array != 'undefined'?
					((typeof $435.__array[$436=$constant_int_1]) != 'undefined'?$435.__array[$436]:
						$435.__getitem__($436)):
						$435.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=397;
				self['assertEquals']((typeof ($437=values).__array != 'undefined'?
					((typeof $437.__array[$438=$constant_int_2]) != 'undefined'?$437.__array[$438]:
						$437.__getitem__($438)):
						$437.__getitem__($constant_int_2)), null);
				$pyjs.track.lineno=399;
				values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo2', null, null, [{c:true}]);
				$pyjs.track.lineno=400;
				self['assertEquals']((typeof ($439=values).__array != 'undefined'?
					((typeof $439.__array[$440=$constant_int_0]) != 'undefined'?$439.__array[$440]:
						$439.__getitem__($440)):
						$439.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=401;
				self['assertEquals']((typeof ($441=values).__array != 'undefined'?
					((typeof $441.__array[$442=$constant_int_1]) != 'undefined'?$441.__array[$442]:
						$441.__getitem__($442)):
						$441.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=402;
				self['assertEquals']((typeof ($443=values).__array != 'undefined'?
					((typeof $443.__array[$444=$constant_int_2]) != 'undefined'?$443.__array[$444]:
						$443.__getitem__($444)):
						$443.__getitem__($constant_int_2)), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordStaticMethodCall'] = $method;
			$pyjs.track.lineno=404;
			$method = $pyjs__bind_method2('testDefaultValuesStaticMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $453,$452,$451,$450,$457,$445,$446,$447,$448,$449,$454,$462,$460,$455,values,$461,$459,$458,$456;
				$pyjs.track={module:'ArgsTest', lineno:404};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=404;
				$pyjs.track.lineno=405;
				values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo3', null, null, [{b:$constant_int_7}]);
				$pyjs.track.lineno=406;
				self['assertEquals']((typeof ($445=values).__array != 'undefined'?
					((typeof $445.__array[$446=$constant_int_0]) != 'undefined'?$445.__array[$446]:
						$445.__getitem__($446)):
						$445.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=407;
				self['assertEquals']((typeof ($447=values).__array != 'undefined'?
					((typeof $447.__array[$448=$constant_int_1]) != 'undefined'?$447.__array[$448]:
						$447.__getitem__($448)):
						$447.__getitem__($constant_int_1)), $constant_int_7);
				$pyjs.track.lineno=408;
				self['assertEquals']((typeof ($449=values).__array != 'undefined'?
					((typeof $449.__array[$450=$constant_int_2]) != 'undefined'?$449.__array[$450]:
						$449.__getitem__($450)):
						$449.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=410;
				values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo3', null, null, [{a:$constant_int_9}]);
				$pyjs.track.lineno=411;
				self['assertEquals']((typeof ($451=values).__array != 'undefined'?
					((typeof $451.__array[$452=$constant_int_0]) != 'undefined'?$451.__array[$452]:
						$451.__getitem__($452)):
						$451.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=412;
				self['assertEquals']((typeof ($453=values).__array != 'undefined'?
					((typeof $453.__array[$454=$constant_int_1]) != 'undefined'?$453.__array[$454]:
						$453.__getitem__($454)):
						$453.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=413;
				self['assertEquals']((typeof ($455=values).__array != 'undefined'?
					((typeof $455.__array[$456=$constant_int_2]) != 'undefined'?$455.__array[$456]:
						$455.__getitem__($456)):
						$455.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=415;
				values = $m.ArgsTestClass2['foo3']();
				$pyjs.track.lineno=416;
				self['assertEquals']((typeof ($457=values).__array != 'undefined'?
					((typeof $457.__array[$458=$constant_int_0]) != 'undefined'?$457.__array[$458]:
						$457.__getitem__($458)):
						$457.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=417;
				self['assertEquals']((typeof ($459=values).__array != 'undefined'?
					((typeof $459.__array[$460=$constant_int_1]) != 'undefined'?$459.__array[$460]:
						$459.__getitem__($460)):
						$459.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=418;
				self['assertEquals']((typeof ($461=values).__array != 'undefined'?
					((typeof $461.__array[$462=$constant_int_2]) != 'undefined'?$461.__array[$462]:
						$461.__getitem__($462)):
						$461.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDefaultValuesStaticMethodCall'] = $method;
			$pyjs.track.lineno=420;
			$method = $pyjs__bind_method2('testVarargsStaticMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $472,$473,$468,$469,$466,$467,$465,$463,$474,$471,values,$470,$464;
				$pyjs.track={module:'ArgsTest', lineno:420};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=420;
				$pyjs.track.lineno=421;
				values = $m.ArgsTestClass2['foo4']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=422;
				self['assertEquals']((typeof ($463=values).__array != 'undefined'?
					((typeof $463.__array[$464=$constant_int_0]) != 'undefined'?$463.__array[$464]:
						$463.__getitem__($464)):
						$463.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=423;
				self['assertEquals']((typeof ($465=values).__array != 'undefined'?
					((typeof $465.__array[$466=$constant_int_1]) != 'undefined'?$465.__array[$466]:
						$465.__getitem__($466)):
						$465.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=424;
				self['assertEquals']((typeof ($467=values).__array != 'undefined'?
					((typeof $467.__array[$468=$constant_int_2]) != 'undefined'?$467.__array[$468]:
						$467.__getitem__($468)):
						$467.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=426;
				values = $m.ArgsTestClass2['foo4']($constant_int_3, $constant_int_2, $constant_int_1);
				$pyjs.track.lineno=427;
				self['assertEquals']((typeof ($469=values).__array != 'undefined'?
					((typeof $469.__array[$470=$constant_int_0]) != 'undefined'?$469.__array[$470]:
						$469.__getitem__($470)):
						$469.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=428;
				self['assertEquals']((typeof ($471=values).__array != 'undefined'?
					((typeof $471.__array[$472=$constant_int_1]) != 'undefined'?$471.__array[$472]:
						$471.__getitem__($472)):
						$471.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=429;
				self['assertEquals']((typeof ($473=values).__array != 'undefined'?
					((typeof $473.__array[$474=$constant_int_2]) != 'undefined'?$473.__array[$474]:
						$473.__getitem__($474)):
						$473.__getitem__($constant_int_2)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testVarargsStaticMethodCall'] = $method;
			$pyjs.track.lineno=431;
			$method = $pyjs__bind_method2('testKwargsStaticMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $478,$475,$477,$476,values;
				$pyjs.track={module:'ArgsTest', lineno:431};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=431;
				$pyjs.track.lineno=432;
				values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo5', null, null, [{x:$constant_int_5, y:$constant_int_7}]);
				$pyjs.track.lineno=433;
				self['assertEquals']((typeof ($475=values).__array != 'undefined'?
					((typeof $475.__array[$476='x']) != 'undefined'?$475.__array[$476]:
						$475.__getitem__($476)):
						$475.__getitem__('x')), $constant_int_5);
				$pyjs.track.lineno=434;
				self['assertEquals']((typeof ($477=values).__array != 'undefined'?
					((typeof $477.__array[$478='y']) != 'undefined'?$477.__array[$478]:
						$477.__getitem__($478)):
						$477.__getitem__('y')), $constant_int_7);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwargsStaticMethodCall'] = $method;
			$pyjs.track.lineno=436;
			$method = $pyjs__bind_method2('testComboStaticMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $484,$485,$486,$487,$480,$481,$482,$483,$488,$489,$479,$497,$496,$495,$494,$493,$492,$491,$490,$498,values;
				$pyjs.track={module:'ArgsTest', lineno:436};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=436;
				$pyjs.track.lineno=437;
				values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo6', null, null, [{x:$constant_int_4, y:$constant_int_5}, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=438;
				self['assertEquals']((typeof ($481=(typeof ($479=values).__array != 'undefined'?
					((typeof $479.__array[$480=$constant_int_0]) != 'undefined'?$479.__array[$480]:
						$479.__getitem__($480)):
						$479.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $481.__array[$482=$constant_int_0]) != 'undefined'?$481.__array[$482]:
						$481.__getitem__($482)):
						$481.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=439;
				self['assertEquals']((typeof ($485=(typeof ($483=values).__array != 'undefined'?
					((typeof $483.__array[$484=$constant_int_0]) != 'undefined'?$483.__array[$484]:
						$483.__getitem__($484)):
						$483.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $485.__array[$486=$constant_int_1]) != 'undefined'?$485.__array[$486]:
						$485.__getitem__($486)):
						$485.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=440;
				self['assertEquals']((typeof ($489=(typeof ($487=values).__array != 'undefined'?
					((typeof $487.__array[$488=$constant_int_0]) != 'undefined'?$487.__array[$488]:
						$487.__getitem__($488)):
						$487.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $489.__array[$490=$constant_int_2]) != 'undefined'?$489.__array[$490]:
						$489.__getitem__($490)):
						$489.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=441;
				self['assertEquals']((typeof ($493=(typeof ($491=values).__array != 'undefined'?
					((typeof $491.__array[$492=$constant_int_1]) != 'undefined'?$491.__array[$492]:
						$491.__getitem__($492)):
						$491.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $493.__array[$494='x']) != 'undefined'?$493.__array[$494]:
						$493.__getitem__($494)):
						$493.__getitem__('x')), $constant_int_4);
				$pyjs.track.lineno=442;
				self['assertEquals']((typeof ($497=(typeof ($495=values).__array != 'undefined'?
					((typeof $495.__array[$496=$constant_int_1]) != 'undefined'?$495.__array[$496]:
						$495.__getitem__($496)):
						$495.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $497.__array[$498='y']) != 'undefined'?$497.__array[$498]:
						$497.__getitem__($498)):
						$497.__getitem__('y')), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComboStaticMethodCall'] = $method;
			$pyjs.track.lineno=444;
			$method = $pyjs__bind_method2('testEdgeStaticMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $505,$504,$507,$506,$501,$500,$503,$502,$509,$508,$518,$512,$513,$510,$511,$516,$517,$514,$515,$499,vaules,values;
				$pyjs.track={module:'ArgsTest', lineno:444};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=444;
				$pyjs.track.lineno=445;
				values = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo7', null, null, [{b:$constant_int_2}, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=446;
				self['assertEqual']((typeof ($499=values).__array != 'undefined'?
					((typeof $499.__array[$500=$constant_int_0]) != 'undefined'?$499.__array[$500]:
						$499.__getitem__($500)):
						$499.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=447;
				self['assertEqual']((typeof ($501=values).__array != 'undefined'?
					((typeof $501.__array[$502=$constant_int_1]) != 'undefined'?$501.__array[$502]:
						$501.__getitem__($502)):
						$501.__getitem__($constant_int_1)), $p['tuple']([$constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=448;
				self['assertEqual']((typeof ($503=values).__array != 'undefined'?
					((typeof $503.__array[$504=$constant_int_2]) != 'undefined'?$503.__array[$504]:
						$503.__getitem__($504)):
						$503.__getitem__($constant_int_2)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=450;
				values = $m.ArgsTestClass2['foo7']($constant_int_1, $constant_int_2, $constant_int_3, $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=451;
				self['assertEqual']((typeof ($505=values).__array != 'undefined'?
					((typeof $505.__array[$506=$constant_int_0]) != 'undefined'?$505.__array[$506]:
						$505.__getitem__($506)):
						$505.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=452;
				self['assertEqual']((typeof ($507=values).__array != 'undefined'?
					((typeof $507.__array[$508=$constant_int_1]) != 'undefined'?$507.__array[$508]:
						$507.__getitem__($508)):
						$507.__getitem__($constant_int_1)), $p['tuple']([$constant_int_2, $constant_int_3, $p['dict']([['b', $constant_int_2]])]));
				$pyjs.track.lineno=453;
				self['assertEqual']((typeof ($509=values).__array != 'undefined'?
					((typeof $509.__array[$510=$constant_int_2]) != 'undefined'?$509.__array[$510]:
						$509.__getitem__($510)):
						$509.__getitem__($constant_int_2)), $p['dict']([]));
				$pyjs.track.lineno=455;
				vaules = $pyjs_kwargs_call($m.ArgsTestClass2, 'foo8', null, null, [{b:$constant_int_2}, $constant_int_1]);
				$pyjs.track.lineno=456;
				self['assertEqual']((typeof ($511=vaules).__array != 'undefined'?
					((typeof $511.__array[$512=$constant_int_0]) != 'undefined'?$511.__array[$512]:
						$511.__getitem__($512)):
						$511.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=457;
				self['assertEqual']((typeof ($513=vaules).__array != 'undefined'?
					((typeof $513.__array[$514=$constant_int_1]) != 'undefined'?$513.__array[$514]:
						$513.__getitem__($514)):
						$513.__getitem__($constant_int_1)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=459;
				vaules = $m.ArgsTestClass2['foo8']($p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=460;
				self['assertEqual']((typeof ($515=vaules).__array != 'undefined'?
					((typeof $515.__array[$516=$constant_int_0]) != 'undefined'?$515.__array[$516]:
						$515.__getitem__($516)):
						$515.__getitem__($constant_int_0)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=461;
				self['assertEqual']((typeof ($517=vaules).__array != 'undefined'?
					((typeof $517.__array[$518=$constant_int_1]) != 'undefined'?$517.__array[$518]:
						$517.__getitem__($518)):
						$517.__getitem__($constant_int_1)), $p['dict']([]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testEdgeStaticMethodCall'] = $method;
			$pyjs.track.lineno=463;
			$method = $pyjs__bind_method2('testSimpleClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $530,$519,values,$529,$528,$527,$526,$525,$524,$523,$522,$521,$520;
				$pyjs.track={module:'ArgsTest', lineno:463};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=463;
				$pyjs.track.lineno=464;
				values = $m.ArgsTestClass3['foo']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=465;
				self['assertEquals']((typeof ($519=values).__array != 'undefined'?
					((typeof $519.__array[$520=$constant_int_0]) != 'undefined'?$519.__array[$520]:
						$519.__getitem__($520)):
						$519.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=466;
				self['assertEquals']((typeof ($521=values).__array != 'undefined'?
					((typeof $521.__array[$522=$constant_int_1]) != 'undefined'?$521.__array[$522]:
						$521.__getitem__($522)):
						$521.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=467;
				self['assertEquals']((typeof ($523=values).__array != 'undefined'?
					((typeof $523.__array[$524=$constant_int_2]) != 'undefined'?$523.__array[$524]:
						$523.__getitem__($524)):
						$523.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=469;
				values = $m.ArgsTestClass3['foo2']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=470;
				self['assertEquals']((typeof ($525=values).__array != 'undefined'?
					((typeof $525.__array[$526=$constant_int_0]) != 'undefined'?$525.__array[$526]:
						$525.__getitem__($526)):
						$525.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=471;
				self['assertEquals']((typeof ($527=values).__array != 'undefined'?
					((typeof $527.__array[$528=$constant_int_1]) != 'undefined'?$527.__array[$528]:
						$527.__getitem__($528)):
						$527.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=472;
				self['assertEquals']((typeof ($529=values).__array != 'undefined'?
					((typeof $529.__array[$530=$constant_int_2]) != 'undefined'?$529.__array[$530]:
						$529.__getitem__($530)):
						$529.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleClassMethodCall'] = $method;
			$pyjs.track.lineno=474;
			$method = $pyjs__bind_method2('testKeywordClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $549,$548,$541,$540,$543,$542,$545,$544,$547,$546,$554,$552,$553,$550,$551,$538,$539,$534,$535,$536,$537,$531,$532,$533,values;
				$pyjs.track={module:'ArgsTest', lineno:474};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=474;
				$pyjs.track.lineno=475;
				values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo2', null, null, [{c:$constant_int_3, b:$constant_int_2, a:$constant_int_1}]);
				$pyjs.track.lineno=476;
				self['assertEquals']((typeof ($531=values).__array != 'undefined'?
					((typeof $531.__array[$532=$constant_int_0]) != 'undefined'?$531.__array[$532]:
						$531.__getitem__($532)):
						$531.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=477;
				self['assertEquals']((typeof ($533=values).__array != 'undefined'?
					((typeof $533.__array[$534=$constant_int_1]) != 'undefined'?$533.__array[$534]:
						$533.__getitem__($534)):
						$533.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=478;
				self['assertEquals']((typeof ($535=values).__array != 'undefined'?
					((typeof $535.__array[$536=$constant_int_2]) != 'undefined'?$535.__array[$536]:
						$535.__getitem__($536)):
						$535.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=480;
				values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo2', null, null, [{b:$constant_int_2, a:$constant_int_1, c:$constant_int_3}]);
				$pyjs.track.lineno=481;
				self['assertEquals']((typeof ($537=values).__array != 'undefined'?
					((typeof $537.__array[$538=$constant_int_0]) != 'undefined'?$537.__array[$538]:
						$537.__getitem__($538)):
						$537.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=482;
				self['assertEquals']((typeof ($539=values).__array != 'undefined'?
					((typeof $539.__array[$540=$constant_int_1]) != 'undefined'?$539.__array[$540]:
						$539.__getitem__($540)):
						$539.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=483;
				self['assertEquals']((typeof ($541=values).__array != 'undefined'?
					((typeof $541.__array[$542=$constant_int_2]) != 'undefined'?$541.__array[$542]:
						$541.__getitem__($542)):
						$541.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=485;
				values = $m.ArgsTestClass3['foo2']();
				$pyjs.track.lineno=486;
				self['assertEquals']((typeof ($543=values).__array != 'undefined'?
					((typeof $543.__array[$544=$constant_int_0]) != 'undefined'?$543.__array[$544]:
						$543.__getitem__($544)):
						$543.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=487;
				self['assertEquals']((typeof ($545=values).__array != 'undefined'?
					((typeof $545.__array[$546=$constant_int_1]) != 'undefined'?$545.__array[$546]:
						$545.__getitem__($546)):
						$545.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=488;
				self['assertEquals']((typeof ($547=values).__array != 'undefined'?
					((typeof $547.__array[$548=$constant_int_2]) != 'undefined'?$547.__array[$548]:
						$547.__getitem__($548)):
						$547.__getitem__($constant_int_2)), null);
				$pyjs.track.lineno=490;
				values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo2', null, null, [{c:true}]);
				$pyjs.track.lineno=491;
				self['assertEquals']((typeof ($549=values).__array != 'undefined'?
					((typeof $549.__array[$550=$constant_int_0]) != 'undefined'?$549.__array[$550]:
						$549.__getitem__($550)):
						$549.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=492;
				self['assertEquals']((typeof ($551=values).__array != 'undefined'?
					((typeof $551.__array[$552=$constant_int_1]) != 'undefined'?$551.__array[$552]:
						$551.__getitem__($552)):
						$551.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=493;
				self['assertEquals']((typeof ($553=values).__array != 'undefined'?
					((typeof $553.__array[$554=$constant_int_2]) != 'undefined'?$553.__array[$554]:
						$553.__getitem__($554)):
						$553.__getitem__($constant_int_2)), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordClassMethodCall'] = $method;
			$pyjs.track.lineno=496;
			$method = $pyjs__bind_method2('testDefaultValuesClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $563,$562,$561,$560,$567,$565,$558,$559,$556,$557,$555,$572,values,$568,$571,$570,$564,$569,$566;
				$pyjs.track={module:'ArgsTest', lineno:496};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=496;
				$pyjs.track.lineno=497;
				values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo3', null, null, [{b:$constant_int_7}]);
				$pyjs.track.lineno=498;
				self['assertEquals']((typeof ($555=values).__array != 'undefined'?
					((typeof $555.__array[$556=$constant_int_0]) != 'undefined'?$555.__array[$556]:
						$555.__getitem__($556)):
						$555.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=499;
				self['assertEquals']((typeof ($557=values).__array != 'undefined'?
					((typeof $557.__array[$558=$constant_int_1]) != 'undefined'?$557.__array[$558]:
						$557.__getitem__($558)):
						$557.__getitem__($constant_int_1)), $constant_int_7);
				$pyjs.track.lineno=500;
				self['assertEquals']((typeof ($559=values).__array != 'undefined'?
					((typeof $559.__array[$560=$constant_int_2]) != 'undefined'?$559.__array[$560]:
						$559.__getitem__($560)):
						$559.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=502;
				values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo3', null, null, [{a:$constant_int_9}]);
				$pyjs.track.lineno=503;
				self['assertEquals']((typeof ($561=values).__array != 'undefined'?
					((typeof $561.__array[$562=$constant_int_0]) != 'undefined'?$561.__array[$562]:
						$561.__getitem__($562)):
						$561.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=504;
				self['assertEquals']((typeof ($563=values).__array != 'undefined'?
					((typeof $563.__array[$564=$constant_int_1]) != 'undefined'?$563.__array[$564]:
						$563.__getitem__($564)):
						$563.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=505;
				self['assertEquals']((typeof ($565=values).__array != 'undefined'?
					((typeof $565.__array[$566=$constant_int_2]) != 'undefined'?$565.__array[$566]:
						$565.__getitem__($566)):
						$565.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=507;
				values = $m.ArgsTestClass3['foo3']();
				$pyjs.track.lineno=508;
				self['assertEquals']((typeof ($567=values).__array != 'undefined'?
					((typeof $567.__array[$568=$constant_int_0]) != 'undefined'?$567.__array[$568]:
						$567.__getitem__($568)):
						$567.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=509;
				self['assertEquals']((typeof ($569=values).__array != 'undefined'?
					((typeof $569.__array[$570=$constant_int_1]) != 'undefined'?$569.__array[$570]:
						$569.__getitem__($570)):
						$569.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=510;
				self['assertEquals']((typeof ($571=values).__array != 'undefined'?
					((typeof $571.__array[$572=$constant_int_2]) != 'undefined'?$571.__array[$572]:
						$571.__getitem__($572)):
						$571.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDefaultValuesClassMethodCall'] = $method;
			$pyjs.track.lineno=512;
			$method = $pyjs__bind_method2('testVarargsClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $573,$574,$575,$576,$577,$578,$579,$581,$580,$583,$582,values,$584;
				$pyjs.track={module:'ArgsTest', lineno:512};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=512;
				$pyjs.track.lineno=513;
				values = $m.ArgsTestClass3['foo4']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=514;
				self['assertEquals']((typeof ($573=values).__array != 'undefined'?
					((typeof $573.__array[$574=$constant_int_0]) != 'undefined'?$573.__array[$574]:
						$573.__getitem__($574)):
						$573.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=515;
				self['assertEquals']((typeof ($575=values).__array != 'undefined'?
					((typeof $575.__array[$576=$constant_int_1]) != 'undefined'?$575.__array[$576]:
						$575.__getitem__($576)):
						$575.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=516;
				self['assertEquals']((typeof ($577=values).__array != 'undefined'?
					((typeof $577.__array[$578=$constant_int_2]) != 'undefined'?$577.__array[$578]:
						$577.__getitem__($578)):
						$577.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=518;
				values = $m.ArgsTestClass3['foo4']($constant_int_3, $constant_int_2, $constant_int_1);
				$pyjs.track.lineno=519;
				self['assertEquals']((typeof ($579=values).__array != 'undefined'?
					((typeof $579.__array[$580=$constant_int_0]) != 'undefined'?$579.__array[$580]:
						$579.__getitem__($580)):
						$579.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=520;
				self['assertEquals']((typeof ($581=values).__array != 'undefined'?
					((typeof $581.__array[$582=$constant_int_1]) != 'undefined'?$581.__array[$582]:
						$581.__getitem__($582)):
						$581.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=521;
				self['assertEquals']((typeof ($583=values).__array != 'undefined'?
					((typeof $583.__array[$584=$constant_int_2]) != 'undefined'?$583.__array[$584]:
						$583.__getitem__($584)):
						$583.__getitem__($constant_int_2)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testVarargsClassMethodCall'] = $method;
			$pyjs.track.lineno=523;
			$method = $pyjs__bind_method2('testKwargsClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $588,$585,$586,values,$587;
				$pyjs.track={module:'ArgsTest', lineno:523};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=523;
				$pyjs.track.lineno=524;
				values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo5', null, null, [{x:$constant_int_5, y:$constant_int_7}]);
				$pyjs.track.lineno=525;
				self['assertEquals']((typeof ($585=values).__array != 'undefined'?
					((typeof $585.__array[$586='x']) != 'undefined'?$585.__array[$586]:
						$585.__getitem__($586)):
						$585.__getitem__('x')), $constant_int_5);
				$pyjs.track.lineno=526;
				self['assertEquals']((typeof ($587=values).__array != 'undefined'?
					((typeof $587.__array[$588='y']) != 'undefined'?$587.__array[$588]:
						$587.__getitem__($588)):
						$587.__getitem__('y')), $constant_int_7);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwargsClassMethodCall'] = $method;
			$pyjs.track.lineno=528;
			$method = $pyjs__bind_method2('testComboClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $608,$606,$607,$604,$605,$602,$603,$600,$601,$589,$592,$593,$590,$591,$596,$597,$594,$595,$598,$599,values;
				$pyjs.track={module:'ArgsTest', lineno:528};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=528;
				$pyjs.track.lineno=529;
				values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo6', null, null, [{x:$constant_int_4, y:$constant_int_5}, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=530;
				self['assertEquals']((typeof ($591=(typeof ($589=values).__array != 'undefined'?
					((typeof $589.__array[$590=$constant_int_0]) != 'undefined'?$589.__array[$590]:
						$589.__getitem__($590)):
						$589.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $591.__array[$592=$constant_int_0]) != 'undefined'?$591.__array[$592]:
						$591.__getitem__($592)):
						$591.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=531;
				self['assertEquals']((typeof ($595=(typeof ($593=values).__array != 'undefined'?
					((typeof $593.__array[$594=$constant_int_0]) != 'undefined'?$593.__array[$594]:
						$593.__getitem__($594)):
						$593.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $595.__array[$596=$constant_int_1]) != 'undefined'?$595.__array[$596]:
						$595.__getitem__($596)):
						$595.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=532;
				self['assertEquals']((typeof ($599=(typeof ($597=values).__array != 'undefined'?
					((typeof $597.__array[$598=$constant_int_0]) != 'undefined'?$597.__array[$598]:
						$597.__getitem__($598)):
						$597.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $599.__array[$600=$constant_int_2]) != 'undefined'?$599.__array[$600]:
						$599.__getitem__($600)):
						$599.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=533;
				self['assertEquals']((typeof ($603=(typeof ($601=values).__array != 'undefined'?
					((typeof $601.__array[$602=$constant_int_1]) != 'undefined'?$601.__array[$602]:
						$601.__getitem__($602)):
						$601.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $603.__array[$604='x']) != 'undefined'?$603.__array[$604]:
						$603.__getitem__($604)):
						$603.__getitem__('x')), $constant_int_4);
				$pyjs.track.lineno=534;
				self['assertEquals']((typeof ($607=(typeof ($605=values).__array != 'undefined'?
					((typeof $605.__array[$606=$constant_int_1]) != 'undefined'?$605.__array[$606]:
						$605.__getitem__($606)):
						$605.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $607.__array[$608='y']) != 'undefined'?$607.__array[$608]:
						$607.__getitem__($608)):
						$607.__getitem__('y')), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComboClassMethodCall'] = $method;
			$pyjs.track.lineno=536;
			$method = $pyjs__bind_method2('testEdgeClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $620,$621,$622,$623,$624,$625,$626,$609,$628,$627,$619,$618,$611,$610,$613,$612,$615,$614,$617,$616,vaules,values;
				$pyjs.track={module:'ArgsTest', lineno:536};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=536;
				$pyjs.track.lineno=537;
				values = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo7', null, null, [{b:$constant_int_2}, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=538;
				self['assertEqual']((typeof ($609=values).__array != 'undefined'?
					((typeof $609.__array[$610=$constant_int_0]) != 'undefined'?$609.__array[$610]:
						$609.__getitem__($610)):
						$609.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=539;
				self['assertEqual']((typeof ($611=values).__array != 'undefined'?
					((typeof $611.__array[$612=$constant_int_1]) != 'undefined'?$611.__array[$612]:
						$611.__getitem__($612)):
						$611.__getitem__($constant_int_1)), $p['tuple']([$constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=540;
				self['assertEqual']((typeof ($613=values).__array != 'undefined'?
					((typeof $613.__array[$614=$constant_int_2]) != 'undefined'?$613.__array[$614]:
						$613.__getitem__($614)):
						$613.__getitem__($constant_int_2)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=542;
				values = $m.ArgsTestClass3['foo7']($constant_int_1, $constant_int_2, $constant_int_3, $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=543;
				self['assertEqual']((typeof ($615=values).__array != 'undefined'?
					((typeof $615.__array[$616=$constant_int_0]) != 'undefined'?$615.__array[$616]:
						$615.__getitem__($616)):
						$615.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=544;
				self['assertEqual']((typeof ($617=values).__array != 'undefined'?
					((typeof $617.__array[$618=$constant_int_1]) != 'undefined'?$617.__array[$618]:
						$617.__getitem__($618)):
						$617.__getitem__($constant_int_1)), $p['tuple']([$constant_int_2, $constant_int_3, $p['dict']([['b', $constant_int_2]])]));
				$pyjs.track.lineno=545;
				self['assertEqual']((typeof ($619=values).__array != 'undefined'?
					((typeof $619.__array[$620=$constant_int_2]) != 'undefined'?$619.__array[$620]:
						$619.__getitem__($620)):
						$619.__getitem__($constant_int_2)), $p['dict']([]));
				$pyjs.track.lineno=547;
				vaules = $pyjs_kwargs_call($m.ArgsTestClass3, 'foo8', null, null, [{b:$constant_int_2}, $constant_int_1]);
				$pyjs.track.lineno=548;
				self['assertEqual']((typeof ($621=vaules).__array != 'undefined'?
					((typeof $621.__array[$622=$constant_int_0]) != 'undefined'?$621.__array[$622]:
						$621.__getitem__($622)):
						$621.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=549;
				self['assertEqual']((typeof ($623=vaules).__array != 'undefined'?
					((typeof $623.__array[$624=$constant_int_1]) != 'undefined'?$623.__array[$624]:
						$623.__getitem__($624)):
						$623.__getitem__($constant_int_1)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=551;
				vaules = $m.ArgsTestClass3['foo8']($p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=552;
				self['assertEqual']((typeof ($625=vaules).__array != 'undefined'?
					((typeof $625.__array[$626=$constant_int_0]) != 'undefined'?$625.__array[$626]:
						$625.__getitem__($626)):
						$625.__getitem__($constant_int_0)), $p['dict']([['b', $constant_int_2]]));
				$pyjs.track.lineno=553;
				self['assertEqual']((typeof ($627=vaules).__array != 'undefined'?
					((typeof $627.__array[$628=$constant_int_1]) != 'undefined'?$627.__array[$628]:
						$627.__getitem__($628)):
						$627.__getitem__($constant_int_1)), $p['dict']([]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testEdgeClassMethodCall'] = $method;
			$pyjs.track.lineno=555;
			$method = $pyjs__bind_method2('testSimpleIndirectClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $633,$632,$631,$630,$637,$636,$635,$634,$629,$638,values,$640,$639;
				$pyjs.track={module:'ArgsTest', lineno:555};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=555;
				$pyjs.track.lineno=556;
				values = $m.ArgsTestClass3()['foo']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=557;
				self['assertEquals']((typeof ($629=values).__array != 'undefined'?
					((typeof $629.__array[$630=$constant_int_0]) != 'undefined'?$629.__array[$630]:
						$629.__getitem__($630)):
						$629.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=558;
				self['assertEquals']((typeof ($631=values).__array != 'undefined'?
					((typeof $631.__array[$632=$constant_int_1]) != 'undefined'?$631.__array[$632]:
						$631.__getitem__($632)):
						$631.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=559;
				self['assertEquals']((typeof ($633=values).__array != 'undefined'?
					((typeof $633.__array[$634=$constant_int_2]) != 'undefined'?$633.__array[$634]:
						$633.__getitem__($634)):
						$633.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=561;
				values = $m.ArgsTestClass3()['foo2']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=562;
				self['assertEquals']((typeof ($635=values).__array != 'undefined'?
					((typeof $635.__array[$636=$constant_int_0]) != 'undefined'?$635.__array[$636]:
						$635.__getitem__($636)):
						$635.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=563;
				self['assertEquals']((typeof ($637=values).__array != 'undefined'?
					((typeof $637.__array[$638=$constant_int_1]) != 'undefined'?$637.__array[$638]:
						$637.__getitem__($638)):
						$637.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=564;
				self['assertEquals']((typeof ($639=values).__array != 'undefined'?
					((typeof $639.__array[$640=$constant_int_2]) != 'undefined'?$639.__array[$640]:
						$639.__getitem__($640)):
						$639.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleIndirectClassMethodCall'] = $method;
			$pyjs.track.lineno=566;
			$method = $pyjs__bind_method2('testKeywordIndirectClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $664,$648,$649,$642,$643,$641,$660,$647,$644,$645,$646,$661,$662,$663,$655,$654,$657,$656,$651,$650,$653,$652,$659,$658,values;
				$pyjs.track={module:'ArgsTest', lineno:566};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=566;
				$pyjs.track.lineno=567;
				values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo2', null, null, [{c:$constant_int_3, b:$constant_int_2, a:$constant_int_1}]);
				$pyjs.track.lineno=568;
				self['assertEquals']((typeof ($641=values).__array != 'undefined'?
					((typeof $641.__array[$642=$constant_int_0]) != 'undefined'?$641.__array[$642]:
						$641.__getitem__($642)):
						$641.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=569;
				self['assertEquals']((typeof ($643=values).__array != 'undefined'?
					((typeof $643.__array[$644=$constant_int_1]) != 'undefined'?$643.__array[$644]:
						$643.__getitem__($644)):
						$643.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=570;
				self['assertEquals']((typeof ($645=values).__array != 'undefined'?
					((typeof $645.__array[$646=$constant_int_2]) != 'undefined'?$645.__array[$646]:
						$645.__getitem__($646)):
						$645.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=572;
				values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo2', null, null, [{b:$constant_int_2, a:$constant_int_1, c:$constant_int_3}]);
				$pyjs.track.lineno=573;
				self['assertEquals']((typeof ($647=values).__array != 'undefined'?
					((typeof $647.__array[$648=$constant_int_0]) != 'undefined'?$647.__array[$648]:
						$647.__getitem__($648)):
						$647.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=574;
				self['assertEquals']((typeof ($649=values).__array != 'undefined'?
					((typeof $649.__array[$650=$constant_int_1]) != 'undefined'?$649.__array[$650]:
						$649.__getitem__($650)):
						$649.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=575;
				self['assertEquals']((typeof ($651=values).__array != 'undefined'?
					((typeof $651.__array[$652=$constant_int_2]) != 'undefined'?$651.__array[$652]:
						$651.__getitem__($652)):
						$651.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=577;
				values = $m.ArgsTestClass3()['foo2']();
				$pyjs.track.lineno=578;
				self['assertEquals']((typeof ($653=values).__array != 'undefined'?
					((typeof $653.__array[$654=$constant_int_0]) != 'undefined'?$653.__array[$654]:
						$653.__getitem__($654)):
						$653.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=579;
				self['assertEquals']((typeof ($655=values).__array != 'undefined'?
					((typeof $655.__array[$656=$constant_int_1]) != 'undefined'?$655.__array[$656]:
						$655.__getitem__($656)):
						$655.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=580;
				self['assertEquals']((typeof ($657=values).__array != 'undefined'?
					((typeof $657.__array[$658=$constant_int_2]) != 'undefined'?$657.__array[$658]:
						$657.__getitem__($658)):
						$657.__getitem__($constant_int_2)), null);
				$pyjs.track.lineno=582;
				values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo2', null, null, [{c:true}]);
				$pyjs.track.lineno=583;
				self['assertEquals']((typeof ($659=values).__array != 'undefined'?
					((typeof $659.__array[$660=$constant_int_0]) != 'undefined'?$659.__array[$660]:
						$659.__getitem__($660)):
						$659.__getitem__($constant_int_0)), null);
				$pyjs.track.lineno=584;
				self['assertEquals']((typeof ($661=values).__array != 'undefined'?
					((typeof $661.__array[$662=$constant_int_1]) != 'undefined'?$661.__array[$662]:
						$661.__getitem__($662)):
						$661.__getitem__($constant_int_1)), null);
				$pyjs.track.lineno=585;
				self['assertEquals']((typeof ($663=values).__array != 'undefined'?
					((typeof $663.__array[$664=$constant_int_2]) != 'undefined'?$663.__array[$664]:
						$663.__getitem__($664)):
						$663.__getitem__($constant_int_2)), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKeywordIndirectClassMethodCall'] = $method;
			$pyjs.track.lineno=588;
			$method = $pyjs__bind_method2('testDefaultValuesIndirectClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $674,$675,$680,$681,$673,$678,$682,values,$669,$679,$676,$677,$665,$666,$667,$671,$672,$668,$670;
				$pyjs.track={module:'ArgsTest', lineno:588};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=588;
				$pyjs.track.lineno=589;
				values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo3', null, null, [{b:$constant_int_7}]);
				$pyjs.track.lineno=590;
				self['assertEquals']((typeof ($665=values).__array != 'undefined'?
					((typeof $665.__array[$666=$constant_int_0]) != 'undefined'?$665.__array[$666]:
						$665.__getitem__($666)):
						$665.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=591;
				self['assertEquals']((typeof ($667=values).__array != 'undefined'?
					((typeof $667.__array[$668=$constant_int_1]) != 'undefined'?$667.__array[$668]:
						$667.__getitem__($668)):
						$667.__getitem__($constant_int_1)), $constant_int_7);
				$pyjs.track.lineno=592;
				self['assertEquals']((typeof ($669=values).__array != 'undefined'?
					((typeof $669.__array[$670=$constant_int_2]) != 'undefined'?$669.__array[$670]:
						$669.__getitem__($670)):
						$669.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=594;
				values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo3', null, null, [{a:$constant_int_9}]);
				$pyjs.track.lineno=595;
				self['assertEquals']((typeof ($671=values).__array != 'undefined'?
					((typeof $671.__array[$672=$constant_int_0]) != 'undefined'?$671.__array[$672]:
						$671.__getitem__($672)):
						$671.__getitem__($constant_int_0)), $constant_int_9);
				$pyjs.track.lineno=596;
				self['assertEquals']((typeof ($673=values).__array != 'undefined'?
					((typeof $673.__array[$674=$constant_int_1]) != 'undefined'?$673.__array[$674]:
						$673.__getitem__($674)):
						$673.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=597;
				self['assertEquals']((typeof ($675=values).__array != 'undefined'?
					((typeof $675.__array[$676=$constant_int_2]) != 'undefined'?$675.__array[$676]:
						$675.__getitem__($676)):
						$675.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=599;
				values = $m.ArgsTestClass3()['foo3']();
				$pyjs.track.lineno=600;
				self['assertEquals']((typeof ($677=values).__array != 'undefined'?
					((typeof $677.__array[$678=$constant_int_0]) != 'undefined'?$677.__array[$678]:
						$677.__getitem__($678)):
						$677.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=601;
				self['assertEquals']((typeof ($679=values).__array != 'undefined'?
					((typeof $679.__array[$680=$constant_int_1]) != 'undefined'?$679.__array[$680]:
						$679.__getitem__($680)):
						$679.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=602;
				self['assertEquals']((typeof ($681=values).__array != 'undefined'?
					((typeof $681.__array[$682=$constant_int_2]) != 'undefined'?$681.__array[$682]:
						$681.__getitem__($682)):
						$681.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDefaultValuesIndirectClassMethodCall'] = $method;
			$pyjs.track.lineno=604;
			$method = $pyjs__bind_method2('testVarargsIndirectClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $691,$690,$694,$693,$692,$686,$687,$684,$685,values,$683,$688,$689;
				$pyjs.track={module:'ArgsTest', lineno:604};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=604;
				$pyjs.track.lineno=605;
				values = $m.ArgsTestClass3()['foo4']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=606;
				self['assertEquals']((typeof ($683=values).__array != 'undefined'?
					((typeof $683.__array[$684=$constant_int_0]) != 'undefined'?$683.__array[$684]:
						$683.__getitem__($684)):
						$683.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=607;
				self['assertEquals']((typeof ($685=values).__array != 'undefined'?
					((typeof $685.__array[$686=$constant_int_1]) != 'undefined'?$685.__array[$686]:
						$685.__getitem__($686)):
						$685.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=608;
				self['assertEquals']((typeof ($687=values).__array != 'undefined'?
					((typeof $687.__array[$688=$constant_int_2]) != 'undefined'?$687.__array[$688]:
						$687.__getitem__($688)):
						$687.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=610;
				values = $m.ArgsTestClass3()['foo4']($constant_int_3, $constant_int_2, $constant_int_1);
				$pyjs.track.lineno=611;
				self['assertEquals']((typeof ($689=values).__array != 'undefined'?
					((typeof $689.__array[$690=$constant_int_0]) != 'undefined'?$689.__array[$690]:
						$689.__getitem__($690)):
						$689.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=612;
				self['assertEquals']((typeof ($691=values).__array != 'undefined'?
					((typeof $691.__array[$692=$constant_int_1]) != 'undefined'?$691.__array[$692]:
						$691.__getitem__($692)):
						$691.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=613;
				self['assertEquals']((typeof ($693=values).__array != 'undefined'?
					((typeof $693.__array[$694=$constant_int_2]) != 'undefined'?$693.__array[$694]:
						$693.__getitem__($694)):
						$693.__getitem__($constant_int_2)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testVarargsIndirectClassMethodCall'] = $method;
			$pyjs.track.lineno=615;
			$method = $pyjs__bind_method2('testKwargsIndirectClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $696,$695,$697,$698,values;
				$pyjs.track={module:'ArgsTest', lineno:615};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=615;
				$pyjs.track.lineno=616;
				values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo5', null, null, [{x:$constant_int_5, y:$constant_int_7}]);
				$pyjs.track.lineno=617;
				self['assertEquals']((typeof ($695=values).__array != 'undefined'?
					((typeof $695.__array[$696='x']) != 'undefined'?$695.__array[$696]:
						$695.__getitem__($696)):
						$695.__getitem__('x')), $constant_int_5);
				$pyjs.track.lineno=618;
				self['assertEquals']((typeof ($697=values).__array != 'undefined'?
					((typeof $697.__array[$698='y']) != 'undefined'?$697.__array[$698]:
						$697.__getitem__($698)):
						$697.__getitem__('y')), $constant_int_7);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwargsIndirectClassMethodCall'] = $method;
			$pyjs.track.lineno=620;
			$method = $pyjs__bind_method2('testComboIndirectClassMethodCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $714,$715,$716,$717,$710,$711,$712,$713,$718,$707,$706,$705,$704,$703,$702,$701,$700,$699,$709,$708,values;
				$pyjs.track={module:'ArgsTest', lineno:620};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=620;
				$pyjs.track.lineno=621;
				values = $pyjs_kwargs_call($m.ArgsTestClass3(), 'foo6', null, null, [{x:$constant_int_4, y:$constant_int_5}, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=622;
				self['assertEquals']((typeof ($701=(typeof ($699=values).__array != 'undefined'?
					((typeof $699.__array[$700=$constant_int_0]) != 'undefined'?$699.__array[$700]:
						$699.__getitem__($700)):
						$699.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $701.__array[$702=$constant_int_0]) != 'undefined'?$701.__array[$702]:
						$701.__getitem__($702)):
						$701.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=623;
				self['assertEquals']((typeof ($705=(typeof ($703=values).__array != 'undefined'?
					((typeof $703.__array[$704=$constant_int_0]) != 'undefined'?$703.__array[$704]:
						$703.__getitem__($704)):
						$703.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $705.__array[$706=$constant_int_1]) != 'undefined'?$705.__array[$706]:
						$705.__getitem__($706)):
						$705.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=624;
				self['assertEquals']((typeof ($709=(typeof ($707=values).__array != 'undefined'?
					((typeof $707.__array[$708=$constant_int_0]) != 'undefined'?$707.__array[$708]:
						$707.__getitem__($708)):
						$707.__getitem__($constant_int_0))).__array != 'undefined'?
					((typeof $709.__array[$710=$constant_int_2]) != 'undefined'?$709.__array[$710]:
						$709.__getitem__($710)):
						$709.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=625;
				self['assertEquals']((typeof ($713=(typeof ($711=values).__array != 'undefined'?
					((typeof $711.__array[$712=$constant_int_1]) != 'undefined'?$711.__array[$712]:
						$711.__getitem__($712)):
						$711.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $713.__array[$714='x']) != 'undefined'?$713.__array[$714]:
						$713.__getitem__($714)):
						$713.__getitem__('x')), $constant_int_4);
				$pyjs.track.lineno=626;
				self['assertEquals']((typeof ($717=(typeof ($715=values).__array != 'undefined'?
					((typeof $715.__array[$716=$constant_int_1]) != 'undefined'?$715.__array[$716]:
						$715.__getitem__($716)):
						$715.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $717.__array[$718='y']) != 'undefined'?$717.__array[$718]:
						$717.__getitem__($718)):
						$717.__getitem__('y')), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComboIndirectClassMethodCall'] = $method;
			$pyjs.track.lineno=628;
			$method = $pyjs__bind_method2('testKwArgsRecurse', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var kwa,$732,$733,$730,$731,$736,$737,$734,$735,$750,$751,$738,$739,$719,$741,$740,$747,$746,$742,$pyjs_try_err,$745,$744,$752,$bool2,$749,$bool1,$729,$728,$725,$724,$727,$726,$721,$720,$723,$722,e,$743,$748,values;
				$pyjs.track={module:'ArgsTest', lineno:628};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=628;
				$pyjs.track.lineno=629;
				kwa = $pyjs_kwargs_call(null, (typeof kw_args == "undefined"?$m.kw_args:kw_args), null, null, [{x:$constant_int_5, y:$constant_int_6}]);
				$pyjs.track.lineno=630;
				if ((($bool1=kwa) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=631;
					self['assertEquals'](kwa['get']('x'), $constant_int_5);
					$pyjs.track.lineno=632;
					self['assertEquals'](kwa['get']('y'), $constant_int_6);
				}
				$pyjs.track.lineno=634;
				kwa = $pyjs_kwargs_call(null, (typeof kw_args2 == "undefined"?$m.kw_args2:kw_args2), null, null, [{x:$constant_int_5, y:$constant_int_6}]);
				$pyjs.track.lineno=635;
				if ((($bool2=kwa) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=636;
					self['assertEquals'](kwa['get']('x'), $constant_int_5);
					$pyjs.track.lineno=637;
					self['assertEquals'](kwa['get']('y'), $constant_int_6);
				}
				$pyjs.track.lineno=639;
				values = $pyjs_kwargs_call(null, (typeof varargs_kwargs == "undefined"?$m.varargs_kwargs:varargs_kwargs), null, null, [{c:$constant_int_3}, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=640;
				self['assertEquals']((typeof ($719=values).__array != 'undefined'?
					((typeof $719.__array[$720=$constant_int_0]) != 'undefined'?$719.__array[$720]:
						$719.__getitem__($720)):
						$719.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=641;
				self['assertEquals']((typeof ($721=values).__array != 'undefined'?
					((typeof $721.__array[$722=$constant_int_1]) != 'undefined'?$721.__array[$722]:
						$721.__getitem__($722)):
						$721.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=642;
				self['assertEquals']((typeof ($723=values).__array != 'undefined'?
					((typeof $723.__array[$724=$constant_int_2]) != 'undefined'?$723.__array[$724]:
						$723.__getitem__($724)):
						$723.__getitem__($constant_int_2)), $p['tuple']([$constant_int_3, $constant_int_4]));
				$pyjs.track.lineno=643;
				self['assertEquals']((typeof ($727=(typeof ($725=values).__array != 'undefined'?
					((typeof $725.__array[$726=$constant_int_3]) != 'undefined'?$725.__array[$726]:
						$725.__getitem__($726)):
						$725.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $727.__array[$728='c']) != 'undefined'?$727.__array[$728]:
						$727.__getitem__($728)):
						$727.__getitem__('c')), $constant_int_3);
				$pyjs.track.lineno=645;
				values = $pyjs_kwargs_call(null, (typeof varargs_kwargs2 == "undefined"?$m.varargs_kwargs2:varargs_kwargs2), null, null, [{c:$constant_int_3}, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=646;
				self['assertEquals']((typeof ($729=values).__array != 'undefined'?
					((typeof $729.__array[$730=$constant_int_0]) != 'undefined'?$729.__array[$730]:
						$729.__getitem__($730)):
						$729.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=647;
				self['assertEquals']((typeof ($731=values).__array != 'undefined'?
					((typeof $731.__array[$732=$constant_int_1]) != 'undefined'?$731.__array[$732]:
						$731.__getitem__($732)):
						$731.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=648;
				self['assertEquals']((typeof ($733=values).__array != 'undefined'?
					((typeof $733.__array[$734=$constant_int_2]) != 'undefined'?$733.__array[$734]:
						$733.__getitem__($734)):
						$733.__getitem__($constant_int_2)), $p['tuple']([$constant_int_3, $constant_int_4]));
				$pyjs.track.lineno=649;
				self['assertEquals']((typeof ($737=(typeof ($735=values).__array != 'undefined'?
					((typeof $735.__array[$736=$constant_int_3]) != 'undefined'?$735.__array[$736]:
						$735.__getitem__($736)):
						$735.__getitem__($constant_int_3))).__array != 'undefined'?
					((typeof $737.__array[$738='c']) != 'undefined'?$737.__array[$738]:
						$737.__getitem__($738)):
						$737.__getitem__('c')), $constant_int_3);
				$pyjs.track.lineno=651;
				values = (typeof varargs_kwargs2 == "undefined"?$m.varargs_kwargs2:varargs_kwargs2)($constant_int_1);
				$pyjs.track.lineno=652;
				self['assertEquals']((typeof ($739=values).__array != 'undefined'?
					((typeof $739.__array[$740=$constant_int_0]) != 'undefined'?$739.__array[$740]:
						$739.__getitem__($740)):
						$739.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=653;
				self['assertEquals']((typeof ($741=values).__array != 'undefined'?
					((typeof $741.__array[$742=$constant_int_1]) != 'undefined'?$741.__array[$742]:
						$741.__getitem__($742)):
						$741.__getitem__($constant_int_1)), $constant_int_3);
				$pyjs.track.lineno=655;
				values = (typeof varargs_kwargs2 == "undefined"?$m.varargs_kwargs2:varargs_kwargs2)($constant_int_1, $p['dict']([['a', $constant_int_1]]), $p['dict']([]));
				$pyjs.track.lineno=656;
				self['assertEquals']((typeof ($743=values).__array != 'undefined'?
					((typeof $743.__array[$744=$constant_int_0]) != 'undefined'?$743.__array[$744]:
						$743.__getitem__($744)):
						$743.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=657;
				self['assertEquals']((typeof ($747=(typeof ($745=values).__array != 'undefined'?
					((typeof $745.__array[$746=$constant_int_1]) != 'undefined'?$745.__array[$746]:
						$745.__getitem__($746)):
						$745.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $747.__array[$748='a']) != 'undefined'?$747.__array[$748]:
						$747.__getitem__($748)):
						$747.__getitem__('a')), $constant_int_1);
				$pyjs.track.lineno=659;
				values = (typeof varargs_kwargs2 == "undefined"?$m.varargs_kwargs2:varargs_kwargs2)($constant_int_1, $p['dict']([['a', $constant_int_1]]));
				$pyjs.track.lineno=660;
				self['assertEquals']((typeof ($749=values).__array != 'undefined'?
					((typeof $749.__array[$750=$constant_int_0]) != 'undefined'?$749.__array[$750]:
						$749.__getitem__($750)):
						$749.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=661;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=662;
					self['assertEquals']((typeof ($751=values).__array != 'undefined'?
						((typeof $751.__array[$752=$constant_int_1]) != 'undefined'?$751.__array[$752]:
							$751.__getitem__($752)):
							$751.__getitem__($constant_int_1)), $p['dict']([['a', $constant_int_1]]));
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
					$pyjs.track.module='ArgsTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=664;
						self['fail']('Last arg in *args,**kwargs is dict problem');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwArgsRecurse'] = $method;
			$pyjs.track.lineno=666;
			$method = $pyjs__bind_method2('testKwArgsInherit', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var kwa,c,$bool3,$pyjs_try_err,$bool6,$bool7,$bool4,$bool5;
				$pyjs.track={module:'ArgsTest', lineno:666};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=666;
				$pyjs.track.lineno=668;
				c = $pyjs_kwargs_call(null, (typeof KwArgs == "undefined"?$m.KwArgs:KwArgs), null, null, [{x:$constant_int_5, y:$constant_int_6}]);
				$pyjs.track.lineno=669;
				self['assertTrue']($p['hasattr'](c, 'kwargs'));
				$pyjs.track.lineno=670;
				kwa = $p['getattr'](c, 'kwargs', null);
				$pyjs.track.lineno=671;
				if ((($bool3=kwa) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=672;
					self['assertEquals'](kwa['get']('x'), $constant_int_5);
					$pyjs.track.lineno=673;
					self['assertEquals'](kwa['get']('y'), $constant_int_6);
					$pyjs.track.lineno=674;
					self['assertEquals'](kwa['get']('z'), $constant_int_7);
				}
				$pyjs.track.lineno=676;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=677;
					c = $pyjs_kwargs_call(null, (typeof Kwargs2 == "undefined"?$m.Kwargs2:Kwargs2), null, null, [{x:$constant_int_5, y:$constant_int_6}]);
					$pyjs.track.lineno=678;
					self['assertTrue']($p['hasattr'](c, 'kwargs'));
					$pyjs.track.lineno=679;
					kwa = $p['getattr'](c, 'kwargs', null);
					$pyjs.track.lineno=680;
					if ((($bool4=kwa) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						$pyjs.track.lineno=681;
						self['assertEquals'](kwa['get']('x'), $constant_int_5);
						$pyjs.track.lineno=682;
						self['assertEquals'](kwa['get']('y'), $constant_int_6);
						$pyjs.track.lineno=683;
						self['assertEquals'](kwa['get']('z'), $constant_int_7);
					}
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
					$pyjs.track.module='ArgsTest';
					if (true) {
						$pyjs.track.lineno=685;
						self['assertTrue'](false, 'runtime error in kwargs, needs investigating');
					}
				}
				$pyjs.track.lineno=687;
				$pyjs_kwargs_call(c, 'set_kwargs', null, null, [{x:$constant_int_5, y:$constant_int_6}]);
				$pyjs.track.lineno=688;
				self['assertTrue']($p['hasattr'](c, 'kwargs'));
				$pyjs.track.lineno=689;
				kwa = $p['getattr'](c, 'kwargs', null);
				$pyjs.track.lineno=690;
				if ((($bool5=kwa) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$pyjs.track.lineno=691;
					self['assertEquals'](kwa['get']('x'), $constant_int_5);
					$pyjs.track.lineno=692;
					self['assertEquals'](kwa['get']('y'), $constant_int_6);
					$pyjs.track.lineno=693;
					self['assertEquals'](kwa['get']('z'), $constant_int_8);
				}
				$pyjs.track.lineno=696;
				$pyjs_kwargs_call(c, 'set_kwargs2', null, null, [{x:$constant_int_5, y:$constant_int_6}]);
				$pyjs.track.lineno=697;
				self['assertTrue']($p['hasattr'](c, 'kwargs'));
				$pyjs.track.lineno=698;
				kwa = $p['getattr'](c, 'kwargs', null);
				$pyjs.track.lineno=699;
				if ((($bool6=kwa) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$pyjs.track.lineno=700;
					self['assertEquals'](kwa['get']('x'), $constant_int_5);
					$pyjs.track.lineno=701;
					self['assertEquals'](kwa['get']('y'), $constant_int_6);
					$pyjs.track.lineno=702;
					self['assertEquals'](kwa['get']('z'), $constant_int_8);
				}
				$pyjs.track.lineno=705;
				$pyjs_kwargs_call(c, 'set_kwargs3', null, null, [{x:$constant_int_5, y:$constant_int_6}]);
				$pyjs.track.lineno=706;
				self['assertTrue']($p['hasattr'](c, 'kwargs'));
				$pyjs.track.lineno=707;
				kwa = $p['getattr'](c, 'kwargs', null);
				$pyjs.track.lineno=708;
				if ((($bool7=kwa) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$pyjs.track.lineno=709;
					self['assertEquals'](kwa['get']('x'), $constant_int_5);
					$pyjs.track.lineno=710;
					self['assertEquals'](kwa['get']('y'), $constant_int_6);
					$pyjs.track.lineno=711;
					self['assertEquals'](kwa['get']('z'), $constant_int_8);
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwArgsInherit'] = $method;
			$pyjs.track.lineno=713;
			$method = $pyjs__bind_method2('testKwArgsNameMapping', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var kwargs_out,fn,kwargs;
				$pyjs.track={module:'ArgsTest', lineno:713};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=713;
				$pyjs.track.lineno=714;
				kwargs = $pyjs_kwargs_call(null, $p['dict'], null, null, [{$$comment:'Comment', name:'Name'}]);
				$pyjs.track.lineno=715;
				fn = function($$comment, name) {
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 2, arguments.length);
					if (typeof $$comment == 'undefined') $$comment=arguments.callee.__args__[2][1];
					if (typeof name == 'undefined') name=arguments.callee.__args__[3][1];
					var $$comment;
					$pyjs.track={module:'ArgsTest',lineno:715};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ArgsTest';
					$pyjs.track.lineno=715;
					$pyjs.track.lineno=716;
					$pyjs.track.lineno=716;
					var $pyjs__ret = $pyjs_kwargs_call(null, $p['dict'], null, null, [{$$comment:$$comment, name:name}]);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null,['$$comment', null],['name', null]];
				$pyjs.track.lineno=717;
				kwargs_out = $pyjs_kwargs_call(null, fn, null, kwargs, [{}]);
				$pyjs.track.lineno=718;
				self['assertEquals'](kwargs, kwargs_out);
				$pyjs.track.lineno=719;
				kwargs = $p['dict']([['comment', 'Comment'], ['name', 'Name']]);
				$pyjs.track.lineno=720;
				kwargs_out = $pyjs_kwargs_call(null, fn, null, kwargs, [{}]);
				$pyjs.track.lineno=721;
				self['assertEquals'](kwargs, kwargs_out);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwArgsNameMapping'] = $method;
			$pyjs.track.lineno=723;
			$method = $pyjs__bind_method2('testLookupOrder', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var A,fn;
				$pyjs.track={module:'ArgsTest', lineno:723};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=723;
				$pyjs.track.lineno=724;
				fn = function(fint) {
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
					if (typeof fint == 'undefined') fint=arguments.callee.__args__[2][1];

					$pyjs.track={module:'ArgsTest',lineno:724};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ArgsTest';
					$pyjs.track.lineno=724;
					$pyjs.track.lineno=725;
					$pyjs.track.lineno=725;
					var $pyjs__ret = fint(1.2);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null,['fint', $p['int']]];
				$pyjs.track.lineno=726;
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ArgsTest';
					$cls_definition.__md5__ = '3614a9deaeb2e27c74663ba0baa1cac7';
					$pyjs.track.lineno=727;
					$method = $pyjs__bind_method2('fn', function(fint) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							fint = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '3614a9deaeb2e27c74663ba0baa1cac7') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof fint == 'undefined') fint=arguments.callee.__args__[3][1];

						$pyjs.track={module:'ArgsTest', lineno:727};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ArgsTest';
						$pyjs.track.lineno=727;
						$pyjs.track.lineno=728;
						$pyjs.track.lineno=728;
						var $pyjs__ret = fint(1.2);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['fint', $p['int']]]);
					$cls_definition['fn'] = $method;
					$pyjs.track.lineno=726;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=729;
				self['assertEqual'](fn(), $constant_int_1);
				$pyjs.track.lineno=730;
				self['assertEqual'](A()['fn'](), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLookupOrder'] = $method;
			$pyjs.track.lineno=732;
			$method = $pyjs__bind_method2('testArgIsModuleName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fn;
				$pyjs.track={module:'ArgsTest', lineno:732};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=732;
				$pyjs.track.lineno=733;
				fn = function(ArgsTest) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'ArgsTest',lineno:733};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ArgsTest';
					$pyjs.track.lineno=733;
					$pyjs.track.lineno=734;
					$pyjs.track.lineno=734;
					var $pyjs__ret = (typeof foo == "undefined"?$m.foo:foo)(ArgsTest, $constant_int_2, $constant_int_3);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null,['ArgsTest']];
				$pyjs.track.lineno=735;
				self['assertEqual']((typeof __name__ == "undefined"?$m.__name__:__name__), 'ArgsTest', 'Argument to fn must be equal to module name');
				$pyjs.track.lineno=736;
				self['assertEqual'](fn('foo'), $p['list'](['foo', $constant_int_2, $constant_int_3]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testArgIsModuleName'] = $method;
			$pyjs.track.lineno=738;
			$method = $pyjs__bind_method2('testGetattr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $770,$758,$759,$753,$754,$755,$756,$757,instance,$pyjs_try_err,foo,$761,$760,$763,$762,$765,$764,$767,$766,$769,$768,values;
				$pyjs.track={module:'ArgsTest', lineno:738};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=738;
				$pyjs.track.lineno=739;
				instance = (typeof ArgsTestClass == "undefined"?$m.ArgsTestClass:ArgsTestClass)();
				$pyjs.track.lineno=740;
				foo = $p['getattr'](instance, 'foo');
				$pyjs.track.lineno=742;
				values = foo($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=743;
				self['assertEquals']((typeof ($753=values).__array != 'undefined'?
					((typeof $753.__array[$754=$constant_int_0]) != 'undefined'?$753.__array[$754]:
						$753.__getitem__($754)):
						$753.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=744;
				self['assertEquals']((typeof ($755=values).__array != 'undefined'?
					((typeof $755.__array[$756=$constant_int_1]) != 'undefined'?$755.__array[$756]:
						$755.__getitem__($756)):
						$755.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=745;
				self['assertEquals']((typeof ($757=values).__array != 'undefined'?
					((typeof $757.__array[$758=$constant_int_2]) != 'undefined'?$757.__array[$758]:
						$757.__getitem__($758)):
						$757.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=747;
				values = $pyjs_kwargs_call(null, foo, $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]), null, [{}]);
				$pyjs.track.lineno=748;
				self['assertEquals']((typeof ($759=values).__array != 'undefined'?
					((typeof $759.__array[$760=$constant_int_0]) != 'undefined'?$759.__array[$760]:
						$759.__getitem__($760)):
						$759.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=749;
				self['assertEquals']((typeof ($761=values).__array != 'undefined'?
					((typeof $761.__array[$762=$constant_int_1]) != 'undefined'?$761.__array[$762]:
						$761.__getitem__($762)):
						$761.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=750;
				self['assertEquals']((typeof ($763=values).__array != 'undefined'?
					((typeof $763.__array[$764=$constant_int_2]) != 'undefined'?$763.__array[$764]:
						$763.__getitem__($764)):
						$763.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.track.lineno=752;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=753;
					values = $pyjs_kwargs_call(null, foo, $p['tuple']([$constant_int_1, $constant_int_2]), $pyjs_kwargs_call(null, $p['dict'], null, null, [{c:$constant_int_3}]), [{}]);
					$pyjs.track.lineno=754;
					self['assertEquals']((typeof ($765=values).__array != 'undefined'?
						((typeof $765.__array[$766=$constant_int_0]) != 'undefined'?$765.__array[$766]:
							$765.__getitem__($766)):
							$765.__getitem__($constant_int_0)), $constant_int_1);
					$pyjs.track.lineno=755;
					self['assertEquals']((typeof ($767=values).__array != 'undefined'?
						((typeof $767.__array[$768=$constant_int_1]) != 'undefined'?$767.__array[$768]:
							$767.__getitem__($768)):
							$767.__getitem__($constant_int_1)), $constant_int_2);
					$pyjs.track.lineno=756;
					self['assertEquals']((typeof ($769=values).__array != 'undefined'?
						((typeof $769.__array[$770=$constant_int_2]) != 'undefined'?$769.__array[$770]:
							$769.__getitem__($770)):
							$769.__getitem__($constant_int_2)), $constant_int_3);
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
					$pyjs.track.module='ArgsTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs.track.lineno=758;
						self['fail']('foo() takes exactly 4 arguments (5 given), bug #503');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGetattr'] = $method;
			$pyjs.track.lineno=760;
			$method = $pyjs__bind_method2('testArgsUnpack', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '912c959ea80c5980444629f7cf5ab5ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,func;
				$pyjs.track={module:'ArgsTest', lineno:760};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=760;
				$pyjs.track.lineno=761;
				func = function(a, b, c, d) {
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
					var $add6,$add7,$add5,$add10,$add8,$add9;
					$pyjs.track={module:'ArgsTest',lineno:761};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ArgsTest';
					$pyjs.track.lineno=761;
					$pyjs.track.lineno=762;
					$pyjs.track.lineno=762;
					var $pyjs__ret = (typeof ($add9=(typeof ($add7=(typeof ($add5=a)==typeof ($add6=b) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)))==typeof ($add8=c) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)))==typeof ($add10=d) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				func.__name__ = 'func';

				func.__bind_type__ = 0;
				func.__args__ = [null,null,['a'],['b'],['c'],['d']];
				$pyjs.track.lineno=763;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=764;
					self['assertEqual'](func($constant_int_1, $p['tuple']([$constant_int_2, $constant_int_3]), $constant_int_4), $constant_int_10, 'Function args unpacking not supported, #527');
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
					$pyjs.track.module='ArgsTest';
					if (true) {
						$pyjs.track.lineno=766;
						self['fail']('Bug #527 Function args unpacking not supported');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testArgsUnpack'] = $method;
			$pyjs.track.lineno=9;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=769;
		$m['foo'] = function(a, b, c) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'ArgsTest',lineno:769};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=769;
			$pyjs.track.lineno=770;
			$pyjs.track.lineno=770;
			var $pyjs__ret = $p['list']([a, b, c]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo'].__name__ = 'foo';

		$m['foo'].__bind_type__ = 0;
		$m['foo'].__args__ = [null,null,['a'],['b'],['c']];
		$pyjs.track.lineno=772;
		$m['foo2'] = function(a, b, c) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
			if (typeof a == 'undefined') a=arguments.callee.__args__[2][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[4][1];

			$pyjs.track={module:'ArgsTest',lineno:772};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=772;
			$pyjs.track.lineno=773;
			$pyjs.track.lineno=773;
			var $pyjs__ret = $p['list']([a, b, c]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo2'].__name__ = 'foo2';

		$m['foo2'].__bind_type__ = 0;
		$m['foo2'].__args__ = [null,null,['a', null],['b', null],['c', null]];
		$pyjs.track.lineno=775;
		$m['foo3'] = function(a, b, c) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
			if (typeof a == 'undefined') a=arguments.callee.__args__[2][1];
			if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];
			if (typeof c == 'undefined') c=arguments.callee.__args__[4][1];

			$pyjs.track={module:'ArgsTest',lineno:775};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=775;
			$pyjs.track.lineno=776;
			$pyjs.track.lineno=776;
			var $pyjs__ret = $p['list']([a, b, c]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo3'].__name__ = 'foo3';

		$m['foo3'].__bind_type__ = 0;
		$m['foo3'].__args__ = [null,null,['a', $constant_int_1],['b', $constant_int_2],['c', $constant_int_3]];
		$pyjs.track.lineno=778;
		$m['foo4'] = function(a, b, c) {
			if ($pyjs.options.arg_count && arguments.length < 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length));


			$pyjs.track={module:'ArgsTest',lineno:778};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=778;
			$pyjs.track.lineno=779;
			$pyjs.track.lineno=779;
			var $pyjs__ret = $p['tuple']([a, b, c, args]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo4'].__name__ = 'foo4';

		$m['foo4'].__bind_type__ = 0;
		$m['foo4'].__args__ = ['args',null,['a'],['b'],['c']];
		$pyjs.track.lineno=781;
		$m['foo5'] = function(a, b, c) {
			if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof c != 'undefined') {
					if (c !== null && typeof c['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = c;
						c = arguments[3];
					}
				} else 				if (typeof b != 'undefined') {
					if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = b;
						b = arguments[3];
					}
				} else 				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[3];
					}
				} else {
				}
			}

			$pyjs.track={module:'ArgsTest',lineno:781};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=781;
			$pyjs.track.lineno=782;
			$pyjs.track.lineno=782;
			var $pyjs__ret = $p['tuple']([a, b, c, kwargs]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo5'].__name__ = 'foo5';

		$m['foo5'].__bind_type__ = 0;
		$m['foo5'].__args__ = [null,['kwargs'],['a'],['b'],['c']];
		$pyjs.track.lineno=784;
		$m['foo6'] = function(a, b, c) {
			if ($pyjs.options.arg_count && arguments.length < 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

			var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof c != 'undefined') {
					if (c !== null && typeof c['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = c;
						c = arguments[3];
					}
				} else 				if (typeof b != 'undefined') {
					if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = b;
						b = arguments[3];
					}
				} else 				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[3];
					}
				} else {
				}
			}

			$pyjs.track={module:'ArgsTest',lineno:784};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=784;
			$pyjs.track.lineno=785;
			$pyjs.track.lineno=785;
			var $pyjs__ret = $p['tuple']([a, b, c, args, kwargs]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo6'].__name__ = 'foo6';

		$m['foo6'].__bind_type__ = 0;
		$m['foo6'].__args__ = ['args',['kwargs'],['a'],['b'],['c']];
		$pyjs.track.lineno=787;
		$m['foo7'] = function(a) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[1];
					}
				} else {
				}
			}

			$pyjs.track={module:'ArgsTest',lineno:787};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=787;
			$pyjs.track.lineno=788;
			$pyjs.track.lineno=788;
			var $pyjs__ret = $p['tuple']([a, args, kwargs]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo7'].__name__ = 'foo7';

		$m['foo7'].__bind_type__ = 0;
		$m['foo7'].__args__ = ['args',['kwargs'],['a']];
		$pyjs.track.lineno=790;
		$m['foo8'] = function(a) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof a != 'undefined') {
					if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = a;
						a = arguments[1];
					}
				} else {
				}
			}

			$pyjs.track={module:'ArgsTest',lineno:790};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=790;
			$pyjs.track.lineno=791;
			$pyjs.track.lineno=791;
			var $pyjs__ret = $p['tuple']([a, kwargs]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['foo8'].__name__ = 'foo8';

		$m['foo8'].__bind_type__ = 0;
		$m['foo8'].__args__ = [null,['kwargs'],['a']];
		$pyjs.track.lineno=793;
		$m['ArgsTestClass_foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = '6c00eb81763e8c241933ddc5a6ade95f';
			$pyjs.track.lineno=794;
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6c00eb81763e8c241933ddc5a6ade95f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:794};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=794;
				$pyjs.track.lineno=795;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', $p['list']([a, b, c])) : $p['setattr'](self, 'x', $p['list']([a, b, c])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a'],['b'],['c']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=793;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass_foo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=797;
		$m['ArgsTestClass_foo2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = '6654669ac9d9684e1e4a19a7b32684b6';
			$pyjs.track.lineno=798;
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6654669ac9d9684e1e4a19a7b32684b6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ArgsTest', lineno:798};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=798;
				$pyjs.track.lineno=799;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', $p['list']([a, b, c])) : $p['setattr'](self, 'x', $p['list']([a, b, c])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=797;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass_foo2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=801;
		$m['ArgsTestClass_foo3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = 'e6a6b01851b166d809b7c5c7e0cb8cc8';
			$pyjs.track.lineno=802;
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e6a6b01851b166d809b7c5c7e0cb8cc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ArgsTest', lineno:802};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=802;
				$pyjs.track.lineno=803;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', $p['list']([a, b, c])) : $p['setattr'](self, 'x', $p['list']([a, b, c])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', $constant_int_1],['b', $constant_int_2],['c', $constant_int_3]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=801;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass_foo3', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=805;
		$m['ArgsTestClass_foo4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = 'b30569f5eb85f44689659f03c76ccc71';
			$pyjs.track.lineno=806;
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length));

					if ($pyjs.options.arg_count && arguments.length < 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, null, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,4,arguments.length));

					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b30569f5eb85f44689659f03c76ccc71') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:806};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=806;
				$pyjs.track.lineno=807;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', $p['tuple']([a, b, c, args])) : $p['setattr'](self, 'x', $p['tuple']([a, b, c, args])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',null,['self'],['a'],['b'],['c']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=805;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass_foo4', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=809;
		$m['ArgsTestClass_foo5'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = '046a2d5a2e75046997d0f22522a67ae1';
			$pyjs.track.lineno=810;
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '046a2d5a2e75046997d0f22522a67ae1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof c != 'undefined') {
						if (c !== null && typeof c['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = c;
							c = arguments[4];
						}
					} else 					if (typeof b != 'undefined') {
						if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = b;
							b = arguments[4];
						}
					} else 					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = a;
							a = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:810};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=810;
				$pyjs.track.lineno=811;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', $p['tuple']([a, b, c, kwargs])) : $p['setattr'](self, 'x', $p['tuple']([a, b, c, kwargs])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['a'],['b'],['c']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=809;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass_foo5', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=813;
		$m['ArgsTestClass_foo6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = '5a114e81e802f1356380db3f93a9884a';
			$pyjs.track.lineno=814;
			$method = $pyjs__bind_method2('__init__', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

					var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, null, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,4,arguments.length-1));

					var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5a114e81e802f1356380db3f93a9884a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof c != 'undefined') {
						if (c !== null && typeof c['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = c;
							c = arguments[4];
						}
					} else 					if (typeof b != 'undefined') {
						if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = b;
							b = arguments[4];
						}
					} else 					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = a;
							a = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:814};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=814;
				$pyjs.track.lineno=815;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', $p['tuple']([a, b, c, args, kwargs])) : $p['setattr'](self, 'x', $p['tuple']([a, b, c, args, kwargs])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['a'],['b'],['c']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=813;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass_foo6', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=817;
		$m['ArgsTestClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = '1ae077b3963cd71a38bafe9a213646cb';
			$pyjs.track.lineno=818;
			$method = $pyjs__bind_method2('foo', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1ae077b3963cd71a38bafe9a213646cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:818};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=818;
				$pyjs.track.lineno=819;
				$pyjs.track.lineno=819;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['a'],['b'],['c']]);
			$cls_definition['foo'] = $method;
			$pyjs.track.lineno=821;
			$method = $pyjs__bind_method2('foo2', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1ae077b3963cd71a38bafe9a213646cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ArgsTest', lineno:821};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=821;
				$pyjs.track.lineno=822;
				$pyjs.track.lineno=822;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['foo2'] = $method;
			$pyjs.track.lineno=824;
			$method = $pyjs__bind_method2('foo3', function(a, b, c) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					c = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1ae077b3963cd71a38bafe9a213646cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ArgsTest', lineno:824};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=824;
				$pyjs.track.lineno=825;
				$pyjs.track.lineno=825;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['a', $constant_int_1],['b', $constant_int_2],['c', $constant_int_3]]);
			$cls_definition['foo3'] = $method;
			$pyjs.track.lineno=827;
			$method = $pyjs__bind_method2('foo4', function() {
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
					if (self.prototype.__md5__ !== '1ae077b3963cd71a38bafe9a213646cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:827};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=827;
				$pyjs.track.lineno=828;
				$pyjs.track.lineno=828;
				var $pyjs__ret = args;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['foo4'] = $method;
			$pyjs.track.lineno=830;
			$method = $pyjs__bind_method2('foo5', function() {
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
					if (self.prototype.__md5__ !== '1ae077b3963cd71a38bafe9a213646cb') {
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

				$pyjs.track={module:'ArgsTest', lineno:830};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=830;
				$pyjs.track.lineno=831;
				$pyjs.track.lineno=831;
				var $pyjs__ret = kwargs;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['foo5'] = $method;
			$pyjs.track.lineno=833;
			$method = $pyjs__bind_method2('foo6', function() {
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
					if (self.prototype.__md5__ !== '1ae077b3963cd71a38bafe9a213646cb') {
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

				$pyjs.track={module:'ArgsTest', lineno:833};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=833;
				$pyjs.track.lineno=834;
				$pyjs.track.lineno=834;
				var $pyjs__ret = $p['tuple']([args, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['foo6'] = $method;
			$pyjs.track.lineno=836;
			$method = $pyjs__bind_method2('foo7', function(a) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1ae077b3963cd71a38bafe9a213646cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = a;
							a = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:836};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=836;
				$pyjs.track.lineno=837;
				$pyjs.track.lineno=837;
				var $pyjs__ret = $p['tuple']([a, args, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',['kwargs'],['self'],['a']]);
			$cls_definition['foo7'] = $method;
			$pyjs.track.lineno=839;
			$method = $pyjs__bind_method2('foo8', function(a) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1ae077b3963cd71a38bafe9a213646cb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = a;
							a = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:839};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=839;
				$pyjs.track.lineno=840;
				$pyjs.track.lineno=840;
				var $pyjs__ret = $p['tuple']([a, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,['kwargs'],['self'],['a']]);
			$cls_definition['foo8'] = $method;
			$pyjs.track.lineno=817;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=843;
		$m['ArgsTestClass2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = 'dd963ee3fc97debe0c96f90beab7a05d';
			$pyjs.track.lineno=845;
			$method = $pyjs__bind_method2('foo', function(a, b, c) {
				if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

				$pyjs.track={module:'ArgsTest', lineno:845};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=845;
				$pyjs.track.lineno=846;
				$pyjs.track.lineno=846;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['a'],['b'],['c']]);
			$cls_definition['foo'] = $method;
			$pyjs.track.lineno=849;
			$method = $pyjs__bind_method2('foo2', function(a, b, c) {
				if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
				if (typeof a == 'undefined') a=arguments.callee.__args__[2][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[4][1];

				$pyjs.track={module:'ArgsTest', lineno:849};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=849;
				$pyjs.track.lineno=850;
				$pyjs.track.lineno=850;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['a', null],['b', null],['c', null]]);
			$cls_definition['foo2'] = $method;
			$pyjs.track.lineno=853;
			$method = $pyjs__bind_method2('foo3', function(a, b, c) {
				if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 3, arguments.length);
				if (typeof a == 'undefined') a=arguments.callee.__args__[2][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[4][1];

				$pyjs.track={module:'ArgsTest', lineno:853};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=853;
				$pyjs.track.lineno=854;
				$pyjs.track.lineno=854;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['a', $constant_int_1],['b', $constant_int_2],['c', $constant_int_3]]);
			$cls_definition['foo3'] = $method;
			$pyjs.track.lineno=857;
			$method = $pyjs__bind_method2('foo4', function() {
				if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, null, arguments.length);
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


				$pyjs.track={module:'ArgsTest', lineno:857};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=857;
				$pyjs.track.lineno=858;
				$pyjs.track.lineno=858;
				var $pyjs__ret = args;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, ['args',null]);
			$cls_definition['foo4'] = $method;
			$pyjs.track.lineno=861;
			$method = $pyjs__bind_method2('foo5', function() {
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

				$pyjs.track={module:'ArgsTest', lineno:861};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=861;
				$pyjs.track.lineno=862;
				$pyjs.track.lineno=862;
				var $pyjs__ret = kwargs;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,['kwargs']]);
			$cls_definition['foo5'] = $method;
			$pyjs.track.lineno=865;
			$method = $pyjs__bind_method2('foo6', function() {
				if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, null, arguments.length);
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
{
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:865};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=865;
				$pyjs.track.lineno=866;
				$pyjs.track.lineno=866;
				var $pyjs__ret = $p['tuple']([args, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, ['args',['kwargs']]);
			$cls_definition['foo6'] = $method;
			$pyjs.track.lineno=869;
			$method = $pyjs__bind_method2('foo7', function(a) {
				if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = a;
							a = arguments[1];
						}
					} else {
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:869};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=869;
				$pyjs.track.lineno=870;
				$pyjs.track.lineno=870;
				var $pyjs__ret = $p['tuple']([a, args, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, ['args',['kwargs'],['a']]);
			$cls_definition['foo7'] = $method;
			$pyjs.track.lineno=873;
			$method = $pyjs__bind_method2('foo8', function(a) {
				if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = a;
							a = arguments[1];
						}
					} else {
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:873};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=873;
				$pyjs.track.lineno=874;
				$pyjs.track.lineno=874;
				var $pyjs__ret = $p['tuple']([a, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,['kwargs'],['a']]);
			$cls_definition['foo8'] = $method;
			$pyjs.track.lineno=843;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=876;
		$m['ArgsTestClass3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = '2a9b815e7f55c9beed5248c71453bc7f';
			$pyjs.track.lineno=878;
			$method = $pyjs__bind_method2('foo', function(a, b, c) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 3, arguments.length);
    var self = this.prototype;

				$pyjs.track={module:'ArgsTest', lineno:878};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=878;
				$pyjs.track.lineno=879;
				$pyjs.track.lineno=879;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['self'],['a'],['b'],['c']]);
			$cls_definition['foo'] = $method;
			$pyjs.track.lineno=882;
			$method = $pyjs__bind_method2('foo2', function(a, b, c) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
    var self = this.prototype;
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ArgsTest', lineno:882};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=882;
				$pyjs.track.lineno=883;
				$pyjs.track.lineno=883;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['foo2'] = $method;
			$pyjs.track.lineno=886;
			$method = $pyjs__bind_method2('foo3', function(a, b, c) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
    var self = this.prototype;
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ArgsTest', lineno:886};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=886;
				$pyjs.track.lineno=887;
				$pyjs.track.lineno=887;
				var $pyjs__ret = $p['list']([a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['self'],['a', $constant_int_1],['b', $constant_int_2],['c', $constant_int_3]]);
			$cls_definition['foo3'] = $method;
			$pyjs.track.lineno=890;
			$method = $pyjs__bind_method2('foo4', function() {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
    var self = this.prototype;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


				$pyjs.track={module:'ArgsTest', lineno:890};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=890;
				$pyjs.track.lineno=891;
				$pyjs.track.lineno=891;
				var $pyjs__ret = args;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, ['args',null,['self']]);
			$cls_definition['foo4'] = $method;
			$pyjs.track.lineno=894;
			$method = $pyjs__bind_method2('foo5', function() {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
    var self = this.prototype;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
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

				$pyjs.track={module:'ArgsTest', lineno:894};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=894;
				$pyjs.track.lineno=895;
				$pyjs.track.lineno=895;
				var $pyjs__ret = kwargs;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,['kwargs'],['self']]);
			$cls_definition['foo5'] = $method;
			$pyjs.track.lineno=898;
			$method = $pyjs__bind_method2('foo6', function() {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
    var self = this.prototype;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
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

				$pyjs.track={module:'ArgsTest', lineno:898};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=898;
				$pyjs.track.lineno=899;
				$pyjs.track.lineno=899;
				var $pyjs__ret = $p['tuple']([args, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, ['args',['kwargs'],['self']]);
			$cls_definition['foo6'] = $method;
			$pyjs.track.lineno=902;
			$method = $pyjs__bind_method2('foo7', function(a) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
    var self = this.prototype;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = a;
							a = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:902};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=902;
				$pyjs.track.lineno=903;
				$pyjs.track.lineno=903;
				var $pyjs__ret = $p['tuple']([a, args, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, ['args',['kwargs'],['self'],['a']]);
			$cls_definition['foo7'] = $method;
			$pyjs.track.lineno=906;
			$method = $pyjs__bind_method2('foo8', function(a) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
    var self = this.prototype;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof a != 'undefined') {
						if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = a;
							a = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'ArgsTest', lineno:906};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=906;
				$pyjs.track.lineno=907;
				$pyjs.track.lineno=907;
				var $pyjs__ret = $p['tuple']([a, kwargs]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,['kwargs'],['self'],['a']]);
			$cls_definition['foo8'] = $method;
			$pyjs.track.lineno=876;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ArgsTestClass3', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=910;
		$m['KwArgs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = '4c0fee05a8e90c7058f33ab9dbb8fc91';
			$pyjs.track.lineno=911;
			$method = $pyjs__bind_method2('__init__', function(z, zz) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					z = arguments[1];
					zz = arguments[2];
					var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4c0fee05a8e90c7058f33ab9dbb8fc91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof zz != 'undefined') {
						if (zz !== null && typeof zz['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = zz;
							zz = arguments[3];
						}
					} else 					if (typeof z != 'undefined') {
						if (z !== null && typeof z['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = z;
							z = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof z == 'undefined') z=arguments.callee.__args__[3][1];
				if (typeof zz == 'undefined') zz=arguments.callee.__args__[4][1];

				$pyjs.track={module:'ArgsTest', lineno:911};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=911;
				$pyjs.track.lineno=912;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('kwargs', kwargs) : $p['setattr'](self, 'kwargs', kwargs); 
				$pyjs.track.lineno=913;
				$p['getattr'](self, 'kwargs').__setitem__('z', z);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['z', $constant_int_7],['zz', $constant_int_77]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=915;
			$method = $pyjs__bind_method2('set_kwargs', function(z) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					z = arguments[1];
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4c0fee05a8e90c7058f33ab9dbb8fc91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof z != 'undefined') {
						if (z !== null && typeof z['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = z;
							z = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof z == 'undefined') z=arguments.callee.__args__[3][1];

				$pyjs.track={module:'ArgsTest', lineno:915};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=915;
				$pyjs.track.lineno=916;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('kwargs', kwargs) : $p['setattr'](self, 'kwargs', kwargs); 
				$pyjs.track.lineno=917;
				$p['getattr'](self, 'kwargs').__setitem__('z', z);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['z', $constant_int_8]]);
			$cls_definition['set_kwargs'] = $method;
			$pyjs.track.lineno=910;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('KwArgs', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=919;
		$m['Kwargs2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ArgsTest';
			$cls_definition.__md5__ = 'c4d0ffe807489a58d63641784c65f254';
			$pyjs.track.lineno=921;
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
					if (self.prototype.__md5__ !== 'c4d0ffe807489a58d63641784c65f254') {
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

				$pyjs.track={module:'ArgsTest', lineno:921};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=921;
				$pyjs.track.lineno=922;
				$pyjs_kwargs_call($m['KwArgs'], '__init__', null, kwargs, [{}, self]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=924;
			$method = $pyjs__bind_method2('set_kwargs2', function() {
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
					if (self.prototype.__md5__ !== 'c4d0ffe807489a58d63641784c65f254') {
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

				$pyjs.track={module:'ArgsTest', lineno:924};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=924;
				$pyjs.track.lineno=925;
				$pyjs_kwargs_call($m['KwArgs'], 'set_kwargs', null, kwargs, [{}, self]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['set_kwargs2'] = $method;
			$pyjs.track.lineno=927;
			$method = $pyjs__bind_method2('set_kwargs3', function() {
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
					if (self.prototype.__md5__ !== 'c4d0ffe807489a58d63641784c65f254') {
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
				var skw;
				$pyjs.track={module:'ArgsTest', lineno:927};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ArgsTest';
				$pyjs.track.lineno=927;
				$pyjs.track.lineno=928;
				skw = $p['getattr'](self, 'set_kwargs');
				$pyjs.track.lineno=929;
				$pyjs_kwargs_call(null, skw, null, kwargs, [{}]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['set_kwargs3'] = $method;
			$pyjs.track.lineno=919;
			var $bases = new Array($m['KwArgs']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Kwargs2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=931;
		$m['kw_args'] = function() {
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

			$pyjs.track={module:'ArgsTest',lineno:931};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=931;
			$pyjs.track.lineno=932;
			$pyjs.track.lineno=932;
			var $pyjs__ret = kwargs;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['kw_args'].__name__ = 'kw_args';

		$m['kw_args'].__bind_type__ = 0;
		$m['kw_args'].__args__ = [null,['kwargs']];
		$pyjs.track.lineno=934;
		$m['kw_args2'] = function() {
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

			$pyjs.track={module:'ArgsTest',lineno:934};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=934;
			$pyjs.track.lineno=935;
			$pyjs.track.lineno=935;
			var $pyjs__ret = $pyjs_kwargs_call(null, $m['kw_args'], null, kwargs, [{}]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['kw_args2'].__name__ = 'kw_args2';

		$m['kw_args2'].__bind_type__ = 0;
		$m['kw_args2'].__args__ = [null,['kwargs']];
		$pyjs.track.lineno=937;
		$m['varargs_kwargs'] = function(arg1, arg2) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

			var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof arg2 != 'undefined') {
					if (arg2 !== null && typeof arg2['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = arg2;
						arg2 = arguments[2];
					}
				} else 				if (typeof arg1 != 'undefined') {
					if (arg1 !== null && typeof arg1['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = arg1;
						arg1 = arguments[2];
					}
				} else {
				}
			}
			if (typeof arg2 == 'undefined') arg2=arguments.callee.__args__[3][1];

			$pyjs.track={module:'ArgsTest',lineno:937};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=937;
			$pyjs.track.lineno=938;
			$pyjs.track.lineno=938;
			var $pyjs__ret = $p['tuple']([arg1, arg2, args, kwargs]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['varargs_kwargs'].__name__ = 'varargs_kwargs';

		$m['varargs_kwargs'].__bind_type__ = 0;
		$m['varargs_kwargs'].__args__ = ['args',['kwargs'],['arg1'],['arg2', $constant_int_2]];
		$pyjs.track.lineno=940;
		$m['varargs_kwargs2'] = function(arg1, arg2) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

			var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof arg2 != 'undefined') {
					if (arg2 !== null && typeof arg2['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = arg2;
						arg2 = arguments[2];
					}
				} else 				if (typeof arg1 != 'undefined') {
					if (arg1 !== null && typeof arg1['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = arg1;
						arg1 = arguments[2];
					}
				} else {
				}
			}
			if (typeof arg2 == 'undefined') arg2=arguments.callee.__args__[3][1];

			$pyjs.track={module:'ArgsTest',lineno:940};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ArgsTest';
			$pyjs.track.lineno=940;
			$pyjs.track.lineno=941;
			$pyjs.track.lineno=941;
			var $pyjs__ret = $pyjs_kwargs_call(null, $m['varargs_kwargs'], args, kwargs, [{}, arg1, arg2]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['varargs_kwargs2'].__name__ = 'varargs_kwargs2';

		$m['varargs_kwargs2'].__bind_type__ = 0;
		$m['varargs_kwargs2'].__args__ = ['args',['kwargs'],['arg1'],['arg2', $constant_int_3]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ArgsTest */


/* end module: ArgsTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/
