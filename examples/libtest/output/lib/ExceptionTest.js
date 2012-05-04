/* start module: ExceptionTest */
$pyjs.loaded_modules['ExceptionTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ExceptionTest'].__was_initialized__) return $pyjs.loaded_modules['ExceptionTest'];
	var $m = $pyjs.loaded_modules["ExceptionTest"];
	$m.__repr__ = function() { return "<module: ExceptionTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ExceptionTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'ExceptionTest.py, line 1:\n    from UnitTest import UnitTest, PY27_BEHAVIOUR';
		$m.__track_lines__[2] = 'ExceptionTest.py, line 2:\n    import sys';
		$m.__track_lines__[5] = 'ExceptionTest.py, line 5:\n    class MyException:';
		$m.__track_lines__[7] = 'ExceptionTest.py, line 7:\n    def __str__(self):';
		$m.__track_lines__[8] = 'ExceptionTest.py, line 8:\n    return "MyException"';
		$m.__track_lines__[11] = 'ExceptionTest.py, line 11:\n    class MyException2:';
		$m.__track_lines__[13] = 'ExceptionTest.py, line 13:\n    def __str__(self):';
		$m.__track_lines__[14] = 'ExceptionTest.py, line 14:\n    return "MyException2"';
		$m.__track_lines__[17] = 'ExceptionTest.py, line 17:\n    class ExceptionTest(UnitTest):';
		$m.__track_lines__[19] = 'ExceptionTest.py, line 19:\n    def testTypeError(self):';
		$m.__track_lines__[20] = 'ExceptionTest.py, line 20:\n    try:';
		$m.__track_lines__[21] = 'ExceptionTest.py, line 21:\n    raise TypeError("fred")';
		$m.__track_lines__[23] = 'ExceptionTest.py, line 23:\n    self.assertTrue(True, "the exception should have happened")';
		$m.__track_lines__[24] = 'ExceptionTest.py, line 24:\n    return';
		$m.__track_lines__[25] = 'ExceptionTest.py, line 25:\n    self.assertTrue(False, "the exception should have happened")';
		$m.__track_lines__[27] = 'ExceptionTest.py, line 27:\n    def testExceptionOrdTrigger(self):';
		$m.__track_lines__[28] = 'ExceptionTest.py, line 28:\n    try:';
		$m.__track_lines__[29] = "ExceptionTest.py, line 29:\n    x = ord(5) # shouldn't be a number";
		$m.__track_lines__[31] = 'ExceptionTest.py, line 31:\n    self.assertTrue(True, "the exception should have happened")';
		$m.__track_lines__[32] = 'ExceptionTest.py, line 32:\n    return';
		$m.__track_lines__[33] = 'ExceptionTest.py, line 33:\n    self.assertTrue(False, "mustn\'t be able to do ord() on a number")';
		$m.__track_lines__[35] = 'ExceptionTest.py, line 35:\n    def testExceptionOrdNoTrigger(self):';
		$m.__track_lines__[36] = 'ExceptionTest.py, line 36:\n    try:';
		$m.__track_lines__[37] = 'ExceptionTest.py, line 37:\n    x = ord("5")';
		$m.__track_lines__[39] = 'ExceptionTest.py, line 39:\n    self.assertTrue(False, "the exception shouldn\'t have happened")';
		$m.__track_lines__[40] = 'ExceptionTest.py, line 40:\n    return';
		$m.__track_lines__[41] = 'ExceptionTest.py, line 41:\n    self.assertTrue(True, "the exception should have happened")';
		$m.__track_lines__[43] = 'ExceptionTest.py, line 43:\n    def testRaiseException(self):';
		$m.__track_lines__[44] = 'ExceptionTest.py, line 44:\n    try:';
		$m.__track_lines__[45] = 'ExceptionTest.py, line 45:\n    raise MyException()';
		$m.__track_lines__[47] = 'ExceptionTest.py, line 47:\n    return';
		$m.__track_lines__[48] = "ExceptionTest.py, line 48:\n    self.fail('MyException was not raised')";
		$m.__track_lines__[50] = 'ExceptionTest.py, line 50:\n    def testCatchClassException(self):';
		$m.__track_lines__[51] = 'ExceptionTest.py, line 51:\n    try:';
		$m.__track_lines__[52] = 'ExceptionTest.py, line 52:\n    raise MyException()';
		$m.__track_lines__[54] = "ExceptionTest.py, line 54:\n    self.assertEqual(e.__str__(), 'MyException',";
		$m.__track_lines__[56] = 'ExceptionTest.py, line 56:\n    return';
		$m.__track_lines__[57] = "ExceptionTest.py, line 57:\n    self.fail('MyException was not caught or raised')";
		$m.__track_lines__[59] = 'ExceptionTest.py, line 59:\n    def testCatchMultiClassException(self):';
		$m.__track_lines__[60] = 'ExceptionTest.py, line 60:\n    try:';
		$m.__track_lines__[61] = 'ExceptionTest.py, line 61:\n    raise MyException()';
		$m.__track_lines__[63] = "ExceptionTest.py, line 63:\n    self.assertEqual(e.__str__(), 'MyException',";
		$m.__track_lines__[65] = 'ExceptionTest.py, line 65:\n    return';
		$m.__track_lines__[66] = "ExceptionTest.py, line 66:\n    self.fail('MyException was not caught or raised')";
		$m.__track_lines__[68] = 'ExceptionTest.py, line 68:\n    def testCatchStringException(self):';
		$m.__track_lines__[71] = 'ExceptionTest.py, line 71:\n    if sys.version_info >= (2, 6):';
		$m.__track_lines__[72] = 'ExceptionTest.py, line 72:\n    return';
		$m.__track_lines__[74] = 'ExceptionTest.py, line 74:\n    try:';
		$m.__track_lines__[75] = 'ExceptionTest.py, line 75:\n    raise "test"';
		$m.__track_lines__[77] = 'ExceptionTest.py, line 77:\n    return';
		$m.__track_lines__[79] = 'ExceptionTest.py, line 79:\n    self.fail(e)';
		$m.__track_lines__[80] = 'ExceptionTest.py, line 80:\n    self.fail(\'"test" was not caught or raised\')';
		$m.__track_lines__[82] = 'ExceptionTest.py, line 82:\n    def testBuiltInException(self):';
		$m.__track_lines__[83] = 'ExceptionTest.py, line 83:\n    try:';
		$m.__track_lines__[84] = "ExceptionTest.py, line 84:\n    raise LookupError('hoschi')";
		$m.__track_lines__[86] = "ExceptionTest.py, line 86:\n    self.assertEqual(err.__class__.__name__, 'LookupError')";
		$m.__track_lines__[87] = 'ExceptionTest.py, line 87:\n    return';
		$m.__track_lines__[88] = 'ExceptionTest.py, line 88:\n    self.fail("LookupError should be caught")';
		$m.__track_lines__[90] = 'ExceptionTest.py, line 90:\n    def testZeroDivisionError(self):';
		$m.__track_lines__[91] = 'ExceptionTest.py, line 91:\n    try:';
		$m.__track_lines__[92] = 'ExceptionTest.py, line 92:\n    v = 1/0';
		$m.__track_lines__[94] = "ExceptionTest.py, line 94:\n    self.assertEqual(err.__class__.__name__, 'ZeroDivisionError')";
		$m.__track_lines__[95] = 'ExceptionTest.py, line 95:\n    return';
		$m.__track_lines__[96] = 'ExceptionTest.py, line 96:\n    self.fail("ZeroDivisionError should be caught bug #265")';
		$m.__track_lines__[98] = 'ExceptionTest.py, line 98:\n    def testStrReprSingleArg(self):';
		$m.__track_lines__[99] = "ExceptionTest.py, line 99:\n    args = ('test',)";
		$m.__track_lines__[101] = 'ExceptionTest.py, line 101:\n    e = BaseException(*args)';
		$m.__track_lines__[102] = 'ExceptionTest.py, line 102:\n    self.assertEqual(e.args[0], args[0])';
		$m.__track_lines__[103] = 'ExceptionTest.py, line 103:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[104] = 'ExceptionTest.py, line 104:\n    self.assertEqual(repr(e), "BaseException(\'test\',)")';
		$m.__track_lines__[106] = 'ExceptionTest.py, line 106:\n    e = Exception(*args)';
		$m.__track_lines__[107] = 'ExceptionTest.py, line 107:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[108] = 'ExceptionTest.py, line 108:\n    self.assertEqual(repr(e), "Exception(\'test\',)")';
		$m.__track_lines__[110] = 'ExceptionTest.py, line 110:\n    e = TypeError(*args)';
		$m.__track_lines__[111] = 'ExceptionTest.py, line 111:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[112] = 'ExceptionTest.py, line 112:\n    self.assertEqual(repr(e), "TypeError(\'test\',)")';
		$m.__track_lines__[114] = 'ExceptionTest.py, line 114:\n    e = StandardError(*args)';
		$m.__track_lines__[115] = 'ExceptionTest.py, line 115:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[116] = 'ExceptionTest.py, line 116:\n    self.assertEqual(repr(e), "StandardError(\'test\',)")';
		$m.__track_lines__[118] = 'ExceptionTest.py, line 118:\n    e = LookupError(*args)';
		$m.__track_lines__[119] = 'ExceptionTest.py, line 119:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[120] = 'ExceptionTest.py, line 120:\n    self.assertEqual(repr(e), "LookupError(\'test\',)")';
		$m.__track_lines__[122] = 'ExceptionTest.py, line 122:\n    e = KeyError(*args)';
		$m.__track_lines__[123] = 'ExceptionTest.py, line 123:\n    self.assertEqual(str(e), "\'%s\'" % args[0])';
		$m.__track_lines__[124] = 'ExceptionTest.py, line 124:\n    self.assertEqual(repr(e), "KeyError(\'test\',)")';
		$m.__track_lines__[126] = 'ExceptionTest.py, line 126:\n    e = AttributeError(*args)';
		$m.__track_lines__[127] = 'ExceptionTest.py, line 127:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[128] = 'ExceptionTest.py, line 128:\n    self.assertEqual(repr(e), "AttributeError(\'test\',)")';
		$m.__track_lines__[130] = 'ExceptionTest.py, line 130:\n    e = NameError(*args)';
		$m.__track_lines__[131] = 'ExceptionTest.py, line 131:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[132] = 'ExceptionTest.py, line 132:\n    self.assertEqual(repr(e), "NameError(\'test\',)")';
		$m.__track_lines__[134] = 'ExceptionTest.py, line 134:\n    e = ValueError(*args)';
		$m.__track_lines__[135] = 'ExceptionTest.py, line 135:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[136] = 'ExceptionTest.py, line 136:\n    self.assertEqual(repr(e), "ValueError(\'test\',)")';
		$m.__track_lines__[138] = 'ExceptionTest.py, line 138:\n    e = IndexError(*args)';
		$m.__track_lines__[139] = 'ExceptionTest.py, line 139:\n    self.assertEqual(str(e), args[0])';
		$m.__track_lines__[140] = 'ExceptionTest.py, line 140:\n    self.assertEqual(repr(e), "IndexError(\'test\',)")';
		$m.__track_lines__[142] = 'ExceptionTest.py, line 142:\n    def test_exc_info_traceback(self):';
		$m.__track_lines__[143] = 'ExceptionTest.py, line 143:\n    def func():';
		$m.__track_lines__[144] = "ExceptionTest.py, line 144:\n    raise ValueError('Baaa!')";
		$m.__track_lines__[146] = 'ExceptionTest.py, line 146:\n    try:';
		$m.__track_lines__[147] = 'ExceptionTest.py, line 147:\n    func()';
		$m.__track_lines__[149] = 'ExceptionTest.py, line 149:\n    tb = sys.exc_info()[2]';
		$m.__track_lines__[150] = 'ExceptionTest.py, line 150:\n    count = 1';
		$m.__track_lines__[151] = 'ExceptionTest.py, line 151:\n    while tb.tb_next:';
		$m.__track_lines__[152] = 'ExceptionTest.py, line 152:\n    tb = tb.tb_next';
		$m.__track_lines__[153] = 'ExceptionTest.py, line 153:\n    count += 1';
		$m.__track_lines__[154] = "ExceptionTest.py, line 154:\n    self.assertEqual(count, 2, 'sys.exc_info() traceback must be relative to caller')";
		$m.__track_lines__[156] = "ExceptionTest.py, line 156:\n    self.fail('Exception expected')";
		$m.__track_lines__[158] = 'ExceptionTest.py, line 158:\n    def testSyntax(self):';
		$m.__track_lines__[159] = 'ExceptionTest.py, line 159:\n    try:';
		$m.__track_lines__[160] = 'ExceptionTest.py, line 160:\n    pass';
		$m.__track_lines__[162] = 'ExceptionTest.py, line 162:\n    pass';
		$m.__track_lines__[164] = 'ExceptionTest.py, line 164:\n    pass';
		$m.__track_lines__[166] = 'ExceptionTest.py, line 166:\n    pass';
		$m.__track_lines__[168] = 'ExceptionTest.py, line 168:\n    pass';
		$m.__track_lines__[170] = 'ExceptionTest.py, line 170:\n    try:';
		$m.__track_lines__[171] = 'ExceptionTest.py, line 171:\n    a = 1';
		$m.__track_lines__[173] = 'ExceptionTest.py, line 173:\n    a = 2';
		$m.__track_lines__[175] = 'ExceptionTest.py, line 175:\n    a = 3';
		$m.__track_lines__[177] = 'ExceptionTest.py, line 177:\n    self.assertEqual(a, 3)';
		$m.__track_lines__[178] = 'ExceptionTest.py, line 178:\n    a = 4';
		$m.__track_lines__[179] = 'ExceptionTest.py, line 179:\n    self.assertEqual(a, 4)';
		$m.__track_lines__[181] = 'ExceptionTest.py, line 181:\n    try:';
		$m.__track_lines__[182] = 'ExceptionTest.py, line 182:\n    a = 11';
		$m.__track_lines__[183] = "ExceptionTest.py, line 183:\n    raise KeyError('test')";
		$m.__track_lines__[185] = 'ExceptionTest.py, line 185:\n    a = 12';
		$m.__track_lines__[187] = 'ExceptionTest.py, line 187:\n    a = 13';
		$m.__track_lines__[189] = 'ExceptionTest.py, line 189:\n    self.assertEqual(a, 12)';
		$m.__track_lines__[190] = 'ExceptionTest.py, line 190:\n    a = 14';
		$m.__track_lines__[191] = 'ExceptionTest.py, line 191:\n    self.assertEqual(a, 14)';
		$m.__track_lines__[193] = 'ExceptionTest.py, line 193:\n    try:';
		$m.__track_lines__[194] = 'ExceptionTest.py, line 194:\n    a = 1';
		$m.__track_lines__[196] = 'ExceptionTest.py, line 196:\n    a = 2';
		$m.__track_lines__[197] = 'ExceptionTest.py, line 197:\n    self.assertEqual(a, 2)';
		$m.__track_lines__[198] = 'ExceptionTest.py, line 198:\n    try:';
		$m.__track_lines__[199] = 'ExceptionTest.py, line 199:\n    a = 1';
		$m.__track_lines__[200] = 'ExceptionTest.py, line 200:\n    try:';
		$m.__track_lines__[201] = 'ExceptionTest.py, line 201:\n    b = 1';
		$m.__track_lines__[203] = 'ExceptionTest.py, line 203:\n    b = 2';
		$m.__track_lines__[205] = 'ExceptionTest.py, line 205:\n    b = 3';
		$m.__track_lines__[207] = 'ExceptionTest.py, line 207:\n    self.assertEqual(b, 3)';
		$m.__track_lines__[208] = 'ExceptionTest.py, line 208:\n    b = 4';
		$m.__track_lines__[210] = 'ExceptionTest.py, line 210:\n    a = 2';
		$m.__track_lines__[212] = 'ExceptionTest.py, line 212:\n    a = 3';
		$m.__track_lines__[214] = 'ExceptionTest.py, line 214:\n    self.assertEqual(a, 3)';
		$m.__track_lines__[215] = 'ExceptionTest.py, line 215:\n    a = 4';
		$m.__track_lines__[216] = 'ExceptionTest.py, line 216:\n    self.assertEqual(a, 4)';
		$m.__track_lines__[217] = 'ExceptionTest.py, line 217:\n    self.assertEqual(b, 4)';
		$m.__track_lines__[219] = 'ExceptionTest.py, line 219:\n    sys.exc_clear()';
		$m.__track_lines__[220] = 'ExceptionTest.py, line 220:\n    try:';
		$m.__track_lines__[221] = 'ExceptionTest.py, line 221:\n    raise';
		$m.__track_lines__[222] = 'ExceptionTest.py, line 222:\n    self.fail("No error raised on \'raise\' after \'sys.exc_clear()\'")';
		$m.__track_lines__[225] = "ExceptionTest.py, line 225:\n    self.assertTrue(e.args[0].startswith('exceptions must be'), e.args[0])";
		$m.__track_lines__[227] = 'ExceptionTest.py, line 227:\n    e = sys.exc_info()';
		$m.__track_lines__[228] = "ExceptionTest.py, line 228:\n    self.fail('TypeError expected, got %s' % e[0])";
		$m.__track_lines__[230] = 'ExceptionTest.py, line 230:\n    try:';
		$m.__track_lines__[231] = "ExceptionTest.py, line 231:\n    raise KeyError, 'test'";
		$m.__track_lines__[232] = "ExceptionTest.py, line 232:\n    self.fail('No error raised')";
		$m.__track_lines__[234] = "ExceptionTest.py, line 234:\n    self.assertEqual(e.args[0], 'test')";
		$m.__track_lines__[236] = 'ExceptionTest.py, line 236:\n    e = sys.exc_info()';
		$m.__track_lines__[237] = "ExceptionTest.py, line 237:\n    self.fail('KeyError expected, got %s' % e[0])";
		$m.__track_lines__[238] = 'ExceptionTest.py, line 238:\n    e = e[1]';
		$m.__track_lines__[240] = 'ExceptionTest.py, line 240:\n    try:';
		$m.__track_lines__[241] = 'ExceptionTest.py, line 241:\n    raise';
		$m.__track_lines__[243] = 'ExceptionTest.py, line 243:\n    err = sys.exc_info()';
		$m.__track_lines__[244] = 'ExceptionTest.py, line 244:\n    self.assertEqual(e.args[0], err[1].args[0])';
		$m.__track_lines__[246] = "ExceptionTest.py, line 246:\n    raise_errors = [KeyError('KeyError'), TypeError('TypeError'),";
		$m.__track_lines__[249] = 'ExceptionTest.py, line 249:\n    raised_errors = []';
		$m.__track_lines__[250] = 'ExceptionTest.py, line 250:\n    for err in raise_errors:';
		$m.__track_lines__[251] = 'ExceptionTest.py, line 251:\n    try:';
		$m.__track_lines__[252] = 'ExceptionTest.py, line 252:\n    raise err';
		$m.__track_lines__[253] = 'ExceptionTest.py, line 253:\n    self.fail("Failed to raise exception")';
		$m.__track_lines__[255] = 'ExceptionTest.py, line 255:\n    raised_errors.append(e1)';
		$m.__track_lines__[256] = 'ExceptionTest.py, line 256:\n    if isinstance(e1, KeyError):';
		$m.__track_lines__[257] = "ExceptionTest.py, line 257:\n    self.assertEqual(e1.args[0], 'KeyError')";
		$m.__track_lines__[259] = "ExceptionTest.py, line 259:\n    self.assertEqual(e1.args[0], 'TypeError')";
		$m.__track_lines__[261] = "ExceptionTest.py, line 261:\n    self.fail('neither KeyError nor TypeError in except (KeyError, TypeError)')";
		$m.__track_lines__[263] = 'ExceptionTest.py, line 263:\n    raised_errors.append(e2)';
		$m.__track_lines__[264] = "ExceptionTest.py, line 264:\n    self.assertEqual(e2.args[0], 'AttributeError')";
		$m.__track_lines__[266] = 'ExceptionTest.py, line 266:\n    e3 = sys.exc_info()[1]';
		$m.__track_lines__[267] = 'ExceptionTest.py, line 267:\n    raised_errors.append(e3)';
		$m.__track_lines__[268] = "ExceptionTest.py, line 268:\n    self.assertEqual(e3.args[0], 'LookupError')";
		$m.__track_lines__[269] = 'ExceptionTest.py, line 269:\n    self.assertEqual(len(raised_errors), len(raise_errors))';
		$m.__track_lines__[271] = 'ExceptionTest.py, line 271:\n    try:';
		$m.__track_lines__[272] = 'ExceptionTest.py, line 272:\n    try:';
		$m.__track_lines__[273] = "ExceptionTest.py, line 273:\n    raise TypeError('TypeError')";
		$m.__track_lines__[275] = 'ExceptionTest.py, line 275:\n    self.fail("Got KeyError")';
		$m.__track_lines__[276] = 'ExceptionTest.py, line 276:\n    self.fail("TypeError should not be ignored")';
		$m.__track_lines__[278] = "ExceptionTest.py, line 278:\n    self.assertEqual(e.args[0], 'TypeError')";
		$m.__track_lines__[280] = 'ExceptionTest.py, line 280:\n    def testCatchSuperException(self):';
		$m.__track_lines__[281] = 'ExceptionTest.py, line 281:\n    try:';
		$m.__track_lines__[282] = "ExceptionTest.py, line 282:\n    raise TypeError('test')";
		$m.__track_lines__[284] = 'ExceptionTest.py, line 284:\n    self.assertTrue(True)';
		$m.__track_lines__[286] = 'ExceptionTest.py, line 286:\n    self.fail("Failed to catch exception: bug #254")';
		$m.__track_lines__[288] = 'ExceptionTest.py, line 288:\n    def testAssertionError(self):';
		$m.__track_lines__[289] = 'ExceptionTest.py, line 289:\n    try:';
		$m.__track_lines__[290] = 'ExceptionTest.py, line 290:\n    assert True';
		$m.__track_lines__[291] = 'ExceptionTest.py, line 291:\n    self.assertTrue(True)';
		$m.__track_lines__[293] = 'ExceptionTest.py, line 293:\n    self.fail("Got an unexpected assertion error: %r" % e)';
		$m.__track_lines__[294] = 'ExceptionTest.py, line 294:\n    try:';
		$m.__track_lines__[295] = 'ExceptionTest.py, line 295:\n    assert False';
		$m.__track_lines__[296] = 'ExceptionTest.py, line 296:\n    self.fail("AssertionError expected")';
		$m.__track_lines__[298] = 'ExceptionTest.py, line 298:\n    self.assertTrue(True)';
		$m.__track_lines__[299] = 'ExceptionTest.py, line 299:\n    try:';
		$m.__track_lines__[300] = "ExceptionTest.py, line 300:\n    assert False, 'reason'";
		$m.__track_lines__[301] = 'ExceptionTest.py, line 301:\n    self.fail("AssertionError expected")';
		$m.__track_lines__[303] = "ExceptionTest.py, line 303:\n    self.assertEqual(e.args[0], 'reason')";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='ExceptionTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['PY27_BEHAVIOUR'] = $p['___import___']('UnitTest.PY27_BEHAVIOUR', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$m['MyException'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ExceptionTest';
			$cls_definition.__md5__ = 'b1d94d61cdd601bc8619a3a62589934c';
			$pyjs.track.lineno=7;
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
					if (self.prototype.__md5__ !== 'b1d94d61cdd601bc8619a3a62589934c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ExceptionTest', lineno:7};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=7;
				$pyjs.track.lineno=8;
				$pyjs.track.lineno=8;
				var $pyjs__ret = 'MyException';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs.track.lineno=5;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MyException', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=11;
		$m['MyException2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ExceptionTest';
			$cls_definition.__md5__ = '7c758a2e92da4765bcf4c08af33aad42';
			$pyjs.track.lineno=13;
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
					if (self.prototype.__md5__ !== '7c758a2e92da4765bcf4c08af33aad42') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ExceptionTest', lineno:13};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=13;
				$pyjs.track.lineno=14;
				$pyjs.track.lineno=14;
				var $pyjs__ret = 'MyException2';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs.track.lineno=11;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MyException2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=17;
		$m['ExceptionTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ExceptionTest';
			$cls_definition.__md5__ = 'cd3c3909fe4c017e583d5c443d8d9087';
			$pyjs.track.lineno=19;
			$method = $pyjs__bind_method2('testTypeError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'ExceptionTest', lineno:19};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=19;
				$pyjs.track.lineno=20;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=21;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('fred'));
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
					$pyjs.track.module='ExceptionTest';
					if (true) {
						$pyjs.track.lineno=23;
						self['assertTrue'](true, 'the exception should have happened');
						$pyjs.track.lineno=24;
						$pyjs.track.lineno=24;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				$pyjs.track.lineno=25;
				self['assertTrue'](false, 'the exception should have happened');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTypeError'] = $method;
			$pyjs.track.lineno=27;
			$method = $pyjs__bind_method2('testExceptionOrdTrigger', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x,$pyjs_try_err;
				$pyjs.track={module:'ExceptionTest', lineno:27};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=28;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=29;
					x = $p['ord']($constant_int_5);
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
					$pyjs.track.module='ExceptionTest';
					if (true) {
						$pyjs.track.lineno=31;
						self['assertTrue'](true, 'the exception should have happened');
						$pyjs.track.lineno=32;
						$pyjs.track.lineno=32;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				$pyjs.track.lineno=33;
				self['assertTrue'](false, "mustn't be able to do ord() on a number");
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExceptionOrdTrigger'] = $method;
			$pyjs.track.lineno=35;
			$method = $pyjs__bind_method2('testExceptionOrdNoTrigger', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x,$pyjs_try_err;
				$pyjs.track={module:'ExceptionTest', lineno:35};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=36;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=37;
					x = $p['ord']('5');
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
					$pyjs.track.module='ExceptionTest';
					if (true) {
						$pyjs.track.lineno=39;
						self['assertTrue'](false, "the exception shouldn't have happened");
						$pyjs.track.lineno=40;
						$pyjs.track.lineno=40;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				$pyjs.track.lineno=41;
				self['assertTrue'](true, 'the exception should have happened');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExceptionOrdNoTrigger'] = $method;
			$pyjs.track.lineno=43;
			$method = $pyjs__bind_method2('testRaiseException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'ExceptionTest', lineno:43};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=44;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=45;
					$pyjs.__active_exception_stack__ = null;
					throw ($m['MyException']());
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
					$pyjs.track.module='ExceptionTest';
					if (true) {
						$pyjs.track.lineno=47;
						$pyjs.track.lineno=47;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				$pyjs.track.lineno=48;
				self['fail']('MyException was not raised');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRaiseException'] = $method;
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('testCatchClassException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e;
				$pyjs.track={module:'ExceptionTest', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=52;
					$pyjs.__active_exception_stack__ = null;
					throw ($m['MyException']());
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $m['MyException'].__name__)||$p['_isinstance']($pyjs_try_err,$m['MyException'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=54;
						self['assertEqual'](e['__str__'](), 'MyException', 'Caught exception does not match');
						$pyjs.track.lineno=56;
						$pyjs.track.lineno=56;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=57;
				self['fail']('MyException was not caught or raised');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCatchClassException'] = $method;
			$pyjs.track.lineno=59;
			$method = $pyjs__bind_method2('testCatchMultiClassException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e;
				$pyjs.track={module:'ExceptionTest', lineno:59};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=60;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=61;
					$pyjs.__active_exception_stack__ = null;
					throw ($m['MyException']());
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
					$pyjs.track.module='ExceptionTest';
					if ((($pyjs_try_err_name == $m['MyException'].__name__)||$p['_isinstance']($pyjs_try_err,$m['MyException']))||(($pyjs_try_err_name == $m['MyException2'].__name__)||$p['_isinstance']($pyjs_try_err,$m['MyException2']))) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=63;
						self['assertEqual'](e['__str__'](), 'MyException', 'Caught exception does not match');
						$pyjs.track.lineno=65;
						$pyjs.track.lineno=65;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=66;
				self['fail']('MyException was not caught or raised');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCatchMultiClassException'] = $method;
			$pyjs.track.lineno=68;
			$method = $pyjs__bind_method2('testCatchStringException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$cmp2,$pyjs_try_err,$bool1,$cmp1;
				$pyjs.track={module:'ExceptionTest', lineno:68};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=68;
				$pyjs.track.lineno=71;
				if ((($bool1=((((($cmp1=$p['getattr']($m['sys'], 'version_info'))===($cmp2=$p['tuple']([$constant_int_2, $constant_int_6]))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=72;
					$pyjs.track.lineno=72;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=74;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=75;
					$pyjs.__active_exception_stack__ = null;
					throw ('test');
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == 'test'.__name__)||$p['_isinstance']($pyjs_try_err,'test')) {
						$pyjs.track.lineno=77;
						$pyjs.track.lineno=77;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					} else if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=79;
						self['fail'](e);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=80;
				self['fail']('"test" was not caught or raised');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCatchStringException'] = $method;
			$pyjs.track.lineno=82;
			$method = $pyjs__bind_method2('testBuiltInException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,err;
				$pyjs.track={module:'ExceptionTest', lineno:82};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=82;
				$pyjs.track.lineno=83;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=84;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['LookupError']('hoschi'));
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['LookupError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['LookupError'])) {
						err = $pyjs_try_err;
						$pyjs.track.lineno=86;
						self['assertEqual']($p['getattr']($p['getattr'](err, '__class__'), '__name__'), 'LookupError');
						$pyjs.track.lineno=87;
						$pyjs.track.lineno=87;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=88;
				self['fail']('LookupError should be caught');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBuiltInException'] = $method;
			$pyjs.track.lineno=90;
			$method = $pyjs__bind_method2('testZeroDivisionError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var err,$pyjs_try_err,v,$div2,$div1;
				$pyjs.track={module:'ExceptionTest', lineno:90};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=91;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=92;
					v = (typeof ($div1=$constant_int_1)==typeof ($div2=$constant_int_0) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['ZeroDivisionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ZeroDivisionError'])) {
						err = $pyjs_try_err;
						$pyjs.track.lineno=94;
						self['assertEqual']($p['getattr']($p['getattr'](err, '__class__'), '__name__'), 'ZeroDivisionError');
						$pyjs.track.lineno=95;
						$pyjs.track.lineno=95;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=96;
				self['fail']('ZeroDivisionError should be caught bug #265');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testZeroDivisionError'] = $method;
			$pyjs.track.lineno=98;
			$method = $pyjs__bind_method2('testStrReprSingleArg', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $7,$21,$20,$22,$24,args,$8,$9,$6,$10,$4,$5,$2,$3,$1,$14,$15,$16,$17,e,$11,$12,$13,$18,$19,$23;
				$pyjs.track={module:'ExceptionTest', lineno:98};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=98;
				$pyjs.track.lineno=99;
				args = $p['tuple'](['test']);
				$pyjs.track.lineno=101;
				e = $pyjs_kwargs_call(null, $p['BaseException'], args, null, [{}]);
				$pyjs.track.lineno=102;
				self['assertEqual']((typeof ($1=$p['getattr'](e, 'args')).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), (typeof ($3=args).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0)));
				$pyjs.track.lineno=103;
				self['assertEqual']($p['str'](e), (typeof ($5=args).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_0)));
				$pyjs.track.lineno=104;
				self['assertEqual']($p['repr'](e), "BaseException('test',)");
				$pyjs.track.lineno=106;
				e = $pyjs_kwargs_call(null, $p['Exception'], args, null, [{}]);
				$pyjs.track.lineno=107;
				self['assertEqual']($p['str'](e), (typeof ($7=args).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_0)));
				$pyjs.track.lineno=108;
				self['assertEqual']($p['repr'](e), "Exception('test',)");
				$pyjs.track.lineno=110;
				e = $pyjs_kwargs_call(null, $p['TypeError'], args, null, [{}]);
				$pyjs.track.lineno=111;
				self['assertEqual']($p['str'](e), (typeof ($9=args).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0)));
				$pyjs.track.lineno=112;
				self['assertEqual']($p['repr'](e), "TypeError('test',)");
				$pyjs.track.lineno=114;
				e = $pyjs_kwargs_call(null, $p['StandardError'], args, null, [{}]);
				$pyjs.track.lineno=115;
				self['assertEqual']($p['str'](e), (typeof ($11=args).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_0)));
				$pyjs.track.lineno=116;
				self['assertEqual']($p['repr'](e), "StandardError('test',)");
				$pyjs.track.lineno=118;
				e = $pyjs_kwargs_call(null, $p['LookupError'], args, null, [{}]);
				$pyjs.track.lineno=119;
				self['assertEqual']($p['str'](e), (typeof ($13=args).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_0]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_0)));
				$pyjs.track.lineno=120;
				self['assertEqual']($p['repr'](e), "LookupError('test',)");
				$pyjs.track.lineno=122;
				e = $pyjs_kwargs_call(null, $p['KeyError'], args, null, [{}]);
				$pyjs.track.lineno=123;
				self['assertEqual']($p['str'](e), $p['sprintf']("'%s'", (typeof ($15=args).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_0]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_0))));
				$pyjs.track.lineno=124;
				self['assertEqual']($p['repr'](e), "KeyError('test',)");
				$pyjs.track.lineno=126;
				e = $pyjs_kwargs_call(null, $p['AttributeError'], args, null, [{}]);
				$pyjs.track.lineno=127;
				self['assertEqual']($p['str'](e), (typeof ($17=args).__array != 'undefined'?
					((typeof $17.__array[$18=$constant_int_0]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($constant_int_0)));
				$pyjs.track.lineno=128;
				self['assertEqual']($p['repr'](e), "AttributeError('test',)");
				$pyjs.track.lineno=130;
				e = $pyjs_kwargs_call(null, $p['NameError'], args, null, [{}]);
				$pyjs.track.lineno=131;
				self['assertEqual']($p['str'](e), (typeof ($19=args).__array != 'undefined'?
					((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__($constant_int_0)));
				$pyjs.track.lineno=132;
				self['assertEqual']($p['repr'](e), "NameError('test',)");
				$pyjs.track.lineno=134;
				e = $pyjs_kwargs_call(null, $p['ValueError'], args, null, [{}]);
				$pyjs.track.lineno=135;
				self['assertEqual']($p['str'](e), (typeof ($21=args).__array != 'undefined'?
					((typeof $21.__array[$22=$constant_int_0]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($constant_int_0)));
				$pyjs.track.lineno=136;
				self['assertEqual']($p['repr'](e), "ValueError('test',)");
				$pyjs.track.lineno=138;
				e = $pyjs_kwargs_call(null, $p['IndexError'], args, null, [{}]);
				$pyjs.track.lineno=139;
				self['assertEqual']($p['str'](e), (typeof ($23=args).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_0]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_0)));
				$pyjs.track.lineno=140;
				self['assertEqual']($p['repr'](e), "IndexError('test',)");
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStrReprSingleArg'] = $method;
			$pyjs.track.lineno=142;
			$method = $pyjs__bind_method2('test_exc_info_traceback', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var count,$add2,$25,$26,$bool2,$pyjs_try_err,func,$add1,tb;
				$pyjs.track={module:'ExceptionTest', lineno:142};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=142;
				$pyjs.track.lineno=143;
				func = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'ExceptionTest',lineno:143};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ExceptionTest';
					$pyjs.track.lineno=143;
					$pyjs.track.lineno=144;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['ValueError']('Baaa!'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				func.__name__ = 'func';

				func.__bind_type__ = 0;
				func.__args__ = [null,null];
				$pyjs.track.lineno=146;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=147;
					func();
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=156;
						self['fail']('Exception expected');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ExceptionTest';
						if (true) {
							$pyjs.track.lineno=149;
							tb = (typeof ($25=$m['sys']['exc_info']()).__array != 'undefined'?
								((typeof $25.__array[$26=$constant_int_2]) != 'undefined'?$25.__array[$26]:
									$25.__getitem__($26)):
									$25.__getitem__($constant_int_2));
							$pyjs.track.lineno=150;
							count = $constant_int_1;
							$pyjs.track.lineno=151;
							while ((($bool2=$p['getattr'](tb, 'tb_next')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
								$pyjs.track.lineno=152;
								tb = $p['getattr'](tb, 'tb_next');
								$pyjs.track.lineno=153;
								count = (typeof ($add1=count)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
									$add1+$add2:
									$p['op_add']($add1,$add2));
							}
							$pyjs.track.lineno=154;
							self['assertEqual'](count, $constant_int_2, 'sys.exc_info() traceback must be relative to caller');
						}
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_exc_info_traceback'] = $method;
			$pyjs.track.lineno=158;
			$method = $pyjs__bind_method2('testSyntax', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $48,raised_errors,$iter1_iter,$29,$28,$27,$49,$pyjs_try_err,$iter1_array,$43,$42,$41,$40,$47,$46,$45,$44,$iter1_nextval,$len1,$bool3,$bool4,e1,$56,e3,$iter1_type,a,b,e,$38,err,$39,$36,$37,$34,$35,$32,$33,$30,$31,$len2,$iter1_idx,raise_errors,$pyjs__trackstack_size_1,$50,$51,$52,$53,$54,$55,e2;
				$pyjs.track={module:'ExceptionTest', lineno:158};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=158;
				$pyjs.track.lineno=159;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=160;
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=162;
					} else if ((($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['LookupError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['LookupError']))) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=164;
					} else {
						$pyjs.track.lineno=166;
					}
				} finally {
					$pyjs.track.lineno=168;
				}
				$pyjs.track.lineno=170;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=171;
					a = $constant_int_1;
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=175;
						a = $constant_int_3;
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ExceptionTest';
						if (true) {
							$pyjs.track.lineno=173;
							a = $constant_int_2;
						}
					}
				} finally {
					$pyjs.track.lineno=177;
					self['assertEqual'](a, $constant_int_3);
					$pyjs.track.lineno=178;
					a = $constant_int_4;
				}
				$pyjs.track.lineno=179;
				self['assertEqual'](a, $constant_int_4);
				$pyjs.track.lineno=181;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=182;
					a = $constant_int_11;
					$pyjs.track.lineno=183;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['KeyError']('test'));
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=187;
						a = $constant_int_13;
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ExceptionTest';
						if (true) {
							$pyjs.track.lineno=185;
							a = $constant_int_12;
						}
					}
				} finally {
					$pyjs.track.lineno=189;
					self['assertEqual'](a, $constant_int_12);
					$pyjs.track.lineno=190;
					a = $constant_int_14;
				}
				$pyjs.track.lineno=191;
				self['assertEqual'](a, $constant_int_14);
				$pyjs.track.lineno=193;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=194;
					a = $constant_int_1;
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
					$pyjs.track.module='ExceptionTest';
				} finally {
					$pyjs.track.lineno=196;
					a = $constant_int_2;
				}
				$pyjs.track.lineno=197;
				self['assertEqual'](a, $constant_int_2);
				$pyjs.track.lineno=198;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=199;
					a = $constant_int_1;
					$pyjs.track.lineno=200;
					var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=201;
						b = $constant_int_1;
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_2 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=205;
							b = $constant_int_3;
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='ExceptionTest';
							if (true) {
								$pyjs.track.lineno=203;
								b = $constant_int_2;
							}
						}
					} finally {
						$pyjs.track.lineno=207;
						self['assertEqual'](b, $constant_int_3);
						$pyjs.track.lineno=208;
						b = $constant_int_4;
					}
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=212;
						a = $constant_int_3;
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ExceptionTest';
						if (true) {
							$pyjs.track.lineno=210;
							a = $constant_int_2;
						}
					}
				} finally {
					$pyjs.track.lineno=214;
					self['assertEqual'](a, $constant_int_3);
					$pyjs.track.lineno=215;
					a = $constant_int_4;
				}
				$pyjs.track.lineno=216;
				self['assertEqual'](a, $constant_int_4);
				$pyjs.track.lineno=217;
				self['assertEqual'](b, $constant_int_4);
				$pyjs.track.lineno=219;
				$m['sys']['exc_clear']();
				$pyjs.track.lineno=220;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=221;
					$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
					$pyjs.__last_exception_stack__ = null;
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					$pyjs.track.lineno=222;
					self['fail']("No error raised on 'raise' after 'sys.exc_clear()'");
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=225;
						self['assertTrue']((typeof ($27=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $27.__array[$28=$constant_int_0]) != 'undefined'?$27.__array[$28]:
								$27.__getitem__($28)):
								$27.__getitem__($constant_int_0))['startswith']('exceptions must be'), (typeof ($29=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $29.__array[$30=$constant_int_0]) != 'undefined'?$29.__array[$30]:
								$29.__getitem__($30)):
								$29.__getitem__($constant_int_0)));
					} else {
						$pyjs.track.lineno=227;
						e = $m['sys']['exc_info']();
						$pyjs.track.lineno=228;
						self['fail']($p['sprintf']('TypeError expected, got %s', (typeof ($31=e).__array != 'undefined'?
							((typeof $31.__array[$32=$constant_int_0]) != 'undefined'?$31.__array[$32]:
								$31.__getitem__($32)):
								$31.__getitem__($constant_int_0))));
					}
				}
				$pyjs.track.lineno=230;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=231;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['KeyError'];
					var $pyjs__raise_expr2 = 'test';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

					$pyjs.track.lineno=232;
					self['fail']('No error raised');
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=234;
						self['assertEqual']((typeof ($33=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $33.__array[$34=$constant_int_0]) != 'undefined'?$33.__array[$34]:
								$33.__getitem__($34)):
								$33.__getitem__($constant_int_0)), 'test');
					} else {
						$pyjs.track.lineno=236;
						e = $m['sys']['exc_info']();
						$pyjs.track.lineno=237;
						self['fail']($p['sprintf']('KeyError expected, got %s', (typeof ($35=e).__array != 'undefined'?
							((typeof $35.__array[$36=$constant_int_0]) != 'undefined'?$35.__array[$36]:
								$35.__getitem__($36)):
								$35.__getitem__($constant_int_0))));
						$pyjs.track.lineno=238;
						e = (typeof ($37=e).__array != 'undefined'?
							((typeof $37.__array[$38=$constant_int_1]) != 'undefined'?$37.__array[$38]:
								$37.__getitem__($38)):
								$37.__getitem__($constant_int_1));
					}
				}
				$pyjs.track.lineno=240;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=241;
					$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
					$pyjs.__last_exception_stack__ = null;
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
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
					$pyjs.track.module='ExceptionTest';
					if (true) {
						$pyjs.track.lineno=243;
						err = $m['sys']['exc_info']();
						$pyjs.track.lineno=244;
						self['assertEqual']((typeof ($39=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $39.__array[$40=$constant_int_0]) != 'undefined'?$39.__array[$40]:
								$39.__getitem__($40)):
								$39.__getitem__($constant_int_0)), (typeof ($43=$p['getattr']((typeof ($41=err).__array != 'undefined'?
							((typeof $41.__array[$42=$constant_int_1]) != 'undefined'?$41.__array[$42]:
								$41.__getitem__($42)):
								$41.__getitem__($constant_int_1)), 'args')).__array != 'undefined'?
							((typeof $43.__array[$44=$constant_int_0]) != 'undefined'?$43.__array[$44]:
								$43.__getitem__($44)):
								$43.__getitem__($constant_int_0)));
					}
				}
				$pyjs.track.lineno=246;
				raise_errors = $p['list']([$p['KeyError']('KeyError'), $p['TypeError']('TypeError'), $p['AttributeError']('AttributeError'), $p['LookupError']('LookupError')]);
				$pyjs.track.lineno=249;
				raised_errors = $p['list']([]);
				$pyjs.track.lineno=250;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = raise_errors;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					err = $iter1_nextval;
					$pyjs.track.lineno=251;
					var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=252;
						$pyjs.__active_exception_stack__ = null;
						throw (err);
						$pyjs.track.lineno=253;
						self['fail']('Failed to raise exception');
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
						$pyjs.track.module='ExceptionTest';
						if ((($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError']))||(($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError']))) {
							e1 = $pyjs_try_err;
							$pyjs.track.lineno=255;
							raised_errors['append'](e1);
							$pyjs.track.lineno=256;
							if ((($bool3=$p['isinstance'](e1, $p['KeyError'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
								$pyjs.track.lineno=257;
								self['assertEqual']((typeof ($45=$p['getattr'](e1, 'args')).__array != 'undefined'?
									((typeof $45.__array[$46=$constant_int_0]) != 'undefined'?$45.__array[$46]:
										$45.__getitem__($46)):
										$45.__getitem__($constant_int_0)), 'KeyError');
							}
							else if ((($bool4=$p['isinstance'](e1, $p['TypeError'])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
								$pyjs.track.lineno=259;
								self['assertEqual']((typeof ($47=$p['getattr'](e1, 'args')).__array != 'undefined'?
									((typeof $47.__array[$48=$constant_int_0]) != 'undefined'?$47.__array[$48]:
										$47.__getitem__($48)):
										$47.__getitem__($constant_int_0)), 'TypeError');
							}
							else {
								$pyjs.track.lineno=261;
								self['fail']('neither KeyError nor TypeError in except (KeyError, TypeError)');
							}
						} else if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							e2 = $pyjs_try_err;
							$pyjs.track.lineno=263;
							raised_errors['append'](e2);
							$pyjs.track.lineno=264;
							self['assertEqual']((typeof ($49=$p['getattr'](e2, 'args')).__array != 'undefined'?
								((typeof $49.__array[$50=$constant_int_0]) != 'undefined'?$49.__array[$50]:
									$49.__getitem__($50)):
									$49.__getitem__($constant_int_0)), 'AttributeError');
						} else {
							$pyjs.track.lineno=266;
							e3 = (typeof ($51=$m['sys']['exc_info']()).__array != 'undefined'?
								((typeof $51.__array[$52=$constant_int_1]) != 'undefined'?$51.__array[$52]:
									$51.__getitem__($52)):
									$51.__getitem__($constant_int_1));
							$pyjs.track.lineno=267;
							raised_errors['append'](e3);
							$pyjs.track.lineno=268;
							self['assertEqual']((typeof ($53=$p['getattr'](e3, 'args')).__array != 'undefined'?
								((typeof $53.__array[$54=$constant_int_0]) != 'undefined'?$53.__array[$54]:
									$53.__getitem__($54)):
									$53.__getitem__($constant_int_0)), 'LookupError');
						}
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=269;
				self['assertEqual']((($len1=raised_errors) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), (($len2=raise_errors) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))));
				$pyjs.track.lineno=271;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=272;
					var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=273;
						$pyjs.__active_exception_stack__ = null;
						throw ($p['TypeError']('TypeError'));
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
						$pyjs.track.module='ExceptionTest';
						if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							e = $pyjs_try_err;
							$pyjs.track.lineno=275;
							self['fail']('Got KeyError');
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=276;
					self['fail']('TypeError should not be ignored');
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=278;
						self['assertEqual']((typeof ($55=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $55.__array[$56=$constant_int_0]) != 'undefined'?$55.__array[$56]:
								$55.__getitem__($56)):
								$55.__getitem__($constant_int_0)), 'TypeError');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSyntax'] = $method;
			$pyjs.track.lineno=280;
			$method = $pyjs__bind_method2('testCatchSuperException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e;
				$pyjs.track={module:'ExceptionTest', lineno:280};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=280;
				$pyjs.track.lineno=281;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=282;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('test'));
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['Exception'].__name__)||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=284;
						self['assertTrue'](true);
					} else {
						$pyjs.track.lineno=286;
						self['fail']('Failed to catch exception: bug #254');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCatchSuperException'] = $method;
			$pyjs.track.lineno=288;
			$method = $pyjs__bind_method2('testAssertionError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd3c3909fe4c017e583d5c443d8d9087') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $58,$pyjs_try_err,e,$57;
				$pyjs.track={module:'ExceptionTest', lineno:288};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ExceptionTest';
				$pyjs.track.lineno=288;
				$pyjs.track.lineno=289;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=290;
					if (!( true )) {
					   throw $p['AssertionError']();
					 }
					$pyjs.track.lineno=291;
					self['assertTrue'](true);
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['AssertionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=293;
						self['fail']($p['sprintf']('Got an unexpected assertion error: %r', e));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=294;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=295;
					if (!( false )) {
					   throw $p['AssertionError']();
					 }
					$pyjs.track.lineno=296;
					self['fail']('AssertionError expected');
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['AssertionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=298;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=299;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=300;
					if (!( false )) {
					   throw $p['AssertionError']('reason');
					 }
					$pyjs.track.lineno=301;
					self['fail']('AssertionError expected');
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
					$pyjs.track.module='ExceptionTest';
					if (($pyjs_try_err_name == $p['AssertionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=303;
						self['assertEqual']((typeof ($57=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $57.__array[$58=$constant_int_0]) != 'undefined'?$57.__array[$58]:
								$57.__getitem__($58)):
								$57.__getitem__($constant_int_0)), 'reason');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAssertionError'] = $method;
			$pyjs.track.lineno=17;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExceptionTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ExceptionTest */


/* end module: ExceptionTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.PY27_BEHAVIOUR', 'sys']
*/
