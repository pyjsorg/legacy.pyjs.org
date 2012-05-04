/* start module: StringTest */
$pyjs.loaded_modules['StringTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['StringTest'].__was_initialized__) return $pyjs.loaded_modules['StringTest'];
	var $m = $pyjs.loaded_modules["StringTest"];
	$m.__repr__ = function() { return "<module: StringTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'StringTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'StringTest.py, line 1:\n    # -*- coding: utf-8 -*-';
		$m.__track_lines__[2] = 'StringTest.py, line 2:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'StringTest.py, line 3:\n    import write';
		$m.__track_lines__[5] = 'StringTest.py, line 5:\n    class StringTest(UnitTest):';
		$m.__track_lines__[7] = 'StringTest.py, line 7:\n    def testBasestring(self):';
		$m.__track_lines__[8] = "StringTest.py, line 8:\n    s = 'A string'";
		$m.__track_lines__[9] = 'StringTest.py, line 9:\n    self.assertTrue(isinstance(s, str), "isinstance(s, str)")';
		$m.__track_lines__[10] = 'StringTest.py, line 10:\n    self.assertTrue(isinstance(s, basestring), "isinstance(s, basestring)")';
		$m.__track_lines__[12] = 'StringTest.py, line 12:\n    def testToString(self):';
		$m.__track_lines__[17] = 'StringTest.py, line 17:\n    o = ClassWithOwnToString()';
		$m.__track_lines__[18] = "StringTest.py, line 18:\n    self.assertEquals(o.toString(), 'ClassWithOwnToString as a String')";
		$m.__track_lines__[19] = 'StringTest.py, line 19:\n    o = ClassWithOwnToString2()';
		$m.__track_lines__[20] = 'StringTest.py, line 20:\n    try:';
		$m.__track_lines__[21] = "StringTest.py, line 21:\n    self.assertEquals(o.toString(), 'ClassWithOwnToString2 as a String')";
		$m.__track_lines__[25] = 'StringTest.py, line 25:\n    pass';
		$m.__track_lines__[27] = 'StringTest.py, line 27:\n    def testReplace(self):';
		$m.__track_lines__[28] = 'StringTest.py, line 28:\n    text="this is a rather long string"';
		$m.__track_lines__[29] = 'StringTest.py, line 29:\n    expected_result1="th--- --- a rather long string"';
		$m.__track_lines__[30] = 'StringTest.py, line 30:\n    expected_result2="thi-- is a rather long string"';
		$m.__track_lines__[31] = 'StringTest.py, line 31:\n    expected_result3="this_is_a_rather_long_string"';
		$m.__track_lines__[33] = 'StringTest.py, line 33:\n    result=text.replace("is", "---")';
		$m.__track_lines__[34] = 'StringTest.py, line 34:\n    self.assertEquals(result, expected_result1)';
		$m.__track_lines__[36] = 'StringTest.py, line 36:\n    result=text.replace("s", "--", 1)';
		$m.__track_lines__[37] = 'StringTest.py, line 37:\n    self.assertEquals(result, expected_result2)';
		$m.__track_lines__[39] = 'StringTest.py, line 39:\n    result=text.replace(" ", "_")';
		$m.__track_lines__[40] = 'StringTest.py, line 40:\n    self.assertEquals(result, expected_result3)';
		$m.__track_lines__[42] = 'StringTest.py, line 42:\n    def testRFind(self):';
		$m.__track_lines__[43] = 'StringTest.py, line 43:\n    text="this is a yes it is a rather long string"';
		$m.__track_lines__[45] = 'StringTest.py, line 45:\n    result=text.rfind("not found")';
		$m.__track_lines__[46] = 'StringTest.py, line 46:\n    self.assertEquals(result, -1)';
		$m.__track_lines__[48] = 'StringTest.py, line 48:\n    result=text.rfind("is")';
		$m.__track_lines__[49] = 'StringTest.py, line 49:\n    self.assertEquals(result, 17)';
		$m.__track_lines__[51] = 'StringTest.py, line 51:\n    result=text.rfind("is", 18)';
		$m.__track_lines__[52] = 'StringTest.py, line 52:\n    self.assertEquals(result, -1)';
		$m.__track_lines__[54] = 'StringTest.py, line 54:\n    result=text.rfind("is", 17)';
		$m.__track_lines__[55] = 'StringTest.py, line 55:\n    self.assertEquals(result, 17)';
		$m.__track_lines__[57] = 'StringTest.py, line 57:\n    result=text.rfind("is", 16)';
		$m.__track_lines__[58] = 'StringTest.py, line 58:\n    self.assertEquals(result, 17)';
		$m.__track_lines__[60] = 'StringTest.py, line 60:\n    result=text.rfind("is", 2, 3)';
		$m.__track_lines__[61] = 'StringTest.py, line 61:\n    self.assertEquals(result, -1)';
		$m.__track_lines__[63] = 'StringTest.py, line 63:\n    def testFind(self):';
		$m.__track_lines__[64] = 'StringTest.py, line 64:\n    text="this is a rather long string"';
		$m.__track_lines__[66] = 'StringTest.py, line 66:\n    result=text.find("not found")';
		$m.__track_lines__[67] = 'StringTest.py, line 67:\n    self.assertEquals(result, -1)';
		$m.__track_lines__[69] = 'StringTest.py, line 69:\n    result=text.find("is")';
		$m.__track_lines__[70] = 'StringTest.py, line 70:\n    self.assertEquals(result, 2)';
		$m.__track_lines__[72] = 'StringTest.py, line 72:\n    result=text.find("is", 3)';
		$m.__track_lines__[73] = 'StringTest.py, line 73:\n    self.assertEquals(result, 5)';
		$m.__track_lines__[75] = 'StringTest.py, line 75:\n    result=text.find("is", 2, 3)';
		$m.__track_lines__[76] = 'StringTest.py, line 76:\n    self.assertEquals(result, -1)';
		$m.__track_lines__[78] = 'StringTest.py, line 78:\n    def testJoin(self):';
		$m.__track_lines__[79] = 'StringTest.py, line 79:\n    data="this is a rather long string"';
		$m.__track_lines__[80] = 'StringTest.py, line 80:\n    data=data.split(" ")';
		$m.__track_lines__[81] = 'StringTest.py, line 81:\n    sep1=", "';
		$m.__track_lines__[82] = 'StringTest.py, line 82:\n    sep2=""';
		$m.__track_lines__[83] = 'StringTest.py, line 83:\n    expected_result1="this, is, a, rather, long, string"';
		$m.__track_lines__[84] = 'StringTest.py, line 84:\n    expected_result2="thisisaratherlongstring"';
		$m.__track_lines__[86] = 'StringTest.py, line 86:\n    result=sep1.join(data)';
		$m.__track_lines__[87] = 'StringTest.py, line 87:\n    self.assertEquals(result, expected_result1)';
		$m.__track_lines__[89] = 'StringTest.py, line 89:\n    result=sep2.join(data)';
		$m.__track_lines__[90] = 'StringTest.py, line 90:\n    self.assertEquals(result, expected_result2)';
		$m.__track_lines__[92] = 'StringTest.py, line 92:\n    def testSplit(self):';
		$m.__track_lines__[93] = 'StringTest.py, line 93:\n    text=" this is  a rather long string  "';
		$m.__track_lines__[94] = 'StringTest.py, line 94:\n    space=" "';
		$m.__track_lines__[95] = 'StringTest.py, line 95:\n    empty=""';
		$m.__track_lines__[96] = 'StringTest.py, line 96:\n    expected_result1=" this is  a rather long string  "';
		$m.__track_lines__[97] = 'StringTest.py, line 97:\n    expected_result2="thisis  a rather long string  "';
		$m.__track_lines__[98] = 'StringTest.py, line 98:\n    expected_result3="this is a rather long string"';
		$m.__track_lines__[100] = 'StringTest.py, line 100:\n    t = text.split(space)';
		$m.__track_lines__[101] = "StringTest.py, line 101:\n    self.assertEquals(t[0], '')";
		$m.__track_lines__[102] = "StringTest.py, line 102:\n    self.assertEquals(t[1], 'this')";
		$m.__track_lines__[103] = "StringTest.py, line 103:\n    self.assertEquals(t[2], 'is')";
		$m.__track_lines__[104] = "StringTest.py, line 104:\n    self.assertEquals(t[3], '')";
		$m.__track_lines__[105] = "StringTest.py, line 105:\n    self.assertEquals(t[4], 'a')";
		$m.__track_lines__[107] = 'StringTest.py, line 107:\n    result=space.join(t)';
		$m.__track_lines__[108] = 'StringTest.py, line 108:\n    self.assertEquals(result, expected_result1)';
		$m.__track_lines__[110] = 'StringTest.py, line 110:\n    result=empty.join(text.split(space, 2))';
		$m.__track_lines__[111] = 'StringTest.py, line 111:\n    self.assertEquals(result, expected_result2)';
		$m.__track_lines__[113] = 'StringTest.py, line 113:\n    result=space.join(text.split())';
		$m.__track_lines__[114] = 'StringTest.py, line 114:\n    self.assertEquals(result, expected_result3)';
		$m.__track_lines__[116] = 'StringTest.py, line 116:\n    result=empty.split()';
		$m.__track_lines__[117] = 'StringTest.py, line 117:\n    self.assertEquals(result, [])';
		$m.__track_lines__[119] = 'StringTest.py, line 119:\n    result=empty.split(None)';
		$m.__track_lines__[120] = 'StringTest.py, line 120:\n    self.assertEquals(result, [])';
		$m.__track_lines__[122] = "StringTest.py, line 122:\n    result=empty.split(' ')";
		$m.__track_lines__[123] = "StringTest.py, line 123:\n    self.assertEquals(result, [''])";
		$m.__track_lines__[125] = 'StringTest.py, line 125:\n    def testStrip(self):';
		$m.__track_lines__[126] = 'StringTest.py, line 126:\n    text=" this is  a rather long string  "';
		$m.__track_lines__[127] = 'StringTest.py, line 127:\n    expected_result1="this is  a rather long string"';
		$m.__track_lines__[128] = 'StringTest.py, line 128:\n    expected_result2="a rather long string"';
		$m.__track_lines__[130] = 'StringTest.py, line 130:\n    result=text.strip()';
		$m.__track_lines__[131] = 'StringTest.py, line 131:\n    self.assertEquals(result, expected_result1)';
		$m.__track_lines__[133] = 'StringTest.py, line 133:\n    result=text.strip(" sthi")';
		$m.__track_lines__[134] = 'StringTest.py, line 134:\n    self.assertEquals(result, expected_result2)';
		$m.__track_lines__[136] = 'StringTest.py, line 136:\n    result=text.strip("")';
		$m.__track_lines__[137] = 'StringTest.py, line 137:\n    self.assertEquals(result, text)';
		$m.__track_lines__[139] = 'StringTest.py, line 139:\n    def testUnicode(self):';
		$m.__track_lines__[140] = 'StringTest.py, line 140:\n    text=u"""Liebe \'hallo\' "gr\xc3\xbcsse" Gr\xc3\xbcsse"""';
		$m.__track_lines__[141] = 'StringTest.py, line 141:\n    self.assertEqual(text, text[:])';
		$m.__track_lines__[143] = 'StringTest.py, line 143:\n    def testIsDigit(self):';
		$m.__track_lines__[144] = 'StringTest.py, line 144:\n    self.assertEqual("123".isdigit(), True)';
		$m.__track_lines__[146] = 'StringTest.py, line 146:\n    self.assertEqual("-123".isdigit(), False)';
		$m.__track_lines__[148] = 'StringTest.py, line 148:\n    self.assertEqual("123.45".isdigit(), False)';
		$m.__track_lines__[150] = 'StringTest.py, line 150:\n    self.assertEqual("1a".isdigit(), False)';
		$m.__track_lines__[152] = 'StringTest.py, line 152:\n    self.assertEqual("   ".isdigit(), False)';
		$m.__track_lines__[154] = 'StringTest.py, line 154:\n    def testStringIterate(self):';
		$m.__track_lines__[155] = 'StringTest.py, line 155:\n    text=" this is  a rather long string  "';
		$m.__track_lines__[156] = "StringTest.py, line 156:\n    t = ''";
		$m.__track_lines__[157] = 'StringTest.py, line 157:\n    for x in text:';
		$m.__track_lines__[158] = 'StringTest.py, line 158:\n    t += x';
		$m.__track_lines__[159] = 'StringTest.py, line 159:\n    self.assertEqual(text, t)';
		$m.__track_lines__[161] = 'StringTest.py, line 161:\n    def testStrTuple(self):';
		$m.__track_lines__[162] = 'StringTest.py, line 162:\n    self.assertEqual(str((5,6)), "(5, 6)")';
		$m.__track_lines__[164] = 'StringTest.py, line 164:\n    def testStrList(self):';
		$m.__track_lines__[165] = 'StringTest.py, line 165:\n    self.assertEqual(str([5,6]), "[5, 6]")';
		$m.__track_lines__[167] = 'StringTest.py, line 167:\n    def testStrFloat(self):';
		$m.__track_lines__[168] = 'StringTest.py, line 168:\n    f1 = 1.5';
		$m.__track_lines__[169] = 'StringTest.py, line 169:\n    self.assertEqual(str(f1), "1.5")';
		$m.__track_lines__[170] = 'StringTest.py, line 170:\n    self.assertEqual(f1.__str__(), "1.5", "float.__str__() returns type instead of value, bug #487")';
		$m.__track_lines__[172] = 'StringTest.py, line 172:\n    def testStartsWith(self):';
		$m.__track_lines__[173] = "StringTest.py, line 173:\n    s = 'abcd'";
		$m.__track_lines__[174] = "StringTest.py, line 174:\n    self.assertEqual(s.startswith('ab'), True)";
		$m.__track_lines__[175] = "StringTest.py, line 175:\n    self.assertEqual(s.startswith('ab', 0), True)";
		$m.__track_lines__[176] = "StringTest.py, line 176:\n    self.assertEqual(s.startswith('ab', 1), False)";
		$m.__track_lines__[177] = "StringTest.py, line 177:\n    self.assertEqual(s.startswith('bc', 1), True)";
		$m.__track_lines__[178] = "StringTest.py, line 178:\n    self.assertEqual(s.startswith('ab', 0, 8), True)";
		$m.__track_lines__[179] = "StringTest.py, line 179:\n    self.assertEqual(s.startswith('ab', 0, 3), True)";
		$m.__track_lines__[180] = "StringTest.py, line 180:\n    self.assertEqual(s.startswith('ab', 0, 2), True)";
		$m.__track_lines__[181] = "StringTest.py, line 181:\n    self.assertEqual(s.startswith('ab', 0, 1), False)";
		$m.__track_lines__[183] = 'StringTest.py, line 183:\n    def testEndsWith(self):';
		$m.__track_lines__[184] = "StringTest.py, line 184:\n    s = 'abcd'";
		$m.__track_lines__[185] = "StringTest.py, line 185:\n    self.assertEqual(s.endswith('cd'), True)";
		$m.__track_lines__[186] = "StringTest.py, line 186:\n    self.assertEqual(s.endswith('cd', 0), True)";
		$m.__track_lines__[187] = "StringTest.py, line 187:\n    self.assertEqual(s.endswith('cd', 2), True)";
		$m.__track_lines__[188] = "StringTest.py, line 188:\n    self.assertEqual(s.endswith('cd', 3), False)";
		$m.__track_lines__[189] = "StringTest.py, line 189:\n    self.assertEqual(s.endswith('cd', 0, 3), False)";
		$m.__track_lines__[190] = "StringTest.py, line 190:\n    self.assertEqual(s.endswith('bc', 0, 3), True)";
		$m.__track_lines__[192] = 'StringTest.py, line 192:\n    def testLjust(self):';
		$m.__track_lines__[193] = "StringTest.py, line 193:\n    self.assertEqual('a'.ljust(0), 'a')";
		$m.__track_lines__[194] = "StringTest.py, line 194:\n    self.assertEqual('a'.ljust(4), 'a   ')";
		$m.__track_lines__[195] = "StringTest.py, line 195:\n    self.assertEqual('a'.ljust(4, 'b'), 'abbb')";
		$m.__track_lines__[197] = 'StringTest.py, line 197:\n    def testRjust(self):';
		$m.__track_lines__[198] = "StringTest.py, line 198:\n    self.assertEqual('a'.rjust(4, 'b'), 'bbba')";
		$m.__track_lines__[200] = 'StringTest.py, line 200:\n    def testCenter(self):';
		$m.__track_lines__[201] = "StringTest.py, line 201:\n    self.assertEqual('a'.center(4, '1'), '1a11')";
		$m.__track_lines__[203] = 'StringTest.py, line 203:\n    def testZfill(self):';
		$m.__track_lines__[204] = "StringTest.py, line 204:\n    self.assertEqual('a'.zfill(4), '000a')";
		$m.__track_lines__[206] = 'StringTest.py, line 206:\n    def testSprintfList(self):';
		$m.__track_lines__[207] = 'StringTest.py, line 207:\n    self.assertEqual("%s" % \'foo\', "foo")';
		$m.__track_lines__[208] = 'StringTest.py, line 208:\n    self.assertEqual("%% %s" % \'\', "% ")';
		$m.__track_lines__[209] = 'StringTest.py, line 209:\n    self.assertEqual("[%% %s]" % \'\', "[% ]")';
		$m.__track_lines__[210] = 'StringTest.py, line 210:\n    self.assertEqual("[%c]" % 0x20, \'[ ]\')';
		$m.__track_lines__[211] = 'StringTest.py, line 211:\n    self.assertEqual("[%r]" % 11, "[11]")';
		$m.__track_lines__[212] = 'StringTest.py, line 212:\n    self.assertEqual("[%s]" % 11, "[11]")';
		$m.__track_lines__[213] = 'StringTest.py, line 213:\n    self.assertEqual("[%d]" % 11, "[11]")';
		$m.__track_lines__[214] = 'StringTest.py, line 214:\n    self.assertEqual("[%i]" % 11, "[11]")';
		$m.__track_lines__[215] = 'StringTest.py, line 215:\n    self.assertEqual("[%u]" % 11, "[11]")';
		$m.__track_lines__[216] = 'StringTest.py, line 216:\n    self.assertEqual("[%e]" % 11, "[1.100000e+01]")';
		$m.__track_lines__[217] = 'StringTest.py, line 217:\n    self.assertEqual("[%E]" % 11, "[1.100000E+01]")';
		$m.__track_lines__[218] = 'StringTest.py, line 218:\n    self.assertEqual("[%f]" % 11, "[11.000000]")';
		$m.__track_lines__[219] = 'StringTest.py, line 219:\n    self.assertEqual("[%.2f]" % 11, "[11.00]")';
		$m.__track_lines__[220] = 'StringTest.py, line 220:\n    self.assertEqual("[%F]" % 11, "[11.000000]")';
		$m.__track_lines__[221] = 'StringTest.py, line 221:\n    self.assertEqual("[%g]" % 11, "[11]")';
		$m.__track_lines__[222] = 'StringTest.py, line 222:\n    self.assertEqual("[%G]" % 11, "[11]")';
		$m.__track_lines__[223] = 'StringTest.py, line 223:\n    self.assertEqual("[%o]" % 11, "[13]")';
		$m.__track_lines__[224] = 'StringTest.py, line 224:\n    self.assertEqual("[%x]" % 11, "[b]")';
		$m.__track_lines__[225] = 'StringTest.py, line 225:\n    self.assertEqual("[%X]" % 11, "[B]")';
		$m.__track_lines__[226] = 'StringTest.py, line 226:\n    self.assertEqual("%*g,%10f" % (6, 1.234, 1.234), " 1.234,  1.234000")';
		$m.__track_lines__[227] = 'StringTest.py, line 227:\n    self.assertEqual("%0*g,%010f" % (6, 1.234, 1.234), "01.234,001.234000")';
		$m.__track_lines__[228] = 'StringTest.py, line 228:\n    self.assertEqual("[%04x]" % 1234, "[04d2]")';
		$m.__track_lines__[231] = 'StringTest.py, line 231:\n    self.assertEqual("[%3% %s]" % \'a\', "[  % a]")';
		$m.__track_lines__[233] = 'StringTest.py, line 233:\n    try:';
		$m.__track_lines__[234] = 'StringTest.py, line 234:\n    s = "%*g,%10f" % (1, 2)';
		$m.__track_lines__[235] = 'StringTest.py, line 235:\n    self.fail(\'Failed to raise error for "%*g,%10f" % (1, 2)\')';
		$m.__track_lines__[237] = 'StringTest.py, line 237:\n    self.assertEqual(str(e), "not enough arguments for format string")';
		$m.__track_lines__[238] = 'StringTest.py, line 238:\n    try:';
		$m.__track_lines__[239] = 'StringTest.py, line 239:\n    s = "%*g,%10f" % (1, 2, 3, 4)';
		$m.__track_lines__[240] = 'StringTest.py, line 240:\n    self.fail(\'Failed to raise error for "%*g,%10f" % (1, 2, 3, 4)\')';
		$m.__track_lines__[242] = 'StringTest.py, line 242:\n    self.assertEqual(str(e), "not all arguments converted during string formatting")';
		$m.__track_lines__[245] = 'StringTest.py, line 245:\n    self.assertEqual("\\n%s\\n%s\\n" % (\'s1\', \'s2\'), \'\\ns1\\ns2\\n\')';
		$m.__track_lines__[247] = 'StringTest.py, line 247:\n    def testSprintfDict(self):';
		$m.__track_lines__[248] = "StringTest.py, line 248:\n    testdict = {'s1': 'string',";
		$m.__track_lines__[254] = 'StringTest.py, line 254:\n    self.assertEqual("[%(v1)12s|%(v1)-12s]" % testdict, \'[           1|1           ]\')';
		$m.__track_lines__[255] = 'StringTest.py, line 255:\n    self.assertEqual("[%(v1)012o|%(v1)-012o]" % testdict, \'[000000000001|1           ]\')';
		$m.__track_lines__[256] = 'StringTest.py, line 256:\n    self.assertEqual("[%(v1)#012o|%(v1)#-012o]" % testdict, \'[000000000001|01          ]\')';
		$m.__track_lines__[257] = 'StringTest.py, line 257:\n    self.assertEqual("[%(v0)#012o|%(v0)#-012o]" % testdict, \'[000000000000|0           ]\')';
		$m.__track_lines__[258] = 'StringTest.py, line 258:\n    self.assertEqual("[%(v1)#012x|%(v1)#-012x]" % testdict, \'[0x0000000001|0x1         ]\')';
		$m.__track_lines__[259] = 'StringTest.py, line 259:\n    self.assertEqual("%(s1)3% %(s1)s" % testdict, \'  % string\')';
		$m.__track_lines__[262] = 'StringTest.py, line 262:\n    self.assertEqual("%(v1)#g" % testdict, \'1.00000\')';
		$m.__track_lines__[264] = 'StringTest.py, line 264:\n    try:';
		$m.__track_lines__[265] = 'StringTest.py, line 265:\n    s = "%(not-there)s" % testdict';
		$m.__track_lines__[266] = 'StringTest.py, line 266:\n    self.fail(\'Failed to raise error for "%(not-there)s" % testdict\')';
		$m.__track_lines__[268] = 'StringTest.py, line 268:\n    self.assertEqual(str(e), "\'not-there\'")';
		$m.__track_lines__[271] = 'StringTest.py, line 271:\n    self.assertEqual("\\n%(s1)s\\n%(s1)s\\n" % testdict, \'\\nstring\\nstring\\n\')';
		$m.__track_lines__[273] = 'StringTest.py, line 273:\n    def testSprintfVar(self):';
		$m.__track_lines__[274] = 'StringTest.py, line 274:\n    f = "%s"';
		$m.__track_lines__[275] = "StringTest.py, line 275:\n    self.assertEqual(f % 'test', 'test')";
		$m.__track_lines__[277] = 'StringTest.py, line 277:\n    def testIndex(self):';
		$m.__track_lines__[278] = 'StringTest.py, line 278:\n    s = "12345"';
		$m.__track_lines__[279] = "StringTest.py, line 279:\n    self.assertEqual(s[0], '1')";
		$m.__track_lines__[280] = "StringTest.py, line 280:\n    self.assertEqual(s[-1], '5')";
		$m.__track_lines__[281] = "StringTest.py, line 281:\n    self.assertEqual(s[1:-1], '234')";
		$m.__track_lines__[282] = 'StringTest.py, line 282:\n    try:';
		$m.__track_lines__[283] = 'StringTest.py, line 283:\n    a = s[200]';
		$m.__track_lines__[284] = 'StringTest.py, line 284:\n    self.fail("Failed to raise an IndexError")';
		$m.__track_lines__[286] = "StringTest.py, line 286:\n    self.assertEqual(e[0], 'string index out of range')";
		$m.__track_lines__[287] = 'StringTest.py, line 287:\n    try:';
		$m.__track_lines__[288] = 'StringTest.py, line 288:\n    a = s[-200]';
		$m.__track_lines__[289] = 'StringTest.py, line 289:\n    self.fail("Failed to raise an IndexError")';
		$m.__track_lines__[291] = "StringTest.py, line 291:\n    self.assertEqual(e[0], 'string index out of range')";
		$m.__track_lines__[293] = 'StringTest.py, line 293:\n    def testOperator(self):';
		$m.__track_lines__[294] = 'StringTest.py, line 294:\n    self.assertEqual("1".__add__("2"), "12")';
		$m.__track_lines__[295] = 'StringTest.py, line 295:\n    self.assertEqual("1".__mul__(2), "11")';
		$m.__track_lines__[296] = 'StringTest.py, line 296:\n    self.assertEqual("1".__rmul__(3), "111")';
		$m.__track_lines__[297] = 'StringTest.py, line 297:\n    self.assertEqual("2" * 3, "222")';
		$m.__track_lines__[298] = 'StringTest.py, line 298:\n    self.assertEqual(3 * "3", "333")';
		$m.__track_lines__[300] = 'StringTest.py, line 300:\n    def testIsAlnum(self):';
		$m.__track_lines__[301] = 'StringTest.py, line 301:\n    self.assertTrue("abc".isalnum())';
		$m.__track_lines__[302] = 'StringTest.py, line 302:\n    self.assertTrue("0bc".isalnum())';
		$m.__track_lines__[303] = 'StringTest.py, line 303:\n    self.assertFalse(".?abc".isalnum())';
		$m.__track_lines__[304] = 'StringTest.py, line 304:\n    self.assertFalse(" 0bc".isalnum())';
		$m.__track_lines__[306] = 'StringTest.py, line 306:\n    def testIsAlpha(self):';
		$m.__track_lines__[307] = 'StringTest.py, line 307:\n    self.assertTrue("abc".isalpha())';
		$m.__track_lines__[308] = 'StringTest.py, line 308:\n    self.assertFalse("0bc".isalpha())';
		$m.__track_lines__[310] = 'StringTest.py, line 310:\n    def testIsUpper(self):';
		$m.__track_lines__[311] = 'StringTest.py, line 311:\n    self.assertTrue("ABC".isupper(), "ABC")';
		$m.__track_lines__[312] = 'StringTest.py, line 312:\n    self.assertFalse("AbC".isupper(), "AbC")';
		$m.__track_lines__[313] = 'StringTest.py, line 313:\n    self.assertTrue("A0C".isupper(), "A0C")';
		$m.__track_lines__[314] = 'StringTest.py, line 314:\n    self.assertFalse("A0c".isupper(), "A0c")';
		$m.__track_lines__[315] = 'StringTest.py, line 315:\n    self.assertTrue("A C".isupper(), "A C")';
		$m.__track_lines__[316] = 'StringTest.py, line 316:\n    self.assertFalse("A c".isupper(), "A c")';
		$m.__track_lines__[318] = 'StringTest.py, line 318:\n    def testIsLower(self):';
		$m.__track_lines__[319] = 'StringTest.py, line 319:\n    self.assertTrue("abc".islower(), "abc")';
		$m.__track_lines__[320] = 'StringTest.py, line 320:\n    self.assertFalse("AbC".islower(), "AbC")';
		$m.__track_lines__[321] = 'StringTest.py, line 321:\n    self.assertTrue("a0c".islower(), "a0c")';
		$m.__track_lines__[322] = 'StringTest.py, line 322:\n    self.assertFalse("A0c".islower(), "A0c")';
		$m.__track_lines__[323] = 'StringTest.py, line 323:\n    self.assertTrue("a c".islower(), "a c")';
		$m.__track_lines__[324] = 'StringTest.py, line 324:\n    self.assertFalse("A c".islower(), "A c")';
		$m.__track_lines__[327] = 'StringTest.py, line 327:\n    class ClassWithOwnToString(object):';
		$m.__track_lines__[329] = 'StringTest.py, line 329:\n    def toString(self):';
		$m.__track_lines__[330] = "StringTest.py, line 330:\n    return 'ClassWithOwnToString as a String'";
		$m.__track_lines__[332] = 'StringTest.py, line 332:\n    class ClassWithOwnToString2(object):';
		$m.__track_lines__[334] = 'StringTest.py, line 334:\n    def __str__(self):';
		$m.__track_lines__[335] = "StringTest.py, line 335:\n    return 'ClassWithOwnToString2 as a String'";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_1234 = new $p['int'](1234);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_200 = new $p['int'](200);
		$pyjs.track.module='StringTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['write'] = $p['___import___']('write', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$m['StringTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'StringTest';
			$cls_definition.__md5__ = 'd528d4eebe3b3ead51889a60d71e8384';
			$pyjs.track.lineno=7;
			$method = $pyjs__bind_method2('testBasestring', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs.track={module:'StringTest', lineno:7};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=7;
				$pyjs.track.lineno=8;
				s = 'A string';
				$pyjs.track.lineno=9;
				self['assertTrue']($p['isinstance'](s, $p['str']), 'isinstance(s, str)');
				$pyjs.track.lineno=10;
				self['assertTrue']($p['isinstance'](s, $p['basestring']), 'isinstance(s, basestring)');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBasestring'] = $method;
			$pyjs.track.lineno=12;
			$method = $pyjs__bind_method2('testToString', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e,o;
				$pyjs.track={module:'StringTest', lineno:12};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=12;
				$pyjs.track.lineno=17;
				o = (typeof ClassWithOwnToString == "undefined"?$m.ClassWithOwnToString:ClassWithOwnToString)();
				$pyjs.track.lineno=18;
				self['assertEquals'](o['toString'](), 'ClassWithOwnToString as a String');
				$pyjs.track.lineno=19;
				o = (typeof ClassWithOwnToString2 == "undefined"?$m.ClassWithOwnToString2:ClassWithOwnToString2)();
				$pyjs.track.lineno=20;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=21;
					self['assertEquals'](o['toString'](), 'ClassWithOwnToString2 as a String');
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
					$pyjs.track.module='StringTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=25;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testToString'] = $method;
			$pyjs.track.lineno=27;
			$method = $pyjs__bind_method2('testReplace', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,result,expected_result1,expected_result2,expected_result3;
				$pyjs.track={module:'StringTest', lineno:27};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=28;
				text = 'this is a rather long string';
				$pyjs.track.lineno=29;
				expected_result1 = 'th--- --- a rather long string';
				$pyjs.track.lineno=30;
				expected_result2 = 'thi-- is a rather long string';
				$pyjs.track.lineno=31;
				expected_result3 = 'this_is_a_rather_long_string';
				$pyjs.track.lineno=33;
				result = text['$$replace']('is', '---');
				$pyjs.track.lineno=34;
				self['assertEquals'](result, expected_result1);
				$pyjs.track.lineno=36;
				result = text['$$replace']('s', '--', $constant_int_1);
				$pyjs.track.lineno=37;
				self['assertEquals'](result, expected_result2);
				$pyjs.track.lineno=39;
				result = text['$$replace'](' ', '_');
				$pyjs.track.lineno=40;
				self['assertEquals'](result, expected_result3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReplace'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('testRFind', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,result;
				$pyjs.track={module:'StringTest', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				text = 'this is a yes it is a rather long string';
				$pyjs.track.lineno=45;
				result = text['rfind']('not found');
				$pyjs.track.lineno=46;
				self['assertEquals'](result, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				$pyjs.track.lineno=48;
				result = text['rfind']('is');
				$pyjs.track.lineno=49;
				self['assertEquals'](result, $constant_int_17);
				$pyjs.track.lineno=51;
				result = text['rfind']('is', $constant_int_18);
				$pyjs.track.lineno=52;
				self['assertEquals'](result, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				$pyjs.track.lineno=54;
				result = text['rfind']('is', $constant_int_17);
				$pyjs.track.lineno=55;
				self['assertEquals'](result, $constant_int_17);
				$pyjs.track.lineno=57;
				result = text['rfind']('is', $constant_int_16);
				$pyjs.track.lineno=58;
				self['assertEquals'](result, $constant_int_17);
				$pyjs.track.lineno=60;
				result = text['rfind']('is', $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=61;
				self['assertEquals'](result, (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRFind'] = $method;
			$pyjs.track.lineno=63;
			$method = $pyjs__bind_method2('testFind', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,result;
				$pyjs.track={module:'StringTest', lineno:63};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=64;
				text = 'this is a rather long string';
				$pyjs.track.lineno=66;
				result = text['find']('not found');
				$pyjs.track.lineno=67;
				self['assertEquals'](result, (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				$pyjs.track.lineno=69;
				result = text['find']('is');
				$pyjs.track.lineno=70;
				self['assertEquals'](result, $constant_int_2);
				$pyjs.track.lineno=72;
				result = text['find']('is', $constant_int_3);
				$pyjs.track.lineno=73;
				self['assertEquals'](result, $constant_int_5);
				$pyjs.track.lineno=75;
				result = text['find']('is', $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=76;
				self['assertEquals'](result, (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFind'] = $method;
			$pyjs.track.lineno=78;
			$method = $pyjs__bind_method2('testJoin', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,sep1,sep2,data,expected_result1,expected_result2;
				$pyjs.track={module:'StringTest', lineno:78};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=79;
				data = 'this is a rather long string';
				$pyjs.track.lineno=80;
				data = data['$$split'](' ');
				$pyjs.track.lineno=81;
				sep1 = ', ';
				$pyjs.track.lineno=82;
				sep2 = '';
				$pyjs.track.lineno=83;
				expected_result1 = 'this, is, a, rather, long, string';
				$pyjs.track.lineno=84;
				expected_result2 = 'thisisaratherlongstring';
				$pyjs.track.lineno=86;
				result = sep1['join'](data);
				$pyjs.track.lineno=87;
				self['assertEquals'](result, expected_result1);
				$pyjs.track.lineno=89;
				result = sep2['join'](data);
				$pyjs.track.lineno=90;
				self['assertEquals'](result, expected_result2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testJoin'] = $method;
			$pyjs.track.lineno=92;
			$method = $pyjs__bind_method2('testSplit', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,$5,$10,$3,space,text,t,empty,$8,$9,$6,$7,$4,$1,$2,expected_result1,expected_result2,expected_result3;
				$pyjs.track={module:'StringTest', lineno:92};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=92;
				$pyjs.track.lineno=93;
				text = ' this is  a rather long string  ';
				$pyjs.track.lineno=94;
				space = ' ';
				$pyjs.track.lineno=95;
				empty = '';
				$pyjs.track.lineno=96;
				expected_result1 = ' this is  a rather long string  ';
				$pyjs.track.lineno=97;
				expected_result2 = 'thisis  a rather long string  ';
				$pyjs.track.lineno=98;
				expected_result3 = 'this is a rather long string';
				$pyjs.track.lineno=100;
				t = text['$$split'](space);
				$pyjs.track.lineno=101;
				self['assertEquals']((typeof ($1=t).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), '');
				$pyjs.track.lineno=102;
				self['assertEquals']((typeof ($3=t).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_1]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_1)), 'this');
				$pyjs.track.lineno=103;
				self['assertEquals']((typeof ($5=t).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_2]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_2)), 'is');
				$pyjs.track.lineno=104;
				self['assertEquals']((typeof ($7=t).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_3]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_3)), '');
				$pyjs.track.lineno=105;
				self['assertEquals']((typeof ($9=t).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_4]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_4)), 'a');
				$pyjs.track.lineno=107;
				result = space['join'](t);
				$pyjs.track.lineno=108;
				self['assertEquals'](result, expected_result1);
				$pyjs.track.lineno=110;
				result = empty['join'](text['$$split'](space, $constant_int_2));
				$pyjs.track.lineno=111;
				self['assertEquals'](result, expected_result2);
				$pyjs.track.lineno=113;
				result = space['join'](text['$$split']());
				$pyjs.track.lineno=114;
				self['assertEquals'](result, expected_result3);
				$pyjs.track.lineno=116;
				result = empty['$$split']();
				$pyjs.track.lineno=117;
				self['assertEquals'](result, $p['list']([]));
				$pyjs.track.lineno=119;
				result = empty['$$split'](null);
				$pyjs.track.lineno=120;
				self['assertEquals'](result, $p['list']([]));
				$pyjs.track.lineno=122;
				result = empty['$$split'](' ');
				$pyjs.track.lineno=123;
				self['assertEquals'](result, $p['list'](['']));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSplit'] = $method;
			$pyjs.track.lineno=125;
			$method = $pyjs__bind_method2('testStrip', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text,expected_result1,expected_result2,result;
				$pyjs.track={module:'StringTest', lineno:125};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=125;
				$pyjs.track.lineno=126;
				text = ' this is  a rather long string  ';
				$pyjs.track.lineno=127;
				expected_result1 = 'this is  a rather long string';
				$pyjs.track.lineno=128;
				expected_result2 = 'a rather long string';
				$pyjs.track.lineno=130;
				result = text['strip']();
				$pyjs.track.lineno=131;
				self['assertEquals'](result, expected_result1);
				$pyjs.track.lineno=133;
				result = text['strip'](' sthi');
				$pyjs.track.lineno=134;
				self['assertEquals'](result, expected_result2);
				$pyjs.track.lineno=136;
				result = text['strip']('');
				$pyjs.track.lineno=137;
				self['assertEquals'](result, text);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrip'] = $method;
			$pyjs.track.lineno=139;
			$method = $pyjs__bind_method2('testUnicode', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text;
				$pyjs.track={module:'StringTest', lineno:139};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=139;
				$pyjs.track.lineno=140;
				text = 'Liebe \'hallo\' "gr\xfcsse" Gr\xfcsse';
				$pyjs.track.lineno=141;
				self['assertEqual'](text, $p['__getslice'](text, 0, null));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testUnicode'] = $method;
			$pyjs.track.lineno=143;
			$method = $pyjs__bind_method2('testIsDigit', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:143};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=143;
				$pyjs.track.lineno=144;
				self['assertEqual']('123'['isdigit'](), true);
				$pyjs.track.lineno=146;
				self['assertEqual']('-123'['isdigit'](), false);
				$pyjs.track.lineno=148;
				self['assertEqual']('123.45'['isdigit'](), false);
				$pyjs.track.lineno=150;
				self['assertEqual']('1a'['isdigit'](), false);
				$pyjs.track.lineno=152;
				self['assertEqual']('   '['isdigit'](), false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsDigit'] = $method;
			$pyjs.track.lineno=154;
			$method = $pyjs__bind_method2('testStringIterate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,text,$iter1_iter,$add2,$add1,t,$pyjs__trackstack_size_1,x,$iter1_array;
				$pyjs.track={module:'StringTest', lineno:154};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=154;
				$pyjs.track.lineno=155;
				text = ' this is  a rather long string  ';
				$pyjs.track.lineno=156;
				t = '';
				$pyjs.track.lineno=157;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = text;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					x = $iter1_nextval;
					$pyjs.track.lineno=158;
					t = (typeof ($add1=t)==typeof ($add2=x) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=159;
				self['assertEqual'](text, t);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStringIterate'] = $method;
			$pyjs.track.lineno=161;
			$method = $pyjs__bind_method2('testStrTuple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:161};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=161;
				$pyjs.track.lineno=162;
				self['assertEqual']($p['str']($p['tuple']([$constant_int_5, $constant_int_6])), '(5, 6)');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrTuple'] = $method;
			$pyjs.track.lineno=164;
			$method = $pyjs__bind_method2('testStrList', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:164};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=164;
				$pyjs.track.lineno=165;
				self['assertEqual']($p['str']($p['list']([$constant_int_5, $constant_int_6])), '[5, 6]');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrList'] = $method;
			$pyjs.track.lineno=167;
			$method = $pyjs__bind_method2('testStrFloat', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1;
				$pyjs.track={module:'StringTest', lineno:167};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=167;
				$pyjs.track.lineno=168;
				f1 = 1.5;
				$pyjs.track.lineno=169;
				self['assertEqual']($p['str'](f1), '1.5');
				$pyjs.track.lineno=170;
				self['assertEqual'](f1['__str__'](), '1.5', 'float.__str__() returns type instead of value, bug #487');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrFloat'] = $method;
			$pyjs.track.lineno=172;
			$method = $pyjs__bind_method2('testStartsWith', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs.track={module:'StringTest', lineno:172};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=172;
				$pyjs.track.lineno=173;
				s = 'abcd';
				$pyjs.track.lineno=174;
				self['assertEqual'](s['startswith']('ab'), true);
				$pyjs.track.lineno=175;
				self['assertEqual'](s['startswith']('ab', $constant_int_0), true);
				$pyjs.track.lineno=176;
				self['assertEqual'](s['startswith']('ab', $constant_int_1), false);
				$pyjs.track.lineno=177;
				self['assertEqual'](s['startswith']('bc', $constant_int_1), true);
				$pyjs.track.lineno=178;
				self['assertEqual'](s['startswith']('ab', $constant_int_0, $constant_int_8), true);
				$pyjs.track.lineno=179;
				self['assertEqual'](s['startswith']('ab', $constant_int_0, $constant_int_3), true);
				$pyjs.track.lineno=180;
				self['assertEqual'](s['startswith']('ab', $constant_int_0, $constant_int_2), true);
				$pyjs.track.lineno=181;
				self['assertEqual'](s['startswith']('ab', $constant_int_0, $constant_int_1), false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStartsWith'] = $method;
			$pyjs.track.lineno=183;
			$method = $pyjs__bind_method2('testEndsWith', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs.track={module:'StringTest', lineno:183};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=183;
				$pyjs.track.lineno=184;
				s = 'abcd';
				$pyjs.track.lineno=185;
				self['assertEqual'](s['endswith']('cd'), true);
				$pyjs.track.lineno=186;
				self['assertEqual'](s['endswith']('cd', $constant_int_0), true);
				$pyjs.track.lineno=187;
				self['assertEqual'](s['endswith']('cd', $constant_int_2), true);
				$pyjs.track.lineno=188;
				self['assertEqual'](s['endswith']('cd', $constant_int_3), false);
				$pyjs.track.lineno=189;
				self['assertEqual'](s['endswith']('cd', $constant_int_0, $constant_int_3), false);
				$pyjs.track.lineno=190;
				self['assertEqual'](s['endswith']('bc', $constant_int_0, $constant_int_3), true);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testEndsWith'] = $method;
			$pyjs.track.lineno=192;
			$method = $pyjs__bind_method2('testLjust', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:192};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=192;
				$pyjs.track.lineno=193;
				self['assertEqual']('a'['ljust']($constant_int_0), 'a');
				$pyjs.track.lineno=194;
				self['assertEqual']('a'['ljust']($constant_int_4), 'a   ');
				$pyjs.track.lineno=195;
				self['assertEqual']('a'['ljust']($constant_int_4, 'b'), 'abbb');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLjust'] = $method;
			$pyjs.track.lineno=197;
			$method = $pyjs__bind_method2('testRjust', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:197};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=197;
				$pyjs.track.lineno=198;
				self['assertEqual']('a'['rjust']($constant_int_4, 'b'), 'bbba');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRjust'] = $method;
			$pyjs.track.lineno=200;
			$method = $pyjs__bind_method2('testCenter', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:200};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=200;
				$pyjs.track.lineno=201;
				self['assertEqual']('a'['center']($constant_int_4, '1'), '1a11');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCenter'] = $method;
			$pyjs.track.lineno=203;
			$method = $pyjs__bind_method2('testZfill', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:203};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=203;
				$pyjs.track.lineno=204;
				self['assertEqual']('a'['zfill']($constant_int_4), '000a');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testZfill'] = $method;
			$pyjs.track.lineno=206;
			$method = $pyjs__bind_method2('testSprintfList', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e,s;
				$pyjs.track={module:'StringTest', lineno:206};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=206;
				$pyjs.track.lineno=207;
				self['assertEqual']($p['sprintf']('%s', 'foo'), 'foo');
				$pyjs.track.lineno=208;
				self['assertEqual']($p['sprintf']('%% %s', ''), '% ');
				$pyjs.track.lineno=209;
				self['assertEqual']($p['sprintf']('[%% %s]', ''), '[% ]');
				$pyjs.track.lineno=210;
				self['assertEqual']($p['sprintf']('[%c]', $constant_int_32), '[ ]');
				$pyjs.track.lineno=211;
				self['assertEqual']($p['sprintf']('[%r]', $constant_int_11), '[11]');
				$pyjs.track.lineno=212;
				self['assertEqual']($p['sprintf']('[%s]', $constant_int_11), '[11]');
				$pyjs.track.lineno=213;
				self['assertEqual']($p['sprintf']('[%d]', $constant_int_11), '[11]');
				$pyjs.track.lineno=214;
				self['assertEqual']($p['sprintf']('[%i]', $constant_int_11), '[11]');
				$pyjs.track.lineno=215;
				self['assertEqual']($p['sprintf']('[%u]', $constant_int_11), '[11]');
				$pyjs.track.lineno=216;
				self['assertEqual']($p['sprintf']('[%e]', $constant_int_11), '[1.100000e+01]');
				$pyjs.track.lineno=217;
				self['assertEqual']($p['sprintf']('[%E]', $constant_int_11), '[1.100000E+01]');
				$pyjs.track.lineno=218;
				self['assertEqual']($p['sprintf']('[%f]', $constant_int_11), '[11.000000]');
				$pyjs.track.lineno=219;
				self['assertEqual']($p['sprintf']('[%.2f]', $constant_int_11), '[11.00]');
				$pyjs.track.lineno=220;
				self['assertEqual']($p['sprintf']('[%F]', $constant_int_11), '[11.000000]');
				$pyjs.track.lineno=221;
				self['assertEqual']($p['sprintf']('[%g]', $constant_int_11), '[11]');
				$pyjs.track.lineno=222;
				self['assertEqual']($p['sprintf']('[%G]', $constant_int_11), '[11]');
				$pyjs.track.lineno=223;
				self['assertEqual']($p['sprintf']('[%o]', $constant_int_11), '[13]');
				$pyjs.track.lineno=224;
				self['assertEqual']($p['sprintf']('[%x]', $constant_int_11), '[b]');
				$pyjs.track.lineno=225;
				self['assertEqual']($p['sprintf']('[%X]', $constant_int_11), '[B]');
				$pyjs.track.lineno=226;
				self['assertEqual']($p['sprintf']('%*g,%10f', $p['tuple']([$constant_int_6, 1.234, 1.234])), ' 1.234,  1.234000');
				$pyjs.track.lineno=227;
				self['assertEqual']($p['sprintf']('%0*g,%010f', $p['tuple']([$constant_int_6, 1.234, 1.234])), '01.234,001.234000');
				$pyjs.track.lineno=228;
				self['assertEqual']($p['sprintf']('[%04x]', $constant_int_1234), '[04d2]');
				$pyjs.track.lineno=231;
				self['assertEqual']($p['sprintf']('[%3% %s]', 'a'), '[  % a]');
				$pyjs.track.lineno=233;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=234;
					s = $p['sprintf']('%*g,%10f', $p['tuple']([$constant_int_1, $constant_int_2]));
					$pyjs.track.lineno=235;
					self['fail']('Failed to raise error for "%*g,%10f" % (1, 2)');
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
					$pyjs.track.module='StringTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=237;
						self['assertEqual']($p['str'](e), 'not enough arguments for format string');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=238;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=239;
					s = $p['sprintf']('%*g,%10f', $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]));
					$pyjs.track.lineno=240;
					self['fail']('Failed to raise error for "%*g,%10f" % (1, 2, 3, 4)');
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
					$pyjs.track.module='StringTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=242;
						self['assertEqual']($p['str'](e), 'not all arguments converted during string formatting');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=245;
				self['assertEqual']($p['sprintf']('\n%s\n%s\n', $p['tuple'](['s1', 's2'])), '\ns1\ns2\n');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSprintfList'] = $method;
			$pyjs.track.lineno=247;
			$method = $pyjs__bind_method2('testSprintfDict', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$pyjs_try_err,testdict,s;
				$pyjs.track={module:'StringTest', lineno:247};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=247;
				$pyjs.track.lineno=248;
				testdict = $p['dict']([['s1', 'string'], ['s2', 'another string'], ['v0', $constant_int_0], ['v1', $constant_int_1], ['v2', 1.234]]);
				$pyjs.track.lineno=254;
				self['assertEqual']($p['sprintf']('[%(v1)12s|%(v1)-12s]', testdict), '[           1|1           ]');
				$pyjs.track.lineno=255;
				self['assertEqual']($p['sprintf']('[%(v1)012o|%(v1)-012o]', testdict), '[000000000001|1           ]');
				$pyjs.track.lineno=256;
				self['assertEqual']($p['sprintf']('[%(v1)#012o|%(v1)#-012o]', testdict), '[000000000001|01          ]');
				$pyjs.track.lineno=257;
				self['assertEqual']($p['sprintf']('[%(v0)#012o|%(v0)#-012o]', testdict), '[000000000000|0           ]');
				$pyjs.track.lineno=258;
				self['assertEqual']($p['sprintf']('[%(v1)#012x|%(v1)#-012x]', testdict), '[0x0000000001|0x1         ]');
				$pyjs.track.lineno=259;
				self['assertEqual']($p['sprintf']('%(s1)3% %(s1)s', testdict), '  % string');
				$pyjs.track.lineno=262;
				self['assertEqual']($p['sprintf']('%(v1)#g', testdict), '1.00000');
				$pyjs.track.lineno=264;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=265;
					s = $p['sprintf']('%(not-there)s', testdict);
					$pyjs.track.lineno=266;
					self['fail']('Failed to raise error for "%(not-there)s" % testdict');
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
					$pyjs.track.module='StringTest';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=268;
						self['assertEqual']($p['str'](e), "'not-there'");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=271;
				self['assertEqual']($p['sprintf']('\n%(s1)s\n%(s1)s\n', testdict), '\nstring\nstring\n');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSprintfDict'] = $method;
			$pyjs.track.lineno=273;
			$method = $pyjs__bind_method2('testSprintfVar', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod2,$mod1,f;
				$pyjs.track={module:'StringTest', lineno:273};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=273;
				$pyjs.track.lineno=274;
				f = '%s';
				$pyjs.track.lineno=275;
				self['assertEqual']((typeof ($mod1=f)==typeof ($mod2='test') && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), 'test');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSprintfVar'] = $method;
			$pyjs.track.lineno=277;
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
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,$17,e,$11,$12,$13,$21,$20,$22,$18,$19,s,$pyjs_try_err,a;
				$pyjs.track={module:'StringTest', lineno:277};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=277;
				$pyjs.track.lineno=278;
				s = '12345';
				$pyjs.track.lineno=279;
				self['assertEqual']((typeof ($11=s).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_0)), '1');
				$pyjs.track.lineno=280;
				self['assertEqual']((typeof ($13=s).__array != 'undefined'?
					((typeof $13.__array[$14=(typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__((typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)))), '5');
				$pyjs.track.lineno=281;
				self['assertEqual']($p['__getslice'](s, $constant_int_1, (typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7))), '234');
				$pyjs.track.lineno=282;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=283;
					a = (typeof ($15=s).__array != 'undefined'?
						((typeof $15.__array[$16=$constant_int_200]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__($constant_int_200));
					$pyjs.track.lineno=284;
					self['fail']('Failed to raise an IndexError');
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
					$pyjs.track.module='StringTest';
					if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=286;
						self['assertEqual']((typeof ($17=e).__array != 'undefined'?
							((typeof $17.__array[$18=$constant_int_0]) != 'undefined'?$17.__array[$18]:
								$17.__getitem__($18)):
								$17.__getitem__($constant_int_0)), 'string index out of range');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=287;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=288;
					a = (typeof ($19=s).__array != 'undefined'?
						((typeof $19.__array[$20=(typeof ($usub8=$constant_int_200)=='number'?
						-$usub8:
						$p['op_usub']($usub8))]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__((typeof ($usub8=$constant_int_200)=='number'?
						-$usub8:
						$p['op_usub']($usub8))));
					$pyjs.track.lineno=289;
					self['fail']('Failed to raise an IndexError');
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
					$pyjs.track.module='StringTest';
					if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=291;
						self['assertEqual']((typeof ($21=e).__array != 'undefined'?
							((typeof $21.__array[$22=$constant_int_0]) != 'undefined'?$21.__array[$22]:
								$21.__getitem__($22)):
								$21.__getitem__($constant_int_0)), 'string index out of range');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIndex'] = $method;
			$pyjs.track.lineno=293;
			$method = $pyjs__bind_method2('testOperator', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul4,$mul3,$mul2,$mul1;
				$pyjs.track={module:'StringTest', lineno:293};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=293;
				$pyjs.track.lineno=294;
				self['assertEqual']('1'['__add__']('2'), '12');
				$pyjs.track.lineno=295;
				self['assertEqual']('1'['__mul__']($constant_int_2), '11');
				$pyjs.track.lineno=296;
				self['assertEqual']('1'['__rmul__']($constant_int_3), '111');
				$pyjs.track.lineno=297;
				self['assertEqual']((typeof ($mul1='2')==typeof ($mul2=$constant_int_3) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), '222');
				$pyjs.track.lineno=298;
				self['assertEqual']((typeof ($mul3=$constant_int_3)==typeof ($mul4='3') && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)), '333');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testOperator'] = $method;
			$pyjs.track.lineno=300;
			$method = $pyjs__bind_method2('testIsAlnum', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:300};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=300;
				$pyjs.track.lineno=301;
				self['assertTrue']('abc'['isalnum']());
				$pyjs.track.lineno=302;
				self['assertTrue']('0bc'['isalnum']());
				$pyjs.track.lineno=303;
				self['assertFalse']('.?abc'['isalnum']());
				$pyjs.track.lineno=304;
				self['assertFalse'](' 0bc'['isalnum']());
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsAlnum'] = $method;
			$pyjs.track.lineno=306;
			$method = $pyjs__bind_method2('testIsAlpha', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:306};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=306;
				$pyjs.track.lineno=307;
				self['assertTrue']('abc'['isalpha']());
				$pyjs.track.lineno=308;
				self['assertFalse']('0bc'['isalpha']());
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsAlpha'] = $method;
			$pyjs.track.lineno=310;
			$method = $pyjs__bind_method2('testIsUpper', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:310};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=310;
				$pyjs.track.lineno=311;
				self['assertTrue']('ABC'['isupper'](), 'ABC');
				$pyjs.track.lineno=312;
				self['assertFalse']('AbC'['isupper'](), 'AbC');
				$pyjs.track.lineno=313;
				self['assertTrue']('A0C'['isupper'](), 'A0C');
				$pyjs.track.lineno=314;
				self['assertFalse']('A0c'['isupper'](), 'A0c');
				$pyjs.track.lineno=315;
				self['assertTrue']('A C'['isupper'](), 'A C');
				$pyjs.track.lineno=316;
				self['assertFalse']('A c'['isupper'](), 'A c');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsUpper'] = $method;
			$pyjs.track.lineno=318;
			$method = $pyjs__bind_method2('testIsLower', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd528d4eebe3b3ead51889a60d71e8384') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:318};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=318;
				$pyjs.track.lineno=319;
				self['assertTrue']('abc'['islower'](), 'abc');
				$pyjs.track.lineno=320;
				self['assertFalse']('AbC'['islower'](), 'AbC');
				$pyjs.track.lineno=321;
				self['assertTrue']('a0c'['islower'](), 'a0c');
				$pyjs.track.lineno=322;
				self['assertFalse']('A0c'['islower'](), 'A0c');
				$pyjs.track.lineno=323;
				self['assertTrue']('a c'['islower'](), 'a c');
				$pyjs.track.lineno=324;
				self['assertFalse']('A c'['islower'](), 'A c');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsLower'] = $method;
			$pyjs.track.lineno=5;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StringTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=327;
		$m['ClassWithOwnToString'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'StringTest';
			$cls_definition.__md5__ = 'ce3d440c8bf8b602cf1a53b8d593da07';
			$pyjs.track.lineno=329;
			$method = $pyjs__bind_method2('toString', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ce3d440c8bf8b602cf1a53b8d593da07') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:329};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=329;
				$pyjs.track.lineno=330;
				$pyjs.track.lineno=330;
				var $pyjs__ret = 'ClassWithOwnToString as a String';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['toString'] = $method;
			$pyjs.track.lineno=327;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassWithOwnToString', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=332;
		$m['ClassWithOwnToString2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'StringTest';
			$cls_definition.__md5__ = '326fc1a4e7b51748a20578c6be050d86';
			$pyjs.track.lineno=334;
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
					if (self.prototype.__md5__ !== '326fc1a4e7b51748a20578c6be050d86') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringTest', lineno:334};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringTest';
				$pyjs.track.lineno=334;
				$pyjs.track.lineno=335;
				$pyjs.track.lineno=335;
				var $pyjs__ret = 'ClassWithOwnToString2 as a String';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs.track.lineno=332;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassWithOwnToString2', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end StringTest */


/* end module: StringTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'write']
*/
