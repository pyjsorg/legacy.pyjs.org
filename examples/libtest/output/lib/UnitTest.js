/* start module: UnitTest */
$pyjs.loaded_modules['UnitTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['UnitTest'].__was_initialized__) return $pyjs.loaded_modules['UnitTest'];
	var $m = $pyjs.loaded_modules["UnitTest"];
	$m.__repr__ = function() { return "<module: UnitTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'UnitTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'UnitTest.py, line 1:\n    from write import write, writebr';
		$m.__track_lines__[2] = 'UnitTest.py, line 2:\n    import sys';
		$m.__track_lines__[4] = "UnitTest.py, line 4:\n    IN_BROWSER = sys.platform in ['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']";
		$m.__track_lines__[5] = "UnitTest.py, line 5:\n    IN_JS = sys.platform in ['mozilla', 'ie6', 'opera', 'oldmoz',";
		$m.__track_lines__[8] = 'UnitTest.py, line 8:\n    PY27_BEHAVIOUR = not IN_JS and sys.version_info[0:2] >= (2,7)';
		$m.__track_lines__[10] = 'UnitTest.py, line 10:\n    if IN_BROWSER:';
		$m.__track_lines__[11] = 'UnitTest.py, line 11:\n    from pyjamas.Timer import Timer';
		$m.__track_lines__[13] = 'UnitTest.py, line 13:\n    class UnitTest:';
		$m.__track_lines__[15] = 'UnitTest.py, line 15:\n    def __init__(self):';
		$m.__track_lines__[16] = 'UnitTest.py, line 16:\n    self.tests_completed=0';
		$m.__track_lines__[17] = 'UnitTest.py, line 17:\n    self.tests_failed=0';
		$m.__track_lines__[18] = 'UnitTest.py, line 18:\n    self.tests_passed=0';
		$m.__track_lines__[19] = 'UnitTest.py, line 19:\n    self.test_methods=[]';
		$m.__track_lines__[20] = 'UnitTest.py, line 20:\n    self.test_idx = None';
		$m.__track_lines__[23] = 'UnitTest.py, line 23:\n    self.assertEqual = self.assertEquals = self.failUnlessEqual';
		$m.__track_lines__[24] = 'UnitTest.py, line 24:\n    self.assertNotEqual = self.assertNotEquals = self.failIfEqual';
		$m.__track_lines__[25] = 'UnitTest.py, line 25:\n    self.assertAlmostEqual = self.assertAlmostEquals = self.failUnlessAlmostEqual';
		$m.__track_lines__[26] = 'UnitTest.py, line 26:\n    self.assertNotAlmostEqual = self.assertNotAlmostEquals = self.failIfAlmostEqual';
		$m.__track_lines__[27] = 'UnitTest.py, line 27:\n    self.failUnlessRaises = self.assertRaises';
		$m.__track_lines__[28] = 'UnitTest.py, line 28:\n    self.assert_ = self.assertTrue = self.failUnless';
		$m.__track_lines__[29] = 'UnitTest.py, line 29:\n    self.assertFalse = self.failIf';
		$m.__track_lines__[31] = 'UnitTest.py, line 31:\n    def _run_test(self, test_method_name):';
		$m.__track_lines__[32] = 'UnitTest.py, line 32:\n    self.getTestMethods()';
		$m.__track_lines__[34] = 'UnitTest.py, line 34:\n    test_method=getattr(self, test_method_name)';
		$m.__track_lines__[35] = 'UnitTest.py, line 35:\n    self.current_test_name = test_method_name';
		$m.__track_lines__[36] = 'UnitTest.py, line 36:\n    self.setUp()';
		$m.__track_lines__[37] = 'UnitTest.py, line 37:\n    try:';
		$m.__track_lines__[38] = 'UnitTest.py, line 38:\n    try:';
		$m.__track_lines__[39] = 'UnitTest.py, line 39:\n    test_method()';
		$m.__track_lines__[41] = 'UnitTest.py, line 41:\n    self.fail("uncaught exception: " + str(e))';
		$m.__track_lines__[43] = 'UnitTest.py, line 43:\n    self.fail("uncaught javascript exception")';
		$m.__track_lines__[44] = 'UnitTest.py, line 44:\n    self.tearDown()';
		$m.__track_lines__[45] = 'UnitTest.py, line 45:\n    self.current_test_name = None';
		$m.__track_lines__[47] = 'UnitTest.py, line 47:\n    def run(self):';
		$m.__track_lines__[48] = 'UnitTest.py, line 48:\n    self.getTestMethods()';
		$m.__track_lines__[49] = 'UnitTest.py, line 49:\n    if not IN_BROWSER:';
		$m.__track_lines__[50] = 'UnitTest.py, line 50:\n    for test_method_name in self.test_methods:';
		$m.__track_lines__[51] = 'UnitTest.py, line 51:\n    self._run_test(test_method_name)';
		$m.__track_lines__[52] = 'UnitTest.py, line 52:\n    self.displayStats()';
		$m.__track_lines__[53] = 'UnitTest.py, line 53:\n    if hasattr(self, "start_next_test"):';
		$m.__track_lines__[54] = 'UnitTest.py, line 54:\n    self.start_next_test()';
		$m.__track_lines__[55] = 'UnitTest.py, line 55:\n    return';
		$m.__track_lines__[56] = 'UnitTest.py, line 56:\n    self.test_idx = 0';
		$m.__track_lines__[57] = 'UnitTest.py, line 57:\n    Timer(10, self)';
		$m.__track_lines__[59] = 'UnitTest.py, line 59:\n    def onTimer(self, timer):';
		$m.__track_lines__[60] = 'UnitTest.py, line 60:\n    for i in range(1):';
		$m.__track_lines__[61] = 'UnitTest.py, line 61:\n    if self.test_idx >= len(self.test_methods):';
		$m.__track_lines__[62] = 'UnitTest.py, line 62:\n    self.displayStats()';
		$m.__track_lines__[63] = "UnitTest.py, line 63:\n    self.test_idx = 'DONE'";
		$m.__track_lines__[64] = 'UnitTest.py, line 64:\n    self.start_next_test()';
		$m.__track_lines__[65] = 'UnitTest.py, line 65:\n    return';
		$m.__track_lines__[67] = 'UnitTest.py, line 67:\n    self._run_test(self.test_methods[self.test_idx])';
		$m.__track_lines__[68] = 'UnitTest.py, line 68:\n    self.test_idx += 1';
		$m.__track_lines__[69] = 'UnitTest.py, line 69:\n    timer.schedule(10)';
		$m.__track_lines__[71] = 'UnitTest.py, line 71:\n    def setUp(self):';
		$m.__track_lines__[72] = 'UnitTest.py, line 72:\n    pass';
		$m.__track_lines__[74] = 'UnitTest.py, line 74:\n    def tearDown(self):';
		$m.__track_lines__[75] = 'UnitTest.py, line 75:\n    pass';
		$m.__track_lines__[77] = 'UnitTest.py, line 77:\n    def getName(self):';
		$m.__track_lines__[78] = 'UnitTest.py, line 78:\n    return self.__class__.__name__';
		$m.__track_lines__[80] = 'UnitTest.py, line 80:\n    def getNameFmt(self, msg=""):';
		$m.__track_lines__[81] = 'UnitTest.py, line 81:\n    if self.getName():';
		$m.__track_lines__[82] = 'UnitTest.py, line 82:\n    if msg:';
		$m.__track_lines__[83] = 'UnitTest.py, line 83:\n    msg=" " + str(msg)';
		$m.__track_lines__[84] = 'UnitTest.py, line 84:\n    if self.current_test_name:';
		$m.__track_lines__[85] = 'UnitTest.py, line 85:\n    msg += " (%s) " % self.getCurrentTestID()';
		$m.__track_lines__[86] = 'UnitTest.py, line 86:\n    return self.getName() + msg + ": "';
		$m.__track_lines__[87] = 'UnitTest.py, line 87:\n    return ""';
		$m.__track_lines__[89] = 'UnitTest.py, line 89:\n    def getCurrentTestID(self):';
		$m.__track_lines__[90] = 'UnitTest.py, line 90:\n    return "%s/%i" % (self.current_test_name,self.tests_completed)';
		$m.__track_lines__[93] = 'UnitTest.py, line 93:\n    def getTestMethods(self):';
		$m.__track_lines__[94] = 'UnitTest.py, line 94:\n    self.test_methods=[]';
		$m.__track_lines__[95] = 'UnitTest.py, line 95:\n    for m in dir(self):';
		$m.__track_lines__[96] = 'UnitTest.py, line 96:\n    if self.isTestMethod(m):';
		$m.__track_lines__[97] = 'UnitTest.py, line 97:\n    self.test_methods.append(m)';
		$m.__track_lines__[99] = 'UnitTest.py, line 99:\n    def isTestMethod(self, method):';
		$m.__track_lines__[100] = 'UnitTest.py, line 100:\n    if callable(getattr(self, method)):';
		$m.__track_lines__[101] = 'UnitTest.py, line 101:\n    if method.find("test") == 0:';
		$m.__track_lines__[102] = 'UnitTest.py, line 102:\n    return True';
		$m.__track_lines__[103] = 'UnitTest.py, line 103:\n    return False';
		$m.__track_lines__[105] = 'UnitTest.py, line 105:\n    def fail(self, msg=None):';
		$m.__track_lines__[106] = 'UnitTest.py, line 106:\n    self.startTest()';
		$m.__track_lines__[107] = 'UnitTest.py, line 107:\n    self.tests_failed+=1';
		$m.__track_lines__[109] = 'UnitTest.py, line 109:\n    if not msg:';
		$m.__track_lines__[110] = 'UnitTest.py, line 110:\n    msg="assertion failed"';
		$m.__track_lines__[112] = 'UnitTest.py, line 112:\n    msg = str(msg)';
		$m.__track_lines__[114] = 'UnitTest.py, line 114:\n    octothorp = msg.find("#")';
		$m.__track_lines__[115] = 'UnitTest.py, line 115:\n    has_bugreport = octothorp >= 0 and msg[octothorp+1].isdigit()';
		$m.__track_lines__[116] = 'UnitTest.py, line 116:\n    if has_bugreport:';
		$m.__track_lines__[117] = 'UnitTest.py, line 117:\n    name_fmt = "Known issue"';
		$m.__track_lines__[118] = 'UnitTest.py, line 118:\n    bg_colour="#ffc000"';
		$m.__track_lines__[119] = 'UnitTest.py, line 119:\n    fg_colour="#000000"';
		$m.__track_lines__[121] = 'UnitTest.py, line 121:\n    bg_colour="#ff8080"';
		$m.__track_lines__[122] = 'UnitTest.py, line 122:\n    fg_colour="#000000"';
		$m.__track_lines__[123] = 'UnitTest.py, line 123:\n    name_fmt = "Test failed"';
		$m.__track_lines__[124] = 'UnitTest.py, line 124:\n    output="<table style=\'padding-left:20px;padding-right:20px;\' cellpadding=2 width=100%><tr><td bgcolor=\'" + bg_colour + "\'><font color=\'" + fg_colour + "\'>"';
		$m.__track_lines__[125] = 'UnitTest.py, line 125:\n    write(output)';
		$m.__track_lines__[126] = 'UnitTest.py, line 126:\n    title="<b>" + self.getNameFmt(name_fmt) + "</b>"';
		$m.__track_lines__[127] = 'UnitTest.py, line 127:\n    write(title + msg)';
		$m.__track_lines__[128] = 'UnitTest.py, line 128:\n    output="</font></td></tr></table>"';
		$m.__track_lines__[129] = 'UnitTest.py, line 129:\n    output+= "\\n"';
		$m.__track_lines__[130] = 'UnitTest.py, line 130:\n    write(output)';
		$m.__track_lines__[131] = "UnitTest.py, line 131:\n    if sys.platform in ['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']:";
		$m.__track_lines__[132] = 'UnitTest.py, line 132:\n    from __pyjamas__ import JS';
		$m.__track_lines__[133] = 'UnitTest.py, line 133:\n    JS("""if (typeof @{{!console}} != \'undefined\') {';
		$m.__track_lines__[137] = 'UnitTest.py, line 137:\n    return False';
		$m.__track_lines__[139] = 'UnitTest.py, line 139:\n    def startTest(self):';
		$m.__track_lines__[140] = 'UnitTest.py, line 140:\n    self.tests_completed+=1';
		$m.__track_lines__[142] = 'UnitTest.py, line 142:\n    def failIf(self, expr, msg=None):';
		$m.__track_lines__[143] = 'UnitTest.py, line 143:\n    self.startTest()';
		$m.__track_lines__[144] = 'UnitTest.py, line 144:\n    if expr:';
		$m.__track_lines__[145] = 'UnitTest.py, line 145:\n    return self.fail(msg)';
		$m.__track_lines__[147] = 'UnitTest.py, line 147:\n    def failUnless(self, expr, msg=None):';
		$m.__track_lines__[148] = 'UnitTest.py, line 148:\n    self.startTest()';
		$m.__track_lines__[149] = 'UnitTest.py, line 149:\n    if not expr:';
		$m.__track_lines__[150] = 'UnitTest.py, line 150:\n    if not msg:';
		$m.__track_lines__[151] = 'UnitTest.py, line 151:\n    msg = "expected True, got False"';
		$m.__track_lines__[152] = 'UnitTest.py, line 152:\n    return self.fail(msg)';
		$m.__track_lines__[154] = 'UnitTest.py, line 154:\n    def failUnlessEqual(self, first, second, msg=None):';
		$m.__track_lines__[155] = 'UnitTest.py, line 155:\n    self.startTest()';
		$m.__track_lines__[156] = 'UnitTest.py, line 156:\n    if not first == second:';
		$m.__track_lines__[157] = 'UnitTest.py, line 157:\n    if not msg:';
		$m.__track_lines__[158] = 'UnitTest.py, line 158:\n    msg=repr(first) + " != " + repr(second)';
		$m.__track_lines__[159] = 'UnitTest.py, line 159:\n    return self.fail(msg)';
		$m.__track_lines__[161] = 'UnitTest.py, line 161:\n    def failIfEqual(self, first, second, msg=None):';
		$m.__track_lines__[162] = 'UnitTest.py, line 162:\n    self.startTest()';
		$m.__track_lines__[163] = 'UnitTest.py, line 163:\n    if first == second:';
		$m.__track_lines__[164] = 'UnitTest.py, line 164:\n    if not msg:';
		$m.__track_lines__[165] = 'UnitTest.py, line 165:\n    msg=repr(first) + " == " + repr(second)';
		$m.__track_lines__[166] = 'UnitTest.py, line 166:\n    return self.fail(msg)';
		$m.__track_lines__[168] = 'UnitTest.py, line 168:\n    def failUnlessAlmostEqual(self, first, second, places=7, msg=None):';
		$m.__track_lines__[169] = 'UnitTest.py, line 169:\n    self.startTest()';
		$m.__track_lines__[170] = 'UnitTest.py, line 170:\n    if round(second-first, places) != 0:';
		$m.__track_lines__[171] = 'UnitTest.py, line 171:\n    if not msg:';
		$m.__track_lines__[172] = 'UnitTest.py, line 172:\n    msg=repr(first) + " != " + repr(second) + " within " + repr(places) + " places"';
		$m.__track_lines__[173] = 'UnitTest.py, line 173:\n    return self.fail(msg)';
		$m.__track_lines__[175] = 'UnitTest.py, line 175:\n    def failIfAlmostEqual(self, first, second, places=7, msg=None):';
		$m.__track_lines__[176] = 'UnitTest.py, line 176:\n    self.startTest()';
		$m.__track_lines__[177] = 'UnitTest.py, line 177:\n    if round(second-first, places)  is  0:';
		$m.__track_lines__[178] = 'UnitTest.py, line 178:\n    if not msg:';
		$m.__track_lines__[179] = 'UnitTest.py, line 179:\n    msg=repr(first) + " == " + repr(second) + " within " + repr(places) + " places"';
		$m.__track_lines__[180] = 'UnitTest.py, line 180:\n    return self.fail(msg)';
		$m.__track_lines__[183] = 'UnitTest.py, line 183:\n    def assertIn(self, member, container, msg=None):';
		$m.__track_lines__[185] = 'UnitTest.py, line 185:\n    if member not in container:';
		$m.__track_lines__[186] = "UnitTest.py, line 186:\n    standardMsg = '%s not found in %s' % (repr(member)[:80],";
		$m.__track_lines__[188] = 'UnitTest.py, line 188:\n    self.fail(msg if msg else standardMsg)';
		$m.__track_lines__[190] = 'UnitTest.py, line 190:\n    def assertNotIn(self, member, container, msg=None):';
		$m.__track_lines__[192] = 'UnitTest.py, line 192:\n    if member in container:';
		$m.__track_lines__[193] = "UnitTest.py, line 193:\n    standardMsg = '%s unexpectedly found in %s' % (repr(member)[:80],";
		$m.__track_lines__[195] = 'UnitTest.py, line 195:\n    self.fail(msg if msg else standardMsg)';
		$m.__track_lines__[198] = 'UnitTest.py, line 198:\n    def assertRaises(self, excClass, callableObj, *args, **kwargs):';
		$m.__track_lines__[207] = 'UnitTest.py, line 207:\n    self.startTest()';
		$m.__track_lines__[208] = 'UnitTest.py, line 208:\n    try:';
		$m.__track_lines__[209] = 'UnitTest.py, line 209:\n    callableObj(*args, **kwargs)';
		$m.__track_lines__[211] = 'UnitTest.py, line 211:\n    return';
		$m.__track_lines__[213] = "UnitTest.py, line 213:\n    if hasattr(excClass, '__name__'):";
		$m.__track_lines__[214] = 'UnitTest.py, line 214:\n    excName = excClass.__name__';
		$m.__track_lines__[216] = 'UnitTest.py, line 216:\n    excName = str(excClass)';
		$m.__track_lines__[217] = 'UnitTest.py, line 217:\n    self.fail("%s not raised" % excName)';
		$m.__track_lines__[219] = 'UnitTest.py, line 219:\n    def displayStats(self):';
		$m.__track_lines__[220] = 'UnitTest.py, line 220:\n    if self.tests_failed:';
		$m.__track_lines__[221] = 'UnitTest.py, line 221:\n    bg_colour="#ff0000"';
		$m.__track_lines__[222] = 'UnitTest.py, line 222:\n    fg_colour="#ffffff"';
		$m.__track_lines__[224] = 'UnitTest.py, line 224:\n    bg_colour="#00ff00"';
		$m.__track_lines__[225] = 'UnitTest.py, line 225:\n    fg_colour="#000000"';
		$m.__track_lines__[227] = 'UnitTest.py, line 227:\n    tests_passed=self.tests_completed - self.tests_failed';
		$m.__track_lines__[228] = "UnitTest.py, line 228:\n    if sys.platform in ['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']:";
		$m.__track_lines__[229] = 'UnitTest.py, line 229:\n    output="<table cellpadding=4 width=100%><tr><td bgcolor=\'" + bg_colour + "\'><font face=\'arial\' size=4 color=\'" + fg_colour + "\'><b>"';
		$m.__track_lines__[231] = 'UnitTest.py, line 231:\n    output = ""';
		$m.__track_lines__[232] = 'UnitTest.py, line 232:\n    output+=self.getNameFmt() + "Passed %d " % tests_passed + "/ %d" % self.tests_completed + " tests"';
		$m.__track_lines__[234] = 'UnitTest.py, line 234:\n    if self.tests_failed:';
		$m.__track_lines__[235] = 'UnitTest.py, line 235:\n    output+=" (%d failed)" % self.tests_failed';
		$m.__track_lines__[237] = "UnitTest.py, line 237:\n    if sys.platform in ['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']:";
		$m.__track_lines__[238] = 'UnitTest.py, line 238:\n    output+="</b></font></td></tr></table>"';
		$m.__track_lines__[240] = 'UnitTest.py, line 240:\n    output+= "\\n"';
		$m.__track_lines__[242] = 'UnitTest.py, line 242:\n    write(output)';
		var $cmp1,$cmp2,$and2,$bool2,$bool1,$bool3,$and1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_80 = new $p['int'](80);
		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='UnitTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['write'] = $p['___import___']('write.write', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['writebr'] = $p['___import___']('write.writebr', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['IN_BROWSER'] = $p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']).__contains__($p['getattr']($m['sys'], 'platform'));
		$pyjs.track.lineno=5;
		$m['IN_JS'] = $p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari', 'spidermonkey', 'pyv8']).__contains__($p['getattr']($m['sys'], 'platform'));
		$pyjs.track.lineno=8;
		$m['PY27_BEHAVIOUR'] = ((($bool2=$and1=!(($bool1=$m['IN_JS']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2.__nonzero__=='function'?
					$bool2.__nonzero__() :
					(typeof $bool2.__len__=='function'?
						($bool2.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((((($cmp1=$p['__getslice']($p['getattr']($m['sys'], 'version_info'), $constant_int_0, $constant_int_2))===($cmp2=$p['tuple']([$constant_int_2, $constant_int_7]))?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))))|1) == 1):$and1);
		$pyjs.track.lineno=10;
		if ((($bool3=$m['IN_BROWSER']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			$pyjs.track.lineno=11;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		}
		$pyjs.track.lineno=13;
		$m['UnitTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'UnitTest';
			$cls_definition.__md5__ = 'e28cdfce3446dbb5491b93aab49d366a';
			$pyjs.track.lineno=15;
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
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $assign5,$assign4,$assign1,$assign3,$assign2;
				$pyjs.track={module:'UnitTest', lineno:15};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=15;
				$pyjs.track.lineno=16;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tests_completed', $constant_int_0) : $p['setattr'](self, 'tests_completed', $constant_int_0); 
				$pyjs.track.lineno=17;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tests_failed', $constant_int_0) : $p['setattr'](self, 'tests_failed', $constant_int_0); 
				$pyjs.track.lineno=18;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tests_passed', $constant_int_0) : $p['setattr'](self, 'tests_passed', $constant_int_0); 
				$pyjs.track.lineno=19;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test_methods', $p['list']([])) : $p['setattr'](self, 'test_methods', $p['list']([])); 
				$pyjs.track.lineno=20;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test_idx', null) : $p['setattr'](self, 'test_idx', null); 
				$pyjs.track.lineno=23;
				$assign1 = $p['getattr'](self, 'failUnlessEqual');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertEqual', $assign1) : $p['setattr'](self, 'assertEqual', $assign1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertEquals', $assign1) : $p['setattr'](self, 'assertEquals', $assign1); 
				$pyjs.track.lineno=24;
				$assign2 = $p['getattr'](self, 'failIfEqual');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertNotEqual', $assign2) : $p['setattr'](self, 'assertNotEqual', $assign2); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertNotEquals', $assign2) : $p['setattr'](self, 'assertNotEquals', $assign2); 
				$pyjs.track.lineno=25;
				$assign3 = $p['getattr'](self, 'failUnlessAlmostEqual');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertAlmostEqual', $assign3) : $p['setattr'](self, 'assertAlmostEqual', $assign3); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertAlmostEquals', $assign3) : $p['setattr'](self, 'assertAlmostEquals', $assign3); 
				$pyjs.track.lineno=26;
				$assign4 = $p['getattr'](self, 'failIfAlmostEqual');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertNotAlmostEqual', $assign4) : $p['setattr'](self, 'assertNotAlmostEqual', $assign4); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertNotAlmostEquals', $assign4) : $p['setattr'](self, 'assertNotAlmostEquals', $assign4); 
				$pyjs.track.lineno=27;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('failUnlessRaises', $p['getattr'](self, 'assertRaises')) : $p['setattr'](self, 'failUnlessRaises', $p['getattr'](self, 'assertRaises')); 
				$pyjs.track.lineno=28;
				$assign5 = $p['getattr'](self, 'failUnless');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assert_', $assign5) : $p['setattr'](self, 'assert_', $assign5); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertTrue', $assign5) : $p['setattr'](self, 'assertTrue', $assign5); 
				$pyjs.track.lineno=29;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('assertFalse', $p['getattr'](self, 'failIf')) : $p['setattr'](self, 'assertFalse', $p['getattr'](self, 'failIf')); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=31;
			$method = $pyjs__bind_method2('_run_test', function(test_method_name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					test_method_name = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$add2,$pyjs_try_err,test_method,$add1;
				$pyjs.track={module:'UnitTest', lineno:31};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=31;
				$pyjs.track.lineno=32;
				self['getTestMethods']();
				$pyjs.track.lineno=34;
				test_method = $p['getattr'](self, test_method_name);
				$pyjs.track.lineno=35;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('current_test_name', test_method_name) : $p['setattr'](self, 'current_test_name', test_method_name); 
				$pyjs.track.lineno=36;
				self['setUp']();
				$pyjs.track.lineno=37;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=38;
					var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=39;
						test_method();
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
						$pyjs.track.module='UnitTest';
						if (($pyjs_try_err_name == $p['Exception'].__name__)||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
							e = $pyjs_try_err;
							$pyjs.track.lineno=41;
							self['fail']((typeof ($add1='uncaught exception: ')==typeof ($add2=$p['str'](e)) && (typeof $add1=='number'||typeof $add1=='string')?
								$add1+$add2:
								$p['op_add']($add1,$add2)));
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
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
					$pyjs.track.module='UnitTest';
					if (true) {
						$pyjs.track.lineno=43;
						self['fail']('uncaught javascript exception');
					}
				}
				$pyjs.track.lineno=44;
				self['tearDown']();
				$pyjs.track.lineno=45;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('current_test_name', null) : $p['setattr'](self, 'current_test_name', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['test_method_name']]);
			$cls_definition['_run_test'] = $method;
			$pyjs.track.lineno=47;
			$method = $pyjs__bind_method2('run', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$pyjs__trackstack_size_1,test_method_name,$iter1_iter,$bool6,$iter1_array,$bool4,$bool5,$iter1_idx;
				$pyjs.track={module:'UnitTest', lineno:47};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=48;
				self['getTestMethods']();
				$pyjs.track.lineno=49;
				if ((($bool5=!(($bool4=$m['IN_BROWSER']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$pyjs.track.lineno=50;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter1_iter = $p['getattr'](self, 'test_methods');
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						test_method_name = $iter1_nextval;
						$pyjs.track.lineno=51;
						self['_run_test'](test_method_name);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='UnitTest';
					$pyjs.track.lineno=52;
					self['displayStats']();
					$pyjs.track.lineno=53;
					if ((($bool6=$p['hasattr'](self, 'start_next_test')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						$pyjs.track.lineno=54;
						self['start_next_test']();
					}
					$pyjs.track.lineno=55;
					$pyjs.track.lineno=55;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=56;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test_idx', $constant_int_0) : $p['setattr'](self, 'test_idx', $constant_int_0); 
				$pyjs.track.lineno=57;
				$m['Timer']($constant_int_10, self);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$pyjs.track.lineno=59;
			$method = $pyjs__bind_method2('onTimer', function(timer) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					timer = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$iter2_nextval,$iter2_type,$cmp3,$iter2_iter,i,$len1,$add3,$iter2_idx,$bool7,$add4,$pyjs__trackstack_size_1,$2,$iter2_array,$1;
				$pyjs.track={module:'UnitTest', lineno:59};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=59;
				$pyjs.track.lineno=60;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = $p['range']($constant_int_1);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$pyjs.track.lineno=61;
					if ((($bool7=((((($cmp3=$p['getattr'](self, 'test_idx'))===($cmp4=(($len1=$p['getattr'](self, 'test_methods')) === null?$constant_int_0:
						(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
							(typeof $len1.__len__ == 'function'?$len1.__len__():
								(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
									$p['len']($len1))))))?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						$pyjs.track.lineno=62;
						self['displayStats']();
						$pyjs.track.lineno=63;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test_idx', 'DONE') : $p['setattr'](self, 'test_idx', 'DONE'); 
						$pyjs.track.lineno=64;
						self['start_next_test']();
						$pyjs.track.lineno=65;
						$pyjs.track.lineno=65;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=67;
					self['_run_test']((typeof ($1=$p['getattr'](self, 'test_methods')).__array != 'undefined'?
						((typeof $1.__array[$2=$p['getattr'](self, 'test_idx')]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__($p['getattr'](self, 'test_idx'))));
					$pyjs.track.lineno=68;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test_idx', (typeof ($add3=$p['getattr'](self, 'test_idx'))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))) : $p['setattr'](self, 'test_idx', (typeof ($add3=$p['getattr'](self, 'test_idx'))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))); 
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=69;
				timer['schedule']($constant_int_10);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['onTimer'] = $method;
			$pyjs.track.lineno=71;
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
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'UnitTest', lineno:71};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=72;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setUp'] = $method;
			$pyjs.track.lineno=74;
			$method = $pyjs__bind_method2('tearDown', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'UnitTest', lineno:74};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=74;
				$pyjs.track.lineno=75;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['tearDown'] = $method;
			$pyjs.track.lineno=77;
			$method = $pyjs__bind_method2('getName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'UnitTest', lineno:77};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=77;
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=78;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__class__'), '__name__');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			$pyjs.track.lineno=80;
			$method = $pyjs__bind_method2('getNameFmt', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[3][1];
				var $add9,$bool10,$add6,$add7,$add12,$add5,$add10,$bool8,$bool9,$add8,$add11;
				$pyjs.track={module:'UnitTest', lineno:80};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=80;
				$pyjs.track.lineno=81;
				if ((($bool8=self['getName']()) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					$pyjs.track.lineno=82;
					if ((($bool9=msg) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						$pyjs.track.lineno=83;
						msg = (typeof ($add5=' ')==typeof ($add6=$p['str'](msg)) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
					}
					$pyjs.track.lineno=84;
					if ((($bool10=$p['getattr'](self, 'current_test_name')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						$pyjs.track.lineno=85;
						msg = (typeof ($add7=msg)==typeof ($add8=$p['sprintf'](' (%s) ', self['getCurrentTestID']())) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8));
					}
					$pyjs.track.lineno=86;
					$pyjs.track.lineno=86;
					var $pyjs__ret = (typeof ($add11=(typeof ($add9=self['getName']())==typeof ($add10=msg) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)))==typeof ($add12=': ') && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=87;
				$pyjs.track.lineno=87;
				var $pyjs__ret = '';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['msg', '']]);
			$cls_definition['getNameFmt'] = $method;
			$pyjs.track.lineno=89;
			$method = $pyjs__bind_method2('getCurrentTestID', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'UnitTest', lineno:89};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=89;
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=90;
				var $pyjs__ret = $p['sprintf']('%s/%i', $p['tuple']([$p['getattr'](self, 'current_test_name'), $p['getattr'](self, 'tests_completed')]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentTestID'] = $method;
			$pyjs.track.lineno=93;
			$method = $pyjs__bind_method2('getTestMethods', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$bool11,$iter3_type,m,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs.track={module:'UnitTest', lineno:93};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=93;
				$pyjs.track.lineno=94;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test_methods', $p['list']([])) : $p['setattr'](self, 'test_methods', $p['list']([])); 
				$pyjs.track.lineno=95;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = $p['dir'](self);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					m = $iter3_nextval;
					$pyjs.track.lineno=96;
					if ((($bool11=self['isTestMethod'](m)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						$pyjs.track.lineno=97;
						self['test_methods']['append'](m);
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='UnitTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTestMethods'] = $method;
			$pyjs.track.lineno=99;
			$method = $pyjs__bind_method2('isTestMethod', function(method) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					method = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$bool13;
				$pyjs.track={module:'UnitTest', lineno:99};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=99;
				$pyjs.track.lineno=100;
				if ((($bool12=$p['callable']($p['getattr'](self, method))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					$pyjs.track.lineno=101;
					if ((($bool13=$p['op_eq'](method['find']('test'), $constant_int_0)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						$pyjs.track.lineno=102;
						$pyjs.track.lineno=102;
						var $pyjs__ret = true;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				$pyjs.track.lineno=103;
				$pyjs.track.lineno=103;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['method']]);
			$cls_definition['isTestMethod'] = $method;
			$pyjs.track.lineno=105;
			$method = $pyjs__bind_method2('fail', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[3][1];
				var $bool18,has_bugreport,$bool14,$bool15,$bool16,$bool17,$add26,$add29,$add28,title,$add21,$add20,$add22,$add25,$add24,$add27,$add19,fg_colour,$and3,$and4,$add14,$add15,$add16,$add17,$add13,$4,$add18,$3,$cmp5,bg_colour,$cmp6,$add32,$add30,$add31,name_fmt,octothorp,output,$add23;
				$pyjs.track={module:'UnitTest', lineno:105};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=105;
				$pyjs.track.lineno=106;
				self['startTest']();
				$pyjs.track.lineno=107;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tests_failed', (typeof ($add13=$p['getattr'](self, 'tests_failed'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) : $p['setattr'](self, 'tests_failed', (typeof ($add13=$p['getattr'](self, 'tests_failed'))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))); 
				$pyjs.track.lineno=109;
				if ((($bool15=!(($bool14=msg) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14.__nonzero__=='function'?
							$bool14.__nonzero__() :
							(typeof $bool14.__len__=='function'?
								($bool14.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					$pyjs.track.lineno=110;
					msg = 'assertion failed';
				}
				else {
					$pyjs.track.lineno=112;
					msg = $p['str'](msg);
				}
				$pyjs.track.lineno=114;
				octothorp = msg['find']('#');
				$pyjs.track.lineno=115;
				has_bugreport = ((($bool16=$and3=((((($cmp5=octothorp)===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(typeof ($3=msg).__array != 'undefined'?
					((typeof $3.__array[$4=(typeof ($add15=octothorp)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__((typeof ($add15=octothorp)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))))['isdigit']():$and3);
				$pyjs.track.lineno=116;
				if ((($bool17=has_bugreport) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					$pyjs.track.lineno=117;
					name_fmt = 'Known issue';
					$pyjs.track.lineno=118;
					bg_colour = '#ffc000';
					$pyjs.track.lineno=119;
					fg_colour = '#000000';
				}
				else {
					$pyjs.track.lineno=121;
					bg_colour = '#ff8080';
					$pyjs.track.lineno=122;
					fg_colour = '#000000';
					$pyjs.track.lineno=123;
					name_fmt = 'Test failed';
				}
				$pyjs.track.lineno=124;
				output = (typeof ($add23=(typeof ($add21=(typeof ($add19=(typeof ($add17="<table style='padding-left:20px;padding-right:20px;' cellpadding=2 width=100%><tr><td bgcolor='")==typeof ($add18=bg_colour) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($add20="'><font color='") && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)))==typeof ($add22=fg_colour) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)))==typeof ($add24="'>") && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
				$pyjs.track.lineno=125;
				$m['write'](output);
				$pyjs.track.lineno=126;
				title = (typeof ($add27=(typeof ($add25='<b>')==typeof ($add26=self['getNameFmt'](name_fmt)) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)))==typeof ($add28='</b>') && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
				$pyjs.track.lineno=127;
				$m['write']((typeof ($add29=title)==typeof ($add30=msg) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)));
				$pyjs.track.lineno=128;
				output = '</font></td></tr></table>';
				$pyjs.track.lineno=129;
				output = (typeof ($add31=output)==typeof ($add32='\n') && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
				$pyjs.track.lineno=130;
				$m['write'](output);
				$pyjs.track.lineno=131;
				if ((($bool18=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']).__contains__($p['getattr']($m['sys'], 'platform'))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					$pyjs.track.lineno=133;
if (typeof console != 'undefined') {
                if (typeof console.error == 'function') console.error(msg);
                if (typeof console.trace == 'function') console.trace();
            }
				}
				$pyjs.track.lineno=137;
				$pyjs.track.lineno=137;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['msg', null]]);
			$cls_definition['fail'] = $method;
			$pyjs.track.lineno=139;
			$method = $pyjs__bind_method2('startTest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add33,$add34;
				$pyjs.track={module:'UnitTest', lineno:139};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=139;
				$pyjs.track.lineno=140;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tests_completed', (typeof ($add33=$p['getattr'](self, 'tests_completed'))==typeof ($add34=$constant_int_1) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34))) : $p['setattr'](self, 'tests_completed', (typeof ($add33=$p['getattr'](self, 'tests_completed'))==typeof ($add34=$constant_int_1) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['startTest'] = $method;
			$pyjs.track.lineno=142;
			$method = $pyjs__bind_method2('failIf', function(expr, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					expr = arguments[1];
					msg = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[4][1];
				var $bool19;
				$pyjs.track={module:'UnitTest', lineno:142};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=142;
				$pyjs.track.lineno=143;
				self['startTest']();
				$pyjs.track.lineno=144;
				if ((($bool19=expr) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					$pyjs.track.lineno=145;
					$pyjs.track.lineno=145;
					var $pyjs__ret = self['fail'](msg);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['expr'],['msg', null]]);
			$cls_definition['failIf'] = $method;
			$pyjs.track.lineno=147;
			$method = $pyjs__bind_method2('failUnless', function(expr, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					expr = arguments[1];
					msg = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[4][1];
				var $bool21,$bool20,$bool23,$bool22;
				$pyjs.track={module:'UnitTest', lineno:147};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=147;
				$pyjs.track.lineno=148;
				self['startTest']();
				$pyjs.track.lineno=149;
				if ((($bool21=!(($bool20=expr) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20.__nonzero__=='function'?
							$bool20.__nonzero__() :
							(typeof $bool20.__len__=='function'?
								($bool20.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					$pyjs.track.lineno=150;
					if ((($bool23=!(($bool22=msg) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
							false :
							(typeof $bool23=='object'?
								(typeof $bool23.__nonzero__=='function'?
									$bool23.__nonzero__() :
									(typeof $bool23.__len__=='function'?
										($bool23.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=151;
						msg = 'expected True, got False';
					}
					$pyjs.track.lineno=152;
					$pyjs.track.lineno=152;
					var $pyjs__ret = self['fail'](msg);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['expr'],['msg', null]]);
			$cls_definition['failUnless'] = $method;
			$pyjs.track.lineno=154;
			$method = $pyjs__bind_method2('failUnlessEqual', function(first, second, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					first = arguments[1];
					second = arguments[2];
					msg = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[5][1];
				var $add38,$add37,$add36,$bool27,$add35,$bool25,$bool24,$bool26;
				$pyjs.track={module:'UnitTest', lineno:154};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=154;
				$pyjs.track.lineno=155;
				self['startTest']();
				$pyjs.track.lineno=156;
				if ((($bool25=!(($bool24=$p['op_eq'](first, second)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24.__nonzero__=='function'?
							$bool24.__nonzero__() :
							(typeof $bool24.__len__=='function'?
								($bool24.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					$pyjs.track.lineno=157;
					if ((($bool27=!(($bool26=msg) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26.__nonzero__=='function'?
								$bool26.__nonzero__() :
								(typeof $bool26.__len__=='function'?
									($bool26.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
						$pyjs.track.lineno=158;
						msg = (typeof ($add37=(typeof ($add35=$p['repr'](first))==typeof ($add36=' != ') && (typeof $add35=='number'||typeof $add35=='string')?
							$add35+$add36:
							$p['op_add']($add35,$add36)))==typeof ($add38=$p['repr'](second)) && (typeof $add37=='number'||typeof $add37=='string')?
							$add37+$add38:
							$p['op_add']($add37,$add38));
					}
					$pyjs.track.lineno=159;
					$pyjs.track.lineno=159;
					var $pyjs__ret = self['fail'](msg);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['msg', null]]);
			$cls_definition['failUnlessEqual'] = $method;
			$pyjs.track.lineno=161;
			$method = $pyjs__bind_method2('failIfEqual', function(first, second, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					first = arguments[1];
					second = arguments[2];
					msg = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[5][1];
				var $add39,$bool30,$add41,$add40,$add42,$bool29,$bool28;
				$pyjs.track={module:'UnitTest', lineno:161};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=161;
				$pyjs.track.lineno=162;
				self['startTest']();
				$pyjs.track.lineno=163;
				if ((($bool28=$p['op_eq'](first, second)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					$pyjs.track.lineno=164;
					if ((($bool30=!(($bool29=msg) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29.__nonzero__=='function'?
								$bool29.__nonzero__() :
								(typeof $bool29.__len__=='function'?
									($bool29.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
						$pyjs.track.lineno=165;
						msg = (typeof ($add41=(typeof ($add39=$p['repr'](first))==typeof ($add40=' == ') && (typeof $add39=='number'||typeof $add39=='string')?
							$add39+$add40:
							$p['op_add']($add39,$add40)))==typeof ($add42=$p['repr'](second)) && (typeof $add41=='number'||typeof $add41=='string')?
							$add41+$add42:
							$p['op_add']($add41,$add42));
					}
					$pyjs.track.lineno=166;
					$pyjs.track.lineno=166;
					var $pyjs__ret = self['fail'](msg);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['msg', null]]);
			$cls_definition['failIfEqual'] = $method;
			$pyjs.track.lineno=168;
			$method = $pyjs__bind_method2('failUnlessAlmostEqual', function(first, second, places, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					first = arguments[1];
					second = arguments[2];
					places = arguments[3];
					msg = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof places == 'undefined') places=arguments.callee.__args__[5][1];
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[6][1];
				var $add50,$add51,$add52,$add49,$add48,$add47,$add46,$add44,$add43,$bool32,$bool33,$bool31,$sub2,$sub1,$add45;
				$pyjs.track={module:'UnitTest', lineno:168};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=168;
				$pyjs.track.lineno=169;
				self['startTest']();
				$pyjs.track.lineno=170;
				if ((($bool31=!$p['op_eq']($p['round']((typeof ($sub1=second)==typeof ($sub2=first) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)), places), $constant_int_0)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					$pyjs.track.lineno=171;
					if ((($bool33=!(($bool32=msg) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
						$pyjs.track.lineno=172;
						msg = (typeof ($add51=(typeof ($add49=(typeof ($add47=(typeof ($add45=(typeof ($add43=$p['repr'](first))==typeof ($add44=' != ') && (typeof $add43=='number'||typeof $add43=='string')?
							$add43+$add44:
							$p['op_add']($add43,$add44)))==typeof ($add46=$p['repr'](second)) && (typeof $add45=='number'||typeof $add45=='string')?
							$add45+$add46:
							$p['op_add']($add45,$add46)))==typeof ($add48=' within ') && (typeof $add47=='number'||typeof $add47=='string')?
							$add47+$add48:
							$p['op_add']($add47,$add48)))==typeof ($add50=$p['repr'](places)) && (typeof $add49=='number'||typeof $add49=='string')?
							$add49+$add50:
							$p['op_add']($add49,$add50)))==typeof ($add52=' places') && (typeof $add51=='number'||typeof $add51=='string')?
							$add51+$add52:
							$p['op_add']($add51,$add52));
					}
					$pyjs.track.lineno=173;
					$pyjs.track.lineno=173;
					var $pyjs__ret = self['fail'](msg);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['places', $constant_int_7],['msg', null]]);
			$cls_definition['failUnlessAlmostEqual'] = $method;
			$pyjs.track.lineno=175;
			$method = $pyjs__bind_method2('failIfAlmostEqual', function(first, second, places, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					first = arguments[1];
					second = arguments[2];
					places = arguments[3];
					msg = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof places == 'undefined') places=arguments.callee.__args__[5][1];
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[6][1];
				var $add60,$add53,$add54,$add55,$add57,$add58,$add59,$add62,$sub3,$bool36,$add56,$bool34,$bool35,$add61,$sub4;
				$pyjs.track={module:'UnitTest', lineno:175};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=175;
				$pyjs.track.lineno=176;
				self['startTest']();
				$pyjs.track.lineno=177;
				if ((($bool34=$p['op_is']($p['round']((typeof ($sub3=second)==typeof ($sub4=first) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)), places), $constant_int_0)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					$pyjs.track.lineno=178;
					if ((($bool36=!(($bool35=msg) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						$pyjs.track.lineno=179;
						msg = (typeof ($add61=(typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53=$p['repr'](first))==typeof ($add54=' == ') && (typeof $add53=='number'||typeof $add53=='string')?
							$add53+$add54:
							$p['op_add']($add53,$add54)))==typeof ($add56=$p['repr'](second)) && (typeof $add55=='number'||typeof $add55=='string')?
							$add55+$add56:
							$p['op_add']($add55,$add56)))==typeof ($add58=' within ') && (typeof $add57=='number'||typeof $add57=='string')?
							$add57+$add58:
							$p['op_add']($add57,$add58)))==typeof ($add60=$p['repr'](places)) && (typeof $add59=='number'||typeof $add59=='string')?
							$add59+$add60:
							$p['op_add']($add59,$add60)))==typeof ($add62=' places') && (typeof $add61=='number'||typeof $add61=='string')?
							$add61+$add62:
							$p['op_add']($add61,$add62));
					}
					$pyjs.track.lineno=180;
					$pyjs.track.lineno=180;
					var $pyjs__ret = self['fail'](msg);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['first'],['second'],['places', $constant_int_7],['msg', null]]);
			$cls_definition['failIfAlmostEqual'] = $method;
			$pyjs.track.lineno=183;
			$method = $pyjs__bind_method2('assertIn', function(member, container, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					member = arguments[1];
					container = arguments[2];
					msg = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[5][1];
				var $bool37,$bool38,standardMsg;
				$pyjs.track={module:'UnitTest', lineno:183};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=183;
				$pyjs.track.lineno=185;
				if ((($bool37=!container.__contains__(member)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					$pyjs.track.lineno=186;
					standardMsg = $p['sprintf']('%s not found in %s', $p['tuple']([$p['__getslice']($p['repr'](member), 0, $constant_int_80), $p['__getslice']($p['repr'](container), 0, $constant_int_80)]));
					$pyjs.track.lineno=188;
					self['fail'](((($bool38=msg) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38.__nonzero__=='function'?
								$bool38.__nonzero__() :
								(typeof $bool38.__len__=='function'?
									($bool38.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? (msg) : (standardMsg)));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['member'],['container'],['msg', null]]);
			$cls_definition['assertIn'] = $method;
			$pyjs.track.lineno=190;
			$method = $pyjs__bind_method2('assertNotIn', function(member, container, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					member = arguments[1];
					container = arguments[2];
					msg = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[5][1];
				var $bool40,$bool39,standardMsg;
				$pyjs.track={module:'UnitTest', lineno:190};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=190;
				$pyjs.track.lineno=192;
				if ((($bool39=container.__contains__(member)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39.__nonzero__=='function'?
								$bool39.__nonzero__() :
								(typeof $bool39.__len__=='function'?
									($bool39.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=193;
					standardMsg = $p['sprintf']('%s unexpectedly found in %s', $p['tuple']([$p['__getslice']($p['repr'](member), 0, $constant_int_80), $p['__getslice']($p['repr'](container), 0, $constant_int_80)]));
					$pyjs.track.lineno=195;
					self['fail'](((($bool40=msg) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
						false :
						(typeof $bool40=='object'?
							(typeof $bool40.__nonzero__=='function'?
								$bool40.__nonzero__() :
								(typeof $bool40.__len__=='function'?
									($bool40.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? (msg) : (standardMsg)));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['member'],['container'],['msg', null]]);
			$cls_definition['assertNotIn'] = $method;
			$pyjs.track.lineno=198;
			$method = $pyjs__bind_method2('assertRaises', function(excClass, callableObj) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length+1);
				} else {
					var self = arguments[0];
					excClass = arguments[1];
					callableObj = arguments[2];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

					var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof callableObj != 'undefined') {
						if (callableObj !== null && typeof callableObj['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = callableObj;
							callableObj = arguments[3];
						}
					} else 					if (typeof excClass != 'undefined') {
						if (excClass !== null && typeof excClass['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = excClass;
							excClass = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				var $bool41,$pyjs_try_err,excName;
				$pyjs.track={module:'UnitTest', lineno:198};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=198;
				$pyjs.track.lineno=207;
				self['startTest']();
				$pyjs.track.lineno=208;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=209;
					$pyjs_kwargs_call(null, callableObj, args, kwargs, [{}]);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=213;
						if ((($bool41=$p['hasattr'](excClass, '__name__')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
								false :
								(typeof $bool41=='object'?
									(typeof $bool41.__nonzero__=='function'?
										$bool41.__nonzero__() :
										(typeof $bool41.__len__=='function'?
											($bool41.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=214;
							excName = $p['getattr'](excClass, '__name__');
						}
						else {
							$pyjs.track.lineno=216;
							excName = $p['str'](excClass);
						}
						$pyjs.track.lineno=217;
						self['fail']($p['sprintf']('%s not raised', excName));
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='UnitTest';
						if (($pyjs_try_err_name == excClass.__name__)||$p['_isinstance']($pyjs_try_err,excClass)) {
							$pyjs.track.lineno=211;
							$pyjs.track.lineno=211;
							var $pyjs__ret = null;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['excClass'],['callableObj']]);
			$cls_definition['assertRaises'] = $method;
			$pyjs.track.lineno=219;
			$method = $pyjs__bind_method2('displayStats', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e28cdfce3446dbb5491b93aab49d366a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add83,$add82,$add81,$add80,$add84,fg_colour,$add65,$add64,$add67,$add66,$add63,$add69,$add68,tests_passed,$sub6,$sub5,$bool45,$bool44,$bool43,$bool42,$add77,$add76,bg_colour,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,output;
				$pyjs.track={module:'UnitTest', lineno:219};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UnitTest';
				$pyjs.track.lineno=219;
				$pyjs.track.lineno=220;
				if ((($bool42=$p['getattr'](self, 'tests_failed')) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
						false :
						(typeof $bool42=='object'?
							(typeof $bool42.__nonzero__=='function'?
								$bool42.__nonzero__() :
								(typeof $bool42.__len__=='function'?
									($bool42.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=221;
					bg_colour = '#ff0000';
					$pyjs.track.lineno=222;
					fg_colour = '#ffffff';
				}
				else {
					$pyjs.track.lineno=224;
					bg_colour = '#00ff00';
					$pyjs.track.lineno=225;
					fg_colour = '#000000';
				}
				$pyjs.track.lineno=227;
				tests_passed = (typeof ($sub5=$p['getattr'](self, 'tests_completed'))==typeof ($sub6=$p['getattr'](self, 'tests_failed')) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				$pyjs.track.lineno=228;
				if ((($bool43=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']).__contains__($p['getattr']($m['sys'], 'platform'))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
						false :
						(typeof $bool43=='object'?
							(typeof $bool43.__nonzero__=='function'?
								$bool43.__nonzero__() :
								(typeof $bool43.__len__=='function'?
									($bool43.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=229;
					output = (typeof ($add69=(typeof ($add67=(typeof ($add65=(typeof ($add63="<table cellpadding=4 width=100%><tr><td bgcolor='")==typeof ($add64=bg_colour) && (typeof $add63=='number'||typeof $add63=='string')?
						$add63+$add64:
						$p['op_add']($add63,$add64)))==typeof ($add66="'><font face='arial' size=4 color='") && (typeof $add65=='number'||typeof $add65=='string')?
						$add65+$add66:
						$p['op_add']($add65,$add66)))==typeof ($add68=fg_colour) && (typeof $add67=='number'||typeof $add67=='string')?
						$add67+$add68:
						$p['op_add']($add67,$add68)))==typeof ($add70="'><b>") && (typeof $add69=='number'||typeof $add69=='string')?
						$add69+$add70:
						$p['op_add']($add69,$add70));
				}
				else {
					$pyjs.track.lineno=231;
					output = '';
				}
				$pyjs.track.lineno=232;
				output = (typeof ($add77=output)==typeof ($add78=(typeof ($add75=(typeof ($add73=(typeof ($add71=self['getNameFmt']())==typeof ($add72=$p['sprintf']('Passed %d ', tests_passed)) && (typeof $add71=='number'||typeof $add71=='string')?
					$add71+$add72:
					$p['op_add']($add71,$add72)))==typeof ($add74=$p['sprintf']('/ %d', $p['getattr'](self, 'tests_completed'))) && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					$p['op_add']($add73,$add74)))==typeof ($add76=' tests') && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					$p['op_add']($add75,$add76))) && (typeof $add77=='number'||typeof $add77=='string')?
					$add77+$add78:
					$p['op_add']($add77,$add78));
				$pyjs.track.lineno=234;
				if ((($bool44=$p['getattr'](self, 'tests_failed')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44.__nonzero__=='function'?
								$bool44.__nonzero__() :
								(typeof $bool44.__len__=='function'?
									($bool44.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=235;
					output = (typeof ($add79=output)==typeof ($add80=$p['sprintf'](' (%d failed)', $p['getattr'](self, 'tests_failed'))) && (typeof $add79=='number'||typeof $add79=='string')?
						$add79+$add80:
						$p['op_add']($add79,$add80));
				}
				$pyjs.track.lineno=237;
				if ((($bool45=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']).__contains__($p['getattr']($m['sys'], 'platform'))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
						false :
						(typeof $bool45=='object'?
							(typeof $bool45.__nonzero__=='function'?
								$bool45.__nonzero__() :
								(typeof $bool45.__len__=='function'?
									($bool45.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=238;
					output = (typeof ($add81=output)==typeof ($add82='</b></font></td></tr></table>') && (typeof $add81=='number'||typeof $add81=='string')?
						$add81+$add82:
						$p['op_add']($add81,$add82));
				}
				else {
					$pyjs.track.lineno=240;
					output = (typeof ($add83=output)==typeof ($add84='\n') && (typeof $add83=='number'||typeof $add83=='string')?
						$add83+$add84:
						$p['op_add']($add83,$add84));
				}
				$pyjs.track.lineno=242;
				$m['write'](output);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['displayStats'] = $method;
			$pyjs.track.lineno=13;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('UnitTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end UnitTest */


/* end module: UnitTest */


/*
PYJS_DEPS: ['write.write', 'write', 'write.writebr', 'sys', 'pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer']
*/
