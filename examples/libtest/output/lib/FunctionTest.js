/* start module: FunctionTest */
$pyjs.loaded_modules['FunctionTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['FunctionTest'].__was_initialized__) return $pyjs.loaded_modules['FunctionTest'];
	var $m = $pyjs.loaded_modules["FunctionTest"];
	$m.__repr__ = function() { return "<module: FunctionTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'FunctionTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'FunctionTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'FunctionTest.py, line 3:\n    from ClassTest import PassMeAClass';
		$m.__track_lines__[4] = 'FunctionTest.py, line 4:\n    from ClassTest import ExampleChildClass';
		$m.__track_lines__[5] = 'FunctionTest.py, line 5:\n    from ClassTest import ExampleMultiSuperclassParent1';
		$m.__track_lines__[6] = 'FunctionTest.py, line 6:\n    import Factory2';
		$m.__track_lines__[8] = 'FunctionTest.py, line 8:\n    import imports.decors # must be in this form';
		$m.__track_lines__[9] = 'FunctionTest.py, line 9:\n    import imports.enum.Late';
		$m.__track_lines__[11] = 'FunctionTest.py, line 11:\n    class Handler:';
		$m.__track_lines__[13] = 'FunctionTest.py, line 13:\n    def __init__(self, x):';
		$m.__track_lines__[14] = 'FunctionTest.py, line 14:\n    self._x = x';
		$m.__track_lines__[16] = 'FunctionTest.py, line 16:\n    def handle(self, y):';
		$m.__track_lines__[17] = 'FunctionTest.py, line 17:\n    return self._x is y';
		$m.__track_lines__[19] = 'FunctionTest.py, line 19:\n    class Callable(object):';
		$m.__track_lines__[20] = 'FunctionTest.py, line 20:\n    def __call__(self):';
		$m.__track_lines__[21] = 'FunctionTest.py, line 21:\n    return 5';
		$m.__track_lines__[23] = 'FunctionTest.py, line 23:\n    def aProcedure():';
		$m.__track_lines__[24] = 'FunctionTest.py, line 24:\n    x = 1';
		$m.__track_lines__[25] = 'FunctionTest.py, line 25:\n    if x is 2:';
		$m.__track_lines__[27] = 'FunctionTest.py, line 27:\n    return "something"';
		$m.__track_lines__[30] = 'FunctionTest.py, line 30:\n    def aFunctionWithOnlyDoc():';
		$m.__track_lines__[33] = 'FunctionTest.py, line 33:\n    def aFunctionReturningNone():';
		$m.__track_lines__[34] = 'FunctionTest.py, line 34:\n    return None';
		$m.__track_lines__[36] = 'FunctionTest.py, line 36:\n    def aFunctionReturningParam(param):';
		$m.__track_lines__[37] = 'FunctionTest.py, line 37:\n    return param';
		$m.__track_lines__[39] = 'FunctionTest.py, line 39:\n    def aFunctionReturningFunction():';
		$m.__track_lines__[40] = 'FunctionTest.py, line 40:\n    return aFunctionReturningParam';
		$m.__track_lines__[42] = 'FunctionTest.py, line 42:\n    def aFunctionReturningGlobalX1():';
		$m.__track_lines__[43] = 'FunctionTest.py, line 43:\n    return x';
		$m.__track_lines__[45] = 'FunctionTest.py, line 45:\n    def aFunctionReturningGlobalX2():';
		$m.__track_lines__[46] = 'FunctionTest.py, line 46:\n    return x';
		$m.__track_lines__[48] = 'FunctionTest.py, line 48:\n    def aFunctionReturningGlobalX3():';
		$m.__track_lines__[49] = 'FunctionTest.py, line 49:\n    a = x';
		$m.__track_lines__[50] = 'FunctionTest.py, line 50:\n    return a';
		$m.__track_lines__[52] = 'FunctionTest.py, line 52:\n    def aFunctionReturningLocalX():';
		$m.__track_lines__[53] = "FunctionTest.py, line 53:\n    x = 'local test'";
		$m.__track_lines__[54] = 'FunctionTest.py, line 54:\n    return x';
		$m.__track_lines__[56] = 'FunctionTest.py, line 56:\n    def aFunctionReturningArgX(x):';
		$m.__track_lines__[57] = 'FunctionTest.py, line 57:\n    return x';
		$m.__track_lines__[59] = "FunctionTest.py, line 59:\n    x = 'global test'";
		$m.__track_lines__[61] = "FunctionTest.py, line 61:\n    name = 'mapping-test'";
		$m.__track_lines__[62] = 'FunctionTest.py, line 62:\n    def call(default, arguments, this, label=None):';
		$m.__track_lines__[63] = 'FunctionTest.py, line 63:\n    return (name, default, arguments, this, label)';
		$m.__track_lines__[65] = 'FunctionTest.py, line 65:\n    def functionDefaults(s = "", l = []):';
		$m.__track_lines__[66] = 'FunctionTest.py, line 66:\n    n = len(l)';
		$m.__track_lines__[67] = 'FunctionTest.py, line 67:\n    s = s + "%d" % n';
		$m.__track_lines__[68] = 'FunctionTest.py, line 68:\n    l.append(n)';
		$m.__track_lines__[69] = 'FunctionTest.py, line 69:\n    return s, l';
		$m.__track_lines__[71] = 'FunctionTest.py, line 71:\n    class FunctionTest(UnitTest):';
		$m.__track_lines__[73] = 'FunctionTest.py, line 73:\n    def testLambda(self):';
		$m.__track_lines__[74] = 'FunctionTest.py, line 74:\n    f = lambda x: x';
		$m.__track_lines__[75] = 'FunctionTest.py, line 75:\n    self.assertEqual(f(1), 1)';
		$m.__track_lines__[76] = 'FunctionTest.py, line 76:\n    f = lambda x=1: x';
		$m.__track_lines__[77] = 'FunctionTest.py, line 77:\n    self.assertEqual(f(), 1)';
		$m.__track_lines__[78] = 'FunctionTest.py, line 78:\n    self.assertEqual(f(2), 2)';
		$m.__track_lines__[80] = 'FunctionTest.py, line 80:\n    f = lambda x, y: x*y';
		$m.__track_lines__[81] = 'FunctionTest.py, line 81:\n    self.assertEqual(f(2,3), 6)';
		$m.__track_lines__[82] = 'FunctionTest.py, line 82:\n    f = lambda x, y=4: x*y';
		$m.__track_lines__[83] = 'FunctionTest.py, line 83:\n    self.assertEqual(f(2), 8)';
		$m.__track_lines__[84] = 'FunctionTest.py, line 84:\n    h = Handler(5)';
		$m.__track_lines__[85] = 'FunctionTest.py, line 85:\n    f = lambda x: h.handle(x)';
		$m.__track_lines__[86] = 'FunctionTest.py, line 86:\n    self.assertTrue(f(5))';
		$m.__track_lines__[87] = 'FunctionTest.py, line 87:\n    self.assertFalse(f(4))';
		$m.__track_lines__[89] = 'FunctionTest.py, line 89:\n    f = lambda a, b=1, **kw: (a,b,kw)';
		$m.__track_lines__[90] = 'FunctionTest.py, line 90:\n    v = f(b = 2, c = 3, a = 1)';
		$m.__track_lines__[91] = 'FunctionTest.py, line 91:\n    self.assertEqual(v[0], 1)';
		$m.__track_lines__[92] = 'FunctionTest.py, line 92:\n    self.assertEqual(v[1], 2)';
		$m.__track_lines__[93] = "FunctionTest.py, line 93:\n    self.assertEqual(v[2]['c'], 3)";
		$m.__track_lines__[95] = 'FunctionTest.py, line 95:\n    f = lambda a, b=1, *args: (a, b, args)';
		$m.__track_lines__[96] = 'FunctionTest.py, line 96:\n    v = f(1,2,3,4)';
		$m.__track_lines__[97] = 'FunctionTest.py, line 97:\n    self.assertEqual(v[2][0], 3)';
		$m.__track_lines__[98] = 'FunctionTest.py, line 98:\n    self.assertEqual(v[2][1], 4)';
		$m.__track_lines__[100] = 'FunctionTest.py, line 100:\n    try:';
		$m.__track_lines__[101] = 'FunctionTest.py, line 101:\n    class ClassWithLambdas1:';
		$m.__track_lines__[102] = 'FunctionTest.py, line 102:\n    f1 = [lambda *args: args[0]]';
		$m.__track_lines__[104] = 'FunctionTest.py, line 104:\n    self.fail("issue #385 - lambda in class definition")';
		$m.__track_lines__[106] = 'FunctionTest.py, line 106:\n    c = ClassWithLambdas1()';
		$m.__track_lines__[107] = "FunctionTest.py, line 107:\n    self.assertEqual(c.f1[0](1), 1, 'issue #385 - lambda function called as bound method')";
		$m.__track_lines__[109] = 'FunctionTest.py, line 109:\n    try:';
		$m.__track_lines__[110] = 'FunctionTest.py, line 110:\n    class ClassWithLambdas2:';
		$m.__track_lines__[111] = 'FunctionTest.py, line 111:\n    f2 = lambda *args: args[0]';
		$m.__track_lines__[113] = 'FunctionTest.py, line 113:\n    self.fail("issue #385 - lambda in class definition")';
		$m.__track_lines__[115] = 'FunctionTest.py, line 115:\n    c = ClassWithLambdas2()';
		$m.__track_lines__[116] = "FunctionTest.py, line 116:\n    self.assertEqual(c.f2(1), c, 'issue #385 - bound method lambda called as function')";
		$m.__track_lines__[118] = 'FunctionTest.py, line 118:\n    def test_callable(self):';
		$m.__track_lines__[119] = 'FunctionTest.py, line 119:\n    try:';
		$m.__track_lines__[120] = 'FunctionTest.py, line 120:\n    self.assertEqual(Callable()(), 5)';
		$m.__track_lines__[122] = 'FunctionTest.py, line 122:\n    self.fail("Bug #572 Callable()() __call__ not supported")';
		$m.__track_lines__[123] = 'FunctionTest.py, line 123:\n    self.assertTrue(callable(Callable))';
		$m.__track_lines__[125] = 'FunctionTest.py, line 124:\n    self.assertTrue( ... callable(Callable()),';
		$m.__track_lines__[129] = 'FunctionTest.py, line 129:\n    def testProcedure(self):';
		$m.__track_lines__[130] = 'FunctionTest.py, line 130:\n    self.assertTrue(aFunctionReturningNone() is None,';
		$m.__track_lines__[132] = 'FunctionTest.py, line 132:\n    self.assertTrue(aProcedure() is None,';
		$m.__track_lines__[135] = 'FunctionTest.py, line 135:\n    def testVariableFunction(self):';
		$m.__track_lines__[136] = 'FunctionTest.py, line 136:\n    self.assertEqual((aFunctionReturningParam)("foo"), "foo")';
		$m.__track_lines__[137] = 'FunctionTest.py, line 137:\n    self.assertEqual(aFunctionReturningFunction()("foo"), "foo")';
		$m.__track_lines__[139] = 'FunctionTest.py, line 139:\n    def testLookup(self):';
		$m.__track_lines__[140] = "FunctionTest.py, line 140:\n    expected_result1 = 'global test'";
		$m.__track_lines__[141] = "FunctionTest.py, line 141:\n    expected_result2 = 'local test'";
		$m.__track_lines__[142] = 'FunctionTest.py, line 142:\n    self.assertEqual(aFunctionReturningGlobalX1(), expected_result1)';
		$m.__track_lines__[143] = 'FunctionTest.py, line 143:\n    self.assertEqual(aFunctionReturningGlobalX2(), expected_result1)';
		$m.__track_lines__[144] = 'FunctionTest.py, line 144:\n    self.assertEqual(aFunctionReturningGlobalX3(), expected_result1)';
		$m.__track_lines__[145] = 'FunctionTest.py, line 145:\n    self.assertEqual(aFunctionReturningLocalX(), expected_result2)';
		$m.__track_lines__[146] = "FunctionTest.py, line 146:\n    self.assertEqual(aFunctionReturningArgX('test'), 'test')";
		$m.__track_lines__[148] = 'FunctionTest.py, line 148:\n    def testLookupLate(self):';
		$m.__track_lines__[149] = "FunctionTest.py, line 149:\n    self.assertEqual(late_global, 'late_global')";
		$m.__track_lines__[151] = 'FunctionTest.py, line 151:\n    def local_lookup1():';
		$m.__track_lines__[152] = "FunctionTest.py, line 152:\n    self.assertEqual(late_local, 'late_local')";
		$m.__track_lines__[153] = 'FunctionTest.py, line 153:\n    self.assertTrue(callable(local_lookup2))';
		$m.__track_lines__[154] = "FunctionTest.py, line 154:\n    self.assertEqual(local_lookup2(), 'late_local')";
		$m.__track_lines__[155] = 'FunctionTest.py, line 155:\n    try:';
		$m.__track_lines__[156] = 'FunctionTest.py, line 156:\n    local_lookup3()';
		$m.__track_lines__[157] = 'FunctionTest.py, line 157:\n    self.fail("lookup3")';
		$m.__track_lines__[159] = 'FunctionTest.py, line 159:\n    self.assertTrue(True)';
		$m.__track_lines__[161] = 'FunctionTest.py, line 161:\n    def local_lookup2():';
		$m.__track_lines__[162] = 'FunctionTest.py, line 162:\n    return late_local';
		$m.__track_lines__[164] = 'FunctionTest.py, line 164:\n    def local_lookup3():';
		$m.__track_lines__[165] = 'FunctionTest.py, line 165:\n    raise NotImplementedError';
		$m.__track_lines__[168] = "FunctionTest.py, line 168:\n    late_local = 'late_local'";
		$m.__track_lines__[169] = 'FunctionTest.py, line 169:\n    local_lookup1()';
		$m.__track_lines__[171] = 'FunctionTest.py, line 171:\n    late = imports.enum.Late.getLate()';
		$m.__track_lines__[172] = "FunctionTest.py, line 172:\n    self.assertEqual(late.value, 'late')";
		$m.__track_lines__[174] = 'FunctionTest.py, line 174:\n    def testNameMapping(self):';
		$m.__track_lines__[175] = 'FunctionTest.py, line 175:\n    r = call(1, 2, this=3, label=4)';
		$m.__track_lines__[176] = "FunctionTest.py, line 176:\n    self.assertEqual(r[0], 'mapping-test')";
		$m.__track_lines__[177] = 'FunctionTest.py, line 177:\n    self.assertEqual(r[1], 1)';
		$m.__track_lines__[178] = 'FunctionTest.py, line 178:\n    self.assertEqual(r[2], 2)';
		$m.__track_lines__[179] = 'FunctionTest.py, line 179:\n    self.assertEqual(r[3], 3)';
		$m.__track_lines__[180] = 'FunctionTest.py, line 180:\n    self.assertEqual(r[4], 4)';
		$m.__track_lines__[181] = 'FunctionTest.py, line 181:\n    try:';
		$m.__track_lines__[182] = "FunctionTest.py, line 182:\n    self.assertEqual(Text('foo'), 'Text: foo')";
		$m.__track_lines__[184] = 'FunctionTest.py, line 184:\n    self.fail("Bug #574: javascript keywords")';
		$m.__track_lines__[186] = 'FunctionTest.py, line 186:\n    def testFactory(self):';
		$m.__track_lines__[188] = 'FunctionTest.py, line 188:\n    Factory2.gregister("passme", PassMeAClass)';
		$m.__track_lines__[189] = 'FunctionTest.py, line 189:\n    Factory2.gregister("exchild", ExampleChildClass)';
		$m.__track_lines__[190] = 'FunctionTest.py, line 190:\n    Factory2.gregister("mscp1", ExampleMultiSuperclassParent1)';
		$m.__track_lines__[192] = 'FunctionTest.py, line 192:\n    pmc = Factory2.ggetObject("passme")';
		$m.__track_lines__[193] = 'FunctionTest.py, line 193:\n    self.assertEqual(pmc.foo(), "foo in PassMeAClass")';
		$m.__track_lines__[195] = 'FunctionTest.py, line 195:\n    try:';
		$m.__track_lines__[196] = 'FunctionTest.py, line 196:\n    pmc = Factory2.ggetObject("mscp1", 5)';
		$m.__track_lines__[198] = 'FunctionTest.py, line 198:\n    self.assertEqual(False, True, "Exception indicates bug in compiler: \'Error: uncaught exception: ExampleMultiSuperclassParent1() arguments after ** must be a dictionary 5\'")';
		$m.__track_lines__[200] = 'FunctionTest.py, line 200:\n    self.assertEqual(pmc.x, 5)';
		$m.__track_lines__[201] = 'FunctionTest.py, line 201:\n    try:';
		$m.__track_lines__[202] = 'FunctionTest.py, line 202:\n    pmc = Factory2.ggetObject("exchild", 5, 7) # 5 is ignored';
		$m.__track_lines__[204] = 'FunctionTest.py, line 204:\n    self.assertEqual(False, True, "Exception indicates bug in compiler: \'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7\'")';
		$m.__track_lines__[206] = 'FunctionTest.py, line 206:\n    self.assertEqual(pmc.prop_a, 1)';
		$m.__track_lines__[207] = 'FunctionTest.py, line 207:\n    self.assertEqual(pmc.prop_b, 7)';
		$m.__track_lines__[209] = 'FunctionTest.py, line 209:\n    def testSliceFunc(self):';
		$m.__track_lines__[210] = 'FunctionTest.py, line 210:\n    s = "123 "';
		$m.__track_lines__[211] = 'FunctionTest.py, line 211:\n    s = s[1:].rstrip()';
		$m.__track_lines__[212] = 'FunctionTest.py, line 212:\n    self.assertEqual(s, "23")';
		$m.__track_lines__[214] = 'FunctionTest.py, line 214:\n    def testFunctionDefaults(self):';
		$m.__track_lines__[215] = 'FunctionTest.py, line 215:\n    s, l = functionDefaults()';
		$m.__track_lines__[216] = "FunctionTest.py, line 216:\n    self.assertEqual(s, '0')";
		$m.__track_lines__[217] = 'FunctionTest.py, line 217:\n    self.assertTrue(l == [0], "First mutable default mismatch")';
		$m.__track_lines__[219] = 'FunctionTest.py, line 219:\n    s, l = functionDefaults()';
		$m.__track_lines__[221] = 'FunctionTest.py, line 221:\n    self.assertTrue(l == [0, 1], "Second mutable default mismatch bug #214")';
		$m.__track_lines__[223] = 'FunctionTest.py, line 223:\n    inittest = 1';
		$m.__track_lines__[224] = 'FunctionTest.py, line 224:\n    def f(inittest = inittest):';
		$m.__track_lines__[225] = 'FunctionTest.py, line 225:\n    return inittest';
		$m.__track_lines__[226] = 'FunctionTest.py, line 226:\n    self.assertEqual(f(), inittest)';
		$m.__track_lines__[228] = 'FunctionTest.py, line 228:\n    def testKwargs(self):';
		$m.__track_lines__[229] = 'FunctionTest.py, line 229:\n    def f(**kwargs):';
		$m.__track_lines__[230] = 'FunctionTest.py, line 230:\n    return kwargs';
		$m.__track_lines__[232] = 'FunctionTest.py, line 232:\n    self.assertEqual(f(), {})';
		$m.__track_lines__[233] = 'FunctionTest.py, line 233:\n    self.assertEqual(f(a=1), dict(a=1))';
		$m.__track_lines__[235] = 'FunctionTest.py, line 235:\n    def testFunctionDecorating(self):';
		$m.__track_lines__[236] = 'FunctionTest.py, line 236:\n    log = []';
		$m.__track_lines__[237] = 'FunctionTest.py, line 237:\n    def deco1(f):';
		$m.__track_lines__[238] = 'FunctionTest.py, line 238:\n    def fn(*args, **kwargs):';
		$m.__track_lines__[239] = 'FunctionTest.py, line 239:\n    log.append("deco1 begin")';
		$m.__track_lines__[240] = 'FunctionTest.py, line 240:\n    res = f(*args, **kwargs)';
		$m.__track_lines__[241] = 'FunctionTest.py, line 241:\n    log.append("deco1 end")';
		$m.__track_lines__[242] = 'FunctionTest.py, line 242:\n    return res';
		$m.__track_lines__[243] = 'FunctionTest.py, line 243:\n    return fn';
		$m.__track_lines__[245] = 'FunctionTest.py, line 245:\n    def deco2(f):';
		$m.__track_lines__[246] = 'FunctionTest.py, line 246:\n    def fn(*args, **kwargs):';
		$m.__track_lines__[247] = 'FunctionTest.py, line 247:\n    log.append("deco2 begin")';
		$m.__track_lines__[248] = 'FunctionTest.py, line 248:\n    res = f(*args, **kwargs)';
		$m.__track_lines__[249] = 'FunctionTest.py, line 249:\n    log.append("deco2 end")';
		$m.__track_lines__[250] = 'FunctionTest.py, line 250:\n    return res';
		$m.__track_lines__[251] = 'FunctionTest.py, line 251:\n    return fn';
		$m.__track_lines__[254] = 'FunctionTest.py, line 253:\n    @deco1 ... def fn1(a, b = 0):';
		$m.__track_lines__[255] = 'FunctionTest.py, line 255:\n    return a, b';
		$m.__track_lines__[259] = 'FunctionTest.py, line 257:\n    @deco1 ... def fn2(a, b = 0):';
		$m.__track_lines__[260] = 'FunctionTest.py, line 260:\n    return a, b';
		$m.__track_lines__[262] = 'FunctionTest.py, line 262:\n    res = fn1(1,2)';
		$m.__track_lines__[263] = 'FunctionTest.py, line 263:\n    self.assertEqual(res[0], 1)';
		$m.__track_lines__[264] = 'FunctionTest.py, line 264:\n    self.assertEqual(res[1], 2)';
		$m.__track_lines__[265] = 'FunctionTest.py, line 265:\n    self.assertEqual(len(log), 2)';
		$m.__track_lines__[266] = 'FunctionTest.py, line 266:\n    self.assertEqual(log[0], "deco1 begin")';
		$m.__track_lines__[267] = 'FunctionTest.py, line 267:\n    self.assertEqual(log[1], "deco1 end")';
		$m.__track_lines__[269] = 'FunctionTest.py, line 269:\n    log = []';
		$m.__track_lines__[270] = 'FunctionTest.py, line 270:\n    res = fn2(a=3)';
		$m.__track_lines__[271] = 'FunctionTest.py, line 271:\n    self.assertEqual(res[0], 3)';
		$m.__track_lines__[272] = 'FunctionTest.py, line 272:\n    self.assertEqual(res[1], 0)';
		$m.__track_lines__[273] = 'FunctionTest.py, line 273:\n    self.assertEqual(len(log), 4)';
		$m.__track_lines__[274] = 'FunctionTest.py, line 274:\n    self.assertEqual(log[0], "deco1 begin")';
		$m.__track_lines__[275] = 'FunctionTest.py, line 275:\n    self.assertEqual(log[1], "deco2 begin")';
		$m.__track_lines__[276] = 'FunctionTest.py, line 276:\n    self.assertEqual(log[2], "deco2 end")';
		$m.__track_lines__[277] = 'FunctionTest.py, line 277:\n    self.assertEqual(log[3], "deco1 end")';
		$m.__track_lines__[280] = 'FunctionTest.py, line 279:\n    @imports.decors.othermoduledeco1 ... def fn3(x):';
		$m.__track_lines__[281] = 'FunctionTest.py, line 281:\n    return "b"';
		$m.__track_lines__[283] = 'FunctionTest.py, line 283:\n    self.assertEqual(fn3("b"), "abc")';
		$m.__track_lines__[285] = 'FunctionTest.py, line 285:\n    def shiftdecorator(si):';
		$m.__track_lines__[286] = 'FunctionTest.py, line 286:\n    def wrapper(fn):';
		$m.__track_lines__[287] = 'FunctionTest.py, line 287:\n    def decorated(*args, **kw):';
		$m.__track_lines__[288] = 'FunctionTest.py, line 288:\n    return fn(*args, **kw) + si';
		$m.__track_lines__[289] = 'FunctionTest.py, line 289:\n    return decorated';
		$m.__track_lines__[290] = 'FunctionTest.py, line 290:\n    return wrapper';
		$m.__track_lines__[292] = 'FunctionTest.py, line 292:\n    def fn4(v):';
		$m.__track_lines__[293] = 'FunctionTest.py, line 293:\n    return v';
		$m.__track_lines__[296] = 'FunctionTest.py, line 295:\n    @shiftdecorator(1) ... def fn4d1(v):';
		$m.__track_lines__[297] = 'FunctionTest.py, line 297:\n    return v';
		$m.__track_lines__[299] = 'FunctionTest.py, line 298:\n    @shiftdecorator(2) ... def fn4d2(v):';
		$m.__track_lines__[300] = 'FunctionTest.py, line 300:\n    return v';
		$m.__track_lines__[301] = 'FunctionTest.py, line 301:\n    fn4d3 = shiftdecorator(2)(fn4)';
		$m.__track_lines__[303] = 'FunctionTest.py, line 303:\n    self.assertEqual(fn4d1(1), 2)';
		$m.__track_lines__[304] = 'FunctionTest.py, line 304:\n    self.assertEqual(fn4d2(1), 3)';
		$m.__track_lines__[305] = 'FunctionTest.py, line 305:\n    self.assertEqual(fn4d3(1), 3)';
		$m.__track_lines__[307] = 'FunctionTest.py, line 307:\n    def testTopLevelContionalFunction(self):';
		$m.__track_lines__[308] = 'FunctionTest.py, line 308:\n    self.assertEqual(imports.conditional_func(), "overridden")';
		$m.__track_lines__[310] = "FunctionTest.py, line 310:\n    late_global = 'late_global'";
		$m.__track_lines__[313] = 'FunctionTest.py, line 313:\n    def Text(x):';
		$m.__track_lines__[314] = 'FunctionTest.py, line 314:\n    return str("Text: %s" % x)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='FunctionTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['PassMeAClass'] = $p['___import___']('ClassTest.PassMeAClass', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ExampleChildClass'] = $p['___import___']('ClassTest.ExampleChildClass', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ExampleMultiSuperclassParent1'] = $p['___import___']('ClassTest.ExampleMultiSuperclassParent1', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory2'] = $p['___import___']('Factory2', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['imports'] = $p['___import___']('imports.decors', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['imports'] = $p['___import___']('imports.enum.Late', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=11;
		$m['Handler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'FunctionTest';
			$cls_definition.__md5__ = '89e29035571197b658ee2a4cd0bf2653';
			$pyjs.track.lineno=13;
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
					if (self.prototype.__md5__ !== '89e29035571197b658ee2a4cd0bf2653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'FunctionTest', lineno:13};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=13;
				$pyjs.track.lineno=14;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', x) : $p['setattr'](self, '_x', x); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=16;
			$method = $pyjs__bind_method2('handle', function(y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					y = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '89e29035571197b658ee2a4cd0bf2653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'FunctionTest', lineno:16};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=17;
				$pyjs.track.lineno=17;
				var $pyjs__ret = $p['op_is']($p['getattr'](self, '_x'), y);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['y']]);
			$cls_definition['handle'] = $method;
			$pyjs.track.lineno=11;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Handler', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=19;
		$m['Callable'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'FunctionTest';
			$cls_definition.__md5__ = '1f2c902acd3a6692c8a936c5bcfae1a8';
			$pyjs.track.lineno=20;
			$method = $pyjs__bind_method2('__call__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1f2c902acd3a6692c8a936c5bcfae1a8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'FunctionTest', lineno:20};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=20;
				$pyjs.track.lineno=21;
				$pyjs.track.lineno=21;
				var $pyjs__ret = $constant_int_5;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__call__'] = $method;
			$pyjs.track.lineno=19;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Callable', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=23;
		$m['aProcedure'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var x,$bool1;
			$pyjs.track={module:'FunctionTest',lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=24;
			x = $constant_int_1;
			$pyjs.track.lineno=25;
			if ((($bool1=$p['op_is'](x, $constant_int_2)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=27;
				var $pyjs__ret = 'something';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['aProcedure'].__name__ = 'aProcedure';

		$m['aProcedure'].__bind_type__ = 0;
		$m['aProcedure'].__args__ = [null,null];
		$pyjs.track.lineno=30;
		$m['aFunctionWithOnlyDoc'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'FunctionTest',lineno:30};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=30;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['aFunctionWithOnlyDoc'].__name__ = 'aFunctionWithOnlyDoc';

		$m['aFunctionWithOnlyDoc'].__bind_type__ = 0;
		$m['aFunctionWithOnlyDoc'].__args__ = [null,null];
		$pyjs.track.lineno=33;
		$m['aFunctionReturningNone'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'FunctionTest',lineno:33};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=33;
			$pyjs.track.lineno=34;
			$pyjs.track.lineno=34;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aFunctionReturningNone'].__name__ = 'aFunctionReturningNone';

		$m['aFunctionReturningNone'].__bind_type__ = 0;
		$m['aFunctionReturningNone'].__args__ = [null,null];
		$pyjs.track.lineno=36;
		$m['aFunctionReturningParam'] = function(param) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'FunctionTest',lineno:36};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=36;
			$pyjs.track.lineno=37;
			$pyjs.track.lineno=37;
			var $pyjs__ret = param;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aFunctionReturningParam'].__name__ = 'aFunctionReturningParam';

		$m['aFunctionReturningParam'].__bind_type__ = 0;
		$m['aFunctionReturningParam'].__args__ = [null,null,['param']];
		$pyjs.track.lineno=39;
		$m['aFunctionReturningFunction'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'FunctionTest',lineno:39};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=39;
			$pyjs.track.lineno=40;
			$pyjs.track.lineno=40;
			var $pyjs__ret = $m['aFunctionReturningParam'];
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aFunctionReturningFunction'].__name__ = 'aFunctionReturningFunction';

		$m['aFunctionReturningFunction'].__bind_type__ = 0;
		$m['aFunctionReturningFunction'].__args__ = [null,null];
		$pyjs.track.lineno=42;
		$m['aFunctionReturningGlobalX1'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'FunctionTest',lineno:42};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=43;
			$pyjs.track.lineno=43;
			var $pyjs__ret = (typeof x == "undefined"?$m.x:x);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aFunctionReturningGlobalX1'].__name__ = 'aFunctionReturningGlobalX1';

		$m['aFunctionReturningGlobalX1'].__bind_type__ = 0;
		$m['aFunctionReturningGlobalX1'].__args__ = [null,null];
		$pyjs.track.lineno=45;
		$m['aFunctionReturningGlobalX2'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'FunctionTest',lineno:45};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=45;
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=46;
			var $pyjs__ret = (typeof x == "undefined"?$m.x:x);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aFunctionReturningGlobalX2'].__name__ = 'aFunctionReturningGlobalX2';

		$m['aFunctionReturningGlobalX2'].__bind_type__ = 0;
		$m['aFunctionReturningGlobalX2'].__args__ = [null,null];
		$pyjs.track.lineno=48;
		$m['aFunctionReturningGlobalX3'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var a;
			$pyjs.track={module:'FunctionTest',lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=49;
			a = (typeof x == "undefined"?$m.x:x);
			$pyjs.track.lineno=50;
			$pyjs.track.lineno=50;
			var $pyjs__ret = a;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aFunctionReturningGlobalX3'].__name__ = 'aFunctionReturningGlobalX3';

		$m['aFunctionReturningGlobalX3'].__bind_type__ = 0;
		$m['aFunctionReturningGlobalX3'].__args__ = [null,null];
		$pyjs.track.lineno=52;
		$m['aFunctionReturningLocalX'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var x;
			$pyjs.track={module:'FunctionTest',lineno:52};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=52;
			$pyjs.track.lineno=53;
			x = 'local test';
			$pyjs.track.lineno=54;
			$pyjs.track.lineno=54;
			var $pyjs__ret = x;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aFunctionReturningLocalX'].__name__ = 'aFunctionReturningLocalX';

		$m['aFunctionReturningLocalX'].__bind_type__ = 0;
		$m['aFunctionReturningLocalX'].__args__ = [null,null];
		$pyjs.track.lineno=56;
		$m['aFunctionReturningArgX'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'FunctionTest',lineno:56};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=56;
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=57;
			var $pyjs__ret = x;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aFunctionReturningArgX'].__name__ = 'aFunctionReturningArgX';

		$m['aFunctionReturningArgX'].__bind_type__ = 0;
		$m['aFunctionReturningArgX'].__args__ = [null,null,['x']];
		$pyjs.track.lineno=59;
		$m['x'] = 'global test';
		$pyjs.track.lineno=61;
		$m['$$name'] = 'mapping-test';
		$pyjs.track.lineno=62;
		$m['$$call'] = function($$default, $$arguments, $$this, $$label) {
			if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
			if (typeof $$label == 'undefined') $$label=arguments.callee.__args__[5][1];
			var $$default,$$this,$$arguments,$$label;
			$pyjs.track={module:'FunctionTest',lineno:62};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=62;
			$pyjs.track.lineno=63;
			$pyjs.track.lineno=63;
			var $pyjs__ret = $p['tuple']([$m['$$name'], $$default, $$arguments, $$this, $$label]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['$$call'].__name__ = 'call';

		$m['$$call'].__bind_type__ = 0;
		$m['$$call'].__args__ = [null,null,['$$default'],['$$arguments'],['$$this'],['$$label', null]];
		$pyjs.track.lineno=65;
		$m['functionDefaults'] = function(s, l) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 2, arguments.length);
			if (typeof s == 'undefined') s=arguments.callee.__args__[2][1];
			if (typeof l == 'undefined') l=arguments.callee.__args__[3][1];
			var n,$add2,$add1,$len1;
			$pyjs.track={module:'FunctionTest',lineno:65};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=65;
			$pyjs.track.lineno=66;
			n = (($len1=l) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1)))));
			$pyjs.track.lineno=67;
			s = (typeof ($add1=s)==typeof ($add2=$p['sprintf']('%d', n)) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			$pyjs.track.lineno=68;
			l['append'](n);
			$pyjs.track.lineno=69;
			$pyjs.track.lineno=69;
			var $pyjs__ret = $p['tuple']([s, l]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['functionDefaults'].__name__ = 'functionDefaults';

		$m['functionDefaults'].__bind_type__ = 0;
		$m['functionDefaults'].__args__ = [null,null,['s', ''],['l', $p['list']([])]];
		$pyjs.track.lineno=71;
		$m['FunctionTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'FunctionTest';
			$cls_definition.__md5__ = '398b38299c29d6850e602274f47da00a';
			$pyjs.track.lineno=73;
			$method = $pyjs__bind_method2('testLambda', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1,ClassWithLambdas1,ClassWithLambdas2,$20,$pyjs_try_err,c,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$10,$11,$12,f,h,$13,$19,v;
				$pyjs.track={module:'FunctionTest', lineno:73};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=73;
				$pyjs.track.lineno=74;
				var 				$lambda1 = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'FunctionTest',lineno:74};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=74;
					$pyjs.track.lineno=74;
					$pyjs.track.lineno=74;
					var $pyjs__ret = x;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda1.__name__ = '$lambda1';

				$lambda1.__bind_type__ = 0;
				$lambda1.__args__ = [null,null,['x']];
				f = $lambda1;
				$pyjs.track.lineno=75;
				self['assertEqual'](f($constant_int_1), $constant_int_1);
				$pyjs.track.lineno=76;
				var 				$lambda2 = function(x) {
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
					if (typeof x == 'undefined') x=arguments.callee.__args__[2][1];

					$pyjs.track={module:'FunctionTest',lineno:76};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=76;
					$pyjs.track.lineno=76;
					$pyjs.track.lineno=76;
					var $pyjs__ret = x;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda2.__name__ = '$lambda2';

				$lambda2.__bind_type__ = 0;
				$lambda2.__args__ = [null,null,['x', $constant_int_1]];
				f = $lambda2;
				$pyjs.track.lineno=77;
				self['assertEqual'](f(), $constant_int_1);
				$pyjs.track.lineno=78;
				self['assertEqual'](f($constant_int_2), $constant_int_2);
				$pyjs.track.lineno=80;
				var 				$lambda3 = function(x, y) {
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
					var $mul2,$mul1;
					$pyjs.track={module:'FunctionTest',lineno:80};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=80;
					$pyjs.track.lineno=80;
					$pyjs.track.lineno=80;
					var $pyjs__ret = (typeof ($mul1=x)==typeof ($mul2=y) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda3.__name__ = '$lambda3';

				$lambda3.__bind_type__ = 0;
				$lambda3.__args__ = [null,null,['x'],['y']];
				f = $lambda3;
				$pyjs.track.lineno=81;
				self['assertEqual'](f($constant_int_2, $constant_int_3), $constant_int_6);
				$pyjs.track.lineno=82;
				var 				$lambda4 = function(x, y) {
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
					if (typeof y == 'undefined') y=arguments.callee.__args__[3][1];
					var $mul4,$mul3;
					$pyjs.track={module:'FunctionTest',lineno:82};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=82;
					$pyjs.track.lineno=82;
					$pyjs.track.lineno=82;
					var $pyjs__ret = (typeof ($mul3=x)==typeof ($mul4=y) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda4.__name__ = '$lambda4';

				$lambda4.__bind_type__ = 0;
				$lambda4.__args__ = [null,null,['x'],['y', $constant_int_4]];
				f = $lambda4;
				$pyjs.track.lineno=83;
				self['assertEqual'](f($constant_int_2), $constant_int_8);
				$pyjs.track.lineno=84;
				h = $m['Handler']($constant_int_5);
				$pyjs.track.lineno=85;
				var 				$lambda5 = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'FunctionTest',lineno:85};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=85;
					$pyjs.track.lineno=85;
					$pyjs.track.lineno=85;
					var $pyjs__ret = h['handle'](x);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda5.__name__ = '$lambda5';

				$lambda5.__bind_type__ = 0;
				$lambda5.__args__ = [null,null,['x']];
				f = $lambda5;
				$pyjs.track.lineno=86;
				self['assertTrue'](f($constant_int_5));
				$pyjs.track.lineno=87;
				self['assertFalse'](f($constant_int_4));
				$pyjs.track.lineno=89;
				var 				$lambda6 = function(a, b) {
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
					var kw = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
						kw = arguments[arguments.length+1];
					} else {
						delete kw['$pyjs_is_kwarg'];
					}
					if (typeof kw == 'undefined') {
						kw = $p['__empty_dict']();
						if (typeof b != 'undefined') {
							if (b !== null && typeof b['$pyjs_is_kwarg'] != 'undefined') {
								kw = b;
								b = arguments[2];
							}
						} else 						if (typeof a != 'undefined') {
							if (a !== null && typeof a['$pyjs_is_kwarg'] != 'undefined') {
								kw = a;
								a = arguments[2];
							}
						} else {
						}
					}
					if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];

					$pyjs.track={module:'FunctionTest',lineno:89};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=89;
					$pyjs.track.lineno=89;
					$pyjs.track.lineno=89;
					var $pyjs__ret = $p['tuple']([a, b, kw]);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda6.__name__ = '$lambda6';

				$lambda6.__bind_type__ = 0;
				$lambda6.__args__ = [null,['kw'],['a'],['b', $constant_int_1]];
				f = $lambda6;
				$pyjs.track.lineno=90;
				v = $pyjs_kwargs_call(null, f, null, null, [{b:$constant_int_2, c:$constant_int_3, a:$constant_int_1}]);
				$pyjs.track.lineno=91;
				self['assertEqual']((typeof ($1=v).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=92;
				self['assertEqual']((typeof ($3=v).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_1]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=93;
				self['assertEqual']((typeof ($7=(typeof ($5=v).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_2]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_2))).__array != 'undefined'?
					((typeof $7.__array[$8='c']) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__('c')), $constant_int_3);
				$pyjs.track.lineno=95;
				var 				$lambda7 = function(a, b) {
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

					if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];

					$pyjs.track={module:'FunctionTest',lineno:95};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=95;
					$pyjs.track.lineno=95;
					$pyjs.track.lineno=95;
					var $pyjs__ret = $p['tuple']([a, b, args]);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda7.__name__ = '$lambda7';

				$lambda7.__bind_type__ = 0;
				$lambda7.__args__ = ['args',null,['a'],['b', $constant_int_1]];
				f = $lambda7;
				$pyjs.track.lineno=96;
				v = f($constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4);
				$pyjs.track.lineno=97;
				self['assertEqual']((typeof ($11=(typeof ($9=v).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_2]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_2))).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=98;
				self['assertEqual']((typeof ($15=(typeof ($13=v).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_2]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_2))).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_1]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_1)), $constant_int_4);
				$pyjs.track.lineno=100;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=101;
					ClassWithLambdas1 = (function(){
						var $cls_definition = new Object();
						var $method;
						$cls_definition.__module__ = 'FunctionTest';
						$cls_definition.__md5__ = '74f3fb274ddc87ba33e57ed4683bb77a';
						$pyjs.track.lineno=102;
						var 						$lambda8 = function() {
							if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, null, arguments.length);
							var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

							var $17,$18;
							$pyjs.track={module:'FunctionTest',lineno:102};$pyjs.trackstack.push($pyjs.track);
							$pyjs.track.module='FunctionTest';
							$pyjs.track.lineno=102;
							$pyjs.track.lineno=102;
							$pyjs.track.lineno=102;
							var $pyjs__ret = (typeof ($17=args).__array != 'undefined'?
								((typeof $17.__array[$18=$constant_int_0]) != 'undefined'?$17.__array[$18]:
									$17.__getitem__($18)):
									$17.__getitem__($constant_int_0));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						};
						$lambda8.__name__ = '$lambda8';

						$lambda8.__bind_type__ = 0;
						$lambda8.__args__ = ['args',null];
						$cls_definition['f1'] = $p['list']([$lambda8]);
						$pyjs.track.lineno=101;
						var $bases = new Array(pyjslib.object);
						var $data = $p['dict']();
						for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
						return $p['_create_class']('ClassWithLambdas1', $p['tuple']($bases), $data);
					})();
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=106;
						c = ClassWithLambdas1();
						$pyjs.track.lineno=107;
						self['assertEqual']((typeof ($19=$p['getattr'](c, 'f1')).__array != 'undefined'?
							((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
								$19.__getitem__($20)):
								$19.__getitem__($constant_int_0))($constant_int_1), $constant_int_1, 'issue #385 - lambda function called as bound method');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='FunctionTest';
						if (true) {
							$pyjs.track.lineno=104;
							self['fail']('issue #385 - lambda in class definition');
						}
					}
				}
				$pyjs.track.lineno=109;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=110;
					ClassWithLambdas2 = (function(){
						var $cls_definition = new Object();
						var $method;
						$cls_definition.__module__ = 'FunctionTest';
						$cls_definition.__md5__ = '31e12591ad72031e156bf26cc69ea147';
						$pyjs.track.lineno=111;
						var 						$lambda9 = function() {
							if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, null, arguments.length);
							var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

							var $21,$22;
							$pyjs.track={module:'FunctionTest',lineno:111};$pyjs.trackstack.push($pyjs.track);
							$pyjs.track.module='FunctionTest';
							$pyjs.track.lineno=111;
							$pyjs.track.lineno=111;
							$pyjs.track.lineno=111;
							var $pyjs__ret = (typeof ($21=args).__array != 'undefined'?
								((typeof $21.__array[$22=$constant_int_0]) != 'undefined'?$21.__array[$22]:
									$21.__getitem__($22)):
									$21.__getitem__($constant_int_0));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						};
						$lambda9.__name__ = '$lambda9';

						$lambda9.__bind_type__ = 0;
						$lambda9.__args__ = ['args',null];
						$cls_definition['f2'] = $lambda9;
						$pyjs.track.lineno=110;
						var $bases = new Array(pyjslib.object);
						var $data = $p['dict']();
						for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
						return $p['_create_class']('ClassWithLambdas2', $p['tuple']($bases), $data);
					})();
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=115;
						c = ClassWithLambdas2();
						$pyjs.track.lineno=116;
						self['assertEqual'](c['f2']($constant_int_1), c, 'issue #385 - bound method lambda called as function');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='FunctionTest';
						if (true) {
							$pyjs.track.lineno=113;
							self['fail']('issue #385 - lambda in class definition');
						}
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLambda'] = $method;
			$pyjs.track.lineno=118;
			$method = $pyjs__bind_method2('test_callable', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'FunctionTest', lineno:118};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=118;
				$pyjs.track.lineno=119;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=120;
					self['assertEqual']($m['Callable']()(), $constant_int_5);
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
					$pyjs.track.module='FunctionTest';
					if (true) {
						$pyjs.track.lineno=122;
						self['fail']('Bug #572 Callable()() __call__ not supported');
					}
				}
				$pyjs.track.lineno=123;
				self['assertTrue']($p['callable']($m['Callable']));
				$pyjs.track.lineno=125;
				self['assertTrue']($p['callable']($m['Callable']()), 'Bug #572 callable(Callable()) __call__ not supported');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_callable'] = $method;
			$pyjs.track.lineno=129;
			$method = $pyjs__bind_method2('testProcedure', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'FunctionTest', lineno:129};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=129;
				$pyjs.track.lineno=130;
				self['assertTrue']($p['op_is']($m['aFunctionReturningNone'](), null), 'Function should return None');
				$pyjs.track.lineno=132;
				self['assertTrue']($p['op_is']($m['aProcedure'](), null), 'Procedures should always return None');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testProcedure'] = $method;
			$pyjs.track.lineno=135;
			$method = $pyjs__bind_method2('testVariableFunction', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'FunctionTest', lineno:135};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=135;
				$pyjs.track.lineno=136;
				self['assertEqual']($m['aFunctionReturningParam']('foo'), 'foo');
				$pyjs.track.lineno=137;
				self['assertEqual']($m['aFunctionReturningFunction']()('foo'), 'foo');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testVariableFunction'] = $method;
			$pyjs.track.lineno=139;
			$method = $pyjs__bind_method2('testLookup', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var expected_result1,expected_result2;
				$pyjs.track={module:'FunctionTest', lineno:139};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=139;
				$pyjs.track.lineno=140;
				expected_result1 = 'global test';
				$pyjs.track.lineno=141;
				expected_result2 = 'local test';
				$pyjs.track.lineno=142;
				self['assertEqual']($m['aFunctionReturningGlobalX1'](), expected_result1);
				$pyjs.track.lineno=143;
				self['assertEqual']($m['aFunctionReturningGlobalX2'](), expected_result1);
				$pyjs.track.lineno=144;
				self['assertEqual']($m['aFunctionReturningGlobalX3'](), expected_result1);
				$pyjs.track.lineno=145;
				self['assertEqual']($m['aFunctionReturningLocalX'](), expected_result2);
				$pyjs.track.lineno=146;
				self['assertEqual']($m['aFunctionReturningArgX']('test'), 'test');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLookup'] = $method;
			$pyjs.track.lineno=148;
			$method = $pyjs__bind_method2('testLookupLate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var late,local_lookup1,local_lookup3,local_lookup2,late_local;
				$pyjs.track={module:'FunctionTest', lineno:148};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=148;
				$pyjs.track.lineno=149;
				self['assertEqual']((typeof late_global == "undefined"?$m.late_global:late_global), 'late_global');
				$pyjs.track.lineno=151;
				local_lookup1 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $pyjs_try_err,e;
					$pyjs.track={module:'FunctionTest',lineno:151};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=151;
					$pyjs.track.lineno=152;
					self['assertEqual']((typeof late_local == "undefined"?$m.late_local:late_local), 'late_local');
					$pyjs.track.lineno=153;
					self['assertTrue']($p['callable']((typeof local_lookup2 == "undefined"?$m.local_lookup2:local_lookup2)));
					$pyjs.track.lineno=154;
					self['assertEqual']((typeof local_lookup2 == "undefined"?$m.local_lookup2:local_lookup2)(), 'late_local');
					$pyjs.track.lineno=155;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=156;
						(typeof local_lookup3 == "undefined"?$m.local_lookup3:local_lookup3)();
						$pyjs.track.lineno=157;
						self['fail']('lookup3');
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
						$pyjs.track.module='FunctionTest';
						if (($pyjs_try_err_name == $p['NotImplementedError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
							e = $pyjs_try_err;
							$pyjs.track.lineno=159;
							self['assertTrue'](true);
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				local_lookup1.__name__ = 'local_lookup1';

				local_lookup1.__bind_type__ = 0;
				local_lookup1.__args__ = [null,null];
				$pyjs.track.lineno=161;
				local_lookup2 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'FunctionTest',lineno:161};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=161;
					$pyjs.track.lineno=162;
					$pyjs.track.lineno=162;
					var $pyjs__ret = (typeof late_local == "undefined"?$m.late_local:late_local);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				local_lookup2.__name__ = 'local_lookup2';

				local_lookup2.__bind_type__ = 0;
				local_lookup2.__args__ = [null,null];
				$pyjs.track.lineno=164;
				local_lookup3 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'FunctionTest',lineno:164};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=164;
					$pyjs.track.lineno=165;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['NotImplementedError']);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				local_lookup3.__name__ = 'local_lookup3';

				local_lookup3.__bind_type__ = 0;
				local_lookup3.__args__ = [null,null];
				$pyjs.track.lineno=168;
				late_local = 'late_local';
				$pyjs.track.lineno=169;
				local_lookup1();
				$pyjs.track.lineno=171;
				late = $m['imports']['$$enum']['Late']['getLate']();
				$pyjs.track.lineno=172;
				self['assertEqual']($p['getattr'](late, 'value'), 'late');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLookupLate'] = $method;
			$pyjs.track.lineno=174;
			$method = $pyjs__bind_method2('testNameMapping', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $29,$28,$pyjs_try_err,$32,$25,$24,$27,$26,r,$30,$31,$23;
				$pyjs.track={module:'FunctionTest', lineno:174};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=174;
				$pyjs.track.lineno=175;
				r = $pyjs_kwargs_call(null, $m['$$call'], null, null, [{$$this:$constant_int_3, $$label:$constant_int_4}, $constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=176;
				self['assertEqual']((typeof ($23=r).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_0]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_0)), 'mapping-test');
				$pyjs.track.lineno=177;
				self['assertEqual']((typeof ($25=r).__array != 'undefined'?
					((typeof $25.__array[$26=$constant_int_1]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($constant_int_1)), $constant_int_1);
				$pyjs.track.lineno=178;
				self['assertEqual']((typeof ($27=r).__array != 'undefined'?
					((typeof $27.__array[$28=$constant_int_2]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__($constant_int_2)), $constant_int_2);
				$pyjs.track.lineno=179;
				self['assertEqual']((typeof ($29=r).__array != 'undefined'?
					((typeof $29.__array[$30=$constant_int_3]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__($constant_int_3)), $constant_int_3);
				$pyjs.track.lineno=180;
				self['assertEqual']((typeof ($31=r).__array != 'undefined'?
					((typeof $31.__array[$32=$constant_int_4]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__($constant_int_4)), $constant_int_4);
				$pyjs.track.lineno=181;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=182;
					self['assertEqual']((typeof Text == "undefined"?$m.Text:Text)('foo'), 'Text: foo');
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
					$pyjs.track.module='FunctionTest';
					if (true) {
						$pyjs.track.lineno=184;
						self['fail']('Bug #574: javascript keywords');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNameMapping'] = $method;
			$pyjs.track.lineno=186;
			$method = $pyjs__bind_method2('testFactory', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,pmc;
				$pyjs.track={module:'FunctionTest', lineno:186};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=186;
				$pyjs.track.lineno=188;
				$m['Factory2']['gregister']('passme', $m['PassMeAClass']);
				$pyjs.track.lineno=189;
				$m['Factory2']['gregister']('exchild', $m['ExampleChildClass']);
				$pyjs.track.lineno=190;
				$m['Factory2']['gregister']('mscp1', $m['ExampleMultiSuperclassParent1']);
				$pyjs.track.lineno=192;
				pmc = $m['Factory2']['ggetObject']('passme');
				$pyjs.track.lineno=193;
				self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
				$pyjs.track.lineno=195;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=196;
					pmc = $m['Factory2']['ggetObject']('mscp1', $constant_int_5);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=200;
						self['assertEqual']($p['getattr'](pmc, 'x'), $constant_int_5);
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='FunctionTest';
						if (true) {
							$pyjs.track.lineno=198;
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleMultiSuperclassParent1() arguments after ** must be a dictionary 5'");
						}
					}
				}
				$pyjs.track.lineno=201;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=202;
					pmc = $m['Factory2']['ggetObject']('exchild', $constant_int_5, $constant_int_7);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=206;
						self['assertEqual']($p['getattr'](pmc, 'prop_a'), $constant_int_1);
						$pyjs.track.lineno=207;
						self['assertEqual']($p['getattr'](pmc, 'prop_b'), $constant_int_7);
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='FunctionTest';
						if (true) {
							$pyjs.track.lineno=204;
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
						}
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFactory'] = $method;
			$pyjs.track.lineno=209;
			$method = $pyjs__bind_method2('testSliceFunc', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs.track={module:'FunctionTest', lineno:209};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=209;
				$pyjs.track.lineno=210;
				s = '123 ';
				$pyjs.track.lineno=211;
				s = $p['__getslice'](s, $constant_int_1, null)['rstrip']();
				$pyjs.track.lineno=212;
				self['assertEqual'](s, '23');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSliceFunc'] = $method;
			$pyjs.track.lineno=214;
			$method = $pyjs__bind_method2('testFunctionDefaults', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f,s,inittest,l;
				$pyjs.track={module:'FunctionTest', lineno:214};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=214;
				$pyjs.track.lineno=215;
				var $tupleassign1 = $p['__ass_unpack']($m['functionDefaults'](), 2, null);
				s = $tupleassign1[0];
				l = $tupleassign1[1];
				$pyjs.track.lineno=216;
				self['assertEqual'](s, '0');
				$pyjs.track.lineno=217;
				self['assertTrue']($p['op_eq'](l, $p['list']([$constant_int_0])), 'First mutable default mismatch');
				$pyjs.track.lineno=219;
				var $tupleassign2 = $p['__ass_unpack']($m['functionDefaults'](), 2, null);
				s = $tupleassign2[0];
				l = $tupleassign2[1];
				$pyjs.track.lineno=221;
				self['assertTrue']($p['op_eq'](l, $p['list']([$constant_int_0, $constant_int_1])), 'Second mutable default mismatch bug #214');
				$pyjs.track.lineno=223;
				inittest = $constant_int_1;
				$pyjs.track.lineno=224;
				f = function(inittest) {
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
					if (typeof inittest == 'undefined') inittest=arguments.callee.__args__[2][1];

					$pyjs.track={module:'FunctionTest',lineno:224};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=224;
					$pyjs.track.lineno=225;
					$pyjs.track.lineno=225;
					var $pyjs__ret = inittest;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				f.__name__ = 'f';

				f.__bind_type__ = 0;
				f.__args__ = [null,null,['inittest', inittest]];
				$pyjs.track.lineno=226;
				self['assertEqual'](f(), inittest);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFunctionDefaults'] = $method;
			$pyjs.track.lineno=228;
			$method = $pyjs__bind_method2('testKwargs', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f;
				$pyjs.track={module:'FunctionTest', lineno:228};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=228;
				$pyjs.track.lineno=229;
				f = function() {
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

					$pyjs.track={module:'FunctionTest',lineno:229};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=229;
					$pyjs.track.lineno=230;
					$pyjs.track.lineno=230;
					var $pyjs__ret = kwargs;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				f.__name__ = 'f';

				f.__bind_type__ = 0;
				f.__args__ = [null,['kwargs']];
				$pyjs.track.lineno=232;
				self['assertEqual'](f(), $p['dict']([]));
				$pyjs.track.lineno=233;
				self['assertEqual']($pyjs_kwargs_call(null, f, null, null, [{a:$constant_int_1}]), $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1}]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testKwargs'] = $method;
			$pyjs.track.lineno=235;
			$method = $pyjs__bind_method2('testFunctionDecorating', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var shiftdecorator,fn4,fn3,log,fn1,res,$49,$48,$43,$42,$41,$40,$47,$46,$45,$44,fn4d1,fn4d3,fn2,deco1,deco2,fn4d2,$38,$39,$36,$37,$34,$35,$33,$len2,$len3,$50,$51,$52;
				$pyjs.track={module:'FunctionTest', lineno:235};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=235;
				$pyjs.track.lineno=236;
				log = $p['list']([]);
				$pyjs.track.lineno=237;
				deco1 = function(f) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var fn;
					$pyjs.track={module:'FunctionTest',lineno:237};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=237;
					$pyjs.track.lineno=238;
					fn = function() {
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
						var res;
						$pyjs.track={module:'FunctionTest',lineno:238};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='FunctionTest';
						$pyjs.track.lineno=238;
						$pyjs.track.lineno=239;
						log['append']('deco1 begin');
						$pyjs.track.lineno=240;
						res = $pyjs_kwargs_call(null, f, args, kwargs, [{}]);
						$pyjs.track.lineno=241;
						log['append']('deco1 end');
						$pyjs.track.lineno=242;
						$pyjs.track.lineno=242;
						var $pyjs__ret = res;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					};
					fn.__name__ = 'fn';

					fn.__bind_type__ = 0;
					fn.__args__ = ['args',['kwargs']];
					$pyjs.track.lineno=243;
					$pyjs.track.lineno=243;
					var $pyjs__ret = fn;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				deco1.__name__ = 'deco1';

				deco1.__bind_type__ = 0;
				deco1.__args__ = [null,null,['f']];
				$pyjs.track.lineno=245;
				deco2 = function(f) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var fn;
					$pyjs.track={module:'FunctionTest',lineno:245};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=245;
					$pyjs.track.lineno=246;
					fn = function() {
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
						var res;
						$pyjs.track={module:'FunctionTest',lineno:246};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='FunctionTest';
						$pyjs.track.lineno=246;
						$pyjs.track.lineno=247;
						log['append']('deco2 begin');
						$pyjs.track.lineno=248;
						res = $pyjs_kwargs_call(null, f, args, kwargs, [{}]);
						$pyjs.track.lineno=249;
						log['append']('deco2 end');
						$pyjs.track.lineno=250;
						$pyjs.track.lineno=250;
						var $pyjs__ret = res;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					};
					fn.__name__ = 'fn';

					fn.__bind_type__ = 0;
					fn.__args__ = ['args',['kwargs']];
					$pyjs.track.lineno=251;
					$pyjs.track.lineno=251;
					var $pyjs__ret = fn;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				deco2.__name__ = 'deco2';

				deco2.__bind_type__ = 0;
				deco2.__args__ = [null,null,['f']];
				$pyjs.track.lineno=254;
				fn1 = function(a, b) {
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
					if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];

					$pyjs.track={module:'FunctionTest',lineno:254};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=254;
					$pyjs.track.lineno=255;
					$pyjs.track.lineno=255;
					var $pyjs__ret = $p['tuple']([a, b]);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn1.__name__ = 'fn1';

				fn1.__bind_type__ = 0;
				fn1.__args__ = [null,null,['a'],['b', $constant_int_0]];
				fn1 = deco1($p['staticmethod'](fn1));
				$pyjs.track.lineno=259;
				fn2 = function(a, b) {
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
					if (typeof b == 'undefined') b=arguments.callee.__args__[3][1];

					$pyjs.track={module:'FunctionTest',lineno:259};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=259;
					$pyjs.track.lineno=260;
					$pyjs.track.lineno=260;
					var $pyjs__ret = $p['tuple']([a, b]);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn2.__name__ = 'fn2';

				fn2.__bind_type__ = 0;
				fn2.__args__ = [null,null,['a'],['b', $constant_int_0]];
				fn2 = deco1(deco2($p['staticmethod'](fn2)));
				$pyjs.track.lineno=262;
				res = fn1($constant_int_1, $constant_int_2);
				$pyjs.track.lineno=263;
				self['assertEqual']((typeof ($33=res).__array != 'undefined'?
					((typeof $33.__array[$34=$constant_int_0]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__($constant_int_0)), $constant_int_1);
				$pyjs.track.lineno=264;
				self['assertEqual']((typeof ($35=res).__array != 'undefined'?
					((typeof $35.__array[$36=$constant_int_1]) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__($constant_int_1)), $constant_int_2);
				$pyjs.track.lineno=265;
				self['assertEqual']((($len2=log) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))), $constant_int_2);
				$pyjs.track.lineno=266;
				self['assertEqual']((typeof ($37=log).__array != 'undefined'?
					((typeof $37.__array[$38=$constant_int_0]) != 'undefined'?$37.__array[$38]:
						$37.__getitem__($38)):
						$37.__getitem__($constant_int_0)), 'deco1 begin');
				$pyjs.track.lineno=267;
				self['assertEqual']((typeof ($39=log).__array != 'undefined'?
					((typeof $39.__array[$40=$constant_int_1]) != 'undefined'?$39.__array[$40]:
						$39.__getitem__($40)):
						$39.__getitem__($constant_int_1)), 'deco1 end');
				$pyjs.track.lineno=269;
				log = $p['list']([]);
				$pyjs.track.lineno=270;
				res = $pyjs_kwargs_call(null, fn2, null, null, [{a:$constant_int_3}]);
				$pyjs.track.lineno=271;
				self['assertEqual']((typeof ($41=res).__array != 'undefined'?
					((typeof $41.__array[$42=$constant_int_0]) != 'undefined'?$41.__array[$42]:
						$41.__getitem__($42)):
						$41.__getitem__($constant_int_0)), $constant_int_3);
				$pyjs.track.lineno=272;
				self['assertEqual']((typeof ($43=res).__array != 'undefined'?
					((typeof $43.__array[$44=$constant_int_1]) != 'undefined'?$43.__array[$44]:
						$43.__getitem__($44)):
						$43.__getitem__($constant_int_1)), $constant_int_0);
				$pyjs.track.lineno=273;
				self['assertEqual']((($len3=log) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3))))), $constant_int_4);
				$pyjs.track.lineno=274;
				self['assertEqual']((typeof ($45=log).__array != 'undefined'?
					((typeof $45.__array[$46=$constant_int_0]) != 'undefined'?$45.__array[$46]:
						$45.__getitem__($46)):
						$45.__getitem__($constant_int_0)), 'deco1 begin');
				$pyjs.track.lineno=275;
				self['assertEqual']((typeof ($47=log).__array != 'undefined'?
					((typeof $47.__array[$48=$constant_int_1]) != 'undefined'?$47.__array[$48]:
						$47.__getitem__($48)):
						$47.__getitem__($constant_int_1)), 'deco2 begin');
				$pyjs.track.lineno=276;
				self['assertEqual']((typeof ($49=log).__array != 'undefined'?
					((typeof $49.__array[$50=$constant_int_2]) != 'undefined'?$49.__array[$50]:
						$49.__getitem__($50)):
						$49.__getitem__($constant_int_2)), 'deco2 end');
				$pyjs.track.lineno=277;
				self['assertEqual']((typeof ($51=log).__array != 'undefined'?
					((typeof $51.__array[$52=$constant_int_3]) != 'undefined'?$51.__array[$52]:
						$51.__getitem__($52)):
						$51.__getitem__($constant_int_3)), 'deco1 end');
				$pyjs.track.lineno=280;
				fn3 = function(x) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'FunctionTest',lineno:280};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=280;
					$pyjs.track.lineno=281;
					$pyjs.track.lineno=281;
					var $pyjs__ret = 'b';
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn3.__name__ = 'fn3';

				fn3.__bind_type__ = 0;
				fn3.__args__ = [null,null,['x']];
				fn3 = $m['imports']['decors']['othermoduledeco1']($p['staticmethod'](fn3));
				$pyjs.track.lineno=283;
				self['assertEqual'](fn3('b'), 'abc');
				$pyjs.track.lineno=285;
				shiftdecorator = function(si) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var wrapper;
					$pyjs.track={module:'FunctionTest',lineno:285};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=285;
					$pyjs.track.lineno=286;
					wrapper = function(fn) {
						if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						var decorated;
						$pyjs.track={module:'FunctionTest',lineno:286};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='FunctionTest';
						$pyjs.track.lineno=286;
						$pyjs.track.lineno=287;
						decorated = function() {
							if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, null, arguments.length);
							var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

							var kw = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
							if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
								if (typeof kw != 'undefined') args.__array.push(kw);
								kw = arguments[arguments.length+1];
							} else {
								delete kw['$pyjs_is_kwarg'];
							}
							if (typeof kw == 'undefined') {
								kw = $p['__empty_dict']();
{
								}
							}
							var $add3,$add4;
							$pyjs.track={module:'FunctionTest',lineno:287};$pyjs.trackstack.push($pyjs.track);
							$pyjs.track.module='FunctionTest';
							$pyjs.track.lineno=287;
							$pyjs.track.lineno=288;
							$pyjs.track.lineno=288;
							var $pyjs__ret = (typeof ($add3=$pyjs_kwargs_call(null, fn, args, kw, [{}]))==typeof ($add4=si) && (typeof $add3=='number'||typeof $add3=='string')?
								$add3+$add4:
								$p['op_add']($add3,$add4));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						};
						decorated.__name__ = 'decorated';

						decorated.__bind_type__ = 0;
						decorated.__args__ = ['args',['kw']];
						$pyjs.track.lineno=289;
						$pyjs.track.lineno=289;
						var $pyjs__ret = decorated;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					};
					wrapper.__name__ = 'wrapper';

					wrapper.__bind_type__ = 0;
					wrapper.__args__ = [null,null,['fn']];
					$pyjs.track.lineno=290;
					$pyjs.track.lineno=290;
					var $pyjs__ret = wrapper;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				shiftdecorator.__name__ = 'shiftdecorator';

				shiftdecorator.__bind_type__ = 0;
				shiftdecorator.__args__ = [null,null,['si']];
				$pyjs.track.lineno=292;
				fn4 = function(v) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'FunctionTest',lineno:292};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=292;
					$pyjs.track.lineno=293;
					$pyjs.track.lineno=293;
					var $pyjs__ret = v;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn4.__name__ = 'fn4';

				fn4.__bind_type__ = 0;
				fn4.__args__ = [null,null,['v']];
				$pyjs.track.lineno=296;
				fn4d1 = function(v) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'FunctionTest',lineno:296};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=296;
					$pyjs.track.lineno=297;
					$pyjs.track.lineno=297;
					var $pyjs__ret = v;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn4d1.__name__ = 'fn4d1';

				fn4d1.__bind_type__ = 0;
				fn4d1.__args__ = [null,null,['v']];
				fn4d1 = shiftdecorator($constant_int_1)($p['staticmethod'](fn4d1));
				$pyjs.track.lineno=299;
				fn4d2 = function(v) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

					$pyjs.track={module:'FunctionTest',lineno:299};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='FunctionTest';
					$pyjs.track.lineno=299;
					$pyjs.track.lineno=300;
					$pyjs.track.lineno=300;
					var $pyjs__ret = v;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn4d2.__name__ = 'fn4d2';

				fn4d2.__bind_type__ = 0;
				fn4d2.__args__ = [null,null,['v']];
				fn4d2 = shiftdecorator($constant_int_2)($p['staticmethod'](fn4d2));
				$pyjs.track.lineno=301;
				fn4d3 = shiftdecorator($constant_int_2)(fn4);
				$pyjs.track.lineno=303;
				self['assertEqual'](fn4d1($constant_int_1), $constant_int_2);
				$pyjs.track.lineno=304;
				self['assertEqual'](fn4d2($constant_int_1), $constant_int_3);
				$pyjs.track.lineno=305;
				self['assertEqual'](fn4d3($constant_int_1), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFunctionDecorating'] = $method;
			$pyjs.track.lineno=307;
			$method = $pyjs__bind_method2('testTopLevelContionalFunction', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '398b38299c29d6850e602274f47da00a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'FunctionTest', lineno:307};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='FunctionTest';
				$pyjs.track.lineno=307;
				$pyjs.track.lineno=308;
				self['assertEqual']($m['imports']['conditional_func'](), 'overridden');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTopLevelContionalFunction'] = $method;
			$pyjs.track.lineno=71;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('FunctionTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=310;
		$m['late_global'] = 'late_global';
		$pyjs.track.lineno=313;
		$m['Text'] = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'FunctionTest',lineno:313};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='FunctionTest';
			$pyjs.track.lineno=313;
			$pyjs.track.lineno=314;
			$pyjs.track.lineno=314;
			var $pyjs__ret = $p['str']($p['sprintf']('Text: %s', x));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['Text'].__name__ = 'Text';

		$m['Text'].__bind_type__ = 0;
		$m['Text'].__args__ = [null,null,['x']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end FunctionTest */


/* end module: FunctionTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'ClassTest.PassMeAClass', 'ClassTest', 'ClassTest.ExampleChildClass', 'ClassTest.ExampleMultiSuperclassParent1', 'Factory2', 'imports.decors', 'imports', 'imports.enum.Late', 'imports.enum']
*/
